Audit of `packages/multiple-select-vanilla`, 2026-10-04

Reviewed runtime TypeScript, utilities, services, locales, SCSS, and library build configuration at `8536d74`, including the user's pending removal of the third `createDomStructure()` argument. Demos, tests, and interface files were excluded from the audit. No repository files were edited during the original audit. The implementation record below documents the subsequently authorized changes.

The largest opportunities are selection lookup, virtual-row regeneration, and listener bookkeeping. Meaningful LOC reduction is likely to be measured in dozens of lines initially. Several high-value performance changes will add a little code. A target of removing hundreds of lines would encourage behavior changes or merely move code between files.

**Baseline and method**

| Source category | Files | Physical lines | Nonblank lines |
| --- | ---: | ---: | ---: |
| Core TypeScript, excluding locale and interface files | 8 | 3,048 | 2,675 |
| Locales and locale registry | 17 | 550 | 500 |
| SCSS | 4 | 672 | 613 |

These are physical source counts, including comments and inline type declarations; they are not executable statement counts. `MultipleSelectInstance.ts` accounts for 2,152 physical lines. Its contribution to the minified ESM bundle is 35,620 bytes, approximately 76% of the bundle.

A fresh in-memory esbuild production-style ESM build from source measured 46,661 bytes minified and 13,092 bytes gzip, without a source map or source-map trailer. The entry point tree-shakes correctly in a utility-only `isDefined` import: the resulting bundle contains only that utility. Non-English locales were absent from the main bundle.

Browser probes used Chromium 153.0.8010.12 and the current source bundled without minification, with SCSS freshly compiled in memory. No demo server was used. Most probes counted operations, which is more reliable than a single timing. Two membership-lookup comparisons alternated baseline and an in-memory Set variant five times on the same data. Their medians are local diagnostic results, not production guarantees or whole-application speedups. They cover simple string values and do not establish full compatibility for a future patch.

**1. High priority: quadratic selection membership searches**

Sources: [update()](https://github.com/ghiscoding/multiple-select-vanilla/blob/8536d748598c662beeb3137e62c81824c44d63ab/packages/multiple-select-vanilla/src/MultipleSelectInstance.ts#L1573), [setSelects()](https://github.com/ghiscoding/multiple-select-vanilla/blob/8536d748598c662beeb3137e62c81824c44d63ab/packages/multiple-select-vanilla/src/MultipleSelectInstance.ts#L1719).

Native multiple-select synchronization runs `selectedValues.some(...)` for every native option. `setSelects()` similarly calls `values.includes(...)` for each data row, sometimes twice to support canonical numeric strings. With N options and S requested/selected values, these membership checks cost O(N × S). For 10,000 distinct values that are all selected in order, a complete pass can perform roughly 50 million comparisons.

| Isolated browser operation | Current median | Set variant median |
| --- | ---: | ---: |
| Synchronize 10,000 selected native options, stable DOM | 1,571.6 ms | 6.0 ms |
| Call `setSelects()` with 10,000 already-selected values, no subsequent render | 719.2 ms | 1.0 ms |

Recommendation: construct a Set once per call and use membership lookup. Preserve `_value || value` and the existing numeric-string fallback exactly. Native option values remain strings; do not normalize all values with `String()`, which would change strict matching. This is the best first performance patch: small, localized, and independently measurable. It may add a line or two.

**2. High priority: a single virtual selection rebuilds all row descriptions**

Sources: [updateSelected()](https://github.com/ghiscoding/multiple-select-vanilla/blob/8536d748598c662beeb3137e62c81824c44d63ab/packages/multiple-select-vanilla/src/MultipleSelectInstance.ts#L1645), [getListRows()](https://github.com/ghiscoding/multiple-select-vanilla/blob/8536d748598c662beeb3137e62c81824c44d63ab/packages/multiple-select-vanilla/src/MultipleSelectInstance.ts#L574), [htmlDecode()](https://github.com/ghiscoding/multiple-select-vanilla/blob/8536d748598c662beeb3137e62c81824c44d63ab/packages/multiple-select-vanilla/src/utils/domUtils.ts#L248).

`updateSelected()` replaces `virtualScroll.rows` with `getListRows()` after an ordinary selection change. This recreates nested HtmlStruct objects and processes every visible label even though virtualization mounts only a cluster of roughly 200 rows.

Confirmed with `check('1')` on 10,000 options:

- 10,000 `initListItem()` calls.
- 10,001 temporary textarea creations: 10,000 label decodes plus the choice label.
- Three `getSelects()` passes for this programmatic check.
- Approximately 96 ms in the instrumented local probe; the operation counts are the stronger evidence.

Recommendation: separate changes to selection from changes to row content. Update cached row selection properties for affected rows and groups, or generate row descriptions on demand. Keep filtering/data replacement as explicit invalidation points. A larger change must account for `cssStyler`, sanitizers, HTML labels, mutable data, and callbacks whose results depend on selection. Do not simply delete the rebuild: offscreen rows would later render stale checkboxes. Reducing these repeated renders is preferable to broadly changing the HTML decoder for a small LOC gain.

**3. High priority: event registration has quadratic bookkeeping**

Sources: [hasBinding()](https://github.com/ghiscoding/multiple-select-vanilla/blob/8536d748598c662beeb3137e62c81824c44d63ab/packages/multiple-select-vanilla/src/services/binding-event.service.ts#L47), [events()](https://github.com/ghiscoding/multiple-select-vanilla/blob/8536d748598c662beeb3137e62c81824c44d63ab/packages/multiple-select-vanilla/src/MultipleSelectInstance.ts#L836).

With `distinctEvent: true`, each registration scans the full accumulated `_boundedEvents` array. Nonvirtual initialization measured:

| Options | `hasBinding()` calls | Record comparisons |
| --- | ---: | ---: |
| 200 | 208 | 21,528 |
| 1,000 | 1,008 | 507,528 |
| 5,000 | 5,008 | 12,537,528 |

One actual virtual-cluster transition from row 0 to row 150 performed 21,949 comparisons and 205 individual unbinds. The `events()` method also recreates stable handlers and queries stable controls on every transition.

Recommendation: introduce an efficient element/event lookup while keeping it synchronized with removal, then split stable-container binding from regenerated-row binding. Preserve the existing distinct-event semantics. Because `boundedEvents` exposes the live array, any index must account for that existing API rather than silently replacing its behavior. Delegated row events are a later option; they require deliberately preserving target/currentTarget, propagation, disabled controls, and callback order. A Map/WeakMap implementation may increase LOC while improving performance.

**4. Medium priority: repeated filter normalization**

Source: [filter()](https://github.com/ghiscoding/multiple-select-vanilla/blob/8536d748598c662beeb3137e62c81824c44d63ab/packages/multiple-select-vanilla/src/MultipleSelectInstance.ts#L1890).

Each row normalizes the same search term. A 10,000-row `filter('item')` probe normalized `item` 10,000 times, in addition to normalizing 10,000 labels. Filtering also rebuilds the matching row descriptions. The branch structure duplicates option-text processing for top-level and grouped options, including `.toString()` on values already produced by template literals.

Recommendation: normalize the query once for the built-in parser and factor repeated option filtering into a small local helper. Preserve the `parent` field only for grouped children and keep custom-filter invocation order. Custom `diacriticParser` callbacks currently run per row; hoisting them unconditionally would change observable call counts. Label caching needs invalidation for `setData()`, refresh, and externally mutable data, so it should be a separate decision.

**5. Medium priority: repeated scans and temporary arrays in selection state**

Sources: [initSelected()](https://github.com/ghiscoding/multiple-select-vanilla/blob/8536d748598c662beeb3137e62c81824c44d63ab/packages/multiple-select-vanilla/src/MultipleSelectInstance.ts#L780), [getSelects()](https://github.com/ghiscoding/multiple-select-vanilla/blob/8536d748598c662beeb3137e62c81824c44d63ab/packages/multiple-select-vanilla/src/MultipleSelectInstance.ts#L1689), [handleOnChange()](https://github.com/ghiscoding/multiple-select-vanilla/blob/8536d748598c662beeb3137e62c81824c44d63ab/packages/multiple-select-vanilla/src/MultipleSelectInstance.ts#L1175).

Group aggregation uses two `filter(...).length` allocations per group, followed by two more top-level filters for select-all state. `update()` obtains values, obtains text, and later obtains values again for the native select. `handleOnChange()` performs another text and value pass, even when the default callback does nothing.

Recommendation: count selected and eligible rows in existing loops, preserving the exact visibility, disabled, divider, and empty-group rules. Reuse selection snapshots only within a safe callback boundary; formatter/native-event/custom callbacks can mutate state, so a global cached snapshot is not automatically equivalent. A private shared finalization method can replace repeated `initSelected(); updateSelected(); update();` sequences while retaining their order and `ignoreTrigger` arguments.

The current runtime can store a numeric zero in group `selected`, and parsed optgroups can contain null entries from whitespace. An optimization must not casually replace these semantics with narrower assumptions taken from the interfaces.

**6. Medium priority: recursive keyboard skipping repeats work**

Sources: [moveHighlightDown()](https://github.com/ghiscoding/multiple-select-vanilla/blob/8536d748598c662beeb3137e62c81824c44d63ab/packages/multiple-select-vanilla/src/MultipleSelectInstance.ts#L1428), [moveHighlightUp()](https://github.com/ghiscoding/multiple-select-vanilla/blob/8536d748598c662beeb3137e62c81824c44d63ab/packages/multiple-select-vanilla/src/MultipleSelectInstance.ts#L1443).

The methods recurse for disabled rows, then call `highlightCurrentOption()` again at each stack level. Skipping eight consecutive disabled options called the highlight method nine times. That repeats DOM queries, `scrollIntoView()`, class updates, and 10 ms timers for the same final target. Very long disabled runs also increase stack depth.

Recommendation: scan the existing NodeList with a loop and apply highlighting once. Preserve virtual-cluster boundaries and infinite-scroll behavior explicitly. This can improve both LOC and performance without introducing a new abstraction.

**7. Lower priority: work on closed instances and repeated layout queries**

Sources: [body-click handler](https://github.com/ghiscoding/multiple-select-vanilla/blob/8536d748598c662beeb3137e62c81824c44d63ab/packages/multiple-select-vanilla/src/MultipleSelectInstance.ts#L274), [adjustDropSizeAndPosition()](https://github.com/ghiscoding/multiple-select-vanilla/blob/8536d748598c662beeb3137e62c81824c44d63ab/packages/multiple-select-vanilla/src/MultipleSelectInstance.ts#L1331), [getScrollbarWidth()](https://github.com/ghiscoding/multiple-select-vanilla/blob/8536d748598c662beeb3137e62c81824c44d63ab/packages/multiple-select-vanilla/src/MultipleSelectInstance.ts#L2100).

Every non-keep-open instance registers a body click handler that resolves the event target and walks ancestors before checking whether the instance is open. One body click on a closed instance called `getEventTarget()` four times. Resolve the target once and return early for closed instances before ancestor searches.

Auto-sizing mixes layout reads and writes and creates measurement elements each time scrollbar width is requested. Width-by-text also scans rendered labels on every open. Consider grouping geometry reads and avoiding repeated measurements within the same operation. These are source-level candidates; no browser layout trace or cross-browser benefit was measured. Persistent size caches require invalidation for styles, fonts, zoom, and container changes.

**8. Medium priority: unchanged partial options still cause full rebuilds**

Sources: [refreshOptions()](https://github.com/ghiscoding/multiple-select-vanilla/blob/8536d748598c662beeb3137e62c81824c44d63ab/packages/multiple-select-vanilla/src/MultipleSelectInstance.ts#L1670), [compareObjects()](https://github.com/ghiscoding/multiple-select-vanilla/blob/8536d748598c662beeb3137e62c81824c44d63ab/packages/multiple-select-vanilla/src/utils/utils.ts#L2).

`refreshOptions()` compares the full current options object against a partial update with `compareLength = true`. The key-count mismatch forces `destroy(false)` and `init()` even if every supplied property is unchanged. Confirmed: calling `refreshOptions({ width: 250 })` on an instance already configured with width 250 invoked `onDestroy` once.

Recommendation: check the supplied own keys against current values locally before rebuilding. Keep the public `compareObjects()` utility's existing contract separate. Suppressing unnecessary recreation also suppresses its lifecycle callbacks; treat this as a targeted behavior fix consistent with the method's existing early-return intent, not a silent LOC cleanup.

**Correctness findings that should be resolved before deeper virtual/event optimization**

1. **Virtual scroller retains a removed list.** [setData()](https://github.com/ghiscoding/multiple-select-vanilla/blob/8536d748598c662beeb3137e62c81824c44d63ab/packages/multiple-select-vanilla/src/MultipleSelectInstance.ts#L1812) removes/replaces the `<ul>` but reuses the existing virtual scroller. [Soft destroy](https://github.com/ghiscoding/multiple-select-vanilla/blob/8536d748598c662beeb3137e62c81824c44d63ab/packages/multiple-select-vanilla/src/MultipleSelectInstance.ts#L112) removes its listener but leaves the instance available for reuse during `refresh()`. Both public operations produced a replacement list with zero children in a 1,000-row probe; `virtualScroll.contentEl` still pointed to the old list. Recreate/rebind virtualization when the list element changes. Transitioning below the virtualization threshold also retains the old scroller; the ownership policy should cover that path.
2. **`reset(rows)` does not assign `this.rows`.** [VirtualScroll.reset()](https://github.com/ghiscoding/multiple-select-vanilla/blob/8536d748598c662beeb3137e62c81824c44d63ab/packages/multiple-select-vanilla/src/services/virtual-scroll.ts#L52) renders the new argument, but the scroll callback reads `this.rows`. A `setData()` probe retained `Item 0` in the cached rows after rendering `New 0` into the old list. Filtering happens to assign rows later through `updateSelected(rows)`; standalone reset and data replacement should not rely on that caller-specific repair.
3. **The virtual cache fallback empties the DOM before using it.** [initDOM()](https://github.com/ghiscoding/multiple-select-vanilla/blob/8536d748598c662beeb3137e62c81824c44d63ab/packages/multiple-select-vanilla/src/services/virtual-scroll.ts#L76) clears `contentEl` unconditionally. The later `lastChild` branch can therefore never update a spacer. Directly re-entering the protected method for an unchanged cluster changed 201 children to zero. Normal scrolling usually changes the cluster, so this probe establishes the broken branch rather than proving every scroll fails. Move clearing into the replacement path and define meaningful cache comparisons before removing the apparent dead branch.
4. **Event removal loses listener identity/options.** [unbind()](https://github.com/ghiscoding/multiple-select-vanilla/blob/8536d748598c662beeb3137e62c81824c44d63ab/packages/multiple-select-vanilla/src/services/binding-event.service.ts#L52) uses the result of `.find()` as the listener, but that result is the whole record. `unbind(el, 'click')` left the handler active in a browser probe. `unbindAll()` also omits the original capture flag: a handler registered with `capture: true` remained active after records were cleared. The component's usual explicit-listener, noncapturing path avoids these particular failures, but the service is publicly exported. NodeList/array-event matching also has inconsistencies visible in the source. Correct the removal contract before adding an index.

Additional lifecycle observation: `destroy()` does not clear a pending delayed-open timer. A callback still entered `openDrop()` after destruction; the existing missing-drop guard prevented reopening in that probe. Hard-destroy cleanup also deletes properties by option-key names rather than explicit ownership: `data` and `virtualScroll` are deleted, while `updateData`, `options.data`, and detached parent references can remain on a retained instance. This is a cleanup candidate, not evidence that an otherwise unreachable instance cannot be garbage-collected.

**Small LOC reductions worth considering**

| Location | Change | Assessment |
| --- | --- | --- |
| `utils/utils.ts:29` | Remove the `typeof obj === 'function'` branch in `deepCopy()` | Unreachable: functions already returned from the initial non-object guard. About four physical lines. |
| `MultipleSelectInstance.ts:637` | Remove the `isSingleWithoutRadioIcon` branch inside the optgroup checkbox path | That path already requires `single` to be false. Its radio-specific icon ternaries are likewise redundant under normal option values. |
| `MultipleSelectInstance.ts:1789`, `1822`, `1838`, `1853` | Share selection finalization | Small net reduction; preserve the three-call order and flags. Avoid a broad generic tree walker. |
| `MultipleSelectInstance.ts:1890` | Share repeated option filtering | Modest net reduction while keeping group-filter handling explicit. |
| `services/binding-event.service.ts:115` | Simplify the distinct-event condition | `!distinct || !hasBinding(...)` preserves short-circuit behavior. Small clarity win, negligible speed benefit. |
| `utils/utils.ts:50` | Simplify the empty-property predicate | `isDefined(val) || !clearProps.includes(name)` avoids the repeated `isDefined()` check and expresses the rule directly. Preserve zero/false and own-property/prototype behavior. |
| `MultipleSelectInstance.ts:1662` | Return early for `getOptions(false)` | Avoid spreading/deleting options when returning the live object; low-impact allocation reduction. |

Two additional virtual-scroll cleanup candidates require care: `rowsAbove` is calculated but unused by the library, and the same measurement node is appended three times, which moves one node rather than creating three. Audit the exported class/subclass contract before removing returned members. Decide whether measurement intends one sample or multiple samples before treating repeated appends as a simple deletion; DOM mutation records are observable.

**Areas where LOC reduction would offer little value or risk regressions**

- Locale modules are tiny and independently imported. A shared locale factory adds indirection and changes individual bundle tradeoffs; the current explicit formatters are easy to read. No worthwhile runtime optimization was identified there.
- SCSS variables, custom properties, selector names, and theme exports are part of customization behavior. The apparent repetition largely serves that surface. Sass compression and CSS minification already address transfer size. No measured style bottleneck justified restructuring them.
- `findParent()` currently returns the last matching ancestor and starts at the parent. Replacing it with `closest()` changes those semantics. Hoisting its regex parsing is a smaller candidate, but this helper is lower priority than avoiding calls for closed instances.
- Replacing all child removal with `replaceChildren()`, or all DOM construction with `innerHTML`, changes mutation/callback behavior or security/Trusted Types handling. These are not mechanical LOC reductions.
- Do not remove null-child guards, collapse visibility/disabled/divider rules into one generic predicate, remove prototype-safety checks, or replace public callback methods with generated methods solely to shrink source.
- File splitting may improve navigation but does not reduce total LOC or guarantee smaller bundles. The existing main entry already tree-shakes unrelated utilities correctly.
- The production build serially invokes esbuild for the main entry and locales. A multi-entry build is a separate build-time optimization; it is not an application runtime improvement and was not benchmarked here.

**Suggested implementation order**

1. Make the localized Set membership change and verify numeric/string/custom values and native selection behavior.
2. Fix virtual ownership/reset and event-removal correctness in separate focused changes.
3. Address virtual row regeneration and repeated event binding with explicit invalidation and callback behavior.
4. Simplify filter normalization and keyboard skipping.
5. Apply the small dead-code/duplication reductions after the behavior-sensitive changes settle.

For future implementations, use the repository-required lint, format, and TypeScript checks; targeted Playwright checks after each behavioral change; security checks for DOM-construction changes; package validation for exported surface changes; and the full Playwright suite for cross-cutting changes. The original audit ran fresh in-memory JS/SCSS builds and isolated Chromium probes. Subsequent implementation validation is recorded below.

**Implementation record, 2026-10-04**

The user authorized implementation after reviewing the audit. Baseline source links above are pinned to the audited commit; they deliberately describe the original behavior. The changes below are the completed implementation, and the raw baseline/post-change measurements are preserved in [2026-10-04-library-loc-perf.json](./2026-10-04-library-loc-perf.json).

| Finding | Implementation |
| --- | --- |
| Selection membership | A Set per operation replaces repeated membership searches in native synchronization and `setSelects()`. Numeric-string fallback and false/zero/NaN handling are covered by a browser regression. |
| Virtual row regeneration | Ordinary text option descriptions are reused when all rendering inputs match. Changed labels, selection, classes, disabled state, keys, values, and relevant options invalidate a row. Decoded strings are reused per instance. Initialization/data replacement/teardown clear the caches. Custom styling and HTML rendering retain their callback paths. A full snapshot scan remains O(N), but unchanged descriptions are reused. |
| Listener bookkeeping | Element/event counts provide indexed distinct checks. Capture options are retained privately, and removal now supports collections, event-name arrays, omitted callbacks, and record removal. Accessing the existing live `boundedEvents` array switches checks back to scanning so caller mutations remain visible. |
| Virtual event rebinding | Cluster transitions rebind only recreated row inputs; stable controls, keyboard/hover handlers, and list scroll handlers stay bound. |
| Filtering | The built-in query normalizes once per filter. Custom parsers retain per-row call order and frequency. Repeated option filtering shares a local helper, preserving grouped `parent` arguments and whitespace/null-child guards. |
| Selection aggregation | Counters replace temporary filtered arrays. A small finalization method preserves aggregate update, rendered update, native update, and callback ordering. Rendered input lookup uses a single local map instead of a selector search per row. Selection snapshots are not reused across callbacks. |
| Navigation | Disabled options are skipped in a loop, with highlighting performed once; virtual upward-boundary and infinite-scroll behavior remain explicit. |
| Closed instances | Body clicks return before target/ancestor traversal when closed. Event targets and ancestor-selector parsing are resolved once per operation. |
| Option updates | Unchanged partial `refreshOptions()` updates return without recreating the component. `getOptions(false)` avoids a discarded copy. |
| Virtual lifecycle | Replaced lists receive new scrollers. Falling below the threshold destroys the old scroller. Soft destruction clears the scroller reference. Resets retain replacement rows and valid data bounds, including empty arrays. Cache checks preserve unchanged mounted nodes and correctly manage bottom spacers. Measurement clears old list content before inserting its sample. Virtual selection bounds cover the final mounted row and grouped data. |
| Delayed open | Destruction cancels delayed opening and resolves the canceled Promise. Replacing a pending delayed open also settles its previous Promise. |
| Small LOC cleanup | The unreachable function branch in `deepCopy()`, unreachable group single-radio construction, redundant distinct-event expression, and repeated empty-property checks were removed/simplified. |

Persistent geometry/scrollbar caches, broad DOM rewrites, locale/style restructuring, build concurrency, and complete on-demand virtualization were not applied. These require separate measurement or would change customization/callback behavior. The original layout observations remain candidates, not confirmed bottlenecks. Hard-destroy reference cleanup beyond caches/timers/scrollers remains a separate ownership review.

**Measured result**

| Local probe | Original | Implemented |
| --- | ---: | ---: |
| One selection, 10,000 virtual text options | 96.0 ms | 8.8 ms |
| Temporary textareas during that selection | 10,001 | 0 |
| Filter matching 10,000 text options | 109.9 ms | 24.0 ms |
| Search-term normalizations during that filter | 10,000 | 1 |
| Check all 10,000 native options | 2,047.6 ms | 28.4 ms |
| Highlight calls when skipping eight disabled rows | 9 | 1 |
| Core TypeScript physical LOC | 3,048 | 3,128 |
| Minified ESM bytes, excluding source-map trailer | 46,661 | 48,293 |
| Gzip bytes | 13,092 | 13,732 |

The timing rows are single instrumented local probes using unminified source bundles; they illustrate the workload and are not repeated production benchmarks. The original five-run Set comparison is retained in the raw measurements. The post-change listener probe calls the real indexed lookup; its comparison-count field was removed because the old array-scan instrumentation would bypass the optimization. Algorithmic index behavior is supported by the implementation and functional binding regressions.

**Validation**

- `pnpm biome:lint:check`: passed.
- `pnpm biome:format:check`: passed.
- `pnpm exec tsc --noEmit --incremental false -p packages/multiple-select-vanilla/tsconfig.json`: passed.
- `pnpm build:lib`: passed.
- `pnpm test:security`: 11 passed.
- `pnpm build:demo`: passed; demo source was not changed.
- Targeted Playwright specifications: passed after resolving browser-test loader setup and a virtual measurement issue identified by the new tests.
- `pnpm test:e2e --workers=4`: 100 passed, including eight new library UI cases; default JUnit reporter/configuration retained.
- The first full run had two timeouts during Vite reloads caused by an overlapping library rebuild. Both affected specs passed in isolation; the stable full rerun passed all 100 tests.
- `pnpm are-types-wrong`: strict profile exited 1 for the package's CommonJS-to-ESM resolution restriction. `pnpm dlx @arethetypeswrong/cli --pack packages/multiple-select-vanilla --profile esm-only`: passed for Node ESM and bundler resolutions. Package export configuration remains unchanged.
- The library UI spec (`playwright/e2e/library-ui.spec.ts`) also received a targeted Biome check.
- `git diff --check`: passed.

The user's pending removal of the third `createDomStructure()` argument was preserved. Generated output was rebuilt by scripts and was not hand-edited. No publishing, versioning, commit, or release operation was performed.

**Follow-up simplification**

After the user requested a more minimal implementation, the twelve `rebindControls` checks in `events()` were consolidated into two blocks. Row input bindings and focus restoration retain their position between those blocks, preserving listener and focus callback ordering. `toggleOpen` is now created only when stable controls are bound. No helper method or additional cache state was introduced.

Physical library LOC remains 3,128. An in-memory esbuild comparison against the staged implementation, using the production minification, ESM format, and ES2022 target without source-map trailers, measured 48,293 → 48,264 bytes and 13,732 → 13,722 gzip bytes. The earlier timing probes were not repeated.

Follow-up validation: package-wide lint and formatting, library TypeScript, the library build, and `git diff --check` passed. The full browser suite passed 100/100 with `pnpm test:e2e --workers=4 --output=/tmp/msv-events-simplification-test-results`. The first run passed 96 tests but reported four missing trace/artifact files while a Playwright UI session was also using the default output directory; the isolated rerun passed every test. No new tests were added for this simplification.
