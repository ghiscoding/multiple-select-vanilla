var Pl=Object.defineProperty;var Hl=(e,t,n)=>t in e?Pl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var u=(e,t,n)=>Hl(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Bl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Events
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/events/events.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/events/events.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Multiple Select has some callback events.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Events </label>

    <div class="col-sm-10">
      <textarea class="form-control" readonly rows="10" style="background-color: #f0f0f0"></textarea>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Group Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <optgroup label="Group 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
        </optgroup>
      </select>
    </div>
  </div>
</div>
`,Fl=`<div class="row">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Single Select
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example01.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example01.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Single select without any options.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select</label>

    <div class="col-sm-10">
      <select class="full-width">
        <option value="1">First</option>
        <option value="2">Second</option>
        <option value="3">Third</option>
        <option value="4">Fourth</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Multiple Select</label>

    <div class="col-sm-10">
      <select class="multiple-select full-width" data-test="select1">
        <option value="1">First</option>
        <option value="2">Second</option>
        <option value="3">Third</option>
        <option value="4">Fourth</option>
      </select>
    </div>
  </div>

  <hr />

  <div class="mb-3 row">
    <label class="col-sm-2">Group Select</label>

    <div class="col-sm-10">
      <select class="full-width">
        <optgroup label="Group 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
        </optgroup>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Multiple Select</label>

    <div class="col-sm-10">
      <select class="multiple-select full-width" data-test="select2">
        <optgroup label="Group 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
        </optgroup>
      </select>
    </div>
  </div>
</div>

<div class="my-5 offset-sm-1 col-sm-10">
  <hr />
</div>

<div class="row mt-4">
  <label class="col-sm-2">Code Sample</label>
  <div class="col-sm-10 col-lg-8">
    <iframe
      style="height: 100%; width: 60%; position: absolute"
      src="data:text/html;charset=utf-8,
      <head><base target='_blank' /></head>
      <body><script src='https://gist.github.com/ghiscoding/d9136bb871e43cf93da6b58cd3e1ccfe.js'><\/script>
      </body>"
    >
    </iframe>
  </div>
</div>
`,Gl=`<div class="row">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Multiple Select
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example02.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example02.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Multiple select without any options.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Multiple Select</label>

    <div class="col-sm-10">
      <select multiple="multiple" class="multiple-select full-width" data-test="select1">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <hr />

  <div class="mb-3 row">
    <label class="col-sm-2"> Group Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <optgroup label="Group 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
        </optgroup>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Multiple Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="multiple-select full-width" data-test="select2">
        <optgroup label="Group 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
        </optgroup>
      </select>
    </div>
  </div>
</div>
`,Ul=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Multiple Items
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example03.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example03.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>multiple</code> and <code>multipleWidth</code> options to enable multiple items.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select</label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select1">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Group Select</label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select2">
        <optgroup label="Group 1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
        </optgroup>
      </select>
    </div>
  </div>
</div>
`,jl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Auto Width
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example04.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example04.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Auto width by default without setting width style.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-3"> Auto width </label>

    <div class="col-sm-9">
      <select class="select" data-test="select1">
        <option value="1">First</option>
        <option value="2">Second</option>
        <option value="3">Third</option>
        <option value="4">Fourth</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-3"> Data width </label>

    <div class="col-sm-9">
      <select class="data" data-test="select2"></select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-3"> Large width </label>

    <div class="col-sm-9">
      <select class="select" data-test="select3">
        <option value="1">This is the first option and value is 1</option>
        <option value="2">This is the second option and value is 2</option>
        <option value="3">This is the third option and value is 3</option>
        <option value="4">This is the fourth option and value is 4</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-3"> Dropdown width </label>

    <div class="col-sm-9">
      <select class="select" data-test="select4" data-width="200">
        <option value="1">This is the first option and value is 1</option>
        <option value="2">This is the second option and value is 2</option>
        <option value="3">This is the third option and value is 3</option>
        <option value="4">This is the fourth option and value is 4</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-3"> Group Select </label>

    <div class="col-sm-9">
      <select class="select" data-test="select5" multiple="multiple">
        <optgroup label="Group 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
        </optgroup>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-3"> Large Group </label>

    <div class="col-sm-9">
      <select class="select" data-test="select6" multiple="multiple">
        <optgroup label="This is group 1">
          <option value="1">This is option 1</option>
          <option value="2">This is option 2</option>
          <option value="3">This is option 3</option>
        </optgroup>
        <optgroup label="This is group 2">
          <option value="4">This is option 4</option>
          <option value="5">This is option 5</option>
          <option value="6">This is option 6</option>
        </optgroup>
        <optgroup label="This is group 3">
          <option value="7">This is option 7</option>
          <option value="8">This is option 8</option>
          <option value="9">This is option 9</option>
        </optgroup>
      </select>
    </div>
  </div>
</div>
`,Wl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Disabled Select
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example05.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example05.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Show a disabled select width <code>disabled</code> attribute.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Disabled Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" disabled="disabled" class="full-width">
        <option value="1" selected>January</option>
        <option value="2">February</option>
        <option value="3" selected>March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>
</div>
`,Jl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Selected/Disabled Options
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example06.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example06.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Selected or Disabled options.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-testid="select1">
        <option value="1" selected="selected">January</option>
        <option value="2" disabled="disabled">February</option>
        <option value="3" selected="selected" disabled="disabled">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Group Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-selectid="select2">
        <optgroup label="Group 1" disabled="disabled">
          <option value="1" selected>Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5" selected>Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7" disabled="disabled">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
        </optgroup>
      </select>
    </div>
  </div>
</div>
`,Vl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Submit Select
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example07.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example07.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Submit select with <code>name</code> attribute in form.</div>
  </div>
</div>

<div>
  <form>
    <div class="mb-3 row">
      <label class="col-sm-2"> Single Select </label>

      <div class="col-sm-10">
        <select name="select1" class="full-width">
          <option value="1">First</option>
          <option value="2">Second</option>
          <option value="3">Third</option>
          <option value="4">Fourth</option>
        </select>
      </div>
    </div>

    <div class="mb-3 row">
      <label class="col-sm-2"> Multiple Select </label>

      <div class="col-sm-10">
        <select name="select2" class="full-width" data-test="select2" multiple required>
          <option value="1">First</option>
          <option value="2">Second</option>
          <option value="3">Third</option>
          <option value="4">Fourth</option>
        </select>
      </div>
    </div>

    <div class="mb-3 row">
      <div class="col-sm-10 offset-sm-2">
        <button type="button" class="btn btn-primary submit7" data-testid="submit">Submit</button>
      </div>
    </div>
  </form>
</div>
`,ql=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Data
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example08.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example08.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>data</code> as data source.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Array </label>

    <div class="col-sm-10">
      <select id="basic" class="full-width" multiple></select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Object </label>

    <div class="col-sm-10">
      <select id="object" class="full-width" multiple></select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> String Array </label>

    <div class="col-sm-10">
      <select id="string" class="full-width" multiple></select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Number Array </label>

    <div class="col-sm-10">
      <select id="number" class="full-width" multiple></select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Group Array </label>

    <div class="col-sm-10">
      <select id="group" class="full-width" multiple></select>
    </div>
  </div>
</div>
`,zl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Locale
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example09.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example09.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>locale</code> to set the locale.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-3"> Locale Select </label>

    <div class="col-sm-9">
      <select id="locale" class="full-width">
        <option value="en-US">English</option>
        <option value="fr-FR">French</option>
        <option value="de-DE">German</option>
        <option value="it-IT">Italian</option>
        <option value="es-ES">Spanish</option>
        <option value="vi-VN">Vietnamese</option>
        <option value="zh-CN">简体中文</option>
        <option value="zh-TW">繁體中文</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-3"> Result Select </label>

    <div class="col-sm-9">
      <select id="dynamic-select" class="full-width" multiple="multiple">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>
  
  <hr />

  <div class="mb-3 row">
    <label class="col-sm-3">named Locale import (i.e. Spanish)</label>

    <div class="col-sm-9">
      <select id="fixed-import" class="full-width" multiple="multiple">
        <option value="1">First</option>
        <option value="2">Second</option>
        <option value="3">Third</option>
        <option value="4">Fourth</option>
      </select>
    </div>
  </div>
</div>
`,Kl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Large Select - Virtual Scroll
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example10.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example10.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Virtual Scroll will automatically be used with a large set of data.
      We recommend keeping this option enabled at all time, but in some cases you could also disable it via the <code>virtualScroll</code> option
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">
      Basic Array
    </label>

    <div class="col-sm-10">
      <select multiple="multiple" data-test="select10-1" id="select1" class="full-width"></select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">Object Array</label>

    <div class="col-sm-10">
      <select multiple="multiple" data-test="select10-2" id="select2" class="full-width"></select>
    </div>
  </div>
</div>`,Yl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Themes / Sizes
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example11.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example11.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Multiple select with Bootstrap theme.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label col-form-label-sm">Select</label>

    <div class="col-sm-10">
      <select multiple="multiple" class="form-control form-control-sm" data-test="select1" placeholder="form-control-sm">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">Select</label>

    <div class="col-sm-10">
      <select multiple="multiple" class="form-control" data-test="select2" placeholder="form-control">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label col-form-label-lg">Select</label>

    <div class="col-sm-10">
      <select multiple="multiple" class="form-control form-control-lg" data-test="select3" placeholder="form-control-lg">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">Dropdown Select</label>

    <div class="col-sm-10">
      <select class="form-control ms-dropdown" data-test="select4">
        <optgroup label="Group 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
        </optgroup>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">Dropdown Dividers</label>

    <div class="col-sm-10">
      <select class="form-control ms-dropdown ms-dropdown-divider" data-test="select5">
        <optgroup label="Group 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
        </optgroup>
      </select>
    </div>
  </div>
</div>
`,Xl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Checkbox/Radio Icons
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example12.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example12.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Display checkbox or radio icons 
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label col-form-label-sm"> Single Select </label>

    <div class="col-sm-10">
      <select id="single" class="awesome-select full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">Multiple Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" id="multiple" class="awesome-select full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>
</div>
`,Ql=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Dynamically create Multiple-Select with Data collection
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example13.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example13.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Dynamically create a Multiple-Select instance with <code>data</code> property.
      <br />
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Create </label>

    <div class="col-sm-10">
      <button id="destroyBtn" class="btn btn-danger btn-sm">Destroy</button>
      <button id="createBtn" class="btn btn-primary btn-sm">Dynamically Create</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-3 text-end">Use Select Option Label & Render HTML</label>

    <div class="col-sm-9">
      <select id="select1" class="full-width" data-test="select1"></select>
    </div>
  </div>
</div>
`,Zl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Divider
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example14.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example14.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Display an option as a divider.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Single Select</label>

    <div class="col-sm-10">
      <select id="single" class="select full-width" data-test="single">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option data-divider="true"></option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option data-divider="true"></option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Multiple Select</label>

    <div class="col-sm-10">
      <select id="multiple" class="select full-width" data-test="multiple" multiple>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option data-divider="true"></option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option data-divider="true"></option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Group Select</label>

    <div class="col-sm-10">
      <select id="group" class="select full-width" data-test="group" multiple>
        <option data-divider="true"></option>
        <optgroup label="Group 1">
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option data-divider="true"></option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
        </optgroup>
        <option data-divider="true"></option>
        <optgroup label="Group 2">
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option data-divider="true"></option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </optgroup>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Data Select 1</label>

    <div class="col-sm-10">
      <select id="data-select1" class="data-select full-width" data-test="data1" multiple></select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Data Select 2</label>

    <div class="col-sm-10">
      <select id="data-select2" class="data-select full-width" data-test="data2" multiple></select>
    </div>
  </div>
</div>
`,ta=`<div class="example15-container">
  <div class="row mb-2">
    <div class="col-md-12 title-desc">
      <h2 class="bd-title">
        Dark Mode
        <span class="float-end links">
          Code <span class="fa fa-link"></span>
          <span class="small">
            <a
              target="_blank"
              href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example15.html"
              >html</a
            >
            |
            <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example15.ts"
              >ts</a
            >
          </span>
        </span>
      </h2>
      <div class="demo-subtitle">
        Dark Mode requires <code>darkMode</code> option to be enabled, when that happens it will add <code>.ms-dark-mode</code> to the parent and drop elements.
        The dark theme is configured through CSS variables which you can also customize yourself. 
        You can also toggle Dark Mode at any time dynamically via <code>refreshOptions()</code>
      </div>
    </div>
  </div>
  
  <div>
    <div class="mb-3 row">
      <label class="col-sm-2">Single Select</label>
  
      <div class="col-sm-10">
        <select id="single" class="select full-width ms-dark-mode" data-test="single">
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option data-divider="true"></option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option data-divider="true"></option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
    </div>

    <div class="mb-3 row">
      <label class="col-sm-2">Single Radio</label>
  
      <div class="col-sm-10">
        <select id="single" class="radio full-width ms-dark-mode" data-test="radio">
          <option value="1">January</option>
          <option value="2" selected>February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option data-divider="true"></option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option data-divider="true"></option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
    </div>
  
    <div class="mb-3 row">
      <label class="col-sm-2">Multiple Select</label>
  
      <div class="col-sm-10">
        <select id="multiple" class="select full-width" data-test="multiple" multiple>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option data-divider="true"></option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option data-divider="true"></option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
    </div>
  
    <div class="mb-3 row">
      <label class="col-sm-2">Group Select</label>
  
      <div class="col-sm-10">
        <select id="group" class="select full-width" data-test="group" multiple>
        <optgroup label="Group 1" disabled="disabled">
          <option value="1" selected>Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5" selected>Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7" disabled="disabled">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
        </optgroup>
      </select>
      </div>
    </div>
  
    <div class="mb-3 row">
      <label class="col-sm-2">Data Select 1</label>
  
      <div class="col-sm-10">
        <select id="data-select" class="data-select full-width" data-test="data1" multiple></select>
      </div>
    </div>
  </div>
</div>
`,ea=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Use Images as Text Template
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example12.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example12.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Display avatar images by using <code>textTemplate</code> to render HTML with image src. Note that the use of <code>sanitizer</code> with tools like DOM Purify is recommended when using <code>textTemplate</code>.
    </div>
  </div>
</div>

<div class="example12">
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">Avatar Template</label>

    <div class="col-sm-10">
      <select id="select1" class="full-width" data-test="select1">
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">Avatar Text Template</label>

    <div class="col-sm-10">
      <select id="select2" class="full-width" data-test="select2">
        <option value="1">Eric::Developer</option>
        <option value="2">Smith::Accounting</option>
        <option value="3">Erika::Designer</option>
        <option value="4">Julia::Finance</option>
        <option value="5">Catherine::HR</option>
      </select>
    </div>
  </div>
</div>
`,na=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">Getting Started</h2>
  </div>
</div>

<div class="content-text">
  <h3>Download</h3>
  <hr />

  <section>
    <h5>GitHub <i class="fa fa-link"></i></h5>
    <p>
      <a href="https://github.com/ghiscoding/multiple-select-vanilla">https://github.com/ghiscoding/multiple-select-vanilla</a>
    </p>
  </section>

  <section>
    <h5>CDN</h5>
    <p>
      <a href="https://www.jsdelivr.com/" target="__blank">jsDelivr</a> graciously provide CDNs for many JavaScript libraries
      including Multiple-Select-Vanilla. Just use the following CDN links.
    </p>
    <p>
      The project now ships its <code>.js</code> files as ESM by default, if you still wish to use the legacy CommonJS (CJS) format with <code>require()</code>,
      then you will have to use <code>.cjs</code> file extension.
    </p>

    <div style="background: #f7f7f7; padding: 10px">
      <pre>
&lt;!-- Latest compiled and minified CSS --&gt;
&lt;link href=&quot;<span style="color:#880000">https://cdn.jsdelivr.net/npm/multiple-select-vanilla@3.3.5/dist/styles/css/multiple-select.css</span>&quot; rel=&quot;<span style="color:#880000">stylesheet</span>&quot;&gt;

&lt;!-- (ESM requires <span style="color:#d63384">type=&quot;module&quot;</span>) Latest compiled and minified JavaScript --&gt;
&lt;script type=&quot;module&quot; src=&quot;<span style="color:#880000">https://cdn.jsdelivr.net/npm/multiple-select-vanilla@3.3.5/dist/browser/multiple-select.js</span>&quot;&gt;&lt;/script&gt;

&lt;!-- (CJS requires <span style="color:#d63384">.cjs</span> extension) Latest compiled and minified JavaScript --&gt;
&lt;script src=&quot;<span style="color:#880000">https://cdn.jsdelivr.net/npm/multiple-select-vanilla@3.3.5/dist/browser/multiple-select.cjs</span>&quot;&gt;&lt;/script&gt;</pre>
    </div>

    <quote>
      <b>Note:</b> the <code>dist/browser</code> location is the only one providing the <code>MultipleSelect</code> on the <code>window</code> object.
    </quote>
  </section>

  <section>
    <h5>NPM</h5>
    <p>Install and manage Multiple Select's CSS, JavaScript using NPM.</p>

    <div style="background: #f7f7f7; padding: 10px">
      <pre>$ npm install multiple-select-vanilla</pre>
    </div>
  </section>

  <h5>CommonJS <code>require()</code> / ESM <code>import from</code></h5>
    <p>
      The library provides both CommonJS or ESM, see the example below:
    </p>
    <div style="background: #f7f7f7; padding: 10px">
<pre>
// CommonJS
const { multipleSelect } = require('multiple-select-vanilla');
multipleSelect('.multiple-select', {/*...*/});

// ESM
import { multipleSelect } from 'multiple-select-vanilla';
multipleSelect('.multiple-select', {/*...*/});
</pre>
    </div>

  <section>
    <h5>Code Sample</h5>
    <div class="col-sm-10 col-lg-8">
      <iframe
        style="height: 100%; width: 60%; position: absolute"
        src="data:text/html;charset=utf-8,
        <head><base target='_blank' /></head>
        <body><script src='https://gist.github.com/ghiscoding/786008e40a13d64a1cf813aff8a3d8dc.js'><\/script>
        </body>"
      >
      </iframe>
    </div>
  </section>
</div>
`,oa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The i18n
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/i18n/i18n.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/i18n/i18n.ts">ts</a>
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Custom i18n options, for example French is used here.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="1">Janvier</option>
        <option value="2">Février</option>
        <option value="3">Mars</option>
        <option value="4">Avril</option>
        <option value="5">Mai</option>
        <option value="6">Juin</option>
        <option value="7">Juillet</option>
        <option value="8">Août</option>
        <option value="9">Septembre</option>
        <option value="10">Octobre</option>
        <option value="11">Novembre</option>
        <option value="12">Décembre</option>
      </select>
    </div>
  </div>

  <div class="my-5 offset-sm-1 col-sm-10">
    <hr />
  </div>

  <div class="row mt-5">
    <label class="col-sm-2">Code Sample</label>
    <div class="col-sm-10 col-lg-8">
      <iframe
        style="height: 100%; width: 60%; position: absolute"
        src="data:text/html;charset=utf-8,
        <head><base target='_blank' /></head>
        <body><script src='https://gist.github.com/ghiscoding/337a664ffd1564d2f95c3f9d1b814172.js'><\/script><\/script>
        </body>"
      >
      </iframe>
    </div>
  </div>
</div>
`,os=`<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand ms-2" href="https://github.com/ghiscoding/multiple-select-vanilla">
      <img src="./favicon.png" alt="Multiple-Select-Vanilla" width="34" />
      <span>Multiple Select Vanilla</span>
    </a>
    <div class="github-button-container">
      <a href="https://github.com/ghiscoding/multiple-select-vanilla">
        <img src="https://img.shields.io/github/stars/ghiscoding/multiple-select-vanilla?style=social" />
      </a>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-target="#navbarContent"
      aria-controls="navbarContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end me-2" id="navbarSupportedContent">
      <ul class="navbar-nav">
      </ul>
    </div>
  </div>
</nav>

<div class="container-fluid template-body">
  <div class="panel-wm">
    <section id="panel-left" class="panel-wm-left">
      <ul class="well nav nav-pills nav-stacked">
        <!-- All Example Routes -->
      </ul>
    </section>

    <section class="panel-wm-content"></section>
  </div>
</div>
`,ia=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The getOptions
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods01.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods01.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>multipleSelect('select').getOptions()</code> to get the options object.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Methods </label>

    <div class="col-sm-10">
      <button id="getOptions" class="btn btn-secondary">getOptions</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="text1">text1</option>
        <option value="text2">text2</option>
        <option value="text3">text3</option>
      </select>
    </div>
  </div>
</div>
`,sa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The refreshOptions
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods02.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods02.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>multipleSelect('select').refreshOptions({ filter: false })</code> to refresh the options object.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Methods </label>

    <div class="col-sm-5">
      <button id="refreshOptions" class="btn btn-secondary">refreshOptions</button>
      <button id="setDarkMode" class="btn btn-secondary">Toggle Dark Mode</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width select1" data-test="select1">
        <option value="text1">text1</option>
        <option value="text2">text2</option>
        <option value="text3">text3</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Multiple Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width select2" data-test="select2">
        <option value="task1">Task 1</option>
        <option value="task2">Task 2</option>
        <option value="task3">Task 3</option>
      </select>
    </div>
  </div>
</div>
`,la=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The setSelects/getSelects
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods03.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods03.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>multipleSelect('select').setSelects([])</code> and <code>multipleSelect('select').getSelects()</code> to set
      selects and get selects.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Methods </label>

    <div class="col-sm-10">
      <button id="setSelectsBtn" class="btn btn-secondary">SetSelects</button>
      <button id="getSelectsBtn" class="btn btn-secondary">GetSelects</button>
      <button id="setSelectsBtn2" class="btn btn-secondary">SetSelects by 'text'</button>
      <button id="getSelectsBtn2" class="btn btn-secondary">GetSelects by 'text'</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>
</div>
`,aa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The enable/disable
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods04.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods04.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>multipleSelect('select').enable()</code> and <code>multipleSelect('select').disable()</code> to enable and disable
      select.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Methods </label>

    <div class="col-sm-10">
      <button id="enableBtn" class="btn btn-secondary">Enable</button>
      <button id="disableBtn" class="btn btn-secondary">Disable</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>
</div>
`,ra=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The open/close
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods05.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods05.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>multipleSelect('select').open()</code> and <code>multipleSelect('select').close()</code> to open and close the
      select dropdown list.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Methods </label>

    <div class="col-sm-10">
      <button id="openBtn" class="btn btn-secondary">Open</button>
      <button id="closeBtn" class="btn btn-secondary">Close</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>
</div>
`,ca=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The check/uncheck
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods06.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods06.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Methods: <code>multipleSelect('select').check(2)</code> and <code>multipleSelect('select').uncheck(2)</code> to check and
      uncheck a select option.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Methods </label>

    <div class="col-sm-10">
      <button id="checkBtn" class="btn btn-secondary">Check</button>
      <button id="uncheckBtn" class="btn btn-secondary">Uncheck</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Single Select </label>

    <div class="col-sm-10">
      <select data-test="select1">
        <option value="1">Value 1</option>
        <option value="2">Value 2</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Multiple Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select2">
        <option value="1" selected>Value 1</option>
        <option value="2">Value 2</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Group Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select3">
        <optgroup label="Group 1">
          <option value="1" selected>Value 1</option>
          <option value="2">Value 2</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="3" selected>Value 3</option>
          <option value="4">Value 4</option>
        </optgroup>
      </select>
    </div>
  </div>
</div>
`,pa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The checkAll/uncheckAll
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods07.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods07.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>multipleSelect('select').checkAll()</code> and <code>multipleSelect('select').uncheckAll()</code> to check and
      uncheck all options.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Methods </label>

    <div class="col-sm-10">
      <button id="checkAllBtn" class="btn btn-secondary">Check All</button>
      <button id="uncheckAllBtn" class="btn btn-secondary">Uncheck All</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select1">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Group Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select2">
        <optgroup label="Group 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
        </optgroup>
      </select>
    </div>
  </div>
</div>
`,ua=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The checkInvert
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods08.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods08.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Methods: <code>multipleSelect('select').checkInvert()</code> to invert check all items.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Methods </label>

    <div class="col-sm-10">
      <button id="checkInvert" class="btn btn-secondary">Check Invert</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select1">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Group Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select2">
        <optgroup label="Group 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
        </optgroup>
      </select>
    </div>
  </div>
</div>
`,da=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The focus/blur
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods09.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods09.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>multipleSelect('select').focus()</code> and <code>multipleSelect('select').blur()</code> to focus and blur the
      select.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Methods </label>

    <div class="col-sm-10">
      <button id="focusBtn" class="btn btn-secondary">Focus</button>
      <button id="blurBtn" class="btn btn-secondary">Blur</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>
</div>
`,ma=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The refresh
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods10.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods10.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>multiple('select').refresh()</code> to refresh/reload the Multiple Select. If you're dynamically adding/removing
      option tags on the original select via AJAX or DOM manipulation methods, call refresh to reflect the changes.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Option text </label>
    <div class="col-sm-10">
      <input id="refreshInput" class="form-control" type="text" required="required" placeholder="Enter text" />
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Option attribute </label>
    <div class="col-sm-10">
      <label class="checkbox"> <input id="refreshSelected" type="checkbox" /> Selected </label>
      <label class="checkbox"> <input id="refreshDisabled" type="checkbox" /> Disabled </label>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"></label>
    <div class="col-sm-10">
      <button id="refreshAdd" class="btn btn-secondary">Add + Refresh</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Result Select </label>
    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="text1">text1</option>
        <option value="text2">text2</option>
        <option value="text3">text3</option>
      </select>
    </div>
  </div>
</div>
`,ha=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The destroy
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods11.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods11.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>multiple('select').destroy()</code> to destroy the select.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Methods </label>

    <div class="col-sm-10">
      <button id="destroyBtn" class="btn btn-danger">Destroy</button>
      <button id="buildBtn" class="btn btn-primary">Build</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="my-5 offset-sm-1 col-sm-10">
    <hr />
  </div>

  <div class="row mt-5">
    <label class="col-sm-2">Code Sample</label>
    <div class="col-sm-10 col-lg-8">
      <iframe
        style="height: 100%; width: 60%; position: absolute"
        src="data:text/html;charset=utf-8,
        <head><base target='_blank' /></head>
        <body><script src='https://gist.github.com/ghiscoding/4ab63b63f7374017e79151328f70ba73.js'><\/script>
        </body>"
      >
      </iframe>
    </div>
  </div>
</div>
`,va=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The getData
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods12.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods12.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>multipleSelect('getData')</code> to get the loaded data.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Methods</label>

    <div class="col-sm-10">
      <button id="getData" class="btn btn-secondary">getData</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select</label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="text1">text1</option>
        <option value="text2">text2</option>
        <option value="text3">text3</option>
      </select>
    </div>
  </div>
</div>
`,fa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Placeholder
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options01.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options01.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>placeholder</code> attribute or <code>placeholder: ''</code> option to set placeholder.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Via attribute </label>

    <div class="col-sm-10">
      <select
        id="select1"
        class="full-width"
        data-test="select1"
        multiple="multiple"
        placeholder="Here is the placeholder via attribute"
      >
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Via options </label>

    <div class="col-sm-10">
      <select id="select2" class="full-width" data-test="select2" multiple="multiple">
        <optgroup label="Group 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
        </optgroup>
      </select>
    </div>
  </div>
</div>
`,ba=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Single Radio
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options02.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options02.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>singleRadio: true</code> to show the radio input.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-3">Basic Select</label>

    <div class="col-sm-9">
      <select class="full-width" data-test="select1">
        <option value="1">First</option>
        <option value="2">Second</option>
        <option value="3">Third</option>
        <option value="4">Fourth</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-3">Group Select</label>

    <div class="col-sm-9">
      <select class="full-width" data-test="select2">
        <optgroup label="Group 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
        </optgroup>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-3">Single Select with Empty Option</label>

    <div class="col-sm-9">
      <select class="multiple-select full-width" data-test="select3">
        <option value=""></option>
        <option value="2">Second</option>
        <option value="3">Third</option>
        <option value="4">Fourth</option>
      </select>
    </div>
  </div>
</div>
`,ga=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Hide Select All
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options03.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options03.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>selectAll: false</code> to hide select all.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Hide Select All </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="1">First</option>
        <option value="2">Second</option>
        <option value="3">Third</option>
        <option value="4">Fourth</option>
      </select>
    </div>
  </div>
</div>
`,_a=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Hide Optgroup Checkboxes
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options04.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options04.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>hideOptgroupCheckboxes: true</code> option to hide the optgroup checkboxes.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Group Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <optgroup label="Group 1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
        </optgroup>
      </select>
    </div>
  </div>
</div>
`,Ea=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Custom Dropdown Width
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options05.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options05.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>dropWidth: 580</code> option to custom the dropdown width.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
      </select>
    </div>
  </div>
</div>
`,ya=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Max Height
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options06.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options06.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>maxHeight: 140</code> option to custom the dropdown max height.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>
</div>
`,wa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Max Height Unit
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options07.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options07.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>maxHeightUnit: 'row'</code> option to set the max height unit.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Max Rows </label>

    <div class="col-sm-10">
      <input id="number" type="number" value="5" min="1" max="10" />
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Single Select </label>

    <div class="col-sm-10">
      <select class="full-width" data-test="select1">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Multiple Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select2">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>
</div>
`,Sa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Position
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options08.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options08.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>position: 'top'</code> to set the select dropdown in top position.</div>
  </div>
</div>

<div>
  <div class="mb-3 row" style="margin-top: 200px">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>
</div>
`,Aa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Display Values
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options09.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options09.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>displayValues: true</code> option to display selected values instead text.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>
</div>
`,ka=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Display Title
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options10.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options10.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>displayTitle: true</code> option to display title (for tooltip) of selected text.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>
</div>
`,Oa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Display Delimiter
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options11.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options11.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>displayDelimiter: ' | '</code> option to custom the display delimiter.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>
</div>
`,Ta=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Minimum Count Selected
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options12.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options12.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>minimumCountSelected: 8</code> option and the <code>%s of %s selected</code> will be shown only if more than 8
      items where selected.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>
</div>
`,xa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Ellipsis
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options13.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options13.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>ellipsis: true</code> option to display ... after selected options instead of <code>%s of %s selected</code>.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>
</div>
`,Ca=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Is Open
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options14.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options14.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>isOpen: true</code> to open the dropdown by default.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>
</div>
`,Da=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Keep Open
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options15.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options15.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>keepOpen: true</code> to keep the select dropdown always open.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>
</div>
`,Ma=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Open On Hover
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options16.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options16.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>openOnHover: true</code> to open the select dropdown by hover instead of click.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>
</div>
`,Na=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Container
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options17.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options17.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>container</code> option to solve the cut off problem for example parent node is <code>overflow: hidden</code>.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> No container </label>

    <div class="col-sm-10">
      <div class="parent" style="overflow: hidden">
        <select multiple="multiple" class="select1 full-width" data-test="select1">
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> With data-container </label>

    <div class="col-sm-10 my-container">
      <div class="parent" style="overflow: hidden">
        <select multiple="multiple" data-container=".my-container" class="select2 full-width" data-test="select2">
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> With container option </label>

    <div class="col-sm-10 my-container">
      <div class="parent" style="overflow: hidden">
        <select multiple="multiple" class="select3 full-width" data-test="select3">
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Body Container </label>

    <div class="col-sm-10">
      <div class="parent" style="overflow: hidden">
        <select multiple="multiple" class="select4 full-width" data-test="select4">
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
    </div>
  </div>
</div>
`,La=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Filter
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options18.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options18.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>filter: true</code> to enable filter feature.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Single Select </label>

    <div class="col-sm-10">
      <select class="full-width" data-test="select1">
        <option value="1">abc</option>
        <option value="2">bcd</option>
        <option value="3">cde</option>
        <option value="4">def</option>
        <option value="5">efg</option>
        <option value="6">fgh</option>
        <option value="7">ghi</option>
        <option value="8">hij</option>
        <option value="9">ijk</option>
        <option value="10">jkl</option>
        <option value="11">klm</option>
        <option value="12">lmn</option>
        <option value="13">mno</option>
        <option value="14">nop</option>
        <option value="15">opq</option>
        <option value="16">pqr</option>
        <option value="17">qrs</option>
        <option value="18">rst</option>
        <option value="19">stu</option>
        <option value="20">tuv</option>
        <option value="21">uvw</option>
        <option value="22">vwx</option>
        <option value="23">wxy</option>
        <option value="24">xyz</option>
        <option value="25">123</option>
        <option value="26">234</option>
        <option value="27">345</option>
        <option value="28">456</option>
        <option value="29">567</option>
        <option value="30">678</option>
        <option value="31">789</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Single Group </label>

    <div class="col-sm-10">
      <select class="full-width" data-test="select2">
        <optgroup label="Group 10">
          <option value="1">000</option>
          <option value="2">111</option>
          <option value="3">222</option>
        </optgroup>
        <optgroup label="Group 11">
          <option value="4">333</option>
          <option value="5">444</option>
          <option value="6">555</option>
        </optgroup>
        <optgroup label="Group 12">
          <option value="7">666</option>
          <option value="8">777</option>
          <option value="9">888</option>
          <option value="10">999</option>
        </optgroup>
        <optgroup label="Group 20">
          <option value="11">210</option>
          <option value="12">321</option>
          <option value="13">432</option>
        </optgroup>
        <optgroup label="Group 21">
          <option value="14">543</option>
          <option value="15">654</option>
          <option value="16">765</option>
        </optgroup>
        <optgroup label="Group 22">
          <option value="17">876</option>
          <option value="18">987</option>
          <option value="19">098</option>
        </optgroup>
        <optgroup label="Group 30">
          <option value="20">012</option>
          <option value="21">123</option>
          <option value="22">234</option>
        </optgroup>
        <optgroup label="Group 31">
          <option value="23">345</option>
          <option value="24">456</option>
          <option value="25">567</option>
        </optgroup>
        <optgroup label="Group 32">
          <option value="26">678</option>
          <option value="27">789</option>
          <option value="28">890</option>
        </optgroup>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select3">
        <option value="1">abc</option>
        <option value="2">bcd</option>
        <option value="3">cde</option>
        <option value="4">def</option>
        <option value="5">efg</option>
        <option value="6">fgh</option>
        <option value="7">ghi</option>
        <option value="8">hij</option>
        <option value="9">ijk</option>
        <option value="10">jkl</option>
        <option value="11">klm</option>
        <option value="12">lmn</option>
        <option value="13">mno</option>
        <option value="14">nop</option>
        <option value="15">opq</option>
        <option value="16">pqr</option>
        <option value="17">qrs</option>
        <option value="18">rst</option>
        <option value="19">stu</option>
        <option value="20">tuv</option>
        <option value="21">uvw</option>
        <option value="22">vwx</option>
        <option value="23">wxy</option>
        <option value="24">xyz</option>
        <option value="25">123</option>
        <option value="26">234</option>
        <option value="27">345</option>
        <option value="28">456</option>
        <option value="29">567</option>
        <option value="30">678</option>
        <option value="31">789</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Group Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select4">
        <optgroup label="Group 10">
          <option value="1">000</option>
          <option value="2">111</option>
          <option value="3">222</option>
        </optgroup>
        <optgroup label="Group 11">
          <option value="4">333</option>
          <option value="5">444</option>
          <option value="6">555</option>
        </optgroup>
        <optgroup label="Group 12">
          <option value="7">666</option>
          <option value="8">777</option>
          <option value="9">888</option>
          <option value="10">999</option>
        </optgroup>
        <optgroup label="Group 20">
          <option value="11">210</option>
          <option value="12">321</option>
          <option value="13">432</option>
        </optgroup>
        <optgroup label="Group 21">
          <option value="14">543</option>
          <option value="15">654</option>
          <option value="16">765</option>
        </optgroup>
        <optgroup label="Group 22">
          <option value="17">876</option>
          <option value="18">987</option>
          <option value="19">098</option>
        </optgroup>
        <optgroup label="Group 30">
          <option value="20">012</option>
          <option value="21">123</option>
          <option value="22">234</option>
        </optgroup>
        <optgroup label="Group 31">
          <option value="23">345</option>
          <option value="24">456</option>
          <option value="25">567</option>
        </optgroup>
        <optgroup label="Group 32">
          <option value="26">678</option>
          <option value="27">789</option>
          <option value="28">890</option>
        </optgroup>
      </select>
    </div>
  </div>
</div>
`,Ia=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Filter Only Optgroup
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options19.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options19.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>filterGroup: true</code> to filter optgroups only and not options.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Group Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <optgroup label="Group A">
          <option value="1" disabled>000</option>
          <option value="2">111</option>
          <option value="3">222</option>
          <option value="4">333</option>
          <option value="5">444</option>
        </optgroup>
        <optgroup label="Group B">
          <option value="6">555</option>
          <option value="7">666</option>
          <option value="8">777</option>
          <option value="9">888</option>
          <option value="10">999</option>
        </optgroup>
        <optgroup label="Group C">
          <option value="20">012</option>
          <option value="21">123</option>
          <option value="22">234</option>
          <option value="23">345</option>
        </optgroup>
        <optgroup label="Group D">
          <option value="20">456</option>
          <option value="21">567</option>
          <option value="22">678</option>
          <option value="23">789</option>
        </optgroup>
      </select>
    </div>
  </div>
</div>
`,$a=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Filter Placeholder
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options20.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options20.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>filterPlaceholder: 'The filter placeholder'</code> to set the filter placeholder.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="1">abc</option>
        <option value="2">bcd</option>
        <option value="3">cde</option>
        <option value="4">def</option>
        <option value="5">efg</option>
        <option value="6">fgh</option>
        <option value="7">ghi</option>
        <option value="8">hij</option>
        <option value="9">ijk</option>
        <option value="10">jkl</option>
        <option value="11">klm</option>
        <option value="12">lmn</option>
        <option value="13">mno</option>
        <option value="14">nop</option>
        <option value="15">opq</option>
        <option value="16">pqr</option>
        <option value="17">qrs</option>
        <option value="18">rst</option>
        <option value="19">stu</option>
        <option value="20">tuv</option>
        <option value="21">uvw</option>
        <option value="22">vwx</option>
        <option value="23">wxy</option>
        <option value="24">xyz</option>
        <option value="25">123</option>
        <option value="26">234</option>
        <option value="27">345</option>
        <option value="28">456</option>
        <option value="29">567</option>
        <option value="30">678</option>
        <option value="31">789</option>
      </select>
    </div>
  </div>
</div>
`,Ra=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Filter Accept On Enter
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options21.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options21.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>filterAcceptOnEnter: true</code> option to speed up keyboard use. Enter filter text and then hit
      <code>ENTER</code> or <code>SPACE</code> will auto click <code>select all</code> and close the dropdown.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Single Select </label>

    <div class="col-sm-10">
      <select class="full-width" data-test="select1">
        <option value="1">abc</option>
        <option value="2">bcd</option>
        <option value="3">cde</option>
        <option value="4">def</option>
        <option value="5">efg</option>
        <option value="6">fgh</option>
        <option value="7">ghi</option>
        <option value="8">hij</option>
        <option value="9">ijk</option>
        <option value="10">jkl</option>
        <option value="11">klm</option>
        <option value="12">lmn</option>
        <option value="13">mno</option>
        <option value="14">nop</option>
        <option value="15">opq</option>
        <option value="16">pqr</option>
        <option value="17">qrs</option>
        <option value="18">rst</option>
        <option value="19">stu</option>
        <option value="20">tuv</option>
        <option value="21">uvw</option>
        <option value="22">vwx</option>
        <option value="23">wxy</option>
        <option value="24">xyz</option>
        <option value="25">123</option>
        <option value="26">234</option>
        <option value="27">345</option>
        <option value="28">456</option>
        <option value="29">567</option>
        <option value="30">678</option>
        <option value="31">789</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Multiple Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select2">
        <option value="1">abc</option>
        <option value="2">bcd</option>
        <option value="3">cde</option>
        <option value="4">def</option>
        <option value="5">efg</option>
        <option value="6">fgh</option>
        <option value="7">ghi</option>
        <option value="8">hij</option>
        <option value="9">ijk</option>
        <option value="10">jkl</option>
        <option value="11">klm</option>
        <option value="12">lmn</option>
        <option value="13">mno</option>
        <option value="14">nop</option>
        <option value="15">opq</option>
        <option value="16">pqr</option>
        <option value="17">qrs</option>
        <option value="18">rst</option>
        <option value="19">stu</option>
        <option value="20">tuv</option>
        <option value="21">uvw</option>
        <option value="22">vwx</option>
        <option value="23">wxy</option>
        <option value="24">xyz</option>
        <option value="25">123</option>
        <option value="26">234</option>
        <option value="27">345</option>
        <option value="28">456</option>
        <option value="29">567</option>
        <option value="30">678</option>
        <option value="31">789</option>
      </select>
    </div>
  </div>
</div>
`,Pa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Filter By Data Length
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options22.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options22.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>filterByDataLength: 10</code> option to auto enable filter when the data length is more than 10.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select class="full-width" data-test="select1">
        <option value="1">abc</option>
        <option value="2">bcd</option>
        <option value="3">cde</option>
        <option value="4">def</option>
        <option value="5">efg</option>
        <option value="6">fgh</option>
        <option value="7">ghi</option>
        <option value="8">hij</option>
        <option value="9">ijk</option>
        <option value="10">jkl</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Multiple Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select2">
        <option value="1">abc</option>
        <option value="2">bcd</option>
        <option value="3">cde</option>
        <option value="4">def</option>
        <option value="5">efg</option>
        <option value="6">fgh</option>
        <option value="7">ghi</option>
        <option value="8">hij</option>
        <option value="9">ijk</option>
        <option value="10">jkl</option>
        <option value="11">klm</option>
        <option value="12">lmn</option>
        <option value="13">mno</option>
        <option value="14">nop</option>
        <option value="15">opq</option>
        <option value="16">pqr</option>
        <option value="17">qrs</option>
        <option value="18">rst</option>
        <option value="19">stu</option>
        <option value="20">tuv</option>
        <option value="21">uvw</option>
        <option value="22">vwx</option>
        <option value="23">wxy</option>
        <option value="24">xyz</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Group Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select3">
        <optgroup label="Group 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
          <option value="10">Option 10</option>
        </optgroup>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Group Select2 </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select4">
        <optgroup label="Group 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
          <option value="10">Option 10</option>
          <option value="11">Option 11</option>
        </optgroup>
      </select>
    </div>
  </div>
</div>
`,Ha=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Custom Filter
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options23.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options23.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>customFilter</code> to custom filter, in this case we filter by <code>startWith</code>.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-3 checkbox"> <input type="checkbox" /> Case Sensitive </label>

    <div class="col-sm-9">
      <select multiple="multiple" class="full-width">
        <option value="1">abc</option>
        <option value="2">bcd</option>
        <option value="3">cde</option>
        <option value="4">def</option>
        <option value="5">efg</option>
        <option value="6">fgh</option>
        <option value="7">ghi</option>
        <option value="8">hij</option>
        <option value="9">ijk</option>
        <option value="10">jkl</option>
        <option value="11">klm</option>
        <option value="12">lmn</option>
        <option value="13">mno</option>
        <option value="14">nop</option>
        <option value="15">opq</option>
        <option value="16">pqr</option>
        <option value="17">qrs</option>
        <option value="18">rst</option>
        <option value="19">stu</option>
        <option value="20">tuv</option>
        <option value="21">uvw</option>
        <option value="22">vwx</option>
        <option value="23">wxy</option>
        <option value="24">xyz</option>
      </select>
    </div>
  </div>
</div>
`,Ba=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Show Clear
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options24.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options24.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>showClear</code> to show the clear icon to uncheck all selected items but only when the select is filled with a selection.</div>
  </div>
</div>

<div class="show-clear-container">
  <div class="mb-3 row">
    <label class="col-sm-2"> Single Select </label>

    <div class="col-sm-10">
      <select class="full-width" data-test="select1">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Group Single </label>

    <div class="col-sm-10">
      <select class="full-width" data-test="select2">
        <optgroup label="Group 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
        </optgroup>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select3">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Group Select (bigger size)</label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select4">
        <optgroup label="Group 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
        </optgroup>
      </select>
    </div>
  </div>
</div>
`,Fa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Show OK Button
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options25.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options25.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>showOkButton</code> to show the OK button at bottom of the list when using multiple selection to easily close the
      drop. A single select will not show the OK button.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Multiple Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="select1 full-width" data-test="select1">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Group Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="select2 full-width" data-test="select2">
        <optgroup label="Group 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
        </optgroup>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Multiple Select with Filter </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="select3 full-width" data-test="select3">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Single Select</label>

    <div class="col-sm-10">
      <select class="select4 full-width" data-test="select4">
        <option value="1">First</option>
        <option value="2">Second</option>
        <option value="3">Third</option>
        <option value="4">Fourth</option>
      </select>
    </div>
  </div>
</div>
`,Ga=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Styler / CSS Styler
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options26.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options26.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>styler</code> to custom the item style.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> CSS Styler </label>

    <div class="col-sm-10">
      <select id="select3" multiple="multiple" class="full-width" data-test="select3">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Group Select </label>

    <div class="col-sm-10">
      <select id="group2" multiple="multiple" class="full-width" data-test="select4">
        <optgroup label="Group 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
        </optgroup>
      </select>
    </div>
  </div>
</div>
`,Ua=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Text Template
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options27.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options27.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>textTemplate</code> to customize the text template and <code>renderOptionLabelAsHtml</code> to render selected
      labels as HTML.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-4">Enable/Disable <code>renderOptionLabelAsHtml</code> option</label>

    <div class="col-sm-8">
      <button id="enableRenderHtml" class="btn btn-primary">Enable renderOptionLabelAsHtml</button>
      <button id="disableRenderHtml" class="btn btn-secondary">Disable renderOptionLabelAsHtml</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-4">Basic Select</label>

    <div class="col-sm-8">
      <select id="basic" data-test="select1" multiple="multiple" class="full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-4">From Data</label>

    <div class="col-sm-8">
      <select id="from-data" data-test="select2" class="full-width" multiple></select>
      </select>
    </div>
  </div>
</div>
`,ja=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Label Template
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options28.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options28.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>labelTemplate</code> to custom the optgroup label template and <code>renderOptionLabelAsHtml</code> to render
      selected labels as HTML.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <optgroup label="Group 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
        </optgroup>
      </select>
    </div>
  </div>
</div>
`,Wa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Auto-Adjust Drop Position
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options29.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options29.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>autoAdjustDropPosition</code> to automatically adjust the drop position from available space (top, bottom).
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select1">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row" style="margin-top: calc(100vh - 275px)">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select2">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>
</div>
`,Ja=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Auto-Adjust Drop Height/Width
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options30.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options30.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>autoAdjustDropWidthByTextSize</code> to automatically adjust the drop width by the largest option width from the
      found in the list. <br />
      Use <code>autoAdjustDropHeight</code> to automatically adjust the drop max height calculated from the available space.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-3 text-end">Adjust drop width by option list content</label>

    <div class="col-sm-9">
      <select id="select1" multiple="multiple" data-width="75" data-test="select1">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-3 text-end">Resize drop height (width: 200px)</label>

    <div class="col-sm-9">
      <select id="select2" multiple="multiple" data-width="200" data-test="select2">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-3 text-end">Resize drop height (width: auto)</label>

    <div class="col-sm-9">
      <select id="select3" multiple="multiple" data-test="select3">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-3 text-end"> Dropdown width </label>

    <div class="col-sm-9">
      <select id="select4" data-width="200" data-test="select4">
        <option value="1">This is the first option and value is 1</option>
        <option value="2">This is the second option and value is 2</option>
        <option value="3">This is the third option and value is 3</option>
        <option value="4">This is the fourth option and value is 4</option>
      </select>
    </div>
  </div>
</div>
`,Va=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Use Select Option as Label
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options31.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options31.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>useSelectOptionLabel</code> to display select option value as
      <code>&lt;option label=""&gt;&lt;/option&gt;</code> to display shorter text as the selected values in the parent select.
      <br />
      Use <code>useSelectOptionLabelToHtml</code> which is the same as "useSelectOptionLabel" but will also render html option
      values.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-3 text-end">Use Select Option Label</label>

    <div class="col-sm-9">
      <select id="select1" multiple="multiple" data-width="150" data-test="select1">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3" selected>March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6" selected>June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-3 text-end">Use Select Option Label & Render HTML</label>

    <div class="col-sm-9">
      <select id="select2" multiple="multiple" data-width="150" data-test="select2"></select>
    </div>
  </div>
</div>
`,qa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Sanitizer
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options32.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options32.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>sanitizer</code> callback option to sanitize all html code and prevent cross-site scripting attack. We can easily
      configure it with external library like <a href="https://github.com/cure53/DOMPurify">DOMPurify</a> or a simple regular
      expression.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-3 text-end">Select placeholder with XSS</label>

    <div class="col-sm-9">
      <select id="select1" multiple="multiple" class="full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>
</div>
`,za=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Classes
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options33.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options33.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>classes</code>, <code>classPrefix</code>, <code>size</code> to define the class and size of select.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label col-form-label-sm">Small Select</label>

    <div class="col-sm-9">
      <select id="select1" multiple="multiple" class="full-width" data-size="sm" data-test="select1" placeholder="data-size='sm'">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">Normal Select</label>

    <div class="col-sm-9">
      <select id="select2" multiple="multiple" class="full-width" data-test="select2">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label col-form-label-lg">Large Select</label>

    <div class="col-sm-9">
      <select id="select3" multiple="multiple" data-size="lg" data-test="select3" placeholder="data-size='lg'">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>
  </div>
</div>
`,Ka=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Show Search Clear
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options34.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options34.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>showSearchClear</code> to show the clear icon to empty the search filter input (you need to open the select dropdown to see the input filter).</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Single Select </label>

    <div class="col-sm-10">
      <select class="full-width" data-test="select1">
        <option value="1">abc</option>
        <option value="2">bcd</option>
        <option value="3">cde</option>
        <option value="4">def</option>
        <option value="5">efg</option>
        <option value="6">fgh</option>
        <option value="7">ghi</option>
        <option value="8">hij</option>
        <option value="9">ijk</option>
        <option value="10">jkl</option>
        <option value="11">klm</option>
        <option value="12">lmn</option>
        <option value="13">mno</option>
        <option value="14">nop</option>
        <option value="15">opq</option>
        <option value="16">pqr</option>
        <option value="17">qrs</option>
        <option value="18">rst</option>
        <option value="19">stu</option>
        <option value="20">tuv</option>
        <option value="21">uvw</option>
        <option value="22">vwx</option>
        <option value="23">wxy</option>
        <option value="24">xyz</option>
        <option value="25">123</option>
        <option value="26">234</option>
        <option value="27">345</option>
        <option value="28">456</option>
        <option value="29">567</option>
        <option value="30">678</option>
        <option value="31">789</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Single Group </label>

    <div class="col-sm-10">
      <select class="full-width" data-test="select2">
        <optgroup label="Group 10">
          <option value="1">000</option>
          <option value="2">111</option>
          <option value="3">222</option>
        </optgroup>
        <optgroup label="Group 11">
          <option value="4">333</option>
          <option value="5">444</option>
          <option value="6">555</option>
        </optgroup>
        <optgroup label="Group 12">
          <option value="7">666</option>
          <option value="8">777</option>
          <option value="9">888</option>
          <option value="10">999</option>
        </optgroup>
        <optgroup label="Group 20">
          <option value="11">210</option>
          <option value="12">321</option>
          <option value="13">432</option>
        </optgroup>
        <optgroup label="Group 21">
          <option value="14">543</option>
          <option value="15">654</option>
          <option value="16">765</option>
        </optgroup>
        <optgroup label="Group 22">
          <option value="17">876</option>
          <option value="18">987</option>
          <option value="19">098</option>
        </optgroup>
        <optgroup label="Group 30">
          <option value="20">012</option>
          <option value="21">123</option>
          <option value="22">234</option>
        </optgroup>
        <optgroup label="Group 31">
          <option value="23">345</option>
          <option value="24">456</option>
          <option value="25">567</option>
        </optgroup>
        <optgroup label="Group 32">
          <option value="26">678</option>
          <option value="27">789</option>
          <option value="28">890</option>
        </optgroup>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select3">
        <option value="1">abc</option>
        <option value="2">bcd</option>
        <option value="3">cde</option>
        <option value="4">def</option>
        <option value="5">efg</option>
        <option value="6">fgh</option>
        <option value="7">ghi</option>
        <option value="8">hij</option>
        <option value="9">ijk</option>
        <option value="10">jkl</option>
        <option value="11">klm</option>
        <option value="12">lmn</option>
        <option value="13">mno</option>
        <option value="14">nop</option>
        <option value="15">opq</option>
        <option value="16">pqr</option>
        <option value="17">qrs</option>
        <option value="18">rst</option>
        <option value="19">stu</option>
        <option value="20">tuv</option>
        <option value="21">uvw</option>
        <option value="22">vwx</option>
        <option value="23">wxy</option>
        <option value="24">xyz</option>
        <option value="25">123</option>
        <option value="26">234</option>
        <option value="27">345</option>
        <option value="28">456</option>
        <option value="29">567</option>
        <option value="30">678</option>
        <option value="31">789</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Group Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select4">
        <optgroup label="Group 10">
          <option value="1">000</option>
          <option value="2">111</option>
          <option value="3">222</option>
        </optgroup>
        <optgroup label="Group 11">
          <option value="4">333</option>
          <option value="5">444</option>
          <option value="6">555</option>
        </optgroup>
        <optgroup label="Group 12">
          <option value="7">666</option>
          <option value="8">777</option>
          <option value="9">888</option>
          <option value="10">999</option>
        </optgroup>
        <optgroup label="Group 20">
          <option value="11">210</option>
          <option value="12">321</option>
          <option value="13">432</option>
        </optgroup>
        <optgroup label="Group 21">
          <option value="14">543</option>
          <option value="15">654</option>
          <option value="16">765</option>
        </optgroup>
        <optgroup label="Group 22">
          <option value="17">876</option>
          <option value="18">987</option>
          <option value="19">098</option>
        </optgroup>
        <optgroup label="Group 30">
          <option value="20">012</option>
          <option value="21">123</option>
          <option value="22">234</option>
        </optgroup>
        <optgroup label="Group 31">
          <option value="23">345</option>
          <option value="24">456</option>
          <option value="25">567</option>
        </optgroup>
        <optgroup label="Group 32">
          <option value="26">678</option>
          <option value="27">789</option>
          <option value="28">890</option>
        </optgroup>
      </select>
    </div>
  </div>
</div>
`,Ya=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Custom Diacritic Parser
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options35.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options35.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>diacriticParser</code> callback option to remove diacritic signs (accents) from text while filtering items. 
      For example searching with "Fév" or "Fev" will return "Février" in both cases
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row align-middle">
    <label class="col-sm-2 py-1 text-end">in/out parsing</label>
    <div class="col-sm-3">
      <input class="form-control in-log" readonly style="background-color: #f0f0f0"/>
    </div>
    <div class="py-1 col-sm-1 w-35px">=&gt;</div>
    <div class="col-sm-3 text-start">
      <input class="form-control out-log" readonly style="background-color: #f0f0f0"/>
    </div>
  </div>

  <hr/>

  <div class="mb-3 row">
    <label class="col-sm-2 text-end">Custom Parser</label>

    <div class="col-sm-9">
      <select id="select1" multiple="multiple" data-test="select1" class="full-width">
        <option value="1">Janvier</option>
        <option value="2">Février</option>
        <option value="3">Mars</option>
        <option value="4">Avril</option>
        <option value="5">Mai</option>
        <option value="6">Juin</option>
        <option value="7">Juillet</option>
        <option value="8">Août</option>
        <option value="9">Septembre</option>
        <option value="10">Octobre</option>
        <option value="11">Novembre</option>
        <option value="12">Décembre</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2 text-end">Default Built-in Parser</label>

    <div class="col-sm-9">
      <select id="select2" multiple="multiple" data-test="select2" class="full-width">
        <option value="1">Janvier</option>
        <option value="2">Février</option>
        <option value="3">Mars</option>
        <option value="4">Avril</option>
        <option value="5">Mai</option>
        <option value="6">Juin</option>
        <option value="7">Juillet</option>
        <option value="8">Août</option>
        <option value="9">Septembre</option>
        <option value="10">Octobre</option>
        <option value="11">Novembre</option>
        <option value="12">Décembre</option>
      </select>
    </div>
  </div>
</div>
`,Xa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Infinite Scroll
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options36.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options36.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Enabling <code>infiniteScroll</code> will automatically scroll back to the top whenever reaching the end of the list (scrolling through either the mouse and/or arrow down). Note that this is not to be confused 
      with Virtual Scroll which itself is enabled by default whenever the list is bigger than 200 items (the last list select below does use Virtual Scroll)
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">
      Short List (25)
    </label>

    <div class="col-sm-10">
      <select data-test="select1" id="select1" class="full-width"></select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">Large List (2,000)</label>

    <div class="col-sm-10">
      <select multiple="multiple" data-test="select2" id="select2" class="full-width"></select>
    </div>
  </div>
</div>`,Qa=`<div class="row">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Navigation Highlight
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options37.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options37.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      The <code>navigationHighlight</code> is enabled by default and is very similar to <code>tabIndex</code>,
      it listens to up/down arrows and mouse hovering. 
      You can then click on Enter key to select the highlighted option without even losing your current focus.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Single Group Select</label>

    <div class="col-sm-10">
      <select class="multiple-select full-width" data-test="select1">
        <optgroup label="Group 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
        </optgroup>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Multiple Select</label>

    <div class="col-sm-10">
      <select multiple="multiple" class="multiple-select full-width" data-test="select2">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Group Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select3">
        <optgroup label="Group 1" disabled="disabled">
          <option value="1" selected>Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5" selected>Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7" disabled="disabled">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
        </optgroup>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Select with Filter</label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select4">
        <option value="1">abc</option>
        <option value="2">bcd</option>
        <option value="3">cde</option>
        <option value="4">def</option>
        <option value="5">efg</option>
        <option value="6">fgh</option>
        <option value="7">ghi</option>
        <option value="8">hij</option>
        <option value="9">ijk</option>
        <option value="10">jkl</option>
        <option value="11">klm</option>
        <option value="12">lmn</option>
        <option value="13">mno</option>
        <option value="14">nop</option>
        <option value="15">opq</option>
        <option value="16">pqr</option>
        <option value="17">qrs</option>
        <option value="18">rst</option>
        <option value="19">stu</option>
        <option value="20">tuv</option>
        <option value="21">uvw</option>
        <option value="22">vwx</option>
        <option value="23">wxy</option>
        <option value="24">xyz</option>
        <option value="25">123</option>
        <option value="26">234</option>
        <option value="27">345</option>
        <option value="28">456</option>
        <option value="29">567</option>
        <option value="30">678</option>
        <option value="31">789</option>
      </select>
    </div>
  </div>
</div>
`,Za=`<div class="example15-container">
  <div class="row mb-2">
    <div class="col-md-12 title-desc">
      <h2 class="bd-title">
        Dark Mode
        <span class="float-end links">
          Code <span class="fa fa-link"></span>
          <span class="small">
            <a
              target="_blank"
              href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options15.html"
              >html</a
            >
            |
            <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options15.ts"
              >ts</a
            >
          </span>
        </span>
      </h2>
      <div class="demo-subtitle">
        Dark Mode requires <code>darkMode</code> option to be enabled, when that happens it will add <code>.ms-dark-mode</code> to the parent and drop elements.
        The dark theme is configured through CSS variables which you can also customize yourself. 
        You can also toggle Dark Mode at any time dynamically via <code>refreshOptions()</code>
      </div>
    </div>
  </div>
  
  <div>
    <div class="mb-3 row">
      <label class="col-sm-2"> Methods </label>
  
      <div class="col-sm-5">
        <button id="setDarkMode" class="btn btn-secondary">Toggle Dark Mode</button>
      </div>
    </div>

    <div class="mb-3 row">
      <label class="col-sm-2">Single Select</label>
  
      <div class="col-sm-10">
        <select id="single" class="select full-width" data-test="single">
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option data-divider="true"></option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option data-divider="true"></option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
    </div>

    <div class="mb-3 row">
      <label class="col-sm-2">Single Radio</label>
  
      <div class="col-sm-10">
        <select id="single" class="radio full-width" data-test="radio">
          <option value="1">January</option>
          <option value="2" selected>February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option data-divider="true"></option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option data-divider="true"></option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
    </div>
  
    <div class="mb-3 row">
      <label class="col-sm-2">Multiple Select</label>
  
      <div class="col-sm-10">
        <select id="multiple" class="select full-width" data-test="multiple" multiple>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option data-divider="true"></option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option data-divider="true"></option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
    </div>
  
    <div class="mb-3 row">
      <label class="col-sm-2">Group Select</label>
  
      <div class="col-sm-10">
        <select id="group" class="select full-width" data-test="group" multiple>
        <optgroup label="Group 1" disabled="disabled">
          <option value="1" selected>Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="4">Option 4</option>
          <option value="5" selected>Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
        <optgroup label="Group 3">
          <option value="7" disabled="disabled">Option 7</option>
          <option value="8">Option 8</option>
          <option value="9">Option 9</option>
        </optgroup>
      </select>
      </div>
    </div>
  
    <div class="mb-3 row">
      <label class="col-sm-2">Data Select 1</label>
  
      <div class="col-sm-10">
        <select id="data-select" class="data-select full-width" data-test="data1" multiple></select>
      </div>
    </div>
  </div>
</div>
`,tr=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Label Id <small>(for accessibility)</small>
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options03.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options03.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      In order for the select to be accessible, it should be linked to a label, use <code>labelId</code> option
      to associate your label  to the select button (the label must be created by yourself and linked via the <code>for</code> attribute). 
      Using this option will link the <code>id</code> and <code>aria-labelledby</code> of the <code>.ms-choice</code> select button with your custom label. 
    </div>
    <div class="demo-subtitle">
      Clicking the label will open the select dropdown.
    </div>
  </div>
</div>

<div>
  <div class="mb-10">
    <label class="mb-2" for="custom-label">My Select Label</label>
  </div>
  <div class="mb-10">
    <select class="col-sm-8">
      <option value="1">First</option>
      <option value="2">Second</option>
      <option value="3">Third</option>
      <option value="4">Fourth</option>
    </select>
  </div>
</div>
`;var X="top",ot="bottom",it="right",Q="left",On="auto",Ce=[X,ot,it,Q],oe="start",we="end",is="clippingParents",wo="viewport",ge="popper",ss="reference",co=Ce.reduce(function(e,t){return e.concat([t+"-"+oe,t+"-"+we])},[]),So=[].concat(Ce,[On]).reduce(function(e,t){return e.concat([t,t+"-"+oe,t+"-"+we])},[]),ls="beforeRead",as="read",rs="afterRead",cs="beforeMain",ps="main",us="afterMain",ds="beforeWrite",ms="write",hs="afterWrite",vs=[ls,as,rs,cs,ps,us,ds,ms,hs];function At(e){return e?(e.nodeName||"").toLowerCase():null}function st(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ie(e){var t=st(e).Element;return e instanceof t||e instanceof Element}function at(e){var t=st(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Ao(e){if(typeof ShadowRoot>"u")return!1;var t=st(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function er(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var o=t.styles[n]||{},i=t.attributes[n]||{},s=t.elements[n];!at(s)||!At(s)||(Object.assign(s.style,o),Object.keys(i).forEach(function(l){var a=i[l];a===!1?s.removeAttribute(l):s.setAttribute(l,a===!0?"":a)}))})}function nr(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(o){var i=t.elements[o],s=t.attributes[o]||{},l=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:n[o]),a=l.reduce(function(r,d){return r[d]="",r},{});!at(i)||!At(i)||(Object.assign(i.style,a),Object.keys(s).forEach(function(r){i.removeAttribute(r)}))})}}const ko={name:"applyStyles",enabled:!0,phase:"write",fn:er,effect:nr,requires:["computeStyles"]};function wt(e){return e.split("-")[0]}var ne=Math.max,wn=Math.min,Se=Math.round;function po(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function fs(){return!/^((?!chrome|android).)*safari/i.test(po())}function Ae(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var o=e.getBoundingClientRect(),i=1,s=1;t&&at(e)&&(i=e.offsetWidth>0&&Se(o.width)/e.offsetWidth||1,s=e.offsetHeight>0&&Se(o.height)/e.offsetHeight||1);var l=ie(e)?st(e):window,a=l.visualViewport,r=!fs()&&n,d=(o.left+(r&&a?a.offsetLeft:0))/i,p=(o.top+(r&&a?a.offsetTop:0))/s,f=o.width/i,y=o.height/s;return{width:f,height:y,top:p,right:d+f,bottom:p+y,left:d,x:d,y:p}}function Oo(e){var t=Ae(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function bs(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Ao(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Pt(e){return st(e).getComputedStyle(e)}function or(e){return["table","td","th"].indexOf(At(e))>=0}function Vt(e){return((ie(e)?e.ownerDocument:e.document)||window.document).documentElement}function Tn(e){return At(e)==="html"?e:e.assignedSlot||e.parentNode||(Ao(e)?e.host:null)||Vt(e)}function oi(e){return!at(e)||Pt(e).position==="fixed"?null:e.offsetParent}function ir(e){var t=/firefox/i.test(po()),n=/Trident/i.test(po());if(n&&at(e)){var o=Pt(e);if(o.position==="fixed")return null}var i=Tn(e);for(Ao(i)&&(i=i.host);at(i)&&["html","body"].indexOf(At(i))<0;){var s=Pt(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function Ye(e){for(var t=st(e),n=oi(e);n&&or(n)&&Pt(n).position==="static";)n=oi(n);return n&&(At(n)==="html"||At(n)==="body"&&Pt(n).position==="static")?t:n||ir(e)||t}function To(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ve(e,t,n){return ne(e,wn(t,n))}function sr(e,t,n){var o=Ve(e,t,n);return o>n?n:o}function gs(){return{top:0,right:0,bottom:0,left:0}}function _s(e){return Object.assign({},gs(),e)}function Es(e,t){return t.reduce(function(n,o){return n[o]=e,n},{})}var lr=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,_s(typeof t!="number"?t:Es(t,Ce))};function ar(e){var t,n=e.state,o=e.name,i=e.options,s=n.elements.arrow,l=n.modifiersData.popperOffsets,a=wt(n.placement),r=To(a),d=[Q,it].indexOf(a)>=0,p=d?"height":"width";if(!(!s||!l)){var f=lr(i.padding,n),y=Oo(s),b=r==="y"?X:Q,T=r==="y"?ot:it,A=n.rects.reference[p]+n.rects.reference[r]-l[r]-n.rects.popper[p],k=l[r]-n.rects.reference[r],D=Ye(s),I=D?r==="y"?D.clientHeight||0:D.clientWidth||0:0,N=A/2-k/2,_=f[b],x=I-y[p]-f[T],C=I/2-y[p]/2+N,R=Ve(_,C,x),U=r;n.modifiersData[o]=(t={},t[U]=R,t.centerOffset=R-C,t)}}function rr(e){var t=e.state,n=e.options,o=n.element,i=o===void 0?"[data-popper-arrow]":o;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||bs(t.elements.popper,i)&&(t.elements.arrow=i))}const ys={name:"arrow",enabled:!0,phase:"main",fn:ar,effect:rr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ke(e){return e.split("-")[1]}var cr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function pr(e,t){var n=e.x,o=e.y,i=t.devicePixelRatio||1;return{x:Se(n*i)/i||0,y:Se(o*i)/i||0}}function ii(e){var t,n=e.popper,o=e.popperRect,i=e.placement,s=e.variation,l=e.offsets,a=e.position,r=e.gpuAcceleration,d=e.adaptive,p=e.roundOffsets,f=e.isFixed,y=l.x,b=y===void 0?0:y,T=l.y,A=T===void 0?0:T,k=typeof p=="function"?p({x:b,y:A}):{x:b,y:A};b=k.x,A=k.y;var D=l.hasOwnProperty("x"),I=l.hasOwnProperty("y"),N=Q,_=X,x=window;if(d){var C=Ye(n),R="clientHeight",U="clientWidth";if(C===st(n)&&(C=Vt(n),Pt(C).position!=="static"&&a==="absolute"&&(R="scrollHeight",U="scrollWidth")),C=C,i===X||(i===Q||i===it)&&s===we){_=ot;var G=f&&C===x&&x.visualViewport?x.visualViewport.height:C[R];A-=G-o.height,A*=r?1:-1}if(i===Q||(i===X||i===ot)&&s===we){N=it;var F=f&&C===x&&x.visualViewport?x.visualViewport.width:C[U];b-=F-o.width,b*=r?1:-1}}var L=Object.assign({position:a},d&&cr),q=p===!0?pr({x:b,y:A},st(n)):{x:b,y:A};if(b=q.x,A=q.y,r){var j;return Object.assign({},L,(j={},j[_]=I?"0":"",j[N]=D?"0":"",j.transform=(x.devicePixelRatio||1)<=1?"translate("+b+"px, "+A+"px)":"translate3d("+b+"px, "+A+"px, 0)",j))}return Object.assign({},L,(t={},t[_]=I?A+"px":"",t[N]=D?b+"px":"",t.transform="",t))}function ur(e){var t=e.state,n=e.options,o=n.gpuAcceleration,i=o===void 0?!0:o,s=n.adaptive,l=s===void 0?!0:s,a=n.roundOffsets,r=a===void 0?!0:a,d={placement:wt(t.placement),variation:ke(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,ii(Object.assign({},d,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:r})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,ii(Object.assign({},d,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:r})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const xo={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ur,data:{}};var an={passive:!0};function dr(e){var t=e.state,n=e.instance,o=e.options,i=o.scroll,s=i===void 0?!0:i,l=o.resize,a=l===void 0?!0:l,r=st(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&d.forEach(function(p){p.addEventListener("scroll",n.update,an)}),a&&r.addEventListener("resize",n.update,an),function(){s&&d.forEach(function(p){p.removeEventListener("scroll",n.update,an)}),a&&r.removeEventListener("resize",n.update,an)}}const Co={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:dr,data:{}};var mr={left:"right",right:"left",bottom:"top",top:"bottom"};function gn(e){return e.replace(/left|right|bottom|top/g,function(t){return mr[t]})}var hr={start:"end",end:"start"};function si(e){return e.replace(/start|end/g,function(t){return hr[t]})}function Do(e){var t=st(e),n=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:n,scrollTop:o}}function Mo(e){return Ae(Vt(e)).left+Do(e).scrollLeft}function vr(e,t){var n=st(e),o=Vt(e),i=n.visualViewport,s=o.clientWidth,l=o.clientHeight,a=0,r=0;if(i){s=i.width,l=i.height;var d=fs();(d||!d&&t==="fixed")&&(a=i.offsetLeft,r=i.offsetTop)}return{width:s,height:l,x:a+Mo(e),y:r}}function fr(e){var t,n=Vt(e),o=Do(e),i=(t=e.ownerDocument)==null?void 0:t.body,s=ne(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=ne(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-o.scrollLeft+Mo(e),r=-o.scrollTop;return Pt(i||n).direction==="rtl"&&(a+=ne(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:l,x:a,y:r}}function No(e){var t=Pt(e),n=t.overflow,o=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+o)}function ws(e){return["html","body","#document"].indexOf(At(e))>=0?e.ownerDocument.body:at(e)&&No(e)?e:ws(Tn(e))}function qe(e,t){var n;t===void 0&&(t=[]);var o=ws(e),i=o===((n=e.ownerDocument)==null?void 0:n.body),s=st(o),l=i?[s].concat(s.visualViewport||[],No(o)?o:[]):o,a=t.concat(l);return i?a:a.concat(qe(Tn(l)))}function uo(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function br(e,t){var n=Ae(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function li(e,t,n){return t===wo?uo(vr(e,n)):ie(t)?br(t,n):uo(fr(Vt(e)))}function gr(e){var t=qe(Tn(e)),n=["absolute","fixed"].indexOf(Pt(e).position)>=0,o=n&&at(e)?Ye(e):e;return ie(o)?t.filter(function(i){return ie(i)&&bs(i,o)&&At(i)!=="body"}):[]}function _r(e,t,n,o){var i=t==="clippingParents"?gr(e):[].concat(t),s=[].concat(i,[n]),l=s[0],a=s.reduce(function(r,d){var p=li(e,d,o);return r.top=ne(p.top,r.top),r.right=wn(p.right,r.right),r.bottom=wn(p.bottom,r.bottom),r.left=ne(p.left,r.left),r},li(e,l,o));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Ss(e){var t=e.reference,n=e.element,o=e.placement,i=o?wt(o):null,s=o?ke(o):null,l=t.x+t.width/2-n.width/2,a=t.y+t.height/2-n.height/2,r;switch(i){case X:r={x:l,y:t.y-n.height};break;case ot:r={x:l,y:t.y+t.height};break;case it:r={x:t.x+t.width,y:a};break;case Q:r={x:t.x-n.width,y:a};break;default:r={x:t.x,y:t.y}}var d=i?To(i):null;if(d!=null){var p=d==="y"?"height":"width";switch(s){case oe:r[d]=r[d]-(t[p]/2-n[p]/2);break;case we:r[d]=r[d]+(t[p]/2-n[p]/2);break}}return r}function Oe(e,t){t===void 0&&(t={});var n=t,o=n.placement,i=o===void 0?e.placement:o,s=n.strategy,l=s===void 0?e.strategy:s,a=n.boundary,r=a===void 0?is:a,d=n.rootBoundary,p=d===void 0?wo:d,f=n.elementContext,y=f===void 0?ge:f,b=n.altBoundary,T=b===void 0?!1:b,A=n.padding,k=A===void 0?0:A,D=_s(typeof k!="number"?k:Es(k,Ce)),I=y===ge?ss:ge,N=e.rects.popper,_=e.elements[T?I:y],x=_r(ie(_)?_:_.contextElement||Vt(e.elements.popper),r,p,l),C=Ae(e.elements.reference),R=Ss({reference:C,element:N,strategy:"absolute",placement:i}),U=uo(Object.assign({},N,R)),G=y===ge?U:C,F={top:x.top-G.top+D.top,bottom:G.bottom-x.bottom+D.bottom,left:x.left-G.left+D.left,right:G.right-x.right+D.right},L=e.modifiersData.offset;if(y===ge&&L){var q=L[i];Object.keys(F).forEach(function(j){var dt=[it,ot].indexOf(j)>=0?1:-1,kt=[X,ot].indexOf(j)>=0?"y":"x";F[j]+=q[kt]*dt})}return F}function Er(e,t){t===void 0&&(t={});var n=t,o=n.placement,i=n.boundary,s=n.rootBoundary,l=n.padding,a=n.flipVariations,r=n.allowedAutoPlacements,d=r===void 0?So:r,p=ke(o),f=p?a?co:co.filter(function(T){return ke(T)===p}):Ce,y=f.filter(function(T){return d.indexOf(T)>=0});y.length===0&&(y=f);var b=y.reduce(function(T,A){return T[A]=Oe(e,{placement:A,boundary:i,rootBoundary:s,padding:l})[wt(A)],T},{});return Object.keys(b).sort(function(T,A){return b[T]-b[A]})}function yr(e){if(wt(e)===On)return[];var t=gn(e);return[si(e),t,si(t)]}function wr(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var i=n.mainAxis,s=i===void 0?!0:i,l=n.altAxis,a=l===void 0?!0:l,r=n.fallbackPlacements,d=n.padding,p=n.boundary,f=n.rootBoundary,y=n.altBoundary,b=n.flipVariations,T=b===void 0?!0:b,A=n.allowedAutoPlacements,k=t.options.placement,D=wt(k),I=D===k,N=r||(I||!T?[gn(k)]:yr(k)),_=[k].concat(N).reduce(function(Tt,M){return Tt.concat(wt(M)===On?Er(t,{placement:M,boundary:p,rootBoundary:f,padding:d,flipVariations:T,allowedAutoPlacements:A}):M)},[]),x=t.rects.reference,C=t.rects.popper,R=new Map,U=!0,G=_[0],F=0;F<_.length;F++){var L=_[F],q=wt(L),j=ke(L)===oe,dt=[X,ot].indexOf(q)>=0,kt=dt?"width":"height",z=Oe(t,{placement:L,boundary:p,rootBoundary:f,altBoundary:y,padding:d}),nt=dt?j?it:Q:j?ot:X;x[kt]>C[kt]&&(nt=gn(nt));var Kt=gn(nt),Ot=[];if(s&&Ot.push(z[q]<=0),a&&Ot.push(z[nt]<=0,z[Kt]<=0),Ot.every(function(Tt){return Tt})){G=L,U=!1;break}R.set(L,Ot)}if(U)for(var Yt=T?3:1,H=function(M){var mt=_.find(function(Ft){var gt=R.get(Ft);if(gt)return gt.slice(0,M).every(function(Xt){return Xt})});if(mt)return G=mt,"break"},Bt=Yt;Bt>0;Bt--){var P=H(Bt);if(P==="break")break}t.placement!==G&&(t.modifiersData[o]._skip=!0,t.placement=G,t.reset=!0)}}const As={name:"flip",enabled:!0,phase:"main",fn:wr,requiresIfExists:["offset"],data:{_skip:!1}};function ai(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ri(e){return[X,it,ot,Q].some(function(t){return e[t]>=0})}function Sr(e){var t=e.state,n=e.name,o=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,l=Oe(t,{elementContext:"reference"}),a=Oe(t,{altBoundary:!0}),r=ai(l,o),d=ai(a,i,s),p=ri(r),f=ri(d);t.modifiersData[n]={referenceClippingOffsets:r,popperEscapeOffsets:d,isReferenceHidden:p,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":f})}const ks={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Sr};function Ar(e,t,n){var o=wt(e),i=[Q,X].indexOf(o)>=0?-1:1,s=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,l=s[0],a=s[1];return l=l||0,a=(a||0)*i,[Q,it].indexOf(o)>=0?{x:a,y:l}:{x:l,y:a}}function kr(e){var t=e.state,n=e.options,o=e.name,i=n.offset,s=i===void 0?[0,0]:i,l=So.reduce(function(p,f){return p[f]=Ar(f,t.rects,s),p},{}),a=l[t.placement],r=a.x,d=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=r,t.modifiersData.popperOffsets.y+=d),t.modifiersData[o]=l}const Os={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:kr};function Or(e){var t=e.state,n=e.name;t.modifiersData[n]=Ss({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Lo={name:"popperOffsets",enabled:!0,phase:"read",fn:Or,data:{}};function Tr(e){return e==="x"?"y":"x"}function xr(e){var t=e.state,n=e.options,o=e.name,i=n.mainAxis,s=i===void 0?!0:i,l=n.altAxis,a=l===void 0?!1:l,r=n.boundary,d=n.rootBoundary,p=n.altBoundary,f=n.padding,y=n.tether,b=y===void 0?!0:y,T=n.tetherOffset,A=T===void 0?0:T,k=Oe(t,{boundary:r,rootBoundary:d,padding:f,altBoundary:p}),D=wt(t.placement),I=ke(t.placement),N=!I,_=To(D),x=Tr(_),C=t.modifiersData.popperOffsets,R=t.rects.reference,U=t.rects.popper,G=typeof A=="function"?A(Object.assign({},t.rects,{placement:t.placement})):A,F=typeof G=="number"?{mainAxis:G,altAxis:G}:Object.assign({mainAxis:0,altAxis:0},G),L=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,q={x:0,y:0};if(C){if(s){var j,dt=_==="y"?X:Q,kt=_==="y"?ot:it,z=_==="y"?"height":"width",nt=C[_],Kt=nt+k[dt],Ot=nt-k[kt],Yt=b?-U[z]/2:0,H=I===oe?R[z]:U[z],Bt=I===oe?-U[z]:-R[z],P=t.elements.arrow,Tt=b&&P?Oo(P):{width:0,height:0},M=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:gs(),mt=M[dt],Ft=M[kt],gt=Ve(0,R[z],Tt[z]),Xt=N?R[z]/2-Yt-gt-mt-F.mainAxis:H-gt-mt-F.mainAxis,en=N?-R[z]/2+Yt+gt+Ft+F.mainAxis:Bt+gt+Ft+F.mainAxis,ae=t.elements.arrow&&Ye(t.elements.arrow),Gt=ae?_==="y"?ae.clientTop||0:ae.clientLeft||0:0,re=(j=L==null?void 0:L[_])!=null?j:0,xt=nt+Xt-re-Gt,Le=nt+en-re,ce=Ve(b?wn(Kt,xt):Kt,nt,b?ne(Ot,Le):Ot);C[_]=ce,q[_]=ce-nt}if(a){var Ct,pe=_==="x"?X:Q,ue=_==="x"?ot:it,_t=C[x],Qt=x==="y"?"height":"width",nn=_t+k[pe],de=_t-k[ue],Dt=[X,Q].indexOf(D)!==-1,Mt=(Ct=L==null?void 0:L[x])!=null?Ct:0,Nt=Dt?nn:_t-R[Qt]-U[Qt]-Mt+F.altAxis,Ie=Dt?_t+R[Qt]+U[Qt]-Mt-F.altAxis:de,$e=b&&Dt?sr(Nt,_t,Ie):Ve(b?Nt:nn,_t,b?Ie:de);C[x]=$e,q[x]=$e-_t}t.modifiersData[o]=q}}const Ts={name:"preventOverflow",enabled:!0,phase:"main",fn:xr,requiresIfExists:["offset"]};function Cr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Dr(e){return e===st(e)||!at(e)?Do(e):Cr(e)}function Mr(e){var t=e.getBoundingClientRect(),n=Se(t.width)/e.offsetWidth||1,o=Se(t.height)/e.offsetHeight||1;return n!==1||o!==1}function Nr(e,t,n){n===void 0&&(n=!1);var o=at(t),i=at(t)&&Mr(t),s=Vt(t),l=Ae(e,i,n),a={scrollLeft:0,scrollTop:0},r={x:0,y:0};return(o||!o&&!n)&&((At(t)!=="body"||No(s))&&(a=Dr(t)),at(t)?(r=Ae(t,!0),r.x+=t.clientLeft,r.y+=t.clientTop):s&&(r.x=Mo(s))),{x:l.left+a.scrollLeft-r.x,y:l.top+a.scrollTop-r.y,width:l.width,height:l.height}}function Lr(e){var t=new Map,n=new Set,o=[];e.forEach(function(s){t.set(s.name,s)});function i(s){n.add(s.name);var l=[].concat(s.requires||[],s.requiresIfExists||[]);l.forEach(function(a){if(!n.has(a)){var r=t.get(a);r&&i(r)}}),o.push(s)}return e.forEach(function(s){n.has(s.name)||i(s)}),o}function Ir(e){var t=Lr(e);return vs.reduce(function(n,o){return n.concat(t.filter(function(i){return i.phase===o}))},[])}function $r(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Rr(e){var t=e.reduce(function(n,o){var i=n[o.name];return n[o.name]=i?Object.assign({},i,o,{options:Object.assign({},i.options,o.options),data:Object.assign({},i.data,o.data)}):o,n},{});return Object.keys(t).map(function(n){return t[n]})}var ci={placement:"bottom",modifiers:[],strategy:"absolute"};function pi(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function xn(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,o=n===void 0?[]:n,i=t.defaultOptions,s=i===void 0?ci:i;return function(a,r,d){d===void 0&&(d=s);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},ci,s),modifiersData:{},elements:{reference:a,popper:r},attributes:{},styles:{}},f=[],y=!1,b={state:p,setOptions:function(D){var I=typeof D=="function"?D(p.options):D;A(),p.options=Object.assign({},s,p.options,I),p.scrollParents={reference:ie(a)?qe(a):a.contextElement?qe(a.contextElement):[],popper:qe(r)};var N=Ir(Rr([].concat(o,p.options.modifiers)));return p.orderedModifiers=N.filter(function(_){return _.enabled}),T(),b.update()},forceUpdate:function(){if(!y){var D=p.elements,I=D.reference,N=D.popper;if(pi(I,N)){p.rects={reference:Nr(I,Ye(N),p.options.strategy==="fixed"),popper:Oo(N)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(F){return p.modifiersData[F.name]=Object.assign({},F.data)});for(var _=0;_<p.orderedModifiers.length;_++){if(p.reset===!0){p.reset=!1,_=-1;continue}var x=p.orderedModifiers[_],C=x.fn,R=x.options,U=R===void 0?{}:R,G=x.name;typeof C=="function"&&(p=C({state:p,options:U,name:G,instance:b})||p)}}}},update:$r(function(){return new Promise(function(k){b.forceUpdate(),k(p)})}),destroy:function(){A(),y=!0}};if(!pi(a,r))return b;b.setOptions(d).then(function(k){!y&&d.onFirstUpdate&&d.onFirstUpdate(k)});function T(){p.orderedModifiers.forEach(function(k){var D=k.name,I=k.options,N=I===void 0?{}:I,_=k.effect;if(typeof _=="function"){var x=_({state:p,name:D,instance:b,options:N}),C=function(){};f.push(x||C)}})}function A(){f.forEach(function(k){return k()}),f=[]}return b}}var Pr=xn(),Hr=[Co,Lo,xo,ko],Br=xn({defaultModifiers:Hr}),Fr=[Co,Lo,xo,ko,Os,As,Ts,ys,ks],Io=xn({defaultModifiers:Fr});const xs=Object.freeze(Object.defineProperty({__proto__:null,afterMain:us,afterRead:rs,afterWrite:hs,applyStyles:ko,arrow:ys,auto:On,basePlacements:Ce,beforeMain:cs,beforeRead:ls,beforeWrite:ds,bottom:ot,clippingParents:is,computeStyles:xo,createPopper:Io,createPopperBase:Pr,createPopperLite:Br,detectOverflow:Oe,end:we,eventListeners:Co,flip:As,hide:ks,left:Q,main:ps,modifierPhases:vs,offset:Os,placements:So,popper:ge,popperGenerator:xn,popperOffsets:Lo,preventOverflow:Ts,read:as,reference:ss,right:it,start:oe,top:X,variationPlacements:co,viewport:wo,write:ms},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Ut=new Map,Hn={set(e,t,n){Ut.has(e)||Ut.set(e,new Map);const o=Ut.get(e);if(!o.has(t)&&o.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`);return}o.set(t,n)},get(e,t){return Ut.has(e)&&Ut.get(e).get(t)||null},remove(e,t){if(!Ut.has(e))return;const n=Ut.get(e);n.delete(t),n.size===0&&Ut.delete(e)}},Gr=1e6,Ur=1e3,mo="transitionend",Cs=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(t,n)=>`#${CSS.escape(n)}`)),e),jr=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),Wr=e=>{do e+=Math.floor(Math.random()*Gr);while(document.getElementById(e));return e},Jr=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const o=Number.parseFloat(t),i=Number.parseFloat(n);return!o&&!i?0:(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*Ur)},Ds=e=>{e.dispatchEvent(new Event(mo))},$t=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u"),jt=e=>$t(e)?e.jquery?e[0]:e:typeof e=="string"&&e.length>0?document.querySelector(Cs(e)):null,De=e=>{if(!$t(e)||e.getClientRects().length===0)return!1;const t=getComputedStyle(e).getPropertyValue("visibility")==="visible",n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const o=e.closest("summary");if(o&&o.parentNode!==n||o===null)return!1}return t},Wt=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled")?!0:typeof e.disabled<"u"?e.disabled:e.hasAttribute("disabled")&&e.getAttribute("disabled")!=="false",Ms=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode=="function"){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?Ms(e.parentNode):null},Sn=()=>{},Xe=e=>{e.offsetHeight},Ns=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Bn=[],Vr=e=>{document.readyState==="loading"?(Bn.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of Bn)t()}),Bn.push(e)):e()},rt=()=>document.documentElement.dir==="rtl",ut=e=>{Vr(()=>{const t=Ns();if(t){const n=e.NAME,o=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=o,e.jQueryInterface)}})},et=(e,t=[],n=e)=>typeof e=="function"?e(...t):n,Ls=(e,t,n=!0)=>{if(!n){et(e);return}const i=Jr(t)+5;let s=!1;const l=({target:a})=>{a===t&&(s=!0,t.removeEventListener(mo,l),et(e))};t.addEventListener(mo,l),setTimeout(()=>{s||Ds(t)},i)},$o=(e,t,n,o)=>{const i=e.length;let s=e.indexOf(t);return s===-1?!n&&o?e[i-1]:e[0]:(s+=n?1:-1,o&&(s=(s+i)%i),e[Math.max(0,Math.min(s,i-1))])},qr=/[^.]*(?=\..*)\.|.*/,zr=/\..*/,Kr=/::\d+$/,Fn={};let ui=1;const Is={mouseenter:"mouseover",mouseleave:"mouseout"},Yr=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function $s(e,t){return t&&`${t}::${ui++}`||e.uidEvent||ui++}function Rs(e){const t=$s(e);return e.uidEvent=t,Fn[t]=Fn[t]||{},Fn[t]}function Xr(e,t){return function n(o){return Ro(o,{delegateTarget:e}),n.oneOff&&h.off(e,o.type,t),t.apply(e,[o])}}function Qr(e,t,n){return function o(i){const s=e.querySelectorAll(t);for(let{target:l}=i;l&&l!==this;l=l.parentNode)for(const a of s)if(a===l)return Ro(i,{delegateTarget:l}),o.oneOff&&h.off(e,i.type,t,n),n.apply(l,[i])}}function Ps(e,t,n=null){return Object.values(e).find(o=>o.callable===t&&o.delegationSelector===n)}function Hs(e,t,n){const o=typeof t=="string",i=o?n:t||n;let s=Bs(e);return Yr.has(s)||(s=e),[o,i,s]}function di(e,t,n,o,i){if(typeof t!="string"||!e)return;let[s,l,a]=Hs(t,n,o);t in Is&&(l=(T=>function(A){if(!A.relatedTarget||A.relatedTarget!==A.delegateTarget&&!A.delegateTarget.contains(A.relatedTarget))return T.call(this,A)})(l));const r=Rs(e),d=r[a]||(r[a]={}),p=Ps(d,l,s?n:null);if(p){p.oneOff=p.oneOff&&i;return}const f=$s(l,t.replace(qr,"")),y=s?Qr(e,n,l):Xr(e,l);y.delegationSelector=s?n:null,y.callable=l,y.oneOff=i,y.uidEvent=f,d[f]=y,e.addEventListener(a,y,s)}function ho(e,t,n,o,i){const s=Ps(t[n],o,i);s&&(e.removeEventListener(n,s,!!i),delete t[n][s.uidEvent])}function Zr(e,t,n,o){const i=t[n]||{};for(const[s,l]of Object.entries(i))s.includes(o)&&ho(e,t,n,l.callable,l.delegationSelector)}function Bs(e){return e=e.replace(zr,""),Is[e]||e}const h={on(e,t,n,o){di(e,t,n,o,!1)},one(e,t,n,o){di(e,t,n,o,!0)},off(e,t,n,o){if(typeof t!="string"||!e)return;const[i,s,l]=Hs(t,n,o),a=l!==t,r=Rs(e),d=r[l]||{},p=t.startsWith(".");if(typeof s<"u"){if(!Object.keys(d).length)return;ho(e,r,l,s,i?n:null);return}if(p)for(const f of Object.keys(r))Zr(e,r,f,t.slice(1));for(const[f,y]of Object.entries(d)){const b=f.replace(Kr,"");(!a||t.includes(b))&&ho(e,r,l,y.callable,y.delegationSelector)}},trigger(e,t,n){if(typeof t!="string"||!e)return null;const o=Ns(),i=Bs(t),s=t!==i;let l=null,a=!0,r=!0,d=!1;s&&o&&(l=o.Event(t,n),o(e).trigger(l),a=!l.isPropagationStopped(),r=!l.isImmediatePropagationStopped(),d=l.isDefaultPrevented());const p=Ro(new Event(t,{bubbles:a,cancelable:!0}),n);return d&&p.preventDefault(),r&&e.dispatchEvent(p),p.defaultPrevented&&l&&l.preventDefault(),p}};function Ro(e,t={}){for(const[n,o]of Object.entries(t))try{e[n]=o}catch{Object.defineProperty(e,n,{configurable:!0,get(){return o}})}return e}function mi(e){if(e==="true")return!0;if(e==="false")return!1;if(e===Number(e).toString())return Number(e);if(e===""||e==="null")return null;if(typeof e!="string")return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function Gn(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const Rt={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${Gn(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${Gn(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter(o=>o.startsWith("bs")&&!o.startsWith("bsConfig"));for(const o of n){let i=o.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=mi(e.dataset[o])}return t},getDataAttribute(e,t){return mi(e.getAttribute(`data-bs-${Gn(t)}`))}};class Qe{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,n){const o=$t(n)?Rt.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof o=="object"?o:{},...$t(n)?Rt.getDataAttributes(n):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,n=this.constructor.DefaultType){for(const[o,i]of Object.entries(n)){const s=t[o],l=$t(s)?"element":jr(s);if(!new RegExp(i).test(l))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${o}" provided type "${l}" but expected type "${i}".`)}}}const tc="5.3.3";class bt extends Qe{constructor(t,n){super(),t=jt(t),t&&(this._element=t,this._config=this._getConfig(n),Hn.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Hn.remove(this._element,this.constructor.DATA_KEY),h.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,n,o=!0){Ls(t,n,o)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Hn.get(jt(t),this.DATA_KEY)}static getOrCreateInstance(t,n={}){return this.getInstance(t)||new this(t,typeof n=="object"?n:null)}static get VERSION(){return tc}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const Un=e=>{let t=e.getAttribute("data-bs-target");if(!t||t==="#"){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&n!=="#"?n.trim():null}return t?t.split(",").map(n=>Cs(n)).join(","):null},S={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(n=>n.matches(t))},parents(e,t){const n=[];let o=e.parentNode.closest(t);for(;o;)n.push(o),o=o.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(t,e).filter(n=>!Wt(n)&&De(n))},getSelectorFromElement(e){const t=Un(e);return t&&S.findOne(t)?t:null},getElementFromSelector(e){const t=Un(e);return t?S.findOne(t):null},getMultipleElementsFromSelector(e){const t=Un(e);return t?S.find(t):[]}},Cn=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,o=e.NAME;h.on(document,n,`[data-bs-dismiss="${o}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),Wt(this))return;const s=S.getElementFromSelector(this)||this.closest(`.${o}`);e.getOrCreateInstance(s)[t]()})},ec="alert",nc="bs.alert",Fs=`.${nc}`,oc=`close${Fs}`,ic=`closed${Fs}`,sc="fade",lc="show";class Dn extends bt{static get NAME(){return ec}close(){if(h.trigger(this._element,oc).defaultPrevented)return;this._element.classList.remove(lc);const n=this._element.classList.contains(sc);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),h.trigger(this._element,ic),this.dispose()}static jQueryInterface(t){return this.each(function(){const n=Dn.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}Cn(Dn,"close");ut(Dn);const ac="button",rc="bs.button",cc=`.${rc}`,pc=".data-api",uc="active",hi='[data-bs-toggle="button"]',dc=`click${cc}${pc}`;class Mn extends bt{static get NAME(){return ac}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(uc))}static jQueryInterface(t){return this.each(function(){const n=Mn.getOrCreateInstance(this);t==="toggle"&&n[t]()})}}h.on(document,dc,hi,e=>{e.preventDefault();const t=e.target.closest(hi);Mn.getOrCreateInstance(t).toggle()});ut(Mn);const mc="swipe",Me=".bs.swipe",hc=`touchstart${Me}`,vc=`touchmove${Me}`,fc=`touchend${Me}`,bc=`pointerdown${Me}`,gc=`pointerup${Me}`,_c="touch",Ec="pen",yc="pointer-event",wc=40,Sc={endCallback:null,leftCallback:null,rightCallback:null},Ac={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class An extends Qe{constructor(t,n){super(),this._element=t,!(!t||!An.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Sc}static get DefaultType(){return Ac}static get NAME(){return mc}dispose(){h.off(this._element,Me)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),et(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=wc)return;const n=t/this._deltaX;this._deltaX=0,n&&et(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(h.on(this._element,bc,t=>this._start(t)),h.on(this._element,gc,t=>this._end(t)),this._element.classList.add(yc)):(h.on(this._element,hc,t=>this._start(t)),h.on(this._element,vc,t=>this._move(t)),h.on(this._element,fc,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===Ec||t.pointerType===_c)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const kc="carousel",Oc="bs.carousel",qt=`.${Oc}`,Gs=".data-api",Tc="ArrowLeft",xc="ArrowRight",Cc=500,He="next",ve="prev",_e="left",_n="right",Dc=`slide${qt}`,jn=`slid${qt}`,Mc=`keydown${qt}`,Nc=`mouseenter${qt}`,Lc=`mouseleave${qt}`,Ic=`dragstart${qt}`,$c=`load${qt}${Gs}`,Rc=`click${qt}${Gs}`,Us="carousel",rn="active",Pc="slide",Hc="carousel-item-end",Bc="carousel-item-start",Fc="carousel-item-next",Gc="carousel-item-prev",js=".active",Ws=".carousel-item",Uc=js+Ws,jc=".carousel-item img",Wc=".carousel-indicators",Jc="[data-bs-slide], [data-bs-slide-to]",Vc='[data-bs-ride="carousel"]',qc={[Tc]:_n,[xc]:_e},zc={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Kc={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Ze extends bt{constructor(t,n){super(t,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=S.findOne(Wc,this._element),this._addEventListeners(),this._config.ride===Us&&this.cycle()}static get Default(){return zc}static get DefaultType(){return Kc}static get NAME(){return kc}next(){this._slide(He)}nextWhenVisible(){!document.hidden&&De(this._element)&&this.next()}prev(){this._slide(ve)}pause(){this._isSliding&&Ds(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){h.one(this._element,jn,()=>this.cycle());return}this.cycle()}}to(t){const n=this._getItems();if(t>n.length-1||t<0)return;if(this._isSliding){h.one(this._element,jn,()=>this.to(t));return}const o=this._getItemIndex(this._getActive());if(o===t)return;const i=t>o?He:ve;this._slide(i,n[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&h.on(this._element,Mc,t=>this._keydown(t)),this._config.pause==="hover"&&(h.on(this._element,Nc,()=>this.pause()),h.on(this._element,Lc,()=>this._maybeEnableCycle())),this._config.touch&&An.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const o of S.find(jc,this._element))h.on(o,Ic,i=>i.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(_e)),rightCallback:()=>this._slide(this._directionToOrder(_n)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Cc+this._config.interval))}};this._swipeHelper=new An(this._element,n)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const n=qc[t.key];n&&(t.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const n=S.findOne(js,this._indicatorsElement);n.classList.remove(rn),n.removeAttribute("aria-current");const o=S.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);o&&(o.classList.add(rn),o.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const n=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(t,n=null){if(this._isSliding)return;const o=this._getActive(),i=t===He,s=n||$o(this._getItems(),o,i,this._config.wrap);if(s===o)return;const l=this._getItemIndex(s),a=b=>h.trigger(this._element,b,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(o),to:l});if(a(Dc).defaultPrevented||!o||!s)return;const d=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(l),this._activeElement=s;const p=i?Bc:Hc,f=i?Fc:Gc;s.classList.add(f),Xe(s),o.classList.add(p),s.classList.add(p);const y=()=>{s.classList.remove(p,f),s.classList.add(rn),o.classList.remove(rn,f,p),this._isSliding=!1,a(jn)};this._queueCallback(y,o,this._isAnimated()),d&&this.cycle()}_isAnimated(){return this._element.classList.contains(Pc)}_getActive(){return S.findOne(Uc,this._element)}_getItems(){return S.find(Ws,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return rt()?t===_e?ve:He:t===_e?He:ve}_orderToDirection(t){return rt()?t===ve?_e:_n:t===ve?_n:_e}static jQueryInterface(t){return this.each(function(){const n=Ze.getOrCreateInstance(this,t);if(typeof t=="number"){n.to(t);return}if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}h.on(document,Rc,Jc,function(e){const t=S.getElementFromSelector(this);if(!t||!t.classList.contains(Us))return;e.preventDefault();const n=Ze.getOrCreateInstance(t),o=this.getAttribute("data-bs-slide-to");if(o){n.to(o),n._maybeEnableCycle();return}if(Rt.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});h.on(window,$c,()=>{const e=S.find(Vc);for(const t of e)Ze.getOrCreateInstance(t)});ut(Ze);const Yc="collapse",Xc="bs.collapse",tn=`.${Xc}`,Qc=".data-api",Zc=`show${tn}`,tp=`shown${tn}`,ep=`hide${tn}`,np=`hidden${tn}`,op=`click${tn}${Qc}`,Wn="show",ye="collapse",cn="collapsing",ip="collapsed",sp=`:scope .${ye} .${ye}`,lp="collapse-horizontal",ap="width",rp="height",cp=".collapse.show, .collapse.collapsing",vo='[data-bs-toggle="collapse"]',pp={parent:null,toggle:!0},up={parent:"(null|element)",toggle:"boolean"};class Ke extends bt{constructor(t,n){super(t,n),this._isTransitioning=!1,this._triggerArray=[];const o=S.find(vo);for(const i of o){const s=S.getSelectorFromElement(i),l=S.find(s).filter(a=>a===this._element);s!==null&&l.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return pp}static get DefaultType(){return up}static get NAME(){return Yc}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(cp).filter(a=>a!==this._element).map(a=>Ke.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||h.trigger(this._element,Zc).defaultPrevented)return;for(const a of t)a.hide();const o=this._getDimension();this._element.classList.remove(ye),this._element.classList.add(cn),this._element.style[o]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(cn),this._element.classList.add(ye,Wn),this._element.style[o]="",h.trigger(this._element,tp)},l=`scroll${o[0].toUpperCase()+o.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[o]=`${this._element[l]}px`}hide(){if(this._isTransitioning||!this._isShown()||h.trigger(this._element,ep).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,Xe(this._element),this._element.classList.add(cn),this._element.classList.remove(ye,Wn);for(const i of this._triggerArray){const s=S.getElementFromSelector(i);s&&!this._isShown(s)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(cn),this._element.classList.add(ye),h.trigger(this._element,np)};this._element.style[n]="",this._queueCallback(o,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Wn)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=jt(t.parent),t}_getDimension(){return this._element.classList.contains(lp)?ap:rp}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(vo);for(const n of t){const o=S.getElementFromSelector(n);o&&this._addAriaAndCollapsedClass([n],this._isShown(o))}}_getFirstLevelChildren(t){const n=S.find(sp,this._config.parent);return S.find(t,this._config.parent).filter(o=>!n.includes(o))}_addAriaAndCollapsedClass(t,n){if(t.length)for(const o of t)o.classList.toggle(ip,!n),o.setAttribute("aria-expanded",n)}static jQueryInterface(t){const n={};return typeof t=="string"&&/show|hide/.test(t)&&(n.toggle=!1),this.each(function(){const o=Ke.getOrCreateInstance(this,n);if(typeof t=="string"){if(typeof o[t]>"u")throw new TypeError(`No method named "${t}"`);o[t]()}})}}h.on(document,op,vo,function(e){(e.target.tagName==="A"||e.delegateTarget&&e.delegateTarget.tagName==="A")&&e.preventDefault();for(const t of S.getMultipleElementsFromSelector(this))Ke.getOrCreateInstance(t,{toggle:!1}).toggle()});ut(Ke);const vi="dropdown",dp="bs.dropdown",se=`.${dp}`,Po=".data-api",mp="Escape",fi="Tab",hp="ArrowUp",bi="ArrowDown",vp=2,fp=`hide${se}`,bp=`hidden${se}`,gp=`show${se}`,_p=`shown${se}`,Js=`click${se}${Po}`,Vs=`keydown${se}${Po}`,Ep=`keyup${se}${Po}`,Ee="show",yp="dropup",wp="dropend",Sp="dropstart",Ap="dropup-center",kp="dropdown-center",te='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Op=`${te}.${Ee}`,En=".dropdown-menu",Tp=".navbar",xp=".navbar-nav",Cp=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Dp=rt()?"top-end":"top-start",Mp=rt()?"top-start":"top-end",Np=rt()?"bottom-end":"bottom-start",Lp=rt()?"bottom-start":"bottom-end",Ip=rt()?"left-start":"right-start",$p=rt()?"right-start":"left-start",Rp="top",Pp="bottom",Hp={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Bp={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class St extends bt{constructor(t,n){super(t,n),this._popper=null,this._parent=this._element.parentNode,this._menu=S.next(this._element,En)[0]||S.prev(this._element,En)[0]||S.findOne(En,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Hp}static get DefaultType(){return Bp}static get NAME(){return vi}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Wt(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!h.trigger(this._element,gp,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(xp))for(const o of[].concat(...document.body.children))h.on(o,"mouseover",Sn);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ee),this._element.classList.add(Ee),h.trigger(this._element,_p,t)}}hide(){if(Wt(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!h.trigger(this._element,fp,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))h.off(o,"mouseover",Sn);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ee),this._element.classList.remove(Ee),this._element.setAttribute("aria-expanded","false"),Rt.removeDataAttribute(this._menu,"popper"),h.trigger(this._element,bp,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!$t(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${vi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof xs>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:$t(this._config.reference)?t=jt(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const n=this._getPopperConfig();this._popper=Io(t,this._menu,n)}_isShown(){return this._menu.classList.contains(Ee)}_getPlacement(){const t=this._parent;if(t.classList.contains(wp))return Ip;if(t.classList.contains(Sp))return $p;if(t.classList.contains(Ap))return Rp;if(t.classList.contains(kp))return Pp;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(yp)?n?Mp:Dp:n?Lp:Np}_detectNavbar(){return this._element.closest(Tp)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Rt.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...et(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:n}){const o=S.find(Cp,this._menu).filter(i=>De(i));o.length&&$o(o,n,t===bi,!o.includes(n)).focus()}static jQueryInterface(t){return this.each(function(){const n=St.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}static clearMenus(t){if(t.button===vp||t.type==="keyup"&&t.key!==fi)return;const n=S.find(Op);for(const o of n){const i=St.getInstance(o);if(!i||i._config.autoClose===!1)continue;const s=t.composedPath(),l=s.includes(i._menu);if(s.includes(i._element)||i._config.autoClose==="inside"&&!l||i._config.autoClose==="outside"&&l||i._menu.contains(t.target)&&(t.type==="keyup"&&t.key===fi||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:i._element};t.type==="click"&&(a.clickEvent=t),i._completeHide(a)}}static dataApiKeydownHandler(t){const n=/input|textarea/i.test(t.target.tagName),o=t.key===mp,i=[hp,bi].includes(t.key);if(!i&&!o||n&&!o)return;t.preventDefault();const s=this.matches(te)?this:S.prev(this,te)[0]||S.next(this,te)[0]||S.findOne(te,t.delegateTarget.parentNode),l=St.getOrCreateInstance(s);if(i){t.stopPropagation(),l.show(),l._selectMenuItem(t);return}l._isShown()&&(t.stopPropagation(),l.hide(),s.focus())}}h.on(document,Vs,te,St.dataApiKeydownHandler);h.on(document,Vs,En,St.dataApiKeydownHandler);h.on(document,Js,St.clearMenus);h.on(document,Ep,St.clearMenus);h.on(document,Js,te,function(e){e.preventDefault(),St.getOrCreateInstance(this).toggle()});ut(St);const qs="backdrop",Fp="fade",gi="show",_i=`mousedown.bs.${qs}`,Gp={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Up={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class zs extends Qe{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Gp}static get DefaultType(){return Up}static get NAME(){return qs}show(t){if(!this._config.isVisible){et(t);return}this._append();const n=this._getElement();this._config.isAnimated&&Xe(n),n.classList.add(gi),this._emulateAnimation(()=>{et(t)})}hide(t){if(!this._config.isVisible){et(t);return}this._getElement().classList.remove(gi),this._emulateAnimation(()=>{this.dispose(),et(t)})}dispose(){this._isAppended&&(h.off(this._element,_i),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Fp),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=jt(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),h.on(t,_i,()=>{et(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Ls(t,this._getElement(),this._config.isAnimated)}}const jp="focustrap",Wp="bs.focustrap",kn=`.${Wp}`,Jp=`focusin${kn}`,Vp=`keydown.tab${kn}`,qp="Tab",zp="forward",Ei="backward",Kp={autofocus:!0,trapElement:null},Yp={autofocus:"boolean",trapElement:"element"};class Ks extends Qe{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Kp}static get DefaultType(){return Yp}static get NAME(){return jp}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),h.off(document,kn),h.on(document,Jp,t=>this._handleFocusin(t)),h.on(document,Vp,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,h.off(document,kn))}_handleFocusin(t){const{trapElement:n}=this._config;if(t.target===document||t.target===n||n.contains(t.target))return;const o=S.focusableChildren(n);o.length===0?n.focus():this._lastTabNavDirection===Ei?o[o.length-1].focus():o[0].focus()}_handleKeydown(t){t.key===qp&&(this._lastTabNavDirection=t.shiftKey?Ei:zp)}}const yi=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",wi=".sticky-top",pn="padding-right",Si="margin-right";class fo{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,pn,n=>n+t),this._setElementAttributes(yi,pn,n=>n+t),this._setElementAttributes(wi,Si,n=>n-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,pn),this._resetElementAttributes(yi,pn),this._resetElementAttributes(wi,Si)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,n,o){const i=this.getWidth(),s=l=>{if(l!==this._element&&window.innerWidth>l.clientWidth+i)return;this._saveInitialAttribute(l,n);const a=window.getComputedStyle(l).getPropertyValue(n);l.style.setProperty(n,`${o(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,s)}_saveInitialAttribute(t,n){const o=t.style.getPropertyValue(n);o&&Rt.setDataAttribute(t,n,o)}_resetElementAttributes(t,n){const o=i=>{const s=Rt.getDataAttribute(i,n);if(s===null){i.style.removeProperty(n);return}Rt.removeDataAttribute(i,n),i.style.setProperty(n,s)};this._applyManipulationCallback(t,o)}_applyManipulationCallback(t,n){if($t(t)){n(t);return}for(const o of S.find(t,this._element))n(o)}}const Xp="modal",Qp="bs.modal",ct=`.${Qp}`,Zp=".data-api",tu="Escape",eu=`hide${ct}`,nu=`hidePrevented${ct}`,Ys=`hidden${ct}`,Xs=`show${ct}`,ou=`shown${ct}`,iu=`resize${ct}`,su=`click.dismiss${ct}`,lu=`mousedown.dismiss${ct}`,au=`keydown.dismiss${ct}`,ru=`click${ct}${Zp}`,Ai="modal-open",cu="fade",ki="show",Jn="modal-static",pu=".modal.show",uu=".modal-dialog",du=".modal-body",mu='[data-bs-toggle="modal"]',hu={backdrop:!0,focus:!0,keyboard:!0},vu={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Te extends bt{constructor(t,n){super(t,n),this._dialog=S.findOne(uu,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new fo,this._addEventListeners()}static get Default(){return hu}static get DefaultType(){return vu}static get NAME(){return Xp}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||h.trigger(this._element,Xs,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Ai),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||h.trigger(this._element,eu).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(ki),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){h.off(window,ct),h.off(this._dialog,ct),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new zs({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ks({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=S.findOne(du,this._dialog);n&&(n.scrollTop=0),Xe(this._element),this._element.classList.add(ki);const o=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,h.trigger(this._element,ou,{relatedTarget:t})};this._queueCallback(o,this._dialog,this._isAnimated())}_addEventListeners(){h.on(this._element,au,t=>{if(t.key===tu){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),h.on(window,iu,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),h.on(this._element,lu,t=>{h.one(this._element,su,n=>{if(!(this._element!==t.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Ai),this._resetAdjustments(),this._scrollBar.reset(),h.trigger(this._element,Ys)})}_isAnimated(){return this._element.classList.contains(cu)}_triggerBackdropTransition(){if(h.trigger(this._element,nu).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,o=this._element.style.overflowY;o==="hidden"||this._element.classList.contains(Jn)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(Jn),this._queueCallback(()=>{this._element.classList.remove(Jn),this._queueCallback(()=>{this._element.style.overflowY=o},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),o=n>0;if(o&&!t){const i=rt()?"paddingLeft":"paddingRight";this._element.style[i]=`${n}px`}if(!o&&t){const i=rt()?"paddingRight":"paddingLeft";this._element.style[i]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,n){return this.each(function(){const o=Te.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof o[t]>"u")throw new TypeError(`No method named "${t}"`);o[t](n)}})}}h.on(document,ru,mu,function(e){const t=S.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),h.one(t,Xs,i=>{i.defaultPrevented||h.one(t,Ys,()=>{De(this)&&this.focus()})});const n=S.findOne(pu);n&&Te.getInstance(n).hide(),Te.getOrCreateInstance(t).toggle(this)});Cn(Te);ut(Te);const fu="offcanvas",bu="bs.offcanvas",Ht=`.${bu}`,Qs=".data-api",gu=`load${Ht}${Qs}`,_u="Escape",Oi="show",Ti="showing",xi="hiding",Eu="offcanvas-backdrop",Zs=".offcanvas.show",yu=`show${Ht}`,wu=`shown${Ht}`,Su=`hide${Ht}`,Ci=`hidePrevented${Ht}`,tl=`hidden${Ht}`,Au=`resize${Ht}`,ku=`click${Ht}${Qs}`,Ou=`keydown.dismiss${Ht}`,Tu='[data-bs-toggle="offcanvas"]',xu={backdrop:!0,keyboard:!0,scroll:!1},Cu={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Jt extends bt{constructor(t,n){super(t,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return xu}static get DefaultType(){return Cu}static get NAME(){return fu}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||h.trigger(this._element,yu,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new fo().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ti);const o=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Oi),this._element.classList.remove(Ti),h.trigger(this._element,wu,{relatedTarget:t})};this._queueCallback(o,this._element,!0)}hide(){if(!this._isShown||h.trigger(this._element,Su).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(xi),this._backdrop.hide();const n=()=>{this._element.classList.remove(Oi,xi),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new fo().reset(),h.trigger(this._element,tl)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){h.trigger(this._element,Ci);return}this.hide()},n=!!this._config.backdrop;return new zs({className:Eu,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?t:null})}_initializeFocusTrap(){return new Ks({trapElement:this._element})}_addEventListeners(){h.on(this._element,Ou,t=>{if(t.key===_u){if(this._config.keyboard){this.hide();return}h.trigger(this._element,Ci)}})}static jQueryInterface(t){return this.each(function(){const n=Jt.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}h.on(document,ku,Tu,function(e){const t=S.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),Wt(this))return;h.one(t,tl,()=>{De(this)&&this.focus()});const n=S.findOne(Zs);n&&n!==t&&Jt.getInstance(n).hide(),Jt.getOrCreateInstance(t).toggle(this)});h.on(window,gu,()=>{for(const e of S.find(Zs))Jt.getOrCreateInstance(e).show()});h.on(window,Au,()=>{for(const e of S.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(e).position!=="fixed"&&Jt.getOrCreateInstance(e).hide()});Cn(Jt);ut(Jt);const Du=/^aria-[\w-]*$/i,el={"*":["class","dir","id","lang","role",Du],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Mu=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Nu=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Lu=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?Mu.has(n)?!!Nu.test(e.nodeValue):!0:t.filter(o=>o instanceof RegExp).some(o=>o.test(n))};function Iu(e,t,n){if(!e.length)return e;if(n&&typeof n=="function")return n(e);const i=new window.DOMParser().parseFromString(e,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const l of s){const a=l.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){l.remove();continue}const r=[].concat(...l.attributes),d=[].concat(t["*"]||[],t[a]||[]);for(const p of r)Lu(p,d)||l.removeAttribute(p.nodeName)}return i.body.innerHTML}const $u="TemplateFactory",Ru={allowList:el,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Pu={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Hu={entry:"(string|element|function|null)",selector:"(string|element)"};class Bu extends Qe{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Ru}static get DefaultType(){return Pu}static get NAME(){return $u}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[i,s]of Object.entries(this._config.content))this._setContent(t,s,i);const n=t.children[0],o=this._resolvePossibleFunction(this._config.extraClass);return o&&n.classList.add(...o.split(" ")),n}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[n,o]of Object.entries(t))super._typeCheckConfig({selector:n,entry:o},Hu)}_setContent(t,n,o){const i=S.findOne(o,t);if(i){if(n=this._resolvePossibleFunction(n),!n){i.remove();return}if($t(n)){this._putElementInTemplate(jt(n),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(n);return}i.textContent=n}}_maybeSanitize(t){return this._config.sanitize?Iu(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return et(t,[this])}_putElementInTemplate(t,n){if(this._config.html){n.innerHTML="",n.append(t);return}n.textContent=t.textContent}}const Fu="tooltip",Gu=new Set(["sanitize","allowList","sanitizeFn"]),Vn="fade",Uu="modal",un="show",ju=".tooltip-inner",Di=`.${Uu}`,Mi="hide.bs.modal",Be="hover",qn="focus",Wu="click",Ju="manual",Vu="hide",qu="hidden",zu="show",Ku="shown",Yu="inserted",Xu="click",Qu="focusin",Zu="focusout",td="mouseenter",ed="mouseleave",nd={AUTO:"auto",TOP:"top",RIGHT:rt()?"left":"right",BOTTOM:"bottom",LEFT:rt()?"right":"left"},od={allowList:el,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},id={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Ne extends bt{constructor(t,n){if(typeof xs>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return od}static get DefaultType(){return id}static get NAME(){return Fu}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),h.off(this._element.closest(Di),Mi,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=h.trigger(this._element,this.constructor.eventName(zu)),o=(Ms(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!o)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),h.trigger(this._element,this.constructor.eventName(Yu))),this._popper=this._createPopper(i),i.classList.add(un),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))h.on(a,"mouseover",Sn);const l=()=>{h.trigger(this._element,this.constructor.eventName(Ku)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(l,this.tip,this._isAnimated())}hide(){if(!this._isShown()||h.trigger(this._element,this.constructor.eventName(Vu)).defaultPrevented)return;if(this._getTipElement().classList.remove(un),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))h.off(i,"mouseover",Sn);this._activeTrigger[Wu]=!1,this._activeTrigger[qn]=!1,this._activeTrigger[Be]=!1,this._isHovered=null;const o=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),h.trigger(this._element,this.constructor.eventName(qu)))};this._queueCallback(o,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const n=this._getTemplateFactory(t).toHtml();if(!n)return null;n.classList.remove(Vn,un),n.classList.add(`bs-${this.constructor.NAME}-auto`);const o=Wr(this.constructor.NAME).toString();return n.setAttribute("id",o),this._isAnimated()&&n.classList.add(Vn),n}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Bu({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[ju]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Vn)}_isShown(){return this.tip&&this.tip.classList.contains(un)}_createPopper(t){const n=et(this._config.placement,[this,t,this._element]),o=nd[n.toUpperCase()];return Io(this._element,t,this._getPopperConfig(o))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_resolvePossibleFunction(t){return et(t,[this._element])}_getPopperConfig(t){const n={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:o=>{this._getTipElement().setAttribute("data-popper-placement",o.state.placement)}}]};return{...n,...et(this._config.popperConfig,[n])}}_setListeners(){const t=this._config.trigger.split(" ");for(const n of t)if(n==="click")h.on(this._element,this.constructor.eventName(Xu),this._config.selector,o=>{this._initializeOnDelegatedTarget(o).toggle()});else if(n!==Ju){const o=n===Be?this.constructor.eventName(td):this.constructor.eventName(Qu),i=n===Be?this.constructor.eventName(ed):this.constructor.eventName(Zu);h.on(this._element,o,this._config.selector,s=>{const l=this._initializeOnDelegatedTarget(s);l._activeTrigger[s.type==="focusin"?qn:Be]=!0,l._enter()}),h.on(this._element,i,this._config.selector,s=>{const l=this._initializeOnDelegatedTarget(s);l._activeTrigger[s.type==="focusout"?qn:Be]=l._element.contains(s.relatedTarget),l._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},h.on(this._element.closest(Di),Mi,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,n){clearTimeout(this._timeout),this._timeout=setTimeout(t,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const n=Rt.getDataAttributes(this._element);for(const o of Object.keys(n))Gu.has(o)&&delete n[o];return t={...n,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:jt(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[n,o]of Object.entries(this._config))this.constructor.Default[n]!==o&&(t[n]=o);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const n=Ne.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}ut(Ne);const sd="popover",ld=".popover-header",ad=".popover-body",rd={...Ne.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},cd={...Ne.DefaultType,content:"(null|string|element|function)"};class Ho extends Ne{static get Default(){return rd}static get DefaultType(){return cd}static get NAME(){return sd}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[ld]:this._getTitle(),[ad]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const n=Ho.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}ut(Ho);const pd="scrollspy",ud="bs.scrollspy",Bo=`.${ud}`,dd=".data-api",md=`activate${Bo}`,Ni=`click${Bo}`,hd=`load${Bo}${dd}`,vd="dropdown-item",fe="active",fd='[data-bs-spy="scroll"]',zn="[href]",bd=".nav, .list-group",Li=".nav-link",gd=".nav-item",_d=".list-group-item",Ed=`${Li}, ${gd} > ${Li}, ${_d}`,yd=".dropdown",wd=".dropdown-toggle",Sd={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Ad={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Nn extends bt{constructor(t,n){super(t,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Sd}static get DefaultType(){return Ad}static get NAME(){return pd}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=jt(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(n=>Number.parseFloat(n))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(h.off(this._config.target,Ni),h.on(this._config.target,Ni,zn,t=>{const n=this._observableSections.get(t.target.hash);if(n){t.preventDefault();const o=this._rootElement||window,i=n.offsetTop-this._element.offsetTop;if(o.scrollTo){o.scrollTo({top:i,behavior:"smooth"});return}o.scrollTop=i}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),t)}_observerCallback(t){const n=l=>this._targetLinks.get(`#${l.target.id}`),o=l=>{this._previousScrollData.visibleEntryTop=l.target.offsetTop,this._process(n(l))},i=(this._rootElement||document.documentElement).scrollTop,s=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const l of t){if(!l.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(l));continue}const a=l.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&a){if(o(l),!i)return;continue}!s&&!a&&o(l)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=S.find(zn,this._config.target);for(const n of t){if(!n.hash||Wt(n))continue;const o=S.findOne(decodeURI(n.hash),this._element);De(o)&&(this._targetLinks.set(decodeURI(n.hash),n),this._observableSections.set(n.hash,o))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(fe),this._activateParents(t),h.trigger(this._element,md,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(vd)){S.findOne(wd,t.closest(yd)).classList.add(fe);return}for(const n of S.parents(t,bd))for(const o of S.prev(n,Ed))o.classList.add(fe)}_clearActiveClass(t){t.classList.remove(fe);const n=S.find(`${zn}.${fe}`,t);for(const o of n)o.classList.remove(fe)}static jQueryInterface(t){return this.each(function(){const n=Nn.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}h.on(window,hd,()=>{for(const e of S.find(fd))Nn.getOrCreateInstance(e)});ut(Nn);const kd="tab",Od="bs.tab",le=`.${Od}`,Td=`hide${le}`,xd=`hidden${le}`,Cd=`show${le}`,Dd=`shown${le}`,Md=`click${le}`,Nd=`keydown${le}`,Ld=`load${le}`,Id="ArrowLeft",Ii="ArrowRight",$d="ArrowUp",$i="ArrowDown",Kn="Home",Ri="End",ee="active",Pi="fade",Yn="show",Rd="dropdown",nl=".dropdown-toggle",Pd=".dropdown-menu",Xn=`:not(${nl})`,Hd='.list-group, .nav, [role="tablist"]',Bd=".nav-item, .list-group-item",Fd=`.nav-link${Xn}, .list-group-item${Xn}, [role="tab"]${Xn}`,ol='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Qn=`${Fd}, ${ol}`,Gd=`.${ee}[data-bs-toggle="tab"], .${ee}[data-bs-toggle="pill"], .${ee}[data-bs-toggle="list"]`;class xe extends bt{constructor(t){super(t),this._parent=this._element.closest(Hd),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),h.on(this._element,Nd,n=>this._keydown(n)))}static get NAME(){return kd}show(){const t=this._element;if(this._elemIsActive(t))return;const n=this._getActiveElem(),o=n?h.trigger(n,Td,{relatedTarget:t}):null;h.trigger(t,Cd,{relatedTarget:n}).defaultPrevented||o&&o.defaultPrevented||(this._deactivate(n,t),this._activate(t,n))}_activate(t,n){if(!t)return;t.classList.add(ee),this._activate(S.getElementFromSelector(t));const o=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(Yn);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),h.trigger(t,Dd,{relatedTarget:n})};this._queueCallback(o,t,t.classList.contains(Pi))}_deactivate(t,n){if(!t)return;t.classList.remove(ee),t.blur(),this._deactivate(S.getElementFromSelector(t));const o=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(Yn);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),h.trigger(t,xd,{relatedTarget:n})};this._queueCallback(o,t,t.classList.contains(Pi))}_keydown(t){if(![Id,Ii,$d,$i,Kn,Ri].includes(t.key))return;t.stopPropagation(),t.preventDefault();const n=this._getChildren().filter(i=>!Wt(i));let o;if([Kn,Ri].includes(t.key))o=n[t.key===Kn?0:n.length-1];else{const i=[Ii,$i].includes(t.key);o=$o(n,t.target,i,!0)}o&&(o.focus({preventScroll:!0}),xe.getOrCreateInstance(o).show())}_getChildren(){return S.find(Qn,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,n){this._setAttributeIfNotExists(t,"role","tablist");for(const o of n)this._setInitialAttributesOnChild(o)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const n=this._elemIsActive(t),o=this._getOuterElement(t);t.setAttribute("aria-selected",n),o!==t&&this._setAttributeIfNotExists(o,"role","presentation"),n||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const n=S.getElementFromSelector(t);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,n){const o=this._getOuterElement(t);if(!o.classList.contains(Rd))return;const i=(s,l)=>{const a=S.findOne(s,o);a&&a.classList.toggle(l,n)};i(nl,ee),i(Pd,Yn),o.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(t,n,o){t.hasAttribute(n)||t.setAttribute(n,o)}_elemIsActive(t){return t.classList.contains(ee)}_getInnerElement(t){return t.matches(Qn)?t:S.findOne(Qn,t)}_getOuterElement(t){return t.closest(Bd)||t}static jQueryInterface(t){return this.each(function(){const n=xe.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}h.on(document,Md,ol,function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),!Wt(this)&&xe.getOrCreateInstance(this).show()});h.on(window,Ld,()=>{for(const e of S.find(Gd))xe.getOrCreateInstance(e)});ut(xe);const Ud="toast",jd="bs.toast",zt=`.${jd}`,Wd=`mouseover${zt}`,Jd=`mouseout${zt}`,Vd=`focusin${zt}`,qd=`focusout${zt}`,zd=`hide${zt}`,Kd=`hidden${zt}`,Yd=`show${zt}`,Xd=`shown${zt}`,Qd="fade",Hi="hide",dn="show",mn="showing",Zd={animation:"boolean",autohide:"boolean",delay:"number"},tm={animation:!0,autohide:!0,delay:5e3};class Ln extends bt{constructor(t,n){super(t,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return tm}static get DefaultType(){return Zd}static get NAME(){return Ud}show(){if(h.trigger(this._element,Yd).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Qd);const n=()=>{this._element.classList.remove(mn),h.trigger(this._element,Xd),this._maybeScheduleHide()};this._element.classList.remove(Hi),Xe(this._element),this._element.classList.add(dn,mn),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||h.trigger(this._element,zd).defaultPrevented)return;const n=()=>{this._element.classList.add(Hi),this._element.classList.remove(mn,dn),h.trigger(this._element,Kd)};this._element.classList.add(mn),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(dn),super.dispose()}isShown(){return this._element.classList.contains(dn)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,n){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const o=t.relatedTarget;this._element===o||this._element.contains(o)||this._maybeScheduleHide()}_setListeners(){h.on(this._element,Wd,t=>this._onInteraction(t,!0)),h.on(this._element,Jd,t=>this._onInteraction(t,!1)),h.on(this._element,Vd,t=>this._onInteraction(t,!0)),h.on(this._element,qd,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const n=Ln.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}Cn(Ln);ut(Ln);/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */const{entries:il,setPrototypeOf:Bi,isFrozen:em,getPrototypeOf:nm,getOwnPropertyDescriptor:om}=Object;let{freeze:Z,seal:pt,create:sl}=Object,{apply:bo,construct:go}=typeof Reflect<"u"&&Reflect;Z||(Z=function(t){return t});pt||(pt=function(t){return t});bo||(bo=function(t,n,o){return t.apply(n,o)});go||(go=function(t,n){return new t(...n)});const hn=lt(Array.prototype.forEach),Fi=lt(Array.prototype.pop),Fe=lt(Array.prototype.push),yn=lt(String.prototype.toLowerCase),Zn=lt(String.prototype.toString),Gi=lt(String.prototype.match),Ge=lt(String.prototype.replace),im=lt(String.prototype.indexOf),sm=lt(String.prototype.trim),ht=lt(Object.prototype.hasOwnProperty),Y=lt(RegExp.prototype.test),Ue=lm(TypeError);function lt(e){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return bo(e,t,o)}}function lm(e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return go(e,n)}}function O(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:yn;Bi&&Bi(e,null);let o=t.length;for(;o--;){let i=t[o];if(typeof i=="string"){const s=n(i);s!==i&&(em(t)||(t[o]=s),i=s)}e[i]=!0}return e}function am(e){for(let t=0;t<e.length;t++)ht(e,t)||(e[t]=null);return e}function Zt(e){const t=sl(null);for(const[n,o]of il(e))ht(e,n)&&(Array.isArray(o)?t[n]=am(o):o&&typeof o=="object"&&o.constructor===Object?t[n]=Zt(o):t[n]=o);return t}function je(e,t){for(;e!==null;){const o=om(e,t);if(o){if(o.get)return lt(o.get);if(typeof o.value=="function")return lt(o.value)}e=nm(e)}function n(){return null}return n}const Ui=Z(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),to=Z(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),eo=Z(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),rm=Z(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),no=Z(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),cm=Z(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ji=Z(["#text"]),Wi=Z(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),oo=Z(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ji=Z(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),vn=Z(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),pm=pt(/\{\{[\w\W]*|[\w\W]*\}\}/gm),um=pt(/<%[\w\W]*|[\w\W]*%>/gm),dm=pt(/\${[\w\W]*}/gm),mm=pt(/^data-[\-\w.\u00B7-\uFFFF]/),hm=pt(/^aria-[\-\w]+$/),ll=pt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),vm=pt(/^(?:\w+script|data):/i),fm=pt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),al=pt(/^html$/i),bm=pt(/^[a-z][.\w]*(-[.\w]+)+$/i);var Vi=Object.freeze({__proto__:null,MUSTACHE_EXPR:pm,ERB_EXPR:um,TMPLIT_EXPR:dm,DATA_ATTR:mm,ARIA_ATTR:hm,IS_ALLOWED_URI:ll,IS_SCRIPT_OR_DATA:vm,ATTR_WHITESPACE:fm,DOCTYPE_NAME:al,CUSTOM_ELEMENT:bm});const We={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},gm=function(){return typeof window>"u"?null:window},_m=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let o=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(o=n.getAttribute(i));const s="dompurify"+(o?"#"+o:"");try{return t.createPolicy(s,{createHTML(l){return l},createScriptURL(l){return l}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}};function rl(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:gm();const t=w=>rl(w);if(t.version="3.1.7",t.removed=[],!e||!e.document||e.document.nodeType!==We.document)return t.isSupported=!1,t;let{document:n}=e;const o=n,i=o.currentScript,{DocumentFragment:s,HTMLTemplateElement:l,Node:a,Element:r,NodeFilter:d,NamedNodeMap:p=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:f,DOMParser:y,trustedTypes:b}=e,T=r.prototype,A=je(T,"cloneNode"),k=je(T,"remove"),D=je(T,"nextSibling"),I=je(T,"childNodes"),N=je(T,"parentNode");if(typeof l=="function"){const w=n.createElement("template");w.content&&w.content.ownerDocument&&(n=w.content.ownerDocument)}let _,x="";const{implementation:C,createNodeIterator:R,createDocumentFragment:U,getElementsByTagName:G}=n,{importNode:F}=o;let L={};t.isSupported=typeof il=="function"&&typeof N=="function"&&C&&C.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:q,ERB_EXPR:j,TMPLIT_EXPR:dt,DATA_ATTR:kt,ARIA_ATTR:z,IS_SCRIPT_OR_DATA:nt,ATTR_WHITESPACE:Kt,CUSTOM_ELEMENT:Ot}=Vi;let{IS_ALLOWED_URI:Yt}=Vi,H=null;const Bt=O({},[...Ui,...to,...eo,...no,...ji]);let P=null;const Tt=O({},[...Wi,...oo,...Ji,...vn]);let M=Object.seal(sl(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),mt=null,Ft=null,gt=!0,Xt=!0,en=!1,ae=!0,Gt=!1,re=!0,xt=!1,Le=!1,ce=!1,Ct=!1,pe=!1,ue=!1,_t=!0,Qt=!1;const nn="user-content-";let de=!0,Dt=!1,Mt={},Nt=null;const Ie=O({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let $e=null;const Fo=O({},["audio","video","img","source","image","track"]);let In=null;const Go=O({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),on="http://www.w3.org/1998/Math/MathML",sn="http://www.w3.org/2000/svg",Lt="http://www.w3.org/1999/xhtml";let me=Lt,$n=!1,Rn=null;const Dl=O({},[on,sn,Lt],Zn);let Re=null;const Ml=["application/xhtml+xml","text/html"],Nl="text/html";let W=null,he=null;const Ll=n.createElement("form"),Uo=function(c){return c instanceof RegExp||c instanceof Function},Pn=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(he&&he===c)){if((!c||typeof c!="object")&&(c={}),c=Zt(c),Re=Ml.indexOf(c.PARSER_MEDIA_TYPE)===-1?Nl:c.PARSER_MEDIA_TYPE,W=Re==="application/xhtml+xml"?Zn:yn,H=ht(c,"ALLOWED_TAGS")?O({},c.ALLOWED_TAGS,W):Bt,P=ht(c,"ALLOWED_ATTR")?O({},c.ALLOWED_ATTR,W):Tt,Rn=ht(c,"ALLOWED_NAMESPACES")?O({},c.ALLOWED_NAMESPACES,Zn):Dl,In=ht(c,"ADD_URI_SAFE_ATTR")?O(Zt(Go),c.ADD_URI_SAFE_ATTR,W):Go,$e=ht(c,"ADD_DATA_URI_TAGS")?O(Zt(Fo),c.ADD_DATA_URI_TAGS,W):Fo,Nt=ht(c,"FORBID_CONTENTS")?O({},c.FORBID_CONTENTS,W):Ie,mt=ht(c,"FORBID_TAGS")?O({},c.FORBID_TAGS,W):{},Ft=ht(c,"FORBID_ATTR")?O({},c.FORBID_ATTR,W):{},Mt=ht(c,"USE_PROFILES")?c.USE_PROFILES:!1,gt=c.ALLOW_ARIA_ATTR!==!1,Xt=c.ALLOW_DATA_ATTR!==!1,en=c.ALLOW_UNKNOWN_PROTOCOLS||!1,ae=c.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Gt=c.SAFE_FOR_TEMPLATES||!1,re=c.SAFE_FOR_XML!==!1,xt=c.WHOLE_DOCUMENT||!1,Ct=c.RETURN_DOM||!1,pe=c.RETURN_DOM_FRAGMENT||!1,ue=c.RETURN_TRUSTED_TYPE||!1,ce=c.FORCE_BODY||!1,_t=c.SANITIZE_DOM!==!1,Qt=c.SANITIZE_NAMED_PROPS||!1,de=c.KEEP_CONTENT!==!1,Dt=c.IN_PLACE||!1,Yt=c.ALLOWED_URI_REGEXP||ll,me=c.NAMESPACE||Lt,M=c.CUSTOM_ELEMENT_HANDLING||{},c.CUSTOM_ELEMENT_HANDLING&&Uo(c.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(M.tagNameCheck=c.CUSTOM_ELEMENT_HANDLING.tagNameCheck),c.CUSTOM_ELEMENT_HANDLING&&Uo(c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(M.attributeNameCheck=c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),c.CUSTOM_ELEMENT_HANDLING&&typeof c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(M.allowCustomizedBuiltInElements=c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Gt&&(Xt=!1),pe&&(Ct=!0),Mt&&(H=O({},ji),P=[],Mt.html===!0&&(O(H,Ui),O(P,Wi)),Mt.svg===!0&&(O(H,to),O(P,oo),O(P,vn)),Mt.svgFilters===!0&&(O(H,eo),O(P,oo),O(P,vn)),Mt.mathMl===!0&&(O(H,no),O(P,Ji),O(P,vn))),c.ADD_TAGS&&(H===Bt&&(H=Zt(H)),O(H,c.ADD_TAGS,W)),c.ADD_ATTR&&(P===Tt&&(P=Zt(P)),O(P,c.ADD_ATTR,W)),c.ADD_URI_SAFE_ATTR&&O(In,c.ADD_URI_SAFE_ATTR,W),c.FORBID_CONTENTS&&(Nt===Ie&&(Nt=Zt(Nt)),O(Nt,c.FORBID_CONTENTS,W)),de&&(H["#text"]=!0),xt&&O(H,["html","head","body"]),H.table&&(O(H,["tbody"]),delete mt.tbody),c.TRUSTED_TYPES_POLICY){if(typeof c.TRUSTED_TYPES_POLICY.createHTML!="function")throw Ue('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof c.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Ue('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');_=c.TRUSTED_TYPES_POLICY,x=_.createHTML("")}else _===void 0&&(_=_m(b,i)),_!==null&&typeof x=="string"&&(x=_.createHTML(""));Z&&Z(c),he=c}},jo=O({},["mi","mo","mn","ms","mtext"]),Wo=O({},["annotation-xml"]),Il=O({},["title","style","font","a","script"]),Jo=O({},[...to,...eo,...rm]),Vo=O({},[...no,...cm]),$l=function(c){let v=N(c);(!v||!v.tagName)&&(v={namespaceURI:me,tagName:"template"});const g=yn(c.tagName),$=yn(v.tagName);return Rn[c.namespaceURI]?c.namespaceURI===sn?v.namespaceURI===Lt?g==="svg":v.namespaceURI===on?g==="svg"&&($==="annotation-xml"||jo[$]):!!Jo[g]:c.namespaceURI===on?v.namespaceURI===Lt?g==="math":v.namespaceURI===sn?g==="math"&&Wo[$]:!!Vo[g]:c.namespaceURI===Lt?v.namespaceURI===sn&&!Wo[$]||v.namespaceURI===on&&!jo[$]?!1:!Vo[g]&&(Il[g]||!Jo[g]):!!(Re==="application/xhtml+xml"&&Rn[c.namespaceURI]):!1},Et=function(c){Fe(t.removed,{element:c});try{N(c).removeChild(c)}catch{k(c)}},ln=function(c,v){try{Fe(t.removed,{attribute:v.getAttributeNode(c),from:v})}catch{Fe(t.removed,{attribute:null,from:v})}if(v.removeAttribute(c),c==="is"&&!P[c])if(Ct||pe)try{Et(v)}catch{}else try{v.setAttribute(c,"")}catch{}},qo=function(c){let v=null,g=null;if(ce)c="<remove></remove>"+c;else{const J=Gi(c,/^[\r\n\t ]+/);g=J&&J[0]}Re==="application/xhtml+xml"&&me===Lt&&(c='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+c+"</body></html>");const $=_?_.createHTML(c):c;if(me===Lt)try{v=new y().parseFromString($,Re)}catch{}if(!v||!v.documentElement){v=C.createDocument(me,"template",null);try{v.documentElement.innerHTML=$n?x:$}catch{}}const V=v.body||v.documentElement;return c&&g&&V.insertBefore(n.createTextNode(g),V.childNodes[0]||null),me===Lt?G.call(v,xt?"html":"body")[0]:xt?v.documentElement:V},zo=function(c){return R.call(c.ownerDocument||c,c,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},Ko=function(c){return c instanceof f&&(typeof c.nodeName!="string"||typeof c.textContent!="string"||typeof c.removeChild!="function"||!(c.attributes instanceof p)||typeof c.removeAttribute!="function"||typeof c.setAttribute!="function"||typeof c.namespaceURI!="string"||typeof c.insertBefore!="function"||typeof c.hasChildNodes!="function")},Yo=function(c){return typeof a=="function"&&c instanceof a},It=function(c,v,g){L[c]&&hn(L[c],$=>{$.call(t,v,g,he)})},Xo=function(c){let v=null;if(It("beforeSanitizeElements",c,null),Ko(c))return Et(c),!0;const g=W(c.nodeName);if(It("uponSanitizeElement",c,{tagName:g,allowedTags:H}),c.hasChildNodes()&&!Yo(c.firstElementChild)&&Y(/<[/\w]/g,c.innerHTML)&&Y(/<[/\w]/g,c.textContent)||c.nodeType===We.progressingInstruction||re&&c.nodeType===We.comment&&Y(/<[/\w]/g,c.data))return Et(c),!0;if(!H[g]||mt[g]){if(!mt[g]&&Zo(g)&&(M.tagNameCheck instanceof RegExp&&Y(M.tagNameCheck,g)||M.tagNameCheck instanceof Function&&M.tagNameCheck(g)))return!1;if(de&&!Nt[g]){const $=N(c)||c.parentNode,V=I(c)||c.childNodes;if(V&&$){const J=V.length;for(let tt=J-1;tt>=0;--tt){const yt=A(V[tt],!0);yt.__removalCount=(c.__removalCount||0)+1,$.insertBefore(yt,D(c))}}}return Et(c),!0}return c instanceof r&&!$l(c)||(g==="noscript"||g==="noembed"||g==="noframes")&&Y(/<\/no(script|embed|frames)/i,c.innerHTML)?(Et(c),!0):(Gt&&c.nodeType===We.text&&(v=c.textContent,hn([q,j,dt],$=>{v=Ge(v,$," ")}),c.textContent!==v&&(Fe(t.removed,{element:c.cloneNode()}),c.textContent=v)),It("afterSanitizeElements",c,null),!1)},Qo=function(c,v,g){if(_t&&(v==="id"||v==="name")&&(g in n||g in Ll))return!1;if(!(Xt&&!Ft[v]&&Y(kt,v))){if(!(gt&&Y(z,v))){if(!P[v]||Ft[v]){if(!(Zo(c)&&(M.tagNameCheck instanceof RegExp&&Y(M.tagNameCheck,c)||M.tagNameCheck instanceof Function&&M.tagNameCheck(c))&&(M.attributeNameCheck instanceof RegExp&&Y(M.attributeNameCheck,v)||M.attributeNameCheck instanceof Function&&M.attributeNameCheck(v))||v==="is"&&M.allowCustomizedBuiltInElements&&(M.tagNameCheck instanceof RegExp&&Y(M.tagNameCheck,g)||M.tagNameCheck instanceof Function&&M.tagNameCheck(g))))return!1}else if(!In[v]){if(!Y(Yt,Ge(g,Kt,""))){if(!((v==="src"||v==="xlink:href"||v==="href")&&c!=="script"&&im(g,"data:")===0&&$e[c])){if(!(en&&!Y(nt,Ge(g,Kt,"")))){if(g)return!1}}}}}}return!0},Zo=function(c){return c!=="annotation-xml"&&Gi(c,Ot)},ti=function(c){It("beforeSanitizeAttributes",c,null);const{attributes:v}=c;if(!v)return;const g={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:P};let $=v.length;for(;$--;){const V=v[$],{name:J,namespaceURI:tt,value:yt}=V,Pe=W(J);let K=J==="value"?yt:sm(yt);if(g.attrName=Pe,g.attrValue=K,g.keepAttr=!0,g.forceKeepAttr=void 0,It("uponSanitizeAttribute",c,g),K=g.attrValue,g.forceKeepAttr||(ln(J,c),!g.keepAttr))continue;if(!ae&&Y(/\/>/i,K)){ln(J,c);continue}Gt&&hn([q,j,dt],ni=>{K=Ge(K,ni," ")});const ei=W(c.nodeName);if(Qo(ei,Pe,K)){if(Qt&&(Pe==="id"||Pe==="name")&&(ln(J,c),K=nn+K),re&&Y(/((--!?|])>)|<\/(style|title)/i,K)){ln(J,c);continue}if(_&&typeof b=="object"&&typeof b.getAttributeType=="function"&&!tt)switch(b.getAttributeType(ei,Pe)){case"TrustedHTML":{K=_.createHTML(K);break}case"TrustedScriptURL":{K=_.createScriptURL(K);break}}try{tt?c.setAttributeNS(tt,J,K):c.setAttribute(J,K),Ko(c)?Et(c):Fi(t.removed)}catch{}}}It("afterSanitizeAttributes",c,null)},Rl=function w(c){let v=null;const g=zo(c);for(It("beforeSanitizeShadowDOM",c,null);v=g.nextNode();)It("uponSanitizeShadowNode",v,null),!Xo(v)&&(v.content instanceof s&&w(v.content),ti(v));It("afterSanitizeShadowDOM",c,null)};return t.sanitize=function(w){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=null,g=null,$=null,V=null;if($n=!w,$n&&(w="<!-->"),typeof w!="string"&&!Yo(w))if(typeof w.toString=="function"){if(w=w.toString(),typeof w!="string")throw Ue("dirty is not a string, aborting")}else throw Ue("toString is not a function");if(!t.isSupported)return w;if(Le||Pn(c),t.removed=[],typeof w=="string"&&(Dt=!1),Dt){if(w.nodeName){const yt=W(w.nodeName);if(!H[yt]||mt[yt])throw Ue("root node is forbidden and cannot be sanitized in-place")}}else if(w instanceof a)v=qo("<!---->"),g=v.ownerDocument.importNode(w,!0),g.nodeType===We.element&&g.nodeName==="BODY"||g.nodeName==="HTML"?v=g:v.appendChild(g);else{if(!Ct&&!Gt&&!xt&&w.indexOf("<")===-1)return _&&ue?_.createHTML(w):w;if(v=qo(w),!v)return Ct?null:ue?x:""}v&&ce&&Et(v.firstChild);const J=zo(Dt?w:v);for(;$=J.nextNode();)Xo($)||($.content instanceof s&&Rl($.content),ti($));if(Dt)return w;if(Ct){if(pe)for(V=U.call(v.ownerDocument);v.firstChild;)V.appendChild(v.firstChild);else V=v;return(P.shadowroot||P.shadowrootmode)&&(V=F.call(o,V,!0)),V}let tt=xt?v.outerHTML:v.innerHTML;return xt&&H["!doctype"]&&v.ownerDocument&&v.ownerDocument.doctype&&v.ownerDocument.doctype.name&&Y(al,v.ownerDocument.doctype.name)&&(tt="<!DOCTYPE "+v.ownerDocument.doctype.name+`>
`+tt),Gt&&hn([q,j,dt],yt=>{tt=Ge(tt,yt," ")}),_&&ue?_.createHTML(tt):tt},t.setConfig=function(){let w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Pn(w),Le=!0},t.clearConfig=function(){he=null,Le=!1},t.isValidAttribute=function(w,c,v){he||Pn({});const g=W(w),$=W(c);return Qo(g,$,v)},t.addHook=function(w,c){typeof c=="function"&&(L[w]=L[w]||[],Fe(L[w],c))},t.removeHook=function(w){if(L[w])return Fi(L[w])},t.removeHooks=function(w){L[w]&&(L[w]=[])},t.removeAllHooks=function(){L={}},t}var ft=rl(),Em=Object.defineProperty,ym=(e,t,n)=>t in e?Em(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t,n)=>ym(e,typeof t!="symbol"?t+"":t,n),wm=class{constructor(e){E(this,"_distinctEvent"),E(this,"_boundedEvents",[]),this._distinctEvent=(e==null?void 0:e.distinctEvent)??!1}get boundedEvents(){return this._boundedEvents}dispose(){this.unbindAll(),this._boundedEvents=[]}bind(e,t,n,o,i=""){const s=Array.isArray(t)?t:[t];if(typeof(e==null?void 0:e.forEach)=="function")e.forEach(l=>{for(const a of s)(!this._distinctEvent||this._distinctEvent&&!this.hasBinding(l,a))&&(l.addEventListener(a,n,o),this._boundedEvents.push({element:l,eventName:a,listener:n,groupName:i}))});else for(const l of s)(!this._distinctEvent||this._distinctEvent&&!this.hasBinding(e,l))&&(e.addEventListener(l,n,o),this._boundedEvents.push({element:e,eventName:l,listener:n,groupName:i}))}hasBinding(e,t){return this._boundedEvents.some(n=>n.element===e&&(!t||n.eventName===t))}unbind(e,t,n){var o;if(e){const i=Array.isArray(e)?e:[e],s=Array.isArray(t)?t||"":[t||""];for(const l of i){n||(n=this._boundedEvents.find(a=>{if(a.element===l&&(!t||a.eventName===t))return a.listener}));for(const a of s)(o=l==null?void 0:l.removeEventListener)==null||o.call(l,a,n)}}}unbindAll(e){if(e){const t=Array.isArray(e)?e:[e];for(let n=this._boundedEvents.length-1;n>=0;--n){const o=this._boundedEvents[n];if(t.some(i=>i===o.groupName)){const{element:i,eventName:s,listener:l}=o;this.unbind(i,s,l),this._boundedEvents.splice(n,1)}}}else for(;this._boundedEvents.length>0;){const t=this._boundedEvents.pop(),{element:n,eventName:o,listener:i}=t;this.unbind(n,o,i)}}},cl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Sm={formatSelectAll(){return"[Select all]"},formatAllSelected(){return"All selected"},formatCountSelected(e,t){return`${e} of ${t} selected`},formatNoMatchesFound(){return"No matches found"},formatOkButton(){return"OK"}};cl.locales["en-US"]=Sm;var pl=cl.locales,Am=50,km=4,ul={name:"",placeholder:"",classes:"",classPrefix:"",data:void 0,locale:void 0,selectAll:!0,single:void 0,singleRadio:!1,multiple:!1,hideOptgroupCheckboxes:!1,multipleWidth:80,width:void 0,dropWidth:void 0,maxHeight:250,maxHeightUnit:"px",position:"bottom",displayValues:!1,displayTitle:!1,displayDelimiter:", ",minimumCountSelected:3,ellipsis:!1,isOpen:!1,keepOpen:!1,openOnHover:!1,container:null,filter:!1,filterGroup:!1,filterPlaceholder:"",filterAcceptOnEnter:!1,filterByDataLength:void 0,customFilter(e){const{text:t,label:n,search:o}=e;return(n||t||"").includes(o)},showClear:!1,autoAdjustDropHeight:!1,autoAdjustDropPosition:!1,autoAdjustDropWidthByTextSize:!1,adjustedHeightPadding:10,useSelectOptionLabel:!1,useSelectOptionLabelToHtml:!1,navigationHighlight:!0,infiniteScroll:!1,virtualScroll:!0,cssStyler:()=>null,textTemplate:e=>e.innerHTML.trim(),labelTemplate:e=>e.label,onOpen:()=>!1,onClose:()=>!1,onCheckAll:()=>!1,onUncheckAll:()=>!1,onFocus:()=>!1,onBlur:()=>!1,onOptgroupClick:()=>!1,onBeforeClick:()=>!0,onClick:()=>!1,onFilter:()=>!1,onFilterClear:()=>!1,onClear:()=>!1,onAfterCreate:()=>!1,onDestroy:()=>!1,onAfterDestroy:()=>!1,onDestroyed:()=>!1},Om=["init","getOptions","refreshOptions","getSelects","setSelects","enable","disable","open","close","check","uncheck","checkAll","uncheckAll","checkInvert","focus","blur","refresh","destroy"];Object.assign(ul,pl["en-US"]);var Tm={BLOCK_ROWS:Am,CLUSTER_BLOCKS:km,DEFAULTS:ul,METHODS:Om},vt=Tm;function xm(e,t,n=!1){const o=Object.keys(e),i=Object.keys(t);if(n&&o.length!==i.length)return!1;for(const s of o)if(i.includes(s)&&e[s]!==t[s])return!1;return!0}function _o(e){const t=()=>{const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=_o(e[s]));return i},n=()=>e.map(i=>_o(i)),o=Object.prototype.toString.call(e).slice(8,-1).toLowerCase();return o==="object"?t():o==="array"?n():e}function io(e){return e!=null&&e!==""}function Cm(e,t){return typeof e=="object"?Object.fromEntries(t?Object.entries(e).filter(([n,o])=>!io(o)&&!t.includes(n)||io(o)):Object.entries(e).filter(([n,o])=>io(o))):e}function Dm(e){let t=0;return e.forEach((n,o)=>{n.type==="optgroup"?(n._key=`group_${o}`,n.visible=typeof n.visible>"u"?!0:n.visible,n.children.forEach((i,s)=>{i&&(i.visible=typeof(i==null?void 0:i.visible)>"u"?!0:i.visible,i.divider||(i._key=`option_${o}_${s}`,t+=1))})):(n.visible=typeof n.visible>"u"?!0:n.visible,n.divider||(n._key=`option_${o}`,t+=1))}),t}function fn(e,t,n){if(Array.isArray(e))for(const o of e){if(o[t]===n||o[t]===`${+o[t]}`&&+o[t]===n)return o;if(o.type==="optgroup"){for(const i of o.children)if(i&&(i[t]===n||i[t]===`${+i[t]}`&&+i[t]===n))return i}}}function Mm(e){return e.replace(/(\b)(on[a-z]+)(\s*)=([^>]*)|javascript:([^>]*)[^>]*|(<\s*)(\/*)script([<>]*).*(<\s*)(\/*)script(>*)|(&lt;|&#60;)(\/*)(script|script defer)(.*)(&#62;|&gt;|&gt;">)/gi,"")}function so(e){return Object.keys(e).forEach(t=>e[t]===void 0?delete e[t]:""),e}function be(e,t){if(typeof e!="string")return e;if(typeof t=="function")return t(e);if(typeof e.normalize=="function")return e.normalize("NFD").replace(/[\u0300-\u036F]/g,"");throw new Error("[Multiple-Select-Vanilla] `normalize()` function is not defined, you can optionally provide a custom parser via the `diacriticParser` option.")}function lo(e){let t=0,n=0,o=0,i=0;const s=window.innerHeight??0,l=window.innerWidth??0,a=Im(),r=a.top,d=a.left,p=yo(e);if(p){const f=p.top??0,y=p.left??0;n=f-r,t=s-(f-r),o=y-d,i=l-(y-d)}return{top:n,bottom:t,left:o,right:i}}function ao(e=""){return e.split(" ").filter(t=>t)}function B(e,t,n){const o=document.createElement(e);return t&&Object.keys(t).forEach(i=>{const s=t[i];typeof s=="object"?Object.assign(o[i],s):o[i]=t[i]}),n!=null&&n.appendChild&&n.appendChild(o),o}function dl(e,t,n){var s;const o=(s=e.props)!=null&&s.innerHTML?Lm(e.props,"innerHTML"):e.props,i=B(e.tagName,Cm(o,["className","title","style"]),t);if(e.props.innerHTML&&(i.innerHTML=e.props.innerHTML),e.attrs)for(const l of Object.keys(e.attrs))i.setAttribute(l,e.attrs[l]);if(e.children)for(const l of e.children)dl(l,i);return t==null||t.appendChild(i),i}function Eo(e){return e.hasOwnProperty("tagName")?dl(e):document.createElement("li")}function ze(e){for(;e!=null&&e.firstChild;)e.lastChild&&e.removeChild(e.lastChild);return e}function yo(e){var l;if(!e)return;const t=(l=e==null?void 0:e.getBoundingClientRect)==null?void 0:l.call(e);let n=0,o=0,i=0,s=0;return(t==null?void 0:t.top)!==void 0&&t.left!==void 0&&(n=t.top+window.pageYOffset,o=t.left+window.pageXOffset,s=t.right,i=t.bottom),{top:n,left:o,bottom:i,right:s}}function bn(e,t,n){if(!e)return 0;let o=Number.parseFloat(e.style[n]);if(!o||Number.isNaN(o)){switch(t){case"outer":o=e[n==="width"?"offsetWidth":"offsetHeight"];break;case"scroll":o=e[n==="width"?"scrollWidth":"scrollHeight"];break;case"inner":default:o=e[n==="width"?"clientWidth":"clientHeight"];break}o=e.getBoundingClientRect()[n]}if(!o||Number.isNaN(o)){const i=e.style.display,s=e.style.position;e.style.display="block",e.style.position="absolute";const l=window.getComputedStyle(e)[n];o=Number.parseFloat(l),Number.isNaN(o)&&(o=0),e.style.display=i,e.style.position=s}return o||0}function qi(e,t){let n=null,o=e==null?void 0:e.parentElement;for(;o;){const[i,s,l,a]=t.match(/^([a-z]*)([#.]{1})([a-z\-]+)$/i)||[];if(l&&a)for(const r of a.replace(l,"").split(" "))o.classList.contains(r)&&(s?(o==null?void 0:o.tagName.toLowerCase())===s&&(n=o):n=o);o=o.parentElement}return n}function Nm(e,t){var n;(n=e.parentNode)==null||n.insertBefore(t,e.nextSibling)}function Lm(e,t){const{[t]:n,...o}=e;return o}function zi(e,t){e!=null&&e.style&&(e.style.display=e.style.display==="none"&&t!==!1||t===!0?"block":"none")}function Im(){return{left:window.pageXOffset||document.documentElement.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||0}}var $m=class{constructor(e){var n;E(this,"clusterRows"),E(this,"cache"),E(this,"scrollEl"),E(this,"blockHeight"),E(this,"clusterHeight"),E(this,"contentEl"),E(this,"parentEl"),E(this,"itemHeight"),E(this,"lastCluster"),E(this,"scrollTop"),E(this,"dataStart"),E(this,"dataEnd"),E(this,"rows"),E(this,"destroy"),E(this,"callback"),E(this,"sanitizer"),this.rows=e.rows,this.scrollEl=e.scrollEl,this.contentEl=e.contentEl,this.parentEl=(n=e.contentEl)==null?void 0:n.parentElement,this.callback=e.callback,this.cache={},this.scrollTop=this.scrollEl.scrollTop,this.initDOM(this.rows),this.scrollEl.scrollTop=this.scrollTop,this.lastCluster=0;const t=()=>{this.lastCluster!==(this.lastCluster=this.getNum())&&(this.initDOM(this.rows),this.callback())};this.scrollEl.addEventListener("scroll",t,!1),this.destroy=()=>{this.scrollEl.removeEventListener("scroll",t,!1),ze(this.contentEl)}}reset(e){this.lastCluster=0,this.cache={},ze(this.contentEl),this.initDOM(e)}initDOM(e){if(typeof this.clusterHeight>"u"){this.cache.scrollTop=this.scrollEl.scrollTop;const s=Eo(e[0]);this.contentEl.appendChild(s),this.contentEl.appendChild(s),this.contentEl.appendChild(s),this.cache.data=[e[0]],this.getRowsHeight()}const t=this.initData(e,this.getNum()),n=this.checkChanges("data",t.rows),o=this.checkChanges("top",t.topOffset),i=this.checkChanges("bottom",t.bottomOffset);ze(this.contentEl),n&&o?(t.topOffset&&this.contentEl.appendChild(this.getExtra("top",t.topOffset)),t.rows.forEach(s=>this.contentEl.appendChild(Eo(s))),t.bottomOffset&&this.contentEl.appendChild(this.getExtra("bottom",t.bottomOffset))):i&&this.contentEl.lastChild&&(this.contentEl.lastChild.style.height=`${t.bottomOffset}px`)}getRowsHeight(){var e;if(typeof this.itemHeight>"u"){const t=((e=this.parentEl)==null?void 0:e.style.display)||"";this.parentEl&&(t===""||t==="none")&&(this.parentEl.style.display="block");const n=this.contentEl.children,o=n[Math.floor(n.length/2)];this.itemHeight=o.offsetHeight,this.parentEl&&(this.parentEl.style.display=t)}this.blockHeight=this.itemHeight*vt.BLOCK_ROWS,this.clusterRows=vt.BLOCK_ROWS*vt.CLUSTER_BLOCKS,this.clusterHeight=this.blockHeight*vt.CLUSTER_BLOCKS}getNum(){this.scrollTop=this.scrollEl.scrollTop;const e=(this.clusterHeight||0)-(this.blockHeight||0);return e&&Math.floor(this.scrollTop/e)||0}initData(e,t){if(e.length<vt.BLOCK_ROWS)return{topOffset:0,bottomOffset:0,rowsAbove:0,rows:e};const n=Math.max((this.clusterRows-vt.BLOCK_ROWS)*t,0),o=n+this.clusterRows,i=Math.max(n*this.itemHeight,0),s=Math.max((e.length-o)*this.itemHeight,0),l=[];let a=n;i<1&&a++;for(let r=n;r<o;r++)e[r]&&l.push(e[r]);return this.dataStart=n,this.dataEnd=o,{topOffset:i,bottomOffset:s,rowsAbove:a,rows:l}}checkChanges(e,t){const n=t!==this.cache[e];return this.cache[e]=t,n}getExtra(e,t){const n=document.createElement("li");return n.className=`virtual-scroll-${e}`,t&&(n.style.height=`${t}px`),n}},Je=".ms-select-all, ul li[data-key]",Rm=".ms-select-all.highlighted, ul li[data-key].highlighted",Pm=class{constructor(e,t){this.elm=e,E(this,"_bindEventService"),E(this,"isAllSelected",!1),E(this,"isPartiallyAllSelected",!1),E(this,"fromHtml",!1),E(this,"choiceElm"),E(this,"selectClearElm"),E(this,"closeElm"),E(this,"clearSearchIconElm"),E(this,"filterText",""),E(this,"updateData",[]),E(this,"data",[]),E(this,"dataTotal"),E(this,"dropElm"),E(this,"okButtonElm"),E(this,"filterParentElm"),E(this,"lastFocusedItemKey",""),E(this,"lastMouseOverPosition",""),E(this,"ulElm"),E(this,"parentElm"),E(this,"labelElm"),E(this,"selectAllParentElm"),E(this,"selectAllElm"),E(this,"searchInputElm"),E(this,"selectGroupElms"),E(this,"selectItemElms"),E(this,"noResultsElm"),E(this,"options"),E(this,"selectAllName",""),E(this,"selectGroupName",""),E(this,"selectItemName",""),E(this,"scrolledByMouse",!1),E(this,"openDelayTimer"),E(this,"updateDataStart"),E(this,"updateDataEnd"),E(this,"virtualScroll"),E(this,"_currentHighlightIndex",-1),E(this,"_currentSelectedElm"),E(this,"isMoveUpRecalcRequired",!1),E(this,"locales",{}),this.options=Object.assign({},vt.DEFAULTS,this.elm.dataset,t),this._bindEventService=new wm({distinctEvent:!0})}get isRenderAsHtml(){return this.options.renderOptionLabelAsHtml||this.options.useSelectOptionLabelToHtml}init(){this.initLocale(),this.initContainer(),this.initData(),this.initSelected(!0),this.initFilter(),this.initDrop(),this.initView(),this.options.onAfterCreate()}destroy(e=!0){var t,n,o,i,s;this.elm&&this.parentElm&&(this.options.onDestroy({hardDestroy:e}),e&&this.options.onHardDestroy(),this.elm.parentElement&&this.parentElm.parentElement&&this.elm.parentElement.insertBefore(this.elm,this.parentElm.parentElement.firstChild),this.elm.classList.remove("ms-offscreen"),this._bindEventService.unbindAll(),(t=this.virtualScroll)==null||t.destroy(),(n=this.dropElm)==null||n.remove(),this.dropElm=void 0,(o=this.parentElm.parentNode)==null||o.removeChild(this.parentElm),this.fromHtml&&(delete this.options.data,this.fromHtml=!1),this.options.onAfterDestroy({hardDestroy:e}),e&&((s=(i=this.options).onAfterHardDestroy)==null||s.call(i),Object.keys(this.options).forEach(l=>delete this[l])))}initLocale(){if(this.options.locale){if(typeof this.options.locale=="object"){Object.assign(this.options,this.options.locale);return}const e=window.multipleSelect.locales,t=this.options.locale.split(/-|_/);if(t[0]=t[0].toLowerCase(),t[1]&&(t[1]=t[1].toUpperCase()),e[this.options.locale])Object.assign(this.options,e[this.options.locale]);else if(e[t.join("-")])Object.assign(this.options,e[t.join("-")]);else if(e[t[0]])Object.assign(this.options,e[t[0]]);else throw new Error(`[multiple-select-vanilla] invalid locales "${this.options.locale}", make sure to import it before using it`)}}initContainer(){var o;const e=this.elm.getAttribute("name")||this.options.name||"";this.options.classes&&this.elm.classList.add(this.options.classes),this.options.classPrefix&&(this.elm.classList.add(this.options.classPrefix),this.options.size&&this.elm.classList.add(`${this.options.classPrefix}-${this.options.size}`)),this.elm.style.display="none",this.labelElm=this.elm.closest("label"),!this.labelElm&&this.elm.id&&(this.labelElm=document.createElement("label"),this.labelElm.htmlFor=this.elm.id),(o=this.labelElm)!=null&&o.querySelector("input")&&(this.labelElm=null),typeof this.options.single>"u"&&(this.options.single=!this.elm.multiple),this.parentElm=B("div",{className:ao(`ms-parent ${this.elm.className||""} ${this.options.classes}`).join(" "),dataset:{test:"sel"}}),this.options.darkMode&&this.parentElm.classList.add("ms-dark-mode");const t=this.elm.getAttribute("title")||"";t&&(this.parentElm.title=t),this.options.placeholder=this.options.placeholder||this.elm.getAttribute("placeholder")||"",this.choiceElm=B("button",{className:"ms-choice",type:"button"},this.parentElm),this.options.labelId&&(this.choiceElm.id=this.options.labelId,this.choiceElm.setAttribute("aria-labelledby",this.options.labelId)),this.choiceElm.appendChild(B("span",{className:"ms-placeholder",textContent:this.options.placeholder})),this.options.showClear&&(this.selectClearElm=B("div",{className:"ms-icon ms-icon-close"}),this.selectClearElm.style.display="none",this.choiceElm.appendChild(this.selectClearElm)),this.choiceElm.appendChild(B("div",{className:"ms-icon ms-icon-caret"})),this.dropElm=B("div",{className:`ms-drop ${this.options.position}`,ariaExpanded:"false"},this.parentElm),this.options.darkMode&&this.dropElm.classList.add("ms-dark-mode"),e&&(this.dropElm.dataset.name=e);const n=this.elm.getAttribute("data-test")||this.options.dataTest;n&&(this.parentElm.dataset.test=n,this.dropElm.dataset.test=n),this.closeElm=this.choiceElm.querySelector(".ms-icon-close"),this.options.dropWidth&&(this.dropElm.style.width=typeof this.options.dropWidth=="string"?this.options.dropWidth:`${this.options.dropWidth}px`),Nm(this.elm,this.parentElm),this.elm.disabled&&(this.choiceElm.classList.add("disabled"),this.choiceElm.disabled=!0),this.selectAllName=`selectAll${e}`,this.selectGroupName=`selectGroup${e}`,this.selectItemName=`selectItem${e}`,this.options.keepOpen||(this._bindEventService.unbindAll("body-click"),this._bindEventService.bind(document.body,"click",i=>{this.getEventTarget(i)===this.choiceElm||qi(this.getEventTarget(i),".ms-choice")===this.choiceElm||(this.getEventTarget(i)===this.dropElm||qi(this.getEventTarget(i),".ms-drop")!==this.dropElm&&this.getEventTarget(i)!==this.elm)&&this.options.isOpen&&this.close("body.click")},void 0,"body-click"))}initData(){const e=[];if(this.options.data){if(Array.isArray(this.options.data))this.data=this.options.data.map(t=>typeof t=="string"||typeof t=="number"?{text:t,value:t}:t);else if(typeof this.options.data=="object"){for(const[t,n]of Object.entries(this.options.data))e.push({value:t,text:`${n}`});this.data=e}}else this.elm.childNodes.forEach(t=>{const n=this.initRow(t);n&&e.push(n)}),this.options.data=e,this.data=e,this.fromHtml=!0;this.dataTotal=Dm(this.data||[])}initRow(e,t){var o,i;const n={};return((o=e.tagName)==null?void 0:o.toLowerCase())==="option"?(n.type="option",n.text=this.options.textTemplate(e),n.value=e.value,n.visible=!0,n.selected=!!e.selected,n.disabled=t||e.disabled,n.classes=e.getAttribute("class")||"",n.title=e.getAttribute("title")||"",e.dataset.value&&(n._value=e.dataset.value),Object.keys(e.dataset).length&&(n._data=e.dataset,n._data.divider&&(n.divider=n._data.divider)),n):((i=e.tagName)==null?void 0:i.toLowerCase())==="optgroup"?(n.type="optgroup",n.label=this.options.labelTemplate(e),n.visible=!0,n.selected=!!e.selected,n.disabled=e.disabled,n.children=[],Object.keys(e.dataset).length&&(n._data=e.dataset),e.childNodes.forEach(s=>{n.children.push(this.initRow(s,n.disabled))}),n):null}initDrop(){this.initList(),this.update(!0),this.options.isOpen&&this.open(10),this.options.openOnHover&&this.parentElm&&(this._bindEventService.bind(this.parentElm,"mouseover",()=>this.open(null)),this._bindEventService.bind(this.parentElm,"mouseout",()=>this.close("hover.mouseout")))}initFilter(){if(this.filterText="",this.options.filter||!this.options.filterByDataLength)return;let e=0;for(const t of this.data||[])t.type==="optgroup"?e+=t.children.length:e+=1;this.options.filter=e>this.options.filterByDataLength}initList(){var e,t;if(this.options.filter&&(this.filterParentElm=B("div",{className:"ms-search"},this.dropElm),this.filterParentElm.appendChild(B("input",{autocomplete:"off",autocapitalize:"off",spellcheck:!1,type:"text",placeholder:this.options.filterPlaceholder||"🔎︎"})),this.options.showSearchClear&&this.filterParentElm.appendChild(B("span",{className:"ms-icon ms-icon-close"}))),this.options.selectAll&&!this.options.single){const n=this.elm.getAttribute("name")||this.options.name||"";this.selectAllParentElm=B("div",{className:"ms-select-all",dataset:{key:"select_all"}});const o=document.createElement("label"),s=`ms-icon ${this.isAllSelected?"ms-icon-check":this.isPartiallyAllSelected?"ms-icon-minus":"ms-icon-uncheck"}`,l=B("div",{className:"icon-checkbox-container"},o);B("input",{type:"checkbox",ariaChecked:String(this.isAllSelected),checked:this.isAllSelected,dataset:{name:`selectAll${n}`}},l),B("div",{className:s},l),o.appendChild(B("span",{textContent:this.formatSelectAll()})),this.selectAllParentElm.appendChild(o),(e=this.dropElm)==null||e.appendChild(this.selectAllParentElm)}this.ulElm=document.createElement("ul"),this.ulElm.role="combobox",this.ulElm.ariaExpanded="false",this.ulElm.ariaMultiSelectable=String(!this.options.single),(t=this.dropElm)==null||t.appendChild(this.ulElm),this.options.showOkButton&&!this.options.single&&(this.okButtonElm=B("button",{className:"ms-ok-button",type:"button",textContent:this.formatOkButton()},this.dropElm)),this.initListItems()}initListItems(){var n;let e=0;const t=this.getListRows();if(this.options.selectAll&&!this.options.single&&(e=-1),t.length>vt.BLOCK_ROWS*vt.CLUSTER_BLOCKS){const o=this.dropElm&&((n=this.dropElm)==null?void 0:n.style.display)!=="none";!o&&this.dropElm&&(this.dropElm.style.left="-10000",this.dropElm.style.display="block",this.dropElm.ariaExpanded="true");const i=()=>{if(this.virtualScroll){this._currentHighlightIndex=0,this.updateDataStart=this.virtualScroll.dataStart+e,this.updateDataEnd=this.virtualScroll.dataEnd+e,this.updateDataStart<0&&(this.updateDataStart=0,this._currentHighlightIndex=0);const s=this.getDataLength();this.updateDataEnd>s&&(this.updateDataEnd=s),this.ulElm&&(this.isMoveUpRecalcRequired?this.recalculateArrowMove("up"):this.virtualScroll.dataStart>this.updateDataStart&&this.recalculateArrowMove("down"))}};this.ulElm&&(this.virtualScroll?this.virtualScroll.reset(t):this.virtualScroll=new $m({rows:t,scrollEl:this.ulElm,contentEl:this.ulElm,sanitizer:this.options.sanitizer,callback:()=>{i(),this.events()}})),i(),!o&&this.dropElm&&(this.dropElm.style.left="0",this.dropElm.style.display="none",this.dropElm.ariaExpanded="false")}else this.ulElm&&(ze(this.ulElm),t.forEach(o=>this.ulElm.appendChild(Eo(o)))),this.updateDataStart=0,this.updateDataEnd=this.updateData.length;return this.events(),t}getEventTarget(e){return e.composedPath?e.composedPath()[0]:e.target}getListRows(){var t;const e=[];return this.updateData=[],(t=this.data)==null||t.forEach(n=>e.push(...this.initListItem(n))),this.options.infiniteScroll&&e.push({tagName:"li",props:{className:"ms-infinite-option",role:"option"}}),e.push({tagName:"li",props:{className:"ms-no-results",textContent:this.formatNoMatchesFound()}}),e}initListItem(e,t=0){const n=(e==null?void 0:e.title)||"",o=this.options.multiple?"multiple":"",i=this.options.single?"radio":"checkbox",s=!!(e!=null&&e.selected),l=this.options.single&&!this.options.singleRadio;let a="";if(!(e!=null&&e.visible))return[];if(this.updateData.push(e),l&&(a="hide-radio "),e.selected&&(a+="selected "),e.type==="optgroup"){const A=[];let k;if(this.options.hideOptgroupCheckboxes||this.options.single)k={tagName:"span",props:{dataset:{name:this.selectGroupName,key:e._key}}};else{const _={tagName:"input",props:{type:"checkbox",dataset:{name:this.selectGroupName,key:e._key},checked:s,disabled:e.disabled}};l?k=_:k={tagName:"div",props:{className:`icon-checkbox-container${i==="radio"?" radio":""}`},children:[_,{tagName:"div",props:{className:`ms-icon ${s?i==="radio"?"ms-icon-radio":"ms-icon-check":"ms-icon-uncheck"}`}}]}}!a.includes("hide-radio")&&(this.options.hideOptgroupCheckboxes||this.options.single)&&(a+="hide-radio ");const D={tagName:"span",props:{}};this.applyAsTextOrHtmlWhenEnabled(D.props,e.label);const I={tagName:"li",props:{className:ao(`group${this.options.single||e.disabled?" disabled":""} ${a}`).join(" "),role:"option",ariaSelected:String(s),dataset:{key:e._key}},children:[{tagName:"label",props:{className:ao(`optgroup${this.options.single||e.disabled?" disabled":""}`).join(" ")},children:[k,D]}]},N=this.options.cssStyler(e);return N&&(I.props.style=N),A.push(I),e.children.forEach(_=>A.push(...this.initListItem(_,1))),A}if(a+=e.classes||"",t&&this.options.single&&(a+=`option-level-${t} `),e.divider)return[{tagName:"li",props:{className:"option-divider"}}];let r=o||a?(o+a).trim():"";e.disabled&&(r+=" disabled");const d=`${e.disabled?"disabled":""}`,p={tagName:"span",props:{}};this.applyAsTextOrHtmlWhenEnabled(p.props,e.text);const f={tagName:"input",props:{type:i,value:encodeURI(e.value),dataset:{key:e._key,name:this.selectItemName},checked:s,disabled:!!e.disabled}};e.selected&&(f.attrs={checked:"checked"});const y={tagName:"div",props:{className:`icon-checkbox-container${i==="radio"?" radio":""}`},children:[f,{tagName:"div",props:{className:`ms-icon ${f.props.checked?i==="radio"?"ms-icon-radio":"ms-icon-check":"ms-icon-uncheck"}`}}]},b={tagName:"li",props:{role:"option",title:n,ariaSelected:String(s),dataset:{key:e._key}},children:[{tagName:"label",props:{className:d},children:[l?f:y,p]}]};r&&(b.props.className=r);const T=this.options.cssStyler(e);return T&&(b.props.style=T),[b]}initSelected(e=!1){var n,o;let t=0;for(const i of this.data||[])if(i.type==="optgroup"){const s=i.children.filter(l=>(l==null?void 0:l.selected)&&!l.disabled&&l.visible).length;i.children.length&&(i.selected=!this.options.single&&s&&s===i.children.filter(l=>l&&!l.disabled&&l.visible&&!l.divider).length),t+=s}else t+=i.selected&&!i.disabled&&i.visible?1:0;this.isAllSelected=((n=this.data)==null?void 0:n.filter(i=>i.selected&&!i.disabled&&i.visible).length)===((o=this.data)==null?void 0:o.filter(i=>!i.disabled&&i.visible&&!i.divider).length),this.isPartiallyAllSelected=!this.isAllSelected&&t>0,e||(this.isAllSelected?this.options.onCheckAll():t===0&&this.options.onUncheckAll())}initView(){let e;window.getComputedStyle?(e=window.getComputedStyle(this.elm).width,e==="auto"&&(e=bn(this.dropElm,"outer","width")+20)):e=bn(this.elm,"outer","width")+20,this.parentElm.style.width=`${this.options.width||e}px`,this.elm.classList.add("ms-offscreen")}events(){var t,n,o,i,s,l;this._bindEventService.unbindAll(["ok-button","search-input","select-all-checkbox","input-checkbox-list","group-checkbox-list","hover-highlight","arrow-highlight","option-list-scroll"]),this.clearSearchIconElm=(t=this.filterParentElm)==null?void 0:t.querySelector(".ms-icon-close"),this.searchInputElm=(n=this.dropElm)==null?void 0:n.querySelector(".ms-search input"),this.selectAllElm=(o=this.dropElm)==null?void 0:o.querySelector(`input[data-name="${this.selectAllName}"]`),this.selectGroupElms=(i=this.dropElm)==null?void 0:i.querySelectorAll(`input[data-name="${this.selectGroupName}"],span[data-name="${this.selectGroupName}"]`),this.selectItemElms=(s=this.dropElm)==null?void 0:s.querySelectorAll(`input[data-name="${this.selectItemName}"]:enabled`),this.noResultsElm=(l=this.dropElm)==null?void 0:l.querySelector(".ms-no-results");const e=a=>{a.preventDefault(),!this.getEventTarget(a).classList.contains("ms-icon-close")&&(this.options.isOpen?this.close("toggle.close"):this.open())};if(this.labelElm&&this._bindEventService.bind(this.labelElm,"click",a=>{this.getEventTarget(a).nodeName.toLowerCase()==="label"&&(e(a),(!this.options.filter||!this.options.isOpen)&&this.focus(),a.stopPropagation())}),this._bindEventService.bind(this.choiceElm,"click",e),this.options.onFocus&&this._bindEventService.bind(this.choiceElm,"focus",this.options.onFocus),this.options.onBlur&&this._bindEventService.bind(this.choiceElm,"blur",this.options.onBlur),this._bindEventService.bind(this.parentElm,"keydown",a=>{a.code==="Escape"&&this.handleEscapeKey()}),this.closeElm&&this._bindEventService.bind(this.closeElm,"click",a=>{a.preventDefault(),this._checkAll(!1,!0),this.initSelected(!1),this.updateSelected(),this.update(),this.options.onClear()}),this.clearSearchIconElm&&this._bindEventService.bind(this.clearSearchIconElm,"click",a=>{a.preventDefault(),this.searchInputElm&&(this.searchInputElm.value="",this.searchInputElm.focus()),this._currentHighlightIndex=-1,this.moveHighlightDown(),this.filter(),this.options.onFilterClear()}),this.searchInputElm&&(this._bindEventService.bind(this.searchInputElm,"keydown",a=>{a.code==="Tab"&&a.shiftKey&&this.close("key.shift+tab")},void 0,"search-input"),this._bindEventService.bind(this.searchInputElm,"keyup",a=>{var r,d,p;if(this.options.filterAcceptOnEnter&&["Enter","Space"].includes(a.code)&&((r=this.searchInputElm)!=null&&r.value)){if(this.options.single){const f=[];(d=this.selectItemElms)==null||d.forEach(y=>{var b;((b=y.closest("li"))==null?void 0:b.style.display)!=="none"&&f.push(y)}),f.length&&f[0].hasAttribute("data-name")&&this.setSelects([f[0].value])}else(p=this.selectAllElm)==null||p.click();this.close(`key.${a.code.toLowerCase()}`),this.focus();return}this.filter()},void 0,"search-input")),this.selectAllElm&&this._bindEventService.bind(this.selectAllElm,"click",a=>{var r;return this._checkAll((r=a.currentTarget)==null?void 0:r.checked)},void 0,"select-all-checkbox"),this.okButtonElm&&this._bindEventService.bind(this.okButtonElm,"click",a=>{e(a),a.stopPropagation()},void 0,"ok-button"),this.selectGroupElms&&this._bindEventService.bind(this.selectGroupElms,"click",a=>{const r=a.currentTarget,d=r.checked,p=fn(this.data,"_key",r.dataset.key);this._checkGroup(p,d),this.options.onOptgroupClick(so({label:p.label,selected:p.selected,data:p._data,children:p.children.map(f=>{if(f)return so({text:f.text,value:f.value,selected:f.selected,disabled:f.disabled,data:f._data})})}))},void 0,"group-checkbox-list"),this.selectItemElms&&this._bindEventService.bind(this.selectItemElms,"click",a=>{const r=a.currentTarget,d=r.checked,p=fn(this.data,"_key",r.dataset.key),f=()=>{this.options.single&&this.options.isOpen&&!this.options.keepOpen&&this.close("selection")};if(this.options.onBeforeClick(p)===!1){f();return}this._check(p,d),this.options.onClick(so({text:p.text,value:p.value,selected:p.selected,data:p._data})),f()},void 0,"input-checkbox-list"),this.lastFocusedItemKey&&this.dropElm){const a=this.dropElm.querySelector(`li[data-key=${this.lastFocusedItemKey}]`);a==null||a.focus()}this.options.navigationHighlight&&this.dropElm&&(this._bindEventService.bind(this.dropElm,"mouseover",a=>{var d,p;const r=this.getEventTarget(a).closest(".ms-select-all")||this.getEventTarget(a).closest("li");if((d=this.dropElm)!=null&&d.contains(r)&&this.lastMouseOverPosition!==`${a.clientX}:${a.clientY}`){const f=((p=this.dropElm)==null?void 0:p.querySelectorAll(Je))||[],y=Array.from(f).findIndex(b=>b.dataset.key===r.dataset.key);this._currentHighlightIndex!==y&&!r.classList.contains("disabled")&&(this._currentSelectedElm=r,this._currentHighlightIndex=y,this.changeCurrentOptionHighlight(r))}this.lastMouseOverPosition=`${a.clientX}:${a.clientY}`},void 0,"hover-highlight"),this._bindEventService.bind(this.dropElm,"keydown",a=>{var r,d,p,f;switch(a.key){case"ArrowUp":a.preventDefault(),this.moveHighlightUp();break;case"ArrowDown":a.preventDefault(),this.moveHighlightDown();break;case"Escape":this.handleEscapeKey();break;case"Enter":case" ":{if(document.activeElement!==this.okButtonElm){const y=this.getEventTarget(a).closest(".ms-select-all")||this.getEventTarget(a).closest("li");if(a.key===" "&&this.options.filter||this.options.filterAcceptOnEnter&&!y)return;a.preventDefault(),(d=(r=this._currentSelectedElm)==null?void 0:r.querySelector("input"))==null||d.click(),this.options.single&&(this.choiceElm.focus(),this.lastFocusedItemKey=((p=this.choiceElm)==null?void 0:p.dataset.key)||"")}break}case"Tab":{a.preventDefault(),a.shiftKey?document.activeElement===this.okButtonElm?(this.focusSelectAllOrList(),this.highlightCurrentOption()):(this.close("key.shift+tab"),this.choiceElm.focus()):(this.changeCurrentOptionHighlight(),(f=this.okButtonElm)==null||f.focus());break}}},void 0,"arrow-highlight")),this.ulElm&&this.options.infiniteScroll&&this._bindEventService.bind(this.ulElm,"scroll",this.infiniteScrollHandler.bind(this),void 0,"option-list-scroll")}handleEscapeKey(){this.options.keepOpen||(this.close("key.escape"),this.choiceElm.focus())}infiniteScrollHandler(e,t,n){let o=!1;e&&this.getEventTarget(e)&&this.ulElm&&this.scrolledByMouse?this.getEventTarget(e).scrollTop+this.getEventTarget(e).clientHeight===this.ulElm.scrollHeight&&(o=!0):t!==void 0&&t+1===n&&(o=!0),o&&this.ulElm&&(this.virtualScroll?this.initListItems():this.ulElm.scrollTop=0,this._currentHighlightIndex=0,this.highlightCurrentOption())}open(e=0){return new Promise(t=>{e!==null&&e>=0?(window.clearTimeout(this.openDelayTimer),this.openDelayTimer=window.setTimeout(()=>{this.openDrop(),t()},e)):(this.openDrop(),t())})}openDrop(){var o,i,s,l,a;if(!this.dropElm||(o=this.choiceElm)!=null&&o.classList.contains("disabled"))return;if(this.options.isOpen=!0,this.parentElm.classList.add("ms-parent-open"),(s=(i=this.choiceElm)==null?void 0:i.querySelector("div.ms-icon-caret"))==null||s.classList.add("open"),this.dropElm.style.display="block",this.dropElm.ariaExpanded="true",(l=this.selectAllElm)!=null&&l.parentElement&&(this.selectAllElm.parentElement.style.display="inline-flex"),this.noResultsElm&&(this.noResultsElm.style.display="none"),this.getDataLength()||((a=this.selectAllElm)!=null&&a.parentElement&&(this.selectAllElm.parentElement.style.display="none"),this.noResultsElm&&(this.noResultsElm.style.display="block")),this.options.container){const r=yo(this.dropElm);let d;this.options.container instanceof Node?d=this.options.container:typeof this.options.container=="string"&&(d=this.options.container==="body"?document.body:document.querySelector(this.options.container)),d.appendChild(this.dropElm),this.dropElm.style.top=`${(r==null?void 0:r.top)??0}px`,this.dropElm.style.left=`${(r==null?void 0:r.left)??0}px`,this.dropElm.style.minWidth="auto",this.dropElm.style.width=`${bn(this.parentElm,"outer","width")}px`}const e=this.options.minHeight;let t=this.options.maxHeight;this.options.maxHeightUnit==="row"&&(t=bn(this.dropElm.querySelector("ul>li"),"outer","height")*this.options.maxHeight),this.ulElm??(this.ulElm=this.dropElm.querySelector("ul")),this.ulElm&&(e&&(this.ulElm.style.minHeight=`${e}px`),this.ulElm.style.maxHeight=`${t}px`),this.dropElm.querySelectorAll(".multiple").forEach(r=>{r.style.width=`${this.options.multipleWidth}px`}),this.getDataLength()&&this.options.filter?(this.searchInputElm&&(this.searchInputElm.value="",this.searchInputElm.focus()),this.filter(!0)):this.focusSelectAllOrList(),this._currentHighlightIndex<0?this.moveHighlightDown():this.highlightCurrentOption(),this.options.autoAdjustDropWidthByTextSize&&this.adjustDropWidthByText();let n=this.options.position;if(this.options.autoAdjustDropHeight){if(this.options.autoAdjustDropPosition){const{bottom:r,top:d}=lo(this.dropElm),p=this.dropElm.getBoundingClientRect().height;n=r<p&&d>r?"top":"bottom"}this.adjustDropHeight(n)}this.options.autoAdjustDropPosition&&this.adjustDropPosition(!0),this.options.onOpen()}focusSelectAllOrList(){this.selectAllElm?this.selectAllElm.focus():this.ulElm&&(this.ulElm.tabIndex=0,this.ulElm.focus())}highlightCurrentOption(){var t;const e=((t=this.dropElm)==null?void 0:t.querySelectorAll(Je))||[];if(this._currentHighlightIndex<=e.length){const n=e[this._currentHighlightIndex];n&&(this.lastFocusedItemKey=n.dataset.key||"",this._currentSelectedElm=n,this.scrolledByMouse=!1,n.scrollIntoView({block:"nearest"}),this.changeCurrentOptionHighlight(n),window.setTimeout(()=>this.scrolledByMouse=!0,10))}}changeCurrentOptionHighlight(e){var n;e==null||e.classList.add("highlighted"),(((n=this.dropElm)==null?void 0:n.querySelectorAll(Rm))||[]).forEach(o=>{o!==e&&o.classList.remove("highlighted")})}moveHighlightDown(){var n,o;const e=((n=this.dropElm)==null?void 0:n.querySelectorAll(Je))||[],t=e.length;this._currentHighlightIndex<t-1?(this._currentHighlightIndex++,(o=e[this._currentHighlightIndex])!=null&&o.classList.contains("disabled")&&this.moveHighlightDown()):this.options.infiniteScroll&&this.infiniteScrollHandler(null,this._currentHighlightIndex,t),this.highlightCurrentOption()}moveHighlightUp(){var n,o;const e=((n=this.dropElm)==null?void 0:n.querySelectorAll(Je))||[],t=this.options.single?0:1;if(this.virtualScroll&&this._currentHighlightIndex<=t&&this.updateDataStart>0&&this.ulElm){const i=e[this._currentHighlightIndex+(this.options.single?0:1)],s=i==null?void 0:i.dataset.key;this.lastFocusedItemKey=s,this.ulElm.scrollTop=this.ulElm.scrollTop-(i==null?void 0:i.getBoundingClientRect().height)||10,this.isMoveUpRecalcRequired=!0;return}this._currentHighlightIndex>0&&(this._currentHighlightIndex--,(o=e[this._currentHighlightIndex])!=null&&o.classList.contains("disabled")&&this.moveHighlightUp()),this.highlightCurrentOption()}recalculateArrowMove(e){var o;const t=((o=this.dropElm)==null?void 0:o.querySelectorAll(Je))||[],n=Array.from(t).findIndex(i=>i.dataset.key===this.lastFocusedItemKey);this._currentHighlightIndex=n-1,e==="down"?this.moveHighlightDown():e==="up"&&(this.moveHighlightUp(),this.isMoveUpRecalcRequired=!1)}close(e){var t,n;this.options.isOpen=!1,this.parentElm.classList.remove("ms-parent-open"),(n=(t=this.choiceElm)==null?void 0:t.querySelector("div.ms-icon-caret"))==null||n.classList.remove("open"),this.dropElm&&(this.dropElm.style.display="none",this.dropElm.ariaExpanded="false",this.options.container&&(this.parentElm.appendChild(this.dropElm),this.dropElm.style.top="auto",this.dropElm.style.left="auto")),this.options.onClose(e)}applyAsTextOrHtmlWhenEnabled(e,t){e||(e={}),this.isRenderAsHtml?e.innerHTML=typeof this.options.sanitizer=="function"?this.options.sanitizer(t):t:e.textContent=t}update(e=!1){var r;const t=this.getSelects();let n=this.getSelects("text");this.options.displayValues&&(n=t);const o=(r=this.choiceElm)==null?void 0:r.querySelector("span"),i=t.length;let s=null;const l=()=>{if(this.options.useSelectOptionLabel||this.options.useSelectOptionLabelToHtml){const d=t.join(this.options.displayDelimiter);return this.options.useSelectOptionLabelToHtml?Mm(d):d}return n.join(this.options.displayDelimiter)};if(o){if(i===0){const d=this.options.placeholder||"";o.classList.add("ms-placeholder"),this.applyAsTextOrHtmlWhenEnabled(o,d)}else i<this.options.minimumCountSelected?s=l():this.formatAllSelected()&&i===this.dataTotal?s=this.formatAllSelected():this.options.ellipsis&&i>this.options.minimumCountSelected?s=`${n.slice(0,this.options.minimumCountSelected).join(this.options.displayDelimiter)}...`:this.formatCountSelected(i,this.dataTotal)&&i>this.options.minimumCountSelected?s=this.formatCountSelected(i,this.dataTotal):s=l();if(s!==null&&(o==null||o.classList.remove("ms-placeholder"),this.applyAsTextOrHtmlWhenEnabled(o,s)),this.options.showClear&&this.selectClearElm){const d=s?"block":"none";this.selectClearElm.style.display=d}if(this.options.displayTitle){const d=this.options.useSelectOptionLabel||this.options.useSelectOptionLabelToHtml?"value":"text";o.title=this.getSelects(d).join(this.options.displayDelimiter)}}const a=this.getSelects();this.options.single?this.elm.value=a.length?a[0]:"":Array.from(this.elm.options).forEach(d=>{d.selected=a.some(p=>p===d.value)}),e||this.elm.dispatchEvent(new Event("change"))}updateSelected(e){var n,o,i;for(let s=this.updateDataStart;s<this.updateDataEnd;s++){const l=this.updateData[s],a=(n=this.dropElm)==null?void 0:n.querySelector(`input[data-key=${l._key}]`);if(a){a.checked=l.selected;const r=a.closest("li"),d=r==null?void 0:r.querySelector(".icon-checkbox-container div");r&&(l.selected&&!r.classList.contains("selected")?(r.classList.add("selected"),r.ariaSelected="true",d&&(d.className=`ms-icon ms-icon-${a.type==="radio"?"radio":"check"}`)):l.selected||(r.classList.remove("selected"),r.ariaSelected="false",d&&(d.className="ms-icon ms-icon-uncheck")))}}const t=((o=this.data)==null?void 0:o.filter(s=>s.visible).length)===0;if(this.selectAllElm){this.selectAllElm.ariaChecked=String(this.isAllSelected);const s=(i=this.dropElm)==null?void 0:i.querySelector(".ms-select-all .icon-checkbox-container div");if(s){let l="";this.isAllSelected?l="ms-icon-check":this.isPartiallyAllSelected?l="ms-icon-minus":l="ms-icon-uncheck",s.className=`ms-icon ${l}`}this.selectAllElm.checked=this.isAllSelected,zi(this.selectAllElm.closest("li"),!t)}zi(this.noResultsElm,t),this.virtualScroll&&(this.virtualScroll.rows=e??this.getListRows())}getData(){return this.options.data}getDataLength(){var e;return((e=this.data)==null?void 0:e.length)??0}getOptions(e=!0){const t=Object.assign({},this.options);return delete t.data,e?_o(t):this.options}refreshOptions(e){xm(this.options,e,!0)||(this.options=Object.assign(this.options,e),this.destroy(!1),this.init())}getDropElement(){return this.dropElm}getParentElement(){return this.parentElm}getSelects(e="value"){const t=[];for(const n of this.data||[])if(n.type==="optgroup"){const o=n.children.filter(i=>i==null?void 0:i.selected);if(!o.length)continue;if(e==="value"||this.options.single)t.push(...o.map(i=>e==="value"&&i._value||i[e]));else{const i=[];i.push("["),i.push(n.label),i.push(`: ${o.map(s=>s[e]).join(", ")}`),i.push("]"),t.push(i.join(""))}}else n.selected&&t.push(e==="value"&&n._value||n[e]);return t}setSelects(e,t="value",n=!1){let o=!1;const i=s=>{var l;for(const a of s){let r=!1;if(t==="text"){const d=document.createElement("div");this.applyAsTextOrHtmlWhenEnabled(d,a.text),r=e.includes(((l=d.textContent)==null?void 0:l.trim())??"")}else r=e.includes(a._value||a.value),!r&&a.value===`${+a.value}`&&(r=e.includes(+a.value));a.selected!==r&&(o=!0),a.selected=r}};for(const s of this.data||[])s.type==="optgroup"?i(s.children):i([s]);o&&(this.initSelected(n),this.updateSelected(),this.update(n))}enable(){this.choiceElm&&(this.choiceElm.classList.remove("disabled"),this.choiceElm.disabled=!1)}disable(){var e;this.choiceElm&&((e=this.choiceElm)==null||e.classList.add("disabled"),this.choiceElm.disabled=!0)}check(e){const t=fn(this.data,"value",e);t&&this._check(t,!0)}uncheck(e){const t=fn(this.data,"value",e);t&&this._check(t,!1)}_check(e,t){this.options.single&&this._checkAll(!1,!0),e.selected=t,this.initSelected(),this.updateSelected(),this.update()}checkAll(){this._checkAll(!0)}uncheckAll(){this._checkAll(!1)}_checkAll(e,t){for(const n of this.data||[])n.type==="optgroup"?this._checkGroup(n,e,!0):!n.disabled&&!n.divider&&(t||n.visible)&&(n.selected=e);t||(this.initSelected(),this.updateSelected(),this.update())}_checkGroup(e,t,n){e.selected=t,e.children.forEach(o=>{o&&!o.disabled&&!o.divider&&(n||o.visible)&&(o.selected=t)}),n||(this.initSelected(),this.updateSelected(),this.update())}checkInvert(){if(!this.options.single){for(const e of this.data||[])if(e.type==="optgroup")for(const t of e.children)t&&(t.divider||(t.selected=!t.selected));else e&&!e.divider&&(e.selected=!e.selected);this.initSelected(),this.updateSelected(),this.update()}}focus(){var e;(e=this.choiceElm)==null||e.focus(),this.options.onFocus()}blur(){var e;(e=this.choiceElm)==null||e.blur(),this.options.onBlur()}refresh(){this.destroy(!1),this.init()}filter(e){var i;const t=((i=this.searchInputElm)==null?void 0:i.value.trim())??"",n=t.toLowerCase();if(this.filterText===n)return;this.filterText=n;for(const s of this.data||[])if(s.type==="optgroup")if(this.options.filterGroup){const l=`${(s==null?void 0:s.label)??""}`;if(s!=null){const a=this.options.customFilter({label:be(l.toString().toLowerCase(),this.options.diacriticParser),search:be(n,this.options.diacriticParser),originalLabel:l,originalSearch:t,row:s});s.visible=a;for(const r of s.children)r&&(r.visible=a)}}else{for(const l of s.children)if(l!=null){const a=`${(l==null?void 0:l.text)??""}`;l.visible=this.options.customFilter({text:be(a.toString().toLowerCase(),this.options.diacriticParser),search:be(n,this.options.diacriticParser),originalText:a,originalSearch:t,row:l,parent:s})}s.visible=s.children.filter(l=>l==null?void 0:l.visible).length>0}else{const l=`${(s==null?void 0:s.text)??""}`;s.visible=this.options.customFilter({text:be(l.toString().toLowerCase(),this.options.diacriticParser),search:be(n,this.options.diacriticParser),originalText:l,originalSearch:t,row:s})}const o=this.initListItems();this.initSelected(e),this.updateSelected(o),e||this.options.onFilter(t)}adjustDropHeight(e){var d,p,f,y;const t=e!=="top",n=((d=this.filterParentElm)==null?void 0:d.getBoundingClientRect().height)??0,o=((p=this.okButtonElm)==null?void 0:p.getBoundingClientRect().height)??0,i=this.options.single?0:((f=this.selectAllParentElm)==null?void 0:f.getBoundingClientRect().height)??0,s=n+o+i+5,{bottom:l,top:a}=lo(this.parentElm);let r=this.options.maxHeight;if(t?r=l-s-this.options.adjustedHeightPadding:r=a-s-this.options.adjustedHeightPadding,!this.options.maxHeight||this.options.maxHeight&&r<this.options.maxHeight){const b=(y=this.dropElm)==null?void 0:y.querySelector("ul");return b&&(b.style.maxHeight=`${r}px`),!0}return!1}adjustDropPosition(e){let t="bottom";if(this.dropElm&&this.parentElm){const{bottom:n,top:o}=lo(this.dropElm),{top:i,left:s}=yo(this.parentElm),l=this.dropElm.getBoundingClientRect().height,a=this.dropElm.getBoundingClientRect().width,r=document.body.offsetWidth||window.innerWidth,d=this.parentElm.getBoundingClientRect().width;if(n>l)t="bottom";else if(l>n&&o>n){if(this.options.container){let p=i-l;p<0&&(p=0),(p>0||e)&&(t="top",this.dropElm.style.top=`${p<0?0:p}px`)}else t="top",this.dropElm.classList.add(t);this.dropElm.classList.remove("bottom")}r-a<s&&(this.dropElm.style.left=`${s-(a-d)}px`)}return t}adjustDropWidthByText(){if(this.dropElm){let t=this.parentElm.scrollWidth;(this.options.dropWidth||this.options.width)&&(t=this.options.dropWidth||this.options.width||0);const n=this.dropElm.querySelector(".ms-select-all span"),o=this.dropElm.querySelector("ul"),i=26,s=(n==null?void 0:n.clientWidth)??0+i,a=o.scrollHeight>o.clientHeight?this.getScrollbarWidth():0;let r=0;this.dropElm.querySelectorAll("li label").forEach(d=>{d.scrollWidth>r&&(r=d.scrollWidth)}),r+=i+a,r<s&&(r=s),this.options.maxWidth&&r>this.options.maxWidth&&(r=this.options.maxWidth),this.options.minWidth&&r<this.options.minWidth&&(r=this.options.minWidth),(t==="100%"||+t<r)&&(this.dropElm.style.width=`${r}px`,this.dropElm.style.maxWidth=`${r}px`)}}getScrollbarWidth(){var i;const e=document.createElement("div");e.style.visibility="hidden",e.style.width="100px",document.body.appendChild(e);const t=e.offsetWidth;e.style.overflow="scroll";const n=document.createElement("div");n.style.width="100%",e.appendChild(n);const o=n.offsetWidth;return(i=e.parentNode)==null||i.removeChild(e),t-o}formatAllSelected(){return this.options.allSelectedText||this.options.formatAllSelected()}formatCountSelected(e,t){return this.options.countSelectedText?this.options.countSelectedText.replace("#",`${e}`).replace("%",`${t}`):this.options.formatCountSelected(e,t)}formatNoMatchesFound(){return this.options.noMatchesFoundText||this.options.formatNoMatchesFound()}formatOkButton(){return this.options.okButtonText||this.options.formatOkButton()}formatSelectAll(){return this.options.selectAllText||this.options.formatSelectAll()}},m=(e,t)=>typeof e=="string"?ro(document.querySelectorAll(e),t):e instanceof Node?ro([e],t):ro(e,t);function ro(e,t){const n=Array.from(e),o=[];for(let i=0;i<n.length;i++){const s=n[i];try{s._multipleSelect!==void 0&&(s._multipleSelect.destroy(),delete s._multipleSelect),s._multipleSelect=new Pm(s,t||{}),s._multipleSelect.init();const l=s._multipleSelect.getOptions(!1);l.onHardDestroy=()=>delete s._multipleSelect,l.onAfterHardDestroyed=()=>o[i]=null,o.push(s._multipleSelect)}catch(l){console.error(l)}}return o.length===1?o[0]:o}m.defaults=vt.DEFAULTS;m.locales={...pl};m.methods=vt.METHODS;typeof window<"u"&&(window.multipleSelect=m);let Hm=class{constructor(){u(this,"logElm");u(this,"ms1")}mount(){this.logElm=document.querySelector("textarea"),this.ms1=m("select",{filter:!0,showSearchClear:!0,onOpen:()=>{this.log(`onOpen event fire!
`)},onClose:t=>{this.log(`onClose event fire! Reason: "${t}"
`)},onCheckAll:()=>{this.log(`onCheckAll event fire!
`)},onUncheckAll:()=>{this.log(`onUncheckAll event fire!
`)},onFocus:()=>{this.log(`onFocus event fire!
`)},onBlur:()=>{this.log(`onBlur event fire!
`)},onOptgroupClick:t=>{this.log(`onOptgroupClick event fire! view: ${JSON.stringify(t)}
`)},onClick:t=>{this.log(`onClick event fire! view: ${JSON.stringify(t)}
`)},onFilter:t=>{this.log(`onFilter event fire! text: ${t}
`)},onFilterClear:()=>{this.log(`onFilterClear event fire!
`)},onAfterCreate:()=>{this.log(`onAfterCreate event fire!
`)}})}log(t){this.logElm.textContent+=t,this.logElm.scrollTo(0,this.logElm.scrollHeight)}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},ml=class{constructor(){u(this,"ms",[])}mount(){this.ms=m(".multiple-select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Bm=class{constructor(){u(this,"ms",[])}mount(){this.ms=m(".multiple-select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Fm=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select",{multiple:!0,multipleWidth:70})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Gm=class{constructor(){u(this,"multiMs",[]);u(this,"singleMs")}mount(){this.multiMs=m(".select"),this.singleMs=m(".data",{data:[{value:1,text:"Options 1",selected:!0},{value:2,text:"Options 2"},{value:3,text:"Options 3"}]})}unmount(){var t;this.multiMs.forEach(n=>n.destroy()),this.multiMs=[],(t=this.singleMs)==null||t.destroy(),this.singleMs=void 0}},Um=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select")}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},jm=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Wm=class{constructor(){u(this,"btnElm");u(this,"ms",[]);u(this,"clickListener",()=>{const t=this.serialize(document.querySelector("form"));alert(t)})}mount(){this.ms=m("select"),this.btnElm=document.querySelector(".submit7"),this.btnElm.addEventListener("click",this.clickListener)}unmount(){this.btnElm.removeEventListener("click",this.clickListener),this.ms.forEach(t=>t.destroy()),this.ms=[]}serialize(t){const n=[];return t.querySelectorAll("[name]").forEach(o=>{const i=Array.from(o.selectedOptions);for(const s of i)n.push(`${o.name}=${s.value}`)}),n.length>0?n.join("&"):!1}},Jm=class{constructor(){u(this,"ms1");u(this,"ms2");u(this,"ms3");u(this,"ms4");u(this,"ms5")}mount(){this.ms1=m("#basic",{dataTest:"select1",data:[{text:"January",value:1},{text:"February",value:2},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}),this.ms2=m("#object",{dataTest:"select2",data:{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}}),this.ms3=m("#string",{dataTest:"select3",data:["January","February","March"]}),this.ms4=m("#number",{dataTest:"select4",data:[1,2,3]}),this.ms5=m("#group",{dataTest:"select5",data:[{type:"optgroup",label:"Group 1",children:[{text:"January",value:1,selected:!0},{text:"February",value:2,disabled:!0},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6}]},{type:"optgroup",label:"Group 2",children:[{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}]})}unmount(){var t,n,o,i,s;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),(s=this.ms5)==null||s.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0}};var hl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},vl={formatSelectAll(){return"[Seleccionar todo]"},formatAllSelected(){return"Todos seleccionados"},formatCountSelected(e,t){return`${e} de ${t} seleccionado`},formatNoMatchesFound(){return"No se encontraron coincidencias"},formatOkButton(){return"Cerrar"}};hl.locales["es-ES"]=vl;hl.locales;var fl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Vm={formatSelectAll(){return"[Vybrat vše]"},formatAllSelected(){return"Vše vybráno"},formatCountSelected(e,t){return`${e} z ${t} vybráno`},formatNoMatchesFound(){return"Nebylo nalezeno"},formatOkButton(){return"Zavřít"}};fl.locales["cz-CS"]=Vm;fl.locales;var bl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},qm={formatSelectAll(){return"[Vælg alle]"},formatAllSelected(){return"Alle valgt"},formatCountSelected(e,t){return`${e} af ${t} valgt`},formatNoMatchesFound(){return"Søgning uden resultat"},formatOkButton(){return"Lukke"}};bl.locales["da-DK"]=qm;bl.locales;var gl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},zm={formatSelectAll(){return"[Alles auswählen]"},formatAllSelected(){return"Alles ausgewählt"},formatCountSelected(e,t){return`${e} von ${t} ausgewählt`},formatNoMatchesFound(){return"Keine Ergebnisse"},formatOkButton(){return"Schließen"}};gl.locales["de-DE"]=zm;gl.locales;var _l=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Km={formatSelectAll(){return"[Select all]"},formatAllSelected(){return"All selected"},formatCountSelected(e,t){return`${e} of ${t} selected`},formatNoMatchesFound(){return"No matches found"},formatOkButton(){return"OK"}};_l.locales["en-US"]=Km;_l.locales;var El=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Ym={formatSelectAll(){return"[Seleccionar todo]"},formatAllSelected(){return"Todos seleccionados"},formatCountSelected(e,t){return`${e} de ${t} seleccionado`},formatNoMatchesFound(){return"No se encontraron coincidencias"},formatOkButton(){return"Cerrar"}};El.locales["es-ES"]=Ym;El.locales;var yl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Xm={formatSelectAll(){return"[Tout sélectionner]"},formatAllSelected(){return"Tous sélectionnés"},formatCountSelected(e,t){return`${e} de ${t} sélectionnés`},formatNoMatchesFound(){return"Aucun résultat"},formatOkButton(){return"Fermer"}};yl.locales["fr-FR"]=Xm;yl.locales;var wl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Qm={formatSelectAll(){return"[Összes kiválasztása]"},formatAllSelected(){return"Összes kiválasztva"},formatCountSelected(e,t){return`${e} / ${t} kiválasztva`},formatNoMatchesFound(){return"Nincs találat"},formatOkButton(){return"Bezár"}};wl.locales["hu-HU"]=Qm;wl.locales;var Sl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Zm={formatSelectAll(){return"[Seleziona tutti]"},formatAllSelected(){return"Tutti selezionati"},formatCountSelected(e,t){return`${e} di ${t} selezionati`},formatNoMatchesFound(){return"Nessun risultato"},formatOkButton(){return"Chiudere"}};Sl.locales["it-IT"]=Zm;Sl.locales;var Al=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},th={formatSelectAll(){return"[すべて選択]"},formatAllSelected(){return"すべて選択"},formatCountSelected(e,t){return`${t} 件中 ${e} 件選択`},formatNoMatchesFound(){return"見つかりません"},formatOkButton(){return"閉める"}};Al.locales["ja-JP"]=th;Al.locales;var kl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},eh={formatSelectAll(){return"[Selecionar todos]"},formatAllSelected(){return"Todos selecionados"},formatCountSelected(e,t){return`${e} de ${t} selecionado(s)`},formatNoMatchesFound(){return"Nenhum resultado encontrado"},formatOkButton(){return"Fechar"}};kl.locales["pt-BR"]=eh;kl.locales;var Ol=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},nh={formatSelectAll(){return"[Выбрать все]"},formatAllSelected(){return"Выбрано все"},formatCountSelected(e,t){return`${e} из ${t} выбрано`},formatNoMatchesFound(){return"Совпадений не найдено"},formatOkButton(){return"Закрывать"}};Ol.locales["ru-RU"]=nh;Ol.locales;var Tl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},oh={formatSelectAll(){return"[Tất cả]"},formatAllSelected(){return"Chọn tất cả"},formatCountSelected(e,t){return`Đã chọn ${e} trong ${t}`},formatNoMatchesFound(){return"Không tìm thấy kết quả."},formatOkButton(){return"Đóng"}};Tl.locales["vi-VN"]=oh;Tl.locales;var xl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},ih={formatSelectAll(){return"[全选]"},formatAllSelected(){return"已选择所有记录"},formatCountSelected(e,t){return`已从${t}条记录中选择${e}条`},formatNoMatchesFound(){return"没有找到记录"},formatOkButton(){return"关闭"}};xl.locales["zh-CN"]=ih;xl.locales;var Cl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},sh={formatSelectAll(){return"[全選]"},formatAllSelected(){return"已選擇所有記錄"},formatCountSelected(e,t){return`已從${t}條記錄中選擇${e}條`},formatNoMatchesFound(){return"沒有找到記錄"},formatOkButton(){return"关闭"}};Cl.locales["zh-TW"]=sh;Cl.locales;let lh=class{constructor(){u(this,"ms0");u(this,"ms1");u(this,"ms2")}mount(){const t=document.querySelector("#locale");t.addEventListener("change",n=>{this.updateLocale(n.target.value)}),this.ms0=m(t,{maxHeight:400}),this.ms1=m("#dynamic-select",{filter:!0,showOkButton:!0,dataTest:"select1"}),this.ms2=m("#fixed-import",{filter:!0,showOkButton:!0,dataTest:"select2",locale:vl})}unmount(){var t,n,o;(t=this.ms0)==null||t.destroy(),(n=this.ms1)==null||n.destroy(),(o=this.ms2)==null||o.destroy(),this.ms0=void 0,this.ms1=void 0,this.ms2=void 0}updateLocale(t){var n,o;(n=this.ms1)==null||n.destroy(),(o=this.ms1)==null||o.refreshOptions({locale:t})}},ah=class{constructor(){u(this,"ms1");u(this,"ms2")}mount(){const t=[],n=[];for(let o=0;o<1e4;o++)t.push(o);for(let o=0;o<1e4;o++)n.push({text:`<i class="fa fa-star"></i> Task ${o}`,value:o});this.ms1=m("#select1",{filter:!0,data:t,showSearchClear:!0}),this.ms2=m("#select2",{filter:!0,data:n,showSearchClear:!0,useSelectOptionLabelToHtml:!0})}unmount(){var t,n;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),this.ms1=void 0,this.ms2=void 0}},rh=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},ch=class{constructor(){u(this,"ms1");u(this,"ms2")}mount(){this.ms1=m("#single",{singleRadio:!0}),this.ms2=m("#multiple",{showOkButton:!0})}unmount(){var t,n;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),this.ms1=void 0,this.ms2=void 0}},ph=class{constructor(){u(this,"createBtnElm");u(this,"destroyBtnElm");u(this,"ms1")}mount(){this.createBtnElm=document.querySelector("#createBtn"),this.destroyBtnElm=document.querySelector("#destroyBtn"),this.createBtnElm.addEventListener("click",this.createMultipleSelect.bind(this)),this.destroyBtnElm.addEventListener("click",this.destroyMultiSelect.bind(this))}createMultipleSelect(){this.ms1=m("#select1",{name:"my-select",single:!1,useSelectOptionLabelToHtml:!0,sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0}),data:[{text:'<i class="fa fa-star"></i> January',value:1},{text:"February",value:2},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}),this.ms1.setSelects([1,3,4])}destroyMultiSelect(){var t;console.log("destroy"),(t=this.ms1)==null||t.destroy(),this.ms1=void 0}unmount(){this.destroyMultiSelect(),this.createBtnElm.removeEventListener("click",this.createMultipleSelect.bind(this)),this.destroyBtnElm.removeEventListener("click",this.destroyMultiSelect.bind(this))}},uh=class{constructor(){u(this,"ms1",[]);u(this,"ms2",[])}mount(){this.ms1=m(".select"),this.ms2=m(".data-select",{dataTest:"select1",data:[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"},{divider:!0},{value:4,text:"Option 4"},{value:5,text:"Option 5"},{value:6,text:"Option 6"}]})}unmount(){this.ms1.forEach(t=>t.destroy()),this.ms2.forEach(t=>t.destroy()),this.ms1=[],this.ms2=[]}},dh=class{constructor(){u(this,"ms1");u(this,"ms2");u(this,"ms3");u(this,"ms4");u(this,"ms5");u(this,"darkMode",!0)}mount(){var t;(t=document.querySelector(".panel-wm-content"))==null||t.classList.add("dark-mode"),this.ms1=m("select[data-test=single]",{darkMode:!0}),this.ms2=m("select[data-test=radio]",{darkMode:!0,singleRadio:!0}),this.ms3=m("select[data-test=multiple]",{darkMode:!0}),this.ms4=m("select[data-test=group]",{darkMode:!0}),this.ms5=m("select[data-test=data1]",{darkMode:!0,dataTest:"select1",filter:!0,showOkButton:!0,showClear:!0,showSearchClear:!0,data:[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"},{divider:!0},{value:4,text:"Option 4"},{value:5,text:"Option 5"},{value:6,text:"Option 6"}]})}unmount(){var t,n,o,i,s,l;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),(s=this.ms5)==null||s.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0,(l=document.querySelector(".panel-wm-content"))==null||l.classList.remove("dark-mode")}};const Ki=""+new URL("avatar1-Dfqkz6jG.png",import.meta.url).href,Yi=""+new URL("avatar2-C5pX2a2d.png",import.meta.url).href,Xi=""+new URL("avatar3-COtlxv_R.png",import.meta.url).href,Qi=""+new URL("avatar4-Dom6eBE9.png",import.meta.url).href,Zi=""+new URL("avatar5-B_ltAQdV.png",import.meta.url).href;let mh=class{constructor(){u(this,"ms1");u(this,"ms2")}mount(){this.ms1=m("[data-test=select1]",{data:[{value:"1",text:`<img alt="avatar1" src="${Ki}" class="avatar"> Eric`},{value:"2",text:`<img alt="avatar2" src="${Yi}" class="avatar"> Smith`},{value:"3",text:`<img alt="avatar3" src="${Xi}" class="avatar"> Erika`},{value:"4",text:`<img alt="avatar4" src="${Qi}" class="avatar"> Julia`},{value:"5",text:`<img alt="avatar5" src="${Zi}" class="avatar"> Catherine`}],renderOptionLabelAsHtml:!0}),this.ms2=m("[data-test=select2]",{singleRadio:!0,renderOptionLabelAsHtml:!0,textTemplate:t=>{const[n,o]=t.textContent.split("::");return`<div class="image-container"><img alt="avatar${t.value}" src="${this.getAvatarByIdx(t.value)}" class="avatar"><div class="text-container"><div class="name-section">${n}</div><div class="job-section">${o}</div></div></div>`},sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0})})}unmount(){var t,n;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),this.ms1=void 0,this.ms2=void 0}getAvatarByIdx(t){let n;switch(+t){case 1:n=Ki;break;case 2:n=Yi;break;case 3:n=Xi;break;case 4:n=Qi;break;case 5:n=Zi;break}return n}},hh=class{},vh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{filter:!0,showOkButton:!0,formatAllSelected(){return"Tous sélectionnés"},formatCountSelected(t,n){return`${t} de ${n} sélectionnés`},formatNoMatchesFound(){return"Aucun résultat"},formatOkButton(){return"Fermer"},formatSelectAll(){return"[Tout sélectionner]"}})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},fh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{filter:!0}),document.querySelector("#getOptions").addEventListener("click",()=>{alert(JSON.stringify(this.ms1.getOptions(),null,4))})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},bh=class{constructor(){u(this,"ms1");u(this,"ms2");u(this,"darkMode2",!1)}mount(){var t,n;this.ms1=m(".select1",{filter:!0}),this.ms2=m(".select2",{darkMode:this.darkMode2,showOkButton:!0}),(t=document.querySelector("#refreshOptions"))==null||t.addEventListener("click",()=>this.refreshOption1()),(n=document.querySelector("#setDarkMode"))==null||n.addEventListener("click",()=>this.toggleDarkMode2())}refreshOption1(){var t;(t=this.ms1)==null||t.refreshOptions({filter:!1})}toggleDarkMode2(){var t;this.darkMode2=!this.darkMode2,(t=this.ms2)==null||t.refreshOptions({darkMode:this.darkMode2})}unmount(){var t,n,o,i;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),this.ms1=void 0,this.ms2=void 0,(o=document.querySelector("#refreshOptions"))==null||o.removeEventListener("click",()=>this.refreshOption1()),(i=document.querySelector("#setDarkMode"))==null||i.removeEventListener("click",()=>this.toggleDarkMode2())}},gh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{filter:!0}),document.querySelector("#setSelectsBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.setSelects([1,3])}),document.querySelector("#getSelectsBtn").addEventListener("click",()=>{var t,n;alert(`Selected values: ${(t=this.ms1)==null?void 0:t.getSelects()}`),alert(`Selected texts: ${(n=this.ms1)==null?void 0:n.getSelects("text")}`)}),document.querySelector("#setSelectsBtn2").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.setSelects(["February","April"],"text")}),document.querySelector("#getSelectsBtn2").addEventListener("click",()=>{var t;alert(`Selected values: ${(t=this.ms1)==null?void 0:t.getSelects("text")}`)})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},_h=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select"),document.querySelector("#enableBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.enable()}),document.querySelector("#disableBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.disable()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Eh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select"),document.querySelector("#openBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.open()}),document.querySelector("#closeBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.close()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},yh=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select"),document.querySelector("#checkBtn").addEventListener("click",()=>{for(const t of this.ms)t.check(2)}),document.querySelector("#uncheckBtn").addEventListener("click",()=>{for(const t of this.ms)t.uncheck(2)})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},wh=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select"),document.querySelector("#checkAllBtn").addEventListener("click",()=>{for(const t of this.ms)t.checkAll()}),document.querySelector("#uncheckAllBtn").addEventListener("click",()=>{for(const t of this.ms)t.uncheckAll()})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Sh=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select"),document.querySelector("#checkInvert").addEventListener("click",()=>{for(const t of this.ms)t.checkInvert()})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Ah=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select"),document.querySelector("#focusBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.focus()}),document.querySelector("#blurBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.blur()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},kh=class{constructor(){u(this,"ms1")}mount(){const t=document.querySelector("select");this.ms1=m(t),document.querySelector("#refreshAdd").addEventListener("click",()=>{var a;const n=document.querySelector("#refreshInput"),o=document.querySelector("#refreshSelected"),i=document.querySelector("#refreshDisabled"),s=n.value.trim(),l=document.createElement("option");if(l.value=s,l.text=s,!s){n.focus();return}o.checked&&(l.selected=!0),i.checked&&(l.disabled=!0),n.value="",t.appendChild(l),(a=this.ms1)==null||a.refresh()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Oh=class{constructor(){u(this,"buildBtnElm");u(this,"destroyBtnElm");u(this,"ms1")}mount(){this.buildBtnElm=document.querySelector("#buildBtn"),this.destroyBtnElm=document.querySelector("#destroyBtn"),this.destroyBtnElm.addEventListener("click",this.destroyMultiSelect.bind(this)),this.buildBtnElm.addEventListener("click",this.createMultipleSelect.bind(this)),this.ms1=m("select")}createMultipleSelect(){this.ms1=m("select")}destroyMultiSelect(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=null}unmount(){this.destroyMultiSelect(),this.buildBtnElm.removeEventListener("click",this.destroyMultiSelect.bind(this)),this.destroyBtnElm.removeEventListener("click",this.createMultipleSelect.bind(this))}},Th=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{filter:!0}),document.querySelector("#getData").addEventListener("click",()=>{console.log("tt",JSON.stringify(this.ms1.getData())),alert(JSON.stringify(this.ms1.getData(),null,4))})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},xh=class{constructor(){u(this,"ms1");u(this,"ms2")}mount(){this.ms1=m("#select1"),this.ms2=m("#select2",{placeholder:"Here is the placeholder via javascript"})}unmount(){var t,n;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),this.ms1=void 0,this.ms2=void 0}},Ch=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select",{singleRadio:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Dh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{selectAll:!1})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Mh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{multiple:!0,hideOptgroupCheckboxes:!0,multipleWidth:70})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Nh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{multiple:!0,width:500,multipleWidth:70,dropWidth:580})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Lh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{maxHeight:140})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Ih=class{constructor(){u(this,"ms",[])}mount(){const t=document.querySelector("#number");this.ms=m("select",{maxHeight:+t.value,maxHeightUnit:"row"}),t.addEventListener("change",()=>{this.ms.forEach(n=>{n.refreshOptions({maxHeight:+t.value,maxHeightUnit:"row"})})})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},$h=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{position:"top"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Rh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{displayValues:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Ph=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{displayTitle:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Hh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{displayDelimiter:" | "})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Bh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{minimumCountSelected:8})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Fh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{ellipsis:!0,minimumCountSelected:5})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Gh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{isOpen:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Uh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{keepOpen:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},jh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{openOnHover:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Wh=class{constructor(){u(this,"ms1");u(this,"ms2");u(this,"ms3");u(this,"ms4")}mount(){this.ms1=m(".select1"),this.ms2=m(".select2"),this.ms3=m(".select3",{container:".my-container"}),this.ms4=m(".select4",{autoAdjustDropPosition:!0,container:"body"})}unmount(){var t,n,o,i;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},Jh=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select",{filter:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Vh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{filter:!0,filterGroup:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},qh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{filter:!0,filterPlaceholder:"The filter placeholder"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},zh=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select",{filter:!0,filterAcceptOnEnter:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Kh=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select",{filterByDataLength:10})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Yh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{filter:!0,customFilter:({text:t,search:n,originalText:o,originalSearch:i})=>document.querySelector("input").checked?o.indexOf(i)===0:t.indexOf(n)===0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Xh=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select",{showClear:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Qh=class{constructor(){u(this,"ms",[])}mount(){this.ms.push(m(".select1",{showOkButton:!0})),this.ms.push(m(".select2",{showOkButton:!0})),this.ms.push(m(".select3",{showOkButton:!0,filter:!0})),this.ms.push(m(".select4",{showOkButton:!0}))}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Zh=class{constructor(){u(this,"ms1");u(this,"ms2")}mount(){this.ms1=m('[data-test="select3"]',{cssStyler:t=>+((t==null?void 0:t.value)??0)==2?{backgroundColor:"#6fbeff",color:"#0014ff",fontStyle:"italic"}:+((t==null?void 0:t.value)??0)==4?{backgroundColor:"#972727",color:"#fff"}:null}),this.ms2=m('[data-test="select4"]',{cssStyler:t=>(t==null?void 0:t.type)==="optgroup"?{color:"#787878",fontWeight:"normal"}:+((t==null?void 0:t.value)??0)==3?{color:"purple",textDecoration:"underline"}:null})}unmount(){var t,n;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),this.ms1=void 0,this.ms2=void 0}},tv=class{constructor(){u(this,"ms1");u(this,"ms2");u(this,"btnEnableElm");u(this,"btnDisableElm")}mount(){this.ms1=m("#basic",{filter:!0,displayTitle:!0,renderOptionLabelAsHtml:!0,textTemplate:t=>`<i class="fa fa-star"></i>${t.innerHTML}`,customFilter:({search:t,text:n})=>{var i;const o=document.createElement("div");return o.innerHTML=n,((i=o.textContent)==null?void 0:i.includes(t))??!0},sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms2=m("#from-data",{dataTest:"select1",displayTitle:!0,renderOptionLabelAsHtml:!0,data:[{value:'50"',text:'50"'},{value:"44'",text:"44'"},{value:"33",text:'<span style="font-weight:bold">33</span>'}],sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.btnEnableElm=document.querySelector("#enableRenderHtml"),this.btnEnableElm.addEventListener("click",()=>this.renderAsHtmlHandler(!0)),this.btnDisableElm=document.querySelector("#disableRenderHtml"),this.btnDisableElm.addEventListener("click",()=>this.renderAsHtmlHandler(!1))}renderAsHtmlHandler(t){var n,o;(n=this.ms1)==null||n.refreshOptions({renderOptionLabelAsHtml:t}),(o=this.ms2)==null||o.refreshOptions({renderOptionLabelAsHtml:t})}unmount(){var t,n,o,i;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),this.ms1=void 0,this.ms2=void 0,(o=this.btnEnableElm)==null||o.removeEventListener("click",()=>this.renderAsHtmlHandler(!0)),(i=this.btnDisableElm)==null||i.removeEventListener("click",()=>this.renderAsHtmlHandler(!1))}},ev=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{renderOptionLabelAsHtml:!0,labelTemplate:t=>`<i class="fa fa-star"></i>${t.getAttribute("label")}`,sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0})})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},nv=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select",{autoAdjustDropPosition:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},ov=class{constructor(){u(this,"ms1");u(this,"ms2");u(this,"ms3");u(this,"ms4")}mount(){this.ms1=m("#select1",{autoAdjustDropWidthByTextSize:!0,autoAdjustDropHeight:!0,position:"top",showOkButton:!0,sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms2=m("#select2",{autoAdjustDropHeight:!0,position:"top",showOkButton:!0,sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms3=m("#select3",{autoAdjustDropHeight:!0,filter:!0,position:"top",sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms4=m("#select4")}unmount(){var t,n,o,i;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},iv=class{constructor(){u(this,"ms1");u(this,"ms2")}mount(){this.ms1=m("#select1",{useSelectOptionLabel:!0}),this.ms2=m("#select2",{useSelectOptionLabelToHtml:!0,sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0}),data:[{text:'<i class="fa fa-star"></i> January',value:'<i class="fa fa-star"></i>1',selected:!0},{text:"February",value:"2"},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]})}unmount(){var t,n;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),this.ms1=void 0,this.ms2=void 0}},sv=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("#select1",{placeholder:'Placeholder with cross-site scripting code...<img src="not-found" onerror=alert("Hacked")>',sanitizer:t=>typeof t=="string"?decodeURIComponent(t).replace(/(\b)(on[a-z]+)(\s*)=|javascript:([^>]*)[^>]*|(<\s*)(\/*)script([<>]*).*(<\s*)(\/*)script(>*)|(&lt;)(\/*)(script|script defer)(.*)(&gt;|&gt;">)/gi,""):t})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},lv=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select",{classes:"form-control",classPrefix:"form-control"})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},av=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select",{filter:!0,showSearchClear:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}};const ts={a:"ÀÁÂÃÄÅàáâãäåĀāąĄ",c:"ÇçćĆčČ",d:"đĐďĎ",e:"ÈÉÊËèéêëěĚĒēęĘ",i:"ÌÍÎÏìíîïĪī",l:"łŁ",n:"ÑñňŇńŃ",o:"ÒÓÔÕÕÖØòóôõöøŌō",r:"řŘ",s:"ŠšśŚ",t:"ťŤ",u:"ÙÚÛÜùúûüůŮŪū",y:"ŸÿýÝ",z:"ŽžżŻźŹ"};let rv=class{constructor(){u(this,"ms1");u(this,"ms2");u(this,"inLogElm");u(this,"outLogElm")}mount(){this.inLogElm=document.querySelector("input.in-log"),this.outLogElm=document.querySelector("input.out-log"),this.ms1=m("#select1",{filter:!0,showSearchClear:!0,filterPlaceholder:'🔎︎ search with "é", "û" or simply "u"',diacriticParser:t=>{const n=t.split("").map(o=>Object.keys(ts).find(i=>ts[i].includes(o))||o).join("");return this.inLogElm.value=t,this.outLogElm.value=n,n}}),this.ms2=m("#select2",{filter:!0,showSearchClear:!0,filterPlaceholder:'🔎︎ search with "é", "û" or simply "u"'})}unmount(){var t,n;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),this.ms1=void 0,this.ms2=void 0}},cv=class{constructor(){u(this,"ms1");u(this,"ms2")}mount(){const t=[],n=[];for(let o=1;o<=25;o++)t.push({text:`Title ${o}`,value:o});for(let o=1;o<=2e3;o++)n.push({text:`<i class="fa fa-star"></i> Task ${o}`,value:o});this.ms1=m("#select1",{data:t,infiniteScroll:!0}),this.ms2=m("#select2",{filter:!0,data:n,showSearchClear:!0,useSelectOptionLabelToHtml:!0,infiniteScroll:!0})}unmount(){var t,n;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),this.ms1=void 0,this.ms2=void 0}},pv=class{constructor(){u(this,"ms1");u(this,"ms2");u(this,"ms3");u(this,"ms4")}mount(){this.ms1=m("select[data-test=select1]"),this.ms2=m("select[data-test=select2]"),this.ms3=m("select[data-test=select3]"),this.ms4=m("select[data-test=select4]",{filter:!0})}unmount(){var t,n,o,i;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},uv=class{constructor(){u(this,"pageContentElm",null);u(this,"ms1");u(this,"ms2");u(this,"ms3");u(this,"ms4");u(this,"ms5");u(this,"darkMode",!0)}mount(){var t,n;this.pageContentElm=document.querySelector(".panel-wm-content"),(t=this.pageContentElm)==null||t.classList.add("dark-mode"),(n=document.querySelector("#setDarkMode"))==null||n.addEventListener("click",()=>this.toggleDarkMode()),this.ms1=m("select[data-test=single]",{darkMode:!0}),this.ms2=m("select[data-test=radio]",{darkMode:!0,singleRadio:!0}),this.ms3=m("select[data-test=multiple]",{darkMode:!0}),this.ms4=m("select[data-test=group]",{darkMode:!0}),this.ms5=m("select[data-test=data1]",{darkMode:!0,dataTest:"select1",filter:!0,showOkButton:!0,showClear:!0,showSearchClear:!0,data:[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"},{divider:!0},{value:4,text:"Option 4"},{value:5,text:"Option 5"},{value:6,text:"Option 6"}]})}toggleDarkMode(){var t,n,o,i,s;if(this.darkMode=!this.darkMode,(t=this.ms1)==null||t.refreshOptions({darkMode:this.darkMode}),(n=this.ms2)==null||n.refreshOptions({darkMode:this.darkMode}),(o=this.ms3)==null||o.refreshOptions({darkMode:this.darkMode}),(i=this.ms4)==null||i.refreshOptions({darkMode:this.darkMode}),(s=this.ms5)==null||s.refreshOptions({darkMode:this.darkMode}),this.pageContentElm){const l=this.darkMode?"add":"remove";this.pageContentElm.classList[l]("dark-mode")}}unmount(){var t,n,o,i,s,l,a;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),(s=this.ms5)==null||s.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0,(l=this.pageContentElm)==null||l.classList.remove("dark-mode"),(a=document.querySelector("#setDarkMode"))==null||a.removeEventListener("click",()=>this.toggleDarkMode())}};class dv{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{labelId:"custom-label"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}}const es=[{name:"getting-started",view:"/src/getting-started.html",viewModel:hh,title:"Getting Started"},{name:"examples",view:"/src/examples/example01.html",viewModel:ml,title:"Examples"}],ns=[{name:"Welcomes",routes:[{name:"example01",view:"/src/examples/example01.html",viewModel:ml,title:"Single Select"},{name:"example02",view:"/src/examples/example02.html",viewModel:Bm,title:"Multiple Select"},{name:"example03",view:"/src/examples/example03.html",viewModel:Fm,title:"Multiple Items"},{name:"example04",view:"/src/examples/example04.html",viewModel:Gm,title:"Auto Width"},{name:"example05",view:"/src/examples/example05.html",viewModel:Um,title:"Disabled Select"},{name:"example06",view:"/src/examples/example06.html",viewModel:jm,title:"Selected/Disabled Options"},{name:"example07",view:"/src/examples/example07.html",viewModel:Wm,title:"Submit Select"},{name:"example08",view:"/src/examples/example08.html",viewModel:Jm,title:"The Data"},{name:"example09",view:"/src/examples/example09.html",viewModel:lh,title:"Locale"},{name:"example10",view:"/src/examples/example10.html",viewModel:ah,title:"Large Select (Virtual Scroll)"},{name:"example11",view:"/src/examples/example11.html",viewModel:rh,title:"Themes / Sizes"},{name:"example12",view:"/src/examples/example12.html",viewModel:ch,title:"Checkbox/Radio Icons"},{name:"example13",view:"/src/examples/example13.html",viewModel:ph,title:"Dynamically Create Select"},{name:"example14",view:"/src/examples/example14.html",viewModel:uh,title:"The Divider"},{name:"example15",view:"/src/examples/example15.html",viewModel:dh,title:"Dark Mode"},{name:"example16",view:"/src/examples/example16.html",viewModel:mh,title:"Template with Images"}]},{name:"Options",routes:[{name:"options01",view:"/src/options/options01.html",viewModel:xh,title:"The Placeholder"},{name:"options02",view:"/src/options/options02.html",viewModel:Ch,title:"Single Radio"},{name:"options03",view:"/src/options/options03.html",viewModel:Dh,title:"Hide Select All"},{name:"options04",view:"/src/options/options04.html",viewModel:Mh,title:"Hide Optgroup Checkboxes"},{name:"options05",view:"/src/options/options05.html",viewModel:Nh,title:"Custom Dropdown Width"},{name:"options06",view:"/src/options/options06.html",viewModel:Lh,title:"Max Height"},{name:"options07",view:"/src/options/options07.html",viewModel:Ih,title:"Max Height Unit"},{name:"options08",view:"/src/options/options08.html",viewModel:$h,title:"The Position"},{name:"options09",view:"/src/options/options09.html",viewModel:Rh,title:"Display Values"},{name:"options10",view:"/src/options/options10.html",viewModel:Ph,title:"Display Title"},{name:"options11",view:"/src/options/options11.html",viewModel:Hh,title:"Display Delimiter"},{name:"options12",view:"/src/options/options12.html",viewModel:Bh,title:"Minimum Count Selected"},{name:"options13",view:"/src/options/options13.html",viewModel:Fh,title:"The Ellipsis"},{name:"options14",view:"/src/options/options14.html",viewModel:Gh,title:"Is Open"},{name:"options15",view:"/src/options/options15.html",viewModel:Uh,title:"Keep Open"},{name:"options16",view:"/src/options/options16.html",viewModel:jh,title:"Open On Hover"},{name:"options17",view:"/src/options/options17.html",viewModel:Wh,title:"The Container"},{name:"options18",view:"/src/options/options18.html",viewModel:Jh,title:"The Filter"},{name:"options19",view:"/src/options/options19.html",viewModel:Vh,title:"Filter Only Optgroup"},{name:"options20",view:"/src/options/options20.html",viewModel:qh,title:"Filter Placeholder"},{name:"options21",view:"/src/options/options21.html",viewModel:zh,title:"Filter Accept On Enter"},{name:"options22",view:"/src/options/options22.html",viewModel:Kh,title:"Filter By Data Length"},{name:"options23",view:"/src/options/options23.html",viewModel:Yh,title:"Custom Filter"},{name:"options24",view:"/src/options/options24.html",viewModel:Xh,title:"Show Clear"},{name:"options25",view:"/src/options/options25.html",viewModel:Qh,title:"Show OK Button"},{name:"options26",view:"/src/options/options26.html",viewModel:Zh,title:"The Styler"},{name:"options27",view:"/src/options/options27.html",viewModel:tv,title:"Text Template"},{name:"options28",view:"/src/options/options28.html",viewModel:ev,title:"Label Template"},{name:"options29",view:"/src/options/options29.html",viewModel:nv,title:"Auto-Adjust Drop Position"},{name:"options30",view:"/src/options/options30.html",viewModel:ov,title:"Auto-Adjust Drop Height/Width"},{name:"options31",view:"/src/options/options31.html",viewModel:iv,title:"Use Select Option as Label"},{name:"options32",view:"/src/options/options32.html",viewModel:sv,title:"Sanitizer"},{name:"options33",view:"/src/options/options33.html",viewModel:lv,title:"Classes"},{name:"options34",view:"/src/options/options34.html",viewModel:av,title:"Show Search Clear"},{name:"options35",view:"/src/options/options35.html",viewModel:rv,title:"Custom Diacritic Parser"},{name:"options36",view:"/src/options/options36.html",viewModel:cv,title:"Infinite Scroll"},{name:"options37",view:"/src/options/options37.html",viewModel:pv,title:"Navigation Highlight"},{name:"options38",view:"/src/options/options38.html",viewModel:uv,title:"Dark Mode"},{name:"options39",view:"/src/options/options39.html",viewModel:dv,title:"Label Id (aria-labelledby)"}]},{name:"Methods",routes:[{name:"methods01",view:"/src/methods/methods01.html",viewModel:fh,title:"The getOptions"},{name:"methods02",view:"/src/methods/methods02.html",viewModel:bh,title:"The refreshOptions"},{name:"methods03",view:"/src/methods/methods03.html",viewModel:gh,title:"The setSelects/getSelects"},{name:"methods04",view:"/src/methods/methods04.html",viewModel:_h,title:"The enable/disable"},{name:"methods05",view:"/src/methods/methods05.html",viewModel:Eh,title:"The open/close"},{name:"methods06",view:"/src/methods/methods06.html",viewModel:yh,title:"The check/uncheck"},{name:"methods07",view:"/src/methods/methods07.html",viewModel:wh,title:"The checkAll/uncheckAll"},{name:"methods08",view:"/src/methods/methods08.html",viewModel:Sh,title:"The checkInvert"},{name:"methods09",view:"/src/methods/methods09.html",viewModel:Ah,title:"The focus/blur"},{name:"methods10",view:"/src/methods/methods10.html",viewModel:kh,title:"The refresh"},{name:"methods11",view:"/src/methods/methods11.html",viewModel:Oh,title:"The destroy"},{name:"methods12",view:"/src/methods/methods12.html",viewModel:Th,title:"The getData"}]},{name:"Events",routes:[{name:"events",view:"/src/events/events.html",viewModel:Hm,title:"The Events"}]},{name:"I18N",routes:[{name:"i18n",view:"/src/i18n/i18n.html",viewModel:vh,title:"The i18n"}]}],mv=Object.assign({"/src/events/events.html":Bl,"/src/examples/example01.html":Fl,"/src/examples/example02.html":Gl,"/src/examples/example03.html":Ul,"/src/examples/example04.html":jl,"/src/examples/example05.html":Wl,"/src/examples/example06.html":Jl,"/src/examples/example07.html":Vl,"/src/examples/example08.html":ql,"/src/examples/example09.html":zl,"/src/examples/example10.html":Kl,"/src/examples/example11.html":Yl,"/src/examples/example12.html":Xl,"/src/examples/example13.html":Ql,"/src/examples/example14.html":Zl,"/src/examples/example15.html":ta,"/src/examples/example16.html":ea,"/src/getting-started.html":na,"/src/i18n/i18n.html":oa,"/src/main.html":os,"/src/methods/methods01.html":ia,"/src/methods/methods02.html":sa,"/src/methods/methods03.html":la,"/src/methods/methods04.html":aa,"/src/methods/methods05.html":ra,"/src/methods/methods06.html":ca,"/src/methods/methods07.html":pa,"/src/methods/methods08.html":ua,"/src/methods/methods09.html":da,"/src/methods/methods10.html":ma,"/src/methods/methods11.html":ha,"/src/methods/methods12.html":va,"/src/options/options01.html":fa,"/src/options/options02.html":ba,"/src/options/options03.html":ga,"/src/options/options04.html":_a,"/src/options/options05.html":Ea,"/src/options/options06.html":ya,"/src/options/options07.html":wa,"/src/options/options08.html":Sa,"/src/options/options09.html":Aa,"/src/options/options10.html":ka,"/src/options/options11.html":Oa,"/src/options/options12.html":Ta,"/src/options/options13.html":xa,"/src/options/options14.html":Ca,"/src/options/options15.html":Da,"/src/options/options16.html":Ma,"/src/options/options17.html":Na,"/src/options/options18.html":La,"/src/options/options19.html":Ia,"/src/options/options20.html":$a,"/src/options/options21.html":Ra,"/src/options/options22.html":Pa,"/src/options/options23.html":Ha,"/src/options/options24.html":Ba,"/src/options/options25.html":Fa,"/src/options/options26.html":Ga,"/src/options/options27.html":Ua,"/src/options/options28.html":ja,"/src/options/options29.html":Wa,"/src/options/options30.html":Ja,"/src/options/options31.html":Va,"/src/options/options32.html":qa,"/src/options/options33.html":za,"/src/options/options34.html":Ka,"/src/options/options35.html":Ya,"/src/options/options36.html":Xa,"/src/options/options37.html":Qa,"/src/options/options38.html":Za,"/src/options/options39.html":tr});class hv{constructor(){u(this,"loading",!0);u(this,"currentModel");u(this,"currentRouter");u(this,"defaultRouteName","getting-started");u(this,"stateBangChar","#/");u(this,"baseUrl",window.location.origin+window.location.pathname);u(this,"viewModelObj",{})}async init(){const t=window.location;document.querySelector("#app").innerHTML=ft.sanitize(os,{RETURN_TRUSTED_TYPE:!0});let n=t.hash.replace(this.stateBangChar,"");(!n||n==="/"||n==="#")&&(n=this.defaultRouteName),this.createRouteLinks(),this.loadRoute(n),Array.from(document.querySelectorAll(".panel-wm-left a.nav-link,.navbar-nav a.nav-link")).forEach(o=>{n.includes(o.id)&&o.classList.add("active")}),window.onpopstate=()=>{const i=window.location.hash.replace(this.stateBangChar,"");this.removeAllActiveLinks();const s=document.querySelector(`#${i}`);s&&(s.scrollIntoView(),s.classList.add("active")),this.loadRoute(i||this.defaultRouteName,!1)}}createRouteLinks(){var t,n,o;for(const i of es){const s=B("li",{className:"nav-item"});B("a",{id:i.name,className:"nav-link",textContent:i.title},s).addEventListener("click",this.clickEventListener.bind(this)),(t=document.querySelector(".navbar-nav"))==null||t.appendChild(s)}for(const i of ns){const s=B("li",{className:"m-1"});B("p",{className:"navbar-vertical-label mb-1",textContent:i.name},s),(n=document.querySelector(".nav-pills"))==null||n.appendChild(s);for(const l of i.routes){const a=B("li",{className:"nav-item"}),r=B("a",{id:l.name,className:"nav-link",textContent:l.title});r.addEventListener("click",this.clickEventListener.bind(this)),a.appendChild(r),(o=document.querySelector(".nav-pills"))==null||o.appendChild(a)}}}async loadRoute(t,n=!0){var s;const o=document.querySelector(".panel-wm-content");ze(o),o.classList.add("cloak");let i=es.find(l=>l.name===t);if((i==null?void 0:i.name)==="examples"){const l=document.querySelector(".nav-pills .nav-item a.nav-link");l==null||l.classList.add("active")}else for(const l of ns){const a=l.routes.find(r=>r.name===t);a&&(i=a)}if(this.currentModel&&this.unmountCurrentVM(this.currentModel,this.currentRouter),i){this.currentRouter=i,document.querySelector(".panel-wm-content").innerHTML=ft.sanitize(mv[i.view],{RETURN_TRUSTED_TYPE:!0});const l=new i.viewModel;this.currentModel=l,window[i.name]=(s=l.mount)==null?void 0:s.call(l),window.onbeforeunload=()=>{var a;o.classList.add("cloak"),(a=l.unmount)==null||a.call(l),this.removeAllActiveLinks(!0),this.unmountAll(),i!=null&&i.name&&delete window[i.name]}}n&&window.history.pushState({},t,`${this.baseUrl}${this.stateBangChar}${t}`),document.title=`Multiple-Select-Vanilla · ${t}`,o.classList.remove("cloak")}async clickEventListener(t){this.removeAllActiveLinks();const n=t.target;n.classList.toggle("active"),this.loadRoute(n.id)}removeAllActiveLinks(t=!1){document.querySelectorAll(".panel-wm-left a.nav-link,.navbar-nav a.nav-link").forEach(n=>{n.classList.remove("active"),t&&n.removeEventListener("click",this.clickEventListener.bind(this))})}unmountCurrentVM(t,n){var o;(o=t.unmount)==null||o.call(t),n&&delete window[n.name]}unmountAll(){for(const t of Object.keys(this.viewModelObj)){const n=this.viewModelObj[t];if(typeof(n==null?void 0:n.unmount)=="function"){n==null||n.unmount();for(const o of Object.keys(n))n[o]=null}window[t]=null,this.viewModelObj[t]=null,delete window[t],delete this.viewModelObj[t]}}}const vv=new hv;vv.init();
