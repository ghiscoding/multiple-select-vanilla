var Bl=Object.defineProperty;var Gl=(n,t,e)=>t in n?Bl(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var c=(n,t,e)=>Gl(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Ul=`<div class="row mb-2">
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
`,Jl=`<div class="row">
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
`,jl=`<div class="row">
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
`,zl=`<div class="row mb-2">
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
`,Wl=`<div class="row mb-2">
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
`,Vl=`<div class="row mb-2">
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
`,ql=`<div class="row mb-2">
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
`,Kl=`<div class="row mb-2">
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
`,Yl=`<div class="row mb-2">
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
`,Xl=`<div class="row mb-2">
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
        <option value="id-ID">Indonesian</option>
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

  <div class="my-5 row">
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
`,Ql=`<div class="row mb-2">
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
</div>`,Zl=`<div class="row mb-2">
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
`,ta=`<div class="row mb-2">
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
`,ea=`<div class="row mb-2">
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
      <button id="modifyBtn" class="btn btn-outline-secondary btn-sm">Modify Data</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-3 text-end">Use Select Option Label & Render HTML</label>

    <div class="col-sm-9">
      <select id="select1" class="full-width" data-test="select1"></select>
    </div>
  </div>
</div>
`,na=`<div class="row mb-2">
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
`,oa=`<div class="example15-container">
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
`,ia=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Use Images as Text Template
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example16.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example16.ts"
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
`,sa=`<div class="row mb-2">
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
      The project now ships as ESM-Only, if you still wish to use the legacy CommonJS (CJS) format with <code>require()</code>,
      then use previous 3.x version.
    </p>

    <div style="background: #f7f7f7; padding: 10px">
      <pre>
&lt;!-- Latest compiled and minified CSS --&gt;
&lt;link href=&quot;<span style="color:#0a3069">https://cdn.jsdelivr.net/npm/multiple-select-vanilla@4.1.0/dist/styles/css/multiple-select.css</span>&quot; rel=&quot;<span style="color:#0a3069">stylesheet</span>&quot;&gt;

&lt;!-- (ESM requires <span style="color:#d63384">type=&quot;module&quot;</span>) Latest compiled and minified JavaScript --&gt;
&lt;script type=&quot;module&quot; src=&quot;<span style="color:#0a3069">https://cdn.jsdelivr.net/npm/multiple-select-vanilla@4.1.0/dist/browser/multiple-select.js</span>&quot;&gt;&lt;/script&gt;
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

  <h5>ESM <code>import from</code></h5>
    <p>
      The library provides both CommonJS or ESM, see the example below:
    </p>
    <div style="background: #f7f7f7; padding: 10px">
<pre>
// ESM
<span style="color:#cf222e">import</span> { multipleSelect } <span style="color:#cf222e">from</span> <span style="color:#0a3069">'multiple-select-vanilla'</span>;
<span style="color:#6639ba">multipleSelect</span>(<span style="color:#0a3069">'.multiple-select'</span>, {<span style="color:#a0a1a7">/*...*/</span>});
</pre>
    </div>
  
  <br>

  <section>
    <h5>CSS / SASS Styling Themes</h5>
    <p>Load default or Bootstrap Theme style via either the <code>@use</code> (modern) or <code>@import</code> (legacy)</p>

    1- with modern <code>@use</code> approach
    <div style="background: #f7f7f7; padding: 10px">
<pre>
  <span style="color:#cf222e">@use</span> <span style="color:#0a3069">'multiple-select-vanilla/dist/styles/sass/multiple-select.scss'</span> <span style="color:#cf222e">with</span> (
    <span style="color:#986801">$ms-primary-color</span>: red,
    <span style="color:#986801">$ms-checkbox-color</span>: red,
  );
</pre>
    </div>

    2- with legacy <code>@import</code> approach
    <div style="background: #f7f7f7; padding: 10px">
<pre>
  <span style="color:#986801">$ms-primary-color</span>: red;
  <span style="color:#986801">$ms-checkbox-color</span>: red;
  <span style="color:#cf222e">@import</span> <span style="color:#0a3069">'multiple-select-vanilla/dist/styles/sass/multiple-select.scss'</span>;
</pre>
    </div>

    3- same goes for the Bootstrap Theme
    <div style="background: #f7f7f7; padding: 10px">
<pre>
  <span style="color:#cf222e">@use</span> <span style="color:#0a3069">'multiple-select-vanilla/dist/styles/sass/themes/bootstrap.scss'</span> <span style="color:#cf222e">with</span> (
    <span style="color:#986801">$ms-parent-form-control-padding</span>: 5px,
    <span style="color:#986801">$ms-primary-color</span>: orange,
    <span style="color:#986801">$ms-checkbox-color</span>: orange,
  );
</pre>
    </div>
  </section>
</div>
`,la=`<div class="row mb-2">
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
`,ss=`<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
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
`,aa=`<div class="row mb-2">
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
`,ra=`<div class="row mb-2">
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
`,pa=`<div class="row mb-2">
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
`,ca=`<div class="row mb-2">
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
`,ua=`<div class="row mb-2">
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
`,da=`<div class="row mb-2">
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
`,ma=`<div class="row mb-2">
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
`,ha=`<div class="row mb-2">
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
`,va=`<div class="row mb-2">
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
`,fa=`<div class="row mb-2">
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
`,ba=`<div class="row mb-2">
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
`,ga=`<div class="row mb-2">
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
`,_a=`<div class="row mb-2">
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
`,Ea=`<div class="row mb-2">
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
`,ya=`<div class="row mb-2">
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
`,wa=`<div class="row mb-2">
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
`,Sa=`<div class="row mb-2">
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
`,Aa=`<div class="row mb-2">
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
`,Oa=`<div class="row mb-2">
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
`,ka=`<div class="row mb-2">
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
`,Ta=`<div class="row mb-2">
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
`,xa=`<div class="row mb-2">
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
`,Ca=`<div class="row mb-2">
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
`,Da=`<div class="row mb-2">
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
`,Ma=`<div class="row mb-2">
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
`,La=`<div class="row mb-2">
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
`,Na=`<div class="row mb-2">
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
`,$a=`<div class="row mb-2">
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
`,Ia=`<div class="row mb-2">
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
`,Ra=`<div class="row mb-2">
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
`,Pa=`<div class="row mb-2">
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
`,Fa=`<div class="row mb-2">
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
`,Ha=`<div class="row mb-2">
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
`,Ba=`<div class="row mb-2">
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
`,Ga=`<div class="row mb-2">
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
`,Ua=`<div class="row mb-2">
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
`,Ja=`<div class="row mb-2">
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
`,ja=`<div class="row mb-2">
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
`,za=`<div class="row mb-2">
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
`,Wa=`<div class="row mb-2">
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
`,Va=`<div class="row mb-2">
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
`,qa=`<div class="row mb-2">
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
`,Ka=`<div class="row mb-2">
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
`,Ya=`<div class="row mb-2">
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
`,Xa=`<div class="row mb-2">
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
`,Qa=`<div class="row mb-2">
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
`,Za=`<div class="row mb-2">
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
`,tr=`<div class="row mb-2">
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
</div>`,er=`<div class="row">
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
`,nr=`<div class="example15-container">
  <div class="row mb-2">
    <div class="col-md-12 title-desc">
      <h2 class="bd-title">
        Dark Mode
        <span class="float-end links">
          Code <span class="fa fa-link"></span>
          <span class="small">
            <a
              target="_blank"
              href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options38.html"
              >html</a
            >
            |
            <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options38.ts"
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
`,or=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Label Id <small>(for accessibility)</small>
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options39.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options39.ts"
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
`,ir=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Pre-Filter Data
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options40.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options40.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>preFilter: predicate</code> to pre-filter the data collection before rendering the select dropdown in the UI.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select</label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select1" title="January, March are filtered out">
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
      <select multiple="multiple" class="full-width" data-test="select2" title="The entire Group 2 is filtered out">
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
    <label class="col-sm-2">Basic Select (from data)</label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select3" title="February, April are filtered out">
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Group Select (from data)</label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select4" title="Q1 group is filtered out">
      </select>
    </div>
  </div>
</div>
`,sr=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Pre-Sort Data
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options41.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options41.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>preSort: comparer</code> to pre-sort the data collection before rendering the select dropdown in the UI.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select</label>

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

  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select (from data)</label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select3">
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Group Select (from data)</label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select4">
      </select>
    </div>
  </div>
</div>
`,lr=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Lazy Load Data
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options42.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options42.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>&#123; lazyData: () => Promise &#125;</code> to lazy load data only after clicking and opening the select dropdown.
      Note that once the data is loaded, it no longer needs to be lazy loaded again and so re-opening the select dropdown will show instantly afterward. 
      You can refresh the page, or click the button to retest the lazy loading.
      Also note that any pre-selected options will only show up after the data is fully loaded.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Server Delay (ms) </label>

    <div class="col-sm-10 d-flex align-items-center gap-2">
      <input id="serverdelay" type="number" value="1000" step="100" style="height: 34px; width: 100px;" />
      <button id="resetlazy" class="btn btn-outline-secondary btn-sm">Reset Lazy Load</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Array </label>

    <div class="col-sm-10">
      <select id="basic" class="full-width" data-test="select1"></select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Data Array </label>

    <div class="col-sm-10">
      <select id="group" class="full-width" multiple data-test="select2"></select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Group Array </label>

    <div class="col-sm-10">
      <select id="group" class="full-width" multiple data-test="select3"></select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Filter &amp; OK button </label>

    <div class="col-sm-10">
      <select id="group" class="full-width" multiple data-test="select4"></select>
    </div>
  </div>
</div>
`;var Q="top",st="bottom",lt="right",Z="left",Cn="auto",De=[Q,st,lt,Z],ie="start",Se="end",ls="clippingParents",ko="viewport",_e="popper",as="reference",ho=De.reduce(function(n,t){return n.concat([t+"-"+ie,t+"-"+Se])},[]),To=[].concat(De,[Cn]).reduce(function(n,t){return n.concat([t,t+"-"+ie,t+"-"+Se])},[]),rs="beforeRead",ps="read",cs="afterRead",us="beforeMain",ds="main",ms="afterMain",hs="beforeWrite",vs="write",fs="afterWrite",bs=[rs,ps,cs,us,ds,ms,hs,vs,fs];function Ot(n){return n?(n.nodeName||"").toLowerCase():null}function at(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var t=n.ownerDocument;return t&&t.defaultView||window}return n}function se(n){var t=at(n).Element;return n instanceof t||n instanceof Element}function rt(n){var t=at(n).HTMLElement;return n instanceof t||n instanceof HTMLElement}function xo(n){if(typeof ShadowRoot>"u")return!1;var t=at(n).ShadowRoot;return n instanceof t||n instanceof ShadowRoot}function ar(n){var t=n.state;Object.keys(t.elements).forEach(function(e){var o=t.styles[e]||{},i=t.attributes[e]||{},s=t.elements[e];!rt(s)||!Ot(s)||(Object.assign(s.style,o),Object.keys(i).forEach(function(l){var a=i[l];a===!1?s.removeAttribute(l):s.setAttribute(l,a===!0?"":a)}))})}function rr(n){var t=n.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(o){var i=t.elements[o],s=t.attributes[o]||{},l=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:e[o]),a=l.reduce(function(r,u){return r[u]="",r},{});!rt(i)||!Ot(i)||(Object.assign(i.style,a),Object.keys(s).forEach(function(r){i.removeAttribute(r)}))})}}const Co={name:"applyStyles",enabled:!0,phase:"write",fn:ar,effect:rr,requires:["computeStyles"]};function St(n){return n.split("-")[0]}var oe=Math.max,On=Math.min,Ae=Math.round;function vo(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function gs(){return!/^((?!chrome|android).)*safari/i.test(vo())}function Oe(n,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var o=n.getBoundingClientRect(),i=1,s=1;t&&rt(n)&&(i=n.offsetWidth>0&&Ae(o.width)/n.offsetWidth||1,s=n.offsetHeight>0&&Ae(o.height)/n.offsetHeight||1);var l=se(n)?at(n):window,a=l.visualViewport,r=!gs()&&e,u=(o.left+(r&&a?a.offsetLeft:0))/i,m=(o.top+(r&&a?a.offsetTop:0))/s,f=o.width/i,b=o.height/s;return{width:f,height:b,top:m,right:u+f,bottom:m+b,left:u,x:u,y:m}}function Do(n){var t=Oe(n),e=n.offsetWidth,o=n.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:n.offsetLeft,y:n.offsetTop,width:e,height:o}}function _s(n,t){var e=t.getRootNode&&t.getRootNode();if(n.contains(t))return!0;if(e&&xo(e)){var o=t;do{if(o&&n.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Ft(n){return at(n).getComputedStyle(n)}function pr(n){return["table","td","th"].indexOf(Ot(n))>=0}function Vt(n){return((se(n)?n.ownerDocument:n.document)||window.document).documentElement}function Dn(n){return Ot(n)==="html"?n:n.assignedSlot||n.parentNode||(xo(n)?n.host:null)||Vt(n)}function ii(n){return!rt(n)||Ft(n).position==="fixed"?null:n.offsetParent}function cr(n){var t=/firefox/i.test(vo()),e=/Trident/i.test(vo());if(e&&rt(n)){var o=Ft(n);if(o.position==="fixed")return null}var i=Dn(n);for(xo(i)&&(i=i.host);rt(i)&&["html","body"].indexOf(Ot(i))<0;){var s=Ft(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function Xe(n){for(var t=at(n),e=ii(n);e&&pr(e)&&Ft(e).position==="static";)e=ii(e);return e&&(Ot(e)==="html"||Ot(e)==="body"&&Ft(e).position==="static")?t:e||cr(n)||t}function Mo(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Ve(n,t,e){return oe(n,On(t,e))}function ur(n,t,e){var o=Ve(n,t,e);return o>e?e:o}function Es(){return{top:0,right:0,bottom:0,left:0}}function ys(n){return Object.assign({},Es(),n)}function ws(n,t){return t.reduce(function(e,o){return e[o]=n,e},{})}var dr=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,ys(typeof t!="number"?t:ws(t,De))};function mr(n){var t,e=n.state,o=n.name,i=n.options,s=e.elements.arrow,l=e.modifiersData.popperOffsets,a=St(e.placement),r=Mo(a),u=[Z,lt].indexOf(a)>=0,m=u?"height":"width";if(!(!s||!l)){var f=dr(i.padding,e),b=Do(s),g=r==="y"?Q:Z,O=r==="y"?st:lt,A=e.rects.reference[m]+e.rects.reference[r]-l[r]-e.rects.popper[m],k=l[r]-e.rects.reference[r],M=Xe(s),I=M?r==="y"?M.clientHeight||0:M.clientWidth||0:0,$=A/2-k/2,y=f[g],x=I-b[m]-f[O],C=I/2-b[m]/2+$,R=Ve(y,C,x),U=r;e.modifiersData[o]=(t={},t[U]=R,t.centerOffset=R-C,t)}}function hr(n){var t=n.state,e=n.options,o=e.element,i=o===void 0?"[data-popper-arrow]":o;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||_s(t.elements.popper,i)&&(t.elements.arrow=i))}const Ss={name:"arrow",enabled:!0,phase:"main",fn:mr,effect:hr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ke(n){return n.split("-")[1]}var vr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function fr(n,t){var e=n.x,o=n.y,i=t.devicePixelRatio||1;return{x:Ae(e*i)/i||0,y:Ae(o*i)/i||0}}function si(n){var t,e=n.popper,o=n.popperRect,i=n.placement,s=n.variation,l=n.offsets,a=n.position,r=n.gpuAcceleration,u=n.adaptive,m=n.roundOffsets,f=n.isFixed,b=l.x,g=b===void 0?0:b,O=l.y,A=O===void 0?0:O,k=typeof m=="function"?m({x:g,y:A}):{x:g,y:A};g=k.x,A=k.y;var M=l.hasOwnProperty("x"),I=l.hasOwnProperty("y"),$=Z,y=Q,x=window;if(u){var C=Xe(e),R="clientHeight",U="clientWidth";if(C===at(e)&&(C=Vt(e),Ft(C).position!=="static"&&a==="absolute"&&(R="scrollHeight",U="scrollWidth")),C=C,i===Q||(i===Z||i===lt)&&s===Se){y=st;var G=f&&C===x&&x.visualViewport?x.visualViewport.height:C[R];A-=G-o.height,A*=r?1:-1}if(i===Z||(i===Q||i===st)&&s===Se){$=lt;var B=f&&C===x&&x.visualViewport?x.visualViewport.width:C[U];g-=B-o.width,g*=r?1:-1}}var D=Object.assign({position:a},u&&vr),q=m===!0?fr({x:g,y:A},at(e)):{x:g,y:A};if(g=q.x,A=q.y,r){var J;return Object.assign({},D,(J={},J[y]=I?"0":"",J[$]=M?"0":"",J.transform=(x.devicePixelRatio||1)<=1?"translate("+g+"px, "+A+"px)":"translate3d("+g+"px, "+A+"px, 0)",J))}return Object.assign({},D,(t={},t[y]=I?A+"px":"",t[$]=M?g+"px":"",t.transform="",t))}function br(n){var t=n.state,e=n.options,o=e.gpuAcceleration,i=o===void 0?!0:o,s=e.adaptive,l=s===void 0?!0:s,a=e.roundOffsets,r=a===void 0?!0:a,u={placement:St(t.placement),variation:ke(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,si(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:r})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,si(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:r})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Lo={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:br,data:{}};var cn={passive:!0};function gr(n){var t=n.state,e=n.instance,o=n.options,i=o.scroll,s=i===void 0?!0:i,l=o.resize,a=l===void 0?!0:l,r=at(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&u.forEach(function(m){m.addEventListener("scroll",e.update,cn)}),a&&r.addEventListener("resize",e.update,cn),function(){s&&u.forEach(function(m){m.removeEventListener("scroll",e.update,cn)}),a&&r.removeEventListener("resize",e.update,cn)}}const No={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:gr,data:{}};var _r={left:"right",right:"left",bottom:"top",top:"bottom"};function yn(n){return n.replace(/left|right|bottom|top/g,function(t){return _r[t]})}var Er={start:"end",end:"start"};function li(n){return n.replace(/start|end/g,function(t){return Er[t]})}function $o(n){var t=at(n),e=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:e,scrollTop:o}}function Io(n){return Oe(Vt(n)).left+$o(n).scrollLeft}function yr(n,t){var e=at(n),o=Vt(n),i=e.visualViewport,s=o.clientWidth,l=o.clientHeight,a=0,r=0;if(i){s=i.width,l=i.height;var u=gs();(u||!u&&t==="fixed")&&(a=i.offsetLeft,r=i.offsetTop)}return{width:s,height:l,x:a+Io(n),y:r}}function wr(n){var t,e=Vt(n),o=$o(n),i=(t=n.ownerDocument)==null?void 0:t.body,s=oe(e.scrollWidth,e.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=oe(e.scrollHeight,e.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-o.scrollLeft+Io(n),r=-o.scrollTop;return Ft(i||e).direction==="rtl"&&(a+=oe(e.clientWidth,i?i.clientWidth:0)-s),{width:s,height:l,x:a,y:r}}function Ro(n){var t=Ft(n),e=t.overflow,o=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+i+o)}function As(n){return["html","body","#document"].indexOf(Ot(n))>=0?n.ownerDocument.body:rt(n)&&Ro(n)?n:As(Dn(n))}function qe(n,t){var e;t===void 0&&(t=[]);var o=As(n),i=o===((e=n.ownerDocument)==null?void 0:e.body),s=at(o),l=i?[s].concat(s.visualViewport||[],Ro(o)?o:[]):o,a=t.concat(l);return i?a:a.concat(qe(Dn(l)))}function fo(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function Sr(n,t){var e=Oe(n,!1,t==="fixed");return e.top=e.top+n.clientTop,e.left=e.left+n.clientLeft,e.bottom=e.top+n.clientHeight,e.right=e.left+n.clientWidth,e.width=n.clientWidth,e.height=n.clientHeight,e.x=e.left,e.y=e.top,e}function ai(n,t,e){return t===ko?fo(yr(n,e)):se(t)?Sr(t,e):fo(wr(Vt(n)))}function Ar(n){var t=qe(Dn(n)),e=["absolute","fixed"].indexOf(Ft(n).position)>=0,o=e&&rt(n)?Xe(n):n;return se(o)?t.filter(function(i){return se(i)&&_s(i,o)&&Ot(i)!=="body"}):[]}function Or(n,t,e,o){var i=t==="clippingParents"?Ar(n):[].concat(t),s=[].concat(i,[e]),l=s[0],a=s.reduce(function(r,u){var m=ai(n,u,o);return r.top=oe(m.top,r.top),r.right=On(m.right,r.right),r.bottom=On(m.bottom,r.bottom),r.left=oe(m.left,r.left),r},ai(n,l,o));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Os(n){var t=n.reference,e=n.element,o=n.placement,i=o?St(o):null,s=o?ke(o):null,l=t.x+t.width/2-e.width/2,a=t.y+t.height/2-e.height/2,r;switch(i){case Q:r={x:l,y:t.y-e.height};break;case st:r={x:l,y:t.y+t.height};break;case lt:r={x:t.x+t.width,y:a};break;case Z:r={x:t.x-e.width,y:a};break;default:r={x:t.x,y:t.y}}var u=i?Mo(i):null;if(u!=null){var m=u==="y"?"height":"width";switch(s){case ie:r[u]=r[u]-(t[m]/2-e[m]/2);break;case Se:r[u]=r[u]+(t[m]/2-e[m]/2);break}}return r}function Te(n,t){t===void 0&&(t={});var e=t,o=e.placement,i=o===void 0?n.placement:o,s=e.strategy,l=s===void 0?n.strategy:s,a=e.boundary,r=a===void 0?ls:a,u=e.rootBoundary,m=u===void 0?ko:u,f=e.elementContext,b=f===void 0?_e:f,g=e.altBoundary,O=g===void 0?!1:g,A=e.padding,k=A===void 0?0:A,M=ys(typeof k!="number"?k:ws(k,De)),I=b===_e?as:_e,$=n.rects.popper,y=n.elements[O?I:b],x=Or(se(y)?y:y.contextElement||Vt(n.elements.popper),r,m,l),C=Oe(n.elements.reference),R=Os({reference:C,element:$,placement:i}),U=fo(Object.assign({},$,R)),G=b===_e?U:C,B={top:x.top-G.top+M.top,bottom:G.bottom-x.bottom+M.bottom,left:x.left-G.left+M.left,right:G.right-x.right+M.right},D=n.modifiersData.offset;if(b===_e&&D){var q=D[i];Object.keys(B).forEach(function(J){var mt=[lt,st].indexOf(J)>=0?1:-1,kt=[Q,st].indexOf(J)>=0?"y":"x";B[J]+=q[kt]*mt})}return B}function kr(n,t){t===void 0&&(t={});var e=t,o=e.placement,i=e.boundary,s=e.rootBoundary,l=e.padding,a=e.flipVariations,r=e.allowedAutoPlacements,u=r===void 0?To:r,m=ke(o),f=m?a?ho:ho.filter(function(O){return ke(O)===m}):De,b=f.filter(function(O){return u.indexOf(O)>=0});b.length===0&&(b=f);var g=b.reduce(function(O,A){return O[A]=Te(n,{placement:A,boundary:i,rootBoundary:s,padding:l})[St(A)],O},{});return Object.keys(g).sort(function(O,A){return g[O]-g[A]})}function Tr(n){if(St(n)===Cn)return[];var t=yn(n);return[li(n),t,li(t)]}function xr(n){var t=n.state,e=n.options,o=n.name;if(!t.modifiersData[o]._skip){for(var i=e.mainAxis,s=i===void 0?!0:i,l=e.altAxis,a=l===void 0?!0:l,r=e.fallbackPlacements,u=e.padding,m=e.boundary,f=e.rootBoundary,b=e.altBoundary,g=e.flipVariations,O=g===void 0?!0:g,A=e.allowedAutoPlacements,k=t.options.placement,M=St(k),I=M===k,$=r||(I||!O?[yn(k)]:Tr(k)),y=[k].concat($).reduce(function(xt,L){return xt.concat(St(L)===Cn?kr(t,{placement:L,boundary:m,rootBoundary:f,padding:u,flipVariations:O,allowedAutoPlacements:A}):L)},[]),x=t.rects.reference,C=t.rects.popper,R=new Map,U=!0,G=y[0],B=0;B<y.length;B++){var D=y[B],q=St(D),J=ke(D)===ie,mt=[Q,st].indexOf(q)>=0,kt=mt?"width":"height",K=Te(t,{placement:D,boundary:m,rootBoundary:f,altBoundary:b,padding:u}),it=mt?J?lt:Z:J?st:Q;x[kt]>C[kt]&&(it=yn(it));var Yt=yn(it),Tt=[];if(s&&Tt.push(K[q]<=0),a&&Tt.push(K[it]<=0,K[Yt]<=0),Tt.every(function(xt){return xt})){G=D,U=!1;break}R.set(D,Tt)}if(U)for(var Xt=O?3:1,F=function(L){var ht=y.find(function(Gt){var _t=R.get(Gt);if(_t)return _t.slice(0,L).every(function(Qt){return Qt})});if(ht)return G=ht,"break"},Bt=Xt;Bt>0;Bt--){var H=F(Bt);if(H==="break")break}t.placement!==G&&(t.modifiersData[o]._skip=!0,t.placement=G,t.reset=!0)}}const ks={name:"flip",enabled:!0,phase:"main",fn:xr,requiresIfExists:["offset"],data:{_skip:!1}};function ri(n,t,e){return e===void 0&&(e={x:0,y:0}),{top:n.top-t.height-e.y,right:n.right-t.width+e.x,bottom:n.bottom-t.height+e.y,left:n.left-t.width-e.x}}function pi(n){return[Q,lt,st,Z].some(function(t){return n[t]>=0})}function Cr(n){var t=n.state,e=n.name,o=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,l=Te(t,{elementContext:"reference"}),a=Te(t,{altBoundary:!0}),r=ri(l,o),u=ri(a,i,s),m=pi(r),f=pi(u);t.modifiersData[e]={referenceClippingOffsets:r,popperEscapeOffsets:u,isReferenceHidden:m,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":m,"data-popper-escaped":f})}const Ts={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Cr};function Dr(n,t,e){var o=St(n),i=[Z,Q].indexOf(o)>=0?-1:1,s=typeof e=="function"?e(Object.assign({},t,{placement:n})):e,l=s[0],a=s[1];return l=l||0,a=(a||0)*i,[Z,lt].indexOf(o)>=0?{x:a,y:l}:{x:l,y:a}}function Mr(n){var t=n.state,e=n.options,o=n.name,i=e.offset,s=i===void 0?[0,0]:i,l=To.reduce(function(m,f){return m[f]=Dr(f,t.rects,s),m},{}),a=l[t.placement],r=a.x,u=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=r,t.modifiersData.popperOffsets.y+=u),t.modifiersData[o]=l}const xs={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Mr};function Lr(n){var t=n.state,e=n.name;t.modifiersData[e]=Os({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const Po={name:"popperOffsets",enabled:!0,phase:"read",fn:Lr,data:{}};function Nr(n){return n==="x"?"y":"x"}function $r(n){var t=n.state,e=n.options,o=n.name,i=e.mainAxis,s=i===void 0?!0:i,l=e.altAxis,a=l===void 0?!1:l,r=e.boundary,u=e.rootBoundary,m=e.altBoundary,f=e.padding,b=e.tether,g=b===void 0?!0:b,O=e.tetherOffset,A=O===void 0?0:O,k=Te(t,{boundary:r,rootBoundary:u,padding:f,altBoundary:m}),M=St(t.placement),I=ke(t.placement),$=!I,y=Mo(M),x=Nr(y),C=t.modifiersData.popperOffsets,R=t.rects.reference,U=t.rects.popper,G=typeof A=="function"?A(Object.assign({},t.rects,{placement:t.placement})):A,B=typeof G=="number"?{mainAxis:G,altAxis:G}:Object.assign({mainAxis:0,altAxis:0},G),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,q={x:0,y:0};if(C){if(s){var J,mt=y==="y"?Q:Z,kt=y==="y"?st:lt,K=y==="y"?"height":"width",it=C[y],Yt=it+k[mt],Tt=it-k[kt],Xt=g?-U[K]/2:0,F=I===ie?R[K]:U[K],Bt=I===ie?-U[K]:-R[K],H=t.elements.arrow,xt=g&&H?Do(H):{width:0,height:0},L=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Es(),ht=L[mt],Gt=L[kt],_t=Ve(0,R[K],xt[K]),Qt=$?R[K]/2-Xt-_t-ht-B.mainAxis:F-_t-ht-B.mainAxis,nn=$?-R[K]/2+Xt+_t+Gt+B.mainAxis:Bt+_t+Gt+B.mainAxis,re=t.elements.arrow&&Xe(t.elements.arrow),Ut=re?y==="y"?re.clientTop||0:re.clientLeft||0:0,pe=(J=D==null?void 0:D[y])!=null?J:0,Ct=it+Qt-pe-Ut,$e=it+nn-pe,ce=Ve(g?On(Yt,Ct):Yt,it,g?oe(Tt,$e):Tt);C[y]=ce,q[y]=ce-it}if(a){var Dt,ue=y==="x"?Q:Z,de=y==="x"?st:lt,Et=C[x],Zt=x==="y"?"height":"width",on=Et+k[ue],me=Et-k[de],Mt=[Q,Z].indexOf(M)!==-1,Lt=(Dt=D==null?void 0:D[x])!=null?Dt:0,Nt=Mt?on:Et-R[Zt]-U[Zt]-Lt+B.altAxis,Ie=Mt?Et+R[Zt]+U[Zt]-Lt-B.altAxis:me,Re=g&&Mt?ur(Nt,Et,Ie):Ve(g?Nt:on,Et,g?Ie:me);C[x]=Re,q[x]=Re-Et}t.modifiersData[o]=q}}const Cs={name:"preventOverflow",enabled:!0,phase:"main",fn:$r,requiresIfExists:["offset"]};function Ir(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function Rr(n){return n===at(n)||!rt(n)?$o(n):Ir(n)}function Pr(n){var t=n.getBoundingClientRect(),e=Ae(t.width)/n.offsetWidth||1,o=Ae(t.height)/n.offsetHeight||1;return e!==1||o!==1}function Fr(n,t,e){e===void 0&&(e=!1);var o=rt(t),i=rt(t)&&Pr(t),s=Vt(t),l=Oe(n,i,e),a={scrollLeft:0,scrollTop:0},r={x:0,y:0};return(o||!o&&!e)&&((Ot(t)!=="body"||Ro(s))&&(a=Rr(t)),rt(t)?(r=Oe(t,!0),r.x+=t.clientLeft,r.y+=t.clientTop):s&&(r.x=Io(s))),{x:l.left+a.scrollLeft-r.x,y:l.top+a.scrollTop-r.y,width:l.width,height:l.height}}function Hr(n){var t=new Map,e=new Set,o=[];n.forEach(function(s){t.set(s.name,s)});function i(s){e.add(s.name);var l=[].concat(s.requires||[],s.requiresIfExists||[]);l.forEach(function(a){if(!e.has(a)){var r=t.get(a);r&&i(r)}}),o.push(s)}return n.forEach(function(s){e.has(s.name)||i(s)}),o}function Br(n){var t=Hr(n);return bs.reduce(function(e,o){return e.concat(t.filter(function(i){return i.phase===o}))},[])}function Gr(n){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(n())})})),t}}function Ur(n){var t=n.reduce(function(e,o){var i=e[o.name];return e[o.name]=i?Object.assign({},i,o,{options:Object.assign({},i.options,o.options),data:Object.assign({},i.data,o.data)}):o,e},{});return Object.keys(t).map(function(e){return t[e]})}var ci={placement:"bottom",modifiers:[],strategy:"absolute"};function ui(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Mn(n){n===void 0&&(n={});var t=n,e=t.defaultModifiers,o=e===void 0?[]:e,i=t.defaultOptions,s=i===void 0?ci:i;return function(a,r,u){u===void 0&&(u=s);var m={placement:"bottom",orderedModifiers:[],options:Object.assign({},ci,s),modifiersData:{},elements:{reference:a,popper:r},attributes:{},styles:{}},f=[],b=!1,g={state:m,setOptions:function(M){var I=typeof M=="function"?M(m.options):M;A(),m.options=Object.assign({},s,m.options,I),m.scrollParents={reference:se(a)?qe(a):a.contextElement?qe(a.contextElement):[],popper:qe(r)};var $=Br(Ur([].concat(o,m.options.modifiers)));return m.orderedModifiers=$.filter(function(y){return y.enabled}),O(),g.update()},forceUpdate:function(){if(!b){var M=m.elements,I=M.reference,$=M.popper;if(ui(I,$)){m.rects={reference:Fr(I,Xe($),m.options.strategy==="fixed"),popper:Do($)},m.reset=!1,m.placement=m.options.placement,m.orderedModifiers.forEach(function(B){return m.modifiersData[B.name]=Object.assign({},B.data)});for(var y=0;y<m.orderedModifiers.length;y++){if(m.reset===!0){m.reset=!1,y=-1;continue}var x=m.orderedModifiers[y],C=x.fn,R=x.options,U=R===void 0?{}:R,G=x.name;typeof C=="function"&&(m=C({state:m,options:U,name:G,instance:g})||m)}}}},update:Gr(function(){return new Promise(function(k){g.forceUpdate(),k(m)})}),destroy:function(){A(),b=!0}};if(!ui(a,r))return g;g.setOptions(u).then(function(k){!b&&u.onFirstUpdate&&u.onFirstUpdate(k)});function O(){m.orderedModifiers.forEach(function(k){var M=k.name,I=k.options,$=I===void 0?{}:I,y=k.effect;if(typeof y=="function"){var x=y({state:m,name:M,instance:g,options:$}),C=function(){};f.push(x||C)}})}function A(){f.forEach(function(k){return k()}),f=[]}return g}}var Jr=Mn(),jr=[No,Po,Lo,Co],zr=Mn({defaultModifiers:jr}),Wr=[No,Po,Lo,Co,xs,ks,Cs,Ss,Ts],Fo=Mn({defaultModifiers:Wr});const Ds=Object.freeze(Object.defineProperty({__proto__:null,afterMain:ms,afterRead:cs,afterWrite:fs,applyStyles:Co,arrow:Ss,auto:Cn,basePlacements:De,beforeMain:us,beforeRead:rs,beforeWrite:hs,bottom:st,clippingParents:ls,computeStyles:Lo,createPopper:Fo,createPopperBase:Jr,createPopperLite:zr,detectOverflow:Te,end:Se,eventListeners:No,flip:ks,hide:Ts,left:Z,main:ds,modifierPhases:bs,offset:xs,placements:To,popper:_e,popperGenerator:Mn,popperOffsets:Po,preventOverflow:Cs,read:ps,reference:as,right:lt,start:ie,top:Q,variationPlacements:ho,viewport:ko,write:vs},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Jt=new Map,Un={set(n,t,e){Jt.has(n)||Jt.set(n,new Map);const o=Jt.get(n);if(!o.has(t)&&o.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`);return}o.set(t,e)},get(n,t){return Jt.has(n)&&Jt.get(n).get(t)||null},remove(n,t){if(!Jt.has(n))return;const e=Jt.get(n);e.delete(t),e.size===0&&Jt.delete(n)}},Vr=1e6,qr=1e3,bo="transitionend",Ms=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),n),Kr=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),Yr=n=>{do n+=Math.floor(Math.random()*Vr);while(document.getElementById(n));return n},Xr=n=>{if(!n)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(n);const o=Number.parseFloat(t),i=Number.parseFloat(e);return!o&&!i?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*qr)},Ls=n=>{n.dispatchEvent(new Event(bo))},Rt=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),jt=n=>Rt(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(Ms(n)):null,Me=n=>{if(!Rt(n)||n.getClientRects().length===0)return!1;const t=getComputedStyle(n).getPropertyValue("visibility")==="visible",e=n.closest("details:not([open])");if(!e)return t;if(e!==n){const o=n.closest("summary");if(o&&o.parentNode!==e||o===null)return!1}return t},zt=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",Ns=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const t=n.getRootNode();return t instanceof ShadowRoot?t:null}return n instanceof ShadowRoot?n:n.parentNode?Ns(n.parentNode):null},kn=()=>{},Qe=n=>{n.offsetHeight},$s=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Jn=[],Qr=n=>{document.readyState==="loading"?(Jn.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of Jn)t()}),Jn.push(n)):n()},pt=()=>document.documentElement.dir==="rtl",dt=n=>{Qr(()=>{const t=$s();if(t){const e=n.NAME,o=t.fn[e];t.fn[e]=n.jQueryInterface,t.fn[e].Constructor=n,t.fn[e].noConflict=()=>(t.fn[e]=o,n.jQueryInterface)}})},ot=(n,t=[],e=n)=>typeof n=="function"?n.call(...t):e,Is=(n,t,e=!0)=>{if(!e){ot(n);return}const i=Xr(t)+5;let s=!1;const l=({target:a})=>{a===t&&(s=!0,t.removeEventListener(bo,l),ot(n))};t.addEventListener(bo,l),setTimeout(()=>{s||Ls(t)},i)},Ho=(n,t,e,o)=>{const i=n.length;let s=n.indexOf(t);return s===-1?!e&&o?n[i-1]:n[0]:(s+=e?1:-1,o&&(s=(s+i)%i),n[Math.max(0,Math.min(s,i-1))])},Zr=/[^.]*(?=\..*)\.|.*/,tp=/\..*/,ep=/::\d+$/,jn={};let di=1;const Rs={mouseenter:"mouseover",mouseleave:"mouseout"},np=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Ps(n,t){return t&&`${t}::${di++}`||n.uidEvent||di++}function Fs(n){const t=Ps(n);return n.uidEvent=t,jn[t]=jn[t]||{},jn[t]}function op(n,t){return function e(o){return Bo(o,{delegateTarget:n}),e.oneOff&&h.off(n,o.type,t),t.apply(n,[o])}}function ip(n,t,e){return function o(i){const s=n.querySelectorAll(t);for(let{target:l}=i;l&&l!==this;l=l.parentNode)for(const a of s)if(a===l)return Bo(i,{delegateTarget:l}),o.oneOff&&h.off(n,i.type,t,e),e.apply(l,[i])}}function Hs(n,t,e=null){return Object.values(n).find(o=>o.callable===t&&o.delegationSelector===e)}function Bs(n,t,e){const o=typeof t=="string",i=o?e:t||e;let s=Gs(n);return np.has(s)||(s=n),[o,i,s]}function mi(n,t,e,o,i){if(typeof t!="string"||!n)return;let[s,l,a]=Bs(t,e,o);t in Rs&&(l=(O=>function(A){if(!A.relatedTarget||A.relatedTarget!==A.delegateTarget&&!A.delegateTarget.contains(A.relatedTarget))return O.call(this,A)})(l));const r=Fs(n),u=r[a]||(r[a]={}),m=Hs(u,l,s?e:null);if(m){m.oneOff=m.oneOff&&i;return}const f=Ps(l,t.replace(Zr,"")),b=s?ip(n,e,l):op(n,l);b.delegationSelector=s?e:null,b.callable=l,b.oneOff=i,b.uidEvent=f,u[f]=b,n.addEventListener(a,b,s)}function go(n,t,e,o,i){const s=Hs(t[e],o,i);s&&(n.removeEventListener(e,s,!!i),delete t[e][s.uidEvent])}function sp(n,t,e,o){const i=t[e]||{};for(const[s,l]of Object.entries(i))s.includes(o)&&go(n,t,e,l.callable,l.delegationSelector)}function Gs(n){return n=n.replace(tp,""),Rs[n]||n}const h={on(n,t,e,o){mi(n,t,e,o,!1)},one(n,t,e,o){mi(n,t,e,o,!0)},off(n,t,e,o){if(typeof t!="string"||!n)return;const[i,s,l]=Bs(t,e,o),a=l!==t,r=Fs(n),u=r[l]||{},m=t.startsWith(".");if(typeof s<"u"){if(!Object.keys(u).length)return;go(n,r,l,s,i?e:null);return}if(m)for(const f of Object.keys(r))sp(n,r,f,t.slice(1));for(const[f,b]of Object.entries(u)){const g=f.replace(ep,"");(!a||t.includes(g))&&go(n,r,l,b.callable,b.delegationSelector)}},trigger(n,t,e){if(typeof t!="string"||!n)return null;const o=$s(),i=Gs(t),s=t!==i;let l=null,a=!0,r=!0,u=!1;s&&o&&(l=o.Event(t,e),o(n).trigger(l),a=!l.isPropagationStopped(),r=!l.isImmediatePropagationStopped(),u=l.isDefaultPrevented());const m=Bo(new Event(t,{bubbles:a,cancelable:!0}),e);return u&&m.preventDefault(),r&&n.dispatchEvent(m),m.defaultPrevented&&l&&l.preventDefault(),m}};function Bo(n,t={}){for(const[e,o]of Object.entries(t))try{n[e]=o}catch{Object.defineProperty(n,e,{configurable:!0,get(){return o}})}return n}function hi(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function zn(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const Pt={setDataAttribute(n,t,e){n.setAttribute(`data-bs-${zn(t)}`,e)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${zn(t)}`)},getDataAttributes(n){if(!n)return{};const t={},e=Object.keys(n.dataset).filter(o=>o.startsWith("bs")&&!o.startsWith("bsConfig"));for(const o of e){let i=o.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1),t[i]=hi(n.dataset[o])}return t},getDataAttribute(n,t){return hi(n.getAttribute(`data-bs-${zn(t)}`))}};class Ze{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const o=Rt(e)?Pt.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof o=="object"?o:{},...Rt(e)?Pt.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[o,i]of Object.entries(e)){const s=t[o],l=Rt(s)?"element":Kr(s);if(!new RegExp(i).test(l))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${o}" provided type "${l}" but expected type "${i}".`)}}}const lp="5.3.5";class gt extends Ze{constructor(t,e){super(),t=jt(t),t&&(this._element=t,this._config=this._getConfig(e),Un.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Un.remove(this._element,this.constructor.DATA_KEY),h.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,o=!0){Is(t,e,o)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Un.get(jt(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return lp}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const Wn=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let e=n.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?e.trim():null}return t?t.split(",").map(e=>Ms(e)).join(","):null},S={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(e=>e.matches(t))},parents(n,t){const e=[];let o=n.parentNode.closest(t);for(;o;)e.push(o),o=o.parentNode.closest(t);return e},prev(n,t){let e=n.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(n,t){let e=n.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(e=>!zt(e)&&Me(e))},getSelectorFromElement(n){const t=Wn(n);return t&&S.findOne(t)?t:null},getElementFromSelector(n){const t=Wn(n);return t?S.findOne(t):null},getMultipleElementsFromSelector(n){const t=Wn(n);return t?S.find(t):[]}},Ln=(n,t="hide")=>{const e=`click.dismiss${n.EVENT_KEY}`,o=n.NAME;h.on(document,e,`[data-bs-dismiss="${o}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),zt(this))return;const s=S.getElementFromSelector(this)||this.closest(`.${o}`);n.getOrCreateInstance(s)[t]()})},ap="alert",rp="bs.alert",Us=`.${rp}`,pp=`close${Us}`,cp=`closed${Us}`,up="fade",dp="show";class Nn extends gt{static get NAME(){return ap}close(){if(h.trigger(this._element,pp).defaultPrevented)return;this._element.classList.remove(dp);const e=this._element.classList.contains(up);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),h.trigger(this._element,cp),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=Nn.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Ln(Nn,"close");dt(Nn);const mp="button",hp="bs.button",vp=`.${hp}`,fp=".data-api",bp="active",vi='[data-bs-toggle="button"]',gp=`click${vp}${fp}`;class $n extends gt{static get NAME(){return mp}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(bp))}static jQueryInterface(t){return this.each(function(){const e=$n.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}h.on(document,gp,vi,n=>{n.preventDefault();const t=n.target.closest(vi);$n.getOrCreateInstance(t).toggle()});dt($n);const _p="swipe",Le=".bs.swipe",Ep=`touchstart${Le}`,yp=`touchmove${Le}`,wp=`touchend${Le}`,Sp=`pointerdown${Le}`,Ap=`pointerup${Le}`,Op="touch",kp="pen",Tp="pointer-event",xp=40,Cp={endCallback:null,leftCallback:null,rightCallback:null},Dp={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Tn extends Ze{constructor(t,e){super(),this._element=t,!(!t||!Tn.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Cp}static get DefaultType(){return Dp}static get NAME(){return _p}dispose(){h.off(this._element,Le)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),ot(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=xp)return;const e=t/this._deltaX;this._deltaX=0,e&&ot(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(h.on(this._element,Sp,t=>this._start(t)),h.on(this._element,Ap,t=>this._end(t)),this._element.classList.add(Tp)):(h.on(this._element,Ep,t=>this._start(t)),h.on(this._element,yp,t=>this._move(t)),h.on(this._element,wp,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===kp||t.pointerType===Op)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Mp="carousel",Lp="bs.carousel",qt=`.${Lp}`,Js=".data-api",Np="ArrowLeft",$p="ArrowRight",Ip=500,He="next",fe="prev",Ee="left",wn="right",Rp=`slide${qt}`,Vn=`slid${qt}`,Pp=`keydown${qt}`,Fp=`mouseenter${qt}`,Hp=`mouseleave${qt}`,Bp=`dragstart${qt}`,Gp=`load${qt}${Js}`,Up=`click${qt}${Js}`,js="carousel",un="active",Jp="slide",jp="carousel-item-end",zp="carousel-item-start",Wp="carousel-item-next",Vp="carousel-item-prev",zs=".active",Ws=".carousel-item",qp=zs+Ws,Kp=".carousel-item img",Yp=".carousel-indicators",Xp="[data-bs-slide], [data-bs-slide-to]",Qp='[data-bs-ride="carousel"]',Zp={[Np]:wn,[$p]:Ee},tc={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},ec={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class tn extends gt{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=S.findOne(Yp,this._element),this._addEventListeners(),this._config.ride===js&&this.cycle()}static get Default(){return tc}static get DefaultType(){return ec}static get NAME(){return Mp}next(){this._slide(He)}nextWhenVisible(){!document.hidden&&Me(this._element)&&this.next()}prev(){this._slide(fe)}pause(){this._isSliding&&Ls(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){h.one(this._element,Vn,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){h.one(this._element,Vn,()=>this.to(t));return}const o=this._getItemIndex(this._getActive());if(o===t)return;const i=t>o?He:fe;this._slide(i,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&h.on(this._element,Pp,t=>this._keydown(t)),this._config.pause==="hover"&&(h.on(this._element,Fp,()=>this.pause()),h.on(this._element,Hp,()=>this._maybeEnableCycle())),this._config.touch&&Tn.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const o of S.find(Kp,this._element))h.on(o,Bp,i=>i.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(Ee)),rightCallback:()=>this._slide(this._directionToOrder(wn)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Ip+this._config.interval))}};this._swipeHelper=new Tn(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=Zp[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=S.findOne(zs,this._indicatorsElement);e.classList.remove(un),e.removeAttribute("aria-current");const o=S.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);o&&(o.classList.add(un),o.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const o=this._getActive(),i=t===He,s=e||Ho(this._getItems(),o,i,this._config.wrap);if(s===o)return;const l=this._getItemIndex(s),a=g=>h.trigger(this._element,g,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(o),to:l});if(a(Rp).defaultPrevented||!o||!s)return;const u=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(l),this._activeElement=s;const m=i?zp:jp,f=i?Wp:Vp;s.classList.add(f),Qe(s),o.classList.add(m),s.classList.add(m);const b=()=>{s.classList.remove(m,f),s.classList.add(un),o.classList.remove(un,f,m),this._isSliding=!1,a(Vn)};this._queueCallback(b,o,this._isAnimated()),u&&this.cycle()}_isAnimated(){return this._element.classList.contains(Jp)}_getActive(){return S.findOne(qp,this._element)}_getItems(){return S.find(Ws,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return pt()?t===Ee?fe:He:t===Ee?He:fe}_orderToDirection(t){return pt()?t===fe?Ee:wn:t===fe?wn:Ee}static jQueryInterface(t){return this.each(function(){const e=tn.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(document,Up,Xp,function(n){const t=S.getElementFromSelector(this);if(!t||!t.classList.contains(js))return;n.preventDefault();const e=tn.getOrCreateInstance(t),o=this.getAttribute("data-bs-slide-to");if(o){e.to(o),e._maybeEnableCycle();return}if(Pt.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});h.on(window,Gp,()=>{const n=S.find(Qp);for(const t of n)tn.getOrCreateInstance(t)});dt(tn);const nc="collapse",oc="bs.collapse",en=`.${oc}`,ic=".data-api",sc=`show${en}`,lc=`shown${en}`,ac=`hide${en}`,rc=`hidden${en}`,pc=`click${en}${ic}`,qn="show",we="collapse",dn="collapsing",cc="collapsed",uc=`:scope .${we} .${we}`,dc="collapse-horizontal",mc="width",hc="height",vc=".collapse.show, .collapse.collapsing",_o='[data-bs-toggle="collapse"]',fc={parent:null,toggle:!0},bc={parent:"(null|element)",toggle:"boolean"};class Ye extends gt{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const o=S.find(_o);for(const i of o){const s=S.getSelectorFromElement(i),l=S.find(s).filter(a=>a===this._element);s!==null&&l.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return fc}static get DefaultType(){return bc}static get NAME(){return nc}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(vc).filter(a=>a!==this._element).map(a=>Ye.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||h.trigger(this._element,sc).defaultPrevented)return;for(const a of t)a.hide();const o=this._getDimension();this._element.classList.remove(we),this._element.classList.add(dn),this._element.style[o]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(dn),this._element.classList.add(we,qn),this._element.style[o]="",h.trigger(this._element,lc)},l=`scroll${o[0].toUpperCase()+o.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[o]=`${this._element[l]}px`}hide(){if(this._isTransitioning||!this._isShown()||h.trigger(this._element,ac).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,Qe(this._element),this._element.classList.add(dn),this._element.classList.remove(we,qn);for(const i of this._triggerArray){const s=S.getElementFromSelector(i);s&&!this._isShown(s)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(dn),this._element.classList.add(we),h.trigger(this._element,rc)};this._element.style[e]="",this._queueCallback(o,this._element,!0)}_isShown(t=this._element){return t.classList.contains(qn)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=jt(t.parent),t}_getDimension(){return this._element.classList.contains(dc)?mc:hc}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(_o);for(const e of t){const o=S.getElementFromSelector(e);o&&this._addAriaAndCollapsedClass([e],this._isShown(o))}}_getFirstLevelChildren(t){const e=S.find(uc,this._config.parent);return S.find(t,this._config.parent).filter(o=>!e.includes(o))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const o of t)o.classList.toggle(cc,!e),o.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const o=Ye.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof o[t]>"u")throw new TypeError(`No method named "${t}"`);o[t]()}})}}h.on(document,pc,_o,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const t of S.getMultipleElementsFromSelector(this))Ye.getOrCreateInstance(t,{toggle:!1}).toggle()});dt(Ye);const fi="dropdown",gc="bs.dropdown",le=`.${gc}`,Go=".data-api",_c="Escape",bi="Tab",Ec="ArrowUp",gi="ArrowDown",yc=2,wc=`hide${le}`,Sc=`hidden${le}`,Ac=`show${le}`,Oc=`shown${le}`,Vs=`click${le}${Go}`,qs=`keydown${le}${Go}`,kc=`keyup${le}${Go}`,ye="show",Tc="dropup",xc="dropend",Cc="dropstart",Dc="dropup-center",Mc="dropdown-center",ee='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Lc=`${ee}.${ye}`,Sn=".dropdown-menu",Nc=".navbar",$c=".navbar-nav",Ic=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Rc=pt()?"top-end":"top-start",Pc=pt()?"top-start":"top-end",Fc=pt()?"bottom-end":"bottom-start",Hc=pt()?"bottom-start":"bottom-end",Bc=pt()?"left-start":"right-start",Gc=pt()?"right-start":"left-start",Uc="top",Jc="bottom",jc={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},zc={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class At extends gt{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=S.next(this._element,Sn)[0]||S.prev(this._element,Sn)[0]||S.findOne(Sn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return jc}static get DefaultType(){return zc}static get NAME(){return fi}toggle(){return this._isShown()?this.hide():this.show()}show(){if(zt(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!h.trigger(this._element,Ac,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest($c))for(const o of[].concat(...document.body.children))h.on(o,"mouseover",kn);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ye),this._element.classList.add(ye),h.trigger(this._element,Oc,t)}}hide(){if(zt(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!h.trigger(this._element,wc,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))h.off(o,"mouseover",kn);this._popper&&this._popper.destroy(),this._menu.classList.remove(ye),this._element.classList.remove(ye),this._element.setAttribute("aria-expanded","false"),Pt.removeDataAttribute(this._menu,"popper"),h.trigger(this._element,Sc,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!Rt(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${fi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof Ds>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let t=this._element;this._config.reference==="parent"?t=this._parent:Rt(this._config.reference)?t=jt(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=Fo(t,this._menu,e)}_isShown(){return this._menu.classList.contains(ye)}_getPlacement(){const t=this._parent;if(t.classList.contains(xc))return Bc;if(t.classList.contains(Cc))return Gc;if(t.classList.contains(Dc))return Uc;if(t.classList.contains(Mc))return Jc;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(Tc)?e?Pc:Rc:e?Hc:Fc}_detectNavbar(){return this._element.closest(Nc)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Pt.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...ot(this._config.popperConfig,[void 0,t])}}_selectMenuItem({key:t,target:e}){const o=S.find(Ic,this._menu).filter(i=>Me(i));o.length&&Ho(o,e,t===gi,!o.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=At.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===yc||t.type==="keyup"&&t.key!==bi)return;const e=S.find(Lc);for(const o of e){const i=At.getInstance(o);if(!i||i._config.autoClose===!1)continue;const s=t.composedPath(),l=s.includes(i._menu);if(s.includes(i._element)||i._config.autoClose==="inside"&&!l||i._config.autoClose==="outside"&&l||i._menu.contains(t.target)&&(t.type==="keyup"&&t.key===bi||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:i._element};t.type==="click"&&(a.clickEvent=t),i._completeHide(a)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),o=t.key===_c,i=[Ec,gi].includes(t.key);if(!i&&!o||e&&!o)return;t.preventDefault();const s=this.matches(ee)?this:S.prev(this,ee)[0]||S.next(this,ee)[0]||S.findOne(ee,t.delegateTarget.parentNode),l=At.getOrCreateInstance(s);if(i){t.stopPropagation(),l.show(),l._selectMenuItem(t);return}l._isShown()&&(t.stopPropagation(),l.hide(),s.focus())}}h.on(document,qs,ee,At.dataApiKeydownHandler);h.on(document,qs,Sn,At.dataApiKeydownHandler);h.on(document,Vs,At.clearMenus);h.on(document,kc,At.clearMenus);h.on(document,Vs,ee,function(n){n.preventDefault(),At.getOrCreateInstance(this).toggle()});dt(At);const Ks="backdrop",Wc="fade",_i="show",Ei=`mousedown.bs.${Ks}`,Vc={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},qc={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Ys extends Ze{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Vc}static get DefaultType(){return qc}static get NAME(){return Ks}show(t){if(!this._config.isVisible){ot(t);return}this._append();const e=this._getElement();this._config.isAnimated&&Qe(e),e.classList.add(_i),this._emulateAnimation(()=>{ot(t)})}hide(t){if(!this._config.isVisible){ot(t);return}this._getElement().classList.remove(_i),this._emulateAnimation(()=>{this.dispose(),ot(t)})}dispose(){this._isAppended&&(h.off(this._element,Ei),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Wc),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=jt(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),h.on(t,Ei,()=>{ot(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Is(t,this._getElement(),this._config.isAnimated)}}const Kc="focustrap",Yc="bs.focustrap",xn=`.${Yc}`,Xc=`focusin${xn}`,Qc=`keydown.tab${xn}`,Zc="Tab",tu="forward",yi="backward",eu={autofocus:!0,trapElement:null},nu={autofocus:"boolean",trapElement:"element"};class Xs extends Ze{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return eu}static get DefaultType(){return nu}static get NAME(){return Kc}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),h.off(document,xn),h.on(document,Xc,t=>this._handleFocusin(t)),h.on(document,Qc,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,h.off(document,xn))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const o=S.focusableChildren(e);o.length===0?e.focus():this._lastTabNavDirection===yi?o[o.length-1].focus():o[0].focus()}_handleKeydown(t){t.key===Zc&&(this._lastTabNavDirection=t.shiftKey?yi:tu)}}const wi=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Si=".sticky-top",mn="padding-right",Ai="margin-right";class Eo{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,mn,e=>e+t),this._setElementAttributes(wi,mn,e=>e+t),this._setElementAttributes(Si,Ai,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,mn),this._resetElementAttributes(wi,mn),this._resetElementAttributes(Si,Ai)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,o){const i=this.getWidth(),s=l=>{if(l!==this._element&&window.innerWidth>l.clientWidth+i)return;this._saveInitialAttribute(l,e);const a=window.getComputedStyle(l).getPropertyValue(e);l.style.setProperty(e,`${o(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,s)}_saveInitialAttribute(t,e){const o=t.style.getPropertyValue(e);o&&Pt.setDataAttribute(t,e,o)}_resetElementAttributes(t,e){const o=i=>{const s=Pt.getDataAttribute(i,e);if(s===null){i.style.removeProperty(e);return}Pt.removeDataAttribute(i,e),i.style.setProperty(e,s)};this._applyManipulationCallback(t,o)}_applyManipulationCallback(t,e){if(Rt(t)){e(t);return}for(const o of S.find(t,this._element))e(o)}}const ou="modal",iu="bs.modal",ct=`.${iu}`,su=".data-api",lu="Escape",au=`hide${ct}`,ru=`hidePrevented${ct}`,Qs=`hidden${ct}`,Zs=`show${ct}`,pu=`shown${ct}`,cu=`resize${ct}`,uu=`click.dismiss${ct}`,du=`mousedown.dismiss${ct}`,mu=`keydown.dismiss${ct}`,hu=`click${ct}${su}`,Oi="modal-open",vu="fade",ki="show",Kn="modal-static",fu=".modal.show",bu=".modal-dialog",gu=".modal-body",_u='[data-bs-toggle="modal"]',Eu={backdrop:!0,focus:!0,keyboard:!0},yu={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class xe extends gt{constructor(t,e){super(t,e),this._dialog=S.findOne(bu,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Eo,this._addEventListeners()}static get Default(){return Eu}static get DefaultType(){return yu}static get NAME(){return ou}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||h.trigger(this._element,Zs,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Oi),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||h.trigger(this._element,au).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(ki),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){h.off(window,ct),h.off(this._dialog,ct),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ys({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Xs({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=S.findOne(gu,this._dialog);e&&(e.scrollTop=0),Qe(this._element),this._element.classList.add(ki);const o=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,h.trigger(this._element,pu,{relatedTarget:t})};this._queueCallback(o,this._dialog,this._isAnimated())}_addEventListeners(){h.on(this._element,mu,t=>{if(t.key===lu){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),h.on(window,cu,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),h.on(this._element,du,t=>{h.one(this._element,uu,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Oi),this._resetAdjustments(),this._scrollBar.reset(),h.trigger(this._element,Qs)})}_isAnimated(){return this._element.classList.contains(vu)}_triggerBackdropTransition(){if(h.trigger(this._element,ru).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,o=this._element.style.overflowY;o==="hidden"||this._element.classList.contains(Kn)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(Kn),this._queueCallback(()=>{this._element.classList.remove(Kn),this._queueCallback(()=>{this._element.style.overflowY=o},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),o=e>0;if(o&&!t){const i=pt()?"paddingLeft":"paddingRight";this._element.style[i]=`${e}px`}if(!o&&t){const i=pt()?"paddingRight":"paddingLeft";this._element.style[i]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const o=xe.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof o[t]>"u")throw new TypeError(`No method named "${t}"`);o[t](e)}})}}h.on(document,hu,_u,function(n){const t=S.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),h.one(t,Zs,i=>{i.defaultPrevented||h.one(t,Qs,()=>{Me(this)&&this.focus()})});const e=S.findOne(fu);e&&xe.getInstance(e).hide(),xe.getOrCreateInstance(t).toggle(this)});Ln(xe);dt(xe);const wu="offcanvas",Su="bs.offcanvas",Ht=`.${Su}`,tl=".data-api",Au=`load${Ht}${tl}`,Ou="Escape",Ti="show",xi="showing",Ci="hiding",ku="offcanvas-backdrop",el=".offcanvas.show",Tu=`show${Ht}`,xu=`shown${Ht}`,Cu=`hide${Ht}`,Di=`hidePrevented${Ht}`,nl=`hidden${Ht}`,Du=`resize${Ht}`,Mu=`click${Ht}${tl}`,Lu=`keydown.dismiss${Ht}`,Nu='[data-bs-toggle="offcanvas"]',$u={backdrop:!0,keyboard:!0,scroll:!1},Iu={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Wt extends gt{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return $u}static get DefaultType(){return Iu}static get NAME(){return wu}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||h.trigger(this._element,Tu,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Eo().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(xi);const o=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Ti),this._element.classList.remove(xi),h.trigger(this._element,xu,{relatedTarget:t})};this._queueCallback(o,this._element,!0)}hide(){if(!this._isShown||h.trigger(this._element,Cu).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Ci),this._backdrop.hide();const e=()=>{this._element.classList.remove(Ti,Ci),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Eo().reset(),h.trigger(this._element,nl)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){h.trigger(this._element,Di);return}this.hide()},e=!!this._config.backdrop;return new Ys({className:ku,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new Xs({trapElement:this._element})}_addEventListeners(){h.on(this._element,Lu,t=>{if(t.key===Ou){if(this._config.keyboard){this.hide();return}h.trigger(this._element,Di)}})}static jQueryInterface(t){return this.each(function(){const e=Wt.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}h.on(document,Mu,Nu,function(n){const t=S.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),zt(this))return;h.one(t,nl,()=>{Me(this)&&this.focus()});const e=S.findOne(el);e&&e!==t&&Wt.getInstance(e).hide(),Wt.getOrCreateInstance(t).toggle(this)});h.on(window,Au,()=>{for(const n of S.find(el))Wt.getOrCreateInstance(n).show()});h.on(window,Du,()=>{for(const n of S.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&Wt.getOrCreateInstance(n).hide()});Ln(Wt);dt(Wt);const Ru=/^aria-[\w-]*$/i,ol={"*":["class","dir","id","lang","role",Ru],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Pu=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Fu=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Hu=(n,t)=>{const e=n.nodeName.toLowerCase();return t.includes(e)?Pu.has(e)?!!Fu.test(n.nodeValue):!0:t.filter(o=>o instanceof RegExp).some(o=>o.test(e))};function Bu(n,t,e){if(!n.length)return n;if(e&&typeof e=="function")return e(n);const i=new window.DOMParser().parseFromString(n,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const l of s){const a=l.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){l.remove();continue}const r=[].concat(...l.attributes),u=[].concat(t["*"]||[],t[a]||[]);for(const m of r)Hu(m,u)||l.removeAttribute(m.nodeName)}return i.body.innerHTML}const Gu="TemplateFactory",Uu={allowList:ol,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Ju={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},ju={entry:"(string|element|function|null)",selector:"(string|element)"};class zu extends Ze{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Uu}static get DefaultType(){return Ju}static get NAME(){return Gu}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[i,s]of Object.entries(this._config.content))this._setContent(t,s,i);const e=t.children[0],o=this._resolvePossibleFunction(this._config.extraClass);return o&&e.classList.add(...o.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,o]of Object.entries(t))super._typeCheckConfig({selector:e,entry:o},ju)}_setContent(t,e,o){const i=S.findOne(o,t);if(i){if(e=this._resolvePossibleFunction(e),!e){i.remove();return}if(Rt(e)){this._putElementInTemplate(jt(e),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(e);return}i.textContent=e}}_maybeSanitize(t){return this._config.sanitize?Bu(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return ot(t,[void 0,this])}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const Wu="tooltip",Vu=new Set(["sanitize","allowList","sanitizeFn"]),Yn="fade",qu="modal",hn="show",Ku=".tooltip-inner",Mi=`.${qu}`,Li="hide.bs.modal",Be="hover",Xn="focus",Yu="click",Xu="manual",Qu="hide",Zu="hidden",td="show",ed="shown",nd="inserted",od="click",id="focusin",sd="focusout",ld="mouseenter",ad="mouseleave",rd={AUTO:"auto",TOP:"top",RIGHT:pt()?"left":"right",BOTTOM:"bottom",LEFT:pt()?"right":"left"},pd={allowList:ol,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},cd={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Ne extends gt{constructor(t,e){if(typeof Ds>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return pd}static get DefaultType(){return cd}static get NAME(){return Wu}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),h.off(this._element.closest(Mi),Li,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=h.trigger(this._element,this.constructor.eventName(td)),o=(Ns(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!o)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),h.trigger(this._element,this.constructor.eventName(nd))),this._popper=this._createPopper(i),i.classList.add(hn),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))h.on(a,"mouseover",kn);const l=()=>{h.trigger(this._element,this.constructor.eventName(ed)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(l,this.tip,this._isAnimated())}hide(){if(!this._isShown()||h.trigger(this._element,this.constructor.eventName(Qu)).defaultPrevented)return;if(this._getTipElement().classList.remove(hn),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))h.off(i,"mouseover",kn);this._activeTrigger[Yu]=!1,this._activeTrigger[Xn]=!1,this._activeTrigger[Be]=!1,this._isHovered=null;const o=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),h.trigger(this._element,this.constructor.eventName(Zu)))};this._queueCallback(o,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Yn,hn),e.classList.add(`bs-${this.constructor.NAME}-auto`);const o=Yr(this.constructor.NAME).toString();return e.setAttribute("id",o),this._isAnimated()&&e.classList.add(Yn),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new zu({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Ku]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Yn)}_isShown(){return this.tip&&this.tip.classList.contains(hn)}_createPopper(t){const e=ot(this._config.placement,[this,t,this._element]),o=rd[e.toUpperCase()];return Fo(this._element,t,this._getPopperConfig(o))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return ot(t,[this._element,this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:o=>{this._getTipElement().setAttribute("data-popper-placement",o.state.placement)}}]};return{...e,...ot(this._config.popperConfig,[void 0,e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")h.on(this._element,this.constructor.eventName(od),this._config.selector,o=>{this._initializeOnDelegatedTarget(o).toggle()});else if(e!==Xu){const o=e===Be?this.constructor.eventName(ld):this.constructor.eventName(id),i=e===Be?this.constructor.eventName(ad):this.constructor.eventName(sd);h.on(this._element,o,this._config.selector,s=>{const l=this._initializeOnDelegatedTarget(s);l._activeTrigger[s.type==="focusin"?Xn:Be]=!0,l._enter()}),h.on(this._element,i,this._config.selector,s=>{const l=this._initializeOnDelegatedTarget(s);l._activeTrigger[s.type==="focusout"?Xn:Be]=l._element.contains(s.relatedTarget),l._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},h.on(this._element.closest(Mi),Li,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=Pt.getDataAttributes(this._element);for(const o of Object.keys(e))Vu.has(o)&&delete e[o];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:jt(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,o]of Object.entries(this._config))this.constructor.Default[e]!==o&&(t[e]=o);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=Ne.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}dt(Ne);const ud="popover",dd=".popover-header",md=".popover-body",hd={...Ne.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},vd={...Ne.DefaultType,content:"(null|string|element|function)"};class Uo extends Ne{static get Default(){return hd}static get DefaultType(){return vd}static get NAME(){return ud}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[dd]:this._getTitle(),[md]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=Uo.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}dt(Uo);const fd="scrollspy",bd="bs.scrollspy",Jo=`.${bd}`,gd=".data-api",_d=`activate${Jo}`,Ni=`click${Jo}`,Ed=`load${Jo}${gd}`,yd="dropdown-item",be="active",wd='[data-bs-spy="scroll"]',Qn="[href]",Sd=".nav, .list-group",$i=".nav-link",Ad=".nav-item",Od=".list-group-item",kd=`${$i}, ${Ad} > ${$i}, ${Od}`,Td=".dropdown",xd=".dropdown-toggle",Cd={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Dd={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class In extends gt{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Cd}static get DefaultType(){return Dd}static get NAME(){return fd}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=jt(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(h.off(this._config.target,Ni),h.on(this._config.target,Ni,Qn,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const o=this._rootElement||window,i=e.offsetTop-this._element.offsetTop;if(o.scrollTo){o.scrollTo({top:i,behavior:"smooth"});return}o.scrollTop=i}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=l=>this._targetLinks.get(`#${l.target.id}`),o=l=>{this._previousScrollData.visibleEntryTop=l.target.offsetTop,this._process(e(l))},i=(this._rootElement||document.documentElement).scrollTop,s=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const l of t){if(!l.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(l));continue}const a=l.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&a){if(o(l),!i)return;continue}!s&&!a&&o(l)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=S.find(Qn,this._config.target);for(const e of t){if(!e.hash||zt(e))continue;const o=S.findOne(decodeURI(e.hash),this._element);Me(o)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,o))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(be),this._activateParents(t),h.trigger(this._element,_d,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(yd)){S.findOne(xd,t.closest(Td)).classList.add(be);return}for(const e of S.parents(t,Sd))for(const o of S.prev(e,kd))o.classList.add(be)}_clearActiveClass(t){t.classList.remove(be);const e=S.find(`${Qn}.${be}`,t);for(const o of e)o.classList.remove(be)}static jQueryInterface(t){return this.each(function(){const e=In.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(window,Ed,()=>{for(const n of S.find(wd))In.getOrCreateInstance(n)});dt(In);const Md="tab",Ld="bs.tab",ae=`.${Ld}`,Nd=`hide${ae}`,$d=`hidden${ae}`,Id=`show${ae}`,Rd=`shown${ae}`,Pd=`click${ae}`,Fd=`keydown${ae}`,Hd=`load${ae}`,Bd="ArrowLeft",Ii="ArrowRight",Gd="ArrowUp",Ri="ArrowDown",Zn="Home",Pi="End",ne="active",Fi="fade",to="show",Ud="dropdown",il=".dropdown-toggle",Jd=".dropdown-menu",eo=`:not(${il})`,jd='.list-group, .nav, [role="tablist"]',zd=".nav-item, .list-group-item",Wd=`.nav-link${eo}, .list-group-item${eo}, [role="tab"]${eo}`,sl='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',no=`${Wd}, ${sl}`,Vd=`.${ne}[data-bs-toggle="tab"], .${ne}[data-bs-toggle="pill"], .${ne}[data-bs-toggle="list"]`;class Ce extends gt{constructor(t){super(t),this._parent=this._element.closest(jd),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),h.on(this._element,Fd,e=>this._keydown(e)))}static get NAME(){return Md}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),o=e?h.trigger(e,Nd,{relatedTarget:t}):null;h.trigger(t,Id,{relatedTarget:e}).defaultPrevented||o&&o.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(ne),this._activate(S.getElementFromSelector(t));const o=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(to);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),h.trigger(t,Rd,{relatedTarget:e})};this._queueCallback(o,t,t.classList.contains(Fi))}_deactivate(t,e){if(!t)return;t.classList.remove(ne),t.blur(),this._deactivate(S.getElementFromSelector(t));const o=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(to);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),h.trigger(t,$d,{relatedTarget:e})};this._queueCallback(o,t,t.classList.contains(Fi))}_keydown(t){if(![Bd,Ii,Gd,Ri,Zn,Pi].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter(i=>!zt(i));let o;if([Zn,Pi].includes(t.key))o=e[t.key===Zn?0:e.length-1];else{const i=[Ii,Ri].includes(t.key);o=Ho(e,t.target,i,!0)}o&&(o.focus({preventScroll:!0}),Ce.getOrCreateInstance(o).show())}_getChildren(){return S.find(no,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const o of e)this._setInitialAttributesOnChild(o)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),o=this._getOuterElement(t);t.setAttribute("aria-selected",e),o!==t&&this._setAttributeIfNotExists(o,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=S.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const o=this._getOuterElement(t);if(!o.classList.contains(Ud))return;const i=(s,l)=>{const a=S.findOne(s,o);a&&a.classList.toggle(l,e)};i(il,ne),i(Jd,to),o.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,o){t.hasAttribute(e)||t.setAttribute(e,o)}_elemIsActive(t){return t.classList.contains(ne)}_getInnerElement(t){return t.matches(no)?t:S.findOne(no,t)}_getOuterElement(t){return t.closest(zd)||t}static jQueryInterface(t){return this.each(function(){const e=Ce.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(document,Pd,sl,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!zt(this)&&Ce.getOrCreateInstance(this).show()});h.on(window,Hd,()=>{for(const n of S.find(Vd))Ce.getOrCreateInstance(n)});dt(Ce);const qd="toast",Kd="bs.toast",Kt=`.${Kd}`,Yd=`mouseover${Kt}`,Xd=`mouseout${Kt}`,Qd=`focusin${Kt}`,Zd=`focusout${Kt}`,tm=`hide${Kt}`,em=`hidden${Kt}`,nm=`show${Kt}`,om=`shown${Kt}`,im="fade",Hi="hide",vn="show",fn="showing",sm={animation:"boolean",autohide:"boolean",delay:"number"},lm={animation:!0,autohide:!0,delay:5e3};class Rn extends gt{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return lm}static get DefaultType(){return sm}static get NAME(){return qd}show(){if(h.trigger(this._element,nm).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(im);const e=()=>{this._element.classList.remove(fn),h.trigger(this._element,om),this._maybeScheduleHide()};this._element.classList.remove(Hi),Qe(this._element),this._element.classList.add(vn,fn),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||h.trigger(this._element,tm).defaultPrevented)return;const e=()=>{this._element.classList.add(Hi),this._element.classList.remove(fn,vn),h.trigger(this._element,em)};this._element.classList.add(fn),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(vn),super.dispose()}isShown(){return this._element.classList.contains(vn)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const o=t.relatedTarget;this._element===o||this._element.contains(o)||this._maybeScheduleHide()}_setListeners(){h.on(this._element,Yd,t=>this._onInteraction(t,!0)),h.on(this._element,Xd,t=>this._onInteraction(t,!1)),h.on(this._element,Qd,t=>this._onInteraction(t,!0)),h.on(this._element,Zd,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=Rn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Ln(Rn);dt(Rn);/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */const{entries:ll,setPrototypeOf:Bi,isFrozen:am,getPrototypeOf:rm,getOwnPropertyDescriptor:pm}=Object;let{freeze:tt,seal:ut,create:al}=Object,{apply:yo,construct:wo}=typeof Reflect<"u"&&Reflect;tt||(tt=function(t){return t});ut||(ut=function(t){return t});yo||(yo=function(t,e,o){return t.apply(e,o)});wo||(wo=function(t,e){return new t(...e)});const bn=et(Array.prototype.forEach),cm=et(Array.prototype.lastIndexOf),Gi=et(Array.prototype.pop),Ge=et(Array.prototype.push),um=et(Array.prototype.splice),An=et(String.prototype.toLowerCase),oo=et(String.prototype.toString),Ui=et(String.prototype.match),Ue=et(String.prototype.replace),dm=et(String.prototype.indexOf),mm=et(String.prototype.trim),vt=et(Object.prototype.hasOwnProperty),X=et(RegExp.prototype.test),Je=hm(TypeError);function et(n){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var e=arguments.length,o=new Array(e>1?e-1:0),i=1;i<e;i++)o[i-1]=arguments[i];return yo(n,t,o)}}function hm(n){return function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return wo(n,e)}}function T(n,t){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:An;Bi&&Bi(n,null);let o=t.length;for(;o--;){let i=t[o];if(typeof i=="string"){const s=e(i);s!==i&&(am(t)||(t[o]=s),i=s)}n[i]=!0}return n}function vm(n){for(let t=0;t<n.length;t++)vt(n,t)||(n[t]=null);return n}function te(n){const t=al(null);for(const[e,o]of ll(n))vt(n,e)&&(Array.isArray(o)?t[e]=vm(o):o&&typeof o=="object"&&o.constructor===Object?t[e]=te(o):t[e]=o);return t}function je(n,t){for(;n!==null;){const o=pm(n,t);if(o){if(o.get)return et(o.get);if(typeof o.value=="function")return et(o.value)}n=rm(n)}function e(){return null}return e}const Ji=tt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),io=tt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),so=tt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),fm=tt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),lo=tt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),bm=tt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ji=tt(["#text"]),zi=tt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),ao=tt(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Wi=tt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),gn=tt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),gm=ut(/\{\{[\w\W]*|[\w\W]*\}\}/gm),_m=ut(/<%[\w\W]*|[\w\W]*%>/gm),Em=ut(/\$\{[\w\W]*/gm),ym=ut(/^data-[\-\w.\u00B7-\uFFFF]+$/),wm=ut(/^aria-[\-\w]+$/),rl=ut(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Sm=ut(/^(?:\w+script|data):/i),Am=ut(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),pl=ut(/^html$/i),Om=ut(/^[a-z][.\w]*(-[.\w]+)+$/i);var Vi=Object.freeze({__proto__:null,ARIA_ATTR:wm,ATTR_WHITESPACE:Am,CUSTOM_ELEMENT:Om,DATA_ATTR:ym,DOCTYPE_NAME:pl,ERB_EXPR:_m,IS_ALLOWED_URI:rl,IS_SCRIPT_OR_DATA:Sm,MUSTACHE_EXPR:gm,TMPLIT_EXPR:Em});const ze={element:1,text:3,progressingInstruction:7,comment:8,document:9},km=function(){return typeof window>"u"?null:window},Tm=function(t,e){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let o=null;const i="data-tt-policy-suffix";e&&e.hasAttribute(i)&&(o=e.getAttribute(i));const s="dompurify"+(o?"#"+o:"");try{return t.createPolicy(s,{createHTML(l){return l},createScriptURL(l){return l}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}},qi=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function cl(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:km();const t=w=>cl(w);if(t.version="3.2.5",t.removed=[],!n||!n.document||n.document.nodeType!==ze.document||!n.Element)return t.isSupported=!1,t;let{document:e}=n;const o=e,i=o.currentScript,{DocumentFragment:s,HTMLTemplateElement:l,Node:a,Element:r,NodeFilter:u,NamedNodeMap:m=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:f,DOMParser:b,trustedTypes:g}=n,O=r.prototype,A=je(O,"cloneNode"),k=je(O,"remove"),M=je(O,"nextSibling"),I=je(O,"childNodes"),$=je(O,"parentNode");if(typeof l=="function"){const w=e.createElement("template");w.content&&w.content.ownerDocument&&(e=w.content.ownerDocument)}let y,x="";const{implementation:C,createNodeIterator:R,createDocumentFragment:U,getElementsByTagName:G}=e,{importNode:B}=o;let D=qi();t.isSupported=typeof ll=="function"&&typeof $=="function"&&C&&C.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:q,ERB_EXPR:J,TMPLIT_EXPR:mt,DATA_ATTR:kt,ARIA_ATTR:K,IS_SCRIPT_OR_DATA:it,ATTR_WHITESPACE:Yt,CUSTOM_ELEMENT:Tt}=Vi;let{IS_ALLOWED_URI:Xt}=Vi,F=null;const Bt=T({},[...Ji,...io,...so,...lo,...ji]);let H=null;const xt=T({},[...zi,...ao,...Wi,...gn]);let L=Object.seal(al(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ht=null,Gt=null,_t=!0,Qt=!0,nn=!1,re=!0,Ut=!1,pe=!0,Ct=!1,$e=!1,ce=!1,Dt=!1,ue=!1,de=!1,Et=!0,Zt=!1;const on="user-content-";let me=!0,Mt=!1,Lt={},Nt=null;const Ie=T({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Re=null;const jo=T({},["audio","video","img","source","image","track"]);let Pn=null;const zo=T({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),sn="http://www.w3.org/1998/Math/MathML",ln="http://www.w3.org/2000/svg",$t="http://www.w3.org/1999/xhtml";let he=$t,Fn=!1,Hn=null;const Nl=T({},[sn,ln,$t],oo);let an=T({},["mi","mo","mn","ms","mtext"]),rn=T({},["annotation-xml"]);const $l=T({},["title","style","font","a","script"]);let Pe=null;const Il=["application/xhtml+xml","text/html"],Rl="text/html";let j=null,ve=null;const Pl=e.createElement("form"),Wo=function(p){return p instanceof RegExp||p instanceof Function},Bn=function(){let p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(ve&&ve===p)){if((!p||typeof p!="object")&&(p={}),p=te(p),Pe=Il.indexOf(p.PARSER_MEDIA_TYPE)===-1?Rl:p.PARSER_MEDIA_TYPE,j=Pe==="application/xhtml+xml"?oo:An,F=vt(p,"ALLOWED_TAGS")?T({},p.ALLOWED_TAGS,j):Bt,H=vt(p,"ALLOWED_ATTR")?T({},p.ALLOWED_ATTR,j):xt,Hn=vt(p,"ALLOWED_NAMESPACES")?T({},p.ALLOWED_NAMESPACES,oo):Nl,Pn=vt(p,"ADD_URI_SAFE_ATTR")?T(te(zo),p.ADD_URI_SAFE_ATTR,j):zo,Re=vt(p,"ADD_DATA_URI_TAGS")?T(te(jo),p.ADD_DATA_URI_TAGS,j):jo,Nt=vt(p,"FORBID_CONTENTS")?T({},p.FORBID_CONTENTS,j):Ie,ht=vt(p,"FORBID_TAGS")?T({},p.FORBID_TAGS,j):{},Gt=vt(p,"FORBID_ATTR")?T({},p.FORBID_ATTR,j):{},Lt=vt(p,"USE_PROFILES")?p.USE_PROFILES:!1,_t=p.ALLOW_ARIA_ATTR!==!1,Qt=p.ALLOW_DATA_ATTR!==!1,nn=p.ALLOW_UNKNOWN_PROTOCOLS||!1,re=p.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ut=p.SAFE_FOR_TEMPLATES||!1,pe=p.SAFE_FOR_XML!==!1,Ct=p.WHOLE_DOCUMENT||!1,Dt=p.RETURN_DOM||!1,ue=p.RETURN_DOM_FRAGMENT||!1,de=p.RETURN_TRUSTED_TYPE||!1,ce=p.FORCE_BODY||!1,Et=p.SANITIZE_DOM!==!1,Zt=p.SANITIZE_NAMED_PROPS||!1,me=p.KEEP_CONTENT!==!1,Mt=p.IN_PLACE||!1,Xt=p.ALLOWED_URI_REGEXP||rl,he=p.NAMESPACE||$t,an=p.MATHML_TEXT_INTEGRATION_POINTS||an,rn=p.HTML_INTEGRATION_POINTS||rn,L=p.CUSTOM_ELEMENT_HANDLING||{},p.CUSTOM_ELEMENT_HANDLING&&Wo(p.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(L.tagNameCheck=p.CUSTOM_ELEMENT_HANDLING.tagNameCheck),p.CUSTOM_ELEMENT_HANDLING&&Wo(p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(L.attributeNameCheck=p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),p.CUSTOM_ELEMENT_HANDLING&&typeof p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(L.allowCustomizedBuiltInElements=p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ut&&(Qt=!1),ue&&(Dt=!0),Lt&&(F=T({},ji),H=[],Lt.html===!0&&(T(F,Ji),T(H,zi)),Lt.svg===!0&&(T(F,io),T(H,ao),T(H,gn)),Lt.svgFilters===!0&&(T(F,so),T(H,ao),T(H,gn)),Lt.mathMl===!0&&(T(F,lo),T(H,Wi),T(H,gn))),p.ADD_TAGS&&(F===Bt&&(F=te(F)),T(F,p.ADD_TAGS,j)),p.ADD_ATTR&&(H===xt&&(H=te(H)),T(H,p.ADD_ATTR,j)),p.ADD_URI_SAFE_ATTR&&T(Pn,p.ADD_URI_SAFE_ATTR,j),p.FORBID_CONTENTS&&(Nt===Ie&&(Nt=te(Nt)),T(Nt,p.FORBID_CONTENTS,j)),me&&(F["#text"]=!0),Ct&&T(F,["html","head","body"]),F.table&&(T(F,["tbody"]),delete ht.tbody),p.TRUSTED_TYPES_POLICY){if(typeof p.TRUSTED_TYPES_POLICY.createHTML!="function")throw Je('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof p.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Je('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');y=p.TRUSTED_TYPES_POLICY,x=y.createHTML("")}else y===void 0&&(y=Tm(g,i)),y!==null&&typeof x=="string"&&(x=y.createHTML(""));tt&&tt(p),ve=p}},Vo=T({},[...io,...so,...fm]),qo=T({},[...lo,...bm]),Fl=function(p){let v=$(p);(!v||!v.tagName)&&(v={namespaceURI:he,tagName:"template"});const _=An(p.tagName),P=An(v.tagName);return Hn[p.namespaceURI]?p.namespaceURI===ln?v.namespaceURI===$t?_==="svg":v.namespaceURI===sn?_==="svg"&&(P==="annotation-xml"||an[P]):!!Vo[_]:p.namespaceURI===sn?v.namespaceURI===$t?_==="math":v.namespaceURI===ln?_==="math"&&rn[P]:!!qo[_]:p.namespaceURI===$t?v.namespaceURI===ln&&!rn[P]||v.namespaceURI===sn&&!an[P]?!1:!qo[_]&&($l[_]||!Vo[_]):!!(Pe==="application/xhtml+xml"&&Hn[p.namespaceURI]):!1},yt=function(p){Ge(t.removed,{element:p});try{$(p).removeChild(p)}catch{k(p)}},pn=function(p,v){try{Ge(t.removed,{attribute:v.getAttributeNode(p),from:v})}catch{Ge(t.removed,{attribute:null,from:v})}if(v.removeAttribute(p),p==="is")if(Dt||ue)try{yt(v)}catch{}else try{v.setAttribute(p,"")}catch{}},Ko=function(p){let v=null,_=null;if(ce)p="<remove></remove>"+p;else{const z=Ui(p,/^[\r\n\t ]+/);_=z&&z[0]}Pe==="application/xhtml+xml"&&he===$t&&(p='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+p+"</body></html>");const P=y?y.createHTML(p):p;if(he===$t)try{v=new b().parseFromString(P,Pe)}catch{}if(!v||!v.documentElement){v=C.createDocument(he,"template",null);try{v.documentElement.innerHTML=Fn?x:P}catch{}}const W=v.body||v.documentElement;return p&&_&&W.insertBefore(e.createTextNode(_),W.childNodes[0]||null),he===$t?G.call(v,Ct?"html":"body")[0]:Ct?v.documentElement:W},Yo=function(p){return R.call(p.ownerDocument||p,p,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},Gn=function(p){return p instanceof f&&(typeof p.nodeName!="string"||typeof p.textContent!="string"||typeof p.removeChild!="function"||!(p.attributes instanceof m)||typeof p.removeAttribute!="function"||typeof p.setAttribute!="function"||typeof p.namespaceURI!="string"||typeof p.insertBefore!="function"||typeof p.hasChildNodes!="function")},Xo=function(p){return typeof a=="function"&&p instanceof a};function It(w,p,v){bn(w,_=>{_.call(t,p,v,ve)})}const Qo=function(p){let v=null;if(It(D.beforeSanitizeElements,p,null),Gn(p))return yt(p),!0;const _=j(p.nodeName);if(It(D.uponSanitizeElement,p,{tagName:_,allowedTags:F}),p.hasChildNodes()&&!Xo(p.firstElementChild)&&X(/<[/\w!]/g,p.innerHTML)&&X(/<[/\w!]/g,p.textContent)||p.nodeType===ze.progressingInstruction||pe&&p.nodeType===ze.comment&&X(/<[/\w]/g,p.data))return yt(p),!0;if(!F[_]||ht[_]){if(!ht[_]&&ti(_)&&(L.tagNameCheck instanceof RegExp&&X(L.tagNameCheck,_)||L.tagNameCheck instanceof Function&&L.tagNameCheck(_)))return!1;if(me&&!Nt[_]){const P=$(p)||p.parentNode,W=I(p)||p.childNodes;if(W&&P){const z=W.length;for(let nt=z-1;nt>=0;--nt){const wt=A(W[nt],!0);wt.__removalCount=(p.__removalCount||0)+1,P.insertBefore(wt,M(p))}}}return yt(p),!0}return p instanceof r&&!Fl(p)||(_==="noscript"||_==="noembed"||_==="noframes")&&X(/<\/no(script|embed|frames)/i,p.innerHTML)?(yt(p),!0):(Ut&&p.nodeType===ze.text&&(v=p.textContent,bn([q,J,mt],P=>{v=Ue(v,P," ")}),p.textContent!==v&&(Ge(t.removed,{element:p.cloneNode()}),p.textContent=v)),It(D.afterSanitizeElements,p,null),!1)},Zo=function(p,v,_){if(Et&&(v==="id"||v==="name")&&(_ in e||_ in Pl))return!1;if(!(Qt&&!Gt[v]&&X(kt,v))){if(!(_t&&X(K,v))){if(!H[v]||Gt[v]){if(!(ti(p)&&(L.tagNameCheck instanceof RegExp&&X(L.tagNameCheck,p)||L.tagNameCheck instanceof Function&&L.tagNameCheck(p))&&(L.attributeNameCheck instanceof RegExp&&X(L.attributeNameCheck,v)||L.attributeNameCheck instanceof Function&&L.attributeNameCheck(v))||v==="is"&&L.allowCustomizedBuiltInElements&&(L.tagNameCheck instanceof RegExp&&X(L.tagNameCheck,_)||L.tagNameCheck instanceof Function&&L.tagNameCheck(_))))return!1}else if(!Pn[v]){if(!X(Xt,Ue(_,Yt,""))){if(!((v==="src"||v==="xlink:href"||v==="href")&&p!=="script"&&dm(_,"data:")===0&&Re[p])){if(!(nn&&!X(it,Ue(_,Yt,"")))){if(_)return!1}}}}}}return!0},ti=function(p){return p!=="annotation-xml"&&Ui(p,Tt)},ei=function(p){It(D.beforeSanitizeAttributes,p,null);const{attributes:v}=p;if(!v||Gn(p))return;const _={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:H,forceKeepAttr:void 0};let P=v.length;for(;P--;){const W=v[P],{name:z,namespaceURI:nt,value:wt}=W,Fe=j(z);let Y=z==="value"?wt:mm(wt);if(_.attrName=Fe,_.attrValue=Y,_.keepAttr=!0,_.forceKeepAttr=void 0,It(D.uponSanitizeAttribute,p,_),Y=_.attrValue,Zt&&(Fe==="id"||Fe==="name")&&(pn(z,p),Y=on+Y),pe&&X(/((--!?|])>)|<\/(style|title)/i,Y)){pn(z,p);continue}if(_.forceKeepAttr||(pn(z,p),!_.keepAttr))continue;if(!re&&X(/\/>/i,Y)){pn(z,p);continue}Ut&&bn([q,J,mt],oi=>{Y=Ue(Y,oi," ")});const ni=j(p.nodeName);if(Zo(ni,Fe,Y)){if(y&&typeof g=="object"&&typeof g.getAttributeType=="function"&&!nt)switch(g.getAttributeType(ni,Fe)){case"TrustedHTML":{Y=y.createHTML(Y);break}case"TrustedScriptURL":{Y=y.createScriptURL(Y);break}}try{nt?p.setAttributeNS(nt,z,Y):p.setAttribute(z,Y),Gn(p)?yt(p):Gi(t.removed)}catch{}}}It(D.afterSanitizeAttributes,p,null)},Hl=function w(p){let v=null;const _=Yo(p);for(It(D.beforeSanitizeShadowDOM,p,null);v=_.nextNode();)It(D.uponSanitizeShadowNode,v,null),Qo(v),ei(v),v.content instanceof s&&w(v.content);It(D.afterSanitizeShadowDOM,p,null)};return t.sanitize=function(w){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=null,_=null,P=null,W=null;if(Fn=!w,Fn&&(w="<!-->"),typeof w!="string"&&!Xo(w))if(typeof w.toString=="function"){if(w=w.toString(),typeof w!="string")throw Je("dirty is not a string, aborting")}else throw Je("toString is not a function");if(!t.isSupported)return w;if($e||Bn(p),t.removed=[],typeof w=="string"&&(Mt=!1),Mt){if(w.nodeName){const wt=j(w.nodeName);if(!F[wt]||ht[wt])throw Je("root node is forbidden and cannot be sanitized in-place")}}else if(w instanceof a)v=Ko("<!---->"),_=v.ownerDocument.importNode(w,!0),_.nodeType===ze.element&&_.nodeName==="BODY"||_.nodeName==="HTML"?v=_:v.appendChild(_);else{if(!Dt&&!Ut&&!Ct&&w.indexOf("<")===-1)return y&&de?y.createHTML(w):w;if(v=Ko(w),!v)return Dt?null:de?x:""}v&&ce&&yt(v.firstChild);const z=Yo(Mt?w:v);for(;P=z.nextNode();)Qo(P),ei(P),P.content instanceof s&&Hl(P.content);if(Mt)return w;if(Dt){if(ue)for(W=U.call(v.ownerDocument);v.firstChild;)W.appendChild(v.firstChild);else W=v;return(H.shadowroot||H.shadowrootmode)&&(W=B.call(o,W,!0)),W}let nt=Ct?v.outerHTML:v.innerHTML;return Ct&&F["!doctype"]&&v.ownerDocument&&v.ownerDocument.doctype&&v.ownerDocument.doctype.name&&X(pl,v.ownerDocument.doctype.name)&&(nt="<!DOCTYPE "+v.ownerDocument.doctype.name+`>
`+nt),Ut&&bn([q,J,mt],wt=>{nt=Ue(nt,wt," ")}),y&&de?y.createHTML(nt):nt},t.setConfig=function(){let w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Bn(w),$e=!0},t.clearConfig=function(){ve=null,$e=!1},t.isValidAttribute=function(w,p,v){ve||Bn({});const _=j(w),P=j(p);return Zo(_,P,v)},t.addHook=function(w,p){typeof p=="function"&&Ge(D[w],p)},t.removeHook=function(w,p){if(p!==void 0){const v=cm(D[w],p);return v===-1?void 0:um(D[w],v,1)[0]}return Gi(D[w])},t.removeHooks=function(w){D[w]=[]},t.removeAllHooks=function(){D=qi()},t}var bt=cl(),xm=Object.defineProperty,Cm=(n,t,e)=>t in n?xm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,E=(n,t,e)=>Cm(n,typeof t!="symbol"?t+"":t,e),Dm=class{constructor(t){E(this,"_distinctEvent"),E(this,"_boundedEvents",[]),this._distinctEvent=(t==null?void 0:t.distinctEvent)??!1}get boundedEvents(){return this._boundedEvents}dispose(){this.unbindAll(),this._boundedEvents=[]}bind(t,e,o,i,s=""){let l=Array.isArray(e)?e:[e];typeof(t==null?void 0:t.forEach)=="function"?t.forEach(a=>this.bindElementEvents(a,l,o,i,s)):this.bindElementEvents(t,l,o,i,s)}hasBinding(t,e){return this._boundedEvents.some(o=>o.element===t&&(!e||o.eventName===e))}unbind(t,e,o){var i;if(t){let s=Array.isArray(t)?t:[t],l=Array.isArray(e)?e:[e||""];for(let a of s){o||(o=this._boundedEvents.find(r=>{if(r.element===a&&(!e||r.eventName===e))return r.listener}));for(let r of l)(i=a==null?void 0:a.removeEventListener)==null||i.call(a,r,o)}}}unbindAll(t){if(t){let e=Array.isArray(t)?t:[t];for(let o=this._boundedEvents.length-1;o>=0;--o){let i=this._boundedEvents[o];if(e.some(s=>s===i.groupName)){let{element:s,eventName:l,listener:a}=i;this.unbind(s,l,a),this._boundedEvents.splice(o,1)}}}else for(;this._boundedEvents.length>0;){let{element:e,eventName:o,listener:i}=this._boundedEvents.pop();this.unbind(e,o,i)}}bindElementEvents(t,e,o,i,s=""){for(let l of e)(!this._distinctEvent||this._distinctEvent&&!this.hasBinding(t,l))&&(t.addEventListener(l,o,i),this._boundedEvents.push({element:t,eventName:l,listener:o,groupName:s}))}},ul=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Mm={formatSelectAll(){return"[Select all]"},formatAllSelected(){return"All selected"},formatCountSelected(n,t){return`${n} of ${t} selected`},formatNoMatchesFound(){return"No matches found"},formatOkButton(){return"OK"},formatLazyLoading(){return"Loading..."}};ul.locales["en-US"]=Mm;var dl=ul.locales,Lm=50,Nm=4,V=()=>!1,$m=()=>!0,ml={name:"",placeholder:"",classes:"",classPrefix:"",data:void 0,locale:void 0,selectAll:!0,single:void 0,singleRadio:!1,multiple:!1,hideOptgroupCheckboxes:!1,multipleWidth:80,width:void 0,dropWidth:void 0,maxHeight:250,maxHeightUnit:"px",position:"bottom",displayValues:!1,displayTitle:!1,displayDelimiter:", ",minimumCountSelected:3,ellipsis:!1,isOpen:!1,keepOpen:!1,openOnHover:!1,container:null,filter:!1,filterGroup:!1,filterPlaceholder:"",filterAcceptOnEnter:!1,filterByDataLength:void 0,customFilter(n){let{text:t,label:e,search:o}=n;return(e||t||"").includes(o)},showClear:!1,autoAdjustDropHeight:!1,autoAdjustDropPosition:!1,autoAdjustDropWidthByTextSize:!1,adjustedHeightPadding:10,useSelectOptionLabel:!1,useSelectOptionLabelToHtml:!1,navigationHighlight:!0,infiniteScroll:!1,virtualScroll:!0,cssStyler:()=>null,textTemplate:n=>n.innerHTML.trim(),labelTemplate:n=>n.label,onBeforeOpen:V,onOpen:V,onClose:V,onCheckAll:V,onUncheckAll:V,onFocus:V,onBlur:V,onOptgroupClick:V,onBeforeClick:$m,onClick:V,onFilter:V,onFilterClear:V,onClear:V,onAfterCreate:V,onDestroy:V,onAfterDestroy:V,onDestroyed:V},Im=["init","getOptions","refreshOptions","getSelects","setSelects","enable","disable","open","close","check","uncheck","checkAll","uncheckAll","checkInvert","focus","blur","refresh","destroy"];Object.assign(ml,dl["en-US"]);var Rm={BLOCK_ROWS:Lm,CLUSTER_BLOCKS:Nm,DEFAULTS:ml,METHODS:Im},ft=Rm;function Pm(n,t,e=!1){let o=Object.keys(n),i=Object.keys(t);if(e&&o.length!==i.length)return!1;for(let s of o)if(i.includes(s)&&n[s]!==t[s])return!1;return!0}function So(n){return typeof n!="object"||n===null?n:Array.isArray(n)?n.map(So):typeof n=="function"?n:Object.fromEntries(Object.entries(n).map(([t,e])=>[t,So(e)]))}function ro(n){return n!=null&&n!==""}function Fm(n,t){return typeof n=="object"?Object.fromEntries(t?Object.entries(n).filter(([e,o])=>!ro(o)&&!t.includes(e)||ro(o)):Object.entries(n).filter(([e,o])=>ro(o))):n}function Hm(n){let t=0;return n.forEach((e,o)=>{e.type==="optgroup"?(e._key=`group_${o}`,e.visible=typeof e.visible>"u"?!0:e.visible,e.children.forEach((i,s)=>{i&&(i.visible=typeof(i==null?void 0:i.visible)>"u"?!0:i.visible,i.divider||(i._key=`option_${o}_${s}`,t+=1))})):(e.visible=typeof e.visible>"u"?!0:e.visible,e.divider||(e._key=`option_${o}`,t+=1))}),t}function _n(n,t,e){if(Array.isArray(n))for(let o of n){if(o[t]===e||o[t]===`${+o[t]}`&&+o[t]===e)return o;if(o.type==="optgroup"){for(let i of o.children)if(i&&(i[t]===e||i[t]===`${+i[t]}`&&+i[t]===e))return i}}}function Bm(n){return n.replace(/(\b)(on[a-z]+)(\s*)=([^>]*)|javascript:([^>]*)[^>]*|(<\s*)(\/*)script([<>]*).*(<\s*)(\/*)script(>*)|(&lt;|&#60;)(\/*)(script|script defer)(.*)(&#62;|&gt;|&gt;">)/gi,"")}function po(n){return Object.keys(n).forEach(t=>n[t]===void 0?delete n[t]:""),n}function ge(n,t){if(typeof n!="string")return n;if(typeof t=="function")return t(n);if(typeof n.normalize=="function")return n.normalize("NFD").replace(/[\u0300-\u036F]/g,"");throw new Error("[Multiple-Select-Vanilla] `normalize()` function is not defined, you can optionally provide a custom parser via the `diacriticParser` option.")}function co(n){let{innerHeight:t=0,innerWidth:e=0}=window,{top:o,left:i}=Jm(),{top:s=0,left:l=0}=Oo(n)||{};return{top:s-o,bottom:t-(s-o),left:l-i,right:e-(l-i)}}function uo(n=""){return n.split(" ").filter(t=>t)}function N(n,t,e){let o=document.createElement(n);return t&&Object.keys(t).forEach(i=>{let s=t[i];typeof s=="object"?Object.assign(o[i],s):o[i]=t[i]}),e==null||e.appendChild(o),o}function hl(n,t,e){var s;let o=(s=n.props)!=null&&s.innerHTML?Um(n.props,"innerHTML"):n.props,i=N(n.tagName,Fm(o,["className","title","style"]),t);if(n.props.innerHTML&&(i.innerHTML=n.props.innerHTML),n.attrs)for(let l of Object.keys(n.attrs))i.setAttribute(l,n.attrs[l]);if(n.children)for(let l of n.children)hl(l,i);return t==null||t.appendChild(i),i}function Ao(n){return n.hasOwnProperty("tagName")?hl(n):document.createElement("li")}function Ke(n){for(;n!=null&&n.firstChild;)n.lastChild&&n.removeChild(n.lastChild);return n}function Oo(n){if(n){let{top:t,left:e,bottom:o,right:i}=n.getBoundingClientRect();return{top:t+window.pageYOffset,left:e+window.pageXOffset,bottom:o,right:i}}}function En(n,t,e){if(!n)return 0;let o=Number.parseFloat(n.style[e]);if(!o||Number.isNaN(o)){let i=e==="height"?"Height":"Width";switch(t){case"outer":o=n[`offset${i}`];break;case"scroll":o=n[`scroll${i}`];break;case"inner":default:o=n[`client${i}`];break}o=n.getBoundingClientRect()[e]}if(!o||Number.isNaN(o)){let i=n.style.display,s=n.style.position;n.style.display="block",n.style.position="absolute";let l=window.getComputedStyle(n)[e];o=Number.parseFloat(l),Number.isNaN(o)&&(o=0),n.style.display=i,n.style.position=s}return o||0}function Ki(n,t){let e=null,o=n==null?void 0:n.parentElement;for(;o;){let[i,s,l,a]=t.match(/^([a-z]*)([#.]{1})([a-z\-]+)$/i)||[];if(l&&a)for(let r of a.replace(l,"").split(" "))o.classList.contains(r)&&(s?(o==null?void 0:o.tagName.toLowerCase())===s&&(e=o):e=o);o=o.parentElement}return e}function Gm(n,t){var e;(e=n.parentNode)==null||e.insertBefore(t,n.nextSibling)}function Um(n,t){let{[t]:e,...o}=n;return o}function Yi(n,t){n!=null&&n.style&&(n.style.display=n.style.display==="none"&&t!==!1||t===!0?"block":"none")}function Jm(){return{left:window.pageXOffset||document.documentElement.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||0}}var jm=class{constructor(t){var o;E(this,"clusterRows"),E(this,"cache"),E(this,"scrollEl"),E(this,"blockHeight"),E(this,"clusterHeight"),E(this,"contentEl"),E(this,"parentEl"),E(this,"itemHeight"),E(this,"lastCluster"),E(this,"scrollTop"),E(this,"dataStart"),E(this,"dataEnd"),E(this,"rows"),E(this,"destroy"),E(this,"callback"),E(this,"sanitizer"),this.rows=t.rows,this.scrollEl=t.scrollEl,this.contentEl=t.contentEl,this.parentEl=(o=t.contentEl)==null?void 0:o.parentElement,this.callback=t.callback,this.cache={},this.scrollTop=this.scrollEl.scrollTop,this.initDOM(this.rows),this.scrollEl.scrollTop=this.scrollTop,this.lastCluster=0;let e=()=>{this.lastCluster!==(this.lastCluster=this.getNum())&&(this.initDOM(this.rows),this.callback())};this.scrollEl.addEventListener("scroll",e,!1),this.destroy=()=>{this.scrollEl.removeEventListener("scroll",e,!1),Ke(this.contentEl)}}reset(t){this.lastCluster=0,this.cache={},Ke(this.contentEl),this.initDOM(t)}initDOM(t){if(typeof this.clusterHeight>"u"){this.cache.scrollTop=this.scrollEl.scrollTop;let l=Ao(t[0]);this.contentEl.appendChild(l),this.contentEl.appendChild(l),this.contentEl.appendChild(l),this.cache.data=[t[0]],this.getRowsHeight()}let e=this.initData(t,this.getNum()),o=this.checkChanges("data",e.rows),i=this.checkChanges("top",e.topOffset),s=this.checkChanges("bottom",e.bottomOffset);Ke(this.contentEl),o&&i?(e.topOffset&&this.contentEl.appendChild(this.getExtra("top",e.topOffset)),e.rows.forEach(l=>this.contentEl.appendChild(Ao(l))),e.bottomOffset&&this.contentEl.appendChild(this.getExtra("bottom",e.bottomOffset))):s&&this.contentEl.lastChild&&(this.contentEl.lastChild.style.height=`${e.bottomOffset}px`)}getRowsHeight(){var t;if(typeof this.itemHeight>"u"){let e=((t=this.parentEl)==null?void 0:t.style.display)||"";this.parentEl&&(e===""||e==="none")&&(this.parentEl.style.display="block");let o=this.contentEl.children,i=o[Math.floor(o.length/2)];this.itemHeight=i.offsetHeight,this.parentEl&&(this.parentEl.style.display=e)}this.blockHeight=this.itemHeight*ft.BLOCK_ROWS,this.clusterRows=ft.BLOCK_ROWS*ft.CLUSTER_BLOCKS,this.clusterHeight=this.blockHeight*ft.CLUSTER_BLOCKS}getNum(){this.scrollTop=this.scrollEl.scrollTop;let t=(this.clusterHeight||0)-(this.blockHeight||0);return t&&Math.floor(this.scrollTop/t)||0}initData(t,e){if(t.length<ft.BLOCK_ROWS)return{topOffset:0,bottomOffset:0,rowsAbove:0,rows:t};let o=Math.max((this.clusterRows-ft.BLOCK_ROWS)*e,0),i=o+this.clusterRows,s=Math.max(o*this.itemHeight,0),l=Math.max((t.length-i)*this.itemHeight,0),a=[],r=o;s<1&&r++;for(let u=o;u<i;u++)t[u]&&a.push(t[u]);return this.dataStart=o,this.dataEnd=i,{topOffset:s,bottomOffset:l,rowsAbove:r,rows:a}}checkChanges(t,e){let o=e!==this.cache[t];return this.cache[t]=e,o}getExtra(t,e){let o=N("li",{className:`virtual-scroll-${t}`});return e&&(o.style.height=`${e}px`),o}},We=".ms-select-all, ul li[data-key]",zm=".ms-select-all.highlighted, ul li[data-key].highlighted",Wm=class{constructor(n,t){this.elm=n,E(this,"_bindEventService"),E(this,"isAllSelected",!1),E(this,"isPartiallyAllSelected",!1),E(this,"fromHtml",!1),E(this,"choiceElm"),E(this,"selectClearElm"),E(this,"closeElm"),E(this,"clearSearchIconElm"),E(this,"filterText",""),E(this,"updateData",[]),E(this,"data",[]),E(this,"dataTotal"),E(this,"dropElm"),E(this,"okButtonElm"),E(this,"filterParentElm"),E(this,"lastFocusedItemKey",""),E(this,"lastMouseOverPosition",""),E(this,"ulElm"),E(this,"parentElm"),E(this,"labelElm"),E(this,"selectAllParentElm"),E(this,"selectAllElm"),E(this,"searchInputElm"),E(this,"selectGroupElms"),E(this,"selectItemElms"),E(this,"noResultsElm"),E(this,"options"),E(this,"selectAllName",""),E(this,"selectGroupName",""),E(this,"selectItemName",""),E(this,"scrolledByMouse",!1),E(this,"openDelayTimer"),E(this,"updateDataStart"),E(this,"updateDataEnd"),E(this,"virtualScroll"),E(this,"_currentHighlightIndex",-1),E(this,"_currentSelectedElm"),E(this,"_isLazyLoaded",!1),E(this,"isMoveUpRecalcRequired",!1),E(this,"locales",{}),this.options=Object.assign({},ft.DEFAULTS,this.elm.dataset,t),this._bindEventService=new Dm({distinctEvent:!0})}get isRenderAsHtml(){return this.options.renderOptionLabelAsHtml||this.options.useSelectOptionLabelToHtml}init(){this.initLocale(),this.initContainer(),this.initData(),this.initSelected(!0),this.initFilter(),this.initDrop(),this.initView(),this.options.onAfterCreate()}destroy(n=!0){var t,e,o,i,s;this.elm&&this.parentElm&&(this.options.onDestroy({hardDestroy:n}),n&&this.options.onHardDestroy(),this.elm.parentElement&&this.parentElm.parentElement&&this.elm.parentElement.insertBefore(this.elm,this.parentElm.parentElement.firstChild),this.elm.classList.remove("ms-offscreen"),this._bindEventService.unbindAll(),(t=this.virtualScroll)==null||t.destroy(),(e=this.dropElm)==null||e.remove(),this.dropElm=void 0,(o=this.parentElm.parentNode)==null||o.removeChild(this.parentElm),this.fromHtml&&(delete this.options.data,this.fromHtml=!1),this.options.onAfterDestroy({hardDestroy:n}),n&&((s=(i=this.options).onAfterHardDestroy)==null||s.call(i),Object.keys(this.options).forEach(l=>delete this[l])))}initLocale(){if(this.options.locale){if(typeof this.options.locale=="object"){Object.assign(this.options,this.options.locale);return}let n=window.multipleSelect.locales,t=this.options.locale.split(/-|_/);if(t[0]=t[0].toLowerCase(),t[1]&&(t[1]=t[1].toUpperCase()),n[this.options.locale])Object.assign(this.options,n[this.options.locale]);else if(n[t.join("-")])Object.assign(this.options,n[t.join("-")]);else if(n[t[0]])Object.assign(this.options,n[t[0]]);else throw new Error(`[multiple-select-vanilla] invalid locales "${this.options.locale}", make sure to import it before using it`)}}initContainer(){var o;let n=this.elm.getAttribute("name")||this.options.name||"";this.options.classes&&this.elm.classList.add(this.options.classes),this.options.classPrefix&&(this.elm.classList.add(this.options.classPrefix),this.options.size&&this.elm.classList.add(`${this.options.classPrefix}-${this.options.size}`)),this.elm.style.display="none",this.labelElm=this.elm.closest("label"),!this.labelElm&&this.elm.id&&(this.labelElm=N("label",{htmlFor:this.elm.id})),(o=this.labelElm)!=null&&o.querySelector("input")&&(this.labelElm=null),this.options.single===void 0&&(this.options.single=!this.elm.multiple),this.parentElm=N("div",{className:uo(`ms-parent ${this.elm.className||""} ${this.options.classes}`).join(" "),dataset:{test:"sel"}}),this.options.darkMode&&this.parentElm.classList.add("ms-dark-mode");let t=this.elm.getAttribute("title")||"";t&&(this.parentElm.title=t),this.options.placeholder=this.options.placeholder||this.elm.getAttribute("placeholder")||"",this.choiceElm=N("button",{className:"ms-choice",type:"button"},this.parentElm),this.options.labelId&&(this.choiceElm.id=this.options.labelId,this.choiceElm.setAttribute("aria-labelledby",this.options.labelId)),this.choiceElm.appendChild(N("span",{className:"ms-placeholder",textContent:this.options.placeholder})),this.options.showClear&&(this.selectClearElm=N("div",{className:"ms-icon ms-icon-close"}),this.selectClearElm.style.display="none",this.choiceElm.appendChild(this.selectClearElm)),this.choiceElm.appendChild(N("div",{className:"ms-icon ms-icon-caret"})),this.dropElm=N("div",{className:`ms-drop ${this.options.position}`,ariaExpanded:"false"},this.parentElm),this.options.darkMode&&this.dropElm.classList.add("ms-dark-mode"),n&&(this.dropElm.dataset.name=n);let e=this.elm.getAttribute("data-test")||this.options.dataTest;e&&(this.parentElm.dataset.test=e,this.dropElm.dataset.test=e),this.closeElm=this.choiceElm.querySelector(".ms-icon-close"),this.options.dropWidth&&(this.dropElm.style.width=typeof this.options.dropWidth=="string"?this.options.dropWidth:`${this.options.dropWidth}px`),Gm(this.elm,this.parentElm),this.elm.disabled&&(this.choiceElm.classList.add("disabled"),this.choiceElm.disabled=!0),this.selectAllName=`selectAll${n}`,this.selectGroupName=`selectGroup${n}`,this.selectItemName=`selectItem${n}`,this.options.keepOpen||(this._bindEventService.unbindAll("body-click"),this._bindEventService.bind(document.body,"click",i=>{this.getEventTarget(i)===this.choiceElm||Ki(this.getEventTarget(i),".ms-choice")===this.choiceElm||(this.getEventTarget(i)===this.dropElm||Ki(this.getEventTarget(i),".ms-drop")!==this.dropElm&&this.getEventTarget(i)!==this.elm)&&this.options.isOpen&&this.close("body.click")},void 0,"body-click"))}initData(){let n=[];if(this.options.data){if(Array.isArray(this.options.data))this.data=this.options.data.map(t=>typeof t=="string"||typeof t=="number"?{text:t,value:t}:t);else if(typeof this.options.data=="object"){for(let[t,e]of Object.entries(this.options.data))n.push({value:t,text:`${e}`});this.data=n}}else this.elm.childNodes.forEach(t=>{let e=this.initRow(t);e&&n.push(e)}),this.options.data=n,this.data=n,this.fromHtml=!0;this.data&&this.options.preFilter&&(this.data=this.data.filter(this.options.preFilter)),this.data&&this.options.preSort&&(this.data=this.data.sort(this.options.preSort)),this.dataTotal=Hm(this.data||[])}initRow(n,t){var o,i;let e={};return((o=n.tagName)==null?void 0:o.toLowerCase())==="option"?(e.type="option",e.text=this.options.textTemplate(n),e.value=n.value,e.visible=!0,e.selected=!!n.selected,e.disabled=t||n.disabled,e.classes=n.getAttribute("class")||"",e.title=n.getAttribute("title")||"",n.dataset.value&&(e._value=n.dataset.value),Object.keys(n.dataset).length&&(e._data=n.dataset,e._data.divider&&(e.divider=e._data.divider)),e):((i=n.tagName)==null?void 0:i.toLowerCase())==="optgroup"?(e.type="optgroup",e.label=this.options.labelTemplate(n),e.visible=!0,e.selected=!!n.selected,e.disabled=n.disabled,e.children=[],Object.keys(n.dataset).length&&(e._data=n.dataset),n.childNodes.forEach(s=>{e.children.push(this.initRow(s,e.disabled))}),e):null}initDrop(){this.initList(!this.options.lazyData),this.update(!0),this.options.isOpen&&this.open(0),this.options.openOnHover&&this.parentElm&&(this._bindEventService.bind(this.parentElm,"mouseover",()=>this.open(null)),this._bindEventService.bind(this.parentElm,"mouseout",()=>this.close("hover.mouseout")))}initFilter(){if(this.filterText="",this.options.filter||!this.options.filterByDataLength)return;let n=0;for(let t of this.data||[])t.type==="optgroup"?n+=t.children.length:n+=1;this.options.filter=n>this.options.filterByDataLength}initList(n=!0){var t,e;if(n&&(this.options.filter&&(this.filterParentElm=N("div",{className:"ms-search"},this.dropElm),this.filterParentElm.appendChild(N("input",{autocomplete:"off",autocapitalize:"off",spellcheck:!1,type:"text",placeholder:this.options.filterPlaceholder||"🔎︎"})),this.options.showSearchClear&&this.filterParentElm.appendChild(N("span",{className:"ms-icon ms-icon-close"}))),this.options.selectAll&&!this.options.single)){let o=this.elm.getAttribute("name")||this.options.name||"";this.selectAllParentElm=N("div",{className:"ms-select-all",dataset:{key:"select_all"}});let i=document.createElement("label"),s=`ms-icon ${this.isAllSelected?"ms-icon-check":this.isPartiallyAllSelected?"ms-icon-minus":"ms-icon-uncheck"}`,l=N("div",{className:"icon-checkbox-container"},i);N("input",{type:"checkbox",ariaChecked:String(this.isAllSelected),checked:this.isAllSelected,dataset:{name:`selectAll${o}`}},l),N("div",{className:s},l),i.appendChild(N("span",{textContent:this.formatSelectAll()})),this.selectAllParentElm.appendChild(i),(t=this.dropElm)==null||t.appendChild(this.selectAllParentElm)}this.ulElm=N("ul",{className:"ms-list",role:"listbox",ariaExpanded:"false",ariaMultiSelectable:String(!this.options.single)}),(e=this.dropElm)==null||e.appendChild(this.ulElm),n&&this.options.showOkButton&&!this.options.single&&(this.okButtonElm=N("button",{className:"ms-ok-button",type:"button",textContent:this.formatOkButton()},this.dropElm)),this.initListItems()}initListItems(){var e;let n=0,t=this.getListRows();if(this.options.selectAll&&!this.options.single&&(n=-1),t.length>ft.BLOCK_ROWS*ft.CLUSTER_BLOCKS){let o=this.dropElm&&((e=this.dropElm)==null?void 0:e.style.display)!=="none";!o&&this.dropElm&&(this.dropElm.style.left="-10000",this.dropElm.style.display="block",this.dropElm.ariaExpanded="true");let i=()=>{if(this.virtualScroll){this._currentHighlightIndex=0,this.updateDataStart=this.virtualScroll.dataStart+n,this.updateDataEnd=this.virtualScroll.dataEnd+n,this.updateDataStart<0&&(this.updateDataStart=0,this._currentHighlightIndex=0);let s=this.getDataLength();this.updateDataEnd>s&&(this.updateDataEnd=s),this.ulElm&&(this.isMoveUpRecalcRequired?this.recalculateArrowMove("up"):this.virtualScroll.dataStart>this.updateDataStart&&this.recalculateArrowMove("down"))}};this.ulElm&&(this.virtualScroll?this.virtualScroll.reset(t):this.virtualScroll=new jm({rows:t,scrollEl:this.ulElm,contentEl:this.ulElm,sanitizer:this.options.sanitizer,callback:()=>{i(),this.events()}})),i(),!o&&this.dropElm&&(this.dropElm.style.left="0",this.dropElm.style.display="none",this.dropElm.ariaExpanded="false")}else this.ulElm&&(Ke(this.ulElm),t.forEach(o=>this.ulElm.appendChild(Ao(o)))),this.updateDataStart=0,this.updateDataEnd=this.updateData.length;return this.events(),t}getEventTarget(n){return n.composedPath?n.composedPath()[0]:n.target}getListRows(){var t;let n=[];return this.updateData=[],(t=this.data)==null||t.forEach(e=>n.push(...this.initListItem(e))),this.options.infiniteScroll&&n.push({tagName:"li",props:{className:"ms-infinite-option",role:"option"}}),n.push({tagName:"li",props:{className:"ms-no-results",textContent:this.formatNoMatchesFound()}}),n}initListItem(n,t=0){let e=(n==null?void 0:n.title)||"",o=this.options.multiple?"multiple":"",i=this.options.single?"radio":"checkbox",s=!!(n!=null&&n.selected),l=this.options.single&&!this.options.singleRadio,a="";if(!(n!=null&&n.visible))return[];if(this.updateData.push(n),l&&(a="hide-radio "),n.selected&&(a+="selected "),n.type==="optgroup"){let A=[],k;if(this.options.hideOptgroupCheckboxes||this.options.single)k={tagName:"span",props:{dataset:{name:this.selectGroupName,key:n._key}}};else{let y={tagName:"input",props:{type:"checkbox",dataset:{name:this.selectGroupName,key:n._key},checked:s,disabled:n.disabled}};l?k=y:k={tagName:"div",props:{className:`icon-checkbox-container${i==="radio"?" radio":""}`},children:[y,{tagName:"div",props:{className:`ms-icon ${s?i==="radio"?"ms-icon-radio":"ms-icon-check":"ms-icon-uncheck"}`}}]}}!a.includes("hide-radio")&&(this.options.hideOptgroupCheckboxes||this.options.single)&&(a+="hide-radio ");let M={tagName:"span",props:{}};this.applyAsTextOrHtmlWhenEnabled(M.props,n.label);let I={tagName:"li",props:{className:uo(`group${this.options.single||n.disabled?" disabled":""} ${a}`).join(" "),role:"option",ariaSelected:String(s),dataset:{key:n._key}},children:[{tagName:"label",props:{className:uo(`optgroup${this.options.single||n.disabled?" disabled":""}`).join(" ")},children:[k,M]}]},$=this.options.cssStyler(n);return $&&(I.props.style=$),A.push(I),n.children.forEach(y=>A.push(...this.initListItem(y,1))),A}if(a+=n.classes||"",t&&this.options.single&&(a+=`option-level-${t} `),n.divider)return[{tagName:"li",props:{className:"option-divider"}}];let r=o||a?(o+a).trim():"";n.disabled&&(r+=" disabled");let u=`${n.disabled?"disabled":""}`,m={tagName:"span",props:{}};this.applyAsTextOrHtmlWhenEnabled(m.props,n.text);let f={tagName:"input",props:{type:i,value:encodeURI(n.value),dataset:{key:n._key,name:this.selectItemName},checked:s,disabled:!!n.disabled}};n.selected&&(f.attrs={checked:"checked"});let b={tagName:"div",props:{className:`icon-checkbox-container${i==="radio"?" radio":""}`},children:[f,{tagName:"div",props:{className:`ms-icon ${f.props.checked?i==="radio"?"ms-icon-radio":"ms-icon-check":"ms-icon-uncheck"}`}}]},g={tagName:"li",props:{role:"option",title:e,ariaSelected:String(s),dataset:{key:n._key}},children:[{tagName:"label",props:{className:u},children:[l?f:b,m]}]};r&&(g.props.className=r);let O=this.options.cssStyler(n);return O&&(g.props.style=O),[g]}initSelected(n=!1){var e,o;let t=0;for(let i of this.data||[])if(i.type==="optgroup"){let s=i.children.filter(l=>(l==null?void 0:l.selected)&&!l.disabled&&l.visible).length;i.children.length&&(i.selected=!this.options.single&&s&&s===i.children.filter(l=>l&&!l.disabled&&l.visible&&!l.divider).length),t+=s}else t+=i.selected&&!i.disabled&&i.visible?1:0;this.isAllSelected=((e=this.data)==null?void 0:e.filter(i=>i.selected&&!i.disabled&&i.visible).length)===((o=this.data)==null?void 0:o.filter(i=>!i.disabled&&i.visible&&!i.divider).length),this.isPartiallyAllSelected=!this.isAllSelected&&t>0,n||(this.isAllSelected?this.options.onCheckAll():t===0&&this.options.onUncheckAll())}initView(){let n;window.getComputedStyle?(n=window.getComputedStyle(this.elm).width,n==="auto"&&(n=En(this.dropElm,"outer","width")+20)):n=En(this.elm,"outer","width")+20,this.parentElm.style.width=`${this.options.width||n}px`,this.elm.classList.add("ms-offscreen")}events(){var t,e,o,i,s,l,a;this._bindEventService.unbindAll(["ok-button","search-input","select-all-checkbox","input-checkbox-list","group-checkbox-list","hover-highlight","arrow-highlight","option-list-scroll"]),this.clearSearchIconElm=(t=this.filterParentElm)==null?void 0:t.querySelector(".ms-icon-close"),this.searchInputElm=(e=this.dropElm)==null?void 0:e.querySelector(".ms-search input"),this.selectAllElm=(o=this.dropElm)==null?void 0:o.querySelector(`input[data-name="${this.selectAllName}"]`),this.selectGroupElms=(i=this.dropElm)==null?void 0:i.querySelectorAll(`input[data-name="${this.selectGroupName}"],span[data-name="${this.selectGroupName}"]`),this.selectItemElms=(s=this.dropElm)==null?void 0:s.querySelectorAll(`input[data-name="${this.selectItemName}"]:enabled`),this.noResultsElm=(l=this.dropElm)==null?void 0:l.querySelector(".ms-no-results");let n=r=>{r.preventDefault(),!this.getEventTarget(r).classList.contains("ms-icon-close")&&(this.options.isOpen?this.close("toggle.close"):this.open())};this.labelElm&&this._bindEventService.bind(this.labelElm,"click",r=>{this.getEventTarget(r).nodeName.toLowerCase()==="label"&&(n(r),(!this.options.filter||!this.options.isOpen)&&this.focus(),r.stopPropagation())}),this._bindEventService.bind(this.choiceElm,"click",n),this.options.onFocus&&this._bindEventService.bind(this.choiceElm,"focus",this.options.onFocus),this.options.onBlur&&this._bindEventService.bind(this.choiceElm,"blur",this.options.onBlur),this._bindEventService.bind(this.parentElm,"keydown",r=>{r.code==="Escape"&&this.handleEscapeKey()}),this.closeElm&&this._bindEventService.bind(this.closeElm,"click",r=>{r.preventDefault(),this._checkAll(!1,!0),this.initSelected(!1),this.updateSelected(),this.update(),this.options.onClear()}),this.clearSearchIconElm&&this._bindEventService.bind(this.clearSearchIconElm,"click",r=>{r.preventDefault(),this.searchInputElm&&(this.searchInputElm.value="",this.searchInputElm.focus()),this._currentHighlightIndex=-1,this.moveHighlightDown(),this.filter(),this.options.onFilterClear()}),this.searchInputElm&&(this._bindEventService.bind(this.searchInputElm,"keydown",r=>{r.code==="Tab"&&r.shiftKey&&this.close("key.shift+tab")},void 0,"search-input"),this._bindEventService.bind(this.searchInputElm,"keyup",r=>{var u,m,f;if(this.options.filterAcceptOnEnter&&["Enter","Space"].includes(r.code)&&((u=this.searchInputElm)!=null&&u.value)){if(this.options.single){let b=[];(m=this.selectItemElms)==null||m.forEach(g=>{var O;((O=g.closest("li"))==null?void 0:O.style.display)!=="none"&&b.push(g)}),b.length&&b[0].hasAttribute("data-name")&&this.setSelects([b[0].value])}else(f=this.selectAllElm)==null||f.click();this.close(`key.${r.code.toLowerCase()}`),this.focus();return}this.filter()},void 0,"search-input")),this.selectAllElm&&this._bindEventService.bind(this.selectAllElm,"click",r=>{var u;return this._checkAll((u=r.currentTarget)==null?void 0:u.checked)},void 0,"select-all-checkbox"),this.okButtonElm&&this._bindEventService.bind(this.okButtonElm,"click",r=>{n(r),r.stopPropagation()},void 0,"ok-button"),this.selectGroupElms&&this._bindEventService.bind(this.selectGroupElms,"click",r=>{let u=r.currentTarget,m=u.checked,f=_n(this.data,"_key",u.dataset.key);this._checkGroup(f,m),this.options.onOptgroupClick(po({label:f.label,selected:f.selected,data:f._data,children:f.children.map(b=>{if(b)return po({text:b.text,value:b.value,selected:b.selected,disabled:b.disabled,data:b._data})})}))},void 0,"group-checkbox-list"),this.selectItemElms&&this._bindEventService.bind(this.selectItemElms,"click",r=>{let u=r.currentTarget,m=u.checked,f=_n(this.data,"_key",u.dataset.key),b=()=>{this.options.single&&this.options.isOpen&&!this.options.keepOpen&&this.close("selection")};if(this.options.onBeforeClick(f)===!1){b();return}this._check(f,m),this.options.onClick(po({text:f.text,value:f.value,selected:f.selected,data:f._data})),b()},void 0,"input-checkbox-list"),this.lastFocusedItemKey&&this.dropElm&&((a=this.dropElm.querySelector(`li[data-key=${this.lastFocusedItemKey}]`))==null||a.focus()),this.options.navigationHighlight&&this.dropElm&&(this._bindEventService.bind(this.dropElm,"mouseover",r=>{var m,f;let u=this.getEventTarget(r).closest(".ms-select-all")||this.getEventTarget(r).closest("li");if((m=this.dropElm)!=null&&m.contains(u)&&this.lastMouseOverPosition!==`${r.clientX}:${r.clientY}`){let b=((f=this.dropElm)==null?void 0:f.querySelectorAll(We))||[],g=Array.from(b).findIndex(O=>O.dataset.key===u.dataset.key);this._currentHighlightIndex!==g&&!u.classList.contains("disabled")&&(this._currentSelectedElm=u,this._currentHighlightIndex=g,this.changeCurrentOptionHighlight(u))}this.lastMouseOverPosition=`${r.clientX}:${r.clientY}`},void 0,"hover-highlight"),this._bindEventService.bind(this.dropElm,"keydown",r=>{var u,m,f,b;switch(r.key){case"ArrowUp":r.preventDefault(),this.moveHighlightUp();break;case"ArrowDown":r.preventDefault(),this.moveHighlightDown();break;case"Escape":this.handleEscapeKey();break;case"Enter":case" ":{if(document.activeElement!==this.okButtonElm){let g=this.getEventTarget(r).closest(".ms-select-all")||this.getEventTarget(r).closest("li");if(r.key===" "&&this.options.filter||this.options.filterAcceptOnEnter&&!g)return;r.preventDefault(),(m=(u=this._currentSelectedElm)==null?void 0:u.querySelector("input"))==null||m.click(),this.options.single&&(this.choiceElm.focus(),this.lastFocusedItemKey=((f=this.choiceElm)==null?void 0:f.dataset.key)||"")}break}case"Tab":{r.preventDefault(),r.shiftKey?document.activeElement===this.okButtonElm?(this.focusSelectAllOrList(),this.highlightCurrentOption()):(this.close("key.shift+tab"),this.choiceElm.focus()):(this.changeCurrentOptionHighlight(),(b=this.okButtonElm)==null||b.focus());break}}},void 0,"arrow-highlight")),this.ulElm&&this.options.infiniteScroll&&this._bindEventService.bind(this.ulElm,"scroll",this.infiniteScrollHandler.bind(this),void 0,"option-list-scroll")}handleEscapeKey(){this.options.keepOpen||(this.close("key.escape"),this.choiceElm.focus())}infiniteScrollHandler(n,t,e){let o=!1;n&&this.getEventTarget(n)&&this.ulElm&&this.scrolledByMouse?this.getEventTarget(n).scrollTop+this.getEventTarget(n).clientHeight===this.ulElm.scrollHeight&&(o=!0):t!==void 0&&t+1===e&&(o=!0),o&&this.ulElm&&(this.virtualScroll?this.initListItems():this.ulElm.scrollTop=0,this._currentHighlightIndex=0,this.highlightCurrentOption())}open(n=0){return new Promise(t=>{n!==null&&n>=0?(window.clearTimeout(this.openDelayTimer),this.openDelayTimer=window.setTimeout(()=>{this.openDrop(),t()},n)):(this.openDrop(),t())})}openDrop(){var t,e,o,i,s,l,a;if(!this.dropElm||(t=this.choiceElm)!=null&&t.classList.contains("disabled"))return;this.options.onBeforeOpen();let n=!1;if(this.options.lazyData&&!this._isLazyLoaded&&(n=!0,(o=(e=this.dropElm)==null?void 0:e.querySelector("ul.ms-list"))==null||o.remove(),this.options.lazyData().then(r=>{var u,m;this.options.data=r,this._isLazyLoaded=!0,(m=(u=this.dropElm)==null?void 0:u.querySelector(".ms-loading"))==null||m.remove(),this.initData(),this.initList(!0),this.update(),this.adjustDropSizeAndPosition()})),this.options.isOpen=!0,this.parentElm.classList.add("ms-parent-open"),(s=(i=this.choiceElm)==null?void 0:i.querySelector("div.ms-icon-caret"))==null||s.classList.add("open"),this.dropElm.style.display="block",this.dropElm.ariaExpanded="true",(l=this.selectAllElm)!=null&&l.parentElement&&(this.selectAllElm.parentElement.style.display="inline-flex"),this.noResultsElm&&(this.noResultsElm.style.display="none"),!this.getDataLength())if((a=this.selectAllElm)!=null&&a.parentElement&&(this.selectAllElm.parentElement.style.display="none"),n&&!this._isLazyLoaded&&!this.dropElm.querySelector(".ms-loading")){let r=N("div",{className:"ms-loading"});r.appendChild(N("div",{className:"ms-icon ms-icon-loading ms-spin"})),r.appendChild(N("span",{textContent:this.formatLazyLoading()})),this.dropElm.appendChild(r)}else this.noResultsElm&&(this.noResultsElm.style.display="block");this.adjustDropSizeAndPosition(),(!n||this._isLazyLoaded)&&(this.getDataLength()&&this.options.filter?(this.searchInputElm&&(this.searchInputElm.value="",this.searchInputElm.focus()),this.filter(!0)):this.focusSelectAllOrList()),this._currentHighlightIndex<0?this.moveHighlightDown():this.highlightCurrentOption(),this.options.onOpen()}adjustDropSizeAndPosition(){if(this.dropElm){if(this.options.container){let o=Oo(this.dropElm),i;this.options.container instanceof Node?i=this.options.container:typeof this.options.container=="string"&&(i=this.options.container==="body"?document.body:document.querySelector(this.options.container)),i.appendChild(this.dropElm),this.dropElm.style.top=`${(o==null?void 0:o.top)??0}px`,this.dropElm.style.left=`${(o==null?void 0:o.left)??0}px`,this.dropElm.style.minWidth="auto",this.dropElm.style.width=`${En(this.parentElm,"outer","width")}px`}let n=this.options.minHeight,t=this.options.maxHeight;this.options.maxHeightUnit==="row"&&(t=En(this.dropElm.querySelector("ul>li"),"outer","height")*this.options.maxHeight),this.ulElm??(this.ulElm=this.dropElm.querySelector("ul")),this.ulElm&&(n&&(!this.options.lazyData||this._isLazyLoaded)&&(this.ulElm.style.minHeight=`${n}px`),this.ulElm.style.maxHeight=`${t}px`),this.dropElm.querySelectorAll(".multiple").forEach(o=>{o.style.width=`${this.options.multipleWidth}px`}),this.options.autoAdjustDropWidthByTextSize&&this.adjustDropWidthByText();let e=this.options.position;if(this.options.autoAdjustDropHeight){if(this.options.autoAdjustDropPosition){let{bottom:o,top:i}=co(this.dropElm),s=this.dropElm.getBoundingClientRect().height;e=o<s&&i>o?"top":"bottom"}this.adjustDropHeight(e)}this.options.autoAdjustDropPosition&&this.adjustDropPosition(!0)}}focusSelectAllOrList(){this.selectAllElm?this.selectAllElm.focus():this.ulElm&&(this.ulElm.tabIndex=0,this.ulElm.focus())}highlightCurrentOption(){var t;let n=((t=this.dropElm)==null?void 0:t.querySelectorAll(We))||[];if(this._currentHighlightIndex<=n.length){let e=n[this._currentHighlightIndex];e&&(this.lastFocusedItemKey=e.dataset.key||"",this._currentSelectedElm=e,this.scrolledByMouse=!1,e.scrollIntoView({block:"nearest"}),this.changeCurrentOptionHighlight(e),window.setTimeout(()=>this.scrolledByMouse=!0,10))}}changeCurrentOptionHighlight(n){var t;n==null||n.classList.add("highlighted"),(((t=this.dropElm)==null?void 0:t.querySelectorAll(zm))||[]).forEach(e=>{e!==n&&e.classList.remove("highlighted")})}moveHighlightDown(){var e,o;let n=((e=this.dropElm)==null?void 0:e.querySelectorAll(We))||[],t=n.length;this._currentHighlightIndex<t-1?(this._currentHighlightIndex++,(o=n[this._currentHighlightIndex])!=null&&o.classList.contains("disabled")&&this.moveHighlightDown()):this.options.infiniteScroll&&this.infiniteScrollHandler(null,this._currentHighlightIndex,t),this.highlightCurrentOption()}moveHighlightUp(){var e,o;let n=((e=this.dropElm)==null?void 0:e.querySelectorAll(We))||[],t=this.options.single?0:1;if(this.virtualScroll&&this._currentHighlightIndex<=t&&this.updateDataStart>0&&this.ulElm){let i=n[this._currentHighlightIndex+(this.options.single?0:1)],s=i==null?void 0:i.dataset.key;this.lastFocusedItemKey=s,this.ulElm.scrollTop=this.ulElm.scrollTop-(i==null?void 0:i.getBoundingClientRect().height)||10,this.isMoveUpRecalcRequired=!0;return}this._currentHighlightIndex>0&&(this._currentHighlightIndex--,(o=n[this._currentHighlightIndex])!=null&&o.classList.contains("disabled")&&this.moveHighlightUp()),this.highlightCurrentOption()}recalculateArrowMove(n){var o;let t=((o=this.dropElm)==null?void 0:o.querySelectorAll(We))||[],e=Array.from(t).findIndex(i=>i.dataset.key===this.lastFocusedItemKey);this._currentHighlightIndex=e-1,n==="down"?this.moveHighlightDown():n==="up"&&(this.moveHighlightUp(),this.isMoveUpRecalcRequired=!1)}close(n){var t,e;this.options.isOpen=!1,this.parentElm.classList.remove("ms-parent-open"),(e=(t=this.choiceElm)==null?void 0:t.querySelector("div.ms-icon-caret"))==null||e.classList.remove("open"),this.dropElm&&(this.dropElm.style.display="none",this.dropElm.ariaExpanded="false",this.options.container&&(this.parentElm.appendChild(this.dropElm),this.dropElm.style.top="auto",this.dropElm.style.left="auto")),this.options.onClose(n)}applyAsTextOrHtmlWhenEnabled(n,t){n||(n={}),this.isRenderAsHtml?n.innerHTML=typeof this.options.sanitizer=="function"?this.options.sanitizer(t):t:n.textContent=t}update(n=!1){var r;let t=this.getSelects(),e=this.getSelects("text");this.options.displayValues&&(e=t);let o=(r=this.choiceElm)==null?void 0:r.querySelector("span"),i=t.length,s=null,l=()=>{if(this.options.useSelectOptionLabel||this.options.useSelectOptionLabelToHtml){let u=t.join(this.options.displayDelimiter);return this.options.useSelectOptionLabelToHtml?Bm(u):u}return e.join(this.options.displayDelimiter)};if(o){if(i===0){let u=this.options.placeholder||"";o.classList.add("ms-placeholder"),this.applyAsTextOrHtmlWhenEnabled(o,u)}else i<this.options.minimumCountSelected?s=l():this.formatAllSelected()&&i===this.dataTotal?s=this.formatAllSelected():this.options.ellipsis&&i>this.options.minimumCountSelected?s=`${e.slice(0,this.options.minimumCountSelected).join(this.options.displayDelimiter)}...`:this.formatCountSelected(i,this.dataTotal)&&i>this.options.minimumCountSelected?s=this.formatCountSelected(i,this.dataTotal):s=l();if(s!==null&&(o==null||o.classList.remove("ms-placeholder"),this.applyAsTextOrHtmlWhenEnabled(o,s)),this.options.showClear&&this.selectClearElm){let u=s?"block":"none";this.selectClearElm.style.display=u}if(this.options.displayTitle){let u=this.options.useSelectOptionLabel||this.options.useSelectOptionLabelToHtml?"value":"text";o.title=this.getSelects(u).join(this.options.displayDelimiter)}}let a=this.getSelects();this.options.single?this.elm.value=a.length?a[0]:"":Array.from(this.elm.options).forEach(u=>{u.selected=a.some(m=>m===u.value)}),n||this.elm.dispatchEvent(new Event("change"))}updateSelected(n){var e,o,i;for(let s=this.updateDataStart;s<this.updateDataEnd;s++){let l=this.updateData[s],a=(e=this.dropElm)==null?void 0:e.querySelector(`input[data-key=${l._key}]`);if(a){a.checked=l.selected;let r=a.closest("li"),u=r==null?void 0:r.querySelector(".icon-checkbox-container div");r&&(l.selected&&!r.classList.contains("selected")?(r.classList.add("selected"),r.ariaSelected="true",u&&(u.className=`ms-icon ms-icon-${a.type==="radio"?"radio":"check"}`)):l.selected||(r.classList.remove("selected"),r.ariaSelected="false",u&&(u.className="ms-icon ms-icon-uncheck")))}}let t=((o=this.data)==null?void 0:o.filter(s=>s.visible).length)===0;if(this.selectAllElm){this.selectAllElm.ariaChecked=String(this.isAllSelected);let s=(i=this.dropElm)==null?void 0:i.querySelector(".ms-select-all .icon-checkbox-container div");if(s){let l="";this.isAllSelected?l="ms-icon-check":this.isPartiallyAllSelected?l="ms-icon-minus":l="ms-icon-uncheck",s.className=`ms-icon ${l}`}this.selectAllElm.checked=this.isAllSelected,Yi(this.selectAllElm.closest("li"),!t)}Yi(this.noResultsElm,t),this.virtualScroll&&(this.virtualScroll.rows=n??this.getListRows())}getData(){return this.options.data}getDataLength(){var n;return((n=this.data)==null?void 0:n.length)??0}getOptions(n=!0){let t=Object.assign({},this.options);return delete t.data,n?So(t):this.options}refreshOptions(n){Pm(this.options,n,!0)||(this.options=Object.assign(this.options,n),this.destroy(!1),this.init())}getDropElement(){return this.dropElm}getParentElement(){return this.parentElm}getSelects(n="value"){let t=[];for(let e of this.data||[])if(e.type==="optgroup"){let o=e.children.filter(i=>i==null?void 0:i.selected);if(!o.length)continue;if(n==="value"||this.options.single)t.push(...o.map(i=>n==="value"&&i._value||i[n]));else{let i=[];i.push("["),i.push(e.label),i.push(`: ${o.map(s=>s[n]).join(", ")}`),i.push("]"),t.push(i.join(""))}}else e.selected&&t.push(n==="value"&&e._value||e[n]);return t}setSelects(n,t="value",e=!1){let o=!1,i=s=>{var l;for(let a of s){let r=!1;if(t==="text"){let u=document.createElement("div");this.applyAsTextOrHtmlWhenEnabled(u,a.text),r=n.includes(((l=u.textContent)==null?void 0:l.trim())??"")}else r=n.includes(a._value||a.value),!r&&a.value===`${+a.value}`&&(r=n.includes(+a.value));a.selected!==r&&(o=!0),a.selected=r}};for(let s of this.data||[])s.type==="optgroup"?i(s.children):i([s]);o&&(this.initSelected(e),this.updateSelected(),this.update(e))}enable(){this.choiceElm&&(this.choiceElm.classList.remove("disabled"),this.choiceElm.disabled=!1)}disable(){var n;this.choiceElm&&((n=this.choiceElm)==null||n.classList.add("disabled"),this.choiceElm.disabled=!0)}check(n){let t=_n(this.data,"value",n);t&&this._check(t,!0)}uncheck(n){let t=_n(this.data,"value",n);t&&this._check(t,!1)}_check(n,t){this.options.single&&this._checkAll(!1,!0),n.selected=t,this.initSelected(),this.updateSelected(),this.update()}checkAll(){this._checkAll(!0)}uncheckAll(){this._checkAll(!1)}_checkAll(n,t){for(let e of this.data||[])e.type==="optgroup"?this._checkGroup(e,n,!0):!e.disabled&&!e.divider&&(t||e.visible)&&(e.selected=n);t||(this.initSelected(),this.updateSelected(),this.update())}_checkGroup(n,t,e){n.selected=t,n.children.forEach(o=>{o&&!o.disabled&&!o.divider&&(e||o.visible)&&(o.selected=t)}),e||(this.initSelected(),this.updateSelected(),this.update())}checkInvert(){if(!this.options.single){for(let n of this.data||[])if(n.type==="optgroup")for(let t of n.children)t&&(t.divider||(t.selected=!t.selected));else n&&!n.divider&&(n.selected=!n.selected);this.initSelected(),this.updateSelected(),this.update()}}focus(){var n;(n=this.choiceElm)==null||n.focus(),this.options.onFocus()}blur(){var n;(n=this.choiceElm)==null||n.blur(),this.options.onBlur()}refresh(){this.destroy(!1),this.init()}filter(n){var i;let t=((i=this.searchInputElm)==null?void 0:i.value.trim())??"",e=t.toLowerCase();if(this.filterText===e)return;this.filterText=e;for(let s of this.data||[])if(s.type==="optgroup")if(this.options.filterGroup){let l=`${(s==null?void 0:s.label)??""}`;if(s!=null){let a=this.options.customFilter({label:ge(l.toString().toLowerCase(),this.options.diacriticParser),search:ge(e,this.options.diacriticParser),originalLabel:l,originalSearch:t,row:s});s.visible=a;for(let r of s.children)r&&(r.visible=a)}}else{for(let l of s.children)if(l!=null){let a=`${(l==null?void 0:l.text)??""}`;l.visible=this.options.customFilter({text:ge(a.toString().toLowerCase(),this.options.diacriticParser),search:ge(e,this.options.diacriticParser),originalText:a,originalSearch:t,row:l,parent:s})}s.visible=s.children.filter(l=>l==null?void 0:l.visible).length>0}else{let l=`${(s==null?void 0:s.text)??""}`;s.visible=this.options.customFilter({text:ge(l.toString().toLowerCase(),this.options.diacriticParser),search:ge(e,this.options.diacriticParser),originalText:l,originalSearch:t,row:s})}let o=this.initListItems();this.initSelected(n),this.updateSelected(o),n||this.options.onFilter(t)}adjustDropHeight(n){var u,m,f,b;let t=n!=="top",e=((u=this.filterParentElm)==null?void 0:u.getBoundingClientRect().height)??0,o=((m=this.okButtonElm)==null?void 0:m.getBoundingClientRect().height)??0,i=this.options.single?0:((f=this.selectAllParentElm)==null?void 0:f.getBoundingClientRect().height)??0,s=e+o+i+5,{bottom:l,top:a}=co(this.parentElm),r=this.options.maxHeight;if(t?r=l-s-this.options.adjustedHeightPadding:r=a-s-this.options.adjustedHeightPadding,!this.options.maxHeight||this.options.maxHeight&&r<this.options.maxHeight){let g=(b=this.dropElm)==null?void 0:b.querySelector("ul");return g&&(g.style.maxHeight=`${r}px`),!0}return!1}adjustDropPosition(n){let t="bottom";if(this.dropElm&&this.parentElm){let{bottom:e,top:o}=co(this.dropElm),{top:i,left:s}=Oo(this.parentElm),l=this.dropElm.getBoundingClientRect().height,a=this.dropElm.getBoundingClientRect().width,r=document.body.offsetWidth||window.innerWidth,u=this.parentElm.getBoundingClientRect().width;if(e>l)t="bottom";else if(l>e&&o>e){if(this.options.container){let m=i-l;m<0&&(m=0),(m>0||n)&&(t="top",this.dropElm.style.top=`${m<0?0:m}px`)}else t="top",this.dropElm.classList.add(t);this.dropElm.classList.remove("bottom")}r-a<s&&(this.dropElm.style.left=`${s-(a-u)}px`)}return t}adjustDropWidthByText(){if(this.dropElm){let n=this.parentElm.scrollWidth;(this.options.dropWidth||this.options.width)&&(n=this.options.dropWidth||this.options.width||0);let t=this.dropElm.querySelector(".ms-select-all span"),e=this.dropElm.querySelector("ul");if(e){let o=(t==null?void 0:t.clientWidth)??26,i=e.scrollHeight>e.clientHeight?this.getScrollbarWidth():0,s=0;this.dropElm.querySelectorAll("li label").forEach(l=>{l.scrollWidth>s&&(s=l.scrollWidth)}),s+=26+i,s<o&&(s=o),this.options.maxWidth&&s>this.options.maxWidth&&(s=this.options.maxWidth),this.options.minWidth&&s<this.options.minWidth&&(s=this.options.minWidth),(n==="100%"||+n<s)&&(this.dropElm.style.width=`${s}px`,this.dropElm.style.maxWidth=`${s}px`)}}}getScrollbarWidth(){var i;let n=N("div",{style:{visibility:"hidden",width:"100px"}});document.body.appendChild(n);let t=n.offsetWidth;n.style.overflow="scroll";let e=N("div",{style:{width:"100%"}});n.appendChild(e);let o=e.offsetWidth;return(i=n.parentNode)==null||i.removeChild(n),t-o}formatAllSelected(){return this.options.allSelectedText||this.options.formatAllSelected()}formatCountSelected(n,t){return this.options.countSelectedText?this.options.countSelectedText.replace("#",`${n}`).replace("%",`${t}`):this.options.formatCountSelected(n,t)}formatNoMatchesFound(){return this.options.noMatchesFoundText||this.options.formatNoMatchesFound()}formatOkButton(){return this.options.okButtonText||this.options.formatOkButton()}formatLazyLoading(){return this.options.lazyLoadingText||this.options.formatLazyLoading()}formatSelectAll(){return this.options.selectAllText||this.options.formatSelectAll()}},d=(n,t)=>typeof n=="string"?mo(document.querySelectorAll(n),t):n instanceof Node?mo([n],t):mo(n,t);function mo(n,t){let e=Array.from(n),o=[];for(let i=0;i<e.length;i++){let s=e[i];try{s._multipleSelect!==void 0&&(s._multipleSelect.destroy(),delete s._multipleSelect),s._multipleSelect=new Wm(s,t||{}),s._multipleSelect.init();let l=s._multipleSelect.getOptions(!1);l.onHardDestroy=()=>delete s._multipleSelect,l.onAfterHardDestroy=()=>o[i]=null,o.push(s._multipleSelect)}catch(l){console.error(l)}}return o.length===1?o[0]:o}d.defaults=ft.DEFAULTS;d.locales={...dl};d.methods=ft.METHODS;window!==void 0&&(window.multipleSelect=d);let Vm=class{constructor(){c(this,"logElm");c(this,"ms1")}mount(){this.logElm=document.querySelector("textarea"),this.ms1=d("select",{filter:!0,showSearchClear:!0,onBeforeOpen:()=>{this.log(`onBeforeOpen event fire!
`)},onOpen:()=>{this.log(`onOpen event fire!
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
`)}})}log(t){this.logElm.textContent+=t,this.logElm.scrollTo(0,this.logElm.scrollHeight)}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},vl=class{constructor(){c(this,"ms",[])}mount(){this.ms=d(".multiple-select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},qm=class{constructor(){c(this,"ms",[])}mount(){this.ms=d(".multiple-select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Km=class{constructor(){c(this,"ms",[])}mount(){this.ms=d("select",{multiple:!0,multipleWidth:70})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Ym=class{constructor(){c(this,"multiMs",[]);c(this,"singleMs")}mount(){this.multiMs=d(".select"),this.singleMs=d(".data",{data:[{value:1,text:"Options 1",selected:!0},{value:2,text:"Options 2"},{value:3,text:"Options 3"}]})}unmount(){var t;this.multiMs.forEach(e=>e.destroy()),this.multiMs=[],(t=this.singleMs)==null||t.destroy(),this.singleMs=void 0}},Xm=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select")}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Qm=class{constructor(){c(this,"ms",[])}mount(){this.ms=d("select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Zm=class{constructor(){c(this,"btnElm");c(this,"ms",[]);c(this,"clickListener",()=>{const t=this.serialize(document.querySelector("form"));alert(t)})}mount(){this.ms=d("select"),this.btnElm=document.querySelector(".submit7"),this.btnElm.addEventListener("click",this.clickListener)}unmount(){this.btnElm.removeEventListener("click",this.clickListener),this.ms.forEach(t=>t.destroy()),this.ms=[]}serialize(t){const e=[];return t.querySelectorAll("[name]").forEach(o=>{const i=Array.from(o.selectedOptions);for(const s of i)e.push(`${o.name}=${s.value}`)}),e.length>0?e.join("&"):!1}},th=class{constructor(){c(this,"ms1");c(this,"ms2");c(this,"ms3");c(this,"ms4");c(this,"ms5")}mount(){this.ms1=d("#basic",{dataTest:"select1",data:[{text:"January",value:1},{text:"February",value:2},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}),this.ms2=d("#object",{dataTest:"select2",data:{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}}),this.ms3=d("#string",{dataTest:"select3",data:["January","February","March"]}),this.ms4=d("#number",{dataTest:"select4",data:[1,2,3]}),this.ms5=d("#group",{dataTest:"select5",data:[{type:"optgroup",label:"Group 1",children:[{text:"January",value:1,selected:!0},{text:"February",value:2,disabled:!0},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6}]},{type:"optgroup",label:"Group 2",children:[{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}]})}unmount(){var t,e,o,i,s;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),(s=this.ms5)==null||s.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0}};var fl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},bl={formatSelectAll(){return"[Seleccionar todo]"},formatAllSelected(){return"Todos seleccionados"},formatCountSelected(n,t){return`${n} de ${t} seleccionado`},formatNoMatchesFound(){return"No se encontraron coincidencias"},formatOkButton(){return"Cerrar"},formatLazyLoading(){return"Cargando..."}};fl.locales["es-ES"]=bl;fl.locales;var gl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},eh={formatSelectAll(){return"[Vybrat vše]"},formatAllSelected(){return"Vše vybráno"},formatCountSelected(n,t){return`${n} z ${t} vybráno`},formatNoMatchesFound(){return"Nebylo nalezeno"},formatOkButton(){return"Zavřít"},formatLazyLoading(){return"Načítám se..."}};gl.locales["cz-CS"]=eh;gl.locales;var _l=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},nh={formatSelectAll(){return"[Vælg alle]"},formatAllSelected(){return"Alle valgt"},formatCountSelected(n,t){return`${n} af ${t} valgt`},formatNoMatchesFound(){return"Søgning uden resultat"},formatOkButton(){return"Lukke"},formatLazyLoading(){return"Indlæser nu..."}};_l.locales["da-DK"]=nh;_l.locales;var El=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},oh={formatSelectAll(){return"[Alles auswählen]"},formatAllSelected(){return"Alles ausgewählt"},formatCountSelected(n,t){return`${n} von ${t} ausgewählt`},formatNoMatchesFound(){return"Keine Ergebnisse"},formatOkButton(){return"Schließen"},formatLazyLoading(){return"Jetzt wird geladen..."}};El.locales["de-DE"]=oh;El.locales;var yl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},ih={formatSelectAll(){return"[Select all]"},formatAllSelected(){return"All selected"},formatCountSelected(n,t){return`${n} of ${t} selected`},formatNoMatchesFound(){return"No matches found"},formatOkButton(){return"OK"},formatLazyLoading(){return"Loading..."}};yl.locales["en-US"]=ih;yl.locales;var wl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},sh={formatSelectAll(){return"[Seleccionar todo]"},formatAllSelected(){return"Todos seleccionados"},formatCountSelected(n,t){return`${n} de ${t} seleccionado`},formatNoMatchesFound(){return"No se encontraron coincidencias"},formatOkButton(){return"Cerrar"},formatLazyLoading(){return"Cargando..."}};wl.locales["es-ES"]=sh;wl.locales;var Sl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},lh={formatSelectAll(){return"[Tout sélectionner]"},formatAllSelected(){return"Tous sélectionnés"},formatCountSelected(n,t){return`${n} de ${t} sélectionnés`},formatNoMatchesFound(){return"Aucun résultat"},formatOkButton(){return"Fermer"},formatLazyLoading(){return"Chargement..."}};Sl.locales["fr-FR"]=lh;Sl.locales;var Al=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},ah={formatSelectAll(){return"[Összes kiválasztása]"},formatAllSelected(){return"Összes kiválasztva"},formatCountSelected(n,t){return`${n} / ${t} kiválasztva`},formatNoMatchesFound(){return"Nincs találat"},formatOkButton(){return"Bezár"},formatLazyLoading(){return"Most betöltés..."}};Al.locales["hu-HU"]=ah;Al.locales;var Ol=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},rh={formatSelectAll(){return"[Pilih Semua]"},formatAllSelected(){return"Semua Dipilih"},formatCountSelected(n,t){return`${n} dari ${t} dipilih`},formatNoMatchesFound(){return"Tidak ditemukan"},formatOkButton(){return"Tutup"},formatLazyLoading(){return"Memuat..."}};Ol.locales["id-ID"]=rh;Ol.locales;var kl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},ph={formatSelectAll(){return"[Seleziona tutti]"},formatAllSelected(){return"Tutti selezionati"},formatCountSelected(n,t){return`${n} di ${t} selezionati`},formatNoMatchesFound(){return"Nessun risultato"},formatOkButton(){return"Chiudere"},formatLazyLoading(){return"Caricamento..."}};kl.locales["it-IT"]=ph;kl.locales;var Tl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},ch={formatSelectAll(){return"[すべて選択]"},formatAllSelected(){return"すべて選択"},formatCountSelected(n,t){return`${t} 件中 ${n} 件選択`},formatNoMatchesFound(){return"見つかりません"},formatOkButton(){return"閉める"},formatLazyLoading(){return"積載..."}};Tl.locales["ja-JP"]=ch;Tl.locales;var xl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},uh={formatSelectAll(){return"[Selecionar todos]"},formatAllSelected(){return"Todos selecionados"},formatCountSelected(n,t){return`${n} de ${t} selecionado(s)`},formatNoMatchesFound(){return"Nenhum resultado encontrado"},formatOkButton(){return"Fechar"},formatLazyLoading(){return"Carregamento..."}};xl.locales["pt-BR"]=uh;xl.locales;var Cl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},dh={formatSelectAll(){return"[Выбрать все]"},formatAllSelected(){return"Выбрано все"},formatCountSelected(n,t){return`${n} из ${t} выбрано`},formatNoMatchesFound(){return"Совпадений не найдено"},formatOkButton(){return"Закрывать"},formatLazyLoading(){return"погрузка..."}};Cl.locales["ru-RU"]=dh;Cl.locales;var Dl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},mh={formatSelectAll(){return"[Tất cả]"},formatAllSelected(){return"Chọn tất cả"},formatCountSelected(n,t){return`Đã chọn ${n} trong ${t}`},formatNoMatchesFound(){return"Không tìm thấy kết quả."},formatOkButton(){return"Đóng"},formatLazyLoading(){return"Tải..."}};Dl.locales["vi-VN"]=mh;Dl.locales;var Ml=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},hh={formatSelectAll(){return"[全选]"},formatAllSelected(){return"已选择所有记录"},formatCountSelected(n,t){return`已从${t}条记录中选择${n}条`},formatNoMatchesFound(){return"没有找到记录"},formatOkButton(){return"关闭"},formatLazyLoading(){return"装载..."}};Ml.locales["zh-CN"]=hh;Ml.locales;var Ll=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},vh={formatSelectAll(){return"[全選]"},formatAllSelected(){return"已選擇所有記錄"},formatCountSelected(n,t){return`已從${t}條記錄中選擇${n}條`},formatNoMatchesFound(){return"沒有找到記錄"},formatOkButton(){return"关闭"},formatLazyLoading(){return"装载..."}};Ll.locales["zh-TW"]=vh;Ll.locales;let fh=class{constructor(){c(this,"ms0");c(this,"ms1");c(this,"ms2")}mount(){const t=document.querySelector("#locale");t.addEventListener("change",e=>{this.updateLocale(e.target.value)}),this.ms0=d(t,{maxHeight:400}),this.ms1=d("#dynamic-select",{filter:!0,showOkButton:!0,dataTest:"select1"}),this.ms2=d("#fixed-import",{filter:!0,showOkButton:!0,dataTest:"select2",locale:bl})}unmount(){var t,e,o;(t=this.ms0)==null||t.destroy(),(e=this.ms1)==null||e.destroy(),(o=this.ms2)==null||o.destroy(),this.ms0=void 0,this.ms1=void 0,this.ms2=void 0}updateLocale(t){var e,o;(e=this.ms1)==null||e.destroy(),(o=this.ms1)==null||o.refreshOptions({locale:t})}},bh=class{constructor(){c(this,"ms1");c(this,"ms2")}mount(){const t=[],e=[];for(let o=0;o<1e4;o++)t.push(o);for(let o=0;o<1e4;o++)e.push({text:`<i class="fa fa-star"></i> Task ${o}`,value:o});this.ms1=d("#select1",{filter:!0,data:t,showSearchClear:!0}),this.ms2=d("#select2",{filter:!0,data:e,showSearchClear:!0,useSelectOptionLabelToHtml:!0})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},gh=class{constructor(){c(this,"ms",[])}mount(){this.ms=d("select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},_h=class{constructor(){c(this,"ms1");c(this,"ms2")}mount(){this.ms1=d("#single",{singleRadio:!0}),this.ms2=d("#multiple",{showOkButton:!0})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},Eh=class{constructor(){c(this,"createBtnElm");c(this,"destroyBtnElm");c(this,"modifyBtnElm");c(this,"ms1")}mount(){this.createBtnElm=document.querySelector("#createBtn"),this.destroyBtnElm=document.querySelector("#destroyBtn"),this.modifyBtnElm=document.querySelector("#modifyBtn"),this.createBtnElm.addEventListener("click",this.createMultipleSelect.bind(this)),this.destroyBtnElm.addEventListener("click",this.destroyMultiSelect.bind(this)),this.modifyBtnElm.addEventListener("click",this.modifyData.bind(this))}createMultipleSelect(){this.ms1=d("#select1",{name:"my-select",single:!1,useSelectOptionLabelToHtml:!0,sanitizer:t=>bt.sanitize(t,{RETURN_TRUSTED_TYPE:!0}),data:[{text:'<i class="fa fa-star"></i> January',value:1},{text:"February",value:2},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}),this.ms1.setSelects([1,3,4])}destroyMultiSelect(){var t;console.log("destroy"),(t=this.ms1)==null||t.destroy(),this.ms1=void 0}modifyData(){var t;(t=this.ms1)==null||t.refreshOptions({data:[{value:1,text:"Options 1"},{value:2,text:"Options 2"},{value:3,text:"Options 3",selected:!0},{value:4,text:"Options 4",selected:!0},{value:5,text:"Options 5"}]})}unmount(){this.destroyMultiSelect(),this.createBtnElm.removeEventListener("click",this.createMultipleSelect.bind(this)),this.destroyBtnElm.removeEventListener("click",this.destroyMultiSelect.bind(this)),this.modifyBtnElm.removeEventListener("click",this.modifyData.bind(this))}},yh=class{constructor(){c(this,"ms1",[]);c(this,"ms2",[])}mount(){this.ms1=d(".select"),this.ms2=d(".data-select",{dataTest:"select1",data:[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"},{divider:!0},{value:4,text:"Option 4"},{value:5,text:"Option 5"},{value:6,text:"Option 6"}]})}unmount(){this.ms1.forEach(t=>t.destroy()),this.ms2.forEach(t=>t.destroy()),this.ms1=[],this.ms2=[]}},wh=class{constructor(){c(this,"ms1");c(this,"ms2");c(this,"ms3");c(this,"ms4");c(this,"ms5");c(this,"darkMode",!0)}mount(){var t;(t=document.querySelector(".panel-wm-content"))==null||t.classList.add("dark-mode"),this.ms1=d("select[data-test=single]",{darkMode:!0}),this.ms2=d("select[data-test=radio]",{darkMode:!0,singleRadio:!0}),this.ms3=d("select[data-test=multiple]",{darkMode:!0}),this.ms4=d("select[data-test=group]",{darkMode:!0}),this.ms5=d("select[data-test=data1]",{darkMode:!0,dataTest:"select1",filter:!0,showOkButton:!0,showClear:!0,showSearchClear:!0,data:[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"},{divider:!0},{value:4,text:"Option 4"},{value:5,text:"Option 5"},{value:6,text:"Option 6"}]})}unmount(){var t,e,o,i,s,l;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),(s=this.ms5)==null||s.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0,(l=document.querySelector(".panel-wm-content"))==null||l.classList.remove("dark-mode")}};const Xi=""+new URL("avatar1-Dfqkz6jG.png",import.meta.url).href,Qi=""+new URL("avatar2-C5pX2a2d.png",import.meta.url).href,Zi=""+new URL("avatar3-COtlxv_R.png",import.meta.url).href,ts=""+new URL("avatar4-Dom6eBE9.png",import.meta.url).href,es=""+new URL("avatar5-B_ltAQdV.png",import.meta.url).href;let Sh=class{constructor(){c(this,"ms1");c(this,"ms2")}mount(){this.ms1=d("[data-test=select1]",{data:[{value:"1",text:`<img alt="avatar1" src="${Xi}" class="avatar"> Eric`},{value:"2",text:`<img alt="avatar2" src="${Qi}" class="avatar"> Smith`},{value:"3",text:`<img alt="avatar3" src="${Zi}" class="avatar"> Erika`},{value:"4",text:`<img alt="avatar4" src="${ts}" class="avatar"> Julia`},{value:"5",text:`<img alt="avatar5" src="${es}" class="avatar"> Catherine`}],renderOptionLabelAsHtml:!0}),this.ms2=d("[data-test=select2]",{singleRadio:!0,renderOptionLabelAsHtml:!0,textTemplate:t=>{const[e,o]=t.textContent.split("::");return`<div class="image-container"><img alt="avatar${t.value}" src="${this.getAvatarByIdx(t.value)}" class="avatar"><div class="text-container"><div class="name-section">${e}</div><div class="job-section">${o}</div></div></div>`},sanitizer:t=>bt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}getAvatarByIdx(t){let e;switch(+t){case 1:e=Xi;break;case 2:e=Qi;break;case 3:e=Zi;break;case 4:e=ts;break;case 5:e=es;break}return e}},Ah=class{},Oh=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select",{filter:!0,showOkButton:!0,formatAllSelected(){return"Tous sélectionnés"},formatCountSelected(t,e){return`${t} de ${e} sélectionnés`},formatNoMatchesFound(){return"Aucun résultat"},formatOkButton(){return"Fermer"},formatSelectAll(){return"[Tout sélectionner]"}})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},kh=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select",{filter:!0}),document.querySelector("#getOptions").addEventListener("click",()=>{alert(JSON.stringify(this.ms1.getOptions(),null,4))})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Th=class{constructor(){c(this,"ms1");c(this,"ms2");c(this,"darkMode2",!1)}mount(){var t,e;this.ms1=d(".select1",{filter:!0}),this.ms2=d(".select2",{darkMode:this.darkMode2,showOkButton:!0}),(t=document.querySelector("#refreshOptions"))==null||t.addEventListener("click",()=>this.refreshOption1()),(e=document.querySelector("#setDarkMode"))==null||e.addEventListener("click",()=>this.toggleDarkMode2())}refreshOption1(){var t;(t=this.ms1)==null||t.refreshOptions({filter:!1})}toggleDarkMode2(){var t;this.darkMode2=!this.darkMode2,(t=this.ms2)==null||t.refreshOptions({darkMode:this.darkMode2})}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0,(o=document.querySelector("#refreshOptions"))==null||o.removeEventListener("click",()=>this.refreshOption1()),(i=document.querySelector("#setDarkMode"))==null||i.removeEventListener("click",()=>this.toggleDarkMode2())}},xh=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select",{filter:!0}),document.querySelector("#setSelectsBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.setSelects([1,3])}),document.querySelector("#getSelectsBtn").addEventListener("click",()=>{var t,e;alert(`Selected values: ${(t=this.ms1)==null?void 0:t.getSelects()}`),alert(`Selected texts: ${(e=this.ms1)==null?void 0:e.getSelects("text")}`)}),document.querySelector("#setSelectsBtn2").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.setSelects(["February","April"],"text")}),document.querySelector("#getSelectsBtn2").addEventListener("click",()=>{var t;alert(`Selected values: ${(t=this.ms1)==null?void 0:t.getSelects("text")}`)})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Ch=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select"),document.querySelector("#enableBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.enable()}),document.querySelector("#disableBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.disable()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Dh=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select"),document.querySelector("#openBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.open()}),document.querySelector("#closeBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.close()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Mh=class{constructor(){c(this,"ms",[])}mount(){this.ms=d("select"),document.querySelector("#checkBtn").addEventListener("click",()=>{for(const t of this.ms)t.check(2)}),document.querySelector("#uncheckBtn").addEventListener("click",()=>{for(const t of this.ms)t.uncheck(2)})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Lh=class{constructor(){c(this,"ms",[])}mount(){this.ms=d("select"),document.querySelector("#checkAllBtn").addEventListener("click",()=>{for(const t of this.ms)t.checkAll()}),document.querySelector("#uncheckAllBtn").addEventListener("click",()=>{for(const t of this.ms)t.uncheckAll()})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Nh=class{constructor(){c(this,"ms",[])}mount(){this.ms=d("select"),document.querySelector("#checkInvert").addEventListener("click",()=>{for(const t of this.ms)t.checkInvert()})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},$h=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select"),document.querySelector("#focusBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.focus()}),document.querySelector("#blurBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.blur()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Ih=class{constructor(){c(this,"ms1")}mount(){const t=document.querySelector("select");this.ms1=d(t),document.querySelector("#refreshAdd").addEventListener("click",()=>{var a;const e=document.querySelector("#refreshInput"),o=document.querySelector("#refreshSelected"),i=document.querySelector("#refreshDisabled"),s=e.value.trim(),l=document.createElement("option");if(l.value=s,l.text=s,!s){e.focus();return}o.checked&&(l.selected=!0),i.checked&&(l.disabled=!0),e.value="",t.appendChild(l),(a=this.ms1)==null||a.refresh()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Rh=class{constructor(){c(this,"buildBtnElm");c(this,"destroyBtnElm");c(this,"ms1")}mount(){this.buildBtnElm=document.querySelector("#buildBtn"),this.destroyBtnElm=document.querySelector("#destroyBtn"),this.destroyBtnElm.addEventListener("click",this.destroyMultiSelect.bind(this)),this.buildBtnElm.addEventListener("click",this.createMultipleSelect.bind(this)),this.ms1=d("select")}createMultipleSelect(){this.ms1=d("select")}destroyMultiSelect(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=null}unmount(){this.destroyMultiSelect(),this.buildBtnElm.removeEventListener("click",this.destroyMultiSelect.bind(this)),this.destroyBtnElm.removeEventListener("click",this.createMultipleSelect.bind(this))}},Ph=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select",{filter:!0}),document.querySelector("#getData").addEventListener("click",()=>{console.log("tt",JSON.stringify(this.ms1.getData())),alert(JSON.stringify(this.ms1.getData(),null,4))})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Fh=class{constructor(){c(this,"ms1");c(this,"ms2")}mount(){this.ms1=d("#select1"),this.ms2=d("#select2",{placeholder:"Here is the placeholder via javascript"})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},Hh=class{constructor(){c(this,"ms",[])}mount(){this.ms=d("select",{singleRadio:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Bh=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select",{selectAll:!1})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Gh=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select",{multiple:!0,hideOptgroupCheckboxes:!0,multipleWidth:70})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Uh=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select",{multiple:!0,width:500,multipleWidth:70,dropWidth:580})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Jh=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select",{maxHeight:140})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},jh=class{constructor(){c(this,"ms",[])}mount(){const t=document.querySelector("#number");this.ms=d("select",{maxHeight:+t.value,maxHeightUnit:"row"}),t.addEventListener("change",()=>{this.ms.forEach(e=>{e.refreshOptions({maxHeight:+t.value,maxHeightUnit:"row"})})})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},zh=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select",{position:"top"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Wh=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select",{displayValues:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Vh=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select",{displayTitle:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},qh=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select",{displayDelimiter:" | "})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Kh=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select",{minimumCountSelected:8})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Yh=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select",{ellipsis:!0,minimumCountSelected:5})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Xh=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select",{isOpen:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Qh=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select",{keepOpen:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Zh=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select",{openOnHover:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},tv=class{constructor(){c(this,"ms1");c(this,"ms2");c(this,"ms3");c(this,"ms4")}mount(){this.ms1=d(".select1"),this.ms2=d(".select2"),this.ms3=d(".select3",{container:".my-container"}),this.ms4=d(".select4",{autoAdjustDropPosition:!0,container:"body"})}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},ev=class{constructor(){c(this,"ms",[])}mount(){this.ms=d("select",{filter:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},nv=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select",{filter:!0,filterGroup:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},ov=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select",{filter:!0,filterPlaceholder:"The filter placeholder"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},iv=class{constructor(){c(this,"ms",[])}mount(){this.ms=d("select",{filter:!0,filterAcceptOnEnter:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},sv=class{constructor(){c(this,"ms",[])}mount(){this.ms=d("select",{filterByDataLength:10})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},lv=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select",{filter:!0,customFilter:({text:t,search:e,originalText:o,originalSearch:i})=>document.querySelector("input").checked?o.indexOf(i)===0:t.indexOf(e)===0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},av=class{constructor(){c(this,"ms",[])}mount(){this.ms=d("select",{showClear:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},rv=class{constructor(){c(this,"ms",[])}mount(){this.ms.push(d(".select1",{showOkButton:!0})),this.ms.push(d(".select2",{showOkButton:!0})),this.ms.push(d(".select3",{showOkButton:!0,filter:!0})),this.ms.push(d(".select4",{showOkButton:!0}))}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},pv=class{constructor(){c(this,"ms1");c(this,"ms2")}mount(){this.ms1=d('[data-test="select3"]',{cssStyler:t=>+((t==null?void 0:t.value)??0)==2?{backgroundColor:"#6fbeff",color:"#0014ff",fontStyle:"italic"}:+((t==null?void 0:t.value)??0)==4?{backgroundColor:"#972727",color:"#fff"}:null}),this.ms2=d('[data-test="select4"]',{cssStyler:t=>(t==null?void 0:t.type)==="optgroup"?{color:"#787878",fontWeight:"normal"}:+((t==null?void 0:t.value)??0)==3?{color:"purple",textDecoration:"underline"}:null})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},cv=class{constructor(){c(this,"ms1");c(this,"ms2");c(this,"btnEnableElm");c(this,"btnDisableElm")}mount(){this.ms1=d("#basic",{filter:!0,displayTitle:!0,renderOptionLabelAsHtml:!0,textTemplate:t=>`<i class="fa fa-star"></i>${t.innerHTML}`,customFilter:({search:t,text:e})=>{var i;const o=document.createElement("div");return o.innerHTML=e,((i=o.textContent)==null?void 0:i.includes(t))??!0},sanitizer:t=>bt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms2=d("#from-data",{dataTest:"select1",displayTitle:!0,renderOptionLabelAsHtml:!0,data:[{value:'50"',text:'50"'},{value:"44'",text:"44'"},{value:"33",text:'<span style="font-weight:bold">33</span>'}],sanitizer:t=>bt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.btnEnableElm=document.querySelector("#enableRenderHtml"),this.btnEnableElm.addEventListener("click",()=>this.renderAsHtmlHandler(!0)),this.btnDisableElm=document.querySelector("#disableRenderHtml"),this.btnDisableElm.addEventListener("click",()=>this.renderAsHtmlHandler(!1))}renderAsHtmlHandler(t){var e,o;(e=this.ms1)==null||e.refreshOptions({renderOptionLabelAsHtml:t}),(o=this.ms2)==null||o.refreshOptions({renderOptionLabelAsHtml:t})}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0,(o=this.btnEnableElm)==null||o.removeEventListener("click",()=>this.renderAsHtmlHandler(!0)),(i=this.btnDisableElm)==null||i.removeEventListener("click",()=>this.renderAsHtmlHandler(!1))}},uv=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select",{renderOptionLabelAsHtml:!0,labelTemplate:t=>`<i class="fa fa-star"></i>${t.getAttribute("label")}`,sanitizer:t=>bt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},dv=class{constructor(){c(this,"ms",[])}mount(){this.ms=d("select",{autoAdjustDropPosition:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},mv=class{constructor(){c(this,"ms1");c(this,"ms2");c(this,"ms3");c(this,"ms4")}mount(){this.ms1=d("#select1",{autoAdjustDropWidthByTextSize:!0,autoAdjustDropHeight:!0,position:"top",showOkButton:!0,sanitizer:t=>bt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms2=d("#select2",{autoAdjustDropHeight:!0,position:"top",showOkButton:!0,sanitizer:t=>bt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms3=d("#select3",{autoAdjustDropHeight:!0,filter:!0,position:"top",sanitizer:t=>bt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms4=d("#select4")}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},hv=class{constructor(){c(this,"ms1");c(this,"ms2")}mount(){this.ms1=d("#select1",{useSelectOptionLabel:!0}),this.ms2=d("#select2",{useSelectOptionLabelToHtml:!0,sanitizer:t=>bt.sanitize(t,{RETURN_TRUSTED_TYPE:!0}),data:[{text:'<i class="fa fa-star"></i> January',value:'<i class="fa fa-star"></i>1',selected:!0},{text:"February",value:"2"},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},vv=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("#select1",{placeholder:'Placeholder with cross-site scripting code...<img src="not-found" onerror=alert("Hacked")>',sanitizer:t=>typeof t=="string"?decodeURIComponent(t).replace(/(\b)(on[a-z]+)(\s*)=|javascript:([^>]*)[^>]*|(<\s*)(\/*)script([<>]*).*(<\s*)(\/*)script(>*)|(&lt;)(\/*)(script|script defer)(.*)(&gt;|&gt;">)/gi,""):t})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},fv=class{constructor(){c(this,"ms",[])}mount(){this.ms=d("select",{classes:"form-control",classPrefix:"form-control"})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},bv=class{constructor(){c(this,"ms",[])}mount(){this.ms=d("select",{filter:!0,showSearchClear:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}};const ns={a:"ÀÁÂÃÄÅàáâãäåĀāąĄ",c:"ÇçćĆčČ",d:"đĐďĎ",e:"ÈÉÊËèéêëěĚĒēęĘ",i:"ÌÍÎÏìíîïĪī",l:"łŁ",n:"ÑñňŇńŃ",o:"ÒÓÔÕÕÖØòóôõöøŌō",r:"řŘ",s:"ŠšśŚ",t:"ťŤ",u:"ÙÚÛÜùúûüůŮŪū",y:"ŸÿýÝ",z:"ŽžżŻźŹ"};let gv=class{constructor(){c(this,"ms1");c(this,"ms2");c(this,"inLogElm");c(this,"outLogElm")}mount(){this.inLogElm=document.querySelector("input.in-log"),this.outLogElm=document.querySelector("input.out-log"),this.ms1=d("#select1",{filter:!0,showSearchClear:!0,filterPlaceholder:'🔎︎ search with "é", "û" or simply "u"',diacriticParser:t=>{const e=t.split("").map(o=>Object.keys(ns).find(i=>ns[i].includes(o))||o).join("");return this.inLogElm.value=t,this.outLogElm.value=e,e}}),this.ms2=d("#select2",{filter:!0,showSearchClear:!0,filterPlaceholder:'🔎︎ search with "é", "û" or simply "u"'})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},_v=class{constructor(){c(this,"ms1");c(this,"ms2")}mount(){const t=[],e=[];for(let o=1;o<=25;o++)t.push({text:`Title ${o}`,value:o});for(let o=1;o<=2e3;o++)e.push({text:`<i class="fa fa-star"></i> Task ${o}`,value:o});this.ms1=d("#select1",{data:t,infiniteScroll:!0}),this.ms2=d("#select2",{filter:!0,data:e,showSearchClear:!0,useSelectOptionLabelToHtml:!0,infiniteScroll:!0})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},Ev=class{constructor(){c(this,"ms1");c(this,"ms2");c(this,"ms3");c(this,"ms4")}mount(){this.ms1=d("select[data-test=select1]"),this.ms2=d("select[data-test=select2]"),this.ms3=d("select[data-test=select3]"),this.ms4=d("select[data-test=select4]",{filter:!0})}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},yv=class{constructor(){c(this,"pageContentElm",null);c(this,"ms1");c(this,"ms2");c(this,"ms3");c(this,"ms4");c(this,"ms5");c(this,"darkMode",!0)}mount(){var t,e;this.pageContentElm=document.querySelector(".panel-wm-content"),(t=this.pageContentElm)==null||t.classList.add("dark-mode"),(e=document.querySelector("#setDarkMode"))==null||e.addEventListener("click",()=>this.toggleDarkMode()),this.ms1=d("select[data-test=single]",{darkMode:!0}),this.ms2=d("select[data-test=radio]",{darkMode:!0,singleRadio:!0}),this.ms3=d("select[data-test=multiple]",{darkMode:!0}),this.ms4=d("select[data-test=group]",{darkMode:!0}),this.ms5=d("select[data-test=data1]",{darkMode:!0,dataTest:"select1",filter:!0,showOkButton:!0,showClear:!0,showSearchClear:!0,data:[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"},{divider:!0},{value:4,text:"Option 4"},{value:5,text:"Option 5"},{value:6,text:"Option 6"}]})}toggleDarkMode(){var t,e,o,i,s;if(this.darkMode=!this.darkMode,(t=this.ms1)==null||t.refreshOptions({darkMode:this.darkMode}),(e=this.ms2)==null||e.refreshOptions({darkMode:this.darkMode}),(o=this.ms3)==null||o.refreshOptions({darkMode:this.darkMode}),(i=this.ms4)==null||i.refreshOptions({darkMode:this.darkMode}),(s=this.ms5)==null||s.refreshOptions({darkMode:this.darkMode}),this.pageContentElm){const l=this.darkMode?"add":"remove";this.pageContentElm.classList[l]("dark-mode")}}unmount(){var t,e,o,i,s,l,a;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),(s=this.ms5)==null||s.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0,(l=this.pageContentElm)==null||l.classList.remove("dark-mode"),(a=document.querySelector("#setDarkMode"))==null||a.removeEventListener("click",()=>this.toggleDarkMode())}},wv=class{constructor(){c(this,"ms1")}mount(){this.ms1=d("select",{labelId:"custom-label"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Sv=class{constructor(){c(this,"ms1");c(this,"ms2");c(this,"ms3");c(this,"ms4")}mount(){this.ms1=d("select[data-test=select1]",{filter:!0,preFilter:t=>t.value!=="1"&&t.value!=="3"}),this.ms2=d("select[data-test=select2]",{filter:!0,preFilter:t=>t.label!=="Group 2"}),this.ms3=d("select[data-test=select3]",{data:{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"},preFilter:t=>t.value!=="2"&&t.value!=="4"}),this.ms4=d("select[data-test=select4]",{data:[{type:"optgroup",label:"Q1",children:[{text:"January",value:1,selected:!0},{text:"February",value:2},{text:"March",value:3}]},{type:"optgroup",label:"Q2",children:[{text:"April",value:4},{text:"May",value:5},{text:"June",value:6}]},{type:"optgroup",label:"Q3",children:[{text:"July",value:7},{text:"August",value:8},{text:"September",value:9}]},{type:"optgroup",label:"Q4",children:[{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}],preFilter:t=>t.label!=="Q1"})}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},Av=class{constructor(){c(this,"ms1");c(this,"ms2");c(this,"ms3");c(this,"ms4")}mount(){this.ms1=d("select[data-test=select1]",{filter:!0,preSort:(t,e)=>(+t.value-+e.value)*-1}),this.ms2=d("select[data-test=select2]",{filter:!0,preSort:(t,e)=>t.label<e.label?1:-1}),this.ms3=d("select[data-test=select3]",{data:{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"},preSort:(t,e)=>(+t.value-+e.value)*-1}),this.ms4=d("select[data-test=select4]",{data:[{type:"optgroup",label:"Q1",children:[{text:"January",value:1,selected:!0},{text:"February",value:2},{text:"March",value:3}]},{type:"optgroup",label:"Q2",children:[{text:"April",value:4},{text:"May",value:5},{text:"June",value:6}]},{type:"optgroup",label:"Q3",children:[{text:"July",value:7},{text:"August",value:8},{text:"September",value:9}]},{type:"optgroup",label:"Q4",children:[{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}],preSort:(t,e)=>t.label<e.label?1:-1})}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}};class Ov{constructor(){c(this,"serverDelayInput");c(this,"resetLazyBtn");c(this,"ms1");c(this,"ms2");c(this,"ms3");c(this,"ms4");c(this,"serverDelay",1e3)}changeServerDelay(t){const e=t.target;this.serverDelay=+e.value,this.createMultipleSelect()}mount(){this.serverDelayInput=document.querySelector("#serverdelay"),this.resetLazyBtn=document.querySelector("#resetlazy"),this.serverDelayInput.addEventListener("keyup",this.changeServerDelay.bind(this)),this.resetLazyBtn.addEventListener("click",this.createMultipleSelect.bind(this)),this.createMultipleSelect()}createMultipleSelect(){console.log("recreate ms-select"),this.ms1=d("select[data-test=select1]",{singleRadio:!0,lazyData:()=>new Promise(t=>{setTimeout(()=>{t(["January","February","March","April","May","June","July","August","September","October","November","December"])},this.serverDelay)})}),this.ms2=d("select[data-test=select2]",{lazyData:()=>new Promise(t=>{setTimeout(()=>{t([{text:"January",value:1},{text:"February",value:2,selected:!0},{text:"March",value:3,disabled:!0},{text:"April",value:4,selected:!0},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}])},this.serverDelay)})}),this.ms3=d("select[data-test=select3]",{lazyData:()=>new Promise(t=>{setTimeout(()=>{t([{type:"optgroup",label:"Q1",children:[{text:"January",value:1},{text:"February",value:2,selected:!0},{text:"March",value:3,selected:!0}]},{type:"optgroup",label:"Q2",children:[{text:"April",value:4},{text:"May",value:5},{text:"June",value:6}]},{type:"optgroup",label:"Q3",children:[{text:"July",value:7},{text:"August",value:8},{text:"September",value:9}]},{type:"optgroup",label:"Q4",children:[{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}])},this.serverDelay)})}),this.ms4=d("select[data-test=select4]",{filter:!0,filterPlaceholder:"filter placeholder",showOkButton:!0,showClear:!0,minHeight:70,lazyData:()=>new Promise(t=>{setTimeout(()=>{t([{text:"January",value:1},{text:"February",value:2,selected:!0},{text:"March",value:3,disabled:!0},{text:"April",value:4,selected:!0},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}])},this.serverDelay)})})}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.serverDelayInput.removeEventListener("click",this.changeServerDelay.bind(this)),this.resetLazyBtn.removeEventListener("click",this.createMultipleSelect.bind(this))}}const os=[{name:"getting-started",view:"/src/getting-started.html",viewModel:Ah,title:"Getting Started"},{name:"examples",view:"/src/examples/example01.html",viewModel:vl,title:"Examples"}],is=[{name:"Welcomes",routes:[{name:"example01",view:"/src/examples/example01.html",viewModel:vl,title:"Single Select"},{name:"example02",view:"/src/examples/example02.html",viewModel:qm,title:"Multiple Select"},{name:"example03",view:"/src/examples/example03.html",viewModel:Km,title:"Multiple Items"},{name:"example04",view:"/src/examples/example04.html",viewModel:Ym,title:"Auto Width"},{name:"example05",view:"/src/examples/example05.html",viewModel:Xm,title:"Disabled Select"},{name:"example06",view:"/src/examples/example06.html",viewModel:Qm,title:"Selected/Disabled Options"},{name:"example07",view:"/src/examples/example07.html",viewModel:Zm,title:"Submit Select"},{name:"example08",view:"/src/examples/example08.html",viewModel:th,title:"The Data"},{name:"example09",view:"/src/examples/example09.html",viewModel:fh,title:"Locale"},{name:"example10",view:"/src/examples/example10.html",viewModel:bh,title:"Large Select (Virtual Scroll)"},{name:"example11",view:"/src/examples/example11.html",viewModel:gh,title:"Themes / Sizes"},{name:"example12",view:"/src/examples/example12.html",viewModel:_h,title:"Checkbox/Radio Icons"},{name:"example13",view:"/src/examples/example13.html",viewModel:Eh,title:"Dynamically Create Select"},{name:"example14",view:"/src/examples/example14.html",viewModel:yh,title:"The Divider"},{name:"example15",view:"/src/examples/example15.html",viewModel:wh,title:"Dark Mode"},{name:"example16",view:"/src/examples/example16.html",viewModel:Sh,title:"Template with Images"}]},{name:"Options",routes:[{name:"options01",view:"/src/options/options01.html",viewModel:Fh,title:"The Placeholder"},{name:"options02",view:"/src/options/options02.html",viewModel:Hh,title:"Single Radio"},{name:"options03",view:"/src/options/options03.html",viewModel:Bh,title:"Hide Select All"},{name:"options04",view:"/src/options/options04.html",viewModel:Gh,title:"Hide Optgroup Checkboxes"},{name:"options05",view:"/src/options/options05.html",viewModel:Uh,title:"Custom Dropdown Width"},{name:"options06",view:"/src/options/options06.html",viewModel:Jh,title:"Max Height"},{name:"options07",view:"/src/options/options07.html",viewModel:jh,title:"Max Height Unit"},{name:"options08",view:"/src/options/options08.html",viewModel:zh,title:"The Position"},{name:"options09",view:"/src/options/options09.html",viewModel:Wh,title:"Display Values"},{name:"options10",view:"/src/options/options10.html",viewModel:Vh,title:"Display Title"},{name:"options11",view:"/src/options/options11.html",viewModel:qh,title:"Display Delimiter"},{name:"options12",view:"/src/options/options12.html",viewModel:Kh,title:"Minimum Count Selected"},{name:"options13",view:"/src/options/options13.html",viewModel:Yh,title:"The Ellipsis"},{name:"options14",view:"/src/options/options14.html",viewModel:Xh,title:"Is Open"},{name:"options15",view:"/src/options/options15.html",viewModel:Qh,title:"Keep Open"},{name:"options16",view:"/src/options/options16.html",viewModel:Zh,title:"Open On Hover"},{name:"options17",view:"/src/options/options17.html",viewModel:tv,title:"The Container"},{name:"options18",view:"/src/options/options18.html",viewModel:ev,title:"The Filter"},{name:"options19",view:"/src/options/options19.html",viewModel:nv,title:"Filter Only Optgroup"},{name:"options20",view:"/src/options/options20.html",viewModel:ov,title:"Filter Placeholder"},{name:"options21",view:"/src/options/options21.html",viewModel:iv,title:"Filter Accept On Enter"},{name:"options22",view:"/src/options/options22.html",viewModel:sv,title:"Filter By Data Length"},{name:"options23",view:"/src/options/options23.html",viewModel:lv,title:"Custom Filter"},{name:"options24",view:"/src/options/options24.html",viewModel:av,title:"Show Clear"},{name:"options25",view:"/src/options/options25.html",viewModel:rv,title:"Show OK Button"},{name:"options26",view:"/src/options/options26.html",viewModel:pv,title:"The Styler"},{name:"options27",view:"/src/options/options27.html",viewModel:cv,title:"Text Template"},{name:"options28",view:"/src/options/options28.html",viewModel:uv,title:"Label Template"},{name:"options29",view:"/src/options/options29.html",viewModel:dv,title:"Auto-Adjust Drop Position"},{name:"options30",view:"/src/options/options30.html",viewModel:mv,title:"Auto-Adjust Drop Height/Width"},{name:"options31",view:"/src/options/options31.html",viewModel:hv,title:"Use Select Option as Label"},{name:"options32",view:"/src/options/options32.html",viewModel:vv,title:"Sanitizer"},{name:"options33",view:"/src/options/options33.html",viewModel:fv,title:"Classes"},{name:"options34",view:"/src/options/options34.html",viewModel:bv,title:"Show Search Clear"},{name:"options35",view:"/src/options/options35.html",viewModel:gv,title:"Custom Diacritic Parser"},{name:"options36",view:"/src/options/options36.html",viewModel:_v,title:"Infinite Scroll"},{name:"options37",view:"/src/options/options37.html",viewModel:Ev,title:"Navigation Highlight"},{name:"options38",view:"/src/options/options38.html",viewModel:yv,title:"Dark Mode"},{name:"options39",view:"/src/options/options39.html",viewModel:wv,title:"Label Id (aria-labelledby)"},{name:"options40",view:"/src/options/options40.html",viewModel:Sv,title:"Pre-Filter Data"},{name:"options41",view:"/src/options/options41.html",viewModel:Av,title:"Pre-Sort Data"},{name:"options42",view:"/src/options/options42.html",viewModel:Ov,title:"Lazy Load Data"}]},{name:"Methods",routes:[{name:"methods01",view:"/src/methods/methods01.html",viewModel:kh,title:"The getOptions"},{name:"methods02",view:"/src/methods/methods02.html",viewModel:Th,title:"The refreshOptions"},{name:"methods03",view:"/src/methods/methods03.html",viewModel:xh,title:"The setSelects/getSelects"},{name:"methods04",view:"/src/methods/methods04.html",viewModel:Ch,title:"The enable/disable"},{name:"methods05",view:"/src/methods/methods05.html",viewModel:Dh,title:"The open/close"},{name:"methods06",view:"/src/methods/methods06.html",viewModel:Mh,title:"The check/uncheck"},{name:"methods07",view:"/src/methods/methods07.html",viewModel:Lh,title:"The checkAll/uncheckAll"},{name:"methods08",view:"/src/methods/methods08.html",viewModel:Nh,title:"The checkInvert"},{name:"methods09",view:"/src/methods/methods09.html",viewModel:$h,title:"The focus/blur"},{name:"methods10",view:"/src/methods/methods10.html",viewModel:Ih,title:"The refresh"},{name:"methods11",view:"/src/methods/methods11.html",viewModel:Rh,title:"The destroy"},{name:"methods12",view:"/src/methods/methods12.html",viewModel:Ph,title:"The getData"}]},{name:"Events",routes:[{name:"events",view:"/src/events/events.html",viewModel:Vm,title:"The Events"}]},{name:"I18N",routes:[{name:"i18n",view:"/src/i18n/i18n.html",viewModel:Oh,title:"The i18n"}]}],kv=Object.assign({"/src/events/events.html":Ul,"/src/examples/example01.html":Jl,"/src/examples/example02.html":jl,"/src/examples/example03.html":zl,"/src/examples/example04.html":Wl,"/src/examples/example05.html":Vl,"/src/examples/example06.html":ql,"/src/examples/example07.html":Kl,"/src/examples/example08.html":Yl,"/src/examples/example09.html":Xl,"/src/examples/example10.html":Ql,"/src/examples/example11.html":Zl,"/src/examples/example12.html":ta,"/src/examples/example13.html":ea,"/src/examples/example14.html":na,"/src/examples/example15.html":oa,"/src/examples/example16.html":ia,"/src/getting-started.html":sa,"/src/i18n/i18n.html":la,"/src/main.html":ss,"/src/methods/methods01.html":aa,"/src/methods/methods02.html":ra,"/src/methods/methods03.html":pa,"/src/methods/methods04.html":ca,"/src/methods/methods05.html":ua,"/src/methods/methods06.html":da,"/src/methods/methods07.html":ma,"/src/methods/methods08.html":ha,"/src/methods/methods09.html":va,"/src/methods/methods10.html":fa,"/src/methods/methods11.html":ba,"/src/methods/methods12.html":ga,"/src/options/options01.html":_a,"/src/options/options02.html":Ea,"/src/options/options03.html":ya,"/src/options/options04.html":wa,"/src/options/options05.html":Sa,"/src/options/options06.html":Aa,"/src/options/options07.html":Oa,"/src/options/options08.html":ka,"/src/options/options09.html":Ta,"/src/options/options10.html":xa,"/src/options/options11.html":Ca,"/src/options/options12.html":Da,"/src/options/options13.html":Ma,"/src/options/options14.html":La,"/src/options/options15.html":Na,"/src/options/options16.html":$a,"/src/options/options17.html":Ia,"/src/options/options18.html":Ra,"/src/options/options19.html":Pa,"/src/options/options20.html":Fa,"/src/options/options21.html":Ha,"/src/options/options22.html":Ba,"/src/options/options23.html":Ga,"/src/options/options24.html":Ua,"/src/options/options25.html":Ja,"/src/options/options26.html":ja,"/src/options/options27.html":za,"/src/options/options28.html":Wa,"/src/options/options29.html":Va,"/src/options/options30.html":qa,"/src/options/options31.html":Ka,"/src/options/options32.html":Ya,"/src/options/options33.html":Xa,"/src/options/options34.html":Qa,"/src/options/options35.html":Za,"/src/options/options36.html":tr,"/src/options/options37.html":er,"/src/options/options38.html":nr,"/src/options/options39.html":or,"/src/options/options40.html":ir,"/src/options/options41.html":sr,"/src/options/options42.html":lr});class Tv{constructor(){c(this,"loading",!0);c(this,"currentModel");c(this,"currentRouter");c(this,"defaultRouteName","getting-started");c(this,"stateBangChar","#/");c(this,"baseUrl",window.location.origin+window.location.pathname);c(this,"viewModelObj",{})}async init(){const t=window.location;document.querySelector("#app").innerHTML=bt.sanitize(ss,{RETURN_TRUSTED_TYPE:!0});let e=t.hash.replace(this.stateBangChar,"");(!e||e==="/"||e==="#")&&(e=this.defaultRouteName),this.createRouteLinks(),this.loadRoute(e),Array.from(document.querySelectorAll(".panel-wm-left a.nav-link,.navbar-nav a.nav-link")).forEach(o=>{e.includes(o.id)&&o.classList.add("active")}),window.onpopstate=()=>{const i=window.location.hash.replace(this.stateBangChar,"");this.removeAllActiveLinks();const s=document.querySelector(`#${i}`);s&&(s.scrollIntoView(),s.classList.add("active")),this.loadRoute(i||this.defaultRouteName,!1)}}createRouteLinks(){var t,e,o;for(const i of os){const s=N("li",{className:"nav-item"});N("a",{id:i.name,className:"nav-link",textContent:i.title},s).addEventListener("click",this.clickEventListener.bind(this)),(t=document.querySelector(".navbar-nav"))==null||t.appendChild(s)}for(const i of is){const s=N("li",{className:"m-1"});N("p",{className:"navbar-vertical-label mb-1",textContent:i.name},s),(e=document.querySelector(".nav-pills"))==null||e.appendChild(s);for(const l of i.routes){const a=N("li",{className:"nav-item"}),r=N("a",{id:l.name,className:"nav-link",textContent:l.title});r.addEventListener("click",this.clickEventListener.bind(this)),a.appendChild(r),(o=document.querySelector(".nav-pills"))==null||o.appendChild(a)}}}async loadRoute(t,e=!0){var s;const o=document.querySelector(".panel-wm-content");Ke(o),o.classList.add("cloak");let i=os.find(l=>l.name===t);if((i==null?void 0:i.name)==="examples"){const l=document.querySelector(".nav-pills .nav-item a.nav-link");l==null||l.classList.add("active")}else for(const l of is){const a=l.routes.find(r=>r.name===t);a&&(i=a)}if(this.currentModel&&this.unmountCurrentVM(this.currentModel,this.currentRouter),i){this.currentRouter=i,document.querySelector(".panel-wm-content").innerHTML=bt.sanitize(kv[i.view],{RETURN_TRUSTED_TYPE:!0});const l=new i.viewModel;this.currentModel=l,window[i.name]=(s=l.mount)==null?void 0:s.call(l),window.onbeforeunload=()=>{var a;o.classList.add("cloak"),(a=l.unmount)==null||a.call(l),this.removeAllActiveLinks(!0),this.unmountAll(),i!=null&&i.name&&delete window[i.name]}}e&&window.history.pushState({},t,`${this.baseUrl}${this.stateBangChar}${t}`),document.title=`Multiple-Select-Vanilla · ${t}`,o.classList.remove("cloak")}async clickEventListener(t){this.removeAllActiveLinks();const e=t.target;e.classList.toggle("active"),this.loadRoute(e.id)}removeAllActiveLinks(t=!1){document.querySelectorAll(".panel-wm-left a.nav-link,.navbar-nav a.nav-link").forEach(e=>{e.classList.remove("active"),t&&e.removeEventListener("click",this.clickEventListener.bind(this))})}unmountCurrentVM(t,e){var o;(o=t.unmount)==null||o.call(t),e&&delete window[e.name]}unmountAll(){for(const t of Object.keys(this.viewModelObj)){const e=this.viewModelObj[t];if(typeof(e==null?void 0:e.unmount)=="function"){e==null||e.unmount();for(const o of Object.keys(e))e[o]=null}window[t]=null,this.viewModelObj[t]=null,delete window[t],delete this.viewModelObj[t]}}}const xv=new Tv;xv.init();
