var Sl=Object.defineProperty;var Al=(e,t,n)=>t in e?Sl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var d=(e,t,n)=>(Al(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Tl=`<div class="row mb-2">
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
`,Ol=`<div class="row">
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
`,xl=`<div class="row">
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
`,kl=`<div class="row mb-2">
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
`,Cl=`<div class="row mb-2">
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
`,Dl=`<div class="row mb-2">
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
`,Nl=`<div class="row mb-2">
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
`,Ll=`<div class="row mb-2">
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
`,Ml=`<div class="row mb-2">
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
`,$l=`<div class="row mb-2">
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
`,Il=`<div class="row mb-2">
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
`,Rl=`<div class="row mb-2">
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
`,Pl=`<div class="row mb-2">
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
`,Fl=`<div class="row mb-2">
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
`,Hl=`<div class="row mb-2">
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
&lt;link href=&quot;<span style="color:#880000">https://cdn.jsdelivr.net/npm/multiple-select-vanilla@1.2.0/dist/styles/css/multiple-select.css</span>&quot; rel=&quot;<span style="color:#880000">stylesheet</span>&quot;&gt;

&lt;!-- (ESM requires <span style="color:#d63384">type=&quot;module&quot;</span>) Latest compiled and minified JavaScript --&gt;
&lt;script type=&quot;module&quot; src=&quot;<span style="color:#880000">https://cdn.jsdelivr.net/npm/multiple-select-vanilla@1.2.0/dist/browser/multiple-select.js</span>&quot;&gt;&lt;/script&gt;

&lt;!-- (CJS requires <span style="color:#d63384">.cjs</span> extension) Latest compiled and minified JavaScript --&gt;
&lt;script src=&quot;<span style="color:#880000">https://cdn.jsdelivr.net/npm/multiple-select-vanilla@1.2.0/dist/browser/multiple-select.cjs</span>&quot;&gt;&lt;/script&gt;</pre>
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
`,Ul=`<div class="row mb-2">
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
`,Ji=`<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
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
`,jl=`<div class="row mb-2">
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
`,Wl=`<div class="row mb-2">
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
`,Jl=`<div class="row mb-2">
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
`,zl=`<div class="row mb-2">
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
`,ql=`<div class="row mb-2">
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
`,Kl=`<div class="row mb-2">
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
`,Xl=`<div class="row mb-2">
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
`,Ql=`<div class="row mb-2">
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
`,Zl=`<div class="row mb-2">
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
`,ta=`<div class="row mb-2">
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
`,ea=`<div class="row mb-2">
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
`,na=`<div class="row mb-2">
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
`,oa=`<div class="row mb-2">
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
`,ia=`<div class="row mb-2">
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
`,sa=`<div class="row mb-2">
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
`,la=`<div class="row mb-2">
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
`,aa=`<div class="row mb-2">
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
`,ra=`<div class="row mb-2">
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
`,pa=`<div class="row mb-2">
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
`,ca=`<div class="row mb-2">
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
`,ua=`<div class="row mb-2">
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
`,da=`<div class="row mb-2">
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
`,ma=`<div class="row mb-2">
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
`,ha=`<div class="row mb-2">
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
`,va=`<div class="row mb-2">
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
`,fa=`<div class="row mb-2">
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
`,ba=`<div class="row mb-2">
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
`,ga=`<div class="row mb-2">
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
`,_a=`<div class="row mb-2">
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
`,ya=`<div class="row mb-2">
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
`,wa=`<div class="row mb-2">
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
`,Sa=`<div class="row mb-2">
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
`,Aa=`<div class="row mb-2">
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
`,Ta=`<div class="row mb-2">
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
`,Oa=`<div class="row mb-2">
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
`,xa=`<div class="row mb-2">
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
`,ka=`<div class="row mb-2">
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
`,Ca=`<div class="row mb-2">
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
`,Da=`<div class="row mb-2">
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
`,Na=`<div class="row mb-2">
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
`,La=`<div class="row mb-2">
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
`,Ma=`<div class="row mb-2">
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
`,$a=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Custom Diacritic Parser
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a
            target="_blank"
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options35.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options35.ts"
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
`;var K="top",ot="bottom",it="right",Y="left",yn="auto",Oe=[K,ot,it,Y],ee="start",_e="end",Vi="clippingParents",bo="viewport",ve="popper",zi="reference",io=Oe.reduce(function(e,t){return e.concat([t+"-"+ee,t+"-"+_e])},[]),go=[].concat(Oe,[yn]).reduce(function(e,t){return e.concat([t,t+"-"+ee,t+"-"+_e])},[]),qi="beforeRead",Ki="read",Yi="afterRead",Xi="beforeMain",Qi="main",Zi="afterMain",ts="beforeWrite",es="write",ns="afterWrite",os=[qi,Ki,Yi,Xi,Qi,Zi,ts,es,ns];function St(e){return e?(e.nodeName||"").toLowerCase():null}function st(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ne(e){var t=st(e).Element;return e instanceof t||e instanceof Element}function rt(e){var t=st(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function _o(e){if(typeof ShadowRoot>"u")return!1;var t=st(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Ia(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var o=t.styles[n]||{},i=t.attributes[n]||{},s=t.elements[n];!rt(s)||!St(s)||(Object.assign(s.style,o),Object.keys(i).forEach(function(l){var a=i[l];a===!1?s.removeAttribute(l):s.setAttribute(l,a===!0?"":a)}))})}function Ra(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(o){var i=t.elements[o],s=t.attributes[o]||{},l=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:n[o]),a=l.reduce(function(p,u){return p[u]="",p},{});!rt(i)||!St(i)||(Object.assign(i.style,a),Object.keys(s).forEach(function(p){i.removeAttribute(p)}))})}}const Eo={name:"applyStyles",enabled:!0,phase:"write",fn:Ia,effect:Ra,requires:["computeStyles"]};function Et(e){return e.split("-")[0]}var te=Math.max,fn=Math.min,Ee=Math.round;function so(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function is(){return!/^((?!chrome|android).)*safari/i.test(so())}function ye(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var o=e.getBoundingClientRect(),i=1,s=1;t&&rt(e)&&(i=e.offsetWidth>0&&Ee(o.width)/e.offsetWidth||1,s=e.offsetHeight>0&&Ee(o.height)/e.offsetHeight||1);var l=ne(e)?st(e):window,a=l.visualViewport,p=!is()&&n,u=(o.left+(p&&a?a.offsetLeft:0))/i,c=(o.top+(p&&a?a.offsetTop:0))/s,_=o.width/i,w=o.height/s;return{width:_,height:w,top:c,right:u+_,bottom:c+w,left:u,x:u,y:c}}function yo(e){var t=ye(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function ss(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&_o(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Lt(e){return st(e).getComputedStyle(e)}function Pa(e){return["table","td","th"].indexOf(St(e))>=0}function jt(e){return((ne(e)?e.ownerDocument:e.document)||window.document).documentElement}function wn(e){return St(e)==="html"?e:e.assignedSlot||e.parentNode||(_o(e)?e.host:null)||jt(e)}function Yo(e){return!rt(e)||Lt(e).position==="fixed"?null:e.offsetParent}function Fa(e){var t=/firefox/i.test(so()),n=/Trident/i.test(so());if(n&&rt(e)){var o=Lt(e);if(o.position==="fixed")return null}var i=wn(e);for(_o(i)&&(i=i.host);rt(i)&&["html","body"].indexOf(St(i))<0;){var s=Lt(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function Je(e){for(var t=st(e),n=Yo(e);n&&Pa(n)&&Lt(n).position==="static";)n=Yo(n);return n&&(St(n)==="html"||St(n)==="body"&&Lt(n).position==="static")?t:n||Fa(e)||t}function wo(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ge(e,t,n){return te(e,fn(t,n))}function Ba(e,t,n){var o=Ge(e,t,n);return o>n?n:o}function ls(){return{top:0,right:0,bottom:0,left:0}}function as(e){return Object.assign({},ls(),e)}function rs(e,t){return t.reduce(function(n,o){return n[o]=e,n},{})}var Ha=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,as(typeof t!="number"?t:rs(t,Oe))};function Ua(e){var t,n=e.state,o=e.name,i=e.options,s=n.elements.arrow,l=n.modifiersData.popperOffsets,a=Et(n.placement),p=wo(a),u=[Y,it].indexOf(a)>=0,c=u?"height":"width";if(!(!s||!l)){var _=Ha(i.padding,n),w=yo(s),b=p==="y"?K:Y,k=p==="y"?ot:it,S=n.rects.reference[c]+n.rects.reference[p]-l[p]-n.rects.popper[c],O=l[p]-n.rects.reference[p],D=Je(s),M=D?p==="y"?D.clientHeight||0:D.clientWidth||0:0,T=S/2-O/2,A=_[b],C=M-w[c]-_[k],N=M/2-w[c]/2+T,P=Ge(A,N,C),G=p;n.modifiersData[o]=(t={},t[G]=P,t.centerOffset=P-N,t)}}function Ga(e){var t=e.state,n=e.options,o=n.element,i=o===void 0?"[data-popper-arrow]":o;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||ss(t.elements.popper,i)&&(t.elements.arrow=i))}const ps={name:"arrow",enabled:!0,phase:"main",fn:Ua,effect:Ga,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function we(e){return e.split("-")[1]}var ja={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Wa(e,t){var n=e.x,o=e.y,i=t.devicePixelRatio||1;return{x:Ee(n*i)/i||0,y:Ee(o*i)/i||0}}function Xo(e){var t,n=e.popper,o=e.popperRect,i=e.placement,s=e.variation,l=e.offsets,a=e.position,p=e.gpuAcceleration,u=e.adaptive,c=e.roundOffsets,_=e.isFixed,w=l.x,b=w===void 0?0:w,k=l.y,S=k===void 0?0:k,O=typeof c=="function"?c({x:b,y:S}):{x:b,y:S};b=O.x,S=O.y;var D=l.hasOwnProperty("x"),M=l.hasOwnProperty("y"),T=Y,A=K,C=window;if(u){var N=Je(n),P="clientHeight",G="clientWidth";if(N===st(n)&&(N=jt(n),Lt(N).position!=="static"&&a==="absolute"&&(P="scrollHeight",G="scrollWidth")),N=N,i===K||(i===Y||i===it)&&s===_e){A=ot;var B=_&&N===C&&C.visualViewport?C.visualViewport.height:N[P];S-=B-o.height,S*=p?1:-1}if(i===Y||(i===K||i===ot)&&s===_e){T=it;var L=_&&N===C&&C.visualViewport?C.visualViewport.width:N[G];b-=L-o.width,b*=p?1:-1}}var H=Object.assign({position:a},u&&ja),z=c===!0?Wa({x:b,y:S},st(n)):{x:b,y:S};if(b=z.x,S=z.y,p){var j;return Object.assign({},H,(j={},j[A]=M?"0":"",j[T]=D?"0":"",j.transform=(C.devicePixelRatio||1)<=1?"translate("+b+"px, "+S+"px)":"translate3d("+b+"px, "+S+"px, 0)",j))}return Object.assign({},H,(t={},t[A]=M?S+"px":"",t[T]=D?b+"px":"",t.transform="",t))}function Ja(e){var t=e.state,n=e.options,o=n.gpuAcceleration,i=o===void 0?!0:o,s=n.adaptive,l=s===void 0?!0:s,a=n.roundOffsets,p=a===void 0?!0:a,u={placement:Et(t.placement),variation:we(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Xo(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:p})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Xo(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:p})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const So={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ja,data:{}};var Ze={passive:!0};function Va(e){var t=e.state,n=e.instance,o=e.options,i=o.scroll,s=i===void 0?!0:i,l=o.resize,a=l===void 0?!0:l,p=st(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&u.forEach(function(c){c.addEventListener("scroll",n.update,Ze)}),a&&p.addEventListener("resize",n.update,Ze),function(){s&&u.forEach(function(c){c.removeEventListener("scroll",n.update,Ze)}),a&&p.removeEventListener("resize",n.update,Ze)}}const Ao={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Va,data:{}};var za={left:"right",right:"left",bottom:"top",top:"bottom"};function dn(e){return e.replace(/left|right|bottom|top/g,function(t){return za[t]})}var qa={start:"end",end:"start"};function Qo(e){return e.replace(/start|end/g,function(t){return qa[t]})}function To(e){var t=st(e),n=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:n,scrollTop:o}}function Oo(e){return ye(jt(e)).left+To(e).scrollLeft}function Ka(e,t){var n=st(e),o=jt(e),i=n.visualViewport,s=o.clientWidth,l=o.clientHeight,a=0,p=0;if(i){s=i.width,l=i.height;var u=is();(u||!u&&t==="fixed")&&(a=i.offsetLeft,p=i.offsetTop)}return{width:s,height:l,x:a+Oo(e),y:p}}function Ya(e){var t,n=jt(e),o=To(e),i=(t=e.ownerDocument)==null?void 0:t.body,s=te(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=te(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-o.scrollLeft+Oo(e),p=-o.scrollTop;return Lt(i||n).direction==="rtl"&&(a+=te(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:l,x:a,y:p}}function xo(e){var t=Lt(e),n=t.overflow,o=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+o)}function cs(e){return["html","body","#document"].indexOf(St(e))>=0?e.ownerDocument.body:rt(e)&&xo(e)?e:cs(wn(e))}function je(e,t){var n;t===void 0&&(t=[]);var o=cs(e),i=o===((n=e.ownerDocument)==null?void 0:n.body),s=st(o),l=i?[s].concat(s.visualViewport||[],xo(o)?o:[]):o,a=t.concat(l);return i?a:a.concat(je(wn(l)))}function lo(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Xa(e,t){var n=ye(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Zo(e,t,n){return t===bo?lo(Ka(e,n)):ne(t)?Xa(t,n):lo(Ya(jt(e)))}function Qa(e){var t=je(wn(e)),n=["absolute","fixed"].indexOf(Lt(e).position)>=0,o=n&&rt(e)?Je(e):e;return ne(o)?t.filter(function(i){return ne(i)&&ss(i,o)&&St(i)!=="body"}):[]}function Za(e,t,n,o){var i=t==="clippingParents"?Qa(e):[].concat(t),s=[].concat(i,[n]),l=s[0],a=s.reduce(function(p,u){var c=Zo(e,u,o);return p.top=te(c.top,p.top),p.right=fn(c.right,p.right),p.bottom=fn(c.bottom,p.bottom),p.left=te(c.left,p.left),p},Zo(e,l,o));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function us(e){var t=e.reference,n=e.element,o=e.placement,i=o?Et(o):null,s=o?we(o):null,l=t.x+t.width/2-n.width/2,a=t.y+t.height/2-n.height/2,p;switch(i){case K:p={x:l,y:t.y-n.height};break;case ot:p={x:l,y:t.y+t.height};break;case it:p={x:t.x+t.width,y:a};break;case Y:p={x:t.x-n.width,y:a};break;default:p={x:t.x,y:t.y}}var u=i?wo(i):null;if(u!=null){var c=u==="y"?"height":"width";switch(s){case ee:p[u]=p[u]-(t[c]/2-n[c]/2);break;case _e:p[u]=p[u]+(t[c]/2-n[c]/2);break}}return p}function Se(e,t){t===void 0&&(t={});var n=t,o=n.placement,i=o===void 0?e.placement:o,s=n.strategy,l=s===void 0?e.strategy:s,a=n.boundary,p=a===void 0?Vi:a,u=n.rootBoundary,c=u===void 0?bo:u,_=n.elementContext,w=_===void 0?ve:_,b=n.altBoundary,k=b===void 0?!1:b,S=n.padding,O=S===void 0?0:S,D=as(typeof O!="number"?O:rs(O,Oe)),M=w===ve?zi:ve,T=e.rects.popper,A=e.elements[k?M:w],C=Za(ne(A)?A:A.contextElement||jt(e.elements.popper),p,c,l),N=ye(e.elements.reference),P=us({reference:N,element:T,strategy:"absolute",placement:i}),G=lo(Object.assign({},T,P)),B=w===ve?G:N,L={top:C.top-B.top+D.top,bottom:B.bottom-C.bottom+D.bottom,left:C.left-B.left+D.left,right:B.right-C.right+D.right},H=e.modifiersData.offset;if(w===ve&&H){var z=H[i];Object.keys(L).forEach(function(j){var At=[it,ot].indexOf(j)>=0?1:-1,Tt=[K,ot].indexOf(j)>=0?"y":"x";L[j]+=z[Tt]*At})}return L}function tr(e,t){t===void 0&&(t={});var n=t,o=n.placement,i=n.boundary,s=n.rootBoundary,l=n.padding,a=n.flipVariations,p=n.allowedAutoPlacements,u=p===void 0?go:p,c=we(o),_=c?a?io:io.filter(function(k){return we(k)===c}):Oe,w=_.filter(function(k){return u.indexOf(k)>=0});w.length===0&&(w=_);var b=w.reduce(function(k,S){return k[S]=Se(e,{placement:S,boundary:i,rootBoundary:s,padding:l})[Et(S)],k},{});return Object.keys(b).sort(function(k,S){return b[k]-b[S]})}function er(e){if(Et(e)===yn)return[];var t=dn(e);return[Qo(e),t,Qo(t)]}function nr(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var i=n.mainAxis,s=i===void 0?!0:i,l=n.altAxis,a=l===void 0?!0:l,p=n.fallbackPlacements,u=n.padding,c=n.boundary,_=n.rootBoundary,w=n.altBoundary,b=n.flipVariations,k=b===void 0?!0:b,S=n.allowedAutoPlacements,O=t.options.placement,D=Et(O),M=D===O,T=p||(M||!k?[dn(O)]:er(O)),A=[O].concat(T).reduce(function(lt,at){return lt.concat(Et(at)===yn?tr(t,{placement:at,boundary:c,rootBoundary:_,padding:u,flipVariations:k,allowedAutoPlacements:S}):at)},[]),C=t.rects.reference,N=t.rects.popper,P=new Map,G=!0,B=A[0],L=0;L<A.length;L++){var H=A[L],z=Et(H),j=we(H)===ee,At=[K,ot].indexOf(z)>=0,Tt=At?"width":"height",q=Se(t,{placement:H,boundary:c,rootBoundary:_,altBoundary:w,padding:u}),Q=At?j?it:Y:j?ot:K;C[Tt]>N[Tt]&&(Q=dn(Q));var Vt=dn(Q),$=[];if(s&&$.push(q[z]<=0),a&&$.push(q[Q]<=0,q[Vt]<=0),$.every(function(lt){return lt})){B=H,G=!1;break}P.set(H,$)}if(G)for(var zt=k?3:1,F=function(at){var It=A.find(function(Rt){var gt=P.get(Rt);if(gt)return gt.slice(0,at).every(function(se){return se})});if(It)return B=It,"break"},$t=zt;$t>0;$t--){var I=F($t);if(I==="break")break}t.placement!==B&&(t.modifiersData[o]._skip=!0,t.placement=B,t.reset=!0)}}const ds={name:"flip",enabled:!0,phase:"main",fn:nr,requiresIfExists:["offset"],data:{_skip:!1}};function ti(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ei(e){return[K,it,ot,Y].some(function(t){return e[t]>=0})}function or(e){var t=e.state,n=e.name,o=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,l=Se(t,{elementContext:"reference"}),a=Se(t,{altBoundary:!0}),p=ti(l,o),u=ti(a,i,s),c=ei(p),_=ei(u);t.modifiersData[n]={referenceClippingOffsets:p,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:_},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":_})}const ms={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:or};function ir(e,t,n){var o=Et(e),i=[Y,K].indexOf(o)>=0?-1:1,s=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,l=s[0],a=s[1];return l=l||0,a=(a||0)*i,[Y,it].indexOf(o)>=0?{x:a,y:l}:{x:l,y:a}}function sr(e){var t=e.state,n=e.options,o=e.name,i=n.offset,s=i===void 0?[0,0]:i,l=go.reduce(function(c,_){return c[_]=ir(_,t.rects,s),c},{}),a=l[t.placement],p=a.x,u=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=p,t.modifiersData.popperOffsets.y+=u),t.modifiersData[o]=l}const hs={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:sr};function lr(e){var t=e.state,n=e.name;t.modifiersData[n]=us({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const ko={name:"popperOffsets",enabled:!0,phase:"read",fn:lr,data:{}};function ar(e){return e==="x"?"y":"x"}function rr(e){var t=e.state,n=e.options,o=e.name,i=n.mainAxis,s=i===void 0?!0:i,l=n.altAxis,a=l===void 0?!1:l,p=n.boundary,u=n.rootBoundary,c=n.altBoundary,_=n.padding,w=n.tether,b=w===void 0?!0:w,k=n.tetherOffset,S=k===void 0?0:k,O=Se(t,{boundary:p,rootBoundary:u,padding:_,altBoundary:c}),D=Et(t.placement),M=we(t.placement),T=!M,A=wo(D),C=ar(A),N=t.modifiersData.popperOffsets,P=t.rects.reference,G=t.rects.popper,B=typeof S=="function"?S(Object.assign({},t.rects,{placement:t.placement})):S,L=typeof B=="number"?{mainAxis:B,altAxis:B}:Object.assign({mainAxis:0,altAxis:0},B),H=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,z={x:0,y:0};if(N){if(s){var j,At=A==="y"?K:Y,Tt=A==="y"?ot:it,q=A==="y"?"height":"width",Q=N[A],Vt=Q+O[At],$=Q-O[Tt],zt=b?-G[q]/2:0,F=M===ee?P[q]:G[q],$t=M===ee?-G[q]:-P[q],I=t.elements.arrow,lt=b&&I?yo(I):{width:0,height:0},at=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ls(),It=at[At],Rt=at[Tt],gt=Ge(0,P[q],lt[q]),se=T?P[q]/2-zt-gt-It-L.mainAxis:F-gt-It-L.mainAxis,Pt=T?-P[q]/2+zt+gt+Rt+L.mainAxis:$t+gt+Rt+L.mainAxis,mt=t.elements.arrow&&Je(t.elements.arrow),De=mt?A==="y"?mt.clientTop||0:mt.clientLeft||0:0,le=(j=H==null?void 0:H[A])!=null?j:0,Ft=Q+se-le-De,ae=Q+Pt-le,qt=Ge(b?fn(Vt,Ft):Vt,Q,b?te($,ae):$);N[A]=qt,z[A]=qt-Q}if(a){var Ne,Ye=A==="x"?K:Y,Cn=A==="x"?ot:it,ht=N[C],_t=C==="y"?"height":"width",Ot=ht+O[Ye],xt=ht-O[Cn],re=[K,Y].indexOf(D)!==-1,Le=(Ne=H==null?void 0:H[C])!=null?Ne:0,Me=re?Ot:ht-P[_t]-G[_t]-Le+L.altAxis,pe=re?ht+P[_t]+G[_t]-Le-L.altAxis:xt,$e=b&&re?Ba(Me,ht,pe):Ge(b?Me:Ot,ht,b?pe:xt);N[C]=$e,z[C]=$e-ht}t.modifiersData[o]=z}}const vs={name:"preventOverflow",enabled:!0,phase:"main",fn:rr,requiresIfExists:["offset"]};function pr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function cr(e){return e===st(e)||!rt(e)?To(e):pr(e)}function ur(e){var t=e.getBoundingClientRect(),n=Ee(t.width)/e.offsetWidth||1,o=Ee(t.height)/e.offsetHeight||1;return n!==1||o!==1}function dr(e,t,n){n===void 0&&(n=!1);var o=rt(t),i=rt(t)&&ur(t),s=jt(t),l=ye(e,i,n),a={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(o||!o&&!n)&&((St(t)!=="body"||xo(s))&&(a=cr(t)),rt(t)?(p=ye(t,!0),p.x+=t.clientLeft,p.y+=t.clientTop):s&&(p.x=Oo(s))),{x:l.left+a.scrollLeft-p.x,y:l.top+a.scrollTop-p.y,width:l.width,height:l.height}}function mr(e){var t=new Map,n=new Set,o=[];e.forEach(function(s){t.set(s.name,s)});function i(s){n.add(s.name);var l=[].concat(s.requires||[],s.requiresIfExists||[]);l.forEach(function(a){if(!n.has(a)){var p=t.get(a);p&&i(p)}}),o.push(s)}return e.forEach(function(s){n.has(s.name)||i(s)}),o}function hr(e){var t=mr(e);return os.reduce(function(n,o){return n.concat(t.filter(function(i){return i.phase===o}))},[])}function vr(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function fr(e){var t=e.reduce(function(n,o){var i=n[o.name];return n[o.name]=i?Object.assign({},i,o,{options:Object.assign({},i.options,o.options),data:Object.assign({},i.data,o.data)}):o,n},{});return Object.keys(t).map(function(n){return t[n]})}var ni={placement:"bottom",modifiers:[],strategy:"absolute"};function oi(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Sn(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,o=n===void 0?[]:n,i=t.defaultOptions,s=i===void 0?ni:i;return function(a,p,u){u===void 0&&(u=s);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},ni,s),modifiersData:{},elements:{reference:a,popper:p},attributes:{},styles:{}},_=[],w=!1,b={state:c,setOptions:function(D){var M=typeof D=="function"?D(c.options):D;S(),c.options=Object.assign({},s,c.options,M),c.scrollParents={reference:ne(a)?je(a):a.contextElement?je(a.contextElement):[],popper:je(p)};var T=hr(fr([].concat(o,c.options.modifiers)));return c.orderedModifiers=T.filter(function(A){return A.enabled}),k(),b.update()},forceUpdate:function(){if(!w){var D=c.elements,M=D.reference,T=D.popper;if(oi(M,T)){c.rects={reference:dr(M,Je(T),c.options.strategy==="fixed"),popper:yo(T)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(L){return c.modifiersData[L.name]=Object.assign({},L.data)});for(var A=0;A<c.orderedModifiers.length;A++){if(c.reset===!0){c.reset=!1,A=-1;continue}var C=c.orderedModifiers[A],N=C.fn,P=C.options,G=P===void 0?{}:P,B=C.name;typeof N=="function"&&(c=N({state:c,options:G,name:B,instance:b})||c)}}}},update:vr(function(){return new Promise(function(O){b.forceUpdate(),O(c)})}),destroy:function(){S(),w=!0}};if(!oi(a,p))return b;b.setOptions(u).then(function(O){!w&&u.onFirstUpdate&&u.onFirstUpdate(O)});function k(){c.orderedModifiers.forEach(function(O){var D=O.name,M=O.options,T=M===void 0?{}:M,A=O.effect;if(typeof A=="function"){var C=A({state:c,name:D,instance:b,options:T}),N=function(){};_.push(C||N)}})}function S(){_.forEach(function(O){return O()}),_=[]}return b}}var br=Sn(),gr=[Ao,ko,So,Eo],_r=Sn({defaultModifiers:gr}),Er=[Ao,ko,So,Eo,hs,ds,vs,ps,ms],Co=Sn({defaultModifiers:Er});const fs=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Zi,afterRead:Yi,afterWrite:ns,applyStyles:Eo,arrow:ps,auto:yn,basePlacements:Oe,beforeMain:Xi,beforeRead:qi,beforeWrite:ts,bottom:ot,clippingParents:Vi,computeStyles:So,createPopper:Co,createPopperBase:br,createPopperLite:_r,detectOverflow:Se,end:_e,eventListeners:Ao,flip:ds,hide:ms,left:Y,main:Qi,modifierPhases:os,offset:hs,placements:go,popper:ve,popperGenerator:Sn,popperOffsets:ko,preventOverflow:vs,read:Ki,reference:zi,right:it,start:ee,top:K,variationPlacements:io,viewport:bo,write:es},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Bt=new Map,$n={set(e,t,n){Bt.has(e)||Bt.set(e,new Map);const o=Bt.get(e);if(!o.has(t)&&o.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`);return}o.set(t,n)},get(e,t){return Bt.has(e)&&Bt.get(e).get(t)||null},remove(e,t){if(!Bt.has(e))return;const n=Bt.get(e);n.delete(t),n.size===0&&Bt.delete(e)}},yr=1e6,wr=1e3,ao="transitionend",bs=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(t,n)=>`#${CSS.escape(n)}`)),e),Sr=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),Ar=e=>{do e+=Math.floor(Math.random()*yr);while(document.getElementById(e));return e},Tr=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const o=Number.parseFloat(t),i=Number.parseFloat(n);return!o&&!i?0:(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*wr)},gs=e=>{e.dispatchEvent(new Event(ao))},Dt=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u"),Ht=e=>Dt(e)?e.jquery?e[0]:e:typeof e=="string"&&e.length>0?document.querySelector(bs(e)):null,xe=e=>{if(!Dt(e)||e.getClientRects().length===0)return!1;const t=getComputedStyle(e).getPropertyValue("visibility")==="visible",n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const o=e.closest("summary");if(o&&o.parentNode!==n||o===null)return!1}return t},Ut=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled")?!0:typeof e.disabled<"u"?e.disabled:e.hasAttribute("disabled")&&e.getAttribute("disabled")!=="false",_s=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode=="function"){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?_s(e.parentNode):null},bn=()=>{},Ve=e=>{e.offsetHeight},Es=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,In=[],Or=e=>{document.readyState==="loading"?(In.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of In)t()}),In.push(e)):e()},pt=()=>document.documentElement.dir==="rtl",dt=e=>{Or(()=>{const t=Es();if(t){const n=e.NAME,o=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=o,e.jQueryInterface)}})},et=(e,t=[],n=e)=>typeof e=="function"?e(...t):n,ys=(e,t,n=!0)=>{if(!n){et(e);return}const i=Tr(t)+5;let s=!1;const l=({target:a})=>{a===t&&(s=!0,t.removeEventListener(ao,l),et(e))};t.addEventListener(ao,l),setTimeout(()=>{s||gs(t)},i)},Do=(e,t,n,o)=>{const i=e.length;let s=e.indexOf(t);return s===-1?!n&&o?e[i-1]:e[0]:(s+=n?1:-1,o&&(s=(s+i)%i),e[Math.max(0,Math.min(s,i-1))])},xr=/[^.]*(?=\..*)\.|.*/,kr=/\..*/,Cr=/::\d+$/,Rn={};let ii=1;const ws={mouseenter:"mouseover",mouseleave:"mouseout"},Dr=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Ss(e,t){return t&&`${t}::${ii++}`||e.uidEvent||ii++}function As(e){const t=Ss(e);return e.uidEvent=t,Rn[t]=Rn[t]||{},Rn[t]}function Nr(e,t){return function n(o){return No(o,{delegateTarget:e}),n.oneOff&&m.off(e,o.type,t),t.apply(e,[o])}}function Lr(e,t,n){return function o(i){const s=e.querySelectorAll(t);for(let{target:l}=i;l&&l!==this;l=l.parentNode)for(const a of s)if(a===l)return No(i,{delegateTarget:l}),o.oneOff&&m.off(e,i.type,t,n),n.apply(l,[i])}}function Ts(e,t,n=null){return Object.values(e).find(o=>o.callable===t&&o.delegationSelector===n)}function Os(e,t,n){const o=typeof t=="string",i=o?n:t||n;let s=xs(e);return Dr.has(s)||(s=e),[o,i,s]}function si(e,t,n,o,i){if(typeof t!="string"||!e)return;let[s,l,a]=Os(t,n,o);t in ws&&(l=(k=>function(S){if(!S.relatedTarget||S.relatedTarget!==S.delegateTarget&&!S.delegateTarget.contains(S.relatedTarget))return k.call(this,S)})(l));const p=As(e),u=p[a]||(p[a]={}),c=Ts(u,l,s?n:null);if(c){c.oneOff=c.oneOff&&i;return}const _=Ss(l,t.replace(xr,"")),w=s?Lr(e,n,l):Nr(e,l);w.delegationSelector=s?n:null,w.callable=l,w.oneOff=i,w.uidEvent=_,u[_]=w,e.addEventListener(a,w,s)}function ro(e,t,n,o,i){const s=Ts(t[n],o,i);s&&(e.removeEventListener(n,s,!!i),delete t[n][s.uidEvent])}function Mr(e,t,n,o){const i=t[n]||{};for(const[s,l]of Object.entries(i))s.includes(o)&&ro(e,t,n,l.callable,l.delegationSelector)}function xs(e){return e=e.replace(kr,""),ws[e]||e}const m={on(e,t,n,o){si(e,t,n,o,!1)},one(e,t,n,o){si(e,t,n,o,!0)},off(e,t,n,o){if(typeof t!="string"||!e)return;const[i,s,l]=Os(t,n,o),a=l!==t,p=As(e),u=p[l]||{},c=t.startsWith(".");if(typeof s<"u"){if(!Object.keys(u).length)return;ro(e,p,l,s,i?n:null);return}if(c)for(const _ of Object.keys(p))Mr(e,p,_,t.slice(1));for(const[_,w]of Object.entries(u)){const b=_.replace(Cr,"");(!a||t.includes(b))&&ro(e,p,l,w.callable,w.delegationSelector)}},trigger(e,t,n){if(typeof t!="string"||!e)return null;const o=Es(),i=xs(t),s=t!==i;let l=null,a=!0,p=!0,u=!1;s&&o&&(l=o.Event(t,n),o(e).trigger(l),a=!l.isPropagationStopped(),p=!l.isImmediatePropagationStopped(),u=l.isDefaultPrevented());const c=No(new Event(t,{bubbles:a,cancelable:!0}),n);return u&&c.preventDefault(),p&&e.dispatchEvent(c),c.defaultPrevented&&l&&l.preventDefault(),c}};function No(e,t={}){for(const[n,o]of Object.entries(t))try{e[n]=o}catch{Object.defineProperty(e,n,{configurable:!0,get(){return o}})}return e}function li(e){if(e==="true")return!0;if(e==="false")return!1;if(e===Number(e).toString())return Number(e);if(e===""||e==="null")return null;if(typeof e!="string")return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function Pn(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const Nt={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${Pn(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${Pn(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter(o=>o.startsWith("bs")&&!o.startsWith("bsConfig"));for(const o of n){let i=o.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=li(e.dataset[o])}return t},getDataAttribute(e,t){return li(e.getAttribute(`data-bs-${Pn(t)}`))}};class ze{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,n){const o=Dt(n)?Nt.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof o=="object"?o:{},...Dt(n)?Nt.getDataAttributes(n):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,n=this.constructor.DefaultType){for(const[o,i]of Object.entries(n)){const s=t[o],l=Dt(s)?"element":Sr(s);if(!new RegExp(i).test(l))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${o}" provided type "${l}" but expected type "${i}".`)}}}const $r="5.3.2";class bt extends ze{constructor(t,n){super(),t=Ht(t),t&&(this._element=t,this._config=this._getConfig(n),$n.set(this._element,this.constructor.DATA_KEY,this))}dispose(){$n.remove(this._element,this.constructor.DATA_KEY),m.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,n,o=!0){ys(t,n,o)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return $n.get(Ht(t),this.DATA_KEY)}static getOrCreateInstance(t,n={}){return this.getInstance(t)||new this(t,typeof n=="object"?n:null)}static get VERSION(){return $r}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const Fn=e=>{let t=e.getAttribute("data-bs-target");if(!t||t==="#"){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&n!=="#"?bs(n.trim()):null}return t},E={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(n=>n.matches(t))},parents(e,t){const n=[];let o=e.parentNode.closest(t);for(;o;)n.push(o),o=o.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(t,e).filter(n=>!Ut(n)&&xe(n))},getSelectorFromElement(e){const t=Fn(e);return t&&E.findOne(t)?t:null},getElementFromSelector(e){const t=Fn(e);return t?E.findOne(t):null},getMultipleElementsFromSelector(e){const t=Fn(e);return t?E.find(t):[]}},An=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,o=e.NAME;m.on(document,n,`[data-bs-dismiss="${o}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),Ut(this))return;const s=E.getElementFromSelector(this)||this.closest(`.${o}`);e.getOrCreateInstance(s)[t]()})},Ir="alert",Rr="bs.alert",ks=`.${Rr}`,Pr=`close${ks}`,Fr=`closed${ks}`,Br="fade",Hr="show";class Tn extends bt{static get NAME(){return Ir}close(){if(m.trigger(this._element,Pr).defaultPrevented)return;this._element.classList.remove(Hr);const n=this._element.classList.contains(Br);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),m.trigger(this._element,Fr),this.dispose()}static jQueryInterface(t){return this.each(function(){const n=Tn.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}An(Tn,"close");dt(Tn);const Ur="button",Gr="bs.button",jr=`.${Gr}`,Wr=".data-api",Jr="active",ai='[data-bs-toggle="button"]',Vr=`click${jr}${Wr}`;class On extends bt{static get NAME(){return Ur}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Jr))}static jQueryInterface(t){return this.each(function(){const n=On.getOrCreateInstance(this);t==="toggle"&&n[t]()})}}m.on(document,Vr,ai,e=>{e.preventDefault();const t=e.target.closest(ai);On.getOrCreateInstance(t).toggle()});dt(On);const zr="swipe",ke=".bs.swipe",qr=`touchstart${ke}`,Kr=`touchmove${ke}`,Yr=`touchend${ke}`,Xr=`pointerdown${ke}`,Qr=`pointerup${ke}`,Zr="touch",tp="pen",ep="pointer-event",np=40,op={endCallback:null,leftCallback:null,rightCallback:null},ip={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class gn extends ze{constructor(t,n){super(),this._element=t,!(!t||!gn.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return op}static get DefaultType(){return ip}static get NAME(){return zr}dispose(){m.off(this._element,ke)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),et(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=np)return;const n=t/this._deltaX;this._deltaX=0,n&&et(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(m.on(this._element,Xr,t=>this._start(t)),m.on(this._element,Qr,t=>this._end(t)),this._element.classList.add(ep)):(m.on(this._element,qr,t=>this._start(t)),m.on(this._element,Kr,t=>this._move(t)),m.on(this._element,Yr,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===tp||t.pointerType===Zr)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const sp="carousel",lp="bs.carousel",Wt=`.${lp}`,Cs=".data-api",ap="ArrowLeft",rp="ArrowRight",pp=500,Pe="next",de="prev",fe="left",mn="right",cp=`slide${Wt}`,Bn=`slid${Wt}`,up=`keydown${Wt}`,dp=`mouseenter${Wt}`,mp=`mouseleave${Wt}`,hp=`dragstart${Wt}`,vp=`load${Wt}${Cs}`,fp=`click${Wt}${Cs}`,Ds="carousel",tn="active",bp="slide",gp="carousel-item-end",_p="carousel-item-start",Ep="carousel-item-next",yp="carousel-item-prev",Ns=".active",Ls=".carousel-item",wp=Ns+Ls,Sp=".carousel-item img",Ap=".carousel-indicators",Tp="[data-bs-slide], [data-bs-slide-to]",Op='[data-bs-ride="carousel"]',xp={[ap]:mn,[rp]:fe},kp={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Cp={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class qe extends bt{constructor(t,n){super(t,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=E.findOne(Ap,this._element),this._addEventListeners(),this._config.ride===Ds&&this.cycle()}static get Default(){return kp}static get DefaultType(){return Cp}static get NAME(){return sp}next(){this._slide(Pe)}nextWhenVisible(){!document.hidden&&xe(this._element)&&this.next()}prev(){this._slide(de)}pause(){this._isSliding&&gs(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){m.one(this._element,Bn,()=>this.cycle());return}this.cycle()}}to(t){const n=this._getItems();if(t>n.length-1||t<0)return;if(this._isSliding){m.one(this._element,Bn,()=>this.to(t));return}const o=this._getItemIndex(this._getActive());if(o===t)return;const i=t>o?Pe:de;this._slide(i,n[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&m.on(this._element,up,t=>this._keydown(t)),this._config.pause==="hover"&&(m.on(this._element,dp,()=>this.pause()),m.on(this._element,mp,()=>this._maybeEnableCycle())),this._config.touch&&gn.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const o of E.find(Sp,this._element))m.on(o,hp,i=>i.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(fe)),rightCallback:()=>this._slide(this._directionToOrder(mn)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),pp+this._config.interval))}};this._swipeHelper=new gn(this._element,n)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const n=xp[t.key];n&&(t.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const n=E.findOne(Ns,this._indicatorsElement);n.classList.remove(tn),n.removeAttribute("aria-current");const o=E.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);o&&(o.classList.add(tn),o.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const n=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(t,n=null){if(this._isSliding)return;const o=this._getActive(),i=t===Pe,s=n||Do(this._getItems(),o,i,this._config.wrap);if(s===o)return;const l=this._getItemIndex(s),a=b=>m.trigger(this._element,b,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(o),to:l});if(a(cp).defaultPrevented||!o||!s)return;const u=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(l),this._activeElement=s;const c=i?_p:gp,_=i?Ep:yp;s.classList.add(_),Ve(s),o.classList.add(c),s.classList.add(c);const w=()=>{s.classList.remove(c,_),s.classList.add(tn),o.classList.remove(tn,_,c),this._isSliding=!1,a(Bn)};this._queueCallback(w,o,this._isAnimated()),u&&this.cycle()}_isAnimated(){return this._element.classList.contains(bp)}_getActive(){return E.findOne(wp,this._element)}_getItems(){return E.find(Ls,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return pt()?t===fe?de:Pe:t===fe?Pe:de}_orderToDirection(t){return pt()?t===de?fe:mn:t===de?mn:fe}static jQueryInterface(t){return this.each(function(){const n=qe.getOrCreateInstance(this,t);if(typeof t=="number"){n.to(t);return}if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}m.on(document,fp,Tp,function(e){const t=E.getElementFromSelector(this);if(!t||!t.classList.contains(Ds))return;e.preventDefault();const n=qe.getOrCreateInstance(t),o=this.getAttribute("data-bs-slide-to");if(o){n.to(o),n._maybeEnableCycle();return}if(Nt.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});m.on(window,vp,()=>{const e=E.find(Op);for(const t of e)qe.getOrCreateInstance(t)});dt(qe);const Dp="collapse",Np="bs.collapse",Ke=`.${Np}`,Lp=".data-api",Mp=`show${Ke}`,$p=`shown${Ke}`,Ip=`hide${Ke}`,Rp=`hidden${Ke}`,Pp=`click${Ke}${Lp}`,Hn="show",ge="collapse",en="collapsing",Fp="collapsed",Bp=`:scope .${ge} .${ge}`,Hp="collapse-horizontal",Up="width",Gp="height",jp=".collapse.show, .collapse.collapsing",po='[data-bs-toggle="collapse"]',Wp={parent:null,toggle:!0},Jp={parent:"(null|element)",toggle:"boolean"};class We extends bt{constructor(t,n){super(t,n),this._isTransitioning=!1,this._triggerArray=[];const o=E.find(po);for(const i of o){const s=E.getSelectorFromElement(i),l=E.find(s).filter(a=>a===this._element);s!==null&&l.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Wp}static get DefaultType(){return Jp}static get NAME(){return Dp}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(jp).filter(a=>a!==this._element).map(a=>We.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||m.trigger(this._element,Mp).defaultPrevented)return;for(const a of t)a.hide();const o=this._getDimension();this._element.classList.remove(ge),this._element.classList.add(en),this._element.style[o]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(en),this._element.classList.add(ge,Hn),this._element.style[o]="",m.trigger(this._element,$p)},l=`scroll${o[0].toUpperCase()+o.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[o]=`${this._element[l]}px`}hide(){if(this._isTransitioning||!this._isShown()||m.trigger(this._element,Ip).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,Ve(this._element),this._element.classList.add(en),this._element.classList.remove(ge,Hn);for(const i of this._triggerArray){const s=E.getElementFromSelector(i);s&&!this._isShown(s)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(en),this._element.classList.add(ge),m.trigger(this._element,Rp)};this._element.style[n]="",this._queueCallback(o,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Hn)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=Ht(t.parent),t}_getDimension(){return this._element.classList.contains(Hp)?Up:Gp}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(po);for(const n of t){const o=E.getElementFromSelector(n);o&&this._addAriaAndCollapsedClass([n],this._isShown(o))}}_getFirstLevelChildren(t){const n=E.find(Bp,this._config.parent);return E.find(t,this._config.parent).filter(o=>!n.includes(o))}_addAriaAndCollapsedClass(t,n){if(t.length)for(const o of t)o.classList.toggle(Fp,!n),o.setAttribute("aria-expanded",n)}static jQueryInterface(t){const n={};return typeof t=="string"&&/show|hide/.test(t)&&(n.toggle=!1),this.each(function(){const o=We.getOrCreateInstance(this,n);if(typeof t=="string"){if(typeof o[t]>"u")throw new TypeError(`No method named "${t}"`);o[t]()}})}}m.on(document,Pp,po,function(e){(e.target.tagName==="A"||e.delegateTarget&&e.delegateTarget.tagName==="A")&&e.preventDefault();for(const t of E.getMultipleElementsFromSelector(this))We.getOrCreateInstance(t,{toggle:!1}).toggle()});dt(We);const ri="dropdown",Vp="bs.dropdown",oe=`.${Vp}`,Lo=".data-api",zp="Escape",pi="Tab",qp="ArrowUp",ci="ArrowDown",Kp=2,Yp=`hide${oe}`,Xp=`hidden${oe}`,Qp=`show${oe}`,Zp=`shown${oe}`,Ms=`click${oe}${Lo}`,$s=`keydown${oe}${Lo}`,tc=`keyup${oe}${Lo}`,be="show",ec="dropup",nc="dropend",oc="dropstart",ic="dropup-center",sc="dropdown-center",Qt='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',lc=`${Qt}.${be}`,hn=".dropdown-menu",ac=".navbar",rc=".navbar-nav",pc=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",cc=pt()?"top-end":"top-start",uc=pt()?"top-start":"top-end",dc=pt()?"bottom-end":"bottom-start",mc=pt()?"bottom-start":"bottom-end",hc=pt()?"left-start":"right-start",vc=pt()?"right-start":"left-start",fc="top",bc="bottom",gc={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},_c={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class yt extends bt{constructor(t,n){super(t,n),this._popper=null,this._parent=this._element.parentNode,this._menu=E.next(this._element,hn)[0]||E.prev(this._element,hn)[0]||E.findOne(hn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return gc}static get DefaultType(){return _c}static get NAME(){return ri}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Ut(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!m.trigger(this._element,Qp,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(rc))for(const o of[].concat(...document.body.children))m.on(o,"mouseover",bn);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(be),this._element.classList.add(be),m.trigger(this._element,Zp,t)}}hide(){if(Ut(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!m.trigger(this._element,Yp,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))m.off(o,"mouseover",bn);this._popper&&this._popper.destroy(),this._menu.classList.remove(be),this._element.classList.remove(be),this._element.setAttribute("aria-expanded","false"),Nt.removeDataAttribute(this._menu,"popper"),m.trigger(this._element,Xp,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!Dt(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${ri.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof fs>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:Dt(this._config.reference)?t=Ht(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const n=this._getPopperConfig();this._popper=Co(t,this._menu,n)}_isShown(){return this._menu.classList.contains(be)}_getPlacement(){const t=this._parent;if(t.classList.contains(nc))return hc;if(t.classList.contains(oc))return vc;if(t.classList.contains(ic))return fc;if(t.classList.contains(sc))return bc;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(ec)?n?uc:cc:n?mc:dc}_detectNavbar(){return this._element.closest(ac)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Nt.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...et(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:n}){const o=E.find(pc,this._menu).filter(i=>xe(i));o.length&&Do(o,n,t===ci,!o.includes(n)).focus()}static jQueryInterface(t){return this.each(function(){const n=yt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}static clearMenus(t){if(t.button===Kp||t.type==="keyup"&&t.key!==pi)return;const n=E.find(lc);for(const o of n){const i=yt.getInstance(o);if(!i||i._config.autoClose===!1)continue;const s=t.composedPath(),l=s.includes(i._menu);if(s.includes(i._element)||i._config.autoClose==="inside"&&!l||i._config.autoClose==="outside"&&l||i._menu.contains(t.target)&&(t.type==="keyup"&&t.key===pi||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:i._element};t.type==="click"&&(a.clickEvent=t),i._completeHide(a)}}static dataApiKeydownHandler(t){const n=/input|textarea/i.test(t.target.tagName),o=t.key===zp,i=[qp,ci].includes(t.key);if(!i&&!o||n&&!o)return;t.preventDefault();const s=this.matches(Qt)?this:E.prev(this,Qt)[0]||E.next(this,Qt)[0]||E.findOne(Qt,t.delegateTarget.parentNode),l=yt.getOrCreateInstance(s);if(i){t.stopPropagation(),l.show(),l._selectMenuItem(t);return}l._isShown()&&(t.stopPropagation(),l.hide(),s.focus())}}m.on(document,$s,Qt,yt.dataApiKeydownHandler);m.on(document,$s,hn,yt.dataApiKeydownHandler);m.on(document,Ms,yt.clearMenus);m.on(document,tc,yt.clearMenus);m.on(document,Ms,Qt,function(e){e.preventDefault(),yt.getOrCreateInstance(this).toggle()});dt(yt);const Is="backdrop",Ec="fade",ui="show",di=`mousedown.bs.${Is}`,yc={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},wc={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Rs extends ze{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return yc}static get DefaultType(){return wc}static get NAME(){return Is}show(t){if(!this._config.isVisible){et(t);return}this._append();const n=this._getElement();this._config.isAnimated&&Ve(n),n.classList.add(ui),this._emulateAnimation(()=>{et(t)})}hide(t){if(!this._config.isVisible){et(t);return}this._getElement().classList.remove(ui),this._emulateAnimation(()=>{this.dispose(),et(t)})}dispose(){this._isAppended&&(m.off(this._element,di),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Ec),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=Ht(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),m.on(t,di,()=>{et(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){ys(t,this._getElement(),this._config.isAnimated)}}const Sc="focustrap",Ac="bs.focustrap",_n=`.${Ac}`,Tc=`focusin${_n}`,Oc=`keydown.tab${_n}`,xc="Tab",kc="forward",mi="backward",Cc={autofocus:!0,trapElement:null},Dc={autofocus:"boolean",trapElement:"element"};class Ps extends ze{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Cc}static get DefaultType(){return Dc}static get NAME(){return Sc}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),m.off(document,_n),m.on(document,Tc,t=>this._handleFocusin(t)),m.on(document,Oc,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,m.off(document,_n))}_handleFocusin(t){const{trapElement:n}=this._config;if(t.target===document||t.target===n||n.contains(t.target))return;const o=E.focusableChildren(n);o.length===0?n.focus():this._lastTabNavDirection===mi?o[o.length-1].focus():o[0].focus()}_handleKeydown(t){t.key===xc&&(this._lastTabNavDirection=t.shiftKey?mi:kc)}}const hi=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",vi=".sticky-top",nn="padding-right",fi="margin-right";class co{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,nn,n=>n+t),this._setElementAttributes(hi,nn,n=>n+t),this._setElementAttributes(vi,fi,n=>n-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,nn),this._resetElementAttributes(hi,nn),this._resetElementAttributes(vi,fi)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,n,o){const i=this.getWidth(),s=l=>{if(l!==this._element&&window.innerWidth>l.clientWidth+i)return;this._saveInitialAttribute(l,n);const a=window.getComputedStyle(l).getPropertyValue(n);l.style.setProperty(n,`${o(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,s)}_saveInitialAttribute(t,n){const o=t.style.getPropertyValue(n);o&&Nt.setDataAttribute(t,n,o)}_resetElementAttributes(t,n){const o=i=>{const s=Nt.getDataAttribute(i,n);if(s===null){i.style.removeProperty(n);return}Nt.removeDataAttribute(i,n),i.style.setProperty(n,s)};this._applyManipulationCallback(t,o)}_applyManipulationCallback(t,n){if(Dt(t)){n(t);return}for(const o of E.find(t,this._element))n(o)}}const Nc="modal",Lc="bs.modal",ct=`.${Lc}`,Mc=".data-api",$c="Escape",Ic=`hide${ct}`,Rc=`hidePrevented${ct}`,Fs=`hidden${ct}`,Bs=`show${ct}`,Pc=`shown${ct}`,Fc=`resize${ct}`,Bc=`click.dismiss${ct}`,Hc=`mousedown.dismiss${ct}`,Uc=`keydown.dismiss${ct}`,Gc=`click${ct}${Mc}`,bi="modal-open",jc="fade",gi="show",Un="modal-static",Wc=".modal.show",Jc=".modal-dialog",Vc=".modal-body",zc='[data-bs-toggle="modal"]',qc={backdrop:!0,focus:!0,keyboard:!0},Kc={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ae extends bt{constructor(t,n){super(t,n),this._dialog=E.findOne(Jc,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new co,this._addEventListeners()}static get Default(){return qc}static get DefaultType(){return Kc}static get NAME(){return Nc}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||m.trigger(this._element,Bs,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(bi),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||m.trigger(this._element,Ic).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(gi),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){m.off(window,ct),m.off(this._dialog,ct),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Rs({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ps({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=E.findOne(Vc,this._dialog);n&&(n.scrollTop=0),Ve(this._element),this._element.classList.add(gi);const o=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,m.trigger(this._element,Pc,{relatedTarget:t})};this._queueCallback(o,this._dialog,this._isAnimated())}_addEventListeners(){m.on(this._element,Uc,t=>{if(t.key===$c){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),m.on(window,Fc,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),m.on(this._element,Hc,t=>{m.one(this._element,Bc,n=>{if(!(this._element!==t.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(bi),this._resetAdjustments(),this._scrollBar.reset(),m.trigger(this._element,Fs)})}_isAnimated(){return this._element.classList.contains(jc)}_triggerBackdropTransition(){if(m.trigger(this._element,Rc).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,o=this._element.style.overflowY;o==="hidden"||this._element.classList.contains(Un)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(Un),this._queueCallback(()=>{this._element.classList.remove(Un),this._queueCallback(()=>{this._element.style.overflowY=o},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),o=n>0;if(o&&!t){const i=pt()?"paddingLeft":"paddingRight";this._element.style[i]=`${n}px`}if(!o&&t){const i=pt()?"paddingRight":"paddingLeft";this._element.style[i]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,n){return this.each(function(){const o=Ae.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof o[t]>"u")throw new TypeError(`No method named "${t}"`);o[t](n)}})}}m.on(document,Gc,zc,function(e){const t=E.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),m.one(t,Bs,i=>{i.defaultPrevented||m.one(t,Fs,()=>{xe(this)&&this.focus()})});const n=E.findOne(Wc);n&&Ae.getInstance(n).hide(),Ae.getOrCreateInstance(t).toggle(this)});An(Ae);dt(Ae);const Yc="offcanvas",Xc="bs.offcanvas",Mt=`.${Xc}`,Hs=".data-api",Qc=`load${Mt}${Hs}`,Zc="Escape",_i="show",Ei="showing",yi="hiding",tu="offcanvas-backdrop",Us=".offcanvas.show",eu=`show${Mt}`,nu=`shown${Mt}`,ou=`hide${Mt}`,wi=`hidePrevented${Mt}`,Gs=`hidden${Mt}`,iu=`resize${Mt}`,su=`click${Mt}${Hs}`,lu=`keydown.dismiss${Mt}`,au='[data-bs-toggle="offcanvas"]',ru={backdrop:!0,keyboard:!0,scroll:!1},pu={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Gt extends bt{constructor(t,n){super(t,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return ru}static get DefaultType(){return pu}static get NAME(){return Yc}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||m.trigger(this._element,eu,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new co().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ei);const o=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(_i),this._element.classList.remove(Ei),m.trigger(this._element,nu,{relatedTarget:t})};this._queueCallback(o,this._element,!0)}hide(){if(!this._isShown||m.trigger(this._element,ou).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(yi),this._backdrop.hide();const n=()=>{this._element.classList.remove(_i,yi),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new co().reset(),m.trigger(this._element,Gs)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){m.trigger(this._element,wi);return}this.hide()},n=!!this._config.backdrop;return new Rs({className:tu,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?t:null})}_initializeFocusTrap(){return new Ps({trapElement:this._element})}_addEventListeners(){m.on(this._element,lu,t=>{if(t.key===Zc){if(this._config.keyboard){this.hide();return}m.trigger(this._element,wi)}})}static jQueryInterface(t){return this.each(function(){const n=Gt.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}m.on(document,su,au,function(e){const t=E.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),Ut(this))return;m.one(t,Gs,()=>{xe(this)&&this.focus()});const n=E.findOne(Us);n&&n!==t&&Gt.getInstance(n).hide(),Gt.getOrCreateInstance(t).toggle(this)});m.on(window,Qc,()=>{for(const e of E.find(Us))Gt.getOrCreateInstance(e).show()});m.on(window,iu,()=>{for(const e of E.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(e).position!=="fixed"&&Gt.getOrCreateInstance(e).hide()});An(Gt);dt(Gt);const cu=/^aria-[\w-]*$/i,js={"*":["class","dir","id","lang","role",cu],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},uu=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),du=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,mu=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?uu.has(n)?!!du.test(e.nodeValue):!0:t.filter(o=>o instanceof RegExp).some(o=>o.test(n))};function hu(e,t,n){if(!e.length)return e;if(n&&typeof n=="function")return n(e);const i=new window.DOMParser().parseFromString(e,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const l of s){const a=l.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){l.remove();continue}const p=[].concat(...l.attributes),u=[].concat(t["*"]||[],t[a]||[]);for(const c of p)mu(c,u)||l.removeAttribute(c.nodeName)}return i.body.innerHTML}const vu="TemplateFactory",fu={allowList:js,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},bu={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},gu={entry:"(string|element|function|null)",selector:"(string|element)"};class _u extends ze{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return fu}static get DefaultType(){return bu}static get NAME(){return vu}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[i,s]of Object.entries(this._config.content))this._setContent(t,s,i);const n=t.children[0],o=this._resolvePossibleFunction(this._config.extraClass);return o&&n.classList.add(...o.split(" ")),n}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[n,o]of Object.entries(t))super._typeCheckConfig({selector:n,entry:o},gu)}_setContent(t,n,o){const i=E.findOne(o,t);if(i){if(n=this._resolvePossibleFunction(n),!n){i.remove();return}if(Dt(n)){this._putElementInTemplate(Ht(n),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(n);return}i.textContent=n}}_maybeSanitize(t){return this._config.sanitize?hu(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return et(t,[this])}_putElementInTemplate(t,n){if(this._config.html){n.innerHTML="",n.append(t);return}n.textContent=t.textContent}}const Eu="tooltip",yu=new Set(["sanitize","allowList","sanitizeFn"]),Gn="fade",wu="modal",on="show",Su=".tooltip-inner",Si=`.${wu}`,Ai="hide.bs.modal",Fe="hover",jn="focus",Au="click",Tu="manual",Ou="hide",xu="hidden",ku="show",Cu="shown",Du="inserted",Nu="click",Lu="focusin",Mu="focusout",$u="mouseenter",Iu="mouseleave",Ru={AUTO:"auto",TOP:"top",RIGHT:pt()?"left":"right",BOTTOM:"bottom",LEFT:pt()?"right":"left"},Pu={allowList:js,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Fu={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Ce extends bt{constructor(t,n){if(typeof fs>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Pu}static get DefaultType(){return Fu}static get NAME(){return Eu}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),m.off(this._element.closest(Si),Ai,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=m.trigger(this._element,this.constructor.eventName(ku)),o=(_s(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!o)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),m.trigger(this._element,this.constructor.eventName(Du))),this._popper=this._createPopper(i),i.classList.add(on),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))m.on(a,"mouseover",bn);const l=()=>{m.trigger(this._element,this.constructor.eventName(Cu)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(l,this.tip,this._isAnimated())}hide(){if(!this._isShown()||m.trigger(this._element,this.constructor.eventName(Ou)).defaultPrevented)return;if(this._getTipElement().classList.remove(on),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))m.off(i,"mouseover",bn);this._activeTrigger[Au]=!1,this._activeTrigger[jn]=!1,this._activeTrigger[Fe]=!1,this._isHovered=null;const o=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),m.trigger(this._element,this.constructor.eventName(xu)))};this._queueCallback(o,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const n=this._getTemplateFactory(t).toHtml();if(!n)return null;n.classList.remove(Gn,on),n.classList.add(`bs-${this.constructor.NAME}-auto`);const o=Ar(this.constructor.NAME).toString();return n.setAttribute("id",o),this._isAnimated()&&n.classList.add(Gn),n}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new _u({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Su]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Gn)}_isShown(){return this.tip&&this.tip.classList.contains(on)}_createPopper(t){const n=et(this._config.placement,[this,t,this._element]),o=Ru[n.toUpperCase()];return Co(this._element,t,this._getPopperConfig(o))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_resolvePossibleFunction(t){return et(t,[this._element])}_getPopperConfig(t){const n={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:o=>{this._getTipElement().setAttribute("data-popper-placement",o.state.placement)}}]};return{...n,...et(this._config.popperConfig,[n])}}_setListeners(){const t=this._config.trigger.split(" ");for(const n of t)if(n==="click")m.on(this._element,this.constructor.eventName(Nu),this._config.selector,o=>{this._initializeOnDelegatedTarget(o).toggle()});else if(n!==Tu){const o=n===Fe?this.constructor.eventName($u):this.constructor.eventName(Lu),i=n===Fe?this.constructor.eventName(Iu):this.constructor.eventName(Mu);m.on(this._element,o,this._config.selector,s=>{const l=this._initializeOnDelegatedTarget(s);l._activeTrigger[s.type==="focusin"?jn:Fe]=!0,l._enter()}),m.on(this._element,i,this._config.selector,s=>{const l=this._initializeOnDelegatedTarget(s);l._activeTrigger[s.type==="focusout"?jn:Fe]=l._element.contains(s.relatedTarget),l._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},m.on(this._element.closest(Si),Ai,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,n){clearTimeout(this._timeout),this._timeout=setTimeout(t,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const n=Nt.getDataAttributes(this._element);for(const o of Object.keys(n))yu.has(o)&&delete n[o];return t={...n,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:Ht(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[n,o]of Object.entries(this._config))this.constructor.Default[n]!==o&&(t[n]=o);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const n=Ce.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}dt(Ce);const Bu="popover",Hu=".popover-header",Uu=".popover-body",Gu={...Ce.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},ju={...Ce.DefaultType,content:"(null|string|element|function)"};class Mo extends Ce{static get Default(){return Gu}static get DefaultType(){return ju}static get NAME(){return Bu}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Hu]:this._getTitle(),[Uu]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const n=Mo.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}dt(Mo);const Wu="scrollspy",Ju="bs.scrollspy",$o=`.${Ju}`,Vu=".data-api",zu=`activate${$o}`,Ti=`click${$o}`,qu=`load${$o}${Vu}`,Ku="dropdown-item",me="active",Yu='[data-bs-spy="scroll"]',Wn="[href]",Xu=".nav, .list-group",Oi=".nav-link",Qu=".nav-item",Zu=".list-group-item",td=`${Oi}, ${Qu} > ${Oi}, ${Zu}`,ed=".dropdown",nd=".dropdown-toggle",od={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},id={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class xn extends bt{constructor(t,n){super(t,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return od}static get DefaultType(){return id}static get NAME(){return Wu}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=Ht(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(n=>Number.parseFloat(n))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(m.off(this._config.target,Ti),m.on(this._config.target,Ti,Wn,t=>{const n=this._observableSections.get(t.target.hash);if(n){t.preventDefault();const o=this._rootElement||window,i=n.offsetTop-this._element.offsetTop;if(o.scrollTo){o.scrollTo({top:i,behavior:"smooth"});return}o.scrollTop=i}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),t)}_observerCallback(t){const n=l=>this._targetLinks.get(`#${l.target.id}`),o=l=>{this._previousScrollData.visibleEntryTop=l.target.offsetTop,this._process(n(l))},i=(this._rootElement||document.documentElement).scrollTop,s=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const l of t){if(!l.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(l));continue}const a=l.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&a){if(o(l),!i)return;continue}!s&&!a&&o(l)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=E.find(Wn,this._config.target);for(const n of t){if(!n.hash||Ut(n))continue;const o=E.findOne(decodeURI(n.hash),this._element);xe(o)&&(this._targetLinks.set(decodeURI(n.hash),n),this._observableSections.set(n.hash,o))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(me),this._activateParents(t),m.trigger(this._element,zu,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(Ku)){E.findOne(nd,t.closest(ed)).classList.add(me);return}for(const n of E.parents(t,Xu))for(const o of E.prev(n,td))o.classList.add(me)}_clearActiveClass(t){t.classList.remove(me);const n=E.find(`${Wn}.${me}`,t);for(const o of n)o.classList.remove(me)}static jQueryInterface(t){return this.each(function(){const n=xn.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}m.on(window,qu,()=>{for(const e of E.find(Yu))xn.getOrCreateInstance(e)});dt(xn);const sd="tab",ld="bs.tab",ie=`.${ld}`,ad=`hide${ie}`,rd=`hidden${ie}`,pd=`show${ie}`,cd=`shown${ie}`,ud=`click${ie}`,dd=`keydown${ie}`,md=`load${ie}`,hd="ArrowLeft",xi="ArrowRight",vd="ArrowUp",ki="ArrowDown",Jn="Home",Ci="End",Zt="active",Di="fade",Vn="show",fd="dropdown",Ws=".dropdown-toggle",bd=".dropdown-menu",zn=`:not(${Ws})`,gd='.list-group, .nav, [role="tablist"]',_d=".nav-item, .list-group-item",Ed=`.nav-link${zn}, .list-group-item${zn}, [role="tab"]${zn}`,Js='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',qn=`${Ed}, ${Js}`,yd=`.${Zt}[data-bs-toggle="tab"], .${Zt}[data-bs-toggle="pill"], .${Zt}[data-bs-toggle="list"]`;class Te extends bt{constructor(t){super(t),this._parent=this._element.closest(gd),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),m.on(this._element,dd,n=>this._keydown(n)))}static get NAME(){return sd}show(){const t=this._element;if(this._elemIsActive(t))return;const n=this._getActiveElem(),o=n?m.trigger(n,ad,{relatedTarget:t}):null;m.trigger(t,pd,{relatedTarget:n}).defaultPrevented||o&&o.defaultPrevented||(this._deactivate(n,t),this._activate(t,n))}_activate(t,n){if(!t)return;t.classList.add(Zt),this._activate(E.getElementFromSelector(t));const o=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(Vn);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),m.trigger(t,cd,{relatedTarget:n})};this._queueCallback(o,t,t.classList.contains(Di))}_deactivate(t,n){if(!t)return;t.classList.remove(Zt),t.blur(),this._deactivate(E.getElementFromSelector(t));const o=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(Vn);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),m.trigger(t,rd,{relatedTarget:n})};this._queueCallback(o,t,t.classList.contains(Di))}_keydown(t){if(![hd,xi,vd,ki,Jn,Ci].includes(t.key))return;t.stopPropagation(),t.preventDefault();const n=this._getChildren().filter(i=>!Ut(i));let o;if([Jn,Ci].includes(t.key))o=n[t.key===Jn?0:n.length-1];else{const i=[xi,ki].includes(t.key);o=Do(n,t.target,i,!0)}o&&(o.focus({preventScroll:!0}),Te.getOrCreateInstance(o).show())}_getChildren(){return E.find(qn,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,n){this._setAttributeIfNotExists(t,"role","tablist");for(const o of n)this._setInitialAttributesOnChild(o)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const n=this._elemIsActive(t),o=this._getOuterElement(t);t.setAttribute("aria-selected",n),o!==t&&this._setAttributeIfNotExists(o,"role","presentation"),n||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const n=E.getElementFromSelector(t);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,n){const o=this._getOuterElement(t);if(!o.classList.contains(fd))return;const i=(s,l)=>{const a=E.findOne(s,o);a&&a.classList.toggle(l,n)};i(Ws,Zt),i(bd,Vn),o.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(t,n,o){t.hasAttribute(n)||t.setAttribute(n,o)}_elemIsActive(t){return t.classList.contains(Zt)}_getInnerElement(t){return t.matches(qn)?t:E.findOne(qn,t)}_getOuterElement(t){return t.closest(_d)||t}static jQueryInterface(t){return this.each(function(){const n=Te.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}m.on(document,ud,Js,function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),!Ut(this)&&Te.getOrCreateInstance(this).show()});m.on(window,md,()=>{for(const e of E.find(yd))Te.getOrCreateInstance(e)});dt(Te);const wd="toast",Sd="bs.toast",Jt=`.${Sd}`,Ad=`mouseover${Jt}`,Td=`mouseout${Jt}`,Od=`focusin${Jt}`,xd=`focusout${Jt}`,kd=`hide${Jt}`,Cd=`hidden${Jt}`,Dd=`show${Jt}`,Nd=`shown${Jt}`,Ld="fade",Ni="hide",sn="show",ln="showing",Md={animation:"boolean",autohide:"boolean",delay:"number"},$d={animation:!0,autohide:!0,delay:5e3};class kn extends bt{constructor(t,n){super(t,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return $d}static get DefaultType(){return Md}static get NAME(){return wd}show(){if(m.trigger(this._element,Dd).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Ld);const n=()=>{this._element.classList.remove(ln),m.trigger(this._element,Nd),this._maybeScheduleHide()};this._element.classList.remove(Ni),Ve(this._element),this._element.classList.add(sn,ln),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||m.trigger(this._element,kd).defaultPrevented)return;const n=()=>{this._element.classList.add(Ni),this._element.classList.remove(ln,sn),m.trigger(this._element,Cd)};this._element.classList.add(ln),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(sn),super.dispose()}isShown(){return this._element.classList.contains(sn)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,n){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const o=t.relatedTarget;this._element===o||this._element.contains(o)||this._maybeScheduleHide()}_setListeners(){m.on(this._element,Ad,t=>this._onInteraction(t,!0)),m.on(this._element,Td,t=>this._onInteraction(t,!1)),m.on(this._element,Od,t=>this._onInteraction(t,!0)),m.on(this._element,xd,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const n=kn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}An(kn);dt(kn);/*! @license DOMPurify 3.0.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.8/LICENSE */const{entries:Vs,setPrototypeOf:Li,isFrozen:Id,getPrototypeOf:Rd,getOwnPropertyDescriptor:Io}=Object;let{freeze:X,seal:ft,create:zs}=Object,{apply:uo,construct:mo}=typeof Reflect<"u"&&Reflect;X||(X=function(t){return t});ft||(ft=function(t){return t});uo||(uo=function(t,n,o){return t.apply(n,o)});mo||(mo=function(t,n){return new t(...n)});const an=ut(Array.prototype.forEach),Mi=ut(Array.prototype.pop),Be=ut(Array.prototype.push),vn=ut(String.prototype.toLowerCase),Kn=ut(String.prototype.toString),Pd=ut(String.prototype.match),He=ut(String.prototype.replace),Fd=ut(String.prototype.indexOf),Bd=ut(String.prototype.trim),nt=ut(RegExp.prototype.test),Ue=Hd(TypeError);function ut(e){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return uo(e,t,o)}}function Hd(e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return mo(e,n)}}function x(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:vn;Li&&Li(e,null);let o=t.length;for(;o--;){let i=t[o];if(typeof i=="string"){const s=n(i);s!==i&&(Id(t)||(t[o]=s),i=s)}e[i]=!0}return e}function Ud(e){for(let t=0;t<e.length;t++)Io(e,t)===void 0&&(e[t]=null);return e}function Xt(e){const t=zs(null);for(const[n,o]of Vs(e))Io(e,n)!==void 0&&(Array.isArray(o)?t[n]=Ud(o):o&&typeof o=="object"&&o.constructor===Object?t[n]=Xt(o):t[n]=o);return t}function rn(e,t){for(;e!==null;){const o=Io(e,t);if(o){if(o.get)return ut(o.get);if(typeof o.value=="function")return ut(o.value)}e=Rd(e)}function n(o){return console.warn("fallback value for",o),null}return n}const $i=X(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Yn=X(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Xn=X(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Gd=X(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Qn=X(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),jd=X(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ii=X(["#text"]),Ri=X(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Zn=X(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Pi=X(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),pn=X(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Wd=ft(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Jd=ft(/<%[\w\W]*|[\w\W]*%>/gm),Vd=ft(/\${[\w\W]*}/gm),zd=ft(/^data-[\-\w.\u00B7-\uFFFF]/),qd=ft(/^aria-[\-\w]+$/),qs=ft(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Kd=ft(/^(?:\w+script|data):/i),Yd=ft(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ks=ft(/^html$/i);var Fi=Object.freeze({__proto__:null,MUSTACHE_EXPR:Wd,ERB_EXPR:Jd,TMPLIT_EXPR:Vd,DATA_ATTR:zd,ARIA_ATTR:qd,IS_ALLOWED_URI:qs,IS_SCRIPT_OR_DATA:Kd,ATTR_WHITESPACE:Yd,DOCTYPE_NAME:Ks});const Xd=function(){return typeof window>"u"?null:window},Qd=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let o=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(o=n.getAttribute(i));const s="dompurify"+(o?"#"+o:"");try{return t.createPolicy(s,{createHTML(l){return l},createScriptURL(l){return l}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}};function Ys(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Xd();const t=g=>Ys(g);if(t.version="3.0.8",t.removed=[],!e||!e.document||e.document.nodeType!==9)return t.isSupported=!1,t;let{document:n}=e;const o=n,i=o.currentScript,{DocumentFragment:s,HTMLTemplateElement:l,Node:a,Element:p,NodeFilter:u,NamedNodeMap:c=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:_,DOMParser:w,trustedTypes:b}=e,k=p.prototype,S=rn(k,"cloneNode"),O=rn(k,"nextSibling"),D=rn(k,"childNodes"),M=rn(k,"parentNode");if(typeof l=="function"){const g=n.createElement("template");g.content&&g.content.ownerDocument&&(n=g.content.ownerDocument)}let T,A="";const{implementation:C,createNodeIterator:N,createDocumentFragment:P,getElementsByTagName:G}=n,{importNode:B}=o;let L={};t.isSupported=typeof Vs=="function"&&typeof M=="function"&&C&&C.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:H,ERB_EXPR:z,TMPLIT_EXPR:j,DATA_ATTR:At,ARIA_ATTR:Tt,IS_SCRIPT_OR_DATA:q,ATTR_WHITESPACE:Q}=Fi;let{IS_ALLOWED_URI:Vt}=Fi,$=null;const zt=x({},[...$i,...Yn,...Xn,...Qn,...Ii]);let F=null;const $t=x({},[...Ri,...Zn,...Pi,...pn]);let I=Object.seal(zs(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),lt=null,at=null,It=!0,Rt=!0,gt=!1,se=!0,Pt=!1,mt=!1,De=!1,le=!1,Ft=!1,ae=!1,qt=!1,Ne=!0,Ye=!1;const Cn="user-content-";let ht=!0,_t=!1,Ot={},xt=null;const re=x({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Le=null;const Me=x({},["audio","video","img","source","image","track"]);let pe=null;const $e=x({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Xe="http://www.w3.org/1998/Math/MathML",Qe="http://www.w3.org/2000/svg",kt="http://www.w3.org/1999/xhtml";let ce=kt,Dn=!1,Nn=null;const vl=x({},[Xe,Qe,kt],Kn);let Ie=null;const fl=["application/xhtml+xml","text/html"],bl="text/html";let W=null,ue=null;const gl=n.createElement("form"),Ro=function(r){return r instanceof RegExp||r instanceof Function},Ln=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(ue&&ue===r)){if((!r||typeof r!="object")&&(r={}),r=Xt(r),Ie=fl.indexOf(r.PARSER_MEDIA_TYPE)===-1?bl:r.PARSER_MEDIA_TYPE,W=Ie==="application/xhtml+xml"?Kn:vn,$="ALLOWED_TAGS"in r?x({},r.ALLOWED_TAGS,W):zt,F="ALLOWED_ATTR"in r?x({},r.ALLOWED_ATTR,W):$t,Nn="ALLOWED_NAMESPACES"in r?x({},r.ALLOWED_NAMESPACES,Kn):vl,pe="ADD_URI_SAFE_ATTR"in r?x(Xt($e),r.ADD_URI_SAFE_ATTR,W):$e,Le="ADD_DATA_URI_TAGS"in r?x(Xt(Me),r.ADD_DATA_URI_TAGS,W):Me,xt="FORBID_CONTENTS"in r?x({},r.FORBID_CONTENTS,W):re,lt="FORBID_TAGS"in r?x({},r.FORBID_TAGS,W):{},at="FORBID_ATTR"in r?x({},r.FORBID_ATTR,W):{},Ot="USE_PROFILES"in r?r.USE_PROFILES:!1,It=r.ALLOW_ARIA_ATTR!==!1,Rt=r.ALLOW_DATA_ATTR!==!1,gt=r.ALLOW_UNKNOWN_PROTOCOLS||!1,se=r.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Pt=r.SAFE_FOR_TEMPLATES||!1,mt=r.WHOLE_DOCUMENT||!1,Ft=r.RETURN_DOM||!1,ae=r.RETURN_DOM_FRAGMENT||!1,qt=r.RETURN_TRUSTED_TYPE||!1,le=r.FORCE_BODY||!1,Ne=r.SANITIZE_DOM!==!1,Ye=r.SANITIZE_NAMED_PROPS||!1,ht=r.KEEP_CONTENT!==!1,_t=r.IN_PLACE||!1,Vt=r.ALLOWED_URI_REGEXP||qs,ce=r.NAMESPACE||kt,I=r.CUSTOM_ELEMENT_HANDLING||{},r.CUSTOM_ELEMENT_HANDLING&&Ro(r.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(I.tagNameCheck=r.CUSTOM_ELEMENT_HANDLING.tagNameCheck),r.CUSTOM_ELEMENT_HANDLING&&Ro(r.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(I.attributeNameCheck=r.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),r.CUSTOM_ELEMENT_HANDLING&&typeof r.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(I.allowCustomizedBuiltInElements=r.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Pt&&(Rt=!1),ae&&(Ft=!0),Ot&&($=x({},Ii),F=[],Ot.html===!0&&(x($,$i),x(F,Ri)),Ot.svg===!0&&(x($,Yn),x(F,Zn),x(F,pn)),Ot.svgFilters===!0&&(x($,Xn),x(F,Zn),x(F,pn)),Ot.mathMl===!0&&(x($,Qn),x(F,Pi),x(F,pn))),r.ADD_TAGS&&($===zt&&($=Xt($)),x($,r.ADD_TAGS,W)),r.ADD_ATTR&&(F===$t&&(F=Xt(F)),x(F,r.ADD_ATTR,W)),r.ADD_URI_SAFE_ATTR&&x(pe,r.ADD_URI_SAFE_ATTR,W),r.FORBID_CONTENTS&&(xt===re&&(xt=Xt(xt)),x(xt,r.FORBID_CONTENTS,W)),ht&&($["#text"]=!0),mt&&x($,["html","head","body"]),$.table&&(x($,["tbody"]),delete lt.tbody),r.TRUSTED_TYPES_POLICY){if(typeof r.TRUSTED_TYPES_POLICY.createHTML!="function")throw Ue('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof r.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Ue('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');T=r.TRUSTED_TYPES_POLICY,A=T.createHTML("")}else T===void 0&&(T=Qd(b,i)),T!==null&&typeof A=="string"&&(A=T.createHTML(""));X&&X(r),ue=r}},Po=x({},["mi","mo","mn","ms","mtext"]),Fo=x({},["foreignobject","desc","title","annotation-xml"]),_l=x({},["title","style","font","a","script"]),Bo=x({},[...Yn,...Xn,...Gd]),Ho=x({},[...Qn,...jd]),El=function(r){let v=M(r);(!v||!v.tagName)&&(v={namespaceURI:ce,tagName:"template"});const f=vn(r.tagName),R=vn(v.tagName);return Nn[r.namespaceURI]?r.namespaceURI===Qe?v.namespaceURI===kt?f==="svg":v.namespaceURI===Xe?f==="svg"&&(R==="annotation-xml"||Po[R]):!!Bo[f]:r.namespaceURI===Xe?v.namespaceURI===kt?f==="math":v.namespaceURI===Qe?f==="math"&&Fo[R]:!!Ho[f]:r.namespaceURI===kt?v.namespaceURI===Qe&&!Fo[R]||v.namespaceURI===Xe&&!Po[R]?!1:!Ho[f]&&(_l[f]||!Bo[f]):!!(Ie==="application/xhtml+xml"&&Nn[r.namespaceURI]):!1},Kt=function(r){Be(t.removed,{element:r});try{r.parentNode.removeChild(r)}catch{r.remove()}},Mn=function(r,v){try{Be(t.removed,{attribute:v.getAttributeNode(r),from:v})}catch{Be(t.removed,{attribute:null,from:v})}if(v.removeAttribute(r),r==="is"&&!F[r])if(Ft||ae)try{Kt(v)}catch{}else try{v.setAttribute(r,"")}catch{}},Uo=function(r){let v=null,f=null;if(le)r="<remove></remove>"+r;else{const V=Pd(r,/^[\r\n\t ]+/);f=V&&V[0]}Ie==="application/xhtml+xml"&&ce===kt&&(r='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+r+"</body></html>");const R=T?T.createHTML(r):r;if(ce===kt)try{v=new w().parseFromString(R,Ie)}catch{}if(!v||!v.documentElement){v=C.createDocument(ce,"template",null);try{v.documentElement.innerHTML=Dn?A:R}catch{}}const J=v.body||v.documentElement;return r&&f&&J.insertBefore(n.createTextNode(f),J.childNodes[0]||null),ce===kt?G.call(v,mt?"html":"body")[0]:mt?v.documentElement:J},Go=function(r){return N.call(r.ownerDocument||r,r,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null)},yl=function(r){return r instanceof _&&(typeof r.nodeName!="string"||typeof r.textContent!="string"||typeof r.removeChild!="function"||!(r.attributes instanceof c)||typeof r.removeAttribute!="function"||typeof r.setAttribute!="function"||typeof r.namespaceURI!="string"||typeof r.insertBefore!="function"||typeof r.hasChildNodes!="function")},jo=function(r){return typeof a=="function"&&r instanceof a},Ct=function(r,v,f){L[r]&&an(L[r],R=>{R.call(t,v,f,ue)})},Wo=function(r){let v=null;if(Ct("beforeSanitizeElements",r,null),yl(r))return Kt(r),!0;const f=W(r.nodeName);if(Ct("uponSanitizeElement",r,{tagName:f,allowedTags:$}),r.hasChildNodes()&&!jo(r.firstElementChild)&&nt(/<[/\w]/g,r.innerHTML)&&nt(/<[/\w]/g,r.textContent))return Kt(r),!0;if(!$[f]||lt[f]){if(!lt[f]&&Vo(f)&&(I.tagNameCheck instanceof RegExp&&nt(I.tagNameCheck,f)||I.tagNameCheck instanceof Function&&I.tagNameCheck(f)))return!1;if(ht&&!xt[f]){const R=M(r)||r.parentNode,J=D(r)||r.childNodes;if(J&&R){const V=J.length;for(let Z=V-1;Z>=0;--Z)R.insertBefore(S(J[Z],!0),O(r))}}return Kt(r),!0}return r instanceof p&&!El(r)||(f==="noscript"||f==="noembed"||f==="noframes")&&nt(/<\/no(script|embed|frames)/i,r.innerHTML)?(Kt(r),!0):(Pt&&r.nodeType===3&&(v=r.textContent,an([H,z,j],R=>{v=He(v,R," ")}),r.textContent!==v&&(Be(t.removed,{element:r.cloneNode()}),r.textContent=v)),Ct("afterSanitizeElements",r,null),!1)},Jo=function(r,v,f){if(Ne&&(v==="id"||v==="name")&&(f in n||f in gl))return!1;if(!(Rt&&!at[v]&&nt(At,v))){if(!(It&&nt(Tt,v))){if(!F[v]||at[v]){if(!(Vo(r)&&(I.tagNameCheck instanceof RegExp&&nt(I.tagNameCheck,r)||I.tagNameCheck instanceof Function&&I.tagNameCheck(r))&&(I.attributeNameCheck instanceof RegExp&&nt(I.attributeNameCheck,v)||I.attributeNameCheck instanceof Function&&I.attributeNameCheck(v))||v==="is"&&I.allowCustomizedBuiltInElements&&(I.tagNameCheck instanceof RegExp&&nt(I.tagNameCheck,f)||I.tagNameCheck instanceof Function&&I.tagNameCheck(f))))return!1}else if(!pe[v]){if(!nt(Vt,He(f,Q,""))){if(!((v==="src"||v==="xlink:href"||v==="href")&&r!=="script"&&Fd(f,"data:")===0&&Le[r])){if(!(gt&&!nt(q,He(f,Q,"")))){if(f)return!1}}}}}}return!0},Vo=function(r){return r.indexOf("-")>0},zo=function(r){Ct("beforeSanitizeAttributes",r,null);const{attributes:v}=r;if(!v)return;const f={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:F};let R=v.length;for(;R--;){const J=v[R],{name:V,namespaceURI:Z,value:Yt}=J,Re=W(V);let tt=V==="value"?Yt:Bd(Yt);if(f.attrName=Re,f.attrValue=tt,f.keepAttr=!0,f.forceKeepAttr=void 0,Ct("uponSanitizeAttribute",r,f),tt=f.attrValue,f.forceKeepAttr||(Mn(V,r),!f.keepAttr))continue;if(!se&&nt(/\/>/i,tt)){Mn(V,r);continue}Pt&&an([H,z,j],Ko=>{tt=He(tt,Ko," ")});const qo=W(r.nodeName);if(Jo(qo,Re,tt)){if(Ye&&(Re==="id"||Re==="name")&&(Mn(V,r),tt=Cn+tt),T&&typeof b=="object"&&typeof b.getAttributeType=="function"&&!Z)switch(b.getAttributeType(qo,Re)){case"TrustedHTML":{tt=T.createHTML(tt);break}case"TrustedScriptURL":{tt=T.createScriptURL(tt);break}}try{Z?r.setAttributeNS(Z,V,tt):r.setAttribute(V,tt),Mi(t.removed)}catch{}}}Ct("afterSanitizeAttributes",r,null)},wl=function g(r){let v=null;const f=Go(r);for(Ct("beforeSanitizeShadowDOM",r,null);v=f.nextNode();)Ct("uponSanitizeShadowNode",v,null),!Wo(v)&&(v.content instanceof s&&g(v.content),zo(v));Ct("afterSanitizeShadowDOM",r,null)};return t.sanitize=function(g){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=null,f=null,R=null,J=null;if(Dn=!g,Dn&&(g="<!-->"),typeof g!="string"&&!jo(g))if(typeof g.toString=="function"){if(g=g.toString(),typeof g!="string")throw Ue("dirty is not a string, aborting")}else throw Ue("toString is not a function");if(!t.isSupported)return g;if(De||Ln(r),t.removed=[],typeof g=="string"&&(_t=!1),_t){if(g.nodeName){const Yt=W(g.nodeName);if(!$[Yt]||lt[Yt])throw Ue("root node is forbidden and cannot be sanitized in-place")}}else if(g instanceof a)v=Uo("<!---->"),f=v.ownerDocument.importNode(g,!0),f.nodeType===1&&f.nodeName==="BODY"||f.nodeName==="HTML"?v=f:v.appendChild(f);else{if(!Ft&&!Pt&&!mt&&g.indexOf("<")===-1)return T&&qt?T.createHTML(g):g;if(v=Uo(g),!v)return Ft?null:qt?A:""}v&&le&&Kt(v.firstChild);const V=Go(_t?g:v);for(;R=V.nextNode();)Wo(R)||(R.content instanceof s&&wl(R.content),zo(R));if(_t)return g;if(Ft){if(ae)for(J=P.call(v.ownerDocument);v.firstChild;)J.appendChild(v.firstChild);else J=v;return(F.shadowroot||F.shadowrootmode)&&(J=B.call(o,J,!0)),J}let Z=mt?v.outerHTML:v.innerHTML;return mt&&$["!doctype"]&&v.ownerDocument&&v.ownerDocument.doctype&&v.ownerDocument.doctype.name&&nt(Ks,v.ownerDocument.doctype.name)&&(Z="<!DOCTYPE "+v.ownerDocument.doctype.name+`>
`+Z),Pt&&an([H,z,j],Yt=>{Z=He(Z,Yt," ")}),T&&qt?T.createHTML(Z):Z},t.setConfig=function(){let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ln(g),De=!0},t.clearConfig=function(){ue=null,De=!1},t.isValidAttribute=function(g,r,v){ue||Ln({});const f=W(g),R=W(r);return Jo(f,R,v)},t.addHook=function(g,r){typeof r=="function"&&(L[g]=L[g]||[],Be(L[g],r))},t.removeHook=function(g){if(L[g])return Mi(L[g])},t.removeHooks=function(g){L[g]&&(L[g]=[])},t.removeAllHooks=function(){L={}},t}var wt=Ys(),Zd=Object.defineProperty,tm=(e,t,n)=>t in e?Zd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t,n)=>(tm(e,typeof t!="symbol"?t+"":t,n),n),em=class{constructor(e){y(this,"_distinctEvent"),y(this,"_boundedEvents",[]),this._distinctEvent=(e==null?void 0:e.distinctEvent)??!1}get boundedEvents(){return this._boundedEvents}dispose(){this.unbindAll(),this._boundedEvents=[]}bind(e,t,n,o,i=""){let s=Array.isArray(t)?t:[t];if(typeof(e==null?void 0:e.forEach)=="function")e.forEach(l=>{for(let a of s)(!this._distinctEvent||this._distinctEvent&&!this.hasBinding(l,a))&&(l.addEventListener(a,n,o),this._boundedEvents.push({element:l,eventName:a,listener:n,groupName:i}))});else for(let l of s)(!this._distinctEvent||this._distinctEvent&&!this.hasBinding(e,l))&&(e.addEventListener(l,n,o),this._boundedEvents.push({element:e,eventName:l,listener:n,groupName:i}))}hasBinding(e,t){return this._boundedEvents.some(n=>n.element===e&&(!t||n.eventName===t))}unbind(e,t,n){var o;if(e){let i=Array.isArray(e)?e:[e],s=Array.isArray(t)?t||"":[t||""];for(let l of i){n||(n=this._boundedEvents.find(a=>{if(a.element===l&&(!t||a.eventName===t))return a.listener}));for(let a of s)(o=l==null?void 0:l.removeEventListener)==null||o.call(l,a,n)}}}unbindAll(e){if(e){let t=Array.isArray(e)?e:[e];for(let n=this._boundedEvents.length-1;n>=0;--n){let o=this._boundedEvents[n];if(t.some(i=>i===o.groupName)){let{element:i,eventName:s,listener:l}=o;this.unbind(i,s,l),this._boundedEvents.splice(n,1)}}}else for(;this._boundedEvents.length>0;){let t=this._boundedEvents.pop(),{element:n,eventName:o,listener:i}=t;this.unbind(n,o,i)}}},Xs=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};Xs.locales={"en-US":{formatSelectAll(){return"[Select all]"},formatAllSelected(){return"All selected"},formatCountSelected(e,t){return`${e} of ${t} selected`},formatNoMatchesFound(){return"No matches found"},formatOkButton(){return"OK"}}};var Qs=Xs.locales,nm=50,om=4,Zs={name:"",placeholder:"",classes:"",classPrefix:"",data:void 0,locale:void 0,selectAll:!0,single:void 0,singleRadio:!1,multiple:!1,hideOptgroupCheckboxes:!1,multipleWidth:80,width:void 0,dropWidth:void 0,maxHeight:250,maxHeightUnit:"px",position:"bottom",displayValues:!1,displayTitle:!1,displayDelimiter:", ",minimumCountSelected:3,ellipsis:!1,isOpen:!1,keepOpen:!1,openOnHover:!1,container:null,filter:!1,filterGroup:!1,filterPlaceholder:"",filterAcceptOnEnter:!1,filterByDataLength:void 0,customFilter(e){let{text:t,label:n,search:o}=e;return(n||t||"").includes(o)},showClear:!1,autoAdjustDropHeight:!1,autoAdjustDropPosition:!1,autoAdjustDropWidthByTextSize:!1,adjustedHeightPadding:10,useSelectOptionLabel:!1,useSelectOptionLabelToHtml:!1,cssStyler:()=>null,styler:()=>!1,textTemplate:e=>e.innerHTML.trim(),labelTemplate:e=>e.label,onOpen:()=>!1,onClose:()=>!1,onCheckAll:()=>!1,onUncheckAll:()=>!1,onFocus:()=>!1,onBlur:()=>!1,onOptgroupClick:()=>!1,onBeforeClick:()=>!0,onClick:()=>!1,onFilter:()=>!1,onClear:()=>!1,onAfterCreate:()=>!1,onDestroy:()=>!1,onAfterDestroy:()=>!1,onDestroyed:()=>!1},im=["init","getOptions","refreshOptions","getSelects","setSelects","enable","disable","open","close","check","uncheck","checkAll","uncheckAll","checkInvert","focus","blur","refresh","destroy"];Object.assign(Zs,Qs["en-US"]);var sm={BLOCK_ROWS:nm,CLUSTER_BLOCKS:om,DEFAULTS:Zs,METHODS:im},vt=sm;function lm(e,t,n=!1){let o=Object.keys(e),i=Object.keys(t);if(n&&o.length!==i.length)return!1;for(let s of o)if(i.includes(s)&&e[s]!==t[s])return!1;return!0}function ho(e){let t=()=>{let i={};for(let s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=ho(e[s]));return i},n=()=>e.map(i=>ho(i)),o=Object.prototype.toString.call(e).slice(8,-1).toLowerCase();return o==="object"?t():o==="array"?n():e}function to(e){return e!=null&&e!==""}function am(e,t){return typeof e=="object"?Object.fromEntries(t?Object.entries(e).filter(([n,o])=>!to(o)&&!t.includes(n)||to(o)):Object.entries(e).filter(([n,o])=>to(o))):e}function rm(e){let t=0;return e.forEach((n,o)=>{n.type==="optgroup"?(n._key=`group_${o}`,n.visible=typeof n.visible>"u"?!0:n.visible,n.children.forEach((i,s)=>{i&&(i.visible=typeof(i==null?void 0:i.visible)>"u"?!0:i.visible,i.divider||(i._key=`option_${o}_${s}`,t+=1))})):(n.visible=typeof n.visible>"u"?!0:n.visible,n.divider||(n._key=`option_${o}`,t+=1))}),t}function cn(e,t,n){if(Array.isArray(e))for(let o of e){if(o[t]===n||o[t]===`${+o[t]}`&&+o[t]===n)return o;if(o.type==="optgroup"){for(let i of o.children)if(i&&(i[t]===n||i[t]===`${+i[t]}`&&+i[t]===n))return i}}}function pm(e){return e.replace(/(\b)(on[a-z]+)(\s*)=([^>]*)|javascript:([^>]*)[^>]*|(<\s*)(\/*)script([<>]*).*(<\s*)(\/*)script(>*)|(&lt;|&#60;)(\/*)(script|script defer)(.*)(&#62;|&gt;|&gt;">)/gi,"")}function eo(e){return Object.keys(e).forEach(t=>e[t]===void 0?delete e[t]:""),e}function cm(e){return e.replace(/[\W_]+(.)/g,(t,n)=>n.toUpperCase())}function he(e,t){if(typeof e!="string")return e;if(typeof t=="function")return t(e);if(typeof e.normalize=="function")return e.normalize("NFD").replace(/[\u0300-\u036F]/g,"");throw new Error("[Multiple-Select-Vanilla] `normalize()` function is not defined, you can optionally provide a custom parser via the `diacriticParser` option.")}function Bi(e){let t={};if(e){let n=e.replace(/\s/g,"").split(";");for(let o of n){let[i,s]=o.trim().split(":");i&&(t[cm(i)]=s.trim())}console.warn("[multiple-select-vanilla] Please note that `styler` is deprecated, please migrate to `cssStyler` when possible.")}return t}function no(e){let t=0,n=0,o=0,i=0,s=window.innerHeight??0,l=window.innerWidth??0,a=dm(),p=a.top,u=a.left,c=fo(e);if(c){let _=c.top??0,w=c.left??0;n=_-p,t=s-(_-p),o=w-u,i=l-(w-u)}return{top:n,bottom:t,left:o,right:i}}function U(e,t,n){let o=document.createElement(e);return t&&Object.keys(t).forEach(i=>{let s=t[i];typeof s=="object"?Object.assign(o[i],s):o[i]=t[i]}),n!=null&&n.appendChild&&n.appendChild(o),o}function tl(e,t,n){var s;let o="";(s=e.props)!=null&&s.innerHTML&&(o=e.props.innerHTML,delete e.props.innerHTML);let i=U(e.tagName,am(e.props,["className","title","style"]),t);if(o&&(i.innerHTML=o),e.attrs)for(let l of Object.keys(e.attrs))i.setAttribute(l,e.attrs[l]);if(e.children)for(let l of e.children)tl(l,i);return t==null||t.appendChild(i),i}function vo(e){return e.hasOwnProperty("tagName")?tl(e):document.createElement("li")}function En(e){for(;e!=null&&e.firstChild;)e.lastChild&&e.removeChild(e.lastChild);return e}function fo(e){var l;if(!e)return;let t=(l=e==null?void 0:e.getBoundingClientRect)==null?void 0:l.call(e),n=0,o=0,i=0,s=0;return(t==null?void 0:t.top)!==void 0&&t.left!==void 0&&(n=t.top+window.pageYOffset,o=t.left+window.pageXOffset,s=t.right,i=t.bottom),{top:n,left:o,bottom:i,right:s}}function un(e,t,n){let o=parseFloat(e.style[n]);if(!o||isNaN(o)){switch(t){case"outer":o=e[n==="width"?"offsetWidth":"offsetHeight"];break;case"scroll":o=e[n==="width"?"scrollWidth":"scrollHeight"];break;case"inner":default:o=e[n==="width"?"clientWidth":"clientHeight"];break}o=e.getBoundingClientRect()[n]}if(!o||isNaN(o)){let i=e.style.display,s=e.style.position;e.style.display="block",e.style.position="absolute";let l=window.getComputedStyle(e)[n];o=parseFloat(l),isNaN(o)&&(o=0),e.style.display=i,e.style.position=s}return o||0}function Hi(e,t){let n=null,o=e==null?void 0:e.parentElement;for(;o;){let[i,s,l,a]=t.match(/^([a-z]*)([#.]{1})([a-z\-]+)$/i)||[];if(l&&a)for(let p of a.replace(l,"").split(" "))o.classList.contains(p)&&(s?(o==null?void 0:o.tagName.toLowerCase())===s&&(n=o):n=o);o=o.parentElement}return n}function um(e,t){var n;(n=e.parentNode)==null||n.insertBefore(t,e.nextSibling)}function Ui(e,t){e!=null&&e.style&&(e.style.display=e.style.display==="none"&&t!==!1||t===!0?"block":"none")}function dm(){return{left:window.pageXOffset||document.documentElement.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||0}}var mm=class{constructor(e){var n;y(this,"cache"),y(this,"clusterRows"),y(this,"dataStart"),y(this,"dataEnd"),y(this,"rows"),y(this,"scrollEl"),y(this,"blockHeight"),y(this,"clusterHeight"),y(this,"contentEl"),y(this,"parentEl"),y(this,"itemHeight"),y(this,"lastCluster"),y(this,"scrollTop"),y(this,"destroy"),y(this,"callback"),y(this,"sanitizer"),this.rows=e.rows,this.scrollEl=e.scrollEl,this.contentEl=e.contentEl,this.parentEl=(n=e.contentEl)==null?void 0:n.parentElement,this.callback=e.callback,this.cache={},this.scrollTop=this.scrollEl.scrollTop,this.initDOM(this.rows),this.scrollEl.scrollTop=this.scrollTop,this.lastCluster=0;let t=()=>{this.lastCluster!==(this.lastCluster=this.getNum())&&(this.initDOM(this.rows),this.callback())};this.scrollEl.addEventListener("scroll",t,!1),this.destroy=()=>{En(this.contentEl),this.scrollEl.removeEventListener("scroll",t,!1)}}initDOM(e){if(typeof this.clusterHeight>"u"){this.cache.scrollTop=this.scrollEl.scrollTop;let s=vo(e[0]);this.contentEl.appendChild(s),this.contentEl.appendChild(s),this.contentEl.appendChild(s),this.cache.data=[e[0]],this.getRowsHeight()}let t=this.initData(e,this.getNum()),n=this.checkChanges("data",t.rows),o=this.checkChanges("top",t.topOffset),i=this.checkChanges("bottom",t.bottomOffset);En(this.contentEl),n&&o?(t.topOffset&&this.contentEl.appendChild(this.getExtra("top",t.topOffset)),t.rows.forEach(s=>this.contentEl.appendChild(vo(s))),t.bottomOffset&&this.contentEl.appendChild(this.getExtra("bottom",t.bottomOffset))):i&&this.contentEl.lastChild&&(this.contentEl.lastChild.style.height=`${t.bottomOffset}px`)}getRowsHeight(){var e;if(typeof this.itemHeight>"u"){let t=((e=this.parentEl)==null?void 0:e.style.display)||"";this.parentEl&&(t===""||t==="none")&&(this.parentEl.style.display="block");let n=this.contentEl.children,o=n[Math.floor(n.length/2)];this.itemHeight=o.offsetHeight,this.parentEl&&(this.parentEl.style.display=t)}this.blockHeight=this.itemHeight*vt.BLOCK_ROWS,this.clusterRows=vt.BLOCK_ROWS*vt.CLUSTER_BLOCKS,this.clusterHeight=this.blockHeight*vt.CLUSTER_BLOCKS}getNum(){this.scrollTop=this.scrollEl.scrollTop;let e=(this.clusterHeight||0)-(this.blockHeight||0);return e&&Math.floor(this.scrollTop/e)||0}initData(e,t){if(e.length<vt.BLOCK_ROWS)return{topOffset:0,bottomOffset:0,rowsAbove:0,rows:e};let n=Math.max((this.clusterRows-vt.BLOCK_ROWS)*t,0),o=n+this.clusterRows,i=Math.max(n*this.itemHeight,0),s=Math.max((e.length-o)*this.itemHeight,0),l=[],a=n;i<1&&a++;for(let p=n;p<o;p++)e[p]&&l.push(e[p]);return this.dataStart=n,this.dataEnd=o,{topOffset:i,bottomOffset:s,rowsAbove:a,rows:l}}checkChanges(e,t){let n=t!==this.cache[e];return this.cache[e]=t,n}getExtra(e,t){let n=document.createElement("li");return n.className=`virtual-scroll-${e}`,t&&(n.style.height=`${t}px`),n}},hm=class{constructor(e,t){this.elm=e,y(this,"_bindEventService"),y(this,"allSelected",!1),y(this,"fromHtml",!1),y(this,"choiceElm"),y(this,"closeElm"),y(this,"closeSearchElm"),y(this,"filterText",""),y(this,"updateData",[]),y(this,"data",[]),y(this,"dataTotal"),y(this,"dropElm"),y(this,"okButtonElm"),y(this,"filterParentElm"),y(this,"lastFocusedItemKey",""),y(this,"ulElm"),y(this,"parentElm"),y(this,"labelElm"),y(this,"selectAllParentElm"),y(this,"selectAllElm"),y(this,"searchInputElm"),y(this,"selectGroupElms"),y(this,"selectItemElms"),y(this,"noResultsElm"),y(this,"options"),y(this,"selectAllName",""),y(this,"selectGroupName",""),y(this,"selectItemName",""),y(this,"tabIndex"),y(this,"updateDataStart"),y(this,"updateDataEnd"),y(this,"virtualScroll"),y(this,"locales",{}),this.options=Object.assign({},vt.DEFAULTS,this.elm.dataset,t),this._bindEventService=new em({distinctEvent:!0})}get isRenderAsHtml(){return this.options.renderOptionLabelAsHtml||this.options.useSelectOptionLabelToHtml}init(){this.initLocale(),this.initContainer(),this.initData(),this.initSelected(!0),this.initFilter(),this.initDrop(),this.initView(),this.options.onAfterCreate()}destroy(e=!0){var t,n,o,i,s;this.elm&&this.parentElm&&(this.options.onDestroy({hardDestroy:e}),e&&this.options.onHardDestroy(),this.elm.parentElement&&this.parentElm.parentElement&&this.elm.parentElement.insertBefore(this.elm,this.parentElm.parentElement.firstChild),this.elm.classList.remove("ms-offscreen"),this._bindEventService.unbindAll(),this.tabIndex&&(this.elm.tabIndex=+this.tabIndex),(t=this.virtualScroll)==null||t.destroy(),(n=this.dropElm)==null||n.remove(),(o=this.parentElm.parentNode)==null||o.removeChild(this.parentElm),this.fromHtml&&(delete this.options.data,this.fromHtml=!1),this.options.onAfterDestroy({hardDestroy:e}),e&&((s=(i=this.options).onAfterHardDestroy)==null||s.call(i),Object.keys(this.options).forEach(l=>delete this[l])))}initLocale(){if(this.options.locale){let e=window.multipleSelect.locales,t=this.options.locale.split(/-|_/);if(t[0]=t[0].toLowerCase(),t[1]&&(t[1]=t[1].toUpperCase()),e[this.options.locale])Object.assign(this.options,e[this.options.locale]);else if(e[t.join("-")])Object.assign(this.options,e[t.join("-")]);else if(e[t[0]])Object.assign(this.options,e[t[0]]);else throw new Error(`[multiple-select-vanilla] invalid locales "${this.options.locale}", make sure to import it before using it`)}}initContainer(){var i;let e=this.elm.getAttribute("name")||this.options.name||"";this.options.classes&&this.elm.classList.add(this.options.classes),this.options.classPrefix&&(this.elm.classList.add(this.options.classPrefix),this.options.size&&this.elm.classList.add(`${this.options.classPrefix}-${this.options.size}`)),this.elm.style.display="none",this.labelElm=this.elm.closest("label"),!this.labelElm&&this.elm.id&&(this.labelElm=document.createElement("label"),this.labelElm.htmlFor=this.elm.id),(i=this.labelElm)!=null&&i.querySelector("input")&&(this.labelElm=null),typeof this.options.single>"u"&&(this.options.single=!this.elm.multiple),this.parentElm=U("div",{className:`ms-parent ${this.elm.className||""} ${this.options.classes}`,dataset:{test:"sel"}});let t=this.elm.getAttribute("title")||"";t&&(this.parentElm.title=t),this.options.placeholder=this.options.placeholder||this.elm.getAttribute("placeholder")||"",this.tabIndex=this.elm.tabIndex;let n;this.tabIndex!==null&&(this.elm.tabIndex=-1,n=this.tabIndex),this.choiceElm=U("button",{className:"ms-choice",type:"button"},this.parentElm),n!==void 0&&(this.choiceElm.tabIndex=n),this.choiceElm.appendChild(U("span",{className:"ms-placeholder",textContent:this.options.placeholder})),this.options.showClear&&this.choiceElm.appendChild(U("div",{className:"icon-close"})),this.choiceElm.appendChild(U("div",{className:"icon-caret"})),this.dropElm=U("div",{className:`ms-drop ${this.options.position}`,ariaExpanded:"false"},this.parentElm),e&&(this.dropElm.dataset.name=e);let o=this.elm.getAttribute("data-test")||this.options.dataTest;o&&(this.parentElm.dataset.test=o,this.dropElm.dataset.test=o),this.closeElm=this.choiceElm.querySelector(".icon-close"),this.options.dropWidth&&(this.dropElm.style.width=typeof this.options.dropWidth=="string"?this.options.dropWidth:`${this.options.dropWidth}px`),um(this.elm,this.parentElm),this.elm.disabled&&this.choiceElm.classList.add("disabled"),this.selectAllName=`selectAll${e}`,this.selectGroupName=`selectGroup${e}`,this.selectItemName=`selectItem${e}`,this.options.keepOpen||(this._bindEventService.unbindAll("body-click"),this._bindEventService.bind(document.body,"click",s=>{s.target===this.choiceElm||Hi(s.target,".ms-choice")===this.choiceElm||(s.target===this.dropElm||Hi(s.target,".ms-drop")!==this.dropElm&&s.target!==this.elm)&&this.options.isOpen&&this.close()},void 0,"body-click"))}initData(){let e=[];if(this.options.data){if(Array.isArray(this.options.data))this.data=this.options.data.map(t=>typeof t=="string"||typeof t=="number"?{text:t,value:t}:t);else if(typeof this.options.data=="object"){for(let[t,n]of Object.entries(this.options.data))e.push({value:t,text:`${n}`});this.data=e}}else this.elm.childNodes.forEach(t=>{let n=this.initRow(t);n&&e.push(n)}),this.options.data=e,this.data=e,this.fromHtml=!0;this.dataTotal=rm(this.data||[])}initRow(e,t){var o,i;let n={};return((o=e.tagName)==null?void 0:o.toLowerCase())==="option"?(n.type="option",n.text=this.options.textTemplate(e),n.value=e.value,n.visible=!0,n.selected=!!e.selected,n.disabled=t||e.disabled,n.classes=e.getAttribute("class")||"",n.title=e.getAttribute("title")||"",e.dataset.value&&(n._value=e.dataset.value),Object.keys(e.dataset).length&&(n._data=e.dataset,n._data.divider&&(n.divider=n._data.divider)),n):((i=e.tagName)==null?void 0:i.toLowerCase())==="optgroup"?(n.type="optgroup",n.label=this.options.labelTemplate(e),n.visible=!0,n.selected=!!e.selected,n.disabled=e.disabled,n.children=[],Object.keys(e.dataset).length&&(n._data=e.dataset),e.childNodes.forEach(s=>{n.children.push(this.initRow(s,n.disabled))}),n):null}initDrop(){this.initList(),this.update(!0),this.options.isOpen&&this.open(10),this.options.openOnHover&&this.parentElm&&(this._bindEventService.bind(this.parentElm,"mouseover",()=>this.open(null)),this._bindEventService.bind(this.parentElm,"mouseout",()=>this.close()))}initFilter(){if(this.filterText="",this.options.filter||!this.options.filterByDataLength)return;let e=0;for(let t of this.data||[])t.type==="optgroup"?e+=t.children.length:e+=1;this.options.filter=e>this.options.filterByDataLength}initList(){if(this.options.filter&&(this.filterParentElm=U("div",{className:"ms-search"},this.dropElm),this.filterParentElm.appendChild(U("input",{autocomplete:"off",autocapitalize:"off",spellcheck:!1,type:"text",placeholder:this.options.filterPlaceholder||"🔎︎"})),this.options.showSearchClear&&this.filterParentElm.appendChild(U("span",{className:"icon-close"}))),this.options.selectAll&&!this.options.single){let e=this.elm.getAttribute("name")||this.options.name||"";this.selectAllParentElm=U("div",{className:"ms-select-all",tabIndex:0});let t=document.createElement("label");U("input",{type:"checkbox",ariaChecked:String(this.allSelected),checked:this.allSelected,dataset:{name:`selectAll${e}`},tabIndex:-1},t),t.appendChild(U("span",{textContent:this.formatSelectAll()})),this.selectAllParentElm.appendChild(t),this.dropElm.appendChild(this.selectAllParentElm)}this.ulElm=document.createElement("ul"),this.dropElm.appendChild(this.ulElm),this.options.showOkButton&&!this.options.single&&(this.okButtonElm=U("button",{className:"ms-ok-button",type:"button",textContent:this.formatOkButton()},this.dropElm)),this.initListItems()}initListItems(){var n;let e=0,t=this.getListRows();if(this.options.selectAll&&!this.options.single&&(e=-1),t.length>vt.BLOCK_ROWS*vt.CLUSTER_BLOCKS){(n=this.virtualScroll)==null||n.destroy();let o=this.dropElm.style.display!=="none";o||(this.dropElm.style.left="-10000",this.dropElm.style.display="block",this.dropElm.ariaExpanded="true");let i=()=>{this.virtualScroll&&(this.updateDataStart=this.virtualScroll.dataStart+e,this.updateDataEnd=this.virtualScroll.dataEnd+e,this.updateDataStart<0&&(this.updateDataStart=0),this.updateDataEnd>this.getDataLength()&&(this.updateDataEnd=this.getDataLength()))};this.ulElm&&(this.virtualScroll=new mm({rows:t,scrollEl:this.ulElm,contentEl:this.ulElm,sanitizer:this.options.sanitizer,callback:()=>{i(),this.events()}})),i(),o||(this.dropElm.style.left="0",this.dropElm.style.display="none",this.dropElm.ariaExpanded="false")}else this.ulElm&&(En(this.ulElm),t.forEach(o=>this.ulElm.appendChild(vo(o)))),this.updateDataStart=0,this.updateDataEnd=this.updateData.length,this.virtualScroll=null;return this.events(),t}getListRows(){var t;let e=[];return this.updateData=[],(t=this.data)==null||t.forEach(n=>e.push(...this.initListItem(n))),e.push({tagName:"li",props:{className:"ms-no-results",textContent:this.formatNoMatchesFound(),tabIndex:0}}),e}initListItem(e,t=0){let n=(e==null?void 0:e.title)||"",o=this.options.multiple?"multiple":"",i=this.options.single?"radio":"checkbox",s="";if(!(e!=null&&e.visible))return[];if(this.updateData.push(e),this.options.single&&!this.options.singleRadio&&(s="hide-radio "),e.selected&&(s+="selected "),e.type==="optgroup"){let b=[],k=this.options.hideOptgroupCheckboxes||this.options.single?{tagName:"span",props:{dataset:{name:this.selectGroupName,key:e._key}}}:{tagName:"input",props:{type:"checkbox",dataset:{name:this.selectGroupName,key:e._key},ariaChecked:String(e.selected||!1),checked:!!e.selected,disabled:e.disabled,tabIndex:-1}};!s.includes("hide-radio")&&(this.options.hideOptgroupCheckboxes||this.options.single)&&(s+="hide-radio ");let S={tagName:"span",props:{}};this.applyAsTextOrHtmlWhenEnabled(S.props,e.label);let O={tagName:"li",props:{className:`group ${s}`.trim(),tabIndex:s.includes("hide-radio")||e.disabled?-1:0},children:[{tagName:"label",props:{className:`optgroup${this.options.single||e.disabled?" disabled":""}`},children:[k,S]}]},D=this.options.cssStyler(e),M=String(this.options.styler(e)||"");return M&&(O.props.style=Bi(M)),D&&(O.props.style=D),b.push(O),e.children.forEach(T=>b.push(...this.initListItem(T,1))),b}if(s+=e.classes||"",t&&this.options.single&&(s+=`option-level-${t} `),e.divider)return[{tagName:"li",props:{className:"option-divider"}}];let l=o||s?(o+s).trim():"",a=`${e.disabled?"disabled":""}`,p={tagName:"span",props:{}};this.applyAsTextOrHtmlWhenEnabled(p.props,e.text);let u={tagName:"input",props:{type:i,value:encodeURI(e.value),dataset:{key:e._key,name:this.selectItemName},ariaChecked:String(e.selected||!1),checked:!!e.selected,disabled:!!e.disabled,tabIndex:-1}};e.selected&&(u.attrs={checked:"checked"});let c={tagName:"li",props:{className:l,title:n,tabIndex:e.disabled?-1:0,dataset:{key:e._key}},children:[{tagName:"label",props:{className:a},children:[u,p]}]},_=this.options.cssStyler(e),w=String(this.options.styler(e)||"");return w&&(c.props.style=Bi(w)),_&&(c.props.style=_),[c]}initSelected(e=!1){var n,o;let t=0;for(let i of this.data||[])if(i.type==="optgroup"){let s=i.children.filter(l=>l&&l.selected&&!l.disabled&&l.visible).length;i.children.length&&(i.selected=!this.options.single&&s&&s===i.children.filter(l=>l&&!l.disabled&&l.visible&&!l.divider).length),t+=s}else t+=i.selected&&!i.disabled&&i.visible?1:0;this.allSelected=((n=this.data)==null?void 0:n.filter(i=>i.selected&&!i.disabled&&i.visible).length)===((o=this.data)==null?void 0:o.filter(i=>!i.disabled&&i.visible&&!i.divider).length),e||(this.allSelected?this.options.onCheckAll():t===0&&this.options.onUncheckAll())}initView(){let e;window.getComputedStyle?(e=window.getComputedStyle(this.elm).width,e==="auto"&&(e=un(this.dropElm,"outer","width")+20)):e=un(this.elm,"outer","width")+20,this.parentElm.style.width=`${this.options.width||e}px`,this.elm.classList.add("ms-offscreen")}events(){var n,o;this._bindEventService.unbindAll(["ok-button","search-input","select-all-checkbox","input-checkbox-list","group-checkbox-list"]),this.closeSearchElm=(n=this.filterParentElm)==null?void 0:n.querySelector(".icon-close"),this.searchInputElm=this.dropElm.querySelector(".ms-search input"),this.selectAllElm=this.dropElm.querySelector(`input[data-name="${this.selectAllName}"]`),this.selectGroupElms=this.dropElm.querySelectorAll(`input[data-name="${this.selectGroupName}"],span[data-name="${this.selectGroupName}"]`),this.selectItemElms=this.dropElm.querySelectorAll(`input[data-name="${this.selectItemName}"]:enabled`),this.noResultsElm=this.dropElm.querySelector(".ms-no-results");let e=i=>{i.preventDefault(),!i.target.classList.contains("icon-close")&&this[this.options.isOpen?"close":"open"]()};this.labelElm&&this._bindEventService.bind(this.labelElm,"click",i=>{i.target.nodeName.toLowerCase()==="label"&&(e(i),(!this.options.filter||!this.options.isOpen)&&this.focus(),i.stopPropagation())}),this._bindEventService.bind(this.choiceElm,"click",e),this.options.onFocus&&this._bindEventService.bind(this.choiceElm,"focus",this.options.onFocus),this.options.onBlur&&this._bindEventService.bind(this.choiceElm,"blur",this.options.onBlur),this._bindEventService.bind(this.parentElm,"keydown",i=>{i.code==="Escape"&&!this.options.keepOpen&&(this.close(),this.choiceElm.focus())}),this.closeElm&&this._bindEventService.bind(this.closeElm,"click",i=>{i.preventDefault(),this._checkAll(!1,!0),this.initSelected(!1),this.updateSelected(),this.update(),this.options.onClear()}),this.closeSearchElm&&this._bindEventService.bind(this.closeSearchElm,"click",i=>{i.preventDefault(),this.searchInputElm&&(this.searchInputElm.value="",this.searchInputElm.focus()),this.filter()}),this.searchInputElm&&(this._bindEventService.bind(this.searchInputElm,"keydown",i=>{i.code==="Tab"&&i.shiftKey&&this.close()},void 0,"search-input"),this._bindEventService.bind(this.searchInputElm,"keyup",i=>{var s,l,a;if(this.options.filterAcceptOnEnter&&["Enter","Space"].includes(i.code)&&((s=this.searchInputElm)!=null&&s.value)){if(this.options.single){let p=[];(l=this.selectItemElms)==null||l.forEach(u=>{var c;((c=u.closest("li"))==null?void 0:c.style.display)!=="none"&&p.push(u)}),p.length&&p[0].hasAttribute("data-name")&&this.setSelects([p[0].value])}else(a=this.selectAllElm)==null||a.click();this.close(),this.focus();return}this.filter()},void 0,"search-input")),this.selectAllElm&&this._bindEventService.bind(this.selectAllElm,"click",i=>{var s;return this._checkAll((s=i.currentTarget)==null?void 0:s.checked)},void 0,"select-all-checkbox"),this.okButtonElm&&this._bindEventService.bind(this.okButtonElm,"click",i=>{e(i),i.stopPropagation()},void 0,"ok-button"),this._bindEventService.bind(this.selectGroupElms,"click",i=>{let s=i.currentTarget,l=s.checked,a=cn(this.data,"_key",s.dataset.key);this._checkGroup(a,l),this.options.onOptgroupClick(eo({label:a.label,selected:a.selected,data:a._data,children:a.children.map(p=>{if(p)return eo({text:p.text,value:p.value,selected:p.selected,disabled:p.disabled,data:p._data})})}))},void 0,"group-checkbox-list"),this._bindEventService.bind(this.selectItemElms,"click",i=>{let s=i.currentTarget,l=s.checked,a=cn(this.data,"_key",s.dataset.key),p=()=>{this.options.single&&this.options.isOpen&&!this.options.keepOpen&&this.close()};if(this.options.onBeforeClick(a)===!1){p();return}this._check(a,l),this.options.onClick(eo({text:a.text,value:a.value,selected:a.selected,data:a._data})),p()},void 0,"input-checkbox-list"),this.lastFocusedItemKey&&((o=this.dropElm.querySelector(`li[data-key=${this.lastFocusedItemKey}]`))==null||o.focus());let t=Array.from(this.dropElm.querySelectorAll("div.ms-select-all, li"));this._bindEventService.unbindAll("tabindex-arrow"),this._bindEventService.bind(this.dropElm,"keydown",i=>{var l,a,p,u;let s=i.target.closest(".ms-select-all")||i.target.closest("li");if(this.dropElm.contains(s)){let c=0,_=t.length;for(c=0;c<_&&!t[c].isEqualNode(s);c++);switch(i.key){case"ArrowUp":i.preventDefault(),c>0&&(this.lastFocusedItemKey=((l=this.focusOnUpDownItem(t,c,i.key))==null?void 0:l.dataset.key)||"");break;case"ArrowDown":i.preventDefault(),c<t.length-1&&(this.lastFocusedItemKey=((a=this.focusOnUpDownItem(t,c,i.key))==null?void 0:a.dataset.key)||"");break;case"Enter":case" ":i.preventDefault(),(p=s.querySelector("input"))==null||p.click(),this.options.single&&(this.choiceElm.focus(),this.lastFocusedItemKey=((u=this.choiceElm)==null?void 0:u.dataset.key)||"");break}}},void 0,"tabindex-arrow")}focusOnUpDownItem(e,t,n){let o=t,i;for(;i=e[n==="ArrowUp"?o-1:o+1];){if(i.classList.contains("option-divider")){n==="ArrowUp"?o--:o++;continue}break}return i?(i.focus(),i):null}open(e=0){if(e!==null&&e>=0){let t;clearTimeout(t),t=setTimeout(()=>this.openDrop(),e)}else this.openDrop()}openDrop(){var i,s,l,a,p;if((i=this.choiceElm)!=null&&i.classList.contains("disabled"))return;if(this.options.isOpen=!0,this.parentElm.classList.add("ms-parent-open"),(l=(s=this.choiceElm)==null?void 0:s.querySelector("div"))==null||l.classList.add("open"),this.dropElm.style.display="block",this.dropElm.ariaExpanded="true",(a=this.selectAllElm)!=null&&a.parentElement&&(this.selectAllElm.parentElement.style.display="block"),this.noResultsElm&&(this.noResultsElm.style.display="none"),this.getDataLength()||((p=this.selectAllElm)!=null&&p.parentElement&&(this.selectAllElm.parentElement.style.display="none"),this.noResultsElm&&(this.noResultsElm.style.display="block")),this.options.container){let u=fo(this.dropElm),c;this.options.container instanceof Node?c=this.options.container:typeof this.options.container=="string"&&(c=this.options.container==="body"?document.body:document.querySelector(this.options.container)),c.appendChild(this.dropElm),this.dropElm.style.top=`${(u==null?void 0:u.top)??0}px`,this.dropElm.style.left=`${(u==null?void 0:u.left)??0}px`,this.dropElm.style.minWidth="auto",this.dropElm.style.width=`${un(this.parentElm,"outer","width")}px`}let e=this.options.minHeight,t=this.options.maxHeight;this.options.maxHeightUnit==="row"&&(t=un(this.dropElm.querySelector("ul>li"),"outer","height")*this.options.maxHeight);let n=this.dropElm.querySelector("ul");n&&(e&&(n.style.minHeight=`${e}px`),n.style.maxHeight=`${t}px`),this.dropElm.querySelectorAll(".multiple").forEach(u=>u.style.width=`${this.options.multipleWidth}px`),this.getDataLength()&&this.options.filter&&(this.searchInputElm&&(this.searchInputElm.value="",this.searchInputElm.focus()),this.filter(!0)),this.options.autoAdjustDropWidthByTextSize&&this.adjustDropWidthByText();let o=this.options.position;if(this.options.autoAdjustDropHeight){if(this.options.autoAdjustDropPosition){let{bottom:u,top:c}=no(this.dropElm),_=this.dropElm.getBoundingClientRect().height;o=u<_&&c>u?"top":"bottom"}this.adjustDropHeight(o)}this.options.autoAdjustDropPosition&&this.adjustDropPosition(!0),this.options.onOpen()}close(){var e,t;this.options.isOpen=!1,this.parentElm.classList.remove("ms-parent-open"),(t=(e=this.choiceElm)==null?void 0:e.querySelector("div"))==null||t.classList.remove("open"),this.dropElm.style.display="none",this.dropElm.ariaExpanded="false",this.options.container&&(this.parentElm.appendChild(this.dropElm),this.dropElm.style.top="auto",this.dropElm.style.left="auto"),this.options.onClose()}applyAsTextOrHtmlWhenEnabled(e,t){e||(e={}),this.isRenderAsHtml?e.innerHTML=typeof this.options.sanitizer=="function"?this.options.sanitizer(t):t:e.textContent=t}update(e=!1){var p;let t=this.getSelects(),n=this.getSelects("text");this.options.displayValues&&(n=t);let o=(p=this.choiceElm)==null?void 0:p.querySelector("span"),i=t.length,s=null,l=()=>{if(this.options.useSelectOptionLabel||this.options.useSelectOptionLabelToHtml){let u=t.join(this.options.displayDelimiter);return this.options.useSelectOptionLabelToHtml?pm(u):u}return n.join(this.options.displayDelimiter)};if(o){if(i===0){let u=this.options.placeholder||"";o.classList.add("ms-placeholder"),this.applyAsTextOrHtmlWhenEnabled(o,u)}else i<this.options.minimumCountSelected?s=l():this.formatAllSelected()&&i===this.dataTotal?s=this.formatAllSelected():this.options.ellipsis&&i>this.options.minimumCountSelected?s=`${n.slice(0,this.options.minimumCountSelected).join(this.options.displayDelimiter)}...`:this.formatCountSelected(i,this.dataTotal)&&i>this.options.minimumCountSelected?s=this.formatCountSelected(i,this.dataTotal):s=l();if(s!==null&&(o==null||o.classList.remove("ms-placeholder"),this.applyAsTextOrHtmlWhenEnabled(o,s)),this.options.displayTitle||this.options.addTitle){this.options.addTitle&&console.warn("[Multiple-Select-Vanilla] Please note that the `addTitle` option was deprecated and replaced by `displayTitle`.");let u=this.options.useSelectOptionLabel||this.options.useSelectOptionLabelToHtml?"value":"text";o.title=this.getSelects(u).join(this.options.displayDelimiter)}}let a=this.getSelects();this.options.single?this.elm.value=a.length?a[0]:"":Array.from(this.elm.options).forEach(u=>{u.selected=a.some(c=>c===u.value)}),e||this.elm.dispatchEvent(new Event("change"))}updateSelected(e){var n;for(let o=this.updateDataStart;o<this.updateDataEnd;o++){let i=this.updateData[o],s=this.dropElm.querySelector(`input[data-key=${i._key}]`);if(s){s.checked=i.selected;let l=s.closest("li");l&&(i.selected&&!l.classList.contains("selected")?l.classList.add("selected"):i.selected||l.classList.remove("selected"))}}let t=((n=this.data)==null?void 0:n.filter(o=>o.visible).length)===0;this.selectAllElm&&(this.selectAllElm.checked=this.allSelected,Ui(this.selectAllElm.closest("li"),!t)),Ui(this.noResultsElm,t),this.virtualScroll&&(this.virtualScroll.rows=e??this.getListRows())}getData(){return this.options.data}getDataLength(){var e;return((e=this.data)==null?void 0:e.length)??0}getOptions(e=!0){let t=Object.assign({},this.options);return delete t.data,e?ho(t):this.options}refreshOptions(e){lm(this.options,e,!0)||(this.options=Object.assign(this.options,e),this.destroy(!1),this.init())}getDropElement(){return this.dropElm}getParentElement(){return this.parentElm}getSelects(e="value"){let t=[];for(let n of this.data||[])if(n.type==="optgroup"){let o=n.children.filter(i=>i==null?void 0:i.selected);if(!o.length)continue;if(e==="value"||this.options.single)t.push(...o.map(i=>e==="value"&&i._value||i[e]));else{let i=[];i.push("["),i.push(n.label),i.push(`: ${o.map(s=>s[e]).join(", ")}`),i.push("]"),t.push(i.join(""))}}else n.selected&&t.push(e==="value"&&n._value||n[e]);return t}setSelects(e,t="value",n=!1){let o=!1,i=s=>{var l;for(let a of s){let p=!1;if(t==="text"){let u=document.createElement("div");this.applyAsTextOrHtmlWhenEnabled(u,a.text),p=e.includes(((l=u.textContent)==null?void 0:l.trim())??"")}else p=e.includes(a._value||a.value),!p&&a.value===`${+a.value}`&&(p=e.includes(+a.value));a.selected!==p&&(o=!0),a.selected=p}};for(let s of this.data||[])s.type==="optgroup"?i(s.children):i([s]);o&&(this.initSelected(n),this.updateSelected(),this.update(n))}enable(){var e;(e=this.choiceElm)==null||e.classList.remove("disabled")}disable(){var e;(e=this.choiceElm)==null||e.classList.add("disabled")}check(e){let t=cn(this.data,"value",e);t&&this._check(t,!0)}uncheck(e){let t=cn(this.data,"value",e);t&&this._check(t,!1)}_check(e,t){this.options.single&&this._checkAll(!1,!0),e.selected=t,this.initSelected(),this.updateSelected(),this.update()}checkAll(){this._checkAll(!0)}uncheckAll(){this._checkAll(!1)}_checkAll(e,t){for(let n of this.data||[])n.type==="optgroup"?this._checkGroup(n,e,!0):!n.disabled&&!n.divider&&(t||n.visible)&&(n.selected=e);t||(this.initSelected(),this.updateSelected(),this.update())}_checkGroup(e,t,n){e.selected=t,e.children.forEach(o=>{o&&!o.disabled&&!o.divider&&(n||o.visible)&&(o.selected=t)}),n||(this.initSelected(),this.updateSelected(),this.update())}checkInvert(){if(!this.options.single){for(let e of this.data||[])if(e.type==="optgroup")for(let t of e.children)t&&(t.divider||(t.selected=!t.selected));else e&&!e.divider&&(e.selected=!e.selected);this.initSelected(),this.updateSelected(),this.update()}}focus(){var e;(e=this.choiceElm)==null||e.focus(),this.options.onFocus()}blur(){var e;(e=this.choiceElm)==null||e.blur(),this.options.onBlur()}refresh(){this.destroy(!1),this.init()}filter(e){var i;let t=((i=this.searchInputElm)==null?void 0:i.value.trim())??"",n=t.toLowerCase();if(this.filterText===n)return;this.filterText=n;for(let s of this.data||[])if(s.type==="optgroup")if(this.options.filterGroup){let l=`${(s==null?void 0:s.label)??""}`;if(s!=null){let a=this.options.customFilter({label:he(l.toString().toLowerCase(),this.options.diacriticParser),search:he(n,this.options.diacriticParser),originalLabel:l,originalSearch:t,row:s});s.visible=a;for(let p of s.children)p&&(p.visible=a)}}else{for(let l of s.children)if(l!=null){let a=`${(l==null?void 0:l.text)??""}`;l.visible=this.options.customFilter({text:he(a.toString().toLowerCase(),this.options.diacriticParser),search:he(n,this.options.diacriticParser),originalText:a,originalSearch:t,row:l,parent:s})}s.visible=s.children.filter(l=>l==null?void 0:l.visible).length>0}else{let l=`${(s==null?void 0:s.text)??""}`;s.visible=this.options.customFilter({text:he(l.toString().toLowerCase(),this.options.diacriticParser),search:he(n,this.options.diacriticParser),originalText:l,originalSearch:t,row:s})}let o=this.initListItems();this.initSelected(e),this.updateSelected(o),e||this.options.onFilter(t)}adjustDropHeight(e){var u,c,_,w;let t=e!=="top",n=((u=this.filterParentElm)==null?void 0:u.getBoundingClientRect().height)??0,o=((c=this.okButtonElm)==null?void 0:c.getBoundingClientRect().height)??0,i=this.options.single?0:((_=this.selectAllParentElm)==null?void 0:_.getBoundingClientRect().height)??0,s=n+o+i+5,{bottom:l,top:a}=no(this.parentElm),p=this.options.maxHeight;if(t?p=l-s-this.options.adjustedHeightPadding:p=a-s-this.options.adjustedHeightPadding,!this.options.maxHeight||this.options.maxHeight&&p<this.options.maxHeight){let b=(w=this.dropElm)==null?void 0:w.querySelector("ul");return b&&(b.style.maxHeight=`${p}px`),!0}return!1}adjustDropPosition(e){let t="bottom";if(this.dropElm&&this.parentElm){let{bottom:n,top:o}=no(this.dropElm),{top:i,left:s}=fo(this.parentElm),l=this.dropElm.getBoundingClientRect().height,a=this.dropElm.getBoundingClientRect().width,p=document.body.offsetWidth||window.innerWidth,u=this.parentElm.getBoundingClientRect().width;if(n>l)t="bottom";else if(l>n&&o>n){if(this.options.container){let c=i-l;c<0&&(c=0),(c>0||e)&&(t="top",this.dropElm.style.top=`${c<0?0:c}px`)}else t="top",this.dropElm.classList.add(t);this.dropElm.classList.remove("bottom")}p-a<s&&(this.dropElm.style.left=`${s-(a-u)}px`)}return t}adjustDropWidthByText(){let e=this.parentElm.scrollWidth;(this.options.dropWidth||this.options.width)&&(e=this.options.dropWidth||this.options.width||0);let t=this.dropElm.querySelector(".ms-select-all span"),n=this.dropElm.querySelector("ul"),o=26,i=(t==null?void 0:t.clientWidth)??0+o,s=n.scrollHeight>n.clientHeight?this.getScrollbarWidth():0,l=0;this.dropElm.querySelectorAll("li label").forEach(a=>{a.scrollWidth>l&&(l=a.scrollWidth)}),l+=o+s,l<i&&(l=i),this.options.maxWidth&&l>this.options.maxWidth&&(l=this.options.maxWidth),this.options.minWidth&&l<this.options.minWidth&&(l=this.options.minWidth),(e==="100%"||+e<l)&&(this.dropElm.style.width=`${l}px`,this.dropElm.style.maxWidth=`${l}px`)}getScrollbarWidth(){var i;let e=document.createElement("div");e.style.visibility="hidden",e.style.width="100px",document.body.appendChild(e);let t=e.offsetWidth;e.style.overflow="scroll";let n=document.createElement("div");n.style.width="100%",e.appendChild(n);let o=n.offsetWidth;return(i=e.parentNode)==null||i.removeChild(e),t-o}formatAllSelected(){return this.options.allSelectedText||this.options.formatAllSelected()}formatCountSelected(e,t){return this.options.countSelectedText?this.options.countSelectedText.replace("#",`${e}`).replace("%",`${t}`):this.options.formatCountSelected(e,t)}formatNoMatchesFound(){return this.options.noMatchesFoundText||this.options.formatNoMatchesFound()}formatOkButton(){return this.options.okButtonText||this.options.formatOkButton()}formatSelectAll(){return this.options.selectAllText||this.options.formatSelectAll()}},h=function(e,t){return typeof e=="string"?oo(document.querySelectorAll(e),t):e instanceof Node?oo([e],t):oo(e,t)};function oo(e,t){let n=Array.from(e),o=[];for(let i=0;i<n.length;i++){let s=n[i];try{s._multipleSelect!==void 0&&(s._multipleSelect.destroy(),delete s._multipleSelect),s._multipleSelect=new hm(s,t||{}),s._multipleSelect.init();let l=s._multipleSelect.getOptions(!1);l.onHardDestroy=()=>delete s._multipleSelect,l.onAfterHardDestroyed=()=>o[i]=null,o.push(s._multipleSelect)}catch(l){console.error(l)}}return o.length===1?o[0]:o}h.defaults=vt.DEFAULTS;h.locales={...Qs};h.methods=vt.METHODS;typeof window<"u"&&(window.multipleSelect=h);let vm=class{},el=class{constructor(){d(this,"ms",[])}mount(){this.ms=h(".multiple-select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},fm=class{constructor(){d(this,"ms",[])}mount(){this.ms=h(".multiple-select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},bm=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select",{multiple:!0,multipleWidth:60})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},gm=class{constructor(){d(this,"multiMs",[]);d(this,"singleMs")}mount(){this.multiMs=h(".select"),this.singleMs=h(".data",{data:[{value:1,text:"Options 1",selected:!0},{value:2,text:"Options 2"},{value:3,text:"Options 3"}]})}unmount(){var t;this.multiMs.forEach(n=>n.destroy()),this.multiMs=[],(t=this.singleMs)==null||t.destroy(),this.singleMs=void 0}},_m=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select")}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Em=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},ym=class{constructor(){d(this,"btnElm");d(this,"ms",[]);d(this,"clickListener",()=>{const t=this.serialize(document.querySelector("form"));alert(t)})}mount(){this.ms=h("select"),this.btnElm=document.querySelector(".submit7"),this.btnElm.addEventListener("click",this.clickListener)}unmount(){this.btnElm.removeEventListener("click",this.clickListener),this.ms.forEach(t=>t.destroy()),this.ms=[]}serialize(t){const n=[];return t.querySelectorAll("[name]").forEach(o=>{const i=Array.from(o.selectedOptions);for(const s of i)n.push(`${o.name}=${s.value}`)}),n.length>0?n.join("&"):!1}},wm=class{constructor(){d(this,"ms1");d(this,"ms2");d(this,"ms3");d(this,"ms4");d(this,"ms5")}mount(){this.ms1=h("#basic",{dataTest:"select1",data:[{text:"January",value:1},{text:"February",value:2},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}),this.ms2=h("#object",{dataTest:"select2",data:{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}}),this.ms3=h("#string",{dataTest:"select3",data:["January","February","March"]}),this.ms4=h("#number",{dataTest:"select4",data:[1,2,3]}),this.ms5=h("#group",{dataTest:"select5",data:[{type:"optgroup",label:"Group 1",children:[{text:"January",value:1,selected:!0},{text:"February",value:2,disabled:!0},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6}]},{type:"optgroup",label:"Group 2",children:[{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}]})}unmount(){var t,n,o,i,s;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),(s=this.ms5)==null||s.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0}};var nl=window.multipleSelect;nl.locales["cz-CS"]={formatSelectAll(){return"[Vybrat vše]"},formatAllSelected(){return"Vše vybráno"},formatCountSelected(e,t){return`${e} z ${t} vybráno`},formatNoMatchesFound(){return"Nebylo nalezeno"},formatOkButton(){return"Zavřít"}};nl.locales;var ol=window.multipleSelect;ol.locales["da-DK"]={formatSelectAll(){return"[Vælg alle]"},formatAllSelected(){return"Alle valgt"},formatCountSelected(e,t){return`${e} af ${t} valgt`},formatNoMatchesFound(){return"Søgning uden resultat"},formatOkButton(){return"Lukke"}};ol.locales;var il=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};il.locales={"en-US":{formatSelectAll(){return"[Select all]"},formatAllSelected(){return"All selected"},formatCountSelected(e,t){return`${e} of ${t} selected`},formatNoMatchesFound(){return"No matches found"},formatOkButton(){return"OK"}}};il.locales;var sl=window.multipleSelect;sl.locales["es-ES"]={formatSelectAll(){return"[Seleccionar todo]"},formatAllSelected(){return"Todos seleccionados"},formatCountSelected(e,t){return`${e} de ${t} seleccionado`},formatNoMatchesFound(){return"No se encontraron coincidencias"},formatOkButton(){return"Cerrar"}};sl.locales;var ll=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};ll.locales["fr-FR"]={formatSelectAll(){return"[Tout sélectionner]"},formatAllSelected(){return"Tous sélectionnés"},formatCountSelected(e,t){return`${e} de ${t} sélectionnés`},formatNoMatchesFound(){return"Aucun résultat"},formatOkButton(){return"Fermer"}};ll.locales;var al=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};al.locales["hu-HU"]={formatSelectAll(){return"[Összes kiválasztása]"},formatAllSelected(){return"Összes kiválasztva"},formatCountSelected(e,t){return`${e} / ${t} kiválasztva`},formatNoMatchesFound(){return"Nincs találat"},formatOkButton(){return"Bezár"}};al.locales;var rl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};rl.locales["it-IT"]={formatSelectAll(){return"[Seleziona tutti]"},formatAllSelected(){return"Tutti selezionati"},formatCountSelected(e,t){return`${e} di ${t} selezionati`},formatNoMatchesFound(){return"Nessun risultato"},formatOkButton(){return"Chiudere"}};rl.locales;var pl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};pl.locales["ja-JP"]={formatSelectAll(){return"[すべて選択]"},formatAllSelected(){return"すべて選択"},formatCountSelected(e,t){return`${t} 件中 ${e} 件選択`},formatNoMatchesFound(){return"見つかりません"},formatOkButton(){return"閉める"}};pl.locales;var cl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};cl.locales["pt-BR"]={formatSelectAll(){return"[Selecionar todos]"},formatAllSelected(){return"Todos selecionados"},formatCountSelected(e,t){return`${e} de ${t} selecionado(s)`},formatNoMatchesFound(){return"Nenhum resultado encontrado"},formatOkButton(){return"Fechar"}};cl.locales;var ul=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};ul.locales["ru-RU"]={formatSelectAll(){return"[Выбрать все]"},formatAllSelected(){return"Выбрано все"},formatCountSelected(e,t){return`${e} из ${t} выбрано`},formatNoMatchesFound(){return"Совпадений не найдено"},formatOkButton(){return"Закрывать"}};ul.locales;var dl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};dl.locales["vi-VN"]={formatSelectAll(){return"[Tất cả]"},formatAllSelected(){return"Chọn tất cả"},formatCountSelected(e,t){return`Đã chọn ${e} trong ${t}`},formatNoMatchesFound(){return"Không tìm thấy kết quả."},formatOkButton(){return"Đóng"}};dl.locales;var ml=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};ml.locales["zh-CN"]={formatSelectAll(){return"[全选]"},formatAllSelected(){return"已选择所有记录"},formatCountSelected(e,t){return`已从${t}条记录中选择${e}条`},formatNoMatchesFound(){return"没有找到记录"},formatOkButton(){return"关闭"}};ml.locales;var hl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};hl.locales["zh-TW"]={formatSelectAll(){return"[全選]"},formatAllSelected(){return"已選擇所有記錄"},formatCountSelected(e,t){return`已從${t}條記錄中選擇${e}條`},formatNoMatchesFound(){return"沒有找到記錄"},formatOkButton(){return"关闭"}};hl.locales;let Sm=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){const t=document.querySelector("#locale");t.addEventListener("change",n=>{this.updateLocale(n.target.value)}),this.ms1=h(t),this.ms2=h("#select",{filter:!0,showOkButton:!0})}unmount(){var t,n;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),this.ms1=void 0,this.ms2=void 0}updateLocale(t){var n,o;(n=this.ms2)==null||n.destroy(),(o=this.ms2)==null||o.refreshOptions({locale:t})}},Am=class{constructor(){d(this,"ms1")}mount(){const t=[];for(let n=0;n<1e4;n++)t.push(n);this.ms1=h("#select",{filter:!0,data:t,showSearchClear:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Tm=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Om=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){this.ms1=h("#single",{singleRadio:!0}),this.ms2=h("#multiple",{showOkButton:!0})}unmount(){var t,n;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),this.ms1=void 0,this.ms2=void 0}},xm=class{constructor(){d(this,"createBtnElm");d(this,"destroyBtnElm");d(this,"ms1")}mount(){this.createBtnElm=document.querySelector("#createBtn"),this.destroyBtnElm=document.querySelector("#destroyBtn"),this.createBtnElm.addEventListener("click",this.createMultipleSelect.bind(this)),this.destroyBtnElm.addEventListener("click",this.destroyMultiSelect.bind(this))}createMultipleSelect(){this.ms1=h("#select1",{name:"my-select",single:!1,useSelectOptionLabelToHtml:!0,sanitizer:t=>wt.sanitize(t,{RETURN_TRUSTED_TYPE:!0}),data:[{text:'<i class="fa fa-star"></i> January',value:1},{text:"February",value:2},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}),this.ms1.setSelects([1,3,4])}destroyMultiSelect(){var t;console.log("destroy"),(t=this.ms1)==null||t.destroy(),this.ms1=void 0}unmount(){this.destroyMultiSelect(),this.createBtnElm.removeEventListener("click",this.createMultipleSelect.bind(this)),this.destroyBtnElm.removeEventListener("click",this.destroyMultiSelect.bind(this))}},km=class{constructor(){d(this,"ms1",[]);d(this,"ms2",[])}mount(){this.ms1=h(".select"),this.ms2=h(".data-select",{dataTest:"select1",data:[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"},{divider:!0},{value:4,text:"Option 4"},{value:5,text:"Option 5"},{value:6,text:"Option 6"}]})}unmount(){this.ms1.forEach(t=>t.destroy()),this.ms2.forEach(t=>t.destroy()),this.ms1=[],this.ms2=[]}},Cm=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){this.ms1=h("#select1"),this.ms2=h("#select2",{placeholder:"Here is the placeholder via javascript"})}unmount(){var t,n;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),this.ms1=void 0,this.ms2=void 0}},Dm=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select",{singleRadio:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Nm=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{selectAll:!1})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Lm=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{multiple:!0,hideOptgroupCheckboxes:!0,multipleWidth:60})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Mm=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{multiple:!0,width:500,multipleWidth:70,dropWidth:580})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},$m=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{maxHeight:140})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Im=class{constructor(){d(this,"ms",[])}mount(){const t=document.querySelector("#number");this.ms=h("select",{maxHeight:+t.value,maxHeightUnit:"row"}),t.addEventListener("change",()=>{this.ms.forEach(n=>{n.refreshOptions({maxHeight:+t.value,maxHeightUnit:"row"})})})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Rm=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{position:"top"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Pm=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{displayValues:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Fm=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{displayTitle:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Bm=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{displayDelimiter:" | "})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Hm=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{minimumCountSelected:8})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Um=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{ellipsis:!0,minimumCountSelected:5})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Gm=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{isOpen:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},jm=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{keepOpen:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Wm=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{openOnHover:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Jm=class{constructor(){d(this,"ms1");d(this,"ms2");d(this,"ms3");d(this,"ms4")}mount(){this.ms1=h(".select1"),this.ms2=h(".select2"),this.ms3=h(".select3",{container:".my-container"}),this.ms4=h(".select4",{autoAdjustDropPosition:!0,container:"body"})}unmount(){var t,n,o,i;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},Vm=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select",{filter:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},zm=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{filter:!0,filterGroup:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},qm=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{filter:!0,filterPlaceholder:"The filter placeholder"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Km=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select",{filter:!0,filterAcceptOnEnter:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Ym=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select",{filterByDataLength:10})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Xm=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{filter:!0,customFilter:({text:t,search:n,originalText:o,originalSearch:i})=>document.querySelector("input").checked?o.indexOf(i)===0:t.indexOf(n)===0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Qm=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select",{showClear:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Zm=class{constructor(){d(this,"ms",[])}mount(){this.ms.push(h(".select1",{showOkButton:!0})),this.ms.push(h(".select2",{showOkButton:!0})),this.ms.push(h(".select3",{showOkButton:!0,filter:!0})),this.ms.push(h(".select4",{showOkButton:!0}))}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},th=class{constructor(){d(this,"ms1");d(this,"ms2");d(this,"ms3")}mount(){this.ms2=h('[data-test="select1"]',{styler:t=>+((t==null?void 0:t.value)??0)==1?"background-color: #ffee00; color: #ff0000;":+((t==null?void 0:t.value)??0)==6?"background-color: #000; color: #fff;":null}),this.ms2=h('[data-test="select2"]',{styler:t=>(t==null?void 0:t.type)==="optgroup"?"color: #777; font-weight: normal;":+((t==null?void 0:t.value)??0)==1?"color: blue;":null}),this.ms2=h('[data-test="select3"]',{cssStyler:t=>+((t==null?void 0:t.value)??0)==2?{backgroundColor:"#6fbeff",color:"#0014ff",fontStyle:"italic"}:+((t==null?void 0:t.value)??0)==4?{backgroundColor:"#972727",color:"#fff"}:null}),this.ms2=h('[data-test="select4"]',{cssStyler:t=>(t==null?void 0:t.type)==="optgroup"?{color:"#787878",fontWeight:"normal"}:+((t==null?void 0:t.value)??0)==3?{color:"purple",textDecoration:"underline"}:null})}unmount(){var t,n,o;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),(o=this.ms3)==null||o.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0}},eh=class{constructor(){d(this,"ms1");d(this,"ms2");d(this,"btnEnableElm");d(this,"btnDisableElm")}mount(){this.ms1=h("#basic",{filter:!0,displayTitle:!0,renderOptionLabelAsHtml:!0,textTemplate:t=>`<i class="fa fa-star"></i>${t.innerHTML}`,customFilter:({search:t,text:n})=>{var i;const o=document.createElement("div");return o.innerHTML=n,((i=o.textContent)==null?void 0:i.includes(t))??!0},sanitizer:t=>wt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms2=h("#from-data",{dataTest:"select1",displayTitle:!0,renderOptionLabelAsHtml:!0,data:[{value:'50"',text:'50"'},{value:"44'",text:"44'"},{value:"33",text:'<span style="font-weight:bold">33</span>'}],sanitizer:t=>wt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.btnEnableElm=document.querySelector("#enableRenderHtml"),this.btnEnableElm.addEventListener("click",()=>this.renderAsHtmlHandler(!0)),this.btnDisableElm=document.querySelector("#disableRenderHtml"),this.btnDisableElm.addEventListener("click",()=>this.renderAsHtmlHandler(!1))}renderAsHtmlHandler(t){var n,o;(n=this.ms1)==null||n.refreshOptions({renderOptionLabelAsHtml:t}),(o=this.ms2)==null||o.refreshOptions({renderOptionLabelAsHtml:t})}unmount(){var t,n,o,i;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),this.ms1=void 0,this.ms2=void 0,(o=this.btnEnableElm)==null||o.removeEventListener("click",()=>this.renderAsHtmlHandler(!0)),(i=this.btnDisableElm)==null||i.removeEventListener("click",()=>this.renderAsHtmlHandler(!1))}},nh=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{renderOptionLabelAsHtml:!0,labelTemplate:t=>`<i class="fa fa-star"></i>${t.getAttribute("label")}`,sanitizer:t=>wt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},oh=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select",{autoAdjustDropPosition:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},ih=class{constructor(){d(this,"ms1");d(this,"ms2");d(this,"ms3");d(this,"ms4")}mount(){this.ms1=h("#select1",{autoAdjustDropWidthByTextSize:!0,autoAdjustDropHeight:!0,position:"top",showOkButton:!0,sanitizer:t=>wt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms2=h("#select2",{autoAdjustDropHeight:!0,position:"top",showOkButton:!0,sanitizer:t=>wt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms3=h("#select3",{autoAdjustDropHeight:!0,filter:!0,position:"top",sanitizer:t=>wt.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms4=h("#select4")}unmount(){var t,n,o,i;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},sh=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){this.ms1=h("#select1",{useSelectOptionLabel:!0}),this.ms2=h("#select2",{useSelectOptionLabelToHtml:!0,sanitizer:t=>wt.sanitize(t,{RETURN_TRUSTED_TYPE:!0}),data:[{text:'<i class="fa fa-star"></i> January',value:'<i class="fa fa-star"></i>1',selected:!0},{text:"February",value:"2"},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]})}unmount(){var t,n;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),this.ms1=void 0,this.ms2=void 0}},lh=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("#select1",{placeholder:'Placeholder with cross-site scripting code...<img src="not-found" onerror=alert("Hacked")>',sanitizer:t=>typeof t=="string"?decodeURIComponent(t).replace(/(\b)(on[a-z]+)(\s*)=|javascript:([^>]*)[^>]*|(<\s*)(\/*)script([<>]*).*(<\s*)(\/*)script(>*)|(&lt;)(\/*)(script|script defer)(.*)(&gt;|&gt;">)/gi,""):t})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},ah=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select",{classes:"form-control",classPrefix:"form-control"})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},rh=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select",{filter:!0,showSearchClear:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}};const Gi={a:"ÀÁÂÃÄÅàáâãäåĀāąĄ",c:"ÇçćĆčČ",d:"đĐďĎ",e:"ÈÉÊËèéêëěĚĒēęĘ",i:"ÌÍÎÏìíîïĪī",l:"łŁ",n:"ÑñňŇńŃ",o:"ÒÓÔÕÕÖØòóôõöøŌō",r:"řŘ",s:"ŠšśŚ",t:"ťŤ",u:"ÙÚÛÜùúûüůŮŪū",y:"ŸÿýÝ",z:"ŽžżŻźŹ"};let ph=class{constructor(){d(this,"ms1");d(this,"ms2");d(this,"inLogElm");d(this,"outLogElm")}mount(){this.inLogElm=document.querySelector("input.in-log"),this.outLogElm=document.querySelector("input.out-log"),this.ms1=h("#select1",{filter:!0,showSearchClear:!0,filterPlaceholder:'🔎︎ search with "é", "û" or simply "u"',diacriticParser:t=>{const n=t.split("").map(o=>Object.keys(Gi).find(i=>Gi[i].includes(o))||o).join("");return this.inLogElm.value=t,this.outLogElm.value=n,n}}),this.ms2=h("#select2",{filter:!0,showSearchClear:!0,filterPlaceholder:'🔎︎ search with "é", "û" or simply "u"'})}unmount(){var t,n;(t=this.ms1)==null||t.destroy(),(n=this.ms2)==null||n.destroy(),this.ms1=void 0,this.ms2=void 0}},ch=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{filter:!0}),document.querySelector("#getOptions").addEventListener("click",()=>{alert(JSON.stringify(this.ms1.getOptions(),null,4))})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},uh=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{filter:!0}),document.querySelector("#refreshOptions").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.refreshOptions({filter:!1})})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},dh=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{filter:!0}),document.querySelector("#setSelectsBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.setSelects([1,3])}),document.querySelector("#getSelectsBtn").addEventListener("click",()=>{var t,n;alert(`Selected values: ${(t=this.ms1)==null?void 0:t.getSelects()}`),alert(`Selected texts: ${(n=this.ms1)==null?void 0:n.getSelects("text")}`)}),document.querySelector("#setSelectsBtn2").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.setSelects(["February","April"],"text")}),document.querySelector("#getSelectsBtn2").addEventListener("click",()=>{var t;alert(`Selected values: ${(t=this.ms1)==null?void 0:t.getSelects("text")}`)})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},mh=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select"),document.querySelector("#enableBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.enable()}),document.querySelector("#disableBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.disable()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},hh=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select"),document.querySelector("#openBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.open()}),document.querySelector("#closeBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.close()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},vh=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select"),document.querySelector("#checkBtn").addEventListener("click",()=>{for(const t of this.ms)t.check(2)}),document.querySelector("#uncheckBtn").addEventListener("click",()=>{for(const t of this.ms)t.uncheck(2)})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},fh=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select"),document.querySelector("#checkAllBtn").addEventListener("click",()=>{for(const t of this.ms)t.checkAll()}),document.querySelector("#uncheckAllBtn").addEventListener("click",()=>{for(const t of this.ms)t.uncheckAll()})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},bh=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select"),document.querySelector("#checkInvert").addEventListener("click",()=>{for(const t of this.ms)t.checkInvert()})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},gh=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select"),document.querySelector("#focusBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.focus()}),document.querySelector("#blurBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.blur()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},_h=class{constructor(){d(this,"ms1")}mount(){const t=document.querySelector("select");this.ms1=h(t),document.querySelector("#refreshAdd").addEventListener("click",()=>{var a;const n=document.querySelector("#refreshInput"),o=document.querySelector("#refreshSelected"),i=document.querySelector("#refreshDisabled"),s=n.value.trim(),l=document.createElement("option");if(l.value=s,l.text=s,!s){n.focus();return}o.checked&&(l.selected=!0),i.checked&&(l.disabled=!0),n.value="",t.appendChild(l),(a=this.ms1)==null||a.refresh()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Eh=class{constructor(){d(this,"buildBtnElm");d(this,"destroyBtnElm");d(this,"ms1")}mount(){this.buildBtnElm=document.querySelector("#buildBtn"),this.destroyBtnElm=document.querySelector("#destroyBtn"),this.destroyBtnElm.addEventListener("click",this.destroyMultiSelect.bind(this)),this.buildBtnElm.addEventListener("click",this.createMultipleSelect.bind(this)),this.ms1=h("select")}createMultipleSelect(){this.ms1=h("select")}destroyMultiSelect(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=null}unmount(){this.destroyMultiSelect(),this.buildBtnElm.removeEventListener("click",this.destroyMultiSelect.bind(this)),this.destroyBtnElm.removeEventListener("click",this.createMultipleSelect.bind(this))}},yh=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{filter:!0}),document.querySelector("#getData").addEventListener("click",()=>{console.log("tt",JSON.stringify(this.ms1.getData())),alert(JSON.stringify(this.ms1.getData(),null,4))})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},wh=class{constructor(){d(this,"logElm");d(this,"ms1")}mount(){this.logElm=document.querySelector("textarea"),this.ms1=h("select",{filter:!0,onOpen:()=>{this.log(`onOpen event fire!
`)},onClose:()=>{this.log(`onClose event fire!
`)},onCheckAll:()=>{this.log(`onCheckAll event fire!
`)},onUncheckAll:()=>{this.log(`onUncheckAll event fire!
`)},onFocus:()=>{this.log(`onFocus event fire!
`)},onBlur:()=>{this.log(`onBlur event fire!
`)},onOptgroupClick:t=>{this.log(`onOptgroupClick event fire! view: ${JSON.stringify(t)}
`)},onClick:t=>{this.log(`onClick event fire! view: ${JSON.stringify(t)}
`)},onFilter:t=>{this.log(`onFilter event fire! text: ${t}
`)},onAfterCreate:()=>{this.log(`onAfterCreate event fire!
`)}})}log(t){this.logElm.textContent+=t,this.logElm.scrollTo(0,this.logElm.scrollHeight)}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}};class Sh{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{filter:!0,showOkButton:!0,formatAllSelected(){return"Tous sélectionnés"},formatCountSelected(t,n){return`${t} de ${n} sélectionnés`},formatNoMatchesFound(){return"Aucun résultat"},formatOkButton(){return"Fermer"},formatSelectAll(){return"[Tout sélectionner]"}})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}}const ji=[{name:"getting-started",view:"/src/getting-started.html",viewModel:vm,title:"Getting Started"},{name:"examples",view:"/src/examples/example01.html",viewModel:el,title:"Examples"}],Wi=[{name:"Welcomes",routes:[{name:"example01",view:"/src/examples/example01.html",viewModel:el,title:"Single Select"},{name:"example02",view:"/src/examples/example02.html",viewModel:fm,title:"Multiple Select"},{name:"example03",view:"/src/examples/example03.html",viewModel:bm,title:"Multiple Items"},{name:"example04",view:"/src/examples/example04.html",viewModel:gm,title:"Auto Width"},{name:"example05",view:"/src/examples/example05.html",viewModel:_m,title:"Disabled Select"},{name:"example06",view:"/src/examples/example06.html",viewModel:Em,title:"Selected/Disabled Options"},{name:"example07",view:"/src/examples/example07.html",viewModel:ym,title:"Submit Select"},{name:"example08",view:"/src/examples/example08.html",viewModel:wm,title:"The Data"},{name:"example09",view:"/src/examples/example09.html",viewModel:Sm,title:"Locale"},{name:"example10",view:"/src/examples/example10.html",viewModel:Am,title:"Large Select"},{name:"example11",view:"/src/examples/example11.html",viewModel:Tm,title:"The Themes"},{name:"example12",view:"/src/examples/example12.html",viewModel:Om,title:"Checkbox/Radio Icons"},{name:"example13",view:"/src/examples/example13.html",viewModel:xm,title:"Dynamically Create Select"},{name:"example14",view:"/src/examples/example14.html",viewModel:km,title:"The Divider"}]},{name:"Options",routes:[{name:"options01",view:"/src/options/options01.html",viewModel:Cm,title:"The Placeholder"},{name:"options02",view:"/src/options/options02.html",viewModel:Dm,title:"Single Radio"},{name:"options03",view:"/src/options/options03.html",viewModel:Nm,title:"Hide Select All"},{name:"options04",view:"/src/options/options04.html",viewModel:Lm,title:"Hide Optgroup Checkboxes"},{name:"options05",view:"/src/options/options05.html",viewModel:Mm,title:"Custom Dropdown Width"},{name:"options06",view:"/src/options/options06.html",viewModel:$m,title:"Max Height"},{name:"options07",view:"/src/options/options07.html",viewModel:Im,title:"Max Height Unit"},{name:"options08",view:"/src/options/options08.html",viewModel:Rm,title:"The Position"},{name:"options09",view:"/src/options/options09.html",viewModel:Pm,title:"Display Values"},{name:"options10",view:"/src/options/options10.html",viewModel:Fm,title:"Display Title"},{name:"options11",view:"/src/options/options11.html",viewModel:Bm,title:"Display Delimiter"},{name:"options12",view:"/src/options/options12.html",viewModel:Hm,title:"Minimum Count Selected"},{name:"options13",view:"/src/options/options13.html",viewModel:Um,title:"The Ellipsis"},{name:"options14",view:"/src/options/options14.html",viewModel:Gm,title:"Is Open"},{name:"options15",view:"/src/options/options15.html",viewModel:jm,title:"Keep Open"},{name:"options16",view:"/src/options/options16.html",viewModel:Wm,title:"Open On Hover"},{name:"options17",view:"/src/options/options17.html",viewModel:Jm,title:"The Container"},{name:"options18",view:"/src/options/options18.html",viewModel:Vm,title:"The Filter"},{name:"options19",view:"/src/options/options19.html",viewModel:zm,title:"Filter Only Optgroup"},{name:"options20",view:"/src/options/options20.html",viewModel:qm,title:"Filter Placeholder"},{name:"options21",view:"/src/options/options21.html",viewModel:Km,title:"Filter Accept On Enter"},{name:"options22",view:"/src/options/options22.html",viewModel:Ym,title:"Filter By Data Length"},{name:"options23",view:"/src/options/options23.html",viewModel:Xm,title:"Custom Filter"},{name:"options24",view:"/src/options/options24.html",viewModel:Qm,title:"Show Clear"},{name:"options25",view:"/src/options/options25.html",viewModel:Zm,title:"Show OK Button"},{name:"options26",view:"/src/options/options26.html",viewModel:th,title:"The Styler"},{name:"options27",view:"/src/options/options27.html",viewModel:eh,title:"Text Template"},{name:"options28",view:"/src/options/options28.html",viewModel:nh,title:"Label Template"},{name:"options29",view:"/src/options/options29.html",viewModel:oh,title:"Auto-Adjust Drop Position"},{name:"options30",view:"/src/options/options30.html",viewModel:ih,title:"Auto-Adjust Drop Height/Width"},{name:"options31",view:"/src/options/options31.html",viewModel:sh,title:"Use Select Option as Label"},{name:"options32",view:"/src/options/options32.html",viewModel:lh,title:"Sanitizer"},{name:"options33",view:"/src/options/options33.html",viewModel:ah,title:"Classes"},{name:"options34",view:"/src/options/options34.html",viewModel:rh,title:"Show Search Clear"},{name:"options35",view:"/src/options/options35.html",viewModel:ph,title:"Custom Diacritic Parser"}]},{name:"Methods",routes:[{name:"methods01",view:"/src/methods/methods01.html",viewModel:ch,title:"The getOptions"},{name:"methods02",view:"/src/methods/methods02.html",viewModel:uh,title:"The refreshOptions"},{name:"methods03",view:"/src/methods/methods03.html",viewModel:dh,title:"The setSelects/getSelects"},{name:"methods04",view:"/src/methods/methods04.html",viewModel:mh,title:"The enable/disable"},{name:"methods05",view:"/src/methods/methods05.html",viewModel:hh,title:"The open/close"},{name:"methods06",view:"/src/methods/methods06.html",viewModel:vh,title:"The check/uncheck"},{name:"methods07",view:"/src/methods/methods07.html",viewModel:fh,title:"The checkAll/uncheckAll"},{name:"methods08",view:"/src/methods/methods08.html",viewModel:bh,title:"The checkInvert"},{name:"methods09",view:"/src/methods/methods09.html",viewModel:gh,title:"The focus/blur"},{name:"methods10",view:"/src/methods/methods10.html",viewModel:_h,title:"The refresh"},{name:"methods11",view:"/src/methods/methods11.html",viewModel:Eh,title:"The destroy"},{name:"methods12",view:"/src/methods/methods12.html",viewModel:yh,title:"The getData"}]},{name:"Events",routes:[{name:"events",view:"/src/events/events.html",viewModel:wh,title:"The Events"}]},{name:"I18N",routes:[{name:"i18n",view:"/src/i18n/i18n.html",viewModel:Sh,title:"The i18n"}]}],Ah=Object.assign({"/src/events/events.html":Tl,"/src/examples/example01.html":Ol,"/src/examples/example02.html":xl,"/src/examples/example03.html":kl,"/src/examples/example04.html":Cl,"/src/examples/example05.html":Dl,"/src/examples/example06.html":Nl,"/src/examples/example07.html":Ll,"/src/examples/example08.html":Ml,"/src/examples/example09.html":$l,"/src/examples/example10.html":Il,"/src/examples/example11.html":Rl,"/src/examples/example12.html":Pl,"/src/examples/example13.html":Fl,"/src/examples/example14.html":Bl,"/src/getting-started.html":Hl,"/src/i18n/i18n.html":Ul,"/src/main.html":Ji,"/src/methods/methods01.html":Gl,"/src/methods/methods02.html":jl,"/src/methods/methods03.html":Wl,"/src/methods/methods04.html":Jl,"/src/methods/methods05.html":Vl,"/src/methods/methods06.html":zl,"/src/methods/methods07.html":ql,"/src/methods/methods08.html":Kl,"/src/methods/methods09.html":Yl,"/src/methods/methods10.html":Xl,"/src/methods/methods11.html":Ql,"/src/methods/methods12.html":Zl,"/src/options/options01.html":ta,"/src/options/options02.html":ea,"/src/options/options03.html":na,"/src/options/options04.html":oa,"/src/options/options05.html":ia,"/src/options/options06.html":sa,"/src/options/options07.html":la,"/src/options/options08.html":aa,"/src/options/options09.html":ra,"/src/options/options10.html":pa,"/src/options/options11.html":ca,"/src/options/options12.html":ua,"/src/options/options13.html":da,"/src/options/options14.html":ma,"/src/options/options15.html":ha,"/src/options/options16.html":va,"/src/options/options17.html":fa,"/src/options/options18.html":ba,"/src/options/options19.html":ga,"/src/options/options20.html":_a,"/src/options/options21.html":Ea,"/src/options/options22.html":ya,"/src/options/options23.html":wa,"/src/options/options24.html":Sa,"/src/options/options25.html":Aa,"/src/options/options26.html":Ta,"/src/options/options27.html":Oa,"/src/options/options28.html":xa,"/src/options/options29.html":ka,"/src/options/options30.html":Ca,"/src/options/options31.html":Da,"/src/options/options32.html":Na,"/src/options/options33.html":La,"/src/options/options34.html":Ma,"/src/options/options35.html":$a});class Th{constructor(){d(this,"loading",!0);d(this,"currentModel");d(this,"currentRouter");d(this,"defaultRouteName","getting-started");d(this,"stateBangChar","#/");d(this,"baseUrl",window.location.origin+window.location.pathname);d(this,"viewModelObj",{})}async init(){const t=window.location;document.querySelector("#app").innerHTML=wt.sanitize(Ji,{RETURN_TRUSTED_TYPE:!0});let n=t.hash.replace(this.stateBangChar,"");(!n||n==="/"||n==="#")&&(n=this.defaultRouteName),this.createRouteLinks(),this.loadRoute(n),Array.from(document.querySelectorAll(".panel-wm-left a.nav-link,.navbar-nav a.nav-link")).forEach(o=>{n.includes(o.id)&&o.classList.add("active")}),window.onpopstate=()=>{const i=window.location.hash.replace(this.stateBangChar,"");this.removeAllActiveLinks();const s=document.querySelector(`#${i}`);s&&(s.scrollIntoView(),s.classList.add("active")),this.loadRoute(i||this.defaultRouteName,!1)}}createRouteLinks(){var t,n,o;for(const i of ji){const s=U("li",{className:"nav-item"});U("a",{id:i.name,className:"nav-link",textContent:i.title},s).addEventListener("click",this.clickEventListener.bind(this)),(t=document.querySelector(".navbar-nav"))==null||t.appendChild(s)}for(const i of Wi){const s=U("li",{className:"m-1"});U("p",{className:"navbar-vertical-label mb-1",textContent:i.name},s),(n=document.querySelector(".nav-pills"))==null||n.appendChild(s);for(const l of i.routes){const a=U("li",{className:"nav-item"}),p=U("a",{id:l.name,className:"nav-link",textContent:l.title});p.addEventListener("click",this.clickEventListener.bind(this)),a.appendChild(p),(o=document.querySelector(".nav-pills"))==null||o.appendChild(a)}}}async loadRoute(t,n=!0){var s;const o=document.querySelector(".panel-wm-content");En(o),o.classList.add("cloak");let i=ji.find(l=>l.name===t);if((i==null?void 0:i.name)==="examples"){const l=document.querySelector(".nav-pills .nav-item a.nav-link");l==null||l.classList.add("active")}else for(const l of Wi){const a=l.routes.find(p=>p.name===t);a&&(i=a)}if(this.currentModel&&this.unmountCurrentVM(this.currentModel,this.currentRouter),i){this.currentRouter=i,document.querySelector(".panel-wm-content").innerHTML=wt.sanitize(Ah[i.view],{RETURN_TRUSTED_TYPE:!0});const l=new i.viewModel;this.currentModel=l,window[i.name]=(s=l.mount)==null?void 0:s.call(l),window.onbeforeunload=()=>{var a;o.classList.add("cloak"),(a=l.unmount)==null||a.call(l),this.removeAllActiveLinks(!0),this.unmountAll(),i!=null&&i.name&&delete window[i.name]}}n&&window.history.pushState({},t,`${this.baseUrl}${this.stateBangChar}${t}`),document.title=`Multiple-Select-Vanilla · ${t}`,o.classList.remove("cloak")}async clickEventListener(t){this.removeAllActiveLinks();const n=t.target;n.classList.toggle("active"),this.loadRoute(n.id)}removeAllActiveLinks(t=!1){document.querySelectorAll(".panel-wm-left a.nav-link,.navbar-nav a.nav-link").forEach(n=>{n.classList.remove("active"),t&&n.addEventListener("click",this.clickEventListener.bind(this))})}unmountCurrentVM(t,n){var o;(o=t.unmount)==null||o.call(t),n&&delete window[n.name]}unmountAll(){for(const t of Object.keys(this.viewModelObj)){const n=this.viewModelObj[t];if(typeof(n==null?void 0:n.unmount)=="function"){n==null||n.unmount();for(const o of Object.keys(n))n[o]=null}window[t]=null,this.viewModelObj[t]=null,delete window[t],delete this.viewModelObj[t]}}}const Oh=new Th;Oh.init();
