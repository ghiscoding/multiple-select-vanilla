# Change Log
## Visit the [Multiple-Select-Vanilla](https://github.com/ghiscoding/multiple-select-vanilla) GitHub project or take a look at the [Live Demo](https://ghiscoding.github.io/multiple-select-vanilla)

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.3.2](https://github.com/ghiscoding/multiple-select-vanilla/compare/v4.3.1...v4.3.2) (2025-06-19)

### Bug Fixes

* `event.composePath()` throws in Salesforce environment ([#390](https://github.com/ghiscoding/multiple-select-vanilla/issues/390)) ([fbbc405](https://github.com/ghiscoding/multiple-select-vanilla/commit/fbbc4057df13f9bd5fa02d6490bd729a939c403b)) - by @ghiscoding

## [4.3.1](https://github.com/ghiscoding/multiple-select-vanilla/compare/v4.3.0...v4.3.1) (2025-06-14)

### Bug Fixes

* when `closeOnTab` w/OK button, it should take 2 Tabs to close ([#388](https://github.com/ghiscoding/multiple-select-vanilla/issues/388)) ([9742825](https://github.com/ghiscoding/multiple-select-vanilla/commit/97428259c3098253a2cf47dbd8b2c4b7e3259975)) - by @ghiscoding

## [4.3.0](https://github.com/ghiscoding/multiple-select-vanilla/compare/v4.2.2...v4.3.0) (2025-06-14)

### Features

* add new `closeOnTab` option ([#387](https://github.com/ghiscoding/multiple-select-vanilla/issues/387)) ([4a5f7e4](https://github.com/ghiscoding/multiple-select-vanilla/commit/4a5f7e46f5a4f4ff746127d5c3ea9d34bf186f12)) - by @ghiscoding

## [4.2.2](https://github.com/ghiscoding/multiple-select-vanilla/compare/v4.2.1...v4.2.2) (2025-06-14)

### Bug Fixes

* add missing blur event and option types ([#386](https://github.com/ghiscoding/multiple-select-vanilla/issues/386)) ([3a489ed](https://github.com/ghiscoding/multiple-select-vanilla/commit/3a489edf6121c7d75293965554745097b0a0d9b9)) - by @ghiscoding

## [4.2.1](https://github.com/ghiscoding/multiple-select-vanilla/compare/v4.2.0...v4.2.1) (2025-06-14)

### Bug Fixes

* should call `onBlur` anytime Tab key is pressed ([#380](https://github.com/ghiscoding/multiple-select-vanilla/issues/380)) ([a4ca1ec](https://github.com/ghiscoding/multiple-select-vanilla/commit/a4ca1ec989d0b682df07dd4039d5b153894b7a0d)) - by @ghiscoding

## [4.2.0](https://github.com/ghiscoding/multiple-select-vanilla/compare/v4.1.4...v4.2.0) (2025-05-31)

### Features

* add `onChange` event whenever a selection changes, fix [#372](https://github.com/ghiscoding/multiple-select-vanilla/issues/372) ([#374](https://github.com/ghiscoding/multiple-select-vanilla/issues/374)) ([d2b94ed](https://github.com/ghiscoding/multiple-select-vanilla/commit/d2b94ed17f191c6befd2d38ffecfb934b1bc3adb)) - by @ghiscoding

### Bug Fixes

* normalize event data & remove null group items ([#376](https://github.com/ghiscoding/multiple-select-vanilla/issues/376)) ([0771895](https://github.com/ghiscoding/multiple-select-vanilla/commit/0771895a0de1898d10c9371b25bf39919e5586fa)) - by @ghiscoding

## [4.1.4](https://github.com/ghiscoding/multiple-select-vanilla/compare/v4.1.3...v4.1.4) (2025-05-09)

### Bug Fixes

* simplify more code and avoid reusing code (DRY) ([#368](https://github.com/ghiscoding/multiple-select-vanilla/issues/368)) ([4d3ea4e](https://github.com/ghiscoding/multiple-select-vanilla/commit/4d3ea4e9e8b979305230f11289bd1e4e588fa702)) - by @ghiscoding

## [4.1.3](https://github.com/ghiscoding/multiple-select-vanilla/compare/v4.1.2...v4.1.3) (2025-05-09)

### Bug Fixes

* simplify code and avoid reusing code (DRY) ([#367](https://github.com/ghiscoding/multiple-select-vanilla/issues/367)) ([47576b8](https://github.com/ghiscoding/multiple-select-vanilla/commit/47576b8ade242ab9ea4ed638de708cbbd3fd3a69)) - by @ghiscoding

## [4.1.2](https://github.com/ghiscoding/multiple-select-vanilla/compare/v4.1.1...v4.1.2) (2025-05-05)

### Bug Fixes

* remove unused functions ([1e2acb6](https://github.com/ghiscoding/multiple-select-vanilla/commit/1e2acb6df5be29e2a50cf8764284ac3eb99ab5ae)) - by @ghiscoding
* replace `deepCopy` with a simpler function ([#365](https://github.com/ghiscoding/multiple-select-vanilla/issues/365)) ([483762b](https://github.com/ghiscoding/multiple-select-vanilla/commit/483762bd60703042e79328a88b86787cfb3e4e48)) - by @ghiscoding

## [4.1.1](https://github.com/ghiscoding/multiple-select-vanilla/compare/v4.1.0...v4.1.1) (2025-05-03)

### Bug Fixes

* couple of issues related to lazy loading ([#363](https://github.com/ghiscoding/multiple-select-vanilla/issues/363)) ([3948b21](https://github.com/ghiscoding/multiple-select-vanilla/commit/3948b21d6ccede9228c04bd4f90bb2ecbffff485)) - by @ghiscoding
* make sure select drop list isn't null when adjusting drop width ([#364](https://github.com/ghiscoding/multiple-select-vanilla/issues/364)) ([aad8f64](https://github.com/ghiscoding/multiple-select-vanilla/commit/aad8f646f3f8c5b015956e9244995824486a1a96)) - by @ghiscoding

## [4.1.0](https://github.com/ghiscoding/multiple-select-vanilla/compare/v4.0.0...v4.1.0) (2025-05-01)

### Features

* add `lazyData` to lazy load only after clicking/opening select ([#361](https://github.com/ghiscoding/multiple-select-vanilla/issues/361)) ([f42ae19](https://github.com/ghiscoding/multiple-select-vanilla/commit/f42ae193618f0575d205f7ffecd7c11bdbe962ca)) - by @ghiscoding
* add new `preFilter` callback option ([#356](https://github.com/ghiscoding/multiple-select-vanilla/issues/356)) ([926c82c](https://github.com/ghiscoding/multiple-select-vanilla/commit/926c82c8c9cd456be915e0a0e2cb4820a333560b)) - by @ghiscoding
* add new `preSort` callback option, fixes [#355](https://github.com/ghiscoding/multiple-select-vanilla/issues/355) ([#358](https://github.com/ghiscoding/multiple-select-vanilla/issues/358)) ([0491b8d](https://github.com/ghiscoding/multiple-select-vanilla/commit/0491b8d9866433ef39ffe8d935cf04a23f6eab36)) - by @ghiscoding

### Bug Fixes

* remove open drop delay when changing data & add demo ([#351](https://github.com/ghiscoding/multiple-select-vanilla/issues/351)) ([8a1784f](https://github.com/ghiscoding/multiple-select-vanilla/commit/8a1784f5e310ec847f8776da85c5b9d781970536)) - by @ghiscoding

### Reverts

* Revert "chore: enable pnpm `shellEmulator` & remove `cross-env` (#352)" (#353) ([c706f03](https://github.com/ghiscoding/multiple-select-vanilla/commit/c706f030c1904a0fa43eb5ee9fa294952bb30d01)), closes [#352](https://github.com/ghiscoding/multiple-select-vanilla/issues/352) [#353](https://github.com/ghiscoding/multiple-select-vanilla/issues/353) - by @ghiscoding

## [4.0.0](https://github.com/ghiscoding/multiple-select-vanilla/compare/v3.5.0...v4.0.0) (2025-04-12)

### ⚠ BREAKING CHANGES

* build as ESM-Only, drop CJS (#348)

### Features

* build as ESM-Only, drop CJS ([#348](https://github.com/ghiscoding/multiple-select-vanilla/issues/348)) ([1cd1dd4](https://github.com/ghiscoding/multiple-select-vanilla/commit/1cd1dd439277879bdc4afcb4bacf8a4475c7fc80)) - by @ghiscoding

### Bug Fixes

* **deps:** update all non-major dependencies ([#349](https://github.com/ghiscoding/multiple-select-vanilla/issues/349)) ([781be20](https://github.com/ghiscoding/multiple-select-vanilla/commit/781be2093347b87672ceeced405c4008407ca882)) - by @renovate-bot

## [3.5.0](https://github.com/ghiscoding/multiple-select-vanilla/compare/v3.4.4...v3.5.0) (2025-03-12)

### Features

* add Indonesian locale ([#337](https://github.com/ghiscoding/multiple-select-vanilla/issues/337)) ([5216284](https://github.com/ghiscoding/multiple-select-vanilla/commit/5216284265ab449e64b1232f20a3a49cf0c183d6)) - by @ghiscoding

### Bug Fixes

* **deps:** update all non-major dependencies ([#319](https://github.com/ghiscoding/multiple-select-vanilla/issues/319)) ([5d69d3c](https://github.com/ghiscoding/multiple-select-vanilla/commit/5d69d3cff9f87db75cba4edd44a2980e12b0ba8d)) - by @renovate-bot

## [3.4.4](https://github.com/ghiscoding/multiple-select-vanilla/compare/v3.4.2...v3.4.4) (2024-10-26)

#### Bug Fixes
- remove ms-choice control border hover color ([ac26901f](https://github.com/ghiscoding/multiple-select-vanilla/commit/ac26901f2efa5f1ca6ba320b6792a861b7e29b6d))

## [3.4.3](https://github.com/ghiscoding/multiple-select-vanilla/compare/v3.4.2...v3.4.3) (2024-10-26)

**Note:** Version bump only for package multiple-select-vanilla

## [3.4.2](https://github.com/ghiscoding/multiple-select-vanilla/compare/v3.4.1...v3.4.2) (2024-10-25)

### Bug Fixes

* add missing div selector in previous CSS class name typo ([#310](https://github.com/ghiscoding/multiple-select-vanilla/issues/310)) ([1459f35](https://github.com/ghiscoding/multiple-select-vanilla/commit/1459f35cae0a4ed0a6e7b93ff5969cc2d002ce7d)) - by @ghiscoding

## [3.4.1](https://github.com/ghiscoding/multiple-select-vanilla/compare/v3.4.0...v3.4.1) (2024-10-24)

### Bug Fixes

* CSS class name typo for caret/close icon ([b0e5d4d](https://github.com/ghiscoding/multiple-select-vanilla/commit/b0e5d4ddf1decd4e7ffad8a717619505db692d45)) - by @ghiscoding

## [3.4.0](https://github.com/ghiscoding/multiple-select-vanilla/compare/v3.3.7...v3.4.0) (2024-10-23)

### Features

* support `@use` by replacing `@import` to fix SASS deprecations ([#308](https://github.com/ghiscoding/multiple-select-vanilla/issues/308)) ([186d21a](https://github.com/ghiscoding/multiple-select-vanilla/commit/186d21aaec993448881f4138976b17865c10d54a)) - by @ghiscoding

## [3.3.7](https://github.com/ghiscoding/multiple-select-vanilla/compare/v3.3.6...v3.3.7) (2024-10-12)

### Bug Fixes

* remove tsup, replace with esbuild + dts with tsc ([#307](https://github.com/ghiscoding/multiple-select-vanilla/issues/307)) ([21713a7](https://github.com/ghiscoding/multiple-select-vanilla/commit/21713a70054a16044d37ef9cc27c7a831f18c3db)) - by @ghiscoding

## [3.3.6](https://github.com/ghiscoding/multiple-select-vanilla/compare/v3.3.5...v3.3.6) (2024-10-05)

### Bug Fixes

* avoid barrel files, keep only 1 entry file ([#304](https://github.com/ghiscoding/multiple-select-vanilla/issues/304)) ([64e895b](https://github.com/ghiscoding/multiple-select-vanilla/commit/64e895b1aecefa9192a80711dd421fe4a5f0797c)) - by @ghiscoding

## [3.3.5](https://github.com/ghiscoding/multiple-select-vanilla/compare/v3.3.4...v3.3.5) (2024-10-04)

### Bug Fixes

* full CJS/ESM hybrid support with tsup ([#303](https://github.com/ghiscoding/multiple-select-vanilla/issues/303)) ([002e090](https://github.com/ghiscoding/multiple-select-vanilla/commit/002e09026ce2f11d959cbb224788780221ff908b)) - by @ghiscoding

## [3.3.4](https://github.com/ghiscoding/multiple-select-vanilla/compare/v3.3.3...v3.3.4) (2024-09-21)

### Bug Fixes

* improve hybrid exports ([cc622b1](https://github.com/ghiscoding/multiple-select-vanilla/commit/cc622b1df5eb8cb48477a0f2e9e8b3e6fd1b9693)) - by @ghiscoding
* SASS deprecated `lighten` and `darken` methods ([#301](https://github.com/ghiscoding/multiple-select-vanilla/issues/301)) ([1938720](https://github.com/ghiscoding/multiple-select-vanilla/commit/19387205c80c3e288fc50175c4bd8c23a5aa4713)) - by @ghiscoding

## [3.3.3](https://github.com/ghiscoding/multiple-select-vanilla/compare/v3.3.2...v3.3.3) (2024-09-03)

### Bug Fixes

* package export not detected as ESM in Vitest ([#297](https://github.com/ghiscoding/multiple-select-vanilla/issues/297)) ([6803609](https://github.com/ghiscoding/multiple-select-vanilla/commit/6803609fa8774fe027e15685732c767f35487921)) - by @ghiscoding

## [3.3.2](https://github.com/ghiscoding/multiple-select-vanilla/compare/v3.3.1...v3.3.2) (2024-08-17)

### Bug Fixes

* use setTimeout/setInterval from window object with correct TS type ([#294](https://github.com/ghiscoding/multiple-select-vanilla/issues/294)) ([95ba819](https://github.com/ghiscoding/multiple-select-vanilla/commit/95ba819469e9cdf6a58db50709fef575bfd6839f)) - by @ghiscoding

## [3.3.1](https://github.com/ghiscoding/multiple-select-vanilla/compare/v3.3.0...v3.3.1) (2024-08-17)

### Bug Fixes

* add missing TrustedHTML type ([#292](https://github.com/ghiscoding/multiple-select-vanilla/issues/292)) ([5411b67](https://github.com/ghiscoding/multiple-select-vanilla/commit/5411b679e92e2ad6a45f185560ba0fd9d98a2cfb)) - by @ghiscoding

## [3.3.0](https://github.com/ghiscoding/multiple-select-vanilla/compare/v3.2.2...v3.3.0) (2024-08-06)

### Features

* Added German locale ([667ceca](https://github.com/ghiscoding/multiple-select-vanilla/commit/667cecab2e08f02efd51d9027392e463af101a27)) - by @bigbozo

## [3.2.2](https://github.com/ghiscoding/multiple-select-vanilla/compare/v3.2.1...v3.2.2) (2024-05-23)

### Bug Fixes

* use `composedPath` instead of `target`, fixes [#278](https://github.com/ghiscoding/multiple-select-vanilla/issues/278) ([#279](https://github.com/ghiscoding/multiple-select-vanilla/issues/279)) ([3f473c3](https://github.com/ghiscoding/multiple-select-vanilla/commit/3f473c31422bc32eb8fa904a4a5f95d88a37dcf9)) - by @silvester-pari

## [3.2.1](https://github.com/ghiscoding/multiple-select-vanilla/compare/v3.2.0...v3.2.1) (2024-05-11)

### Bug Fixes

* only open drop when exists after open delay ([#277](https://github.com/ghiscoding/multiple-select-vanilla/issues/277)) ([866ee53](https://github.com/ghiscoding/multiple-select-vanilla/commit/866ee5302bf6b90621eb232b8863365d76d0fba3)) - by @ghiscoding

## [3.2.0](https://github.com/ghiscoding/multiple-select-vanilla/compare/v3.1.4...v3.2.0) (2024-05-08)

### Features

* add reason param to `onClose(reason)` ([#273](https://github.com/ghiscoding/multiple-select-vanilla/issues/273)) ([b3ae32f](https://github.com/ghiscoding/multiple-select-vanilla/commit/b3ae32fd4beeca419f3abe36a964423e68c33b57)) - by @ghiscoding

## [3.1.4](https://github.com/ghiscoding/multiple-select-vanilla/compare/v3.1.3...v3.1.4) (2024-05-07)

### Bug Fixes

* Escape key should always close drop ([#271](https://github.com/ghiscoding/multiple-select-vanilla/issues/271)) ([84e317b](https://github.com/ghiscoding/multiple-select-vanilla/commit/84e317bf56d5efca9f2a43e57877b4d48172a971)) - by @ghiscoding

## [3.1.3](https://github.com/ghiscoding/multiple-select-vanilla/compare/v3.1.2...v3.1.3) (2024-05-02)

### Bug Fixes

* remove column gap and leave it to be customizable by user ([#270](https://github.com/ghiscoding/multiple-select-vanilla/issues/270)) ([9db3fd4](https://github.com/ghiscoding/multiple-select-vanilla/commit/9db3fd476979dfa82afc2e02d8720c59265ddbcd)) - by @ghiscoding

## [3.1.2](https://github.com/ghiscoding/multiple-select-vanilla/compare/v3.1.1...v3.1.2) (2024-05-01)

### Bug Fixes

* better flex alignment of label span ([55ce09a](https://github.com/ghiscoding/multiple-select-vanilla/commit/55ce09ac04aa0a496255bd6f507fd987d8b07add)) - by @ghiscoding

## [3.1.1](https://github.com/ghiscoding/multiple-select-vanilla/compare/v3.1.0...v3.1.1) (2024-05-01)

### Bug Fixes

* better flex alignment of label span ([48c6fe9](https://github.com/ghiscoding/multiple-select-vanilla/commit/48c6fe997f76bcf7e35369148176d4c4d814d516)) - by @ghiscoding

## [3.1.0](https://github.com/ghiscoding/multiple-select-vanilla/compare/v3.0.0...v3.1.0) (2024-03-23)

### Features

* add new event `onFilterClear` missing ([#260](https://github.com/ghiscoding/multiple-select-vanilla/issues/260)) ([cb8923c](https://github.com/ghiscoding/multiple-select-vanilla/commit/cb8923c889b86fd09a6ef426d3e92da6b8a8d0b4)) - by @ghiscoding

### Bug Fixes

* add missing CSS/SASS variables for SVG icons ([cc11a8b](https://github.com/ghiscoding/multiple-select-vanilla/commit/cc11a8b1957de714a4e24e515e7361fe126c586b)) - by @ghiscoding
* select drop should equal same width as select button ([#259](https://github.com/ghiscoding/multiple-select-vanilla/issues/259)) ([6f854a1](https://github.com/ghiscoding/multiple-select-vanilla/commit/6f854a152eda9d1776ed153a0713f1d00d3230f3)) - by @ghiscoding
* tweak CSS and use same border color for both drop & button ([1f774d0](https://github.com/ghiscoding/multiple-select-vanilla/commit/1f774d0a020174ed80e85d3f60ce6acd4ab820eb)) - by @ghiscoding
* vscroll event mem leak causing unexpected behavior after filtering ([#261](https://github.com/ghiscoding/multiple-select-vanilla/issues/261)) ([74fed35](https://github.com/ghiscoding/multiple-select-vanilla/commit/74fed353fb1229f583fc87fb1f27742389e108f6)) - by @ghiscoding

## [3.0.0](https://github.com/ghiscoding/multiple-select-vanilla/compare/v2.2.1...v3.0.0) (2024-03-22)

### ⚠ BREAKING CHANGES

* remove deprecated options (#251)
* new Modern Look by using SVG icons (#247)

### Features

* add new `labelId` option for accessibility ([#254](https://github.com/ghiscoding/multiple-select-vanilla/issues/254)) ([f66852f](https://github.com/ghiscoding/multiple-select-vanilla/commit/f66852f8bc59c8e21a96c4d6e79ce2874a4b51dc)) - by @ghiscoding
* new Modern Look by using SVG icons ([#247](https://github.com/ghiscoding/multiple-select-vanilla/issues/247)) ([a89059f](https://github.com/ghiscoding/multiple-select-vanilla/commit/a89059fcb849dacc9f814e5f98f86019a7bdfc57)) - by @ghiscoding
* remove deprecated options ([#251](https://github.com/ghiscoding/multiple-select-vanilla/issues/251)) ([a25882f](https://github.com/ghiscoding/multiple-select-vanilla/commit/a25882f09e412efd17b510041d55b3b76c1d84b8)) - by @ghiscoding
* replace caret & clear icons by SVG icons ([#238](https://github.com/ghiscoding/multiple-select-vanilla/issues/238)) ([a5bc462](https://github.com/ghiscoding/multiple-select-vanilla/commit/a5bc462cc59e9ee8e0104dba87a188dc3b06d85c)) - by @ghiscoding

### Bug Fixes

* add `classNameToList()` function to remove extra spaces in classes ([#244](https://github.com/ghiscoding/multiple-select-vanilla/issues/244)) ([a0adf0c](https://github.com/ghiscoding/multiple-select-vanilla/commit/a0adf0c49085a28204b65257d6be817dd3447303)) - by @ghiscoding
* clicking Tab key should focus on OK btn or Shift+Tab to inverse ([1b06a99](https://github.com/ghiscoding/multiple-select-vanilla/commit/1b06a9997967a1fcdfc92d17fd38e145ef90911c)) - by @ghiscoding
* don't show pointer cursor when hovering disabled element ([#248](https://github.com/ghiscoding/multiple-select-vanilla/issues/248)) ([15caab9](https://github.com/ghiscoding/multiple-select-vanilla/commit/15caab92f0f4a386dd1b49de72041cb64ba5c7ab)) - by @ghiscoding
* flip icon vertically when select drop is open ([#240](https://github.com/ghiscoding/multiple-select-vanilla/issues/240)) ([1d74e26](https://github.com/ghiscoding/multiple-select-vanilla/commit/1d74e26f4a94d0a54fd03bf46c7cee32d4150cfa)) - by @ghiscoding
* infinite scroll with arrow navigation should work with short list ([#256](https://github.com/ghiscoding/multiple-select-vanilla/issues/256)) ([57f8d6a](https://github.com/ghiscoding/multiple-select-vanilla/commit/57f8d6a44108b0cf504a9bc62312895382aadcf8)) - by @ghiscoding
* nav highlight shouldn't follow mouse pos when using nav arrows ([#257](https://github.com/ghiscoding/multiple-select-vanilla/issues/257)) ([3c4950d](https://github.com/ghiscoding/multiple-select-vanilla/commit/3c4950d0b6ab0ecdf1b0efc8cd9ad413e8e334af)) - by @ghiscoding
* only add icon container element when actually used ([#250](https://github.com/ghiscoding/multiple-select-vanilla/issues/250)) ([7406bd3](https://github.com/ghiscoding/multiple-select-vanilla/commit/7406bd39eb17153f866dae977e114b978ffbcf78)) - by @ghiscoding
* select drop caret icon not flipping vertically when opened ([#243](https://github.com/ghiscoding/multiple-select-vanilla/issues/243)) ([42c87f7](https://github.com/ghiscoding/multiple-select-vanilla/commit/42c87f76954f3eabb0593a33cdf6cdb060dc487a)) - by @ghiscoding
* when using `showClear`, don't show btn unless having selection ([#245](https://github.com/ghiscoding/multiple-select-vanilla/issues/245)) ([28ad6b4](https://github.com/ghiscoding/multiple-select-vanilla/commit/28ad6b43ca9faf303f293b1102ccf511f8b4122d)) - by @ghiscoding

## [2.2.1](https://github.com/ghiscoding/multiple-select-vanilla/compare/v2.2.0...v2.2.1) (2024-03-08)

### Bug Fixes

* query DOM element without role for cross-platform compatibility ([#237](https://github.com/ghiscoding/multiple-select-vanilla/issues/237)) ([1a71fe4](https://github.com/ghiscoding/multiple-select-vanilla/commit/1a71fe4ba1dc41e369695fdf6d722868ce1e1791)) - by @ghiscoding

## [2.2.0](https://github.com/ghiscoding/multiple-select-vanilla/compare/v2.1.0...v2.2.0) (2024-03-05)

### Features

* add `navigationHighlight` to optionally disable built-in feature ([#235](https://github.com/ghiscoding/multiple-select-vanilla/issues/235)) ([9da0baa](https://github.com/ghiscoding/multiple-select-vanilla/commit/9da0baad5c036988751d5fdfa692fd9be89b8c8a)) - by @ghiscoding

## [2.1.0](https://github.com/ghiscoding/multiple-select-vanilla/compare/v2.0.2...v2.1.0) (2024-02-24)

### Features

* add Dark Mode option ([#232](https://github.com/ghiscoding/multiple-select-vanilla/issues/232)) ([d0f20e2](https://github.com/ghiscoding/multiple-select-vanilla/commit/d0f20e28240a8dcbe2fa05eefcf3f1df7dfd1fe1)) - by @ghiscoding

## [2.0.2](https://github.com/ghiscoding/multiple-select-vanilla/compare/v2.0.1...v2.0.2) (2024-02-22)

### Bug Fixes

* opening drop should focus on next available option only initially ([#229](https://github.com/ghiscoding/multiple-select-vanilla/issues/229)) ([a268e80](https://github.com/ghiscoding/multiple-select-vanilla/commit/a268e8093012c3dabfca8a865134da7688bd2270)) - by @ghiscoding

## [2.0.1](https://github.com/ghiscoding/multiple-select-vanilla/compare/v2.0.0...v2.0.1) (2024-02-22)

### Bug Fixes

* add SASS/CSS variable to remove drop outline ([#228](https://github.com/ghiscoding/multiple-select-vanilla/issues/228)) ([bf4fa0f](https://github.com/ghiscoding/multiple-select-vanilla/commit/bf4fa0f706ea2eddfd25bc423a224918ae92efd1)) - by @ghiscoding

## [2.0.0](https://github.com/ghiscoding/multiple-select-vanilla/compare/v1.2.5...v2.0.0) (2024-02-21)

### ⚠ BREAKING CHANGES

* export Locale as named exports (#219)
* change TS Types exports location (#218)
* replace arrow up/down direction tabIndex by highlight, fix #206 (#213)

### Features

* add `virtualScroll` option that could be disabled ([#225](https://github.com/ghiscoding/multiple-select-vanilla/issues/225)) ([d9f9fdb](https://github.com/ghiscoding/multiple-select-vanilla/commit/d9f9fdb9056b87e742b7ca2effae6b2e90482ebf)) - by @ghiscoding
* add new option `infiniteScroll` auto-scroll back to top ([#224](https://github.com/ghiscoding/multiple-select-vanilla/issues/224)) ([fb74e74](https://github.com/ghiscoding/multiple-select-vanilla/commit/fb74e741801b830cb0281e85da065f21fb99dc8b)) - by @ghiscoding
* change TS Types exports location ([#218](https://github.com/ghiscoding/multiple-select-vanilla/issues/218)) ([38d3142](https://github.com/ghiscoding/multiple-select-vanilla/commit/38d3142a6191c8c6ed5f6e137d2c0d8974334b57)) - by @ghiscoding
* export Locale as named exports ([#219](https://github.com/ghiscoding/multiple-select-vanilla/issues/219)) ([6eb57ce](https://github.com/ghiscoding/multiple-select-vanilla/commit/6eb57cefd8ed71af5c776cdd089c6df36f02524a)) - by @ghiscoding
* replace arrow up/down direction tabIndex by highlight, fix [#206](https://github.com/ghiscoding/multiple-select-vanilla/issues/206) ([#213](https://github.com/ghiscoding/multiple-select-vanilla/issues/213)) ([50be59c](https://github.com/ghiscoding/multiple-select-vanilla/commit/50be59c2fe1c4129141d5e082d4402e6da62a6ad)) - by @ghiscoding

### Bug Fixes

* use `ariaMultiSelectable` only with multiple select ([a39c535](https://github.com/ghiscoding/multiple-select-vanilla/commit/a39c5357ec4a94f363a6fee9ebc11461ac667844)) - by @ghiscoding

## [1.2.5](https://github.com/ghiscoding/multiple-select-vanilla/compare/v1.2.4...v1.2.5) (2024-01-31)

### Bug Fixes

* Virtual Scroll not working on large dataset w/HTML render enabled, fixes [#203](https://github.com/ghiscoding/multiple-select-vanilla/issues/203) ([#204](https://github.com/ghiscoding/multiple-select-vanilla/issues/204)) ([0f32e65](https://github.com/ghiscoding/multiple-select-vanilla/commit/0f32e65ab804ca089d945c8602d2e811f2df6f90)) - by @ghiscoding

## [1.2.4](https://github.com/ghiscoding/multiple-select-vanilla/compare/v1.2.3...v1.2.4) (2024-01-30)

### Bug Fixes

* **npm:** remove some files from npm publish ([c5f273e](https://github.com/ghiscoding/multiple-select-vanilla/commit/c5f273e18c7116ccafd69d361995be04e59aa269)) - by @ghiscoding

## [1.2.3](https://github.com/ghiscoding/multiple-select-vanilla/compare/v1.2.2...v1.2.3) (2024-01-30)

### Bug Fixes

* **npm:** do not npm publish tsconfig.tsbuildinfo ([6b3ab02](https://github.com/ghiscoding/multiple-select-vanilla/commit/6b3ab0295645ff062192729ee88984fc222461ae)) - by @ghiscoding

## [1.2.2](https://github.com/ghiscoding/multiple-select-vanilla/compare/v1.2.1...v1.2.2) (2024-01-30)

### Bug Fixes

* **npm:** do not npm publish tsconfig.tsbuildinfo ([2871d00](https://github.com/ghiscoding/multiple-select-vanilla/commit/2871d0086df6f794e4ce96403607b04df28f2a7b)) - by @ghiscoding

## [1.2.1](https://github.com/ghiscoding/multiple-select-vanilla/compare/v1.2.0...v1.2.1) (2024-01-30)

### Bug Fixes

* **npm:** publish src folder for source maps ([#202](https://github.com/ghiscoding/multiple-select-vanilla/issues/202)) ([a09d98a](https://github.com/ghiscoding/multiple-select-vanilla/commit/a09d98a7707b27d6c88cef2de861b2e3be420247)) - by @ghiscoding

## [1.2.0](https://github.com/ghiscoding/multiple-select-vanilla/compare/v1.1.3...v1.2.0) (2024-01-13)

### Features

* remove previous diacritic unicodes and add `diacriticParser` ([#190](https://github.com/ghiscoding/multiple-select-vanilla/issues/190)) ([aaa9d92](https://github.com/ghiscoding/multiple-select-vanilla/commit/aaa9d92ef71e9b1ab9d2ca41ae98de301e50d09f)) - by @ghiscoding

## [1.1.3](https://github.com/ghiscoding/multiple-select-vanilla/compare/v1.1.2...v1.1.3) (2023-12-30)

### Bug Fixes

* update repo structure & links + update deps ([aadb9d4](https://github.com/ghiscoding/multiple-select-vanilla/commit/aadb9d4a74543864b82389b3f229fe7f092f99a7)) - by @ghiscoding

## [1.1.2](https://github.com/ghiscoding/multiple-select-vanilla/compare/v1.1.1...v1.1.2) (2023-12-20)

### Bug Fixes

* don't use `Boolean()` for compatibility ([#183](https://github.com/ghiscoding/multiple-select-vanilla/issues/183)) ([52c9cc0](https://github.com/ghiscoding/multiple-select-vanilla/commit/52c9cc0617fb2c3ce35145e3fc9bf15f5a240e03)) - by @ghiscoding

## [1.1.1](https://github.com/ghiscoding/multiple-select-vanilla/compare/v1.1.0...v1.1.1) (2023-12-02)

### Bug Fixes

* add `aria-expanded` on ms-drop element, fixes [#178](https://github.com/ghiscoding/multiple-select-vanilla/issues/178) ([#179](https://github.com/ghiscoding/multiple-select-vanilla/issues/179)) ([1c2ccee](https://github.com/ghiscoding/multiple-select-vanilla/commit/1c2ccee7b744d5f654c4575da8b1b5732ee4938a)) - by @ghiscoding

## [1.1.0](https://github.com/ghiscoding/multiple-select-vanilla/compare/v1.0.3...v1.1.0) (2023-11-26)

### Features

* add tabindex to list item to control up/down arrow direction ([#176](https://github.com/ghiscoding/multiple-select-vanilla/issues/176)) ([763e13a](https://github.com/ghiscoding/multiple-select-vanilla/commit/763e13a7c0c511a21dd269e04988f8242d4f9c0a)) - by @ghiscoding

## 1.0.3 (2023-11-22)

**Note:** Version bump only for package multiple-select-vanilla

## [1.0.2](https://github.com/ghiscoding/multiple-select-vanilla/compare/v1.0.2-beta.4...v1.0.2) (2023-11-22)

**Note:** Version bump only for package multiple-select-vanilla

## [1.0.2-beta.4](https://github.com/ghiscoding/multiple-select-vanilla/compare/v1.0.2-beta.3...v1.0.2-beta.4) (2023-11-22)

### Bug Fixes

* package main export is using wrong file extension ([913f247](https://github.com/ghiscoding/multiple-select-vanilla/commit/913f247f56af7b7b7fe16493c8a9b8f58b343e2f)) - by @ghiscoding

## [1.0.2-beta.3](https://github.com/ghiscoding/multiple-select-vanilla/compare/v1.0.2-beta.2...v1.0.2-beta.3) (2023-11-22)

**Note:** Version bump only for package multiple-select-vanilla

## [1.0.2-beta.2](https://github.com/ghiscoding/multiple-select-vanilla/compare/v1.0.2-beta.1...v1.0.2-beta.2) (2023-11-22)

**Note:** Version bump only for package multiple-select-vanilla

## [1.0.2-beta.1](https://github.com/ghiscoding/multiple-select-vanilla/compare/v1.0.2-beta.0...v1.0.2-beta.1) (2023-11-22)

**Note:** Version bump only for package multiple-select-vanilla

## [1.0.2-beta.0](https://github.com/ghiscoding/multiple-select-vanilla/compare/v1.0.1...v1.0.2-beta.0) (2023-11-22)

### Bug Fixes

* revert to using `.js` for both CJS/ESM ([#173](https://github.com/ghiscoding/multiple-select-vanilla/issues/173)) ([fff2484](https://github.com/ghiscoding/multiple-select-vanilla/commit/fff2484593431cc52cc89d7fc6a00619bd62c14b)) - by @ghiscoding

## [1.0.1](https://github.com/ghiscoding/multiple-select-vanilla/compare/v1.0.0...v1.0.1) (2023-11-22)

**Note:** Version bump only for package multiple-select-vanilla

## 1.0.0 (2023-11-22)

### ⚠ BREAKING CHANGES

* default `.js` as ESM, CJS to `.cjs` & build target ES2021 (#171)

### Features

* default `.js` as ESM, CJS to `.cjs` & build target ES2021 ([#171](https://github.com/ghiscoding/multiple-select-vanilla/issues/171)) ([5e99b03](https://github.com/ghiscoding/multiple-select-vanilla/commit/5e99b0310c8d75a7ededb25da8f6f28e4e33e184)) - by @ghiscoding

## 0.6.4-beta.1 (2023-11-16)

**Note:** Version bump only for package multiple-select-vanilla

## 0.6.4-beta.0 (2023-11-16)

**Note:** Version bump only for package multiple-select-vanilla

## [0.6.3](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.6.2...v0.6.3) (2023-11-13)

### Bug Fixes

* `@types/trusted-types` should be lib dependency ([#162](https://github.com/ghiscoding/multiple-select-vanilla/issues/162)) ([946de83](https://github.com/ghiscoding/multiple-select-vanilla/commit/946de83fdba432e554831fdb42447ad174c11ae5)) - by @ghiscoding

## [0.6.2](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.6.1...v0.6.2) (2023-11-11)

### Bug Fixes

* adjust types & exports for all bundler ([#161](https://github.com/ghiscoding/multiple-select-vanilla/issues/161)) ([b4ad0ac](https://github.com/ghiscoding/multiple-select-vanilla/commit/b4ad0ac98edd49b0b82dbf5180b326c1d6602e33)) - by @ghiscoding

## [0.6.1](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.6.0...v0.6.1) (2023-11-10)

### Bug Fixes

* input checkbox value should always be included even when null ([#158](https://github.com/ghiscoding/multiple-select-vanilla/issues/158)) ([4d33cff](https://github.com/ghiscoding/multiple-select-vanilla/commit/4d33cff89a6bcbff347fe8bfbc6b6e6f75279202)) - by @ghiscoding

# [0.6.0](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.5.0...v0.6.0) (2023-11-10)

### Features

* add `cssStyler` option to use typed CSSStyleDeclaration props ([#148](https://github.com/ghiscoding/multiple-select-vanilla/issues/148)) ([8ad2b28](https://github.com/ghiscoding/multiple-select-vanilla/commit/8ad2b286cfde7a319ffeba6479a02800d76b89d2)) - by @ghiscoding
* add `showSearchClear` option to clear search input ([#147](https://github.com/ghiscoding/multiple-select-vanilla/issues/147)) ([32de6f2](https://github.com/ghiscoding/multiple-select-vanilla/commit/32de6f2d9844e0ddd71577276ada81af0dd4eb8b)) - by @ghiscoding
* replace all dynamic html strings by pure HTML elements ([#144](https://github.com/ghiscoding/multiple-select-vanilla/issues/144)) ([adcc33d](https://github.com/ghiscoding/multiple-select-vanilla/commit/adcc33da1ee29b33f66dec08e4e572f5b052ed51)) - by @ghiscoding
* VirtualScroll replace all html strings to pure HTML elements ([#146](https://github.com/ghiscoding/multiple-select-vanilla/issues/146)) ([8731387](https://github.com/ghiscoding/multiple-select-vanilla/commit/87313875f25b41caaf51e759cf261950977d112e)) - by @ghiscoding

### Performance Improvements

* don't recreate items list twice while filtering ([#154](https://github.com/ghiscoding/multiple-select-vanilla/issues/154)) ([5e58ceb](https://github.com/ghiscoding/multiple-select-vanilla/commit/5e58ceb4e02eee078437642715c48c1aa05af160)) - by @ghiscoding
* use array of html struct instead of plain HTML Element ([#153](https://github.com/ghiscoding/multiple-select-vanilla/issues/153)) ([6731228](https://github.com/ghiscoding/multiple-select-vanilla/commit/67312286b1053b4779376d1d6dfbb2b99c6a16a3)) - by @ghiscoding

# [0.5.0](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.4.11...v0.5.0) (2023-10-27)

### Bug Fixes

* updated onFilter event parameter to original search ([#140](https://github.com/ghiscoding/multiple-select-vanilla/issues/140)) ([02c1d45](https://github.com/ghiscoding/multiple-select-vanilla/commit/02c1d4564323f059d72bc0ae28c297073307f413)) - by @ghiscoding

### Features

* added `onBeforeClick` event ([#141](https://github.com/ghiscoding/multiple-select-vanilla/issues/141)) ([6b0cdb8](https://github.com/ghiscoding/multiple-select-vanilla/commit/6b0cdb87d102c3a2ac3af103020f4012c6eb4169)) - by @ghiscoding
* added locale ja-JP ([#139](https://github.com/ghiscoding/multiple-select-vanilla/issues/139)) ([d473bd9](https://github.com/ghiscoding/multiple-select-vanilla/commit/d473bd9a361f6c082927185d30b8469df2b8f281)) - by @ghiscoding

## [0.4.11](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.4.10...v0.4.11) (2023-10-25)

### Bug Fixes

* make sure source element exists when calling `findParent` on it ([#136](https://github.com/ghiscoding/multiple-select-vanilla/issues/136)) ([0d7c185](https://github.com/ghiscoding/multiple-select-vanilla/commit/0d7c18593ee9c6f65c4e3f90e02d50d211589905)) - by @ghiscoding

## [0.4.10](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.4.9...v0.4.10) (2023-09-08)

### Bug Fixes

* remove type module to support non-ESM, fixes [#123](https://github.com/ghiscoding/multiple-select-vanilla/issues/123) ([#126](https://github.com/ghiscoding/multiple-select-vanilla/issues/126)) ([63f2e82](https://github.com/ghiscoding/multiple-select-vanilla/commit/63f2e820b69f611d94043cc7e7c9ed84a1ce4209)) - by @ghiscoding

## [0.4.9](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.4.8...v0.4.9) (2023-08-22)

### Bug Fixes

* previous values should not be reused as selected values ([#121](https://github.com/ghiscoding/multiple-select-vanilla/issues/121)) ([46fb7cd](https://github.com/ghiscoding/multiple-select-vanilla/commit/46fb7cd397a259d40d4b89a28794a21119c493bf)) - by @ghiscoding

## [0.4.8](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.4.7...v0.4.8) (2023-08-22)

### Bug Fixes

* select option should compare full value not substring, fix [#115](https://github.com/ghiscoding/multiple-select-vanilla/issues/115) ([#119](https://github.com/ghiscoding/multiple-select-vanilla/issues/119)) ([79ce83d](https://github.com/ghiscoding/multiple-select-vanilla/commit/79ce83d712b23dcd40195e4d07f95172ffd08cd0)) - by @ghiscoding

## [0.4.7](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.4.5...v0.4.7) (2023-08-22)

### Bug Fixes

* select option should compare full value not substring, fix [#115](https://github.com/ghiscoding/multiple-select-vanilla/issues/115) ([#118](https://github.com/ghiscoding/multiple-select-vanilla/issues/118)) ([2ec33a7](https://github.com/ghiscoding/multiple-select-vanilla/commit/2ec33a7aa44be5d317a8e170308ca81b43619ede)) - by @ghiscoding

## [0.4.6](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.4.5...v0.4.6) (2023-08-22)

### Bug Fixes

* select option should compare full value not substring, fix [#115](https://github.com/ghiscoding/multiple-select-vanilla/issues/115) ([#118](https://github.com/ghiscoding/multiple-select-vanilla/issues/118)) ([2ec33a7](https://github.com/ghiscoding/multiple-select-vanilla/commit/2ec33a7aa44be5d317a8e170308ca81b43619ede)) - by @ghiscoding

## [0.4.5](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.4.4...v0.4.5) (2023-07-17)

### Bug Fixes

* CJS fallbacks should be at the end not at beginning ([#103](https://github.com/ghiscoding/multiple-select-vanilla/issues/103)) ([febdc9c](https://github.com/ghiscoding/multiple-select-vanilla/commit/febdc9ce81e1cbe446fdcce9a32de0cd7f08785c)) - by @ghiscoding

## [0.4.4](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.4.3...v0.4.4) (2023-06-28)

### Bug Fixes

* data collection shouldn't render label as html by default ([#86](https://github.com/ghiscoding/multiple-select-vanilla/issues/86)) ([50f4652](https://github.com/ghiscoding/multiple-select-vanilla/commit/50f465298795ee47b2b0dc55e0eb8a70a159f9b5)) - by @ghiscoding

## [0.4.3](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.4.2...v0.4.3) (2023-06-28)

### Bug Fixes

* replace some DOM Element method not supported in Salesforce ([#84](https://github.com/ghiscoding/multiple-select-vanilla/issues/84)) ([2617514](https://github.com/ghiscoding/multiple-select-vanilla/commit/2617514359e3349d6a4578dc38b24dc08048b9e6)) - by @ghiscoding

## [0.4.2](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.4.1...v0.4.2) (2023-06-27)

### Bug Fixes

* add missing repo links to package.json ([21c7a9d](https://github.com/ghiscoding/multiple-select-vanilla/commit/21c7a9dd66c5cb1d5be98ec3fce73a4a677cea34)) - by @ghiscoding

## [0.4.1](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.4.0...v0.4.1) (2023-06-27)

### Bug Fixes

* remove leftover console.log ([#83](https://github.com/ghiscoding/multiple-select-vanilla/issues/83)) ([e64351c](https://github.com/ghiscoding/multiple-select-vanilla/commit/e64351c39091ed4e16ea460fba4ff52116d78449)) - by @ghiscoding

# [0.4.0](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.3.1...v0.4.0) (2023-06-25)

### Features

* add cz-CS and da-DK locales ([#80](https://github.com/ghiscoding/multiple-select-vanilla/issues/80)) ([c74ce59](https://github.com/ghiscoding/multiple-select-vanilla/commit/c74ce59bf50429ef04e1211dba5549ef4dee8d38)) - by @ghiscoding

## [0.3.1](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.3.0...v0.3.1) (2023-05-18)

### Bug Fixes

* create DOM element util should spread element props ([#62](https://github.com/ghiscoding/multiple-select-vanilla/issues/62)) ([97d1d64](https://github.com/ghiscoding/multiple-select-vanilla/commit/97d1d64b9f511865814631a11639716679109dee)) - by @ghiscoding

# [0.3.0](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.2.9...v0.3.0) (2023-05-03)

### Features

* add CSS/SASS variables for ul > li vertical alignment ([#54](https://github.com/ghiscoding/multiple-select-vanilla/issues/54)) ([07ac9ab](https://github.com/ghiscoding/multiple-select-vanilla/commit/07ac9abba9324e348d854eb5f38526f58ae7a321)) - by @ghiscoding

## [0.2.9](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.2.8...v0.2.9) (2023-04-15)

**Note:** Version bump only for package multiple-select-vanilla

## [0.2.8](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.2.7...v0.2.8) (2023-03-23)

### Bug Fixes

* calling open() method multiple times should keep drop (re)open ([#33](https://github.com/ghiscoding/multiple-select-vanilla/issues/33)) ([c36cf45](https://github.com/ghiscoding/multiple-select-vanilla/commit/c36cf45e90e08ff3212813a42e30c7ead43b4d0a)) - by @ghiscoding

## [0.2.7](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.2.5...v0.2.7) (2023-03-11)

### Bug Fixes

* VirtualScroll and drop auto-width should work without timeout delay ([d030ecb](https://github.com/ghiscoding/multiple-select-vanilla/commit/d030ecb8a36c7fe806a12bbf60249278a7765e3f)) - by @ghiscoding

## [0.2.6](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.2.5...v0.2.6) (2023-03-11)

### Bug Fixes

* VirtualScroll and drop auto-width should work without timeout delay ([d030ecb](https://github.com/ghiscoding/multiple-select-vanilla/commit/d030ecb8a36c7fe806a12bbf60249278a7765e3f)) - by @ghiscoding

## [0.2.5](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.2.4...v0.2.5) (2023-03-11)

### Bug Fixes

* single select radio should work with empty label select option ([9b5c7ea](https://github.com/ghiscoding/multiple-select-vanilla/commit/9b5c7eac725216551251003603bcd2f0a8df79be)) - by @ghiscoding

## [0.2.4](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.2.2...v0.2.4) (2023-03-04)

### Bug Fixes

* when data array is null it shouldn't throw ([184dffa](https://github.com/ghiscoding/multiple-select-vanilla/commit/184dffa01bf9b061bd51bd386d968c9b5afb5b04)) - by @

## [0.2.2](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.2.1...v0.2.2) (2023-02-26)

### Bug Fixes

* few more fixes ([07cd40e](https://github.com/ghiscoding/multiple-select-vanilla/commit/07cd40e9c868a10f3edee94b439e0f2ef22ab69f)) - by @

## [0.2.1](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.2.0...v0.2.1) (2023-02-25)

### Bug Fixes

* multiple fixes identified after adding it to external project ([5e78f68](https://github.com/ghiscoding/multiple-select-vanilla/commit/5e78f689c1fed4fd630edfd56679d7d7299632b1)) - by @ghiscoding

# [0.2.0](https://github.com/ghiscoding/multiple-select-vanilla/compare/v0.1.0...v0.2.0) (2023-02-22)

### Features

* add `sanitizer` callback option to sanitize html code ([308a5fe](https://github.com/ghiscoding/multiple-select-vanilla/commit/308a5fe1d1e8cba4799ac86f2bd763303688f827)) - by @ghiscoding
* add new `useSelectOptionLabel` option ([145e955](https://github.com/ghiscoding/multiple-select-vanilla/commit/145e955e7b3fdd9ea172147842dd14e04e2204ab)) - by @ghiscoding
* add optional OK button for multiple selection ([13ed051](https://github.com/ghiscoding/multiple-select-vanilla/commit/13ed051f20c844a6b999d746498b644e804c3414)) - by @ghiscoding
* add SASS and CSS variables ([93ca2c2](https://github.com/ghiscoding/multiple-select-vanilla/commit/93ca2c25de24bb6e7b4dbd03fff81b69a061f46f)) - by @ghiscoding
* add string pattern options as alternative to override text formats ([c72148e](https://github.com/ghiscoding/multiple-select-vanilla/commit/c72148ed203c18f358377f802aa300a21a313073)) - by @ghiscoding
* auto-adjust height by available space & width by text content ([33df39f](https://github.com/ghiscoding/multiple-select-vanilla/commit/33df39f7837f64271411f6bddfad7a6a07f2cbb9)) - by @ghiscoding
* provide demo with Font-Awesome checkbox/radio icons ([b6c0bae](https://github.com/ghiscoding/multiple-select-vanilla/commit/b6c0bae30ab97893fb7a10f72100cc8aa0d938a5)) - by @ghiscoding
* separate all locales into separate files for better tree shaking ([da064e6](https://github.com/ghiscoding/multiple-select-vanilla/commit/da064e67c65ae96e42897625d850f96480837acd)) - by @ghiscoding

# 0.1.0 (2023-01-13)

### Bug Fixes

* calling ms() twice should only create 1 instance, also fix destroy ([c397f30](https://github.com/ghiscoding/multiple-select-vanilla/commit/c397f30c24e6a5b1038593b3fcd93cf61e1c27dd)) - by @ghiscoding

### Features

* initial commit rewritten & working in pure JS ([0b7f69b](https://github.com/ghiscoding/multiple-select-vanilla/commit/0b7f69bbb6b4bafec8b2b872b3db5eab6e2c3843)) - by @ghiscoding
