var Al=Object.defineProperty;var wl=(e,t,n)=>t in e?Al(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var m=(e,t,n)=>(wl(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Sl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Events
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/events/events.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/events/events.ts"
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
`,Tl=`<div class="row">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Single Select
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example01.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example01.ts"
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
`,Ol=`<div class="row">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Multiple Select
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example02.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example02.ts"
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
`,Cl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Multiple Items
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example03.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example03.ts"
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
`,xl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Auto Width
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example04.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example04.ts"
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
`,kl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Disabled Select
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example05.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example05.ts"
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
`,Dl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Selected/Disabled Options
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example06.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example06.ts"
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
`,Nl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Submit Select
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example07.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example07.ts"
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
`,Ll=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Data
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example08.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example08.ts"
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
`,Ml=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Locale
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example09.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example09.ts"
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
    <label class="col-sm-2"> Locale Select </label>

    <div class="col-sm-10">
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
    <label class="col-sm-2"> Result Select </label>

    <div class="col-sm-10">
      <select id="select" class="full-width" multiple="multiple">
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
`,Fl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Large Select
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example10.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example10.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Virtual scroll will be used with a large set of data</div>
  </div>

</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">
      Basic Select
    </label>

    <div class="col-sm-10">
      <select multiple="multiple" data-test="select10" id="select" class="full-width">
    </div>
  </div>
</div>
`,$l=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Themes
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example11.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example11.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Multiple select with bootstrap theme.</div>
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
`,Rl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Checkbox/Radio Icons with Font-Awesome
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example12.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example12.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">
      Display checkbox or radio icons using Font-Awesome or any other library to replicate the same UI across all browser.
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
`,Il=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Dynamically create Multiple-Select with Data collection
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example13.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example13.ts"
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
`,Bl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Divider
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example14.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example14.ts"
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
`,Pl=`<div class="row mb-2">
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
&lt;link href=&quot;<span style="color:#880000">https://cdn.jsdelivr.net/npm/multiple-select-vanilla@1.0.3/dist/styles/css/multiple-select.css</span>&quot; rel=&quot;<span style="color:#880000">stylesheet</span>&quot;&gt;

&lt;!-- (ESM requires <span style="color:#d63384">type=&quot;module&quot;</span>) Latest compiled and minified JavaScript --&gt;
&lt;script type=&quot;module&quot; src=&quot;<span style="color:#880000">https://cdn.jsdelivr.net/npm/multiple-select-vanilla@1.0.3/dist/browser/multiple-select.js</span>&quot;&gt;&lt;/script&gt;

&lt;!-- (CJS requires <span style="color:#d63384">.cjs</span> extension) Latest compiled and minified JavaScript --&gt;
&lt;script src=&quot;<span style="color:#880000">https://cdn.jsdelivr.net/npm/multiple-select-vanilla@1.0.3/dist/browser/multiple-select.cjs</span>&quot;&gt;&lt;/script&gt;</pre>
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
`,Hl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The i18n
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/i18n/i18n.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/i18n/i18n.ts">ts</a>
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
`,ji=`<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
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
        <li class="nav-item"><a href="playwright-report" class="nav-link" target="_blank">Playwright 🎭</a></li>
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
`,Gl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The getOptions
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods01.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods01.ts"
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
`,Ul=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The refreshOptions
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods02.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods02.ts"
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

    <div class="col-sm-10">
      <button id="refreshOptions" class="btn btn-secondary">refreshOptions</button>
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
`,jl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The setSelects/getSelects
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods03.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods03.ts"
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
`,Wl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The enable/disable
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods04.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods04.ts"
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
`,Vl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The open/close
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods05.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods05.ts"
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
`,Jl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The check/uncheck
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods06.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods06.ts"
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
`,zl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The checkAll/uncheckAll
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods07.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods07.ts"
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
`,ql=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The checkInvert
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods08.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods08.ts"
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
`,Yl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The focus/blur
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods09.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods09.ts"
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
`,Kl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The refresh
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods10.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods10.ts"
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
`,Xl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The destroy
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods11.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods11.ts"
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
`,Ql=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The getData
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods12.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods12.ts"
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
`,Zl=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Placeholder
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options01.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options01.ts"
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
`,ta=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Single Radio
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options02.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options02.ts"
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
`,ea=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Hide Select All
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options03.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options03.ts"
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
`,na=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Hide Optgroup Checkboxes
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options04.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options04.ts"
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
`,oa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Custom Dropdown Width
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options05.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options05.ts"
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
`,ia=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Max Height
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options06.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options06.ts"
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
`,sa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Max Height Unit
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options07.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options07.ts"
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
`,la=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Position
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options08.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options08.ts"
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
`,aa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Display Values
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options09.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options09.ts"
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
`,ra=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Display Title
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options10.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options10.ts"
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
`,pa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Display Delimiter
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options11.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options11.ts"
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
`,ca=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Minimum Count Selected
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options12.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options12.ts"
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
`,ua=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Ellipsis
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options13.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options13.ts"
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
`,da=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Is Open
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options14.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options14.ts"
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
`,ma=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Keep Open
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options15.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options15.ts"
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
`,ha=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Open On Hover
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options16.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options16.ts"
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
`,va=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Container
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options17.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options17.ts"
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
`,fa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Filter
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options18.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options18.ts"
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
`,ba=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Filter Only Optgroup
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options19.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options19.ts"
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
`,ga=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Filter Placeholder
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options20.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options20.ts"
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
`,Ea=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Filter Accept On Enter
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options21.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options21.ts"
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
`,_a=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Filter By Data Length
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options22.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options22.ts"
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
`,ya=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Custom Filter
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options23.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options23.ts"
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
`,Aa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Show Clear
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options24.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options24.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>showClear</code> to show the clear icon to uncheck all selected items.</div>
  </div>
</div>

<div>
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
    <label class="col-sm-2"> Group Select </label>

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
`,wa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Show OK Button
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options25.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options25.ts"
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
`,Sa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Styler / CSS Styler
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options26.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options26.ts"
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
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select id="basic" multiple="multiple" class="full-width" data-test="select1">
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
      <select id="group" multiple="multiple" class="full-width" data-test="select2">
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
`,Ta=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Text Template
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options27.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options27.ts"
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
`,Oa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Label Template
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options28.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options28.ts"
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
`,Ca=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Auto-Adjust Drop Position
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options29.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options29.ts"
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
`,xa=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Auto-Adjust Drop Height/Width
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options30.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options30.ts"
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
`,ka=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Use Select Option as Label
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options31.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options31.ts"
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
`,Da=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Sanitizer
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options32.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options32.ts"
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
`,Na=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Classes
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options33.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options33.ts"
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
`,La=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Show Search Clear
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options34.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options34.ts"
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
`;var Y="top",ot="bottom",it="right",K="left",An="auto",Ce=[Y,ot,it,K],ee="start",_e="end",Wi="clippingParents",Eo="viewport",fe="popper",Vi="reference",lo=Ce.reduce(function(e,t){return e.concat([t+"-"+ee,t+"-"+_e])},[]),_o=[].concat(Ce,[An]).reduce(function(e,t){return e.concat([t,t+"-"+ee,t+"-"+_e])},[]),Ji="beforeRead",zi="read",qi="afterRead",Yi="beforeMain",Ki="main",Xi="afterMain",Qi="beforeWrite",Zi="write",ts="afterWrite",es=[Ji,zi,qi,Yi,Ki,Xi,Qi,Zi,ts];function wt(e){return e?(e.nodeName||"").toLowerCase():null}function st(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ne(e){var t=st(e).Element;return e instanceof t||e instanceof Element}function rt(e){var t=st(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function yo(e){if(typeof ShadowRoot>"u")return!1;var t=st(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Ma(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var o=t.styles[n]||{},i=t.attributes[n]||{},s=t.elements[n];!rt(s)||!wt(s)||(Object.assign(s.style,o),Object.keys(i).forEach(function(l){var a=i[l];a===!1?s.removeAttribute(l):s.setAttribute(l,a===!0?"":a)}))})}function Fa(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(o){var i=t.elements[o],s=t.attributes[o]||{},l=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:n[o]),a=l.reduce(function(p,u){return p[u]="",p},{});!rt(i)||!wt(i)||(Object.assign(i.style,a),Object.keys(s).forEach(function(p){i.removeAttribute(p)}))})}}const Ao={name:"applyStyles",enabled:!0,phase:"write",fn:Ma,effect:Fa,requires:["computeStyles"]};function _t(e){return e.split("-")[0]}var te=Math.max,bn=Math.min,ye=Math.round;function ao(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ns(){return!/^((?!chrome|android).)*safari/i.test(ao())}function Ae(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var o=e.getBoundingClientRect(),i=1,s=1;t&&rt(e)&&(i=e.offsetWidth>0&&ye(o.width)/e.offsetWidth||1,s=e.offsetHeight>0&&ye(o.height)/e.offsetHeight||1);var l=ne(e)?st(e):window,a=l.visualViewport,p=!ns()&&n,u=(o.left+(p&&a?a.offsetLeft:0))/i,c=(o.top+(p&&a?a.offsetTop:0))/s,E=o.width/i,A=o.height/s;return{width:E,height:A,top:c,right:u+E,bottom:c+A,left:u,x:u,y:c}}function wo(e){var t=Ae(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function os(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&yo(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Lt(e){return st(e).getComputedStyle(e)}function $a(e){return["table","td","th"].indexOf(wt(e))>=0}function jt(e){return((ne(e)?e.ownerDocument:e.document)||window.document).documentElement}function wn(e){return wt(e)==="html"?e:e.assignedSlot||e.parentNode||(yo(e)?e.host:null)||jt(e)}function Yo(e){return!rt(e)||Lt(e).position==="fixed"?null:e.offsetParent}function Ra(e){var t=/firefox/i.test(ao()),n=/Trident/i.test(ao());if(n&&rt(e)){var o=Lt(e);if(o.position==="fixed")return null}var i=wn(e);for(yo(i)&&(i=i.host);rt(i)&&["html","body"].indexOf(wt(i))<0;){var s=Lt(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function Ve(e){for(var t=st(e),n=Yo(e);n&&$a(n)&&Lt(n).position==="static";)n=Yo(n);return n&&(wt(n)==="html"||wt(n)==="body"&&Lt(n).position==="static")?t:n||Ra(e)||t}function So(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ue(e,t,n){return te(e,bn(t,n))}function Ia(e,t,n){var o=Ue(e,t,n);return o>n?n:o}function is(){return{top:0,right:0,bottom:0,left:0}}function ss(e){return Object.assign({},is(),e)}function ls(e,t){return t.reduce(function(n,o){return n[o]=e,n},{})}var Ba=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,ss(typeof t!="number"?t:ls(t,Ce))};function Pa(e){var t,n=e.state,o=e.name,i=e.options,s=n.elements.arrow,l=n.modifiersData.popperOffsets,a=_t(n.placement),p=So(a),u=[K,it].indexOf(a)>=0,c=u?"height":"width";if(!(!s||!l)){var E=Ba(i.padding,n),A=wo(s),b=p==="y"?Y:K,x=p==="y"?ot:it,w=n.rects.reference[c]+n.rects.reference[p]-l[p]-n.rects.popper[c],C=l[p]-n.rects.reference[p],D=Ve(s),M=D?p==="y"?D.clientHeight||0:D.clientWidth||0:0,O=w/2-C/2,S=E[b],k=M-A[c]-E[x],N=M/2-A[c]/2+O,I=Ue(S,N,k),U=p;n.modifiersData[o]=(t={},t[U]=I,t.centerOffset=I-N,t)}}function Ha(e){var t=e.state,n=e.options,o=n.element,i=o===void 0?"[data-popper-arrow]":o;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||os(t.elements.popper,i)&&(t.elements.arrow=i))}const as={name:"arrow",enabled:!0,phase:"main",fn:Pa,effect:Ha,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function we(e){return e.split("-")[1]}var Ga={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ua(e,t){var n=e.x,o=e.y,i=t.devicePixelRatio||1;return{x:ye(n*i)/i||0,y:ye(o*i)/i||0}}function Ko(e){var t,n=e.popper,o=e.popperRect,i=e.placement,s=e.variation,l=e.offsets,a=e.position,p=e.gpuAcceleration,u=e.adaptive,c=e.roundOffsets,E=e.isFixed,A=l.x,b=A===void 0?0:A,x=l.y,w=x===void 0?0:x,C=typeof c=="function"?c({x:b,y:w}):{x:b,y:w};b=C.x,w=C.y;var D=l.hasOwnProperty("x"),M=l.hasOwnProperty("y"),O=K,S=Y,k=window;if(u){var N=Ve(n),I="clientHeight",U="clientWidth";if(N===st(n)&&(N=jt(n),Lt(N).position!=="static"&&a==="absolute"&&(I="scrollHeight",U="scrollWidth")),N=N,i===Y||(i===K||i===it)&&s===_e){S=ot;var P=E&&N===k&&k.visualViewport?k.visualViewport.height:N[I];w-=P-o.height,w*=p?1:-1}if(i===K||(i===Y||i===ot)&&s===_e){O=it;var L=E&&N===k&&k.visualViewport?k.visualViewport.width:N[U];b-=L-o.width,b*=p?1:-1}}var H=Object.assign({position:a},u&&Ga),z=c===!0?Ua({x:b,y:w},st(n)):{x:b,y:w};if(b=z.x,w=z.y,p){var j;return Object.assign({},H,(j={},j[S]=M?"0":"",j[O]=D?"0":"",j.transform=(k.devicePixelRatio||1)<=1?"translate("+b+"px, "+w+"px)":"translate3d("+b+"px, "+w+"px, 0)",j))}return Object.assign({},H,(t={},t[S]=M?w+"px":"",t[O]=D?b+"px":"",t.transform="",t))}function ja(e){var t=e.state,n=e.options,o=n.gpuAcceleration,i=o===void 0?!0:o,s=n.adaptive,l=s===void 0?!0:s,a=n.roundOffsets,p=a===void 0?!0:a,u={placement:_t(t.placement),variation:we(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ko(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:p})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ko(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:p})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const To={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ja,data:{}};var tn={passive:!0};function Wa(e){var t=e.state,n=e.instance,o=e.options,i=o.scroll,s=i===void 0?!0:i,l=o.resize,a=l===void 0?!0:l,p=st(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&u.forEach(function(c){c.addEventListener("scroll",n.update,tn)}),a&&p.addEventListener("resize",n.update,tn),function(){s&&u.forEach(function(c){c.removeEventListener("scroll",n.update,tn)}),a&&p.removeEventListener("resize",n.update,tn)}}const Oo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Wa,data:{}};var Va={left:"right",right:"left",bottom:"top",top:"bottom"};function mn(e){return e.replace(/left|right|bottom|top/g,function(t){return Va[t]})}var Ja={start:"end",end:"start"};function Xo(e){return e.replace(/start|end/g,function(t){return Ja[t]})}function Co(e){var t=st(e),n=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:n,scrollTop:o}}function xo(e){return Ae(jt(e)).left+Co(e).scrollLeft}function za(e,t){var n=st(e),o=jt(e),i=n.visualViewport,s=o.clientWidth,l=o.clientHeight,a=0,p=0;if(i){s=i.width,l=i.height;var u=ns();(u||!u&&t==="fixed")&&(a=i.offsetLeft,p=i.offsetTop)}return{width:s,height:l,x:a+xo(e),y:p}}function qa(e){var t,n=jt(e),o=Co(e),i=(t=e.ownerDocument)==null?void 0:t.body,s=te(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=te(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-o.scrollLeft+xo(e),p=-o.scrollTop;return Lt(i||n).direction==="rtl"&&(a+=te(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:l,x:a,y:p}}function ko(e){var t=Lt(e),n=t.overflow,o=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+o)}function rs(e){return["html","body","#document"].indexOf(wt(e))>=0?e.ownerDocument.body:rt(e)&&ko(e)?e:rs(wn(e))}function je(e,t){var n;t===void 0&&(t=[]);var o=rs(e),i=o===((n=e.ownerDocument)==null?void 0:n.body),s=st(o),l=i?[s].concat(s.visualViewport||[],ko(o)?o:[]):o,a=t.concat(l);return i?a:a.concat(je(wn(l)))}function ro(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ya(e,t){var n=Ae(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Qo(e,t,n){return t===Eo?ro(za(e,n)):ne(t)?Ya(t,n):ro(qa(jt(e)))}function Ka(e){var t=je(wn(e)),n=["absolute","fixed"].indexOf(Lt(e).position)>=0,o=n&&rt(e)?Ve(e):e;return ne(o)?t.filter(function(i){return ne(i)&&os(i,o)&&wt(i)!=="body"}):[]}function Xa(e,t,n,o){var i=t==="clippingParents"?Ka(e):[].concat(t),s=[].concat(i,[n]),l=s[0],a=s.reduce(function(p,u){var c=Qo(e,u,o);return p.top=te(c.top,p.top),p.right=bn(c.right,p.right),p.bottom=bn(c.bottom,p.bottom),p.left=te(c.left,p.left),p},Qo(e,l,o));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ps(e){var t=e.reference,n=e.element,o=e.placement,i=o?_t(o):null,s=o?we(o):null,l=t.x+t.width/2-n.width/2,a=t.y+t.height/2-n.height/2,p;switch(i){case Y:p={x:l,y:t.y-n.height};break;case ot:p={x:l,y:t.y+t.height};break;case it:p={x:t.x+t.width,y:a};break;case K:p={x:t.x-n.width,y:a};break;default:p={x:t.x,y:t.y}}var u=i?So(i):null;if(u!=null){var c=u==="y"?"height":"width";switch(s){case ee:p[u]=p[u]-(t[c]/2-n[c]/2);break;case _e:p[u]=p[u]+(t[c]/2-n[c]/2);break}}return p}function Se(e,t){t===void 0&&(t={});var n=t,o=n.placement,i=o===void 0?e.placement:o,s=n.strategy,l=s===void 0?e.strategy:s,a=n.boundary,p=a===void 0?Wi:a,u=n.rootBoundary,c=u===void 0?Eo:u,E=n.elementContext,A=E===void 0?fe:E,b=n.altBoundary,x=b===void 0?!1:b,w=n.padding,C=w===void 0?0:w,D=ss(typeof C!="number"?C:ls(C,Ce)),M=A===fe?Vi:fe,O=e.rects.popper,S=e.elements[x?M:A],k=Xa(ne(S)?S:S.contextElement||jt(e.elements.popper),p,c,l),N=Ae(e.elements.reference),I=ps({reference:N,element:O,strategy:"absolute",placement:i}),U=ro(Object.assign({},O,I)),P=A===fe?U:N,L={top:k.top-P.top+D.top,bottom:P.bottom-k.bottom+D.bottom,left:k.left-P.left+D.left,right:P.right-k.right+D.right},H=e.modifiersData.offset;if(A===fe&&H){var z=H[i];Object.keys(L).forEach(function(j){var St=[it,ot].indexOf(j)>=0?1:-1,Tt=[Y,ot].indexOf(j)>=0?"y":"x";L[j]+=z[Tt]*St})}return L}function Qa(e,t){t===void 0&&(t={});var n=t,o=n.placement,i=n.boundary,s=n.rootBoundary,l=n.padding,a=n.flipVariations,p=n.allowedAutoPlacements,u=p===void 0?_o:p,c=we(o),E=c?a?lo:lo.filter(function(x){return we(x)===c}):Ce,A=E.filter(function(x){return u.indexOf(x)>=0});A.length===0&&(A=E);var b=A.reduce(function(x,w){return x[w]=Se(e,{placement:w,boundary:i,rootBoundary:s,padding:l})[_t(w)],x},{});return Object.keys(b).sort(function(x,w){return b[x]-b[w]})}function Za(e){if(_t(e)===An)return[];var t=mn(e);return[Xo(e),t,Xo(t)]}function tr(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var i=n.mainAxis,s=i===void 0?!0:i,l=n.altAxis,a=l===void 0?!0:l,p=n.fallbackPlacements,u=n.padding,c=n.boundary,E=n.rootBoundary,A=n.altBoundary,b=n.flipVariations,x=b===void 0?!0:b,w=n.allowedAutoPlacements,C=t.options.placement,D=_t(C),M=D===C,O=p||(M||!x?[mn(C)]:Za(C)),S=[C].concat(O).reduce(function(lt,at){return lt.concat(_t(at)===An?Qa(t,{placement:at,boundary:c,rootBoundary:E,padding:u,flipVariations:x,allowedAutoPlacements:w}):at)},[]),k=t.rects.reference,N=t.rects.popper,I=new Map,U=!0,P=S[0],L=0;L<S.length;L++){var H=S[L],z=_t(H),j=we(H)===ee,St=[Y,ot].indexOf(z)>=0,Tt=St?"width":"height",q=Se(t,{placement:H,boundary:c,rootBoundary:E,altBoundary:A,padding:u}),Q=St?j?it:K:j?ot:Y;k[Tt]>N[Tt]&&(Q=mn(Q));var Jt=mn(Q),F=[];if(s&&F.push(q[z]<=0),a&&F.push(q[Q]<=0,q[Jt]<=0),F.every(function(lt){return lt})){P=H,U=!1;break}I.set(H,F)}if(U)for(var zt=x?3:1,B=function(at){var $t=S.find(function(Rt){var gt=I.get(Rt);if(gt)return gt.slice(0,at).every(function(se){return se})});if($t)return P=$t,"break"},Ft=zt;Ft>0;Ft--){var $=B(Ft);if($==="break")break}t.placement!==P&&(t.modifiersData[o]._skip=!0,t.placement=P,t.reset=!0)}}const cs={name:"flip",enabled:!0,phase:"main",fn:tr,requiresIfExists:["offset"],data:{_skip:!1}};function Zo(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ti(e){return[Y,it,ot,K].some(function(t){return e[t]>=0})}function er(e){var t=e.state,n=e.name,o=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,l=Se(t,{elementContext:"reference"}),a=Se(t,{altBoundary:!0}),p=Zo(l,o),u=Zo(a,i,s),c=ti(p),E=ti(u);t.modifiersData[n]={referenceClippingOffsets:p,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:E},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":E})}const us={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:er};function nr(e,t,n){var o=_t(e),i=[K,Y].indexOf(o)>=0?-1:1,s=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,l=s[0],a=s[1];return l=l||0,a=(a||0)*i,[K,it].indexOf(o)>=0?{x:a,y:l}:{x:l,y:a}}function or(e){var t=e.state,n=e.options,o=e.name,i=n.offset,s=i===void 0?[0,0]:i,l=_o.reduce(function(c,E){return c[E]=nr(E,t.rects,s),c},{}),a=l[t.placement],p=a.x,u=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=p,t.modifiersData.popperOffsets.y+=u),t.modifiersData[o]=l}const ds={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:or};function ir(e){var t=e.state,n=e.name;t.modifiersData[n]=ps({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Do={name:"popperOffsets",enabled:!0,phase:"read",fn:ir,data:{}};function sr(e){return e==="x"?"y":"x"}function lr(e){var t=e.state,n=e.options,o=e.name,i=n.mainAxis,s=i===void 0?!0:i,l=n.altAxis,a=l===void 0?!1:l,p=n.boundary,u=n.rootBoundary,c=n.altBoundary,E=n.padding,A=n.tether,b=A===void 0?!0:A,x=n.tetherOffset,w=x===void 0?0:x,C=Se(t,{boundary:p,rootBoundary:u,padding:E,altBoundary:c}),D=_t(t.placement),M=we(t.placement),O=!M,S=So(D),k=sr(S),N=t.modifiersData.popperOffsets,I=t.rects.reference,U=t.rects.popper,P=typeof w=="function"?w(Object.assign({},t.rects,{placement:t.placement})):w,L=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),H=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,z={x:0,y:0};if(N){if(s){var j,St=S==="y"?Y:K,Tt=S==="y"?ot:it,q=S==="y"?"height":"width",Q=N[S],Jt=Q+C[St],F=Q-C[Tt],zt=b?-U[q]/2:0,B=M===ee?I[q]:U[q],Ft=M===ee?-U[q]:-I[q],$=t.elements.arrow,lt=b&&$?wo($):{width:0,height:0},at=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:is(),$t=at[St],Rt=at[Tt],gt=Ue(0,I[q],lt[q]),se=O?I[q]/2-zt-gt-$t-L.mainAxis:B-gt-$t-L.mainAxis,It=O?-I[q]/2+zt+gt+Rt+L.mainAxis:Ft+gt+Rt+L.mainAxis,mt=t.elements.arrow&&Ve(t.elements.arrow),Ne=mt?S==="y"?mt.clientTop||0:mt.clientLeft||0:0,le=(j=H==null?void 0:H[S])!=null?j:0,Bt=Q+se-le-Ne,ae=Q+It-le,qt=Ue(b?bn(Jt,Bt):Jt,Q,b?te(F,ae):F);N[S]=qt,z[S]=qt-Q}if(a){var Le,Ke=S==="x"?Y:K,Dn=S==="x"?ot:it,ht=N[k],Et=k==="y"?"height":"width",Ot=ht+C[Ke],Ct=ht-C[Dn],re=[Y,K].indexOf(D)!==-1,Me=(Le=H==null?void 0:H[k])!=null?Le:0,Fe=re?Ot:ht-I[Et]-U[Et]-Me+L.altAxis,pe=re?ht+I[Et]+U[Et]-Me-L.altAxis:Ct,$e=b&&re?Ia(Fe,ht,pe):Ue(b?Fe:Ot,ht,b?pe:Ct);N[k]=$e,z[k]=$e-ht}t.modifiersData[o]=z}}const ms={name:"preventOverflow",enabled:!0,phase:"main",fn:lr,requiresIfExists:["offset"]};function ar(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function rr(e){return e===st(e)||!rt(e)?Co(e):ar(e)}function pr(e){var t=e.getBoundingClientRect(),n=ye(t.width)/e.offsetWidth||1,o=ye(t.height)/e.offsetHeight||1;return n!==1||o!==1}function cr(e,t,n){n===void 0&&(n=!1);var o=rt(t),i=rt(t)&&pr(t),s=jt(t),l=Ae(e,i,n),a={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(o||!o&&!n)&&((wt(t)!=="body"||ko(s))&&(a=rr(t)),rt(t)?(p=Ae(t,!0),p.x+=t.clientLeft,p.y+=t.clientTop):s&&(p.x=xo(s))),{x:l.left+a.scrollLeft-p.x,y:l.top+a.scrollTop-p.y,width:l.width,height:l.height}}function ur(e){var t=new Map,n=new Set,o=[];e.forEach(function(s){t.set(s.name,s)});function i(s){n.add(s.name);var l=[].concat(s.requires||[],s.requiresIfExists||[]);l.forEach(function(a){if(!n.has(a)){var p=t.get(a);p&&i(p)}}),o.push(s)}return e.forEach(function(s){n.has(s.name)||i(s)}),o}function dr(e){var t=ur(e);return es.reduce(function(n,o){return n.concat(t.filter(function(i){return i.phase===o}))},[])}function mr(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function hr(e){var t=e.reduce(function(n,o){var i=n[o.name];return n[o.name]=i?Object.assign({},i,o,{options:Object.assign({},i.options,o.options),data:Object.assign({},i.data,o.data)}):o,n},{});return Object.keys(t).map(function(n){return t[n]})}var ei={placement:"bottom",modifiers:[],strategy:"absolute"};function ni(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Sn(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,o=n===void 0?[]:n,i=t.defaultOptions,s=i===void 0?ei:i;return function(a,p,u){u===void 0&&(u=s);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},ei,s),modifiersData:{},elements:{reference:a,popper:p},attributes:{},styles:{}},E=[],A=!1,b={state:c,setOptions:function(D){var M=typeof D=="function"?D(c.options):D;w(),c.options=Object.assign({},s,c.options,M),c.scrollParents={reference:ne(a)?je(a):a.contextElement?je(a.contextElement):[],popper:je(p)};var O=dr(hr([].concat(o,c.options.modifiers)));return c.orderedModifiers=O.filter(function(S){return S.enabled}),x(),b.update()},forceUpdate:function(){if(!A){var D=c.elements,M=D.reference,O=D.popper;if(ni(M,O)){c.rects={reference:cr(M,Ve(O),c.options.strategy==="fixed"),popper:wo(O)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(L){return c.modifiersData[L.name]=Object.assign({},L.data)});for(var S=0;S<c.orderedModifiers.length;S++){if(c.reset===!0){c.reset=!1,S=-1;continue}var k=c.orderedModifiers[S],N=k.fn,I=k.options,U=I===void 0?{}:I,P=k.name;typeof N=="function"&&(c=N({state:c,options:U,name:P,instance:b})||c)}}}},update:mr(function(){return new Promise(function(C){b.forceUpdate(),C(c)})}),destroy:function(){w(),A=!0}};if(!ni(a,p))return b;b.setOptions(u).then(function(C){!A&&u.onFirstUpdate&&u.onFirstUpdate(C)});function x(){c.orderedModifiers.forEach(function(C){var D=C.name,M=C.options,O=M===void 0?{}:M,S=C.effect;if(typeof S=="function"){var k=S({state:c,name:D,instance:b,options:O}),N=function(){};E.push(k||N)}})}function w(){E.forEach(function(C){return C()}),E=[]}return b}}var vr=Sn(),fr=[Oo,Do,To,Ao],br=Sn({defaultModifiers:fr}),gr=[Oo,Do,To,Ao,ds,cs,ms,as,us],No=Sn({defaultModifiers:gr});const hs=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Xi,afterRead:qi,afterWrite:ts,applyStyles:Ao,arrow:as,auto:An,basePlacements:Ce,beforeMain:Yi,beforeRead:Ji,beforeWrite:Qi,bottom:ot,clippingParents:Wi,computeStyles:To,createPopper:No,createPopperBase:vr,createPopperLite:br,detectOverflow:Se,end:_e,eventListeners:Oo,flip:cs,hide:us,left:K,main:Ki,modifierPhases:es,offset:ds,placements:_o,popper:fe,popperGenerator:Sn,popperOffsets:Do,preventOverflow:ms,read:zi,reference:Vi,right:it,start:ee,top:Y,variationPlacements:lo,viewport:Eo,write:Zi},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Pt=new Map,Rn={set(e,t,n){Pt.has(e)||Pt.set(e,new Map);const o=Pt.get(e);if(!o.has(t)&&o.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`);return}o.set(t,n)},get(e,t){return Pt.has(e)&&Pt.get(e).get(t)||null},remove(e,t){if(!Pt.has(e))return;const n=Pt.get(e);n.delete(t),n.size===0&&Pt.delete(e)}},Er=1e6,_r=1e3,po="transitionend",vs=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(t,n)=>`#${CSS.escape(n)}`)),e),yr=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),Ar=e=>{do e+=Math.floor(Math.random()*Er);while(document.getElementById(e));return e},wr=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const o=Number.parseFloat(t),i=Number.parseFloat(n);return!o&&!i?0:(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*_r)},fs=e=>{e.dispatchEvent(new Event(po))},Dt=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u"),Ht=e=>Dt(e)?e.jquery?e[0]:e:typeof e=="string"&&e.length>0?document.querySelector(vs(e)):null,xe=e=>{if(!Dt(e)||e.getClientRects().length===0)return!1;const t=getComputedStyle(e).getPropertyValue("visibility")==="visible",n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const o=e.closest("summary");if(o&&o.parentNode!==n||o===null)return!1}return t},Gt=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled")?!0:typeof e.disabled<"u"?e.disabled:e.hasAttribute("disabled")&&e.getAttribute("disabled")!=="false",bs=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode=="function"){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?bs(e.parentNode):null},gn=()=>{},Je=e=>{e.offsetHeight},gs=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,In=[],Sr=e=>{document.readyState==="loading"?(In.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of In)t()}),In.push(e)):e()},pt=()=>document.documentElement.dir==="rtl",dt=e=>{Sr(()=>{const t=gs();if(t){const n=e.NAME,o=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=o,e.jQueryInterface)}})},et=(e,t=[],n=e)=>typeof e=="function"?e(...t):n,Es=(e,t,n=!0)=>{if(!n){et(e);return}const o=5,i=wr(t)+o;let s=!1;const l=({target:a})=>{a===t&&(s=!0,t.removeEventListener(po,l),et(e))};t.addEventListener(po,l),setTimeout(()=>{s||fs(t)},i)},Lo=(e,t,n,o)=>{const i=e.length;let s=e.indexOf(t);return s===-1?!n&&o?e[i-1]:e[0]:(s+=n?1:-1,o&&(s=(s+i)%i),e[Math.max(0,Math.min(s,i-1))])},Tr=/[^.]*(?=\..*)\.|.*/,Or=/\..*/,Cr=/::\d+$/,Bn={};let oi=1;const _s={mouseenter:"mouseover",mouseleave:"mouseout"},xr=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function ys(e,t){return t&&`${t}::${oi++}`||e.uidEvent||oi++}function As(e){const t=ys(e);return e.uidEvent=t,Bn[t]=Bn[t]||{},Bn[t]}function kr(e,t){return function n(o){return Mo(o,{delegateTarget:e}),n.oneOff&&d.off(e,o.type,t),t.apply(e,[o])}}function Dr(e,t,n){return function o(i){const s=e.querySelectorAll(t);for(let{target:l}=i;l&&l!==this;l=l.parentNode)for(const a of s)if(a===l)return Mo(i,{delegateTarget:l}),o.oneOff&&d.off(e,i.type,t,n),n.apply(l,[i])}}function ws(e,t,n=null){return Object.values(e).find(o=>o.callable===t&&o.delegationSelector===n)}function Ss(e,t,n){const o=typeof t=="string",i=o?n:t||n;let s=Ts(e);return xr.has(s)||(s=e),[o,i,s]}function ii(e,t,n,o,i){if(typeof t!="string"||!e)return;let[s,l,a]=Ss(t,n,o);t in _s&&(l=(x=>function(w){if(!w.relatedTarget||w.relatedTarget!==w.delegateTarget&&!w.delegateTarget.contains(w.relatedTarget))return x.call(this,w)})(l));const p=As(e),u=p[a]||(p[a]={}),c=ws(u,l,s?n:null);if(c){c.oneOff=c.oneOff&&i;return}const E=ys(l,t.replace(Tr,"")),A=s?Dr(e,n,l):kr(e,l);A.delegationSelector=s?n:null,A.callable=l,A.oneOff=i,A.uidEvent=E,u[E]=A,e.addEventListener(a,A,s)}function co(e,t,n,o,i){const s=ws(t[n],o,i);s&&(e.removeEventListener(n,s,!!i),delete t[n][s.uidEvent])}function Nr(e,t,n,o){const i=t[n]||{};for(const[s,l]of Object.entries(i))s.includes(o)&&co(e,t,n,l.callable,l.delegationSelector)}function Ts(e){return e=e.replace(Or,""),_s[e]||e}const d={on(e,t,n,o){ii(e,t,n,o,!1)},one(e,t,n,o){ii(e,t,n,o,!0)},off(e,t,n,o){if(typeof t!="string"||!e)return;const[i,s,l]=Ss(t,n,o),a=l!==t,p=As(e),u=p[l]||{},c=t.startsWith(".");if(typeof s<"u"){if(!Object.keys(u).length)return;co(e,p,l,s,i?n:null);return}if(c)for(const E of Object.keys(p))Nr(e,p,E,t.slice(1));for(const[E,A]of Object.entries(u)){const b=E.replace(Cr,"");(!a||t.includes(b))&&co(e,p,l,A.callable,A.delegationSelector)}},trigger(e,t,n){if(typeof t!="string"||!e)return null;const o=gs(),i=Ts(t),s=t!==i;let l=null,a=!0,p=!0,u=!1;s&&o&&(l=o.Event(t,n),o(e).trigger(l),a=!l.isPropagationStopped(),p=!l.isImmediatePropagationStopped(),u=l.isDefaultPrevented());const c=Mo(new Event(t,{bubbles:a,cancelable:!0}),n);return u&&c.preventDefault(),p&&e.dispatchEvent(c),c.defaultPrevented&&l&&l.preventDefault(),c}};function Mo(e,t={}){for(const[n,o]of Object.entries(t))try{e[n]=o}catch{Object.defineProperty(e,n,{configurable:!0,get(){return o}})}return e}function si(e){if(e==="true")return!0;if(e==="false")return!1;if(e===Number(e).toString())return Number(e);if(e===""||e==="null")return null;if(typeof e!="string")return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function Pn(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const Nt={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${Pn(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${Pn(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter(o=>o.startsWith("bs")&&!o.startsWith("bsConfig"));for(const o of n){let i=o.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=si(e.dataset[o])}return t},getDataAttribute(e,t){return si(e.getAttribute(`data-bs-${Pn(t)}`))}};class ze{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,n){const o=Dt(n)?Nt.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof o=="object"?o:{},...Dt(n)?Nt.getDataAttributes(n):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,n=this.constructor.DefaultType){for(const[o,i]of Object.entries(n)){const s=t[o],l=Dt(s)?"element":yr(s);if(!new RegExp(i).test(l))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${o}" provided type "${l}" but expected type "${i}".`)}}}const Lr="5.3.2";class bt extends ze{constructor(t,n){super(),t=Ht(t),t&&(this._element=t,this._config=this._getConfig(n),Rn.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Rn.remove(this._element,this.constructor.DATA_KEY),d.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,n,o=!0){Es(t,n,o)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Rn.get(Ht(t),this.DATA_KEY)}static getOrCreateInstance(t,n={}){return this.getInstance(t)||new this(t,typeof n=="object"?n:null)}static get VERSION(){return Lr}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const Hn=e=>{let t=e.getAttribute("data-bs-target");if(!t||t==="#"){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&n!=="#"?vs(n.trim()):null}return t},_={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(n=>n.matches(t))},parents(e,t){const n=[];let o=e.parentNode.closest(t);for(;o;)n.push(o),o=o.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(t,e).filter(n=>!Gt(n)&&xe(n))},getSelectorFromElement(e){const t=Hn(e);return t&&_.findOne(t)?t:null},getElementFromSelector(e){const t=Hn(e);return t?_.findOne(t):null},getMultipleElementsFromSelector(e){const t=Hn(e);return t?_.find(t):[]}},Tn=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,o=e.NAME;d.on(document,n,`[data-bs-dismiss="${o}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),Gt(this))return;const s=_.getElementFromSelector(this)||this.closest(`.${o}`);e.getOrCreateInstance(s)[t]()})},Mr="alert",Fr="bs.alert",Os=`.${Fr}`,$r=`close${Os}`,Rr=`closed${Os}`,Ir="fade",Br="show";class On extends bt{static get NAME(){return Mr}close(){if(d.trigger(this._element,$r).defaultPrevented)return;this._element.classList.remove(Br);const n=this._element.classList.contains(Ir);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),d.trigger(this._element,Rr),this.dispose()}static jQueryInterface(t){return this.each(function(){const n=On.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}Tn(On,"close");dt(On);const Pr="button",Hr="bs.button",Gr=`.${Hr}`,Ur=".data-api",jr="active",li='[data-bs-toggle="button"]',Wr=`click${Gr}${Ur}`;class Cn extends bt{static get NAME(){return Pr}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(jr))}static jQueryInterface(t){return this.each(function(){const n=Cn.getOrCreateInstance(this);t==="toggle"&&n[t]()})}}d.on(document,Wr,li,e=>{e.preventDefault();const t=e.target.closest(li);Cn.getOrCreateInstance(t).toggle()});dt(Cn);const Vr="swipe",ke=".bs.swipe",Jr=`touchstart${ke}`,zr=`touchmove${ke}`,qr=`touchend${ke}`,Yr=`pointerdown${ke}`,Kr=`pointerup${ke}`,Xr="touch",Qr="pen",Zr="pointer-event",tp=40,ep={endCallback:null,leftCallback:null,rightCallback:null},np={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class En extends ze{constructor(t,n){super(),this._element=t,!(!t||!En.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return ep}static get DefaultType(){return np}static get NAME(){return Vr}dispose(){d.off(this._element,ke)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),et(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=tp)return;const n=t/this._deltaX;this._deltaX=0,n&&et(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(d.on(this._element,Yr,t=>this._start(t)),d.on(this._element,Kr,t=>this._end(t)),this._element.classList.add(Zr)):(d.on(this._element,Jr,t=>this._start(t)),d.on(this._element,zr,t=>this._move(t)),d.on(this._element,qr,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===Qr||t.pointerType===Xr)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const op="carousel",ip="bs.carousel",Wt=`.${ip}`,Cs=".data-api",sp="ArrowLeft",lp="ArrowRight",ap=500,Ie="next",de="prev",be="left",hn="right",rp=`slide${Wt}`,Gn=`slid${Wt}`,pp=`keydown${Wt}`,cp=`mouseenter${Wt}`,up=`mouseleave${Wt}`,dp=`dragstart${Wt}`,mp=`load${Wt}${Cs}`,hp=`click${Wt}${Cs}`,xs="carousel",en="active",vp="slide",fp="carousel-item-end",bp="carousel-item-start",gp="carousel-item-next",Ep="carousel-item-prev",ks=".active",Ds=".carousel-item",_p=ks+Ds,yp=".carousel-item img",Ap=".carousel-indicators",wp="[data-bs-slide], [data-bs-slide-to]",Sp='[data-bs-ride="carousel"]',Tp={[sp]:hn,[lp]:be},Op={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Cp={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class qe extends bt{constructor(t,n){super(t,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=_.findOne(Ap,this._element),this._addEventListeners(),this._config.ride===xs&&this.cycle()}static get Default(){return Op}static get DefaultType(){return Cp}static get NAME(){return op}next(){this._slide(Ie)}nextWhenVisible(){!document.hidden&&xe(this._element)&&this.next()}prev(){this._slide(de)}pause(){this._isSliding&&fs(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){d.one(this._element,Gn,()=>this.cycle());return}this.cycle()}}to(t){const n=this._getItems();if(t>n.length-1||t<0)return;if(this._isSliding){d.one(this._element,Gn,()=>this.to(t));return}const o=this._getItemIndex(this._getActive());if(o===t)return;const i=t>o?Ie:de;this._slide(i,n[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&d.on(this._element,pp,t=>this._keydown(t)),this._config.pause==="hover"&&(d.on(this._element,cp,()=>this.pause()),d.on(this._element,up,()=>this._maybeEnableCycle())),this._config.touch&&En.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const o of _.find(yp,this._element))d.on(o,dp,i=>i.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(be)),rightCallback:()=>this._slide(this._directionToOrder(hn)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),ap+this._config.interval))}};this._swipeHelper=new En(this._element,n)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const n=Tp[t.key];n&&(t.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const n=_.findOne(ks,this._indicatorsElement);n.classList.remove(en),n.removeAttribute("aria-current");const o=_.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);o&&(o.classList.add(en),o.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const n=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(t,n=null){if(this._isSliding)return;const o=this._getActive(),i=t===Ie,s=n||Lo(this._getItems(),o,i,this._config.wrap);if(s===o)return;const l=this._getItemIndex(s),a=b=>d.trigger(this._element,b,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(o),to:l});if(a(rp).defaultPrevented||!o||!s)return;const u=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(l),this._activeElement=s;const c=i?bp:fp,E=i?gp:Ep;s.classList.add(E),Je(s),o.classList.add(c),s.classList.add(c);const A=()=>{s.classList.remove(c,E),s.classList.add(en),o.classList.remove(en,E,c),this._isSliding=!1,a(Gn)};this._queueCallback(A,o,this._isAnimated()),u&&this.cycle()}_isAnimated(){return this._element.classList.contains(vp)}_getActive(){return _.findOne(_p,this._element)}_getItems(){return _.find(Ds,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return pt()?t===be?de:Ie:t===be?Ie:de}_orderToDirection(t){return pt()?t===de?be:hn:t===de?hn:be}static jQueryInterface(t){return this.each(function(){const n=qe.getOrCreateInstance(this,t);if(typeof t=="number"){n.to(t);return}if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}d.on(document,hp,wp,function(e){const t=_.getElementFromSelector(this);if(!t||!t.classList.contains(xs))return;e.preventDefault();const n=qe.getOrCreateInstance(t),o=this.getAttribute("data-bs-slide-to");if(o){n.to(o),n._maybeEnableCycle();return}if(Nt.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});d.on(window,mp,()=>{const e=_.find(Sp);for(const t of e)qe.getOrCreateInstance(t)});dt(qe);const xp="collapse",kp="bs.collapse",Ye=`.${kp}`,Dp=".data-api",Np=`show${Ye}`,Lp=`shown${Ye}`,Mp=`hide${Ye}`,Fp=`hidden${Ye}`,$p=`click${Ye}${Dp}`,Un="show",Ee="collapse",nn="collapsing",Rp="collapsed",Ip=`:scope .${Ee} .${Ee}`,Bp="collapse-horizontal",Pp="width",Hp="height",Gp=".collapse.show, .collapse.collapsing",uo='[data-bs-toggle="collapse"]',Up={parent:null,toggle:!0},jp={parent:"(null|element)",toggle:"boolean"};class We extends bt{constructor(t,n){super(t,n),this._isTransitioning=!1,this._triggerArray=[];const o=_.find(uo);for(const i of o){const s=_.getSelectorFromElement(i),l=_.find(s).filter(a=>a===this._element);s!==null&&l.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Up}static get DefaultType(){return jp}static get NAME(){return xp}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(Gp).filter(a=>a!==this._element).map(a=>We.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||d.trigger(this._element,Np).defaultPrevented)return;for(const a of t)a.hide();const o=this._getDimension();this._element.classList.remove(Ee),this._element.classList.add(nn),this._element.style[o]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(nn),this._element.classList.add(Ee,Un),this._element.style[o]="",d.trigger(this._element,Lp)},l=`scroll${o[0].toUpperCase()+o.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[o]=`${this._element[l]}px`}hide(){if(this._isTransitioning||!this._isShown()||d.trigger(this._element,Mp).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,Je(this._element),this._element.classList.add(nn),this._element.classList.remove(Ee,Un);for(const i of this._triggerArray){const s=_.getElementFromSelector(i);s&&!this._isShown(s)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(nn),this._element.classList.add(Ee),d.trigger(this._element,Fp)};this._element.style[n]="",this._queueCallback(o,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Un)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=Ht(t.parent),t}_getDimension(){return this._element.classList.contains(Bp)?Pp:Hp}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(uo);for(const n of t){const o=_.getElementFromSelector(n);o&&this._addAriaAndCollapsedClass([n],this._isShown(o))}}_getFirstLevelChildren(t){const n=_.find(Ip,this._config.parent);return _.find(t,this._config.parent).filter(o=>!n.includes(o))}_addAriaAndCollapsedClass(t,n){if(t.length)for(const o of t)o.classList.toggle(Rp,!n),o.setAttribute("aria-expanded",n)}static jQueryInterface(t){const n={};return typeof t=="string"&&/show|hide/.test(t)&&(n.toggle=!1),this.each(function(){const o=We.getOrCreateInstance(this,n);if(typeof t=="string"){if(typeof o[t]>"u")throw new TypeError(`No method named "${t}"`);o[t]()}})}}d.on(document,$p,uo,function(e){(e.target.tagName==="A"||e.delegateTarget&&e.delegateTarget.tagName==="A")&&e.preventDefault();for(const t of _.getMultipleElementsFromSelector(this))We.getOrCreateInstance(t,{toggle:!1}).toggle()});dt(We);const ai="dropdown",Wp="bs.dropdown",oe=`.${Wp}`,Fo=".data-api",Vp="Escape",ri="Tab",Jp="ArrowUp",pi="ArrowDown",zp=2,qp=`hide${oe}`,Yp=`hidden${oe}`,Kp=`show${oe}`,Xp=`shown${oe}`,Ns=`click${oe}${Fo}`,Ls=`keydown${oe}${Fo}`,Qp=`keyup${oe}${Fo}`,ge="show",Zp="dropup",tc="dropend",ec="dropstart",nc="dropup-center",oc="dropdown-center",Qt='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',ic=`${Qt}.${ge}`,vn=".dropdown-menu",sc=".navbar",lc=".navbar-nav",ac=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",rc=pt()?"top-end":"top-start",pc=pt()?"top-start":"top-end",cc=pt()?"bottom-end":"bottom-start",uc=pt()?"bottom-start":"bottom-end",dc=pt()?"left-start":"right-start",mc=pt()?"right-start":"left-start",hc="top",vc="bottom",fc={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},bc={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class yt extends bt{constructor(t,n){super(t,n),this._popper=null,this._parent=this._element.parentNode,this._menu=_.next(this._element,vn)[0]||_.prev(this._element,vn)[0]||_.findOne(vn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return fc}static get DefaultType(){return bc}static get NAME(){return ai}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Gt(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!d.trigger(this._element,Kp,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(lc))for(const o of[].concat(...document.body.children))d.on(o,"mouseover",gn);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ge),this._element.classList.add(ge),d.trigger(this._element,Xp,t)}}hide(){if(Gt(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!d.trigger(this._element,qp,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))d.off(o,"mouseover",gn);this._popper&&this._popper.destroy(),this._menu.classList.remove(ge),this._element.classList.remove(ge),this._element.setAttribute("aria-expanded","false"),Nt.removeDataAttribute(this._menu,"popper"),d.trigger(this._element,Yp,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!Dt(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${ai.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof hs>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:Dt(this._config.reference)?t=Ht(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const n=this._getPopperConfig();this._popper=No(t,this._menu,n)}_isShown(){return this._menu.classList.contains(ge)}_getPlacement(){const t=this._parent;if(t.classList.contains(tc))return dc;if(t.classList.contains(ec))return mc;if(t.classList.contains(nc))return hc;if(t.classList.contains(oc))return vc;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(Zp)?n?pc:rc:n?uc:cc}_detectNavbar(){return this._element.closest(sc)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Nt.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...et(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:n}){const o=_.find(ac,this._menu).filter(i=>xe(i));o.length&&Lo(o,n,t===pi,!o.includes(n)).focus()}static jQueryInterface(t){return this.each(function(){const n=yt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}static clearMenus(t){if(t.button===zp||t.type==="keyup"&&t.key!==ri)return;const n=_.find(ic);for(const o of n){const i=yt.getInstance(o);if(!i||i._config.autoClose===!1)continue;const s=t.composedPath(),l=s.includes(i._menu);if(s.includes(i._element)||i._config.autoClose==="inside"&&!l||i._config.autoClose==="outside"&&l||i._menu.contains(t.target)&&(t.type==="keyup"&&t.key===ri||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:i._element};t.type==="click"&&(a.clickEvent=t),i._completeHide(a)}}static dataApiKeydownHandler(t){const n=/input|textarea/i.test(t.target.tagName),o=t.key===Vp,i=[Jp,pi].includes(t.key);if(!i&&!o||n&&!o)return;t.preventDefault();const s=this.matches(Qt)?this:_.prev(this,Qt)[0]||_.next(this,Qt)[0]||_.findOne(Qt,t.delegateTarget.parentNode),l=yt.getOrCreateInstance(s);if(i){t.stopPropagation(),l.show(),l._selectMenuItem(t);return}l._isShown()&&(t.stopPropagation(),l.hide(),s.focus())}}d.on(document,Ls,Qt,yt.dataApiKeydownHandler);d.on(document,Ls,vn,yt.dataApiKeydownHandler);d.on(document,Ns,yt.clearMenus);d.on(document,Qp,yt.clearMenus);d.on(document,Ns,Qt,function(e){e.preventDefault(),yt.getOrCreateInstance(this).toggle()});dt(yt);const Ms="backdrop",gc="fade",ci="show",ui=`mousedown.bs.${Ms}`,Ec={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},_c={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Fs extends ze{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Ec}static get DefaultType(){return _c}static get NAME(){return Ms}show(t){if(!this._config.isVisible){et(t);return}this._append();const n=this._getElement();this._config.isAnimated&&Je(n),n.classList.add(ci),this._emulateAnimation(()=>{et(t)})}hide(t){if(!this._config.isVisible){et(t);return}this._getElement().classList.remove(ci),this._emulateAnimation(()=>{this.dispose(),et(t)})}dispose(){this._isAppended&&(d.off(this._element,ui),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(gc),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=Ht(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),d.on(t,ui,()=>{et(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Es(t,this._getElement(),this._config.isAnimated)}}const yc="focustrap",Ac="bs.focustrap",_n=`.${Ac}`,wc=`focusin${_n}`,Sc=`keydown.tab${_n}`,Tc="Tab",Oc="forward",di="backward",Cc={autofocus:!0,trapElement:null},xc={autofocus:"boolean",trapElement:"element"};class $s extends ze{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Cc}static get DefaultType(){return xc}static get NAME(){return yc}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),d.off(document,_n),d.on(document,wc,t=>this._handleFocusin(t)),d.on(document,Sc,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,d.off(document,_n))}_handleFocusin(t){const{trapElement:n}=this._config;if(t.target===document||t.target===n||n.contains(t.target))return;const o=_.focusableChildren(n);o.length===0?n.focus():this._lastTabNavDirection===di?o[o.length-1].focus():o[0].focus()}_handleKeydown(t){t.key===Tc&&(this._lastTabNavDirection=t.shiftKey?di:Oc)}}const mi=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",hi=".sticky-top",on="padding-right",vi="margin-right";class mo{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,on,n=>n+t),this._setElementAttributes(mi,on,n=>n+t),this._setElementAttributes(hi,vi,n=>n-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,on),this._resetElementAttributes(mi,on),this._resetElementAttributes(hi,vi)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,n,o){const i=this.getWidth(),s=l=>{if(l!==this._element&&window.innerWidth>l.clientWidth+i)return;this._saveInitialAttribute(l,n);const a=window.getComputedStyle(l).getPropertyValue(n);l.style.setProperty(n,`${o(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,s)}_saveInitialAttribute(t,n){const o=t.style.getPropertyValue(n);o&&Nt.setDataAttribute(t,n,o)}_resetElementAttributes(t,n){const o=i=>{const s=Nt.getDataAttribute(i,n);if(s===null){i.style.removeProperty(n);return}Nt.removeDataAttribute(i,n),i.style.setProperty(n,s)};this._applyManipulationCallback(t,o)}_applyManipulationCallback(t,n){if(Dt(t)){n(t);return}for(const o of _.find(t,this._element))n(o)}}const kc="modal",Dc="bs.modal",ct=`.${Dc}`,Nc=".data-api",Lc="Escape",Mc=`hide${ct}`,Fc=`hidePrevented${ct}`,Rs=`hidden${ct}`,Is=`show${ct}`,$c=`shown${ct}`,Rc=`resize${ct}`,Ic=`click.dismiss${ct}`,Bc=`mousedown.dismiss${ct}`,Pc=`keydown.dismiss${ct}`,Hc=`click${ct}${Nc}`,fi="modal-open",Gc="fade",bi="show",jn="modal-static",Uc=".modal.show",jc=".modal-dialog",Wc=".modal-body",Vc='[data-bs-toggle="modal"]',Jc={backdrop:!0,focus:!0,keyboard:!0},zc={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Te extends bt{constructor(t,n){super(t,n),this._dialog=_.findOne(jc,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new mo,this._addEventListeners()}static get Default(){return Jc}static get DefaultType(){return zc}static get NAME(){return kc}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||d.trigger(this._element,Is,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(fi),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||d.trigger(this._element,Mc).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(bi),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){d.off(window,ct),d.off(this._dialog,ct),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Fs({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new $s({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=_.findOne(Wc,this._dialog);n&&(n.scrollTop=0),Je(this._element),this._element.classList.add(bi);const o=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,d.trigger(this._element,$c,{relatedTarget:t})};this._queueCallback(o,this._dialog,this._isAnimated())}_addEventListeners(){d.on(this._element,Pc,t=>{if(t.key===Lc){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),d.on(window,Rc,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),d.on(this._element,Bc,t=>{d.one(this._element,Ic,n=>{if(!(this._element!==t.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(fi),this._resetAdjustments(),this._scrollBar.reset(),d.trigger(this._element,Rs)})}_isAnimated(){return this._element.classList.contains(Gc)}_triggerBackdropTransition(){if(d.trigger(this._element,Fc).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,o=this._element.style.overflowY;o==="hidden"||this._element.classList.contains(jn)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(jn),this._queueCallback(()=>{this._element.classList.remove(jn),this._queueCallback(()=>{this._element.style.overflowY=o},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),o=n>0;if(o&&!t){const i=pt()?"paddingLeft":"paddingRight";this._element.style[i]=`${n}px`}if(!o&&t){const i=pt()?"paddingRight":"paddingLeft";this._element.style[i]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,n){return this.each(function(){const o=Te.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof o[t]>"u")throw new TypeError(`No method named "${t}"`);o[t](n)}})}}d.on(document,Hc,Vc,function(e){const t=_.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),d.one(t,Is,i=>{i.defaultPrevented||d.one(t,Rs,()=>{xe(this)&&this.focus()})});const n=_.findOne(Uc);n&&Te.getInstance(n).hide(),Te.getOrCreateInstance(t).toggle(this)});Tn(Te);dt(Te);const qc="offcanvas",Yc="bs.offcanvas",Mt=`.${Yc}`,Bs=".data-api",Kc=`load${Mt}${Bs}`,Xc="Escape",gi="show",Ei="showing",_i="hiding",Qc="offcanvas-backdrop",Ps=".offcanvas.show",Zc=`show${Mt}`,tu=`shown${Mt}`,eu=`hide${Mt}`,yi=`hidePrevented${Mt}`,Hs=`hidden${Mt}`,nu=`resize${Mt}`,ou=`click${Mt}${Bs}`,iu=`keydown.dismiss${Mt}`,su='[data-bs-toggle="offcanvas"]',lu={backdrop:!0,keyboard:!0,scroll:!1},au={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Ut extends bt{constructor(t,n){super(t,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return lu}static get DefaultType(){return au}static get NAME(){return qc}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||d.trigger(this._element,Zc,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new mo().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ei);const o=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(gi),this._element.classList.remove(Ei),d.trigger(this._element,tu,{relatedTarget:t})};this._queueCallback(o,this._element,!0)}hide(){if(!this._isShown||d.trigger(this._element,eu).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(_i),this._backdrop.hide();const n=()=>{this._element.classList.remove(gi,_i),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new mo().reset(),d.trigger(this._element,Hs)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){d.trigger(this._element,yi);return}this.hide()},n=!!this._config.backdrop;return new Fs({className:Qc,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?t:null})}_initializeFocusTrap(){return new $s({trapElement:this._element})}_addEventListeners(){d.on(this._element,iu,t=>{if(t.key===Xc){if(this._config.keyboard){this.hide();return}d.trigger(this._element,yi)}})}static jQueryInterface(t){return this.each(function(){const n=Ut.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}d.on(document,ou,su,function(e){const t=_.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),Gt(this))return;d.one(t,Hs,()=>{xe(this)&&this.focus()});const n=_.findOne(Ps);n&&n!==t&&Ut.getInstance(n).hide(),Ut.getOrCreateInstance(t).toggle(this)});d.on(window,Kc,()=>{for(const e of _.find(Ps))Ut.getOrCreateInstance(e).show()});d.on(window,nu,()=>{for(const e of _.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(e).position!=="fixed"&&Ut.getOrCreateInstance(e).hide()});Tn(Ut);dt(Ut);const ru=/^aria-[\w-]*$/i,Gs={"*":["class","dir","id","lang","role",ru],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},pu=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),cu=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,uu=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?pu.has(n)?!!cu.test(e.nodeValue):!0:t.filter(o=>o instanceof RegExp).some(o=>o.test(n))};function du(e,t,n){if(!e.length)return e;if(n&&typeof n=="function")return n(e);const i=new window.DOMParser().parseFromString(e,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const l of s){const a=l.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){l.remove();continue}const p=[].concat(...l.attributes),u=[].concat(t["*"]||[],t[a]||[]);for(const c of p)uu(c,u)||l.removeAttribute(c.nodeName)}return i.body.innerHTML}const mu="TemplateFactory",hu={allowList:Gs,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},vu={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},fu={entry:"(string|element|function|null)",selector:"(string|element)"};class bu extends ze{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return hu}static get DefaultType(){return vu}static get NAME(){return mu}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[i,s]of Object.entries(this._config.content))this._setContent(t,s,i);const n=t.children[0],o=this._resolvePossibleFunction(this._config.extraClass);return o&&n.classList.add(...o.split(" ")),n}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[n,o]of Object.entries(t))super._typeCheckConfig({selector:n,entry:o},fu)}_setContent(t,n,o){const i=_.findOne(o,t);if(i){if(n=this._resolvePossibleFunction(n),!n){i.remove();return}if(Dt(n)){this._putElementInTemplate(Ht(n),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(n);return}i.textContent=n}}_maybeSanitize(t){return this._config.sanitize?du(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return et(t,[this])}_putElementInTemplate(t,n){if(this._config.html){n.innerHTML="",n.append(t);return}n.textContent=t.textContent}}const gu="tooltip",Eu=new Set(["sanitize","allowList","sanitizeFn"]),Wn="fade",_u="modal",sn="show",yu=".tooltip-inner",Ai=`.${_u}`,wi="hide.bs.modal",Be="hover",Vn="focus",Au="click",wu="manual",Su="hide",Tu="hidden",Ou="show",Cu="shown",xu="inserted",ku="click",Du="focusin",Nu="focusout",Lu="mouseenter",Mu="mouseleave",Fu={AUTO:"auto",TOP:"top",RIGHT:pt()?"left":"right",BOTTOM:"bottom",LEFT:pt()?"right":"left"},$u={allowList:Gs,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Ru={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class De extends bt{constructor(t,n){if(typeof hs>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return $u}static get DefaultType(){return Ru}static get NAME(){return gu}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),d.off(this._element.closest(Ai),wi,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=d.trigger(this._element,this.constructor.eventName(Ou)),o=(bs(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!o)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),d.trigger(this._element,this.constructor.eventName(xu))),this._popper=this._createPopper(i),i.classList.add(sn),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))d.on(a,"mouseover",gn);const l=()=>{d.trigger(this._element,this.constructor.eventName(Cu)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(l,this.tip,this._isAnimated())}hide(){if(!this._isShown()||d.trigger(this._element,this.constructor.eventName(Su)).defaultPrevented)return;if(this._getTipElement().classList.remove(sn),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))d.off(i,"mouseover",gn);this._activeTrigger[Au]=!1,this._activeTrigger[Vn]=!1,this._activeTrigger[Be]=!1,this._isHovered=null;const o=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),d.trigger(this._element,this.constructor.eventName(Tu)))};this._queueCallback(o,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const n=this._getTemplateFactory(t).toHtml();if(!n)return null;n.classList.remove(Wn,sn),n.classList.add(`bs-${this.constructor.NAME}-auto`);const o=Ar(this.constructor.NAME).toString();return n.setAttribute("id",o),this._isAnimated()&&n.classList.add(Wn),n}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new bu({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[yu]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Wn)}_isShown(){return this.tip&&this.tip.classList.contains(sn)}_createPopper(t){const n=et(this._config.placement,[this,t,this._element]),o=Fu[n.toUpperCase()];return No(this._element,t,this._getPopperConfig(o))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_resolvePossibleFunction(t){return et(t,[this._element])}_getPopperConfig(t){const n={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:o=>{this._getTipElement().setAttribute("data-popper-placement",o.state.placement)}}]};return{...n,...et(this._config.popperConfig,[n])}}_setListeners(){const t=this._config.trigger.split(" ");for(const n of t)if(n==="click")d.on(this._element,this.constructor.eventName(ku),this._config.selector,o=>{this._initializeOnDelegatedTarget(o).toggle()});else if(n!==wu){const o=n===Be?this.constructor.eventName(Lu):this.constructor.eventName(Du),i=n===Be?this.constructor.eventName(Mu):this.constructor.eventName(Nu);d.on(this._element,o,this._config.selector,s=>{const l=this._initializeOnDelegatedTarget(s);l._activeTrigger[s.type==="focusin"?Vn:Be]=!0,l._enter()}),d.on(this._element,i,this._config.selector,s=>{const l=this._initializeOnDelegatedTarget(s);l._activeTrigger[s.type==="focusout"?Vn:Be]=l._element.contains(s.relatedTarget),l._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},d.on(this._element.closest(Ai),wi,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,n){clearTimeout(this._timeout),this._timeout=setTimeout(t,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const n=Nt.getDataAttributes(this._element);for(const o of Object.keys(n))Eu.has(o)&&delete n[o];return t={...n,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:Ht(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[n,o]of Object.entries(this._config))this.constructor.Default[n]!==o&&(t[n]=o);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const n=De.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}dt(De);const Iu="popover",Bu=".popover-header",Pu=".popover-body",Hu={...De.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Gu={...De.DefaultType,content:"(null|string|element|function)"};class $o extends De{static get Default(){return Hu}static get DefaultType(){return Gu}static get NAME(){return Iu}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Bu]:this._getTitle(),[Pu]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const n=$o.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}dt($o);const Uu="scrollspy",ju="bs.scrollspy",Ro=`.${ju}`,Wu=".data-api",Vu=`activate${Ro}`,Si=`click${Ro}`,Ju=`load${Ro}${Wu}`,zu="dropdown-item",me="active",qu='[data-bs-spy="scroll"]',Jn="[href]",Yu=".nav, .list-group",Ti=".nav-link",Ku=".nav-item",Xu=".list-group-item",Qu=`${Ti}, ${Ku} > ${Ti}, ${Xu}`,Zu=".dropdown",td=".dropdown-toggle",ed={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},nd={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class xn extends bt{constructor(t,n){super(t,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return ed}static get DefaultType(){return nd}static get NAME(){return Uu}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=Ht(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(n=>Number.parseFloat(n))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(d.off(this._config.target,Si),d.on(this._config.target,Si,Jn,t=>{const n=this._observableSections.get(t.target.hash);if(n){t.preventDefault();const o=this._rootElement||window,i=n.offsetTop-this._element.offsetTop;if(o.scrollTo){o.scrollTo({top:i,behavior:"smooth"});return}o.scrollTop=i}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),t)}_observerCallback(t){const n=l=>this._targetLinks.get(`#${l.target.id}`),o=l=>{this._previousScrollData.visibleEntryTop=l.target.offsetTop,this._process(n(l))},i=(this._rootElement||document.documentElement).scrollTop,s=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const l of t){if(!l.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(l));continue}const a=l.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&a){if(o(l),!i)return;continue}!s&&!a&&o(l)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=_.find(Jn,this._config.target);for(const n of t){if(!n.hash||Gt(n))continue;const o=_.findOne(decodeURI(n.hash),this._element);xe(o)&&(this._targetLinks.set(decodeURI(n.hash),n),this._observableSections.set(n.hash,o))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(me),this._activateParents(t),d.trigger(this._element,Vu,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(zu)){_.findOne(td,t.closest(Zu)).classList.add(me);return}for(const n of _.parents(t,Yu))for(const o of _.prev(n,Qu))o.classList.add(me)}_clearActiveClass(t){t.classList.remove(me);const n=_.find(`${Jn}.${me}`,t);for(const o of n)o.classList.remove(me)}static jQueryInterface(t){return this.each(function(){const n=xn.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}d.on(window,Ju,()=>{for(const e of _.find(qu))xn.getOrCreateInstance(e)});dt(xn);const od="tab",id="bs.tab",ie=`.${id}`,sd=`hide${ie}`,ld=`hidden${ie}`,ad=`show${ie}`,rd=`shown${ie}`,pd=`click${ie}`,cd=`keydown${ie}`,ud=`load${ie}`,dd="ArrowLeft",Oi="ArrowRight",md="ArrowUp",Ci="ArrowDown",zn="Home",xi="End",Zt="active",ki="fade",qn="show",hd="dropdown",Us=".dropdown-toggle",vd=".dropdown-menu",Yn=`:not(${Us})`,fd='.list-group, .nav, [role="tablist"]',bd=".nav-item, .list-group-item",gd=`.nav-link${Yn}, .list-group-item${Yn}, [role="tab"]${Yn}`,js='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Kn=`${gd}, ${js}`,Ed=`.${Zt}[data-bs-toggle="tab"], .${Zt}[data-bs-toggle="pill"], .${Zt}[data-bs-toggle="list"]`;class Oe extends bt{constructor(t){super(t),this._parent=this._element.closest(fd),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),d.on(this._element,cd,n=>this._keydown(n)))}static get NAME(){return od}show(){const t=this._element;if(this._elemIsActive(t))return;const n=this._getActiveElem(),o=n?d.trigger(n,sd,{relatedTarget:t}):null;d.trigger(t,ad,{relatedTarget:n}).defaultPrevented||o&&o.defaultPrevented||(this._deactivate(n,t),this._activate(t,n))}_activate(t,n){if(!t)return;t.classList.add(Zt),this._activate(_.getElementFromSelector(t));const o=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(qn);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),d.trigger(t,rd,{relatedTarget:n})};this._queueCallback(o,t,t.classList.contains(ki))}_deactivate(t,n){if(!t)return;t.classList.remove(Zt),t.blur(),this._deactivate(_.getElementFromSelector(t));const o=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(qn);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),d.trigger(t,ld,{relatedTarget:n})};this._queueCallback(o,t,t.classList.contains(ki))}_keydown(t){if(![dd,Oi,md,Ci,zn,xi].includes(t.key))return;t.stopPropagation(),t.preventDefault();const n=this._getChildren().filter(i=>!Gt(i));let o;if([zn,xi].includes(t.key))o=n[t.key===zn?0:n.length-1];else{const i=[Oi,Ci].includes(t.key);o=Lo(n,t.target,i,!0)}o&&(o.focus({preventScroll:!0}),Oe.getOrCreateInstance(o).show())}_getChildren(){return _.find(Kn,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,n){this._setAttributeIfNotExists(t,"role","tablist");for(const o of n)this._setInitialAttributesOnChild(o)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const n=this._elemIsActive(t),o=this._getOuterElement(t);t.setAttribute("aria-selected",n),o!==t&&this._setAttributeIfNotExists(o,"role","presentation"),n||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const n=_.getElementFromSelector(t);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,n){const o=this._getOuterElement(t);if(!o.classList.contains(hd))return;const i=(s,l)=>{const a=_.findOne(s,o);a&&a.classList.toggle(l,n)};i(Us,Zt),i(vd,qn),o.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(t,n,o){t.hasAttribute(n)||t.setAttribute(n,o)}_elemIsActive(t){return t.classList.contains(Zt)}_getInnerElement(t){return t.matches(Kn)?t:_.findOne(Kn,t)}_getOuterElement(t){return t.closest(bd)||t}static jQueryInterface(t){return this.each(function(){const n=Oe.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}d.on(document,pd,js,function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),!Gt(this)&&Oe.getOrCreateInstance(this).show()});d.on(window,ud,()=>{for(const e of _.find(Ed))Oe.getOrCreateInstance(e)});dt(Oe);const _d="toast",yd="bs.toast",Vt=`.${yd}`,Ad=`mouseover${Vt}`,wd=`mouseout${Vt}`,Sd=`focusin${Vt}`,Td=`focusout${Vt}`,Od=`hide${Vt}`,Cd=`hidden${Vt}`,xd=`show${Vt}`,kd=`shown${Vt}`,Dd="fade",Di="hide",ln="show",an="showing",Nd={animation:"boolean",autohide:"boolean",delay:"number"},Ld={animation:!0,autohide:!0,delay:5e3};class kn extends bt{constructor(t,n){super(t,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Ld}static get DefaultType(){return Nd}static get NAME(){return _d}show(){if(d.trigger(this._element,xd).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Dd);const n=()=>{this._element.classList.remove(an),d.trigger(this._element,kd),this._maybeScheduleHide()};this._element.classList.remove(Di),Je(this._element),this._element.classList.add(ln,an),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||d.trigger(this._element,Od).defaultPrevented)return;const n=()=>{this._element.classList.add(Di),this._element.classList.remove(an,ln),d.trigger(this._element,Cd)};this._element.classList.add(an),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(ln),super.dispose()}isShown(){return this._element.classList.contains(ln)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,n){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const o=t.relatedTarget;this._element===o||this._element.contains(o)||this._maybeScheduleHide()}_setListeners(){d.on(this._element,Ad,t=>this._onInteraction(t,!0)),d.on(this._element,wd,t=>this._onInteraction(t,!1)),d.on(this._element,Sd,t=>this._onInteraction(t,!0)),d.on(this._element,Td,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const n=kn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}Tn(kn);dt(kn);/*! @license DOMPurify 3.0.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.6/LICENSE */const{entries:Ws,setPrototypeOf:Ni,isFrozen:Md,getPrototypeOf:Fd,getOwnPropertyDescriptor:Vs}=Object;let{freeze:X,seal:ft,create:Js}=Object,{apply:ho,construct:vo}=typeof Reflect<"u"&&Reflect;X||(X=function(t){return t});ft||(ft=function(t){return t});ho||(ho=function(t,n,o){return t.apply(n,o)});vo||(vo=function(t,n){return new t(...n)});const rn=ut(Array.prototype.forEach),Li=ut(Array.prototype.pop),Pe=ut(Array.prototype.push),fn=ut(String.prototype.toLowerCase),Xn=ut(String.prototype.toString),$d=ut(String.prototype.match),He=ut(String.prototype.replace),Rd=ut(String.prototype.indexOf),Id=ut(String.prototype.trim),nt=ut(RegExp.prototype.test),Ge=Bd(TypeError);function ut(e){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return ho(e,t,o)}}function Bd(e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return vo(e,n)}}function T(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:fn;Ni&&Ni(e,null);let o=t.length;for(;o--;){let i=t[o];if(typeof i=="string"){const s=n(i);s!==i&&(Md(t)||(t[o]=s),i=s)}e[i]=!0}return e}function he(e){const t=Js(null);for(const[n,o]of Ws(e))Vs(e,n)!==void 0&&(t[n]=o);return t}function pn(e,t){for(;e!==null;){const o=Vs(e,t);if(o){if(o.get)return ut(o.get);if(typeof o.value=="function")return ut(o.value)}e=Fd(e)}function n(o){return console.warn("fallback value for",o),null}return n}const Mi=X(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Qn=X(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Zn=X(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Pd=X(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),to=X(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Hd=X(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Fi=X(["#text"]),$i=X(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),eo=X(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ri=X(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),cn=X(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Gd=ft(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Ud=ft(/<%[\w\W]*|[\w\W]*%>/gm),jd=ft(/\${[\w\W]*}/gm),Wd=ft(/^data-[\-\w.\u00B7-\uFFFF]/),Vd=ft(/^aria-[\-\w]+$/),zs=ft(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Jd=ft(/^(?:\w+script|data):/i),zd=ft(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),qs=ft(/^html$/i);var Ii=Object.freeze({__proto__:null,MUSTACHE_EXPR:Gd,ERB_EXPR:Ud,TMPLIT_EXPR:jd,DATA_ATTR:Wd,ARIA_ATTR:Vd,IS_ALLOWED_URI:zs,IS_SCRIPT_OR_DATA:Jd,ATTR_WHITESPACE:zd,DOCTYPE_NAME:qs});const qd=function(){return typeof window>"u"?null:window},Yd=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let o=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(o=n.getAttribute(i));const s="dompurify"+(o?"#"+o:"");try{return t.createPolicy(s,{createHTML(l){return l},createScriptURL(l){return l}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}};function Ys(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:qd();const t=g=>Ys(g);if(t.version="3.0.6",t.removed=[],!e||!e.document||e.document.nodeType!==9)return t.isSupported=!1,t;let{document:n}=e;const o=n,i=o.currentScript,{DocumentFragment:s,HTMLTemplateElement:l,Node:a,Element:p,NodeFilter:u,NamedNodeMap:c=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:E,DOMParser:A,trustedTypes:b}=e,x=p.prototype,w=pn(x,"cloneNode"),C=pn(x,"nextSibling"),D=pn(x,"childNodes"),M=pn(x,"parentNode");if(typeof l=="function"){const g=n.createElement("template");g.content&&g.content.ownerDocument&&(n=g.content.ownerDocument)}let O,S="";const{implementation:k,createNodeIterator:N,createDocumentFragment:I,getElementsByTagName:U}=n,{importNode:P}=o;let L={};t.isSupported=typeof Ws=="function"&&typeof M=="function"&&k&&k.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:H,ERB_EXPR:z,TMPLIT_EXPR:j,DATA_ATTR:St,ARIA_ATTR:Tt,IS_SCRIPT_OR_DATA:q,ATTR_WHITESPACE:Q}=Ii;let{IS_ALLOWED_URI:Jt}=Ii,F=null;const zt=T({},[...Mi,...Qn,...Zn,...to,...Fi]);let B=null;const Ft=T({},[...$i,...eo,...Ri,...cn]);let $=Object.seal(Js(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),lt=null,at=null,$t=!0,Rt=!0,gt=!1,se=!0,It=!1,mt=!1,Ne=!1,le=!1,Bt=!1,ae=!1,qt=!1,Le=!0,Ke=!1;const Dn="user-content-";let ht=!0,Et=!1,Ot={},Ct=null;const re=T({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Me=null;const Fe=T({},["audio","video","img","source","image","track"]);let pe=null;const $e=T({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Xe="http://www.w3.org/1998/Math/MathML",Qe="http://www.w3.org/2000/svg",xt="http://www.w3.org/1999/xhtml";let ce=xt,Nn=!1,Ln=null;const hl=T({},[Xe,Qe,xt],Xn);let Yt=null;const vl=["application/xhtml+xml","text/html"],fl="text/html";let W=null,ue=null;const bl=n.createElement("form"),Io=function(r){return r instanceof RegExp||r instanceof Function},Mn=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(ue&&ue===r)){if((!r||typeof r!="object")&&(r={}),r=he(r),Yt=vl.indexOf(r.PARSER_MEDIA_TYPE)===-1?Yt=fl:Yt=r.PARSER_MEDIA_TYPE,W=Yt==="application/xhtml+xml"?Xn:fn,F="ALLOWED_TAGS"in r?T({},r.ALLOWED_TAGS,W):zt,B="ALLOWED_ATTR"in r?T({},r.ALLOWED_ATTR,W):Ft,Ln="ALLOWED_NAMESPACES"in r?T({},r.ALLOWED_NAMESPACES,Xn):hl,pe="ADD_URI_SAFE_ATTR"in r?T(he($e),r.ADD_URI_SAFE_ATTR,W):$e,Me="ADD_DATA_URI_TAGS"in r?T(he(Fe),r.ADD_DATA_URI_TAGS,W):Fe,Ct="FORBID_CONTENTS"in r?T({},r.FORBID_CONTENTS,W):re,lt="FORBID_TAGS"in r?T({},r.FORBID_TAGS,W):{},at="FORBID_ATTR"in r?T({},r.FORBID_ATTR,W):{},Ot="USE_PROFILES"in r?r.USE_PROFILES:!1,$t=r.ALLOW_ARIA_ATTR!==!1,Rt=r.ALLOW_DATA_ATTR!==!1,gt=r.ALLOW_UNKNOWN_PROTOCOLS||!1,se=r.ALLOW_SELF_CLOSE_IN_ATTR!==!1,It=r.SAFE_FOR_TEMPLATES||!1,mt=r.WHOLE_DOCUMENT||!1,Bt=r.RETURN_DOM||!1,ae=r.RETURN_DOM_FRAGMENT||!1,qt=r.RETURN_TRUSTED_TYPE||!1,le=r.FORCE_BODY||!1,Le=r.SANITIZE_DOM!==!1,Ke=r.SANITIZE_NAMED_PROPS||!1,ht=r.KEEP_CONTENT!==!1,Et=r.IN_PLACE||!1,Jt=r.ALLOWED_URI_REGEXP||zs,ce=r.NAMESPACE||xt,$=r.CUSTOM_ELEMENT_HANDLING||{},r.CUSTOM_ELEMENT_HANDLING&&Io(r.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&($.tagNameCheck=r.CUSTOM_ELEMENT_HANDLING.tagNameCheck),r.CUSTOM_ELEMENT_HANDLING&&Io(r.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&($.attributeNameCheck=r.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),r.CUSTOM_ELEMENT_HANDLING&&typeof r.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&($.allowCustomizedBuiltInElements=r.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),It&&(Rt=!1),ae&&(Bt=!0),Ot&&(F=T({},[...Fi]),B=[],Ot.html===!0&&(T(F,Mi),T(B,$i)),Ot.svg===!0&&(T(F,Qn),T(B,eo),T(B,cn)),Ot.svgFilters===!0&&(T(F,Zn),T(B,eo),T(B,cn)),Ot.mathMl===!0&&(T(F,to),T(B,Ri),T(B,cn))),r.ADD_TAGS&&(F===zt&&(F=he(F)),T(F,r.ADD_TAGS,W)),r.ADD_ATTR&&(B===Ft&&(B=he(B)),T(B,r.ADD_ATTR,W)),r.ADD_URI_SAFE_ATTR&&T(pe,r.ADD_URI_SAFE_ATTR,W),r.FORBID_CONTENTS&&(Ct===re&&(Ct=he(Ct)),T(Ct,r.FORBID_CONTENTS,W)),ht&&(F["#text"]=!0),mt&&T(F,["html","head","body"]),F.table&&(T(F,["tbody"]),delete lt.tbody),r.TRUSTED_TYPES_POLICY){if(typeof r.TRUSTED_TYPES_POLICY.createHTML!="function")throw Ge('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof r.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Ge('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');O=r.TRUSTED_TYPES_POLICY,S=O.createHTML("")}else O===void 0&&(O=Yd(b,i)),O!==null&&typeof S=="string"&&(S=O.createHTML(""));X&&X(r),ue=r}},Bo=T({},["mi","mo","mn","ms","mtext"]),Po=T({},["foreignobject","desc","title","annotation-xml"]),gl=T({},["title","style","font","a","script"]),Ze=T({},Qn);T(Ze,Zn),T(Ze,Pd);const Fn=T({},to);T(Fn,Hd);const El=function(r){let v=M(r);(!v||!v.tagName)&&(v={namespaceURI:ce,tagName:"template"});const f=fn(r.tagName),R=fn(v.tagName);return Ln[r.namespaceURI]?r.namespaceURI===Qe?v.namespaceURI===xt?f==="svg":v.namespaceURI===Xe?f==="svg"&&(R==="annotation-xml"||Bo[R]):!!Ze[f]:r.namespaceURI===Xe?v.namespaceURI===xt?f==="math":v.namespaceURI===Qe?f==="math"&&Po[R]:!!Fn[f]:r.namespaceURI===xt?v.namespaceURI===Qe&&!Po[R]||v.namespaceURI===Xe&&!Bo[R]?!1:!Fn[f]&&(gl[f]||!Ze[f]):!!(Yt==="application/xhtml+xml"&&Ln[r.namespaceURI]):!1},Kt=function(r){Pe(t.removed,{element:r});try{r.parentNode.removeChild(r)}catch{r.remove()}},$n=function(r,v){try{Pe(t.removed,{attribute:v.getAttributeNode(r),from:v})}catch{Pe(t.removed,{attribute:null,from:v})}if(v.removeAttribute(r),r==="is"&&!B[r])if(Bt||ae)try{Kt(v)}catch{}else try{v.setAttribute(r,"")}catch{}},Ho=function(r){let v=null,f=null;if(le)r="<remove></remove>"+r;else{const J=$d(r,/^[\r\n\t ]+/);f=J&&J[0]}Yt==="application/xhtml+xml"&&ce===xt&&(r='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+r+"</body></html>");const R=O?O.createHTML(r):r;if(ce===xt)try{v=new A().parseFromString(R,Yt)}catch{}if(!v||!v.documentElement){v=k.createDocument(ce,"template",null);try{v.documentElement.innerHTML=Nn?S:R}catch{}}const V=v.body||v.documentElement;return r&&f&&V.insertBefore(n.createTextNode(f),V.childNodes[0]||null),ce===xt?U.call(v,mt?"html":"body")[0]:mt?v.documentElement:V},Go=function(r){return N.call(r.ownerDocument||r,r,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null)},_l=function(r){return r instanceof E&&(typeof r.nodeName!="string"||typeof r.textContent!="string"||typeof r.removeChild!="function"||!(r.attributes instanceof c)||typeof r.removeAttribute!="function"||typeof r.setAttribute!="function"||typeof r.namespaceURI!="string"||typeof r.insertBefore!="function"||typeof r.hasChildNodes!="function")},Uo=function(r){return typeof a=="function"&&r instanceof a},kt=function(r,v,f){L[r]&&rn(L[r],R=>{R.call(t,v,f,ue)})},jo=function(r){let v=null;if(kt("beforeSanitizeElements",r,null),_l(r))return Kt(r),!0;const f=W(r.nodeName);if(kt("uponSanitizeElement",r,{tagName:f,allowedTags:F}),r.hasChildNodes()&&!Uo(r.firstElementChild)&&nt(/<[/\w]/g,r.innerHTML)&&nt(/<[/\w]/g,r.textContent))return Kt(r),!0;if(!F[f]||lt[f]){if(!lt[f]&&Vo(f)&&($.tagNameCheck instanceof RegExp&&nt($.tagNameCheck,f)||$.tagNameCheck instanceof Function&&$.tagNameCheck(f)))return!1;if(ht&&!Ct[f]){const R=M(r)||r.parentNode,V=D(r)||r.childNodes;if(V&&R){const J=V.length;for(let Z=J-1;Z>=0;--Z)R.insertBefore(w(V[Z],!0),C(r))}}return Kt(r),!0}return r instanceof p&&!El(r)||(f==="noscript"||f==="noembed"||f==="noframes")&&nt(/<\/no(script|embed|frames)/i,r.innerHTML)?(Kt(r),!0):(It&&r.nodeType===3&&(v=r.textContent,rn([H,z,j],R=>{v=He(v,R," ")}),r.textContent!==v&&(Pe(t.removed,{element:r.cloneNode()}),r.textContent=v)),kt("afterSanitizeElements",r,null),!1)},Wo=function(r,v,f){if(Le&&(v==="id"||v==="name")&&(f in n||f in bl))return!1;if(!(Rt&&!at[v]&&nt(St,v))){if(!($t&&nt(Tt,v))){if(!B[v]||at[v]){if(!(Vo(r)&&($.tagNameCheck instanceof RegExp&&nt($.tagNameCheck,r)||$.tagNameCheck instanceof Function&&$.tagNameCheck(r))&&($.attributeNameCheck instanceof RegExp&&nt($.attributeNameCheck,v)||$.attributeNameCheck instanceof Function&&$.attributeNameCheck(v))||v==="is"&&$.allowCustomizedBuiltInElements&&($.tagNameCheck instanceof RegExp&&nt($.tagNameCheck,f)||$.tagNameCheck instanceof Function&&$.tagNameCheck(f))))return!1}else if(!pe[v]){if(!nt(Jt,He(f,Q,""))){if(!((v==="src"||v==="xlink:href"||v==="href")&&r!=="script"&&Rd(f,"data:")===0&&Me[r])){if(!(gt&&!nt(q,He(f,Q,"")))){if(f)return!1}}}}}}return!0},Vo=function(r){return r.indexOf("-")>0},Jo=function(r){kt("beforeSanitizeAttributes",r,null);const{attributes:v}=r;if(!v)return;const f={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:B};let R=v.length;for(;R--;){const V=v[R],{name:J,namespaceURI:Z,value:Xt}=V,Re=W(J);let tt=J==="value"?Xt:Id(Xt);if(f.attrName=Re,f.attrValue=tt,f.keepAttr=!0,f.forceKeepAttr=void 0,kt("uponSanitizeAttribute",r,f),tt=f.attrValue,f.forceKeepAttr||($n(J,r),!f.keepAttr))continue;if(!se&&nt(/\/>/i,tt)){$n(J,r);continue}It&&rn([H,z,j],qo=>{tt=He(tt,qo," ")});const zo=W(r.nodeName);if(Wo(zo,Re,tt)){if(Ke&&(Re==="id"||Re==="name")&&($n(J,r),tt=Dn+tt),O&&typeof b=="object"&&typeof b.getAttributeType=="function"&&!Z)switch(b.getAttributeType(zo,Re)){case"TrustedHTML":{tt=O.createHTML(tt);break}case"TrustedScriptURL":{tt=O.createScriptURL(tt);break}}try{Z?r.setAttributeNS(Z,J,tt):r.setAttribute(J,tt),Li(t.removed)}catch{}}}kt("afterSanitizeAttributes",r,null)},yl=function g(r){let v=null;const f=Go(r);for(kt("beforeSanitizeShadowDOM",r,null);v=f.nextNode();)kt("uponSanitizeShadowNode",v,null),!jo(v)&&(v.content instanceof s&&g(v.content),Jo(v));kt("afterSanitizeShadowDOM",r,null)};return t.sanitize=function(g){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=null,f=null,R=null,V=null;if(Nn=!g,Nn&&(g="<!-->"),typeof g!="string"&&!Uo(g))if(typeof g.toString=="function"){if(g=g.toString(),typeof g!="string")throw Ge("dirty is not a string, aborting")}else throw Ge("toString is not a function");if(!t.isSupported)return g;if(Ne||Mn(r),t.removed=[],typeof g=="string"&&(Et=!1),Et){if(g.nodeName){const Xt=W(g.nodeName);if(!F[Xt]||lt[Xt])throw Ge("root node is forbidden and cannot be sanitized in-place")}}else if(g instanceof a)v=Ho("<!---->"),f=v.ownerDocument.importNode(g,!0),f.nodeType===1&&f.nodeName==="BODY"||f.nodeName==="HTML"?v=f:v.appendChild(f);else{if(!Bt&&!It&&!mt&&g.indexOf("<")===-1)return O&&qt?O.createHTML(g):g;if(v=Ho(g),!v)return Bt?null:qt?S:""}v&&le&&Kt(v.firstChild);const J=Go(Et?g:v);for(;R=J.nextNode();)jo(R)||(R.content instanceof s&&yl(R.content),Jo(R));if(Et)return g;if(Bt){if(ae)for(V=I.call(v.ownerDocument);v.firstChild;)V.appendChild(v.firstChild);else V=v;return(B.shadowroot||B.shadowrootmode)&&(V=P.call(o,V,!0)),V}let Z=mt?v.outerHTML:v.innerHTML;return mt&&F["!doctype"]&&v.ownerDocument&&v.ownerDocument.doctype&&v.ownerDocument.doctype.name&&nt(qs,v.ownerDocument.doctype.name)&&(Z="<!DOCTYPE "+v.ownerDocument.doctype.name+`>
`+Z),It&&rn([H,z,j],Xt=>{Z=He(Z,Xt," ")}),O&&qt?O.createHTML(Z):Z},t.setConfig=function(){let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Mn(g),Ne=!0},t.clearConfig=function(){ue=null,Ne=!1},t.isValidAttribute=function(g,r,v){ue||Mn({});const f=W(g),R=W(r);return Wo(f,R,v)},t.addHook=function(g,r){typeof r=="function"&&(L[g]=L[g]||[],Pe(L[g],r))},t.removeHook=function(g){if(L[g])return Li(L[g])},t.removeHooks=function(g){L[g]&&(L[g]=[])},t.removeAllHooks=function(){L={}},t}var At=Ys(),Kd=Object.defineProperty,Xd=(e,t,n)=>t in e?Kd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t,n)=>(Xd(e,typeof t!="symbol"?t+"":t,n),n),Qd=class{constructor(e){y(this,"_distinctEvent"),y(this,"_boundedEvents",[]),this._distinctEvent=(e==null?void 0:e.distinctEvent)??!1}get boundedEvents(){return this._boundedEvents}dispose(){this.unbindAll(),this._boundedEvents=[]}bind(e,t,n,o){let i=Array.isArray(t)?t:[t];if(e!=null&&e.forEach)e==null||e.forEach(s=>{for(let l of i)(!this._distinctEvent||this._distinctEvent&&!this.hasBinding(s,l))&&(s.addEventListener(l,n,o),this._boundedEvents.push({element:s,eventName:l,listener:n}))});else for(let s of i)(!this._distinctEvent||this._distinctEvent&&!this.hasBinding(e,s))&&(e.addEventListener(s,n,o),this._boundedEvents.push({element:e,eventName:s,listener:n}))}hasBinding(e,t){return this._boundedEvents.some(n=>n.element===e&&(!t||n.eventName===t))}unbind(e,t,n){var o;if(e){let i=Array.isArray(e)?e:[e],s=Array.isArray(t)?t||"":[t||""];for(let l of i){n||(n=this._boundedEvents.find(a=>{if(a.element===l&&(!t||a.eventName===t))return a.listener}));for(let a of s)(o=l==null?void 0:l.removeEventListener)==null||o.call(l,a,n)}}}unbindAll(){for(;this._boundedEvents.length>0;){let e=this._boundedEvents.pop(),{element:t,eventName:n,listener:o}=e;this.unbind(t,n,o)}}},Ks=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};Ks.locales={"en-US":{formatSelectAll(){return"[Select all]"},formatAllSelected(){return"All selected"},formatCountSelected(e,t){return`${e} of ${t} selected`},formatNoMatchesFound(){return"No matches found"},formatOkButton(){return"OK"}}};var Xs=Ks.locales,Zd=50,tm=4,Qs={name:"",placeholder:"",classes:"",classPrefix:"",data:void 0,locale:void 0,selectAll:!0,single:void 0,singleRadio:!1,multiple:!1,hideOptgroupCheckboxes:!1,multipleWidth:80,width:void 0,dropWidth:void 0,maxHeight:250,maxHeightUnit:"px",position:"bottom",displayValues:!1,displayTitle:!1,displayDelimiter:", ",minimumCountSelected:3,ellipsis:!1,isOpen:!1,keepOpen:!1,openOnHover:!1,container:null,filter:!1,filterGroup:!1,filterPlaceholder:"",filterAcceptOnEnter:!1,filterByDataLength:void 0,customFilter(e){let{text:t,label:n,search:o}=e;return(n||t||"").includes(o)},showClear:!1,autoAdjustDropHeight:!1,autoAdjustDropPosition:!1,autoAdjustDropWidthByTextSize:!1,adjustedHeightPadding:10,useSelectOptionLabel:!1,useSelectOptionLabelToHtml:!1,cssStyler:()=>null,styler:()=>!1,textTemplate:e=>e.innerHTML.trim(),labelTemplate:e=>e.label,onOpen:()=>!1,onClose:()=>!1,onCheckAll:()=>!1,onUncheckAll:()=>!1,onFocus:()=>!1,onBlur:()=>!1,onOptgroupClick:()=>!1,onBeforeClick:()=>!0,onClick:()=>!1,onFilter:()=>!1,onClear:()=>!1,onAfterCreate:()=>!1,onDestroy:()=>!1,onAfterDestroy:()=>!1,onDestroyed:()=>!1},em=["init","getOptions","refreshOptions","getSelects","setSelects","enable","disable","open","close","check","uncheck","checkAll","uncheckAll","checkInvert","focus","blur","refresh","destroy"];Object.assign(Qs,Xs["en-US"]);var nm={BLOCK_ROWS:Zd,CLUSTER_BLOCKS:tm,DEFAULTS:Qs,METHODS:em},vt=nm;function om(e,t,n=!1){let o=Object.keys(e),i=Object.keys(t);if(n&&o.length!==i.length)return!1;for(let s of o)if(i.includes(s)&&e[s]!==t[s])return!1;return!0}function fo(e){let t=()=>{let i={};for(let s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=fo(e[s]));return i},n=()=>e.map(i=>fo(i)),o=Object.prototype.toString.call(e).slice(8,-1).toLowerCase();return o==="object"?t():o==="array"?n():e}function no(e){return e!=null&&e!==""}function im(e,t){return typeof e=="object"?Object.fromEntries(t?Object.entries(e).filter(([n,o])=>!no(o)&&!t.includes(n)||no(o)):Object.entries(e).filter(([n,o])=>no(o))):e}function sm(e){let t=0;return e.forEach((n,o)=>{n.type==="optgroup"?(n._key=`group_${o}`,n.visible=typeof n.visible>"u"?!0:n.visible,n.children.forEach((i,s)=>{i&&(i.visible=typeof(i==null?void 0:i.visible)>"u"?!0:i.visible,i.divider||(i._key=`option_${o}_${s}`,t+=1))})):(n.visible=typeof n.visible>"u"?!0:n.visible,n.divider||(n._key=`option_${o}`,t+=1))}),t}function un(e,t,n){if(Array.isArray(e))for(let o of e){if(o[t]===n||o[t]===`${+o[t]}`&&+o[t]===n)return o;if(o.type==="optgroup"){for(let i of o.children)if(i&&(i[t]===n||i[t]===`${+i[t]}`&&+i[t]===n))return i}}}function lm(e){return e.replace(/(\b)(on[a-z]+)(\s*)=([^>]*)|javascript:([^>]*)[^>]*|(<\s*)(\/*)script([<>]*).*(<\s*)(\/*)script(>*)|(&lt;|&#60;)(\/*)(script|script defer)(.*)(&#62;|&gt;|&gt;">)/gi,"")}function oo(e){return Object.keys(e).forEach(t=>e[t]===void 0?delete e[t]:""),e}function am(e){return e.replace(/[\W_]+(.)/g,(t,n)=>n.toUpperCase())}function ve(e){return typeof e!="string"?e:e.normalize?e.normalize("NFD").replace(/[\u0300-\u036F]/g,""):[{base:"A",letters:/[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},{base:"AA",letters:/[\uA732]/g},{base:"AE",letters:/[\u00C6\u01FC\u01E2]/g},{base:"AO",letters:/[\uA734]/g},{base:"AU",letters:/[\uA736]/g},{base:"AV",letters:/[\uA738\uA73A]/g},{base:"AY",letters:/[\uA73C]/g},{base:"B",letters:/[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},{base:"C",letters:/[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},{base:"D",letters:/[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},{base:"DZ",letters:/[\u01F1\u01C4]/g},{base:"Dz",letters:/[\u01F2\u01C5]/g},{base:"E",letters:/[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},{base:"F",letters:/[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},{base:"G",letters:/[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},{base:"H",letters:/[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},{base:"I",letters:/[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},{base:"J",letters:/[\u004A\u24BF\uFF2A\u0134\u0248]/g},{base:"K",letters:/[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},{base:"L",letters:/[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},{base:"LJ",letters:/[\u01C7]/g},{base:"Lj",letters:/[\u01C8]/g},{base:"M",letters:/[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},{base:"N",letters:/[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},{base:"NJ",letters:/[\u01CA]/g},{base:"Nj",letters:/[\u01CB]/g},{base:"O",letters:/[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},{base:"OI",letters:/[\u01A2]/g},{base:"OO",letters:/[\uA74E]/g},{base:"OU",letters:/[\u0222]/g},{base:"P",letters:/[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},{base:"Q",letters:/[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},{base:"R",letters:/[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},{base:"S",letters:/[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},{base:"T",letters:/[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},{base:"TZ",letters:/[\uA728]/g},{base:"U",letters:/[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},{base:"V",letters:/[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},{base:"VY",letters:/[\uA760]/g},{base:"W",letters:/[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},{base:"X",letters:/[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},{base:"Y",letters:/[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},{base:"Z",letters:/[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},{base:"a",letters:/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},{base:"aa",letters:/[\uA733]/g},{base:"ae",letters:/[\u00E6\u01FD\u01E3]/g},{base:"ao",letters:/[\uA735]/g},{base:"au",letters:/[\uA737]/g},{base:"av",letters:/[\uA739\uA73B]/g},{base:"ay",letters:/[\uA73D]/g},{base:"b",letters:/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},{base:"c",letters:/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},{base:"d",letters:/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},{base:"dz",letters:/[\u01F3\u01C6]/g},{base:"e",letters:/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},{base:"f",letters:/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},{base:"g",letters:/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},{base:"h",letters:/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},{base:"hv",letters:/[\u0195]/g},{base:"i",letters:/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},{base:"j",letters:/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},{base:"k",letters:/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},{base:"l",letters:/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},{base:"lj",letters:/[\u01C9]/g},{base:"m",letters:/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},{base:"n",letters:/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},{base:"nj",letters:/[\u01CC]/g},{base:"o",letters:/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},{base:"oi",letters:/[\u01A3]/g},{base:"ou",letters:/[\u0223]/g},{base:"oo",letters:/[\uA74F]/g},{base:"p",letters:/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},{base:"q",letters:/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},{base:"r",letters:/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},{base:"s",letters:/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},{base:"t",letters:/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},{base:"tz",letters:/[\uA729]/g},{base:"u",letters:/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},{base:"v",letters:/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},{base:"vy",letters:/[\uA761]/g},{base:"w",letters:/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},{base:"x",letters:/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},{base:"y",letters:/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},{base:"z",letters:/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g}].reduce((t,{letters:n,base:o})=>t.replace(n,o),e)}function Bi(e){let t={};if(e){let n=e.replace(/\s/g,"").split(";");for(let o of n){let[i,s]=o.trim().split(":");i&&(t[am(i)]=s.trim())}console.warn("[multiple-select-vanilla] Please note that `styler` is deprecated, please migrate to `cssStyler` when possible.")}return t}function io(e){let t=0,n=0,o=0,i=0,s=window.innerHeight??0,l=window.innerWidth??0,a=pm(),p=a.top,u=a.left,c=go(e);if(c){let E=c.top??0,A=c.left??0;n=E-p,t=s-(E-p),o=A-u,i=l-(A-u)}return{top:n,bottom:t,left:o,right:i}}function G(e,t,n){let o=document.createElement(e);return t&&Object.keys(t).forEach(i=>{let s=t[i];typeof s=="object"?Object.assign(o[i],s):o[i]=t[i]}),n!=null&&n.appendChild&&n.appendChild(o),o}function Zs(e,t,n){var s;let o="";(s=e.props)!=null&&s.innerHTML&&(o=e.props.innerHTML,delete e.props.innerHTML);let i=G(e.tagName,im(e.props,["class","title","style"]),t);if(o&&(i.innerHTML=o),e.attrs)for(let l of Object.keys(e.attrs))i.setAttribute(l,e.attrs[l]);if(e.children)for(let l of e.children)Zs(l,i);return t==null||t.appendChild(i),i}function bo(e){return e.hasOwnProperty("tagName")?Zs(e):document.createElement("li")}function yn(e){for(;e!=null&&e.firstChild;)e.lastChild&&e.removeChild(e.lastChild);return e}function go(e){var l;if(!e)return;let t=(l=e==null?void 0:e.getBoundingClientRect)==null?void 0:l.call(e),n=0,o=0,i=0,s=0;return(t==null?void 0:t.top)!==void 0&&t.left!==void 0&&(n=t.top+window.pageYOffset,o=t.left+window.pageXOffset,s=t.right,i=t.bottom),{top:n,left:o,bottom:i,right:s}}function dn(e,t,n){let o=parseFloat(e.style[n]);if(!o||isNaN(o)){switch(t){case"outer":o=e[n==="width"?"offsetWidth":"offsetHeight"];break;case"scroll":o=e[n==="width"?"scrollWidth":"scrollHeight"];break;case"inner":default:o=e[n==="width"?"clientWidth":"clientHeight"];break}o=e.getBoundingClientRect()[n]}if(!o||isNaN(o)){let i=e.style.display,s=e.style.position;e.style.display="block",e.style.position="absolute";let l=window.getComputedStyle(e)[n];o=parseFloat(l),isNaN(o)&&(o=0),e.style.display=i,e.style.position=s}return o||0}function Pi(e,t){let n=null,o=e==null?void 0:e.parentElement;for(;o;){let[i,s,l,a]=t.match(/^([a-z]*)([#.]{1})([a-z\-]+)$/i)||[];if(l&&a)for(let p of a.replace(l,"").split(" "))o.classList.contains(p)&&(s?(o==null?void 0:o.tagName.toLowerCase())===s&&(n=o):n=o);o=o.parentElement}return n}function rm(e,t){var n;(n=e.parentNode)==null||n.insertBefore(t,e.nextSibling)}function Hi(e,t){e!=null&&e.style&&(e.style.display=e.style.display==="none"&&t!==!1||t===!0?"block":"none")}function pm(){return{left:window.pageXOffset||document.documentElement.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||0}}var cm=class{constructor(e){var n;y(this,"cache"),y(this,"clusterRows"),y(this,"dataStart"),y(this,"dataEnd"),y(this,"rows"),y(this,"scrollEl"),y(this,"blockHeight"),y(this,"clusterHeight"),y(this,"contentEl"),y(this,"parentEl"),y(this,"itemHeight"),y(this,"lastCluster"),y(this,"scrollTop"),y(this,"destroy"),y(this,"callback"),y(this,"sanitizer"),this.rows=e.rows,this.scrollEl=e.scrollEl,this.contentEl=e.contentEl,this.parentEl=(n=e.contentEl)==null?void 0:n.parentElement,this.callback=e.callback,this.cache={},this.scrollTop=this.scrollEl.scrollTop,this.initDOM(this.rows),this.scrollEl.scrollTop=this.scrollTop,this.lastCluster=0;let t=()=>{this.lastCluster!==(this.lastCluster=this.getNum())&&(this.initDOM(this.rows),this.callback())};this.scrollEl.addEventListener("scroll",t,!1),this.destroy=()=>{yn(this.contentEl),this.scrollEl.removeEventListener("scroll",t,!1)}}initDOM(e){if(typeof this.clusterHeight>"u"){this.cache.scrollTop=this.scrollEl.scrollTop;let s=bo(e[0]);this.contentEl.appendChild(s),this.contentEl.appendChild(s),this.contentEl.appendChild(s),this.cache.data=[e[0]],this.getRowsHeight()}let t=this.initData(e,this.getNum()),n=this.checkChanges("data",t.rows),o=this.checkChanges("top",t.topOffset),i=this.checkChanges("bottom",t.bottomOffset);yn(this.contentEl),n&&o?(t.topOffset&&this.contentEl.appendChild(this.getExtra("top",t.topOffset)),t.rows.forEach(s=>this.contentEl.appendChild(bo(s))),t.bottomOffset&&this.contentEl.appendChild(this.getExtra("bottom",t.bottomOffset))):i&&this.contentEl.lastChild&&(this.contentEl.lastChild.style.height=`${t.bottomOffset}px`)}getRowsHeight(){var e;if(typeof this.itemHeight>"u"){let t=((e=this.parentEl)==null?void 0:e.style.display)||"";this.parentEl&&(t===""||t==="none")&&(this.parentEl.style.display="block");let n=this.contentEl.children,o=n[Math.floor(n.length/2)];this.itemHeight=o.offsetHeight,this.parentEl&&(this.parentEl.style.display=t)}this.blockHeight=this.itemHeight*vt.BLOCK_ROWS,this.clusterRows=vt.BLOCK_ROWS*vt.CLUSTER_BLOCKS,this.clusterHeight=this.blockHeight*vt.CLUSTER_BLOCKS}getNum(){this.scrollTop=this.scrollEl.scrollTop;let e=(this.clusterHeight||0)-(this.blockHeight||0);return e&&Math.floor(this.scrollTop/e)||0}initData(e,t){if(e.length<vt.BLOCK_ROWS)return{topOffset:0,bottomOffset:0,rowsAbove:0,rows:e};let n=Math.max((this.clusterRows-vt.BLOCK_ROWS)*t,0),o=n+this.clusterRows,i=Math.max(n*this.itemHeight,0),s=Math.max((e.length-o)*this.itemHeight,0),l=[],a=n;i<1&&a++;for(let p=n;p<o;p++)e[p]&&l.push(e[p]);return this.dataStart=n,this.dataEnd=o,{topOffset:i,bottomOffset:s,rowsAbove:a,rows:l}}checkChanges(e,t){let n=t!==this.cache[e];return this.cache[e]=t,n}getExtra(e,t){let n=document.createElement("li");return n.className=`virtual-scroll-${e}`,t&&(n.style.height=`${t}px`),n}},um=class{constructor(e,t){this.elm=e,y(this,"_bindEventService"),y(this,"allSelected",!1),y(this,"fromHtml",!1),y(this,"choiceElm"),y(this,"closeElm"),y(this,"closeSearchElm"),y(this,"filterText",""),y(this,"updateData",[]),y(this,"data",[]),y(this,"dataTotal"),y(this,"dropElm"),y(this,"okButtonElm"),y(this,"filterParentElm"),y(this,"ulElm"),y(this,"parentElm"),y(this,"labelElm"),y(this,"selectAllParentElm"),y(this,"selectAllElm"),y(this,"searchInputElm"),y(this,"selectGroupElms"),y(this,"selectItemElms"),y(this,"disableItemElms"),y(this,"noResultsElm"),y(this,"options"),y(this,"selectAllName",""),y(this,"selectGroupName",""),y(this,"selectItemName",""),y(this,"tabIndex"),y(this,"updateDataStart"),y(this,"updateDataEnd"),y(this,"virtualScroll"),y(this,"locales",{}),this.options=Object.assign({},vt.DEFAULTS,this.elm.dataset,t),this._bindEventService=new Qd({distinctEvent:!0})}get isRenderAsHtml(){return this.options.renderOptionLabelAsHtml||this.options.useSelectOptionLabelToHtml}init(){this.initLocale(),this.initContainer(),this.initData(),this.initSelected(!0),this.initFilter(),this.initDrop(),this.initView(),this.options.onAfterCreate()}destroy(e=!0){var t,n,o,i,s;this.elm&&this.parentElm&&(this.options.onDestroy({hardDestroy:e}),e&&this.options.onHardDestroy(),this.elm.parentElement&&this.parentElm.parentElement&&this.elm.parentElement.insertBefore(this.elm,this.parentElm.parentElement.firstChild),this.elm.classList.remove("ms-offscreen"),this._bindEventService.unbindAll(),this.tabIndex&&(this.elm.tabIndex=+this.tabIndex),(t=this.virtualScroll)==null||t.destroy(),(n=this.dropElm)==null||n.remove(),(o=this.parentElm.parentNode)==null||o.removeChild(this.parentElm),this.fromHtml&&(delete this.options.data,this.fromHtml=!1),this.options.onAfterDestroy({hardDestroy:e}),e&&((s=(i=this.options).onAfterHardDestroy)==null||s.call(i),Object.keys(this.options).forEach(l=>delete this[l])))}initLocale(){if(this.options.locale){let e=window.multipleSelect.locales,t=this.options.locale.split(/-|_/);if(t[0]=t[0].toLowerCase(),t[1]&&(t[1]=t[1].toUpperCase()),e[this.options.locale])Object.assign(this.options,e[this.options.locale]);else if(e[t.join("-")])Object.assign(this.options,e[t.join("-")]);else if(e[t[0]])Object.assign(this.options,e[t[0]]);else throw new Error(`[multiple-select-vanilla] invalid locales "${this.options.locale}", make sure to import it before using it`)}}initContainer(){var i;let e=this.elm.getAttribute("name")||this.options.name||"";this.options.classes&&this.elm.classList.add(this.options.classes),this.options.classPrefix&&(this.elm.classList.add(this.options.classPrefix),this.options.size&&this.elm.classList.add(`${this.options.classPrefix}-${this.options.size}`)),this.elm.style.display="none",this.labelElm=this.elm.closest("label"),!this.labelElm&&this.elm.id&&(this.labelElm=document.createElement("label"),this.labelElm.htmlFor=this.elm.id),(i=this.labelElm)!=null&&i.querySelector("input")&&(this.labelElm=null),typeof this.options.single>"u"&&(this.options.single=!this.elm.multiple),this.parentElm=G("div",{className:`ms-parent ${this.elm.className||""} ${this.options.classes}`,dataset:{test:"sel"}});let t=this.elm.getAttribute("title")||"";t&&(this.parentElm.title=t),this.options.placeholder=this.options.placeholder||this.elm.getAttribute("placeholder")||"",this.tabIndex=this.elm.getAttribute("tabindex");let n="";this.tabIndex!==null&&(this.elm.tabIndex=-1,n=this.tabIndex&&`tabindex="${this.tabIndex}"`),this.choiceElm=G("button",{className:"ms-choice",type:"button"},this.parentElm),isNaN(n)&&(this.choiceElm.tabIndex=+n),this.choiceElm.appendChild(G("span",{className:"ms-placeholder",textContent:this.options.placeholder})),this.options.showClear&&this.choiceElm.appendChild(G("div",{className:"icon-close"})),this.choiceElm.appendChild(G("div",{className:"icon-caret"})),this.dropElm=G("div",{className:`ms-drop ${this.options.position}`},this.parentElm),e&&(this.dropElm.dataset.name=e);let o=this.elm.getAttribute("data-test")||this.options.dataTest;o&&(this.parentElm.dataset.test=o,this.dropElm.dataset.test=o),this.closeElm=this.choiceElm.querySelector(".icon-close"),this.options.dropWidth&&(this.dropElm.style.width=typeof this.options.dropWidth=="string"?this.options.dropWidth:`${this.options.dropWidth}px`),rm(this.elm,this.parentElm),this.elm.disabled&&this.choiceElm.classList.add("disabled"),this.selectAllName=`selectAll${e}`,this.selectGroupName=`selectGroup${e}`,this.selectItemName=`selectItem${e}`,this.options.keepOpen||(this._bindEventService.unbind(document.body,"click"),this._bindEventService.bind(document.body,"click",s=>{s.target===this.choiceElm||Pi(s.target,".ms-choice")===this.choiceElm||(s.target===this.dropElm||Pi(s.target,".ms-drop")!==this.dropElm&&s.target!==this.elm)&&this.options.isOpen&&this.close()}))}initData(){let e=[];if(this.options.data){if(Array.isArray(this.options.data))this.data=this.options.data.map(t=>typeof t=="string"||typeof t=="number"?{text:t,value:t}:t);else if(typeof this.options.data=="object"){for(let[t,n]of Object.entries(this.options.data))e.push({value:t,text:`${n}`});this.data=e}}else this.elm.childNodes.forEach(t=>{let n=this.initRow(t);n&&e.push(n)}),this.options.data=e,this.data=e,this.fromHtml=!0;this.dataTotal=sm(this.data||[])}initRow(e,t){var o,i;let n={};return((o=e.tagName)==null?void 0:o.toLowerCase())==="option"?(n.type="option",n.text=this.options.textTemplate(e),n.value=e.value,n.visible=!0,n.selected=!!e.selected,n.disabled=t||e.disabled,n.classes=e.getAttribute("class")||"",n.title=e.getAttribute("title")||"",e.dataset.value&&(n._value=e.dataset.value),Object.keys(e.dataset).length&&(n._data=e.dataset,n._data.divider&&(n.divider=n._data.divider)),n):((i=e.tagName)==null?void 0:i.toLowerCase())==="optgroup"?(n.type="optgroup",n.label=this.options.labelTemplate(e),n.visible=!0,n.selected=!!e.selected,n.disabled=e.disabled,n.children=[],Object.keys(e.dataset).length&&(n._data=e.dataset),e.childNodes.forEach(s=>{n.children.push(this.initRow(s,n.disabled))}),n):null}initDrop(){this.initList(),this.update(!0),this.options.isOpen&&this.open(10),this.options.openOnHover&&this.parentElm&&(this._bindEventService.bind(this.parentElm,"mouseover",()=>this.open(null)),this._bindEventService.bind(this.parentElm,"mouseout",()=>this.close()))}initFilter(){if(this.filterText="",this.options.filter||!this.options.filterByDataLength)return;let e=0;for(let t of this.data||[])t.type==="optgroup"?e+=t.children.length:e+=1;this.options.filter=e>this.options.filterByDataLength}initList(){if(this.options.filter&&(this.filterParentElm=G("div",{className:"ms-search"},this.dropElm),this.filterParentElm.appendChild(G("input",{autocomplete:"off",autocapitalize:"off",spellcheck:!1,type:"text",placeholder:this.options.filterPlaceholder||"🔎︎"})),this.options.showSearchClear&&this.filterParentElm.appendChild(G("span",{className:"icon-close"}))),this.options.selectAll&&!this.options.single){let e=this.elm.getAttribute("name")||this.options.name||"";this.selectAllParentElm=G("div",{className:"ms-select-all"});let t=document.createElement("label");G("input",{type:"checkbox",ariaChecked:String(this.allSelected),checked:this.allSelected,dataset:{name:`selectAll${e}`}},t),t.appendChild(G("span",{textContent:this.formatSelectAll()})),this.selectAllParentElm.appendChild(t),this.dropElm.appendChild(this.selectAllParentElm)}this.ulElm=document.createElement("ul"),this.dropElm.appendChild(this.ulElm),this.options.showOkButton&&!this.options.single&&(this.okButtonElm=G("button",{className:"ms-ok-button",type:"button",textContent:this.formatOkButton()},this.dropElm)),this.initListItems()}initListItems(){var n;let e=0,t=this.getListRows();if(this.options.selectAll&&!this.options.single&&(e=-1),t.length>vt.BLOCK_ROWS*vt.CLUSTER_BLOCKS){(n=this.virtualScroll)==null||n.destroy();let o=this.dropElm.style.display!=="none";o||(this.dropElm.style.left="-10000",this.dropElm.style.display="block");let i=()=>{this.virtualScroll&&(this.updateDataStart=this.virtualScroll.dataStart+e,this.updateDataEnd=this.virtualScroll.dataEnd+e,this.updateDataStart<0&&(this.updateDataStart=0),this.updateDataEnd>this.getDataLength()&&(this.updateDataEnd=this.getDataLength()))};this.ulElm&&(this.virtualScroll=new cm({rows:t,scrollEl:this.ulElm,contentEl:this.ulElm,sanitizer:this.options.sanitizer,callback:()=>{i(),this.events()}})),i(),o||(this.dropElm.style.left="0",this.dropElm.style.display="none")}else this.ulElm&&(yn(this.ulElm),t.forEach(o=>this.ulElm.appendChild(bo(o)))),this.updateDataStart=0,this.updateDataEnd=this.updateData.length,this.virtualScroll=null;return this.events(),t}getListRows(){var t;let e=[];return this.updateData=[],(t=this.data)==null||t.forEach(n=>e.push(...this.initListItem(n))),e.push({tagName:"li",props:{className:"ms-no-results",textContent:this.formatNoMatchesFound()}}),e}initListItem(e,t=0){let n=(e==null?void 0:e.title)||"",o=this.options.multiple?"multiple":"",i=this.options.single?"radio":"checkbox",s="";if(!(e!=null&&e.visible))return[];if(this.updateData.push(e),this.options.single&&!this.options.singleRadio&&(s="hide-radio "),e.selected&&(s+="selected "),e.type==="optgroup"){let b=[],x=this.options.hideOptgroupCheckboxes||this.options.single?{tagName:"span",props:{dataset:{name:this.selectGroupName,key:e._key}}}:{tagName:"input",props:{type:"checkbox",dataset:{name:this.selectGroupName,key:e._key},ariaChecked:String(e.selected||!1),checked:!!e.selected,disabled:e.disabled}};!s.includes("hide-radio")&&(this.options.hideOptgroupCheckboxes||this.options.single)&&(s+="hide-radio ");let w={tagName:"span",props:{}};this.applyAsTextOrHtmlWhenEnabled(w.props,e.label);let C={tagName:"li",props:{className:`group ${s}`.trim()},children:[{tagName:"label",props:{className:`optgroup${this.options.single||e.disabled?" disabled":""}`},children:[x,w]}]},D=this.options.cssStyler(e),M=String(this.options.styler(e)||"");return M&&(C.props.style=Bi(M)),D&&(C.props.style=D),b.push(C),e.children.forEach(O=>b.push(...this.initListItem(O,1))),b}if(s+=e.classes||"",t&&this.options.single&&(s+=`option-level-${t} `),e.divider)return[{tagName:"li",props:{className:"option-divider"}}];let l=o||s?(o+s).trim():"",a=`${e.disabled?"disabled":""}`,p={tagName:"span",props:{}};this.applyAsTextOrHtmlWhenEnabled(p.props,e.text);let u={tagName:"input",props:{type:i,value:encodeURI(e.value),dataset:{key:e._key,name:this.selectItemName},ariaChecked:String(e.selected||!1),checked:!!e.selected,disabled:!!e.disabled}};e.selected&&(u.attrs={checked:"checked"});let c={tagName:"li",props:{className:l,title:n},children:[{tagName:"label",props:{className:a},children:[u,p]}]},E=this.options.cssStyler(e),A=String(this.options.styler(e)||"");return A&&(c.props.style=Bi(A)),E&&(c.props.style=E),[c]}initSelected(e=!1){var n,o;let t=0;for(let i of this.data||[])if(i.type==="optgroup"){let s=i.children.filter(l=>l&&l.selected&&!l.disabled&&l.visible).length;i.children.length&&(i.selected=!this.options.single&&s&&s===i.children.filter(l=>l&&!l.disabled&&l.visible&&!l.divider).length),t+=s}else t+=i.selected&&!i.disabled&&i.visible?1:0;this.allSelected=((n=this.data)==null?void 0:n.filter(i=>i.selected&&!i.disabled&&i.visible).length)===((o=this.data)==null?void 0:o.filter(i=>!i.disabled&&i.visible&&!i.divider).length),e||(this.allSelected?this.options.onCheckAll():t===0&&this.options.onUncheckAll())}initView(){let e;window.getComputedStyle?(e=window.getComputedStyle(this.elm).width,e==="auto"&&(e=dn(this.dropElm,"outer","width")+20)):e=dn(this.elm,"outer","width")+20,this.parentElm.style.width=`${this.options.width||e}px`,this.elm.classList.add("ms-offscreen")}events(){var t;this._bindEventService.unbind(this.okButtonElm),this._bindEventService.unbind(this.searchInputElm),this._bindEventService.unbind(this.selectAllElm),this._bindEventService.unbind(this.selectGroupElms),this._bindEventService.unbind(this.selectItemElms),this._bindEventService.unbind(this.disableItemElms),this._bindEventService.unbind(this.noResultsElm),this.closeSearchElm=(t=this.filterParentElm)==null?void 0:t.querySelector(".icon-close"),this.searchInputElm=this.dropElm.querySelector(".ms-search input"),this.selectAllElm=this.dropElm.querySelector(`input[data-name="${this.selectAllName}"]`),this.selectGroupElms=this.dropElm.querySelectorAll(`input[data-name="${this.selectGroupName}"],span[data-name="${this.selectGroupName}"]`),this.selectItemElms=this.dropElm.querySelectorAll(`input[data-name="${this.selectItemName}"]:enabled`),this.disableItemElms=this.dropElm.querySelectorAll(`input[data-name="${this.selectItemName}"]:disabled`),this.noResultsElm=this.dropElm.querySelector(".ms-no-results");let e=n=>{n.preventDefault(),!n.target.classList.contains("icon-close")&&this[this.options.isOpen?"close":"open"]()};this.labelElm&&this._bindEventService.bind(this.labelElm,"click",n=>{n.target.nodeName.toLowerCase()==="label"&&(e(n),(!this.options.filter||!this.options.isOpen)&&this.focus(),n.stopPropagation())}),this._bindEventService.bind(this.choiceElm,"click",e),this.options.onFocus&&this._bindEventService.bind(this.choiceElm,"focus",this.options.onFocus),this.options.onBlur&&this._bindEventService.bind(this.choiceElm,"blur",this.options.onBlur),this._bindEventService.bind(this.parentElm,"keydown",n=>{n.code==="Escape"&&!this.options.keepOpen&&(this.close(),this.choiceElm.focus())}),this.closeElm&&this._bindEventService.bind(this.closeElm,"click",n=>{n.preventDefault(),this._checkAll(!1,!0),this.initSelected(!1),this.updateSelected(),this.update(),this.options.onClear()}),this.closeSearchElm&&this._bindEventService.bind(this.closeSearchElm,"click",n=>{n.preventDefault(),this.searchInputElm&&(this.searchInputElm.value="",this.searchInputElm.focus()),this.filter()}),this.searchInputElm&&(this._bindEventService.bind(this.searchInputElm,"keydown",n=>{n.code==="Tab"&&n.shiftKey&&this.close()}),this._bindEventService.bind(this.searchInputElm,"keyup",n=>{var o,i,s;if(this.options.filterAcceptOnEnter&&["Enter","Space"].includes(n.code)&&((o=this.searchInputElm)!=null&&o.value)){if(this.options.single){let l=[];(i=this.selectItemElms)==null||i.forEach(a=>{var p;((p=a.closest("li"))==null?void 0:p.style.display)!=="none"&&l.push(a)}),l.length&&l[0].hasAttribute("data-name")&&this.setSelects([l[0].value])}else(s=this.selectAllElm)==null||s.click();this.close(),this.focus();return}this.filter()})),this.selectAllElm&&(this._bindEventService.unbind(this.selectAllElm,"click"),this._bindEventService.bind(this.selectAllElm,"click",n=>{var o;this._checkAll((o=n.currentTarget)==null?void 0:o.checked)})),this.okButtonElm&&(this._bindEventService.unbind(this.okButtonElm,"click"),this._bindEventService.bind(this.okButtonElm,"click",n=>{e(n),n.stopPropagation()})),this._bindEventService.bind(this.selectGroupElms,"click",n=>{let o=n.currentTarget,i=o.checked,s=un(this.data,"_key",o.dataset.key);this._checkGroup(s,i),this.options.onOptgroupClick(oo({label:s.label,selected:s.selected,data:s._data,children:s.children.map(l=>{if(l)return oo({text:l.text,value:l.value,selected:l.selected,disabled:l.disabled,data:l._data})})}))}),this._bindEventService.bind(this.selectItemElms,"click",n=>{let o=n.currentTarget,i=o.checked,s=un(this.data,"_key",o.dataset.key),l=()=>{this.options.single&&this.options.isOpen&&!this.options.keepOpen&&this.close()};if(this.options.onBeforeClick(s)===!1){l();return}this._check(s,i),this.options.onClick(oo({text:s.text,value:s.value,selected:s.selected,data:s._data})),l()})}open(e=0){if(e!==null&&e>=0){let t;clearTimeout(t),t=setTimeout(()=>this.openDrop(),e)}else this.openDrop()}openDrop(){var i,s,l,a,p;if((i=this.choiceElm)!=null&&i.classList.contains("disabled"))return;if(this.options.isOpen=!0,this.parentElm.classList.add("ms-parent-open"),(l=(s=this.choiceElm)==null?void 0:s.querySelector("div"))==null||l.classList.add("open"),this.dropElm.style.display="block",(a=this.selectAllElm)!=null&&a.parentElement&&(this.selectAllElm.parentElement.style.display="block"),this.noResultsElm&&(this.noResultsElm.style.display="none"),this.getDataLength()||((p=this.selectAllElm)!=null&&p.parentElement&&(this.selectAllElm.parentElement.style.display="none"),this.noResultsElm&&(this.noResultsElm.style.display="block")),this.options.container){let u=go(this.dropElm),c;this.options.container instanceof Node?c=this.options.container:typeof this.options.container=="string"&&(c=this.options.container==="body"?document.body:document.querySelector(this.options.container)),c.appendChild(this.dropElm),this.dropElm.style.top=`${(u==null?void 0:u.top)??0}px`,this.dropElm.style.left=`${(u==null?void 0:u.left)??0}px`,this.dropElm.style.minWidth="auto",this.dropElm.style.width=`${dn(this.parentElm,"outer","width")}px`}let e=this.options.minHeight,t=this.options.maxHeight;this.options.maxHeightUnit==="row"&&(t=dn(this.dropElm.querySelector("ul>li"),"outer","height")*this.options.maxHeight);let n=this.dropElm.querySelector("ul");n&&(e&&(n.style.minHeight=`${e}px`),n.style.maxHeight=`${t}px`),this.dropElm.querySelectorAll(".multiple").forEach(u=>u.style.width=`${this.options.multipleWidth}px`),this.getDataLength()&&this.options.filter&&(this.searchInputElm&&(this.searchInputElm.value="",this.searchInputElm.focus()),this.filter(!0)),this.options.autoAdjustDropWidthByTextSize&&this.adjustDropWidthByText();let o=this.options.position;if(this.options.autoAdjustDropHeight){if(this.options.autoAdjustDropPosition){let{bottom:u,top:c}=io(this.dropElm),E=this.dropElm.getBoundingClientRect().height;o=u<E&&c>u?"top":"bottom"}this.adjustDropHeight(o)}this.options.autoAdjustDropPosition&&this.adjustDropPosition(!0),this.options.onOpen()}close(){var e,t;this.options.isOpen=!1,this.parentElm.classList.remove("ms-parent-open"),(t=(e=this.choiceElm)==null?void 0:e.querySelector("div"))==null||t.classList.remove("open"),this.dropElm.style.display="none",this.options.container&&(this.parentElm.appendChild(this.dropElm),this.dropElm.style.top="auto",this.dropElm.style.left="auto"),this.options.onClose()}applyAsTextOrHtmlWhenEnabled(e,t){e||(e={}),this.isRenderAsHtml?e.innerHTML=typeof this.options.sanitizer=="function"?this.options.sanitizer(t):t:e.textContent=t}update(e=!1){var p;let t=this.getSelects(),n=this.getSelects("text");this.options.displayValues&&(n=t);let o=(p=this.choiceElm)==null?void 0:p.querySelector("span"),i=t.length,s=null,l=()=>{if(this.options.useSelectOptionLabel||this.options.useSelectOptionLabelToHtml){let u=t.join(this.options.displayDelimiter);return this.options.useSelectOptionLabelToHtml?lm(u):u}return n.join(this.options.displayDelimiter)};if(o){if(i===0){let u=this.options.placeholder||"";o.classList.add("ms-placeholder"),this.applyAsTextOrHtmlWhenEnabled(o,u)}else i<this.options.minimumCountSelected?s=l():this.formatAllSelected()&&i===this.dataTotal?s=this.formatAllSelected():this.options.ellipsis&&i>this.options.minimumCountSelected?s=`${n.slice(0,this.options.minimumCountSelected).join(this.options.displayDelimiter)}...`:this.formatCountSelected(i,this.dataTotal)&&i>this.options.minimumCountSelected?s=this.formatCountSelected(i,this.dataTotal):s=l();if(s!==null&&(o==null||o.classList.remove("ms-placeholder"),this.applyAsTextOrHtmlWhenEnabled(o,s)),this.options.displayTitle||this.options.addTitle){this.options.addTitle&&console.warn("[Multiple-Select-Vanilla] Please note that the `addTitle` option was deprecated and replaced by `displayTitle`.");let u=this.options.useSelectOptionLabel||this.options.useSelectOptionLabelToHtml?"value":"text";o.title=this.getSelects(u).join(this.options.displayDelimiter)}}let a=this.getSelects();this.options.single?this.elm.value=a.length?a[0]:"":Array.from(this.elm.options).forEach(u=>{u.selected=a.some(c=>c===u.value)}),e||this.elm.dispatchEvent(new Event("change"))}updateSelected(e){var n;for(let o=this.updateDataStart;o<this.updateDataEnd;o++){let i=this.updateData[o],s=this.dropElm.querySelector(`input[data-key=${i._key}]`);if(s){s.checked=i.selected;let l=s.closest("li");l&&(i.selected&&!l.classList.contains("selected")?l.classList.add("selected"):i.selected||l.classList.remove("selected"))}}let t=((n=this.data)==null?void 0:n.filter(o=>o.visible).length)===0;this.selectAllElm&&(this.selectAllElm.checked=this.allSelected,Hi(this.selectAllElm.closest("li"),!t)),Hi(this.noResultsElm,t),this.virtualScroll&&(this.virtualScroll.rows=e??this.getListRows())}getData(){return this.options.data}getDataLength(){var e;return((e=this.data)==null?void 0:e.length)??0}getOptions(e=!0){let t=Object.assign({},this.options);return delete t.data,e?fo(t):this.options}refreshOptions(e){om(this.options,e,!0)||(this.options=Object.assign(this.options,e),this.destroy(!1),this.init())}getDropElement(){return this.dropElm}getParentElement(){return this.parentElm}getSelects(e="value"){let t=[];for(let n of this.data||[])if(n.type==="optgroup"){let o=n.children.filter(i=>i==null?void 0:i.selected);if(!o.length)continue;if(e==="value"||this.options.single)t.push(...o.map(i=>e==="value"&&i._value||i[e]));else{let i=[];i.push("["),i.push(n.label),i.push(`: ${o.map(s=>s[e]).join(", ")}`),i.push("]"),t.push(i.join(""))}}else n.selected&&t.push(e==="value"&&n._value||n[e]);return t}setSelects(e,t="value",n=!1){let o=!1,i=s=>{var l;for(let a of s){let p=!1;if(t==="text"){let u=document.createElement("div");this.applyAsTextOrHtmlWhenEnabled(u,a.text),p=e.includes(((l=u.textContent)==null?void 0:l.trim())??"")}else p=e.includes(a._value||a.value),!p&&a.value===`${+a.value}`&&(p=e.includes(+a.value));a.selected!==p&&(o=!0),a.selected=p}};for(let s of this.data||[])s.type==="optgroup"?i(s.children):i([s]);o&&(this.initSelected(n),this.updateSelected(),this.update(n))}enable(){var e;(e=this.choiceElm)==null||e.classList.remove("disabled")}disable(){var e;(e=this.choiceElm)==null||e.classList.add("disabled")}check(e){let t=un(this.data,"value",e);t&&this._check(t,!0)}uncheck(e){let t=un(this.data,"value",e);t&&this._check(t,!1)}_check(e,t){this.options.single&&this._checkAll(!1,!0),e.selected=t,this.initSelected(),this.updateSelected(),this.update()}checkAll(){this._checkAll(!0)}uncheckAll(){this._checkAll(!1)}_checkAll(e,t){for(let n of this.data||[])n.type==="optgroup"?this._checkGroup(n,e,!0):!n.disabled&&!n.divider&&(t||n.visible)&&(n.selected=e);t||(this.initSelected(),this.updateSelected(),this.update())}_checkGroup(e,t,n){e.selected=t,e.children.forEach(o=>{o&&!o.disabled&&!o.divider&&(n||o.visible)&&(o.selected=t)}),n||(this.initSelected(),this.updateSelected(),this.update())}checkInvert(){if(!this.options.single){for(let e of this.data||[])if(e.type==="optgroup")for(let t of e.children)t&&(t.divider||(t.selected=!t.selected));else e&&!e.divider&&(e.selected=!e.selected);this.initSelected(),this.updateSelected(),this.update()}}focus(){var e;(e=this.choiceElm)==null||e.focus(),this.options.onFocus()}blur(){var e;(e=this.choiceElm)==null||e.blur(),this.options.onBlur()}refresh(){this.destroy(!1),this.init()}filter(e){var i;let t=((i=this.searchInputElm)==null?void 0:i.value.trim())??"",n=t.toLowerCase();if(this.filterText===n)return;this.filterText=n;for(let s of this.data||[])if(s.type==="optgroup")if(this.options.filterGroup){let l=`${(s==null?void 0:s.label)??""}`;if(s!=null){let a=this.options.customFilter({label:ve(l.toLowerCase()),search:ve(n),originalLabel:l,originalSearch:t,row:s});s.visible=a;for(let p of s.children)p&&(p.visible=a)}}else{for(let l of s.children)if(l!=null){let a=`${(l==null?void 0:l.text)??""}`;l.visible=this.options.customFilter({text:ve(a.toLowerCase()),search:ve(n),originalText:a,originalSearch:t,row:l,parent:s})}s.visible=s.children.filter(l=>l==null?void 0:l.visible).length>0}else{let l=`${(s==null?void 0:s.text)??""}`;s.visible=this.options.customFilter({text:ve(l.toLowerCase()),search:ve(n),originalText:l,originalSearch:t,row:s})}let o=this.initListItems();this.initSelected(e),this.updateSelected(o),e||this.options.onFilter(t)}adjustDropHeight(e){var u,c,E,A;let t=e!=="top",n=((u=this.filterParentElm)==null?void 0:u.getBoundingClientRect().height)??0,o=((c=this.okButtonElm)==null?void 0:c.getBoundingClientRect().height)??0,i=this.options.single?0:((E=this.selectAllParentElm)==null?void 0:E.getBoundingClientRect().height)??0,s=n+o+i+5,{bottom:l,top:a}=io(this.parentElm),p=this.options.maxHeight;if(t?p=l-s-this.options.adjustedHeightPadding:p=a-s-this.options.adjustedHeightPadding,!this.options.maxHeight||this.options.maxHeight&&p<this.options.maxHeight){let b=(A=this.dropElm)==null?void 0:A.querySelector("ul");return b&&(b.style.maxHeight=`${p}px`),!0}return!1}adjustDropPosition(e){let t="bottom";if(this.dropElm&&this.parentElm){let{bottom:n,top:o}=io(this.dropElm),{top:i,left:s}=go(this.parentElm),l=this.dropElm.getBoundingClientRect().height,a=this.dropElm.getBoundingClientRect().width,p=document.body.offsetWidth||window.innerWidth,u=this.parentElm.getBoundingClientRect().width;if(n>l)t="bottom";else if(l>n&&o>n){if(this.options.container){let c=i-l;c<0&&(c=0),(c>0||e)&&(t="top",this.dropElm.style.top=`${c<0?0:c}px`)}else t="top",this.dropElm.classList.add(t);this.dropElm.classList.remove("bottom")}p-a<s&&(this.dropElm.style.left=`${s-(a-u)}px`)}return t}adjustDropWidthByText(){let e=this.parentElm.scrollWidth;(this.options.dropWidth||this.options.width)&&(e=this.options.dropWidth||this.options.width||0);let t=this.dropElm.querySelector(".ms-select-all span"),n=this.dropElm.querySelector("ul"),o=26,i=(t==null?void 0:t.clientWidth)??0+o,s=n.scrollHeight>n.clientHeight?this.getScrollbarWidth():0,l=0;this.dropElm.querySelectorAll("li label").forEach(a=>{a.scrollWidth>l&&(l=a.scrollWidth)}),l+=o+s,l<i&&(l=i),this.options.maxWidth&&l>this.options.maxWidth&&(l=this.options.maxWidth),this.options.minWidth&&l<this.options.minWidth&&(l=this.options.minWidth),(e==="100%"||+e<l)&&(this.dropElm.style.width=`${l}px`,this.dropElm.style.maxWidth=`${l}px`)}getScrollbarWidth(){var i;let e=document.createElement("div");e.style.visibility="hidden",e.style.width="100px",document.body.appendChild(e);let t=e.offsetWidth;e.style.overflow="scroll";let n=document.createElement("div");n.style.width="100%",e.appendChild(n);let o=n.offsetWidth;return(i=e.parentNode)==null||i.removeChild(e),t-o}formatAllSelected(){return this.options.allSelectedText||this.options.formatAllSelected()}formatCountSelected(e,t){return this.options.countSelectedText?this.options.countSelectedText.replace("#",`${e}`).replace("%",`${t}`):this.options.formatCountSelected(e,t)}formatNoMatchesFound(){return this.options.noMatchesFoundText||this.options.formatNoMatchesFound()}formatOkButton(){return this.options.okButtonText||this.options.formatOkButton()}formatSelectAll(){return this.options.selectAllText||this.options.formatSelectAll()}},h=function(e,t){return typeof e=="string"?so(document.querySelectorAll(e),t):e instanceof Node?so([e],t):so(e,t)};function so(e,t){let n=Array.from(e),o=[];for(let i=0;i<n.length;i++){let s=n[i];try{s._multipleSelect!==void 0&&(s._multipleSelect.destroy(),delete s._multipleSelect),s._multipleSelect=new um(s,t||{}),s._multipleSelect.init();let l=s._multipleSelect.getOptions(!1);l.onHardDestroy=()=>delete s._multipleSelect,l.onAfterHardDestroyed=()=>o[i]=null,o.push(s._multipleSelect)}catch(l){console.error(l)}}return o.length===1?o[0]:o}h.defaults=vt.DEFAULTS;h.locales={...Xs};h.methods=vt.METHODS;typeof window<"u"&&(window.multipleSelect=h);let dm=class{mount(){h("#select1"),h("#select2",{placeholder:"Here is the placeholder via javascript"})}},tl=class{constructor(){m(this,"ms",[])}mount(){this.ms=h(".multiple-select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},mm=class{constructor(){m(this,"ms",[])}mount(){this.ms=h(".multiple-select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},hm=class{constructor(){m(this,"ms",[])}mount(){this.ms=h("select",{multiple:!0,multipleWidth:60})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},vm=class{constructor(){m(this,"multiMs",[]);m(this,"singleMs")}mount(){this.multiMs=h(".select"),this.singleMs=h(".data",{data:[{value:1,text:"Options 1",selected:!0},{value:2,text:"Options 2"},{value:3,text:"Options 3"}]})}unmount(){var t;this.multiMs.forEach(n=>n.destroy()),this.multiMs=[],(t=this.singleMs)==null||t.destroy(),this.singleMs=void 0}},fm=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select")}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},bm=class{constructor(){m(this,"ms",[])}mount(){this.ms=h("select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},gm=class{constructor(){m(this,"btnElm");m(this,"ms",[]);m(this,"clickListener",()=>{const t=this.serialize(document.querySelector("form"));alert(t)})}mount(){this.ms=h("select"),this.btnElm=document.querySelector(".submit7"),this.btnElm.addEventListener("click",this.clickListener)}unmount(){this.btnElm.removeEventListener("click",this.clickListener),this.ms.forEach(t=>t.destroy()),this.ms=[]}serialize(t){const n=[];return t.querySelectorAll("[name]").forEach(o=>{const i=Array.from(o.selectedOptions);for(const s of i)n.push(`${o.name}=${s.value}`)}),n.length>0?n.join("&"):!1}},Em=class{constructor(){m(this,"ms1");m(this,"ms2");m(this,"ms3");m(this,"ms4");m(this,"ms5")}mount(){this.ms1=h("#basic",{dataTest:"select1",data:[{text:"January",value:1},{text:"February",value:2},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}),this.ms2=h("#object",{dataTest:"select2",data:{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}}),this.ms3=h("#string",{dataTest:"select3",data:["January","February","March"]}),this.ms4=h("#number",{dataTest:"select4",data:[1,2,3]}),this.ms5=h("#group",{dataTest:"select5",data:[{type:"optgroup",label:"Group 1",children:[{text:"January",value:1,selected:!0},{text:"February",value:2,disabled:!0},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6}]},{type:"optgroup",label:"Group 2",children:[{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}]})}unmount(){var t,n,o,i,s;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),(s=this.ms5)==null||s.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0}};var el=window.multipleSelect;el.locales["cz-CS"]={formatSelectAll(){return"[Vybrat vše]"},formatAllSelected(){return"Vše vybráno"},formatCountSelected(e,t){return`${e} z ${t} vybráno`},formatNoMatchesFound(){return"Nebylo nalezeno"},formatOkButton(){return"Zavřít"}};el.locales;var nl=window.multipleSelect;nl.locales["da-DK"]={formatSelectAll(){return"[Vælg alle]"},formatAllSelected(){return"Alle valgt"},formatCountSelected(e,t){return`${e} af ${t} valgt`},formatNoMatchesFound(){return"Søgning uden resultat"},formatOkButton(){return"Lukke"}};nl.locales;var ol=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};ol.locales={"en-US":{formatSelectAll(){return"[Select all]"},formatAllSelected(){return"All selected"},formatCountSelected(e,t){return`${e} of ${t} selected`},formatNoMatchesFound(){return"No matches found"},formatOkButton(){return"OK"}}};ol.locales;var il=window.multipleSelect;il.locales["es-ES"]={formatSelectAll(){return"[Seleccionar todo]"},formatAllSelected(){return"Todos seleccionados"},formatCountSelected(e,t){return`${e} de ${t} seleccionado`},formatNoMatchesFound(){return"No se encontraron coincidencias"},formatOkButton(){return"Cerrar"}};il.locales;var sl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};sl.locales["fr-FR"]={formatSelectAll(){return"[Tout sélectionner]"},formatAllSelected(){return"Tous sélectionnés"},formatCountSelected(e,t){return`${e} de ${t} sélectionnés`},formatNoMatchesFound(){return"Aucun résultat"},formatOkButton(){return"Fermer"}};sl.locales;var ll=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};ll.locales["hu-HU"]={formatSelectAll(){return"[Összes kiválasztása]"},formatAllSelected(){return"Összes kiválasztva"},formatCountSelected(e,t){return`${e} / ${t} kiválasztva`},formatNoMatchesFound(){return"Nincs találat"},formatOkButton(){return"Bezár"}};ll.locales;var al=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};al.locales["it-IT"]={formatSelectAll(){return"[Seleziona tutti]"},formatAllSelected(){return"Tutti selezionati"},formatCountSelected(e,t){return`${e} di ${t} selezionati`},formatNoMatchesFound(){return"Nessun risultato"},formatOkButton(){return"Chiudere"}};al.locales;var rl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};rl.locales["ja-JP"]={formatSelectAll(){return"[すべて選択]"},formatAllSelected(){return"すべて選択"},formatCountSelected(e,t){return`${t} 件中 ${e} 件選択`},formatNoMatchesFound(){return"見つかりません"},formatOkButton(){return"閉める"}};rl.locales;var pl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};pl.locales["pt-BR"]={formatSelectAll(){return"[Selecionar todos]"},formatAllSelected(){return"Todos selecionados"},formatCountSelected(e,t){return`${e} de ${t} selecionado(s)`},formatNoMatchesFound(){return"Nenhum resultado encontrado"},formatOkButton(){return"Fechar"}};pl.locales;var cl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};cl.locales["ru-RU"]={formatSelectAll(){return"[Выбрать все]"},formatAllSelected(){return"Выбрано все"},formatCountSelected(e,t){return`${e} из ${t} выбрано`},formatNoMatchesFound(){return"Совпадений не найдено"},formatOkButton(){return"Закрывать"}};cl.locales;var ul=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};ul.locales["vi-VN"]={formatSelectAll(){return"[Tất cả]"},formatAllSelected(){return"Chọn tất cả"},formatCountSelected(e,t){return`Đã chọn ${e} trong ${t}`},formatNoMatchesFound(){return"Không tìm thấy kết quả."},formatOkButton(){return"Đóng"}};ul.locales;var dl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};dl.locales["zh-CN"]={formatSelectAll(){return"[全选]"},formatAllSelected(){return"已选择所有记录"},formatCountSelected(e,t){return`已从${t}条记录中选择${e}条`},formatNoMatchesFound(){return"没有找到记录"},formatOkButton(){return"关闭"}};dl.locales;var ml=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};ml.locales["zh-TW"]={formatSelectAll(){return"[全選]"},formatAllSelected(){return"已選擇所有記錄"},formatCountSelected(e,t){return`已從${t}條記錄中選擇${e}條`},formatNoMatchesFound(){return"沒有找到記錄"},formatOkButton(){return"关闭"}};ml.locales;let _m=class{constructor(){m(this,"ms1");m(this,"ms2")}mount(){const t=document.querySelector("#locale");t.addEventListener("change",n=>{this.updateLocale(n.target.value)}),this.ms1=h(t),this.ms2=h("#select",{filter:!0,showOkButton:!0})}unmount(){var t,n;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),this.ms1=void 0,this.ms2=void 0}updateLocale(t){var n,o;(n=this.ms2)==null||n.destroy(),(o=this.ms2)==null||o.refreshOptions({locale:t})}},ym=class{constructor(){m(this,"ms1")}mount(){const t=[];for(let n=0;n<1e4;n++)t.push(n);this.ms1=h("#select",{filter:!0,data:t,showSearchClear:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Am=class{constructor(){m(this,"ms",[])}mount(){this.ms=h("select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},wm=class{constructor(){m(this,"ms1");m(this,"ms2")}mount(){this.ms1=h("#single",{singleRadio:!0}),this.ms2=h("#multiple",{showOkButton:!0})}unmount(){var t,n;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),this.ms1=void 0,this.ms2=void 0}},Sm=class{constructor(){m(this,"createBtnElm");m(this,"destroyBtnElm");m(this,"ms1")}mount(){this.createBtnElm=document.querySelector("#createBtn"),this.destroyBtnElm=document.querySelector("#destroyBtn"),this.createBtnElm.addEventListener("click",this.createMultipleSelect.bind(this)),this.destroyBtnElm.addEventListener("click",this.destroyMultiSelect.bind(this))}createMultipleSelect(){this.ms1=h("#select1",{name:"my-select",single:!1,useSelectOptionLabelToHtml:!0,sanitizer:t=>At.sanitize(t,{RETURN_TRUSTED_TYPE:!0}),data:[{text:'<i class="fa fa-star"></i> January',value:1},{text:"February",value:2},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}),this.ms1.setSelects([1,3,4])}destroyMultiSelect(){var t;console.log("destroy"),(t=this.ms1)==null||t.destroy(),this.ms1=void 0}unmount(){this.destroyMultiSelect(),this.createBtnElm.removeEventListener("click",this.createMultipleSelect.bind(this)),this.destroyBtnElm.removeEventListener("click",this.destroyMultiSelect.bind(this))}},Tm=class{constructor(){m(this,"ms1",[]);m(this,"ms2",[])}mount(){this.ms1=h(".select"),this.ms2=h(".data-select",{dataTest:"select1",data:[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"},{divider:!0},{value:4,text:"Option 4"},{value:5,text:"Option 5"},{value:6,text:"Option 6"}]})}unmount(){this.ms1.forEach(t=>t.destroy()),this.ms2.forEach(t=>t.destroy()),this.ms1=[],this.ms2=[]}},Om=class{constructor(){m(this,"ms1");m(this,"ms2")}mount(){this.ms1=h("#select1"),this.ms2=h("#select2",{placeholder:"Here is the placeholder via javascript"})}unmount(){var t,n;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),this.ms1=void 0,this.ms2=void 0}},Cm=class{constructor(){m(this,"ms",[])}mount(){this.ms=h("select",{singleRadio:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},xm=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select",{selectAll:!1})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},km=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select",{multiple:!0,hideOptgroupCheckboxes:!0,multipleWidth:60})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Dm=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select",{multiple:!0,width:500,multipleWidth:70,dropWidth:580})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Nm=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select",{maxHeight:140})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Lm=class{constructor(){m(this,"ms",[])}mount(){const t=document.querySelector("#number");this.ms=h("select",{maxHeight:+t.value,maxHeightUnit:"row"}),t.addEventListener("change",()=>{this.ms.forEach(n=>{n.refreshOptions({maxHeight:+t.value,maxHeightUnit:"row"})})})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Mm=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select",{position:"top"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Fm=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select",{displayValues:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},$m=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select",{displayTitle:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Rm=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select",{displayDelimiter:" | "})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Im=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select",{minimumCountSelected:8})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Bm=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select",{ellipsis:!0,minimumCountSelected:5})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Pm=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select",{isOpen:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Hm=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select",{keepOpen:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Gm=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select",{openOnHover:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Um=class{constructor(){m(this,"ms1");m(this,"ms2");m(this,"ms3");m(this,"ms4")}mount(){this.ms1=h(".select1"),this.ms2=h(".select2"),this.ms3=h(".select3",{container:".my-container"}),this.ms4=h(".select4",{autoAdjustDropPosition:!0,container:"body"})}unmount(){var t,n,o,i;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},jm=class{constructor(){m(this,"ms",[])}mount(){this.ms=h("select",{filter:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Wm=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select",{filter:!0,filterGroup:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Vm=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select",{filter:!0,filterPlaceholder:"The filter placeholder"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Jm=class{constructor(){m(this,"ms",[])}mount(){this.ms=h("select",{filter:!0,filterAcceptOnEnter:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},zm=class{constructor(){m(this,"ms",[])}mount(){this.ms=h("select",{filterByDataLength:10})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},qm=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select",{filter:!0,customFilter:({text:t,search:n,originalText:o,originalSearch:i})=>document.querySelector("input").checked?o.indexOf(i)===0:t.indexOf(n)===0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Ym=class{constructor(){m(this,"ms",[])}mount(){this.ms=h("select",{showClear:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Km=class{constructor(){m(this,"ms",[])}mount(){this.ms.push(h(".select1",{showOkButton:!0})),this.ms.push(h(".select2",{showOkButton:!0})),this.ms.push(h(".select3",{showOkButton:!0,filter:!0})),this.ms.push(h(".select4",{showOkButton:!0}))}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Xm=class{constructor(){m(this,"ms1");m(this,"ms2");m(this,"ms3")}mount(){this.ms2=h('[data-test="select1"]',{styler:t=>+((t==null?void 0:t.value)??0)==1?"background-color: #ffee00; color: #ff0000;":+((t==null?void 0:t.value)??0)==6?"background-color: #000; color: #fff;":null}),this.ms2=h('[data-test="select2"]',{styler:t=>(t==null?void 0:t.type)==="optgroup"?"color: #777; font-weight: normal;":+((t==null?void 0:t.value)??0)==1?"color: blue;":null}),this.ms2=h('[data-test="select3"]',{cssStyler:t=>+((t==null?void 0:t.value)??0)==2?{backgroundColor:"#6fbeff",color:"#0014ff",fontStyle:"italic"}:+((t==null?void 0:t.value)??0)==4?{backgroundColor:"#972727",color:"#fff"}:null}),this.ms2=h('[data-test="select4"]',{cssStyler:t=>(t==null?void 0:t.type)==="optgroup"?{color:"#787878",fontWeight:"normal"}:+((t==null?void 0:t.value)??0)==3?{color:"purple",textDecoration:"underline"}:null})}unmount(){var t,n,o;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),(o=this.ms3)==null||o.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0}},Qm=class{constructor(){m(this,"ms1");m(this,"ms2");m(this,"btnEnableElm");m(this,"btnDisableElm")}mount(){this.ms1=h("#basic",{filter:!0,displayTitle:!0,renderOptionLabelAsHtml:!0,textTemplate:t=>`<i class="fa fa-star"></i>${t.innerHTML}`,customFilter:({search:t,text:n})=>{var i;const o=document.createElement("div");return o.innerHTML=n,((i=o.textContent)==null?void 0:i.includes(t))??!0},sanitizer:t=>At.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms2=h("#from-data",{dataTest:"select1",displayTitle:!0,renderOptionLabelAsHtml:!0,data:[{value:'50"',text:'50"'},{value:"44'",text:"44'"},{value:"33",text:'<span style="font-weight:bold">33</span>'}],sanitizer:t=>At.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.btnEnableElm=document.querySelector("#enableRenderHtml"),this.btnEnableElm.addEventListener("click",()=>this.renderAsHtmlHandler(!0)),this.btnDisableElm=document.querySelector("#disableRenderHtml"),this.btnDisableElm.addEventListener("click",()=>this.renderAsHtmlHandler(!1))}renderAsHtmlHandler(t){var n,o;(n=this.ms1)==null||n.refreshOptions({renderOptionLabelAsHtml:t}),(o=this.ms2)==null||o.refreshOptions({renderOptionLabelAsHtml:t})}unmount(){var t,n,o,i;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),this.ms1=void 0,this.ms2=void 0,(o=this.btnEnableElm)==null||o.removeEventListener("click",()=>this.renderAsHtmlHandler(!0)),(i=this.btnDisableElm)==null||i.removeEventListener("click",()=>this.renderAsHtmlHandler(!1))}},Zm=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select",{renderOptionLabelAsHtml:!0,labelTemplate:t=>`<i class="fa fa-star"></i>${t.getAttribute("label")}`,sanitizer:t=>At.sanitize(t,{RETURN_TRUSTED_TYPE:!0})})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},th=class{constructor(){m(this,"ms",[])}mount(){this.ms=h("select",{autoAdjustDropPosition:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},eh=class{constructor(){m(this,"ms1");m(this,"ms2");m(this,"ms3");m(this,"ms4")}mount(){this.ms1=h("#select1",{autoAdjustDropWidthByTextSize:!0,autoAdjustDropHeight:!0,position:"top",showOkButton:!0,sanitizer:t=>At.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms2=h("#select2",{autoAdjustDropHeight:!0,position:"top",showOkButton:!0,sanitizer:t=>At.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms3=h("#select3",{autoAdjustDropHeight:!0,filter:!0,position:"top",sanitizer:t=>At.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms4=h("#select4")}unmount(){var t,n,o,i;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},nh=class{constructor(){m(this,"ms1");m(this,"ms2")}mount(){this.ms1=h("#select1",{useSelectOptionLabel:!0}),this.ms2=h("#select2",{useSelectOptionLabelToHtml:!0,sanitizer:t=>At.sanitize(t,{RETURN_TRUSTED_TYPE:!0}),data:[{text:'<i class="fa fa-star"></i> January',value:'<i class="fa fa-star"></i>1',selected:!0},{text:"February",value:"2"},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]})}unmount(){var t,n;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),this.ms1=void 0,this.ms2=void 0}},oh=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("#select1",{placeholder:'Placeholder with cross-site scripting code...<img src="not-found" onerror=alert("Hacked")>',sanitizer:t=>typeof t=="string"?decodeURIComponent(t).replace(/(\b)(on[a-z]+)(\s*)=|javascript:([^>]*)[^>]*|(<\s*)(\/*)script([<>]*).*(<\s*)(\/*)script(>*)|(&lt;)(\/*)(script|script defer)(.*)(&gt;|&gt;">)/gi,""):t})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},ih=class{constructor(){m(this,"ms",[])}mount(){this.ms=h("select",{classes:"form-control",classPrefix:"form-control"})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},sh=class{constructor(){m(this,"ms",[])}mount(){this.ms=h("select",{filter:!0,showSearchClear:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},lh=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select",{filter:!0}),document.querySelector("#getOptions").addEventListener("click",()=>{alert(JSON.stringify(this.ms1.getOptions(),null,4))})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},ah=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select",{filter:!0}),document.querySelector("#refreshOptions").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.refreshOptions({filter:!1})})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},rh=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select",{filter:!0}),document.querySelector("#setSelectsBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.setSelects([1,3])}),document.querySelector("#getSelectsBtn").addEventListener("click",()=>{var t,n;alert(`Selected values: ${(t=this.ms1)==null?void 0:t.getSelects()}`),alert(`Selected texts: ${(n=this.ms1)==null?void 0:n.getSelects("text")}`)}),document.querySelector("#setSelectsBtn2").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.setSelects(["February","April"],"text")}),document.querySelector("#getSelectsBtn2").addEventListener("click",()=>{var t;alert(`Selected values: ${(t=this.ms1)==null?void 0:t.getSelects("text")}`)})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},ph=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select"),document.querySelector("#enableBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.enable()}),document.querySelector("#disableBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.disable()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},ch=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select"),document.querySelector("#openBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.open()}),document.querySelector("#closeBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.close()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},uh=class{constructor(){m(this,"ms",[])}mount(){this.ms=h("select"),document.querySelector("#checkBtn").addEventListener("click",()=>{for(const t of this.ms)t.check(2)}),document.querySelector("#uncheckBtn").addEventListener("click",()=>{for(const t of this.ms)t.uncheck(2)})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},dh=class{constructor(){m(this,"ms",[])}mount(){this.ms=h("select"),document.querySelector("#checkAllBtn").addEventListener("click",()=>{for(const t of this.ms)t.checkAll()}),document.querySelector("#uncheckAllBtn").addEventListener("click",()=>{for(const t of this.ms)t.uncheckAll()})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},mh=class{constructor(){m(this,"ms",[])}mount(){this.ms=h("select"),document.querySelector("#checkInvert").addEventListener("click",()=>{for(const t of this.ms)t.checkInvert()})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},hh=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select"),document.querySelector("#focusBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.focus()}),document.querySelector("#blurBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.blur()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},vh=class{constructor(){m(this,"ms1")}mount(){const t=document.querySelector("select");this.ms1=h(t),document.querySelector("#refreshAdd").addEventListener("click",()=>{var a;const n=document.querySelector("#refreshInput"),o=document.querySelector("#refreshSelected"),i=document.querySelector("#refreshDisabled"),s=n.value.trim(),l=document.createElement("option");if(l.value=s,l.text=s,!s){n.focus();return}o.checked&&(l.selected=!0),i.checked&&(l.disabled=!0),n.value="",t.appendChild(l),(a=this.ms1)==null||a.refresh()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},fh=class{constructor(){m(this,"buildBtnElm");m(this,"destroyBtnElm");m(this,"ms1")}mount(){this.buildBtnElm=document.querySelector("#buildBtn"),this.destroyBtnElm=document.querySelector("#destroyBtn"),this.destroyBtnElm.addEventListener("click",this.destroyMultiSelect.bind(this)),this.buildBtnElm.addEventListener("click",this.createMultipleSelect.bind(this)),this.ms1=h("select")}createMultipleSelect(){this.ms1=h("select")}destroyMultiSelect(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=null}unmount(){this.destroyMultiSelect(),this.buildBtnElm.removeEventListener("click",this.destroyMultiSelect.bind(this)),this.destroyBtnElm.removeEventListener("click",this.createMultipleSelect.bind(this))}},bh=class{constructor(){m(this,"ms1")}mount(){this.ms1=h("select",{filter:!0}),document.querySelector("#getData").addEventListener("click",()=>{console.log("tt",JSON.stringify(this.ms1.getData())),alert(JSON.stringify(this.ms1.getData(),null,4))})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},gh=class{constructor(){m(this,"logElm");m(this,"ms1")}mount(){this.logElm=document.querySelector("textarea"),this.ms1=h("select",{filter:!0,onOpen:()=>{this.log(`onOpen event fire!
`)},onClose:()=>{this.log(`onClose event fire!
`)},onCheckAll:()=>{this.log(`onCheckAll event fire!
`)},onUncheckAll:()=>{this.log(`onUncheckAll event fire!
`)},onFocus:()=>{this.log(`onFocus event fire!
`)},onBlur:()=>{this.log(`onBlur event fire!
`)},onOptgroupClick:t=>{this.log(`onOptgroupClick event fire! view: ${JSON.stringify(t)}
`)},onClick:t=>{this.log(`onClick event fire! view: ${JSON.stringify(t)}
`)},onFilter:t=>{this.log(`onFilter event fire! text: ${t}
`)},onAfterCreate:()=>{this.log(`onAfterCreate event fire!
`)}})}log(t){this.logElm.textContent+=t,this.logElm.scrollTo(0,this.logElm.scrollHeight)}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}};class Eh{constructor(){m(this,"ms1")}mount(){this.ms1=h("select",{filter:!0,showOkButton:!0,formatAllSelected(){return"Tous sélectionnés"},formatCountSelected(t,n){return`${t} de ${n} sélectionnés`},formatNoMatchesFound(){return"Aucun résultat"},formatOkButton(){return"Fermer"},formatSelectAll(){return"[Tout sélectionner]"}})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}}const Gi=[{name:"getting-started",view:"/src/getting-started.html",viewModel:dm,title:"Getting Started"},{name:"examples",view:"/src/examples/example01.html",viewModel:tl,title:"Examples"}],Ui=[{name:"Welcomes",routes:[{name:"example01",view:"/src/examples/example01.html",viewModel:tl,title:"Single Select"},{name:"example02",view:"/src/examples/example02.html",viewModel:mm,title:"Multiple Select"},{name:"example03",view:"/src/examples/example03.html",viewModel:hm,title:"Multiple Items"},{name:"example04",view:"/src/examples/example04.html",viewModel:vm,title:"Auto Width"},{name:"example05",view:"/src/examples/example05.html",viewModel:fm,title:"Disabled Select"},{name:"example06",view:"/src/examples/example06.html",viewModel:bm,title:"Selected/Disabled Options"},{name:"example07",view:"/src/examples/example07.html",viewModel:gm,title:"Submit Select"},{name:"example08",view:"/src/examples/example08.html",viewModel:Em,title:"The Data"},{name:"example09",view:"/src/examples/example09.html",viewModel:_m,title:"Locale"},{name:"example10",view:"/src/examples/example10.html",viewModel:ym,title:"Large Select"},{name:"example11",view:"/src/examples/example11.html",viewModel:Am,title:"The Themes"},{name:"example12",view:"/src/examples/example12.html",viewModel:wm,title:"Checkbox/Radio Icons"},{name:"example13",view:"/src/examples/example13.html",viewModel:Sm,title:"Dynamically Create Select"},{name:"example14",view:"/src/examples/example14.html",viewModel:Tm,title:"The Divider"}]},{name:"Options",routes:[{name:"options01",view:"/src/options/options01.html",viewModel:Om,title:"The Placeholder"},{name:"options02",view:"/src/options/options02.html",viewModel:Cm,title:"Single Radio"},{name:"options03",view:"/src/options/options03.html",viewModel:xm,title:"Hide Select All"},{name:"options04",view:"/src/options/options04.html",viewModel:km,title:"Hide Optgroup Checkboxes"},{name:"options05",view:"/src/options/options05.html",viewModel:Dm,title:"Custom Dropdown Width"},{name:"options06",view:"/src/options/options06.html",viewModel:Nm,title:"Max Height"},{name:"options07",view:"/src/options/options07.html",viewModel:Lm,title:"Max Height Unit"},{name:"options08",view:"/src/options/options08.html",viewModel:Mm,title:"The Position"},{name:"options09",view:"/src/options/options09.html",viewModel:Fm,title:"Display Values"},{name:"options10",view:"/src/options/options10.html",viewModel:$m,title:"Display Title"},{name:"options11",view:"/src/options/options11.html",viewModel:Rm,title:"Display Delimiter"},{name:"options12",view:"/src/options/options12.html",viewModel:Im,title:"Minimum Count Selected"},{name:"options13",view:"/src/options/options13.html",viewModel:Bm,title:"The Ellipsis"},{name:"options14",view:"/src/options/options14.html",viewModel:Pm,title:"Is Open"},{name:"options15",view:"/src/options/options15.html",viewModel:Hm,title:"Keep Open"},{name:"options16",view:"/src/options/options16.html",viewModel:Gm,title:"Open On Hover"},{name:"options17",view:"/src/options/options17.html",viewModel:Um,title:"The Container"},{name:"options18",view:"/src/options/options18.html",viewModel:jm,title:"The Filter"},{name:"options19",view:"/src/options/options19.html",viewModel:Wm,title:"Filter Only Optgroup"},{name:"options20",view:"/src/options/options20.html",viewModel:Vm,title:"Filter Placeholder"},{name:"options21",view:"/src/options/options21.html",viewModel:Jm,title:"Filter Accept On Enter"},{name:"options22",view:"/src/options/options22.html",viewModel:zm,title:"Filter By Data Length"},{name:"options23",view:"/src/options/options23.html",viewModel:qm,title:"Custom Filter"},{name:"options24",view:"/src/options/options24.html",viewModel:Ym,title:"Show Clear"},{name:"options25",view:"/src/options/options25.html",viewModel:Km,title:"Show OK Button"},{name:"options26",view:"/src/options/options26.html",viewModel:Xm,title:"The Styler"},{name:"options27",view:"/src/options/options27.html",viewModel:Qm,title:"Text Template"},{name:"options28",view:"/src/options/options28.html",viewModel:Zm,title:"Label Template"},{name:"options29",view:"/src/options/options29.html",viewModel:th,title:"Auto-Adjust Drop Position"},{name:"options30",view:"/src/options/options30.html",viewModel:eh,title:"Auto-Adjust Drop Height/Width"},{name:"options31",view:"/src/options/options31.html",viewModel:nh,title:"Use Select Option as Label"},{name:"options32",view:"/src/options/options32.html",viewModel:oh,title:"Sanitizer"},{name:"options33",view:"/src/options/options33.html",viewModel:ih,title:"Classes"},{name:"options34",view:"/src/options/options34.html",viewModel:sh,title:"Show Search Clear"}]},{name:"Methods",routes:[{name:"methods01",view:"/src/methods/methods01.html",viewModel:lh,title:"The getOptions"},{name:"methods02",view:"/src/methods/methods02.html",viewModel:ah,title:"The refreshOptions"},{name:"methods03",view:"/src/methods/methods03.html",viewModel:rh,title:"The setSelects/getSelects"},{name:"methods04",view:"/src/methods/methods04.html",viewModel:ph,title:"The enable/disable"},{name:"methods05",view:"/src/methods/methods05.html",viewModel:ch,title:"The open/close"},{name:"methods06",view:"/src/methods/methods06.html",viewModel:uh,title:"The check/uncheck"},{name:"methods07",view:"/src/methods/methods07.html",viewModel:dh,title:"The checkAll/uncheckAll"},{name:"methods08",view:"/src/methods/methods08.html",viewModel:mh,title:"The checkInvert"},{name:"methods09",view:"/src/methods/methods09.html",viewModel:hh,title:"The focus/blur"},{name:"methods10",view:"/src/methods/methods10.html",viewModel:vh,title:"The refresh"},{name:"methods11",view:"/src/methods/methods11.html",viewModel:fh,title:"The destroy"},{name:"methods12",view:"/src/methods/methods12.html",viewModel:bh,title:"The getData"}]},{name:"Events",routes:[{name:"events",view:"/src/events/events.html",viewModel:gh,title:"The Events"}]},{name:"I18N",routes:[{name:"i18n",view:"/src/i18n/i18n.html",viewModel:Eh,title:"The i18n"}]}],_h=Object.assign({"/src/events/events.html":Sl,"/src/examples/example01.html":Tl,"/src/examples/example02.html":Ol,"/src/examples/example03.html":Cl,"/src/examples/example04.html":xl,"/src/examples/example05.html":kl,"/src/examples/example06.html":Dl,"/src/examples/example07.html":Nl,"/src/examples/example08.html":Ll,"/src/examples/example09.html":Ml,"/src/examples/example10.html":Fl,"/src/examples/example11.html":$l,"/src/examples/example12.html":Rl,"/src/examples/example13.html":Il,"/src/examples/example14.html":Bl,"/src/getting-started.html":Pl,"/src/i18n/i18n.html":Hl,"/src/main.html":ji,"/src/methods/methods01.html":Gl,"/src/methods/methods02.html":Ul,"/src/methods/methods03.html":jl,"/src/methods/methods04.html":Wl,"/src/methods/methods05.html":Vl,"/src/methods/methods06.html":Jl,"/src/methods/methods07.html":zl,"/src/methods/methods08.html":ql,"/src/methods/methods09.html":Yl,"/src/methods/methods10.html":Kl,"/src/methods/methods11.html":Xl,"/src/methods/methods12.html":Ql,"/src/options/options01.html":Zl,"/src/options/options02.html":ta,"/src/options/options03.html":ea,"/src/options/options04.html":na,"/src/options/options05.html":oa,"/src/options/options06.html":ia,"/src/options/options07.html":sa,"/src/options/options08.html":la,"/src/options/options09.html":aa,"/src/options/options10.html":ra,"/src/options/options11.html":pa,"/src/options/options12.html":ca,"/src/options/options13.html":ua,"/src/options/options14.html":da,"/src/options/options15.html":ma,"/src/options/options16.html":ha,"/src/options/options17.html":va,"/src/options/options18.html":fa,"/src/options/options19.html":ba,"/src/options/options20.html":ga,"/src/options/options21.html":Ea,"/src/options/options22.html":_a,"/src/options/options23.html":ya,"/src/options/options24.html":Aa,"/src/options/options25.html":wa,"/src/options/options26.html":Sa,"/src/options/options27.html":Ta,"/src/options/options28.html":Oa,"/src/options/options29.html":Ca,"/src/options/options30.html":xa,"/src/options/options31.html":ka,"/src/options/options32.html":Da,"/src/options/options33.html":Na,"/src/options/options34.html":La});class yh{constructor(){m(this,"loading",!0);m(this,"currentModel");m(this,"currentRouter");m(this,"defaultRouteName","getting-started");m(this,"stateBangChar","#/");m(this,"baseUrl",window.location.origin+window.location.pathname);m(this,"viewModelObj",{})}async init(){const t=window.location;document.querySelector("#app").innerHTML=At.sanitize(ji,{RETURN_TRUSTED_TYPE:!0});let n=t.hash.replace(this.stateBangChar,"");(!n||n==="/"||n==="#")&&(n=this.defaultRouteName),this.createRouteLinks(),this.loadRoute(n),Array.from(document.querySelectorAll(".panel-wm-left a.nav-link,.navbar-nav a.nav-link")).forEach(o=>{n.includes(o.id)&&o.classList.add("active")}),window.onpopstate=()=>{const i=window.location.hash.replace(this.stateBangChar,"");this.removeAllActiveLinks();const s=document.querySelector(`#${i}`);s&&(s.scrollIntoView(),s.classList.add("active")),this.loadRoute(i||this.defaultRouteName,!1)}}createRouteLinks(){var t,n,o;for(const i of Gi){const s=G("li",{className:"nav-item"});G("a",{id:i.name,className:"nav-link",textContent:i.title},s).addEventListener("click",this.clickEventListener.bind(this)),(t=document.querySelector(".navbar-nav"))==null||t.appendChild(s)}for(const i of Ui){const s=G("li",{className:"m-1"});G("p",{className:"navbar-vertical-label mb-1",textContent:i.name},s),(n=document.querySelector(".nav-pills"))==null||n.appendChild(s);for(const l of i.routes){const a=G("li",{className:"nav-item"}),p=G("a",{id:l.name,className:"nav-link",textContent:l.title});p.addEventListener("click",this.clickEventListener.bind(this)),a.appendChild(p),(o=document.querySelector(".nav-pills"))==null||o.appendChild(a)}}}async loadRoute(t,n=!0){var s;const o=document.querySelector(".panel-wm-content");yn(o),o.classList.add("cloak");let i=Gi.find(l=>l.name===t);if((i==null?void 0:i.name)==="examples"){const l=document.querySelector(".nav-pills .nav-item a.nav-link");l==null||l.classList.add("active")}else for(const l of Ui){const a=l.routes.find(p=>p.name===t);a&&(i=a)}if(this.currentModel&&this.unmountCurrentVM(this.currentModel,this.currentRouter),i){this.currentRouter=i,document.querySelector(".panel-wm-content").innerHTML=At.sanitize(_h[i.view],{RETURN_TRUSTED_TYPE:!0});const l=new i.viewModel;this.currentModel=l,window[i.name]=(s=l.mount)==null?void 0:s.call(l),window.onbeforeunload=()=>{var a;o.classList.add("cloak"),(a=l.unmount)==null||a.call(l),this.removeAllActiveLinks(!0),this.unmountAll(),i!=null&&i.name&&delete window[i.name]}}n&&window.history.pushState({},t,`${this.baseUrl}${this.stateBangChar}${t}`),document.title=`Multiple-Select-Vanilla · ${t}`,o.classList.remove("cloak")}async clickEventListener(t){this.removeAllActiveLinks();const n=t.target;n.classList.toggle("active"),this.loadRoute(n.id)}removeAllActiveLinks(t=!1){document.querySelectorAll(".panel-wm-left a.nav-link,.navbar-nav a.nav-link").forEach(n=>{n.classList.remove("active"),t&&n.addEventListener("click",this.clickEventListener.bind(this))})}unmountCurrentVM(t,n){var o;(o=t.unmount)==null||o.call(t),n&&delete window[n.name]}unmountAll(){for(const t of Object.keys(this.viewModelObj)){const n=this.viewModelObj[t];if(typeof(n==null?void 0:n.unmount)=="function"){n==null||n.unmount();for(const o of Object.keys(n))n[o]=null}window[t]=null,this.viewModelObj[t]=null,delete window[t],delete this.viewModelObj[t]}}}const Ah=new yh;Ah.init();
