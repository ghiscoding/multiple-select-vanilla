import Events from './events/events.js';
import Example01 from './examples/example01.js';
import Example02 from './examples/example02.js';
import Example03 from './examples/example03.js';
import Example04 from './examples/example04.js';
import Example05 from './examples/example05.js';
import Example06 from './examples/example06.js';
import Example07 from './examples/example07.js';
import Example08 from './examples/example08.js';
import Example09 from './examples/example09.js';
import Example10 from './examples/example10.js';
import Example11 from './examples/example11.js';
import Example12 from './examples/example12.js';
import Example13 from './examples/example13.js';
import Example14 from './examples/example14.js';
import Example15 from './examples/example15.js';
import Example16 from './examples/example16.js';
import GettingStarted from './getting-started.js';
import I18n from './i18n/i18n.js';
import Methods01 from './methods/methods01.js';
import Methods02 from './methods/methods02.js';
import Methods03 from './methods/methods03.js';
import Methods04 from './methods/methods04.js';
import Methods05 from './methods/methods05.js';
import Methods06 from './methods/methods06.js';
import Methods07 from './methods/methods07.js';
import Methods08 from './methods/methods08.js';
import Methods09 from './methods/methods09.js';
import Methods10 from './methods/methods10.js';
import Methods11 from './methods/methods11.js';
import Methods12 from './methods/methods12.js';
import Options01 from './options/options01.js';
import Options02 from './options/options02.js';
import Options03 from './options/options03.js';
import Options04 from './options/options04.js';
import Options05 from './options/options05.js';
import Options06 from './options/options06.js';
import Options07 from './options/options07.js';
import Options08 from './options/options08.js';
import Options09 from './options/options09.js';
import Options10 from './options/options10.js';
import Options11 from './options/options11.js';
import Options12 from './options/options12.js';
import Options13 from './options/options13.js';
import Options14 from './options/options14.js';
import Options15 from './options/options15.js';
import Options16 from './options/options16.js';
import Options17 from './options/options17.js';
import Options18 from './options/options18.js';
import Options19 from './options/options19.js';
import Options20 from './options/options20.js';
import Options21 from './options/options21.js';
import Options22 from './options/options22.js';
import Options23 from './options/options23.js';
import Options24 from './options/options24.js';
import Options25 from './options/options25.js';
import Options26 from './options/options26.js';
import Options27 from './options/options27.js';
import Options28 from './options/options28.js';
import Options29 from './options/options29.js';
import Options30 from './options/options30.js';
import Options31 from './options/options31.js';
import Options32 from './options/options32.js';
import Options33 from './options/options33.js';
import Options34 from './options/options34.js';
import Options35 from './options/options35.js';
import Options36 from './options/options36.js';
import Options37 from './options/options37.js';
import Options38 from './options/options38.js';
import Options39 from './options/options39.js';
import Options40 from './options/options40.js';
import Options41 from './options/options41.js';
import Options42 from './options/options42.js';
import Options43 from './options/options43.js';

export const navbarRouting = [
  { name: 'getting-started', view: '/src/getting-started.html', viewModel: GettingStarted, title: 'Getting Started' },
  { name: 'examples', view: '/src/examples/example01.html', viewModel: Example01, title: 'Examples' },
];

export const exampleRouting = [
  {
    name: 'Welcomes',
    routes: [
      { name: 'example01', view: '/src/examples/example01.html', viewModel: Example01, title: 'Single Select' },
      { name: 'example02', view: '/src/examples/example02.html', viewModel: Example02, title: 'Multiple Select' },
      { name: 'example03', view: '/src/examples/example03.html', viewModel: Example03, title: 'Multiple Items' },
      { name: 'example04', view: '/src/examples/example04.html', viewModel: Example04, title: 'Auto Width' },
      { name: 'example05', view: '/src/examples/example05.html', viewModel: Example05, title: 'Disabled Select' },
      { name: 'example06', view: '/src/examples/example06.html', viewModel: Example06, title: 'Selected/Disabled Options' },
      { name: 'example07', view: '/src/examples/example07.html', viewModel: Example07, title: 'Submit Select' },
      { name: 'example08', view: '/src/examples/example08.html', viewModel: Example08, title: 'The Data' },
      { name: 'example09', view: '/src/examples/example09.html', viewModel: Example09, title: 'Locale' },
      { name: 'example10', view: '/src/examples/example10.html', viewModel: Example10, title: 'Large Select (Virtual Scroll)' },
      { name: 'example11', view: '/src/examples/example11.html', viewModel: Example11, title: 'Themes / Sizes' },
      { name: 'example12', view: '/src/examples/example12.html', viewModel: Example12, title: 'Checkbox/Radio Icons' },
      { name: 'example13', view: '/src/examples/example13.html', viewModel: Example13, title: 'Dynamically Create Select' },
      { name: 'example14', view: '/src/examples/example14.html', viewModel: Example14, title: 'The Divider' },
      { name: 'example15', view: '/src/examples/example15.html', viewModel: Example15, title: 'Dark Mode' },
      { name: 'example16', view: '/src/examples/example16.html', viewModel: Example16, title: 'Template with Images' },
    ],
  },
  {
    name: 'Options',
    routes: [
      { name: 'options01', view: '/src/options/options01.html', viewModel: Options01, title: 'The Placeholder' },
      { name: 'options02', view: '/src/options/options02.html', viewModel: Options02, title: 'Single Radio' },
      { name: 'options03', view: '/src/options/options03.html', viewModel: Options03, title: 'Hide Select All' },
      { name: 'options04', view: '/src/options/options04.html', viewModel: Options04, title: 'Hide Optgroup Checkboxes' },
      { name: 'options05', view: '/src/options/options05.html', viewModel: Options05, title: 'Custom Dropdown Width' },
      { name: 'options06', view: '/src/options/options06.html', viewModel: Options06, title: 'Max Height' },
      { name: 'options07', view: '/src/options/options07.html', viewModel: Options07, title: 'Max Height Unit' },
      { name: 'options08', view: '/src/options/options08.html', viewModel: Options08, title: 'The Position' },
      { name: 'options09', view: '/src/options/options09.html', viewModel: Options09, title: 'Display Values' },
      { name: 'options10', view: '/src/options/options10.html', viewModel: Options10, title: 'Display Title' },
      { name: 'options11', view: '/src/options/options11.html', viewModel: Options11, title: 'Display Delimiter' },
      { name: 'options12', view: '/src/options/options12.html', viewModel: Options12, title: 'Minimum Count Selected' },
      { name: 'options13', view: '/src/options/options13.html', viewModel: Options13, title: 'The Ellipsis' },
      { name: 'options14', view: '/src/options/options14.html', viewModel: Options14, title: 'Is Open' },
      { name: 'options15', view: '/src/options/options15.html', viewModel: Options15, title: 'Keep Open' },
      { name: 'options16', view: '/src/options/options16.html', viewModel: Options16, title: 'Open On Hover' },
      { name: 'options17', view: '/src/options/options17.html', viewModel: Options17, title: 'The Container' },
      { name: 'options18', view: '/src/options/options18.html', viewModel: Options18, title: 'The Filter' },
      { name: 'options19', view: '/src/options/options19.html', viewModel: Options19, title: 'Filter Only Optgroup' },
      { name: 'options20', view: '/src/options/options20.html', viewModel: Options20, title: 'Filter Placeholder' },
      { name: 'options21', view: '/src/options/options21.html', viewModel: Options21, title: 'Filter Accept On Enter' },
      { name: 'options22', view: '/src/options/options22.html', viewModel: Options22, title: 'Filter By Data Length' },
      { name: 'options23', view: '/src/options/options23.html', viewModel: Options23, title: 'Custom Filter' },
      { name: 'options24', view: '/src/options/options24.html', viewModel: Options24, title: 'Show Clear' },
      { name: 'options25', view: '/src/options/options25.html', viewModel: Options25, title: 'Show OK Button' },
      { name: 'options26', view: '/src/options/options26.html', viewModel: Options26, title: 'The Styler' },
      { name: 'options27', view: '/src/options/options27.html', viewModel: Options27, title: 'Text Template' },
      { name: 'options28', view: '/src/options/options28.html', viewModel: Options28, title: 'Label Template' },
      { name: 'options29', view: '/src/options/options29.html', viewModel: Options29, title: 'Auto-Adjust Drop Position' },
      { name: 'options30', view: '/src/options/options30.html', viewModel: Options30, title: 'Auto-Adjust Drop Height/Width' },
      { name: 'options31', view: '/src/options/options31.html', viewModel: Options31, title: 'Use Select Option as Label' },
      { name: 'options32', view: '/src/options/options32.html', viewModel: Options32, title: 'Sanitizer' },
      { name: 'options33', view: '/src/options/options33.html', viewModel: Options33, title: 'Classes' },
      { name: 'options34', view: '/src/options/options34.html', viewModel: Options34, title: 'Show Search Clear' },
      { name: 'options35', view: '/src/options/options35.html', viewModel: Options35, title: 'Custom Diacritic Parser' },
      { name: 'options36', view: '/src/options/options36.html', viewModel: Options36, title: 'Infinite Scroll' },
      { name: 'options37', view: '/src/options/options37.html', viewModel: Options37, title: 'Navigation Highlight' },
      { name: 'options38', view: '/src/options/options38.html', viewModel: Options38, title: 'Dark Mode' },
      { name: 'options39', view: '/src/options/options39.html', viewModel: Options39, title: 'Label Id (aria-labelledby)' },
      { name: 'options40', view: '/src/options/options40.html', viewModel: Options40, title: 'Pre-Filter Data' },
      { name: 'options41', view: '/src/options/options41.html', viewModel: Options41, title: 'Pre-Sort Data' },
      { name: 'options42', view: '/src/options/options42.html', viewModel: Options42, title: 'Lazy Load Data' },
      { name: 'options43', view: '/src/options/options43.html', viewModel: Options43, title: 'Close on Tab' },
    ],
  },
  {
    name: 'Methods',
    routes: [
      { name: 'methods01', view: '/src/methods/methods01.html', viewModel: Methods01, title: 'The getOptions' },
      { name: 'methods02', view: '/src/methods/methods02.html', viewModel: Methods02, title: 'The refreshOptions' },
      { name: 'methods03', view: '/src/methods/methods03.html', viewModel: Methods03, title: 'The setSelects/getSelects' },
      { name: 'methods04', view: '/src/methods/methods04.html', viewModel: Methods04, title: 'The enable/disable' },
      { name: 'methods05', view: '/src/methods/methods05.html', viewModel: Methods05, title: 'The open/close' },
      { name: 'methods06', view: '/src/methods/methods06.html', viewModel: Methods06, title: 'The check/uncheck' },
      { name: 'methods07', view: '/src/methods/methods07.html', viewModel: Methods07, title: 'The checkAll/uncheckAll' },
      { name: 'methods08', view: '/src/methods/methods08.html', viewModel: Methods08, title: 'The checkInvert' },
      { name: 'methods09', view: '/src/methods/methods09.html', viewModel: Methods09, title: 'The focus/blur' },
      { name: 'methods10', view: '/src/methods/methods10.html', viewModel: Methods10, title: 'The refresh' },
      { name: 'methods11', view: '/src/methods/methods11.html', viewModel: Methods11, title: 'The destroy' },
      { name: 'methods12', view: '/src/methods/methods12.html', viewModel: Methods12, title: 'The getData' },
    ],
  },
  {
    name: 'Events',
    routes: [{ name: 'events', view: '/src/events/events.html', viewModel: Events, title: 'The Events' }],
  },
  {
    name: 'I18N',
    routes: [{ name: 'i18n', view: '/src/i18n/i18n.html', viewModel: I18n, title: 'The i18n' }],
  },
];
