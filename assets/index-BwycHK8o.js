var Gl=Object.defineProperty;var Ul=(n,t,e)=>t in n?Gl(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var u=(n,t,e)=>Ul(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Jl=`<div class="row mb-2">
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
    <label class="col-sm-2">Events</label>

    <div class="col-sm-10">
      <textarea class="form-control" readonly rows="10" style="background-color: #f0f0f0"></textarea>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Group Select</label>

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
`,jl=`<div class="row">
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

  <hr>

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
  <hr>
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
    ></iframe>
  </div>
</div>
`,zl=`<div class="row">
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
    <label class="col-sm-2">Basic Select </label>

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

  <hr>

  <div class="mb-3 row">
    <label class="col-sm-2">Group Select </label>

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
    <label class="col-sm-2">Multiple Select </label>

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
`,Wl=`<div class="row mb-2">
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
    <div class="demo-subtitle">
      Use <code>multiple</code>and <code>multipleWidth</code>options to enable multiple items.
    </div>
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
`,Vl=`<div class="row mb-2">
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
    <label class="col-sm-3">Auto width </label>

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
    <label class="col-sm-3">Data width </label>

    <div class="col-sm-9">
      <select class="data" data-test="select2"></select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-3">Large width </label>

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
    <label class="col-sm-3">Dropdown width </label>

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
    <label class="col-sm-3">Group Select </label>

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
    <label class="col-sm-3">Large Group </label>

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
`,ql=`<div class="row mb-2">
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
    <div class="demo-subtitle">
      Show a disabled select width <code>disabled</code>attribute.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Disabled Select </label>

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
`,Kl=`<div class="row mb-2">
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
    <label class="col-sm-2">Basic Select </label>

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
    <label class="col-sm-2">Group Select </label>

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
`,Yl=`<div class="row mb-2">
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
    <div class="demo-subtitle">
      Submit select with <code>name</code>attribute in form.
    </div>
  </div>
</div>

<div>
  <form>
    <div class="mb-3 row">
      <label class="col-sm-2">Single Select </label>

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
      <label class="col-sm-2">Multiple Select </label>

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
`,Xl=`<div class="row mb-2">
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
    <div class="demo-subtitle">
      Use <code>data</code>as data source.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Basic Array </label>

    <div class="col-sm-10">
      <select id="basic" class="full-width" multiple></select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Basic Object </label>

    <div class="col-sm-10">
      <select id="object" class="full-width" multiple></select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">String Array </label>

    <div class="col-sm-10">
      <select id="string" class="full-width" multiple></select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Number Array </label>

    <div class="col-sm-10">
      <select id="number" class="full-width" multiple></select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Group Array </label>

    <div class="col-sm-10">
      <select id="group" class="full-width" multiple></select>
    </div>
  </div>
</div>
`,Ql=`<div class="row mb-2">
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
    <div class="demo-subtitle">
      Use <code>locale</code>to set the locale.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-3">Locale Select </label>

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
    <label class="col-sm-3">Result Select </label>

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

  <hr>

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
`,Zl=`<div class="row mb-2">
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
      Virtual Scroll will automatically be used with a large set of data. We recommend keeping this option enabled at all time, but in some
      cases you could also disable it via the <code>virtualScroll</code>option
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Basic Array</label>

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
</div>
`,ta=`<div class="row mb-2">
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
`,ea=`<div class="row mb-2">
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
    <div class="demo-subtitle">Display checkbox or radio icons </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label col-form-label-sm">Single Select </label>

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
`,na=`<div class="row mb-2">
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
      Dynamically create a Multiple-Select instance with <code>data</code>property.
      <br>
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Create </label>

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
`,oa=`<div class="row mb-2">
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
`,ia=`<div class="example15-container">
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
            <a
              target="_blank"
              href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/examples/example15.ts"
              >ts</a
            >
          </span>
        </span>
      </h2>
      <div class="demo-subtitle">
        Dark Mode requires <code>darkMode</code>option to be enabled, when that happens it will add <code>.ms-dark-mode</code>to the parent
        and drop elements. The dark theme is configured through CSS variables which you can also customize yourself. You can also toggle
        Dark Mode at any time dynamically via <code>refreshOptions()</code>
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
`,sa=`<div class="row mb-2">
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
      Display avatar images by using <code>textTemplate</code>to render HTML with image src. Note that the use of <code>sanitizer</code>with
      tools like DOM Purify is recommended when using <code>textTemplate</code>.
    </div>
  </div>
</div>

<div class="example12">
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">Avatar Template</label>

    <div class="col-sm-10">
      <select id="select1" class="full-width" data-test="select1"></select>
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
`,la=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">Getting Started</h2>
  </div>
</div>

<div class="content-text">
  <h3>Download</h3>
  <hr>

  <section>
    <h5>
      GitHub <i class="fa fa-link"></i>
    </h5>
    <p>
      <a href="https://github.com/ghiscoding/multiple-select-vanilla">https://github.com/ghiscoding/multiple-select-vanilla</a>
    </p>
  </section>

  <section>
    <h5>CDN</h5>
    <p>
      <a href="https://www.jsdelivr.com/" target="__blank">jsDelivr</a>&nbsp;graciously provide CDNs for many JavaScript libraries including
      Multiple-Select-Vanilla. Just use the following CDN links.
    </p>
    <p>
      The project now ships as ESM-Only, if you still wish to use the legacy CommonJS (CJS) format with <code>require()</code>, then use
      previous 3.x version.
    </p>

    <div style="background: #f7f7f7; padding: 10px">
      <pre>
&lt;!-- Latest compiled and minified CSS --&gt;
&lt;link href=&quot;<span style="color:#0a3069">https://cdn.jsdelivr.net/npm/multiple-select-vanilla@4.2.0/dist/styles/css/multiple-select.css</span>&quot; rel=&quot;<span style="color:#0a3069">stylesheet</span>&quot;&gt;

&lt;!-- (ESM requires <span style="color:#d63384">type=&quot;module&quot;</span>) Latest compiled and minified JavaScript --&gt;
&lt;script type=&quot;module&quot; src=&quot;<span style="color:#0a3069">https://cdn.jsdelivr.net/npm/multiple-select-vanilla@4.2.0/dist/browser/multiple-select.js</span>&quot;&gt;&lt;/script&gt;
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

  <h5>
    ESM <code>import from</code>
  </h5>
  <p>The library provides both CommonJS or ESM, see the example below:</p>
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
    <p>
      Load default or Bootstrap Theme style via either the <code>@use</code>(modern) or <code>@import</code>(legacy)
    </p>
    1- with modern SASS <code>@use</code>approach
    <div style="background: #f7f7f7; padding: 10px">
      <pre>
  <span style="color:#cf222e">@use</span> <span style="color:#0a3069">'multiple-select-vanilla/dist/styles/sass/multiple-select.scss'</span> <span style="color:#cf222e">with</span> (
    <span style="color:#986801">$ms-primary-color</span>: red,
    <span style="color:#986801">$ms-checkbox-color</span>: red,
  );
</pre>
    </div>
    2- with legacy SASS <code>@import</code>approach
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
`,aa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The i18n
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/i18n/i18n.html"
            >html</a
          >
          |<a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/i18n/i18n.ts">ts</a>
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Custom i18n options, for example French is used here.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

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
    <hr>
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
      ></iframe>
    </div>
  </div>
</div>
`,ls=`<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
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
      <ul class="navbar-nav"></ul>
    </div>
  </div>
</nav>

<div class="container-fluid template-body">
  <div class="panel-wm">
    <section id="panel-left" class="panel-wm-left">
      <ul class="well nav nav-pills nav-stacked"><!-- All Example Routes --></ul>
    </section>

    <section class="panel-wm-content"></section>
  </div>
</div>
`,ra=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The getOptions
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods01.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods01.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>multipleSelect('select').getOptions()</code>to get the options object.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Methods </label>

    <div class="col-sm-10">
      <button id="getOptions" class="btn btn-secondary">getOptions</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="text1">text1</option>
        <option value="text2">text2</option>
        <option value="text3">text3</option>
      </select>
    </div>
  </div>
</div>
`,pa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The refreshOptions
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods02.html"
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
      Use <code>multipleSelect('select').refreshOptions({ filter: false })</code>to refresh the options object.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Methods </label>

    <div class="col-sm-5">
      <button id="refreshOptions" class="btn btn-secondary">refreshOptions</button>
      <button id="setDarkMode" class="btn btn-secondary">Toggle Dark Mode</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width select1" data-test="select1">
        <option value="text1">text1</option>
        <option value="text2">text2</option>
        <option value="text3">text3</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Multiple Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width select2" data-test="select2">
        <option value="task1">Task 1</option>
        <option value="task2">Task 2</option>
        <option value="task3">Task 3</option>
      </select>
    </div>
  </div>
</div>
`,ca=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The setSelects/getSelects
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods03.html"
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
      Use <code>multipleSelect('select').setSelects([])</code>and <code>multipleSelect('select').getSelects()</code>to set selects and get
      selects.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Methods </label>

    <div class="col-sm-10">
      <button id="setSelectsBtn" class="btn btn-secondary">SetSelects</button>
      <button id="getSelectsBtn" class="btn btn-secondary">GetSelects</button>
      <button id="setSelectsBtn2" class="btn btn-secondary">SetSelects by 'text'</button>
      <button id="getSelectsBtn2" class="btn btn-secondary">GetSelects by 'text'</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

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
      The enable/disable
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods04.html"
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
      Use <code>multipleSelect('select').enable()</code>and <code>multipleSelect('select').disable()</code>to enable and disable select.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Methods </label>

    <div class="col-sm-10">
      <button id="enableBtn" class="btn btn-secondary">Enable</button>
      <button id="disableBtn" class="btn btn-secondary">Disable</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

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
      The open/close
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods05.html"
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
      Use <code>multipleSelect('select').open()</code>and <code>multipleSelect('select').close()</code>to open and close the select dropdown
      list.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Methods </label>

    <div class="col-sm-10">
      <button id="openBtn" class="btn btn-secondary">Open</button>
      <button id="closeBtn" class="btn btn-secondary">Close</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

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
      The check/uncheck
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods06.html"
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
      Methods: <code>multipleSelect('select').check(2)</code>and <code>multipleSelect('select').uncheck(2)</code>to check and uncheck a
      select option.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Methods </label>

    <div class="col-sm-10">
      <button id="checkBtn" class="btn btn-secondary">Check</button>
      <button id="uncheckBtn" class="btn btn-secondary">Uncheck</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Single Select </label>

    <div class="col-sm-10">
      <select data-test="select1">
        <option value="1">Value 1</option>
        <option value="2">Value 2</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Multiple Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select2">
        <option value="1" selected>Value 1</option>
        <option value="2">Value 2</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Group Select </label>

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
`,ha=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The checkAll/uncheckAll
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods07.html"
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
      Use <code>multipleSelect('select').checkAll()</code>and <code>multipleSelect('select').uncheckAll()</code>to check and uncheck all
      options.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Methods </label>

    <div class="col-sm-10">
      <button id="checkAllBtn" class="btn btn-secondary">Check All</button>
      <button id="uncheckAllBtn" class="btn btn-secondary">Uncheck All</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

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
    <label class="col-sm-2">Group Select </label>

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
      The checkInvert
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods08.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods08.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Methods: <code>multipleSelect('select').checkInvert()</code>to invert check all items.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Methods </label>

    <div class="col-sm-10">
      <button id="checkInvert" class="btn btn-secondary">Check Invert</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

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
    <label class="col-sm-2">Group Select </label>

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
`,fa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The focus/blur
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods09.html"
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
      Use <code>multipleSelect('select').focus()</code>and <code>multipleSelect('select').blur()</code>to focus and blur the select.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Methods </label>

    <div class="col-sm-10">
      <button id="focusBtn" class="btn btn-secondary">Focus</button>
      <button id="blurBtn" class="btn btn-secondary">Blur</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

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
`,ba=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The refresh
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods10.html"
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
      Use <code>multiple('select').refresh()</code>to refresh/reload the Multiple Select. If you're dynamically adding/removing option tags
      on the original select via AJAX or DOM manipulation methods, call refresh to reflect the changes.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Option text </label>
    <div class="col-sm-10">
      <input id="refreshInput" class="form-control" type="text" required="required" placeholder="Enter text" />
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Option attribute </label>
    <div class="col-sm-10">
      <label class="checkbox">
        <input id="refreshSelected" type="checkbox" />
        Selected
      </label>
      <label class="checkbox">
        <input id="refreshDisabled" type="checkbox" />
        Disabled
      </label>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"></label>
    <div class="col-sm-10">
      <button id="refreshAdd" class="btn btn-secondary">Add + Refresh</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Result Select </label>
    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="text1">text1</option>
        <option value="text2">text2</option>
        <option value="text3">text3</option>
      </select>
    </div>
  </div>
</div>
`,ga=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The destroy
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods11.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods11.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>multiple('select').destroy()</code>to destroy the select.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Methods </label>

    <div class="col-sm-10">
      <button id="destroyBtn" class="btn btn-danger">Destroy</button>
      <button id="buildBtn" class="btn btn-primary">Build</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

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
    <hr>
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
      ></iframe>
    </div>
  </div>
</div>
`,_a=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The getData
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods12.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods12.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>multipleSelect('getData')</code>to get the loaded data.
    </div>
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
`,Ea=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Placeholder
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options01.html"
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
      Use <code>placeholder</code>attribute or <code>placeholder: ''</code>option to set placeholder.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Via attribute </label>

    <div class="col-sm-10">
      <select id="select1" class="full-width" data-test="select1" multiple="multiple" placeholder="Here is the placeholder via attribute">
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
    <label class="col-sm-2">Via options </label>

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
`,ya=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Single Radio
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options02.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options02.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>singleRadio: true</code>to show the radio input.
    </div>
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
`,wa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Hide Select All
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options03.html"
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
      Use <code>selectAll: false</code>to hide select all.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Hide Select All </label>

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
`,Sa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Hide Optgroup Checkboxes
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options04.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options04.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>hideOptgroupCheckboxes: true</code>option to hide the optgroup checkboxes.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Group Select </label>

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
`,Aa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Custom Dropdown Width
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options05.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options05.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>dropWidth: 580</code>option to custom the dropdown width.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

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
`,Oa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Max Height
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options06.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options06.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>maxHeight: 140</code>option to custom the dropdown max height.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

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
      Max Height Unit
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options07.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options07.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>maxHeightUnit: 'row'</code>option to set the max height unit.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Max Rows </label>

    <div class="col-sm-10">
      <input id="number" type="number" value="5" min="1" max="10" />
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Single Select </label>

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
    <label class="col-sm-2">Multiple Select </label>

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
`,Ta=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Position
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options08.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options08.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>position: 'top'</code>to set the select dropdown in top position.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row" style="margin-top: 200px">
    <label class="col-sm-2">Basic Select </label>

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
      Display Values
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options09.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options09.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>displayValues: true</code>option to display selected values instead text.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

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
      Display Title
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options10.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options10.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>displayTitle: true</code>option to display title (for tooltip) of selected text.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

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
      Display Delimiter
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options11.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options11.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>displayDelimiter: ' | '</code>option to custom the display delimiter.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

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
      Minimum Count Selected
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options12.html"
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
      Use <code>minimumCountSelected: 8</code>option and the <code>%s of %s selected</code>will be shown only if more than 8 items where
      selected.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

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
      The Ellipsis
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options13.html"
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
      Use <code>ellipsis: true</code>option to display ... after selected options instead of <code>%s of %s selected</code>.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

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
      Is Open
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options14.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options14.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>isOpen: true</code>to open the dropdown by default.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

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
      Keep Open
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options15.html"
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
      Use <code>keepOpen: true</code>to keep the select dropdown always open.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

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
      Open On Hover
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options16.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options16.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>openOnHover: true</code>to open the select dropdown by hover instead of click.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

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
`,Ra=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Container
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options17.html"
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
      Use <code>container</code>option to solve the cut off problem for example parent node is <code>overflow: hidden</code>.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">No container </label>

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
    <label class="col-sm-2">With data-container </label>

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
    <label class="col-sm-2">With container option </label>

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
    <label class="col-sm-2">Body Container </label>

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
`,Pa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Filter
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options18.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options18.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>filter: true</code>to enable filter feature.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Single Select </label>

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
    <label class="col-sm-2">Single Group </label>

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
    <label class="col-sm-2">Basic Select </label>

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
    <label class="col-sm-2">Group Select </label>

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
`,Fa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Filter Only Optgroup
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options19.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options19.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>filterGroup: true</code>to filter optgroups only and not options.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Group Select </label>

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
`,Ha=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Filter Placeholder
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options20.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options20.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>filterPlaceholder: 'The filter placeholder'</code>to set the filter placeholder.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

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
`,Ba=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Filter Accept On Enter
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options21.html"
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
      Use <code>filterAcceptOnEnter: true</code>option to speed up keyboard use. Enter filter text and then hit
      <code>ENTER</code>or <code>SPACE</code>will auto click <code>select all</code>and close the dropdown.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Single Select </label>

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
    <label class="col-sm-2">Multiple Select </label>

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
`,Ga=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Filter By Data Length
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options22.html"
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
      Use <code>filterByDataLength: 10</code>option to auto enable filter when the data length is more than 10.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

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
    <label class="col-sm-2">Multiple Select </label>

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
    <label class="col-sm-2">Group Select </label>

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
    <label class="col-sm-2">Group Select2 </label>

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
`,Ua=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Custom Filter
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options23.html"
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
      Use <code>customFilter</code>to custom filter, in this case we filter by <code>startWith</code>.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-3 checkbox">
      <input type="checkbox" />
      Case Sensitive
    </label>

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
`,Ja=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Show Clear
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options24.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options24.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>showClear</code>to show the clear icon to uncheck all selected items but only when the select is filled with a selection.
    </div>
  </div>
</div>

<div class="show-clear-container">
  <div class="mb-3 row">
    <label class="col-sm-2">Single Select </label>

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
    <label class="col-sm-2">Group Single </label>

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
    <label class="col-sm-2">Basic Select </label>

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
    <label class="col-sm-2">Group Select (bigger size)</label>

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
`,ja=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Show OK Button
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options25.html"
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
      Use <code>showOkButton</code>to show the OK button at bottom of the list when using multiple selection to easily close the drop. A
      single select will not show the OK button.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Multiple Select </label>

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
    <label class="col-sm-2">Group Select </label>

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
    <label class="col-sm-2">Multiple Select with Filter </label>

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
`,za=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Styler / CSS Styler
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options26.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options26.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>styler</code>to custom the item style.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">CSS Styler </label>

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
    <label class="col-sm-2">Group Select </label>

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
`,Wa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Text Template
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options27.html"
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
      Use <code>textTemplate</code>to customize the text template and <code>renderOptionLabelAsHtml</code>to render selected labels as HTML.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-4">
      Enable/Disable <code>renderOptionLabelAsHtml</code>option
    </label>

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
    </div>
  </div>
</div>
`,Va=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Label Template
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options28.html"
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
      Use <code>labelTemplate</code>to custom the optgroup label template and <code>renderOptionLabelAsHtml</code>to render selected labels
      as HTML.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

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
`,qa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Auto-Adjust Drop Position
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options29.html"
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
      Use <code>autoAdjustDropPosition</code>to automatically adjust the drop position from available space (top, bottom).
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Basic Select </label>

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
    <label class="col-sm-2">Basic Select </label>

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
`,Ka=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Auto-Adjust Drop Height/Width
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options30.html"
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
      Use <code>autoAdjustDropWidthByTextSize</code>to automatically adjust the drop width by the largest option width from the found in the
      list. <br>
      Use <code>autoAdjustDropHeight</code>to automatically adjust the drop max height calculated from the available space.
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
    <label class="col-sm-3 text-end">Dropdown width </label>

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
`,Ya=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Use Select Option as Label
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options31.html"
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
      Use <code>useSelectOptionLabel</code>to display select option value as
      <code>&lt;option label=""&gt;&lt;/option&gt;</code>to display shorter text as the selected values in the parent select.
      <br>
      Use <code>useSelectOptionLabelToHtml</code>which is the same as "useSelectOptionLabel" but will also render html option values.
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
`,Xa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Sanitizer
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options32.html"
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
      Use <code>sanitizer</code>callback option to sanitize all html code and prevent cross-site scripting attack. We can easily configure
      it with external library like <a href="https://github.com/cure53/DOMPurify">DOMPurify</a>or a simple regular expression.
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
`,Qa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Classes
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options33.html"
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
      Use <code>classes</code>, <code>classPrefix</code>, <code>size</code>to define the class and size of select.
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
</div></div>
`,Za=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Show Search Clear
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options34.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options34.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>showSearchClear</code>to show the clear icon to empty the search filter input (you need to open the select dropdown to see
      the input filter).
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Single Select </label>

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
    <label class="col-sm-2">Single Group </label>

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
    <label class="col-sm-2">Basic Select </label>

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
    <label class="col-sm-2">Group Select </label>

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
`,tr=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Custom Diacritic Parser
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options35.html"
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
      Use <code>diacriticParser</code>callback option to remove diacritic signs (accents) from text while filtering items. For example
      searching with "Fév" or "Fev" will return "Février" in both cases
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row align-middle">
    <label class="col-sm-2 py-1 text-end">in/out parsing</label>
    <div class="col-sm-3">
      <input class="form-control in-log" readonly style="background-color: #f0f0f0" />
    </div>
    <div class="py-1 col-sm-1 w-35px">=&gt;</div>
    <div class="col-sm-3 text-start">
      <input class="form-control out-log" readonly style="background-color: #f0f0f0" />
    </div>
  </div>

  <hr>

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
`,er=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Infinite Scroll
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options36.html"
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
      Enabling <code>infiniteScroll</code>will automatically scroll back to the top whenever reaching the end of the list (scrolling through
      either the mouse and/or arrow down). Note that this is not to be confused with Virtual Scroll which itself is enabled by default
      whenever the list is bigger than 200 items (the last list select below does use Virtual Scroll)
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Short List (25)</label>

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
</div>
`,nr=`<div class="row">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Navigation Highlight
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options37.html"
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
      The <code>navigationHighlight</code>is enabled by default and is very similar to <code>tabIndex</code>, it listens to up/down arrows
      and mouse hovering. You can then click on Enter key to select the highlighted option without even losing your current focus.
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
    <label class="col-sm-2">Group Select </label>

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
`,or=`<div class="example38-container">
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
        Dark Mode requires <code>darkMode</code>option to be enabled, when that happens it will add <code>.ms-dark-mode</code>to the parent
        and drop elements. The dark theme is configured through CSS variables which you can also customize yourself. You can also toggle
        Dark Mode at any time dynamically via <code>refreshOptions()</code>
      </div>
    </div>
  </div>

  <div>
    <div class="mb-3 row">
      <label class="col-sm-2">Methods </label>

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
`,ir=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Label Id <small>(for accessibility)</small>
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options39.html"
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
      In order for the select to be accessible, it should be linked to a label, use <code>labelId</code>option to associate your label to
      the select button (the label must be created by yourself and linked via the <code>for</code>attribute). Using this option will link
      the <code>id</code>and <code>aria-labelledby</code>of the <code>.ms-choice</code>select button with your custom label.
    </div>
    <div class="demo-subtitle">Clicking the label will open the select dropdown.</div>
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
`,sr=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Pre-Filter Data
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options40.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options40.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>preFilter: predicate</code>to pre-filter the data collection before rendering the select dropdown in the UI.
    </div>
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
    <label class="col-sm-2">Group Select </label>

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
      <select multiple="multiple" class="full-width" data-test="select3" title="February, April are filtered out"></select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Group Select (from data)</label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select4" title="Q1 group is filtered out"></select>
    </div>
  </div>
</div>
`,lr=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Pre-Sort Data
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options41.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options41.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Use <code>preSort: comparer</code>to pre-sort the data collection before rendering the select dropdown in the UI.
    </div>
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
    <label class="col-sm-2">Group Select </label>

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
      <select multiple="multiple" class="full-width" data-test="select3"></select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Group Select (from data)</label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width" data-test="select4"></select>
    </div>
  </div>
</div>
`,ar=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Lazy Load Data
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options42.html"
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
      Use <code>&#123; lazyData: () => Promise &#125;</code>to lazy load data only after clicking and opening the select dropdown. Note that
      once the data is loaded, it no longer needs to be lazy loaded again and so re-opening the select dropdown will show instantly
      afterward. You can refresh the page, or click the button to retest the lazy loading. Also note that any pre-selected options will only
      show up after the data is fully loaded.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Server Delay (ms) </label>

    <div class="col-sm-10 d-flex align-items-center gap-2">
      <input id="serverdelay" type="number" value="1000" step="100" style="height: 34px; width: 100px;" />
      <button id="resetlazy" class="btn btn-outline-secondary btn-sm">Reset Lazy Load</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Basic Array </label>

    <div class="col-sm-10">
      <select id="basic" class="full-width" data-test="select1"></select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Data Array </label>

    <div class="col-sm-10">
      <select id="group" class="full-width" multiple data-test="select2"></select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Group Array </label>

    <div class="col-sm-10">
      <select id="group" class="full-width" multiple data-test="select3"></select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Filter &amp; OK button </label>

    <div class="col-sm-10">
      <select id="group" class="full-width" multiple data-test="select4"></select>
    </div>
  </div>
</div>
`,rr=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Close on Tab
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options43.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/options/options43.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
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
`;var Q="top",st="bottom",lt="right",Z="left",Dn="auto",Me=[Q,st,lt,Z],se="start",Ae="end",as="clippingParents",To="viewport",Ee="popper",rs="reference",vo=Me.reduce(function(n,t){return n.concat([t+"-"+se,t+"-"+Ae])},[]),xo=[].concat(Me,[Dn]).reduce(function(n,t){return n.concat([t,t+"-"+se,t+"-"+Ae])},[]),ps="beforeRead",cs="read",us="afterRead",ds="beforeMain",ms="main",hs="afterMain",vs="beforeWrite",fs="write",bs="afterWrite",gs=[ps,cs,us,ds,ms,hs,vs,fs,bs];function At(n){return n?(n.nodeName||"").toLowerCase():null}function at(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var t=n.ownerDocument;return t&&t.defaultView||window}return n}function le(n){var t=at(n).Element;return n instanceof t||n instanceof Element}function rt(n){var t=at(n).HTMLElement;return n instanceof t||n instanceof HTMLElement}function Co(n){if(typeof ShadowRoot>"u")return!1;var t=at(n).ShadowRoot;return n instanceof t||n instanceof ShadowRoot}function pr(n){var t=n.state;Object.keys(t.elements).forEach(function(e){var o=t.styles[e]||{},i=t.attributes[e]||{},s=t.elements[e];!rt(s)||!At(s)||(Object.assign(s.style,o),Object.keys(i).forEach(function(l){var a=i[l];a===!1?s.removeAttribute(l):s.setAttribute(l,a===!0?"":a)}))})}function cr(n){var t=n.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(o){var i=t.elements[o],s=t.attributes[o]||{},l=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:e[o]),a=l.reduce(function(c,p){return c[p]="",c},{});!rt(i)||!At(i)||(Object.assign(i.style,a),Object.keys(s).forEach(function(c){i.removeAttribute(c)}))})}}const Do={name:"applyStyles",enabled:!0,phase:"write",fn:pr,effect:cr,requires:["computeStyles"]};function wt(n){return n.split("-")[0]}var ie=Math.max,kn=Math.min,Oe=Math.round;function fo(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function _s(){return!/^((?!chrome|android).)*safari/i.test(fo())}function ke(n,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var o=n.getBoundingClientRect(),i=1,s=1;t&&rt(n)&&(i=n.offsetWidth>0&&Oe(o.width)/n.offsetWidth||1,s=n.offsetHeight>0&&Oe(o.height)/n.offsetHeight||1);var l=le(n)?at(n):window,a=l.visualViewport,c=!_s()&&e,p=(o.left+(c&&a?a.offsetLeft:0))/i,d=(o.top+(c&&a?a.offsetTop:0))/s,g=o.width/i,f=o.height/s;return{width:g,height:f,top:d,right:p+g,bottom:d+f,left:p,x:p,y:d}}function Mo(n){var t=ke(n),e=n.offsetWidth,o=n.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:n.offsetLeft,y:n.offsetTop,width:e,height:o}}function Es(n,t){var e=t.getRootNode&&t.getRootNode();if(n.contains(t))return!0;if(e&&Co(e)){var o=t;do{if(o&&n.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Ht(n){return at(n).getComputedStyle(n)}function ur(n){return["table","td","th"].indexOf(At(n))>=0}function qt(n){return((le(n)?n.ownerDocument:n.document)||window.document).documentElement}function Mn(n){return At(n)==="html"?n:n.assignedSlot||n.parentNode||(Co(n)?n.host:null)||qt(n)}function si(n){return!rt(n)||Ht(n).position==="fixed"?null:n.offsetParent}function dr(n){var t=/firefox/i.test(fo()),e=/Trident/i.test(fo());if(e&&rt(n)){var o=Ht(n);if(o.position==="fixed")return null}var i=Mn(n);for(Co(i)&&(i=i.host);rt(i)&&["html","body"].indexOf(At(i))<0;){var s=Ht(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function Qe(n){for(var t=at(n),e=si(n);e&&ur(e)&&Ht(e).position==="static";)e=si(e);return e&&(At(e)==="html"||At(e)==="body"&&Ht(e).position==="static")?t:e||dr(n)||t}function Lo(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function qe(n,t,e){return ie(n,kn(t,e))}function mr(n,t,e){var o=qe(n,t,e);return o>e?e:o}function ys(){return{top:0,right:0,bottom:0,left:0}}function ws(n){return Object.assign({},ys(),n)}function Ss(n,t){return t.reduce(function(e,o){return e[o]=n,e},{})}var hr=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,ws(typeof t!="number"?t:Ss(t,Me))};function vr(n){var t,e=n.state,o=n.name,i=n.options,s=e.elements.arrow,l=e.modifiersData.popperOffsets,a=wt(e.placement),c=Lo(a),p=[Z,lt].indexOf(a)>=0,d=p?"height":"width";if(!(!s||!l)){var g=hr(i.padding,e),f=Mo(s),b=c==="y"?Q:Z,O=c==="y"?st:lt,A=e.rects.reference[d]+e.rects.reference[c]-l[c]-e.rects.popper[d],k=l[c]-e.rects.reference[c],C=Qe(s),I=C?c==="y"?C.clientHeight||0:C.clientWidth||0:0,$=A/2-k/2,y=g[b],T=I-f[d]-g[O],D=I/2-f[d]/2+$,R=qe(y,D,T),U=c;e.modifiersData[o]=(t={},t[U]=R,t.centerOffset=R-D,t)}}function fr(n){var t=n.state,e=n.options,o=e.element,i=o===void 0?"[data-popper-arrow]":o;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||Es(t.elements.popper,i)&&(t.elements.arrow=i))}const As={name:"arrow",enabled:!0,phase:"main",fn:vr,effect:fr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Te(n){return n.split("-")[1]}var br={top:"auto",right:"auto",bottom:"auto",left:"auto"};function gr(n,t){var e=n.x,o=n.y,i=t.devicePixelRatio||1;return{x:Oe(e*i)/i||0,y:Oe(o*i)/i||0}}function li(n){var t,e=n.popper,o=n.popperRect,i=n.placement,s=n.variation,l=n.offsets,a=n.position,c=n.gpuAcceleration,p=n.adaptive,d=n.roundOffsets,g=n.isFixed,f=l.x,b=f===void 0?0:f,O=l.y,A=O===void 0?0:O,k=typeof d=="function"?d({x:b,y:A}):{x:b,y:A};b=k.x,A=k.y;var C=l.hasOwnProperty("x"),I=l.hasOwnProperty("y"),$=Z,y=Q,T=window;if(p){var D=Qe(e),R="clientHeight",U="clientWidth";if(D===at(e)&&(D=qt(e),Ht(D).position!=="static"&&a==="absolute"&&(R="scrollHeight",U="scrollWidth")),D=D,i===Q||(i===Z||i===lt)&&s===Ae){y=st;var G=g&&D===T&&T.visualViewport?T.visualViewport.height:D[R];A-=G-o.height,A*=c?1:-1}if(i===Z||(i===Q||i===st)&&s===Ae){$=lt;var B=g&&D===T&&T.visualViewport?T.visualViewport.width:D[U];b-=B-o.width,b*=c?1:-1}}var M=Object.assign({position:a},p&&br),K=d===!0?gr({x:b,y:A},at(e)):{x:b,y:A};if(b=K.x,A=K.y,c){var J;return Object.assign({},M,(J={},J[y]=I?"0":"",J[$]=C?"0":"",J.transform=(T.devicePixelRatio||1)<=1?"translate("+b+"px, "+A+"px)":"translate3d("+b+"px, "+A+"px, 0)",J))}return Object.assign({},M,(t={},t[y]=I?A+"px":"",t[$]=C?b+"px":"",t.transform="",t))}function _r(n){var t=n.state,e=n.options,o=e.gpuAcceleration,i=o===void 0?!0:o,s=e.adaptive,l=s===void 0?!0:s,a=e.roundOffsets,c=a===void 0?!0:a,p={placement:wt(t.placement),variation:Te(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,li(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,li(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const No={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:_r,data:{}};var cn={passive:!0};function Er(n){var t=n.state,e=n.instance,o=n.options,i=o.scroll,s=i===void 0?!0:i,l=o.resize,a=l===void 0?!0:l,c=at(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&p.forEach(function(d){d.addEventListener("scroll",e.update,cn)}),a&&c.addEventListener("resize",e.update,cn),function(){s&&p.forEach(function(d){d.removeEventListener("scroll",e.update,cn)}),a&&c.removeEventListener("resize",e.update,cn)}}const $o={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Er,data:{}};var yr={left:"right",right:"left",bottom:"top",top:"bottom"};function yn(n){return n.replace(/left|right|bottom|top/g,function(t){return yr[t]})}var wr={start:"end",end:"start"};function ai(n){return n.replace(/start|end/g,function(t){return wr[t]})}function Io(n){var t=at(n),e=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:e,scrollTop:o}}function Ro(n){return ke(qt(n)).left+Io(n).scrollLeft}function Sr(n,t){var e=at(n),o=qt(n),i=e.visualViewport,s=o.clientWidth,l=o.clientHeight,a=0,c=0;if(i){s=i.width,l=i.height;var p=_s();(p||!p&&t==="fixed")&&(a=i.offsetLeft,c=i.offsetTop)}return{width:s,height:l,x:a+Ro(n),y:c}}function Ar(n){var t,e=qt(n),o=Io(n),i=(t=n.ownerDocument)==null?void 0:t.body,s=ie(e.scrollWidth,e.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=ie(e.scrollHeight,e.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-o.scrollLeft+Ro(n),c=-o.scrollTop;return Ht(i||e).direction==="rtl"&&(a+=ie(e.clientWidth,i?i.clientWidth:0)-s),{width:s,height:l,x:a,y:c}}function Po(n){var t=Ht(n),e=t.overflow,o=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+i+o)}function Os(n){return["html","body","#document"].indexOf(At(n))>=0?n.ownerDocument.body:rt(n)&&Po(n)?n:Os(Mn(n))}function Ke(n,t){var e;t===void 0&&(t=[]);var o=Os(n),i=o===((e=n.ownerDocument)==null?void 0:e.body),s=at(o),l=i?[s].concat(s.visualViewport||[],Po(o)?o:[]):o,a=t.concat(l);return i?a:a.concat(Ke(Mn(l)))}function bo(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function Or(n,t){var e=ke(n,!1,t==="fixed");return e.top=e.top+n.clientTop,e.left=e.left+n.clientLeft,e.bottom=e.top+n.clientHeight,e.right=e.left+n.clientWidth,e.width=n.clientWidth,e.height=n.clientHeight,e.x=e.left,e.y=e.top,e}function ri(n,t,e){return t===To?bo(Sr(n,e)):le(t)?Or(t,e):bo(Ar(qt(n)))}function kr(n){var t=Ke(Mn(n)),e=["absolute","fixed"].indexOf(Ht(n).position)>=0,o=e&&rt(n)?Qe(n):n;return le(o)?t.filter(function(i){return le(i)&&Es(i,o)&&At(i)!=="body"}):[]}function Tr(n,t,e,o){var i=t==="clippingParents"?kr(n):[].concat(t),s=[].concat(i,[e]),l=s[0],a=s.reduce(function(c,p){var d=ri(n,p,o);return c.top=ie(d.top,c.top),c.right=kn(d.right,c.right),c.bottom=kn(d.bottom,c.bottom),c.left=ie(d.left,c.left),c},ri(n,l,o));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ks(n){var t=n.reference,e=n.element,o=n.placement,i=o?wt(o):null,s=o?Te(o):null,l=t.x+t.width/2-e.width/2,a=t.y+t.height/2-e.height/2,c;switch(i){case Q:c={x:l,y:t.y-e.height};break;case st:c={x:l,y:t.y+t.height};break;case lt:c={x:t.x+t.width,y:a};break;case Z:c={x:t.x-e.width,y:a};break;default:c={x:t.x,y:t.y}}var p=i?Lo(i):null;if(p!=null){var d=p==="y"?"height":"width";switch(s){case se:c[p]=c[p]-(t[d]/2-e[d]/2);break;case Ae:c[p]=c[p]+(t[d]/2-e[d]/2);break}}return c}function xe(n,t){t===void 0&&(t={});var e=t,o=e.placement,i=o===void 0?n.placement:o,s=e.strategy,l=s===void 0?n.strategy:s,a=e.boundary,c=a===void 0?as:a,p=e.rootBoundary,d=p===void 0?To:p,g=e.elementContext,f=g===void 0?Ee:g,b=e.altBoundary,O=b===void 0?!1:b,A=e.padding,k=A===void 0?0:A,C=ws(typeof k!="number"?k:Ss(k,Me)),I=f===Ee?rs:Ee,$=n.rects.popper,y=n.elements[O?I:f],T=Tr(le(y)?y:y.contextElement||qt(n.elements.popper),c,d,l),D=ke(n.elements.reference),R=ks({reference:D,element:$,placement:i}),U=bo(Object.assign({},$,R)),G=f===Ee?U:D,B={top:T.top-G.top+C.top,bottom:G.bottom-T.bottom+C.bottom,left:T.left-G.left+C.left,right:G.right-T.right+C.right},M=n.modifiersData.offset;if(f===Ee&&M){var K=M[i];Object.keys(B).forEach(function(J){var mt=[lt,st].indexOf(J)>=0?1:-1,Ot=[Q,st].indexOf(J)>=0?"y":"x";B[J]+=K[Ot]*mt})}return B}function xr(n,t){t===void 0&&(t={});var e=t,o=e.placement,i=e.boundary,s=e.rootBoundary,l=e.padding,a=e.flipVariations,c=e.allowedAutoPlacements,p=c===void 0?xo:c,d=Te(o),g=d?a?vo:vo.filter(function(O){return Te(O)===d}):Me,f=g.filter(function(O){return p.indexOf(O)>=0});f.length===0&&(f=g);var b=f.reduce(function(O,A){return O[A]=xe(n,{placement:A,boundary:i,rootBoundary:s,padding:l})[wt(A)],O},{});return Object.keys(b).sort(function(O,A){return b[O]-b[A]})}function Cr(n){if(wt(n)===Dn)return[];var t=yn(n);return[ai(n),t,ai(t)]}function Dr(n){var t=n.state,e=n.options,o=n.name;if(!t.modifiersData[o]._skip){for(var i=e.mainAxis,s=i===void 0?!0:i,l=e.altAxis,a=l===void 0?!0:l,c=e.fallbackPlacements,p=e.padding,d=e.boundary,g=e.rootBoundary,f=e.altBoundary,b=e.flipVariations,O=b===void 0?!0:b,A=e.allowedAutoPlacements,k=t.options.placement,C=wt(k),I=C===k,$=c||(I||!O?[yn(k)]:Cr(k)),y=[k].concat($).reduce(function(Tt,L){return Tt.concat(wt(L)===Dn?xr(t,{placement:L,boundary:d,rootBoundary:g,padding:p,flipVariations:O,allowedAutoPlacements:A}):L)},[]),T=t.rects.reference,D=t.rects.popper,R=new Map,U=!0,G=y[0],B=0;B<y.length;B++){var M=y[B],K=wt(M),J=Te(M)===se,mt=[Q,st].indexOf(K)>=0,Ot=mt?"width":"height",Y=xe(t,{placement:M,boundary:d,rootBoundary:g,altBoundary:f,padding:p}),it=mt?J?lt:Z:J?st:Q;T[Ot]>D[Ot]&&(it=yn(it));var Xt=yn(it),kt=[];if(s&&kt.push(Y[K]<=0),a&&kt.push(Y[it]<=0,Y[Xt]<=0),kt.every(function(Tt){return Tt})){G=M,U=!1;break}R.set(M,kt)}if(U)for(var Qt=O?3:1,F=function(L){var ht=y.find(function(Ut){var _t=R.get(Ut);if(_t)return _t.slice(0,L).every(function(Zt){return Zt})});if(ht)return G=ht,"break"},Gt=Qt;Gt>0;Gt--){var H=F(Gt);if(H==="break")break}t.placement!==G&&(t.modifiersData[o]._skip=!0,t.placement=G,t.reset=!0)}}const Ts={name:"flip",enabled:!0,phase:"main",fn:Dr,requiresIfExists:["offset"],data:{_skip:!1}};function pi(n,t,e){return e===void 0&&(e={x:0,y:0}),{top:n.top-t.height-e.y,right:n.right-t.width+e.x,bottom:n.bottom-t.height+e.y,left:n.left-t.width-e.x}}function ci(n){return[Q,lt,st,Z].some(function(t){return n[t]>=0})}function Mr(n){var t=n.state,e=n.name,o=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,l=xe(t,{elementContext:"reference"}),a=xe(t,{altBoundary:!0}),c=pi(l,o),p=pi(a,i,s),d=ci(c),g=ci(p);t.modifiersData[e]={referenceClippingOffsets:c,popperEscapeOffsets:p,isReferenceHidden:d,hasPopperEscaped:g},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":g})}const xs={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Mr};function Lr(n,t,e){var o=wt(n),i=[Z,Q].indexOf(o)>=0?-1:1,s=typeof e=="function"?e(Object.assign({},t,{placement:n})):e,l=s[0],a=s[1];return l=l||0,a=(a||0)*i,[Z,lt].indexOf(o)>=0?{x:a,y:l}:{x:l,y:a}}function Nr(n){var t=n.state,e=n.options,o=n.name,i=e.offset,s=i===void 0?[0,0]:i,l=xo.reduce(function(d,g){return d[g]=Lr(g,t.rects,s),d},{}),a=l[t.placement],c=a.x,p=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=p),t.modifiersData[o]=l}const Cs={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Nr};function $r(n){var t=n.state,e=n.name;t.modifiersData[e]=ks({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const Fo={name:"popperOffsets",enabled:!0,phase:"read",fn:$r,data:{}};function Ir(n){return n==="x"?"y":"x"}function Rr(n){var t=n.state,e=n.options,o=n.name,i=e.mainAxis,s=i===void 0?!0:i,l=e.altAxis,a=l===void 0?!1:l,c=e.boundary,p=e.rootBoundary,d=e.altBoundary,g=e.padding,f=e.tether,b=f===void 0?!0:f,O=e.tetherOffset,A=O===void 0?0:O,k=xe(t,{boundary:c,rootBoundary:p,padding:g,altBoundary:d}),C=wt(t.placement),I=Te(t.placement),$=!I,y=Lo(C),T=Ir(y),D=t.modifiersData.popperOffsets,R=t.rects.reference,U=t.rects.popper,G=typeof A=="function"?A(Object.assign({},t.rects,{placement:t.placement})):A,B=typeof G=="number"?{mainAxis:G,altAxis:G}:Object.assign({mainAxis:0,altAxis:0},G),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,K={x:0,y:0};if(D){if(s){var J,mt=y==="y"?Q:Z,Ot=y==="y"?st:lt,Y=y==="y"?"height":"width",it=D[y],Xt=it+k[mt],kt=it-k[Ot],Qt=b?-U[Y]/2:0,F=I===se?R[Y]:U[Y],Gt=I===se?-U[Y]:-R[Y],H=t.elements.arrow,Tt=b&&H?Mo(H):{width:0,height:0},L=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ys(),ht=L[mt],Ut=L[Ot],_t=qe(0,R[Y],Tt[Y]),Zt=$?R[Y]/2-Qt-_t-ht-B.mainAxis:F-_t-ht-B.mainAxis,on=$?-R[Y]/2+Qt+_t+Ut+B.mainAxis:Gt+_t+Ut+B.mainAxis,pe=t.elements.arrow&&Qe(t.elements.arrow),Jt=pe?y==="y"?pe.clientTop||0:pe.clientLeft||0:0,te=(J=M==null?void 0:M[y])!=null?J:0,xt=it+Zt-te-Jt,Ie=it+on-te,ce=qe(b?kn(Xt,xt):Xt,it,b?ie(kt,Ie):kt);D[y]=ce,K[y]=ce-it}if(a){var Ct,ue=y==="x"?Q:Z,de=y==="x"?st:lt,Et=D[T],ee=T==="y"?"height":"width",sn=Et+k[ue],me=Et-k[de],Dt=[Q,Z].indexOf(C)!==-1,Mt=(Ct=M==null?void 0:M[T])!=null?Ct:0,Lt=Dt?sn:Et-R[ee]-U[ee]-Mt+B.altAxis,Re=Dt?Et+R[ee]+U[ee]-Mt-B.altAxis:me,Pe=b&&Dt?mr(Lt,Et,Re):qe(b?Lt:sn,Et,b?Re:me);D[T]=Pe,K[T]=Pe-Et}t.modifiersData[o]=K}}const Ds={name:"preventOverflow",enabled:!0,phase:"main",fn:Rr,requiresIfExists:["offset"]};function Pr(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function Fr(n){return n===at(n)||!rt(n)?Io(n):Pr(n)}function Hr(n){var t=n.getBoundingClientRect(),e=Oe(t.width)/n.offsetWidth||1,o=Oe(t.height)/n.offsetHeight||1;return e!==1||o!==1}function Br(n,t,e){e===void 0&&(e=!1);var o=rt(t),i=rt(t)&&Hr(t),s=qt(t),l=ke(n,i,e),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(o||!o&&!e)&&((At(t)!=="body"||Po(s))&&(a=Fr(t)),rt(t)?(c=ke(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):s&&(c.x=Ro(s))),{x:l.left+a.scrollLeft-c.x,y:l.top+a.scrollTop-c.y,width:l.width,height:l.height}}function Gr(n){var t=new Map,e=new Set,o=[];n.forEach(function(s){t.set(s.name,s)});function i(s){e.add(s.name);var l=[].concat(s.requires||[],s.requiresIfExists||[]);l.forEach(function(a){if(!e.has(a)){var c=t.get(a);c&&i(c)}}),o.push(s)}return n.forEach(function(s){e.has(s.name)||i(s)}),o}function Ur(n){var t=Gr(n);return gs.reduce(function(e,o){return e.concat(t.filter(function(i){return i.phase===o}))},[])}function Jr(n){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(n())})})),t}}function jr(n){var t=n.reduce(function(e,o){var i=e[o.name];return e[o.name]=i?Object.assign({},i,o,{options:Object.assign({},i.options,o.options),data:Object.assign({},i.data,o.data)}):o,e},{});return Object.keys(t).map(function(e){return t[e]})}var ui={placement:"bottom",modifiers:[],strategy:"absolute"};function di(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Ln(n){n===void 0&&(n={});var t=n,e=t.defaultModifiers,o=e===void 0?[]:e,i=t.defaultOptions,s=i===void 0?ui:i;return function(a,c,p){p===void 0&&(p=s);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},ui,s),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},g=[],f=!1,b={state:d,setOptions:function(C){var I=typeof C=="function"?C(d.options):C;A(),d.options=Object.assign({},s,d.options,I),d.scrollParents={reference:le(a)?Ke(a):a.contextElement?Ke(a.contextElement):[],popper:Ke(c)};var $=Ur(jr([].concat(o,d.options.modifiers)));return d.orderedModifiers=$.filter(function(y){return y.enabled}),O(),b.update()},forceUpdate:function(){if(!f){var C=d.elements,I=C.reference,$=C.popper;if(di(I,$)){d.rects={reference:Br(I,Qe($),d.options.strategy==="fixed"),popper:Mo($)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(B){return d.modifiersData[B.name]=Object.assign({},B.data)});for(var y=0;y<d.orderedModifiers.length;y++){if(d.reset===!0){d.reset=!1,y=-1;continue}var T=d.orderedModifiers[y],D=T.fn,R=T.options,U=R===void 0?{}:R,G=T.name;typeof D=="function"&&(d=D({state:d,options:U,name:G,instance:b})||d)}}}},update:Jr(function(){return new Promise(function(k){b.forceUpdate(),k(d)})}),destroy:function(){A(),f=!0}};if(!di(a,c))return b;b.setOptions(p).then(function(k){!f&&p.onFirstUpdate&&p.onFirstUpdate(k)});function O(){d.orderedModifiers.forEach(function(k){var C=k.name,I=k.options,$=I===void 0?{}:I,y=k.effect;if(typeof y=="function"){var T=y({state:d,name:C,instance:b,options:$}),D=function(){};g.push(T||D)}})}function A(){g.forEach(function(k){return k()}),g=[]}return b}}var zr=Ln(),Wr=[$o,Fo,No,Do],Vr=Ln({defaultModifiers:Wr}),qr=[$o,Fo,No,Do,Cs,Ts,Ds,As,xs],Ho=Ln({defaultModifiers:qr});const Ms=Object.freeze(Object.defineProperty({__proto__:null,afterMain:hs,afterRead:us,afterWrite:bs,applyStyles:Do,arrow:As,auto:Dn,basePlacements:Me,beforeMain:ds,beforeRead:ps,beforeWrite:vs,bottom:st,clippingParents:as,computeStyles:No,createPopper:Ho,createPopperBase:zr,createPopperLite:Vr,detectOverflow:xe,end:Ae,eventListeners:$o,flip:Ts,hide:xs,left:Z,main:ms,modifierPhases:gs,offset:Cs,placements:xo,popper:Ee,popperGenerator:Ln,popperOffsets:Fo,preventOverflow:Ds,read:cs,reference:rs,right:lt,start:se,top:Q,variationPlacements:vo,viewport:To,write:fs},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.6 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const jt=new Map,jn={set(n,t,e){jt.has(n)||jt.set(n,new Map);const o=jt.get(n);if(!o.has(t)&&o.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`);return}o.set(t,e)},get(n,t){return jt.has(n)&&jt.get(n).get(t)||null},remove(n,t){if(!jt.has(n))return;const e=jt.get(n);e.delete(t),e.size===0&&jt.delete(n)}},Kr=1e6,Yr=1e3,go="transitionend",Ls=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),n),Xr=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),Qr=n=>{do n+=Math.floor(Math.random()*Kr);while(document.getElementById(n));return n},Zr=n=>{if(!n)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(n);const o=Number.parseFloat(t),i=Number.parseFloat(e);return!o&&!i?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*Yr)},Ns=n=>{n.dispatchEvent(new Event(go))},Pt=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),zt=n=>Pt(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(Ls(n)):null,Le=n=>{if(!Pt(n)||n.getClientRects().length===0)return!1;const t=getComputedStyle(n).getPropertyValue("visibility")==="visible",e=n.closest("details:not([open])");if(!e)return t;if(e!==n){const o=n.closest("summary");if(o&&o.parentNode!==e||o===null)return!1}return t},Wt=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",$s=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const t=n.getRootNode();return t instanceof ShadowRoot?t:null}return n instanceof ShadowRoot?n:n.parentNode?$s(n.parentNode):null},Tn=()=>{},Ze=n=>{n.offsetHeight},Is=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,zn=[],tp=n=>{document.readyState==="loading"?(zn.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of zn)t()}),zn.push(n)):n()},pt=()=>document.documentElement.dir==="rtl",dt=n=>{tp(()=>{const t=Is();if(t){const e=n.NAME,o=t.fn[e];t.fn[e]=n.jQueryInterface,t.fn[e].Constructor=n,t.fn[e].noConflict=()=>(t.fn[e]=o,n.jQueryInterface)}})},ot=(n,t=[],e=n)=>typeof n=="function"?n.call(...t):e,Rs=(n,t,e=!0)=>{if(!e){ot(n);return}const i=Zr(t)+5;let s=!1;const l=({target:a})=>{a===t&&(s=!0,t.removeEventListener(go,l),ot(n))};t.addEventListener(go,l),setTimeout(()=>{s||Ns(t)},i)},Bo=(n,t,e,o)=>{const i=n.length;let s=n.indexOf(t);return s===-1?!e&&o?n[i-1]:n[0]:(s+=e?1:-1,o&&(s=(s+i)%i),n[Math.max(0,Math.min(s,i-1))])},ep=/[^.]*(?=\..*)\.|.*/,np=/\..*/,op=/::\d+$/,Wn={};let mi=1;const Ps={mouseenter:"mouseover",mouseleave:"mouseout"},ip=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Fs(n,t){return t&&`${t}::${mi++}`||n.uidEvent||mi++}function Hs(n){const t=Fs(n);return n.uidEvent=t,Wn[t]=Wn[t]||{},Wn[t]}function sp(n,t){return function e(o){return Go(o,{delegateTarget:n}),e.oneOff&&h.off(n,o.type,t),t.apply(n,[o])}}function lp(n,t,e){return function o(i){const s=n.querySelectorAll(t);for(let{target:l}=i;l&&l!==this;l=l.parentNode)for(const a of s)if(a===l)return Go(i,{delegateTarget:l}),o.oneOff&&h.off(n,i.type,t,e),e.apply(l,[i])}}function Bs(n,t,e=null){return Object.values(n).find(o=>o.callable===t&&o.delegationSelector===e)}function Gs(n,t,e){const o=typeof t=="string",i=o?e:t||e;let s=Us(n);return ip.has(s)||(s=n),[o,i,s]}function hi(n,t,e,o,i){if(typeof t!="string"||!n)return;let[s,l,a]=Gs(t,e,o);t in Ps&&(l=(O=>function(A){if(!A.relatedTarget||A.relatedTarget!==A.delegateTarget&&!A.delegateTarget.contains(A.relatedTarget))return O.call(this,A)})(l));const c=Hs(n),p=c[a]||(c[a]={}),d=Bs(p,l,s?e:null);if(d){d.oneOff=d.oneOff&&i;return}const g=Fs(l,t.replace(ep,"")),f=s?lp(n,e,l):sp(n,l);f.delegationSelector=s?e:null,f.callable=l,f.oneOff=i,f.uidEvent=g,p[g]=f,n.addEventListener(a,f,s)}function _o(n,t,e,o,i){const s=Bs(t[e],o,i);s&&(n.removeEventListener(e,s,!!i),delete t[e][s.uidEvent])}function ap(n,t,e,o){const i=t[e]||{};for(const[s,l]of Object.entries(i))s.includes(o)&&_o(n,t,e,l.callable,l.delegationSelector)}function Us(n){return n=n.replace(np,""),Ps[n]||n}const h={on(n,t,e,o){hi(n,t,e,o,!1)},one(n,t,e,o){hi(n,t,e,o,!0)},off(n,t,e,o){if(typeof t!="string"||!n)return;const[i,s,l]=Gs(t,e,o),a=l!==t,c=Hs(n),p=c[l]||{},d=t.startsWith(".");if(typeof s<"u"){if(!Object.keys(p).length)return;_o(n,c,l,s,i?e:null);return}if(d)for(const g of Object.keys(c))ap(n,c,g,t.slice(1));for(const[g,f]of Object.entries(p)){const b=g.replace(op,"");(!a||t.includes(b))&&_o(n,c,l,f.callable,f.delegationSelector)}},trigger(n,t,e){if(typeof t!="string"||!n)return null;const o=Is(),i=Us(t),s=t!==i;let l=null,a=!0,c=!0,p=!1;s&&o&&(l=o.Event(t,e),o(n).trigger(l),a=!l.isPropagationStopped(),c=!l.isImmediatePropagationStopped(),p=l.isDefaultPrevented());const d=Go(new Event(t,{bubbles:a,cancelable:!0}),e);return p&&d.preventDefault(),c&&n.dispatchEvent(d),d.defaultPrevented&&l&&l.preventDefault(),d}};function Go(n,t={}){for(const[e,o]of Object.entries(t))try{n[e]=o}catch{Object.defineProperty(n,e,{configurable:!0,get(){return o}})}return n}function vi(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function Vn(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const Ft={setDataAttribute(n,t,e){n.setAttribute(`data-bs-${Vn(t)}`,e)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${Vn(t)}`)},getDataAttributes(n){if(!n)return{};const t={},e=Object.keys(n.dataset).filter(o=>o.startsWith("bs")&&!o.startsWith("bsConfig"));for(const o of e){let i=o.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1),t[i]=vi(n.dataset[o])}return t},getDataAttribute(n,t){return vi(n.getAttribute(`data-bs-${Vn(t)}`))}};class tn{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const o=Pt(e)?Ft.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof o=="object"?o:{},...Pt(e)?Ft.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[o,i]of Object.entries(e)){const s=t[o],l=Pt(s)?"element":Xr(s);if(!new RegExp(i).test(l))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${o}" provided type "${l}" but expected type "${i}".`)}}}const rp="5.3.6";class gt extends tn{constructor(t,e){super(),t=zt(t),t&&(this._element=t,this._config=this._getConfig(e),jn.set(this._element,this.constructor.DATA_KEY,this))}dispose(){jn.remove(this._element,this.constructor.DATA_KEY),h.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,o=!0){Rs(t,e,o)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return jn.get(zt(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return rp}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const qn=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let e=n.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?e.trim():null}return t?t.split(",").map(e=>Ls(e)).join(","):null},S={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(e=>e.matches(t))},parents(n,t){const e=[];let o=n.parentNode.closest(t);for(;o;)e.push(o),o=o.parentNode.closest(t);return e},prev(n,t){let e=n.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(n,t){let e=n.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(e=>!Wt(e)&&Le(e))},getSelectorFromElement(n){const t=qn(n);return t&&S.findOne(t)?t:null},getElementFromSelector(n){const t=qn(n);return t?S.findOne(t):null},getMultipleElementsFromSelector(n){const t=qn(n);return t?S.find(t):[]}},Nn=(n,t="hide")=>{const e=`click.dismiss${n.EVENT_KEY}`,o=n.NAME;h.on(document,e,`[data-bs-dismiss="${o}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),Wt(this))return;const s=S.getElementFromSelector(this)||this.closest(`.${o}`);n.getOrCreateInstance(s)[t]()})},pp="alert",cp="bs.alert",Js=`.${cp}`,up=`close${Js}`,dp=`closed${Js}`,mp="fade",hp="show";class $n extends gt{static get NAME(){return pp}close(){if(h.trigger(this._element,up).defaultPrevented)return;this._element.classList.remove(hp);const e=this._element.classList.contains(mp);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),h.trigger(this._element,dp),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=$n.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Nn($n,"close");dt($n);const vp="button",fp="bs.button",bp=`.${fp}`,gp=".data-api",_p="active",fi='[data-bs-toggle="button"]',Ep=`click${bp}${gp}`;class In extends gt{static get NAME(){return vp}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(_p))}static jQueryInterface(t){return this.each(function(){const e=In.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}h.on(document,Ep,fi,n=>{n.preventDefault();const t=n.target.closest(fi);In.getOrCreateInstance(t).toggle()});dt(In);const yp="swipe",Ne=".bs.swipe",wp=`touchstart${Ne}`,Sp=`touchmove${Ne}`,Ap=`touchend${Ne}`,Op=`pointerdown${Ne}`,kp=`pointerup${Ne}`,Tp="touch",xp="pen",Cp="pointer-event",Dp=40,Mp={endCallback:null,leftCallback:null,rightCallback:null},Lp={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class xn extends tn{constructor(t,e){super(),this._element=t,!(!t||!xn.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Mp}static get DefaultType(){return Lp}static get NAME(){return yp}dispose(){h.off(this._element,Ne)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),ot(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=Dp)return;const e=t/this._deltaX;this._deltaX=0,e&&ot(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(h.on(this._element,Op,t=>this._start(t)),h.on(this._element,kp,t=>this._end(t)),this._element.classList.add(Cp)):(h.on(this._element,wp,t=>this._start(t)),h.on(this._element,Sp,t=>this._move(t)),h.on(this._element,Ap,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===xp||t.pointerType===Tp)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Np="carousel",$p="bs.carousel",Kt=`.${$p}`,js=".data-api",Ip="ArrowLeft",Rp="ArrowRight",Pp=500,Be="next",be="prev",ye="left",wn="right",Fp=`slide${Kt}`,Kn=`slid${Kt}`,Hp=`keydown${Kt}`,Bp=`mouseenter${Kt}`,Gp=`mouseleave${Kt}`,Up=`dragstart${Kt}`,Jp=`load${Kt}${js}`,jp=`click${Kt}${js}`,zs="carousel",un="active",zp="slide",Wp="carousel-item-end",Vp="carousel-item-start",qp="carousel-item-next",Kp="carousel-item-prev",Ws=".active",Vs=".carousel-item",Yp=Ws+Vs,Xp=".carousel-item img",Qp=".carousel-indicators",Zp="[data-bs-slide], [data-bs-slide-to]",tc='[data-bs-ride="carousel"]',ec={[Ip]:wn,[Rp]:ye},nc={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},oc={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class en extends gt{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=S.findOne(Qp,this._element),this._addEventListeners(),this._config.ride===zs&&this.cycle()}static get Default(){return nc}static get DefaultType(){return oc}static get NAME(){return Np}next(){this._slide(Be)}nextWhenVisible(){!document.hidden&&Le(this._element)&&this.next()}prev(){this._slide(be)}pause(){this._isSliding&&Ns(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){h.one(this._element,Kn,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){h.one(this._element,Kn,()=>this.to(t));return}const o=this._getItemIndex(this._getActive());if(o===t)return;const i=t>o?Be:be;this._slide(i,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&h.on(this._element,Hp,t=>this._keydown(t)),this._config.pause==="hover"&&(h.on(this._element,Bp,()=>this.pause()),h.on(this._element,Gp,()=>this._maybeEnableCycle())),this._config.touch&&xn.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const o of S.find(Xp,this._element))h.on(o,Up,i=>i.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(ye)),rightCallback:()=>this._slide(this._directionToOrder(wn)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Pp+this._config.interval))}};this._swipeHelper=new xn(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=ec[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=S.findOne(Ws,this._indicatorsElement);e.classList.remove(un),e.removeAttribute("aria-current");const o=S.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);o&&(o.classList.add(un),o.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const o=this._getActive(),i=t===Be,s=e||Bo(this._getItems(),o,i,this._config.wrap);if(s===o)return;const l=this._getItemIndex(s),a=b=>h.trigger(this._element,b,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(o),to:l});if(a(Fp).defaultPrevented||!o||!s)return;const p=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(l),this._activeElement=s;const d=i?Vp:Wp,g=i?qp:Kp;s.classList.add(g),Ze(s),o.classList.add(d),s.classList.add(d);const f=()=>{s.classList.remove(d,g),s.classList.add(un),o.classList.remove(un,g,d),this._isSliding=!1,a(Kn)};this._queueCallback(f,o,this._isAnimated()),p&&this.cycle()}_isAnimated(){return this._element.classList.contains(zp)}_getActive(){return S.findOne(Yp,this._element)}_getItems(){return S.find(Vs,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return pt()?t===ye?be:Be:t===ye?Be:be}_orderToDirection(t){return pt()?t===be?ye:wn:t===be?wn:ye}static jQueryInterface(t){return this.each(function(){const e=en.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(document,jp,Zp,function(n){const t=S.getElementFromSelector(this);if(!t||!t.classList.contains(zs))return;n.preventDefault();const e=en.getOrCreateInstance(t),o=this.getAttribute("data-bs-slide-to");if(o){e.to(o),e._maybeEnableCycle();return}if(Ft.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});h.on(window,Jp,()=>{const n=S.find(tc);for(const t of n)en.getOrCreateInstance(t)});dt(en);const ic="collapse",sc="bs.collapse",nn=`.${sc}`,lc=".data-api",ac=`show${nn}`,rc=`shown${nn}`,pc=`hide${nn}`,cc=`hidden${nn}`,uc=`click${nn}${lc}`,Yn="show",Se="collapse",dn="collapsing",dc="collapsed",mc=`:scope .${Se} .${Se}`,hc="collapse-horizontal",vc="width",fc="height",bc=".collapse.show, .collapse.collapsing",Eo='[data-bs-toggle="collapse"]',gc={parent:null,toggle:!0},_c={parent:"(null|element)",toggle:"boolean"};class Xe extends gt{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const o=S.find(Eo);for(const i of o){const s=S.getSelectorFromElement(i),l=S.find(s).filter(a=>a===this._element);s!==null&&l.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return gc}static get DefaultType(){return _c}static get NAME(){return ic}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(bc).filter(a=>a!==this._element).map(a=>Xe.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||h.trigger(this._element,ac).defaultPrevented)return;for(const a of t)a.hide();const o=this._getDimension();this._element.classList.remove(Se),this._element.classList.add(dn),this._element.style[o]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(dn),this._element.classList.add(Se,Yn),this._element.style[o]="",h.trigger(this._element,rc)},l=`scroll${o[0].toUpperCase()+o.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[o]=`${this._element[l]}px`}hide(){if(this._isTransitioning||!this._isShown()||h.trigger(this._element,pc).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,Ze(this._element),this._element.classList.add(dn),this._element.classList.remove(Se,Yn);for(const i of this._triggerArray){const s=S.getElementFromSelector(i);s&&!this._isShown(s)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(dn),this._element.classList.add(Se),h.trigger(this._element,cc)};this._element.style[e]="",this._queueCallback(o,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Yn)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=zt(t.parent),t}_getDimension(){return this._element.classList.contains(hc)?vc:fc}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(Eo);for(const e of t){const o=S.getElementFromSelector(e);o&&this._addAriaAndCollapsedClass([e],this._isShown(o))}}_getFirstLevelChildren(t){const e=S.find(mc,this._config.parent);return S.find(t,this._config.parent).filter(o=>!e.includes(o))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const o of t)o.classList.toggle(dc,!e),o.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const o=Xe.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof o[t]>"u")throw new TypeError(`No method named "${t}"`);o[t]()}})}}h.on(document,uc,Eo,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const t of S.getMultipleElementsFromSelector(this))Xe.getOrCreateInstance(t,{toggle:!1}).toggle()});dt(Xe);const bi="dropdown",Ec="bs.dropdown",ae=`.${Ec}`,Uo=".data-api",yc="Escape",gi="Tab",wc="ArrowUp",_i="ArrowDown",Sc=2,Ac=`hide${ae}`,Oc=`hidden${ae}`,kc=`show${ae}`,Tc=`shown${ae}`,qs=`click${ae}${Uo}`,Ks=`keydown${ae}${Uo}`,xc=`keyup${ae}${Uo}`,we="show",Cc="dropup",Dc="dropend",Mc="dropstart",Lc="dropup-center",Nc="dropdown-center",ne='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',$c=`${ne}.${we}`,Sn=".dropdown-menu",Ic=".navbar",Rc=".navbar-nav",Pc=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Fc=pt()?"top-end":"top-start",Hc=pt()?"top-start":"top-end",Bc=pt()?"bottom-end":"bottom-start",Gc=pt()?"bottom-start":"bottom-end",Uc=pt()?"left-start":"right-start",Jc=pt()?"right-start":"left-start",jc="top",zc="bottom",Wc={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Vc={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class St extends gt{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=S.next(this._element,Sn)[0]||S.prev(this._element,Sn)[0]||S.findOne(Sn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Wc}static get DefaultType(){return Vc}static get NAME(){return bi}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Wt(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!h.trigger(this._element,kc,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Rc))for(const o of[].concat(...document.body.children))h.on(o,"mouseover",Tn);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(we),this._element.classList.add(we),h.trigger(this._element,Tc,t)}}hide(){if(Wt(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!h.trigger(this._element,Ac,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))h.off(o,"mouseover",Tn);this._popper&&this._popper.destroy(),this._menu.classList.remove(we),this._element.classList.remove(we),this._element.setAttribute("aria-expanded","false"),Ft.removeDataAttribute(this._menu,"popper"),h.trigger(this._element,Oc,t),this._element.focus()}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!Pt(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${bi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof Ms>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let t=this._element;this._config.reference==="parent"?t=this._parent:Pt(this._config.reference)?t=zt(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=Ho(t,this._menu,e)}_isShown(){return this._menu.classList.contains(we)}_getPlacement(){const t=this._parent;if(t.classList.contains(Dc))return Uc;if(t.classList.contains(Mc))return Jc;if(t.classList.contains(Lc))return jc;if(t.classList.contains(Nc))return zc;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(Cc)?e?Hc:Fc:e?Gc:Bc}_detectNavbar(){return this._element.closest(Ic)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Ft.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...ot(this._config.popperConfig,[void 0,t])}}_selectMenuItem({key:t,target:e}){const o=S.find(Pc,this._menu).filter(i=>Le(i));o.length&&Bo(o,e,t===_i,!o.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=St.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===Sc||t.type==="keyup"&&t.key!==gi)return;const e=S.find($c);for(const o of e){const i=St.getInstance(o);if(!i||i._config.autoClose===!1)continue;const s=t.composedPath(),l=s.includes(i._menu);if(s.includes(i._element)||i._config.autoClose==="inside"&&!l||i._config.autoClose==="outside"&&l||i._menu.contains(t.target)&&(t.type==="keyup"&&t.key===gi||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:i._element};t.type==="click"&&(a.clickEvent=t),i._completeHide(a)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),o=t.key===yc,i=[wc,_i].includes(t.key);if(!i&&!o||e&&!o)return;t.preventDefault();const s=this.matches(ne)?this:S.prev(this,ne)[0]||S.next(this,ne)[0]||S.findOne(ne,t.delegateTarget.parentNode),l=St.getOrCreateInstance(s);if(i){t.stopPropagation(),l.show(),l._selectMenuItem(t);return}l._isShown()&&(t.stopPropagation(),l.hide(),s.focus())}}h.on(document,Ks,ne,St.dataApiKeydownHandler);h.on(document,Ks,Sn,St.dataApiKeydownHandler);h.on(document,qs,St.clearMenus);h.on(document,xc,St.clearMenus);h.on(document,qs,ne,function(n){n.preventDefault(),St.getOrCreateInstance(this).toggle()});dt(St);const Ys="backdrop",qc="fade",Ei="show",yi=`mousedown.bs.${Ys}`,Kc={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Yc={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Xs extends tn{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Kc}static get DefaultType(){return Yc}static get NAME(){return Ys}show(t){if(!this._config.isVisible){ot(t);return}this._append();const e=this._getElement();this._config.isAnimated&&Ze(e),e.classList.add(Ei),this._emulateAnimation(()=>{ot(t)})}hide(t){if(!this._config.isVisible){ot(t);return}this._getElement().classList.remove(Ei),this._emulateAnimation(()=>{this.dispose(),ot(t)})}dispose(){this._isAppended&&(h.off(this._element,yi),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(qc),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=zt(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),h.on(t,yi,()=>{ot(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Rs(t,this._getElement(),this._config.isAnimated)}}const Xc="focustrap",Qc="bs.focustrap",Cn=`.${Qc}`,Zc=`focusin${Cn}`,tu=`keydown.tab${Cn}`,eu="Tab",nu="forward",wi="backward",ou={autofocus:!0,trapElement:null},iu={autofocus:"boolean",trapElement:"element"};class Qs extends tn{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return ou}static get DefaultType(){return iu}static get NAME(){return Xc}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),h.off(document,Cn),h.on(document,Zc,t=>this._handleFocusin(t)),h.on(document,tu,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,h.off(document,Cn))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const o=S.focusableChildren(e);o.length===0?e.focus():this._lastTabNavDirection===wi?o[o.length-1].focus():o[0].focus()}_handleKeydown(t){t.key===eu&&(this._lastTabNavDirection=t.shiftKey?wi:nu)}}const Si=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ai=".sticky-top",mn="padding-right",Oi="margin-right";class yo{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,mn,e=>e+t),this._setElementAttributes(Si,mn,e=>e+t),this._setElementAttributes(Ai,Oi,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,mn),this._resetElementAttributes(Si,mn),this._resetElementAttributes(Ai,Oi)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,o){const i=this.getWidth(),s=l=>{if(l!==this._element&&window.innerWidth>l.clientWidth+i)return;this._saveInitialAttribute(l,e);const a=window.getComputedStyle(l).getPropertyValue(e);l.style.setProperty(e,`${o(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,s)}_saveInitialAttribute(t,e){const o=t.style.getPropertyValue(e);o&&Ft.setDataAttribute(t,e,o)}_resetElementAttributes(t,e){const o=i=>{const s=Ft.getDataAttribute(i,e);if(s===null){i.style.removeProperty(e);return}Ft.removeDataAttribute(i,e),i.style.setProperty(e,s)};this._applyManipulationCallback(t,o)}_applyManipulationCallback(t,e){if(Pt(t)){e(t);return}for(const o of S.find(t,this._element))e(o)}}const su="modal",lu="bs.modal",ct=`.${lu}`,au=".data-api",ru="Escape",pu=`hide${ct}`,cu=`hidePrevented${ct}`,Zs=`hidden${ct}`,tl=`show${ct}`,uu=`shown${ct}`,du=`resize${ct}`,mu=`click.dismiss${ct}`,hu=`mousedown.dismiss${ct}`,vu=`keydown.dismiss${ct}`,fu=`click${ct}${au}`,ki="modal-open",bu="fade",Ti="show",Xn="modal-static",gu=".modal.show",_u=".modal-dialog",Eu=".modal-body",yu='[data-bs-toggle="modal"]',wu={backdrop:!0,focus:!0,keyboard:!0},Su={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ce extends gt{constructor(t,e){super(t,e),this._dialog=S.findOne(_u,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new yo,this._addEventListeners()}static get Default(){return wu}static get DefaultType(){return Su}static get NAME(){return su}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||h.trigger(this._element,tl,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(ki),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||h.trigger(this._element,pu).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Ti),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){h.off(window,ct),h.off(this._dialog,ct),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Xs({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Qs({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=S.findOne(Eu,this._dialog);e&&(e.scrollTop=0),Ze(this._element),this._element.classList.add(Ti);const o=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,h.trigger(this._element,uu,{relatedTarget:t})};this._queueCallback(o,this._dialog,this._isAnimated())}_addEventListeners(){h.on(this._element,vu,t=>{if(t.key===ru){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),h.on(window,du,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),h.on(this._element,hu,t=>{h.one(this._element,mu,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(ki),this._resetAdjustments(),this._scrollBar.reset(),h.trigger(this._element,Zs)})}_isAnimated(){return this._element.classList.contains(bu)}_triggerBackdropTransition(){if(h.trigger(this._element,cu).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,o=this._element.style.overflowY;o==="hidden"||this._element.classList.contains(Xn)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(Xn),this._queueCallback(()=>{this._element.classList.remove(Xn),this._queueCallback(()=>{this._element.style.overflowY=o},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),o=e>0;if(o&&!t){const i=pt()?"paddingLeft":"paddingRight";this._element.style[i]=`${e}px`}if(!o&&t){const i=pt()?"paddingRight":"paddingLeft";this._element.style[i]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const o=Ce.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof o[t]>"u")throw new TypeError(`No method named "${t}"`);o[t](e)}})}}h.on(document,fu,yu,function(n){const t=S.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),h.one(t,tl,i=>{i.defaultPrevented||h.one(t,Zs,()=>{Le(this)&&this.focus()})});const e=S.findOne(gu);e&&Ce.getInstance(e).hide(),Ce.getOrCreateInstance(t).toggle(this)});Nn(Ce);dt(Ce);const Au="offcanvas",Ou="bs.offcanvas",Bt=`.${Ou}`,el=".data-api",ku=`load${Bt}${el}`,Tu="Escape",xi="show",Ci="showing",Di="hiding",xu="offcanvas-backdrop",nl=".offcanvas.show",Cu=`show${Bt}`,Du=`shown${Bt}`,Mu=`hide${Bt}`,Mi=`hidePrevented${Bt}`,ol=`hidden${Bt}`,Lu=`resize${Bt}`,Nu=`click${Bt}${el}`,$u=`keydown.dismiss${Bt}`,Iu='[data-bs-toggle="offcanvas"]',Ru={backdrop:!0,keyboard:!0,scroll:!1},Pu={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Vt extends gt{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Ru}static get DefaultType(){return Pu}static get NAME(){return Au}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||h.trigger(this._element,Cu,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new yo().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ci);const o=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(xi),this._element.classList.remove(Ci),h.trigger(this._element,Du,{relatedTarget:t})};this._queueCallback(o,this._element,!0)}hide(){if(!this._isShown||h.trigger(this._element,Mu).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Di),this._backdrop.hide();const e=()=>{this._element.classList.remove(xi,Di),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new yo().reset(),h.trigger(this._element,ol)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){h.trigger(this._element,Mi);return}this.hide()},e=!!this._config.backdrop;return new Xs({className:xu,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new Qs({trapElement:this._element})}_addEventListeners(){h.on(this._element,$u,t=>{if(t.key===Tu){if(this._config.keyboard){this.hide();return}h.trigger(this._element,Mi)}})}static jQueryInterface(t){return this.each(function(){const e=Vt.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}h.on(document,Nu,Iu,function(n){const t=S.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),Wt(this))return;h.one(t,ol,()=>{Le(this)&&this.focus()});const e=S.findOne(nl);e&&e!==t&&Vt.getInstance(e).hide(),Vt.getOrCreateInstance(t).toggle(this)});h.on(window,ku,()=>{for(const n of S.find(nl))Vt.getOrCreateInstance(n).show()});h.on(window,Lu,()=>{for(const n of S.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&Vt.getOrCreateInstance(n).hide()});Nn(Vt);dt(Vt);const Fu=/^aria-[\w-]*$/i,il={"*":["class","dir","id","lang","role",Fu],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Hu=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Bu=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Gu=(n,t)=>{const e=n.nodeName.toLowerCase();return t.includes(e)?Hu.has(e)?!!Bu.test(n.nodeValue):!0:t.filter(o=>o instanceof RegExp).some(o=>o.test(e))};function Uu(n,t,e){if(!n.length)return n;if(e&&typeof e=="function")return e(n);const i=new window.DOMParser().parseFromString(n,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const l of s){const a=l.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){l.remove();continue}const c=[].concat(...l.attributes),p=[].concat(t["*"]||[],t[a]||[]);for(const d of c)Gu(d,p)||l.removeAttribute(d.nodeName)}return i.body.innerHTML}const Ju="TemplateFactory",ju={allowList:il,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},zu={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Wu={entry:"(string|element|function|null)",selector:"(string|element)"};class Vu extends tn{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return ju}static get DefaultType(){return zu}static get NAME(){return Ju}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[i,s]of Object.entries(this._config.content))this._setContent(t,s,i);const e=t.children[0],o=this._resolvePossibleFunction(this._config.extraClass);return o&&e.classList.add(...o.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,o]of Object.entries(t))super._typeCheckConfig({selector:e,entry:o},Wu)}_setContent(t,e,o){const i=S.findOne(o,t);if(i){if(e=this._resolvePossibleFunction(e),!e){i.remove();return}if(Pt(e)){this._putElementInTemplate(zt(e),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(e);return}i.textContent=e}}_maybeSanitize(t){return this._config.sanitize?Uu(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return ot(t,[void 0,this])}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const qu="tooltip",Ku=new Set(["sanitize","allowList","sanitizeFn"]),Qn="fade",Yu="modal",hn="show",Xu=".tooltip-inner",Li=`.${Yu}`,Ni="hide.bs.modal",Ge="hover",Zn="focus",Qu="click",Zu="manual",td="hide",ed="hidden",nd="show",od="shown",id="inserted",sd="click",ld="focusin",ad="focusout",rd="mouseenter",pd="mouseleave",cd={AUTO:"auto",TOP:"top",RIGHT:pt()?"left":"right",BOTTOM:"bottom",LEFT:pt()?"right":"left"},ud={allowList:il,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},dd={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class $e extends gt{constructor(t,e){if(typeof Ms>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return ud}static get DefaultType(){return dd}static get NAME(){return qu}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),h.off(this._element.closest(Li),Ni,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=h.trigger(this._element,this.constructor.eventName(nd)),o=($s(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!o)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),h.trigger(this._element,this.constructor.eventName(id))),this._popper=this._createPopper(i),i.classList.add(hn),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))h.on(a,"mouseover",Tn);const l=()=>{h.trigger(this._element,this.constructor.eventName(od)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(l,this.tip,this._isAnimated())}hide(){if(!this._isShown()||h.trigger(this._element,this.constructor.eventName(td)).defaultPrevented)return;if(this._getTipElement().classList.remove(hn),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))h.off(i,"mouseover",Tn);this._activeTrigger[Qu]=!1,this._activeTrigger[Zn]=!1,this._activeTrigger[Ge]=!1,this._isHovered=null;const o=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),h.trigger(this._element,this.constructor.eventName(ed)))};this._queueCallback(o,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Qn,hn),e.classList.add(`bs-${this.constructor.NAME}-auto`);const o=Qr(this.constructor.NAME).toString();return e.setAttribute("id",o),this._isAnimated()&&e.classList.add(Qn),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Vu({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Xu]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Qn)}_isShown(){return this.tip&&this.tip.classList.contains(hn)}_createPopper(t){const e=ot(this._config.placement,[this,t,this._element]),o=cd[e.toUpperCase()];return Ho(this._element,t,this._getPopperConfig(o))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return ot(t,[this._element,this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:o=>{this._getTipElement().setAttribute("data-popper-placement",o.state.placement)}}]};return{...e,...ot(this._config.popperConfig,[void 0,e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")h.on(this._element,this.constructor.eventName(sd),this._config.selector,o=>{this._initializeOnDelegatedTarget(o).toggle()});else if(e!==Zu){const o=e===Ge?this.constructor.eventName(rd):this.constructor.eventName(ld),i=e===Ge?this.constructor.eventName(pd):this.constructor.eventName(ad);h.on(this._element,o,this._config.selector,s=>{const l=this._initializeOnDelegatedTarget(s);l._activeTrigger[s.type==="focusin"?Zn:Ge]=!0,l._enter()}),h.on(this._element,i,this._config.selector,s=>{const l=this._initializeOnDelegatedTarget(s);l._activeTrigger[s.type==="focusout"?Zn:Ge]=l._element.contains(s.relatedTarget),l._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},h.on(this._element.closest(Li),Ni,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=Ft.getDataAttributes(this._element);for(const o of Object.keys(e))Ku.has(o)&&delete e[o];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:zt(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,o]of Object.entries(this._config))this.constructor.Default[e]!==o&&(t[e]=o);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=$e.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}dt($e);const md="popover",hd=".popover-header",vd=".popover-body",fd={...$e.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},bd={...$e.DefaultType,content:"(null|string|element|function)"};class Jo extends $e{static get Default(){return fd}static get DefaultType(){return bd}static get NAME(){return md}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[hd]:this._getTitle(),[vd]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=Jo.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}dt(Jo);const gd="scrollspy",_d="bs.scrollspy",jo=`.${_d}`,Ed=".data-api",yd=`activate${jo}`,$i=`click${jo}`,wd=`load${jo}${Ed}`,Sd="dropdown-item",ge="active",Ad='[data-bs-spy="scroll"]',to="[href]",Od=".nav, .list-group",Ii=".nav-link",kd=".nav-item",Td=".list-group-item",xd=`${Ii}, ${kd} > ${Ii}, ${Td}`,Cd=".dropdown",Dd=".dropdown-toggle",Md={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Ld={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Rn extends gt{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Md}static get DefaultType(){return Ld}static get NAME(){return gd}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=zt(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(h.off(this._config.target,$i),h.on(this._config.target,$i,to,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const o=this._rootElement||window,i=e.offsetTop-this._element.offsetTop;if(o.scrollTo){o.scrollTo({top:i,behavior:"smooth"});return}o.scrollTop=i}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=l=>this._targetLinks.get(`#${l.target.id}`),o=l=>{this._previousScrollData.visibleEntryTop=l.target.offsetTop,this._process(e(l))},i=(this._rootElement||document.documentElement).scrollTop,s=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const l of t){if(!l.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(l));continue}const a=l.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&a){if(o(l),!i)return;continue}!s&&!a&&o(l)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=S.find(to,this._config.target);for(const e of t){if(!e.hash||Wt(e))continue;const o=S.findOne(decodeURI(e.hash),this._element);Le(o)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,o))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(ge),this._activateParents(t),h.trigger(this._element,yd,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(Sd)){S.findOne(Dd,t.closest(Cd)).classList.add(ge);return}for(const e of S.parents(t,Od))for(const o of S.prev(e,xd))o.classList.add(ge)}_clearActiveClass(t){t.classList.remove(ge);const e=S.find(`${to}.${ge}`,t);for(const o of e)o.classList.remove(ge)}static jQueryInterface(t){return this.each(function(){const e=Rn.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(window,wd,()=>{for(const n of S.find(Ad))Rn.getOrCreateInstance(n)});dt(Rn);const Nd="tab",$d="bs.tab",re=`.${$d}`,Id=`hide${re}`,Rd=`hidden${re}`,Pd=`show${re}`,Fd=`shown${re}`,Hd=`click${re}`,Bd=`keydown${re}`,Gd=`load${re}`,Ud="ArrowLeft",Ri="ArrowRight",Jd="ArrowUp",Pi="ArrowDown",eo="Home",Fi="End",oe="active",Hi="fade",no="show",jd="dropdown",sl=".dropdown-toggle",zd=".dropdown-menu",oo=`:not(${sl})`,Wd='.list-group, .nav, [role="tablist"]',Vd=".nav-item, .list-group-item",qd=`.nav-link${oo}, .list-group-item${oo}, [role="tab"]${oo}`,ll='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',io=`${qd}, ${ll}`,Kd=`.${oe}[data-bs-toggle="tab"], .${oe}[data-bs-toggle="pill"], .${oe}[data-bs-toggle="list"]`;class De extends gt{constructor(t){super(t),this._parent=this._element.closest(Wd),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),h.on(this._element,Bd,e=>this._keydown(e)))}static get NAME(){return Nd}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),o=e?h.trigger(e,Id,{relatedTarget:t}):null;h.trigger(t,Pd,{relatedTarget:e}).defaultPrevented||o&&o.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(oe),this._activate(S.getElementFromSelector(t));const o=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(no);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),h.trigger(t,Fd,{relatedTarget:e})};this._queueCallback(o,t,t.classList.contains(Hi))}_deactivate(t,e){if(!t)return;t.classList.remove(oe),t.blur(),this._deactivate(S.getElementFromSelector(t));const o=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(no);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),h.trigger(t,Rd,{relatedTarget:e})};this._queueCallback(o,t,t.classList.contains(Hi))}_keydown(t){if(![Ud,Ri,Jd,Pi,eo,Fi].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter(i=>!Wt(i));let o;if([eo,Fi].includes(t.key))o=e[t.key===eo?0:e.length-1];else{const i=[Ri,Pi].includes(t.key);o=Bo(e,t.target,i,!0)}o&&(o.focus({preventScroll:!0}),De.getOrCreateInstance(o).show())}_getChildren(){return S.find(io,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const o of e)this._setInitialAttributesOnChild(o)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),o=this._getOuterElement(t);t.setAttribute("aria-selected",e),o!==t&&this._setAttributeIfNotExists(o,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=S.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const o=this._getOuterElement(t);if(!o.classList.contains(jd))return;const i=(s,l)=>{const a=S.findOne(s,o);a&&a.classList.toggle(l,e)};i(sl,oe),i(zd,no),o.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,o){t.hasAttribute(e)||t.setAttribute(e,o)}_elemIsActive(t){return t.classList.contains(oe)}_getInnerElement(t){return t.matches(io)?t:S.findOne(io,t)}_getOuterElement(t){return t.closest(Vd)||t}static jQueryInterface(t){return this.each(function(){const e=De.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}h.on(document,Hd,ll,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!Wt(this)&&De.getOrCreateInstance(this).show()});h.on(window,Gd,()=>{for(const n of S.find(Kd))De.getOrCreateInstance(n)});dt(De);const Yd="toast",Xd="bs.toast",Yt=`.${Xd}`,Qd=`mouseover${Yt}`,Zd=`mouseout${Yt}`,tm=`focusin${Yt}`,em=`focusout${Yt}`,nm=`hide${Yt}`,om=`hidden${Yt}`,im=`show${Yt}`,sm=`shown${Yt}`,lm="fade",Bi="hide",vn="show",fn="showing",am={animation:"boolean",autohide:"boolean",delay:"number"},rm={animation:!0,autohide:!0,delay:5e3};class Pn extends gt{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return rm}static get DefaultType(){return am}static get NAME(){return Yd}show(){if(h.trigger(this._element,im).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(lm);const e=()=>{this._element.classList.remove(fn),h.trigger(this._element,sm),this._maybeScheduleHide()};this._element.classList.remove(Bi),Ze(this._element),this._element.classList.add(vn,fn),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||h.trigger(this._element,nm).defaultPrevented)return;const e=()=>{this._element.classList.add(Bi),this._element.classList.remove(fn,vn),h.trigger(this._element,om)};this._element.classList.add(fn),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(vn),super.dispose()}isShown(){return this._element.classList.contains(vn)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const o=t.relatedTarget;this._element===o||this._element.contains(o)||this._maybeScheduleHide()}_setListeners(){h.on(this._element,Qd,t=>this._onInteraction(t,!0)),h.on(this._element,Zd,t=>this._onInteraction(t,!1)),h.on(this._element,tm,t=>this._onInteraction(t,!0)),h.on(this._element,em,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=Pn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Nn(Pn);dt(Pn);/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */const{entries:al,setPrototypeOf:Gi,isFrozen:pm,getPrototypeOf:cm,getOwnPropertyDescriptor:um}=Object;let{freeze:tt,seal:ut,create:rl}=Object,{apply:wo,construct:So}=typeof Reflect<"u"&&Reflect;tt||(tt=function(t){return t});ut||(ut=function(t){return t});wo||(wo=function(t,e,o){return t.apply(e,o)});So||(So=function(t,e){return new t(...e)});const bn=et(Array.prototype.forEach),dm=et(Array.prototype.lastIndexOf),Ui=et(Array.prototype.pop),Ue=et(Array.prototype.push),mm=et(Array.prototype.splice),An=et(String.prototype.toLowerCase),so=et(String.prototype.toString),Ji=et(String.prototype.match),Je=et(String.prototype.replace),hm=et(String.prototype.indexOf),vm=et(String.prototype.trim),vt=et(Object.prototype.hasOwnProperty),X=et(RegExp.prototype.test),je=fm(TypeError);function et(n){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var e=arguments.length,o=new Array(e>1?e-1:0),i=1;i<e;i++)o[i-1]=arguments[i];return wo(n,t,o)}}function fm(n){return function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return So(n,e)}}function x(n,t){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:An;Gi&&Gi(n,null);let o=t.length;for(;o--;){let i=t[o];if(typeof i=="string"){const s=e(i);s!==i&&(pm(t)||(t[o]=s),i=s)}n[i]=!0}return n}function bm(n){for(let t=0;t<n.length;t++)vt(n,t)||(n[t]=null);return n}function Rt(n){const t=rl(null);for(const[e,o]of al(n))vt(n,e)&&(Array.isArray(o)?t[e]=bm(o):o&&typeof o=="object"&&o.constructor===Object?t[e]=Rt(o):t[e]=o);return t}function ze(n,t){for(;n!==null;){const o=um(n,t);if(o){if(o.get)return et(o.get);if(typeof o.value=="function")return et(o.value)}n=cm(n)}function e(){return null}return e}const ji=tt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),lo=tt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ao=tt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),gm=tt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ro=tt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),_m=tt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),zi=tt(["#text"]),Wi=tt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),po=tt(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Vi=tt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),gn=tt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Em=ut(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ym=ut(/<%[\w\W]*|[\w\W]*%>/gm),wm=ut(/\$\{[\w\W]*/gm),Sm=ut(/^data-[\-\w.\u00B7-\uFFFF]+$/),Am=ut(/^aria-[\-\w]+$/),pl=ut(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Om=ut(/^(?:\w+script|data):/i),km=ut(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),cl=ut(/^html$/i),Tm=ut(/^[a-z][.\w]*(-[.\w]+)+$/i);var qi=Object.freeze({__proto__:null,ARIA_ATTR:Am,ATTR_WHITESPACE:km,CUSTOM_ELEMENT:Tm,DATA_ATTR:Sm,DOCTYPE_NAME:cl,ERB_EXPR:ym,IS_ALLOWED_URI:pl,IS_SCRIPT_OR_DATA:Om,MUSTACHE_EXPR:Em,TMPLIT_EXPR:wm});const We={element:1,text:3,progressingInstruction:7,comment:8,document:9},xm=function(){return typeof window>"u"?null:window},Cm=function(t,e){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let o=null;const i="data-tt-policy-suffix";e&&e.hasAttribute(i)&&(o=e.getAttribute(i));const s="dompurify"+(o?"#"+o:"");try{return t.createPolicy(s,{createHTML(l){return l},createScriptURL(l){return l}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}},Ki=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function ul(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:xm();const t=w=>ul(w);if(t.version="3.2.6",t.removed=[],!n||!n.document||n.document.nodeType!==We.document||!n.Element)return t.isSupported=!1,t;let{document:e}=n;const o=e,i=o.currentScript,{DocumentFragment:s,HTMLTemplateElement:l,Node:a,Element:c,NodeFilter:p,NamedNodeMap:d=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:g,DOMParser:f,trustedTypes:b}=n,O=c.prototype,A=ze(O,"cloneNode"),k=ze(O,"remove"),C=ze(O,"nextSibling"),I=ze(O,"childNodes"),$=ze(O,"parentNode");if(typeof l=="function"){const w=e.createElement("template");w.content&&w.content.ownerDocument&&(e=w.content.ownerDocument)}let y,T="";const{implementation:D,createNodeIterator:R,createDocumentFragment:U,getElementsByTagName:G}=e,{importNode:B}=o;let M=Ki();t.isSupported=typeof al=="function"&&typeof $=="function"&&D&&D.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:K,ERB_EXPR:J,TMPLIT_EXPR:mt,DATA_ATTR:Ot,ARIA_ATTR:Y,IS_SCRIPT_OR_DATA:it,ATTR_WHITESPACE:Xt,CUSTOM_ELEMENT:kt}=qi;let{IS_ALLOWED_URI:Qt}=qi,F=null;const Gt=x({},[...ji,...lo,...ao,...ro,...zi]);let H=null;const Tt=x({},[...Wi,...po,...Vi,...gn]);let L=Object.seal(rl(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ht=null,Ut=null,_t=!0,Zt=!0,on=!1,pe=!0,Jt=!1,te=!0,xt=!1,Ie=!1,ce=!1,Ct=!1,ue=!1,de=!1,Et=!0,ee=!1;const sn="user-content-";let me=!0,Dt=!1,Mt={},Lt=null;const Re=x({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Pe=null;const zo=x({},["audio","video","img","source","image","track"]);let Fn=null;const Wo=x({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ln="http://www.w3.org/1998/Math/MathML",an="http://www.w3.org/2000/svg",Nt="http://www.w3.org/1999/xhtml";let he=Nt,Hn=!1,Bn=null;const $l=x({},[ln,an,Nt],so);let rn=x({},["mi","mo","mn","ms","mtext"]),pn=x({},["annotation-xml"]);const Il=x({},["title","style","font","a","script"]);let Fe=null;const Rl=["application/xhtml+xml","text/html"],Pl="text/html";let z=null,ve=null;const Fl=e.createElement("form"),Vo=function(r){return r instanceof RegExp||r instanceof Function},Gn=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(ve&&ve===r)){if((!r||typeof r!="object")&&(r={}),r=Rt(r),Fe=Rl.indexOf(r.PARSER_MEDIA_TYPE)===-1?Pl:r.PARSER_MEDIA_TYPE,z=Fe==="application/xhtml+xml"?so:An,F=vt(r,"ALLOWED_TAGS")?x({},r.ALLOWED_TAGS,z):Gt,H=vt(r,"ALLOWED_ATTR")?x({},r.ALLOWED_ATTR,z):Tt,Bn=vt(r,"ALLOWED_NAMESPACES")?x({},r.ALLOWED_NAMESPACES,so):$l,Fn=vt(r,"ADD_URI_SAFE_ATTR")?x(Rt(Wo),r.ADD_URI_SAFE_ATTR,z):Wo,Pe=vt(r,"ADD_DATA_URI_TAGS")?x(Rt(zo),r.ADD_DATA_URI_TAGS,z):zo,Lt=vt(r,"FORBID_CONTENTS")?x({},r.FORBID_CONTENTS,z):Re,ht=vt(r,"FORBID_TAGS")?x({},r.FORBID_TAGS,z):Rt({}),Ut=vt(r,"FORBID_ATTR")?x({},r.FORBID_ATTR,z):Rt({}),Mt=vt(r,"USE_PROFILES")?r.USE_PROFILES:!1,_t=r.ALLOW_ARIA_ATTR!==!1,Zt=r.ALLOW_DATA_ATTR!==!1,on=r.ALLOW_UNKNOWN_PROTOCOLS||!1,pe=r.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Jt=r.SAFE_FOR_TEMPLATES||!1,te=r.SAFE_FOR_XML!==!1,xt=r.WHOLE_DOCUMENT||!1,Ct=r.RETURN_DOM||!1,ue=r.RETURN_DOM_FRAGMENT||!1,de=r.RETURN_TRUSTED_TYPE||!1,ce=r.FORCE_BODY||!1,Et=r.SANITIZE_DOM!==!1,ee=r.SANITIZE_NAMED_PROPS||!1,me=r.KEEP_CONTENT!==!1,Dt=r.IN_PLACE||!1,Qt=r.ALLOWED_URI_REGEXP||pl,he=r.NAMESPACE||Nt,rn=r.MATHML_TEXT_INTEGRATION_POINTS||rn,pn=r.HTML_INTEGRATION_POINTS||pn,L=r.CUSTOM_ELEMENT_HANDLING||{},r.CUSTOM_ELEMENT_HANDLING&&Vo(r.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(L.tagNameCheck=r.CUSTOM_ELEMENT_HANDLING.tagNameCheck),r.CUSTOM_ELEMENT_HANDLING&&Vo(r.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(L.attributeNameCheck=r.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),r.CUSTOM_ELEMENT_HANDLING&&typeof r.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(L.allowCustomizedBuiltInElements=r.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Jt&&(Zt=!1),ue&&(Ct=!0),Mt&&(F=x({},zi),H=[],Mt.html===!0&&(x(F,ji),x(H,Wi)),Mt.svg===!0&&(x(F,lo),x(H,po),x(H,gn)),Mt.svgFilters===!0&&(x(F,ao),x(H,po),x(H,gn)),Mt.mathMl===!0&&(x(F,ro),x(H,Vi),x(H,gn))),r.ADD_TAGS&&(F===Gt&&(F=Rt(F)),x(F,r.ADD_TAGS,z)),r.ADD_ATTR&&(H===Tt&&(H=Rt(H)),x(H,r.ADD_ATTR,z)),r.ADD_URI_SAFE_ATTR&&x(Fn,r.ADD_URI_SAFE_ATTR,z),r.FORBID_CONTENTS&&(Lt===Re&&(Lt=Rt(Lt)),x(Lt,r.FORBID_CONTENTS,z)),me&&(F["#text"]=!0),xt&&x(F,["html","head","body"]),F.table&&(x(F,["tbody"]),delete ht.tbody),r.TRUSTED_TYPES_POLICY){if(typeof r.TRUSTED_TYPES_POLICY.createHTML!="function")throw je('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof r.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw je('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');y=r.TRUSTED_TYPES_POLICY,T=y.createHTML("")}else y===void 0&&(y=Cm(b,i)),y!==null&&typeof T=="string"&&(T=y.createHTML(""));tt&&tt(r),ve=r}},qo=x({},[...lo,...ao,...gm]),Ko=x({},[...ro,..._m]),Hl=function(r){let v=$(r);(!v||!v.tagName)&&(v={namespaceURI:he,tagName:"template"});const _=An(r.tagName),P=An(v.tagName);return Bn[r.namespaceURI]?r.namespaceURI===an?v.namespaceURI===Nt?_==="svg":v.namespaceURI===ln?_==="svg"&&(P==="annotation-xml"||rn[P]):!!qo[_]:r.namespaceURI===ln?v.namespaceURI===Nt?_==="math":v.namespaceURI===an?_==="math"&&pn[P]:!!Ko[_]:r.namespaceURI===Nt?v.namespaceURI===an&&!pn[P]||v.namespaceURI===ln&&!rn[P]?!1:!Ko[_]&&(Il[_]||!qo[_]):!!(Fe==="application/xhtml+xml"&&Bn[r.namespaceURI]):!1},yt=function(r){Ue(t.removed,{element:r});try{$(r).removeChild(r)}catch{k(r)}},fe=function(r,v){try{Ue(t.removed,{attribute:v.getAttributeNode(r),from:v})}catch{Ue(t.removed,{attribute:null,from:v})}if(v.removeAttribute(r),r==="is")if(Ct||ue)try{yt(v)}catch{}else try{v.setAttribute(r,"")}catch{}},Yo=function(r){let v=null,_=null;if(ce)r="<remove></remove>"+r;else{const j=Ji(r,/^[\r\n\t ]+/);_=j&&j[0]}Fe==="application/xhtml+xml"&&he===Nt&&(r='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+r+"</body></html>");const P=y?y.createHTML(r):r;if(he===Nt)try{v=new f().parseFromString(P,Fe)}catch{}if(!v||!v.documentElement){v=D.createDocument(he,"template",null);try{v.documentElement.innerHTML=Hn?T:P}catch{}}const V=v.body||v.documentElement;return r&&_&&V.insertBefore(e.createTextNode(_),V.childNodes[0]||null),he===Nt?G.call(v,xt?"html":"body")[0]:xt?v.documentElement:V},Xo=function(r){return R.call(r.ownerDocument||r,r,p.SHOW_ELEMENT|p.SHOW_COMMENT|p.SHOW_TEXT|p.SHOW_PROCESSING_INSTRUCTION|p.SHOW_CDATA_SECTION,null)},Un=function(r){return r instanceof g&&(typeof r.nodeName!="string"||typeof r.textContent!="string"||typeof r.removeChild!="function"||!(r.attributes instanceof d)||typeof r.removeAttribute!="function"||typeof r.setAttribute!="function"||typeof r.namespaceURI!="string"||typeof r.insertBefore!="function"||typeof r.hasChildNodes!="function")},Qo=function(r){return typeof a=="function"&&r instanceof a};function $t(w,r,v){bn(w,_=>{_.call(t,r,v,ve)})}const Zo=function(r){let v=null;if($t(M.beforeSanitizeElements,r,null),Un(r))return yt(r),!0;const _=z(r.nodeName);if($t(M.uponSanitizeElement,r,{tagName:_,allowedTags:F}),te&&r.hasChildNodes()&&!Qo(r.firstElementChild)&&X(/<[/\w!]/g,r.innerHTML)&&X(/<[/\w!]/g,r.textContent)||r.nodeType===We.progressingInstruction||te&&r.nodeType===We.comment&&X(/<[/\w]/g,r.data))return yt(r),!0;if(!F[_]||ht[_]){if(!ht[_]&&ei(_)&&(L.tagNameCheck instanceof RegExp&&X(L.tagNameCheck,_)||L.tagNameCheck instanceof Function&&L.tagNameCheck(_)))return!1;if(me&&!Lt[_]){const P=$(r)||r.parentNode,V=I(r)||r.childNodes;if(V&&P){const j=V.length;for(let nt=j-1;nt>=0;--nt){const It=A(V[nt],!0);It.__removalCount=(r.__removalCount||0)+1,P.insertBefore(It,C(r))}}}return yt(r),!0}return r instanceof c&&!Hl(r)||(_==="noscript"||_==="noembed"||_==="noframes")&&X(/<\/no(script|embed|frames)/i,r.innerHTML)?(yt(r),!0):(Jt&&r.nodeType===We.text&&(v=r.textContent,bn([K,J,mt],P=>{v=Je(v,P," ")}),r.textContent!==v&&(Ue(t.removed,{element:r.cloneNode()}),r.textContent=v)),$t(M.afterSanitizeElements,r,null),!1)},ti=function(r,v,_){if(Et&&(v==="id"||v==="name")&&(_ in e||_ in Fl))return!1;if(!(Zt&&!Ut[v]&&X(Ot,v))){if(!(_t&&X(Y,v))){if(!H[v]||Ut[v]){if(!(ei(r)&&(L.tagNameCheck instanceof RegExp&&X(L.tagNameCheck,r)||L.tagNameCheck instanceof Function&&L.tagNameCheck(r))&&(L.attributeNameCheck instanceof RegExp&&X(L.attributeNameCheck,v)||L.attributeNameCheck instanceof Function&&L.attributeNameCheck(v))||v==="is"&&L.allowCustomizedBuiltInElements&&(L.tagNameCheck instanceof RegExp&&X(L.tagNameCheck,_)||L.tagNameCheck instanceof Function&&L.tagNameCheck(_))))return!1}else if(!Fn[v]){if(!X(Qt,Je(_,Xt,""))){if(!((v==="src"||v==="xlink:href"||v==="href")&&r!=="script"&&hm(_,"data:")===0&&Pe[r])){if(!(on&&!X(it,Je(_,Xt,"")))){if(_)return!1}}}}}}return!0},ei=function(r){return r!=="annotation-xml"&&Ji(r,kt)},ni=function(r){$t(M.beforeSanitizeAttributes,r,null);const{attributes:v}=r;if(!v||Un(r))return;const _={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:H,forceKeepAttr:void 0};let P=v.length;for(;P--;){const V=v[P],{name:j,namespaceURI:nt,value:It}=V,He=z(j),Jn=It;let q=j==="value"?Jn:vm(Jn);if(_.attrName=He,_.attrValue=q,_.keepAttr=!0,_.forceKeepAttr=void 0,$t(M.uponSanitizeAttribute,r,_),q=_.attrValue,ee&&(He==="id"||He==="name")&&(fe(j,r),q=sn+q),te&&X(/((--!?|])>)|<\/(style|title)/i,q)){fe(j,r);continue}if(_.forceKeepAttr)continue;if(!_.keepAttr){fe(j,r);continue}if(!pe&&X(/\/>/i,q)){fe(j,r);continue}Jt&&bn([K,J,mt],ii=>{q=Je(q,ii," ")});const oi=z(r.nodeName);if(!ti(oi,He,q)){fe(j,r);continue}if(y&&typeof b=="object"&&typeof b.getAttributeType=="function"&&!nt)switch(b.getAttributeType(oi,He)){case"TrustedHTML":{q=y.createHTML(q);break}case"TrustedScriptURL":{q=y.createScriptURL(q);break}}if(q!==Jn)try{nt?r.setAttributeNS(nt,j,q):r.setAttribute(j,q),Un(r)?yt(r):Ui(t.removed)}catch{fe(j,r)}}$t(M.afterSanitizeAttributes,r,null)},Bl=function w(r){let v=null;const _=Xo(r);for($t(M.beforeSanitizeShadowDOM,r,null);v=_.nextNode();)$t(M.uponSanitizeShadowNode,v,null),Zo(v),ni(v),v.content instanceof s&&w(v.content);$t(M.afterSanitizeShadowDOM,r,null)};return t.sanitize=function(w){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=null,_=null,P=null,V=null;if(Hn=!w,Hn&&(w="<!-->"),typeof w!="string"&&!Qo(w))if(typeof w.toString=="function"){if(w=w.toString(),typeof w!="string")throw je("dirty is not a string, aborting")}else throw je("toString is not a function");if(!t.isSupported)return w;if(Ie||Gn(r),t.removed=[],typeof w=="string"&&(Dt=!1),Dt){if(w.nodeName){const It=z(w.nodeName);if(!F[It]||ht[It])throw je("root node is forbidden and cannot be sanitized in-place")}}else if(w instanceof a)v=Yo("<!---->"),_=v.ownerDocument.importNode(w,!0),_.nodeType===We.element&&_.nodeName==="BODY"||_.nodeName==="HTML"?v=_:v.appendChild(_);else{if(!Ct&&!Jt&&!xt&&w.indexOf("<")===-1)return y&&de?y.createHTML(w):w;if(v=Yo(w),!v)return Ct?null:de?T:""}v&&ce&&yt(v.firstChild);const j=Xo(Dt?w:v);for(;P=j.nextNode();)Zo(P),ni(P),P.content instanceof s&&Bl(P.content);if(Dt)return w;if(Ct){if(ue)for(V=U.call(v.ownerDocument);v.firstChild;)V.appendChild(v.firstChild);else V=v;return(H.shadowroot||H.shadowrootmode)&&(V=B.call(o,V,!0)),V}let nt=xt?v.outerHTML:v.innerHTML;return xt&&F["!doctype"]&&v.ownerDocument&&v.ownerDocument.doctype&&v.ownerDocument.doctype.name&&X(cl,v.ownerDocument.doctype.name)&&(nt="<!DOCTYPE "+v.ownerDocument.doctype.name+`>
`+nt),Jt&&bn([K,J,mt],It=>{nt=Je(nt,It," ")}),y&&de?y.createHTML(nt):nt},t.setConfig=function(){let w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Gn(w),Ie=!0},t.clearConfig=function(){ve=null,Ie=!1},t.isValidAttribute=function(w,r,v){ve||Gn({});const _=z(w),P=z(r);return ti(_,P,v)},t.addHook=function(w,r){typeof r=="function"&&Ue(M[w],r)},t.removeHook=function(w,r){if(r!==void 0){const v=dm(M[w],r);return v===-1?void 0:mm(M[w],v,1)[0]}return Ui(M[w])},t.removeHooks=function(w){M[w]=[]},t.removeAllHooks=function(){M=Ki()},t}var bt=ul(),Dm=Object.defineProperty,Mm=(n,t,e)=>t in n?Dm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,E=(n,t,e)=>Mm(n,typeof t!="symbol"?t+"":t,e),dl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Lm={formatSelectAll(){return"[Select all]"},formatAllSelected(){return"All selected"},formatCountSelected(n,t){return`${n} of ${t} selected`},formatNoMatchesFound(){return"No matches found"},formatOkButton(){return"OK"},formatLazyLoading(){return"Loading..."}};dl.locales["en-US"]=Lm;var ml=dl.locales,Nm=50,$m=4,W=()=>!1,Im=()=>!0,hl={name:"",placeholder:"",classes:"",classPrefix:"",data:void 0,locale:void 0,selectAll:!0,single:void 0,singleRadio:!1,multiple:!1,hideOptgroupCheckboxes:!1,multipleWidth:80,width:void 0,dropWidth:void 0,maxHeight:250,maxHeightUnit:"px",position:"bottom",displayValues:!1,displayTitle:!1,displayDelimiter:", ",minimumCountSelected:3,ellipsis:!1,isOpen:!1,keepOpen:!1,openOnHover:!1,container:null,filter:!1,filterGroup:!1,filterPlaceholder:"",filterAcceptOnEnter:!1,filterByDataLength:void 0,customFilter(n){let{text:t,label:e,search:o}=n;return(e||t||"").includes(o)},showClear:!1,autoAdjustDropHeight:!1,autoAdjustDropPosition:!1,autoAdjustDropWidthByTextSize:!1,adjustedHeightPadding:10,useSelectOptionLabel:!1,useSelectOptionLabelToHtml:!1,navigationHighlight:!0,infiniteScroll:!1,virtualScroll:!0,cssStyler:()=>null,textTemplate:n=>n.innerHTML.trim(),labelTemplate:n=>n.label,onBeforeOpen:W,onChange:W,onOpen:W,onClose:W,onCheckAll:W,onUncheckAll:W,onFocus:W,onBlur:W,onOptgroupClick:W,onBeforeClick:Im,onClick:W,onFilter:W,onFilterClear:W,onClear:W,onAfterCreate:W,onDestroy:W,onAfterDestroy:W,onDestroyed:W},Rm=["init","getOptions","refreshOptions","getSelects","setSelects","enable","disable","open","close","check","uncheck","checkAll","uncheckAll","checkInvert","focus","blur","refresh","destroy"];Object.assign(hl,ml["en-US"]);var Pm={BLOCK_ROWS:Nm,CLUSTER_BLOCKS:$m,DEFAULTS:hl,METHODS:Rm},ft=Pm,Fm=class{constructor(t){E(this,"_distinctEvent"),E(this,"_boundedEvents",[]),this._distinctEvent=(t==null?void 0:t.distinctEvent)??!1}get boundedEvents(){return this._boundedEvents}dispose(){this.unbindAll(),this._boundedEvents=[]}bind(t,e,o,i,s=""){let l=Array.isArray(e)?e:[e];typeof(t==null?void 0:t.forEach)=="function"?t.forEach(a=>this.bindElementEvents(a,l,o,i,s)):this.bindElementEvents(t,l,o,i,s)}hasBinding(t,e){return this._boundedEvents.some(o=>o.element===t&&(!e||o.eventName===e))}unbind(t,e,o){var i;if(t){let s=Array.isArray(t)?t:[t],l=Array.isArray(e)?e:[e||""];for(let a of s){o||(o=this._boundedEvents.find(c=>{if(c.element===a&&(!e||c.eventName===e))return c.listener}));for(let c of l)(i=a==null?void 0:a.removeEventListener)==null||i.call(a,c,o)}}}unbindAll(t){if(t){let e=Array.isArray(t)?t:[t];for(let o=this._boundedEvents.length-1;o>=0;--o){let i=this._boundedEvents[o];if(e.some(s=>s===i.groupName)){let{element:s,eventName:l,listener:a}=i;this.unbind(s,l,a),this._boundedEvents.splice(o,1)}}}else for(;this._boundedEvents.length>0;){let{element:e,eventName:o,listener:i}=this._boundedEvents.pop();this.unbind(e,o,i)}}bindElementEvents(t,e,o,i,s=""){for(let l of e)(!this._distinctEvent||this._distinctEvent&&!this.hasBinding(t,l))&&(t.addEventListener(l,o,i),this._boundedEvents.push({element:t,eventName:l,listener:o,groupName:s}))}};function Hm(n,t,e=!1){let o=Object.keys(n),i=Object.keys(t);if(e&&o.length!==i.length)return!1;for(let s of o)if(i.includes(s)&&n[s]!==t[s])return!1;return!0}function Ao(n){return typeof n!="object"||n===null?n:Array.isArray(n)?n.map(Ao):typeof n=="function"?n:Object.fromEntries(Object.entries(n).map(([t,e])=>[t,Ao(e)]))}function On(n){return n!=null&&n!==""}function Bm(n,t){return typeof n=="object"?Object.fromEntries(t?Object.entries(n).filter(([e,o])=>!On(o)&&!t.includes(e)||On(o)):Object.entries(n).filter(([e,o])=>On(o))):n}function Gm(n){let t=0;return n.forEach((e,o)=>{e.type==="optgroup"?(e._key=`group_${o}`,e.visible=typeof e.visible>"u"?!0:e.visible,e.children.forEach((i,s)=>{i&&(i.visible=typeof(i==null?void 0:i.visible)>"u"?!0:i.visible,i.divider||(i._key=`option_${o}_${s}`,t+=1))})):(e.visible=typeof e.visible>"u"?!0:e.visible,e.divider||(e._key=`option_${o}`,t+=1))}),t}function _n(n,t,e){if(Array.isArray(n))for(let o of n){if(o[t]===e||o[t]===`${+o[t]}`&&+o[t]===e)return o;if(o.type==="optgroup"){for(let i of o.children)if(i&&(i[t]===e||i[t]===`${+i[t]}`&&+i[t]===e))return i}}}function Um(n){return n.replace(/(\b)(on[a-z]+)(\s*)=([^>]*)|javascript:([^>]*)[^>]*|(<\s*)(\/*)script([<>]*).*(<\s*)(\/*)script(>*)|(&lt;|&#60;)(\/*)(script|script defer)(.*)(&#62;|&gt;|&gt;">)/gi,"")}function co(n){return Object.keys(n).forEach(t=>On(n[t])?"":delete n[t]),n}function _e(n,t){if(typeof n!="string")return n;if(typeof t=="function")return t(n);if(typeof n.normalize=="function")return n.normalize("NFD").replace(/[\u0300-\u036F]/g,"");throw new Error("[Multiple-Select-Vanilla] `normalize()` function is not defined, you can optionally provide a custom parser via the `diacriticParser` option.")}function uo(n){let{innerHeight:t=0,innerWidth:e=0}=window,{top:o,left:i}=zm(),{top:s=0,left:l=0}=ko(n)||{};return{top:s-o,bottom:t-(s-o),left:l-i,right:e-(l-i)}}function mo(n=""){return n.split(" ").filter(t=>t)}function N(n,t,e){let o=document.createElement(n);return t&&Object.keys(t).forEach(i=>{let s=t[i];typeof s=="object"?Object.assign(o[i],s):o[i]=t[i]}),e==null||e.appendChild(o),o}function vl(n,t,e){var s;let o=(s=n.props)!=null&&s.innerHTML?jm(n.props,"innerHTML"):n.props,i=N(n.tagName,Bm(o,["className","title","style"]),t);if(n.props.innerHTML&&(i.innerHTML=n.props.innerHTML),n.attrs)for(let l of Object.keys(n.attrs))i.setAttribute(l,n.attrs[l]);if(n.children)for(let l of n.children)vl(l,i);return t==null||t.appendChild(i),i}function Oo(n){return n.hasOwnProperty("tagName")?vl(n):document.createElement("li")}function Ye(n){for(;n!=null&&n.firstChild;)n.lastChild&&n.removeChild(n.lastChild);return n}function ko(n){if(n){let{top:t,left:e,bottom:o,right:i}=n.getBoundingClientRect();return{top:t+window.pageYOffset,left:e+window.pageXOffset,bottom:o,right:i}}}function En(n,t,e){if(!n)return 0;let o=Number.parseFloat(n.style[e]);if(!o||Number.isNaN(o)){let i=e==="height"?"Height":"Width";switch(t){case"outer":o=n[`offset${i}`];break;case"scroll":o=n[`scroll${i}`];break;case"inner":default:o=n[`client${i}`];break}o=n.getBoundingClientRect()[e]}if(!o||Number.isNaN(o)){let i=n.style.display,s=n.style.position;n.style.display="block",n.style.position="absolute";let l=window.getComputedStyle(n)[e];o=Number.parseFloat(l),Number.isNaN(o)&&(o=0),n.style.display=i,n.style.position=s}return o||0}function Yi(n,t){let e=null,o=n==null?void 0:n.parentElement;for(;o;){let[i,s,l,a]=t.match(/^([a-z]*)([#.]{1})([a-z-]+)$/i)||[];if(l&&a)for(let c of a.replace(l,"").split(" "))o.classList.contains(c)&&(s?(o==null?void 0:o.tagName.toLowerCase())===s&&(e=o):e=o);o=o.parentElement}return e}function Jm(n,t){var e;(e=n.parentNode)==null||e.insertBefore(t,n.nextSibling)}function jm(n,t){let{[t]:e,...o}=n;return o}function Xi(n,t){n!=null&&n.style&&(n.style.display=n.style.display==="none"&&t!==!1||t===!0?"block":"none")}function zm(){return{left:window.pageXOffset||document.documentElement.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||0}}var Wm=class{constructor(t){var o;E(this,"clusterRows"),E(this,"cache"),E(this,"scrollEl"),E(this,"blockHeight"),E(this,"clusterHeight"),E(this,"contentEl"),E(this,"parentEl"),E(this,"itemHeight"),E(this,"lastCluster"),E(this,"scrollTop"),E(this,"dataStart"),E(this,"dataEnd"),E(this,"rows"),E(this,"destroy"),E(this,"callback"),E(this,"sanitizer"),this.rows=t.rows,this.scrollEl=t.scrollEl,this.contentEl=t.contentEl,this.parentEl=(o=t.contentEl)==null?void 0:o.parentElement,this.callback=t.callback,this.cache={},this.scrollTop=this.scrollEl.scrollTop,this.initDOM(this.rows),this.scrollEl.scrollTop=this.scrollTop,this.lastCluster=0;let e=()=>{this.lastCluster!==(this.lastCluster=this.getNum())&&(this.initDOM(this.rows),this.callback())};this.scrollEl.addEventListener("scroll",e,!1),this.destroy=()=>{this.scrollEl.removeEventListener("scroll",e,!1),Ye(this.contentEl)}}reset(t){this.lastCluster=0,this.cache={},Ye(this.contentEl),this.initDOM(t)}initDOM(t){if(typeof this.clusterHeight>"u"){this.cache.scrollTop=this.scrollEl.scrollTop;let l=Oo(t[0]);this.contentEl.appendChild(l),this.contentEl.appendChild(l),this.contentEl.appendChild(l),this.cache.data=[t[0]],this.getRowsHeight()}let e=this.initData(t,this.getNum()),o=this.checkChanges("data",e.rows),i=this.checkChanges("top",e.topOffset),s=this.checkChanges("bottom",e.bottomOffset);Ye(this.contentEl),o&&i?(e.topOffset&&this.contentEl.appendChild(this.getExtra("top",e.topOffset)),e.rows.forEach(l=>this.contentEl.appendChild(Oo(l))),e.bottomOffset&&this.contentEl.appendChild(this.getExtra("bottom",e.bottomOffset))):s&&this.contentEl.lastChild&&(this.contentEl.lastChild.style.height=`${e.bottomOffset}px`)}getRowsHeight(){var t;if(typeof this.itemHeight>"u"){let e=((t=this.parentEl)==null?void 0:t.style.display)||"";this.parentEl&&(e===""||e==="none")&&(this.parentEl.style.display="block");let o=this.contentEl.children,i=o[Math.floor(o.length/2)];this.itemHeight=i.offsetHeight,this.parentEl&&(this.parentEl.style.display=e)}this.blockHeight=this.itemHeight*ft.BLOCK_ROWS,this.clusterRows=ft.BLOCK_ROWS*ft.CLUSTER_BLOCKS,this.clusterHeight=this.blockHeight*ft.CLUSTER_BLOCKS}getNum(){this.scrollTop=this.scrollEl.scrollTop;let t=(this.clusterHeight||0)-(this.blockHeight||0);return t&&Math.floor(this.scrollTop/t)||0}initData(t,e){if(t.length<ft.BLOCK_ROWS)return{topOffset:0,bottomOffset:0,rowsAbove:0,rows:t};let o=Math.max((this.clusterRows-ft.BLOCK_ROWS)*e,0),i=o+this.clusterRows,s=Math.max(o*this.itemHeight,0),l=Math.max((t.length-i)*this.itemHeight,0),a=[],c=o;s<1&&c++;for(let p=o;p<i;p++)t[p]&&a.push(t[p]);return this.dataStart=o,this.dataEnd=i,{topOffset:s,bottomOffset:l,rowsAbove:c,rows:a}}checkChanges(t,e){let o=e!==this.cache[t];return this.cache[t]=e,o}getExtra(t,e){let o=N("li",{className:`virtual-scroll-${t}`});return e&&(o.style.height=`${e}px`),o}},Ve=".ms-select-all, ul li[data-key]",Vm=".ms-select-all.highlighted, ul li[data-key].highlighted",qm=class{constructor(t,e){this.elm=t,E(this,"_bindEventService"),E(this,"isAllSelected",!1),E(this,"isPartiallyAllSelected",!1),E(this,"fromHtml",!1),E(this,"choiceElm"),E(this,"selectClearElm"),E(this,"closeElm"),E(this,"clearSearchIconElm"),E(this,"filterText",""),E(this,"updateData",[]),E(this,"data",[]),E(this,"dataTotal"),E(this,"dropElm"),E(this,"okButtonElm"),E(this,"filterParentElm"),E(this,"lastFocusedItemKey",""),E(this,"lastMouseOverPosition",""),E(this,"ulElm"),E(this,"parentElm"),E(this,"labelElm"),E(this,"selectAllParentElm"),E(this,"selectAllElm"),E(this,"searchInputElm"),E(this,"selectGroupElms"),E(this,"selectItemElms"),E(this,"noResultsElm"),E(this,"options"),E(this,"selectAllName",""),E(this,"selectGroupName",""),E(this,"selectItemName",""),E(this,"scrolledByMouse",!1),E(this,"openDelayTimer"),E(this,"updateDataStart"),E(this,"updateDataEnd"),E(this,"virtualScroll"),E(this,"_currentHighlightIndex",-1),E(this,"_currentSelectedElm"),E(this,"_isLazyLoaded",!1),E(this,"isMoveUpRecalcRequired",!1),E(this,"locales",{}),this.options=Object.assign({},ft.DEFAULTS,this.elm.dataset,e),this._bindEventService=new Fm({distinctEvent:!0})}get isRenderAsHtml(){return this.options.renderOptionLabelAsHtml||this.options.useSelectOptionLabelToHtml}init(){this.initLocale(),this.initContainer(),this.initData(),this.initSelected(!0),this.initFilter(),this.initDrop(),this.initView(),this.options.onAfterCreate()}destroy(t=!0){var e,o,i,s,l;this.elm&&this.parentElm&&(this.options.onDestroy({hardDestroy:t}),t&&this.options.onHardDestroy(),this.elm.parentElement&&this.parentElm.parentElement&&this.elm.parentElement.insertBefore(this.elm,this.parentElm.parentElement.firstChild),this.elm.classList.remove("ms-offscreen"),this._bindEventService.unbindAll(),(e=this.virtualScroll)==null||e.destroy(),(o=this.dropElm)==null||o.remove(),this.dropElm=void 0,(i=this.parentElm.parentNode)==null||i.removeChild(this.parentElm),this.fromHtml&&(delete this.options.data,this.fromHtml=!1),this.options.onAfterDestroy({hardDestroy:t}),t&&((l=(s=this.options).onAfterHardDestroy)==null||l.call(s),Object.keys(this.options).forEach(a=>delete this[a])))}initLocale(){if(this.options.locale){if(typeof this.options.locale=="object"){Object.assign(this.options,this.options.locale);return}let t=window.multipleSelect.locales,e=this.options.locale.split(/-|_/);if(e[0]=e[0].toLowerCase(),e[1]&&(e[1]=e[1].toUpperCase()),t[this.options.locale])Object.assign(this.options,t[this.options.locale]);else if(t[e.join("-")])Object.assign(this.options,t[e.join("-")]);else if(t[e[0]])Object.assign(this.options,t[e[0]]);else throw new Error(`[multiple-select-vanilla] invalid locales "${this.options.locale}", make sure to import it before using it`)}}initContainer(){var i;let t=this.elm.getAttribute("name")||this.options.name||"";this.options.classes&&this.elm.classList.add(this.options.classes),this.options.classPrefix&&(this.elm.classList.add(this.options.classPrefix),this.options.size&&this.elm.classList.add(`${this.options.classPrefix}-${this.options.size}`)),this.elm.style.display="none",this.labelElm=this.elm.closest("label"),!this.labelElm&&this.elm.id&&(this.labelElm=N("label",{htmlFor:this.elm.id})),(i=this.labelElm)!=null&&i.querySelector("input")&&(this.labelElm=null),this.options.single===void 0&&(this.options.single=!this.elm.multiple),this.parentElm=N("div",{className:mo(`ms-parent ${this.elm.className||""} ${this.options.classes}`).join(" "),dataset:{test:"sel"}}),this.options.darkMode&&this.parentElm.classList.add("ms-dark-mode");let e=this.elm.getAttribute("title")||"";e&&(this.parentElm.title=e),this.options.placeholder=this.options.placeholder||this.elm.getAttribute("placeholder")||"",this.choiceElm=N("button",{className:"ms-choice",type:"button"},this.parentElm),this.options.labelId&&(this.choiceElm.id=this.options.labelId,this.choiceElm.setAttribute("aria-labelledby",this.options.labelId)),this.choiceElm.appendChild(N("span",{className:"ms-placeholder",textContent:this.options.placeholder})),this.options.showClear&&(this.selectClearElm=N("div",{className:"ms-icon ms-icon-close"}),this.selectClearElm.style.display="none",this.choiceElm.appendChild(this.selectClearElm)),this.choiceElm.appendChild(N("div",{className:"ms-icon ms-icon-caret"})),this.dropElm=N("div",{className:`ms-drop ${this.options.position}`,ariaExpanded:"false"},this.parentElm),this.options.darkMode&&this.dropElm.classList.add("ms-dark-mode"),t&&(this.dropElm.dataset.name=t);let o=this.elm.getAttribute("data-test")||this.options.dataTest;o&&(this.parentElm.dataset.test=o,this.dropElm.dataset.test=o),this.closeElm=this.choiceElm.querySelector(".ms-icon-close"),this.options.dropWidth&&(this.dropElm.style.width=typeof this.options.dropWidth=="string"?this.options.dropWidth:`${this.options.dropWidth}px`),Jm(this.elm,this.parentElm),this.elm.disabled&&(this.choiceElm.classList.add("disabled"),this.choiceElm.disabled=!0),this.selectAllName=`selectAll${t}`,this.selectGroupName=`selectGroup${t}`,this.selectItemName=`selectItem${t}`,this.options.keepOpen||(this._bindEventService.unbindAll("body-click"),this._bindEventService.bind(document.body,"click",s=>{this.getEventTarget(s)===this.choiceElm||Yi(this.getEventTarget(s),".ms-choice")===this.choiceElm||(this.getEventTarget(s)===this.dropElm||Yi(this.getEventTarget(s),".ms-drop")!==this.dropElm&&this.getEventTarget(s)!==this.elm)&&this.options.isOpen&&this.close("body.click")},void 0,"body-click"))}initData(){let t=[];if(this.options.data){if(Array.isArray(this.options.data))this.data=this.options.data.map(e=>typeof e=="string"||typeof e=="number"?{text:e,value:e}:e);else if(typeof this.options.data=="object"){for(let[e,o]of Object.entries(this.options.data))t.push({value:e,text:`${o}`});this.data=t}}else this.elm.childNodes.forEach(e=>{let o=this.initRow(e);o&&t.push(o)}),this.options.data=t,this.data=t,this.fromHtml=!0;this.data&&this.options.preFilter&&(this.data=this.data.filter(this.options.preFilter)),this.data&&this.options.preSort&&(this.data=this.data.sort(this.options.preSort)),this.dataTotal=Gm(this.data||[])}initRow(t,e){var i,s;let o={};return((i=t.tagName)==null?void 0:i.toLowerCase())==="option"?(o.type="option",o.text=this.options.textTemplate(t),o.value=t.value,o.visible=!0,o.selected=!!t.selected,o.disabled=e||t.disabled,o.classes=t.getAttribute("class")||"",o.title=t.getAttribute("title")||"",t.dataset.value&&(o._value=t.dataset.value),Object.keys(t.dataset).length&&(o._data=t.dataset,o._data.divider&&(o.divider=o._data.divider)),o):((s=t.tagName)==null?void 0:s.toLowerCase())==="optgroup"?(o.type="optgroup",o.label=this.options.labelTemplate(t),o.visible=!0,o.selected=!!t.selected,o.disabled=t.disabled,o.children=[],Object.keys(t.dataset).length&&(o._data=t.dataset),t.childNodes.forEach(l=>{o.children.push(this.initRow(l,o.disabled))}),o):null}initDrop(){this.initList(!this.options.lazyData),this.update(!0),this.options.isOpen&&this.open(0),this.options.openOnHover&&this.parentElm&&(this._bindEventService.bind(this.parentElm,"mouseover",()=>this.open(null)),this._bindEventService.bind(this.parentElm,"mouseout",()=>this.close("hover.mouseout")))}initFilter(){if(this.filterText="",this.options.filter||!this.options.filterByDataLength)return;let t=0;for(let e of this.data||[])e.type==="optgroup"?t+=e.children.length:t+=1;this.options.filter=t>this.options.filterByDataLength}initList(t=!0){var e,o;if(t&&(this.options.filter&&(this.filterParentElm=N("div",{className:"ms-search"},this.dropElm),this.filterParentElm.appendChild(N("input",{autocomplete:"off",autocapitalize:"off",spellcheck:!1,type:"text",placeholder:this.options.filterPlaceholder||"🔎︎"})),this.options.showSearchClear&&this.filterParentElm.appendChild(N("span",{className:"ms-icon ms-icon-close"}))),this.options.selectAll&&!this.options.single)){let i=this.elm.getAttribute("name")||this.options.name||"";this.selectAllParentElm=N("div",{className:"ms-select-all",dataset:{key:"select_all"}});let s=document.createElement("label"),l=`ms-icon ${this.isAllSelected?"ms-icon-check":this.isPartiallyAllSelected?"ms-icon-minus":"ms-icon-uncheck"}`,a=N("div",{className:"icon-checkbox-container"},s);N("input",{type:"checkbox",ariaChecked:String(this.isAllSelected),checked:this.isAllSelected,dataset:{name:`selectAll${i}`}},a),N("div",{className:l},a),s.appendChild(N("span",{textContent:this.formatSelectAll()})),this.selectAllParentElm.appendChild(s),(e=this.dropElm)==null||e.appendChild(this.selectAllParentElm)}this.ulElm=N("ul",{className:"ms-list",role:"listbox",ariaExpanded:"false",ariaMultiSelectable:String(!this.options.single)}),(o=this.dropElm)==null||o.appendChild(this.ulElm),t&&this.options.showOkButton&&!this.options.single&&(this.okButtonElm=N("button",{className:"ms-ok-button",type:"button",textContent:this.formatOkButton()},this.dropElm)),this.initListItems()}initListItems(){var o;let t=0,e=this.getListRows();if(this.options.selectAll&&!this.options.single&&(t=-1),e.length>ft.BLOCK_ROWS*ft.CLUSTER_BLOCKS){let i=this.dropElm&&((o=this.dropElm)==null?void 0:o.style.display)!=="none";!i&&this.dropElm&&(this.dropElm.style.left="-10000",this.dropElm.style.display="block",this.dropElm.ariaExpanded="true");let s=()=>{if(this.virtualScroll){this._currentHighlightIndex=0,this.updateDataStart=this.virtualScroll.dataStart+t,this.updateDataEnd=this.virtualScroll.dataEnd+t,this.updateDataStart<0&&(this.updateDataStart=0,this._currentHighlightIndex=0);let l=this.getDataLength();this.updateDataEnd>l&&(this.updateDataEnd=l),this.ulElm&&(this.isMoveUpRecalcRequired?this.recalculateArrowMove("up"):this.virtualScroll.dataStart>this.updateDataStart&&this.recalculateArrowMove("down"))}};this.ulElm&&(this.virtualScroll?this.virtualScroll.reset(e):this.virtualScroll=new Wm({rows:e,scrollEl:this.ulElm,contentEl:this.ulElm,sanitizer:this.options.sanitizer,callback:()=>{s(),this.events()}})),s(),!i&&this.dropElm&&(this.dropElm.style.left="0",this.dropElm.style.display="none",this.dropElm.ariaExpanded="false")}else this.ulElm&&(Ye(this.ulElm),e.forEach(i=>this.ulElm.appendChild(Oo(i)))),this.updateDataStart=0,this.updateDataEnd=this.updateData.length;return this.events(),e}getEventTarget(t){return t.composedPath?t.composedPath()[0]:t.target}getListRows(){var e;let t=[];return this.updateData=[],(e=this.data)==null||e.forEach(o=>t.push(...this.initListItem(o))),this.options.infiniteScroll&&t.push({tagName:"li",props:{className:"ms-infinite-option",role:"option"}}),t.push({tagName:"li",props:{className:"ms-no-results",textContent:this.formatNoMatchesFound()}}),t}initListItem(t,e=0){let o=(t==null?void 0:t.title)||"",i=this.options.multiple?"multiple":"",s=this.options.single?"radio":"checkbox",l=!!(t!=null&&t.selected),a=this.options.single&&!this.options.singleRadio,c="";if(!(t!=null&&t.visible))return[];if(this.updateData.push(t),a&&(c="hide-radio "),t.selected&&(c+="selected "),t.type==="optgroup"){let k=[],C;if(this.options.hideOptgroupCheckboxes||this.options.single)C={tagName:"span",props:{dataset:{name:this.selectGroupName,key:t._key}}};else{let T={tagName:"input",props:{type:"checkbox",dataset:{name:this.selectGroupName,key:t._key},checked:l,disabled:t.disabled}};a?C=T:C={tagName:"div",props:{className:`icon-checkbox-container${s==="radio"?" radio":""}`},children:[T,{tagName:"div",props:{className:`ms-icon ${l?s==="radio"?"ms-icon-radio":"ms-icon-check":"ms-icon-uncheck"}`}}]}}!c.includes("hide-radio")&&(this.options.hideOptgroupCheckboxes||this.options.single)&&(c+="hide-radio ");let I={tagName:"span",props:{}};this.applyAsTextOrHtmlWhenEnabled(I.props,t.label);let $={tagName:"li",props:{className:mo(`group${this.options.single||t.disabled?" disabled":""} ${c}`).join(" "),role:"option",ariaSelected:String(l),dataset:{key:t._key}},children:[{tagName:"label",props:{className:mo(`optgroup${this.options.single||t.disabled?" disabled":""}`).join(" ")},children:[C,I]}]},y=this.options.cssStyler(t);return y&&($.props.style=y),k.push($),t.children.forEach(T=>k.push(...this.initListItem(T,1))),k}if(c+=t.classes||"",e&&this.options.single&&(c+=`option-level-${e} `),t.divider)return[{tagName:"li",props:{className:"option-divider"}}];let p=i||c?(i+c).trim():"";t.disabled&&(p+=" disabled");let d=`${t.disabled?"disabled":""}`,g={tagName:"span",props:{}};this.applyAsTextOrHtmlWhenEnabled(g.props,t.text);let f={tagName:"input",props:{type:s,value:encodeURI(t.value),dataset:{key:t._key,name:this.selectItemName},checked:l,disabled:!!t.disabled}};t.selected&&(f.attrs={checked:"checked"});let b={tagName:"div",props:{className:`icon-checkbox-container${s==="radio"?" radio":""}`},children:[f,{tagName:"div",props:{className:`ms-icon ${f.props.checked?s==="radio"?"ms-icon-radio":"ms-icon-check":"ms-icon-uncheck"}`}}]},O={tagName:"li",props:{role:"option",title:o,ariaSelected:String(l),dataset:{key:t._key}},children:[{tagName:"label",props:{className:d},children:[a?f:b,g]}]};p&&(O.props.className=p);let A=this.options.cssStyler(t);return A&&(O.props.style=A),[O]}initSelected(t=!1){var o,i;let e=0;for(let s of this.data||[])if(s.type==="optgroup"){let l=s.children.filter(a=>(a==null?void 0:a.selected)&&!a.disabled&&a.visible).length;s.children.length&&(s.selected=!this.options.single&&l&&l===s.children.filter(a=>a&&!a.disabled&&a.visible&&!a.divider).length),e+=l}else e+=s.selected&&!s.disabled&&s.visible?1:0;if(this.isAllSelected=((o=this.data)==null?void 0:o.filter(s=>s.selected&&!s.disabled&&s.visible).length)===((i=this.data)==null?void 0:i.filter(s=>!s.disabled&&s.visible&&!s.divider).length),this.isPartiallyAllSelected=!this.isAllSelected&&e>0,!t){let s="";this.isAllSelected?s="onCheckAll":e===0&&(s="onUncheckAll"),s&&(this.options[s](),this.handleOnChange(s))}}initView(){let t;window.getComputedStyle?(t=window.getComputedStyle(this.elm).width,t==="auto"&&(t=En(this.dropElm,"outer","width")+20)):t=En(this.elm,"outer","width")+20,this.parentElm.style.width=`${this.options.width||t}px`,this.elm.classList.add("ms-offscreen")}events(){var e,o,i,s,l,a,c;this._bindEventService.unbindAll(["ok-button","search-input","select-all-checkbox","input-checkbox-list","group-checkbox-list","hover-highlight","arrow-highlight","option-list-scroll"]),this.clearSearchIconElm=(e=this.filterParentElm)==null?void 0:e.querySelector(".ms-icon-close"),this.searchInputElm=(o=this.dropElm)==null?void 0:o.querySelector(".ms-search input"),this.selectAllElm=(i=this.dropElm)==null?void 0:i.querySelector(`input[data-name="${this.selectAllName}"]`),this.selectGroupElms=(s=this.dropElm)==null?void 0:s.querySelectorAll(`input[data-name="${this.selectGroupName}"],span[data-name="${this.selectGroupName}"]`),this.selectItemElms=(l=this.dropElm)==null?void 0:l.querySelectorAll(`input[data-name="${this.selectItemName}"]:enabled`),this.noResultsElm=(a=this.dropElm)==null?void 0:a.querySelector(".ms-no-results");let t=p=>{p.preventDefault(),!this.getEventTarget(p).classList.contains("ms-icon-close")&&(this.options.isOpen?this.close("toggle.close"):this.open())};this.labelElm&&this._bindEventService.bind(this.labelElm,"click",p=>{this.getEventTarget(p).nodeName.toLowerCase()==="label"&&(t(p),(!this.options.filter||!this.options.isOpen)&&this.focus(),p.stopPropagation())}),this._bindEventService.bind(this.choiceElm,"click",t),this.options.onFocus&&this._bindEventService.bind(this.choiceElm,"focus",this.options.onFocus),this.options.onBlur&&this._bindEventService.bind(this.choiceElm,"blur",this.options.onBlur),this._bindEventService.bind(this.parentElm,"keydown",p=>{p.code==="Escape"&&this.handleEscapeKey()}),this.closeElm&&this._bindEventService.bind(this.closeElm,"click",p=>{p.preventDefault(),this._checkAll(!1,!0),this.initSelected(!1),this.updateSelected(),this.update(),this.options.onClear()}),this.clearSearchIconElm&&this._bindEventService.bind(this.clearSearchIconElm,"click",p=>{p.preventDefault(),this.searchInputElm&&(this.searchInputElm.value="",this.searchInputElm.focus()),this._currentHighlightIndex=-1,this.moveHighlightDown(),this.filter(),this.options.onFilterClear()}),this.searchInputElm&&(this._bindEventService.bind(this.searchInputElm,"keydown",p=>{p.code==="Tab"&&p.shiftKey&&this.close("key.shift+tab")},void 0,"search-input"),this._bindEventService.bind(this.searchInputElm,"keyup",p=>{var d,g,f;if(this.options.filterAcceptOnEnter&&["Enter","Space"].includes(p.code)&&((d=this.searchInputElm)!=null&&d.value)){if(this.options.single){let b=[];(g=this.selectItemElms)==null||g.forEach(O=>{var A;((A=O.closest("li"))==null?void 0:A.style.display)!=="none"&&b.push(O)}),b.length&&b[0].hasAttribute("data-name")&&this.setSelects([b[0].value])}else(f=this.selectAllElm)==null||f.click();this.close(`key.${p.code.toLowerCase()}`),this.focus();return}this.filter()},void 0,"search-input")),this.selectAllElm&&this._bindEventService.bind(this.selectAllElm,"click",p=>{var d;return this._checkAll((d=p.currentTarget)==null?void 0:d.checked)},void 0,"select-all-checkbox"),this.okButtonElm&&this._bindEventService.bind(this.okButtonElm,"click",p=>{t(p),p.stopPropagation()},void 0,"ok-button"),this.selectGroupElms&&this._bindEventService.bind(this.selectGroupElms,"click",p=>{let d=p.currentTarget,g=d.checked,f=_n(this.data,"_key",d.dataset.key);this._checkGroup(f,g),this.options.onOptgroupClick(co({label:f.label,selected:!!f.selected,data:f._data,children:f.children.filter(b=>b).map(b=>co({label:b.text,value:b.value,selected:b.selected,disabled:b.disabled,data:b._data}))})),this.handleOnChange("onOptgroupClick",{label:f.label,selected:!!f.selected,type:f.type})},void 0,"group-checkbox-list"),this.selectItemElms&&this._bindEventService.bind(this.selectItemElms,"click",p=>{let d=p.currentTarget,g=d.checked,f=_n(this.data,"_key",d.dataset.key),b=()=>{this.options.single&&this.options.isOpen&&!this.options.keepOpen&&this.close("selection")};if(this.options.onBeforeClick(f)===!1){b();return}this._check(f,g),this.options.onClick(co({label:f.text,value:f.value,selected:f.selected,data:f._data})),this.handleOnChange("onClick",{label:f.text,value:f.value,selected:f.selected,type:f.type}),b()},void 0,"input-checkbox-list"),this.lastFocusedItemKey&&this.dropElm&&((c=this.dropElm.querySelector(`li[data-key=${this.lastFocusedItemKey}]`))==null||c.focus()),this.options.navigationHighlight&&this.dropElm&&(this._bindEventService.bind(this.dropElm,"mouseover",p=>{var g,f;let d=this.getEventTarget(p).closest(".ms-select-all")||this.getEventTarget(p).closest("li");if((g=this.dropElm)!=null&&g.contains(d)&&this.lastMouseOverPosition!==`${p.clientX}:${p.clientY}`){let b=((f=this.dropElm)==null?void 0:f.querySelectorAll(Ve))||[],O=Array.from(b).findIndex(A=>A.dataset.key===d.dataset.key);this._currentHighlightIndex!==O&&!d.classList.contains("disabled")&&(this._currentSelectedElm=d,this._currentHighlightIndex=O,this.changeCurrentOptionHighlight(d))}this.lastMouseOverPosition=`${p.clientX}:${p.clientY}`},void 0,"hover-highlight"),this._bindEventService.bind(this.dropElm,"keydown",p=>{var d,g,f,b,O,A;switch(p.key){case"ArrowUp":p.preventDefault(),this.moveHighlightUp();break;case"ArrowDown":p.preventDefault(),this.moveHighlightDown();break;case"Escape":this.handleEscapeKey();break;case"Enter":case" ":{if(document.activeElement!==this.okButtonElm){let k=this.getEventTarget(p).closest(".ms-select-all")||this.getEventTarget(p).closest("li");if(p.key===" "&&this.options.filter||this.options.filterAcceptOnEnter&&!k)return;p.preventDefault(),(g=(d=this._currentSelectedElm)==null?void 0:d.querySelector("input"))==null||g.click(),this.options.single&&(this.choiceElm.focus(),this.lastFocusedItemKey=((f=this.choiceElm)==null?void 0:f.dataset.key)||"")}break}case"Tab":{p.preventDefault();let k=!this.options.single&&this.options.showOkButton;k&&p.shiftKey&&document.activeElement===this.okButtonElm?(this.focusSelectAllOrList(),this.highlightCurrentOption(),(O=(b=this.filterParentElm)==null?void 0:b.querySelector("input"))==null||O.focus()):k&&!p.shiftKey&&document.activeElement!==this.okButtonElm?(this.changeCurrentOptionHighlight(),(A=this.okButtonElm)==null||A.focus()):(this.options.onBlur(p),this.options.isOpen&&this.options.closeOnTab&&this.close("blur"));break}}},void 0,"arrow-highlight")),this.ulElm&&this.options.infiniteScroll&&this._bindEventService.bind(this.ulElm,"scroll",this.infiniteScrollHandler.bind(this),void 0,"option-list-scroll")}handleOnChange(t,e){this.options.onChange({eventName:t,item:e,selection:{labels:this.getSelects("text"),values:this.getSelects("value")}})}handleEscapeKey(){this.options.keepOpen||(this.close("key.escape"),this.choiceElm.focus())}infiniteScrollHandler(t,e,o){let i=!1;t&&this.getEventTarget(t)&&this.ulElm&&this.scrolledByMouse?this.getEventTarget(t).scrollTop+this.getEventTarget(t).clientHeight===this.ulElm.scrollHeight&&(i=!0):e!==void 0&&e+1===o&&(i=!0),i&&this.ulElm&&(this.virtualScroll?this.initListItems():this.ulElm.scrollTop=0,this._currentHighlightIndex=0,this.highlightCurrentOption())}open(t=0){return new Promise(e=>{t!==null&&t>=0?(window.clearTimeout(this.openDelayTimer),this.openDelayTimer=window.setTimeout(()=>{this.openDrop(),e()},t)):(this.openDrop(),e())})}openDrop(){var e,o,i,s,l,a,c;if(!this.dropElm||(e=this.choiceElm)!=null&&e.classList.contains("disabled"))return;this.options.onBeforeOpen();let t=!1;if(this.options.lazyData&&!this._isLazyLoaded&&(t=!0,(i=(o=this.dropElm)==null?void 0:o.querySelector("ul.ms-list"))==null||i.remove(),this.options.lazyData().then(p=>{var d,g;this.options.data=p,this._isLazyLoaded=!0,(g=(d=this.dropElm)==null?void 0:d.querySelector(".ms-loading"))==null||g.remove(),this.initData(),this.initList(!0),this.update(),this.adjustDropSizeAndPosition()})),this.options.isOpen=!0,this.parentElm.classList.add("ms-parent-open"),(l=(s=this.choiceElm)==null?void 0:s.querySelector("div.ms-icon-caret"))==null||l.classList.add("open"),this.dropElm.style.display="block",this.dropElm.ariaExpanded="true",(a=this.selectAllElm)!=null&&a.parentElement&&(this.selectAllElm.parentElement.style.display="inline-flex"),this.noResultsElm&&(this.noResultsElm.style.display="none"),!this.getDataLength())if((c=this.selectAllElm)!=null&&c.parentElement&&(this.selectAllElm.parentElement.style.display="none"),t&&!this._isLazyLoaded&&!this.dropElm.querySelector(".ms-loading")){let p=N("div",{className:"ms-loading"});p.appendChild(N("div",{className:"ms-icon ms-icon-loading ms-spin"})),p.appendChild(N("span",{textContent:this.formatLazyLoading()})),this.dropElm.appendChild(p)}else this.noResultsElm&&(this.noResultsElm.style.display="block");this.adjustDropSizeAndPosition(),(!t||this._isLazyLoaded)&&(this.getDataLength()&&this.options.filter?(this.searchInputElm&&(this.searchInputElm.value="",this.searchInputElm.focus()),this.filter(!0)):this.focusSelectAllOrList()),this._currentHighlightIndex<0?this.moveHighlightDown():this.highlightCurrentOption(),this.options.onOpen()}adjustDropSizeAndPosition(){if(this.dropElm){if(this.options.container){let i=ko(this.dropElm),s;this.options.container instanceof Node?s=this.options.container:typeof this.options.container=="string"&&(s=this.options.container==="body"?document.body:document.querySelector(this.options.container)),s.appendChild(this.dropElm),this.dropElm.style.top=`${(i==null?void 0:i.top)??0}px`,this.dropElm.style.left=`${(i==null?void 0:i.left)??0}px`,this.dropElm.style.minWidth="auto",this.dropElm.style.width=`${En(this.parentElm,"outer","width")}px`}let t=this.options.minHeight,e=this.options.maxHeight;this.options.maxHeightUnit==="row"&&(e=En(this.dropElm.querySelector("ul>li"),"outer","height")*this.options.maxHeight),this.ulElm??(this.ulElm=this.dropElm.querySelector("ul")),this.ulElm&&(t&&(!this.options.lazyData||this._isLazyLoaded)&&(this.ulElm.style.minHeight=`${t}px`),this.ulElm.style.maxHeight=`${e}px`),this.dropElm.querySelectorAll(".multiple").forEach(i=>{i.style.width=`${this.options.multipleWidth}px`}),this.options.autoAdjustDropWidthByTextSize&&this.adjustDropWidthByText();let o=this.options.position;if(this.options.autoAdjustDropHeight){if(this.options.autoAdjustDropPosition){let{bottom:i,top:s}=uo(this.dropElm),l=this.dropElm.getBoundingClientRect().height;o=i<l&&s>i?"top":"bottom"}this.adjustDropHeight(o)}this.options.autoAdjustDropPosition&&this.adjustDropPosition(!0)}}focusSelectAllOrList(){this.selectAllElm?this.selectAllElm.focus():this.ulElm&&(this.ulElm.tabIndex=0,this.ulElm.focus())}highlightCurrentOption(){var e;let t=((e=this.dropElm)==null?void 0:e.querySelectorAll(Ve))||[];if(this._currentHighlightIndex<=t.length){let o=t[this._currentHighlightIndex];o&&(this.lastFocusedItemKey=o.dataset.key||"",this._currentSelectedElm=o,this.scrolledByMouse=!1,o.scrollIntoView({block:"nearest"}),this.changeCurrentOptionHighlight(o),window.setTimeout(()=>this.scrolledByMouse=!0,10))}}changeCurrentOptionHighlight(t){var e;t==null||t.classList.add("highlighted"),(((e=this.dropElm)==null?void 0:e.querySelectorAll(Vm))||[]).forEach(o=>{o!==t&&o.classList.remove("highlighted")})}moveHighlightDown(){var o,i;let t=((o=this.dropElm)==null?void 0:o.querySelectorAll(Ve))||[],e=t.length;this._currentHighlightIndex<e-1?(this._currentHighlightIndex++,(i=t[this._currentHighlightIndex])!=null&&i.classList.contains("disabled")&&this.moveHighlightDown()):this.options.infiniteScroll&&this.infiniteScrollHandler(null,this._currentHighlightIndex,e),this.highlightCurrentOption()}moveHighlightUp(){var o,i;let t=((o=this.dropElm)==null?void 0:o.querySelectorAll(Ve))||[],e=this.options.single?0:1;if(this.virtualScroll&&this._currentHighlightIndex<=e&&this.updateDataStart>0&&this.ulElm){let s=t[this._currentHighlightIndex+(this.options.single?0:1)],l=s==null?void 0:s.dataset.key;this.lastFocusedItemKey=l,this.ulElm.scrollTop=this.ulElm.scrollTop-(s==null?void 0:s.getBoundingClientRect().height)||10,this.isMoveUpRecalcRequired=!0;return}this._currentHighlightIndex>0&&(this._currentHighlightIndex--,(i=t[this._currentHighlightIndex])!=null&&i.classList.contains("disabled")&&this.moveHighlightUp()),this.highlightCurrentOption()}recalculateArrowMove(t){var i;let e=((i=this.dropElm)==null?void 0:i.querySelectorAll(Ve))||[],o=Array.from(e).findIndex(s=>s.dataset.key===this.lastFocusedItemKey);this._currentHighlightIndex=o-1,t==="down"?this.moveHighlightDown():t==="up"&&(this.moveHighlightUp(),this.isMoveUpRecalcRequired=!1)}close(t){var e,o;this.options.isOpen=!1,this.parentElm.classList.remove("ms-parent-open"),(o=(e=this.choiceElm)==null?void 0:e.querySelector("div.ms-icon-caret"))==null||o.classList.remove("open"),this.dropElm&&(this.dropElm.style.display="none",this.dropElm.ariaExpanded="false",this.options.container&&(this.parentElm.appendChild(this.dropElm),this.dropElm.style.top="auto",this.dropElm.style.left="auto")),this.options.onClose(t)}applyAsTextOrHtmlWhenEnabled(t,e){t||(t={}),this.isRenderAsHtml?t.innerHTML=typeof this.options.sanitizer=="function"?this.options.sanitizer(e):e:t.textContent=e}update(t=!1){var p;let e=this.getSelects(),o=this.getSelects("text");this.options.displayValues&&(o=e);let i=(p=this.choiceElm)==null?void 0:p.querySelector("span"),s=e.length,l=null,a=()=>{if(this.options.useSelectOptionLabel||this.options.useSelectOptionLabelToHtml){let d=e.join(this.options.displayDelimiter);return this.options.useSelectOptionLabelToHtml?Um(d):d}return o.join(this.options.displayDelimiter)};if(i){if(s===0){let d=this.options.placeholder||"";i.classList.add("ms-placeholder"),this.applyAsTextOrHtmlWhenEnabled(i,d)}else s<this.options.minimumCountSelected?l=a():this.formatAllSelected()&&s===this.dataTotal?l=this.formatAllSelected():this.options.ellipsis&&s>this.options.minimumCountSelected?l=`${o.slice(0,this.options.minimumCountSelected).join(this.options.displayDelimiter)}...`:this.formatCountSelected(s,this.dataTotal)&&s>this.options.minimumCountSelected?l=this.formatCountSelected(s,this.dataTotal):l=a();if(l!==null&&(i==null||i.classList.remove("ms-placeholder"),this.applyAsTextOrHtmlWhenEnabled(i,l)),this.options.showClear&&this.selectClearElm){let d=l?"block":"none";this.selectClearElm.style.display=d}if(this.options.displayTitle){let d=this.options.useSelectOptionLabel||this.options.useSelectOptionLabelToHtml?"value":"text";i.title=this.getSelects(d).join(this.options.displayDelimiter)}}let c=this.getSelects();this.options.single?this.elm.value=c.length?c[0]:"":Array.from(this.elm.options).forEach(d=>{d.selected=c.some(g=>g===d.value)}),t||this.elm.dispatchEvent(new Event("change"))}updateSelected(t){var o,i,s;for(let l=this.updateDataStart;l<this.updateDataEnd;l++){let a=this.updateData[l],c=(o=this.dropElm)==null?void 0:o.querySelector(`input[data-key=${a._key}]`);if(c){c.checked=a.selected;let p=c.closest("li"),d=p==null?void 0:p.querySelector(".icon-checkbox-container div");p&&(a.selected&&!p.classList.contains("selected")?(p.classList.add("selected"),p.ariaSelected="true",d&&(d.className=`ms-icon ms-icon-${c.type==="radio"?"radio":"check"}`)):a.selected||(p.classList.remove("selected"),p.ariaSelected="false",d&&(d.className="ms-icon ms-icon-uncheck")))}}let e=((i=this.data)==null?void 0:i.filter(l=>l.visible).length)===0;if(this.selectAllElm){this.selectAllElm.ariaChecked=String(this.isAllSelected);let l=(s=this.dropElm)==null?void 0:s.querySelector(".ms-select-all .icon-checkbox-container div");if(l){let a="";this.isAllSelected?a="ms-icon-check":this.isPartiallyAllSelected?a="ms-icon-minus":a="ms-icon-uncheck",l.className=`ms-icon ${a}`}this.selectAllElm.checked=this.isAllSelected,Xi(this.selectAllElm.closest("li"),!e)}Xi(this.noResultsElm,e),this.virtualScroll&&(this.virtualScroll.rows=t??this.getListRows())}getData(){return this.options.data}getDataLength(){var t;return((t=this.data)==null?void 0:t.length)??0}getOptions(t=!0){let e=Object.assign({},this.options);return delete e.data,t?Ao(e):this.options}refreshOptions(t){Hm(this.options,t,!0)||(this.options=Object.assign(this.options,t),this.destroy(!1),this.init())}getDropElement(){return this.dropElm}getParentElement(){return this.parentElm}getSelects(t="value"){let e=[];for(let o of this.data||[])if(o.type==="optgroup"){let i=o.children.filter(s=>s==null?void 0:s.selected);if(!i.length)continue;if(t==="value"||this.options.single)e.push(...i.map(s=>t==="value"&&s._value||s[t]));else{let s=[];s.push("["),s.push(o.label),s.push(`: ${i.map(l=>l[t]).join(", ")}`),s.push("]"),e.push(s.join(""))}}else o.selected&&e.push(t==="value"&&o._value||o[t]);return e}setSelects(t,e="value",o=!1){let i=!1,s=l=>{var a;for(let c of l){let p=!1;if(e==="text"){let d=document.createElement("div");this.applyAsTextOrHtmlWhenEnabled(d,c.text),p=t.includes(((a=d.textContent)==null?void 0:a.trim())??"")}else p=t.includes(c._value||c.value),!p&&c.value===`${+c.value}`&&(p=t.includes(+c.value));c.selected!==p&&(i=!0),c.selected=p}};for(let l of this.data||[])l.type==="optgroup"?s(l.children):s([l]);i&&(this.initSelected(o),this.updateSelected(),this.update(o))}enable(){this.choiceElm&&(this.choiceElm.classList.remove("disabled"),this.choiceElm.disabled=!1)}disable(){var t;this.choiceElm&&((t=this.choiceElm)==null||t.classList.add("disabled"),this.choiceElm.disabled=!0)}check(t){let e=_n(this.data,"value",t);e&&this._check(e,!0)}uncheck(t){let e=_n(this.data,"value",t);e&&this._check(e,!1)}_check(t,e){this.options.single&&this._checkAll(!1,!0),t.selected=e,this.initSelected(),this.updateSelected(),this.update()}checkAll(){this._checkAll(!0)}uncheckAll(){this._checkAll(!1)}_checkAll(t,e){for(let o of this.data||[])o.type==="optgroup"?this._checkGroup(o,t,!0):!o.disabled&&!o.divider&&(e||o.visible)&&(o.selected=t);e||(this.initSelected(),this.updateSelected(),this.update())}_checkGroup(t,e,o){t.selected=e,t.children.forEach(i=>{i&&!i.disabled&&!i.divider&&(o||i.visible)&&(i.selected=e)}),o||(this.initSelected(),this.updateSelected(),this.update())}checkInvert(){if(!this.options.single){for(let t of this.data||[])if(t.type==="optgroup")for(let e of t.children)e&&(e.divider||(e.selected=!e.selected));else t&&!t.divider&&(t.selected=!t.selected);this.initSelected(),this.updateSelected(),this.update()}}focus(){var t;(t=this.choiceElm)==null||t.focus(),this.options.onFocus()}blur(){var t;(t=this.choiceElm)==null||t.blur(),this.options.onBlur()}refresh(){this.destroy(!1),this.init()}filter(t){var s;let e=((s=this.searchInputElm)==null?void 0:s.value.trim())??"",o=e.toLowerCase();if(this.filterText===o)return;this.filterText=o;for(let l of this.data||[])if(l.type==="optgroup")if(this.options.filterGroup){let a=`${(l==null?void 0:l.label)??""}`;if(l!=null){let c=this.options.customFilter({label:_e(a.toString().toLowerCase(),this.options.diacriticParser),search:_e(o,this.options.diacriticParser),originalLabel:a,originalSearch:e,row:l});l.visible=c;for(let p of l.children)p&&(p.visible=c)}}else{for(let a of l.children)if(a!=null){let c=`${(a==null?void 0:a.text)??""}`;a.visible=this.options.customFilter({text:_e(c.toString().toLowerCase(),this.options.diacriticParser),search:_e(o,this.options.diacriticParser),originalText:c,originalSearch:e,row:a,parent:l})}l.visible=l.children.filter(a=>a==null?void 0:a.visible).length>0}else{let a=`${(l==null?void 0:l.text)??""}`;l.visible=this.options.customFilter({text:_e(a.toString().toLowerCase(),this.options.diacriticParser),search:_e(o,this.options.diacriticParser),originalText:a,originalSearch:e,row:l})}let i=this.initListItems();this.initSelected(t),this.updateSelected(i),t||this.options.onFilter(e)}adjustDropHeight(t){var d,g,f,b;let e=t!=="top",o=((d=this.filterParentElm)==null?void 0:d.getBoundingClientRect().height)??0,i=((g=this.okButtonElm)==null?void 0:g.getBoundingClientRect().height)??0,s=this.options.single?0:((f=this.selectAllParentElm)==null?void 0:f.getBoundingClientRect().height)??0,l=o+i+s+5,{bottom:a,top:c}=uo(this.parentElm),p=this.options.maxHeight;if(e?p=a-l-this.options.adjustedHeightPadding:p=c-l-this.options.adjustedHeightPadding,!this.options.maxHeight||this.options.maxHeight&&p<this.options.maxHeight){let O=(b=this.dropElm)==null?void 0:b.querySelector("ul");return O&&(O.style.maxHeight=`${p}px`),!0}return!1}adjustDropPosition(t){let e="bottom";if(this.dropElm&&this.parentElm){let{bottom:o,top:i}=uo(this.dropElm),{top:s,left:l}=ko(this.parentElm),a=this.dropElm.getBoundingClientRect().height,c=this.dropElm.getBoundingClientRect().width,p=document.body.offsetWidth||window.innerWidth,d=this.parentElm.getBoundingClientRect().width;if(o>a)e="bottom";else if(a>o&&i>o){if(this.options.container){let g=s-a;g<0&&(g=0),(g>0||t)&&(e="top",this.dropElm.style.top=`${g<0?0:g}px`)}else e="top",this.dropElm.classList.add(e);this.dropElm.classList.remove("bottom")}p-c<l&&(this.dropElm.style.left=`${l-(c-d)}px`)}return e}adjustDropWidthByText(){if(this.dropElm){let t=this.parentElm.scrollWidth;(this.options.dropWidth||this.options.width)&&(t=this.options.dropWidth||this.options.width||0);let e=this.dropElm.querySelector(".ms-select-all span"),o=this.dropElm.querySelector("ul");if(o){let i=(e==null?void 0:e.clientWidth)??26,s=o.scrollHeight>o.clientHeight?this.getScrollbarWidth():0,l=0;this.dropElm.querySelectorAll("li label").forEach(a=>{a.scrollWidth>l&&(l=a.scrollWidth)}),l+=26+s,l<i&&(l=i),this.options.maxWidth&&l>this.options.maxWidth&&(l=this.options.maxWidth),this.options.minWidth&&l<this.options.minWidth&&(l=this.options.minWidth),(t==="100%"||+t<l)&&(this.dropElm.style.width=`${l}px`,this.dropElm.style.maxWidth=`${l}px`)}}}getScrollbarWidth(){var s;let t=N("div",{style:{visibility:"hidden",width:"100px"}});document.body.appendChild(t);let e=t.offsetWidth;t.style.overflow="scroll";let o=N("div",{style:{width:"100%"}});t.appendChild(o);let i=o.offsetWidth;return(s=t.parentNode)==null||s.removeChild(t),e-i}formatAllSelected(){return this.options.allSelectedText||this.options.formatAllSelected()}formatCountSelected(t,e){return this.options.countSelectedText?this.options.countSelectedText.replace("#",`${t}`).replace("%",`${e}`):this.options.formatCountSelected(t,e)}formatNoMatchesFound(){return this.options.noMatchesFoundText||this.options.formatNoMatchesFound()}formatOkButton(){return this.options.okButtonText||this.options.formatOkButton()}formatLazyLoading(){return this.options.lazyLoadingText||this.options.formatLazyLoading()}formatSelectAll(){return this.options.selectAllText||this.options.formatSelectAll()}},m=(n,t)=>typeof n=="string"?ho(document.querySelectorAll(n),t):n instanceof Node?ho([n],t):ho(n,t);function ho(n,t){let e=Array.from(n),o=[];for(let i=0;i<e.length;i++){let s=e[i];try{s._multipleSelect!==void 0&&(s._multipleSelect.destroy(),delete s._multipleSelect),s._multipleSelect=new qm(s,t||{}),s._multipleSelect.init();let l=s._multipleSelect.getOptions(!1);l.onHardDestroy=()=>delete s._multipleSelect,l.onAfterHardDestroy=()=>o[i]=null,o.push(s._multipleSelect)}catch(l){console.error(l)}}return o.length===1?o[0]:o}m.defaults=ft.DEFAULTS;m.locales={...ml};m.methods=ft.METHODS;window!==void 0&&(window.multipleSelect=m);let Km=class{constructor(){u(this,"logElm");u(this,"ms1")}mount(){this.logElm=document.querySelector("textarea"),this.ms1=m("select",{filter:!0,showSearchClear:!0,onBeforeOpen:()=>{this.log(`onBeforeOpen event fire!
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
`)},onChange:t=>{this.log(`onChange event fire! data: ${JSON.stringify(t)}
`)}})}log(t){this.logElm.textContent+=t,this.logElm.scrollTo(0,this.logElm.scrollHeight)}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},fl=class{constructor(){u(this,"ms",[])}mount(){this.ms=m(".multiple-select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Ym=class{constructor(){u(this,"ms",[])}mount(){this.ms=m(".multiple-select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Xm=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select",{multiple:!0,multipleWidth:70})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Qm=class{constructor(){u(this,"multiMs",[]);u(this,"singleMs")}mount(){this.multiMs=m(".select"),this.singleMs=m(".data",{data:[{value:1,text:"Options 1",selected:!0},{value:2,text:"Options 2"},{value:3,text:"Options 3"}]})}unmount(){var t;this.multiMs.forEach(e=>e.destroy()),this.multiMs=[],(t=this.singleMs)==null||t.destroy(),this.singleMs=void 0}},Zm=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select")}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},th=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},eh=class{constructor(){u(this,"btnElm");u(this,"ms",[]);u(this,"clickListener",()=>{const t=this.serialize(document.querySelector("form"));alert(t)})}mount(){this.ms=m("select"),this.btnElm=document.querySelector(".submit7"),this.btnElm.addEventListener("click",this.clickListener)}unmount(){this.btnElm.removeEventListener("click",this.clickListener),this.ms.forEach(t=>t.destroy()),this.ms=[]}serialize(t){const e=[];return t.querySelectorAll("[name]").forEach(o=>{const i=Array.from(o.selectedOptions);for(const s of i)e.push(`${o.name}=${s.value}`)}),e.length>0?e.join("&"):!1}},nh=class{constructor(){u(this,"ms1");u(this,"ms2");u(this,"ms3");u(this,"ms4");u(this,"ms5")}mount(){this.ms1=m("#basic",{dataTest:"select1",data:[{text:"January",value:1},{text:"February",value:2},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}),this.ms2=m("#object",{dataTest:"select2",data:{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}}),this.ms3=m("#string",{dataTest:"select3",data:["January","February","March"]}),this.ms4=m("#number",{dataTest:"select4",data:[1,2,3]}),this.ms5=m("#group",{dataTest:"select5",data:[{type:"optgroup",label:"Group 1",children:[{text:"January",value:1,selected:!0},{text:"February",value:2,disabled:!0},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6}]},{type:"optgroup",label:"Group 2",children:[{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}]})}unmount(){var t,e,o,i,s;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),(s=this.ms5)==null||s.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0}};var bl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},gl={formatSelectAll(){return"[Seleccionar todo]"},formatAllSelected(){return"Todos seleccionados"},formatCountSelected(n,t){return`${n} de ${t} seleccionado`},formatNoMatchesFound(){return"No se encontraron coincidencias"},formatOkButton(){return"Cerrar"},formatLazyLoading(){return"Cargando..."}};bl.locales["es-ES"]=gl;bl.locales;var _l=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},oh={formatSelectAll(){return"[Vybrat vše]"},formatAllSelected(){return"Vše vybráno"},formatCountSelected(n,t){return`${n} z ${t} vybráno`},formatNoMatchesFound(){return"Nebylo nalezeno"},formatOkButton(){return"Zavřít"},formatLazyLoading(){return"Načítám se..."}};_l.locales["cz-CS"]=oh;_l.locales;var El=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},ih={formatSelectAll(){return"[Vælg alle]"},formatAllSelected(){return"Alle valgt"},formatCountSelected(n,t){return`${n} af ${t} valgt`},formatNoMatchesFound(){return"Søgning uden resultat"},formatOkButton(){return"Lukke"},formatLazyLoading(){return"Indlæser nu..."}};El.locales["da-DK"]=ih;El.locales;var yl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},sh={formatSelectAll(){return"[Alles auswählen]"},formatAllSelected(){return"Alles ausgewählt"},formatCountSelected(n,t){return`${n} von ${t} ausgewählt`},formatNoMatchesFound(){return"Keine Ergebnisse"},formatOkButton(){return"Schließen"},formatLazyLoading(){return"Jetzt wird geladen..."}};yl.locales["de-DE"]=sh;yl.locales;var wl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},lh={formatSelectAll(){return"[Select all]"},formatAllSelected(){return"All selected"},formatCountSelected(n,t){return`${n} of ${t} selected`},formatNoMatchesFound(){return"No matches found"},formatOkButton(){return"OK"},formatLazyLoading(){return"Loading..."}};wl.locales["en-US"]=lh;wl.locales;var Sl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},ah={formatSelectAll(){return"[Seleccionar todo]"},formatAllSelected(){return"Todos seleccionados"},formatCountSelected(n,t){return`${n} de ${t} seleccionado`},formatNoMatchesFound(){return"No se encontraron coincidencias"},formatOkButton(){return"Cerrar"},formatLazyLoading(){return"Cargando..."}};Sl.locales["es-ES"]=ah;Sl.locales;var Al=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},rh={formatSelectAll(){return"[Tout sélectionner]"},formatAllSelected(){return"Tous sélectionnés"},formatCountSelected(n,t){return`${n} de ${t} sélectionnés`},formatNoMatchesFound(){return"Aucun résultat"},formatOkButton(){return"Fermer"},formatLazyLoading(){return"Chargement..."}};Al.locales["fr-FR"]=rh;Al.locales;var Ol=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},ph={formatSelectAll(){return"[Összes kiválasztása]"},formatAllSelected(){return"Összes kiválasztva"},formatCountSelected(n,t){return`${n} / ${t} kiválasztva`},formatNoMatchesFound(){return"Nincs találat"},formatOkButton(){return"Bezár"},formatLazyLoading(){return"Most betöltés..."}};Ol.locales["hu-HU"]=ph;Ol.locales;var kl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},ch={formatSelectAll(){return"[Pilih Semua]"},formatAllSelected(){return"Semua Dipilih"},formatCountSelected(n,t){return`${n} dari ${t} dipilih`},formatNoMatchesFound(){return"Tidak ditemukan"},formatOkButton(){return"Tutup"},formatLazyLoading(){return"Memuat..."}};kl.locales["id-ID"]=ch;kl.locales;var Tl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},uh={formatSelectAll(){return"[Seleziona tutti]"},formatAllSelected(){return"Tutti selezionati"},formatCountSelected(n,t){return`${n} di ${t} selezionati`},formatNoMatchesFound(){return"Nessun risultato"},formatOkButton(){return"Chiudere"},formatLazyLoading(){return"Caricamento..."}};Tl.locales["it-IT"]=uh;Tl.locales;var xl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},dh={formatSelectAll(){return"[すべて選択]"},formatAllSelected(){return"すべて選択"},formatCountSelected(n,t){return`${t} 件中 ${n} 件選択`},formatNoMatchesFound(){return"見つかりません"},formatOkButton(){return"閉める"},formatLazyLoading(){return"積載..."}};xl.locales["ja-JP"]=dh;xl.locales;var Cl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},mh={formatSelectAll(){return"[Selecionar todos]"},formatAllSelected(){return"Todos selecionados"},formatCountSelected(n,t){return`${n} de ${t} selecionado(s)`},formatNoMatchesFound(){return"Nenhum resultado encontrado"},formatOkButton(){return"Fechar"},formatLazyLoading(){return"Carregamento..."}};Cl.locales["pt-BR"]=mh;Cl.locales;var Dl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},hh={formatSelectAll(){return"[Выбрать все]"},formatAllSelected(){return"Выбрано все"},formatCountSelected(n,t){return`${n} из ${t} выбрано`},formatNoMatchesFound(){return"Совпадений не найдено"},formatOkButton(){return"Закрывать"},formatLazyLoading(){return"погрузка..."}};Dl.locales["ru-RU"]=hh;Dl.locales;var Ml=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},vh={formatSelectAll(){return"[Tất cả]"},formatAllSelected(){return"Chọn tất cả"},formatCountSelected(n,t){return`Đã chọn ${n} trong ${t}`},formatNoMatchesFound(){return"Không tìm thấy kết quả."},formatOkButton(){return"Đóng"},formatLazyLoading(){return"Tải..."}};Ml.locales["vi-VN"]=vh;Ml.locales;var Ll=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},fh={formatSelectAll(){return"[全选]"},formatAllSelected(){return"已选择所有记录"},formatCountSelected(n,t){return`已从${t}条记录中选择${n}条`},formatNoMatchesFound(){return"没有找到记录"},formatOkButton(){return"关闭"},formatLazyLoading(){return"装载..."}};Ll.locales["zh-CN"]=fh;Ll.locales;var Nl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},bh={formatSelectAll(){return"[全選]"},formatAllSelected(){return"已選擇所有記錄"},formatCountSelected(n,t){return`已從${t}條記錄中選擇${n}條`},formatNoMatchesFound(){return"沒有找到記錄"},formatOkButton(){return"关闭"},formatLazyLoading(){return"装载..."}};Nl.locales["zh-TW"]=bh;Nl.locales;let gh=class{constructor(){u(this,"ms0");u(this,"ms1");u(this,"ms2")}mount(){const t=document.querySelector("#locale");t.addEventListener("change",e=>{this.updateLocale(e.target.value)}),this.ms0=m(t,{maxHeight:400}),this.ms1=m("#dynamic-select",{filter:!0,showOkButton:!0,dataTest:"select1"}),this.ms2=m("#fixed-import",{filter:!0,showOkButton:!0,dataTest:"select2",locale:gl})}unmount(){var t,e,o;(t=this.ms0)==null||t.destroy(),(e=this.ms1)==null||e.destroy(),(o=this.ms2)==null||o.destroy(),this.ms0=void 0,this.ms1=void 0,this.ms2=void 0}updateLocale(t){var e,o;(e=this.ms1)==null||e.destroy(),(o=this.ms1)==null||o.refreshOptions({locale:t})}},_h=class{constructor(){u(this,"ms1");u(this,"ms2")}mount(){const t=[],e=[];for(let o=0;o<1e4;o++)t.push(o);for(let o=0;o<1e4;o++)e.push({text:`<i class="fa fa-star"></i> Task ${o}`,value:o});this.ms1=m("#select1",{filter:!0,data:t,showSearchClear:!0}),this.ms2=m("#select2",{filter:!0,data:e,showSearchClear:!0,useSelectOptionLabelToHtml:!0})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},Eh=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},yh=class{constructor(){u(this,"ms1");u(this,"ms2")}mount(){this.ms1=m("#single",{singleRadio:!0}),this.ms2=m("#multiple",{showOkButton:!0})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},wh=class{constructor(){u(this,"createBtnElm");u(this,"destroyBtnElm");u(this,"modifyBtnElm");u(this,"ms1")}mount(){this.createBtnElm=document.querySelector("#createBtn"),this.destroyBtnElm=document.querySelector("#destroyBtn"),this.modifyBtnElm=document.querySelector("#modifyBtn"),this.createBtnElm.addEventListener("click",this.createMultipleSelect.bind(this)),this.destroyBtnElm.addEventListener("click",this.destroyMultiSelect.bind(this)),this.modifyBtnElm.addEventListener("click",this.modifyData.bind(this))}createMultipleSelect(){this.ms1=m("#select1",{name:"my-select",single:!1,useSelectOptionLabelToHtml:!0,sanitizer:t=>bt.sanitize(t,{RETURN_TRUSTED_TYPE:!0}),data:[{text:'<i class="fa fa-star"></i> January',value:1},{text:"February",value:2},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}),this.ms1.setSelects([1,3,4])}destroyMultiSelect(){var t;console.log("destroy"),(t=this.ms1)==null||t.destroy(),this.ms1=void 0}modifyData(){var t;(t=this.ms1)==null||t.refreshOptions({data:[{value:1,text:"Options 1"},{value:2,text:"Options 2"},{value:3,text:"Options 3",selected:!0},{value:4,text:"Options 4",selected:!0},{value:5,text:"Options 5"}]})}unmount(){this.destroyMultiSelect(),this.createBtnElm.removeEventListener("click",this.createMultipleSelect.bind(this)),this.destroyBtnElm.removeEventListener("click",this.destroyMultiSelect.bind(this)),this.modifyBtnElm.removeEventListener("click",this.modifyData.bind(this))}},Sh=class{constructor(){u(this,"ms1",[]);u(this,"ms2",[])}mount(){this.ms1=m(".select"),this.ms2=m(".data-select",{dataTest:"select1",data:[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"},{divider:!0},{value:4,text:"Option 4"},{value:5,text:"Option 5"},{value:6,text:"Option 6"}]})}unmount(){this.ms1.forEach(t=>t.destroy()),this.ms2.forEach(t=>t.destroy()),this.ms1=[],this.ms2=[]}},Ah=class{constructor(){u(this,"ms1");u(this,"ms2");u(this,"ms3");u(this,"ms4");u(this,"ms5");u(this,"darkMode",!0)}mount(){var t;(t=document.querySelector(".panel-wm-content"))==null||t.classList.add("dark-mode"),this.ms1=m("select[data-test=single]",{darkMode:!0}),this.ms2=m("select[data-test=radio]",{darkMode:!0,singleRadio:!0}),this.ms3=m("select[data-test=multiple]",{darkMode:!0}),this.ms4=m("select[data-test=group]",{darkMode:!0}),this.ms5=m("select[data-test=data1]",{darkMode:!0,dataTest:"select1",filter:!0,showOkButton:!0,showClear:!0,showSearchClear:!0,data:[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"},{divider:!0},{value:4,text:"Option 4"},{value:5,text:"Option 5"},{value:6,text:"Option 6"}]})}unmount(){var t,e,o,i,s,l;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),(s=this.ms5)==null||s.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0,(l=document.querySelector(".panel-wm-content"))==null||l.classList.remove("dark-mode")}};const Qi=""+new URL("avatar1-Dfqkz6jG.png",import.meta.url).href,Zi=""+new URL("avatar2-C5pX2a2d.png",import.meta.url).href,ts=""+new URL("avatar3-COtlxv_R.png",import.meta.url).href,es=""+new URL("avatar4-Dom6eBE9.png",import.meta.url).href,ns=""+new URL("avatar5-B_ltAQdV.png",import.meta.url).href;let Oh=class{constructor(){u(this,"ms1");u(this,"ms2")}mount(){this.ms1=m("[data-test=select1]",{data:[{value:"1",text:`<img alt="avatar1" src="${Qi}" class="avatar"> Eric`},{value:"2",text:`<img alt="avatar2" src="${Zi}" class="avatar"> Smith`},{value:"3",text:`<img alt="avatar3" src="${ts}" class="avatar"> Erika`},{value:"4",text:`<img alt="avatar4" src="${es}" class="avatar"> Julia`},{value:"5",text:`<img alt="avatar5" src="${ns}" class="avatar"> Catherine`}],renderOptionLabelAsHtml:!0}),this.ms2=m("[data-test=select2]",{singleRadio:!0,renderOptionLabelAsHtml:!0,textTemplate:t=>{const[e,o]=t.textContent.split("::");return`<div class="image-container"><img alt="avatar${t.value}" src="${this.getAvatarByIdx(t.value)}" class="avatar"><div class="text-container"><div class="name-section">${e}</div><div class="job-section">${o}</div></div></div>`},sanitizer:t=>bt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}getAvatarByIdx(t){let e;switch(+t){case 1:e=Qi;break;case 2:e=Zi;break;case 3:e=ts;break;case 4:e=es;break;case 5:e=ns;break}return e}},kh=class{},Th=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{filter:!0,showOkButton:!0,formatAllSelected(){return"Tous sélectionnés"},formatCountSelected(t,e){return`${t} de ${e} sélectionnés`},formatNoMatchesFound(){return"Aucun résultat"},formatOkButton(){return"Fermer"},formatSelectAll(){return"[Tout sélectionner]"}})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},xh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{filter:!0}),document.querySelector("#getOptions").addEventListener("click",()=>{alert(JSON.stringify(this.ms1.getOptions(),null,4))})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Ch=class{constructor(){u(this,"ms1");u(this,"ms2");u(this,"darkMode2",!1)}mount(){var t,e;this.ms1=m(".select1",{filter:!0}),this.ms2=m(".select2",{darkMode:this.darkMode2,showOkButton:!0}),(t=document.querySelector("#refreshOptions"))==null||t.addEventListener("click",()=>this.refreshOption1()),(e=document.querySelector("#setDarkMode"))==null||e.addEventListener("click",()=>this.toggleDarkMode2())}refreshOption1(){var t;(t=this.ms1)==null||t.refreshOptions({filter:!1})}toggleDarkMode2(){var t;this.darkMode2=!this.darkMode2,(t=this.ms2)==null||t.refreshOptions({darkMode:this.darkMode2})}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0,(o=document.querySelector("#refreshOptions"))==null||o.removeEventListener("click",()=>this.refreshOption1()),(i=document.querySelector("#setDarkMode"))==null||i.removeEventListener("click",()=>this.toggleDarkMode2())}},Dh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{filter:!0}),document.querySelector("#setSelectsBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.setSelects([1,3])}),document.querySelector("#getSelectsBtn").addEventListener("click",()=>{var t,e;alert(`Selected values: ${(t=this.ms1)==null?void 0:t.getSelects()}`),alert(`Selected texts: ${(e=this.ms1)==null?void 0:e.getSelects("text")}`)}),document.querySelector("#setSelectsBtn2").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.setSelects(["February","April"],"text")}),document.querySelector("#getSelectsBtn2").addEventListener("click",()=>{var t;alert(`Selected values: ${(t=this.ms1)==null?void 0:t.getSelects("text")}`)})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Mh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select"),document.querySelector("#enableBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.enable()}),document.querySelector("#disableBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.disable()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Lh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select"),document.querySelector("#openBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.open()}),document.querySelector("#closeBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.close()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Nh=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select"),document.querySelector("#checkBtn").addEventListener("click",()=>{for(const t of this.ms)t.check(2)}),document.querySelector("#uncheckBtn").addEventListener("click",()=>{for(const t of this.ms)t.uncheck(2)})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},$h=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select"),document.querySelector("#checkAllBtn").addEventListener("click",()=>{for(const t of this.ms)t.checkAll()}),document.querySelector("#uncheckAllBtn").addEventListener("click",()=>{for(const t of this.ms)t.uncheckAll()})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Ih=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select"),document.querySelector("#checkInvert").addEventListener("click",()=>{for(const t of this.ms)t.checkInvert()})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Rh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select"),document.querySelector("#focusBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.focus()}),document.querySelector("#blurBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.blur()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Ph=class{constructor(){u(this,"ms1")}mount(){const t=document.querySelector("select");this.ms1=m(t),document.querySelector("#refreshAdd").addEventListener("click",()=>{var a;const e=document.querySelector("#refreshInput"),o=document.querySelector("#refreshSelected"),i=document.querySelector("#refreshDisabled"),s=e.value.trim(),l=document.createElement("option");if(l.value=s,l.text=s,!s){e.focus();return}o.checked&&(l.selected=!0),i.checked&&(l.disabled=!0),e.value="",t.appendChild(l),(a=this.ms1)==null||a.refresh()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Fh=class{constructor(){u(this,"buildBtnElm");u(this,"destroyBtnElm");u(this,"ms1")}mount(){this.buildBtnElm=document.querySelector("#buildBtn"),this.destroyBtnElm=document.querySelector("#destroyBtn"),this.destroyBtnElm.addEventListener("click",this.destroyMultiSelect.bind(this)),this.buildBtnElm.addEventListener("click",this.createMultipleSelect.bind(this)),this.ms1=m("select")}createMultipleSelect(){this.ms1=m("select")}destroyMultiSelect(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=null}unmount(){this.destroyMultiSelect(),this.buildBtnElm.removeEventListener("click",this.destroyMultiSelect.bind(this)),this.destroyBtnElm.removeEventListener("click",this.createMultipleSelect.bind(this))}},Hh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{filter:!0}),document.querySelector("#getData").addEventListener("click",()=>{console.log("tt",JSON.stringify(this.ms1.getData())),alert(JSON.stringify(this.ms1.getData(),null,4))})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Bh=class{constructor(){u(this,"ms1");u(this,"ms2")}mount(){this.ms1=m("#select1"),this.ms2=m("#select2",{placeholder:"Here is the placeholder via javascript"})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},Gh=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select",{singleRadio:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Uh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{selectAll:!1})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Jh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{multiple:!0,hideOptgroupCheckboxes:!0,multipleWidth:70})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},jh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{multiple:!0,width:500,multipleWidth:70,dropWidth:580})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},zh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{maxHeight:140})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Wh=class{constructor(){u(this,"ms",[])}mount(){const t=document.querySelector("#number");this.ms=m("select",{maxHeight:+t.value,maxHeightUnit:"row"}),t.addEventListener("change",()=>{this.ms.forEach(e=>{e.refreshOptions({maxHeight:+t.value,maxHeightUnit:"row"})})})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Vh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{position:"top"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},qh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{displayValues:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Kh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{displayTitle:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Yh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{displayDelimiter:" | "})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Xh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{minimumCountSelected:8})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Qh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{ellipsis:!0,minimumCountSelected:5})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Zh=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{isOpen:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},tv=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{keepOpen:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},ev=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{openOnHover:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},nv=class{constructor(){u(this,"ms1");u(this,"ms2");u(this,"ms3");u(this,"ms4")}mount(){this.ms1=m(".select1"),this.ms2=m(".select2"),this.ms3=m(".select3",{container:".my-container"}),this.ms4=m(".select4",{autoAdjustDropPosition:!0,container:"body"})}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},ov=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select",{filter:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},iv=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{filter:!0,filterGroup:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},sv=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{filter:!0,filterPlaceholder:"The filter placeholder"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},lv=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select",{filter:!0,filterAcceptOnEnter:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},av=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select",{filterByDataLength:10})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},rv=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{filter:!0,customFilter:({text:t,search:e,originalText:o,originalSearch:i})=>document.querySelector("input").checked?o.indexOf(i)===0:t.indexOf(e)===0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},pv=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select",{showClear:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},cv=class{constructor(){u(this,"ms",[])}mount(){this.ms.push(m(".select1",{showOkButton:!0})),this.ms.push(m(".select2",{showOkButton:!0})),this.ms.push(m(".select3",{showOkButton:!0,filter:!0})),this.ms.push(m(".select4",{showOkButton:!0}))}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},uv=class{constructor(){u(this,"ms1");u(this,"ms2")}mount(){this.ms1=m('[data-test="select3"]',{cssStyler:t=>+((t==null?void 0:t.value)??0)==2?{backgroundColor:"#6fbeff",color:"#0014ff",fontStyle:"italic"}:+((t==null?void 0:t.value)??0)==4?{backgroundColor:"#972727",color:"#fff"}:null}),this.ms2=m('[data-test="select4"]',{cssStyler:t=>(t==null?void 0:t.type)==="optgroup"?{color:"#787878",fontWeight:"normal"}:+((t==null?void 0:t.value)??0)==3?{color:"purple",textDecoration:"underline"}:null})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},dv=class{constructor(){u(this,"ms1");u(this,"ms2");u(this,"btnEnableElm");u(this,"btnDisableElm")}mount(){this.ms1=m("#basic",{filter:!0,displayTitle:!0,renderOptionLabelAsHtml:!0,textTemplate:t=>`<i class="fa fa-star"></i>${t.innerHTML}`,customFilter:({search:t,text:e})=>{var i;const o=document.createElement("div");return o.innerHTML=e,((i=o.textContent)==null?void 0:i.includes(t))??!0},sanitizer:t=>bt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms2=m("#from-data",{dataTest:"select1",displayTitle:!0,renderOptionLabelAsHtml:!0,data:[{value:'50"',text:'50"'},{value:"44'",text:"44'"},{value:"33",text:'<span style="font-weight:bold">33</span>'}],sanitizer:t=>bt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.btnEnableElm=document.querySelector("#enableRenderHtml"),this.btnEnableElm.addEventListener("click",()=>this.renderAsHtmlHandler(!0)),this.btnDisableElm=document.querySelector("#disableRenderHtml"),this.btnDisableElm.addEventListener("click",()=>this.renderAsHtmlHandler(!1))}renderAsHtmlHandler(t){var e,o;(e=this.ms1)==null||e.refreshOptions({renderOptionLabelAsHtml:t}),(o=this.ms2)==null||o.refreshOptions({renderOptionLabelAsHtml:t})}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0,(o=this.btnEnableElm)==null||o.removeEventListener("click",()=>this.renderAsHtmlHandler(!0)),(i=this.btnDisableElm)==null||i.removeEventListener("click",()=>this.renderAsHtmlHandler(!1))}},mv=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{renderOptionLabelAsHtml:!0,labelTemplate:t=>`<i class="fa fa-star"></i>${t.getAttribute("label")}`,sanitizer:t=>bt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},hv=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select",{autoAdjustDropPosition:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},vv=class{constructor(){u(this,"ms1");u(this,"ms2");u(this,"ms3");u(this,"ms4")}mount(){this.ms1=m("#select1",{autoAdjustDropWidthByTextSize:!0,autoAdjustDropHeight:!0,position:"top",showOkButton:!0,sanitizer:t=>bt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms2=m("#select2",{autoAdjustDropHeight:!0,position:"top",showOkButton:!0,sanitizer:t=>bt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms3=m("#select3",{autoAdjustDropHeight:!0,filter:!0,position:"top",sanitizer:t=>bt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms4=m("#select4")}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},fv=class{constructor(){u(this,"ms1");u(this,"ms2")}mount(){this.ms1=m("#select1",{useSelectOptionLabel:!0}),this.ms2=m("#select2",{useSelectOptionLabelToHtml:!0,sanitizer:t=>bt.sanitize(t,{RETURN_TRUSTED_TYPE:!0}),data:[{text:'<i class="fa fa-star"></i> January',value:'<i class="fa fa-star"></i>1',selected:!0},{text:"February",value:"2"},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},bv=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("#select1",{placeholder:'Placeholder with cross-site scripting code...<img src="not-found" onerror=alert("Hacked")>',sanitizer:t=>typeof t=="string"?decodeURIComponent(t).replace(/(\b)(on[a-z]+)(\s*)=|javascript:([^>]*)[^>]*|(<\s*)(\/*)script([<>]*).*(<\s*)(\/*)script(>*)|(&lt;)(\/*)(script|script defer)(.*)(&gt;|&gt;">)/gi,""):t})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},gv=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select",{classes:"form-control",classPrefix:"form-control"})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},_v=class{constructor(){u(this,"ms",[])}mount(){this.ms=m("select",{filter:!0,showSearchClear:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}};const os={a:"ÀÁÂÃÄÅàáâãäåĀāąĄ",c:"ÇçćĆčČ",d:"đĐďĎ",e:"ÈÉÊËèéêëěĚĒēęĘ",i:"ÌÍÎÏìíîïĪī",l:"łŁ",n:"ÑñňŇńŃ",o:"ÒÓÔÕÕÖØòóôõöøŌō",r:"řŘ",s:"ŠšśŚ",t:"ťŤ",u:"ÙÚÛÜùúûüůŮŪū",y:"ŸÿýÝ",z:"ŽžżŻźŹ"};let Ev=class{constructor(){u(this,"ms1");u(this,"ms2");u(this,"inLogElm");u(this,"outLogElm")}mount(){this.inLogElm=document.querySelector("input.in-log"),this.outLogElm=document.querySelector("input.out-log"),this.ms1=m("#select1",{filter:!0,showSearchClear:!0,filterPlaceholder:'🔎︎ search with "é", "û" or simply "u"',diacriticParser:t=>{const e=t.split("").map(o=>Object.keys(os).find(i=>os[i].includes(o))||o).join("");return this.inLogElm.value=t,this.outLogElm.value=e,e}}),this.ms2=m("#select2",{filter:!0,showSearchClear:!0,filterPlaceholder:'🔎︎ search with "é", "û" or simply "u"'})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},yv=class{constructor(){u(this,"ms1");u(this,"ms2")}mount(){const t=[],e=[];for(let o=1;o<=25;o++)t.push({text:`Title ${o}`,value:o});for(let o=1;o<=2e3;o++)e.push({text:`<i class="fa fa-star"></i> Task ${o}`,value:o});this.ms1=m("#select1",{data:t,infiniteScroll:!0}),this.ms2=m("#select2",{filter:!0,data:e,showSearchClear:!0,useSelectOptionLabelToHtml:!0,infiniteScroll:!0})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},wv=class{constructor(){u(this,"ms1");u(this,"ms2");u(this,"ms3");u(this,"ms4")}mount(){this.ms1=m("select[data-test=select1]"),this.ms2=m("select[data-test=select2]"),this.ms3=m("select[data-test=select3]"),this.ms4=m("select[data-test=select4]",{filter:!0})}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},Sv=class{constructor(){u(this,"pageContentElm",null);u(this,"ms1");u(this,"ms2");u(this,"ms3");u(this,"ms4");u(this,"ms5");u(this,"darkMode",!0)}mount(){var t,e;this.pageContentElm=document.querySelector(".panel-wm-content"),(t=this.pageContentElm)==null||t.classList.add("dark-mode"),(e=document.querySelector("#setDarkMode"))==null||e.addEventListener("click",()=>this.toggleDarkMode()),this.ms1=m("select[data-test=single]",{darkMode:!0}),this.ms2=m("select[data-test=radio]",{darkMode:!0,singleRadio:!0}),this.ms3=m("select[data-test=multiple]",{darkMode:!0}),this.ms4=m("select[data-test=group]",{darkMode:!0}),this.ms5=m("select[data-test=data1]",{darkMode:!0,dataTest:"select1",filter:!0,showOkButton:!0,showClear:!0,showSearchClear:!0,data:[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"},{divider:!0},{value:4,text:"Option 4"},{value:5,text:"Option 5"},{value:6,text:"Option 6"}]})}toggleDarkMode(){var t,e,o,i,s;if(this.darkMode=!this.darkMode,(t=this.ms1)==null||t.refreshOptions({darkMode:this.darkMode}),(e=this.ms2)==null||e.refreshOptions({darkMode:this.darkMode}),(o=this.ms3)==null||o.refreshOptions({darkMode:this.darkMode}),(i=this.ms4)==null||i.refreshOptions({darkMode:this.darkMode}),(s=this.ms5)==null||s.refreshOptions({darkMode:this.darkMode}),this.pageContentElm){const l=this.darkMode?"add":"remove";this.pageContentElm.classList[l]("dark-mode")}}unmount(){var t,e,o,i,s,l,a;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),(s=this.ms5)==null||s.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0,(l=this.pageContentElm)==null||l.classList.remove("dark-mode"),(a=document.querySelector("#setDarkMode"))==null||a.removeEventListener("click",()=>this.toggleDarkMode())}},Av=class{constructor(){u(this,"ms1")}mount(){this.ms1=m("select",{labelId:"custom-label"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Ov=class{constructor(){u(this,"ms1");u(this,"ms2");u(this,"ms3");u(this,"ms4")}mount(){this.ms1=m("select[data-test=select1]",{filter:!0,preFilter:t=>t.value!=="1"&&t.value!=="3"}),this.ms2=m("select[data-test=select2]",{filter:!0,preFilter:t=>t.label!=="Group 2"}),this.ms3=m("select[data-test=select3]",{data:{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"},preFilter:t=>t.value!=="2"&&t.value!=="4"}),this.ms4=m("select[data-test=select4]",{data:[{type:"optgroup",label:"Q1",children:[{text:"January",value:1,selected:!0},{text:"February",value:2},{text:"March",value:3}]},{type:"optgroup",label:"Q2",children:[{text:"April",value:4},{text:"May",value:5},{text:"June",value:6}]},{type:"optgroup",label:"Q3",children:[{text:"July",value:7},{text:"August",value:8},{text:"September",value:9}]},{type:"optgroup",label:"Q4",children:[{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}],preFilter:t=>t.label!=="Q1"})}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},kv=class{constructor(){u(this,"ms1");u(this,"ms2");u(this,"ms3");u(this,"ms4")}mount(){this.ms1=m("select[data-test=select1]",{filter:!0,preSort:(t,e)=>(+t.value-+e.value)*-1}),this.ms2=m("select[data-test=select2]",{filter:!0,preSort:(t,e)=>t.label<e.label?1:-1}),this.ms3=m("select[data-test=select3]",{data:{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"},preSort:(t,e)=>(+t.value-+e.value)*-1}),this.ms4=m("select[data-test=select4]",{data:[{type:"optgroup",label:"Q1",children:[{text:"January",value:1,selected:!0},{text:"February",value:2},{text:"March",value:3}]},{type:"optgroup",label:"Q2",children:[{text:"April",value:4},{text:"May",value:5},{text:"June",value:6}]},{type:"optgroup",label:"Q3",children:[{text:"July",value:7},{text:"August",value:8},{text:"September",value:9}]},{type:"optgroup",label:"Q4",children:[{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}],preSort:(t,e)=>t.label<e.label?1:-1})}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},Tv=class{constructor(){u(this,"serverDelayInput");u(this,"resetLazyBtn");u(this,"ms1");u(this,"ms2");u(this,"ms3");u(this,"ms4");u(this,"serverDelay",1e3)}changeServerDelay(t){const e=t.target;this.serverDelay=+e.value,this.createMultipleSelect()}mount(){this.serverDelayInput=document.querySelector("#serverdelay"),this.resetLazyBtn=document.querySelector("#resetlazy"),this.serverDelayInput.addEventListener("keyup",this.changeServerDelay.bind(this)),this.resetLazyBtn.addEventListener("click",this.createMultipleSelect.bind(this)),this.createMultipleSelect()}createMultipleSelect(){console.log("recreate ms-select"),this.ms1=m("select[data-test=select1]",{singleRadio:!0,lazyData:()=>new Promise(t=>{setTimeout(()=>{t(["January","February","March","April","May","June","July","August","September","October","November","December"])},this.serverDelay)})}),this.ms2=m("select[data-test=select2]",{lazyData:()=>new Promise(t=>{setTimeout(()=>{t([{text:"January",value:1},{text:"February",value:2,selected:!0},{text:"March",value:3,disabled:!0},{text:"April",value:4,selected:!0},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}])},this.serverDelay)})}),this.ms3=m("select[data-test=select3]",{lazyData:()=>new Promise(t=>{setTimeout(()=>{t([{type:"optgroup",label:"Q1",children:[{text:"January",value:1},{text:"February",value:2,selected:!0},{text:"March",value:3,selected:!0}]},{type:"optgroup",label:"Q2",children:[{text:"April",value:4},{text:"May",value:5},{text:"June",value:6}]},{type:"optgroup",label:"Q3",children:[{text:"July",value:7},{text:"August",value:8},{text:"September",value:9}]},{type:"optgroup",label:"Q4",children:[{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}])},this.serverDelay)})}),this.ms4=m("select[data-test=select4]",{filter:!0,filterPlaceholder:"filter placeholder",showOkButton:!0,showClear:!0,minHeight:70,lazyData:()=>new Promise(t=>{setTimeout(()=>{t([{text:"January",value:1},{text:"February",value:2,selected:!0},{text:"March",value:3,disabled:!0},{text:"April",value:4,selected:!0},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}])},this.serverDelay)})})}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.serverDelayInput.removeEventListener("click",this.changeServerDelay.bind(this)),this.resetLazyBtn.removeEventListener("click",this.createMultipleSelect.bind(this))}};class xv{constructor(){u(this,"pageContentElm",null);u(this,"ms1");u(this,"ms2");u(this,"ms3");u(this,"ms4");u(this,"ms5")}mount(){this.pageContentElm=document.querySelector(".panel-wm-content"),this.ms1=m("select[data-test=single]",{closeOnTab:!0}),this.ms2=m("select[data-test=radio]",{closeOnTab:!0,singleRadio:!0}),this.ms3=m("select[data-test=multiple]",{closeOnTab:!0}),this.ms4=m("select[data-test=group]",{closeOnTab:!0}),this.ms5=m("select[data-test=data1]",{closeOnTab:!0,dataTest:"select1",filter:!0,showOkButton:!0,showClear:!0,showSearchClear:!0,data:[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"},{divider:!0},{value:4,text:"Option 4"},{value:5,text:"Option 5"},{value:6,text:"Option 6"}]})}unmount(){var t,e,o,i,s;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),(s=this.ms5)==null||s.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0}}const is=[{name:"getting-started",view:"/src/getting-started.html",viewModel:kh,title:"Getting Started"},{name:"examples",view:"/src/examples/example01.html",viewModel:fl,title:"Examples"}],ss=[{name:"Welcomes",routes:[{name:"example01",view:"/src/examples/example01.html",viewModel:fl,title:"Single Select"},{name:"example02",view:"/src/examples/example02.html",viewModel:Ym,title:"Multiple Select"},{name:"example03",view:"/src/examples/example03.html",viewModel:Xm,title:"Multiple Items"},{name:"example04",view:"/src/examples/example04.html",viewModel:Qm,title:"Auto Width"},{name:"example05",view:"/src/examples/example05.html",viewModel:Zm,title:"Disabled Select"},{name:"example06",view:"/src/examples/example06.html",viewModel:th,title:"Selected/Disabled Options"},{name:"example07",view:"/src/examples/example07.html",viewModel:eh,title:"Submit Select"},{name:"example08",view:"/src/examples/example08.html",viewModel:nh,title:"The Data"},{name:"example09",view:"/src/examples/example09.html",viewModel:gh,title:"Locale"},{name:"example10",view:"/src/examples/example10.html",viewModel:_h,title:"Large Select (Virtual Scroll)"},{name:"example11",view:"/src/examples/example11.html",viewModel:Eh,title:"Themes / Sizes"},{name:"example12",view:"/src/examples/example12.html",viewModel:yh,title:"Checkbox/Radio Icons"},{name:"example13",view:"/src/examples/example13.html",viewModel:wh,title:"Dynamically Create Select"},{name:"example14",view:"/src/examples/example14.html",viewModel:Sh,title:"The Divider"},{name:"example15",view:"/src/examples/example15.html",viewModel:Ah,title:"Dark Mode"},{name:"example16",view:"/src/examples/example16.html",viewModel:Oh,title:"Template with Images"}]},{name:"Options",routes:[{name:"options01",view:"/src/options/options01.html",viewModel:Bh,title:"The Placeholder"},{name:"options02",view:"/src/options/options02.html",viewModel:Gh,title:"Single Radio"},{name:"options03",view:"/src/options/options03.html",viewModel:Uh,title:"Hide Select All"},{name:"options04",view:"/src/options/options04.html",viewModel:Jh,title:"Hide Optgroup Checkboxes"},{name:"options05",view:"/src/options/options05.html",viewModel:jh,title:"Custom Dropdown Width"},{name:"options06",view:"/src/options/options06.html",viewModel:zh,title:"Max Height"},{name:"options07",view:"/src/options/options07.html",viewModel:Wh,title:"Max Height Unit"},{name:"options08",view:"/src/options/options08.html",viewModel:Vh,title:"The Position"},{name:"options09",view:"/src/options/options09.html",viewModel:qh,title:"Display Values"},{name:"options10",view:"/src/options/options10.html",viewModel:Kh,title:"Display Title"},{name:"options11",view:"/src/options/options11.html",viewModel:Yh,title:"Display Delimiter"},{name:"options12",view:"/src/options/options12.html",viewModel:Xh,title:"Minimum Count Selected"},{name:"options13",view:"/src/options/options13.html",viewModel:Qh,title:"The Ellipsis"},{name:"options14",view:"/src/options/options14.html",viewModel:Zh,title:"Is Open"},{name:"options15",view:"/src/options/options15.html",viewModel:tv,title:"Keep Open"},{name:"options16",view:"/src/options/options16.html",viewModel:ev,title:"Open On Hover"},{name:"options17",view:"/src/options/options17.html",viewModel:nv,title:"The Container"},{name:"options18",view:"/src/options/options18.html",viewModel:ov,title:"The Filter"},{name:"options19",view:"/src/options/options19.html",viewModel:iv,title:"Filter Only Optgroup"},{name:"options20",view:"/src/options/options20.html",viewModel:sv,title:"Filter Placeholder"},{name:"options21",view:"/src/options/options21.html",viewModel:lv,title:"Filter Accept On Enter"},{name:"options22",view:"/src/options/options22.html",viewModel:av,title:"Filter By Data Length"},{name:"options23",view:"/src/options/options23.html",viewModel:rv,title:"Custom Filter"},{name:"options24",view:"/src/options/options24.html",viewModel:pv,title:"Show Clear"},{name:"options25",view:"/src/options/options25.html",viewModel:cv,title:"Show OK Button"},{name:"options26",view:"/src/options/options26.html",viewModel:uv,title:"The Styler"},{name:"options27",view:"/src/options/options27.html",viewModel:dv,title:"Text Template"},{name:"options28",view:"/src/options/options28.html",viewModel:mv,title:"Label Template"},{name:"options29",view:"/src/options/options29.html",viewModel:hv,title:"Auto-Adjust Drop Position"},{name:"options30",view:"/src/options/options30.html",viewModel:vv,title:"Auto-Adjust Drop Height/Width"},{name:"options31",view:"/src/options/options31.html",viewModel:fv,title:"Use Select Option as Label"},{name:"options32",view:"/src/options/options32.html",viewModel:bv,title:"Sanitizer"},{name:"options33",view:"/src/options/options33.html",viewModel:gv,title:"Classes"},{name:"options34",view:"/src/options/options34.html",viewModel:_v,title:"Show Search Clear"},{name:"options35",view:"/src/options/options35.html",viewModel:Ev,title:"Custom Diacritic Parser"},{name:"options36",view:"/src/options/options36.html",viewModel:yv,title:"Infinite Scroll"},{name:"options37",view:"/src/options/options37.html",viewModel:wv,title:"Navigation Highlight"},{name:"options38",view:"/src/options/options38.html",viewModel:Sv,title:"Dark Mode"},{name:"options39",view:"/src/options/options39.html",viewModel:Av,title:"Label Id (aria-labelledby)"},{name:"options40",view:"/src/options/options40.html",viewModel:Ov,title:"Pre-Filter Data"},{name:"options41",view:"/src/options/options41.html",viewModel:kv,title:"Pre-Sort Data"},{name:"options42",view:"/src/options/options42.html",viewModel:Tv,title:"Lazy Load Data"},{name:"options43",view:"/src/options/options43.html",viewModel:xv,title:"Close on Tab"}]},{name:"Methods",routes:[{name:"methods01",view:"/src/methods/methods01.html",viewModel:xh,title:"The getOptions"},{name:"methods02",view:"/src/methods/methods02.html",viewModel:Ch,title:"The refreshOptions"},{name:"methods03",view:"/src/methods/methods03.html",viewModel:Dh,title:"The setSelects/getSelects"},{name:"methods04",view:"/src/methods/methods04.html",viewModel:Mh,title:"The enable/disable"},{name:"methods05",view:"/src/methods/methods05.html",viewModel:Lh,title:"The open/close"},{name:"methods06",view:"/src/methods/methods06.html",viewModel:Nh,title:"The check/uncheck"},{name:"methods07",view:"/src/methods/methods07.html",viewModel:$h,title:"The checkAll/uncheckAll"},{name:"methods08",view:"/src/methods/methods08.html",viewModel:Ih,title:"The checkInvert"},{name:"methods09",view:"/src/methods/methods09.html",viewModel:Rh,title:"The focus/blur"},{name:"methods10",view:"/src/methods/methods10.html",viewModel:Ph,title:"The refresh"},{name:"methods11",view:"/src/methods/methods11.html",viewModel:Fh,title:"The destroy"},{name:"methods12",view:"/src/methods/methods12.html",viewModel:Hh,title:"The getData"}]},{name:"Events",routes:[{name:"events",view:"/src/events/events.html",viewModel:Km,title:"The Events"}]},{name:"I18N",routes:[{name:"i18n",view:"/src/i18n/i18n.html",viewModel:Th,title:"The i18n"}]}],Cv=Object.assign({"/src/events/events.html":Jl,"/src/examples/example01.html":jl,"/src/examples/example02.html":zl,"/src/examples/example03.html":Wl,"/src/examples/example04.html":Vl,"/src/examples/example05.html":ql,"/src/examples/example06.html":Kl,"/src/examples/example07.html":Yl,"/src/examples/example08.html":Xl,"/src/examples/example09.html":Ql,"/src/examples/example10.html":Zl,"/src/examples/example11.html":ta,"/src/examples/example12.html":ea,"/src/examples/example13.html":na,"/src/examples/example14.html":oa,"/src/examples/example15.html":ia,"/src/examples/example16.html":sa,"/src/getting-started.html":la,"/src/i18n/i18n.html":aa,"/src/main.html":ls,"/src/methods/methods01.html":ra,"/src/methods/methods02.html":pa,"/src/methods/methods03.html":ca,"/src/methods/methods04.html":ua,"/src/methods/methods05.html":da,"/src/methods/methods06.html":ma,"/src/methods/methods07.html":ha,"/src/methods/methods08.html":va,"/src/methods/methods09.html":fa,"/src/methods/methods10.html":ba,"/src/methods/methods11.html":ga,"/src/methods/methods12.html":_a,"/src/options/options01.html":Ea,"/src/options/options02.html":ya,"/src/options/options03.html":wa,"/src/options/options04.html":Sa,"/src/options/options05.html":Aa,"/src/options/options06.html":Oa,"/src/options/options07.html":ka,"/src/options/options08.html":Ta,"/src/options/options09.html":xa,"/src/options/options10.html":Ca,"/src/options/options11.html":Da,"/src/options/options12.html":Ma,"/src/options/options13.html":La,"/src/options/options14.html":Na,"/src/options/options15.html":$a,"/src/options/options16.html":Ia,"/src/options/options17.html":Ra,"/src/options/options18.html":Pa,"/src/options/options19.html":Fa,"/src/options/options20.html":Ha,"/src/options/options21.html":Ba,"/src/options/options22.html":Ga,"/src/options/options23.html":Ua,"/src/options/options24.html":Ja,"/src/options/options25.html":ja,"/src/options/options26.html":za,"/src/options/options27.html":Wa,"/src/options/options28.html":Va,"/src/options/options29.html":qa,"/src/options/options30.html":Ka,"/src/options/options31.html":Ya,"/src/options/options32.html":Xa,"/src/options/options33.html":Qa,"/src/options/options34.html":Za,"/src/options/options35.html":tr,"/src/options/options36.html":er,"/src/options/options37.html":nr,"/src/options/options38.html":or,"/src/options/options39.html":ir,"/src/options/options40.html":sr,"/src/options/options41.html":lr,"/src/options/options42.html":ar,"/src/options/options43.html":rr});class Dv{constructor(){u(this,"loading",!0);u(this,"currentModel");u(this,"currentRouter");u(this,"defaultRouteName","getting-started");u(this,"stateBangChar","#/");u(this,"baseUrl",window.location.origin+window.location.pathname);u(this,"viewModelObj",{})}async init(){const t=window.location;document.querySelector("#app").innerHTML=bt.sanitize(ls,{RETURN_TRUSTED_TYPE:!0});let e=t.hash.replace(this.stateBangChar,"");(!e||e==="/"||e==="#")&&(e=this.defaultRouteName),this.createRouteLinks(),this.loadRoute(e),Array.from(document.querySelectorAll(".panel-wm-left a.nav-link,.navbar-nav a.nav-link")).forEach(o=>{e.includes(o.id)&&o.classList.add("active")}),window.onpopstate=()=>{const i=window.location.hash.replace(this.stateBangChar,"");this.removeAllActiveLinks();const s=document.querySelector(`#${i}`);s&&(s.scrollIntoView(),s.classList.add("active")),this.loadRoute(i||this.defaultRouteName,!1)}}createRouteLinks(){var t,e,o;for(const i of is){const s=N("li",{className:"nav-item"});N("a",{id:i.name,className:"nav-link",textContent:i.title},s).addEventListener("click",this.clickEventListener.bind(this)),(t=document.querySelector(".navbar-nav"))==null||t.appendChild(s)}for(const i of ss){const s=N("li",{className:"m-1"});N("p",{className:"navbar-vertical-label mb-1",textContent:i.name},s),(e=document.querySelector(".nav-pills"))==null||e.appendChild(s);for(const l of i.routes){const a=N("li",{className:"nav-item"}),c=N("a",{id:l.name,className:"nav-link",textContent:l.title});c.addEventListener("click",this.clickEventListener.bind(this)),a.appendChild(c),(o=document.querySelector(".nav-pills"))==null||o.appendChild(a)}}}async loadRoute(t,e=!0){var s;const o=document.querySelector(".panel-wm-content");Ye(o),o.classList.add("cloak");let i=is.find(l=>l.name===t);if((i==null?void 0:i.name)==="examples"){const l=document.querySelector(".nav-pills .nav-item a.nav-link");l==null||l.classList.add("active")}else for(const l of ss){const a=l.routes.find(c=>c.name===t);a&&(i=a)}if(this.currentModel&&this.unmountCurrentVM(this.currentModel,this.currentRouter),i){this.currentRouter=i,document.querySelector(".panel-wm-content").innerHTML=bt.sanitize(Cv[i.view],{RETURN_TRUSTED_TYPE:!0});const l=new i.viewModel;this.currentModel=l,window[i.name]=(s=l.mount)==null?void 0:s.call(l),window.onbeforeunload=()=>{var a;o.classList.add("cloak"),(a=l.unmount)==null||a.call(l),this.removeAllActiveLinks(!0),this.unmountAll(),i!=null&&i.name&&delete window[i.name]}}e&&window.history.pushState({},t,`${this.baseUrl}${this.stateBangChar}${t}`),document.title=`Multiple-Select-Vanilla · ${t}`,o.classList.remove("cloak")}async clickEventListener(t){this.removeAllActiveLinks();const e=t.target;e.classList.toggle("active"),this.loadRoute(e.id)}removeAllActiveLinks(t=!1){document.querySelectorAll(".panel-wm-left a.nav-link,.navbar-nav a.nav-link").forEach(e=>{e.classList.remove("active"),t&&e.removeEventListener("click",this.clickEventListener.bind(this))})}unmountCurrentVM(t,e){var o;(o=t.unmount)==null||o.call(t),e&&delete window[e.name]}unmountAll(){for(const t of Object.keys(this.viewModelObj)){const e=this.viewModelObj[t];if(typeof(e==null?void 0:e.unmount)=="function"){e==null||e.unmount();for(const o of Object.keys(e))e[o]=null}window[t]=null,this.viewModelObj[t]=null,delete window[t],delete this.viewModelObj[t]}}}const Mv=new Dv;Mv.init();
