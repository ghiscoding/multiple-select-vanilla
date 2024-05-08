var Il=Object.defineProperty;var Rl=(n,t,e)=>t in n?Il(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var c=(n,t,e)=>(Rl(n,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Pl=`<div class="row mb-2">
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
`,Hl=`<div class="row">
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
`,Fl=`<div class="row">
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
`,Bl=`<div class="row mb-2">
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
`,Ul=`<div class="row mb-2">
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
`,Gl=`<div class="row mb-2">
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
`,jl=`<div class="row mb-2">
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
`,Jl=`<div class="row mb-2">
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
`,Wl=`<div class="row mb-2">
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
`,Vl=`<div class="row mb-2">
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
        <option value="es-ES">Spanish</option>
        <option value="it-IT">Italian</option>
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
    <label class="col-sm-3">named Locale import (Spanish)</label>

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
`,ql=`<div class="row mb-2">
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
</div>`,zl=`<div class="row mb-2">
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
`,Kl=`<div class="row mb-2">
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
`,Yl=`<div class="row mb-2">
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
`,Xl=`<div class="row mb-2">
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
`,Ql=`<div class="example15-container">
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
`,Zl=`<div class="row mb-2">
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
`,ta=`<div class="row mb-2">
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
      The project now ships its <code>.js</code> files as ESM by default, if you still wish to use the old CommonJS (CJS) format with <code>require()</code>,
      then you will have to use <code>.cjs</code> file extension.
    </p>

    <div style="background: #f7f7f7; padding: 10px">
      <pre>
&lt;!-- Latest compiled and minified CSS --&gt;
&lt;link href=&quot;<span style="color:#880000">https://cdn.jsdelivr.net/npm/multiple-select-vanilla@3.1.4/dist/styles/css/multiple-select.css</span>&quot; rel=&quot;<span style="color:#880000">stylesheet</span>&quot;&gt;

&lt;!-- (ESM requires <span style="color:#d63384">type=&quot;module&quot;</span>) Latest compiled and minified JavaScript --&gt;
&lt;script type=&quot;module&quot; src=&quot;<span style="color:#880000">https://cdn.jsdelivr.net/npm/multiple-select-vanilla@3.1.4/dist/browser/multiple-select.js</span>&quot;&gt;&lt;/script&gt;

&lt;!-- (CJS requires <span style="color:#d63384">.cjs</span> extension) Latest compiled and minified JavaScript --&gt;
&lt;script src=&quot;<span style="color:#880000">https://cdn.jsdelivr.net/npm/multiple-select-vanilla@3.1.4/dist/browser/multiple-select.cjs</span>&quot;&gt;&lt;/script&gt;</pre>
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
`,ea=`<div class="row mb-2">
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
`,es=`<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
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
`,na=`<div class="row mb-2">
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
`,oa=`<div class="row mb-2">
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
`,ia=`<div class="row mb-2">
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
`,sa=`<div class="row mb-2">
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
`,la=`<div class="row mb-2">
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
`,aa=`<div class="row mb-2">
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
`,ra=`<div class="row mb-2">
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
`,pa=`<div class="row mb-2">
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
`,ca=`<div class="row mb-2">
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
`,ua=`<div class="row mb-2">
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
`,da=`<div class="row mb-2">
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
`,ma=`<div class="row mb-2">
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
`,ha=`<div class="row mb-2">
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
`,va=`<div class="row mb-2">
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
`,fa=`<div class="row mb-2">
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
`,ba=`<div class="row mb-2">
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
`,ga=`<div class="row mb-2">
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
`,_a=`<div class="row mb-2">
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
`,Ea=`<div class="row mb-2">
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
`,ya=`<div class="row mb-2">
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
`,wa=`<div class="row mb-2">
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
`,Sa=`<div class="row mb-2">
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
`,Aa=`<div class="row mb-2">
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
`,ka=`<div class="row mb-2">
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
`,Oa=`<div class="row mb-2">
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
`,Ta=`<div class="row mb-2">
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
`,xa=`<div class="row mb-2">
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
`,Ca=`<div class="row mb-2">
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
`,Da=`<div class="row mb-2">
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
`,Na=`<div class="row mb-2">
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
`,Ma=`<div class="row mb-2">
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
`,La=`<div class="row mb-2">
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
`,$a=`<div class="row mb-2">
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
`,Ia=`<div class="row mb-2">
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
`,Ra=`<div class="row mb-2">
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
`,Pa=`<div class="row mb-2">
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
`,Ha=`<div class="row mb-2">
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
`,Fa=`<div class="row mb-2">
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
`,Ba=`<div class="row mb-2">
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
`,Ua=`<div class="row mb-2">
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
`,Ga=`<div class="row mb-2">
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
`,ja=`<div class="row mb-2">
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
`,Ja=`<div class="row mb-2">
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
`,Wa=`<div class="row mb-2">
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
`,Va=`<div class="row mb-2">
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
`,qa=`<div class="row mb-2">
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
`,za=`<div class="row mb-2">
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
`,Ka=`<div class="row mb-2">
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
</div>`,Ya=`<div class="row">
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
`,Xa=`<div class="example15-container">
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
`,Qa=`<div class="row mb-2">
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
`;var K="top",st="bottom",lt="right",Y="left",An="auto",Oe=[K,st,lt,Y],te="start",_e="end",ns="clippingParents",yo="viewport",ve="popper",os="reference",ro=Oe.reduce(function(n,t){return n.concat([t+"-"+te,t+"-"+_e])},[]),wo=[].concat(Oe,[An]).reduce(function(n,t){return n.concat([t,t+"-"+te,t+"-"+_e])},[]),is="beforeRead",ss="read",ls="afterRead",as="beforeMain",rs="main",ps="afterMain",cs="beforeWrite",us="write",ds="afterWrite",ms=[is,ss,ls,as,rs,ps,cs,us,ds];function Tt(n){return n?(n.nodeName||"").toLowerCase():null}function at(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var t=n.ownerDocument;return t&&t.defaultView||window}return n}function ee(n){var t=at(n).Element;return n instanceof t||n instanceof Element}function pt(n){var t=at(n).HTMLElement;return n instanceof t||n instanceof HTMLElement}function So(n){if(typeof ShadowRoot>"u")return!1;var t=at(n).ShadowRoot;return n instanceof t||n instanceof ShadowRoot}function Za(n){var t=n.state;Object.keys(t.elements).forEach(function(e){var o=t.styles[e]||{},i=t.attributes[e]||{},s=t.elements[e];!pt(s)||!Tt(s)||(Object.assign(s.style,o),Object.keys(i).forEach(function(l){var a=i[l];a===!1?s.removeAttribute(l):s.setAttribute(l,a===!0?"":a)}))})}function tr(n){var t=n.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(o){var i=t.elements[o],s=t.attributes[o]||{},l=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:e[o]),a=l.reduce(function(p,d){return p[d]="",p},{});!pt(i)||!Tt(i)||(Object.assign(i.style,a),Object.keys(s).forEach(function(p){i.removeAttribute(p)}))})}}const Ao={name:"applyStyles",enabled:!0,phase:"write",fn:Za,effect:tr,requires:["computeStyles"]};function kt(n){return n.split("-")[0]}var Zt=Math.max,En=Math.min,Ee=Math.round;function po(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function hs(){return!/^((?!chrome|android).)*safari/i.test(po())}function ye(n,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var o=n.getBoundingClientRect(),i=1,s=1;t&&pt(n)&&(i=n.offsetWidth>0&&Ee(o.width)/n.offsetWidth||1,s=n.offsetHeight>0&&Ee(o.height)/n.offsetHeight||1);var l=ee(n)?at(n):window,a=l.visualViewport,p=!hs()&&e,d=(o.left+(p&&a?a.offsetLeft:0))/i,u=(o.top+(p&&a?a.offsetTop:0))/s,f=o.width/i,w=o.height/s;return{width:f,height:w,top:u,right:d+f,bottom:u+w,left:d,x:d,y:u}}function ko(n){var t=ye(n),e=n.offsetWidth,o=n.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:n.offsetLeft,y:n.offsetTop,width:e,height:o}}function vs(n,t){var e=t.getRootNode&&t.getRootNode();if(n.contains(t))return!0;if(e&&So(e)){var o=t;do{if(o&&n.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Pt(n){return at(n).getComputedStyle(n)}function er(n){return["table","td","th"].indexOf(Tt(n))>=0}function Jt(n){return((ee(n)?n.ownerDocument:n.document)||window.document).documentElement}function kn(n){return Tt(n)==="html"?n:n.assignedSlot||n.parentNode||(So(n)?n.host:null)||Jt(n)}function ei(n){return!pt(n)||Pt(n).position==="fixed"?null:n.offsetParent}function nr(n){var t=/firefox/i.test(po()),e=/Trident/i.test(po());if(e&&pt(n)){var o=Pt(n);if(o.position==="fixed")return null}var i=kn(n);for(So(i)&&(i=i.host);pt(i)&&["html","body"].indexOf(Tt(i))<0;){var s=Pt(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function qe(n){for(var t=at(n),e=ei(n);e&&er(e)&&Pt(e).position==="static";)e=ei(e);return e&&(Tt(e)==="html"||Tt(e)==="body"&&Pt(e).position==="static")?t:e||nr(n)||t}function Oo(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function je(n,t,e){return Zt(n,En(t,e))}function or(n,t,e){var o=je(n,t,e);return o>e?e:o}function fs(){return{top:0,right:0,bottom:0,left:0}}function bs(n){return Object.assign({},fs(),n)}function gs(n,t){return t.reduce(function(e,o){return e[o]=n,e},{})}var ir=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,bs(typeof t!="number"?t:gs(t,Oe))};function sr(n){var t,e=n.state,o=n.name,i=n.options,s=e.elements.arrow,l=e.modifiersData.popperOffsets,a=kt(e.placement),p=Oo(a),d=[Y,lt].indexOf(a)>=0,u=d?"height":"width";if(!(!s||!l)){var f=ir(i.padding,e),w=ko(s),E=p==="y"?K:Y,T=p==="y"?st:lt,A=e.rects.reference[u]+e.rects.reference[p]-l[p]-e.rects.popper[u],x=l[p]-e.rects.reference[p],N=qe(s),M=N?p==="y"?N.clientHeight||0:N.clientWidth||0:0,k=A/2-x/2,S=f[E],C=M-w[u]-f[T],L=M/2-w[u]/2+k,R=je(S,L,C),G=p;e.modifiersData[o]=(t={},t[G]=R,t.centerOffset=R-L,t)}}function lr(n){var t=n.state,e=n.options,o=e.element,i=o===void 0?"[data-popper-arrow]":o;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||vs(t.elements.popper,i)&&(t.elements.arrow=i))}const _s={name:"arrow",enabled:!0,phase:"main",fn:sr,effect:lr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function we(n){return n.split("-")[1]}var ar={top:"auto",right:"auto",bottom:"auto",left:"auto"};function rr(n,t){var e=n.x,o=n.y,i=t.devicePixelRatio||1;return{x:Ee(e*i)/i||0,y:Ee(o*i)/i||0}}function ni(n){var t,e=n.popper,o=n.popperRect,i=n.placement,s=n.variation,l=n.offsets,a=n.position,p=n.gpuAcceleration,d=n.adaptive,u=n.roundOffsets,f=n.isFixed,w=l.x,E=w===void 0?0:w,T=l.y,A=T===void 0?0:T,x=typeof u=="function"?u({x:E,y:A}):{x:E,y:A};E=x.x,A=x.y;var N=l.hasOwnProperty("x"),M=l.hasOwnProperty("y"),k=Y,S=K,C=window;if(d){var L=qe(e),R="clientHeight",G="clientWidth";if(L===at(e)&&(L=Jt(e),Pt(L).position!=="static"&&a==="absolute"&&(R="scrollHeight",G="scrollWidth")),L=L,i===K||(i===Y||i===lt)&&s===_e){S=st;var B=f&&L===C&&C.visualViewport?C.visualViewport.height:L[R];A-=B-o.height,A*=p?1:-1}if(i===Y||(i===K||i===st)&&s===_e){k=lt;var $=f&&L===C&&C.visualViewport?C.visualViewport.width:L[G];E-=$-o.width,E*=p?1:-1}}var U=Object.assign({position:a},d&&ar),q=u===!0?rr({x:E,y:A},at(e)):{x:E,y:A};if(E=q.x,A=q.y,p){var j;return Object.assign({},U,(j={},j[S]=M?"0":"",j[k]=N?"0":"",j.transform=(C.devicePixelRatio||1)<=1?"translate("+E+"px, "+A+"px)":"translate3d("+E+"px, "+A+"px, 0)",j))}return Object.assign({},U,(t={},t[S]=M?A+"px":"",t[k]=N?E+"px":"",t.transform="",t))}function pr(n){var t=n.state,e=n.options,o=e.gpuAcceleration,i=o===void 0?!0:o,s=e.adaptive,l=s===void 0?!0:s,a=e.roundOffsets,p=a===void 0?!0:a,d={placement:kt(t.placement),variation:we(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,ni(Object.assign({},d,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:p})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,ni(Object.assign({},d,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:p})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const To={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:pr,data:{}};var on={passive:!0};function cr(n){var t=n.state,e=n.instance,o=n.options,i=o.scroll,s=i===void 0?!0:i,l=o.resize,a=l===void 0?!0:l,p=at(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&d.forEach(function(u){u.addEventListener("scroll",e.update,on)}),a&&p.addEventListener("resize",e.update,on),function(){s&&d.forEach(function(u){u.removeEventListener("scroll",e.update,on)}),a&&p.removeEventListener("resize",e.update,on)}}const xo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:cr,data:{}};var ur={left:"right",right:"left",bottom:"top",top:"bottom"};function fn(n){return n.replace(/left|right|bottom|top/g,function(t){return ur[t]})}var dr={start:"end",end:"start"};function oi(n){return n.replace(/start|end/g,function(t){return dr[t]})}function Co(n){var t=at(n),e=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:e,scrollTop:o}}function Do(n){return ye(Jt(n)).left+Co(n).scrollLeft}function mr(n,t){var e=at(n),o=Jt(n),i=e.visualViewport,s=o.clientWidth,l=o.clientHeight,a=0,p=0;if(i){s=i.width,l=i.height;var d=hs();(d||!d&&t==="fixed")&&(a=i.offsetLeft,p=i.offsetTop)}return{width:s,height:l,x:a+Do(n),y:p}}function hr(n){var t,e=Jt(n),o=Co(n),i=(t=n.ownerDocument)==null?void 0:t.body,s=Zt(e.scrollWidth,e.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=Zt(e.scrollHeight,e.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-o.scrollLeft+Do(n),p=-o.scrollTop;return Pt(i||e).direction==="rtl"&&(a+=Zt(e.clientWidth,i?i.clientWidth:0)-s),{width:s,height:l,x:a,y:p}}function No(n){var t=Pt(n),e=t.overflow,o=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+i+o)}function Es(n){return["html","body","#document"].indexOf(Tt(n))>=0?n.ownerDocument.body:pt(n)&&No(n)?n:Es(kn(n))}function Je(n,t){var e;t===void 0&&(t=[]);var o=Es(n),i=o===((e=n.ownerDocument)==null?void 0:e.body),s=at(o),l=i?[s].concat(s.visualViewport||[],No(o)?o:[]):o,a=t.concat(l);return i?a:a.concat(Je(kn(l)))}function co(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function vr(n,t){var e=ye(n,!1,t==="fixed");return e.top=e.top+n.clientTop,e.left=e.left+n.clientLeft,e.bottom=e.top+n.clientHeight,e.right=e.left+n.clientWidth,e.width=n.clientWidth,e.height=n.clientHeight,e.x=e.left,e.y=e.top,e}function ii(n,t,e){return t===yo?co(mr(n,e)):ee(t)?vr(t,e):co(hr(Jt(n)))}function fr(n){var t=Je(kn(n)),e=["absolute","fixed"].indexOf(Pt(n).position)>=0,o=e&&pt(n)?qe(n):n;return ee(o)?t.filter(function(i){return ee(i)&&vs(i,o)&&Tt(i)!=="body"}):[]}function br(n,t,e,o){var i=t==="clippingParents"?fr(n):[].concat(t),s=[].concat(i,[e]),l=s[0],a=s.reduce(function(p,d){var u=ii(n,d,o);return p.top=Zt(u.top,p.top),p.right=En(u.right,p.right),p.bottom=En(u.bottom,p.bottom),p.left=Zt(u.left,p.left),p},ii(n,l,o));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ys(n){var t=n.reference,e=n.element,o=n.placement,i=o?kt(o):null,s=o?we(o):null,l=t.x+t.width/2-e.width/2,a=t.y+t.height/2-e.height/2,p;switch(i){case K:p={x:l,y:t.y-e.height};break;case st:p={x:l,y:t.y+t.height};break;case lt:p={x:t.x+t.width,y:a};break;case Y:p={x:t.x-e.width,y:a};break;default:p={x:t.x,y:t.y}}var d=i?Oo(i):null;if(d!=null){var u=d==="y"?"height":"width";switch(s){case te:p[d]=p[d]-(t[u]/2-e[u]/2);break;case _e:p[d]=p[d]+(t[u]/2-e[u]/2);break}}return p}function Se(n,t){t===void 0&&(t={});var e=t,o=e.placement,i=o===void 0?n.placement:o,s=e.strategy,l=s===void 0?n.strategy:s,a=e.boundary,p=a===void 0?ns:a,d=e.rootBoundary,u=d===void 0?yo:d,f=e.elementContext,w=f===void 0?ve:f,E=e.altBoundary,T=E===void 0?!1:E,A=e.padding,x=A===void 0?0:A,N=bs(typeof x!="number"?x:gs(x,Oe)),M=w===ve?os:ve,k=n.rects.popper,S=n.elements[T?M:w],C=br(ee(S)?S:S.contextElement||Jt(n.elements.popper),p,u,l),L=ye(n.elements.reference),R=ys({reference:L,element:k,strategy:"absolute",placement:i}),G=co(Object.assign({},k,R)),B=w===ve?G:L,$={top:C.top-B.top+N.top,bottom:B.bottom-C.bottom+N.bottom,left:C.left-B.left+N.left,right:B.right-C.right+N.right},U=n.modifiersData.offset;if(w===ve&&U){var q=U[i];Object.keys($).forEach(function(j){var xt=[lt,st].indexOf(j)>=0?1:-1,Ct=[K,st].indexOf(j)>=0?"y":"x";$[j]+=q[Ct]*xt})}return $}function gr(n,t){t===void 0&&(t={});var e=t,o=e.placement,i=e.boundary,s=e.rootBoundary,l=e.padding,a=e.flipVariations,p=e.allowedAutoPlacements,d=p===void 0?wo:p,u=we(o),f=u?a?ro:ro.filter(function(T){return we(T)===u}):Oe,w=f.filter(function(T){return d.indexOf(T)>=0});w.length===0&&(w=f);var E=w.reduce(function(T,A){return T[A]=Se(n,{placement:A,boundary:i,rootBoundary:s,padding:l})[kt(A)],T},{});return Object.keys(E).sort(function(T,A){return E[T]-E[A]})}function _r(n){if(kt(n)===An)return[];var t=fn(n);return[oi(n),t,oi(t)]}function Er(n){var t=n.state,e=n.options,o=n.name;if(!t.modifiersData[o]._skip){for(var i=e.mainAxis,s=i===void 0?!0:i,l=e.altAxis,a=l===void 0?!0:l,p=e.fallbackPlacements,d=e.padding,u=e.boundary,f=e.rootBoundary,w=e.altBoundary,E=e.flipVariations,T=E===void 0?!0:E,A=e.allowedAutoPlacements,x=t.options.placement,N=kt(x),M=N===x,k=p||(M||!T?[fn(x)]:_r(x)),S=[x].concat(k).reduce(function(I,Z){return I.concat(kt(Z)===An?gr(t,{placement:Z,boundary:u,rootBoundary:f,padding:d,flipVariations:T,allowedAutoPlacements:A}):Z)},[]),C=t.rects.reference,L=t.rects.popper,R=new Map,G=!0,B=S[0],$=0;$<S.length;$++){var U=S[$],q=kt(U),j=we(U)===te,xt=[K,st].indexOf(q)>=0,Ct=xt?"width":"height",z=Se(t,{placement:U,boundary:u,rootBoundary:f,altBoundary:w,padding:d}),Q=xt?j?lt:Y:j?st:K;C[Ct]>L[Ct]&&(Q=fn(Q));var ie=fn(Q),Et=[];if(s&&Et.push(z[q]<=0),a&&Et.push(z[Q]<=0,z[ie]<=0),Et.every(function(I){return I})){B=U,G=!1;break}R.set(U,Et)}if(G)for(var H=T?3:1,se=function(Z){var Dt=S.find(function(zt){var ht=R.get(zt);if(ht)return ht.slice(0,Z).every(function(le){return le})});if(Dt)return B=Dt,"break"},P=H;P>0;P--){var qt=se(P);if(qt==="break")break}t.placement!==B&&(t.modifiersData[o]._skip=!0,t.placement=B,t.reset=!0)}}const ws={name:"flip",enabled:!0,phase:"main",fn:Er,requiresIfExists:["offset"],data:{_skip:!1}};function si(n,t,e){return e===void 0&&(e={x:0,y:0}),{top:n.top-t.height-e.y,right:n.right-t.width+e.x,bottom:n.bottom-t.height+e.y,left:n.left-t.width-e.x}}function li(n){return[K,lt,st,Y].some(function(t){return n[t]>=0})}function yr(n){var t=n.state,e=n.name,o=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,l=Se(t,{elementContext:"reference"}),a=Se(t,{altBoundary:!0}),p=si(l,o),d=si(a,i,s),u=li(p),f=li(d);t.modifiersData[e]={referenceClippingOffsets:p,popperEscapeOffsets:d,isReferenceHidden:u,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}const Ss={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:yr};function wr(n,t,e){var o=kt(n),i=[Y,K].indexOf(o)>=0?-1:1,s=typeof e=="function"?e(Object.assign({},t,{placement:n})):e,l=s[0],a=s[1];return l=l||0,a=(a||0)*i,[Y,lt].indexOf(o)>=0?{x:a,y:l}:{x:l,y:a}}function Sr(n){var t=n.state,e=n.options,o=n.name,i=e.offset,s=i===void 0?[0,0]:i,l=wo.reduce(function(u,f){return u[f]=wr(f,t.rects,s),u},{}),a=l[t.placement],p=a.x,d=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=p,t.modifiersData.popperOffsets.y+=d),t.modifiersData[o]=l}const As={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Sr};function Ar(n){var t=n.state,e=n.name;t.modifiersData[e]=ys({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Mo={name:"popperOffsets",enabled:!0,phase:"read",fn:Ar,data:{}};function kr(n){return n==="x"?"y":"x"}function Or(n){var t=n.state,e=n.options,o=n.name,i=e.mainAxis,s=i===void 0?!0:i,l=e.altAxis,a=l===void 0?!1:l,p=e.boundary,d=e.rootBoundary,u=e.altBoundary,f=e.padding,w=e.tether,E=w===void 0?!0:w,T=e.tetherOffset,A=T===void 0?0:T,x=Se(t,{boundary:p,rootBoundary:d,padding:f,altBoundary:u}),N=kt(t.placement),M=we(t.placement),k=!M,S=Oo(N),C=kr(S),L=t.modifiersData.popperOffsets,R=t.rects.reference,G=t.rects.popper,B=typeof A=="function"?A(Object.assign({},t.rects,{placement:t.placement})):A,$=typeof B=="number"?{mainAxis:B,altAxis:B}:Object.assign({mainAxis:0,altAxis:0},B),U=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,q={x:0,y:0};if(L){if(s){var j,xt=S==="y"?K:Y,Ct=S==="y"?st:lt,z=S==="y"?"height":"width",Q=L[S],ie=Q+x[xt],Et=Q-x[Ct],H=E?-G[z]/2:0,se=M===te?R[z]:G[z],P=M===te?-G[z]:-R[z],qt=t.elements.arrow,I=E&&qt?ko(qt):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:fs(),Dt=Z[xt],zt=Z[Ct],ht=je(0,R[z],I[z]),le=k?R[z]/2-H-ht-Dt-$.mainAxis:se-ht-Dt-$.mainAxis,Qe=k?-R[z]/2+H+ht+zt+$.mainAxis:P+ht+zt+$.mainAxis,yt=t.elements.arrow&&qe(t.elements.arrow),Ze=yt?S==="y"?yt.clientTop||0:yt.clientLeft||0:0,wt=(j=U==null?void 0:U[S])!=null?j:0,De=Q+le-wt-Ze,Ne=Q+Qe-wt,Nt=je(E?En(ie,De):ie,Q,E?Zt(Et,Ne):Et);L[S]=Nt,q[S]=Nt-Q}if(a){var Kt,ae=S==="x"?K:Y,tn=S==="x"?st:lt,St=L[C],re=C==="y"?"height":"width",pe=St+x[ae],Ft=St-x[tn],At=[K,Y].indexOf(N)!==-1,Mt=(Kt=U==null?void 0:U[C])!=null?Kt:0,Me=At?pe:St-R[re]-G[re]-Mt+$.altAxis,Le=At?St+R[re]+G[re]-Mt-$.altAxis:Ft,$e=E&&At?or(Me,St,Le):je(E?Me:pe,St,E?Le:Ft);L[C]=$e,q[C]=$e-St}t.modifiersData[o]=q}}const ks={name:"preventOverflow",enabled:!0,phase:"main",fn:Or,requiresIfExists:["offset"]};function Tr(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function xr(n){return n===at(n)||!pt(n)?Co(n):Tr(n)}function Cr(n){var t=n.getBoundingClientRect(),e=Ee(t.width)/n.offsetWidth||1,o=Ee(t.height)/n.offsetHeight||1;return e!==1||o!==1}function Dr(n,t,e){e===void 0&&(e=!1);var o=pt(t),i=pt(t)&&Cr(t),s=Jt(t),l=ye(n,i,e),a={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(o||!o&&!e)&&((Tt(t)!=="body"||No(s))&&(a=xr(t)),pt(t)?(p=ye(t,!0),p.x+=t.clientLeft,p.y+=t.clientTop):s&&(p.x=Do(s))),{x:l.left+a.scrollLeft-p.x,y:l.top+a.scrollTop-p.y,width:l.width,height:l.height}}function Nr(n){var t=new Map,e=new Set,o=[];n.forEach(function(s){t.set(s.name,s)});function i(s){e.add(s.name);var l=[].concat(s.requires||[],s.requiresIfExists||[]);l.forEach(function(a){if(!e.has(a)){var p=t.get(a);p&&i(p)}}),o.push(s)}return n.forEach(function(s){e.has(s.name)||i(s)}),o}function Mr(n){var t=Nr(n);return ms.reduce(function(e,o){return e.concat(t.filter(function(i){return i.phase===o}))},[])}function Lr(n){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(n())})})),t}}function $r(n){var t=n.reduce(function(e,o){var i=e[o.name];return e[o.name]=i?Object.assign({},i,o,{options:Object.assign({},i.options,o.options),data:Object.assign({},i.data,o.data)}):o,e},{});return Object.keys(t).map(function(e){return t[e]})}var ai={placement:"bottom",modifiers:[],strategy:"absolute"};function ri(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function On(n){n===void 0&&(n={});var t=n,e=t.defaultModifiers,o=e===void 0?[]:e,i=t.defaultOptions,s=i===void 0?ai:i;return function(a,p,d){d===void 0&&(d=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},ai,s),modifiersData:{},elements:{reference:a,popper:p},attributes:{},styles:{}},f=[],w=!1,E={state:u,setOptions:function(N){var M=typeof N=="function"?N(u.options):N;A(),u.options=Object.assign({},s,u.options,M),u.scrollParents={reference:ee(a)?Je(a):a.contextElement?Je(a.contextElement):[],popper:Je(p)};var k=Mr($r([].concat(o,u.options.modifiers)));return u.orderedModifiers=k.filter(function(S){return S.enabled}),T(),E.update()},forceUpdate:function(){if(!w){var N=u.elements,M=N.reference,k=N.popper;if(ri(M,k)){u.rects={reference:Dr(M,qe(k),u.options.strategy==="fixed"),popper:ko(k)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function($){return u.modifiersData[$.name]=Object.assign({},$.data)});for(var S=0;S<u.orderedModifiers.length;S++){if(u.reset===!0){u.reset=!1,S=-1;continue}var C=u.orderedModifiers[S],L=C.fn,R=C.options,G=R===void 0?{}:R,B=C.name;typeof L=="function"&&(u=L({state:u,options:G,name:B,instance:E})||u)}}}},update:Lr(function(){return new Promise(function(x){E.forceUpdate(),x(u)})}),destroy:function(){A(),w=!0}};if(!ri(a,p))return E;E.setOptions(d).then(function(x){!w&&d.onFirstUpdate&&d.onFirstUpdate(x)});function T(){u.orderedModifiers.forEach(function(x){var N=x.name,M=x.options,k=M===void 0?{}:M,S=x.effect;if(typeof S=="function"){var C=S({state:u,name:N,instance:E,options:k}),L=function(){};f.push(C||L)}})}function A(){f.forEach(function(x){return x()}),f=[]}return E}}var Ir=On(),Rr=[xo,Mo,To,Ao],Pr=On({defaultModifiers:Rr}),Hr=[xo,Mo,To,Ao,As,ws,ks,_s,Ss],Lo=On({defaultModifiers:Hr});const Os=Object.freeze(Object.defineProperty({__proto__:null,afterMain:ps,afterRead:ls,afterWrite:ds,applyStyles:Ao,arrow:_s,auto:An,basePlacements:Oe,beforeMain:as,beforeRead:is,beforeWrite:cs,bottom:st,clippingParents:ns,computeStyles:To,createPopper:Lo,createPopperBase:Ir,createPopperLite:Pr,detectOverflow:Se,end:_e,eventListeners:xo,flip:ws,hide:Ss,left:Y,main:rs,modifierPhases:ms,offset:As,placements:wo,popper:ve,popperGenerator:On,popperOffsets:Mo,preventOverflow:ks,read:ss,reference:os,right:lt,start:te,top:K,variationPlacements:ro,viewport:yo,write:us},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Bt=new Map,Pn={set(n,t,e){Bt.has(n)||Bt.set(n,new Map);const o=Bt.get(n);if(!o.has(t)&&o.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`);return}o.set(t,e)},get(n,t){return Bt.has(n)&&Bt.get(n).get(t)||null},remove(n,t){if(!Bt.has(n))return;const e=Bt.get(n);e.delete(t),e.size===0&&Bt.delete(n)}},Fr=1e6,Br=1e3,uo="transitionend",Ts=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),n),Ur=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),Gr=n=>{do n+=Math.floor(Math.random()*Fr);while(document.getElementById(n));return n},jr=n=>{if(!n)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(n);const o=Number.parseFloat(t),i=Number.parseFloat(e);return!o&&!i?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*Br)},xs=n=>{n.dispatchEvent(new Event(uo))},It=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),Ut=n=>It(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(Ts(n)):null,Te=n=>{if(!It(n)||n.getClientRects().length===0)return!1;const t=getComputedStyle(n).getPropertyValue("visibility")==="visible",e=n.closest("details:not([open])");if(!e)return t;if(e!==n){const o=n.closest("summary");if(o&&o.parentNode!==e||o===null)return!1}return t},Gt=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",Cs=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const t=n.getRootNode();return t instanceof ShadowRoot?t:null}return n instanceof ShadowRoot?n:n.parentNode?Cs(n.parentNode):null},yn=()=>{},ze=n=>{n.offsetHeight},Ds=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Hn=[],Jr=n=>{document.readyState==="loading"?(Hn.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of Hn)t()}),Hn.push(n)):n()},ct=()=>document.documentElement.dir==="rtl",mt=n=>{Jr(()=>{const t=Ds();if(t){const e=n.NAME,o=t.fn[e];t.fn[e]=n.jQueryInterface,t.fn[e].Constructor=n,t.fn[e].noConflict=()=>(t.fn[e]=o,n.jQueryInterface)}})},it=(n,t=[],e=n)=>typeof n=="function"?n(...t):e,Ns=(n,t,e=!0)=>{if(!e){it(n);return}const i=jr(t)+5;let s=!1;const l=({target:a})=>{a===t&&(s=!0,t.removeEventListener(uo,l),it(n))};t.addEventListener(uo,l),setTimeout(()=>{s||xs(t)},i)},$o=(n,t,e,o)=>{const i=n.length;let s=n.indexOf(t);return s===-1?!e&&o?n[i-1]:n[0]:(s+=e?1:-1,o&&(s=(s+i)%i),n[Math.max(0,Math.min(s,i-1))])},Wr=/[^.]*(?=\..*)\.|.*/,Vr=/\..*/,qr=/::\d+$/,Fn={};let pi=1;const Ms={mouseenter:"mouseover",mouseleave:"mouseout"},zr=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Ls(n,t){return t&&`${t}::${pi++}`||n.uidEvent||pi++}function $s(n){const t=Ls(n);return n.uidEvent=t,Fn[t]=Fn[t]||{},Fn[t]}function Kr(n,t){return function e(o){return Io(o,{delegateTarget:n}),e.oneOff&&h.off(n,o.type,t),t.apply(n,[o])}}function Yr(n,t,e){return function o(i){const s=n.querySelectorAll(t);for(let{target:l}=i;l&&l!==this;l=l.parentNode)for(const a of s)if(a===l)return Io(i,{delegateTarget:l}),o.oneOff&&h.off(n,i.type,t,e),e.apply(l,[i])}}function Is(n,t,e=null){return Object.values(n).find(o=>o.callable===t&&o.delegationSelector===e)}function Rs(n,t,e){const o=typeof t=="string",i=o?e:t||e;let s=Ps(n);return zr.has(s)||(s=n),[o,i,s]}function ci(n,t,e,o,i){if(typeof t!="string"||!n)return;let[s,l,a]=Rs(t,e,o);t in Ms&&(l=(T=>function(A){if(!A.relatedTarget||A.relatedTarget!==A.delegateTarget&&!A.delegateTarget.contains(A.relatedTarget))return T.call(this,A)})(l));const p=$s(n),d=p[a]||(p[a]={}),u=Is(d,l,s?e:null);if(u){u.oneOff=u.oneOff&&i;return}const f=Ls(l,t.replace(Wr,"")),w=s?Yr(n,e,l):Kr(n,l);w.delegationSelector=s?e:null,w.callable=l,w.oneOff=i,w.uidEvent=f,d[f]=w,n.addEventListener(a,w,s)}function mo(n,t,e,o,i){const s=Is(t[e],o,i);s&&(n.removeEventListener(e,s,!!i),delete t[e][s.uidEvent])}function Xr(n,t,e,o){const i=t[e]||{};for(const[s,l]of Object.entries(i))s.includes(o)&&mo(n,t,e,l.callable,l.delegationSelector)}function Ps(n){return n=n.replace(Vr,""),Ms[n]||n}const h={on(n,t,e,o){ci(n,t,e,o,!1)},one(n,t,e,o){ci(n,t,e,o,!0)},off(n,t,e,o){if(typeof t!="string"||!n)return;const[i,s,l]=Rs(t,e,o),a=l!==t,p=$s(n),d=p[l]||{},u=t.startsWith(".");if(typeof s<"u"){if(!Object.keys(d).length)return;mo(n,p,l,s,i?e:null);return}if(u)for(const f of Object.keys(p))Xr(n,p,f,t.slice(1));for(const[f,w]of Object.entries(d)){const E=f.replace(qr,"");(!a||t.includes(E))&&mo(n,p,l,w.callable,w.delegationSelector)}},trigger(n,t,e){if(typeof t!="string"||!n)return null;const o=Ds(),i=Ps(t),s=t!==i;let l=null,a=!0,p=!0,d=!1;s&&o&&(l=o.Event(t,e),o(n).trigger(l),a=!l.isPropagationStopped(),p=!l.isImmediatePropagationStopped(),d=l.isDefaultPrevented());const u=Io(new Event(t,{bubbles:a,cancelable:!0}),e);return d&&u.preventDefault(),p&&n.dispatchEvent(u),u.defaultPrevented&&l&&l.preventDefault(),u}};function Io(n,t={}){for(const[e,o]of Object.entries(t))try{n[e]=o}catch{Object.defineProperty(n,e,{configurable:!0,get(){return o}})}return n}function ui(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function Bn(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const Rt={setDataAttribute(n,t,e){n.setAttribute(`data-bs-${Bn(t)}`,e)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${Bn(t)}`)},getDataAttributes(n){if(!n)return{};const t={},e=Object.keys(n.dataset).filter(o=>o.startsWith("bs")&&!o.startsWith("bsConfig"));for(const o of e){let i=o.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=ui(n.dataset[o])}return t},getDataAttribute(n,t){return ui(n.getAttribute(`data-bs-${Bn(t)}`))}};class Ke{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const o=It(e)?Rt.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof o=="object"?o:{},...It(e)?Rt.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[o,i]of Object.entries(e)){const s=t[o],l=It(s)?"element":Ur(s);if(!new RegExp(i).test(l))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${o}" provided type "${l}" but expected type "${i}".`)}}}const Qr="5.3.3";class _t extends Ke{constructor(t,e){super(),t=Ut(t),t&&(this._element=t,this._config=this._getConfig(e),Pn.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Pn.remove(this._element,this.constructor.DATA_KEY),h.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,o=!0){Ns(t,e,o)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Pn.get(Ut(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return Qr}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const Un=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let e=n.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?e.trim():null}return t?t.split(",").map(e=>Ts(e)).join(","):null},y={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(e=>e.matches(t))},parents(n,t){const e=[];let o=n.parentNode.closest(t);for(;o;)e.push(o),o=o.parentNode.closest(t);return e},prev(n,t){let e=n.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(n,t){let e=n.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(e=>!Gt(e)&&Te(e))},getSelectorFromElement(n){const t=Un(n);return t&&y.findOne(t)?t:null},getElementFromSelector(n){const t=Un(n);return t?y.findOne(t):null},getMultipleElementsFromSelector(n){const t=Un(n);return t?y.find(t):[]}},Tn=(n,t="hide")=>{const e=`click.dismiss${n.EVENT_KEY}`,o=n.NAME;h.on(document,e,`[data-bs-dismiss="${o}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),Gt(this))return;const s=y.getElementFromSelector(this)||this.closest(`.${o}`);n.getOrCreateInstance(s)[t]()})},Zr="alert",tp="bs.alert",Hs=`.${tp}`,ep=`close${Hs}`,np=`closed${Hs}`,op="fade",ip="show";class xn extends _t{static get NAME(){return Zr}close(){if(h.trigger(this._element,ep).defaultPrevented)return;this._element.classList.remove(ip);const e=this._element.classList.contains(op);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),h.trigger(this._element,np),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=xn.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Tn(xn,"close");mt(xn);const sp="button",lp="bs.button",ap=`.${lp}`,rp=".data-api",pp="active",di='[data-bs-toggle="button"]',cp=`click${ap}${rp}`;class Cn extends _t{static get NAME(){return sp}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(pp))}static jQueryInterface(t){return this.each(function(){const e=Cn.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}h.on(document,cp,di,n=>{n.preventDefault();const t=n.target.closest(di);Cn.getOrCreateInstance(t).toggle()});mt(Cn);const up="swipe",xe=".bs.swipe",dp=`touchstart${xe}`,mp=`touchmove${xe}`,hp=`touchend${xe}`,vp=`pointerdown${xe}`,fp=`pointerup${xe}`,bp="touch",gp="pen",_p="pointer-event",Ep=40,yp={endCallback:null,leftCallback:null,rightCallback:null},wp={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class wn extends Ke{constructor(t,e){super(),this._element=t,!(!t||!wn.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return yp}static get DefaultType(){return wp}static get NAME(){return up}dispose(){h.off(this._element,xe)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),it(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=Ep)return;const e=t/this._deltaX;this._deltaX=0,e&&it(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(h.on(this._element,vp,t=>this._start(t)),h.on(this._element,fp,t=>this._end(t)),this._element.classList.add(_p)):(h.on(this._element,dp,t=>this._start(t)),h.on(this._element,mp,t=>this._move(t)),h.on(this._element,hp,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===gp||t.pointerType===bp)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Sp="carousel",Ap="bs.carousel",Wt=`.${Ap}`,Fs=".data-api",kp="ArrowLeft",Op="ArrowRight",Tp=500,Pe="next",de="prev",fe="left",bn="right",xp=`slide${Wt}`,Gn=`slid${Wt}`,Cp=`keydown${Wt}`,Dp=`mouseenter${Wt}`,Np=`mouseleave${Wt}`,Mp=`dragstart${Wt}`,Lp=`load${Wt}${Fs}`,$p=`click${Wt}${Fs}`,Bs="carousel",sn="active",Ip="slide",Rp="carousel-item-end",Pp="carousel-item-start",Hp="carousel-item-next",Fp="carousel-item-prev",Us=".active",Gs=".carousel-item",Bp=Us+Gs,Up=".carousel-item img",Gp=".carousel-indicators",jp="[data-bs-slide], [data-bs-slide-to]",Jp='[data-bs-ride="carousel"]',Wp={[kp]:bn,[Op]:fe},Vp={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},qp={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Ye extends _t{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=y.findOne(Gp,this._element),this._addEventListeners(),this._config.ride===Bs&&this.cycle()}static get Default(){return Vp}static get DefaultType(){return qp}static get NAME(){return Sp}next(){this._slide(Pe)}nextWhenVisible(){!document.hidden&&Te(this._element)&&this.next()}prev(){this._slide(de)}pause(){this._isSliding&&xs(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){h.one(this._element,Gn,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){h.one(this._element,Gn,()=>this.to(t));return}const o=this._getItemIndex(this._getActive());if(o===t)return;const i=t>o?Pe:de;this._slide(i,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&h.on(this._element,Cp,t=>this._keydown(t)),this._config.pause==="hover"&&(h.on(this._element,Dp,()=>this.pause()),h.on(this._element,Np,()=>this._maybeEnableCycle())),this._config.touch&&wn.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const o of y.find(Up,this._element))h.on(o,Mp,i=>i.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(fe)),rightCallback:()=>this._slide(this._directionToOrder(bn)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Tp+this._config.interval))}};this._swipeHelper=new wn(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=Wp[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=y.findOne(Us,this._indicatorsElement);e.classList.remove(sn),e.removeAttribute("aria-current");const o=y.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);o&&(o.classList.add(sn),o.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const o=this._getActive(),i=t===Pe,s=e||$o(this._getItems(),o,i,this._config.wrap);if(s===o)return;const l=this._getItemIndex(s),a=E=>h.trigger(this._element,E,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(o),to:l});if(a(xp).defaultPrevented||!o||!s)return;const d=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(l),this._activeElement=s;const u=i?Pp:Rp,f=i?Hp:Fp;s.classList.add(f),ze(s),o.classList.add(u),s.classList.add(u);const w=()=>{s.classList.remove(u,f),s.classList.add(sn),o.classList.remove(sn,f,u),this._isSliding=!1,a(Gn)};this._queueCallback(w,o,this._isAnimated()),d&&this.cycle()}_isAnimated(){return this._element.classList.contains(Ip)}_getActive(){return y.findOne(Bp,this._element)}_getItems(){return y.find(Gs,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return ct()?t===fe?de:Pe:t===fe?Pe:de}_orderToDirection(t){return ct()?t===de?fe:bn:t===de?bn:fe}static jQueryInterface(t){return this.each(function(){const e=Ye.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(document,$p,jp,function(n){const t=y.getElementFromSelector(this);if(!t||!t.classList.contains(Bs))return;n.preventDefault();const e=Ye.getOrCreateInstance(t),o=this.getAttribute("data-bs-slide-to");if(o){e.to(o),e._maybeEnableCycle();return}if(Rt.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});h.on(window,Lp,()=>{const n=y.find(Jp);for(const t of n)Ye.getOrCreateInstance(t)});mt(Ye);const zp="collapse",Kp="bs.collapse",Xe=`.${Kp}`,Yp=".data-api",Xp=`show${Xe}`,Qp=`shown${Xe}`,Zp=`hide${Xe}`,tc=`hidden${Xe}`,ec=`click${Xe}${Yp}`,jn="show",ge="collapse",ln="collapsing",nc="collapsed",oc=`:scope .${ge} .${ge}`,ic="collapse-horizontal",sc="width",lc="height",ac=".collapse.show, .collapse.collapsing",ho='[data-bs-toggle="collapse"]',rc={parent:null,toggle:!0},pc={parent:"(null|element)",toggle:"boolean"};class Ve extends _t{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const o=y.find(ho);for(const i of o){const s=y.getSelectorFromElement(i),l=y.find(s).filter(a=>a===this._element);s!==null&&l.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return rc}static get DefaultType(){return pc}static get NAME(){return zp}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(ac).filter(a=>a!==this._element).map(a=>Ve.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||h.trigger(this._element,Xp).defaultPrevented)return;for(const a of t)a.hide();const o=this._getDimension();this._element.classList.remove(ge),this._element.classList.add(ln),this._element.style[o]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(ln),this._element.classList.add(ge,jn),this._element.style[o]="",h.trigger(this._element,Qp)},l=`scroll${o[0].toUpperCase()+o.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[o]=`${this._element[l]}px`}hide(){if(this._isTransitioning||!this._isShown()||h.trigger(this._element,Zp).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,ze(this._element),this._element.classList.add(ln),this._element.classList.remove(ge,jn);for(const i of this._triggerArray){const s=y.getElementFromSelector(i);s&&!this._isShown(s)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(ln),this._element.classList.add(ge),h.trigger(this._element,tc)};this._element.style[e]="",this._queueCallback(o,this._element,!0)}_isShown(t=this._element){return t.classList.contains(jn)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=Ut(t.parent),t}_getDimension(){return this._element.classList.contains(ic)?sc:lc}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(ho);for(const e of t){const o=y.getElementFromSelector(e);o&&this._addAriaAndCollapsedClass([e],this._isShown(o))}}_getFirstLevelChildren(t){const e=y.find(oc,this._config.parent);return y.find(t,this._config.parent).filter(o=>!e.includes(o))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const o of t)o.classList.toggle(nc,!e),o.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const o=Ve.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof o[t]>"u")throw new TypeError(`No method named "${t}"`);o[t]()}})}}h.on(document,ec,ho,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const t of y.getMultipleElementsFromSelector(this))Ve.getOrCreateInstance(t,{toggle:!1}).toggle()});mt(Ve);const mi="dropdown",cc="bs.dropdown",ne=`.${cc}`,Ro=".data-api",uc="Escape",hi="Tab",dc="ArrowUp",vi="ArrowDown",mc=2,hc=`hide${ne}`,vc=`hidden${ne}`,fc=`show${ne}`,bc=`shown${ne}`,js=`click${ne}${Ro}`,Js=`keydown${ne}${Ro}`,gc=`keyup${ne}${Ro}`,be="show",_c="dropup",Ec="dropend",yc="dropstart",wc="dropup-center",Sc="dropdown-center",Xt='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ac=`${Xt}.${be}`,gn=".dropdown-menu",kc=".navbar",Oc=".navbar-nav",Tc=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",xc=ct()?"top-end":"top-start",Cc=ct()?"top-start":"top-end",Dc=ct()?"bottom-end":"bottom-start",Nc=ct()?"bottom-start":"bottom-end",Mc=ct()?"left-start":"right-start",Lc=ct()?"right-start":"left-start",$c="top",Ic="bottom",Rc={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Pc={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Ot extends _t{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=y.next(this._element,gn)[0]||y.prev(this._element,gn)[0]||y.findOne(gn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Rc}static get DefaultType(){return Pc}static get NAME(){return mi}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Gt(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!h.trigger(this._element,fc,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Oc))for(const o of[].concat(...document.body.children))h.on(o,"mouseover",yn);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(be),this._element.classList.add(be),h.trigger(this._element,bc,t)}}hide(){if(Gt(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!h.trigger(this._element,hc,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))h.off(o,"mouseover",yn);this._popper&&this._popper.destroy(),this._menu.classList.remove(be),this._element.classList.remove(be),this._element.setAttribute("aria-expanded","false"),Rt.removeDataAttribute(this._menu,"popper"),h.trigger(this._element,vc,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!It(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${mi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof Os>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:It(this._config.reference)?t=Ut(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=Lo(t,this._menu,e)}_isShown(){return this._menu.classList.contains(be)}_getPlacement(){const t=this._parent;if(t.classList.contains(Ec))return Mc;if(t.classList.contains(yc))return Lc;if(t.classList.contains(wc))return $c;if(t.classList.contains(Sc))return Ic;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(_c)?e?Cc:xc:e?Nc:Dc}_detectNavbar(){return this._element.closest(kc)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Rt.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...it(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){const o=y.find(Tc,this._menu).filter(i=>Te(i));o.length&&$o(o,e,t===vi,!o.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=Ot.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===mc||t.type==="keyup"&&t.key!==hi)return;const e=y.find(Ac);for(const o of e){const i=Ot.getInstance(o);if(!i||i._config.autoClose===!1)continue;const s=t.composedPath(),l=s.includes(i._menu);if(s.includes(i._element)||i._config.autoClose==="inside"&&!l||i._config.autoClose==="outside"&&l||i._menu.contains(t.target)&&(t.type==="keyup"&&t.key===hi||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:i._element};t.type==="click"&&(a.clickEvent=t),i._completeHide(a)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),o=t.key===uc,i=[dc,vi].includes(t.key);if(!i&&!o||e&&!o)return;t.preventDefault();const s=this.matches(Xt)?this:y.prev(this,Xt)[0]||y.next(this,Xt)[0]||y.findOne(Xt,t.delegateTarget.parentNode),l=Ot.getOrCreateInstance(s);if(i){t.stopPropagation(),l.show(),l._selectMenuItem(t);return}l._isShown()&&(t.stopPropagation(),l.hide(),s.focus())}}h.on(document,Js,Xt,Ot.dataApiKeydownHandler);h.on(document,Js,gn,Ot.dataApiKeydownHandler);h.on(document,js,Ot.clearMenus);h.on(document,gc,Ot.clearMenus);h.on(document,js,Xt,function(n){n.preventDefault(),Ot.getOrCreateInstance(this).toggle()});mt(Ot);const Ws="backdrop",Hc="fade",fi="show",bi=`mousedown.bs.${Ws}`,Fc={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Bc={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Vs extends Ke{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Fc}static get DefaultType(){return Bc}static get NAME(){return Ws}show(t){if(!this._config.isVisible){it(t);return}this._append();const e=this._getElement();this._config.isAnimated&&ze(e),e.classList.add(fi),this._emulateAnimation(()=>{it(t)})}hide(t){if(!this._config.isVisible){it(t);return}this._getElement().classList.remove(fi),this._emulateAnimation(()=>{this.dispose(),it(t)})}dispose(){this._isAppended&&(h.off(this._element,bi),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Hc),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=Ut(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),h.on(t,bi,()=>{it(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Ns(t,this._getElement(),this._config.isAnimated)}}const Uc="focustrap",Gc="bs.focustrap",Sn=`.${Gc}`,jc=`focusin${Sn}`,Jc=`keydown.tab${Sn}`,Wc="Tab",Vc="forward",gi="backward",qc={autofocus:!0,trapElement:null},zc={autofocus:"boolean",trapElement:"element"};class qs extends Ke{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return qc}static get DefaultType(){return zc}static get NAME(){return Uc}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),h.off(document,Sn),h.on(document,jc,t=>this._handleFocusin(t)),h.on(document,Jc,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,h.off(document,Sn))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const o=y.focusableChildren(e);o.length===0?e.focus():this._lastTabNavDirection===gi?o[o.length-1].focus():o[0].focus()}_handleKeydown(t){t.key===Wc&&(this._lastTabNavDirection=t.shiftKey?gi:Vc)}}const _i=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ei=".sticky-top",an="padding-right",yi="margin-right";class vo{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,an,e=>e+t),this._setElementAttributes(_i,an,e=>e+t),this._setElementAttributes(Ei,yi,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,an),this._resetElementAttributes(_i,an),this._resetElementAttributes(Ei,yi)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,o){const i=this.getWidth(),s=l=>{if(l!==this._element&&window.innerWidth>l.clientWidth+i)return;this._saveInitialAttribute(l,e);const a=window.getComputedStyle(l).getPropertyValue(e);l.style.setProperty(e,`${o(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,s)}_saveInitialAttribute(t,e){const o=t.style.getPropertyValue(e);o&&Rt.setDataAttribute(t,e,o)}_resetElementAttributes(t,e){const o=i=>{const s=Rt.getDataAttribute(i,e);if(s===null){i.style.removeProperty(e);return}Rt.removeDataAttribute(i,e),i.style.setProperty(e,s)};this._applyManipulationCallback(t,o)}_applyManipulationCallback(t,e){if(It(t)){e(t);return}for(const o of y.find(t,this._element))e(o)}}const Kc="modal",Yc="bs.modal",ut=`.${Yc}`,Xc=".data-api",Qc="Escape",Zc=`hide${ut}`,tu=`hidePrevented${ut}`,zs=`hidden${ut}`,Ks=`show${ut}`,eu=`shown${ut}`,nu=`resize${ut}`,ou=`click.dismiss${ut}`,iu=`mousedown.dismiss${ut}`,su=`keydown.dismiss${ut}`,lu=`click${ut}${Xc}`,wi="modal-open",au="fade",Si="show",Jn="modal-static",ru=".modal.show",pu=".modal-dialog",cu=".modal-body",uu='[data-bs-toggle="modal"]',du={backdrop:!0,focus:!0,keyboard:!0},mu={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ae extends _t{constructor(t,e){super(t,e),this._dialog=y.findOne(pu,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new vo,this._addEventListeners()}static get Default(){return du}static get DefaultType(){return mu}static get NAME(){return Kc}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||h.trigger(this._element,Ks,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(wi),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||h.trigger(this._element,Zc).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Si),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){h.off(window,ut),h.off(this._dialog,ut),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Vs({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new qs({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=y.findOne(cu,this._dialog);e&&(e.scrollTop=0),ze(this._element),this._element.classList.add(Si);const o=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,h.trigger(this._element,eu,{relatedTarget:t})};this._queueCallback(o,this._dialog,this._isAnimated())}_addEventListeners(){h.on(this._element,su,t=>{if(t.key===Qc){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),h.on(window,nu,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),h.on(this._element,iu,t=>{h.one(this._element,ou,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(wi),this._resetAdjustments(),this._scrollBar.reset(),h.trigger(this._element,zs)})}_isAnimated(){return this._element.classList.contains(au)}_triggerBackdropTransition(){if(h.trigger(this._element,tu).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,o=this._element.style.overflowY;o==="hidden"||this._element.classList.contains(Jn)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(Jn),this._queueCallback(()=>{this._element.classList.remove(Jn),this._queueCallback(()=>{this._element.style.overflowY=o},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),o=e>0;if(o&&!t){const i=ct()?"paddingLeft":"paddingRight";this._element.style[i]=`${e}px`}if(!o&&t){const i=ct()?"paddingRight":"paddingLeft";this._element.style[i]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const o=Ae.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof o[t]>"u")throw new TypeError(`No method named "${t}"`);o[t](e)}})}}h.on(document,lu,uu,function(n){const t=y.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),h.one(t,Ks,i=>{i.defaultPrevented||h.one(t,zs,()=>{Te(this)&&this.focus()})});const e=y.findOne(ru);e&&Ae.getInstance(e).hide(),Ae.getOrCreateInstance(t).toggle(this)});Tn(Ae);mt(Ae);const hu="offcanvas",vu="bs.offcanvas",Ht=`.${vu}`,Ys=".data-api",fu=`load${Ht}${Ys}`,bu="Escape",Ai="show",ki="showing",Oi="hiding",gu="offcanvas-backdrop",Xs=".offcanvas.show",_u=`show${Ht}`,Eu=`shown${Ht}`,yu=`hide${Ht}`,Ti=`hidePrevented${Ht}`,Qs=`hidden${Ht}`,wu=`resize${Ht}`,Su=`click${Ht}${Ys}`,Au=`keydown.dismiss${Ht}`,ku='[data-bs-toggle="offcanvas"]',Ou={backdrop:!0,keyboard:!0,scroll:!1},Tu={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class jt extends _t{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Ou}static get DefaultType(){return Tu}static get NAME(){return hu}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||h.trigger(this._element,_u,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new vo().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(ki);const o=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Ai),this._element.classList.remove(ki),h.trigger(this._element,Eu,{relatedTarget:t})};this._queueCallback(o,this._element,!0)}hide(){if(!this._isShown||h.trigger(this._element,yu).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Oi),this._backdrop.hide();const e=()=>{this._element.classList.remove(Ai,Oi),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new vo().reset(),h.trigger(this._element,Qs)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){h.trigger(this._element,Ti);return}this.hide()},e=!!this._config.backdrop;return new Vs({className:gu,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new qs({trapElement:this._element})}_addEventListeners(){h.on(this._element,Au,t=>{if(t.key===bu){if(this._config.keyboard){this.hide();return}h.trigger(this._element,Ti)}})}static jQueryInterface(t){return this.each(function(){const e=jt.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}h.on(document,Su,ku,function(n){const t=y.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),Gt(this))return;h.one(t,Qs,()=>{Te(this)&&this.focus()});const e=y.findOne(Xs);e&&e!==t&&jt.getInstance(e).hide(),jt.getOrCreateInstance(t).toggle(this)});h.on(window,fu,()=>{for(const n of y.find(Xs))jt.getOrCreateInstance(n).show()});h.on(window,wu,()=>{for(const n of y.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&jt.getOrCreateInstance(n).hide()});Tn(jt);mt(jt);const xu=/^aria-[\w-]*$/i,Zs={"*":["class","dir","id","lang","role",xu],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Cu=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Du=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Nu=(n,t)=>{const e=n.nodeName.toLowerCase();return t.includes(e)?Cu.has(e)?!!Du.test(n.nodeValue):!0:t.filter(o=>o instanceof RegExp).some(o=>o.test(e))};function Mu(n,t,e){if(!n.length)return n;if(e&&typeof e=="function")return e(n);const i=new window.DOMParser().parseFromString(n,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const l of s){const a=l.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){l.remove();continue}const p=[].concat(...l.attributes),d=[].concat(t["*"]||[],t[a]||[]);for(const u of p)Nu(u,d)||l.removeAttribute(u.nodeName)}return i.body.innerHTML}const Lu="TemplateFactory",$u={allowList:Zs,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Iu={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Ru={entry:"(string|element|function|null)",selector:"(string|element)"};class Pu extends Ke{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return $u}static get DefaultType(){return Iu}static get NAME(){return Lu}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[i,s]of Object.entries(this._config.content))this._setContent(t,s,i);const e=t.children[0],o=this._resolvePossibleFunction(this._config.extraClass);return o&&e.classList.add(...o.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,o]of Object.entries(t))super._typeCheckConfig({selector:e,entry:o},Ru)}_setContent(t,e,o){const i=y.findOne(o,t);if(i){if(e=this._resolvePossibleFunction(e),!e){i.remove();return}if(It(e)){this._putElementInTemplate(Ut(e),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(e);return}i.textContent=e}}_maybeSanitize(t){return this._config.sanitize?Mu(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return it(t,[this])}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const Hu="tooltip",Fu=new Set(["sanitize","allowList","sanitizeFn"]),Wn="fade",Bu="modal",rn="show",Uu=".tooltip-inner",xi=`.${Bu}`,Ci="hide.bs.modal",He="hover",Vn="focus",Gu="click",ju="manual",Ju="hide",Wu="hidden",Vu="show",qu="shown",zu="inserted",Ku="click",Yu="focusin",Xu="focusout",Qu="mouseenter",Zu="mouseleave",td={AUTO:"auto",TOP:"top",RIGHT:ct()?"left":"right",BOTTOM:"bottom",LEFT:ct()?"right":"left"},ed={allowList:Zs,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},nd={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Ce extends _t{constructor(t,e){if(typeof Os>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return ed}static get DefaultType(){return nd}static get NAME(){return Hu}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),h.off(this._element.closest(xi),Ci,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=h.trigger(this._element,this.constructor.eventName(Vu)),o=(Cs(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!o)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),h.trigger(this._element,this.constructor.eventName(zu))),this._popper=this._createPopper(i),i.classList.add(rn),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))h.on(a,"mouseover",yn);const l=()=>{h.trigger(this._element,this.constructor.eventName(qu)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(l,this.tip,this._isAnimated())}hide(){if(!this._isShown()||h.trigger(this._element,this.constructor.eventName(Ju)).defaultPrevented)return;if(this._getTipElement().classList.remove(rn),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))h.off(i,"mouseover",yn);this._activeTrigger[Gu]=!1,this._activeTrigger[Vn]=!1,this._activeTrigger[He]=!1,this._isHovered=null;const o=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),h.trigger(this._element,this.constructor.eventName(Wu)))};this._queueCallback(o,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Wn,rn),e.classList.add(`bs-${this.constructor.NAME}-auto`);const o=Gr(this.constructor.NAME).toString();return e.setAttribute("id",o),this._isAnimated()&&e.classList.add(Wn),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Pu({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Uu]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Wn)}_isShown(){return this.tip&&this.tip.classList.contains(rn)}_createPopper(t){const e=it(this._config.placement,[this,t,this._element]),o=td[e.toUpperCase()];return Lo(this._element,t,this._getPopperConfig(o))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return it(t,[this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:o=>{this._getTipElement().setAttribute("data-popper-placement",o.state.placement)}}]};return{...e,...it(this._config.popperConfig,[e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")h.on(this._element,this.constructor.eventName(Ku),this._config.selector,o=>{this._initializeOnDelegatedTarget(o).toggle()});else if(e!==ju){const o=e===He?this.constructor.eventName(Qu):this.constructor.eventName(Yu),i=e===He?this.constructor.eventName(Zu):this.constructor.eventName(Xu);h.on(this._element,o,this._config.selector,s=>{const l=this._initializeOnDelegatedTarget(s);l._activeTrigger[s.type==="focusin"?Vn:He]=!0,l._enter()}),h.on(this._element,i,this._config.selector,s=>{const l=this._initializeOnDelegatedTarget(s);l._activeTrigger[s.type==="focusout"?Vn:He]=l._element.contains(s.relatedTarget),l._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},h.on(this._element.closest(xi),Ci,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=Rt.getDataAttributes(this._element);for(const o of Object.keys(e))Fu.has(o)&&delete e[o];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:Ut(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,o]of Object.entries(this._config))this.constructor.Default[e]!==o&&(t[e]=o);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=Ce.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}mt(Ce);const od="popover",id=".popover-header",sd=".popover-body",ld={...Ce.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},ad={...Ce.DefaultType,content:"(null|string|element|function)"};class Po extends Ce{static get Default(){return ld}static get DefaultType(){return ad}static get NAME(){return od}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[id]:this._getTitle(),[sd]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=Po.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}mt(Po);const rd="scrollspy",pd="bs.scrollspy",Ho=`.${pd}`,cd=".data-api",ud=`activate${Ho}`,Di=`click${Ho}`,dd=`load${Ho}${cd}`,md="dropdown-item",me="active",hd='[data-bs-spy="scroll"]',qn="[href]",vd=".nav, .list-group",Ni=".nav-link",fd=".nav-item",bd=".list-group-item",gd=`${Ni}, ${fd} > ${Ni}, ${bd}`,_d=".dropdown",Ed=".dropdown-toggle",yd={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},wd={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Dn extends _t{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return yd}static get DefaultType(){return wd}static get NAME(){return rd}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=Ut(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(h.off(this._config.target,Di),h.on(this._config.target,Di,qn,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const o=this._rootElement||window,i=e.offsetTop-this._element.offsetTop;if(o.scrollTo){o.scrollTo({top:i,behavior:"smooth"});return}o.scrollTop=i}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=l=>this._targetLinks.get(`#${l.target.id}`),o=l=>{this._previousScrollData.visibleEntryTop=l.target.offsetTop,this._process(e(l))},i=(this._rootElement||document.documentElement).scrollTop,s=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const l of t){if(!l.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(l));continue}const a=l.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&a){if(o(l),!i)return;continue}!s&&!a&&o(l)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=y.find(qn,this._config.target);for(const e of t){if(!e.hash||Gt(e))continue;const o=y.findOne(decodeURI(e.hash),this._element);Te(o)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,o))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(me),this._activateParents(t),h.trigger(this._element,ud,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(md)){y.findOne(Ed,t.closest(_d)).classList.add(me);return}for(const e of y.parents(t,vd))for(const o of y.prev(e,gd))o.classList.add(me)}_clearActiveClass(t){t.classList.remove(me);const e=y.find(`${qn}.${me}`,t);for(const o of e)o.classList.remove(me)}static jQueryInterface(t){return this.each(function(){const e=Dn.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(window,dd,()=>{for(const n of y.find(hd))Dn.getOrCreateInstance(n)});mt(Dn);const Sd="tab",Ad="bs.tab",oe=`.${Ad}`,kd=`hide${oe}`,Od=`hidden${oe}`,Td=`show${oe}`,xd=`shown${oe}`,Cd=`click${oe}`,Dd=`keydown${oe}`,Nd=`load${oe}`,Md="ArrowLeft",Mi="ArrowRight",Ld="ArrowUp",Li="ArrowDown",zn="Home",$i="End",Qt="active",Ii="fade",Kn="show",$d="dropdown",tl=".dropdown-toggle",Id=".dropdown-menu",Yn=`:not(${tl})`,Rd='.list-group, .nav, [role="tablist"]',Pd=".nav-item, .list-group-item",Hd=`.nav-link${Yn}, .list-group-item${Yn}, [role="tab"]${Yn}`,el='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Xn=`${Hd}, ${el}`,Fd=`.${Qt}[data-bs-toggle="tab"], .${Qt}[data-bs-toggle="pill"], .${Qt}[data-bs-toggle="list"]`;class ke extends _t{constructor(t){super(t),this._parent=this._element.closest(Rd),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),h.on(this._element,Dd,e=>this._keydown(e)))}static get NAME(){return Sd}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),o=e?h.trigger(e,kd,{relatedTarget:t}):null;h.trigger(t,Td,{relatedTarget:e}).defaultPrevented||o&&o.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(Qt),this._activate(y.getElementFromSelector(t));const o=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(Kn);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),h.trigger(t,xd,{relatedTarget:e})};this._queueCallback(o,t,t.classList.contains(Ii))}_deactivate(t,e){if(!t)return;t.classList.remove(Qt),t.blur(),this._deactivate(y.getElementFromSelector(t));const o=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(Kn);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),h.trigger(t,Od,{relatedTarget:e})};this._queueCallback(o,t,t.classList.contains(Ii))}_keydown(t){if(![Md,Mi,Ld,Li,zn,$i].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter(i=>!Gt(i));let o;if([zn,$i].includes(t.key))o=e[t.key===zn?0:e.length-1];else{const i=[Mi,Li].includes(t.key);o=$o(e,t.target,i,!0)}o&&(o.focus({preventScroll:!0}),ke.getOrCreateInstance(o).show())}_getChildren(){return y.find(Xn,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const o of e)this._setInitialAttributesOnChild(o)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),o=this._getOuterElement(t);t.setAttribute("aria-selected",e),o!==t&&this._setAttributeIfNotExists(o,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=y.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const o=this._getOuterElement(t);if(!o.classList.contains($d))return;const i=(s,l)=>{const a=y.findOne(s,o);a&&a.classList.toggle(l,e)};i(tl,Qt),i(Id,Kn),o.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,o){t.hasAttribute(e)||t.setAttribute(e,o)}_elemIsActive(t){return t.classList.contains(Qt)}_getInnerElement(t){return t.matches(Xn)?t:y.findOne(Xn,t)}_getOuterElement(t){return t.closest(Pd)||t}static jQueryInterface(t){return this.each(function(){const e=ke.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(document,Cd,el,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!Gt(this)&&ke.getOrCreateInstance(this).show()});h.on(window,Nd,()=>{for(const n of y.find(Fd))ke.getOrCreateInstance(n)});mt(ke);const Bd="toast",Ud="bs.toast",Vt=`.${Ud}`,Gd=`mouseover${Vt}`,jd=`mouseout${Vt}`,Jd=`focusin${Vt}`,Wd=`focusout${Vt}`,Vd=`hide${Vt}`,qd=`hidden${Vt}`,zd=`show${Vt}`,Kd=`shown${Vt}`,Yd="fade",Ri="hide",pn="show",cn="showing",Xd={animation:"boolean",autohide:"boolean",delay:"number"},Qd={animation:!0,autohide:!0,delay:5e3};class Nn extends _t{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Qd}static get DefaultType(){return Xd}static get NAME(){return Bd}show(){if(h.trigger(this._element,zd).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Yd);const e=()=>{this._element.classList.remove(cn),h.trigger(this._element,Kd),this._maybeScheduleHide()};this._element.classList.remove(Ri),ze(this._element),this._element.classList.add(pn,cn),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||h.trigger(this._element,Vd).defaultPrevented)return;const e=()=>{this._element.classList.add(Ri),this._element.classList.remove(cn,pn),h.trigger(this._element,qd)};this._element.classList.add(cn),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(pn),super.dispose()}isShown(){return this._element.classList.contains(pn)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const o=t.relatedTarget;this._element===o||this._element.contains(o)||this._maybeScheduleHide()}_setListeners(){h.on(this._element,Gd,t=>this._onInteraction(t,!0)),h.on(this._element,jd,t=>this._onInteraction(t,!1)),h.on(this._element,Jd,t=>this._onInteraction(t,!0)),h.on(this._element,Wd,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=Nn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Tn(Nn);mt(Nn);/*! @license DOMPurify 3.1.2 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.2/LICENSE */const{entries:nl,setPrototypeOf:Pi,isFrozen:Zd,getPrototypeOf:tm,getOwnPropertyDescriptor:em}=Object;let{freeze:X,seal:dt,create:ol}=Object,{apply:fo,construct:bo}=typeof Reflect<"u"&&Reflect;X||(X=function(t){return t});dt||(dt=function(t){return t});fo||(fo=function(t,e,o){return t.apply(e,o)});bo||(bo=function(t,e){return new t(...e)});const un=rt(Array.prototype.forEach),Hi=rt(Array.prototype.pop),Fe=rt(Array.prototype.push),_n=rt(String.prototype.toLowerCase),Qn=rt(String.prototype.toString),Fi=rt(String.prototype.match),Be=rt(String.prototype.replace),nm=rt(String.prototype.indexOf),om=rt(String.prototype.trim),ft=rt(Object.prototype.hasOwnProperty),ot=rt(RegExp.prototype.test),Ue=im(TypeError);function rt(n){return function(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),i=1;i<e;i++)o[i-1]=arguments[i];return fo(n,t,o)}}function im(n){return function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return bo(n,e)}}function D(n,t){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:_n;Pi&&Pi(n,null);let o=t.length;for(;o--;){let i=t[o];if(typeof i=="string"){const s=e(i);s!==i&&(Zd(t)||(t[o]=s),i=s)}n[i]=!0}return n}function sm(n){for(let t=0;t<n.length;t++)ft(n,t)||(n[t]=null);return n}function Yt(n){const t=ol(null);for(const[e,o]of nl(n))ft(n,e)&&(Array.isArray(o)?t[e]=sm(o):o&&typeof o=="object"&&o.constructor===Object?t[e]=Yt(o):t[e]=o);return t}function dn(n,t){for(;n!==null;){const o=em(n,t);if(o){if(o.get)return rt(o.get);if(typeof o.value=="function")return rt(o.value)}n=tm(n)}function e(){return null}return e}const Bi=X(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Zn=X(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),to=X(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),lm=X(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),eo=X(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),am=X(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ui=X(["#text"]),Gi=X(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),no=X(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ji=X(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),mn=X(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),rm=dt(/\{\{[\w\W]*|[\w\W]*\}\}/gm),pm=dt(/<%[\w\W]*|[\w\W]*%>/gm),cm=dt(/\${[\w\W]*}/gm),um=dt(/^data-[\-\w.\u00B7-\uFFFF]/),dm=dt(/^aria-[\-\w]+$/),il=dt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),mm=dt(/^(?:\w+script|data):/i),hm=dt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),sl=dt(/^html$/i),vm=dt(/^[a-z][.\w]*(-[.\w]+)+$/i);var Ji=Object.freeze({__proto__:null,MUSTACHE_EXPR:rm,ERB_EXPR:pm,TMPLIT_EXPR:cm,DATA_ATTR:um,ARIA_ATTR:dm,IS_ALLOWED_URI:il,IS_SCRIPT_OR_DATA:mm,ATTR_WHITESPACE:hm,DOCTYPE_NAME:sl,CUSTOM_ELEMENT:vm});const fm=function(){return typeof window>"u"?null:window},bm=function(t,e){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let o=null;const i="data-tt-policy-suffix";e&&e.hasAttribute(i)&&(o=e.getAttribute(i));const s="dompurify"+(o?"#"+o:"");try{return t.createPolicy(s,{createHTML(l){return l},createScriptURL(l){return l}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}};function ll(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:fm();const t=_=>ll(_);if(t.version="3.1.2",t.removed=[],!n||!n.document||n.document.nodeType!==9)return t.isSupported=!1,t;let{document:e}=n;const o=e,i=o.currentScript,{DocumentFragment:s,HTMLTemplateElement:l,Node:a,Element:p,NodeFilter:d,NamedNodeMap:u=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:f,DOMParser:w,trustedTypes:E}=n,T=p.prototype,A=dn(T,"cloneNode"),x=dn(T,"nextSibling"),N=dn(T,"childNodes"),M=dn(T,"parentNode");if(typeof l=="function"){const _=e.createElement("template");_.content&&_.content.ownerDocument&&(e=_.content.ownerDocument)}let k,S="";const{implementation:C,createNodeIterator:L,createDocumentFragment:R,getElementsByTagName:G}=e,{importNode:B}=o;let $={};t.isSupported=typeof nl=="function"&&typeof M=="function"&&C&&C.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:U,ERB_EXPR:q,TMPLIT_EXPR:j,DATA_ATTR:xt,ARIA_ATTR:Ct,IS_SCRIPT_OR_DATA:z,ATTR_WHITESPACE:Q,CUSTOM_ELEMENT:ie}=Ji;let{IS_ALLOWED_URI:Et}=Ji,H=null;const se=D({},[...Bi,...Zn,...to,...eo,...Ui]);let P=null;const qt=D({},[...Gi,...no,...ji,...mn]);let I=Object.seal(ol(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Z=null,Dt=null,zt=!0,ht=!0,le=!1,Qe=!0,yt=!1,Ze=!0,wt=!1,De=!1,Ne=!1,Nt=!1,Kt=!1,ae=!1,tn=!0,St=!1;const re="user-content-";let pe=!0,Ft=!1,At={},Mt=null;const Me=D({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Le=null;const $e=D({},["audio","video","img","source","image","track"]);let Mn=null;const Fo=D({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),en="http://www.w3.org/1998/Math/MathML",nn="http://www.w3.org/2000/svg",Lt="http://www.w3.org/1999/xhtml";let ce=Lt,Ln=!1,$n=null;const Tl=D({},[en,nn,Lt],Qn);let Ie=null;const xl=["application/xhtml+xml","text/html"],Cl="text/html";let J=null,ue=null;const Bo=255,Dl=e.createElement("form"),Uo=function(r){return r instanceof RegExp||r instanceof Function},In=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(ue&&ue===r)){if((!r||typeof r!="object")&&(r={}),r=Yt(r),Ie=xl.indexOf(r.PARSER_MEDIA_TYPE)===-1?Cl:r.PARSER_MEDIA_TYPE,J=Ie==="application/xhtml+xml"?Qn:_n,H=ft(r,"ALLOWED_TAGS")?D({},r.ALLOWED_TAGS,J):se,P=ft(r,"ALLOWED_ATTR")?D({},r.ALLOWED_ATTR,J):qt,$n=ft(r,"ALLOWED_NAMESPACES")?D({},r.ALLOWED_NAMESPACES,Qn):Tl,Mn=ft(r,"ADD_URI_SAFE_ATTR")?D(Yt(Fo),r.ADD_URI_SAFE_ATTR,J):Fo,Le=ft(r,"ADD_DATA_URI_TAGS")?D(Yt($e),r.ADD_DATA_URI_TAGS,J):$e,Mt=ft(r,"FORBID_CONTENTS")?D({},r.FORBID_CONTENTS,J):Me,Z=ft(r,"FORBID_TAGS")?D({},r.FORBID_TAGS,J):{},Dt=ft(r,"FORBID_ATTR")?D({},r.FORBID_ATTR,J):{},At=ft(r,"USE_PROFILES")?r.USE_PROFILES:!1,zt=r.ALLOW_ARIA_ATTR!==!1,ht=r.ALLOW_DATA_ATTR!==!1,le=r.ALLOW_UNKNOWN_PROTOCOLS||!1,Qe=r.ALLOW_SELF_CLOSE_IN_ATTR!==!1,yt=r.SAFE_FOR_TEMPLATES||!1,Ze=r.SAFE_FOR_XML!==!1,wt=r.WHOLE_DOCUMENT||!1,Nt=r.RETURN_DOM||!1,Kt=r.RETURN_DOM_FRAGMENT||!1,ae=r.RETURN_TRUSTED_TYPE||!1,Ne=r.FORCE_BODY||!1,tn=r.SANITIZE_DOM!==!1,St=r.SANITIZE_NAMED_PROPS||!1,pe=r.KEEP_CONTENT!==!1,Ft=r.IN_PLACE||!1,Et=r.ALLOWED_URI_REGEXP||il,ce=r.NAMESPACE||Lt,I=r.CUSTOM_ELEMENT_HANDLING||{},r.CUSTOM_ELEMENT_HANDLING&&Uo(r.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(I.tagNameCheck=r.CUSTOM_ELEMENT_HANDLING.tagNameCheck),r.CUSTOM_ELEMENT_HANDLING&&Uo(r.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(I.attributeNameCheck=r.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),r.CUSTOM_ELEMENT_HANDLING&&typeof r.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(I.allowCustomizedBuiltInElements=r.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),yt&&(ht=!1),Kt&&(Nt=!0),At&&(H=D({},Ui),P=[],At.html===!0&&(D(H,Bi),D(P,Gi)),At.svg===!0&&(D(H,Zn),D(P,no),D(P,mn)),At.svgFilters===!0&&(D(H,to),D(P,no),D(P,mn)),At.mathMl===!0&&(D(H,eo),D(P,ji),D(P,mn))),r.ADD_TAGS&&(H===se&&(H=Yt(H)),D(H,r.ADD_TAGS,J)),r.ADD_ATTR&&(P===qt&&(P=Yt(P)),D(P,r.ADD_ATTR,J)),r.ADD_URI_SAFE_ATTR&&D(Mn,r.ADD_URI_SAFE_ATTR,J),r.FORBID_CONTENTS&&(Mt===Me&&(Mt=Yt(Mt)),D(Mt,r.FORBID_CONTENTS,J)),pe&&(H["#text"]=!0),wt&&D(H,["html","head","body"]),H.table&&(D(H,["tbody"]),delete Z.tbody),r.TRUSTED_TYPES_POLICY){if(typeof r.TRUSTED_TYPES_POLICY.createHTML!="function")throw Ue('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof r.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Ue('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');k=r.TRUSTED_TYPES_POLICY,S=k.createHTML("")}else k===void 0&&(k=bm(E,i)),k!==null&&typeof S=="string"&&(S=k.createHTML(""));X&&X(r),ue=r}},Go=D({},["mi","mo","mn","ms","mtext"]),jo=D({},["foreignobject","annotation-xml"]),Nl=D({},["title","style","font","a","script"]),Jo=D({},[...Zn,...to,...lm]),Wo=D({},[...eo,...am]),Ml=function(r){let v=M(r);(!v||!v.tagName)&&(v={namespaceURI:ce,tagName:"template"});const b=_n(r.tagName),O=_n(v.tagName);return $n[r.namespaceURI]?r.namespaceURI===nn?v.namespaceURI===Lt?b==="svg":v.namespaceURI===en?b==="svg"&&(O==="annotation-xml"||Go[O]):!!Jo[b]:r.namespaceURI===en?v.namespaceURI===Lt?b==="math":v.namespaceURI===nn?b==="math"&&jo[O]:!!Wo[b]:r.namespaceURI===Lt?v.namespaceURI===nn&&!jo[O]||v.namespaceURI===en&&!Go[O]?!1:!Wo[b]&&(Nl[b]||!Jo[b]):!!(Ie==="application/xhtml+xml"&&$n[r.namespaceURI]):!1},vt=function(r){Fe(t.removed,{element:r});try{r.parentNode.removeChild(r)}catch{r.remove()}},Rn=function(r,v){try{Fe(t.removed,{attribute:v.getAttributeNode(r),from:v})}catch{Fe(t.removed,{attribute:null,from:v})}if(v.removeAttribute(r),r==="is"&&!P[r])if(Nt||Kt)try{vt(v)}catch{}else try{v.setAttribute(r,"")}catch{}},Vo=function(r){let v=null,b=null;if(Ne)r="<remove></remove>"+r;else{const V=Fi(r,/^[\r\n\t ]+/);b=V&&V[0]}Ie==="application/xhtml+xml"&&ce===Lt&&(r='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+r+"</body></html>");const O=k?k.createHTML(r):r;if(ce===Lt)try{v=new w().parseFromString(O,Ie)}catch{}if(!v||!v.documentElement){v=C.createDocument(ce,"template",null);try{v.documentElement.innerHTML=Ln?S:O}catch{}}const W=v.body||v.documentElement;return r&&b&&W.insertBefore(e.createTextNode(b),W.childNodes[0]||null),ce===Lt?G.call(v,wt?"html":"body")[0]:wt?v.documentElement:W},qo=function(r){return L.call(r.ownerDocument||r,r,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},Ll=function(r){return r instanceof f&&(typeof r.__depth<"u"&&typeof r.__depth!="number"||typeof r.__removalCount<"u"&&typeof r.__removalCount!="number"||typeof r.nodeName!="string"||typeof r.textContent!="string"||typeof r.removeChild!="function"||!(r.attributes instanceof u)||typeof r.removeAttribute!="function"||typeof r.setAttribute!="function"||typeof r.namespaceURI!="string"||typeof r.insertBefore!="function"||typeof r.hasChildNodes!="function")},zo=function(r){return typeof a=="function"&&r instanceof a},$t=function(r,v,b){$[r]&&un($[r],O=>{O.call(t,v,b,ue)})},Ko=function(r){let v=null;if($t("beforeSanitizeElements",r,null),Ll(r))return vt(r),!0;const b=J(r.nodeName);if($t("uponSanitizeElement",r,{tagName:b,allowedTags:H}),r.hasChildNodes()&&!zo(r.firstElementChild)&&ot(/<[/\w]/g,r.innerHTML)&&ot(/<[/\w]/g,r.textContent)||r.nodeType===7||Ze&&r.nodeType===8&&ot(/<[/\w]/g,r.data))return vt(r),!0;if(!H[b]||Z[b]){if(!Z[b]&&Xo(b)&&(I.tagNameCheck instanceof RegExp&&ot(I.tagNameCheck,b)||I.tagNameCheck instanceof Function&&I.tagNameCheck(b)))return!1;if(pe&&!Mt[b]){const O=M(r)||r.parentNode,W=N(r)||r.childNodes;if(W&&O){const V=W.length;for(let tt=V-1;tt>=0;--tt){const et=A(W[tt],!0);et.__removalCount=(r.__removalCount||0)+1,O.insertBefore(et,x(r))}}}return vt(r),!0}return r instanceof p&&!Ml(r)||(b==="noscript"||b==="noembed"||b==="noframes")&&ot(/<\/no(script|embed|frames)/i,r.innerHTML)?(vt(r),!0):(yt&&r.nodeType===3&&(v=r.textContent,un([U,q,j],O=>{v=Be(v,O," ")}),r.textContent!==v&&(Fe(t.removed,{element:r.cloneNode()}),r.textContent=v)),$t("afterSanitizeElements",r,null),!1)},Yo=function(r,v,b){if(tn&&(v==="id"||v==="name")&&(b in e||b in Dl))return!1;if(!(ht&&!Dt[v]&&ot(xt,v))){if(!(zt&&ot(Ct,v))){if(!P[v]||Dt[v]){if(!(Xo(r)&&(I.tagNameCheck instanceof RegExp&&ot(I.tagNameCheck,r)||I.tagNameCheck instanceof Function&&I.tagNameCheck(r))&&(I.attributeNameCheck instanceof RegExp&&ot(I.attributeNameCheck,v)||I.attributeNameCheck instanceof Function&&I.attributeNameCheck(v))||v==="is"&&I.allowCustomizedBuiltInElements&&(I.tagNameCheck instanceof RegExp&&ot(I.tagNameCheck,b)||I.tagNameCheck instanceof Function&&I.tagNameCheck(b))))return!1}else if(!Mn[v]){if(!ot(Et,Be(b,Q,""))){if(!((v==="src"||v==="xlink:href"||v==="href")&&r!=="script"&&nm(b,"data:")===0&&Le[r])){if(!(le&&!ot(z,Be(b,Q,"")))){if(b)return!1}}}}}}return!0},Xo=function(r){return r!=="annotation-xml"&&Fi(r,ie)},Qo=function(r){$t("beforeSanitizeAttributes",r,null);const{attributes:v}=r;if(!v)return;const b={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:P};let O=v.length;for(;O--;){const W=v[O],{name:V,namespaceURI:tt,value:et}=W,Re=J(V);let nt=V==="value"?et:om(et);if(b.attrName=Re,b.attrValue=nt,b.keepAttr=!0,b.forceKeepAttr=void 0,$t("uponSanitizeAttribute",r,b),nt=b.attrValue,b.forceKeepAttr||(Rn(V,r),!b.keepAttr))continue;if(!Qe&&ot(/\/>/i,nt)){Rn(V,r);continue}yt&&un([U,q,j],ti=>{nt=Be(nt,ti," ")});const Zo=J(r.nodeName);if(Yo(Zo,Re,nt)){if(St&&(Re==="id"||Re==="name")&&(Rn(V,r),nt=re+nt),k&&typeof E=="object"&&typeof E.getAttributeType=="function"&&!tt)switch(E.getAttributeType(Zo,Re)){case"TrustedHTML":{nt=k.createHTML(nt);break}case"TrustedScriptURL":{nt=k.createScriptURL(nt);break}}try{tt?r.setAttributeNS(tt,V,nt):r.setAttribute(V,nt),Hi(t.removed)}catch{}}}$t("afterSanitizeAttributes",r,null)},$l=function _(r){let v=null;const b=qo(r);for($t("beforeSanitizeShadowDOM",r,null);v=b.nextNode();){if($t("uponSanitizeShadowNode",v,null),Ko(v))continue;const O=M(v);v.nodeType===1&&(O&&O.__depth?v.__depth=(v.__removalCount||0)+O.__depth+1:v.__depth=1),v.__depth>=Bo&&vt(v),v.content instanceof s&&(v.content.__depth=v.__depth,_(v.content)),Qo(v)}$t("afterSanitizeShadowDOM",r,null)};return t.sanitize=function(_){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=null,b=null,O=null,W=null;if(Ln=!_,Ln&&(_="<!-->"),typeof _!="string"&&!zo(_))if(typeof _.toString=="function"){if(_=_.toString(),typeof _!="string")throw Ue("dirty is not a string, aborting")}else throw Ue("toString is not a function");if(!t.isSupported)return _;if(De||In(r),t.removed=[],typeof _=="string"&&(Ft=!1),Ft){if(_.nodeName){const et=J(_.nodeName);if(!H[et]||Z[et])throw Ue("root node is forbidden and cannot be sanitized in-place")}}else if(_ instanceof a)v=Vo("<!---->"),b=v.ownerDocument.importNode(_,!0),b.nodeType===1&&b.nodeName==="BODY"||b.nodeName==="HTML"?v=b:v.appendChild(b);else{if(!Nt&&!yt&&!wt&&_.indexOf("<")===-1)return k&&ae?k.createHTML(_):_;if(v=Vo(_),!v)return Nt?null:ae?S:""}v&&Ne&&vt(v.firstChild);const V=qo(Ft?_:v);for(;O=V.nextNode();){if(Ko(O))continue;const et=M(O);O.nodeType===1&&(et&&et.__depth?O.__depth=(O.__removalCount||0)+et.__depth+1:O.__depth=1),O.__depth>=Bo&&vt(O),O.content instanceof s&&(O.content.__depth=O.__depth,$l(O.content)),Qo(O)}if(Ft)return _;if(Nt){if(Kt)for(W=R.call(v.ownerDocument);v.firstChild;)W.appendChild(v.firstChild);else W=v;return(P.shadowroot||P.shadowrootmode)&&(W=B.call(o,W,!0)),W}let tt=wt?v.outerHTML:v.innerHTML;return wt&&H["!doctype"]&&v.ownerDocument&&v.ownerDocument.doctype&&v.ownerDocument.doctype.name&&ot(sl,v.ownerDocument.doctype.name)&&(tt="<!DOCTYPE "+v.ownerDocument.doctype.name+`>
`+tt),yt&&un([U,q,j],et=>{tt=Be(tt,et," ")}),k&&ae?k.createHTML(tt):tt},t.setConfig=function(){let _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};In(_),De=!0},t.clearConfig=function(){ue=null,De=!1},t.isValidAttribute=function(_,r,v){ue||In({});const b=J(_),O=J(r);return Yo(b,O,v)},t.addHook=function(_,r){typeof r=="function"&&($[_]=$[_]||[],Fe($[_],r))},t.removeHook=function(_){if($[_])return Hi($[_])},t.removeHooks=function(_){$[_]&&($[_]=[])},t.removeAllHooks=function(){$={}},t}var gt=ll(),gm=Object.defineProperty,_m=(n,t,e)=>t in n?gm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,g=(n,t,e)=>_m(n,typeof t!="symbol"?t+"":t,e),Em=class{constructor(n){g(this,"_distinctEvent"),g(this,"_boundedEvents",[]),this._distinctEvent=(n==null?void 0:n.distinctEvent)??!1}get boundedEvents(){return this._boundedEvents}dispose(){this.unbindAll(),this._boundedEvents=[]}bind(n,t,e,o,i=""){let s=Array.isArray(t)?t:[t];if(typeof(n==null?void 0:n.forEach)=="function")n.forEach(l=>{for(let a of s)(!this._distinctEvent||this._distinctEvent&&!this.hasBinding(l,a))&&(l.addEventListener(a,e,o),this._boundedEvents.push({element:l,eventName:a,listener:e,groupName:i}))});else for(let l of s)(!this._distinctEvent||this._distinctEvent&&!this.hasBinding(n,l))&&(n.addEventListener(l,e,o),this._boundedEvents.push({element:n,eventName:l,listener:e,groupName:i}))}hasBinding(n,t){return this._boundedEvents.some(e=>e.element===n&&(!t||e.eventName===t))}unbind(n,t,e){var o;if(n){let i=Array.isArray(n)?n:[n],s=Array.isArray(t)?t||"":[t||""];for(let l of i){e||(e=this._boundedEvents.find(a=>{if(a.element===l&&(!t||a.eventName===t))return a.listener}));for(let a of s)(o=l==null?void 0:l.removeEventListener)==null||o.call(l,a,e)}}}unbindAll(n){if(n){let t=Array.isArray(n)?n:[n];for(let e=this._boundedEvents.length-1;e>=0;--e){let o=this._boundedEvents[e];if(t.some(i=>i===o.groupName)){let{element:i,eventName:s,listener:l}=o;this.unbind(i,s,l),this._boundedEvents.splice(e,1)}}}else for(;this._boundedEvents.length>0;){let t=this._boundedEvents.pop(),{element:e,eventName:o,listener:i}=t;this.unbind(e,o,i)}}},al=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},ym={formatSelectAll(){return"[Select all]"},formatAllSelected(){return"All selected"},formatCountSelected(n,t){return`${n} of ${t} selected`},formatNoMatchesFound(){return"No matches found"},formatOkButton(){return"OK"}};al.locales["en-US"]=ym;var rl=al.locales,wm=50,Sm=4,pl={name:"",placeholder:"",classes:"",classPrefix:"",data:void 0,locale:void 0,selectAll:!0,single:void 0,singleRadio:!1,multiple:!1,hideOptgroupCheckboxes:!1,multipleWidth:80,width:void 0,dropWidth:void 0,maxHeight:250,maxHeightUnit:"px",position:"bottom",displayValues:!1,displayTitle:!1,displayDelimiter:", ",minimumCountSelected:3,ellipsis:!1,isOpen:!1,keepOpen:!1,openOnHover:!1,container:null,filter:!1,filterGroup:!1,filterPlaceholder:"",filterAcceptOnEnter:!1,filterByDataLength:void 0,customFilter(n){let{text:t,label:e,search:o}=n;return(e||t||"").includes(o)},showClear:!1,autoAdjustDropHeight:!1,autoAdjustDropPosition:!1,autoAdjustDropWidthByTextSize:!1,adjustedHeightPadding:10,useSelectOptionLabel:!1,useSelectOptionLabelToHtml:!1,navigationHighlight:!0,infiniteScroll:!1,virtualScroll:!0,cssStyler:()=>null,textTemplate:n=>n.innerHTML.trim(),labelTemplate:n=>n.label,onOpen:()=>!1,onClose:()=>!1,onCheckAll:()=>!1,onUncheckAll:()=>!1,onFocus:()=>!1,onBlur:()=>!1,onOptgroupClick:()=>!1,onBeforeClick:()=>!0,onClick:()=>!1,onFilter:()=>!1,onFilterClear:()=>!1,onClear:()=>!1,onAfterCreate:()=>!1,onDestroy:()=>!1,onAfterDestroy:()=>!1,onDestroyed:()=>!1},Am=["init","getOptions","refreshOptions","getSelects","setSelects","enable","disable","open","close","check","uncheck","checkAll","uncheckAll","checkInvert","focus","blur","refresh","destroy"];Object.assign(pl,rl["en-US"]);var km={BLOCK_ROWS:wm,CLUSTER_BLOCKS:Sm,DEFAULTS:pl,METHODS:Am},bt=km;function Om(n,t,e=!1){let o=Object.keys(n),i=Object.keys(t);if(e&&o.length!==i.length)return!1;for(let s of o)if(i.includes(s)&&n[s]!==t[s])return!1;return!0}function go(n){let t=()=>{let i={};for(let s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=go(n[s]));return i},e=()=>n.map(i=>go(i)),o=Object.prototype.toString.call(n).slice(8,-1).toLowerCase();return o==="object"?t():o==="array"?e():n}function oo(n){return n!=null&&n!==""}function Tm(n,t){return typeof n=="object"?Object.fromEntries(t?Object.entries(n).filter(([e,o])=>!oo(o)&&!t.includes(e)||oo(o)):Object.entries(n).filter(([e,o])=>oo(o))):n}function xm(n){let t=0;return n.forEach((e,o)=>{e.type==="optgroup"?(e._key=`group_${o}`,e.visible=typeof e.visible>"u"?!0:e.visible,e.children.forEach((i,s)=>{i&&(i.visible=typeof(i==null?void 0:i.visible)>"u"?!0:i.visible,i.divider||(i._key=`option_${o}_${s}`,t+=1))})):(e.visible=typeof e.visible>"u"?!0:e.visible,e.divider||(e._key=`option_${o}`,t+=1))}),t}function hn(n,t,e){if(Array.isArray(n))for(let o of n){if(o[t]===e||o[t]===`${+o[t]}`&&+o[t]===e)return o;if(o.type==="optgroup"){for(let i of o.children)if(i&&(i[t]===e||i[t]===`${+i[t]}`&&+i[t]===e))return i}}}function Cm(n){return n.replace(/(\b)(on[a-z]+)(\s*)=([^>]*)|javascript:([^>]*)[^>]*|(<\s*)(\/*)script([<>]*).*(<\s*)(\/*)script(>*)|(&lt;|&#60;)(\/*)(script|script defer)(.*)(&#62;|&gt;|&gt;">)/gi,"")}function io(n){return Object.keys(n).forEach(t=>n[t]===void 0?delete n[t]:""),n}function he(n,t){if(typeof n!="string")return n;if(typeof t=="function")return t(n);if(typeof n.normalize=="function")return n.normalize("NFD").replace(/[\u0300-\u036F]/g,"");throw new Error("[Multiple-Select-Vanilla] `normalize()` function is not defined, you can optionally provide a custom parser via the `diacriticParser` option.")}function so(n){let t=0,e=0,o=0,i=0,s=window.innerHeight??0,l=window.innerWidth??0,a=Mm(),p=a.top,d=a.left,u=Eo(n);if(u){let f=u.top??0,w=u.left??0;e=f-p,t=s-(f-p),o=w-d,i=l-(w-d)}return{top:e,bottom:t,left:o,right:i}}function lo(n=""){return n.split(" ").filter(t=>t)}function F(n,t,e){let o=document.createElement(n);return t&&Object.keys(t).forEach(i=>{let s=t[i];typeof s=="object"?Object.assign(o[i],s):o[i]=t[i]}),e!=null&&e.appendChild&&e.appendChild(o),o}function cl(n,t,e){var s;let o=(s=n.props)!=null&&s.innerHTML?Nm(n.props,"innerHTML"):n.props,i=F(n.tagName,Tm(o,["className","title","style"]),t);if(n.props.innerHTML&&(i.innerHTML=n.props.innerHTML),n.attrs)for(let l of Object.keys(n.attrs))i.setAttribute(l,n.attrs[l]);if(n.children)for(let l of n.children)cl(l,i);return t==null||t.appendChild(i),i}function _o(n){return n.hasOwnProperty("tagName")?cl(n):document.createElement("li")}function We(n){for(;n!=null&&n.firstChild;)n.lastChild&&n.removeChild(n.lastChild);return n}function Eo(n){var l;if(!n)return;let t=(l=n==null?void 0:n.getBoundingClientRect)==null?void 0:l.call(n),e=0,o=0,i=0,s=0;return(t==null?void 0:t.top)!==void 0&&t.left!==void 0&&(e=t.top+window.pageYOffset,o=t.left+window.pageXOffset,s=t.right,i=t.bottom),{top:e,left:o,bottom:i,right:s}}function vn(n,t,e){let o=Number.parseFloat(n.style[e]);if(!o||Number.isNaN(o)){switch(t){case"outer":o=n[e==="width"?"offsetWidth":"offsetHeight"];break;case"scroll":o=n[e==="width"?"scrollWidth":"scrollHeight"];break;case"inner":default:o=n[e==="width"?"clientWidth":"clientHeight"];break}o=n.getBoundingClientRect()[e]}if(!o||Number.isNaN(o)){let i=n.style.display,s=n.style.position;n.style.display="block",n.style.position="absolute";let l=window.getComputedStyle(n)[e];o=Number.parseFloat(l),Number.isNaN(o)&&(o=0),n.style.display=i,n.style.position=s}return o||0}function Wi(n,t){let e=null,o=n==null?void 0:n.parentElement;for(;o;){let[i,s,l,a]=t.match(/^([a-z]*)([#.]{1})([a-z\-]+)$/i)||[];if(l&&a)for(let p of a.replace(l,"").split(" "))o.classList.contains(p)&&(s?(o==null?void 0:o.tagName.toLowerCase())===s&&(e=o):e=o);o=o.parentElement}return e}function Dm(n,t){var e;(e=n.parentNode)==null||e.insertBefore(t,n.nextSibling)}function Nm(n,t){let{[t]:e,...o}=n;return o}function Vi(n,t){n!=null&&n.style&&(n.style.display=n.style.display==="none"&&t!==!1||t===!0?"block":"none")}function Mm(){return{left:window.pageXOffset||document.documentElement.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||0}}var Lm=class{constructor(n){var e;g(this,"clusterRows"),g(this,"cache"),g(this,"scrollEl"),g(this,"blockHeight"),g(this,"clusterHeight"),g(this,"contentEl"),g(this,"parentEl"),g(this,"itemHeight"),g(this,"lastCluster"),g(this,"scrollTop"),g(this,"dataStart"),g(this,"dataEnd"),g(this,"rows"),g(this,"destroy"),g(this,"callback"),g(this,"sanitizer"),this.rows=n.rows,this.scrollEl=n.scrollEl,this.contentEl=n.contentEl,this.parentEl=(e=n.contentEl)==null?void 0:e.parentElement,this.callback=n.callback,this.cache={},this.scrollTop=this.scrollEl.scrollTop,this.initDOM(this.rows),this.scrollEl.scrollTop=this.scrollTop,this.lastCluster=0;let t=()=>{this.lastCluster!==(this.lastCluster=this.getNum())&&(this.initDOM(this.rows),this.callback())};this.scrollEl.addEventListener("scroll",t,!1),this.destroy=()=>{this.scrollEl.removeEventListener("scroll",t,!1),We(this.contentEl)}}reset(n){this.lastCluster=0,this.cache={},We(this.contentEl),this.initDOM(n)}initDOM(n){if(typeof this.clusterHeight>"u"){this.cache.scrollTop=this.scrollEl.scrollTop;let s=_o(n[0]);this.contentEl.appendChild(s),this.contentEl.appendChild(s),this.contentEl.appendChild(s),this.cache.data=[n[0]],this.getRowsHeight()}let t=this.initData(n,this.getNum()),e=this.checkChanges("data",t.rows),o=this.checkChanges("top",t.topOffset),i=this.checkChanges("bottom",t.bottomOffset);We(this.contentEl),e&&o?(t.topOffset&&this.contentEl.appendChild(this.getExtra("top",t.topOffset)),t.rows.forEach(s=>this.contentEl.appendChild(_o(s))),t.bottomOffset&&this.contentEl.appendChild(this.getExtra("bottom",t.bottomOffset))):i&&this.contentEl.lastChild&&(this.contentEl.lastChild.style.height=`${t.bottomOffset}px`)}getRowsHeight(){var n;if(typeof this.itemHeight>"u"){let t=((n=this.parentEl)==null?void 0:n.style.display)||"";this.parentEl&&(t===""||t==="none")&&(this.parentEl.style.display="block");let e=this.contentEl.children,o=e[Math.floor(e.length/2)];this.itemHeight=o.offsetHeight,this.parentEl&&(this.parentEl.style.display=t)}this.blockHeight=this.itemHeight*bt.BLOCK_ROWS,this.clusterRows=bt.BLOCK_ROWS*bt.CLUSTER_BLOCKS,this.clusterHeight=this.blockHeight*bt.CLUSTER_BLOCKS}getNum(){this.scrollTop=this.scrollEl.scrollTop;let n=(this.clusterHeight||0)-(this.blockHeight||0);return n&&Math.floor(this.scrollTop/n)||0}initData(n,t){if(n.length<bt.BLOCK_ROWS)return{topOffset:0,bottomOffset:0,rowsAbove:0,rows:n};let e=Math.max((this.clusterRows-bt.BLOCK_ROWS)*t,0),o=e+this.clusterRows,i=Math.max(e*this.itemHeight,0),s=Math.max((n.length-o)*this.itemHeight,0),l=[],a=e;i<1&&a++;for(let p=e;p<o;p++)n[p]&&l.push(n[p]);return this.dataStart=e,this.dataEnd=o,{topOffset:i,bottomOffset:s,rowsAbove:a,rows:l}}checkChanges(n,t){let e=t!==this.cache[n];return this.cache[n]=t,e}getExtra(n,t){let e=document.createElement("li");return e.className=`virtual-scroll-${n}`,t&&(e.style.height=`${t}px`),e}},Ge=".ms-select-all, ul li[data-key]",$m=".ms-select-all.highlighted, ul li[data-key].highlighted",Im=class{constructor(t,e){this.elm=t,g(this,"_bindEventService"),g(this,"isAllSelected",!1),g(this,"isPartiallyAllSelected",!1),g(this,"fromHtml",!1),g(this,"choiceElm"),g(this,"selectClearElm"),g(this,"closeElm"),g(this,"clearSearchIconElm"),g(this,"filterText",""),g(this,"updateData",[]),g(this,"data",[]),g(this,"dataTotal"),g(this,"dropElm"),g(this,"okButtonElm"),g(this,"filterParentElm"),g(this,"lastFocusedItemKey",""),g(this,"lastMouseOverPosition",""),g(this,"ulElm"),g(this,"parentElm"),g(this,"labelElm"),g(this,"selectAllParentElm"),g(this,"selectAllElm"),g(this,"searchInputElm"),g(this,"selectGroupElms"),g(this,"selectItemElms"),g(this,"noResultsElm"),g(this,"options"),g(this,"selectAllName",""),g(this,"selectGroupName",""),g(this,"selectItemName",""),g(this,"scrolledByMouse",!1),g(this,"openDelayTimer"),g(this,"updateDataStart"),g(this,"updateDataEnd"),g(this,"virtualScroll"),g(this,"_currentHighlightIndex",-1),g(this,"_currentSelectedElm"),g(this,"isMoveUpRecalcRequired",!1),g(this,"locales",{}),this.options=Object.assign({},bt.DEFAULTS,this.elm.dataset,e),this._bindEventService=new Em({distinctEvent:!0})}get isRenderAsHtml(){return this.options.renderOptionLabelAsHtml||this.options.useSelectOptionLabelToHtml}init(){this.initLocale(),this.initContainer(),this.initData(),this.initSelected(!0),this.initFilter(),this.initDrop(),this.initView(),this.options.onAfterCreate()}destroy(t=!0){var e,o,i,s,l;this.elm&&this.parentElm&&(this.options.onDestroy({hardDestroy:t}),t&&this.options.onHardDestroy(),this.elm.parentElement&&this.parentElm.parentElement&&this.elm.parentElement.insertBefore(this.elm,this.parentElm.parentElement.firstChild),this.elm.classList.remove("ms-offscreen"),this._bindEventService.unbindAll(),(e=this.virtualScroll)==null||e.destroy(),(o=this.dropElm)==null||o.remove(),(i=this.parentElm.parentNode)==null||i.removeChild(this.parentElm),this.fromHtml&&(delete this.options.data,this.fromHtml=!1),this.options.onAfterDestroy({hardDestroy:t}),t&&((l=(s=this.options).onAfterHardDestroy)==null||l.call(s),Object.keys(this.options).forEach(a=>delete this[a])))}initLocale(){if(this.options.locale){if(typeof this.options.locale=="object"){Object.assign(this.options,this.options.locale);return}let t=window.multipleSelect.locales,e=this.options.locale.split(/-|_/);if(e[0]=e[0].toLowerCase(),e[1]&&(e[1]=e[1].toUpperCase()),t[this.options.locale])Object.assign(this.options,t[this.options.locale]);else if(t[e.join("-")])Object.assign(this.options,t[e.join("-")]);else if(t[e[0]])Object.assign(this.options,t[e[0]]);else throw new Error(`[multiple-select-vanilla] invalid locales "${this.options.locale}", make sure to import it before using it`)}}initContainer(){var i;let t=this.elm.getAttribute("name")||this.options.name||"";this.options.classes&&this.elm.classList.add(this.options.classes),this.options.classPrefix&&(this.elm.classList.add(this.options.classPrefix),this.options.size&&this.elm.classList.add(`${this.options.classPrefix}-${this.options.size}`)),this.elm.style.display="none",this.labelElm=this.elm.closest("label"),!this.labelElm&&this.elm.id&&(this.labelElm=document.createElement("label"),this.labelElm.htmlFor=this.elm.id),(i=this.labelElm)!=null&&i.querySelector("input")&&(this.labelElm=null),typeof this.options.single>"u"&&(this.options.single=!this.elm.multiple),this.parentElm=F("div",{className:lo(`ms-parent ${this.elm.className||""} ${this.options.classes}`).join(" "),dataset:{test:"sel"}}),this.options.darkMode&&this.parentElm.classList.add("ms-dark-mode");let e=this.elm.getAttribute("title")||"";e&&(this.parentElm.title=e),this.options.placeholder=this.options.placeholder||this.elm.getAttribute("placeholder")||"",this.choiceElm=F("button",{className:"ms-choice",type:"button"},this.parentElm),this.options.labelId&&(this.choiceElm.id=this.options.labelId,this.choiceElm.setAttribute("aria-labelledby",this.options.labelId)),this.choiceElm.appendChild(F("span",{className:"ms-placeholder",textContent:this.options.placeholder})),this.options.showClear&&(this.selectClearElm=F("div",{className:"ms-icon ms-icon-close"}),this.selectClearElm.style.display="none",this.choiceElm.appendChild(this.selectClearElm)),this.choiceElm.appendChild(F("div",{className:"ms-icon ms-icon-caret"})),this.dropElm=F("div",{className:`ms-drop ${this.options.position}`,ariaExpanded:"false"},this.parentElm),this.options.darkMode&&this.dropElm.classList.add("ms-dark-mode"),t&&(this.dropElm.dataset.name=t);let o=this.elm.getAttribute("data-test")||this.options.dataTest;o&&(this.parentElm.dataset.test=o,this.dropElm.dataset.test=o),this.closeElm=this.choiceElm.querySelector(".ms-icon-close"),this.options.dropWidth&&(this.dropElm.style.width=typeof this.options.dropWidth=="string"?this.options.dropWidth:`${this.options.dropWidth}px`),Dm(this.elm,this.parentElm),this.elm.disabled&&(this.choiceElm.classList.add("disabled"),this.choiceElm.disabled=!0),this.selectAllName=`selectAll${t}`,this.selectGroupName=`selectGroup${t}`,this.selectItemName=`selectItem${t}`,this.options.keepOpen||(this._bindEventService.unbindAll("body-click"),this._bindEventService.bind(document.body,"click",s=>{s.target===this.choiceElm||Wi(s.target,".ms-choice")===this.choiceElm||(s.target===this.dropElm||Wi(s.target,".ms-drop")!==this.dropElm&&s.target!==this.elm)&&this.options.isOpen&&this.close("body.click")},void 0,"body-click"))}initData(){let t=[];if(this.options.data){if(Array.isArray(this.options.data))this.data=this.options.data.map(e=>typeof e=="string"||typeof e=="number"?{text:e,value:e}:e);else if(typeof this.options.data=="object"){for(let[e,o]of Object.entries(this.options.data))t.push({value:e,text:`${o}`});this.data=t}}else this.elm.childNodes.forEach(e=>{let o=this.initRow(e);o&&t.push(o)}),this.options.data=t,this.data=t,this.fromHtml=!0;this.dataTotal=xm(this.data||[])}initRow(t,e){var i,s;let o={};return((i=t.tagName)==null?void 0:i.toLowerCase())==="option"?(o.type="option",o.text=this.options.textTemplate(t),o.value=t.value,o.visible=!0,o.selected=!!t.selected,o.disabled=e||t.disabled,o.classes=t.getAttribute("class")||"",o.title=t.getAttribute("title")||"",t.dataset.value&&(o._value=t.dataset.value),Object.keys(t.dataset).length&&(o._data=t.dataset,o._data.divider&&(o.divider=o._data.divider)),o):((s=t.tagName)==null?void 0:s.toLowerCase())==="optgroup"?(o.type="optgroup",o.label=this.options.labelTemplate(t),o.visible=!0,o.selected=!!t.selected,o.disabled=t.disabled,o.children=[],Object.keys(t.dataset).length&&(o._data=t.dataset),t.childNodes.forEach(l=>{o.children.push(this.initRow(l,o.disabled))}),o):null}initDrop(){this.initList(),this.update(!0),this.options.isOpen&&this.open(10),this.options.openOnHover&&this.parentElm&&(this._bindEventService.bind(this.parentElm,"mouseover",()=>this.open(null)),this._bindEventService.bind(this.parentElm,"mouseout",()=>this.close("hover.mouseout")))}initFilter(){if(this.filterText="",this.options.filter||!this.options.filterByDataLength)return;let t=0;for(let e of this.data||[])e.type==="optgroup"?t+=e.children.length:t+=1;this.options.filter=t>this.options.filterByDataLength}initList(){if(this.options.filter&&(this.filterParentElm=F("div",{className:"ms-search"},this.dropElm),this.filterParentElm.appendChild(F("input",{autocomplete:"off",autocapitalize:"off",spellcheck:!1,type:"text",placeholder:this.options.filterPlaceholder||"🔎︎"})),this.options.showSearchClear&&this.filterParentElm.appendChild(F("span",{className:"ms-icon ms-icon-close"}))),this.options.selectAll&&!this.options.single){let t=this.elm.getAttribute("name")||this.options.name||"";this.selectAllParentElm=F("div",{className:"ms-select-all",dataset:{key:"select_all"}});let e=document.createElement("label"),o=`ms-icon ${this.isAllSelected?"ms-icon-check":this.isPartiallyAllSelected?"ms-icon-minus":"ms-icon-uncheck"}`,i=F("div",{className:"icon-checkbox-container"},e);F("input",{type:"checkbox",ariaChecked:String(this.isAllSelected),checked:this.isAllSelected,dataset:{name:`selectAll${t}`}},i),F("div",{className:o},i),e.appendChild(F("span",{textContent:this.formatSelectAll()})),this.selectAllParentElm.appendChild(e),this.dropElm.appendChild(this.selectAllParentElm)}this.ulElm=document.createElement("ul"),this.ulElm.role="combobox",this.ulElm.ariaExpanded="false",this.ulElm.ariaMultiSelectable=String(!this.options.single),this.dropElm.appendChild(this.ulElm),this.options.showOkButton&&!this.options.single&&(this.okButtonElm=F("button",{className:"ms-ok-button",type:"button",textContent:this.formatOkButton()},this.dropElm)),this.initListItems()}initListItems(){let t=0,e=this.getListRows();if(this.options.selectAll&&!this.options.single&&(t=-1),e.length>bt.BLOCK_ROWS*bt.CLUSTER_BLOCKS){let o=this.dropElm.style.display!=="none";o||(this.dropElm.style.left="-10000",this.dropElm.style.display="block",this.dropElm.ariaExpanded="true");let i=()=>{if(this.virtualScroll){this._currentHighlightIndex=0,this.updateDataStart=this.virtualScroll.dataStart+t,this.updateDataEnd=this.virtualScroll.dataEnd+t,this.updateDataStart<0&&(this.updateDataStart=0,this._currentHighlightIndex=0);let s=this.getDataLength();this.updateDataEnd>s&&(this.updateDataEnd=s),this.ulElm&&(this.isMoveUpRecalcRequired?this.recalculateArrowMove("up"):this.virtualScroll.dataStart>this.updateDataStart&&this.recalculateArrowMove("down"))}};this.ulElm&&(this.virtualScroll?this.virtualScroll.reset(e):this.virtualScroll=new Lm({rows:e,scrollEl:this.ulElm,contentEl:this.ulElm,sanitizer:this.options.sanitizer,callback:()=>{i(),this.events()}})),i(),o||(this.dropElm.style.left="0",this.dropElm.style.display="none",this.dropElm.ariaExpanded="false")}else this.ulElm&&(We(this.ulElm),e.forEach(o=>this.ulElm.appendChild(_o(o)))),this.updateDataStart=0,this.updateDataEnd=this.updateData.length;return this.events(),e}getListRows(){var e;let t=[];return this.updateData=[],(e=this.data)==null||e.forEach(o=>t.push(...this.initListItem(o))),this.options.infiniteScroll&&t.push({tagName:"li",props:{className:"ms-infinite-option",role:"option"}}),t.push({tagName:"li",props:{className:"ms-no-results",textContent:this.formatNoMatchesFound()}}),t}initListItem(t,e=0){let o=(t==null?void 0:t.title)||"",i=this.options.multiple?"multiple":"",s=this.options.single?"radio":"checkbox",l=!!(t!=null&&t.selected),a=this.options.single&&!this.options.singleRadio,p="";if(!(t!=null&&t.visible))return[];if(this.updateData.push(t),a&&(p="hide-radio "),t.selected&&(p+="selected "),t.type==="optgroup"){let x=[],N;if(this.options.hideOptgroupCheckboxes||this.options.single)N={tagName:"span",props:{dataset:{name:this.selectGroupName,key:t._key}}};else{let C={tagName:"input",props:{type:"checkbox",dataset:{name:this.selectGroupName,key:t._key},checked:l,disabled:t.disabled}};a?N=C:N={tagName:"div",props:{className:`icon-checkbox-container${s==="radio"?" radio":""}`},children:[C,{tagName:"div",props:{className:`ms-icon ${l?s==="radio"?"ms-icon-radio":"ms-icon-check":"ms-icon-uncheck"}`}}]}}!p.includes("hide-radio")&&(this.options.hideOptgroupCheckboxes||this.options.single)&&(p+="hide-radio ");let M={tagName:"span",props:{}};this.applyAsTextOrHtmlWhenEnabled(M.props,t.label);let k={tagName:"li",props:{className:lo(`group${this.options.single||t.disabled?" disabled":""} ${p}`).join(" "),role:"option",ariaSelected:String(l),dataset:{key:t._key}},children:[{tagName:"label",props:{className:lo(`optgroup${this.options.single||t.disabled?" disabled":""}`).join(" ")},children:[N,M]}]},S=this.options.cssStyler(t);return S&&(k.props.style=S),x.push(k),t.children.forEach(C=>x.push(...this.initListItem(C,1))),x}if(p+=t.classes||"",e&&this.options.single&&(p+=`option-level-${e} `),t.divider)return[{tagName:"li",props:{className:"option-divider"}}];let d=i||p?(i+p).trim():"";t.disabled&&(d+=" disabled");let u=`${t.disabled?"disabled":""}`,f={tagName:"span",props:{}};this.applyAsTextOrHtmlWhenEnabled(f.props,t.text);let w={tagName:"input",props:{type:s,value:encodeURI(t.value),dataset:{key:t._key,name:this.selectItemName},checked:l,disabled:!!t.disabled}};t.selected&&(w.attrs={checked:"checked"});let E={tagName:"div",props:{className:`icon-checkbox-container${s==="radio"?" radio":""}`},children:[w,{tagName:"div",props:{className:`ms-icon ${w.props.checked?s==="radio"?"ms-icon-radio":"ms-icon-check":"ms-icon-uncheck"}`}}]},T={tagName:"li",props:{role:"option",title:o,ariaSelected:String(l),dataset:{key:t._key}},children:[{tagName:"label",props:{className:u},children:[a?w:E,f]}]};d&&(T.props.className=d);let A=this.options.cssStyler(t);return A&&(T.props.style=A),[T]}initSelected(t=!1){var o,i;let e=0;for(let s of this.data||[])if(s.type==="optgroup"){let l=s.children.filter(a=>(a==null?void 0:a.selected)&&!a.disabled&&a.visible).length;s.children.length&&(s.selected=!this.options.single&&l&&l===s.children.filter(a=>a&&!a.disabled&&a.visible&&!a.divider).length),e+=l}else e+=s.selected&&!s.disabled&&s.visible?1:0;this.isAllSelected=((o=this.data)==null?void 0:o.filter(s=>s.selected&&!s.disabled&&s.visible).length)===((i=this.data)==null?void 0:i.filter(s=>!s.disabled&&s.visible&&!s.divider).length),this.isPartiallyAllSelected=!this.isAllSelected&&e>0,t||(this.isAllSelected?this.options.onCheckAll():e===0&&this.options.onUncheckAll())}initView(){let t;window.getComputedStyle?(t=window.getComputedStyle(this.elm).width,t==="auto"&&(t=vn(this.dropElm,"outer","width")+20)):t=vn(this.elm,"outer","width")+20,this.parentElm.style.width=`${this.options.width||t}px`,this.elm.classList.add("ms-offscreen")}events(){var e,o;this._bindEventService.unbindAll(["ok-button","search-input","select-all-checkbox","input-checkbox-list","group-checkbox-list","hover-highlight","arrow-highlight","option-list-scroll"]),this.clearSearchIconElm=(e=this.filterParentElm)==null?void 0:e.querySelector(".ms-icon-close"),this.searchInputElm=this.dropElm.querySelector(".ms-search input"),this.selectAllElm=this.dropElm.querySelector(`input[data-name="${this.selectAllName}"]`),this.selectGroupElms=this.dropElm.querySelectorAll(`input[data-name="${this.selectGroupName}"],span[data-name="${this.selectGroupName}"]`),this.selectItemElms=this.dropElm.querySelectorAll(`input[data-name="${this.selectItemName}"]:enabled`),this.noResultsElm=this.dropElm.querySelector(".ms-no-results");let t=i=>{i.preventDefault(),!i.target.classList.contains("ms-icon-close")&&(this.options.isOpen?this.close("toggle.close"):this.open())};this.labelElm&&this._bindEventService.bind(this.labelElm,"click",i=>{i.target.nodeName.toLowerCase()==="label"&&(t(i),(!this.options.filter||!this.options.isOpen)&&this.focus(),i.stopPropagation())}),this._bindEventService.bind(this.choiceElm,"click",t),this.options.onFocus&&this._bindEventService.bind(this.choiceElm,"focus",this.options.onFocus),this.options.onBlur&&this._bindEventService.bind(this.choiceElm,"blur",this.options.onBlur),this._bindEventService.bind(this.parentElm,"keydown",i=>{i.code==="Escape"&&this.handleEscapeKey()}),this.closeElm&&this._bindEventService.bind(this.closeElm,"click",i=>{i.preventDefault(),this._checkAll(!1,!0),this.initSelected(!1),this.updateSelected(),this.update(),this.options.onClear()}),this.clearSearchIconElm&&this._bindEventService.bind(this.clearSearchIconElm,"click",i=>{i.preventDefault(),this.searchInputElm&&(this.searchInputElm.value="",this.searchInputElm.focus()),this._currentHighlightIndex=-1,this.moveHighlightDown(),this.filter(),this.options.onFilterClear()}),this.searchInputElm&&(this._bindEventService.bind(this.searchInputElm,"keydown",i=>{i.code==="Tab"&&i.shiftKey&&this.close("key.shift+tab")},void 0,"search-input"),this._bindEventService.bind(this.searchInputElm,"keyup",i=>{var s,l,a;if(this.options.filterAcceptOnEnter&&["Enter","Space"].includes(i.code)&&((s=this.searchInputElm)!=null&&s.value)){if(this.options.single){let p=[];(l=this.selectItemElms)==null||l.forEach(d=>{var u;((u=d.closest("li"))==null?void 0:u.style.display)!=="none"&&p.push(d)}),p.length&&p[0].hasAttribute("data-name")&&this.setSelects([p[0].value])}else(a=this.selectAllElm)==null||a.click();this.close(`key.${i.code.toLowerCase()}`),this.focus();return}this.filter()},void 0,"search-input")),this.selectAllElm&&this._bindEventService.bind(this.selectAllElm,"click",i=>{var s;return this._checkAll((s=i.currentTarget)==null?void 0:s.checked)},void 0,"select-all-checkbox"),this.okButtonElm&&this._bindEventService.bind(this.okButtonElm,"click",i=>{t(i),i.stopPropagation()},void 0,"ok-button"),this._bindEventService.bind(this.selectGroupElms,"click",i=>{let s=i.currentTarget,l=s.checked,a=hn(this.data,"_key",s.dataset.key);this._checkGroup(a,l),this.options.onOptgroupClick(io({label:a.label,selected:a.selected,data:a._data,children:a.children.map(p=>{if(p)return io({text:p.text,value:p.value,selected:p.selected,disabled:p.disabled,data:p._data})})}))},void 0,"group-checkbox-list"),this._bindEventService.bind(this.selectItemElms,"click",i=>{let s=i.currentTarget,l=s.checked,a=hn(this.data,"_key",s.dataset.key),p=()=>{this.options.single&&this.options.isOpen&&!this.options.keepOpen&&this.close("selection")};if(this.options.onBeforeClick(a)===!1){p();return}this._check(a,l),this.options.onClick(io({text:a.text,value:a.value,selected:a.selected,data:a._data})),p()},void 0,"input-checkbox-list"),this.lastFocusedItemKey&&((o=this.dropElm.querySelector(`li[data-key=${this.lastFocusedItemKey}]`))==null||o.focus()),this.options.navigationHighlight&&(this._bindEventService.bind(this.dropElm,"mouseover",i=>{var l;let s=i.target.closest(".ms-select-all")||i.target.closest("li");if(this.dropElm.contains(s)&&this.lastMouseOverPosition!==`${i.clientX}:${i.clientY}`){let a=((l=this.dropElm)==null?void 0:l.querySelectorAll(Ge))||[],p=Array.from(a).findIndex(d=>d.dataset.key===s.dataset.key);this._currentHighlightIndex!==p&&!s.classList.contains("disabled")&&(this._currentSelectedElm=s,this._currentHighlightIndex=p,this.changeCurrentOptionHighlight(s))}this.lastMouseOverPosition=`${i.clientX}:${i.clientY}`},void 0,"hover-highlight"),this._bindEventService.bind(this.dropElm,"keydown",i=>{var s,l,a,p;switch(i.key){case"ArrowUp":i.preventDefault(),this.moveHighlightUp();break;case"ArrowDown":i.preventDefault(),this.moveHighlightDown();break;case"Escape":this.handleEscapeKey();break;case"Enter":case" ":{if(document.activeElement!==this.okButtonElm){let d=i.target.closest(".ms-select-all")||i.target.closest("li");if(i.key===" "&&this.options.filter||this.options.filterAcceptOnEnter&&!d)return;i.preventDefault(),(l=(s=this._currentSelectedElm)==null?void 0:s.querySelector("input"))==null||l.click(),this.options.single&&(this.choiceElm.focus(),this.lastFocusedItemKey=((a=this.choiceElm)==null?void 0:a.dataset.key)||"")}break}case"Tab":{i.preventDefault(),i.shiftKey?document.activeElement===this.okButtonElm?(this.focusSelectAllOrList(),this.highlightCurrentOption()):(this.close("key.shift+tab"),this.choiceElm.focus()):(this.changeCurrentOptionHighlight(),(p=this.okButtonElm)==null||p.focus());break}}},void 0,"arrow-highlight")),this.ulElm&&this.options.infiniteScroll&&this._bindEventService.bind(this.ulElm,"scroll",this.infiniteScrollHandler.bind(this),void 0,"option-list-scroll")}handleEscapeKey(){this.options.keepOpen||(this.close("key.escape"),this.choiceElm.focus())}infiniteScrollHandler(t,e,o){let i=!1;t!=null&&t.target&&this.ulElm&&this.scrolledByMouse?t.target.scrollTop+t.target.clientHeight===this.ulElm.scrollHeight&&(i=!0):e!==void 0&&e+1===o&&(i=!0),i&&this.ulElm&&(this.virtualScroll?this.initListItems():this.ulElm.scrollTop=0,this._currentHighlightIndex=0,this.highlightCurrentOption())}open(t=0){return new Promise(e=>{t!==null&&t>=0?(clearTimeout(this.openDelayTimer),this.openDelayTimer=setTimeout(()=>{this.openDrop(),e()},t)):(this.openDrop(),e())})}openDrop(){var i,s,l,a,p;if((i=this.choiceElm)!=null&&i.classList.contains("disabled"))return;if(this.options.isOpen=!0,this.parentElm.classList.add("ms-parent-open"),(l=(s=this.choiceElm)==null?void 0:s.querySelector("div.ms-icon-caret"))==null||l.classList.add("open"),this.dropElm.style.display="block",this.dropElm.ariaExpanded="true",(a=this.selectAllElm)!=null&&a.parentElement&&(this.selectAllElm.parentElement.style.display="inline-flex"),this.noResultsElm&&(this.noResultsElm.style.display="none"),this.getDataLength()||((p=this.selectAllElm)!=null&&p.parentElement&&(this.selectAllElm.parentElement.style.display="none"),this.noResultsElm&&(this.noResultsElm.style.display="block")),this.options.container){let d=Eo(this.dropElm),u;this.options.container instanceof Node?u=this.options.container:typeof this.options.container=="string"&&(u=this.options.container==="body"?document.body:document.querySelector(this.options.container)),u.appendChild(this.dropElm),this.dropElm.style.top=`${(d==null?void 0:d.top)??0}px`,this.dropElm.style.left=`${(d==null?void 0:d.left)??0}px`,this.dropElm.style.minWidth="auto",this.dropElm.style.width=`${vn(this.parentElm,"outer","width")}px`}let t=this.options.minHeight,e=this.options.maxHeight;this.options.maxHeightUnit==="row"&&(e=vn(this.dropElm.querySelector("ul>li"),"outer","height")*this.options.maxHeight),this.ulElm??(this.ulElm=this.dropElm.querySelector("ul")),this.ulElm&&(t&&(this.ulElm.style.minHeight=`${t}px`),this.ulElm.style.maxHeight=`${e}px`),this.dropElm.querySelectorAll(".multiple").forEach(d=>{d.style.width=`${this.options.multipleWidth}px`}),this.getDataLength()&&this.options.filter?(this.searchInputElm&&(this.searchInputElm.value="",this.searchInputElm.focus()),this.filter(!0)):this.focusSelectAllOrList(),this._currentHighlightIndex<0?this.moveHighlightDown():this.highlightCurrentOption(),this.options.autoAdjustDropWidthByTextSize&&this.adjustDropWidthByText();let o=this.options.position;if(this.options.autoAdjustDropHeight){if(this.options.autoAdjustDropPosition){let{bottom:d,top:u}=so(this.dropElm),f=this.dropElm.getBoundingClientRect().height;o=d<f&&u>d?"top":"bottom"}this.adjustDropHeight(o)}this.options.autoAdjustDropPosition&&this.adjustDropPosition(!0),this.options.onOpen()}focusSelectAllOrList(){this.selectAllElm?this.selectAllElm.focus():this.ulElm&&(this.ulElm.tabIndex=0,this.ulElm.focus())}highlightCurrentOption(){var e;let t=((e=this.dropElm)==null?void 0:e.querySelectorAll(Ge))||[];if(this._currentHighlightIndex<=t.length){let o=t[this._currentHighlightIndex];o&&(this.lastFocusedItemKey=o.dataset.key||"",this._currentSelectedElm=o,this.scrolledByMouse=!1,o.scrollIntoView({block:"nearest"}),this.changeCurrentOptionHighlight(o),setTimeout(()=>this.scrolledByMouse=!0,10))}}changeCurrentOptionHighlight(t){var e;t==null||t.classList.add("highlighted"),(((e=this.dropElm)==null?void 0:e.querySelectorAll($m))||[]).forEach(o=>{o!==t&&o.classList.remove("highlighted")})}moveHighlightDown(){var o,i;let t=((o=this.dropElm)==null?void 0:o.querySelectorAll(Ge))||[],e=t.length;this._currentHighlightIndex<e-1?(this._currentHighlightIndex++,(i=t[this._currentHighlightIndex])!=null&&i.classList.contains("disabled")&&this.moveHighlightDown()):this.options.infiniteScroll&&this.infiniteScrollHandler(null,this._currentHighlightIndex,e),this.highlightCurrentOption()}moveHighlightUp(){var o,i;let t=((o=this.dropElm)==null?void 0:o.querySelectorAll(Ge))||[],e=this.options.single?0:1;if(this.virtualScroll&&this._currentHighlightIndex<=e&&this.updateDataStart>0&&this.ulElm){let s=t[this._currentHighlightIndex+(this.options.single?0:1)],l=s==null?void 0:s.dataset.key;this.lastFocusedItemKey=l,this.ulElm.scrollTop=this.ulElm.scrollTop-(s==null?void 0:s.getBoundingClientRect().height)||10,this.isMoveUpRecalcRequired=!0;return}this._currentHighlightIndex>0&&(this._currentHighlightIndex--,(i=t[this._currentHighlightIndex])!=null&&i.classList.contains("disabled")&&this.moveHighlightUp()),this.highlightCurrentOption()}recalculateArrowMove(t){var i;let e=((i=this.dropElm)==null?void 0:i.querySelectorAll(Ge))||[],o=Array.from(e).findIndex(s=>s.dataset.key===this.lastFocusedItemKey);this._currentHighlightIndex=o-1,t==="down"?this.moveHighlightDown():t==="up"&&(this.moveHighlightUp(),this.isMoveUpRecalcRequired=!1)}close(t){var e,o;this.options.isOpen=!1,this.parentElm.classList.remove("ms-parent-open"),(o=(e=this.choiceElm)==null?void 0:e.querySelector("div.ms-icon-caret"))==null||o.classList.remove("open"),this.dropElm.style.display="none",this.dropElm.ariaExpanded="false",this.options.container&&(this.parentElm.appendChild(this.dropElm),this.dropElm.style.top="auto",this.dropElm.style.left="auto"),this.options.onClose(t)}applyAsTextOrHtmlWhenEnabled(t,e){t||(t={}),this.isRenderAsHtml?t.innerHTML=typeof this.options.sanitizer=="function"?this.options.sanitizer(e):e:t.textContent=e}update(t=!1){var d;let e=this.getSelects(),o=this.getSelects("text");this.options.displayValues&&(o=e);let i=(d=this.choiceElm)==null?void 0:d.querySelector("span"),s=e.length,l=null,a=()=>{if(this.options.useSelectOptionLabel||this.options.useSelectOptionLabelToHtml){let u=e.join(this.options.displayDelimiter);return this.options.useSelectOptionLabelToHtml?Cm(u):u}return o.join(this.options.displayDelimiter)};if(i){if(s===0){let u=this.options.placeholder||"";i.classList.add("ms-placeholder"),this.applyAsTextOrHtmlWhenEnabled(i,u)}else s<this.options.minimumCountSelected?l=a():this.formatAllSelected()&&s===this.dataTotal?l=this.formatAllSelected():this.options.ellipsis&&s>this.options.minimumCountSelected?l=`${o.slice(0,this.options.minimumCountSelected).join(this.options.displayDelimiter)}...`:this.formatCountSelected(s,this.dataTotal)&&s>this.options.minimumCountSelected?l=this.formatCountSelected(s,this.dataTotal):l=a();if(l!==null&&(i==null||i.classList.remove("ms-placeholder"),this.applyAsTextOrHtmlWhenEnabled(i,l)),this.options.showClear&&this.selectClearElm){let u=l?"block":"none";this.selectClearElm.style.display=u}if(this.options.displayTitle){let u=this.options.useSelectOptionLabel||this.options.useSelectOptionLabelToHtml?"value":"text";i.title=this.getSelects(u).join(this.options.displayDelimiter)}}let p=this.getSelects();this.options.single?this.elm.value=p.length?p[0]:"":Array.from(this.elm.options).forEach(u=>{u.selected=p.some(f=>f===u.value)}),t||this.elm.dispatchEvent(new Event("change"))}updateSelected(t){var o;for(let i=this.updateDataStart;i<this.updateDataEnd;i++){let s=this.updateData[i],l=this.dropElm.querySelector(`input[data-key=${s._key}]`);if(l){l.checked=s.selected;let a=l.closest("li"),p=a==null?void 0:a.querySelector(".icon-checkbox-container div");a&&(s.selected&&!a.classList.contains("selected")?(a.classList.add("selected"),a.ariaSelected="true",p&&(p.className=`ms-icon ms-icon-${l.type==="radio"?"radio":"check"}`)):s.selected||(a.classList.remove("selected"),a.ariaSelected="false",p&&(p.className="ms-icon ms-icon-uncheck")))}}let e=((o=this.data)==null?void 0:o.filter(i=>i.visible).length)===0;if(this.selectAllElm){this.selectAllElm.ariaChecked=String(this.isAllSelected);let i=this.dropElm.querySelector(".ms-select-all .icon-checkbox-container div");if(i){let s="";this.isAllSelected?s="ms-icon-check":this.isPartiallyAllSelected?s="ms-icon-minus":s="ms-icon-uncheck",i.className=`ms-icon ${s}`}this.selectAllElm.checked=this.isAllSelected,Vi(this.selectAllElm.closest("li"),!e)}Vi(this.noResultsElm,e),this.virtualScroll&&(this.virtualScroll.rows=t??this.getListRows())}getData(){return this.options.data}getDataLength(){var t;return((t=this.data)==null?void 0:t.length)??0}getOptions(t=!0){let e=Object.assign({},this.options);return delete e.data,t?go(e):this.options}refreshOptions(t){Om(this.options,t,!0)||(this.options=Object.assign(this.options,t),this.destroy(!1),this.init())}getDropElement(){return this.dropElm}getParentElement(){return this.parentElm}getSelects(t="value"){let e=[];for(let o of this.data||[])if(o.type==="optgroup"){let i=o.children.filter(s=>s==null?void 0:s.selected);if(!i.length)continue;if(t==="value"||this.options.single)e.push(...i.map(s=>t==="value"&&s._value||s[t]));else{let s=[];s.push("["),s.push(o.label),s.push(`: ${i.map(l=>l[t]).join(", ")}`),s.push("]"),e.push(s.join(""))}}else o.selected&&e.push(t==="value"&&o._value||o[t]);return e}setSelects(t,e="value",o=!1){let i=!1,s=l=>{var a;for(let p of l){let d=!1;if(e==="text"){let u=document.createElement("div");this.applyAsTextOrHtmlWhenEnabled(u,p.text),d=t.includes(((a=u.textContent)==null?void 0:a.trim())??"")}else d=t.includes(p._value||p.value),!d&&p.value===`${+p.value}`&&(d=t.includes(+p.value));p.selected!==d&&(i=!0),p.selected=d}};for(let l of this.data||[])l.type==="optgroup"?s(l.children):s([l]);i&&(this.initSelected(o),this.updateSelected(),this.update(o))}enable(){this.choiceElm&&(this.choiceElm.classList.remove("disabled"),this.choiceElm.disabled=!1)}disable(){var t;this.choiceElm&&((t=this.choiceElm)==null||t.classList.add("disabled"),this.choiceElm.disabled=!0)}check(t){let e=hn(this.data,"value",t);e&&this._check(e,!0)}uncheck(t){let e=hn(this.data,"value",t);e&&this._check(e,!1)}_check(t,e){this.options.single&&this._checkAll(!1,!0),t.selected=e,this.initSelected(),this.updateSelected(),this.update()}checkAll(){this._checkAll(!0)}uncheckAll(){this._checkAll(!1)}_checkAll(t,e){for(let o of this.data||[])o.type==="optgroup"?this._checkGroup(o,t,!0):!o.disabled&&!o.divider&&(e||o.visible)&&(o.selected=t);e||(this.initSelected(),this.updateSelected(),this.update())}_checkGroup(t,e,o){t.selected=e,t.children.forEach(i=>{i&&!i.disabled&&!i.divider&&(o||i.visible)&&(i.selected=e)}),o||(this.initSelected(),this.updateSelected(),this.update())}checkInvert(){if(!this.options.single){for(let t of this.data||[])if(t.type==="optgroup")for(let e of t.children)e&&(e.divider||(e.selected=!e.selected));else t&&!t.divider&&(t.selected=!t.selected);this.initSelected(),this.updateSelected(),this.update()}}focus(){var t;(t=this.choiceElm)==null||t.focus(),this.options.onFocus()}blur(){var t;(t=this.choiceElm)==null||t.blur(),this.options.onBlur()}refresh(){this.destroy(!1),this.init()}filter(t){var s;let e=((s=this.searchInputElm)==null?void 0:s.value.trim())??"",o=e.toLowerCase();if(this.filterText===o)return;this.filterText=o;for(let l of this.data||[])if(l.type==="optgroup")if(this.options.filterGroup){let a=`${(l==null?void 0:l.label)??""}`;if(l!=null){let p=this.options.customFilter({label:he(a.toString().toLowerCase(),this.options.diacriticParser),search:he(o,this.options.diacriticParser),originalLabel:a,originalSearch:e,row:l});l.visible=p;for(let d of l.children)d&&(d.visible=p)}}else{for(let a of l.children)if(a!=null){let p=`${(a==null?void 0:a.text)??""}`;a.visible=this.options.customFilter({text:he(p.toString().toLowerCase(),this.options.diacriticParser),search:he(o,this.options.diacriticParser),originalText:p,originalSearch:e,row:a,parent:l})}l.visible=l.children.filter(a=>a==null?void 0:a.visible).length>0}else{let a=`${(l==null?void 0:l.text)??""}`;l.visible=this.options.customFilter({text:he(a.toString().toLowerCase(),this.options.diacriticParser),search:he(o,this.options.diacriticParser),originalText:a,originalSearch:e,row:l})}let i=this.initListItems();this.initSelected(t),this.updateSelected(i),t||this.options.onFilter(e)}adjustDropHeight(t){var u,f,w,E;let e=t!=="top",o=((u=this.filterParentElm)==null?void 0:u.getBoundingClientRect().height)??0,i=((f=this.okButtonElm)==null?void 0:f.getBoundingClientRect().height)??0,s=this.options.single?0:((w=this.selectAllParentElm)==null?void 0:w.getBoundingClientRect().height)??0,l=o+i+s+5,{bottom:a,top:p}=so(this.parentElm),d=this.options.maxHeight;if(e?d=a-l-this.options.adjustedHeightPadding:d=p-l-this.options.adjustedHeightPadding,!this.options.maxHeight||this.options.maxHeight&&d<this.options.maxHeight){let T=(E=this.dropElm)==null?void 0:E.querySelector("ul");return T&&(T.style.maxHeight=`${d}px`),!0}return!1}adjustDropPosition(t){let e="bottom";if(this.dropElm&&this.parentElm){let{bottom:o,top:i}=so(this.dropElm),{top:s,left:l}=Eo(this.parentElm),a=this.dropElm.getBoundingClientRect().height,p=this.dropElm.getBoundingClientRect().width,d=document.body.offsetWidth||window.innerWidth,u=this.parentElm.getBoundingClientRect().width;if(o>a)e="bottom";else if(a>o&&i>o){if(this.options.container){let f=s-a;f<0&&(f=0),(f>0||t)&&(e="top",this.dropElm.style.top=`${f<0?0:f}px`)}else e="top",this.dropElm.classList.add(e);this.dropElm.classList.remove("bottom")}d-p<l&&(this.dropElm.style.left=`${l-(p-u)}px`)}return e}adjustDropWidthByText(){let t=this.parentElm.scrollWidth;(this.options.dropWidth||this.options.width)&&(t=this.options.dropWidth||this.options.width||0);let e=this.dropElm.querySelector(".ms-select-all span"),o=this.dropElm.querySelector("ul"),i=26,s=(e==null?void 0:e.clientWidth)??0+i,l=o.scrollHeight>o.clientHeight?this.getScrollbarWidth():0,a=0;this.dropElm.querySelectorAll("li label").forEach(p=>{p.scrollWidth>a&&(a=p.scrollWidth)}),a+=i+l,a<s&&(a=s),this.options.maxWidth&&a>this.options.maxWidth&&(a=this.options.maxWidth),this.options.minWidth&&a<this.options.minWidth&&(a=this.options.minWidth),(t==="100%"||+t<a)&&(this.dropElm.style.width=`${a}px`,this.dropElm.style.maxWidth=`${a}px`)}getScrollbarWidth(){var s;let t=document.createElement("div");t.style.visibility="hidden",t.style.width="100px",document.body.appendChild(t);let e=t.offsetWidth;t.style.overflow="scroll";let o=document.createElement("div");o.style.width="100%",t.appendChild(o);let i=o.offsetWidth;return(s=t.parentNode)==null||s.removeChild(t),e-i}formatAllSelected(){return this.options.allSelectedText||this.options.formatAllSelected()}formatCountSelected(t,e){return this.options.countSelectedText?this.options.countSelectedText.replace("#",`${t}`).replace("%",`${e}`):this.options.formatCountSelected(t,e)}formatNoMatchesFound(){return this.options.noMatchesFoundText||this.options.formatNoMatchesFound()}formatOkButton(){return this.options.okButtonText||this.options.formatOkButton()}formatSelectAll(){return this.options.selectAllText||this.options.formatSelectAll()}},m=(n,t)=>typeof n=="string"?ao(document.querySelectorAll(n),t):n instanceof Node?ao([n],t):ao(n,t);function ao(n,t){let e=Array.from(n),o=[];for(let i=0;i<e.length;i++){let s=e[i];try{s._multipleSelect!==void 0&&(s._multipleSelect.destroy(),delete s._multipleSelect),s._multipleSelect=new Im(s,t||{}),s._multipleSelect.init();let l=s._multipleSelect.getOptions(!1);l.onHardDestroy=()=>delete s._multipleSelect,l.onAfterHardDestroyed=()=>o[i]=null,o.push(s._multipleSelect)}catch(l){console.error(l)}}return o.length===1?o[0]:o}m.defaults=bt.DEFAULTS;m.locales={...rl};m.methods=bt.METHODS;typeof window<"u"&&(window.multipleSelect=m);let Rm=class{constructor(){c(this,"logElm");c(this,"ms1")}mount(){this.logElm=document.querySelector("textarea"),this.ms1=m("select",{filter:!0,showSearchClear:!0,onOpen:()=>{this.log(`onOpen event fire!
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
`)}})}log(t){this.logElm.textContent+=t,this.logElm.scrollTo(0,this.logElm.scrollHeight)}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},ul=class{constructor(){c(this,"ms",[])}mount(){this.ms=m(".multiple-select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Pm=class{constructor(){c(this,"ms",[])}mount(){this.ms=m(".multiple-select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Hm=class{constructor(){c(this,"ms",[])}mount(){this.ms=m("select",{multiple:!0,multipleWidth:70})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Fm=class{constructor(){c(this,"multiMs",[]);c(this,"singleMs")}mount(){this.multiMs=m(".select"),this.singleMs=m(".data",{data:[{value:1,text:"Options 1",selected:!0},{value:2,text:"Options 2"},{value:3,text:"Options 3"}]})}unmount(){var t;this.multiMs.forEach(e=>e.destroy()),this.multiMs=[],(t=this.singleMs)==null||t.destroy(),this.singleMs=void 0}},Bm=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select")}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Um=class{constructor(){c(this,"ms",[])}mount(){this.ms=m("select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Gm=class{constructor(){c(this,"btnElm");c(this,"ms",[]);c(this,"clickListener",()=>{const t=this.serialize(document.querySelector("form"));alert(t)})}mount(){this.ms=m("select"),this.btnElm=document.querySelector(".submit7"),this.btnElm.addEventListener("click",this.clickListener)}unmount(){this.btnElm.removeEventListener("click",this.clickListener),this.ms.forEach(t=>t.destroy()),this.ms=[]}serialize(t){const e=[];return t.querySelectorAll("[name]").forEach(o=>{const i=Array.from(o.selectedOptions);for(const s of i)e.push(`${o.name}=${s.value}`)}),e.length>0?e.join("&"):!1}},jm=class{constructor(){c(this,"ms1");c(this,"ms2");c(this,"ms3");c(this,"ms4");c(this,"ms5")}mount(){this.ms1=m("#basic",{dataTest:"select1",data:[{text:"January",value:1},{text:"February",value:2},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}),this.ms2=m("#object",{dataTest:"select2",data:{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}}),this.ms3=m("#string",{dataTest:"select3",data:["January","February","March"]}),this.ms4=m("#number",{dataTest:"select4",data:[1,2,3]}),this.ms5=m("#group",{dataTest:"select5",data:[{type:"optgroup",label:"Group 1",children:[{text:"January",value:1,selected:!0},{text:"February",value:2,disabled:!0},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6}]},{type:"optgroup",label:"Group 2",children:[{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}]})}unmount(){var t,e,o,i,s;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),(s=this.ms5)==null||s.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0}};var dl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},ml={formatSelectAll(){return"[Seleccionar todo]"},formatAllSelected(){return"Todos seleccionados"},formatCountSelected(n,t){return`${n} de ${t} seleccionado`},formatNoMatchesFound(){return"No se encontraron coincidencias"},formatOkButton(){return"Cerrar"}};dl.locales["es-ES"]=ml;dl.locales;var hl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Jm={formatSelectAll(){return"[Vybrat vše]"},formatAllSelected(){return"Vše vybráno"},formatCountSelected(n,t){return`${n} z ${t} vybráno`},formatNoMatchesFound(){return"Nebylo nalezeno"},formatOkButton(){return"Zavřít"}};hl.locales["cz-CS"]=Jm;hl.locales;var vl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Wm={formatSelectAll(){return"[Vælg alle]"},formatAllSelected(){return"Alle valgt"},formatCountSelected(n,t){return`${n} af ${t} valgt`},formatNoMatchesFound(){return"Søgning uden resultat"},formatOkButton(){return"Lukke"}};vl.locales["da-DK"]=Wm;vl.locales;var fl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Vm={formatSelectAll(){return"[Select all]"},formatAllSelected(){return"All selected"},formatCountSelected(n,t){return`${n} of ${t} selected`},formatNoMatchesFound(){return"No matches found"},formatOkButton(){return"OK"}};fl.locales["en-US"]=Vm;fl.locales;var bl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},qm={formatSelectAll(){return"[Seleccionar todo]"},formatAllSelected(){return"Todos seleccionados"},formatCountSelected(n,t){return`${n} de ${t} seleccionado`},formatNoMatchesFound(){return"No se encontraron coincidencias"},formatOkButton(){return"Cerrar"}};bl.locales["es-ES"]=qm;bl.locales;var gl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},zm={formatSelectAll(){return"[Tout sélectionner]"},formatAllSelected(){return"Tous sélectionnés"},formatCountSelected(n,t){return`${n} de ${t} sélectionnés`},formatNoMatchesFound(){return"Aucun résultat"},formatOkButton(){return"Fermer"}};gl.locales["fr-FR"]=zm;gl.locales;var _l=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Km={formatSelectAll(){return"[Összes kiválasztása]"},formatAllSelected(){return"Összes kiválasztva"},formatCountSelected(n,t){return`${n} / ${t} kiválasztva`},formatNoMatchesFound(){return"Nincs találat"},formatOkButton(){return"Bezár"}};_l.locales["hu-HU"]=Km;_l.locales;var El=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Ym={formatSelectAll(){return"[Seleziona tutti]"},formatAllSelected(){return"Tutti selezionati"},formatCountSelected(n,t){return`${n} di ${t} selezionati`},formatNoMatchesFound(){return"Nessun risultato"},formatOkButton(){return"Chiudere"}};El.locales["it-IT"]=Ym;El.locales;var yl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Xm={formatSelectAll(){return"[すべて選択]"},formatAllSelected(){return"すべて選択"},formatCountSelected(n,t){return`${t} 件中 ${n} 件選択`},formatNoMatchesFound(){return"見つかりません"},formatOkButton(){return"閉める"}};yl.locales["ja-JP"]=Xm;yl.locales;var wl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Qm={formatSelectAll(){return"[Selecionar todos]"},formatAllSelected(){return"Todos selecionados"},formatCountSelected(n,t){return`${n} de ${t} selecionado(s)`},formatNoMatchesFound(){return"Nenhum resultado encontrado"},formatOkButton(){return"Fechar"}};wl.locales["pt-BR"]=Qm;wl.locales;var Sl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Zm={formatSelectAll(){return"[Выбрать все]"},formatAllSelected(){return"Выбрано все"},formatCountSelected(n,t){return`${n} из ${t} выбрано`},formatNoMatchesFound(){return"Совпадений не найдено"},formatOkButton(){return"Закрывать"}};Sl.locales["ru-RU"]=Zm;Sl.locales;var Al=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},th={formatSelectAll(){return"[Tất cả]"},formatAllSelected(){return"Chọn tất cả"},formatCountSelected(n,t){return`Đã chọn ${n} trong ${t}`},formatNoMatchesFound(){return"Không tìm thấy kết quả."},formatOkButton(){return"Đóng"}};Al.locales["vi-VN"]=th;Al.locales;var kl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},eh={formatSelectAll(){return"[全选]"},formatAllSelected(){return"已选择所有记录"},formatCountSelected(n,t){return`已从${t}条记录中选择${n}条`},formatNoMatchesFound(){return"没有找到记录"},formatOkButton(){return"关闭"}};kl.locales["zh-CN"]=eh;kl.locales;var Ol=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},nh={formatSelectAll(){return"[全選]"},formatAllSelected(){return"已選擇所有記錄"},formatCountSelected(n,t){return`已從${t}條記錄中選擇${n}條`},formatNoMatchesFound(){return"沒有找到記錄"},formatOkButton(){return"关闭"}};Ol.locales["zh-TW"]=nh;Ol.locales;let oh=class{constructor(){c(this,"ms0");c(this,"ms1");c(this,"ms2")}mount(){const t=document.querySelector("#locale");t.addEventListener("change",e=>{this.updateLocale(e.target.value)}),this.ms0=m(t),this.ms1=m("#dynamic-select",{filter:!0,showOkButton:!0,dataTest:"select1"}),this.ms2=m("#fixed-import",{filter:!0,showOkButton:!0,dataTest:"select2",locale:ml})}unmount(){var t,e,o;(t=this.ms0)==null||t.destroy(),(e=this.ms1)==null||e.destroy(),(o=this.ms2)==null||o.destroy(),this.ms0=void 0,this.ms1=void 0,this.ms2=void 0}updateLocale(t){var e,o;(e=this.ms1)==null||e.destroy(),(o=this.ms1)==null||o.refreshOptions({locale:t})}},ih=class{constructor(){c(this,"ms1");c(this,"ms2")}mount(){const t=[],e=[];for(let o=0;o<1e4;o++)t.push(o);for(let o=0;o<1e4;o++)e.push({text:`<i class="fa fa-star"></i> Task ${o}`,value:o});this.ms1=m("#select1",{filter:!0,data:t,showSearchClear:!0}),this.ms2=m("#select2",{filter:!0,data:e,showSearchClear:!0,useSelectOptionLabelToHtml:!0})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},sh=class{constructor(){c(this,"ms",[])}mount(){this.ms=m("select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},lh=class{constructor(){c(this,"ms1");c(this,"ms2")}mount(){this.ms1=m("#single",{singleRadio:!0}),this.ms2=m("#multiple",{showOkButton:!0})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},ah=class{constructor(){c(this,"createBtnElm");c(this,"destroyBtnElm");c(this,"ms1")}mount(){this.createBtnElm=document.querySelector("#createBtn"),this.destroyBtnElm=document.querySelector("#destroyBtn"),this.createBtnElm.addEventListener("click",this.createMultipleSelect.bind(this)),this.destroyBtnElm.addEventListener("click",this.destroyMultiSelect.bind(this))}createMultipleSelect(){this.ms1=m("#select1",{name:"my-select",single:!1,useSelectOptionLabelToHtml:!0,sanitizer:t=>gt.sanitize(t,{RETURN_TRUSTED_TYPE:!0}),data:[{text:'<i class="fa fa-star"></i> January',value:1},{text:"February",value:2},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}),this.ms1.setSelects([1,3,4])}destroyMultiSelect(){var t;console.log("destroy"),(t=this.ms1)==null||t.destroy(),this.ms1=void 0}unmount(){this.destroyMultiSelect(),this.createBtnElm.removeEventListener("click",this.createMultipleSelect.bind(this)),this.destroyBtnElm.removeEventListener("click",this.destroyMultiSelect.bind(this))}},rh=class{constructor(){c(this,"ms1",[]);c(this,"ms2",[])}mount(){this.ms1=m(".select"),this.ms2=m(".data-select",{dataTest:"select1",data:[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"},{divider:!0},{value:4,text:"Option 4"},{value:5,text:"Option 5"},{value:6,text:"Option 6"}]})}unmount(){this.ms1.forEach(t=>t.destroy()),this.ms2.forEach(t=>t.destroy()),this.ms1=[],this.ms2=[]}},ph=class{constructor(){c(this,"ms1");c(this,"ms2");c(this,"ms3");c(this,"ms4");c(this,"ms5");c(this,"darkMode",!0)}mount(){var t;(t=document.querySelector(".panel-wm-content"))==null||t.classList.add("dark-mode"),this.ms1=m("select[data-test=single]",{darkMode:!0}),this.ms2=m("select[data-test=radio]",{darkMode:!0,singleRadio:!0}),this.ms3=m("select[data-test=multiple]",{darkMode:!0}),this.ms4=m("select[data-test=group]",{darkMode:!0}),this.ms5=m("select[data-test=data1]",{darkMode:!0,dataTest:"select1",filter:!0,showOkButton:!0,showClear:!0,showSearchClear:!0,data:[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"},{divider:!0},{value:4,text:"Option 4"},{value:5,text:"Option 5"},{value:6,text:"Option 6"}]})}unmount(){var t,e,o,i,s,l;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),(s=this.ms5)==null||s.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0,(l=document.querySelector(".panel-wm-content"))==null||l.classList.remove("dark-mode")}};const qi=""+new URL("avatar1-Dfqkz6jG.png",import.meta.url).href,zi=""+new URL("avatar2-C5pX2a2d.png",import.meta.url).href,Ki=""+new URL("avatar3-COtlxv_R.png",import.meta.url).href,Yi=""+new URL("avatar4-Dom6eBE9.png",import.meta.url).href,Xi=""+new URL("avatar5-B_ltAQdV.png",import.meta.url).href;let ch=class{constructor(){c(this,"ms1");c(this,"ms2")}mount(){this.ms1=m("[data-test=select1]",{data:[{value:"1",text:`<img alt="avatar1" src="${qi}" class="avatar"> Eric`},{value:"2",text:`<img alt="avatar2" src="${zi}" class="avatar"> Smith`},{value:"3",text:`<img alt="avatar3" src="${Ki}" class="avatar"> Erika`},{value:"4",text:`<img alt="avatar4" src="${Yi}" class="avatar"> Julia`},{value:"5",text:`<img alt="avatar5" src="${Xi}" class="avatar"> Catherine`}],renderOptionLabelAsHtml:!0}),this.ms2=m("[data-test=select2]",{singleRadio:!0,renderOptionLabelAsHtml:!0,textTemplate:t=>{const[e,o]=t.textContent.split("::");return`<div class="image-container"><img alt="avatar${t.value}" src="${this.getAvatarByIdx(t.value)}" class="avatar"><div class="text-container"><div class="name-section">${e}</div><div class="job-section">${o}</div></div></div>`},sanitizer:t=>gt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}getAvatarByIdx(t){let e;switch(+t){case 1:e=qi;break;case 2:e=zi;break;case 3:e=Ki;break;case 4:e=Yi;break;case 5:e=Xi;break}return e}},uh=class{},dh=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select",{filter:!0,showOkButton:!0,formatAllSelected(){return"Tous sélectionnés"},formatCountSelected(t,e){return`${t} de ${e} sélectionnés`},formatNoMatchesFound(){return"Aucun résultat"},formatOkButton(){return"Fermer"},formatSelectAll(){return"[Tout sélectionner]"}})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},mh=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select",{filter:!0}),document.querySelector("#getOptions").addEventListener("click",()=>{alert(JSON.stringify(this.ms1.getOptions(),null,4))})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},hh=class{constructor(){c(this,"ms1");c(this,"ms2");c(this,"darkMode2",!1)}mount(){var t,e;this.ms1=m(".select1",{filter:!0}),this.ms2=m(".select2",{darkMode:this.darkMode2,showOkButton:!0}),(t=document.querySelector("#refreshOptions"))==null||t.addEventListener("click",()=>this.refreshOption1()),(e=document.querySelector("#setDarkMode"))==null||e.addEventListener("click",()=>this.toggleDarkMode2())}refreshOption1(){var t;(t=this.ms1)==null||t.refreshOptions({filter:!1})}toggleDarkMode2(){var t;this.darkMode2=!this.darkMode2,(t=this.ms2)==null||t.refreshOptions({darkMode:this.darkMode2})}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0,(o=document.querySelector("#refreshOptions"))==null||o.removeEventListener("click",()=>this.refreshOption1()),(i=document.querySelector("#setDarkMode"))==null||i.removeEventListener("click",()=>this.toggleDarkMode2())}},vh=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select",{filter:!0}),document.querySelector("#setSelectsBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.setSelects([1,3])}),document.querySelector("#getSelectsBtn").addEventListener("click",()=>{var t,e;alert(`Selected values: ${(t=this.ms1)==null?void 0:t.getSelects()}`),alert(`Selected texts: ${(e=this.ms1)==null?void 0:e.getSelects("text")}`)}),document.querySelector("#setSelectsBtn2").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.setSelects(["February","April"],"text")}),document.querySelector("#getSelectsBtn2").addEventListener("click",()=>{var t;alert(`Selected values: ${(t=this.ms1)==null?void 0:t.getSelects("text")}`)})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},fh=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select"),document.querySelector("#enableBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.enable()}),document.querySelector("#disableBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.disable()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},bh=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select"),document.querySelector("#openBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.open()}),document.querySelector("#closeBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.close()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},gh=class{constructor(){c(this,"ms",[])}mount(){this.ms=m("select"),document.querySelector("#checkBtn").addEventListener("click",()=>{for(const t of this.ms)t.check(2)}),document.querySelector("#uncheckBtn").addEventListener("click",()=>{for(const t of this.ms)t.uncheck(2)})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},_h=class{constructor(){c(this,"ms",[])}mount(){this.ms=m("select"),document.querySelector("#checkAllBtn").addEventListener("click",()=>{for(const t of this.ms)t.checkAll()}),document.querySelector("#uncheckAllBtn").addEventListener("click",()=>{for(const t of this.ms)t.uncheckAll()})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Eh=class{constructor(){c(this,"ms",[])}mount(){this.ms=m("select"),document.querySelector("#checkInvert").addEventListener("click",()=>{for(const t of this.ms)t.checkInvert()})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},yh=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select"),document.querySelector("#focusBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.focus()}),document.querySelector("#blurBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.blur()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},wh=class{constructor(){c(this,"ms1")}mount(){const t=document.querySelector("select");this.ms1=m(t),document.querySelector("#refreshAdd").addEventListener("click",()=>{var a;const e=document.querySelector("#refreshInput"),o=document.querySelector("#refreshSelected"),i=document.querySelector("#refreshDisabled"),s=e.value.trim(),l=document.createElement("option");if(l.value=s,l.text=s,!s){e.focus();return}o.checked&&(l.selected=!0),i.checked&&(l.disabled=!0),e.value="",t.appendChild(l),(a=this.ms1)==null||a.refresh()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Sh=class{constructor(){c(this,"buildBtnElm");c(this,"destroyBtnElm");c(this,"ms1")}mount(){this.buildBtnElm=document.querySelector("#buildBtn"),this.destroyBtnElm=document.querySelector("#destroyBtn"),this.destroyBtnElm.addEventListener("click",this.destroyMultiSelect.bind(this)),this.buildBtnElm.addEventListener("click",this.createMultipleSelect.bind(this)),this.ms1=m("select")}createMultipleSelect(){this.ms1=m("select")}destroyMultiSelect(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=null}unmount(){this.destroyMultiSelect(),this.buildBtnElm.removeEventListener("click",this.destroyMultiSelect.bind(this)),this.destroyBtnElm.removeEventListener("click",this.createMultipleSelect.bind(this))}},Ah=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select",{filter:!0}),document.querySelector("#getData").addEventListener("click",()=>{console.log("tt",JSON.stringify(this.ms1.getData())),alert(JSON.stringify(this.ms1.getData(),null,4))})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},kh=class{constructor(){c(this,"ms1");c(this,"ms2")}mount(){this.ms1=m("#select1"),this.ms2=m("#select2",{placeholder:"Here is the placeholder via javascript"})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},Oh=class{constructor(){c(this,"ms",[])}mount(){this.ms=m("select",{singleRadio:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Th=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select",{selectAll:!1})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},xh=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select",{multiple:!0,hideOptgroupCheckboxes:!0,multipleWidth:70})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Ch=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select",{multiple:!0,width:500,multipleWidth:70,dropWidth:580})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Dh=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select",{maxHeight:140})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Nh=class{constructor(){c(this,"ms",[])}mount(){const t=document.querySelector("#number");this.ms=m("select",{maxHeight:+t.value,maxHeightUnit:"row"}),t.addEventListener("change",()=>{this.ms.forEach(e=>{e.refreshOptions({maxHeight:+t.value,maxHeightUnit:"row"})})})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Mh=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select",{position:"top"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Lh=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select",{displayValues:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},$h=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select",{displayTitle:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Ih=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select",{displayDelimiter:" | "})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Rh=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select",{minimumCountSelected:8})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Ph=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select",{ellipsis:!0,minimumCountSelected:5})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Hh=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select",{isOpen:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Fh=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select",{keepOpen:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Bh=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select",{openOnHover:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Uh=class{constructor(){c(this,"ms1");c(this,"ms2");c(this,"ms3");c(this,"ms4")}mount(){this.ms1=m(".select1"),this.ms2=m(".select2"),this.ms3=m(".select3",{container:".my-container"}),this.ms4=m(".select4",{autoAdjustDropPosition:!0,container:"body"})}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},Gh=class{constructor(){c(this,"ms",[])}mount(){this.ms=m("select",{filter:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},jh=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select",{filter:!0,filterGroup:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Jh=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select",{filter:!0,filterPlaceholder:"The filter placeholder"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Wh=class{constructor(){c(this,"ms",[])}mount(){this.ms=m("select",{filter:!0,filterAcceptOnEnter:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Vh=class{constructor(){c(this,"ms",[])}mount(){this.ms=m("select",{filterByDataLength:10})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},qh=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select",{filter:!0,customFilter:({text:t,search:e,originalText:o,originalSearch:i})=>document.querySelector("input").checked?o.indexOf(i)===0:t.indexOf(e)===0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},zh=class{constructor(){c(this,"ms",[])}mount(){this.ms=m("select",{showClear:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Kh=class{constructor(){c(this,"ms",[])}mount(){this.ms.push(m(".select1",{showOkButton:!0})),this.ms.push(m(".select2",{showOkButton:!0})),this.ms.push(m(".select3",{showOkButton:!0,filter:!0})),this.ms.push(m(".select4",{showOkButton:!0}))}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Yh=class{constructor(){c(this,"ms1");c(this,"ms2")}mount(){this.ms1=m('[data-test="select3"]',{cssStyler:t=>+((t==null?void 0:t.value)??0)==2?{backgroundColor:"#6fbeff",color:"#0014ff",fontStyle:"italic"}:+((t==null?void 0:t.value)??0)==4?{backgroundColor:"#972727",color:"#fff"}:null}),this.ms2=m('[data-test="select4"]',{cssStyler:t=>(t==null?void 0:t.type)==="optgroup"?{color:"#787878",fontWeight:"normal"}:+((t==null?void 0:t.value)??0)==3?{color:"purple",textDecoration:"underline"}:null})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},Xh=class{constructor(){c(this,"ms1");c(this,"ms2");c(this,"btnEnableElm");c(this,"btnDisableElm")}mount(){this.ms1=m("#basic",{filter:!0,displayTitle:!0,renderOptionLabelAsHtml:!0,textTemplate:t=>`<i class="fa fa-star"></i>${t.innerHTML}`,customFilter:({search:t,text:e})=>{var i;const o=document.createElement("div");return o.innerHTML=e,((i=o.textContent)==null?void 0:i.includes(t))??!0},sanitizer:t=>gt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms2=m("#from-data",{dataTest:"select1",displayTitle:!0,renderOptionLabelAsHtml:!0,data:[{value:'50"',text:'50"'},{value:"44'",text:"44'"},{value:"33",text:'<span style="font-weight:bold">33</span>'}],sanitizer:t=>gt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.btnEnableElm=document.querySelector("#enableRenderHtml"),this.btnEnableElm.addEventListener("click",()=>this.renderAsHtmlHandler(!0)),this.btnDisableElm=document.querySelector("#disableRenderHtml"),this.btnDisableElm.addEventListener("click",()=>this.renderAsHtmlHandler(!1))}renderAsHtmlHandler(t){var e,o;(e=this.ms1)==null||e.refreshOptions({renderOptionLabelAsHtml:t}),(o=this.ms2)==null||o.refreshOptions({renderOptionLabelAsHtml:t})}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0,(o=this.btnEnableElm)==null||o.removeEventListener("click",()=>this.renderAsHtmlHandler(!0)),(i=this.btnDisableElm)==null||i.removeEventListener("click",()=>this.renderAsHtmlHandler(!1))}},Qh=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("select",{renderOptionLabelAsHtml:!0,labelTemplate:t=>`<i class="fa fa-star"></i>${t.getAttribute("label")}`,sanitizer:t=>gt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Zh=class{constructor(){c(this,"ms",[])}mount(){this.ms=m("select",{autoAdjustDropPosition:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},tv=class{constructor(){c(this,"ms1");c(this,"ms2");c(this,"ms3");c(this,"ms4")}mount(){this.ms1=m("#select1",{autoAdjustDropWidthByTextSize:!0,autoAdjustDropHeight:!0,position:"top",showOkButton:!0,sanitizer:t=>gt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms2=m("#select2",{autoAdjustDropHeight:!0,position:"top",showOkButton:!0,sanitizer:t=>gt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms3=m("#select3",{autoAdjustDropHeight:!0,filter:!0,position:"top",sanitizer:t=>gt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms4=m("#select4")}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},ev=class{constructor(){c(this,"ms1");c(this,"ms2")}mount(){this.ms1=m("#select1",{useSelectOptionLabel:!0}),this.ms2=m("#select2",{useSelectOptionLabelToHtml:!0,sanitizer:t=>gt.sanitize(t,{RETURN_TRUSTED_TYPE:!0}),data:[{text:'<i class="fa fa-star"></i> January',value:'<i class="fa fa-star"></i>1',selected:!0},{text:"February",value:"2"},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},nv=class{constructor(){c(this,"ms1")}mount(){this.ms1=m("#select1",{placeholder:'Placeholder with cross-site scripting code...<img src="not-found" onerror=alert("Hacked")>',sanitizer:t=>typeof t=="string"?decodeURIComponent(t).replace(/(\b)(on[a-z]+)(\s*)=|javascript:([^>]*)[^>]*|(<\s*)(\/*)script([<>]*).*(<\s*)(\/*)script(>*)|(&lt;)(\/*)(script|script defer)(.*)(&gt;|&gt;">)/gi,""):t})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},ov=class{constructor(){c(this,"ms",[])}mount(){this.ms=m("select",{classes:"form-control",classPrefix:"form-control"})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},iv=class{constructor(){c(this,"ms",[])}mount(){this.ms=m("select",{filter:!0,showSearchClear:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}};const Qi={a:"ÀÁÂÃÄÅàáâãäåĀāąĄ",c:"ÇçćĆčČ",d:"đĐďĎ",e:"ÈÉÊËèéêëěĚĒēęĘ",i:"ÌÍÎÏìíîïĪī",l:"łŁ",n:"ÑñňŇńŃ",o:"ÒÓÔÕÕÖØòóôõöøŌō",r:"řŘ",s:"ŠšśŚ",t:"ťŤ",u:"ÙÚÛÜùúûüůŮŪū",y:"ŸÿýÝ",z:"ŽžżŻźŹ"};let sv=class{constructor(){c(this,"ms1");c(this,"ms2");c(this,"inLogElm");c(this,"outLogElm")}mount(){this.inLogElm=document.querySelector("input.in-log"),this.outLogElm=document.querySelector("input.out-log"),this.ms1=m("#select1",{filter:!0,showSearchClear:!0,filterPlaceholder:'🔎︎ search with "é", "û" or simply "u"',diacriticParser:t=>{const e=t.split("").map(o=>Object.keys(Qi).find(i=>Qi[i].includes(o))||o).join("");return this.inLogElm.value=t,this.outLogElm.value=e,e}}),this.ms2=m("#select2",{filter:!0,showSearchClear:!0,filterPlaceholder:'🔎︎ search with "é", "û" or simply "u"'})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},lv=class{constructor(){c(this,"ms1");c(this,"ms2")}mount(){const t=[],e=[];for(let o=1;o<=25;o++)t.push({text:`Title ${o}`,value:o});for(let o=1;o<=2e3;o++)e.push({text:`<i class="fa fa-star"></i> Task ${o}`,value:o});this.ms1=m("#select1",{data:t,infiniteScroll:!0}),this.ms2=m("#select2",{filter:!0,data:e,showSearchClear:!0,useSelectOptionLabelToHtml:!0,infiniteScroll:!0})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},av=class{constructor(){c(this,"ms1");c(this,"ms2");c(this,"ms3");c(this,"ms4")}mount(){this.ms1=m("select[data-test=select1]"),this.ms2=m("select[data-test=select2]"),this.ms3=m("select[data-test=select3]"),this.ms4=m("select[data-test=select4]",{filter:!0})}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},rv=class{constructor(){c(this,"pageContentElm",null);c(this,"ms1");c(this,"ms2");c(this,"ms3");c(this,"ms4");c(this,"ms5");c(this,"darkMode",!0)}mount(){var t,e;this.pageContentElm=document.querySelector(".panel-wm-content"),(t=this.pageContentElm)==null||t.classList.add("dark-mode"),(e=document.querySelector("#setDarkMode"))==null||e.addEventListener("click",()=>this.toggleDarkMode()),this.ms1=m("select[data-test=single]",{darkMode:!0}),this.ms2=m("select[data-test=radio]",{darkMode:!0,singleRadio:!0}),this.ms3=m("select[data-test=multiple]",{darkMode:!0}),this.ms4=m("select[data-test=group]",{darkMode:!0}),this.ms5=m("select[data-test=data1]",{darkMode:!0,dataTest:"select1",filter:!0,showOkButton:!0,showClear:!0,showSearchClear:!0,data:[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"},{divider:!0},{value:4,text:"Option 4"},{value:5,text:"Option 5"},{value:6,text:"Option 6"}]})}toggleDarkMode(){var t,e,o,i,s;if(this.darkMode=!this.darkMode,(t=this.ms1)==null||t.refreshOptions({darkMode:this.darkMode}),(e=this.ms2)==null||e.refreshOptions({darkMode:this.darkMode}),(o=this.ms3)==null||o.refreshOptions({darkMode:this.darkMode}),(i=this.ms4)==null||i.refreshOptions({darkMode:this.darkMode}),(s=this.ms5)==null||s.refreshOptions({darkMode:this.darkMode}),this.pageContentElm){const l=this.darkMode?"add":"remove";this.pageContentElm.classList[l]("dark-mode")}}unmount(){var t,e,o,i,s,l,a;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),(s=this.ms5)==null||s.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0,(l=this.pageContentElm)==null||l.classList.remove("dark-mode"),(a=document.querySelector("#setDarkMode"))==null||a.removeEventListener("click",()=>this.toggleDarkMode())}};class pv{constructor(){c(this,"ms1")}mount(){this.ms1=m("select",{labelId:"custom-label"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}}const Zi=[{name:"getting-started",view:"/src/getting-started.html",viewModel:uh,title:"Getting Started"},{name:"examples",view:"/src/examples/example01.html",viewModel:ul,title:"Examples"}],ts=[{name:"Welcomes",routes:[{name:"example01",view:"/src/examples/example01.html",viewModel:ul,title:"Single Select"},{name:"example02",view:"/src/examples/example02.html",viewModel:Pm,title:"Multiple Select"},{name:"example03",view:"/src/examples/example03.html",viewModel:Hm,title:"Multiple Items"},{name:"example04",view:"/src/examples/example04.html",viewModel:Fm,title:"Auto Width"},{name:"example05",view:"/src/examples/example05.html",viewModel:Bm,title:"Disabled Select"},{name:"example06",view:"/src/examples/example06.html",viewModel:Um,title:"Selected/Disabled Options"},{name:"example07",view:"/src/examples/example07.html",viewModel:Gm,title:"Submit Select"},{name:"example08",view:"/src/examples/example08.html",viewModel:jm,title:"The Data"},{name:"example09",view:"/src/examples/example09.html",viewModel:oh,title:"Locale"},{name:"example10",view:"/src/examples/example10.html",viewModel:ih,title:"Large Select (Virtual Scroll)"},{name:"example11",view:"/src/examples/example11.html",viewModel:sh,title:"Themes / Sizes"},{name:"example12",view:"/src/examples/example12.html",viewModel:lh,title:"Checkbox/Radio Icons"},{name:"example13",view:"/src/examples/example13.html",viewModel:ah,title:"Dynamically Create Select"},{name:"example14",view:"/src/examples/example14.html",viewModel:rh,title:"The Divider"},{name:"example15",view:"/src/examples/example15.html",viewModel:ph,title:"Dark Mode"},{name:"example16",view:"/src/examples/example16.html",viewModel:ch,title:"Template with Images"}]},{name:"Options",routes:[{name:"options01",view:"/src/options/options01.html",viewModel:kh,title:"The Placeholder"},{name:"options02",view:"/src/options/options02.html",viewModel:Oh,title:"Single Radio"},{name:"options03",view:"/src/options/options03.html",viewModel:Th,title:"Hide Select All"},{name:"options04",view:"/src/options/options04.html",viewModel:xh,title:"Hide Optgroup Checkboxes"},{name:"options05",view:"/src/options/options05.html",viewModel:Ch,title:"Custom Dropdown Width"},{name:"options06",view:"/src/options/options06.html",viewModel:Dh,title:"Max Height"},{name:"options07",view:"/src/options/options07.html",viewModel:Nh,title:"Max Height Unit"},{name:"options08",view:"/src/options/options08.html",viewModel:Mh,title:"The Position"},{name:"options09",view:"/src/options/options09.html",viewModel:Lh,title:"Display Values"},{name:"options10",view:"/src/options/options10.html",viewModel:$h,title:"Display Title"},{name:"options11",view:"/src/options/options11.html",viewModel:Ih,title:"Display Delimiter"},{name:"options12",view:"/src/options/options12.html",viewModel:Rh,title:"Minimum Count Selected"},{name:"options13",view:"/src/options/options13.html",viewModel:Ph,title:"The Ellipsis"},{name:"options14",view:"/src/options/options14.html",viewModel:Hh,title:"Is Open"},{name:"options15",view:"/src/options/options15.html",viewModel:Fh,title:"Keep Open"},{name:"options16",view:"/src/options/options16.html",viewModel:Bh,title:"Open On Hover"},{name:"options17",view:"/src/options/options17.html",viewModel:Uh,title:"The Container"},{name:"options18",view:"/src/options/options18.html",viewModel:Gh,title:"The Filter"},{name:"options19",view:"/src/options/options19.html",viewModel:jh,title:"Filter Only Optgroup"},{name:"options20",view:"/src/options/options20.html",viewModel:Jh,title:"Filter Placeholder"},{name:"options21",view:"/src/options/options21.html",viewModel:Wh,title:"Filter Accept On Enter"},{name:"options22",view:"/src/options/options22.html",viewModel:Vh,title:"Filter By Data Length"},{name:"options23",view:"/src/options/options23.html",viewModel:qh,title:"Custom Filter"},{name:"options24",view:"/src/options/options24.html",viewModel:zh,title:"Show Clear"},{name:"options25",view:"/src/options/options25.html",viewModel:Kh,title:"Show OK Button"},{name:"options26",view:"/src/options/options26.html",viewModel:Yh,title:"The Styler"},{name:"options27",view:"/src/options/options27.html",viewModel:Xh,title:"Text Template"},{name:"options28",view:"/src/options/options28.html",viewModel:Qh,title:"Label Template"},{name:"options29",view:"/src/options/options29.html",viewModel:Zh,title:"Auto-Adjust Drop Position"},{name:"options30",view:"/src/options/options30.html",viewModel:tv,title:"Auto-Adjust Drop Height/Width"},{name:"options31",view:"/src/options/options31.html",viewModel:ev,title:"Use Select Option as Label"},{name:"options32",view:"/src/options/options32.html",viewModel:nv,title:"Sanitizer"},{name:"options33",view:"/src/options/options33.html",viewModel:ov,title:"Classes"},{name:"options34",view:"/src/options/options34.html",viewModel:iv,title:"Show Search Clear"},{name:"options35",view:"/src/options/options35.html",viewModel:sv,title:"Custom Diacritic Parser"},{name:"options36",view:"/src/options/options36.html",viewModel:lv,title:"Infinite Scroll"},{name:"options37",view:"/src/options/options37.html",viewModel:av,title:"Navigation Highlight"},{name:"options38",view:"/src/options/options38.html",viewModel:rv,title:"Dark Mode"},{name:"options39",view:"/src/options/options39.html",viewModel:pv,title:"Label Id (aria-labelledby)"}]},{name:"Methods",routes:[{name:"methods01",view:"/src/methods/methods01.html",viewModel:mh,title:"The getOptions"},{name:"methods02",view:"/src/methods/methods02.html",viewModel:hh,title:"The refreshOptions"},{name:"methods03",view:"/src/methods/methods03.html",viewModel:vh,title:"The setSelects/getSelects"},{name:"methods04",view:"/src/methods/methods04.html",viewModel:fh,title:"The enable/disable"},{name:"methods05",view:"/src/methods/methods05.html",viewModel:bh,title:"The open/close"},{name:"methods06",view:"/src/methods/methods06.html",viewModel:gh,title:"The check/uncheck"},{name:"methods07",view:"/src/methods/methods07.html",viewModel:_h,title:"The checkAll/uncheckAll"},{name:"methods08",view:"/src/methods/methods08.html",viewModel:Eh,title:"The checkInvert"},{name:"methods09",view:"/src/methods/methods09.html",viewModel:yh,title:"The focus/blur"},{name:"methods10",view:"/src/methods/methods10.html",viewModel:wh,title:"The refresh"},{name:"methods11",view:"/src/methods/methods11.html",viewModel:Sh,title:"The destroy"},{name:"methods12",view:"/src/methods/methods12.html",viewModel:Ah,title:"The getData"}]},{name:"Events",routes:[{name:"events",view:"/src/events/events.html",viewModel:Rm,title:"The Events"}]},{name:"I18N",routes:[{name:"i18n",view:"/src/i18n/i18n.html",viewModel:dh,title:"The i18n"}]}],cv=Object.assign({"/src/events/events.html":Pl,"/src/examples/example01.html":Hl,"/src/examples/example02.html":Fl,"/src/examples/example03.html":Bl,"/src/examples/example04.html":Ul,"/src/examples/example05.html":Gl,"/src/examples/example06.html":jl,"/src/examples/example07.html":Jl,"/src/examples/example08.html":Wl,"/src/examples/example09.html":Vl,"/src/examples/example10.html":ql,"/src/examples/example11.html":zl,"/src/examples/example12.html":Kl,"/src/examples/example13.html":Yl,"/src/examples/example14.html":Xl,"/src/examples/example15.html":Ql,"/src/examples/example16.html":Zl,"/src/getting-started.html":ta,"/src/i18n/i18n.html":ea,"/src/main.html":es,"/src/methods/methods01.html":na,"/src/methods/methods02.html":oa,"/src/methods/methods03.html":ia,"/src/methods/methods04.html":sa,"/src/methods/methods05.html":la,"/src/methods/methods06.html":aa,"/src/methods/methods07.html":ra,"/src/methods/methods08.html":pa,"/src/methods/methods09.html":ca,"/src/methods/methods10.html":ua,"/src/methods/methods11.html":da,"/src/methods/methods12.html":ma,"/src/options/options01.html":ha,"/src/options/options02.html":va,"/src/options/options03.html":fa,"/src/options/options04.html":ba,"/src/options/options05.html":ga,"/src/options/options06.html":_a,"/src/options/options07.html":Ea,"/src/options/options08.html":ya,"/src/options/options09.html":wa,"/src/options/options10.html":Sa,"/src/options/options11.html":Aa,"/src/options/options12.html":ka,"/src/options/options13.html":Oa,"/src/options/options14.html":Ta,"/src/options/options15.html":xa,"/src/options/options16.html":Ca,"/src/options/options17.html":Da,"/src/options/options18.html":Na,"/src/options/options19.html":Ma,"/src/options/options20.html":La,"/src/options/options21.html":$a,"/src/options/options22.html":Ia,"/src/options/options23.html":Ra,"/src/options/options24.html":Pa,"/src/options/options25.html":Ha,"/src/options/options26.html":Fa,"/src/options/options27.html":Ba,"/src/options/options28.html":Ua,"/src/options/options29.html":Ga,"/src/options/options30.html":ja,"/src/options/options31.html":Ja,"/src/options/options32.html":Wa,"/src/options/options33.html":Va,"/src/options/options34.html":qa,"/src/options/options35.html":za,"/src/options/options36.html":Ka,"/src/options/options37.html":Ya,"/src/options/options38.html":Xa,"/src/options/options39.html":Qa});class uv{constructor(){c(this,"loading",!0);c(this,"currentModel");c(this,"currentRouter");c(this,"defaultRouteName","getting-started");c(this,"stateBangChar","#/");c(this,"baseUrl",window.location.origin+window.location.pathname);c(this,"viewModelObj",{})}async init(){const t=window.location;document.querySelector("#app").innerHTML=gt.sanitize(es,{RETURN_TRUSTED_TYPE:!0});let e=t.hash.replace(this.stateBangChar,"");(!e||e==="/"||e==="#")&&(e=this.defaultRouteName),this.createRouteLinks(),this.loadRoute(e),Array.from(document.querySelectorAll(".panel-wm-left a.nav-link,.navbar-nav a.nav-link")).forEach(o=>{e.includes(o.id)&&o.classList.add("active")}),window.onpopstate=()=>{const i=window.location.hash.replace(this.stateBangChar,"");this.removeAllActiveLinks();const s=document.querySelector(`#${i}`);s&&(s.scrollIntoView(),s.classList.add("active")),this.loadRoute(i||this.defaultRouteName,!1)}}createRouteLinks(){var t,e,o;for(const i of Zi){const s=F("li",{className:"nav-item"});F("a",{id:i.name,className:"nav-link",textContent:i.title},s).addEventListener("click",this.clickEventListener.bind(this)),(t=document.querySelector(".navbar-nav"))==null||t.appendChild(s)}for(const i of ts){const s=F("li",{className:"m-1"});F("p",{className:"navbar-vertical-label mb-1",textContent:i.name},s),(e=document.querySelector(".nav-pills"))==null||e.appendChild(s);for(const l of i.routes){const a=F("li",{className:"nav-item"}),p=F("a",{id:l.name,className:"nav-link",textContent:l.title});p.addEventListener("click",this.clickEventListener.bind(this)),a.appendChild(p),(o=document.querySelector(".nav-pills"))==null||o.appendChild(a)}}}async loadRoute(t,e=!0){var s;const o=document.querySelector(".panel-wm-content");We(o),o.classList.add("cloak");let i=Zi.find(l=>l.name===t);if((i==null?void 0:i.name)==="examples"){const l=document.querySelector(".nav-pills .nav-item a.nav-link");l==null||l.classList.add("active")}else for(const l of ts){const a=l.routes.find(p=>p.name===t);a&&(i=a)}if(this.currentModel&&this.unmountCurrentVM(this.currentModel,this.currentRouter),i){this.currentRouter=i,document.querySelector(".panel-wm-content").innerHTML=gt.sanitize(cv[i.view],{RETURN_TRUSTED_TYPE:!0});const l=new i.viewModel;this.currentModel=l,window[i.name]=(s=l.mount)==null?void 0:s.call(l),window.onbeforeunload=()=>{var a;o.classList.add("cloak"),(a=l.unmount)==null||a.call(l),this.removeAllActiveLinks(!0),this.unmountAll(),i!=null&&i.name&&delete window[i.name]}}e&&window.history.pushState({},t,`${this.baseUrl}${this.stateBangChar}${t}`),document.title=`Multiple-Select-Vanilla · ${t}`,o.classList.remove("cloak")}async clickEventListener(t){this.removeAllActiveLinks();const e=t.target;e.classList.toggle("active"),this.loadRoute(e.id)}removeAllActiveLinks(t=!1){document.querySelectorAll(".panel-wm-left a.nav-link,.navbar-nav a.nav-link").forEach(e=>{e.classList.remove("active"),t&&e.removeEventListener("click",this.clickEventListener.bind(this))})}unmountCurrentVM(t,e){var o;(o=t.unmount)==null||o.call(t),e&&delete window[e.name]}unmountAll(){for(const t of Object.keys(this.viewModelObj)){const e=this.viewModelObj[t];if(typeof(e==null?void 0:e.unmount)=="function"){e==null||e.unmount();for(const o of Object.keys(e))e[o]=null}window[t]=null,this.viewModelObj[t]=null,delete window[t],delete this.viewModelObj[t]}}}const dv=new uv;dv.init();
