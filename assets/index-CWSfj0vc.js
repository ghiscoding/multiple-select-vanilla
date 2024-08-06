var Pl=Object.defineProperty;var Hl=(n,t,e)=>t in n?Pl(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var d=(n,t,e)=>Hl(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Fl=`<div class="row mb-2">
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
`,Bl=`<div class="row">
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
`,Ul=`<div class="row">
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
`,Gl=`<div class="row mb-2">
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
`,Jl=`<div class="row mb-2">
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
`,Wl=`<div class="row mb-2">
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
&lt;link href=&quot;<span style="color:#880000">https://cdn.jsdelivr.net/npm/multiple-select-vanilla@3.3.0/dist/styles/css/multiple-select.css</span>&quot; rel=&quot;<span style="color:#880000">stylesheet</span>&quot;&gt;

&lt;!-- (ESM requires <span style="color:#d63384">type=&quot;module&quot;</span>) Latest compiled and minified JavaScript --&gt;
&lt;script type=&quot;module&quot; src=&quot;<span style="color:#880000">https://cdn.jsdelivr.net/npm/multiple-select-vanilla@3.3.0/dist/browser/multiple-select.js</span>&quot;&gt;&lt;/script&gt;

&lt;!-- (CJS requires <span style="color:#d63384">.cjs</span> extension) Latest compiled and minified JavaScript --&gt;
&lt;script src=&quot;<span style="color:#880000">https://cdn.jsdelivr.net/npm/multiple-select-vanilla@3.3.0/dist/browser/multiple-select.cjs</span>&quot;&gt;&lt;/script&gt;</pre>
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
`,pa=`<div class="row mb-2">
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
`,ca=`<div class="row mb-2">
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
`,Na=`<div class="row mb-2">
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
`,Ma=`<div class="row mb-2">
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
`,$a=`<div class="row mb-2">
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
`,Ia=`<div class="row mb-2">
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
`,Fa=`<div class="row mb-2">
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
`,Ba=`<div class="row mb-2">
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
`,Ua=`<div class="row mb-2">
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
`,Ga=`<div class="row mb-2">
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
`,Ja=`<div class="row mb-2">
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
`,Wa=`<div class="row mb-2">
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
`;var X="top",ot="bottom",it="right",Q="left",On="auto",Ce=[X,ot,it,Q],oe="start",we="end",is="clippingParents",wo="viewport",ge="popper",ss="reference",po=Ce.reduce(function(n,t){return n.concat([t+"-"+oe,t+"-"+we])},[]),So=[].concat(Ce,[On]).reduce(function(n,t){return n.concat([t,t+"-"+oe,t+"-"+we])},[]),ls="beforeRead",as="read",rs="afterRead",ps="beforeMain",cs="main",us="afterMain",ds="beforeWrite",ms="write",hs="afterWrite",vs=[ls,as,rs,ps,cs,us,ds,ms,hs];function At(n){return n?(n.nodeName||"").toLowerCase():null}function st(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var t=n.ownerDocument;return t&&t.defaultView||window}return n}function ie(n){var t=st(n).Element;return n instanceof t||n instanceof Element}function at(n){var t=st(n).HTMLElement;return n instanceof t||n instanceof HTMLElement}function Ao(n){if(typeof ShadowRoot>"u")return!1;var t=st(n).ShadowRoot;return n instanceof t||n instanceof ShadowRoot}function er(n){var t=n.state;Object.keys(t.elements).forEach(function(e){var o=t.styles[e]||{},i=t.attributes[e]||{},s=t.elements[e];!at(s)||!At(s)||(Object.assign(s.style,o),Object.keys(i).forEach(function(l){var a=i[l];a===!1?s.removeAttribute(l):s.setAttribute(l,a===!0?"":a)}))})}function nr(n){var t=n.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(o){var i=t.elements[o],s=t.attributes[o]||{},l=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:e[o]),a=l.reduce(function(c,p){return c[p]="",c},{});!at(i)||!At(i)||(Object.assign(i.style,a),Object.keys(s).forEach(function(c){i.removeAttribute(c)}))})}}const ko={name:"applyStyles",enabled:!0,phase:"write",fn:er,effect:nr,requires:["computeStyles"]};function wt(n){return n.split("-")[0]}var ne=Math.max,wn=Math.min,Se=Math.round;function co(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function fs(){return!/^((?!chrome|android).)*safari/i.test(co())}function Ae(n,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var o=n.getBoundingClientRect(),i=1,s=1;t&&at(n)&&(i=n.offsetWidth>0&&Se(o.width)/n.offsetWidth||1,s=n.offsetHeight>0&&Se(o.height)/n.offsetHeight||1);var l=ie(n)?st(n):window,a=l.visualViewport,c=!fs()&&e,p=(o.left+(c&&a?a.offsetLeft:0))/i,u=(o.top+(c&&a?a.offsetTop:0))/s,f=o.width/i,g=o.height/s;return{width:f,height:g,top:u,right:p+f,bottom:u+g,left:p,x:p,y:u}}function Oo(n){var t=Ae(n),e=n.offsetWidth,o=n.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:n.offsetLeft,y:n.offsetTop,width:e,height:o}}function bs(n,t){var e=t.getRootNode&&t.getRootNode();if(n.contains(t))return!0;if(e&&Ao(e)){var o=t;do{if(o&&n.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Pt(n){return st(n).getComputedStyle(n)}function or(n){return["table","td","th"].indexOf(At(n))>=0}function Vt(n){return((ie(n)?n.ownerDocument:n.document)||window.document).documentElement}function Tn(n){return At(n)==="html"?n:n.assignedSlot||n.parentNode||(Ao(n)?n.host:null)||Vt(n)}function oi(n){return!at(n)||Pt(n).position==="fixed"?null:n.offsetParent}function ir(n){var t=/firefox/i.test(co()),e=/Trident/i.test(co());if(e&&at(n)){var o=Pt(n);if(o.position==="fixed")return null}var i=Tn(n);for(Ao(i)&&(i=i.host);at(i)&&["html","body"].indexOf(At(i))<0;){var s=Pt(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function Ye(n){for(var t=st(n),e=oi(n);e&&or(e)&&Pt(e).position==="static";)e=oi(e);return e&&(At(e)==="html"||At(e)==="body"&&Pt(e).position==="static")?t:e||ir(n)||t}function To(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Ve(n,t,e){return ne(n,wn(t,e))}function sr(n,t,e){var o=Ve(n,t,e);return o>e?e:o}function gs(){return{top:0,right:0,bottom:0,left:0}}function _s(n){return Object.assign({},gs(),n)}function Es(n,t){return t.reduce(function(e,o){return e[o]=n,e},{})}var lr=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,_s(typeof t!="number"?t:Es(t,Ce))};function ar(n){var t,e=n.state,o=n.name,i=n.options,s=e.elements.arrow,l=e.modifiersData.popperOffsets,a=wt(e.placement),c=To(a),p=[Q,it].indexOf(a)>=0,u=p?"height":"width";if(!(!s||!l)){var f=lr(i.padding,e),g=Oo(s),b=c==="y"?X:Q,k=c==="y"?ot:it,A=e.rects.reference[u]+e.rects.reference[c]-l[c]-e.rects.popper[u],T=l[c]-e.rects.reference[c],C=Ye(s),$=C?c==="y"?C.clientHeight||0:C.clientWidth||0:0,M=A/2-T/2,w=f[b],O=$-g[u]-f[k],D=$/2-g[u]/2+M,R=Ve(w,D,O),G=c;e.modifiersData[o]=(t={},t[G]=R,t.centerOffset=R-D,t)}}function rr(n){var t=n.state,e=n.options,o=e.element,i=o===void 0?"[data-popper-arrow]":o;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||bs(t.elements.popper,i)&&(t.elements.arrow=i))}const ys={name:"arrow",enabled:!0,phase:"main",fn:ar,effect:rr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ke(n){return n.split("-")[1]}var pr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function cr(n,t){var e=n.x,o=n.y,i=t.devicePixelRatio||1;return{x:Se(e*i)/i||0,y:Se(o*i)/i||0}}function ii(n){var t,e=n.popper,o=n.popperRect,i=n.placement,s=n.variation,l=n.offsets,a=n.position,c=n.gpuAcceleration,p=n.adaptive,u=n.roundOffsets,f=n.isFixed,g=l.x,b=g===void 0?0:g,k=l.y,A=k===void 0?0:k,T=typeof u=="function"?u({x:b,y:A}):{x:b,y:A};b=T.x,A=T.y;var C=l.hasOwnProperty("x"),$=l.hasOwnProperty("y"),M=Q,w=X,O=window;if(p){var D=Ye(e),R="clientHeight",G="clientWidth";if(D===st(e)&&(D=Vt(e),Pt(D).position!=="static"&&a==="absolute"&&(R="scrollHeight",G="scrollWidth")),D=D,i===X||(i===Q||i===it)&&s===we){w=ot;var U=f&&D===O&&O.visualViewport?O.visualViewport.height:D[R];A-=U-o.height,A*=c?1:-1}if(i===Q||(i===X||i===ot)&&s===we){M=it;var B=f&&D===O&&O.visualViewport?O.visualViewport.width:D[G];b-=B-o.width,b*=c?1:-1}}var L=Object.assign({position:a},p&&pr),q=u===!0?cr({x:b,y:A},st(e)):{x:b,y:A};if(b=q.x,A=q.y,c){var j;return Object.assign({},L,(j={},j[w]=$?"0":"",j[M]=C?"0":"",j.transform=(O.devicePixelRatio||1)<=1?"translate("+b+"px, "+A+"px)":"translate3d("+b+"px, "+A+"px, 0)",j))}return Object.assign({},L,(t={},t[w]=$?A+"px":"",t[M]=C?b+"px":"",t.transform="",t))}function ur(n){var t=n.state,e=n.options,o=e.gpuAcceleration,i=o===void 0?!0:o,s=e.adaptive,l=s===void 0?!0:s,a=e.roundOffsets,c=a===void 0?!0:a,p={placement:wt(t.placement),variation:ke(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,ii(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,ii(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const xo={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ur,data:{}};var an={passive:!0};function dr(n){var t=n.state,e=n.instance,o=n.options,i=o.scroll,s=i===void 0?!0:i,l=o.resize,a=l===void 0?!0:l,c=st(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&p.forEach(function(u){u.addEventListener("scroll",e.update,an)}),a&&c.addEventListener("resize",e.update,an),function(){s&&p.forEach(function(u){u.removeEventListener("scroll",e.update,an)}),a&&c.removeEventListener("resize",e.update,an)}}const Co={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:dr,data:{}};var mr={left:"right",right:"left",bottom:"top",top:"bottom"};function gn(n){return n.replace(/left|right|bottom|top/g,function(t){return mr[t]})}var hr={start:"end",end:"start"};function si(n){return n.replace(/start|end/g,function(t){return hr[t]})}function Do(n){var t=st(n),e=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:e,scrollTop:o}}function No(n){return Ae(Vt(n)).left+Do(n).scrollLeft}function vr(n,t){var e=st(n),o=Vt(n),i=e.visualViewport,s=o.clientWidth,l=o.clientHeight,a=0,c=0;if(i){s=i.width,l=i.height;var p=fs();(p||!p&&t==="fixed")&&(a=i.offsetLeft,c=i.offsetTop)}return{width:s,height:l,x:a+No(n),y:c}}function fr(n){var t,e=Vt(n),o=Do(n),i=(t=n.ownerDocument)==null?void 0:t.body,s=ne(e.scrollWidth,e.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=ne(e.scrollHeight,e.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-o.scrollLeft+No(n),c=-o.scrollTop;return Pt(i||e).direction==="rtl"&&(a+=ne(e.clientWidth,i?i.clientWidth:0)-s),{width:s,height:l,x:a,y:c}}function Mo(n){var t=Pt(n),e=t.overflow,o=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+i+o)}function ws(n){return["html","body","#document"].indexOf(At(n))>=0?n.ownerDocument.body:at(n)&&Mo(n)?n:ws(Tn(n))}function qe(n,t){var e;t===void 0&&(t=[]);var o=ws(n),i=o===((e=n.ownerDocument)==null?void 0:e.body),s=st(o),l=i?[s].concat(s.visualViewport||[],Mo(o)?o:[]):o,a=t.concat(l);return i?a:a.concat(qe(Tn(l)))}function uo(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function br(n,t){var e=Ae(n,!1,t==="fixed");return e.top=e.top+n.clientTop,e.left=e.left+n.clientLeft,e.bottom=e.top+n.clientHeight,e.right=e.left+n.clientWidth,e.width=n.clientWidth,e.height=n.clientHeight,e.x=e.left,e.y=e.top,e}function li(n,t,e){return t===wo?uo(vr(n,e)):ie(t)?br(t,e):uo(fr(Vt(n)))}function gr(n){var t=qe(Tn(n)),e=["absolute","fixed"].indexOf(Pt(n).position)>=0,o=e&&at(n)?Ye(n):n;return ie(o)?t.filter(function(i){return ie(i)&&bs(i,o)&&At(i)!=="body"}):[]}function _r(n,t,e,o){var i=t==="clippingParents"?gr(n):[].concat(t),s=[].concat(i,[e]),l=s[0],a=s.reduce(function(c,p){var u=li(n,p,o);return c.top=ne(u.top,c.top),c.right=wn(u.right,c.right),c.bottom=wn(u.bottom,c.bottom),c.left=ne(u.left,c.left),c},li(n,l,o));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Ss(n){var t=n.reference,e=n.element,o=n.placement,i=o?wt(o):null,s=o?ke(o):null,l=t.x+t.width/2-e.width/2,a=t.y+t.height/2-e.height/2,c;switch(i){case X:c={x:l,y:t.y-e.height};break;case ot:c={x:l,y:t.y+t.height};break;case it:c={x:t.x+t.width,y:a};break;case Q:c={x:t.x-e.width,y:a};break;default:c={x:t.x,y:t.y}}var p=i?To(i):null;if(p!=null){var u=p==="y"?"height":"width";switch(s){case oe:c[p]=c[p]-(t[u]/2-e[u]/2);break;case we:c[p]=c[p]+(t[u]/2-e[u]/2);break}}return c}function Oe(n,t){t===void 0&&(t={});var e=t,o=e.placement,i=o===void 0?n.placement:o,s=e.strategy,l=s===void 0?n.strategy:s,a=e.boundary,c=a===void 0?is:a,p=e.rootBoundary,u=p===void 0?wo:p,f=e.elementContext,g=f===void 0?ge:f,b=e.altBoundary,k=b===void 0?!1:b,A=e.padding,T=A===void 0?0:A,C=_s(typeof T!="number"?T:Es(T,Ce)),$=g===ge?ss:ge,M=n.rects.popper,w=n.elements[k?$:g],O=_r(ie(w)?w:w.contextElement||Vt(n.elements.popper),c,u,l),D=Ae(n.elements.reference),R=Ss({reference:D,element:M,strategy:"absolute",placement:i}),G=uo(Object.assign({},M,R)),U=g===ge?G:D,B={top:O.top-U.top+C.top,bottom:U.bottom-O.bottom+C.bottom,left:O.left-U.left+C.left,right:U.right-O.right+C.right},L=n.modifiersData.offset;if(g===ge&&L){var q=L[i];Object.keys(B).forEach(function(j){var dt=[it,ot].indexOf(j)>=0?1:-1,kt=[X,ot].indexOf(j)>=0?"y":"x";B[j]+=q[kt]*dt})}return B}function Er(n,t){t===void 0&&(t={});var e=t,o=e.placement,i=e.boundary,s=e.rootBoundary,l=e.padding,a=e.flipVariations,c=e.allowedAutoPlacements,p=c===void 0?So:c,u=ke(o),f=u?a?po:po.filter(function(k){return ke(k)===u}):Ce,g=f.filter(function(k){return p.indexOf(k)>=0});g.length===0&&(g=f);var b=g.reduce(function(k,A){return k[A]=Oe(n,{placement:A,boundary:i,rootBoundary:s,padding:l})[wt(A)],k},{});return Object.keys(b).sort(function(k,A){return b[k]-b[A]})}function yr(n){if(wt(n)===On)return[];var t=gn(n);return[si(n),t,si(t)]}function wr(n){var t=n.state,e=n.options,o=n.name;if(!t.modifiersData[o]._skip){for(var i=e.mainAxis,s=i===void 0?!0:i,l=e.altAxis,a=l===void 0?!0:l,c=e.fallbackPlacements,p=e.padding,u=e.boundary,f=e.rootBoundary,g=e.altBoundary,b=e.flipVariations,k=b===void 0?!0:b,A=e.allowedAutoPlacements,T=t.options.placement,C=wt(T),$=C===T,M=c||($||!k?[gn(T)]:yr(T)),w=[T].concat(M).reduce(function(Tt,N){return Tt.concat(wt(N)===On?Er(t,{placement:N,boundary:u,rootBoundary:f,padding:p,flipVariations:k,allowedAutoPlacements:A}):N)},[]),O=t.rects.reference,D=t.rects.popper,R=new Map,G=!0,U=w[0],B=0;B<w.length;B++){var L=w[B],q=wt(L),j=ke(L)===oe,dt=[X,ot].indexOf(q)>=0,kt=dt?"width":"height",z=Oe(t,{placement:L,boundary:u,rootBoundary:f,altBoundary:g,padding:p}),nt=dt?j?it:Q:j?ot:X;O[kt]>D[kt]&&(nt=gn(nt));var Kt=gn(nt),Ot=[];if(s&&Ot.push(z[q]<=0),a&&Ot.push(z[nt]<=0,z[Kt]<=0),Ot.every(function(Tt){return Tt})){U=L,G=!1;break}R.set(L,Ot)}if(G)for(var Yt=k?3:1,H=function(N){var mt=w.find(function(Bt){var gt=R.get(Bt);if(gt)return gt.slice(0,N).every(function(Xt){return Xt})});if(mt)return U=mt,"break"},Ft=Yt;Ft>0;Ft--){var P=H(Ft);if(P==="break")break}t.placement!==U&&(t.modifiersData[o]._skip=!0,t.placement=U,t.reset=!0)}}const As={name:"flip",enabled:!0,phase:"main",fn:wr,requiresIfExists:["offset"],data:{_skip:!1}};function ai(n,t,e){return e===void 0&&(e={x:0,y:0}),{top:n.top-t.height-e.y,right:n.right-t.width+e.x,bottom:n.bottom-t.height+e.y,left:n.left-t.width-e.x}}function ri(n){return[X,it,ot,Q].some(function(t){return n[t]>=0})}function Sr(n){var t=n.state,e=n.name,o=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,l=Oe(t,{elementContext:"reference"}),a=Oe(t,{altBoundary:!0}),c=ai(l,o),p=ai(a,i,s),u=ri(c),f=ri(p);t.modifiersData[e]={referenceClippingOffsets:c,popperEscapeOffsets:p,isReferenceHidden:u,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}const ks={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Sr};function Ar(n,t,e){var o=wt(n),i=[Q,X].indexOf(o)>=0?-1:1,s=typeof e=="function"?e(Object.assign({},t,{placement:n})):e,l=s[0],a=s[1];return l=l||0,a=(a||0)*i,[Q,it].indexOf(o)>=0?{x:a,y:l}:{x:l,y:a}}function kr(n){var t=n.state,e=n.options,o=n.name,i=e.offset,s=i===void 0?[0,0]:i,l=So.reduce(function(u,f){return u[f]=Ar(f,t.rects,s),u},{}),a=l[t.placement],c=a.x,p=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=p),t.modifiersData[o]=l}const Os={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:kr};function Or(n){var t=n.state,e=n.name;t.modifiersData[e]=Ss({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Lo={name:"popperOffsets",enabled:!0,phase:"read",fn:Or,data:{}};function Tr(n){return n==="x"?"y":"x"}function xr(n){var t=n.state,e=n.options,o=n.name,i=e.mainAxis,s=i===void 0?!0:i,l=e.altAxis,a=l===void 0?!1:l,c=e.boundary,p=e.rootBoundary,u=e.altBoundary,f=e.padding,g=e.tether,b=g===void 0?!0:g,k=e.tetherOffset,A=k===void 0?0:k,T=Oe(t,{boundary:c,rootBoundary:p,padding:f,altBoundary:u}),C=wt(t.placement),$=ke(t.placement),M=!$,w=To(C),O=Tr(w),D=t.modifiersData.popperOffsets,R=t.rects.reference,G=t.rects.popper,U=typeof A=="function"?A(Object.assign({},t.rects,{placement:t.placement})):A,B=typeof U=="number"?{mainAxis:U,altAxis:U}:Object.assign({mainAxis:0,altAxis:0},U),L=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,q={x:0,y:0};if(D){if(s){var j,dt=w==="y"?X:Q,kt=w==="y"?ot:it,z=w==="y"?"height":"width",nt=D[w],Kt=nt+T[dt],Ot=nt-T[kt],Yt=b?-G[z]/2:0,H=$===oe?R[z]:G[z],Ft=$===oe?-G[z]:-R[z],P=t.elements.arrow,Tt=b&&P?Oo(P):{width:0,height:0},N=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:gs(),mt=N[dt],Bt=N[kt],gt=Ve(0,R[z],Tt[z]),Xt=M?R[z]/2-Yt-gt-mt-B.mainAxis:H-gt-mt-B.mainAxis,en=M?-R[z]/2+Yt+gt+Bt+B.mainAxis:Ft+gt+Bt+B.mainAxis,ae=t.elements.arrow&&Ye(t.elements.arrow),Ut=ae?w==="y"?ae.clientTop||0:ae.clientLeft||0:0,re=(j=L==null?void 0:L[w])!=null?j:0,xt=nt+Xt-re-Ut,Le=nt+en-re,pe=Ve(b?wn(Kt,xt):Kt,nt,b?ne(Ot,Le):Ot);D[w]=pe,q[w]=pe-nt}if(a){var Ct,ce=w==="x"?X:Q,ue=w==="x"?ot:it,_t=D[O],Qt=O==="y"?"height":"width",nn=_t+T[ce],de=_t-T[ue],Dt=[X,Q].indexOf(C)!==-1,Nt=(Ct=L==null?void 0:L[O])!=null?Ct:0,Mt=Dt?nn:_t-R[Qt]-G[Qt]-Nt+B.altAxis,$e=Dt?_t+R[Qt]+G[Qt]-Nt-B.altAxis:de,Ie=b&&Dt?sr(Mt,_t,$e):Ve(b?Mt:nn,_t,b?$e:de);D[O]=Ie,q[O]=Ie-_t}t.modifiersData[o]=q}}const Ts={name:"preventOverflow",enabled:!0,phase:"main",fn:xr,requiresIfExists:["offset"]};function Cr(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function Dr(n){return n===st(n)||!at(n)?Do(n):Cr(n)}function Nr(n){var t=n.getBoundingClientRect(),e=Se(t.width)/n.offsetWidth||1,o=Se(t.height)/n.offsetHeight||1;return e!==1||o!==1}function Mr(n,t,e){e===void 0&&(e=!1);var o=at(t),i=at(t)&&Nr(t),s=Vt(t),l=Ae(n,i,e),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(o||!o&&!e)&&((At(t)!=="body"||Mo(s))&&(a=Dr(t)),at(t)?(c=Ae(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):s&&(c.x=No(s))),{x:l.left+a.scrollLeft-c.x,y:l.top+a.scrollTop-c.y,width:l.width,height:l.height}}function Lr(n){var t=new Map,e=new Set,o=[];n.forEach(function(s){t.set(s.name,s)});function i(s){e.add(s.name);var l=[].concat(s.requires||[],s.requiresIfExists||[]);l.forEach(function(a){if(!e.has(a)){var c=t.get(a);c&&i(c)}}),o.push(s)}return n.forEach(function(s){e.has(s.name)||i(s)}),o}function $r(n){var t=Lr(n);return vs.reduce(function(e,o){return e.concat(t.filter(function(i){return i.phase===o}))},[])}function Ir(n){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(n())})})),t}}function Rr(n){var t=n.reduce(function(e,o){var i=e[o.name];return e[o.name]=i?Object.assign({},i,o,{options:Object.assign({},i.options,o.options),data:Object.assign({},i.data,o.data)}):o,e},{});return Object.keys(t).map(function(e){return t[e]})}var pi={placement:"bottom",modifiers:[],strategy:"absolute"};function ci(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function xn(n){n===void 0&&(n={});var t=n,e=t.defaultModifiers,o=e===void 0?[]:e,i=t.defaultOptions,s=i===void 0?pi:i;return function(a,c,p){p===void 0&&(p=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},pi,s),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},f=[],g=!1,b={state:u,setOptions:function(C){var $=typeof C=="function"?C(u.options):C;A(),u.options=Object.assign({},s,u.options,$),u.scrollParents={reference:ie(a)?qe(a):a.contextElement?qe(a.contextElement):[],popper:qe(c)};var M=$r(Rr([].concat(o,u.options.modifiers)));return u.orderedModifiers=M.filter(function(w){return w.enabled}),k(),b.update()},forceUpdate:function(){if(!g){var C=u.elements,$=C.reference,M=C.popper;if(ci($,M)){u.rects={reference:Mr($,Ye(M),u.options.strategy==="fixed"),popper:Oo(M)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(B){return u.modifiersData[B.name]=Object.assign({},B.data)});for(var w=0;w<u.orderedModifiers.length;w++){if(u.reset===!0){u.reset=!1,w=-1;continue}var O=u.orderedModifiers[w],D=O.fn,R=O.options,G=R===void 0?{}:R,U=O.name;typeof D=="function"&&(u=D({state:u,options:G,name:U,instance:b})||u)}}}},update:Ir(function(){return new Promise(function(T){b.forceUpdate(),T(u)})}),destroy:function(){A(),g=!0}};if(!ci(a,c))return b;b.setOptions(p).then(function(T){!g&&p.onFirstUpdate&&p.onFirstUpdate(T)});function k(){u.orderedModifiers.forEach(function(T){var C=T.name,$=T.options,M=$===void 0?{}:$,w=T.effect;if(typeof w=="function"){var O=w({state:u,name:C,instance:b,options:M}),D=function(){};f.push(O||D)}})}function A(){f.forEach(function(T){return T()}),f=[]}return b}}var Pr=xn(),Hr=[Co,Lo,xo,ko],Fr=xn({defaultModifiers:Hr}),Br=[Co,Lo,xo,ko,Os,As,Ts,ys,ks],$o=xn({defaultModifiers:Br});const xs=Object.freeze(Object.defineProperty({__proto__:null,afterMain:us,afterRead:rs,afterWrite:hs,applyStyles:ko,arrow:ys,auto:On,basePlacements:Ce,beforeMain:ps,beforeRead:ls,beforeWrite:ds,bottom:ot,clippingParents:is,computeStyles:xo,createPopper:$o,createPopperBase:Pr,createPopperLite:Fr,detectOverflow:Oe,end:we,eventListeners:Co,flip:As,hide:ks,left:Q,main:cs,modifierPhases:vs,offset:Os,placements:So,popper:ge,popperGenerator:xn,popperOffsets:Lo,preventOverflow:Ts,read:as,reference:ss,right:it,start:oe,top:X,variationPlacements:po,viewport:wo,write:ms},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Gt=new Map,Hn={set(n,t,e){Gt.has(n)||Gt.set(n,new Map);const o=Gt.get(n);if(!o.has(t)&&o.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`);return}o.set(t,e)},get(n,t){return Gt.has(n)&&Gt.get(n).get(t)||null},remove(n,t){if(!Gt.has(n))return;const e=Gt.get(n);e.delete(t),e.size===0&&Gt.delete(n)}},Ur=1e6,Gr=1e3,mo="transitionend",Cs=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),n),jr=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),Jr=n=>{do n+=Math.floor(Math.random()*Ur);while(document.getElementById(n));return n},Wr=n=>{if(!n)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(n);const o=Number.parseFloat(t),i=Number.parseFloat(e);return!o&&!i?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*Gr)},Ds=n=>{n.dispatchEvent(new Event(mo))},It=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),jt=n=>It(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(Cs(n)):null,De=n=>{if(!It(n)||n.getClientRects().length===0)return!1;const t=getComputedStyle(n).getPropertyValue("visibility")==="visible",e=n.closest("details:not([open])");if(!e)return t;if(e!==n){const o=n.closest("summary");if(o&&o.parentNode!==e||o===null)return!1}return t},Jt=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",Ns=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const t=n.getRootNode();return t instanceof ShadowRoot?t:null}return n instanceof ShadowRoot?n:n.parentNode?Ns(n.parentNode):null},Sn=()=>{},Xe=n=>{n.offsetHeight},Ms=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Fn=[],Vr=n=>{document.readyState==="loading"?(Fn.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of Fn)t()}),Fn.push(n)):n()},rt=()=>document.documentElement.dir==="rtl",ut=n=>{Vr(()=>{const t=Ms();if(t){const e=n.NAME,o=t.fn[e];t.fn[e]=n.jQueryInterface,t.fn[e].Constructor=n,t.fn[e].noConflict=()=>(t.fn[e]=o,n.jQueryInterface)}})},et=(n,t=[],e=n)=>typeof n=="function"?n(...t):e,Ls=(n,t,e=!0)=>{if(!e){et(n);return}const i=Wr(t)+5;let s=!1;const l=({target:a})=>{a===t&&(s=!0,t.removeEventListener(mo,l),et(n))};t.addEventListener(mo,l),setTimeout(()=>{s||Ds(t)},i)},Io=(n,t,e,o)=>{const i=n.length;let s=n.indexOf(t);return s===-1?!e&&o?n[i-1]:n[0]:(s+=e?1:-1,o&&(s=(s+i)%i),n[Math.max(0,Math.min(s,i-1))])},qr=/[^.]*(?=\..*)\.|.*/,zr=/\..*/,Kr=/::\d+$/,Bn={};let ui=1;const $s={mouseenter:"mouseover",mouseleave:"mouseout"},Yr=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Is(n,t){return t&&`${t}::${ui++}`||n.uidEvent||ui++}function Rs(n){const t=Is(n);return n.uidEvent=t,Bn[t]=Bn[t]||{},Bn[t]}function Xr(n,t){return function e(o){return Ro(o,{delegateTarget:n}),e.oneOff&&h.off(n,o.type,t),t.apply(n,[o])}}function Qr(n,t,e){return function o(i){const s=n.querySelectorAll(t);for(let{target:l}=i;l&&l!==this;l=l.parentNode)for(const a of s)if(a===l)return Ro(i,{delegateTarget:l}),o.oneOff&&h.off(n,i.type,t,e),e.apply(l,[i])}}function Ps(n,t,e=null){return Object.values(n).find(o=>o.callable===t&&o.delegationSelector===e)}function Hs(n,t,e){const o=typeof t=="string",i=o?e:t||e;let s=Fs(n);return Yr.has(s)||(s=n),[o,i,s]}function di(n,t,e,o,i){if(typeof t!="string"||!n)return;let[s,l,a]=Hs(t,e,o);t in $s&&(l=(k=>function(A){if(!A.relatedTarget||A.relatedTarget!==A.delegateTarget&&!A.delegateTarget.contains(A.relatedTarget))return k.call(this,A)})(l));const c=Rs(n),p=c[a]||(c[a]={}),u=Ps(p,l,s?e:null);if(u){u.oneOff=u.oneOff&&i;return}const f=Is(l,t.replace(qr,"")),g=s?Qr(n,e,l):Xr(n,l);g.delegationSelector=s?e:null,g.callable=l,g.oneOff=i,g.uidEvent=f,p[f]=g,n.addEventListener(a,g,s)}function ho(n,t,e,o,i){const s=Ps(t[e],o,i);s&&(n.removeEventListener(e,s,!!i),delete t[e][s.uidEvent])}function Zr(n,t,e,o){const i=t[e]||{};for(const[s,l]of Object.entries(i))s.includes(o)&&ho(n,t,e,l.callable,l.delegationSelector)}function Fs(n){return n=n.replace(zr,""),$s[n]||n}const h={on(n,t,e,o){di(n,t,e,o,!1)},one(n,t,e,o){di(n,t,e,o,!0)},off(n,t,e,o){if(typeof t!="string"||!n)return;const[i,s,l]=Hs(t,e,o),a=l!==t,c=Rs(n),p=c[l]||{},u=t.startsWith(".");if(typeof s<"u"){if(!Object.keys(p).length)return;ho(n,c,l,s,i?e:null);return}if(u)for(const f of Object.keys(c))Zr(n,c,f,t.slice(1));for(const[f,g]of Object.entries(p)){const b=f.replace(Kr,"");(!a||t.includes(b))&&ho(n,c,l,g.callable,g.delegationSelector)}},trigger(n,t,e){if(typeof t!="string"||!n)return null;const o=Ms(),i=Fs(t),s=t!==i;let l=null,a=!0,c=!0,p=!1;s&&o&&(l=o.Event(t,e),o(n).trigger(l),a=!l.isPropagationStopped(),c=!l.isImmediatePropagationStopped(),p=l.isDefaultPrevented());const u=Ro(new Event(t,{bubbles:a,cancelable:!0}),e);return p&&u.preventDefault(),c&&n.dispatchEvent(u),u.defaultPrevented&&l&&l.preventDefault(),u}};function Ro(n,t={}){for(const[e,o]of Object.entries(t))try{n[e]=o}catch{Object.defineProperty(n,e,{configurable:!0,get(){return o}})}return n}function mi(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function Un(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const Rt={setDataAttribute(n,t,e){n.setAttribute(`data-bs-${Un(t)}`,e)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${Un(t)}`)},getDataAttributes(n){if(!n)return{};const t={},e=Object.keys(n.dataset).filter(o=>o.startsWith("bs")&&!o.startsWith("bsConfig"));for(const o of e){let i=o.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=mi(n.dataset[o])}return t},getDataAttribute(n,t){return mi(n.getAttribute(`data-bs-${Un(t)}`))}};class Qe{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const o=It(e)?Rt.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof o=="object"?o:{},...It(e)?Rt.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[o,i]of Object.entries(e)){const s=t[o],l=It(s)?"element":jr(s);if(!new RegExp(i).test(l))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${o}" provided type "${l}" but expected type "${i}".`)}}}const tp="5.3.3";class bt extends Qe{constructor(t,e){super(),t=jt(t),t&&(this._element=t,this._config=this._getConfig(e),Hn.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Hn.remove(this._element,this.constructor.DATA_KEY),h.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,o=!0){Ls(t,e,o)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Hn.get(jt(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return tp}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const Gn=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let e=n.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?e.trim():null}return t?t.split(",").map(e=>Cs(e)).join(","):null},S={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(e=>e.matches(t))},parents(n,t){const e=[];let o=n.parentNode.closest(t);for(;o;)e.push(o),o=o.parentNode.closest(t);return e},prev(n,t){let e=n.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(n,t){let e=n.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(e=>!Jt(e)&&De(e))},getSelectorFromElement(n){const t=Gn(n);return t&&S.findOne(t)?t:null},getElementFromSelector(n){const t=Gn(n);return t?S.findOne(t):null},getMultipleElementsFromSelector(n){const t=Gn(n);return t?S.find(t):[]}},Cn=(n,t="hide")=>{const e=`click.dismiss${n.EVENT_KEY}`,o=n.NAME;h.on(document,e,`[data-bs-dismiss="${o}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),Jt(this))return;const s=S.getElementFromSelector(this)||this.closest(`.${o}`);n.getOrCreateInstance(s)[t]()})},ep="alert",np="bs.alert",Bs=`.${np}`,op=`close${Bs}`,ip=`closed${Bs}`,sp="fade",lp="show";class Dn extends bt{static get NAME(){return ep}close(){if(h.trigger(this._element,op).defaultPrevented)return;this._element.classList.remove(lp);const e=this._element.classList.contains(sp);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),h.trigger(this._element,ip),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=Dn.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Cn(Dn,"close");ut(Dn);const ap="button",rp="bs.button",pp=`.${rp}`,cp=".data-api",up="active",hi='[data-bs-toggle="button"]',dp=`click${pp}${cp}`;class Nn extends bt{static get NAME(){return ap}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(up))}static jQueryInterface(t){return this.each(function(){const e=Nn.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}h.on(document,dp,hi,n=>{n.preventDefault();const t=n.target.closest(hi);Nn.getOrCreateInstance(t).toggle()});ut(Nn);const mp="swipe",Ne=".bs.swipe",hp=`touchstart${Ne}`,vp=`touchmove${Ne}`,fp=`touchend${Ne}`,bp=`pointerdown${Ne}`,gp=`pointerup${Ne}`,_p="touch",Ep="pen",yp="pointer-event",wp=40,Sp={endCallback:null,leftCallback:null,rightCallback:null},Ap={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class An extends Qe{constructor(t,e){super(),this._element=t,!(!t||!An.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Sp}static get DefaultType(){return Ap}static get NAME(){return mp}dispose(){h.off(this._element,Ne)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),et(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=wp)return;const e=t/this._deltaX;this._deltaX=0,e&&et(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(h.on(this._element,bp,t=>this._start(t)),h.on(this._element,gp,t=>this._end(t)),this._element.classList.add(yp)):(h.on(this._element,hp,t=>this._start(t)),h.on(this._element,vp,t=>this._move(t)),h.on(this._element,fp,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===Ep||t.pointerType===_p)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const kp="carousel",Op="bs.carousel",qt=`.${Op}`,Us=".data-api",Tp="ArrowLeft",xp="ArrowRight",Cp=500,He="next",ve="prev",_e="left",_n="right",Dp=`slide${qt}`,jn=`slid${qt}`,Np=`keydown${qt}`,Mp=`mouseenter${qt}`,Lp=`mouseleave${qt}`,$p=`dragstart${qt}`,Ip=`load${qt}${Us}`,Rp=`click${qt}${Us}`,Gs="carousel",rn="active",Pp="slide",Hp="carousel-item-end",Fp="carousel-item-start",Bp="carousel-item-next",Up="carousel-item-prev",js=".active",Js=".carousel-item",Gp=js+Js,jp=".carousel-item img",Jp=".carousel-indicators",Wp="[data-bs-slide], [data-bs-slide-to]",Vp='[data-bs-ride="carousel"]',qp={[Tp]:_n,[xp]:_e},zp={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Kp={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Ze extends bt{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=S.findOne(Jp,this._element),this._addEventListeners(),this._config.ride===Gs&&this.cycle()}static get Default(){return zp}static get DefaultType(){return Kp}static get NAME(){return kp}next(){this._slide(He)}nextWhenVisible(){!document.hidden&&De(this._element)&&this.next()}prev(){this._slide(ve)}pause(){this._isSliding&&Ds(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){h.one(this._element,jn,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){h.one(this._element,jn,()=>this.to(t));return}const o=this._getItemIndex(this._getActive());if(o===t)return;const i=t>o?He:ve;this._slide(i,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&h.on(this._element,Np,t=>this._keydown(t)),this._config.pause==="hover"&&(h.on(this._element,Mp,()=>this.pause()),h.on(this._element,Lp,()=>this._maybeEnableCycle())),this._config.touch&&An.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const o of S.find(jp,this._element))h.on(o,$p,i=>i.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(_e)),rightCallback:()=>this._slide(this._directionToOrder(_n)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Cp+this._config.interval))}};this._swipeHelper=new An(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=qp[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=S.findOne(js,this._indicatorsElement);e.classList.remove(rn),e.removeAttribute("aria-current");const o=S.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);o&&(o.classList.add(rn),o.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const o=this._getActive(),i=t===He,s=e||Io(this._getItems(),o,i,this._config.wrap);if(s===o)return;const l=this._getItemIndex(s),a=b=>h.trigger(this._element,b,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(o),to:l});if(a(Dp).defaultPrevented||!o||!s)return;const p=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(l),this._activeElement=s;const u=i?Fp:Hp,f=i?Bp:Up;s.classList.add(f),Xe(s),o.classList.add(u),s.classList.add(u);const g=()=>{s.classList.remove(u,f),s.classList.add(rn),o.classList.remove(rn,f,u),this._isSliding=!1,a(jn)};this._queueCallback(g,o,this._isAnimated()),p&&this.cycle()}_isAnimated(){return this._element.classList.contains(Pp)}_getActive(){return S.findOne(Gp,this._element)}_getItems(){return S.find(Js,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return rt()?t===_e?ve:He:t===_e?He:ve}_orderToDirection(t){return rt()?t===ve?_e:_n:t===ve?_n:_e}static jQueryInterface(t){return this.each(function(){const e=Ze.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(document,Rp,Wp,function(n){const t=S.getElementFromSelector(this);if(!t||!t.classList.contains(Gs))return;n.preventDefault();const e=Ze.getOrCreateInstance(t),o=this.getAttribute("data-bs-slide-to");if(o){e.to(o),e._maybeEnableCycle();return}if(Rt.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});h.on(window,Ip,()=>{const n=S.find(Vp);for(const t of n)Ze.getOrCreateInstance(t)});ut(Ze);const Yp="collapse",Xp="bs.collapse",tn=`.${Xp}`,Qp=".data-api",Zp=`show${tn}`,tc=`shown${tn}`,ec=`hide${tn}`,nc=`hidden${tn}`,oc=`click${tn}${Qp}`,Jn="show",ye="collapse",pn="collapsing",ic="collapsed",sc=`:scope .${ye} .${ye}`,lc="collapse-horizontal",ac="width",rc="height",pc=".collapse.show, .collapse.collapsing",vo='[data-bs-toggle="collapse"]',cc={parent:null,toggle:!0},uc={parent:"(null|element)",toggle:"boolean"};class Ke extends bt{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const o=S.find(vo);for(const i of o){const s=S.getSelectorFromElement(i),l=S.find(s).filter(a=>a===this._element);s!==null&&l.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return cc}static get DefaultType(){return uc}static get NAME(){return Yp}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(pc).filter(a=>a!==this._element).map(a=>Ke.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||h.trigger(this._element,Zp).defaultPrevented)return;for(const a of t)a.hide();const o=this._getDimension();this._element.classList.remove(ye),this._element.classList.add(pn),this._element.style[o]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(pn),this._element.classList.add(ye,Jn),this._element.style[o]="",h.trigger(this._element,tc)},l=`scroll${o[0].toUpperCase()+o.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[o]=`${this._element[l]}px`}hide(){if(this._isTransitioning||!this._isShown()||h.trigger(this._element,ec).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,Xe(this._element),this._element.classList.add(pn),this._element.classList.remove(ye,Jn);for(const i of this._triggerArray){const s=S.getElementFromSelector(i);s&&!this._isShown(s)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(pn),this._element.classList.add(ye),h.trigger(this._element,nc)};this._element.style[e]="",this._queueCallback(o,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Jn)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=jt(t.parent),t}_getDimension(){return this._element.classList.contains(lc)?ac:rc}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(vo);for(const e of t){const o=S.getElementFromSelector(e);o&&this._addAriaAndCollapsedClass([e],this._isShown(o))}}_getFirstLevelChildren(t){const e=S.find(sc,this._config.parent);return S.find(t,this._config.parent).filter(o=>!e.includes(o))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const o of t)o.classList.toggle(ic,!e),o.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const o=Ke.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof o[t]>"u")throw new TypeError(`No method named "${t}"`);o[t]()}})}}h.on(document,oc,vo,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const t of S.getMultipleElementsFromSelector(this))Ke.getOrCreateInstance(t,{toggle:!1}).toggle()});ut(Ke);const vi="dropdown",dc="bs.dropdown",se=`.${dc}`,Po=".data-api",mc="Escape",fi="Tab",hc="ArrowUp",bi="ArrowDown",vc=2,fc=`hide${se}`,bc=`hidden${se}`,gc=`show${se}`,_c=`shown${se}`,Ws=`click${se}${Po}`,Vs=`keydown${se}${Po}`,Ec=`keyup${se}${Po}`,Ee="show",yc="dropup",wc="dropend",Sc="dropstart",Ac="dropup-center",kc="dropdown-center",te='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Oc=`${te}.${Ee}`,En=".dropdown-menu",Tc=".navbar",xc=".navbar-nav",Cc=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Dc=rt()?"top-end":"top-start",Nc=rt()?"top-start":"top-end",Mc=rt()?"bottom-end":"bottom-start",Lc=rt()?"bottom-start":"bottom-end",$c=rt()?"left-start":"right-start",Ic=rt()?"right-start":"left-start",Rc="top",Pc="bottom",Hc={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Fc={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class St extends bt{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=S.next(this._element,En)[0]||S.prev(this._element,En)[0]||S.findOne(En,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Hc}static get DefaultType(){return Fc}static get NAME(){return vi}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Jt(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!h.trigger(this._element,gc,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(xc))for(const o of[].concat(...document.body.children))h.on(o,"mouseover",Sn);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ee),this._element.classList.add(Ee),h.trigger(this._element,_c,t)}}hide(){if(Jt(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!h.trigger(this._element,fc,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))h.off(o,"mouseover",Sn);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ee),this._element.classList.remove(Ee),this._element.setAttribute("aria-expanded","false"),Rt.removeDataAttribute(this._menu,"popper"),h.trigger(this._element,bc,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!It(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${vi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof xs>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:It(this._config.reference)?t=jt(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=$o(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Ee)}_getPlacement(){const t=this._parent;if(t.classList.contains(wc))return $c;if(t.classList.contains(Sc))return Ic;if(t.classList.contains(Ac))return Rc;if(t.classList.contains(kc))return Pc;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(yc)?e?Nc:Dc:e?Lc:Mc}_detectNavbar(){return this._element.closest(Tc)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Rt.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...et(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){const o=S.find(Cc,this._menu).filter(i=>De(i));o.length&&Io(o,e,t===bi,!o.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=St.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===vc||t.type==="keyup"&&t.key!==fi)return;const e=S.find(Oc);for(const o of e){const i=St.getInstance(o);if(!i||i._config.autoClose===!1)continue;const s=t.composedPath(),l=s.includes(i._menu);if(s.includes(i._element)||i._config.autoClose==="inside"&&!l||i._config.autoClose==="outside"&&l||i._menu.contains(t.target)&&(t.type==="keyup"&&t.key===fi||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:i._element};t.type==="click"&&(a.clickEvent=t),i._completeHide(a)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),o=t.key===mc,i=[hc,bi].includes(t.key);if(!i&&!o||e&&!o)return;t.preventDefault();const s=this.matches(te)?this:S.prev(this,te)[0]||S.next(this,te)[0]||S.findOne(te,t.delegateTarget.parentNode),l=St.getOrCreateInstance(s);if(i){t.stopPropagation(),l.show(),l._selectMenuItem(t);return}l._isShown()&&(t.stopPropagation(),l.hide(),s.focus())}}h.on(document,Vs,te,St.dataApiKeydownHandler);h.on(document,Vs,En,St.dataApiKeydownHandler);h.on(document,Ws,St.clearMenus);h.on(document,Ec,St.clearMenus);h.on(document,Ws,te,function(n){n.preventDefault(),St.getOrCreateInstance(this).toggle()});ut(St);const qs="backdrop",Bc="fade",gi="show",_i=`mousedown.bs.${qs}`,Uc={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Gc={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class zs extends Qe{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Uc}static get DefaultType(){return Gc}static get NAME(){return qs}show(t){if(!this._config.isVisible){et(t);return}this._append();const e=this._getElement();this._config.isAnimated&&Xe(e),e.classList.add(gi),this._emulateAnimation(()=>{et(t)})}hide(t){if(!this._config.isVisible){et(t);return}this._getElement().classList.remove(gi),this._emulateAnimation(()=>{this.dispose(),et(t)})}dispose(){this._isAppended&&(h.off(this._element,_i),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Bc),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=jt(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),h.on(t,_i,()=>{et(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Ls(t,this._getElement(),this._config.isAnimated)}}const jc="focustrap",Jc="bs.focustrap",kn=`.${Jc}`,Wc=`focusin${kn}`,Vc=`keydown.tab${kn}`,qc="Tab",zc="forward",Ei="backward",Kc={autofocus:!0,trapElement:null},Yc={autofocus:"boolean",trapElement:"element"};class Ks extends Qe{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Kc}static get DefaultType(){return Yc}static get NAME(){return jc}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),h.off(document,kn),h.on(document,Wc,t=>this._handleFocusin(t)),h.on(document,Vc,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,h.off(document,kn))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const o=S.focusableChildren(e);o.length===0?e.focus():this._lastTabNavDirection===Ei?o[o.length-1].focus():o[0].focus()}_handleKeydown(t){t.key===qc&&(this._lastTabNavDirection=t.shiftKey?Ei:zc)}}const yi=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",wi=".sticky-top",cn="padding-right",Si="margin-right";class fo{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,cn,e=>e+t),this._setElementAttributes(yi,cn,e=>e+t),this._setElementAttributes(wi,Si,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,cn),this._resetElementAttributes(yi,cn),this._resetElementAttributes(wi,Si)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,o){const i=this.getWidth(),s=l=>{if(l!==this._element&&window.innerWidth>l.clientWidth+i)return;this._saveInitialAttribute(l,e);const a=window.getComputedStyle(l).getPropertyValue(e);l.style.setProperty(e,`${o(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,s)}_saveInitialAttribute(t,e){const o=t.style.getPropertyValue(e);o&&Rt.setDataAttribute(t,e,o)}_resetElementAttributes(t,e){const o=i=>{const s=Rt.getDataAttribute(i,e);if(s===null){i.style.removeProperty(e);return}Rt.removeDataAttribute(i,e),i.style.setProperty(e,s)};this._applyManipulationCallback(t,o)}_applyManipulationCallback(t,e){if(It(t)){e(t);return}for(const o of S.find(t,this._element))e(o)}}const Xc="modal",Qc="bs.modal",pt=`.${Qc}`,Zc=".data-api",tu="Escape",eu=`hide${pt}`,nu=`hidePrevented${pt}`,Ys=`hidden${pt}`,Xs=`show${pt}`,ou=`shown${pt}`,iu=`resize${pt}`,su=`click.dismiss${pt}`,lu=`mousedown.dismiss${pt}`,au=`keydown.dismiss${pt}`,ru=`click${pt}${Zc}`,Ai="modal-open",pu="fade",ki="show",Wn="modal-static",cu=".modal.show",uu=".modal-dialog",du=".modal-body",mu='[data-bs-toggle="modal"]',hu={backdrop:!0,focus:!0,keyboard:!0},vu={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Te extends bt{constructor(t,e){super(t,e),this._dialog=S.findOne(uu,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new fo,this._addEventListeners()}static get Default(){return hu}static get DefaultType(){return vu}static get NAME(){return Xc}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||h.trigger(this._element,Xs,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Ai),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||h.trigger(this._element,eu).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(ki),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){h.off(window,pt),h.off(this._dialog,pt),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new zs({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ks({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=S.findOne(du,this._dialog);e&&(e.scrollTop=0),Xe(this._element),this._element.classList.add(ki);const o=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,h.trigger(this._element,ou,{relatedTarget:t})};this._queueCallback(o,this._dialog,this._isAnimated())}_addEventListeners(){h.on(this._element,au,t=>{if(t.key===tu){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),h.on(window,iu,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),h.on(this._element,lu,t=>{h.one(this._element,su,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Ai),this._resetAdjustments(),this._scrollBar.reset(),h.trigger(this._element,Ys)})}_isAnimated(){return this._element.classList.contains(pu)}_triggerBackdropTransition(){if(h.trigger(this._element,nu).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,o=this._element.style.overflowY;o==="hidden"||this._element.classList.contains(Wn)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(Wn),this._queueCallback(()=>{this._element.classList.remove(Wn),this._queueCallback(()=>{this._element.style.overflowY=o},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),o=e>0;if(o&&!t){const i=rt()?"paddingLeft":"paddingRight";this._element.style[i]=`${e}px`}if(!o&&t){const i=rt()?"paddingRight":"paddingLeft";this._element.style[i]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const o=Te.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof o[t]>"u")throw new TypeError(`No method named "${t}"`);o[t](e)}})}}h.on(document,ru,mu,function(n){const t=S.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),h.one(t,Xs,i=>{i.defaultPrevented||h.one(t,Ys,()=>{De(this)&&this.focus()})});const e=S.findOne(cu);e&&Te.getInstance(e).hide(),Te.getOrCreateInstance(t).toggle(this)});Cn(Te);ut(Te);const fu="offcanvas",bu="bs.offcanvas",Ht=`.${bu}`,Qs=".data-api",gu=`load${Ht}${Qs}`,_u="Escape",Oi="show",Ti="showing",xi="hiding",Eu="offcanvas-backdrop",Zs=".offcanvas.show",yu=`show${Ht}`,wu=`shown${Ht}`,Su=`hide${Ht}`,Ci=`hidePrevented${Ht}`,tl=`hidden${Ht}`,Au=`resize${Ht}`,ku=`click${Ht}${Qs}`,Ou=`keydown.dismiss${Ht}`,Tu='[data-bs-toggle="offcanvas"]',xu={backdrop:!0,keyboard:!0,scroll:!1},Cu={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Wt extends bt{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return xu}static get DefaultType(){return Cu}static get NAME(){return fu}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||h.trigger(this._element,yu,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new fo().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ti);const o=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Oi),this._element.classList.remove(Ti),h.trigger(this._element,wu,{relatedTarget:t})};this._queueCallback(o,this._element,!0)}hide(){if(!this._isShown||h.trigger(this._element,Su).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(xi),this._backdrop.hide();const e=()=>{this._element.classList.remove(Oi,xi),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new fo().reset(),h.trigger(this._element,tl)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){h.trigger(this._element,Ci);return}this.hide()},e=!!this._config.backdrop;return new zs({className:Eu,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new Ks({trapElement:this._element})}_addEventListeners(){h.on(this._element,Ou,t=>{if(t.key===_u){if(this._config.keyboard){this.hide();return}h.trigger(this._element,Ci)}})}static jQueryInterface(t){return this.each(function(){const e=Wt.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}h.on(document,ku,Tu,function(n){const t=S.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),Jt(this))return;h.one(t,tl,()=>{De(this)&&this.focus()});const e=S.findOne(Zs);e&&e!==t&&Wt.getInstance(e).hide(),Wt.getOrCreateInstance(t).toggle(this)});h.on(window,gu,()=>{for(const n of S.find(Zs))Wt.getOrCreateInstance(n).show()});h.on(window,Au,()=>{for(const n of S.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&Wt.getOrCreateInstance(n).hide()});Cn(Wt);ut(Wt);const Du=/^aria-[\w-]*$/i,el={"*":["class","dir","id","lang","role",Du],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Nu=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Mu=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Lu=(n,t)=>{const e=n.nodeName.toLowerCase();return t.includes(e)?Nu.has(e)?!!Mu.test(n.nodeValue):!0:t.filter(o=>o instanceof RegExp).some(o=>o.test(e))};function $u(n,t,e){if(!n.length)return n;if(e&&typeof e=="function")return e(n);const i=new window.DOMParser().parseFromString(n,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const l of s){const a=l.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){l.remove();continue}const c=[].concat(...l.attributes),p=[].concat(t["*"]||[],t[a]||[]);for(const u of c)Lu(u,p)||l.removeAttribute(u.nodeName)}return i.body.innerHTML}const Iu="TemplateFactory",Ru={allowList:el,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Pu={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Hu={entry:"(string|element|function|null)",selector:"(string|element)"};class Fu extends Qe{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Ru}static get DefaultType(){return Pu}static get NAME(){return Iu}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[i,s]of Object.entries(this._config.content))this._setContent(t,s,i);const e=t.children[0],o=this._resolvePossibleFunction(this._config.extraClass);return o&&e.classList.add(...o.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,o]of Object.entries(t))super._typeCheckConfig({selector:e,entry:o},Hu)}_setContent(t,e,o){const i=S.findOne(o,t);if(i){if(e=this._resolvePossibleFunction(e),!e){i.remove();return}if(It(e)){this._putElementInTemplate(jt(e),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(e);return}i.textContent=e}}_maybeSanitize(t){return this._config.sanitize?$u(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return et(t,[this])}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const Bu="tooltip",Uu=new Set(["sanitize","allowList","sanitizeFn"]),Vn="fade",Gu="modal",un="show",ju=".tooltip-inner",Di=`.${Gu}`,Ni="hide.bs.modal",Fe="hover",qn="focus",Ju="click",Wu="manual",Vu="hide",qu="hidden",zu="show",Ku="shown",Yu="inserted",Xu="click",Qu="focusin",Zu="focusout",td="mouseenter",ed="mouseleave",nd={AUTO:"auto",TOP:"top",RIGHT:rt()?"left":"right",BOTTOM:"bottom",LEFT:rt()?"right":"left"},od={allowList:el,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},id={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Me extends bt{constructor(t,e){if(typeof xs>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return od}static get DefaultType(){return id}static get NAME(){return Bu}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),h.off(this._element.closest(Di),Ni,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=h.trigger(this._element,this.constructor.eventName(zu)),o=(Ns(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!o)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),h.trigger(this._element,this.constructor.eventName(Yu))),this._popper=this._createPopper(i),i.classList.add(un),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))h.on(a,"mouseover",Sn);const l=()=>{h.trigger(this._element,this.constructor.eventName(Ku)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(l,this.tip,this._isAnimated())}hide(){if(!this._isShown()||h.trigger(this._element,this.constructor.eventName(Vu)).defaultPrevented)return;if(this._getTipElement().classList.remove(un),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))h.off(i,"mouseover",Sn);this._activeTrigger[Ju]=!1,this._activeTrigger[qn]=!1,this._activeTrigger[Fe]=!1,this._isHovered=null;const o=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),h.trigger(this._element,this.constructor.eventName(qu)))};this._queueCallback(o,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Vn,un),e.classList.add(`bs-${this.constructor.NAME}-auto`);const o=Jr(this.constructor.NAME).toString();return e.setAttribute("id",o),this._isAnimated()&&e.classList.add(Vn),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Fu({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[ju]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Vn)}_isShown(){return this.tip&&this.tip.classList.contains(un)}_createPopper(t){const e=et(this._config.placement,[this,t,this._element]),o=nd[e.toUpperCase()];return $o(this._element,t,this._getPopperConfig(o))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return et(t,[this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:o=>{this._getTipElement().setAttribute("data-popper-placement",o.state.placement)}}]};return{...e,...et(this._config.popperConfig,[e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")h.on(this._element,this.constructor.eventName(Xu),this._config.selector,o=>{this._initializeOnDelegatedTarget(o).toggle()});else if(e!==Wu){const o=e===Fe?this.constructor.eventName(td):this.constructor.eventName(Qu),i=e===Fe?this.constructor.eventName(ed):this.constructor.eventName(Zu);h.on(this._element,o,this._config.selector,s=>{const l=this._initializeOnDelegatedTarget(s);l._activeTrigger[s.type==="focusin"?qn:Fe]=!0,l._enter()}),h.on(this._element,i,this._config.selector,s=>{const l=this._initializeOnDelegatedTarget(s);l._activeTrigger[s.type==="focusout"?qn:Fe]=l._element.contains(s.relatedTarget),l._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},h.on(this._element.closest(Di),Ni,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=Rt.getDataAttributes(this._element);for(const o of Object.keys(e))Uu.has(o)&&delete e[o];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:jt(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,o]of Object.entries(this._config))this.constructor.Default[e]!==o&&(t[e]=o);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=Me.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}ut(Me);const sd="popover",ld=".popover-header",ad=".popover-body",rd={...Me.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},pd={...Me.DefaultType,content:"(null|string|element|function)"};class Ho extends Me{static get Default(){return rd}static get DefaultType(){return pd}static get NAME(){return sd}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[ld]:this._getTitle(),[ad]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=Ho.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}ut(Ho);const cd="scrollspy",ud="bs.scrollspy",Fo=`.${ud}`,dd=".data-api",md=`activate${Fo}`,Mi=`click${Fo}`,hd=`load${Fo}${dd}`,vd="dropdown-item",fe="active",fd='[data-bs-spy="scroll"]',zn="[href]",bd=".nav, .list-group",Li=".nav-link",gd=".nav-item",_d=".list-group-item",Ed=`${Li}, ${gd} > ${Li}, ${_d}`,yd=".dropdown",wd=".dropdown-toggle",Sd={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Ad={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Mn extends bt{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Sd}static get DefaultType(){return Ad}static get NAME(){return cd}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=jt(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(h.off(this._config.target,Mi),h.on(this._config.target,Mi,zn,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const o=this._rootElement||window,i=e.offsetTop-this._element.offsetTop;if(o.scrollTo){o.scrollTo({top:i,behavior:"smooth"});return}o.scrollTop=i}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=l=>this._targetLinks.get(`#${l.target.id}`),o=l=>{this._previousScrollData.visibleEntryTop=l.target.offsetTop,this._process(e(l))},i=(this._rootElement||document.documentElement).scrollTop,s=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const l of t){if(!l.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(l));continue}const a=l.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&a){if(o(l),!i)return;continue}!s&&!a&&o(l)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=S.find(zn,this._config.target);for(const e of t){if(!e.hash||Jt(e))continue;const o=S.findOne(decodeURI(e.hash),this._element);De(o)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,o))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(fe),this._activateParents(t),h.trigger(this._element,md,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(vd)){S.findOne(wd,t.closest(yd)).classList.add(fe);return}for(const e of S.parents(t,bd))for(const o of S.prev(e,Ed))o.classList.add(fe)}_clearActiveClass(t){t.classList.remove(fe);const e=S.find(`${zn}.${fe}`,t);for(const o of e)o.classList.remove(fe)}static jQueryInterface(t){return this.each(function(){const e=Mn.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(window,hd,()=>{for(const n of S.find(fd))Mn.getOrCreateInstance(n)});ut(Mn);const kd="tab",Od="bs.tab",le=`.${Od}`,Td=`hide${le}`,xd=`hidden${le}`,Cd=`show${le}`,Dd=`shown${le}`,Nd=`click${le}`,Md=`keydown${le}`,Ld=`load${le}`,$d="ArrowLeft",$i="ArrowRight",Id="ArrowUp",Ii="ArrowDown",Kn="Home",Ri="End",ee="active",Pi="fade",Yn="show",Rd="dropdown",nl=".dropdown-toggle",Pd=".dropdown-menu",Xn=`:not(${nl})`,Hd='.list-group, .nav, [role="tablist"]',Fd=".nav-item, .list-group-item",Bd=`.nav-link${Xn}, .list-group-item${Xn}, [role="tab"]${Xn}`,ol='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Qn=`${Bd}, ${ol}`,Ud=`.${ee}[data-bs-toggle="tab"], .${ee}[data-bs-toggle="pill"], .${ee}[data-bs-toggle="list"]`;class xe extends bt{constructor(t){super(t),this._parent=this._element.closest(Hd),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),h.on(this._element,Md,e=>this._keydown(e)))}static get NAME(){return kd}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),o=e?h.trigger(e,Td,{relatedTarget:t}):null;h.trigger(t,Cd,{relatedTarget:e}).defaultPrevented||o&&o.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(ee),this._activate(S.getElementFromSelector(t));const o=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(Yn);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),h.trigger(t,Dd,{relatedTarget:e})};this._queueCallback(o,t,t.classList.contains(Pi))}_deactivate(t,e){if(!t)return;t.classList.remove(ee),t.blur(),this._deactivate(S.getElementFromSelector(t));const o=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(Yn);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),h.trigger(t,xd,{relatedTarget:e})};this._queueCallback(o,t,t.classList.contains(Pi))}_keydown(t){if(![$d,$i,Id,Ii,Kn,Ri].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter(i=>!Jt(i));let o;if([Kn,Ri].includes(t.key))o=e[t.key===Kn?0:e.length-1];else{const i=[$i,Ii].includes(t.key);o=Io(e,t.target,i,!0)}o&&(o.focus({preventScroll:!0}),xe.getOrCreateInstance(o).show())}_getChildren(){return S.find(Qn,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const o of e)this._setInitialAttributesOnChild(o)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),o=this._getOuterElement(t);t.setAttribute("aria-selected",e),o!==t&&this._setAttributeIfNotExists(o,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=S.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const o=this._getOuterElement(t);if(!o.classList.contains(Rd))return;const i=(s,l)=>{const a=S.findOne(s,o);a&&a.classList.toggle(l,e)};i(nl,ee),i(Pd,Yn),o.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,o){t.hasAttribute(e)||t.setAttribute(e,o)}_elemIsActive(t){return t.classList.contains(ee)}_getInnerElement(t){return t.matches(Qn)?t:S.findOne(Qn,t)}_getOuterElement(t){return t.closest(Fd)||t}static jQueryInterface(t){return this.each(function(){const e=xe.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(document,Nd,ol,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!Jt(this)&&xe.getOrCreateInstance(this).show()});h.on(window,Ld,()=>{for(const n of S.find(Ud))xe.getOrCreateInstance(n)});ut(xe);const Gd="toast",jd="bs.toast",zt=`.${jd}`,Jd=`mouseover${zt}`,Wd=`mouseout${zt}`,Vd=`focusin${zt}`,qd=`focusout${zt}`,zd=`hide${zt}`,Kd=`hidden${zt}`,Yd=`show${zt}`,Xd=`shown${zt}`,Qd="fade",Hi="hide",dn="show",mn="showing",Zd={animation:"boolean",autohide:"boolean",delay:"number"},tm={animation:!0,autohide:!0,delay:5e3};class Ln extends bt{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return tm}static get DefaultType(){return Zd}static get NAME(){return Gd}show(){if(h.trigger(this._element,Yd).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Qd);const e=()=>{this._element.classList.remove(mn),h.trigger(this._element,Xd),this._maybeScheduleHide()};this._element.classList.remove(Hi),Xe(this._element),this._element.classList.add(dn,mn),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||h.trigger(this._element,zd).defaultPrevented)return;const e=()=>{this._element.classList.add(Hi),this._element.classList.remove(mn,dn),h.trigger(this._element,Kd)};this._element.classList.add(mn),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(dn),super.dispose()}isShown(){return this._element.classList.contains(dn)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const o=t.relatedTarget;this._element===o||this._element.contains(o)||this._maybeScheduleHide()}_setListeners(){h.on(this._element,Jd,t=>this._onInteraction(t,!0)),h.on(this._element,Wd,t=>this._onInteraction(t,!1)),h.on(this._element,Vd,t=>this._onInteraction(t,!0)),h.on(this._element,qd,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=Ln.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Cn(Ln);ut(Ln);/*! @license DOMPurify 3.1.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.6/LICENSE */const{entries:il,setPrototypeOf:Fi,isFrozen:em,getPrototypeOf:nm,getOwnPropertyDescriptor:om}=Object;let{freeze:Z,seal:ct,create:sl}=Object,{apply:bo,construct:go}=typeof Reflect<"u"&&Reflect;Z||(Z=function(t){return t});ct||(ct=function(t){return t});bo||(bo=function(t,e,o){return t.apply(e,o)});go||(go=function(t,e){return new t(...e)});const hn=lt(Array.prototype.forEach),Bi=lt(Array.prototype.pop),Be=lt(Array.prototype.push),yn=lt(String.prototype.toLowerCase),Zn=lt(String.prototype.toString),Ui=lt(String.prototype.match),Ue=lt(String.prototype.replace),im=lt(String.prototype.indexOf),sm=lt(String.prototype.trim),ht=lt(Object.prototype.hasOwnProperty),Y=lt(RegExp.prototype.test),Ge=lm(TypeError);function lt(n){return function(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),i=1;i<e;i++)o[i-1]=arguments[i];return bo(n,t,o)}}function lm(n){return function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return go(n,e)}}function x(n,t){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:yn;Fi&&Fi(n,null);let o=t.length;for(;o--;){let i=t[o];if(typeof i=="string"){const s=e(i);s!==i&&(em(t)||(t[o]=s),i=s)}n[i]=!0}return n}function am(n){for(let t=0;t<n.length;t++)ht(n,t)||(n[t]=null);return n}function Zt(n){const t=sl(null);for(const[e,o]of il(n))ht(n,e)&&(Array.isArray(o)?t[e]=am(o):o&&typeof o=="object"&&o.constructor===Object?t[e]=Zt(o):t[e]=o);return t}function je(n,t){for(;n!==null;){const o=om(n,t);if(o){if(o.get)return lt(o.get);if(typeof o.value=="function")return lt(o.value)}n=nm(n)}function e(){return null}return e}const Gi=Z(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),to=Z(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),eo=Z(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),rm=Z(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),no=Z(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),pm=Z(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ji=Z(["#text"]),Ji=Z(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),oo=Z(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Wi=Z(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),vn=Z(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),cm=ct(/\{\{[\w\W]*|[\w\W]*\}\}/gm),um=ct(/<%[\w\W]*|[\w\W]*%>/gm),dm=ct(/\${[\w\W]*}/gm),mm=ct(/^data-[\-\w.\u00B7-\uFFFF]/),hm=ct(/^aria-[\-\w]+$/),ll=ct(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),vm=ct(/^(?:\w+script|data):/i),fm=ct(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),al=ct(/^html$/i),bm=ct(/^[a-z][.\w]*(-[.\w]+)+$/i);var Vi=Object.freeze({__proto__:null,MUSTACHE_EXPR:cm,ERB_EXPR:um,TMPLIT_EXPR:dm,DATA_ATTR:mm,ARIA_ATTR:hm,IS_ALLOWED_URI:ll,IS_SCRIPT_OR_DATA:vm,ATTR_WHITESPACE:fm,DOCTYPE_NAME:al,CUSTOM_ELEMENT:bm});const Je={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},gm=function(){return typeof window>"u"?null:window},_m=function(t,e){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let o=null;const i="data-tt-policy-suffix";e&&e.hasAttribute(i)&&(o=e.getAttribute(i));const s="dompurify"+(o?"#"+o:"");try{return t.createPolicy(s,{createHTML(l){return l},createScriptURL(l){return l}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}};function rl(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:gm();const t=y=>rl(y);if(t.version="3.1.6",t.removed=[],!n||!n.document||n.document.nodeType!==Je.document)return t.isSupported=!1,t;let{document:e}=n;const o=e,i=o.currentScript,{DocumentFragment:s,HTMLTemplateElement:l,Node:a,Element:c,NodeFilter:p,NamedNodeMap:u=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:f,DOMParser:g,trustedTypes:b}=n,k=c.prototype,A=je(k,"cloneNode"),T=je(k,"remove"),C=je(k,"nextSibling"),$=je(k,"childNodes"),M=je(k,"parentNode");if(typeof l=="function"){const y=e.createElement("template");y.content&&y.content.ownerDocument&&(e=y.content.ownerDocument)}let w,O="";const{implementation:D,createNodeIterator:R,createDocumentFragment:G,getElementsByTagName:U}=e,{importNode:B}=o;let L={};t.isSupported=typeof il=="function"&&typeof M=="function"&&D&&D.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:q,ERB_EXPR:j,TMPLIT_EXPR:dt,DATA_ATTR:kt,ARIA_ATTR:z,IS_SCRIPT_OR_DATA:nt,ATTR_WHITESPACE:Kt,CUSTOM_ELEMENT:Ot}=Vi;let{IS_ALLOWED_URI:Yt}=Vi,H=null;const Ft=x({},[...Gi,...to,...eo,...no,...ji]);let P=null;const Tt=x({},[...Ji,...oo,...Wi,...vn]);let N=Object.seal(sl(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),mt=null,Bt=null,gt=!0,Xt=!0,en=!1,ae=!0,Ut=!1,re=!0,xt=!1,Le=!1,pe=!1,Ct=!1,ce=!1,ue=!1,_t=!0,Qt=!1;const nn="user-content-";let de=!0,Dt=!1,Nt={},Mt=null;const $e=x({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Ie=null;const Bo=x({},["audio","video","img","source","image","track"]);let $n=null;const Uo=x({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),on="http://www.w3.org/1998/Math/MathML",sn="http://www.w3.org/2000/svg",Lt="http://www.w3.org/1999/xhtml";let me=Lt,In=!1,Rn=null;const Dl=x({},[on,sn,Lt],Zn);let Re=null;const Nl=["application/xhtml+xml","text/html"],Ml="text/html";let J=null,he=null;const Ll=e.createElement("form"),Go=function(r){return r instanceof RegExp||r instanceof Function},Pn=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(he&&he===r)){if((!r||typeof r!="object")&&(r={}),r=Zt(r),Re=Nl.indexOf(r.PARSER_MEDIA_TYPE)===-1?Ml:r.PARSER_MEDIA_TYPE,J=Re==="application/xhtml+xml"?Zn:yn,H=ht(r,"ALLOWED_TAGS")?x({},r.ALLOWED_TAGS,J):Ft,P=ht(r,"ALLOWED_ATTR")?x({},r.ALLOWED_ATTR,J):Tt,Rn=ht(r,"ALLOWED_NAMESPACES")?x({},r.ALLOWED_NAMESPACES,Zn):Dl,$n=ht(r,"ADD_URI_SAFE_ATTR")?x(Zt(Uo),r.ADD_URI_SAFE_ATTR,J):Uo,Ie=ht(r,"ADD_DATA_URI_TAGS")?x(Zt(Bo),r.ADD_DATA_URI_TAGS,J):Bo,Mt=ht(r,"FORBID_CONTENTS")?x({},r.FORBID_CONTENTS,J):$e,mt=ht(r,"FORBID_TAGS")?x({},r.FORBID_TAGS,J):{},Bt=ht(r,"FORBID_ATTR")?x({},r.FORBID_ATTR,J):{},Nt=ht(r,"USE_PROFILES")?r.USE_PROFILES:!1,gt=r.ALLOW_ARIA_ATTR!==!1,Xt=r.ALLOW_DATA_ATTR!==!1,en=r.ALLOW_UNKNOWN_PROTOCOLS||!1,ae=r.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ut=r.SAFE_FOR_TEMPLATES||!1,re=r.SAFE_FOR_XML!==!1,xt=r.WHOLE_DOCUMENT||!1,Ct=r.RETURN_DOM||!1,ce=r.RETURN_DOM_FRAGMENT||!1,ue=r.RETURN_TRUSTED_TYPE||!1,pe=r.FORCE_BODY||!1,_t=r.SANITIZE_DOM!==!1,Qt=r.SANITIZE_NAMED_PROPS||!1,de=r.KEEP_CONTENT!==!1,Dt=r.IN_PLACE||!1,Yt=r.ALLOWED_URI_REGEXP||ll,me=r.NAMESPACE||Lt,N=r.CUSTOM_ELEMENT_HANDLING||{},r.CUSTOM_ELEMENT_HANDLING&&Go(r.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(N.tagNameCheck=r.CUSTOM_ELEMENT_HANDLING.tagNameCheck),r.CUSTOM_ELEMENT_HANDLING&&Go(r.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(N.attributeNameCheck=r.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),r.CUSTOM_ELEMENT_HANDLING&&typeof r.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(N.allowCustomizedBuiltInElements=r.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ut&&(Xt=!1),ce&&(Ct=!0),Nt&&(H=x({},ji),P=[],Nt.html===!0&&(x(H,Gi),x(P,Ji)),Nt.svg===!0&&(x(H,to),x(P,oo),x(P,vn)),Nt.svgFilters===!0&&(x(H,eo),x(P,oo),x(P,vn)),Nt.mathMl===!0&&(x(H,no),x(P,Wi),x(P,vn))),r.ADD_TAGS&&(H===Ft&&(H=Zt(H)),x(H,r.ADD_TAGS,J)),r.ADD_ATTR&&(P===Tt&&(P=Zt(P)),x(P,r.ADD_ATTR,J)),r.ADD_URI_SAFE_ATTR&&x($n,r.ADD_URI_SAFE_ATTR,J),r.FORBID_CONTENTS&&(Mt===$e&&(Mt=Zt(Mt)),x(Mt,r.FORBID_CONTENTS,J)),de&&(H["#text"]=!0),xt&&x(H,["html","head","body"]),H.table&&(x(H,["tbody"]),delete mt.tbody),r.TRUSTED_TYPES_POLICY){if(typeof r.TRUSTED_TYPES_POLICY.createHTML!="function")throw Ge('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof r.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Ge('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');w=r.TRUSTED_TYPES_POLICY,O=w.createHTML("")}else w===void 0&&(w=_m(b,i)),w!==null&&typeof O=="string"&&(O=w.createHTML(""));Z&&Z(r),he=r}},jo=x({},["mi","mo","mn","ms","mtext"]),Jo=x({},["foreignobject","annotation-xml"]),$l=x({},["title","style","font","a","script"]),Wo=x({},[...to,...eo,...rm]),Vo=x({},[...no,...pm]),Il=function(r){let v=M(r);(!v||!v.tagName)&&(v={namespaceURI:me,tagName:"template"});const _=yn(r.tagName),I=yn(v.tagName);return Rn[r.namespaceURI]?r.namespaceURI===sn?v.namespaceURI===Lt?_==="svg":v.namespaceURI===on?_==="svg"&&(I==="annotation-xml"||jo[I]):!!Wo[_]:r.namespaceURI===on?v.namespaceURI===Lt?_==="math":v.namespaceURI===sn?_==="math"&&Jo[I]:!!Vo[_]:r.namespaceURI===Lt?v.namespaceURI===sn&&!Jo[I]||v.namespaceURI===on&&!jo[I]?!1:!Vo[_]&&($l[_]||!Wo[_]):!!(Re==="application/xhtml+xml"&&Rn[r.namespaceURI]):!1},Et=function(r){Be(t.removed,{element:r});try{M(r).removeChild(r)}catch{T(r)}},ln=function(r,v){try{Be(t.removed,{attribute:v.getAttributeNode(r),from:v})}catch{Be(t.removed,{attribute:null,from:v})}if(v.removeAttribute(r),r==="is"&&!P[r])if(Ct||ce)try{Et(v)}catch{}else try{v.setAttribute(r,"")}catch{}},qo=function(r){let v=null,_=null;if(pe)r="<remove></remove>"+r;else{const W=Ui(r,/^[\r\n\t ]+/);_=W&&W[0]}Re==="application/xhtml+xml"&&me===Lt&&(r='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+r+"</body></html>");const I=w?w.createHTML(r):r;if(me===Lt)try{v=new g().parseFromString(I,Re)}catch{}if(!v||!v.documentElement){v=D.createDocument(me,"template",null);try{v.documentElement.innerHTML=In?O:I}catch{}}const V=v.body||v.documentElement;return r&&_&&V.insertBefore(e.createTextNode(_),V.childNodes[0]||null),me===Lt?U.call(v,xt?"html":"body")[0]:xt?v.documentElement:V},zo=function(r){return R.call(r.ownerDocument||r,r,p.SHOW_ELEMENT|p.SHOW_COMMENT|p.SHOW_TEXT|p.SHOW_PROCESSING_INSTRUCTION|p.SHOW_CDATA_SECTION,null)},Ko=function(r){return r instanceof f&&(typeof r.nodeName!="string"||typeof r.textContent!="string"||typeof r.removeChild!="function"||!(r.attributes instanceof u)||typeof r.removeAttribute!="function"||typeof r.setAttribute!="function"||typeof r.namespaceURI!="string"||typeof r.insertBefore!="function"||typeof r.hasChildNodes!="function")},Yo=function(r){return typeof a=="function"&&r instanceof a},$t=function(r,v,_){L[r]&&hn(L[r],I=>{I.call(t,v,_,he)})},Xo=function(r){let v=null;if($t("beforeSanitizeElements",r,null),Ko(r))return Et(r),!0;const _=J(r.nodeName);if($t("uponSanitizeElement",r,{tagName:_,allowedTags:H}),r.hasChildNodes()&&!Yo(r.firstElementChild)&&Y(/<[/\w]/g,r.innerHTML)&&Y(/<[/\w]/g,r.textContent)||r.nodeType===Je.progressingInstruction||re&&r.nodeType===Je.comment&&Y(/<[/\w]/g,r.data))return Et(r),!0;if(!H[_]||mt[_]){if(!mt[_]&&Zo(_)&&(N.tagNameCheck instanceof RegExp&&Y(N.tagNameCheck,_)||N.tagNameCheck instanceof Function&&N.tagNameCheck(_)))return!1;if(de&&!Mt[_]){const I=M(r)||r.parentNode,V=$(r)||r.childNodes;if(V&&I){const W=V.length;for(let tt=W-1;tt>=0;--tt){const yt=A(V[tt],!0);yt.__removalCount=(r.__removalCount||0)+1,I.insertBefore(yt,C(r))}}}return Et(r),!0}return r instanceof c&&!Il(r)||(_==="noscript"||_==="noembed"||_==="noframes")&&Y(/<\/no(script|embed|frames)/i,r.innerHTML)?(Et(r),!0):(Ut&&r.nodeType===Je.text&&(v=r.textContent,hn([q,j,dt],I=>{v=Ue(v,I," ")}),r.textContent!==v&&(Be(t.removed,{element:r.cloneNode()}),r.textContent=v)),$t("afterSanitizeElements",r,null),!1)},Qo=function(r,v,_){if(_t&&(v==="id"||v==="name")&&(_ in e||_ in Ll))return!1;if(!(Xt&&!Bt[v]&&Y(kt,v))){if(!(gt&&Y(z,v))){if(!P[v]||Bt[v]){if(!(Zo(r)&&(N.tagNameCheck instanceof RegExp&&Y(N.tagNameCheck,r)||N.tagNameCheck instanceof Function&&N.tagNameCheck(r))&&(N.attributeNameCheck instanceof RegExp&&Y(N.attributeNameCheck,v)||N.attributeNameCheck instanceof Function&&N.attributeNameCheck(v))||v==="is"&&N.allowCustomizedBuiltInElements&&(N.tagNameCheck instanceof RegExp&&Y(N.tagNameCheck,_)||N.tagNameCheck instanceof Function&&N.tagNameCheck(_))))return!1}else if(!$n[v]){if(!Y(Yt,Ue(_,Kt,""))){if(!((v==="src"||v==="xlink:href"||v==="href")&&r!=="script"&&im(_,"data:")===0&&Ie[r])){if(!(en&&!Y(nt,Ue(_,Kt,"")))){if(_)return!1}}}}}}return!0},Zo=function(r){return r!=="annotation-xml"&&Ui(r,Ot)},ti=function(r){$t("beforeSanitizeAttributes",r,null);const{attributes:v}=r;if(!v)return;const _={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:P};let I=v.length;for(;I--;){const V=v[I],{name:W,namespaceURI:tt,value:yt}=V,Pe=J(W);let K=W==="value"?yt:sm(yt);if(_.attrName=Pe,_.attrValue=K,_.keepAttr=!0,_.forceKeepAttr=void 0,$t("uponSanitizeAttribute",r,_),K=_.attrValue,re&&Y(/((--!?|])>)|<\/(style|title)/i,K)){ln(W,r);continue}if(_.forceKeepAttr||(ln(W,r),!_.keepAttr))continue;if(!ae&&Y(/\/>/i,K)){ln(W,r);continue}Ut&&hn([q,j,dt],ni=>{K=Ue(K,ni," ")});const ei=J(r.nodeName);if(Qo(ei,Pe,K)){if(Qt&&(Pe==="id"||Pe==="name")&&(ln(W,r),K=nn+K),w&&typeof b=="object"&&typeof b.getAttributeType=="function"&&!tt)switch(b.getAttributeType(ei,Pe)){case"TrustedHTML":{K=w.createHTML(K);break}case"TrustedScriptURL":{K=w.createScriptURL(K);break}}try{tt?r.setAttributeNS(tt,W,K):r.setAttribute(W,K),Ko(r)?Et(r):Bi(t.removed)}catch{}}}$t("afterSanitizeAttributes",r,null)},Rl=function y(r){let v=null;const _=zo(r);for($t("beforeSanitizeShadowDOM",r,null);v=_.nextNode();)$t("uponSanitizeShadowNode",v,null),!Xo(v)&&(v.content instanceof s&&y(v.content),ti(v));$t("afterSanitizeShadowDOM",r,null)};return t.sanitize=function(y){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=null,_=null,I=null,V=null;if(In=!y,In&&(y="<!-->"),typeof y!="string"&&!Yo(y))if(typeof y.toString=="function"){if(y=y.toString(),typeof y!="string")throw Ge("dirty is not a string, aborting")}else throw Ge("toString is not a function");if(!t.isSupported)return y;if(Le||Pn(r),t.removed=[],typeof y=="string"&&(Dt=!1),Dt){if(y.nodeName){const yt=J(y.nodeName);if(!H[yt]||mt[yt])throw Ge("root node is forbidden and cannot be sanitized in-place")}}else if(y instanceof a)v=qo("<!---->"),_=v.ownerDocument.importNode(y,!0),_.nodeType===Je.element&&_.nodeName==="BODY"||_.nodeName==="HTML"?v=_:v.appendChild(_);else{if(!Ct&&!Ut&&!xt&&y.indexOf("<")===-1)return w&&ue?w.createHTML(y):y;if(v=qo(y),!v)return Ct?null:ue?O:""}v&&pe&&Et(v.firstChild);const W=zo(Dt?y:v);for(;I=W.nextNode();)Xo(I)||(I.content instanceof s&&Rl(I.content),ti(I));if(Dt)return y;if(Ct){if(ce)for(V=G.call(v.ownerDocument);v.firstChild;)V.appendChild(v.firstChild);else V=v;return(P.shadowroot||P.shadowrootmode)&&(V=B.call(o,V,!0)),V}let tt=xt?v.outerHTML:v.innerHTML;return xt&&H["!doctype"]&&v.ownerDocument&&v.ownerDocument.doctype&&v.ownerDocument.doctype.name&&Y(al,v.ownerDocument.doctype.name)&&(tt="<!DOCTYPE "+v.ownerDocument.doctype.name+`>
`+tt),Ut&&hn([q,j,dt],yt=>{tt=Ue(tt,yt," ")}),w&&ue?w.createHTML(tt):tt},t.setConfig=function(){let y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Pn(y),Le=!0},t.clearConfig=function(){he=null,Le=!1},t.isValidAttribute=function(y,r,v){he||Pn({});const _=J(y),I=J(r);return Qo(_,I,v)},t.addHook=function(y,r){typeof r=="function"&&(L[y]=L[y]||[],Be(L[y],r))},t.removeHook=function(y){if(L[y])return Bi(L[y])},t.removeHooks=function(y){L[y]&&(L[y]=[])},t.removeAllHooks=function(){L={}},t}var ft=rl(),Em=Object.defineProperty,ym=(n,t,e)=>t in n?Em(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,E=(n,t,e)=>ym(n,typeof t!="symbol"?t+"":t,e),wm=class{constructor(n){E(this,"_distinctEvent"),E(this,"_boundedEvents",[]),this._distinctEvent=(n==null?void 0:n.distinctEvent)??!1}get boundedEvents(){return this._boundedEvents}dispose(){this.unbindAll(),this._boundedEvents=[]}bind(n,t,e,o,i=""){let s=Array.isArray(t)?t:[t];if(typeof(n==null?void 0:n.forEach)=="function")n.forEach(l=>{for(let a of s)(!this._distinctEvent||this._distinctEvent&&!this.hasBinding(l,a))&&(l.addEventListener(a,e,o),this._boundedEvents.push({element:l,eventName:a,listener:e,groupName:i}))});else for(let l of s)(!this._distinctEvent||this._distinctEvent&&!this.hasBinding(n,l))&&(n.addEventListener(l,e,o),this._boundedEvents.push({element:n,eventName:l,listener:e,groupName:i}))}hasBinding(n,t){return this._boundedEvents.some(e=>e.element===n&&(!t||e.eventName===t))}unbind(n,t,e){var o;if(n){let i=Array.isArray(n)?n:[n],s=Array.isArray(t)?t||"":[t||""];for(let l of i){e||(e=this._boundedEvents.find(a=>{if(a.element===l&&(!t||a.eventName===t))return a.listener}));for(let a of s)(o=l==null?void 0:l.removeEventListener)==null||o.call(l,a,e)}}}unbindAll(n){if(n){let t=Array.isArray(n)?n:[n];for(let e=this._boundedEvents.length-1;e>=0;--e){let o=this._boundedEvents[e];if(t.some(i=>i===o.groupName)){let{element:i,eventName:s,listener:l}=o;this.unbind(i,s,l),this._boundedEvents.splice(e,1)}}}else for(;this._boundedEvents.length>0;){let t=this._boundedEvents.pop(),{element:e,eventName:o,listener:i}=t;this.unbind(e,o,i)}}},pl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Sm={formatSelectAll(){return"[Select all]"},formatAllSelected(){return"All selected"},formatCountSelected(n,t){return`${n} of ${t} selected`},formatNoMatchesFound(){return"No matches found"},formatOkButton(){return"OK"}};pl.locales["en-US"]=Sm;var cl=pl.locales,Am=50,km=4,ul={name:"",placeholder:"",classes:"",classPrefix:"",data:void 0,locale:void 0,selectAll:!0,single:void 0,singleRadio:!1,multiple:!1,hideOptgroupCheckboxes:!1,multipleWidth:80,width:void 0,dropWidth:void 0,maxHeight:250,maxHeightUnit:"px",position:"bottom",displayValues:!1,displayTitle:!1,displayDelimiter:", ",minimumCountSelected:3,ellipsis:!1,isOpen:!1,keepOpen:!1,openOnHover:!1,container:null,filter:!1,filterGroup:!1,filterPlaceholder:"",filterAcceptOnEnter:!1,filterByDataLength:void 0,customFilter(n){let{text:t,label:e,search:o}=n;return(e||t||"").includes(o)},showClear:!1,autoAdjustDropHeight:!1,autoAdjustDropPosition:!1,autoAdjustDropWidthByTextSize:!1,adjustedHeightPadding:10,useSelectOptionLabel:!1,useSelectOptionLabelToHtml:!1,navigationHighlight:!0,infiniteScroll:!1,virtualScroll:!0,cssStyler:()=>null,textTemplate:n=>n.innerHTML.trim(),labelTemplate:n=>n.label,onOpen:()=>!1,onClose:()=>!1,onCheckAll:()=>!1,onUncheckAll:()=>!1,onFocus:()=>!1,onBlur:()=>!1,onOptgroupClick:()=>!1,onBeforeClick:()=>!0,onClick:()=>!1,onFilter:()=>!1,onFilterClear:()=>!1,onClear:()=>!1,onAfterCreate:()=>!1,onDestroy:()=>!1,onAfterDestroy:()=>!1,onDestroyed:()=>!1},Om=["init","getOptions","refreshOptions","getSelects","setSelects","enable","disable","open","close","check","uncheck","checkAll","uncheckAll","checkInvert","focus","blur","refresh","destroy"];Object.assign(ul,cl["en-US"]);var Tm={BLOCK_ROWS:Am,CLUSTER_BLOCKS:km,DEFAULTS:ul,METHODS:Om},vt=Tm;function xm(n,t,e=!1){let o=Object.keys(n),i=Object.keys(t);if(e&&o.length!==i.length)return!1;for(let s of o)if(i.includes(s)&&n[s]!==t[s])return!1;return!0}function _o(n){let t=()=>{let i={};for(let s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=_o(n[s]));return i},e=()=>n.map(i=>_o(i)),o=Object.prototype.toString.call(n).slice(8,-1).toLowerCase();return o==="object"?t():o==="array"?e():n}function io(n){return n!=null&&n!==""}function Cm(n,t){return typeof n=="object"?Object.fromEntries(t?Object.entries(n).filter(([e,o])=>!io(o)&&!t.includes(e)||io(o)):Object.entries(n).filter(([e,o])=>io(o))):n}function Dm(n){let t=0;return n.forEach((e,o)=>{e.type==="optgroup"?(e._key=`group_${o}`,e.visible=typeof e.visible>"u"?!0:e.visible,e.children.forEach((i,s)=>{i&&(i.visible=typeof(i==null?void 0:i.visible)>"u"?!0:i.visible,i.divider||(i._key=`option_${o}_${s}`,t+=1))})):(e.visible=typeof e.visible>"u"?!0:e.visible,e.divider||(e._key=`option_${o}`,t+=1))}),t}function fn(n,t,e){if(Array.isArray(n))for(let o of n){if(o[t]===e||o[t]===`${+o[t]}`&&+o[t]===e)return o;if(o.type==="optgroup"){for(let i of o.children)if(i&&(i[t]===e||i[t]===`${+i[t]}`&&+i[t]===e))return i}}}function Nm(n){return n.replace(/(\b)(on[a-z]+)(\s*)=([^>]*)|javascript:([^>]*)[^>]*|(<\s*)(\/*)script([<>]*).*(<\s*)(\/*)script(>*)|(&lt;|&#60;)(\/*)(script|script defer)(.*)(&#62;|&gt;|&gt;">)/gi,"")}function so(n){return Object.keys(n).forEach(t=>n[t]===void 0?delete n[t]:""),n}function be(n,t){if(typeof n!="string")return n;if(typeof t=="function")return t(n);if(typeof n.normalize=="function")return n.normalize("NFD").replace(/[\u0300-\u036F]/g,"");throw new Error("[Multiple-Select-Vanilla] `normalize()` function is not defined, you can optionally provide a custom parser via the `diacriticParser` option.")}function lo(n){let t=0,e=0,o=0,i=0,s=window.innerHeight??0,l=window.innerWidth??0,a=$m(),c=a.top,p=a.left,u=yo(n);if(u){let f=u.top??0,g=u.left??0;e=f-c,t=s-(f-c),o=g-p,i=l-(g-p)}return{top:e,bottom:t,left:o,right:i}}function ao(n=""){return n.split(" ").filter(t=>t)}function F(n,t,e){let o=document.createElement(n);return t&&Object.keys(t).forEach(i=>{let s=t[i];typeof s=="object"?Object.assign(o[i],s):o[i]=t[i]}),e!=null&&e.appendChild&&e.appendChild(o),o}function dl(n,t,e){var s;let o=(s=n.props)!=null&&s.innerHTML?Lm(n.props,"innerHTML"):n.props,i=F(n.tagName,Cm(o,["className","title","style"]),t);if(n.props.innerHTML&&(i.innerHTML=n.props.innerHTML),n.attrs)for(let l of Object.keys(n.attrs))i.setAttribute(l,n.attrs[l]);if(n.children)for(let l of n.children)dl(l,i);return t==null||t.appendChild(i),i}function Eo(n){return n.hasOwnProperty("tagName")?dl(n):document.createElement("li")}function ze(n){for(;n!=null&&n.firstChild;)n.lastChild&&n.removeChild(n.lastChild);return n}function yo(n){var l;if(!n)return;let t=(l=n==null?void 0:n.getBoundingClientRect)==null?void 0:l.call(n),e=0,o=0,i=0,s=0;return(t==null?void 0:t.top)!==void 0&&t.left!==void 0&&(e=t.top+window.pageYOffset,o=t.left+window.pageXOffset,s=t.right,i=t.bottom),{top:e,left:o,bottom:i,right:s}}function bn(n,t,e){if(!n)return 0;let o=Number.parseFloat(n.style[e]);if(!o||Number.isNaN(o)){switch(t){case"outer":o=n[e==="width"?"offsetWidth":"offsetHeight"];break;case"scroll":o=n[e==="width"?"scrollWidth":"scrollHeight"];break;case"inner":default:o=n[e==="width"?"clientWidth":"clientHeight"];break}o=n.getBoundingClientRect()[e]}if(!o||Number.isNaN(o)){let i=n.style.display,s=n.style.position;n.style.display="block",n.style.position="absolute";let l=window.getComputedStyle(n)[e];o=Number.parseFloat(l),Number.isNaN(o)&&(o=0),n.style.display=i,n.style.position=s}return o||0}function qi(n,t){let e=null,o=n==null?void 0:n.parentElement;for(;o;){let[i,s,l,a]=t.match(/^([a-z]*)([#.]{1})([a-z\-]+)$/i)||[];if(l&&a)for(let c of a.replace(l,"").split(" "))o.classList.contains(c)&&(s?(o==null?void 0:o.tagName.toLowerCase())===s&&(e=o):e=o);o=o.parentElement}return e}function Mm(n,t){var e;(e=n.parentNode)==null||e.insertBefore(t,n.nextSibling)}function Lm(n,t){let{[t]:e,...o}=n;return o}function zi(n,t){n!=null&&n.style&&(n.style.display=n.style.display==="none"&&t!==!1||t===!0?"block":"none")}function $m(){return{left:window.pageXOffset||document.documentElement.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||0}}var Im=class{constructor(n){var e;E(this,"clusterRows"),E(this,"cache"),E(this,"scrollEl"),E(this,"blockHeight"),E(this,"clusterHeight"),E(this,"contentEl"),E(this,"parentEl"),E(this,"itemHeight"),E(this,"lastCluster"),E(this,"scrollTop"),E(this,"dataStart"),E(this,"dataEnd"),E(this,"rows"),E(this,"destroy"),E(this,"callback"),E(this,"sanitizer"),this.rows=n.rows,this.scrollEl=n.scrollEl,this.contentEl=n.contentEl,this.parentEl=(e=n.contentEl)==null?void 0:e.parentElement,this.callback=n.callback,this.cache={},this.scrollTop=this.scrollEl.scrollTop,this.initDOM(this.rows),this.scrollEl.scrollTop=this.scrollTop,this.lastCluster=0;let t=()=>{this.lastCluster!==(this.lastCluster=this.getNum())&&(this.initDOM(this.rows),this.callback())};this.scrollEl.addEventListener("scroll",t,!1),this.destroy=()=>{this.scrollEl.removeEventListener("scroll",t,!1),ze(this.contentEl)}}reset(n){this.lastCluster=0,this.cache={},ze(this.contentEl),this.initDOM(n)}initDOM(n){if(typeof this.clusterHeight>"u"){this.cache.scrollTop=this.scrollEl.scrollTop;let s=Eo(n[0]);this.contentEl.appendChild(s),this.contentEl.appendChild(s),this.contentEl.appendChild(s),this.cache.data=[n[0]],this.getRowsHeight()}let t=this.initData(n,this.getNum()),e=this.checkChanges("data",t.rows),o=this.checkChanges("top",t.topOffset),i=this.checkChanges("bottom",t.bottomOffset);ze(this.contentEl),e&&o?(t.topOffset&&this.contentEl.appendChild(this.getExtra("top",t.topOffset)),t.rows.forEach(s=>this.contentEl.appendChild(Eo(s))),t.bottomOffset&&this.contentEl.appendChild(this.getExtra("bottom",t.bottomOffset))):i&&this.contentEl.lastChild&&(this.contentEl.lastChild.style.height=`${t.bottomOffset}px`)}getRowsHeight(){var n;if(typeof this.itemHeight>"u"){let t=((n=this.parentEl)==null?void 0:n.style.display)||"";this.parentEl&&(t===""||t==="none")&&(this.parentEl.style.display="block");let e=this.contentEl.children,o=e[Math.floor(e.length/2)];this.itemHeight=o.offsetHeight,this.parentEl&&(this.parentEl.style.display=t)}this.blockHeight=this.itemHeight*vt.BLOCK_ROWS,this.clusterRows=vt.BLOCK_ROWS*vt.CLUSTER_BLOCKS,this.clusterHeight=this.blockHeight*vt.CLUSTER_BLOCKS}getNum(){this.scrollTop=this.scrollEl.scrollTop;let n=(this.clusterHeight||0)-(this.blockHeight||0);return n&&Math.floor(this.scrollTop/n)||0}initData(n,t){if(n.length<vt.BLOCK_ROWS)return{topOffset:0,bottomOffset:0,rowsAbove:0,rows:n};let e=Math.max((this.clusterRows-vt.BLOCK_ROWS)*t,0),o=e+this.clusterRows,i=Math.max(e*this.itemHeight,0),s=Math.max((n.length-o)*this.itemHeight,0),l=[],a=e;i<1&&a++;for(let c=e;c<o;c++)n[c]&&l.push(n[c]);return this.dataStart=e,this.dataEnd=o,{topOffset:i,bottomOffset:s,rowsAbove:a,rows:l}}checkChanges(n,t){let e=t!==this.cache[n];return this.cache[n]=t,e}getExtra(n,t){let e=document.createElement("li");return e.className=`virtual-scroll-${n}`,t&&(e.style.height=`${t}px`),e}},We=".ms-select-all, ul li[data-key]",Rm=".ms-select-all.highlighted, ul li[data-key].highlighted",Pm=class{constructor(t,e){this.elm=t,E(this,"_bindEventService"),E(this,"isAllSelected",!1),E(this,"isPartiallyAllSelected",!1),E(this,"fromHtml",!1),E(this,"choiceElm"),E(this,"selectClearElm"),E(this,"closeElm"),E(this,"clearSearchIconElm"),E(this,"filterText",""),E(this,"updateData",[]),E(this,"data",[]),E(this,"dataTotal"),E(this,"dropElm"),E(this,"okButtonElm"),E(this,"filterParentElm"),E(this,"lastFocusedItemKey",""),E(this,"lastMouseOverPosition",""),E(this,"ulElm"),E(this,"parentElm"),E(this,"labelElm"),E(this,"selectAllParentElm"),E(this,"selectAllElm"),E(this,"searchInputElm"),E(this,"selectGroupElms"),E(this,"selectItemElms"),E(this,"noResultsElm"),E(this,"options"),E(this,"selectAllName",""),E(this,"selectGroupName",""),E(this,"selectItemName",""),E(this,"scrolledByMouse",!1),E(this,"openDelayTimer"),E(this,"updateDataStart"),E(this,"updateDataEnd"),E(this,"virtualScroll"),E(this,"_currentHighlightIndex",-1),E(this,"_currentSelectedElm"),E(this,"isMoveUpRecalcRequired",!1),E(this,"locales",{}),this.options=Object.assign({},vt.DEFAULTS,this.elm.dataset,e),this._bindEventService=new wm({distinctEvent:!0})}get isRenderAsHtml(){return this.options.renderOptionLabelAsHtml||this.options.useSelectOptionLabelToHtml}init(){this.initLocale(),this.initContainer(),this.initData(),this.initSelected(!0),this.initFilter(),this.initDrop(),this.initView(),this.options.onAfterCreate()}destroy(t=!0){var e,o,i,s,l;this.elm&&this.parentElm&&(this.options.onDestroy({hardDestroy:t}),t&&this.options.onHardDestroy(),this.elm.parentElement&&this.parentElm.parentElement&&this.elm.parentElement.insertBefore(this.elm,this.parentElm.parentElement.firstChild),this.elm.classList.remove("ms-offscreen"),this._bindEventService.unbindAll(),(e=this.virtualScroll)==null||e.destroy(),(o=this.dropElm)==null||o.remove(),this.dropElm=void 0,(i=this.parentElm.parentNode)==null||i.removeChild(this.parentElm),this.fromHtml&&(delete this.options.data,this.fromHtml=!1),this.options.onAfterDestroy({hardDestroy:t}),t&&((l=(s=this.options).onAfterHardDestroy)==null||l.call(s),Object.keys(this.options).forEach(a=>delete this[a])))}initLocale(){if(this.options.locale){if(typeof this.options.locale=="object"){Object.assign(this.options,this.options.locale);return}let t=window.multipleSelect.locales,e=this.options.locale.split(/-|_/);if(e[0]=e[0].toLowerCase(),e[1]&&(e[1]=e[1].toUpperCase()),t[this.options.locale])Object.assign(this.options,t[this.options.locale]);else if(t[e.join("-")])Object.assign(this.options,t[e.join("-")]);else if(t[e[0]])Object.assign(this.options,t[e[0]]);else throw new Error(`[multiple-select-vanilla] invalid locales "${this.options.locale}", make sure to import it before using it`)}}initContainer(){var i;let t=this.elm.getAttribute("name")||this.options.name||"";this.options.classes&&this.elm.classList.add(this.options.classes),this.options.classPrefix&&(this.elm.classList.add(this.options.classPrefix),this.options.size&&this.elm.classList.add(`${this.options.classPrefix}-${this.options.size}`)),this.elm.style.display="none",this.labelElm=this.elm.closest("label"),!this.labelElm&&this.elm.id&&(this.labelElm=document.createElement("label"),this.labelElm.htmlFor=this.elm.id),(i=this.labelElm)!=null&&i.querySelector("input")&&(this.labelElm=null),typeof this.options.single>"u"&&(this.options.single=!this.elm.multiple),this.parentElm=F("div",{className:ao(`ms-parent ${this.elm.className||""} ${this.options.classes}`).join(" "),dataset:{test:"sel"}}),this.options.darkMode&&this.parentElm.classList.add("ms-dark-mode");let e=this.elm.getAttribute("title")||"";e&&(this.parentElm.title=e),this.options.placeholder=this.options.placeholder||this.elm.getAttribute("placeholder")||"",this.choiceElm=F("button",{className:"ms-choice",type:"button"},this.parentElm),this.options.labelId&&(this.choiceElm.id=this.options.labelId,this.choiceElm.setAttribute("aria-labelledby",this.options.labelId)),this.choiceElm.appendChild(F("span",{className:"ms-placeholder",textContent:this.options.placeholder})),this.options.showClear&&(this.selectClearElm=F("div",{className:"ms-icon ms-icon-close"}),this.selectClearElm.style.display="none",this.choiceElm.appendChild(this.selectClearElm)),this.choiceElm.appendChild(F("div",{className:"ms-icon ms-icon-caret"})),this.dropElm=F("div",{className:`ms-drop ${this.options.position}`,ariaExpanded:"false"},this.parentElm),this.options.darkMode&&this.dropElm.classList.add("ms-dark-mode"),t&&(this.dropElm.dataset.name=t);let o=this.elm.getAttribute("data-test")||this.options.dataTest;o&&(this.parentElm.dataset.test=o,this.dropElm.dataset.test=o),this.closeElm=this.choiceElm.querySelector(".ms-icon-close"),this.options.dropWidth&&(this.dropElm.style.width=typeof this.options.dropWidth=="string"?this.options.dropWidth:`${this.options.dropWidth}px`),Mm(this.elm,this.parentElm),this.elm.disabled&&(this.choiceElm.classList.add("disabled"),this.choiceElm.disabled=!0),this.selectAllName=`selectAll${t}`,this.selectGroupName=`selectGroup${t}`,this.selectItemName=`selectItem${t}`,this.options.keepOpen||(this._bindEventService.unbindAll("body-click"),this._bindEventService.bind(document.body,"click",s=>{this.getEventTarget(s)===this.choiceElm||qi(this.getEventTarget(s),".ms-choice")===this.choiceElm||(this.getEventTarget(s)===this.dropElm||qi(this.getEventTarget(s),".ms-drop")!==this.dropElm&&this.getEventTarget(s)!==this.elm)&&this.options.isOpen&&this.close("body.click")},void 0,"body-click"))}initData(){let t=[];if(this.options.data){if(Array.isArray(this.options.data))this.data=this.options.data.map(e=>typeof e=="string"||typeof e=="number"?{text:e,value:e}:e);else if(typeof this.options.data=="object"){for(let[e,o]of Object.entries(this.options.data))t.push({value:e,text:`${o}`});this.data=t}}else this.elm.childNodes.forEach(e=>{let o=this.initRow(e);o&&t.push(o)}),this.options.data=t,this.data=t,this.fromHtml=!0;this.dataTotal=Dm(this.data||[])}initRow(t,e){var i,s;let o={};return((i=t.tagName)==null?void 0:i.toLowerCase())==="option"?(o.type="option",o.text=this.options.textTemplate(t),o.value=t.value,o.visible=!0,o.selected=!!t.selected,o.disabled=e||t.disabled,o.classes=t.getAttribute("class")||"",o.title=t.getAttribute("title")||"",t.dataset.value&&(o._value=t.dataset.value),Object.keys(t.dataset).length&&(o._data=t.dataset,o._data.divider&&(o.divider=o._data.divider)),o):((s=t.tagName)==null?void 0:s.toLowerCase())==="optgroup"?(o.type="optgroup",o.label=this.options.labelTemplate(t),o.visible=!0,o.selected=!!t.selected,o.disabled=t.disabled,o.children=[],Object.keys(t.dataset).length&&(o._data=t.dataset),t.childNodes.forEach(l=>{o.children.push(this.initRow(l,o.disabled))}),o):null}initDrop(){this.initList(),this.update(!0),this.options.isOpen&&this.open(10),this.options.openOnHover&&this.parentElm&&(this._bindEventService.bind(this.parentElm,"mouseover",()=>this.open(null)),this._bindEventService.bind(this.parentElm,"mouseout",()=>this.close("hover.mouseout")))}initFilter(){if(this.filterText="",this.options.filter||!this.options.filterByDataLength)return;let t=0;for(let e of this.data||[])e.type==="optgroup"?t+=e.children.length:t+=1;this.options.filter=t>this.options.filterByDataLength}initList(){var t,e;if(this.options.filter&&(this.filterParentElm=F("div",{className:"ms-search"},this.dropElm),this.filterParentElm.appendChild(F("input",{autocomplete:"off",autocapitalize:"off",spellcheck:!1,type:"text",placeholder:this.options.filterPlaceholder||"🔎︎"})),this.options.showSearchClear&&this.filterParentElm.appendChild(F("span",{className:"ms-icon ms-icon-close"}))),this.options.selectAll&&!this.options.single){let o=this.elm.getAttribute("name")||this.options.name||"";this.selectAllParentElm=F("div",{className:"ms-select-all",dataset:{key:"select_all"}});let i=document.createElement("label"),s=`ms-icon ${this.isAllSelected?"ms-icon-check":this.isPartiallyAllSelected?"ms-icon-minus":"ms-icon-uncheck"}`,l=F("div",{className:"icon-checkbox-container"},i);F("input",{type:"checkbox",ariaChecked:String(this.isAllSelected),checked:this.isAllSelected,dataset:{name:`selectAll${o}`}},l),F("div",{className:s},l),i.appendChild(F("span",{textContent:this.formatSelectAll()})),this.selectAllParentElm.appendChild(i),(t=this.dropElm)==null||t.appendChild(this.selectAllParentElm)}this.ulElm=document.createElement("ul"),this.ulElm.role="combobox",this.ulElm.ariaExpanded="false",this.ulElm.ariaMultiSelectable=String(!this.options.single),(e=this.dropElm)==null||e.appendChild(this.ulElm),this.options.showOkButton&&!this.options.single&&(this.okButtonElm=F("button",{className:"ms-ok-button",type:"button",textContent:this.formatOkButton()},this.dropElm)),this.initListItems()}initListItems(){var o;let t=0,e=this.getListRows();if(this.options.selectAll&&!this.options.single&&(t=-1),e.length>vt.BLOCK_ROWS*vt.CLUSTER_BLOCKS){let i=this.dropElm&&((o=this.dropElm)==null?void 0:o.style.display)!=="none";!i&&this.dropElm&&(this.dropElm.style.left="-10000",this.dropElm.style.display="block",this.dropElm.ariaExpanded="true");let s=()=>{if(this.virtualScroll){this._currentHighlightIndex=0,this.updateDataStart=this.virtualScroll.dataStart+t,this.updateDataEnd=this.virtualScroll.dataEnd+t,this.updateDataStart<0&&(this.updateDataStart=0,this._currentHighlightIndex=0);let l=this.getDataLength();this.updateDataEnd>l&&(this.updateDataEnd=l),this.ulElm&&(this.isMoveUpRecalcRequired?this.recalculateArrowMove("up"):this.virtualScroll.dataStart>this.updateDataStart&&this.recalculateArrowMove("down"))}};this.ulElm&&(this.virtualScroll?this.virtualScroll.reset(e):this.virtualScroll=new Im({rows:e,scrollEl:this.ulElm,contentEl:this.ulElm,sanitizer:this.options.sanitizer,callback:()=>{s(),this.events()}})),s(),!i&&this.dropElm&&(this.dropElm.style.left="0",this.dropElm.style.display="none",this.dropElm.ariaExpanded="false")}else this.ulElm&&(ze(this.ulElm),e.forEach(i=>this.ulElm.appendChild(Eo(i)))),this.updateDataStart=0,this.updateDataEnd=this.updateData.length;return this.events(),e}getEventTarget(t){return t.composedPath?t.composedPath()[0]:t.target}getListRows(){var e;let t=[];return this.updateData=[],(e=this.data)==null||e.forEach(o=>t.push(...this.initListItem(o))),this.options.infiniteScroll&&t.push({tagName:"li",props:{className:"ms-infinite-option",role:"option"}}),t.push({tagName:"li",props:{className:"ms-no-results",textContent:this.formatNoMatchesFound()}}),t}initListItem(t,e=0){let o=(t==null?void 0:t.title)||"",i=this.options.multiple?"multiple":"",s=this.options.single?"radio":"checkbox",l=!!(t!=null&&t.selected),a=this.options.single&&!this.options.singleRadio,c="";if(!(t!=null&&t.visible))return[];if(this.updateData.push(t),a&&(c="hide-radio "),t.selected&&(c+="selected "),t.type==="optgroup"){let T=[],C;if(this.options.hideOptgroupCheckboxes||this.options.single)C={tagName:"span",props:{dataset:{name:this.selectGroupName,key:t._key}}};else{let O={tagName:"input",props:{type:"checkbox",dataset:{name:this.selectGroupName,key:t._key},checked:l,disabled:t.disabled}};a?C=O:C={tagName:"div",props:{className:`icon-checkbox-container${s==="radio"?" radio":""}`},children:[O,{tagName:"div",props:{className:`ms-icon ${l?s==="radio"?"ms-icon-radio":"ms-icon-check":"ms-icon-uncheck"}`}}]}}!c.includes("hide-radio")&&(this.options.hideOptgroupCheckboxes||this.options.single)&&(c+="hide-radio ");let $={tagName:"span",props:{}};this.applyAsTextOrHtmlWhenEnabled($.props,t.label);let M={tagName:"li",props:{className:ao(`group${this.options.single||t.disabled?" disabled":""} ${c}`).join(" "),role:"option",ariaSelected:String(l),dataset:{key:t._key}},children:[{tagName:"label",props:{className:ao(`optgroup${this.options.single||t.disabled?" disabled":""}`).join(" ")},children:[C,$]}]},w=this.options.cssStyler(t);return w&&(M.props.style=w),T.push(M),t.children.forEach(O=>T.push(...this.initListItem(O,1))),T}if(c+=t.classes||"",e&&this.options.single&&(c+=`option-level-${e} `),t.divider)return[{tagName:"li",props:{className:"option-divider"}}];let p=i||c?(i+c).trim():"";t.disabled&&(p+=" disabled");let u=`${t.disabled?"disabled":""}`,f={tagName:"span",props:{}};this.applyAsTextOrHtmlWhenEnabled(f.props,t.text);let g={tagName:"input",props:{type:s,value:encodeURI(t.value),dataset:{key:t._key,name:this.selectItemName},checked:l,disabled:!!t.disabled}};t.selected&&(g.attrs={checked:"checked"});let b={tagName:"div",props:{className:`icon-checkbox-container${s==="radio"?" radio":""}`},children:[g,{tagName:"div",props:{className:`ms-icon ${g.props.checked?s==="radio"?"ms-icon-radio":"ms-icon-check":"ms-icon-uncheck"}`}}]},k={tagName:"li",props:{role:"option",title:o,ariaSelected:String(l),dataset:{key:t._key}},children:[{tagName:"label",props:{className:u},children:[a?g:b,f]}]};p&&(k.props.className=p);let A=this.options.cssStyler(t);return A&&(k.props.style=A),[k]}initSelected(t=!1){var o,i;let e=0;for(let s of this.data||[])if(s.type==="optgroup"){let l=s.children.filter(a=>(a==null?void 0:a.selected)&&!a.disabled&&a.visible).length;s.children.length&&(s.selected=!this.options.single&&l&&l===s.children.filter(a=>a&&!a.disabled&&a.visible&&!a.divider).length),e+=l}else e+=s.selected&&!s.disabled&&s.visible?1:0;this.isAllSelected=((o=this.data)==null?void 0:o.filter(s=>s.selected&&!s.disabled&&s.visible).length)===((i=this.data)==null?void 0:i.filter(s=>!s.disabled&&s.visible&&!s.divider).length),this.isPartiallyAllSelected=!this.isAllSelected&&e>0,t||(this.isAllSelected?this.options.onCheckAll():e===0&&this.options.onUncheckAll())}initView(){let t;window.getComputedStyle?(t=window.getComputedStyle(this.elm).width,t==="auto"&&(t=bn(this.dropElm,"outer","width")+20)):t=bn(this.elm,"outer","width")+20,this.parentElm.style.width=`${this.options.width||t}px`,this.elm.classList.add("ms-offscreen")}events(){var e,o,i,s,l,a,c;this._bindEventService.unbindAll(["ok-button","search-input","select-all-checkbox","input-checkbox-list","group-checkbox-list","hover-highlight","arrow-highlight","option-list-scroll"]),this.clearSearchIconElm=(e=this.filterParentElm)==null?void 0:e.querySelector(".ms-icon-close"),this.searchInputElm=(o=this.dropElm)==null?void 0:o.querySelector(".ms-search input"),this.selectAllElm=(i=this.dropElm)==null?void 0:i.querySelector(`input[data-name="${this.selectAllName}"]`),this.selectGroupElms=(s=this.dropElm)==null?void 0:s.querySelectorAll(`input[data-name="${this.selectGroupName}"],span[data-name="${this.selectGroupName}"]`),this.selectItemElms=(l=this.dropElm)==null?void 0:l.querySelectorAll(`input[data-name="${this.selectItemName}"]:enabled`),this.noResultsElm=(a=this.dropElm)==null?void 0:a.querySelector(".ms-no-results");let t=p=>{p.preventDefault(),!this.getEventTarget(p).classList.contains("ms-icon-close")&&(this.options.isOpen?this.close("toggle.close"):this.open())};this.labelElm&&this._bindEventService.bind(this.labelElm,"click",p=>{this.getEventTarget(p).nodeName.toLowerCase()==="label"&&(t(p),(!this.options.filter||!this.options.isOpen)&&this.focus(),p.stopPropagation())}),this._bindEventService.bind(this.choiceElm,"click",t),this.options.onFocus&&this._bindEventService.bind(this.choiceElm,"focus",this.options.onFocus),this.options.onBlur&&this._bindEventService.bind(this.choiceElm,"blur",this.options.onBlur),this._bindEventService.bind(this.parentElm,"keydown",p=>{p.code==="Escape"&&this.handleEscapeKey()}),this.closeElm&&this._bindEventService.bind(this.closeElm,"click",p=>{p.preventDefault(),this._checkAll(!1,!0),this.initSelected(!1),this.updateSelected(),this.update(),this.options.onClear()}),this.clearSearchIconElm&&this._bindEventService.bind(this.clearSearchIconElm,"click",p=>{p.preventDefault(),this.searchInputElm&&(this.searchInputElm.value="",this.searchInputElm.focus()),this._currentHighlightIndex=-1,this.moveHighlightDown(),this.filter(),this.options.onFilterClear()}),this.searchInputElm&&(this._bindEventService.bind(this.searchInputElm,"keydown",p=>{p.code==="Tab"&&p.shiftKey&&this.close("key.shift+tab")},void 0,"search-input"),this._bindEventService.bind(this.searchInputElm,"keyup",p=>{var u,f,g;if(this.options.filterAcceptOnEnter&&["Enter","Space"].includes(p.code)&&((u=this.searchInputElm)!=null&&u.value)){if(this.options.single){let b=[];(f=this.selectItemElms)==null||f.forEach(k=>{var A;((A=k.closest("li"))==null?void 0:A.style.display)!=="none"&&b.push(k)}),b.length&&b[0].hasAttribute("data-name")&&this.setSelects([b[0].value])}else(g=this.selectAllElm)==null||g.click();this.close(`key.${p.code.toLowerCase()}`),this.focus();return}this.filter()},void 0,"search-input")),this.selectAllElm&&this._bindEventService.bind(this.selectAllElm,"click",p=>{var u;return this._checkAll((u=p.currentTarget)==null?void 0:u.checked)},void 0,"select-all-checkbox"),this.okButtonElm&&this._bindEventService.bind(this.okButtonElm,"click",p=>{t(p),p.stopPropagation()},void 0,"ok-button"),this.selectGroupElms&&this._bindEventService.bind(this.selectGroupElms,"click",p=>{let u=p.currentTarget,f=u.checked,g=fn(this.data,"_key",u.dataset.key);this._checkGroup(g,f),this.options.onOptgroupClick(so({label:g.label,selected:g.selected,data:g._data,children:g.children.map(b=>{if(b)return so({text:b.text,value:b.value,selected:b.selected,disabled:b.disabled,data:b._data})})}))},void 0,"group-checkbox-list"),this.selectItemElms&&this._bindEventService.bind(this.selectItemElms,"click",p=>{let u=p.currentTarget,f=u.checked,g=fn(this.data,"_key",u.dataset.key),b=()=>{this.options.single&&this.options.isOpen&&!this.options.keepOpen&&this.close("selection")};if(this.options.onBeforeClick(g)===!1){b();return}this._check(g,f),this.options.onClick(so({text:g.text,value:g.value,selected:g.selected,data:g._data})),b()},void 0,"input-checkbox-list"),this.lastFocusedItemKey&&this.dropElm&&((c=this.dropElm.querySelector(`li[data-key=${this.lastFocusedItemKey}]`))==null||c.focus()),this.options.navigationHighlight&&this.dropElm&&(this._bindEventService.bind(this.dropElm,"mouseover",p=>{var f,g;let u=this.getEventTarget(p).closest(".ms-select-all")||this.getEventTarget(p).closest("li");if((f=this.dropElm)!=null&&f.contains(u)&&this.lastMouseOverPosition!==`${p.clientX}:${p.clientY}`){let b=((g=this.dropElm)==null?void 0:g.querySelectorAll(We))||[],k=Array.from(b).findIndex(A=>A.dataset.key===u.dataset.key);this._currentHighlightIndex!==k&&!u.classList.contains("disabled")&&(this._currentSelectedElm=u,this._currentHighlightIndex=k,this.changeCurrentOptionHighlight(u))}this.lastMouseOverPosition=`${p.clientX}:${p.clientY}`},void 0,"hover-highlight"),this._bindEventService.bind(this.dropElm,"keydown",p=>{var u,f,g,b;switch(p.key){case"ArrowUp":p.preventDefault(),this.moveHighlightUp();break;case"ArrowDown":p.preventDefault(),this.moveHighlightDown();break;case"Escape":this.handleEscapeKey();break;case"Enter":case" ":{if(document.activeElement!==this.okButtonElm){let k=this.getEventTarget(p).closest(".ms-select-all")||this.getEventTarget(p).closest("li");if(p.key===" "&&this.options.filter||this.options.filterAcceptOnEnter&&!k)return;p.preventDefault(),(f=(u=this._currentSelectedElm)==null?void 0:u.querySelector("input"))==null||f.click(),this.options.single&&(this.choiceElm.focus(),this.lastFocusedItemKey=((g=this.choiceElm)==null?void 0:g.dataset.key)||"")}break}case"Tab":{p.preventDefault(),p.shiftKey?document.activeElement===this.okButtonElm?(this.focusSelectAllOrList(),this.highlightCurrentOption()):(this.close("key.shift+tab"),this.choiceElm.focus()):(this.changeCurrentOptionHighlight(),(b=this.okButtonElm)==null||b.focus());break}}},void 0,"arrow-highlight")),this.ulElm&&this.options.infiniteScroll&&this._bindEventService.bind(this.ulElm,"scroll",this.infiniteScrollHandler.bind(this),void 0,"option-list-scroll")}handleEscapeKey(){this.options.keepOpen||(this.close("key.escape"),this.choiceElm.focus())}infiniteScrollHandler(t,e,o){let i=!1;t&&this.getEventTarget(t)&&this.ulElm&&this.scrolledByMouse?this.getEventTarget(t).scrollTop+this.getEventTarget(t).clientHeight===this.ulElm.scrollHeight&&(i=!0):e!==void 0&&e+1===o&&(i=!0),i&&this.ulElm&&(this.virtualScroll?this.initListItems():this.ulElm.scrollTop=0,this._currentHighlightIndex=0,this.highlightCurrentOption())}open(t=0){return new Promise(e=>{t!==null&&t>=0?(clearTimeout(this.openDelayTimer),this.openDelayTimer=setTimeout(()=>{this.openDrop(),e()},t)):(this.openDrop(),e())})}openDrop(){var i,s,l,a,c;if(!this.dropElm||(i=this.choiceElm)!=null&&i.classList.contains("disabled"))return;if(this.options.isOpen=!0,this.parentElm.classList.add("ms-parent-open"),(l=(s=this.choiceElm)==null?void 0:s.querySelector("div.ms-icon-caret"))==null||l.classList.add("open"),this.dropElm.style.display="block",this.dropElm.ariaExpanded="true",(a=this.selectAllElm)!=null&&a.parentElement&&(this.selectAllElm.parentElement.style.display="inline-flex"),this.noResultsElm&&(this.noResultsElm.style.display="none"),this.getDataLength()||((c=this.selectAllElm)!=null&&c.parentElement&&(this.selectAllElm.parentElement.style.display="none"),this.noResultsElm&&(this.noResultsElm.style.display="block")),this.options.container){let p=yo(this.dropElm),u;this.options.container instanceof Node?u=this.options.container:typeof this.options.container=="string"&&(u=this.options.container==="body"?document.body:document.querySelector(this.options.container)),u.appendChild(this.dropElm),this.dropElm.style.top=`${(p==null?void 0:p.top)??0}px`,this.dropElm.style.left=`${(p==null?void 0:p.left)??0}px`,this.dropElm.style.minWidth="auto",this.dropElm.style.width=`${bn(this.parentElm,"outer","width")}px`}let t=this.options.minHeight,e=this.options.maxHeight;this.options.maxHeightUnit==="row"&&(e=bn(this.dropElm.querySelector("ul>li"),"outer","height")*this.options.maxHeight),this.ulElm??(this.ulElm=this.dropElm.querySelector("ul")),this.ulElm&&(t&&(this.ulElm.style.minHeight=`${t}px`),this.ulElm.style.maxHeight=`${e}px`),this.dropElm.querySelectorAll(".multiple").forEach(p=>{p.style.width=`${this.options.multipleWidth}px`}),this.getDataLength()&&this.options.filter?(this.searchInputElm&&(this.searchInputElm.value="",this.searchInputElm.focus()),this.filter(!0)):this.focusSelectAllOrList(),this._currentHighlightIndex<0?this.moveHighlightDown():this.highlightCurrentOption(),this.options.autoAdjustDropWidthByTextSize&&this.adjustDropWidthByText();let o=this.options.position;if(this.options.autoAdjustDropHeight){if(this.options.autoAdjustDropPosition){let{bottom:p,top:u}=lo(this.dropElm),f=this.dropElm.getBoundingClientRect().height;o=p<f&&u>p?"top":"bottom"}this.adjustDropHeight(o)}this.options.autoAdjustDropPosition&&this.adjustDropPosition(!0),this.options.onOpen()}focusSelectAllOrList(){this.selectAllElm?this.selectAllElm.focus():this.ulElm&&(this.ulElm.tabIndex=0,this.ulElm.focus())}highlightCurrentOption(){var e;let t=((e=this.dropElm)==null?void 0:e.querySelectorAll(We))||[];if(this._currentHighlightIndex<=t.length){let o=t[this._currentHighlightIndex];o&&(this.lastFocusedItemKey=o.dataset.key||"",this._currentSelectedElm=o,this.scrolledByMouse=!1,o.scrollIntoView({block:"nearest"}),this.changeCurrentOptionHighlight(o),setTimeout(()=>this.scrolledByMouse=!0,10))}}changeCurrentOptionHighlight(t){var e;t==null||t.classList.add("highlighted"),(((e=this.dropElm)==null?void 0:e.querySelectorAll(Rm))||[]).forEach(o=>{o!==t&&o.classList.remove("highlighted")})}moveHighlightDown(){var o,i;let t=((o=this.dropElm)==null?void 0:o.querySelectorAll(We))||[],e=t.length;this._currentHighlightIndex<e-1?(this._currentHighlightIndex++,(i=t[this._currentHighlightIndex])!=null&&i.classList.contains("disabled")&&this.moveHighlightDown()):this.options.infiniteScroll&&this.infiniteScrollHandler(null,this._currentHighlightIndex,e),this.highlightCurrentOption()}moveHighlightUp(){var o,i;let t=((o=this.dropElm)==null?void 0:o.querySelectorAll(We))||[],e=this.options.single?0:1;if(this.virtualScroll&&this._currentHighlightIndex<=e&&this.updateDataStart>0&&this.ulElm){let s=t[this._currentHighlightIndex+(this.options.single?0:1)],l=s==null?void 0:s.dataset.key;this.lastFocusedItemKey=l,this.ulElm.scrollTop=this.ulElm.scrollTop-(s==null?void 0:s.getBoundingClientRect().height)||10,this.isMoveUpRecalcRequired=!0;return}this._currentHighlightIndex>0&&(this._currentHighlightIndex--,(i=t[this._currentHighlightIndex])!=null&&i.classList.contains("disabled")&&this.moveHighlightUp()),this.highlightCurrentOption()}recalculateArrowMove(t){var i;let e=((i=this.dropElm)==null?void 0:i.querySelectorAll(We))||[],o=Array.from(e).findIndex(s=>s.dataset.key===this.lastFocusedItemKey);this._currentHighlightIndex=o-1,t==="down"?this.moveHighlightDown():t==="up"&&(this.moveHighlightUp(),this.isMoveUpRecalcRequired=!1)}close(t){var e,o;this.options.isOpen=!1,this.parentElm.classList.remove("ms-parent-open"),(o=(e=this.choiceElm)==null?void 0:e.querySelector("div.ms-icon-caret"))==null||o.classList.remove("open"),this.dropElm&&(this.dropElm.style.display="none",this.dropElm.ariaExpanded="false",this.options.container&&(this.parentElm.appendChild(this.dropElm),this.dropElm.style.top="auto",this.dropElm.style.left="auto")),this.options.onClose(t)}applyAsTextOrHtmlWhenEnabled(t,e){t||(t={}),this.isRenderAsHtml?t.innerHTML=typeof this.options.sanitizer=="function"?this.options.sanitizer(e):e:t.textContent=e}update(t=!1){var p;let e=this.getSelects(),o=this.getSelects("text");this.options.displayValues&&(o=e);let i=(p=this.choiceElm)==null?void 0:p.querySelector("span"),s=e.length,l=null,a=()=>{if(this.options.useSelectOptionLabel||this.options.useSelectOptionLabelToHtml){let u=e.join(this.options.displayDelimiter);return this.options.useSelectOptionLabelToHtml?Nm(u):u}return o.join(this.options.displayDelimiter)};if(i){if(s===0){let u=this.options.placeholder||"";i.classList.add("ms-placeholder"),this.applyAsTextOrHtmlWhenEnabled(i,u)}else s<this.options.minimumCountSelected?l=a():this.formatAllSelected()&&s===this.dataTotal?l=this.formatAllSelected():this.options.ellipsis&&s>this.options.minimumCountSelected?l=`${o.slice(0,this.options.minimumCountSelected).join(this.options.displayDelimiter)}...`:this.formatCountSelected(s,this.dataTotal)&&s>this.options.minimumCountSelected?l=this.formatCountSelected(s,this.dataTotal):l=a();if(l!==null&&(i==null||i.classList.remove("ms-placeholder"),this.applyAsTextOrHtmlWhenEnabled(i,l)),this.options.showClear&&this.selectClearElm){let u=l?"block":"none";this.selectClearElm.style.display=u}if(this.options.displayTitle){let u=this.options.useSelectOptionLabel||this.options.useSelectOptionLabelToHtml?"value":"text";i.title=this.getSelects(u).join(this.options.displayDelimiter)}}let c=this.getSelects();this.options.single?this.elm.value=c.length?c[0]:"":Array.from(this.elm.options).forEach(u=>{u.selected=c.some(f=>f===u.value)}),t||this.elm.dispatchEvent(new Event("change"))}updateSelected(t){var o,i,s;for(let l=this.updateDataStart;l<this.updateDataEnd;l++){let a=this.updateData[l],c=(o=this.dropElm)==null?void 0:o.querySelector(`input[data-key=${a._key}]`);if(c){c.checked=a.selected;let p=c.closest("li"),u=p==null?void 0:p.querySelector(".icon-checkbox-container div");p&&(a.selected&&!p.classList.contains("selected")?(p.classList.add("selected"),p.ariaSelected="true",u&&(u.className=`ms-icon ms-icon-${c.type==="radio"?"radio":"check"}`)):a.selected||(p.classList.remove("selected"),p.ariaSelected="false",u&&(u.className="ms-icon ms-icon-uncheck")))}}let e=((i=this.data)==null?void 0:i.filter(l=>l.visible).length)===0;if(this.selectAllElm){this.selectAllElm.ariaChecked=String(this.isAllSelected);let l=(s=this.dropElm)==null?void 0:s.querySelector(".ms-select-all .icon-checkbox-container div");if(l){let a="";this.isAllSelected?a="ms-icon-check":this.isPartiallyAllSelected?a="ms-icon-minus":a="ms-icon-uncheck",l.className=`ms-icon ${a}`}this.selectAllElm.checked=this.isAllSelected,zi(this.selectAllElm.closest("li"),!e)}zi(this.noResultsElm,e),this.virtualScroll&&(this.virtualScroll.rows=t??this.getListRows())}getData(){return this.options.data}getDataLength(){var t;return((t=this.data)==null?void 0:t.length)??0}getOptions(t=!0){let e=Object.assign({},this.options);return delete e.data,t?_o(e):this.options}refreshOptions(t){xm(this.options,t,!0)||(this.options=Object.assign(this.options,t),this.destroy(!1),this.init())}getDropElement(){return this.dropElm}getParentElement(){return this.parentElm}getSelects(t="value"){let e=[];for(let o of this.data||[])if(o.type==="optgroup"){let i=o.children.filter(s=>s==null?void 0:s.selected);if(!i.length)continue;if(t==="value"||this.options.single)e.push(...i.map(s=>t==="value"&&s._value||s[t]));else{let s=[];s.push("["),s.push(o.label),s.push(`: ${i.map(l=>l[t]).join(", ")}`),s.push("]"),e.push(s.join(""))}}else o.selected&&e.push(t==="value"&&o._value||o[t]);return e}setSelects(t,e="value",o=!1){let i=!1,s=l=>{var a;for(let c of l){let p=!1;if(e==="text"){let u=document.createElement("div");this.applyAsTextOrHtmlWhenEnabled(u,c.text),p=t.includes(((a=u.textContent)==null?void 0:a.trim())??"")}else p=t.includes(c._value||c.value),!p&&c.value===`${+c.value}`&&(p=t.includes(+c.value));c.selected!==p&&(i=!0),c.selected=p}};for(let l of this.data||[])l.type==="optgroup"?s(l.children):s([l]);i&&(this.initSelected(o),this.updateSelected(),this.update(o))}enable(){this.choiceElm&&(this.choiceElm.classList.remove("disabled"),this.choiceElm.disabled=!1)}disable(){var t;this.choiceElm&&((t=this.choiceElm)==null||t.classList.add("disabled"),this.choiceElm.disabled=!0)}check(t){let e=fn(this.data,"value",t);e&&this._check(e,!0)}uncheck(t){let e=fn(this.data,"value",t);e&&this._check(e,!1)}_check(t,e){this.options.single&&this._checkAll(!1,!0),t.selected=e,this.initSelected(),this.updateSelected(),this.update()}checkAll(){this._checkAll(!0)}uncheckAll(){this._checkAll(!1)}_checkAll(t,e){for(let o of this.data||[])o.type==="optgroup"?this._checkGroup(o,t,!0):!o.disabled&&!o.divider&&(e||o.visible)&&(o.selected=t);e||(this.initSelected(),this.updateSelected(),this.update())}_checkGroup(t,e,o){t.selected=e,t.children.forEach(i=>{i&&!i.disabled&&!i.divider&&(o||i.visible)&&(i.selected=e)}),o||(this.initSelected(),this.updateSelected(),this.update())}checkInvert(){if(!this.options.single){for(let t of this.data||[])if(t.type==="optgroup")for(let e of t.children)e&&(e.divider||(e.selected=!e.selected));else t&&!t.divider&&(t.selected=!t.selected);this.initSelected(),this.updateSelected(),this.update()}}focus(){var t;(t=this.choiceElm)==null||t.focus(),this.options.onFocus()}blur(){var t;(t=this.choiceElm)==null||t.blur(),this.options.onBlur()}refresh(){this.destroy(!1),this.init()}filter(t){var s;let e=((s=this.searchInputElm)==null?void 0:s.value.trim())??"",o=e.toLowerCase();if(this.filterText===o)return;this.filterText=o;for(let l of this.data||[])if(l.type==="optgroup")if(this.options.filterGroup){let a=`${(l==null?void 0:l.label)??""}`;if(l!=null){let c=this.options.customFilter({label:be(a.toString().toLowerCase(),this.options.diacriticParser),search:be(o,this.options.diacriticParser),originalLabel:a,originalSearch:e,row:l});l.visible=c;for(let p of l.children)p&&(p.visible=c)}}else{for(let a of l.children)if(a!=null){let c=`${(a==null?void 0:a.text)??""}`;a.visible=this.options.customFilter({text:be(c.toString().toLowerCase(),this.options.diacriticParser),search:be(o,this.options.diacriticParser),originalText:c,originalSearch:e,row:a,parent:l})}l.visible=l.children.filter(a=>a==null?void 0:a.visible).length>0}else{let a=`${(l==null?void 0:l.text)??""}`;l.visible=this.options.customFilter({text:be(a.toString().toLowerCase(),this.options.diacriticParser),search:be(o,this.options.diacriticParser),originalText:a,originalSearch:e,row:l})}let i=this.initListItems();this.initSelected(t),this.updateSelected(i),t||this.options.onFilter(e)}adjustDropHeight(t){var u,f,g,b;let e=t!=="top",o=((u=this.filterParentElm)==null?void 0:u.getBoundingClientRect().height)??0,i=((f=this.okButtonElm)==null?void 0:f.getBoundingClientRect().height)??0,s=this.options.single?0:((g=this.selectAllParentElm)==null?void 0:g.getBoundingClientRect().height)??0,l=o+i+s+5,{bottom:a,top:c}=lo(this.parentElm),p=this.options.maxHeight;if(e?p=a-l-this.options.adjustedHeightPadding:p=c-l-this.options.adjustedHeightPadding,!this.options.maxHeight||this.options.maxHeight&&p<this.options.maxHeight){let k=(b=this.dropElm)==null?void 0:b.querySelector("ul");return k&&(k.style.maxHeight=`${p}px`),!0}return!1}adjustDropPosition(t){let e="bottom";if(this.dropElm&&this.parentElm){let{bottom:o,top:i}=lo(this.dropElm),{top:s,left:l}=yo(this.parentElm),a=this.dropElm.getBoundingClientRect().height,c=this.dropElm.getBoundingClientRect().width,p=document.body.offsetWidth||window.innerWidth,u=this.parentElm.getBoundingClientRect().width;if(o>a)e="bottom";else if(a>o&&i>o){if(this.options.container){let f=s-a;f<0&&(f=0),(f>0||t)&&(e="top",this.dropElm.style.top=`${f<0?0:f}px`)}else e="top",this.dropElm.classList.add(e);this.dropElm.classList.remove("bottom")}p-c<l&&(this.dropElm.style.left=`${l-(c-u)}px`)}return e}adjustDropWidthByText(){if(this.dropElm){let t=this.parentElm.scrollWidth;(this.options.dropWidth||this.options.width)&&(t=this.options.dropWidth||this.options.width||0);let e=this.dropElm.querySelector(".ms-select-all span"),o=this.dropElm.querySelector("ul"),i=26,s=(e==null?void 0:e.clientWidth)??0+i,l=o.scrollHeight>o.clientHeight?this.getScrollbarWidth():0,a=0;this.dropElm.querySelectorAll("li label").forEach(c=>{c.scrollWidth>a&&(a=c.scrollWidth)}),a+=i+l,a<s&&(a=s),this.options.maxWidth&&a>this.options.maxWidth&&(a=this.options.maxWidth),this.options.minWidth&&a<this.options.minWidth&&(a=this.options.minWidth),(t==="100%"||+t<a)&&(this.dropElm.style.width=`${a}px`,this.dropElm.style.maxWidth=`${a}px`)}}getScrollbarWidth(){var s;let t=document.createElement("div");t.style.visibility="hidden",t.style.width="100px",document.body.appendChild(t);let e=t.offsetWidth;t.style.overflow="scroll";let o=document.createElement("div");o.style.width="100%",t.appendChild(o);let i=o.offsetWidth;return(s=t.parentNode)==null||s.removeChild(t),e-i}formatAllSelected(){return this.options.allSelectedText||this.options.formatAllSelected()}formatCountSelected(t,e){return this.options.countSelectedText?this.options.countSelectedText.replace("#",`${t}`).replace("%",`${e}`):this.options.formatCountSelected(t,e)}formatNoMatchesFound(){return this.options.noMatchesFoundText||this.options.formatNoMatchesFound()}formatOkButton(){return this.options.okButtonText||this.options.formatOkButton()}formatSelectAll(){return this.options.selectAllText||this.options.formatSelectAll()}},m=(n,t)=>typeof n=="string"?ro(document.querySelectorAll(n),t):n instanceof Node?ro([n],t):ro(n,t);function ro(n,t){let e=Array.from(n),o=[];for(let i=0;i<e.length;i++){let s=e[i];try{s._multipleSelect!==void 0&&(s._multipleSelect.destroy(),delete s._multipleSelect),s._multipleSelect=new Pm(s,t||{}),s._multipleSelect.init();let l=s._multipleSelect.getOptions(!1);l.onHardDestroy=()=>delete s._multipleSelect,l.onAfterHardDestroyed=()=>o[i]=null,o.push(s._multipleSelect)}catch(l){console.error(l)}}return o.length===1?o[0]:o}m.defaults=vt.DEFAULTS;m.locales={...cl};m.methods=vt.METHODS;typeof window<"u"&&(window.multipleSelect=m);let Hm=class{constructor(){d(this,"logElm");d(this,"ms1")}mount(){this.logElm=document.querySelector("textarea"),this.ms1=m("select",{filter:!0,showSearchClear:!0,onOpen:()=>{this.log(`onOpen event fire!
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
`)}})}log(t){this.logElm.textContent+=t,this.logElm.scrollTo(0,this.logElm.scrollHeight)}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},ml=class{constructor(){d(this,"ms",[])}mount(){this.ms=m(".multiple-select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Fm=class{constructor(){d(this,"ms",[])}mount(){this.ms=m(".multiple-select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Bm=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select",{multiple:!0,multipleWidth:70})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Um=class{constructor(){d(this,"multiMs",[]);d(this,"singleMs")}mount(){this.multiMs=m(".select"),this.singleMs=m(".data",{data:[{value:1,text:"Options 1",selected:!0},{value:2,text:"Options 2"},{value:3,text:"Options 3"}]})}unmount(){var t;this.multiMs.forEach(e=>e.destroy()),this.multiMs=[],(t=this.singleMs)==null||t.destroy(),this.singleMs=void 0}},Gm=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select")}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},jm=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Jm=class{constructor(){d(this,"btnElm");d(this,"ms",[]);d(this,"clickListener",()=>{const t=this.serialize(document.querySelector("form"));alert(t)})}mount(){this.ms=m("select"),this.btnElm=document.querySelector(".submit7"),this.btnElm.addEventListener("click",this.clickListener)}unmount(){this.btnElm.removeEventListener("click",this.clickListener),this.ms.forEach(t=>t.destroy()),this.ms=[]}serialize(t){const e=[];return t.querySelectorAll("[name]").forEach(o=>{const i=Array.from(o.selectedOptions);for(const s of i)e.push(`${o.name}=${s.value}`)}),e.length>0?e.join("&"):!1}},Wm=class{constructor(){d(this,"ms1");d(this,"ms2");d(this,"ms3");d(this,"ms4");d(this,"ms5")}mount(){this.ms1=m("#basic",{dataTest:"select1",data:[{text:"January",value:1},{text:"February",value:2},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}),this.ms2=m("#object",{dataTest:"select2",data:{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}}),this.ms3=m("#string",{dataTest:"select3",data:["January","February","March"]}),this.ms4=m("#number",{dataTest:"select4",data:[1,2,3]}),this.ms5=m("#group",{dataTest:"select5",data:[{type:"optgroup",label:"Group 1",children:[{text:"January",value:1,selected:!0},{text:"February",value:2,disabled:!0},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6}]},{type:"optgroup",label:"Group 2",children:[{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}]})}unmount(){var t,e,o,i,s;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),(s=this.ms5)==null||s.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0}};var hl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},vl={formatSelectAll(){return"[Seleccionar todo]"},formatAllSelected(){return"Todos seleccionados"},formatCountSelected(n,t){return`${n} de ${t} seleccionado`},formatNoMatchesFound(){return"No se encontraron coincidencias"},formatOkButton(){return"Cerrar"}};hl.locales["es-ES"]=vl;hl.locales;var fl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Vm={formatSelectAll(){return"[Vybrat vše]"},formatAllSelected(){return"Vše vybráno"},formatCountSelected(n,t){return`${n} z ${t} vybráno`},formatNoMatchesFound(){return"Nebylo nalezeno"},formatOkButton(){return"Zavřít"}};fl.locales["cz-CS"]=Vm;fl.locales;var bl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},qm={formatSelectAll(){return"[Vælg alle]"},formatAllSelected(){return"Alle valgt"},formatCountSelected(n,t){return`${n} af ${t} valgt`},formatNoMatchesFound(){return"Søgning uden resultat"},formatOkButton(){return"Lukke"}};bl.locales["da-DK"]=qm;bl.locales;var gl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},zm={formatSelectAll(){return"[Alles auswählen]"},formatAllSelected(){return"Alles ausgewählt"},formatCountSelected(n,t){return`${n} von ${t} ausgewählt`},formatNoMatchesFound(){return"Keine Ergebnisse"},formatOkButton(){return"Schließen"}};gl.locales["de-DE"]=zm;gl.locales;var _l=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Km={formatSelectAll(){return"[Select all]"},formatAllSelected(){return"All selected"},formatCountSelected(n,t){return`${n} of ${t} selected`},formatNoMatchesFound(){return"No matches found"},formatOkButton(){return"OK"}};_l.locales["en-US"]=Km;_l.locales;var El=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Ym={formatSelectAll(){return"[Seleccionar todo]"},formatAllSelected(){return"Todos seleccionados"},formatCountSelected(n,t){return`${n} de ${t} seleccionado`},formatNoMatchesFound(){return"No se encontraron coincidencias"},formatOkButton(){return"Cerrar"}};El.locales["es-ES"]=Ym;El.locales;var yl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Xm={formatSelectAll(){return"[Tout sélectionner]"},formatAllSelected(){return"Tous sélectionnés"},formatCountSelected(n,t){return`${n} de ${t} sélectionnés`},formatNoMatchesFound(){return"Aucun résultat"},formatOkButton(){return"Fermer"}};yl.locales["fr-FR"]=Xm;yl.locales;var wl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Qm={formatSelectAll(){return"[Összes kiválasztása]"},formatAllSelected(){return"Összes kiválasztva"},formatCountSelected(n,t){return`${n} / ${t} kiválasztva`},formatNoMatchesFound(){return"Nincs találat"},formatOkButton(){return"Bezár"}};wl.locales["hu-HU"]=Qm;wl.locales;var Sl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Zm={formatSelectAll(){return"[Seleziona tutti]"},formatAllSelected(){return"Tutti selezionati"},formatCountSelected(n,t){return`${n} di ${t} selezionati`},formatNoMatchesFound(){return"Nessun risultato"},formatOkButton(){return"Chiudere"}};Sl.locales["it-IT"]=Zm;Sl.locales;var Al=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},th={formatSelectAll(){return"[すべて選択]"},formatAllSelected(){return"すべて選択"},formatCountSelected(n,t){return`${t} 件中 ${n} 件選択`},formatNoMatchesFound(){return"見つかりません"},formatOkButton(){return"閉める"}};Al.locales["ja-JP"]=th;Al.locales;var kl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},eh={formatSelectAll(){return"[Selecionar todos]"},formatAllSelected(){return"Todos selecionados"},formatCountSelected(n,t){return`${n} de ${t} selecionado(s)`},formatNoMatchesFound(){return"Nenhum resultado encontrado"},formatOkButton(){return"Fechar"}};kl.locales["pt-BR"]=eh;kl.locales;var Ol=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},nh={formatSelectAll(){return"[Выбрать все]"},formatAllSelected(){return"Выбрано все"},formatCountSelected(n,t){return`${n} из ${t} выбрано`},formatNoMatchesFound(){return"Совпадений не найдено"},formatOkButton(){return"Закрывать"}};Ol.locales["ru-RU"]=nh;Ol.locales;var Tl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},oh={formatSelectAll(){return"[Tất cả]"},formatAllSelected(){return"Chọn tất cả"},formatCountSelected(n,t){return`Đã chọn ${n} trong ${t}`},formatNoMatchesFound(){return"Không tìm thấy kết quả."},formatOkButton(){return"Đóng"}};Tl.locales["vi-VN"]=oh;Tl.locales;var xl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},ih={formatSelectAll(){return"[全选]"},formatAllSelected(){return"已选择所有记录"},formatCountSelected(n,t){return`已从${t}条记录中选择${n}条`},formatNoMatchesFound(){return"没有找到记录"},formatOkButton(){return"关闭"}};xl.locales["zh-CN"]=ih;xl.locales;var Cl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},sh={formatSelectAll(){return"[全選]"},formatAllSelected(){return"已選擇所有記錄"},formatCountSelected(n,t){return`已從${t}條記錄中選擇${n}條`},formatNoMatchesFound(){return"沒有找到記錄"},formatOkButton(){return"关闭"}};Cl.locales["zh-TW"]=sh;Cl.locales;let lh=class{constructor(){d(this,"ms0");d(this,"ms1");d(this,"ms2")}mount(){const t=document.querySelector("#locale");t.addEventListener("change",e=>{this.updateLocale(e.target.value)}),this.ms0=m(t),this.ms1=m("#dynamic-select",{filter:!0,showOkButton:!0,dataTest:"select1"}),this.ms2=m("#fixed-import",{filter:!0,showOkButton:!0,dataTest:"select2",locale:vl})}unmount(){var t,e,o;(t=this.ms0)==null||t.destroy(),(e=this.ms1)==null||e.destroy(),(o=this.ms2)==null||o.destroy(),this.ms0=void 0,this.ms1=void 0,this.ms2=void 0}updateLocale(t){var e,o;(e=this.ms1)==null||e.destroy(),(o=this.ms1)==null||o.refreshOptions({locale:t})}},ah=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){const t=[],e=[];for(let o=0;o<1e4;o++)t.push(o);for(let o=0;o<1e4;o++)e.push({text:`<i class="fa fa-star"></i> Task ${o}`,value:o});this.ms1=m("#select1",{filter:!0,data:t,showSearchClear:!0}),this.ms2=m("#select2",{filter:!0,data:e,showSearchClear:!0,useSelectOptionLabelToHtml:!0})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},rh=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},ph=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){this.ms1=m("#single",{singleRadio:!0}),this.ms2=m("#multiple",{showOkButton:!0})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},ch=class{constructor(){d(this,"createBtnElm");d(this,"destroyBtnElm");d(this,"ms1")}mount(){this.createBtnElm=document.querySelector("#createBtn"),this.destroyBtnElm=document.querySelector("#destroyBtn"),this.createBtnElm.addEventListener("click",this.createMultipleSelect.bind(this)),this.destroyBtnElm.addEventListener("click",this.destroyMultiSelect.bind(this))}createMultipleSelect(){this.ms1=m("#select1",{name:"my-select",single:!1,useSelectOptionLabelToHtml:!0,sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0}),data:[{text:'<i class="fa fa-star"></i> January',value:1},{text:"February",value:2},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}),this.ms1.setSelects([1,3,4])}destroyMultiSelect(){var t;console.log("destroy"),(t=this.ms1)==null||t.destroy(),this.ms1=void 0}unmount(){this.destroyMultiSelect(),this.createBtnElm.removeEventListener("click",this.createMultipleSelect.bind(this)),this.destroyBtnElm.removeEventListener("click",this.destroyMultiSelect.bind(this))}},uh=class{constructor(){d(this,"ms1",[]);d(this,"ms2",[])}mount(){this.ms1=m(".select"),this.ms2=m(".data-select",{dataTest:"select1",data:[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"},{divider:!0},{value:4,text:"Option 4"},{value:5,text:"Option 5"},{value:6,text:"Option 6"}]})}unmount(){this.ms1.forEach(t=>t.destroy()),this.ms2.forEach(t=>t.destroy()),this.ms1=[],this.ms2=[]}},dh=class{constructor(){d(this,"ms1");d(this,"ms2");d(this,"ms3");d(this,"ms4");d(this,"ms5");d(this,"darkMode",!0)}mount(){var t;(t=document.querySelector(".panel-wm-content"))==null||t.classList.add("dark-mode"),this.ms1=m("select[data-test=single]",{darkMode:!0}),this.ms2=m("select[data-test=radio]",{darkMode:!0,singleRadio:!0}),this.ms3=m("select[data-test=multiple]",{darkMode:!0}),this.ms4=m("select[data-test=group]",{darkMode:!0}),this.ms5=m("select[data-test=data1]",{darkMode:!0,dataTest:"select1",filter:!0,showOkButton:!0,showClear:!0,showSearchClear:!0,data:[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"},{divider:!0},{value:4,text:"Option 4"},{value:5,text:"Option 5"},{value:6,text:"Option 6"}]})}unmount(){var t,e,o,i,s,l;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),(s=this.ms5)==null||s.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0,(l=document.querySelector(".panel-wm-content"))==null||l.classList.remove("dark-mode")}};const Ki=""+new URL("avatar1-Dfqkz6jG.png",import.meta.url).href,Yi=""+new URL("avatar2-C5pX2a2d.png",import.meta.url).href,Xi=""+new URL("avatar3-COtlxv_R.png",import.meta.url).href,Qi=""+new URL("avatar4-Dom6eBE9.png",import.meta.url).href,Zi=""+new URL("avatar5-B_ltAQdV.png",import.meta.url).href;let mh=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){this.ms1=m("[data-test=select1]",{data:[{value:"1",text:`<img alt="avatar1" src="${Ki}" class="avatar"> Eric`},{value:"2",text:`<img alt="avatar2" src="${Yi}" class="avatar"> Smith`},{value:"3",text:`<img alt="avatar3" src="${Xi}" class="avatar"> Erika`},{value:"4",text:`<img alt="avatar4" src="${Qi}" class="avatar"> Julia`},{value:"5",text:`<img alt="avatar5" src="${Zi}" class="avatar"> Catherine`}],renderOptionLabelAsHtml:!0}),this.ms2=m("[data-test=select2]",{singleRadio:!0,renderOptionLabelAsHtml:!0,textTemplate:t=>{const[e,o]=t.textContent.split("::");return`<div class="image-container"><img alt="avatar${t.value}" src="${this.getAvatarByIdx(t.value)}" class="avatar"><div class="text-container"><div class="name-section">${e}</div><div class="job-section">${o}</div></div></div>`},sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0})})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}getAvatarByIdx(t){let e;switch(+t){case 1:e=Ki;break;case 2:e=Yi;break;case 3:e=Xi;break;case 4:e=Qi;break;case 5:e=Zi;break}return e}},hh=class{},vh=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{filter:!0,showOkButton:!0,formatAllSelected(){return"Tous sélectionnés"},formatCountSelected(t,e){return`${t} de ${e} sélectionnés`},formatNoMatchesFound(){return"Aucun résultat"},formatOkButton(){return"Fermer"},formatSelectAll(){return"[Tout sélectionner]"}})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},fh=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{filter:!0}),document.querySelector("#getOptions").addEventListener("click",()=>{alert(JSON.stringify(this.ms1.getOptions(),null,4))})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},bh=class{constructor(){d(this,"ms1");d(this,"ms2");d(this,"darkMode2",!1)}mount(){var t,e;this.ms1=m(".select1",{filter:!0}),this.ms2=m(".select2",{darkMode:this.darkMode2,showOkButton:!0}),(t=document.querySelector("#refreshOptions"))==null||t.addEventListener("click",()=>this.refreshOption1()),(e=document.querySelector("#setDarkMode"))==null||e.addEventListener("click",()=>this.toggleDarkMode2())}refreshOption1(){var t;(t=this.ms1)==null||t.refreshOptions({filter:!1})}toggleDarkMode2(){var t;this.darkMode2=!this.darkMode2,(t=this.ms2)==null||t.refreshOptions({darkMode:this.darkMode2})}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0,(o=document.querySelector("#refreshOptions"))==null||o.removeEventListener("click",()=>this.refreshOption1()),(i=document.querySelector("#setDarkMode"))==null||i.removeEventListener("click",()=>this.toggleDarkMode2())}},gh=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{filter:!0}),document.querySelector("#setSelectsBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.setSelects([1,3])}),document.querySelector("#getSelectsBtn").addEventListener("click",()=>{var t,e;alert(`Selected values: ${(t=this.ms1)==null?void 0:t.getSelects()}`),alert(`Selected texts: ${(e=this.ms1)==null?void 0:e.getSelects("text")}`)}),document.querySelector("#setSelectsBtn2").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.setSelects(["February","April"],"text")}),document.querySelector("#getSelectsBtn2").addEventListener("click",()=>{var t;alert(`Selected values: ${(t=this.ms1)==null?void 0:t.getSelects("text")}`)})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},_h=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select"),document.querySelector("#enableBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.enable()}),document.querySelector("#disableBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.disable()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Eh=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select"),document.querySelector("#openBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.open()}),document.querySelector("#closeBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.close()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},yh=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select"),document.querySelector("#checkBtn").addEventListener("click",()=>{for(const t of this.ms)t.check(2)}),document.querySelector("#uncheckBtn").addEventListener("click",()=>{for(const t of this.ms)t.uncheck(2)})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},wh=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select"),document.querySelector("#checkAllBtn").addEventListener("click",()=>{for(const t of this.ms)t.checkAll()}),document.querySelector("#uncheckAllBtn").addEventListener("click",()=>{for(const t of this.ms)t.uncheckAll()})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Sh=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select"),document.querySelector("#checkInvert").addEventListener("click",()=>{for(const t of this.ms)t.checkInvert()})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Ah=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select"),document.querySelector("#focusBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.focus()}),document.querySelector("#blurBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.blur()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},kh=class{constructor(){d(this,"ms1")}mount(){const t=document.querySelector("select");this.ms1=m(t),document.querySelector("#refreshAdd").addEventListener("click",()=>{var a;const e=document.querySelector("#refreshInput"),o=document.querySelector("#refreshSelected"),i=document.querySelector("#refreshDisabled"),s=e.value.trim(),l=document.createElement("option");if(l.value=s,l.text=s,!s){e.focus();return}o.checked&&(l.selected=!0),i.checked&&(l.disabled=!0),e.value="",t.appendChild(l),(a=this.ms1)==null||a.refresh()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Oh=class{constructor(){d(this,"buildBtnElm");d(this,"destroyBtnElm");d(this,"ms1")}mount(){this.buildBtnElm=document.querySelector("#buildBtn"),this.destroyBtnElm=document.querySelector("#destroyBtn"),this.destroyBtnElm.addEventListener("click",this.destroyMultiSelect.bind(this)),this.buildBtnElm.addEventListener("click",this.createMultipleSelect.bind(this)),this.ms1=m("select")}createMultipleSelect(){this.ms1=m("select")}destroyMultiSelect(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=null}unmount(){this.destroyMultiSelect(),this.buildBtnElm.removeEventListener("click",this.destroyMultiSelect.bind(this)),this.destroyBtnElm.removeEventListener("click",this.createMultipleSelect.bind(this))}},Th=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{filter:!0}),document.querySelector("#getData").addEventListener("click",()=>{console.log("tt",JSON.stringify(this.ms1.getData())),alert(JSON.stringify(this.ms1.getData(),null,4))})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},xh=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){this.ms1=m("#select1"),this.ms2=m("#select2",{placeholder:"Here is the placeholder via javascript"})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},Ch=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select",{singleRadio:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Dh=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{selectAll:!1})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Nh=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{multiple:!0,hideOptgroupCheckboxes:!0,multipleWidth:70})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Mh=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{multiple:!0,width:500,multipleWidth:70,dropWidth:580})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Lh=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{maxHeight:140})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},$h=class{constructor(){d(this,"ms",[])}mount(){const t=document.querySelector("#number");this.ms=m("select",{maxHeight:+t.value,maxHeightUnit:"row"}),t.addEventListener("change",()=>{this.ms.forEach(e=>{e.refreshOptions({maxHeight:+t.value,maxHeightUnit:"row"})})})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Ih=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{position:"top"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Rh=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{displayValues:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Ph=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{displayTitle:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Hh=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{displayDelimiter:" | "})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Fh=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{minimumCountSelected:8})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Bh=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{ellipsis:!0,minimumCountSelected:5})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Uh=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{isOpen:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Gh=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{keepOpen:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},jh=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{openOnHover:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Jh=class{constructor(){d(this,"ms1");d(this,"ms2");d(this,"ms3");d(this,"ms4")}mount(){this.ms1=m(".select1"),this.ms2=m(".select2"),this.ms3=m(".select3",{container:".my-container"}),this.ms4=m(".select4",{autoAdjustDropPosition:!0,container:"body"})}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},Wh=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select",{filter:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Vh=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{filter:!0,filterGroup:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},qh=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{filter:!0,filterPlaceholder:"The filter placeholder"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},zh=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select",{filter:!0,filterAcceptOnEnter:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Kh=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select",{filterByDataLength:10})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Yh=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{filter:!0,customFilter:({text:t,search:e,originalText:o,originalSearch:i})=>document.querySelector("input").checked?o.indexOf(i)===0:t.indexOf(e)===0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Xh=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select",{showClear:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Qh=class{constructor(){d(this,"ms",[])}mount(){this.ms.push(m(".select1",{showOkButton:!0})),this.ms.push(m(".select2",{showOkButton:!0})),this.ms.push(m(".select3",{showOkButton:!0,filter:!0})),this.ms.push(m(".select4",{showOkButton:!0}))}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Zh=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){this.ms1=m('[data-test="select3"]',{cssStyler:t=>+((t==null?void 0:t.value)??0)==2?{backgroundColor:"#6fbeff",color:"#0014ff",fontStyle:"italic"}:+((t==null?void 0:t.value)??0)==4?{backgroundColor:"#972727",color:"#fff"}:null}),this.ms2=m('[data-test="select4"]',{cssStyler:t=>(t==null?void 0:t.type)==="optgroup"?{color:"#787878",fontWeight:"normal"}:+((t==null?void 0:t.value)??0)==3?{color:"purple",textDecoration:"underline"}:null})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},tv=class{constructor(){d(this,"ms1");d(this,"ms2");d(this,"btnEnableElm");d(this,"btnDisableElm")}mount(){this.ms1=m("#basic",{filter:!0,displayTitle:!0,renderOptionLabelAsHtml:!0,textTemplate:t=>`<i class="fa fa-star"></i>${t.innerHTML}`,customFilter:({search:t,text:e})=>{var i;const o=document.createElement("div");return o.innerHTML=e,((i=o.textContent)==null?void 0:i.includes(t))??!0},sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms2=m("#from-data",{dataTest:"select1",displayTitle:!0,renderOptionLabelAsHtml:!0,data:[{value:'50"',text:'50"'},{value:"44'",text:"44'"},{value:"33",text:'<span style="font-weight:bold">33</span>'}],sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.btnEnableElm=document.querySelector("#enableRenderHtml"),this.btnEnableElm.addEventListener("click",()=>this.renderAsHtmlHandler(!0)),this.btnDisableElm=document.querySelector("#disableRenderHtml"),this.btnDisableElm.addEventListener("click",()=>this.renderAsHtmlHandler(!1))}renderAsHtmlHandler(t){var e,o;(e=this.ms1)==null||e.refreshOptions({renderOptionLabelAsHtml:t}),(o=this.ms2)==null||o.refreshOptions({renderOptionLabelAsHtml:t})}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0,(o=this.btnEnableElm)==null||o.removeEventListener("click",()=>this.renderAsHtmlHandler(!0)),(i=this.btnDisableElm)==null||i.removeEventListener("click",()=>this.renderAsHtmlHandler(!1))}},ev=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{renderOptionLabelAsHtml:!0,labelTemplate:t=>`<i class="fa fa-star"></i>${t.getAttribute("label")}`,sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0})})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},nv=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select",{autoAdjustDropPosition:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},ov=class{constructor(){d(this,"ms1");d(this,"ms2");d(this,"ms3");d(this,"ms4")}mount(){this.ms1=m("#select1",{autoAdjustDropWidthByTextSize:!0,autoAdjustDropHeight:!0,position:"top",showOkButton:!0,sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms2=m("#select2",{autoAdjustDropHeight:!0,position:"top",showOkButton:!0,sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms3=m("#select3",{autoAdjustDropHeight:!0,filter:!0,position:"top",sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms4=m("#select4")}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},iv=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){this.ms1=m("#select1",{useSelectOptionLabel:!0}),this.ms2=m("#select2",{useSelectOptionLabelToHtml:!0,sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0}),data:[{text:'<i class="fa fa-star"></i> January',value:'<i class="fa fa-star"></i>1',selected:!0},{text:"February",value:"2"},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},sv=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("#select1",{placeholder:'Placeholder with cross-site scripting code...<img src="not-found" onerror=alert("Hacked")>',sanitizer:t=>typeof t=="string"?decodeURIComponent(t).replace(/(\b)(on[a-z]+)(\s*)=|javascript:([^>]*)[^>]*|(<\s*)(\/*)script([<>]*).*(<\s*)(\/*)script(>*)|(&lt;)(\/*)(script|script defer)(.*)(&gt;|&gt;">)/gi,""):t})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},lv=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select",{classes:"form-control",classPrefix:"form-control"})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},av=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select",{filter:!0,showSearchClear:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}};const ts={a:"ÀÁÂÃÄÅàáâãäåĀāąĄ",c:"ÇçćĆčČ",d:"đĐďĎ",e:"ÈÉÊËèéêëěĚĒēęĘ",i:"ÌÍÎÏìíîïĪī",l:"łŁ",n:"ÑñňŇńŃ",o:"ÒÓÔÕÕÖØòóôõöøŌō",r:"řŘ",s:"ŠšśŚ",t:"ťŤ",u:"ÙÚÛÜùúûüůŮŪū",y:"ŸÿýÝ",z:"ŽžżŻźŹ"};let rv=class{constructor(){d(this,"ms1");d(this,"ms2");d(this,"inLogElm");d(this,"outLogElm")}mount(){this.inLogElm=document.querySelector("input.in-log"),this.outLogElm=document.querySelector("input.out-log"),this.ms1=m("#select1",{filter:!0,showSearchClear:!0,filterPlaceholder:'🔎︎ search with "é", "û" or simply "u"',diacriticParser:t=>{const e=t.split("").map(o=>Object.keys(ts).find(i=>ts[i].includes(o))||o).join("");return this.inLogElm.value=t,this.outLogElm.value=e,e}}),this.ms2=m("#select2",{filter:!0,showSearchClear:!0,filterPlaceholder:'🔎︎ search with "é", "û" or simply "u"'})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},pv=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){const t=[],e=[];for(let o=1;o<=25;o++)t.push({text:`Title ${o}`,value:o});for(let o=1;o<=2e3;o++)e.push({text:`<i class="fa fa-star"></i> Task ${o}`,value:o});this.ms1=m("#select1",{data:t,infiniteScroll:!0}),this.ms2=m("#select2",{filter:!0,data:e,showSearchClear:!0,useSelectOptionLabelToHtml:!0,infiniteScroll:!0})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},cv=class{constructor(){d(this,"ms1");d(this,"ms2");d(this,"ms3");d(this,"ms4")}mount(){this.ms1=m("select[data-test=select1]"),this.ms2=m("select[data-test=select2]"),this.ms3=m("select[data-test=select3]"),this.ms4=m("select[data-test=select4]",{filter:!0})}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},uv=class{constructor(){d(this,"pageContentElm",null);d(this,"ms1");d(this,"ms2");d(this,"ms3");d(this,"ms4");d(this,"ms5");d(this,"darkMode",!0)}mount(){var t,e;this.pageContentElm=document.querySelector(".panel-wm-content"),(t=this.pageContentElm)==null||t.classList.add("dark-mode"),(e=document.querySelector("#setDarkMode"))==null||e.addEventListener("click",()=>this.toggleDarkMode()),this.ms1=m("select[data-test=single]",{darkMode:!0}),this.ms2=m("select[data-test=radio]",{darkMode:!0,singleRadio:!0}),this.ms3=m("select[data-test=multiple]",{darkMode:!0}),this.ms4=m("select[data-test=group]",{darkMode:!0}),this.ms5=m("select[data-test=data1]",{darkMode:!0,dataTest:"select1",filter:!0,showOkButton:!0,showClear:!0,showSearchClear:!0,data:[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"},{divider:!0},{value:4,text:"Option 4"},{value:5,text:"Option 5"},{value:6,text:"Option 6"}]})}toggleDarkMode(){var t,e,o,i,s;if(this.darkMode=!this.darkMode,(t=this.ms1)==null||t.refreshOptions({darkMode:this.darkMode}),(e=this.ms2)==null||e.refreshOptions({darkMode:this.darkMode}),(o=this.ms3)==null||o.refreshOptions({darkMode:this.darkMode}),(i=this.ms4)==null||i.refreshOptions({darkMode:this.darkMode}),(s=this.ms5)==null||s.refreshOptions({darkMode:this.darkMode}),this.pageContentElm){const l=this.darkMode?"add":"remove";this.pageContentElm.classList[l]("dark-mode")}}unmount(){var t,e,o,i,s,l,a;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),(s=this.ms5)==null||s.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0,(l=this.pageContentElm)==null||l.classList.remove("dark-mode"),(a=document.querySelector("#setDarkMode"))==null||a.removeEventListener("click",()=>this.toggleDarkMode())}};class dv{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{labelId:"custom-label"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}}const es=[{name:"getting-started",view:"/src/getting-started.html",viewModel:hh,title:"Getting Started"},{name:"examples",view:"/src/examples/example01.html",viewModel:ml,title:"Examples"}],ns=[{name:"Welcomes",routes:[{name:"example01",view:"/src/examples/example01.html",viewModel:ml,title:"Single Select"},{name:"example02",view:"/src/examples/example02.html",viewModel:Fm,title:"Multiple Select"},{name:"example03",view:"/src/examples/example03.html",viewModel:Bm,title:"Multiple Items"},{name:"example04",view:"/src/examples/example04.html",viewModel:Um,title:"Auto Width"},{name:"example05",view:"/src/examples/example05.html",viewModel:Gm,title:"Disabled Select"},{name:"example06",view:"/src/examples/example06.html",viewModel:jm,title:"Selected/Disabled Options"},{name:"example07",view:"/src/examples/example07.html",viewModel:Jm,title:"Submit Select"},{name:"example08",view:"/src/examples/example08.html",viewModel:Wm,title:"The Data"},{name:"example09",view:"/src/examples/example09.html",viewModel:lh,title:"Locale"},{name:"example10",view:"/src/examples/example10.html",viewModel:ah,title:"Large Select (Virtual Scroll)"},{name:"example11",view:"/src/examples/example11.html",viewModel:rh,title:"Themes / Sizes"},{name:"example12",view:"/src/examples/example12.html",viewModel:ph,title:"Checkbox/Radio Icons"},{name:"example13",view:"/src/examples/example13.html",viewModel:ch,title:"Dynamically Create Select"},{name:"example14",view:"/src/examples/example14.html",viewModel:uh,title:"The Divider"},{name:"example15",view:"/src/examples/example15.html",viewModel:dh,title:"Dark Mode"},{name:"example16",view:"/src/examples/example16.html",viewModel:mh,title:"Template with Images"}]},{name:"Options",routes:[{name:"options01",view:"/src/options/options01.html",viewModel:xh,title:"The Placeholder"},{name:"options02",view:"/src/options/options02.html",viewModel:Ch,title:"Single Radio"},{name:"options03",view:"/src/options/options03.html",viewModel:Dh,title:"Hide Select All"},{name:"options04",view:"/src/options/options04.html",viewModel:Nh,title:"Hide Optgroup Checkboxes"},{name:"options05",view:"/src/options/options05.html",viewModel:Mh,title:"Custom Dropdown Width"},{name:"options06",view:"/src/options/options06.html",viewModel:Lh,title:"Max Height"},{name:"options07",view:"/src/options/options07.html",viewModel:$h,title:"Max Height Unit"},{name:"options08",view:"/src/options/options08.html",viewModel:Ih,title:"The Position"},{name:"options09",view:"/src/options/options09.html",viewModel:Rh,title:"Display Values"},{name:"options10",view:"/src/options/options10.html",viewModel:Ph,title:"Display Title"},{name:"options11",view:"/src/options/options11.html",viewModel:Hh,title:"Display Delimiter"},{name:"options12",view:"/src/options/options12.html",viewModel:Fh,title:"Minimum Count Selected"},{name:"options13",view:"/src/options/options13.html",viewModel:Bh,title:"The Ellipsis"},{name:"options14",view:"/src/options/options14.html",viewModel:Uh,title:"Is Open"},{name:"options15",view:"/src/options/options15.html",viewModel:Gh,title:"Keep Open"},{name:"options16",view:"/src/options/options16.html",viewModel:jh,title:"Open On Hover"},{name:"options17",view:"/src/options/options17.html",viewModel:Jh,title:"The Container"},{name:"options18",view:"/src/options/options18.html",viewModel:Wh,title:"The Filter"},{name:"options19",view:"/src/options/options19.html",viewModel:Vh,title:"Filter Only Optgroup"},{name:"options20",view:"/src/options/options20.html",viewModel:qh,title:"Filter Placeholder"},{name:"options21",view:"/src/options/options21.html",viewModel:zh,title:"Filter Accept On Enter"},{name:"options22",view:"/src/options/options22.html",viewModel:Kh,title:"Filter By Data Length"},{name:"options23",view:"/src/options/options23.html",viewModel:Yh,title:"Custom Filter"},{name:"options24",view:"/src/options/options24.html",viewModel:Xh,title:"Show Clear"},{name:"options25",view:"/src/options/options25.html",viewModel:Qh,title:"Show OK Button"},{name:"options26",view:"/src/options/options26.html",viewModel:Zh,title:"The Styler"},{name:"options27",view:"/src/options/options27.html",viewModel:tv,title:"Text Template"},{name:"options28",view:"/src/options/options28.html",viewModel:ev,title:"Label Template"},{name:"options29",view:"/src/options/options29.html",viewModel:nv,title:"Auto-Adjust Drop Position"},{name:"options30",view:"/src/options/options30.html",viewModel:ov,title:"Auto-Adjust Drop Height/Width"},{name:"options31",view:"/src/options/options31.html",viewModel:iv,title:"Use Select Option as Label"},{name:"options32",view:"/src/options/options32.html",viewModel:sv,title:"Sanitizer"},{name:"options33",view:"/src/options/options33.html",viewModel:lv,title:"Classes"},{name:"options34",view:"/src/options/options34.html",viewModel:av,title:"Show Search Clear"},{name:"options35",view:"/src/options/options35.html",viewModel:rv,title:"Custom Diacritic Parser"},{name:"options36",view:"/src/options/options36.html",viewModel:pv,title:"Infinite Scroll"},{name:"options37",view:"/src/options/options37.html",viewModel:cv,title:"Navigation Highlight"},{name:"options38",view:"/src/options/options38.html",viewModel:uv,title:"Dark Mode"},{name:"options39",view:"/src/options/options39.html",viewModel:dv,title:"Label Id (aria-labelledby)"}]},{name:"Methods",routes:[{name:"methods01",view:"/src/methods/methods01.html",viewModel:fh,title:"The getOptions"},{name:"methods02",view:"/src/methods/methods02.html",viewModel:bh,title:"The refreshOptions"},{name:"methods03",view:"/src/methods/methods03.html",viewModel:gh,title:"The setSelects/getSelects"},{name:"methods04",view:"/src/methods/methods04.html",viewModel:_h,title:"The enable/disable"},{name:"methods05",view:"/src/methods/methods05.html",viewModel:Eh,title:"The open/close"},{name:"methods06",view:"/src/methods/methods06.html",viewModel:yh,title:"The check/uncheck"},{name:"methods07",view:"/src/methods/methods07.html",viewModel:wh,title:"The checkAll/uncheckAll"},{name:"methods08",view:"/src/methods/methods08.html",viewModel:Sh,title:"The checkInvert"},{name:"methods09",view:"/src/methods/methods09.html",viewModel:Ah,title:"The focus/blur"},{name:"methods10",view:"/src/methods/methods10.html",viewModel:kh,title:"The refresh"},{name:"methods11",view:"/src/methods/methods11.html",viewModel:Oh,title:"The destroy"},{name:"methods12",view:"/src/methods/methods12.html",viewModel:Th,title:"The getData"}]},{name:"Events",routes:[{name:"events",view:"/src/events/events.html",viewModel:Hm,title:"The Events"}]},{name:"I18N",routes:[{name:"i18n",view:"/src/i18n/i18n.html",viewModel:vh,title:"The i18n"}]}],mv=Object.assign({"/src/events/events.html":Fl,"/src/examples/example01.html":Bl,"/src/examples/example02.html":Ul,"/src/examples/example03.html":Gl,"/src/examples/example04.html":jl,"/src/examples/example05.html":Jl,"/src/examples/example06.html":Wl,"/src/examples/example07.html":Vl,"/src/examples/example08.html":ql,"/src/examples/example09.html":zl,"/src/examples/example10.html":Kl,"/src/examples/example11.html":Yl,"/src/examples/example12.html":Xl,"/src/examples/example13.html":Ql,"/src/examples/example14.html":Zl,"/src/examples/example15.html":ta,"/src/examples/example16.html":ea,"/src/getting-started.html":na,"/src/i18n/i18n.html":oa,"/src/main.html":os,"/src/methods/methods01.html":ia,"/src/methods/methods02.html":sa,"/src/methods/methods03.html":la,"/src/methods/methods04.html":aa,"/src/methods/methods05.html":ra,"/src/methods/methods06.html":pa,"/src/methods/methods07.html":ca,"/src/methods/methods08.html":ua,"/src/methods/methods09.html":da,"/src/methods/methods10.html":ma,"/src/methods/methods11.html":ha,"/src/methods/methods12.html":va,"/src/options/options01.html":fa,"/src/options/options02.html":ba,"/src/options/options03.html":ga,"/src/options/options04.html":_a,"/src/options/options05.html":Ea,"/src/options/options06.html":ya,"/src/options/options07.html":wa,"/src/options/options08.html":Sa,"/src/options/options09.html":Aa,"/src/options/options10.html":ka,"/src/options/options11.html":Oa,"/src/options/options12.html":Ta,"/src/options/options13.html":xa,"/src/options/options14.html":Ca,"/src/options/options15.html":Da,"/src/options/options16.html":Na,"/src/options/options17.html":Ma,"/src/options/options18.html":La,"/src/options/options19.html":$a,"/src/options/options20.html":Ia,"/src/options/options21.html":Ra,"/src/options/options22.html":Pa,"/src/options/options23.html":Ha,"/src/options/options24.html":Fa,"/src/options/options25.html":Ba,"/src/options/options26.html":Ua,"/src/options/options27.html":Ga,"/src/options/options28.html":ja,"/src/options/options29.html":Ja,"/src/options/options30.html":Wa,"/src/options/options31.html":Va,"/src/options/options32.html":qa,"/src/options/options33.html":za,"/src/options/options34.html":Ka,"/src/options/options35.html":Ya,"/src/options/options36.html":Xa,"/src/options/options37.html":Qa,"/src/options/options38.html":Za,"/src/options/options39.html":tr});class hv{constructor(){d(this,"loading",!0);d(this,"currentModel");d(this,"currentRouter");d(this,"defaultRouteName","getting-started");d(this,"stateBangChar","#/");d(this,"baseUrl",window.location.origin+window.location.pathname);d(this,"viewModelObj",{})}async init(){const t=window.location;document.querySelector("#app").innerHTML=ft.sanitize(os,{RETURN_TRUSTED_TYPE:!0});let e=t.hash.replace(this.stateBangChar,"");(!e||e==="/"||e==="#")&&(e=this.defaultRouteName),this.createRouteLinks(),this.loadRoute(e),Array.from(document.querySelectorAll(".panel-wm-left a.nav-link,.navbar-nav a.nav-link")).forEach(o=>{e.includes(o.id)&&o.classList.add("active")}),window.onpopstate=()=>{const i=window.location.hash.replace(this.stateBangChar,"");this.removeAllActiveLinks();const s=document.querySelector(`#${i}`);s&&(s.scrollIntoView(),s.classList.add("active")),this.loadRoute(i||this.defaultRouteName,!1)}}createRouteLinks(){var t,e,o;for(const i of es){const s=F("li",{className:"nav-item"});F("a",{id:i.name,className:"nav-link",textContent:i.title},s).addEventListener("click",this.clickEventListener.bind(this)),(t=document.querySelector(".navbar-nav"))==null||t.appendChild(s)}for(const i of ns){const s=F("li",{className:"m-1"});F("p",{className:"navbar-vertical-label mb-1",textContent:i.name},s),(e=document.querySelector(".nav-pills"))==null||e.appendChild(s);for(const l of i.routes){const a=F("li",{className:"nav-item"}),c=F("a",{id:l.name,className:"nav-link",textContent:l.title});c.addEventListener("click",this.clickEventListener.bind(this)),a.appendChild(c),(o=document.querySelector(".nav-pills"))==null||o.appendChild(a)}}}async loadRoute(t,e=!0){var s;const o=document.querySelector(".panel-wm-content");ze(o),o.classList.add("cloak");let i=es.find(l=>l.name===t);if((i==null?void 0:i.name)==="examples"){const l=document.querySelector(".nav-pills .nav-item a.nav-link");l==null||l.classList.add("active")}else for(const l of ns){const a=l.routes.find(c=>c.name===t);a&&(i=a)}if(this.currentModel&&this.unmountCurrentVM(this.currentModel,this.currentRouter),i){this.currentRouter=i,document.querySelector(".panel-wm-content").innerHTML=ft.sanitize(mv[i.view],{RETURN_TRUSTED_TYPE:!0});const l=new i.viewModel;this.currentModel=l,window[i.name]=(s=l.mount)==null?void 0:s.call(l),window.onbeforeunload=()=>{var a;o.classList.add("cloak"),(a=l.unmount)==null||a.call(l),this.removeAllActiveLinks(!0),this.unmountAll(),i!=null&&i.name&&delete window[i.name]}}e&&window.history.pushState({},t,`${this.baseUrl}${this.stateBangChar}${t}`),document.title=`Multiple-Select-Vanilla · ${t}`,o.classList.remove("cloak")}async clickEventListener(t){this.removeAllActiveLinks();const e=t.target;e.classList.toggle("active"),this.loadRoute(e.id)}removeAllActiveLinks(t=!1){document.querySelectorAll(".panel-wm-left a.nav-link,.navbar-nav a.nav-link").forEach(e=>{e.classList.remove("active"),t&&e.removeEventListener("click",this.clickEventListener.bind(this))})}unmountCurrentVM(t,e){var o;(o=t.unmount)==null||o.call(t),e&&delete window[e.name]}unmountAll(){for(const t of Object.keys(this.viewModelObj)){const e=this.viewModelObj[t];if(typeof(e==null?void 0:e.unmount)=="function"){e==null||e.unmount();for(const o of Object.keys(e))e[o]=null}window[t]=null,this.viewModelObj[t]=null,delete window[t],delete this.viewModelObj[t]}}}const vv=new hv;vv.init();
