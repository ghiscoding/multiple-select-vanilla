import GettingStarted from './getting-started';
import Example01 from './examples/example01';
import Example02 from './examples/example02';
import Example03 from './examples/example03';
import Example04 from './examples/example04';
import Example05 from './examples/example05';
import Example06 from './examples/example06';
import Example07 from './examples/example07';
import Example08 from './examples/example08';
import Example09 from './examples/example09';
import Example10 from './examples/example10';
import Example11 from './examples/example11';
import Options01 from './options/options01';
import Options02 from './options/options02';
import Options03 from './options/options03';
import Options04 from './options/options04';
import Options05 from './options/options05';
import Options06 from './options/options06';
import Options07 from './options/options07';
import Options08 from './options/options08';
import Options09 from './options/options09';
import Options10 from './options/options10';
import Options11 from './options/options11';
import Options12 from './options/options12';
import Options13 from './options/options13';
import Options14 from './options/options14';
import Options15 from './options/options15';
import Options16 from './options/options16';
import Options17 from './options/options17';
import Options18 from './options/options18';
import Options19 from './options/options19';
import Options20 from './options/options20';
import Options21 from './options/options21';
import Options22 from './options/options22';
import Options23 from './options/options23';
import Options24 from './options/options24';
import Options25 from './options/options25';
import Options26 from './options/options26';
import Options27 from './options/options27';
import Methods01 from './methods/methods01';
import Methods02 from './methods/methods02';
import Methods03 from './methods/methods03';
import Methods04 from './methods/methods04';
import Methods05 from './methods/methods05';
import Methods06 from './methods/methods06';
import Methods07 from './methods/methods07';
import Methods08 from './methods/methods08';
import Methods09 from './methods/methods09';
import Methods10 from './methods/methods10';
import Methods11 from './methods/methods11';
import Events from './events/events';
import I18n from './i18n/i18n';

export const navbarRouting = [
  { name: 'gettingStarted', view: '/src/getting-started.html', viewModel: GettingStarted, title: 'Getting Started' },
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
      { name: 'example10', view: '/src/examples/example10.html', viewModel: Example10, title: 'Large Select' },
      { name: 'example11', view: '/src/examples/example11.html', viewModel: Example11, title: 'The Themes' },
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
      { name: 'options25', view: '/src/options/options25.html', viewModel: Options25, title: 'The Styler' },
      { name: 'options26', view: '/src/options/options26.html', viewModel: Options26, title: 'Text Template' },
      { name: 'options27', view: '/src/options/options27.html', viewModel: Options27, title: 'Label Template' },
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
