var Di=Object.defineProperty;var Ni=(n,t,e)=>t in n?Di(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var d=(n,t,e)=>(Ni(n,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Li=`<div class="row mb-2">
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
`,Mi=`<div class="row">
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
      <select class="multiple-select full-width">
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
      <select class="multiple-select full-width">
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
`,$i=`<div class="row">
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
    <label class="col-sm-2"> Multiple Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="multiple-select full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
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
      <select multiple="multiple" class="multiple-select full-width">
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
`,Fi=`<div class="row mb-2">
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
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
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
`,Ii=`<div class="row mb-2">
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
      <select class="select">
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
      <select class="data"></select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-3"> Large width </label>

    <div class="col-sm-9">
      <select class="select">
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
      <select class="select" data-width="200">
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
      <select class="select" multiple="multiple">
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
      <select class="select" multiple="multiple">
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
`,Bi=`<div class="row mb-2">
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
`,Ri=`<div class="row mb-2">
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
      <select multiple="multiple" class="full-width">
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
      <select multiple="multiple" class="full-width">
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
`,Pi=`<div class="row mb-2">
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
        <select name="select2" class="full-width" multiple required>
          <option value="1">First</option>
          <option value="2">Second</option>
          <option value="3">Third</option>
          <option value="4">Fourth</option>
        </select>
      </div>
    </div>

    <div class="mb-3 row">
      <div class="col-sm-10 offset-sm-2">
        <button type="button" class="btn btn-primary submit7">Submit</button>
      </div>
    </div>
  </form>
</div>
`,Hi=`<div class="row mb-2">
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
`,ji=`<div class="row mb-2">
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
`,Vi=`<div class="row mb-2">
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
      <select multiple="multiple" id="select" class="full-width">
    </div>
  </div>
</div>
`,Gi=`<div class="row mb-2">
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
    <label class="col-sm-2 col-form-label col-form-label-sm"> Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="form-control form-control-sm" placeholder="form-control-sm">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
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
    <label class="col-sm-2 col-form-label"> Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="form-control" placeholder="form-control">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
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
    <label class="col-sm-2 col-form-label col-form-label-lg"> Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="form-control form-control-lg" placeholder="form-control-lg">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
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
`,Wi=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Checkbox/Radio Icons with Font-Awesome
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
`,Ji=`<div class="row mb-2">
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
    <h5>NPM</h5>
    <p>Install and manage Multiple Select's CSS, JavaScript using NPM.</p>

    <div style="background: #f7f7f7; padding: 10px">
      <pre> $ npm install multiple-select </pre>
    </div>
  </section>
</div>
`,Ui=`<div class="row mb-2">
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
`,Eo=`<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
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
      <ul class="well nav nav-pills nav-stacked">
        <!-- All Example Routes -->
      </ul>
    </section>

    <section class="panel-wm-content"></section>
  </div>
</div>
`,qi=`<div class="row mb-2">
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
`,Ki=`<div class="row mb-2">
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
`,zi=`<div class="row mb-2">
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
`,Yi=`<div class="row mb-2">
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
`,Xi=`<div class="row mb-2">
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
`,Qi=`<div class="row mb-2">
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
      <select>
        <option value="1">Value 1</option>
        <option value="2">Value 2</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Multiple Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
        <option value="1" selected>Value 1</option>
        <option value="2">Value 2</option>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Group Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
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
`,Zi=`<div class="row mb-2">
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
`,ts=`<div class="row mb-2">
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
`,es=`<div class="row mb-2">
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
`,ns=`<div class="row mb-2">
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
`,os=`<div class="row mb-2">
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
`,is=`<div class="row mb-2">
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
      <select id="select1" class="full-width" multiple="multiple" placeholder="Here is the placeholder via attribute">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
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
      <select id="select2" class="full-width" multiple="multiple">
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
`,ss=`<div class="row mb-2">
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
    <label class="col-sm-2"> Basic Select </label>

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
    <label class="col-sm-2"> Group Select </label>

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
</div>
`,ls=`<div class="row mb-2">
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
`,as=`<div class="row mb-2">
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
`,rs=`<div class="row mb-2">
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
`,ps=`<div class="row mb-2">
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
`,cs=`<div class="row mb-2">
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
      <select class="full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
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
`,us=`<div class="row mb-2">
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
`,ds=`<div class="row mb-2">
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
`,hs=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>displayTitle: true</code> option to display title of selected text.</div>
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
`,ms=`<div class="row mb-2">
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
`,vs=`<div class="row mb-2">
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
`,bs=`<div class="row mb-2">
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
`,fs=`<div class="row mb-2">
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
`,gs=`<div class="row mb-2">
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
`,Es=`<div class="row mb-2">
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
`,_s=`<div class="row mb-2">
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
        <select multiple="multiple" class="select1 full-width">
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
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
        <select multiple="multiple" data-container=".my-container" class="select2 full-width">
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
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
        <select multiple="multiple" class="select3 full-width">
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
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
`,ys=`<div class="row mb-2">
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
      <select class="full-width">
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
      <select class="full-width">
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

  <div class="mb-3 row">
    <label class="col-sm-2"> Group Select </label>

    <div class="col-sm-10">
      <select multiple="multiple" class="full-width">
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
`,ws=`<div class="row mb-2">
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
          <option value="1">000</option>
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
`,As=`<div class="row mb-2">
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
`,Ss=`<div class="row mb-2">
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
      <select class="full-width">
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
`,Os=`<div class="row mb-2">
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
      <select class="full-width">
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
          <option value="10">Option 10</option>
        </optgroup>
      </select>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"> Group Select2 </label>

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
          <option value="10">Option 10</option>
          <option value="11">Option 11</option>
        </optgroup>
      </select>
    </div>
  </div>
</div>
`,Cs=`<div class="row mb-2">
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
`,Ts=`<div class="row mb-2">
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
      <select class="full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
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
`,ks=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Show OK Button
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
      <select multiple="multiple" class="select1 full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
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
      <select multiple="multiple" class="select2 full-width">
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
      <select multiple="multiple" class="select3 full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
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
      <select class="select4 full-width">
        <option value="1">First</option>
        <option value="2">Second</option>
        <option value="3">Third</option>
        <option value="4">Fourth</option>
      </select>
    </div>
  </div>
</div>
`,xs=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The Styler
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
    <div class="demo-subtitle">Use <code>styler</code> to custom the item style.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2"> Basic Select </label>

    <div class="col-sm-10">
      <select id="basic" multiple="multiple" class="full-width">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
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
      <select id="group" multiple="multiple" class="full-width">
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
`,Ds=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Text Template
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
    <div class="demo-subtitle">Use <code>textTemplate</code> to custom the text template.</div>
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
`,Ns=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Label Template
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
    <div class="demo-subtitle">Use <code>labelTemplate</code> to custom the optgroup label template.</div>
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
`,Ls=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Auto-Adjust Drop Position
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
    <div class="demo-subtitle">
      Use <code>autoAdjustDropPosition</code> to automatically adjust the drop position from available space (top, bottom).
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

  <div class="mb-3 row" style="margin-top: calc(100vh - 275px)">
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
`,Ms=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Auto-Adjust Drop Height/Width
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
      <select id="select1" multiple="multiple" data-width="75">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
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
      <select id="select2" multiple="multiple" data-width="200">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
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
      <select id="select3" multiple="multiple">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
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
      <select id="select4" data-width="200">
        <option value="1">This is the first option and value is 1</option>
        <option value="2">This is the second option and value is 2</option>
        <option value="3">This is the third option and value is 3</option>
        <option value="4">This is the fourth option and value is 4</option>
      </select>
    </div>
  </div>
</div>
`,$s=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Use Select Option as Label
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
      <select id="select1" multiple="multiple" data-width="150">
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
      <select id="select2" multiple="multiple" data-width="150"></select>
    </div>
  </div>
</div>
`,Fs=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      Sanitizer
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
    <div class="demo-subtitle">
      Use <code>sanitizer</code> callback option to sanitize all html code and prevent cross-site scripting attack.
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
`;var F="top",R="bottom",P="right",I="left",we="auto",Pt=[F,R,P,I],_t="start",Lt="end",_o="clippingParents",ln="viewport",kt="popper",yo="reference",Ye=Pt.reduce(function(n,t){return n.concat([t+"-"+_t,t+"-"+Lt])},[]),an=[].concat(Pt,[we]).reduce(function(n,t){return n.concat([t,t+"-"+_t,t+"-"+Lt])},[]),wo="beforeRead",Ao="read",So="afterRead",Oo="beforeMain",Co="main",To="afterMain",ko="beforeWrite",xo="write",Do="afterWrite",No=[wo,Ao,So,Oo,Co,To,ko,xo,Do];function X(n){return n?(n.nodeName||"").toLowerCase():null}function V(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var t=n.ownerDocument;return t&&t.defaultView||window}return n}function yt(n){var t=V(n).Element;return n instanceof t||n instanceof Element}function H(n){var t=V(n).HTMLElement;return n instanceof t||n instanceof HTMLElement}function rn(n){if(typeof ShadowRoot>"u")return!1;var t=V(n).ShadowRoot;return n instanceof t||n instanceof ShadowRoot}function Is(n){var t=n.state;Object.keys(t.elements).forEach(function(e){var o=t.styles[e]||{},i=t.attributes[e]||{},s=t.elements[e];!H(s)||!X(s)||(Object.assign(s.style,o),Object.keys(i).forEach(function(l){var a=i[l];a===!1?s.removeAttribute(l):s.setAttribute(l,a===!0?"":a)}))})}function Bs(n){var t=n.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(o){var i=t.elements[o],s=t.attributes[o]||{},l=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:e[o]),a=l.reduce(function(r,c){return r[c]="",r},{});!H(i)||!X(i)||(Object.assign(i.style,a),Object.keys(s).forEach(function(r){i.removeAttribute(r)}))})}}const pn={name:"applyStyles",enabled:!0,phase:"write",fn:Is,effect:Bs,requires:["computeStyles"]};function z(n){return n.split("-")[0]}var Et=Math.max,ge=Math.min,Mt=Math.round;function Xe(){var n=navigator.userAgentData;return n!=null&&n.brands?n.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Lo(){return!/^((?!chrome|android).)*safari/i.test(Xe())}function $t(n,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var o=n.getBoundingClientRect(),i=1,s=1;t&&H(n)&&(i=n.offsetWidth>0&&Mt(o.width)/n.offsetWidth||1,s=n.offsetHeight>0&&Mt(o.height)/n.offsetHeight||1);var l=yt(n)?V(n):window,a=l.visualViewport,r=!Lo()&&e,c=(o.left+(r&&a?a.offsetLeft:0))/i,p=(o.top+(r&&a?a.offsetTop:0))/s,m=o.width/i,f=o.height/s;return{width:m,height:f,top:p,right:c+m,bottom:p+f,left:c,x:c,y:p}}function cn(n){var t=$t(n),e=n.offsetWidth,o=n.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:n.offsetLeft,y:n.offsetTop,width:e,height:o}}function Mo(n,t){var e=t.getRootNode&&t.getRootNode();if(n.contains(t))return!0;if(e&&rn(e)){var o=t;do{if(o&&n.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function nt(n){return V(n).getComputedStyle(n)}function Rs(n){return["table","td","th"].indexOf(X(n))>=0}function pt(n){return((yt(n)?n.ownerDocument:n.document)||window.document).documentElement}function Ae(n){return X(n)==="html"?n:n.assignedSlot||n.parentNode||(rn(n)?n.host:null)||pt(n)}function Mn(n){return!H(n)||nt(n).position==="fixed"?null:n.offsetParent}function Ps(n){var t=/firefox/i.test(Xe()),e=/Trident/i.test(Xe());if(e&&H(n)){var o=nt(n);if(o.position==="fixed")return null}var i=Ae(n);for(rn(i)&&(i=i.host);H(i)&&["html","body"].indexOf(X(i))<0;){var s=nt(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function Yt(n){for(var t=V(n),e=Mn(n);e&&Rs(e)&&nt(e).position==="static";)e=Mn(e);return e&&(X(e)==="html"||X(e)==="body"&&nt(e).position==="static")?t:e||Ps(n)||t}function un(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function qt(n,t,e){return Et(n,ge(t,e))}function Hs(n,t,e){var o=qt(n,t,e);return o>e?e:o}function $o(){return{top:0,right:0,bottom:0,left:0}}function Fo(n){return Object.assign({},$o(),n)}function Io(n,t){return t.reduce(function(e,o){return e[o]=n,e},{})}var js=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,Fo(typeof t!="number"?t:Io(t,Pt))};function Vs(n){var t,e=n.state,o=n.name,i=n.options,s=e.elements.arrow,l=e.modifiersData.popperOffsets,a=z(e.placement),r=un(a),c=[I,P].indexOf(a)>=0,p=c?"height":"width";if(!(!s||!l)){var m=js(i.padding,e),f=cn(s),b=r==="y"?F:I,S=r==="y"?R:P,E=e.rects.reference[p]+e.rects.reference[r]-l[r]-e.rects.popper[p],y=l[r]-e.rects.reference[r],O=Yt(s),T=O?r==="y"?O.clientHeight||0:O.clientWidth||0:0,k=E/2-y/2,_=m[b],w=T-f[p]-m[S],A=T/2-f[p]/2+k,C=qt(_,A,w),L=r;e.modifiersData[o]=(t={},t[L]=C,t.centerOffset=C-A,t)}}function Gs(n){var t=n.state,e=n.options,o=e.element,i=o===void 0?"[data-popper-arrow]":o;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||Mo(t.elements.popper,i)&&(t.elements.arrow=i))}const Bo={name:"arrow",enabled:!0,phase:"main",fn:Vs,effect:Gs,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ft(n){return n.split("-")[1]}var Ws={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Js(n){var t=n.x,e=n.y,o=window,i=o.devicePixelRatio||1;return{x:Mt(t*i)/i||0,y:Mt(e*i)/i||0}}function $n(n){var t,e=n.popper,o=n.popperRect,i=n.placement,s=n.variation,l=n.offsets,a=n.position,r=n.gpuAcceleration,c=n.adaptive,p=n.roundOffsets,m=n.isFixed,f=l.x,b=f===void 0?0:f,S=l.y,E=S===void 0?0:S,y=typeof p=="function"?p({x:b,y:E}):{x:b,y:E};b=y.x,E=y.y;var O=l.hasOwnProperty("x"),T=l.hasOwnProperty("y"),k=I,_=F,w=window;if(c){var A=Yt(e),C="clientHeight",L="clientWidth";if(A===V(e)&&(A=pt(e),nt(A).position!=="static"&&a==="absolute"&&(C="scrollHeight",L="scrollWidth")),A=A,i===F||(i===I||i===P)&&s===Lt){_=R;var N=m&&A===w&&w.visualViewport?w.visualViewport.height:A[C];E-=N-o.height,E*=r?1:-1}if(i===I||(i===F||i===R)&&s===Lt){k=P;var D=m&&A===w&&w.visualViewport?w.visualViewport.width:A[L];b-=D-o.width,b*=r?1:-1}}var M=Object.assign({position:a},c&&Ws),W=p===!0?Js({x:b,y:E}):{x:b,y:E};if(b=W.x,E=W.y,r){var $;return Object.assign({},M,($={},$[_]=T?"0":"",$[k]=O?"0":"",$.transform=(w.devicePixelRatio||1)<=1?"translate("+b+"px, "+E+"px)":"translate3d("+b+"px, "+E+"px, 0)",$))}return Object.assign({},M,(t={},t[_]=T?E+"px":"",t[k]=O?b+"px":"",t.transform="",t))}function Us(n){var t=n.state,e=n.options,o=e.gpuAcceleration,i=o===void 0?!0:o,s=e.adaptive,l=s===void 0?!0:s,a=e.roundOffsets,r=a===void 0?!0:a,c={placement:z(t.placement),variation:Ft(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,$n(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:r})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,$n(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:r})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const dn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Us,data:{}};var le={passive:!0};function qs(n){var t=n.state,e=n.instance,o=n.options,i=o.scroll,s=i===void 0?!0:i,l=o.resize,a=l===void 0?!0:l,r=V(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&c.forEach(function(p){p.addEventListener("scroll",e.update,le)}),a&&r.addEventListener("resize",e.update,le),function(){s&&c.forEach(function(p){p.removeEventListener("scroll",e.update,le)}),a&&r.removeEventListener("resize",e.update,le)}}const hn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:qs,data:{}};var Ks={left:"right",right:"left",bottom:"top",top:"bottom"};function ve(n){return n.replace(/left|right|bottom|top/g,function(t){return Ks[t]})}var zs={start:"end",end:"start"};function Fn(n){return n.replace(/start|end/g,function(t){return zs[t]})}function mn(n){var t=V(n),e=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:e,scrollTop:o}}function vn(n){return $t(pt(n)).left+mn(n).scrollLeft}function Ys(n,t){var e=V(n),o=pt(n),i=e.visualViewport,s=o.clientWidth,l=o.clientHeight,a=0,r=0;if(i){s=i.width,l=i.height;var c=Lo();(c||!c&&t==="fixed")&&(a=i.offsetLeft,r=i.offsetTop)}return{width:s,height:l,x:a+vn(n),y:r}}function Xs(n){var t,e=pt(n),o=mn(n),i=(t=n.ownerDocument)==null?void 0:t.body,s=Et(e.scrollWidth,e.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=Et(e.scrollHeight,e.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-o.scrollLeft+vn(n),r=-o.scrollTop;return nt(i||e).direction==="rtl"&&(a+=Et(e.clientWidth,i?i.clientWidth:0)-s),{width:s,height:l,x:a,y:r}}function bn(n){var t=nt(n),e=t.overflow,o=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+i+o)}function Ro(n){return["html","body","#document"].indexOf(X(n))>=0?n.ownerDocument.body:H(n)&&bn(n)?n:Ro(Ae(n))}function Kt(n,t){var e;t===void 0&&(t=[]);var o=Ro(n),i=o===((e=n.ownerDocument)==null?void 0:e.body),s=V(o),l=i?[s].concat(s.visualViewport||[],bn(o)?o:[]):o,a=t.concat(l);return i?a:a.concat(Kt(Ae(l)))}function Qe(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function Qs(n,t){var e=$t(n,!1,t==="fixed");return e.top=e.top+n.clientTop,e.left=e.left+n.clientLeft,e.bottom=e.top+n.clientHeight,e.right=e.left+n.clientWidth,e.width=n.clientWidth,e.height=n.clientHeight,e.x=e.left,e.y=e.top,e}function In(n,t,e){return t===ln?Qe(Ys(n,e)):yt(t)?Qs(t,e):Qe(Xs(pt(n)))}function Zs(n){var t=Kt(Ae(n)),e=["absolute","fixed"].indexOf(nt(n).position)>=0,o=e&&H(n)?Yt(n):n;return yt(o)?t.filter(function(i){return yt(i)&&Mo(i,o)&&X(i)!=="body"}):[]}function tl(n,t,e,o){var i=t==="clippingParents"?Zs(n):[].concat(t),s=[].concat(i,[e]),l=s[0],a=s.reduce(function(r,c){var p=In(n,c,o);return r.top=Et(p.top,r.top),r.right=ge(p.right,r.right),r.bottom=ge(p.bottom,r.bottom),r.left=Et(p.left,r.left),r},In(n,l,o));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Po(n){var t=n.reference,e=n.element,o=n.placement,i=o?z(o):null,s=o?Ft(o):null,l=t.x+t.width/2-e.width/2,a=t.y+t.height/2-e.height/2,r;switch(i){case F:r={x:l,y:t.y-e.height};break;case R:r={x:l,y:t.y+t.height};break;case P:r={x:t.x+t.width,y:a};break;case I:r={x:t.x-e.width,y:a};break;default:r={x:t.x,y:t.y}}var c=i?un(i):null;if(c!=null){var p=c==="y"?"height":"width";switch(s){case _t:r[c]=r[c]-(t[p]/2-e[p]/2);break;case Lt:r[c]=r[c]+(t[p]/2-e[p]/2);break}}return r}function It(n,t){t===void 0&&(t={});var e=t,o=e.placement,i=o===void 0?n.placement:o,s=e.strategy,l=s===void 0?n.strategy:s,a=e.boundary,r=a===void 0?_o:a,c=e.rootBoundary,p=c===void 0?ln:c,m=e.elementContext,f=m===void 0?kt:m,b=e.altBoundary,S=b===void 0?!1:b,E=e.padding,y=E===void 0?0:E,O=Fo(typeof y!="number"?y:Io(y,Pt)),T=f===kt?yo:kt,k=n.rects.popper,_=n.elements[S?T:f],w=tl(yt(_)?_:_.contextElement||pt(n.elements.popper),r,p,l),A=$t(n.elements.reference),C=Po({reference:A,element:k,strategy:"absolute",placement:i}),L=Qe(Object.assign({},k,C)),N=f===kt?L:A,D={top:w.top-N.top+O.top,bottom:N.bottom-w.bottom+O.bottom,left:w.left-N.left+O.left,right:N.right-w.right+O.right},M=n.modifiersData.offset;if(f===kt&&M){var W=M[i];Object.keys(D).forEach(function($){var dt=[P,R].indexOf($)>=0?1:-1,ht=[F,R].indexOf($)>=0?"y":"x";D[$]+=W[ht]*dt})}return D}function el(n,t){t===void 0&&(t={});var e=t,o=e.placement,i=e.boundary,s=e.rootBoundary,l=e.padding,a=e.flipVariations,r=e.allowedAutoPlacements,c=r===void 0?an:r,p=Ft(o),m=p?a?Ye:Ye.filter(function(S){return Ft(S)===p}):Pt,f=m.filter(function(S){return c.indexOf(S)>=0});f.length===0&&(f=m);var b=f.reduce(function(S,E){return S[E]=It(n,{placement:E,boundary:i,rootBoundary:s,padding:l})[z(E)],S},{});return Object.keys(b).sort(function(S,E){return b[S]-b[E]})}function nl(n){if(z(n)===we)return[];var t=ve(n);return[Fn(n),t,Fn(t)]}function ol(n){var t=n.state,e=n.options,o=n.name;if(!t.modifiersData[o]._skip){for(var i=e.mainAxis,s=i===void 0?!0:i,l=e.altAxis,a=l===void 0?!0:l,r=e.fallbackPlacements,c=e.padding,p=e.boundary,m=e.rootBoundary,f=e.altBoundary,b=e.flipVariations,S=b===void 0?!0:b,E=e.allowedAutoPlacements,y=t.options.placement,O=z(y),T=O===y,k=r||(T||!S?[ve(y)]:nl(y)),_=[y].concat(k).reduce(function(St,it){return St.concat(z(it)===we?el(t,{placement:it,boundary:p,rootBoundary:m,padding:c,flipVariations:S,allowedAutoPlacements:E}):it)},[]),w=t.rects.reference,A=t.rects.popper,C=new Map,L=!0,N=_[0],D=0;D<_.length;D++){var M=_[D],W=z(M),$=Ft(M)===_t,dt=[F,R].indexOf(W)>=0,ht=dt?"width":"height",B=It(t,{placement:M,boundary:p,rootBoundary:m,altBoundary:f,padding:c}),J=dt?$?P:I:$?R:F;w[ht]>A[ht]&&(J=ve(J));var ee=ve(J),mt=[];if(s&&mt.push(B[W]<=0),a&&mt.push(B[J]<=0,B[ee]<=0),mt.every(function(St){return St})){N=M,L=!1;break}C.set(M,mt)}if(L)for(var ne=S?3:1,De=function(it){var Wt=_.find(function(ie){var vt=C.get(ie);if(vt)return vt.slice(0,it).every(function(Ne){return Ne})});if(Wt)return N=Wt,"break"},Gt=ne;Gt>0;Gt--){var oe=De(Gt);if(oe==="break")break}t.placement!==N&&(t.modifiersData[o]._skip=!0,t.placement=N,t.reset=!0)}}const Ho={name:"flip",enabled:!0,phase:"main",fn:ol,requiresIfExists:["offset"],data:{_skip:!1}};function Bn(n,t,e){return e===void 0&&(e={x:0,y:0}),{top:n.top-t.height-e.y,right:n.right-t.width+e.x,bottom:n.bottom-t.height+e.y,left:n.left-t.width-e.x}}function Rn(n){return[F,P,R,I].some(function(t){return n[t]>=0})}function il(n){var t=n.state,e=n.name,o=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,l=It(t,{elementContext:"reference"}),a=It(t,{altBoundary:!0}),r=Bn(l,o),c=Bn(a,i,s),p=Rn(r),m=Rn(c);t.modifiersData[e]={referenceClippingOffsets:r,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":m})}const jo={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:il};function sl(n,t,e){var o=z(n),i=[I,F].indexOf(o)>=0?-1:1,s=typeof e=="function"?e(Object.assign({},t,{placement:n})):e,l=s[0],a=s[1];return l=l||0,a=(a||0)*i,[I,P].indexOf(o)>=0?{x:a,y:l}:{x:l,y:a}}function ll(n){var t=n.state,e=n.options,o=n.name,i=e.offset,s=i===void 0?[0,0]:i,l=an.reduce(function(p,m){return p[m]=sl(m,t.rects,s),p},{}),a=l[t.placement],r=a.x,c=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=r,t.modifiersData.popperOffsets.y+=c),t.modifiersData[o]=l}const Vo={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ll};function al(n){var t=n.state,e=n.name;t.modifiersData[e]=Po({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const fn={name:"popperOffsets",enabled:!0,phase:"read",fn:al,data:{}};function rl(n){return n==="x"?"y":"x"}function pl(n){var t=n.state,e=n.options,o=n.name,i=e.mainAxis,s=i===void 0?!0:i,l=e.altAxis,a=l===void 0?!1:l,r=e.boundary,c=e.rootBoundary,p=e.altBoundary,m=e.padding,f=e.tether,b=f===void 0?!0:f,S=e.tetherOffset,E=S===void 0?0:S,y=It(t,{boundary:r,rootBoundary:c,padding:m,altBoundary:p}),O=z(t.placement),T=Ft(t.placement),k=!T,_=un(O),w=rl(_),A=t.modifiersData.popperOffsets,C=t.rects.reference,L=t.rects.popper,N=typeof E=="function"?E(Object.assign({},t.rects,{placement:t.placement})):E,D=typeof N=="number"?{mainAxis:N,altAxis:N}:Object.assign({mainAxis:0,altAxis:0},N),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,W={x:0,y:0};if(A){if(s){var $,dt=_==="y"?F:I,ht=_==="y"?R:P,B=_==="y"?"height":"width",J=A[_],ee=J+y[dt],mt=J-y[ht],ne=b?-L[B]/2:0,De=T===_t?C[B]:L[B],Gt=T===_t?-L[B]:-C[B],oe=t.elements.arrow,St=b&&oe?cn(oe):{width:0,height:0},it=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:$o(),Wt=it[dt],ie=it[ht],vt=qt(0,C[B],St[B]),Ne=k?C[B]/2-ne-vt-Wt-D.mainAxis:De-vt-Wt-D.mainAxis,Si=k?-C[B]/2+ne+vt+ie+D.mainAxis:Gt+vt+ie+D.mainAxis,Le=t.elements.arrow&&Yt(t.elements.arrow),Oi=Le?_==="y"?Le.clientTop||0:Le.clientLeft||0:0,Sn=($=M==null?void 0:M[_])!=null?$:0,Ci=J+Ne-Sn-Oi,Ti=J+Si-Sn,On=qt(b?ge(ee,Ci):ee,J,b?Et(mt,Ti):mt);A[_]=On,W[_]=On-J}if(a){var Cn,ki=_==="x"?F:I,xi=_==="x"?R:P,bt=A[w],se=w==="y"?"height":"width",Tn=bt+y[ki],kn=bt-y[xi],Me=[F,I].indexOf(O)!==-1,xn=(Cn=M==null?void 0:M[w])!=null?Cn:0,Dn=Me?Tn:bt-C[se]-L[se]-xn+D.altAxis,Nn=Me?bt+C[se]+L[se]-xn-D.altAxis:kn,Ln=b&&Me?Hs(Dn,bt,Nn):qt(b?Dn:Tn,bt,b?Nn:kn);A[w]=Ln,W[w]=Ln-bt}t.modifiersData[o]=W}}const Go={name:"preventOverflow",enabled:!0,phase:"main",fn:pl,requiresIfExists:["offset"]};function cl(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function ul(n){return n===V(n)||!H(n)?mn(n):cl(n)}function dl(n){var t=n.getBoundingClientRect(),e=Mt(t.width)/n.offsetWidth||1,o=Mt(t.height)/n.offsetHeight||1;return e!==1||o!==1}function hl(n,t,e){e===void 0&&(e=!1);var o=H(t),i=H(t)&&dl(t),s=pt(t),l=$t(n,i,e),a={scrollLeft:0,scrollTop:0},r={x:0,y:0};return(o||!o&&!e)&&((X(t)!=="body"||bn(s))&&(a=ul(t)),H(t)?(r=$t(t,!0),r.x+=t.clientLeft,r.y+=t.clientTop):s&&(r.x=vn(s))),{x:l.left+a.scrollLeft-r.x,y:l.top+a.scrollTop-r.y,width:l.width,height:l.height}}function ml(n){var t=new Map,e=new Set,o=[];n.forEach(function(s){t.set(s.name,s)});function i(s){e.add(s.name);var l=[].concat(s.requires||[],s.requiresIfExists||[]);l.forEach(function(a){if(!e.has(a)){var r=t.get(a);r&&i(r)}}),o.push(s)}return n.forEach(function(s){e.has(s.name)||i(s)}),o}function vl(n){var t=ml(n);return No.reduce(function(e,o){return e.concat(t.filter(function(i){return i.phase===o}))},[])}function bl(n){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(n())})})),t}}function fl(n){var t=n.reduce(function(e,o){var i=e[o.name];return e[o.name]=i?Object.assign({},i,o,{options:Object.assign({},i.options,o.options),data:Object.assign({},i.data,o.data)}):o,e},{});return Object.keys(t).map(function(e){return t[e]})}var Pn={placement:"bottom",modifiers:[],strategy:"absolute"};function Hn(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Se(n){n===void 0&&(n={});var t=n,e=t.defaultModifiers,o=e===void 0?[]:e,i=t.defaultOptions,s=i===void 0?Pn:i;return function(a,r,c){c===void 0&&(c=s);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},Pn,s),modifiersData:{},elements:{reference:a,popper:r},attributes:{},styles:{}},m=[],f=!1,b={state:p,setOptions:function(O){var T=typeof O=="function"?O(p.options):O;E(),p.options=Object.assign({},s,p.options,T),p.scrollParents={reference:yt(a)?Kt(a):a.contextElement?Kt(a.contextElement):[],popper:Kt(r)};var k=vl(fl([].concat(o,p.options.modifiers)));return p.orderedModifiers=k.filter(function(_){return _.enabled}),S(),b.update()},forceUpdate:function(){if(!f){var O=p.elements,T=O.reference,k=O.popper;if(Hn(T,k)){p.rects={reference:hl(T,Yt(k),p.options.strategy==="fixed"),popper:cn(k)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(D){return p.modifiersData[D.name]=Object.assign({},D.data)});for(var _=0;_<p.orderedModifiers.length;_++){if(p.reset===!0){p.reset=!1,_=-1;continue}var w=p.orderedModifiers[_],A=w.fn,C=w.options,L=C===void 0?{}:C,N=w.name;typeof A=="function"&&(p=A({state:p,options:L,name:N,instance:b})||p)}}}},update:bl(function(){return new Promise(function(y){b.forceUpdate(),y(p)})}),destroy:function(){E(),f=!0}};if(!Hn(a,r))return b;b.setOptions(c).then(function(y){!f&&c.onFirstUpdate&&c.onFirstUpdate(y)});function S(){p.orderedModifiers.forEach(function(y){var O=y.name,T=y.options,k=T===void 0?{}:T,_=y.effect;if(typeof _=="function"){var w=_({state:p,name:O,instance:b,options:k}),A=function(){};m.push(w||A)}})}function E(){m.forEach(function(y){return y()}),m=[]}return b}}var gl=Se(),El=[hn,fn,dn,pn],_l=Se({defaultModifiers:El}),yl=[hn,fn,dn,pn,Vo,Ho,Go,Bo,jo],gn=Se({defaultModifiers:yl});const Wo=Object.freeze(Object.defineProperty({__proto__:null,afterMain:To,afterRead:So,afterWrite:Do,applyStyles:pn,arrow:Bo,auto:we,basePlacements:Pt,beforeMain:Oo,beforeRead:wo,beforeWrite:ko,bottom:R,clippingParents:_o,computeStyles:dn,createPopper:gn,createPopperBase:gl,createPopperLite:_l,detectOverflow:It,end:Lt,eventListeners:hn,flip:Ho,hide:jo,left:I,main:Co,modifierPhases:No,offset:Vo,placements:an,popper:kt,popperGenerator:Se,popperOffsets:fn,preventOverflow:Go,read:Ao,reference:yo,right:P,start:_t,top:F,variationPlacements:Ye,viewport:ln,write:xo},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const wl=1e6,Al=1e3,Ze="transitionend",Sl=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),Ol=n=>{do n+=Math.floor(Math.random()*wl);while(document.getElementById(n));return n},Jo=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let e=n.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?e.trim():null}return t},Uo=n=>{const t=Jo(n);return t&&document.querySelector(t)?t:null},Z=n=>{const t=Jo(n);return t?document.querySelector(t):null},Cl=n=>{if(!n)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(n);const o=Number.parseFloat(t),i=Number.parseFloat(e);return!o&&!i?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*Al)},qo=n=>{n.dispatchEvent(new Event(Ze))},tt=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),lt=n=>tt(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(n):null,Ht=n=>{if(!tt(n)||n.getClientRects().length===0)return!1;const t=getComputedStyle(n).getPropertyValue("visibility")==="visible",e=n.closest("details:not([open])");if(!e)return t;if(e!==n){const o=n.closest("summary");if(o&&o.parentNode!==e||o===null)return!1}return t},at=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",Ko=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const t=n.getRootNode();return t instanceof ShadowRoot?t:null}return n instanceof ShadowRoot?n:n.parentNode?Ko(n.parentNode):null},Ee=()=>{},Xt=n=>{n.offsetHeight},zo=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,$e=[],Tl=n=>{document.readyState==="loading"?($e.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of $e)t()}),$e.push(n)):n()},j=()=>document.documentElement.dir==="rtl",G=n=>{Tl(()=>{const t=zo();if(t){const e=n.NAME,o=t.fn[e];t.fn[e]=n.jQueryInterface,t.fn[e].Constructor=n,t.fn[e].noConflict=()=>(t.fn[e]=o,n.jQueryInterface)}})},Q=n=>{typeof n=="function"&&n()},Yo=(n,t,e=!0)=>{if(!e){Q(n);return}const o=5,i=Cl(t)+o;let s=!1;const l=({target:a})=>{a===t&&(s=!0,t.removeEventListener(Ze,l),Q(n))};t.addEventListener(Ze,l),setTimeout(()=>{s||qo(t)},i)},En=(n,t,e,o)=>{const i=n.length;let s=n.indexOf(t);return s===-1?!e&&o?n[i-1]:n[0]:(s+=e?1:-1,o&&(s=(s+i)%i),n[Math.max(0,Math.min(s,i-1))])},kl=/[^.]*(?=\..*)\.|.*/,xl=/\..*/,Dl=/::\d+$/,Fe={};let jn=1;const Xo={mouseenter:"mouseover",mouseleave:"mouseout"},Nl=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Qo(n,t){return t&&`${t}::${jn++}`||n.uidEvent||jn++}function Zo(n){const t=Qo(n);return n.uidEvent=t,Fe[t]=Fe[t]||{},Fe[t]}function Ll(n,t){return function e(o){return _n(o,{delegateTarget:n}),e.oneOff&&u.off(n,o.type,t),t.apply(n,[o])}}function Ml(n,t,e){return function o(i){const s=n.querySelectorAll(t);for(let{target:l}=i;l&&l!==this;l=l.parentNode)for(const a of s)if(a===l)return _n(i,{delegateTarget:l}),o.oneOff&&u.off(n,i.type,t,e),e.apply(l,[i])}}function ti(n,t,e=null){return Object.values(n).find(o=>o.callable===t&&o.delegationSelector===e)}function ei(n,t,e){const o=typeof t=="string",i=o?e:t||e;let s=ni(n);return Nl.has(s)||(s=n),[o,i,s]}function Vn(n,t,e,o,i){if(typeof t!="string"||!n)return;let[s,l,a]=ei(t,e,o);t in Xo&&(l=(S=>function(E){if(!E.relatedTarget||E.relatedTarget!==E.delegateTarget&&!E.delegateTarget.contains(E.relatedTarget))return S.call(this,E)})(l));const r=Zo(n),c=r[a]||(r[a]={}),p=ti(c,l,s?e:null);if(p){p.oneOff=p.oneOff&&i;return}const m=Qo(l,t.replace(kl,"")),f=s?Ml(n,e,l):Ll(n,l);f.delegationSelector=s?e:null,f.callable=l,f.oneOff=i,f.uidEvent=m,c[m]=f,n.addEventListener(a,f,s)}function tn(n,t,e,o,i){const s=ti(t[e],o,i);s&&(n.removeEventListener(e,s,Boolean(i)),delete t[e][s.uidEvent])}function $l(n,t,e,o){const i=t[e]||{};for(const s of Object.keys(i))if(s.includes(o)){const l=i[s];tn(n,t,e,l.callable,l.delegationSelector)}}function ni(n){return n=n.replace(xl,""),Xo[n]||n}const u={on(n,t,e,o){Vn(n,t,e,o,!1)},one(n,t,e,o){Vn(n,t,e,o,!0)},off(n,t,e,o){if(typeof t!="string"||!n)return;const[i,s,l]=ei(t,e,o),a=l!==t,r=Zo(n),c=r[l]||{},p=t.startsWith(".");if(typeof s<"u"){if(!Object.keys(c).length)return;tn(n,r,l,s,i?e:null);return}if(p)for(const m of Object.keys(r))$l(n,r,m,t.slice(1));for(const m of Object.keys(c)){const f=m.replace(Dl,"");if(!a||t.includes(f)){const b=c[m];tn(n,r,l,b.callable,b.delegationSelector)}}},trigger(n,t,e){if(typeof t!="string"||!n)return null;const o=zo(),i=ni(t),s=t!==i;let l=null,a=!0,r=!0,c=!1;s&&o&&(l=o.Event(t,e),o(n).trigger(l),a=!l.isPropagationStopped(),r=!l.isImmediatePropagationStopped(),c=l.isDefaultPrevented());let p=new Event(t,{bubbles:a,cancelable:!0});return p=_n(p,e),c&&p.preventDefault(),r&&n.dispatchEvent(p),p.defaultPrevented&&l&&l.preventDefault(),p}};function _n(n,t){for(const[e,o]of Object.entries(t||{}))try{n[e]=o}catch{Object.defineProperty(n,e,{configurable:!0,get(){return o}})}return n}const st=new Map,Ie={set(n,t,e){st.has(n)||st.set(n,new Map);const o=st.get(n);if(!o.has(t)&&o.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`);return}o.set(t,e)},get(n,t){return st.has(n)&&st.get(n).get(t)||null},remove(n,t){if(!st.has(n))return;const e=st.get(n);e.delete(t),e.size===0&&st.delete(n)}};function Gn(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function Be(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const et={setDataAttribute(n,t,e){n.setAttribute(`data-bs-${Be(t)}`,e)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${Be(t)}`)},getDataAttributes(n){if(!n)return{};const t={},e=Object.keys(n.dataset).filter(o=>o.startsWith("bs")&&!o.startsWith("bsConfig"));for(const o of e){let i=o.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=Gn(n.dataset[o])}return t},getDataAttribute(n,t){return Gn(n.getAttribute(`data-bs-${Be(t)}`))}};class Qt{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const o=tt(e)?et.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof o=="object"?o:{},...tt(e)?et.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const o of Object.keys(e)){const i=e[o],s=t[o],l=tt(s)?"element":Sl(s);if(!new RegExp(i).test(l))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${o}" provided type "${l}" but expected type "${i}".`)}}}const Fl="5.2.3";class q extends Qt{constructor(t,e){super(),t=lt(t),t&&(this._element=t,this._config=this._getConfig(e),Ie.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Ie.remove(this._element,this.constructor.DATA_KEY),u.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,o=!0){Yo(t,e,o)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Ie.get(lt(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return Fl}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const Oe=(n,t="hide")=>{const e=`click.dismiss${n.EVENT_KEY}`,o=n.NAME;u.on(document,e,`[data-bs-dismiss="${o}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),at(this))return;const s=Z(this)||this.closest(`.${o}`);n.getOrCreateInstance(s)[t]()})},Il="alert",Bl="bs.alert",oi=`.${Bl}`,Rl=`close${oi}`,Pl=`closed${oi}`,Hl="fade",jl="show";class Ce extends q{static get NAME(){return Il}close(){if(u.trigger(this._element,Rl).defaultPrevented)return;this._element.classList.remove(jl);const e=this._element.classList.contains(Hl);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),u.trigger(this._element,Pl),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=Ce.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Oe(Ce,"close");G(Ce);const Vl="button",Gl="bs.button",Wl=`.${Gl}`,Jl=".data-api",Ul="active",Wn='[data-bs-toggle="button"]',ql=`click${Wl}${Jl}`;class Te extends q{static get NAME(){return Vl}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Ul))}static jQueryInterface(t){return this.each(function(){const e=Te.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}u.on(document,ql,Wn,n=>{n.preventDefault();const t=n.target.closest(Wn);Te.getOrCreateInstance(t).toggle()});G(Te);const g={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(e=>e.matches(t))},parents(n,t){const e=[];let o=n.parentNode.closest(t);for(;o;)e.push(o),o=o.parentNode.closest(t);return e},prev(n,t){let e=n.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(n,t){let e=n.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(e=>!at(e)&&Ht(e))}},Kl="swipe",jt=".bs.swipe",zl=`touchstart${jt}`,Yl=`touchmove${jt}`,Xl=`touchend${jt}`,Ql=`pointerdown${jt}`,Zl=`pointerup${jt}`,ta="touch",ea="pen",na="pointer-event",oa=40,ia={endCallback:null,leftCallback:null,rightCallback:null},sa={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class _e extends Qt{constructor(t,e){super(),this._element=t,!(!t||!_e.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return ia}static get DefaultType(){return sa}static get NAME(){return Kl}dispose(){u.off(this._element,jt)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),Q(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=oa)return;const e=t/this._deltaX;this._deltaX=0,e&&Q(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(u.on(this._element,Ql,t=>this._start(t)),u.on(this._element,Zl,t=>this._end(t)),this._element.classList.add(na)):(u.on(this._element,zl,t=>this._start(t)),u.on(this._element,Yl,t=>this._move(t)),u.on(this._element,Xl,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===ea||t.pointerType===ta)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const la="carousel",aa="bs.carousel",ct=`.${aa}`,ii=".data-api",ra="ArrowLeft",pa="ArrowRight",ca=500,Jt="next",Ot="prev",xt="left",be="right",ua=`slide${ct}`,Re=`slid${ct}`,da=`keydown${ct}`,ha=`mouseenter${ct}`,ma=`mouseleave${ct}`,va=`dragstart${ct}`,ba=`load${ct}${ii}`,fa=`click${ct}${ii}`,si="carousel",ae="active",ga="slide",Ea="carousel-item-end",_a="carousel-item-start",ya="carousel-item-next",wa="carousel-item-prev",li=".active",ai=".carousel-item",Aa=li+ai,Sa=".carousel-item img",Oa=".carousel-indicators",Ca="[data-bs-slide], [data-bs-slide-to]",Ta='[data-bs-ride="carousel"]',ka={[ra]:be,[pa]:xt},xa={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Da={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Zt extends q{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=g.findOne(Oa,this._element),this._addEventListeners(),this._config.ride===si&&this.cycle()}static get Default(){return xa}static get DefaultType(){return Da}static get NAME(){return la}next(){this._slide(Jt)}nextWhenVisible(){!document.hidden&&Ht(this._element)&&this.next()}prev(){this._slide(Ot)}pause(){this._isSliding&&qo(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){u.one(this._element,Re,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){u.one(this._element,Re,()=>this.to(t));return}const o=this._getItemIndex(this._getActive());if(o===t)return;const i=t>o?Jt:Ot;this._slide(i,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&u.on(this._element,da,t=>this._keydown(t)),this._config.pause==="hover"&&(u.on(this._element,ha,()=>this.pause()),u.on(this._element,ma,()=>this._maybeEnableCycle())),this._config.touch&&_e.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const o of g.find(Sa,this._element))u.on(o,va,i=>i.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(xt)),rightCallback:()=>this._slide(this._directionToOrder(be)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),ca+this._config.interval))}};this._swipeHelper=new _e(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=ka[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=g.findOne(li,this._indicatorsElement);e.classList.remove(ae),e.removeAttribute("aria-current");const o=g.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);o&&(o.classList.add(ae),o.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const o=this._getActive(),i=t===Jt,s=e||En(this._getItems(),o,i,this._config.wrap);if(s===o)return;const l=this._getItemIndex(s),a=b=>u.trigger(this._element,b,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(o),to:l});if(a(ua).defaultPrevented||!o||!s)return;const c=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(l),this._activeElement=s;const p=i?_a:Ea,m=i?ya:wa;s.classList.add(m),Xt(s),o.classList.add(p),s.classList.add(p);const f=()=>{s.classList.remove(p,m),s.classList.add(ae),o.classList.remove(ae,m,p),this._isSliding=!1,a(Re)};this._queueCallback(f,o,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(ga)}_getActive(){return g.findOne(Aa,this._element)}_getItems(){return g.find(ai,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return j()?t===xt?Ot:Jt:t===xt?Jt:Ot}_orderToDirection(t){return j()?t===Ot?xt:be:t===Ot?be:xt}static jQueryInterface(t){return this.each(function(){const e=Zt.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}u.on(document,fa,Ca,function(n){const t=Z(this);if(!t||!t.classList.contains(si))return;n.preventDefault();const e=Zt.getOrCreateInstance(t),o=this.getAttribute("data-bs-slide-to");if(o){e.to(o),e._maybeEnableCycle();return}if(et.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});u.on(window,ba,()=>{const n=g.find(Ta);for(const t of n)Zt.getOrCreateInstance(t)});G(Zt);const Na="collapse",La="bs.collapse",te=`.${La}`,Ma=".data-api",$a=`show${te}`,Fa=`shown${te}`,Ia=`hide${te}`,Ba=`hidden${te}`,Ra=`click${te}${Ma}`,Pe="show",Nt="collapse",re="collapsing",Pa="collapsed",Ha=`:scope .${Nt} .${Nt}`,ja="collapse-horizontal",Va="width",Ga="height",Wa=".collapse.show, .collapse.collapsing",en='[data-bs-toggle="collapse"]',Ja={parent:null,toggle:!0},Ua={parent:"(null|element)",toggle:"boolean"};class zt extends q{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const o=g.find(en);for(const i of o){const s=Uo(i),l=g.find(s).filter(a=>a===this._element);s!==null&&l.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Ja}static get DefaultType(){return Ua}static get NAME(){return Na}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(Wa).filter(a=>a!==this._element).map(a=>zt.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||u.trigger(this._element,$a).defaultPrevented)return;for(const a of t)a.hide();const o=this._getDimension();this._element.classList.remove(Nt),this._element.classList.add(re),this._element.style[o]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(re),this._element.classList.add(Nt,Pe),this._element.style[o]="",u.trigger(this._element,Fa)},l=`scroll${o[0].toUpperCase()+o.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[o]=`${this._element[l]}px`}hide(){if(this._isTransitioning||!this._isShown()||u.trigger(this._element,Ia).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,Xt(this._element),this._element.classList.add(re),this._element.classList.remove(Nt,Pe);for(const i of this._triggerArray){const s=Z(i);s&&!this._isShown(s)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(re),this._element.classList.add(Nt),u.trigger(this._element,Ba)};this._element.style[e]="",this._queueCallback(o,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Pe)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=lt(t.parent),t}_getDimension(){return this._element.classList.contains(ja)?Va:Ga}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(en);for(const e of t){const o=Z(e);o&&this._addAriaAndCollapsedClass([e],this._isShown(o))}}_getFirstLevelChildren(t){const e=g.find(Ha,this._config.parent);return g.find(t,this._config.parent).filter(o=>!e.includes(o))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const o of t)o.classList.toggle(Pa,!e),o.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const o=zt.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof o[t]>"u")throw new TypeError(`No method named "${t}"`);o[t]()}})}}u.on(document,Ra,en,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();const t=Uo(this),e=g.find(t);for(const o of e)zt.getOrCreateInstance(o,{toggle:!1}).toggle()});G(zt);const Jn="dropdown",qa="bs.dropdown",wt=`.${qa}`,yn=".data-api",Ka="Escape",Un="Tab",za="ArrowUp",qn="ArrowDown",Ya=2,Xa=`hide${wt}`,Qa=`hidden${wt}`,Za=`show${wt}`,tr=`shown${wt}`,ri=`click${wt}${yn}`,pi=`keydown${wt}${yn}`,er=`keyup${wt}${yn}`,Dt="show",nr="dropup",or="dropend",ir="dropstart",sr="dropup-center",lr="dropdown-center",ft='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',ar=`${ft}.${Dt}`,fe=".dropdown-menu",rr=".navbar",pr=".navbar-nav",cr=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",ur=j()?"top-end":"top-start",dr=j()?"top-start":"top-end",hr=j()?"bottom-end":"bottom-start",mr=j()?"bottom-start":"bottom-end",vr=j()?"left-start":"right-start",br=j()?"right-start":"left-start",fr="top",gr="bottom",Er={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},_r={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Y extends q{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=g.next(this._element,fe)[0]||g.prev(this._element,fe)[0]||g.findOne(fe,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Er}static get DefaultType(){return _r}static get NAME(){return Jn}toggle(){return this._isShown()?this.hide():this.show()}show(){if(at(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!u.trigger(this._element,Za,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(pr))for(const o of[].concat(...document.body.children))u.on(o,"mouseover",Ee);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Dt),this._element.classList.add(Dt),u.trigger(this._element,tr,t)}}hide(){if(at(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!u.trigger(this._element,Xa,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))u.off(o,"mouseover",Ee);this._popper&&this._popper.destroy(),this._menu.classList.remove(Dt),this._element.classList.remove(Dt),this._element.setAttribute("aria-expanded","false"),et.removeDataAttribute(this._menu,"popper"),u.trigger(this._element,Qa,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!tt(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${Jn.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof Wo>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:tt(this._config.reference)?t=lt(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=gn(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Dt)}_getPlacement(){const t=this._parent;if(t.classList.contains(or))return vr;if(t.classList.contains(ir))return br;if(t.classList.contains(sr))return fr;if(t.classList.contains(lr))return gr;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(nr)?e?dr:ur:e?mr:hr}_detectNavbar(){return this._element.closest(rr)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(et.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...typeof this._config.popperConfig=="function"?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const o=g.find(cr,this._menu).filter(i=>Ht(i));o.length&&En(o,e,t===qn,!o.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=Y.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===Ya||t.type==="keyup"&&t.key!==Un)return;const e=g.find(ar);for(const o of e){const i=Y.getInstance(o);if(!i||i._config.autoClose===!1)continue;const s=t.composedPath(),l=s.includes(i._menu);if(s.includes(i._element)||i._config.autoClose==="inside"&&!l||i._config.autoClose==="outside"&&l||i._menu.contains(t.target)&&(t.type==="keyup"&&t.key===Un||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:i._element};t.type==="click"&&(a.clickEvent=t),i._completeHide(a)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),o=t.key===Ka,i=[za,qn].includes(t.key);if(!i&&!o||e&&!o)return;t.preventDefault();const s=this.matches(ft)?this:g.prev(this,ft)[0]||g.next(this,ft)[0]||g.findOne(ft,t.delegateTarget.parentNode),l=Y.getOrCreateInstance(s);if(i){t.stopPropagation(),l.show(),l._selectMenuItem(t);return}l._isShown()&&(t.stopPropagation(),l.hide(),s.focus())}}u.on(document,pi,ft,Y.dataApiKeydownHandler);u.on(document,pi,fe,Y.dataApiKeydownHandler);u.on(document,ri,Y.clearMenus);u.on(document,er,Y.clearMenus);u.on(document,ri,ft,function(n){n.preventDefault(),Y.getOrCreateInstance(this).toggle()});G(Y);const Kn=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",zn=".sticky-top",pe="padding-right",Yn="margin-right";class nn{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,pe,e=>e+t),this._setElementAttributes(Kn,pe,e=>e+t),this._setElementAttributes(zn,Yn,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,pe),this._resetElementAttributes(Kn,pe),this._resetElementAttributes(zn,Yn)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,o){const i=this.getWidth(),s=l=>{if(l!==this._element&&window.innerWidth>l.clientWidth+i)return;this._saveInitialAttribute(l,e);const a=window.getComputedStyle(l).getPropertyValue(e);l.style.setProperty(e,`${o(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,s)}_saveInitialAttribute(t,e){const o=t.style.getPropertyValue(e);o&&et.setDataAttribute(t,e,o)}_resetElementAttributes(t,e){const o=i=>{const s=et.getDataAttribute(i,e);if(s===null){i.style.removeProperty(e);return}et.removeDataAttribute(i,e),i.style.setProperty(e,s)};this._applyManipulationCallback(t,o)}_applyManipulationCallback(t,e){if(tt(t)){e(t);return}for(const o of g.find(t,this._element))e(o)}}const ci="backdrop",yr="fade",Xn="show",Qn=`mousedown.bs.${ci}`,wr={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Ar={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class ui extends Qt{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return wr}static get DefaultType(){return Ar}static get NAME(){return ci}show(t){if(!this._config.isVisible){Q(t);return}this._append();const e=this._getElement();this._config.isAnimated&&Xt(e),e.classList.add(Xn),this._emulateAnimation(()=>{Q(t)})}hide(t){if(!this._config.isVisible){Q(t);return}this._getElement().classList.remove(Xn),this._emulateAnimation(()=>{this.dispose(),Q(t)})}dispose(){this._isAppended&&(u.off(this._element,Qn),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(yr),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=lt(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),u.on(t,Qn,()=>{Q(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Yo(t,this._getElement(),this._config.isAnimated)}}const Sr="focustrap",Or="bs.focustrap",ye=`.${Or}`,Cr=`focusin${ye}`,Tr=`keydown.tab${ye}`,kr="Tab",xr="forward",Zn="backward",Dr={autofocus:!0,trapElement:null},Nr={autofocus:"boolean",trapElement:"element"};class di extends Qt{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Dr}static get DefaultType(){return Nr}static get NAME(){return Sr}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),u.off(document,ye),u.on(document,Cr,t=>this._handleFocusin(t)),u.on(document,Tr,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,u.off(document,ye))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const o=g.focusableChildren(e);o.length===0?e.focus():this._lastTabNavDirection===Zn?o[o.length-1].focus():o[0].focus()}_handleKeydown(t){t.key===kr&&(this._lastTabNavDirection=t.shiftKey?Zn:xr)}}const Lr="modal",Mr="bs.modal",K=`.${Mr}`,$r=".data-api",Fr="Escape",Ir=`hide${K}`,Br=`hidePrevented${K}`,hi=`hidden${K}`,mi=`show${K}`,Rr=`shown${K}`,Pr=`resize${K}`,Hr=`click.dismiss${K}`,jr=`mousedown.dismiss${K}`,Vr=`keydown.dismiss${K}`,Gr=`click${K}${$r}`,to="modal-open",Wr="fade",eo="show",He="modal-static",Jr=".modal.show",Ur=".modal-dialog",qr=".modal-body",Kr='[data-bs-toggle="modal"]',zr={backdrop:!0,focus:!0,keyboard:!0},Yr={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Bt extends q{constructor(t,e){super(t,e),this._dialog=g.findOne(Ur,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new nn,this._addEventListeners()}static get Default(){return zr}static get DefaultType(){return Yr}static get NAME(){return Lr}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||u.trigger(this._element,mi,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(to),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||u.trigger(this._element,Ir).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(eo),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const t of[window,this._dialog])u.off(t,K);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new ui({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new di({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=g.findOne(qr,this._dialog);e&&(e.scrollTop=0),Xt(this._element),this._element.classList.add(eo);const o=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,u.trigger(this._element,Rr,{relatedTarget:t})};this._queueCallback(o,this._dialog,this._isAnimated())}_addEventListeners(){u.on(this._element,Vr,t=>{if(t.key===Fr){if(this._config.keyboard){t.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),u.on(window,Pr,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),u.on(this._element,jr,t=>{u.one(this._element,Hr,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(to),this._resetAdjustments(),this._scrollBar.reset(),u.trigger(this._element,hi)})}_isAnimated(){return this._element.classList.contains(Wr)}_triggerBackdropTransition(){if(u.trigger(this._element,Br).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,o=this._element.style.overflowY;o==="hidden"||this._element.classList.contains(He)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(He),this._queueCallback(()=>{this._element.classList.remove(He),this._queueCallback(()=>{this._element.style.overflowY=o},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),o=e>0;if(o&&!t){const i=j()?"paddingLeft":"paddingRight";this._element.style[i]=`${e}px`}if(!o&&t){const i=j()?"paddingRight":"paddingLeft";this._element.style[i]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const o=Bt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof o[t]>"u")throw new TypeError(`No method named "${t}"`);o[t](e)}})}}u.on(document,Gr,Kr,function(n){const t=Z(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),u.one(t,mi,i=>{i.defaultPrevented||u.one(t,hi,()=>{Ht(this)&&this.focus()})});const e=g.findOne(Jr);e&&Bt.getInstance(e).hide(),Bt.getOrCreateInstance(t).toggle(this)});Oe(Bt);G(Bt);const Xr="offcanvas",Qr="bs.offcanvas",ot=`.${Qr}`,vi=".data-api",Zr=`load${ot}${vi}`,tp="Escape",no="show",oo="showing",io="hiding",ep="offcanvas-backdrop",bi=".offcanvas.show",np=`show${ot}`,op=`shown${ot}`,ip=`hide${ot}`,so=`hidePrevented${ot}`,fi=`hidden${ot}`,sp=`resize${ot}`,lp=`click${ot}${vi}`,ap=`keydown.dismiss${ot}`,rp='[data-bs-toggle="offcanvas"]',pp={backdrop:!0,keyboard:!0,scroll:!1},cp={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class rt extends q{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return pp}static get DefaultType(){return cp}static get NAME(){return Xr}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||u.trigger(this._element,np,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new nn().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(oo);const o=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(no),this._element.classList.remove(oo),u.trigger(this._element,op,{relatedTarget:t})};this._queueCallback(o,this._element,!0)}hide(){if(!this._isShown||u.trigger(this._element,ip).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(io),this._backdrop.hide();const e=()=>{this._element.classList.remove(no,io),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new nn().reset(),u.trigger(this._element,fi)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){u.trigger(this._element,so);return}this.hide()},e=Boolean(this._config.backdrop);return new ui({className:ep,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new di({trapElement:this._element})}_addEventListeners(){u.on(this._element,ap,t=>{if(t.key===tp){if(!this._config.keyboard){u.trigger(this._element,so);return}this.hide()}})}static jQueryInterface(t){return this.each(function(){const e=rt.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}u.on(document,lp,rp,function(n){const t=Z(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),at(this))return;u.one(t,fi,()=>{Ht(this)&&this.focus()});const e=g.findOne(bi);e&&e!==t&&rt.getInstance(e).hide(),rt.getOrCreateInstance(t).toggle(this)});u.on(window,Zr,()=>{for(const n of g.find(bi))rt.getOrCreateInstance(n).show()});u.on(window,sp,()=>{for(const n of g.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&rt.getOrCreateInstance(n).hide()});Oe(rt);G(rt);const up=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),dp=/^aria-[\w-]*$/i,hp=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,mp=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,vp=(n,t)=>{const e=n.nodeName.toLowerCase();return t.includes(e)?up.has(e)?Boolean(hp.test(n.nodeValue)||mp.test(n.nodeValue)):!0:t.filter(o=>o instanceof RegExp).some(o=>o.test(e))},gi={"*":["class","dir","id","lang","role",dp],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function bp(n,t,e){if(!n.length)return n;if(e&&typeof e=="function")return e(n);const i=new window.DOMParser().parseFromString(n,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const l of s){const a=l.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){l.remove();continue}const r=[].concat(...l.attributes),c=[].concat(t["*"]||[],t[a]||[]);for(const p of r)vp(p,c)||l.removeAttribute(p.nodeName)}return i.body.innerHTML}const fp="TemplateFactory",gp={allowList:gi,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Ep={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},_p={entry:"(string|element|function|null)",selector:"(string|element)"};class yp extends Qt{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return gp}static get DefaultType(){return Ep}static get NAME(){return fp}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[i,s]of Object.entries(this._config.content))this._setContent(t,s,i);const e=t.children[0],o=this._resolvePossibleFunction(this._config.extraClass);return o&&e.classList.add(...o.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,o]of Object.entries(t))super._typeCheckConfig({selector:e,entry:o},_p)}_setContent(t,e,o){const i=g.findOne(o,t);if(i){if(e=this._resolvePossibleFunction(e),!e){i.remove();return}if(tt(e)){this._putElementInTemplate(lt(e),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(e);return}i.textContent=e}}_maybeSanitize(t){return this._config.sanitize?bp(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return typeof t=="function"?t(this):t}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const wp="tooltip",Ap=new Set(["sanitize","allowList","sanitizeFn"]),je="fade",Sp="modal",ce="show",Op=".tooltip-inner",lo=`.${Sp}`,ao="hide.bs.modal",Ut="hover",Ve="focus",Cp="click",Tp="manual",kp="hide",xp="hidden",Dp="show",Np="shown",Lp="inserted",Mp="click",$p="focusin",Fp="focusout",Ip="mouseenter",Bp="mouseleave",Rp={AUTO:"auto",TOP:"top",RIGHT:j()?"left":"right",BOTTOM:"bottom",LEFT:j()?"right":"left"},Pp={allowList:gi,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Hp={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Vt extends q{constructor(t,e){if(typeof Wo>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Pp}static get DefaultType(){return Hp}static get NAME(){return wp}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),u.off(this._element.closest(lo),ao,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=u.trigger(this._element,this.constructor.eventName(Dp)),o=(Ko(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!o)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),u.trigger(this._element,this.constructor.eventName(Lp))),this._popper=this._createPopper(i),i.classList.add(ce),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))u.on(a,"mouseover",Ee);const l=()=>{u.trigger(this._element,this.constructor.eventName(Np)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(l,this.tip,this._isAnimated())}hide(){if(!this._isShown()||u.trigger(this._element,this.constructor.eventName(kp)).defaultPrevented)return;if(this._getTipElement().classList.remove(ce),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))u.off(i,"mouseover",Ee);this._activeTrigger[Cp]=!1,this._activeTrigger[Ve]=!1,this._activeTrigger[Ut]=!1,this._isHovered=null;const o=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),u.trigger(this._element,this.constructor.eventName(xp)))};this._queueCallback(o,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(je,ce),e.classList.add(`bs-${this.constructor.NAME}-auto`);const o=Ol(this.constructor.NAME).toString();return e.setAttribute("id",o),this._isAnimated()&&e.classList.add(je),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new yp({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Op]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(je)}_isShown(){return this.tip&&this.tip.classList.contains(ce)}_createPopper(t){const e=typeof this._config.placement=="function"?this._config.placement.call(this,t,this._element):this._config.placement,o=Rp[e.toUpperCase()];return gn(this._element,t,this._getPopperConfig(o))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return typeof t=="function"?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:o=>{this._getTipElement().setAttribute("data-popper-placement",o.state.placement)}}]};return{...e,...typeof this._config.popperConfig=="function"?this._config.popperConfig(e):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")u.on(this._element,this.constructor.eventName(Mp),this._config.selector,o=>{this._initializeOnDelegatedTarget(o).toggle()});else if(e!==Tp){const o=e===Ut?this.constructor.eventName(Ip):this.constructor.eventName($p),i=e===Ut?this.constructor.eventName(Bp):this.constructor.eventName(Fp);u.on(this._element,o,this._config.selector,s=>{const l=this._initializeOnDelegatedTarget(s);l._activeTrigger[s.type==="focusin"?Ve:Ut]=!0,l._enter()}),u.on(this._element,i,this._config.selector,s=>{const l=this._initializeOnDelegatedTarget(s);l._activeTrigger[s.type==="focusout"?Ve:Ut]=l._element.contains(s.relatedTarget),l._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},u.on(this._element.closest(lo),ao,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=et.getDataAttributes(this._element);for(const o of Object.keys(e))Ap.has(o)&&delete e[o];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:lt(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=Vt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}G(Vt);const jp="popover",Vp=".popover-header",Gp=".popover-body",Wp={...Vt.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Jp={...Vt.DefaultType,content:"(null|string|element|function)"};class wn extends Vt{static get Default(){return Wp}static get DefaultType(){return Jp}static get NAME(){return jp}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Vp]:this._getTitle(),[Gp]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=wn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}G(wn);const Up="scrollspy",qp="bs.scrollspy",An=`.${qp}`,Kp=".data-api",zp=`activate${An}`,ro=`click${An}`,Yp=`load${An}${Kp}`,Xp="dropdown-item",Ct="active",Qp='[data-bs-spy="scroll"]',Ge="[href]",Zp=".nav, .list-group",po=".nav-link",tc=".nav-item",ec=".list-group-item",nc=`${po}, ${tc} > ${po}, ${ec}`,oc=".dropdown",ic=".dropdown-toggle",sc={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},lc={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class ke extends q{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return sc}static get DefaultType(){return lc}static get NAME(){return Up}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=lt(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(u.off(this._config.target,ro),u.on(this._config.target,ro,Ge,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const o=this._rootElement||window,i=e.offsetTop-this._element.offsetTop;if(o.scrollTo){o.scrollTo({top:i,behavior:"smooth"});return}o.scrollTop=i}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=l=>this._targetLinks.get(`#${l.target.id}`),o=l=>{this._previousScrollData.visibleEntryTop=l.target.offsetTop,this._process(e(l))},i=(this._rootElement||document.documentElement).scrollTop,s=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const l of t){if(!l.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(l));continue}const a=l.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&a){if(o(l),!i)return;continue}!s&&!a&&o(l)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=g.find(Ge,this._config.target);for(const e of t){if(!e.hash||at(e))continue;const o=g.findOne(e.hash,this._element);Ht(o)&&(this._targetLinks.set(e.hash,e),this._observableSections.set(e.hash,o))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Ct),this._activateParents(t),u.trigger(this._element,zp,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(Xp)){g.findOne(ic,t.closest(oc)).classList.add(Ct);return}for(const e of g.parents(t,Zp))for(const o of g.prev(e,nc))o.classList.add(Ct)}_clearActiveClass(t){t.classList.remove(Ct);const e=g.find(`${Ge}.${Ct}`,t);for(const o of e)o.classList.remove(Ct)}static jQueryInterface(t){return this.each(function(){const e=ke.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}u.on(window,Yp,()=>{for(const n of g.find(Qp))ke.getOrCreateInstance(n)});G(ke);const ac="tab",rc="bs.tab",At=`.${rc}`,pc=`hide${At}`,cc=`hidden${At}`,uc=`show${At}`,dc=`shown${At}`,hc=`click${At}`,mc=`keydown${At}`,vc=`load${At}`,bc="ArrowLeft",co="ArrowRight",fc="ArrowUp",uo="ArrowDown",gt="active",ho="fade",We="show",gc="dropdown",Ec=".dropdown-toggle",_c=".dropdown-menu",Je=":not(.dropdown-toggle)",yc='.list-group, .nav, [role="tablist"]',wc=".nav-item, .list-group-item",Ac=`.nav-link${Je}, .list-group-item${Je}, [role="tab"]${Je}`,Ei='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Ue=`${Ac}, ${Ei}`,Sc=`.${gt}[data-bs-toggle="tab"], .${gt}[data-bs-toggle="pill"], .${gt}[data-bs-toggle="list"]`;class Rt extends q{constructor(t){super(t),this._parent=this._element.closest(yc),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),u.on(this._element,mc,e=>this._keydown(e)))}static get NAME(){return ac}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),o=e?u.trigger(e,pc,{relatedTarget:t}):null;u.trigger(t,uc,{relatedTarget:e}).defaultPrevented||o&&o.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(gt),this._activate(Z(t));const o=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(We);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),u.trigger(t,dc,{relatedTarget:e})};this._queueCallback(o,t,t.classList.contains(ho))}_deactivate(t,e){if(!t)return;t.classList.remove(gt),t.blur(),this._deactivate(Z(t));const o=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(We);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),u.trigger(t,cc,{relatedTarget:e})};this._queueCallback(o,t,t.classList.contains(ho))}_keydown(t){if(![bc,co,fc,uo].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=[co,uo].includes(t.key),o=En(this._getChildren().filter(i=>!at(i)),t.target,e,!0);o&&(o.focus({preventScroll:!0}),Rt.getOrCreateInstance(o).show())}_getChildren(){return g.find(Ue,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const o of e)this._setInitialAttributesOnChild(o)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),o=this._getOuterElement(t);t.setAttribute("aria-selected",e),o!==t&&this._setAttributeIfNotExists(o,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=Z(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,e){const o=this._getOuterElement(t);if(!o.classList.contains(gc))return;const i=(s,l)=>{const a=g.findOne(s,o);a&&a.classList.toggle(l,e)};i(Ec,gt),i(_c,We),o.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,o){t.hasAttribute(e)||t.setAttribute(e,o)}_elemIsActive(t){return t.classList.contains(gt)}_getInnerElement(t){return t.matches(Ue)?t:g.findOne(Ue,t)}_getOuterElement(t){return t.closest(wc)||t}static jQueryInterface(t){return this.each(function(){const e=Rt.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}u.on(document,hc,Ei,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!at(this)&&Rt.getOrCreateInstance(this).show()});u.on(window,vc,()=>{for(const n of g.find(Sc))Rt.getOrCreateInstance(n)});G(Rt);const Oc="toast",Cc="bs.toast",ut=`.${Cc}`,Tc=`mouseover${ut}`,kc=`mouseout${ut}`,xc=`focusin${ut}`,Dc=`focusout${ut}`,Nc=`hide${ut}`,Lc=`hidden${ut}`,Mc=`show${ut}`,$c=`shown${ut}`,Fc="fade",mo="hide",ue="show",de="showing",Ic={animation:"boolean",autohide:"boolean",delay:"number"},Bc={animation:!0,autohide:!0,delay:5e3};class xe extends q{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Bc}static get DefaultType(){return Ic}static get NAME(){return Oc}show(){if(u.trigger(this._element,Mc).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Fc);const e=()=>{this._element.classList.remove(de),u.trigger(this._element,$c),this._maybeScheduleHide()};this._element.classList.remove(mo),Xt(this._element),this._element.classList.add(ue,de),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||u.trigger(this._element,Nc).defaultPrevented)return;const e=()=>{this._element.classList.add(mo),this._element.classList.remove(de,ue),u.trigger(this._element,Lc)};this._element.classList.add(de),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(ue),super.dispose()}isShown(){return this._element.classList.contains(ue)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const o=t.relatedTarget;this._element===o||this._element.contains(o)||this._maybeScheduleHide()}_setListeners(){u.on(this._element,Tc,t=>this._onInteraction(t,!0)),u.on(this._element,kc,t=>this._onInteraction(t,!1)),u.on(this._element,xc,t=>this._onInteraction(t,!0)),u.on(this._element,Dc,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=xe.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Oe(xe);G(xe);var Rc=Object.defineProperty,Pc=(n,t,e)=>t in n?Rc(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,v=(n,t,e)=>(Pc(n,typeof t!="symbol"?t+"":t,e),e),Hc=class{constructor(n){v(this,"_distinctEvent"),v(this,"_boundedEvents",[]),this._distinctEvent=(n==null?void 0:n.distinctEvent)??!1}get boundedEvents(){return this._boundedEvents}dispose(){this.unbindAll(),this._boundedEvents=[]}bind(n,t,e,o){let i=Array.isArray(t)?t:[t];if(n!=null&&n.forEach)n==null||n.forEach(s=>{for(let l of i)(!this._distinctEvent||this._distinctEvent&&!this.hasBinding(s,l))&&(s.addEventListener(l,e,o),this._boundedEvents.push({element:s,eventName:l,listener:e}))});else for(let s of i)(!this._distinctEvent||this._distinctEvent&&!this.hasBinding(n,s))&&(n.addEventListener(s,e,o),this._boundedEvents.push({element:n,eventName:s,listener:e}))}hasBinding(n,t){return this._boundedEvents.some(e=>e.element===n&&(!t||e.eventName===t))}unbind(n,t,e){var o;if(n){let i=Array.isArray(n)?n:[n],s=Array.isArray(t)?t||"":[t||""];for(let l of i){e||(e=this._boundedEvents.find(a=>{if(a.element===l&&(!t||a.eventName===t))return a.listener}));for(let a of s)(o=l==null?void 0:l.removeEventListener)==null||o.call(l,a,e)}}}unbindAll(){for(;this._boundedEvents.length>0;){let n=this._boundedEvents.pop(),{element:t,eventName:e,listener:o}=n;this.unbind(t,e,o)}}},_i=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};_i.locales={["en-US"]:{formatSelectAll(){return"[Select all]"},formatAllSelected(){return"All selected"},formatCountSelected(n,t){return n+" of "+t+" selected"},formatNoMatchesFound(){return"No matches found"},formatOkButton(){return"OK"}}};var yi=_i.locales,jc=50,Vc=4,wi={name:"",placeholder:"",data:void 0,locale:void 0,selectAll:!0,single:void 0,singleRadio:!1,multiple:!1,hideOptgroupCheckboxes:!1,multipleWidth:80,width:void 0,dropWidth:void 0,maxHeight:250,maxHeightUnit:"px",position:"bottom",displayValues:!1,displayTitle:!1,displayDelimiter:", ",minimumCountSelected:3,ellipsis:!1,isOpen:!1,keepOpen:!1,openOnHover:!1,container:null,filter:!1,filterGroup:!1,filterPlaceholder:"",filterAcceptOnEnter:!1,filterByDataLength:void 0,customFilter(n,t){return n.includes(t)},showClear:!1,autoAdjustDropHeight:!1,autoAdjustDropPosition:!1,autoAdjustDropWidthByTextSize:!1,adjustedHeightPadding:10,useSelectOptionLabel:!1,useSelectOptionLabelToHtml:!1,styler:()=>!1,textTemplate:n=>n.innerHTML.trim(),labelTemplate:n=>n.label,onOpen:()=>!1,onClose:()=>!1,onCheckAll:()=>!1,onUncheckAll:()=>!1,onFocus:()=>!1,onBlur:()=>!1,onOptgroupClick:()=>!1,onClick:()=>!1,onFilter:()=>!1,onClear:()=>!1,onAfterCreate:()=>!1,onDestroy:()=>!1,onAfterDestroy:()=>!1,onDestroyed:()=>!1},Gc=["init","getOptions","refreshOptions","getSelects","setSelects","enable","disable","open","close","check","uncheck","checkAll","uncheckAll","checkInvert","focus","blur","refresh","destroy"];Object.assign(wi,yi["en-US"]);var Wc={BLOCK_ROWS:jc,CLUSTER_BLOCKS:Vc,DEFAULTS:wi,METHODS:Gc},U=Wc,Jc=class{constructor(n){v(this,"cache"),v(this,"clusterRows"),v(this,"dataStart"),v(this,"dataEnd"),v(this,"rows"),v(this,"scrollEl"),v(this,"blockHeight"),v(this,"clusterHeight"),v(this,"contentEl"),v(this,"parentEl"),v(this,"itemHeight"),v(this,"lastCluster"),v(this,"scrollTop"),v(this,"destroy"),v(this,"callback"),v(this,"sanitizer"),this.rows=n.rows,this.scrollEl=n.scrollEl,this.contentEl=n.contentEl,this.parentEl=n.contentEl.parentElement,this.callback=n.callback,this.cache={},this.scrollTop=this.scrollEl.scrollTop,this.initDOM(this.rows),this.scrollEl.scrollTop=this.scrollTop,this.lastCluster=0;let t=()=>{this.lastCluster!==(this.lastCluster=this.getNum())&&(this.initDOM(this.rows),this.callback())};this.scrollEl.addEventListener("scroll",t,!1),this.destroy=()=>{this.contentEl.innerHTML="",this.scrollEl.removeEventListener("scroll",t,!1)}}initDOM(n){if(typeof this.clusterHeight>"u"){this.cache.scrollTop=this.scrollEl.scrollTop;let a=n[0]+n[0]+n[0];this.contentEl.innerHTML=this.sanitizer?this.sanitizer(`${a}`):`${a}`,this.cache.data=a,this.getRowsHeight()}let t=this.initData(n,this.getNum()),e=t.rows.join(""),o=this.checkChanges("data",e),i=this.checkChanges("top",t.topOffset),s=this.checkChanges("bottom",t.bottomOffset),l=[];o&&i?(t.topOffset&&l.push(this.getExtra("top",t.topOffset)),l.push(e),t.bottomOffset&&l.push(this.getExtra("bottom",t.bottomOffset)),this.contentEl.innerHTML=this.sanitizer?this.sanitizer(l.join("")):l.join("")):s&&this.contentEl.lastChild&&(this.contentEl.lastChild.style.height=`${t.bottomOffset}px`)}getRowsHeight(){var n;if(typeof this.itemHeight>"u"){let t=((n=this.parentEl)==null?void 0:n.style.display)||"";this.parentEl&&(t===""||t==="none")&&(this.parentEl.style.display="block");let e=this.contentEl.children,o=e[Math.floor(e.length/2)];this.itemHeight=o.offsetHeight,this.parentEl&&(this.parentEl.style.display=t)}this.blockHeight=this.itemHeight*U.BLOCK_ROWS,this.clusterRows=U.BLOCK_ROWS*U.CLUSTER_BLOCKS,this.clusterHeight=this.blockHeight*U.CLUSTER_BLOCKS}getNum(){return this.scrollTop=this.scrollEl.scrollTop,Math.floor(this.scrollTop/(this.clusterHeight-this.blockHeight))||0}initData(n,t){if(n.length<U.BLOCK_ROWS)return{topOffset:0,bottomOffset:0,rowsAbove:0,rows:n};let e=Math.max((this.clusterRows-U.BLOCK_ROWS)*t,0),o=e+this.clusterRows,i=Math.max(e*this.itemHeight,0),s=Math.max((n.length-o)*this.itemHeight,0),l=[],a=e;i<1&&a++;for(let r=e;r<o;r++)n[r]&&l.push(n[r]);return this.dataStart=e,this.dataEnd=o,{topOffset:i,bottomOffset:s,rowsAbove:a,rows:l}}checkChanges(n,t){let e=t!==this.cache[n];return this.cache[n]=t,e}getExtra(n,t){let e=document.createElement("li");return e.className=`virtual-scroll-${n}`,t&&(e.style.height=`${t}px`),e.outerHTML}};function qe(n){let t=0,e=0,o=0,i=0,s=window.innerHeight??0,l=window.innerWidth??0,a=qc(),r=a.top,c=a.left,p=on(n);if(p){let m=p.top??0,f=p.left??0;e=m-r,t=s-(m-r),o=f-c,i=l-(f-c)}return{top:e,bottom:t,left:o,right:i}}function x(n,t){let e=document.createElement(n);return t&&Object.keys(t).forEach(o=>{let i=t[o];typeof i=="object"?Object.assign({},e[o],i):e[o]=t[o]}),e}function on(n){var l;if(!n)return;let t=(l=n==null?void 0:n.getBoundingClientRect)==null?void 0:l.call(n),e=0,o=0,i=0,s=0;return(t==null?void 0:t.top)!==void 0&&t.left!==void 0&&(e=t.top+window.pageYOffset,o=t.left+window.pageXOffset,s=t.right,i=t.bottom),{top:e,left:o,bottom:i,right:s}}function he(n,t,e){let o=parseFloat(n.style[e]);if(!o||isNaN(o)){switch(t){case"outer":o=n[e==="width"?"offsetWidth":"offsetHeight"];break;case"scroll":o=n[e==="width"?"scrollWidth":"scrollHeight"];break;case"inner":default:o=n[e==="width"?"clientWidth":"clientHeight"];break}o=n.getBoundingClientRect()[e]}if(!o||isNaN(o)){let i=n.style.display,s=n.style.position;n.style.display="block",n.style.position="absolute";let l=window.getComputedStyle(n)[e];o=parseFloat(l),isNaN(o)&&(o=0),n.style.display=i,n.style.position=s}return o||0}function vo(n,t){let e=null,o=n.parentElement;for(;o;){let[i,s,l,a]=t.match(/^([a-z]*)([#.]{1})([a-z\-]+)$/i)||[];if(l&&a)for(let r of a.replace(l,"").split(" "))o.classList.contains(r)&&(s?(o==null?void 0:o.tagName.toLowerCase())===s&&(e=o):e=o);o=o.parentElement}return e}function Uc(n,t){var e;(e=n.parentNode)==null||e.insertBefore(t,n.nextSibling)}function bo(n,t){n!=null&&n.style&&(n.style.display=n.style.display==="none"&&t!==!1||t===!0?"block":"none")}function qc(){return{left:window.pageXOffset||document.documentElement.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||0}}function Kc(n,t,e=!1){let o=Object.keys(n),i=Object.keys(t);if(e&&o.length!==i.length)return!1;for(let s of o)if(i.includes(s)&&n[s]!==t[s])return!1;return!0}function sn(n){let t=()=>{let i={};for(let s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=sn(n[s]));return i},e=()=>n.map(i=>sn(i)),o=Object.prototype.toString.call(n).slice(8,-1).toLowerCase();return o==="object"?t():o==="array"?e():n}function zc(n){let t=0;return n.forEach((e,o)=>{e.type==="optgroup"?(e._key=`group_${o}`,e.visible=typeof e.visible>"u"?!0:e.visible,e.children.forEach((i,s)=>{i&&(i.visible=typeof(i==null?void 0:i.visible)>"u"?!0:i.visible,i.divider||(i._key=`option_${o}_${s}`,t+=1))})):(e.visible=typeof e.visible>"u"?!0:e.visible,e.divider||(e._key=`option_${o}`,t+=1))}),t}function me(n,t,e){if(Array.isArray(n))for(let o of n){if(o[t]===e||o[t]===+o[t]+""&&+o[t]===e)return o;if(o.type==="optgroup"){for(let i of o.children)if(i&&(i[t]===e||i[t]===+i[t]+""&&+i[t]===e))return i}}}function Yc(n){var i;var t=document.createElement("div");t.innerHTML=n;for(var e=t.getElementsByTagName("script"),o=e.length;o--;)(i=e[o].parentNode)==null||i.removeChild(e[o]);return t.innerHTML}function Ke(n){return Object.keys(n).forEach(t=>n[t]===void 0?delete n[t]:""),n}function Tt(n){return typeof n!="string"?n:n.normalize?n.normalize("NFD").replace(/[\u0300-\u036F]/g,""):[{base:"A",letters:/[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},{base:"AA",letters:/[\uA732]/g},{base:"AE",letters:/[\u00C6\u01FC\u01E2]/g},{base:"AO",letters:/[\uA734]/g},{base:"AU",letters:/[\uA736]/g},{base:"AV",letters:/[\uA738\uA73A]/g},{base:"AY",letters:/[\uA73C]/g},{base:"B",letters:/[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},{base:"C",letters:/[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},{base:"D",letters:/[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},{base:"DZ",letters:/[\u01F1\u01C4]/g},{base:"Dz",letters:/[\u01F2\u01C5]/g},{base:"E",letters:/[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},{base:"F",letters:/[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},{base:"G",letters:/[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},{base:"H",letters:/[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},{base:"I",letters:/[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},{base:"J",letters:/[\u004A\u24BF\uFF2A\u0134\u0248]/g},{base:"K",letters:/[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},{base:"L",letters:/[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},{base:"LJ",letters:/[\u01C7]/g},{base:"Lj",letters:/[\u01C8]/g},{base:"M",letters:/[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},{base:"N",letters:/[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},{base:"NJ",letters:/[\u01CA]/g},{base:"Nj",letters:/[\u01CB]/g},{base:"O",letters:/[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},{base:"OI",letters:/[\u01A2]/g},{base:"OO",letters:/[\uA74E]/g},{base:"OU",letters:/[\u0222]/g},{base:"P",letters:/[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},{base:"Q",letters:/[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},{base:"R",letters:/[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},{base:"S",letters:/[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},{base:"T",letters:/[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},{base:"TZ",letters:/[\uA728]/g},{base:"U",letters:/[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},{base:"V",letters:/[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},{base:"VY",letters:/[\uA760]/g},{base:"W",letters:/[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},{base:"X",letters:/[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},{base:"Y",letters:/[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},{base:"Z",letters:/[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},{base:"a",letters:/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},{base:"aa",letters:/[\uA733]/g},{base:"ae",letters:/[\u00E6\u01FD\u01E3]/g},{base:"ao",letters:/[\uA735]/g},{base:"au",letters:/[\uA737]/g},{base:"av",letters:/[\uA739\uA73B]/g},{base:"ay",letters:/[\uA73D]/g},{base:"b",letters:/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},{base:"c",letters:/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},{base:"d",letters:/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},{base:"dz",letters:/[\u01F3\u01C6]/g},{base:"e",letters:/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},{base:"f",letters:/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},{base:"g",letters:/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},{base:"h",letters:/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},{base:"hv",letters:/[\u0195]/g},{base:"i",letters:/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},{base:"j",letters:/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},{base:"k",letters:/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},{base:"l",letters:/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},{base:"lj",letters:/[\u01C9]/g},{base:"m",letters:/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},{base:"n",letters:/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},{base:"nj",letters:/[\u01CC]/g},{base:"o",letters:/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},{base:"oi",letters:/[\u01A3]/g},{base:"ou",letters:/[\u0223]/g},{base:"oo",letters:/[\uA74F]/g},{base:"p",letters:/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},{base:"q",letters:/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},{base:"r",letters:/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},{base:"s",letters:/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},{base:"t",letters:/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},{base:"tz",letters:/[\uA729]/g},{base:"u",letters:/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},{base:"v",letters:/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},{base:"vy",letters:/[\uA761]/g},{base:"w",letters:/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},{base:"x",letters:/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},{base:"y",letters:/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},{base:"z",letters:/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g}].reduce((t,{letters:e,base:o})=>t.replace(e,o),n)}var Xc=class{constructor(n,t){this.elm=n,v(this,"_bindEventService"),v(this,"allSelected",!1),v(this,"fromHtml",!1),v(this,"choiceElm"),v(this,"closeElm"),v(this,"filterText",""),v(this,"updateData",[]),v(this,"data",[]),v(this,"dataTotal"),v(this,"dropElm"),v(this,"okButtonElm"),v(this,"filterParentElm"),v(this,"ulElm"),v(this,"parentElm"),v(this,"labelElm"),v(this,"selectAllParentElm"),v(this,"selectAllElm"),v(this,"searchInputElm"),v(this,"selectGroupElms"),v(this,"selectItemElms"),v(this,"disableItemElms"),v(this,"noResultsElm"),v(this,"options"),v(this,"selectAllName",""),v(this,"selectGroupName",""),v(this,"selectItemName",""),v(this,"tabIndex"),v(this,"updateDataStart"),v(this,"updateDataEnd"),v(this,"virtualScroll"),v(this,"locales",{}),this.options=Object.assign({},U.DEFAULTS,this.elm.dataset,t),this._bindEventService=new Hc({distinctEvent:!0})}async init(){await this.initLocale(),this.initContainer(),this.initData(),this.initSelected(!0),this.initFilter(),this.initDrop(),this.initView(),this.options.onAfterCreate()}destroy(n=!0){var t,e,o,i;this.parentElm&&(this.options.onDestroy({hardDestroy:n}),n&&this.options.onHardDestroy(),this.elm.before(this.parentElm),this.elm.classList.remove("ms-offscreen"),this._bindEventService.unbindAll(),this.tabIndex&&(this.elm.tabIndex=+this.tabIndex),(t=this.virtualScroll)==null||t.destroy(),(e=this.parentElm.parentNode)==null||e.removeChild(this.parentElm),this.fromHtml&&(delete this.options.data,this.fromHtml=!1),this.options.onAfterDestroy({hardDestroy:n}),n&&((i=(o=this.options).onAfterHardDestroy)==null||i.call(o),Object.keys(this.options).forEach(s=>delete this[s])))}async initLocale(){if(this.options.locale){let n=window.multipleSelect.locales,t=this.options.locale.split(/-|_/);if(t[0]=t[0].toLowerCase(),t[1]&&(t[1]=t[1].toUpperCase()),n[this.options.locale])Object.assign(this.options,n[this.options.locale]);else if(n[t.join("-")])Object.assign(this.options,n[t.join("-")]);else if(n[t[0]])Object.assign(this.options,n[t[0]]);else throw new Error(`[multiple-select-vanilla] invalid locales "${this.options.locale}", make sure to import it before using it`)}}initContainer(){var e;let n=this.elm.getAttribute("name")||this.options.name||"";this.elm.style.display="none",this.labelElm=this.elm.closest("label"),!this.labelElm&&this.elm.id&&(this.labelElm=document.createElement("label"),this.labelElm.htmlFor=this.elm.id),(e=this.labelElm)!=null&&e.querySelector("input")&&(this.labelElm=null),typeof this.options.single>"u"&&(this.options.single=!this.elm.multiple),this.parentElm=x("div",{className:`ms-parent ${this.elm.className||""}`,title:this.elm.getAttribute("title")||""}),this.options.placeholder=this.options.placeholder||this.elm.getAttribute("placeholder")||"",this.tabIndex=this.elm.getAttribute("tabindex");let t="";this.tabIndex!==null&&(this.elm.tabIndex=-1,t=this.tabIndex&&`tabindex="${this.tabIndex}"`),this.choiceElm=x("button",{className:"ms-choice",type:"button"}),isNaN(t)&&(this.choiceElm.tabIndex=+t),this.choiceElm.appendChild(x("span",{className:"ms-placeholder",textContent:this.options.placeholder})),this.options.showClear&&this.choiceElm.appendChild(x("div",{className:"icon-close"})),this.choiceElm.appendChild(x("div",{className:"icon-caret"})),this.dropElm=x("div",{className:`ms-drop ${this.options.position}`}),this.closeElm=this.choiceElm.querySelector(".icon-close"),this.options.dropWidth&&(this.dropElm.style.width=typeof this.options.dropWidth=="string"?this.options.dropWidth:`${this.options.dropWidth}px`),Uc(this.elm,this.parentElm),this.parentElm.appendChild(this.choiceElm),this.parentElm.appendChild(this.dropElm),this.elm.disabled&&this.choiceElm.classList.add("disabled"),this.selectAllName=`data-name="selectAll${n}"`,this.selectGroupName=`data-name="selectGroup${n}"`,this.selectItemName=`data-name="selectItem${n}"`,this.options.keepOpen||(this._bindEventService.unbind(document.body,"click"),this._bindEventService.bind(document.body,"click",o=>{o.target===this.choiceElm||vo(o.target,".ms-choice")===this.choiceElm||(o.target===this.dropElm||vo(o.target,".ms-drop")!==this.dropElm&&o.target!==this.elm)&&this.options.isOpen&&this.close()}))}initData(){let n=[];if(this.options.data){if(Array.isArray(this.options.data))this.data=this.options.data.map(t=>typeof t=="string"||typeof t=="number"?{text:t,value:t}:t);else if(typeof this.options.data=="object"){for(let[t,e]of Object.entries(this.options.data))n.push({value:t,text:e});this.data=n}}else this.elm.childNodes.forEach(t=>{this.initRow(t)&&n.push(this.initRow(t))}),this.options.data=n,this.data=n,this.fromHtml=!0;this.dataTotal=zc(this.data)}initRow(n,t){var o,i;let e={};return((o=n.tagName)==null?void 0:o.toLowerCase())==="option"?(e.type="option",e.text=this.options.textTemplate(n),e.value=n.value,e.visible=!0,e.selected=!!n.selected,e.disabled=t||n.disabled,e.classes=n.getAttribute("class")||"",e.title=n.getAttribute("title")||"",n.dataset.value&&(e._value=n.dataset.value),Object.keys(n.dataset).length&&(e._data=n.dataset,e._data.divider&&(e.divider=e._data.divider)),e):((i=n.tagName)==null?void 0:i.toLowerCase())==="optgroup"?(e.type="optgroup",e.label=this.options.labelTemplate(n),e.visible=!0,e.selected=!!n.selected,e.disabled=n.disabled,e.children=[],Object.keys(n.dataset).length&&(e._data=n.dataset),n.childNodes.forEach(s=>{e.children.push(this.initRow(s,e.disabled))}),e):null}initDrop(){this.initList(),this.update(!0),this.options.isOpen&&setTimeout(()=>this.open(),50),this.options.openOnHover&&this.parentElm&&(this._bindEventService.bind(this.parentElm,"mouseover",()=>this.open()),this._bindEventService.bind(this.parentElm,"mouseout",()=>this.close()))}initFilter(){if(this.filterText="",this.options.filter||!this.options.filterByDataLength)return;let n=0;for(let t of this.data)t.type==="optgroup"?n+=t.children.length:n+=1;this.options.filter=n>this.options.filterByDataLength}initList(){if(this.options.filter&&(this.filterParentElm=x("div",{className:"ms-search"}),this.filterParentElm.appendChild(x("input",{autocomplete:"off",autocapitalize:"off",spellcheck:!1,type:"text",placeholder:this.options.filterPlaceholder||"🔎︎"})),this.dropElm.appendChild(this.filterParentElm)),this.options.selectAll&&!this.options.single){this.selectAllParentElm=x("div",{className:"ms-select-all"});let n=x("label"),t=x("input",{type:"checkbox",checked:this.allSelected});t.dataset.name="selectAll",n.appendChild(t),n.appendChild(x("span",{textContent:this.formatSelectAll()})),this.selectAllParentElm.appendChild(n),this.dropElm.appendChild(this.selectAllParentElm)}this.ulElm=x("ul"),this.dropElm.appendChild(this.ulElm),this.options.showOkButton&&!this.options.single&&(this.okButtonElm=x("button",{className:"ms-ok-button",type:"button",textContent:this.formatOkButton()}),this.dropElm.appendChild(this.okButtonElm)),this.initListItems()}initListItems(){let n=this.getListRows(),t=0;if(this.options.selectAll&&!this.options.single&&(t=-1),n.length>U.BLOCK_ROWS*U.CLUSTER_BLOCKS){this.virtualScroll&&this.virtualScroll.destroy();let e=this.dropElm.style.display!=="none";e||(this.dropElm.style.left="-10000",this.dropElm.style.display="block");let o=()=>{this.updateDataStart=this.virtualScroll.dataStart+t,this.updateDataEnd=this.virtualScroll.dataEnd+t,this.updateDataStart<0&&(this.updateDataStart=0),this.updateDataEnd>this.data.length&&(this.updateDataEnd=this.data.length)};this.ulElm&&(this.virtualScroll=new Jc({rows:n,scrollEl:this.ulElm,contentEl:this.ulElm,sanitizer:this.options.sanitizer,callback:()=>{o(),this.events()}})),o(),e||(this.dropElm.style.left="0",this.dropElm.style.display="none")}else this.ulElm&&(this.ulElm.innerHTML=this.options.sanitizer?this.options.sanitizer(n.join("")):n.join(""),this.updateDataStart=0,this.updateDataEnd=this.updateData.length,this.virtualScroll=null);this.events()}getListRows(){let n=[];return this.updateData=[],this.data.forEach(t=>{n.push(...this.initListItem(t))}),n.push(`<li class="ms-no-results">${this.formatNoMatchesFound()}</li>`),n}initListItem(n,t=0){let e=n!=null&&n.title?`title="${n.title}"`:"",o=this.options.multiple?"multiple":"",i=this.options.single?"radio":"checkbox",s="";if(!(n!=null&&n.visible))return[];if(this.updateData.push(n),this.options.single&&!this.options.singleRadio&&(s="hide-radio "),n.selected&&(s+="selected "),n.type==="optgroup"){let r=this.options.styler(n),c=r?`style="${r}"`:"",p=[],m=this.options.hideOptgroupCheckboxes||this.options.single?`<span ${this.selectGroupName} data-key="${n._key}"></span>`:`<input type="checkbox"
          ${this.selectGroupName}
          data-key="${n._key}"
          ${n.selected?' checked="checked"':""}
          ${n.disabled?' disabled="disabled"':""}
        >`;return!s.includes("hide-radio")&&(this.options.hideOptgroupCheckboxes||this.options.single)&&(s+="hide-radio "),p.push(`
        <li class="group ${s}" ${c}>
        <label class="optgroup${this.options.single||n.disabled?" disabled":""}">
        ${m}${n.label}
        </label>
        </li>
      `),n.children.forEach(f=>{p.push(...this.initListItem(f,1))}),p}let l=this.options.styler(n),a=l?`style="${l}"`:"";return s+=n.classes||"",t&&this.options.single&&(s+=`option-level-${t} `),n.divider?'<li class="option-divider"/>':[`
      <li class="${o} ${s}" ${e} ${a}>
      <label class="${n.disabled?"disabled":""}">
      <input type="${i}"
        value="${encodeURI(n.value)}"
        data-key="${n._key}"
        ${this.selectItemName}
        ${n.selected?' checked="checked"':""}
        ${n.disabled?' disabled="disabled"':""}
      >
      <span>${n.text}</span>
      </label>
      </li>
    `]}initSelected(n=!1){let t=0;for(let e of this.data)if(e.type==="optgroup"){let o=e.children.filter(i=>i&&i.selected&&!i.disabled&&i.visible).length;e.children.length&&(e.selected=!this.options.single&&o&&o===e.children.filter(i=>i&&!i.disabled&&i.visible&&!i.divider).length),t+=o}else t+=e.selected&&!e.disabled&&e.visible?1:0;this.allSelected=this.data.filter(e=>e.selected&&!e.disabled&&e.visible).length===this.data.filter(e=>!e.disabled&&e.visible&&!e.divider).length,n||(this.allSelected?this.options.onCheckAll():t===0&&this.options.onUncheckAll())}initView(){let n;window.getComputedStyle?(n=window.getComputedStyle(this.elm).width,n==="auto"&&(n=he(this.dropElm,"outer","width")+20)):n=he(this.elm,"outer","width")+20,this.parentElm.style.width=`${this.options.width||n}px`,this.elm.style.display="block",this.elm.classList.add("ms-offscreen")}events(){this._bindEventService.unbind(this.okButtonElm),this._bindEventService.unbind(this.searchInputElm),this._bindEventService.unbind(this.selectAllElm),this._bindEventService.unbind(this.selectGroupElms),this._bindEventService.unbind(this.selectItemElms),this._bindEventService.unbind(this.disableItemElms),this._bindEventService.unbind(this.noResultsElm),this.searchInputElm=this.dropElm.querySelector(".ms-search input"),this.selectAllElm=this.dropElm.querySelector(`input[${this.selectAllName}]`),this.selectGroupElms=this.dropElm.querySelectorAll(`input[${this.selectGroupName}],span[${this.selectGroupName}]`),this.selectItemElms=this.dropElm.querySelectorAll(`input[${this.selectItemName}]:enabled`),this.disableItemElms=this.dropElm.querySelectorAll(`input[${this.selectItemName}]:disabled`),this.noResultsElm=this.dropElm.querySelector(".ms-no-results");let n=t=>{t.preventDefault(),!t.target.classList.contains("icon-close")&&this[this.options.isOpen?"close":"open"]()};this.labelElm&&this._bindEventService.bind(this.labelElm,"click",t=>{t.target.nodeName.toLowerCase()==="label"&&(n(t),(!this.options.filter||!this.options.isOpen)&&this.focus(),t.stopPropagation())}),this._bindEventService.bind(this.choiceElm,"click",n),this.options.onFocus&&this._bindEventService.bind(this.choiceElm,"focus",this.options.onFocus),this.options.onBlur&&this._bindEventService.bind(this.choiceElm,"blur",this.options.onBlur),this._bindEventService.bind(this.parentElm,"keydown",t=>{t.code==="Escape"&&!this.options.keepOpen&&(this.close(),this.choiceElm.focus())}),this.closeElm&&this._bindEventService.bind(this.closeElm,"click",t=>{t.preventDefault(),this._checkAll(!1,!0),this.initSelected(!1),this.updateSelected(),this.update(),this.options.onClear()}),this.searchInputElm&&(this._bindEventService.bind(this.searchInputElm,"keydown",t=>{t.code==="Tab"&&t.shiftKey&&this.close()}),this._bindEventService.bind(this.searchInputElm,"keyup",t=>{var e,o,i;if(this.options.filterAcceptOnEnter&&["Enter","Space"].includes(t.code)&&((e=this.searchInputElm)!=null&&e.value)){if(this.options.single){let s=[];if((o=this.selectItemElms)==null||o.forEach(l=>{var a;((a=l.closest("li"))==null?void 0:a.style.display)!=="none"&&s.push(l)}),s.length){let[l]=this.selectItemName.split("=");s[0].hasAttribute(l)&&this.setSelects([s[0].value])}}else(i=this.selectAllElm)==null||i.click();this.close(),this.focus();return}this.filter()})),this.selectAllElm&&(this._bindEventService.unbind(this.selectAllElm,"click"),this._bindEventService.bind(this.selectAllElm,"click",t=>{var e;this._checkAll((e=t.currentTarget)==null?void 0:e.checked)})),this.okButtonElm&&(this._bindEventService.unbind(this.okButtonElm,"click"),this._bindEventService.bind(this.okButtonElm,"click",t=>{n(t),t.stopPropagation()})),this._bindEventService.bind(this.selectGroupElms,"click",t=>{let e=t.currentTarget,o=e.checked,i=me(this.data,"_key",e.dataset.key);this._checkGroup(i,o),this.options.onOptgroupClick(Ke({label:i.label,selected:i.selected,data:i._data,children:i.children.map(s=>{if(s)return Ke({text:s.text,value:s.value,selected:s.selected,disabled:s.disabled,data:s._data})})}))}),this._bindEventService.bind(this.selectItemElms,"click",t=>{let e=t.currentTarget,o=e.checked,i=me(this.data,"_key",e.dataset.key);this._check(i,o),this.options.onClick(Ke({text:i.text,value:i.value,selected:i.selected,data:i._data})),this.options.single&&this.options.isOpen&&!this.options.keepOpen&&this.close()})}open(){var o,i,s,l,a;if((o=this.choiceElm)!=null&&o.classList.contains("disabled"))return;if(setTimeout(()=>this.options.isOpen=!0),this.parentElm.classList.add("ms-parent-open"),(s=(i=this.choiceElm)==null?void 0:i.querySelector("div"))==null||s.classList.add("open"),this.dropElm.style.display="block",(l=this.selectAllElm)!=null&&l.parentElement&&(this.selectAllElm.parentElement.style.display="block"),this.noResultsElm&&(this.noResultsElm.style.display="none"),this.data.length||((a=this.selectAllElm)!=null&&a.parentElement&&(this.selectAllElm.parentElement.style.display="none"),this.noResultsElm&&(this.noResultsElm.style.display="block")),this.options.container){let r=on(this.dropElm),c;this.options.container instanceof Node?c=this.options.container:typeof this.options.container=="string"&&(c=this.options.container==="body"?document.body:document.querySelector(this.options.container)),c.appendChild(this.dropElm),this.dropElm.style.top=`${(r==null?void 0:r.top)??0}px`,this.dropElm.style.left=`${(r==null?void 0:r.left)??0}px`,this.dropElm.style.minWidth="auto",this.dropElm.style.width=`${he(this.parentElm,"outer","width")}px`}let n=this.options.maxHeight;if(this.options.maxHeightUnit==="row"){let r=this.dropElm.querySelector("ul>li");n=he(r,"outer","height")*this.options.maxHeight}let t=this.dropElm.querySelector("ul");t&&(t.style.maxHeight=`${n}px`),this.dropElm.querySelectorAll(".multiple").forEach(r=>r.style.width=`${this.options.multipleWidth}px`),this.data.length&&this.options.filter&&(this.searchInputElm&&(this.searchInputElm.value="",this.searchInputElm.focus()),this.filter(!0)),this.options.autoAdjustDropWidthByTextSize&&this.adjustDropWidthByText();let e=this.options.position;if(this.options.autoAdjustDropHeight){if(this.options.autoAdjustDropPosition){let{bottom:r,top:c}=qe(this.dropElm),p=this.dropElm.getBoundingClientRect().height;e=r<p&&c>r?"top":"bottom"}this.adjustDropHeight(e)}this.options.autoAdjustDropPosition&&this.adjustDropPosition(!0),this.options.onOpen()}close(){var n,t;this.options.isOpen=!1,this.parentElm.classList.remove("ms-parent-open"),(t=(n=this.choiceElm)==null?void 0:n.querySelector("div"))==null||t.classList.remove("open"),this.dropElm.style.display="none",this.options.container&&(this.parentElm.appendChild(this.dropElm),this.dropElm.style.top="auto",this.dropElm.style.left="auto"),this.options.onClose()}update(n=!1){var r;let t=this.getSelects(),e=this.getSelects("text");this.options.displayValues&&(e=t);let o=(r=this.choiceElm)==null?void 0:r.querySelector("span"),i=t.length,s="",l=()=>{if(this.options.useSelectOptionLabel||this.options.useSelectOptionLabelToHtml){let c=t.join(this.options.delimiter);return this.options.useSelectOptionLabelToHtml?Yc(c):c}else return e.join(this.options.displayDelimiter)};if(o){if(i===0){let c=this.options.placeholder||"";o.classList.add("ms-placeholder"),o.innerHTML=this.options.sanitizer?this.options.sanitizer(c):c}else i<this.options.minimumCountSelected?s=l():this.formatAllSelected()&&i===this.dataTotal?s=this.formatAllSelected():this.options.ellipsis&&i>this.options.minimumCountSelected?s=`${e.slice(0,this.options.minimumCountSelected).join(this.options.displayDelimiter)}...`:this.formatCountSelected(i,this.dataTotal)&&i>this.options.minimumCountSelected?s=this.formatCountSelected(i,this.dataTotal):s=l();if(s&&(o==null||o.classList.remove("ms-placeholder"),this.options.useSelectOptionLabelToHtml?o.innerHTML=this.options.sanitizer?this.options.sanitizer(s):s:o.textContent=s),this.options.displayTitle||this.options.addTitle){this.options.addTitle&&console.warn("[Multiple-Select-Vanilla] Please note that the `addTitle` option was replaced with `displayTitle`.");let c=this.options.useSelectOptionLabel||this.options.useSelectOptionLabelToHtml?"value":"text";o.title=this.getSelects(c).join("")}}let a=this.getSelects().join("");if(this.options.single)this.elm.value=a;else{let c=this.elm.options;for(let p=0,m=c.length;p<m;p++){let f=a.indexOf(c[p].value)>=0;c[p].selected=f}}n||this.elm.dispatchEvent(new Event("change"))}updateSelected(){for(let t=this.updateDataStart;t<this.updateDataEnd;t++){let e=this.updateData[t],o=this.dropElm.querySelector(`input[data-key=${e._key}]`);if(o){o.checked=e.selected;let i=o.closest("li");i&&(e.selected&&!i.classList.contains("selected")?i.classList.add("selected"):e.selected||i.classList.remove("selected"))}}let n=this.data.filter(t=>t.visible).length===0;this.selectAllElm&&(this.selectAllElm.checked=this.allSelected,bo(this.selectAllElm.closest("li"),!n)),bo(this.noResultsElm,n),this.virtualScroll&&(this.virtualScroll.rows=this.getListRows())}getOptions(n=!0){let t=Object.assign({},this.options);return delete t.data,n?sn(t):this.options}refreshOptions(n){Kc(this.options,n,!0)||(this.options=Object.assign(this.options,n),this.destroy(!1),this.init())}getSelects(n="value"){let t=[];for(let e of this.data)if(e.type==="optgroup"){let o=e.children.filter(i=>i==null?void 0:i.selected);if(!o.length)continue;if(n==="value"||this.options.single)t.push(...o.map(i=>n==="value"&&i._value||i[n]));else{let i=[];i.push("["),i.push(e.label),i.push(`: ${o.map(s=>s[n]).join(", ")}`),i.push("]"),t.push(i.join(""))}}else e.selected&&t.push(n==="value"&&e._value||e[n]);return t}setSelects(n,t="value",e=!1){let o=!1,i=s=>{for(let l of s){let a=!1;t==="text"?a=n.includes(l.textContent.trim()):(a=n.includes(l._value||l.value),!a&&l.value===+l.value+""&&(a=n.includes(+l.value))),l.selected!==a&&(o=!0),l.selected=a}};for(let s of this.data)s.type==="optgroup"?i(s.children):i([s]);o&&(this.initSelected(e),this.updateSelected(),this.update(e))}enable(){var n;(n=this.choiceElm)==null||n.classList.remove("disabled")}disable(){var n;(n=this.choiceElm)==null||n.classList.add("disabled")}check(n){let t=me(this.data,"value",n);t&&this._check(t,!0)}uncheck(n){let t=me(this.data,"value",n);t&&this._check(t,!1)}_check(n,t){this.options.single&&this._checkAll(!1,!0),n.selected=t,this.initSelected(),this.updateSelected(),this.update()}checkAll(){this._checkAll(!0)}uncheckAll(){this._checkAll(!1)}_checkAll(n,t){for(let e of this.data)e.type==="optgroup"?this._checkGroup(e,n,!0):!e.disabled&&!e.divider&&(t||e.visible)&&(e.selected=n);t||(this.initSelected(),this.updateSelected(),this.update())}_checkGroup(n,t,e){n.selected=t,n.children.forEach(o=>{o&&!o.disabled&&!o.divider&&(e||o.visible)&&(o.selected=t)}),e||(this.initSelected(),this.updateSelected(),this.update())}checkInvert(){if(!this.options.single){for(let n of this.data)if(n.type==="optgroup")for(let t of n.children)t&&(t.divider||(t.selected=!t.selected));else n&&!n.divider&&(n.selected=!n.selected);this.initSelected(),this.updateSelected(),this.update()}}focus(){var n;(n=this.choiceElm)==null||n.focus(),this.options.onFocus()}blur(){var n;(n=this.choiceElm)==null||n.blur(),this.options.onBlur()}refresh(){this.destroy(!1),this.init()}filter(n){var o;let t=((o=this.searchInputElm)==null?void 0:o.value.trim())??"",e=t.toLowerCase();if(this.filterText!==e){this.filterText=e;for(let i of this.data)if(i.type==="optgroup")if(this.options.filterGroup){let s=`${(i==null?void 0:i.label)??""}`;if(i!=null){let l=this.options.customFilter(Tt(s.toLowerCase()),Tt(e),s,t);i.visible=l;for(let a of i.children)a&&(a.visible=l)}}else{for(let s of i.children)if(s!=null){let l=`${(s==null?void 0:s.text)??""}`;s.visible=this.options.customFilter(Tt(l.toLowerCase()),Tt(e),l,t)}i.visible=i.children.filter(s=>s==null?void 0:s.visible).length>0}else{let s=`${(i==null?void 0:i.text)??""}`;i.visible=this.options.customFilter(Tt(s.toLowerCase()),Tt(e),s,t)}this.initListItems(),this.initSelected(n),this.updateSelected(),n||this.options.onFilter(e)}}adjustDropHeight(n){var c,p,m,f;let t=n!=="top",e=((c=this.filterParentElm)==null?void 0:c.getBoundingClientRect().height)??0,o=((p=this.okButtonElm)==null?void 0:p.getBoundingClientRect().height)??0,i=this.options.single?0:((m=this.selectAllParentElm)==null?void 0:m.getBoundingClientRect().height)??0,s=e+o+i+5,{bottom:l,top:a}=qe(this.parentElm),r=this.options.maxHeight;if(t?r=l-s-this.options.adjustedHeightPadding:r=a-s-this.options.adjustedHeightPadding,!this.options.maxHeight||this.options.maxHeight&&r<this.options.maxHeight){let b=(f=this.dropElm)==null?void 0:f.querySelector("ul");return b&&(b.style.maxHeight=`${r}px`),!0}return!1}adjustDropPosition(n){let t="bottom";if(this.dropElm&&this.parentElm){let{bottom:e,top:o}=qe(this.dropElm),{top:i,left:s}=on(this.parentElm),l=this.dropElm.getBoundingClientRect().height,a=this.dropElm.getBoundingClientRect().width,r=document.body.offsetWidth||window.innerWidth,c=this.parentElm.getBoundingClientRect().width;if(e>l)t="bottom";else if(l>e&&o>e){if(this.options.container){let p=i-l;p<0&&(p=0),(p>0||n)&&(t="top",this.dropElm.style.top=`${p<0?0:p}px`)}else t="top",this.dropElm.classList.add(t);this.dropElm.classList.remove("bottom")}if(r-a<s){let p=s-(a-c);this.dropElm.style.left=`${p}px`}}return t}adjustDropWidthByText(){let n=this.parentElm.clientWidth;(this.options.dropWidth||this.options.width)&&(n=this.options.dropWidth||this.options.width||0);let t=this.dropElm.querySelector(".ms-select-all span"),e=this.dropElm.querySelector("ul"),o=0,i=this.dropElm.querySelector("li");if(i){let{paddingLeft:r,paddingRight:c}=window.getComputedStyle(i);o=parseFloat(r)+parseFloat(c)}let s=t.clientWidth+o,l=e.scrollHeight>e.clientHeight?this.getScrollbarWidth():0,a=0;this.dropElm.querySelectorAll("li label").forEach(r=>{r.scrollWidth>a&&(a=r.scrollWidth)}),a+=o+l,a<s&&(a=s),this.options.maxWidth&&a>this.options.maxWidth&&(a=this.options.maxWidth),this.options.minWidth&&a<this.options.minWidth&&(a=this.options.minWidth),(n==="100%"||+n<a)&&(this.dropElm.style.width=`${a}px`,this.dropElm.style.maxWidth=`${a}px`)}getScrollbarWidth(){var i;let n=document.createElement("div");n.style.visibility="hidden",n.style.width="100px",document.body.appendChild(n);let t=n.offsetWidth;n.style.overflow="scroll";let e=document.createElement("div");e.style.width="100%",n.appendChild(e);let o=e.offsetWidth;return(i=n.parentNode)==null||i.removeChild(n),t-o}formatAllSelected(){return this.options.allSelectedText||this.options.formatAllSelected()}formatCountSelected(n,t){return this.options.countSelectedText?this.options.countSelectedText.replace("#",`${n}`).replace("%",`${t}`):this.options.formatCountSelected(n,t)}formatNoMatchesFound(){return this.options.noMatchesFoundText||this.options.formatNoMatchesFound()}formatOkButton(){return this.options.okButtonText||this.options.formatOkButton()}formatSelectAll(){return this.options.selectAllText||this.options.formatSelectAll()}},h=function(n,t){return typeof n=="string"?ze(document.querySelectorAll(n),t):n instanceof Node?ze([n],t):ze(n,t)};function ze(n,t){let e=Array.from(n),o=[];for(let i=0;i<e.length;i++){let s=e[i];try{s._multipleSelect!==void 0&&(s._multipleSelect.destroy(),delete s._multipleSelect),s._multipleSelect=new Xc(s,t||{}),s._multipleSelect.init();let l=s._multipleSelect.getOptions(!1);l.onHardDestroy=()=>delete s._multipleSelect,l.onAfterHardDestroyed=()=>o[i]=null,o.push(s._multipleSelect)}catch(l){console.error(l)}}return o.length===1?o[0]:o}h.defaults=U.DEFAULTS;h.locales={...yi};h.methods=U.METHODS;typeof window<"u"&&(window.multipleSelect=h);let Qc=class{mount(){h("#select1"),h("#select2",{placeholder:"Here is the placeholder via javascript"})}},Ai=class{constructor(){d(this,"ms",[])}mount(){this.ms=h(".multiple-select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Zc=class{constructor(){d(this,"ms",[])}mount(){this.ms=h(".multiple-select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},tu=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select",{multiple:!0,multipleWidth:60})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},eu=class{constructor(){d(this,"multiMs",[]);d(this,"singleMs")}mount(){this.multiMs=h(".select"),this.singleMs=h(".data",{data:[{value:1,text:"Options 1",selected:!0},{value:2,text:"Options 2"},{value:3,text:"Options 3"}]})}unmount(){var t;this.multiMs.forEach(e=>e.destroy()),this.multiMs=[],(t=this.singleMs)==null||t.destroy(),this.singleMs=void 0}},nu=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select")}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},ou=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},iu=class{constructor(){d(this,"btnElm");d(this,"ms",[]);d(this,"clickListener",()=>{const t=this.serialize(document.querySelector("form"));alert(t)})}mount(){this.ms=h("select"),this.btnElm=document.querySelector(".submit7"),this.btnElm.addEventListener("click",this.clickListener)}unmount(){this.btnElm.removeEventListener("click",this.clickListener),this.ms.forEach(t=>t.destroy()),this.ms=[]}serialize(t){let e=[];return t.querySelectorAll("[name]").forEach(o=>{const i=Array.from(o.selectedOptions);for(const s of i)e.push(o.name+"="+s.value)}),e.length>0?e.join("&"):!1}},su=class{constructor(){d(this,"ms1");d(this,"ms2");d(this,"ms3");d(this,"ms4");d(this,"ms5")}mount(){this.ms1=h("#basic",{data:[{text:"January",value:1},{text:"February",value:2},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}),this.ms2=h("#object",{data:{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}}),this.ms3=h("#string",{data:["January","February","March"]}),this.ms4=h("#number",{data:[1,2,3]}),this.ms5=h("#group",{data:[{type:"optgroup",label:"Group 1",children:[{text:"January",value:1,selected:!0},{text:"February",value:2,disabled:!0},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6}]},{type:"optgroup",label:"Group 2",children:[{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}]})}unmount(){var t,e,o,i,s;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),(s=this.ms5)==null||s.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0}};(()=>{var n=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};n.locales={["en-US"]:{formatSelectAll(){return"[Select all]"},formatAllSelected(){return"All selected"},formatCountSelected(p,m){return p+" of "+m+" selected"},formatNoMatchesFound(){return"No matches found"},formatOkButton(){return"OK"}}},n.locales;var t=window.multipleSelect;t.locales["es-ES"]={formatSelectAll(){return"[Seleccionar todo]"},formatAllSelected(){return"Todos seleccionados"},formatCountSelected(p,m){return p+" de "+m+" seleccionado"},formatNoMatchesFound(){return"No se encontraron coincidencias"},formatOkButton(){return"Cerrar"}},t.locales;var e=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};e.locales["fr-FR"]={formatSelectAll(){return"[Tout sélectionner]"},formatAllSelected(){return"Tous sélectionnés"},formatCountSelected(p,m){return p+" de "+m+" sélectionnés"},formatNoMatchesFound(){return"Aucun résultat"},formatOkButton(){return"Fermer"}},e.locales;var o=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};o.locales["hu-HU"]={formatSelectAll(){return"[Összes kiválasztása]"},formatAllSelected(){return"Összes kiválasztva"},formatCountSelected(p,m){return p+" / "+m+" kiválasztva"},formatNoMatchesFound(){return"Nincs találat"},formatOkButton(){return"Bezár"}},o.locales;var i=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};i.locales["it-IT"]={formatSelectAll(){return"[Seleziona tutti]"},formatAllSelected(){return"Tutti selezionati"},formatCountSelected(p,m){return p+" di "+m+" selezionati"},formatNoMatchesFound(){return"Nessun risultato"},formatOkButton(){return"Chiudere"}},i.locales;var s=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};s.locales["pt-BR"]={formatSelectAll(){return"[Selecionar todos]"},formatAllSelected(){return"Todos selecionados"},formatCountSelected(p,m){return p+" de "+m+" selecionado(s)"},formatNoMatchesFound(){return"Nenhum resultado encontrado"},formatOkButton(){return"Fechar"}},s.locales;var l=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};l.locales["ru-RU"]={formatSelectAll(){return"[Выбрать все]"},formatAllSelected(){return"Выбрано все"},formatCountSelected(p,m){return p+" из "+m+" выбрано"},formatNoMatchesFound(){return"Совпадений не найдено"},formatOkButton(){return"Закрывать"}},l.locales;var a=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};a.locales["vi-VN"]={formatSelectAll(){return"[Tất cả]"},formatAllSelected(){return"Chọn tất cả"},formatCountSelected(p,m){return"Đã chọn "+p+" trong "+m},formatNoMatchesFound(){return"Không tìm thấy kết quả."},formatOkButton(){return"Đóng"}},a.locales;var r=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};r.locales["zh-CN"]={formatSelectAll(){return"[全选]"},formatAllSelected(){return"已选择所有记录"},formatCountSelected(p,m){return"已从"+m+"条记录中选择"+p+"条"},formatNoMatchesFound(){return"没有找到记录"},formatOkButton(){return"关闭"}},r.locales;var c=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};c.locales["zh-TW"]={formatSelectAll(){return"[全選]"},formatAllSelected(){return"已選擇所有記錄"},formatCountSelected(p,m){return"已從"+m+"條記錄中選擇"+p+"條"},formatNoMatchesFound(){return"沒有找到記錄"},formatOkButton(){return"关闭"}},c.locales})();let lu=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){const t=document.querySelector("#locale");t.addEventListener("change",e=>{this.updateLocale(e.target.value)}),this.ms1=h(t),this.ms2=h("#select",{filter:!0,showOkButton:!0})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}updateLocale(t){var e,o;(e=this.ms2)==null||e.destroy(),(o=this.ms2)==null||o.refreshOptions({locale:t})}},au=class{constructor(){d(this,"ms1")}mount(){for(var t=[],e=0;e<1e4;e++)t.push(e);this.ms1=h("#select",{filter:!0,data:t})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}};let ru=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}};let pu=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){this.ms1=h("#single",{singleRadio:!0}),this.ms2=h("#multiple",{showOkButton:!0})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},cu=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){this.ms1=h("#select1"),this.ms2=h("#select2",{placeholder:"Here is the placeholder via javascript"})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},uu=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select",{singleRadio:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},du=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{selectAll:!1})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},hu=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{multiple:!0,hideOptgroupCheckboxes:!0,multipleWidth:60})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},mu=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{multiple:!0,width:500,multipleWidth:70,dropWidth:580})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},vu=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{maxHeight:140})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},bu=class{constructor(){d(this,"ms",[])}mount(){const t=document.querySelector("#number");this.ms=h("select",{maxHeight:+t.value,maxHeightUnit:"row"}),t.addEventListener("change",()=>{this.ms.forEach(e=>{e.refreshOptions({maxHeight:+t.value,maxHeightUnit:"row"})})})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},fu=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{position:"top"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},gu=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{displayValues:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Eu=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{displayTitle:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},_u=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{displayDelimiter:" | "})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},yu=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{minimumCountSelected:8})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},wu=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{ellipsis:!0,minimumCountSelected:5})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Au=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{isOpen:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Su=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{keepOpen:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Ou=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{openOnHover:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Cu=class{constructor(){d(this,"ms1");d(this,"ms2");d(this,"ms3")}mount(){this.ms1=h(".select1"),this.ms2=h(".select2"),this.ms3=h(".select3",{container:".my-container"})}unmount(){var t,e,o;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0}},Tu=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select",{filter:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},ku=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{filter:!0,filterGroup:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},xu=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{filter:!0,filterPlaceholder:"The filter placeholder"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Du=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select",{filter:!0,filterAcceptOnEnter:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Nu=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select",{filterByDataLength:10})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Lu=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{filter:!0,customFilter:(t,e,o,i)=>document.querySelector("input").checked?o.indexOf(i)===0:t.indexOf(e)===0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Mu=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select",{showClear:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},$u=class{constructor(){d(this,"ms",[])}mount(){this.ms.push(h(".select1",{showOkButton:!0})),this.ms.push(h(".select2",{showOkButton:!0})),this.ms.push(h(".select3",{showOkButton:!0,filter:!0})),this.ms.push(h(".select4",{showOkButton:!0}))}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Fu=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){this.ms1=h("#basic",{styler:t=>+t.value==1?"background-color: #ffee00; color: #ff0000;":+t.value==6?"background-color: #000; color: #fff;":null}),this.ms2=h("#group",{styler:t=>t.type==="optgroup"?"color: #777; font-weight: normal;":+t.value==1?"color: blue;":null})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},Iu=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{textTemplate:t=>'<i class="fa fa-star"></i>'+t.innerHTML})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Bu=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{labelTemplate:t=>'<i class="fa fa-star"></i>'+t.getAttribute("label")})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Ru=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select",{autoAdjustDropPosition:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Pu=class{constructor(){d(this,"ms1");d(this,"ms2");d(this,"ms3");d(this,"ms4")}mount(){this.ms1=h("#select1",{autoAdjustDropWidthByTextSize:!0,autoAdjustDropHeight:!0,position:"top",showOkButton:!0}),this.ms2=h("#select2",{autoAdjustDropHeight:!0,position:"top",showOkButton:!0}),this.ms3=h("#select3",{autoAdjustDropHeight:!0,filter:!0,position:"top"}),this.ms4=h("#select4")}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},Hu=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){this.ms1=h("#select1",{useSelectOptionLabel:!0}),this.ms2=h("#select2",{useSelectOptionLabelToHtml:!0,data:[{text:'<i class="fa fa-star"></i> January',value:'<i class="fa fa-star"></i>1',selected:!0},{text:"February",value:"2"},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},ju=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("#select1",{placeholder:'Placeholder with cross-site scripting code...<img src="not-found" onerror=alert("Hacked")>',sanitizer:t=>typeof t=="string"?decodeURIComponent(t).replace(/(\b)(on[a-z]+)(\s*)=|javascript:([^>]*)[^>]*|(<\s*)(\/*)script([<>]*).*(<\s*)(\/*)script(>*)|(&lt;)(\/*)(script|script defer)(.*)(&gt;|&gt;">)/gi,""):t})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Vu=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{filter:!0}),document.querySelector("#getOptions").addEventListener("click",()=>{alert(JSON.stringify(this.ms1.getOptions(),null,4))})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Gu=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{filter:!0}),document.querySelector("#refreshOptions").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.refreshOptions({filter:!1})})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Wu=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{filter:!0}),document.querySelector("#setSelectsBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.setSelects([1,3])}),document.querySelector("#getSelectsBtn").addEventListener("click",()=>{var t,e;alert("Selected values: "+((t=this.ms1)==null?void 0:t.getSelects())),alert("Selected texts: "+((e=this.ms1)==null?void 0:e.getSelects("text")))})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Ju=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select"),document.querySelector("#enableBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.enable()}),document.querySelector("#disableBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.disable()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Uu=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select"),document.querySelector("#openBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.open()}),document.querySelector("#closeBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.close()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},qu=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select"),document.querySelector("#checkBtn").addEventListener("click",()=>{for(const t of this.ms)t.check(2)}),document.querySelector("#uncheckBtn").addEventListener("click",()=>{for(const t of this.ms)t.uncheck(2)})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Ku=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select"),document.querySelector("#checkAllBtn").addEventListener("click",()=>{for(const t of this.ms)t.checkAll()}),document.querySelector("#uncheckAllBtn").addEventListener("click",()=>{for(const t of this.ms)t.uncheckAll()})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},zu=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select"),document.querySelector("#checkInvert").addEventListener("click",()=>{for(const t of this.ms)t.checkInvert()})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Yu=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select"),document.querySelector("#focusBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.focus()}),document.querySelector("#blurBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.blur()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Xu=class{constructor(){d(this,"ms1")}mount(){const t=document.querySelector("select");this.ms1=h(t),document.querySelector("#refreshAdd").addEventListener("click",()=>{var a;const e=document.querySelector("#refreshInput"),o=document.querySelector("#refreshSelected"),i=document.querySelector("#refreshDisabled"),s=e.value.trim(),l=document.createElement("option");if(l.value=s,l.text=s,!s){e.focus();return}o.checked&&(l.selected=!0),i.checked&&(l.disabled=!0),e.value="",t.appendChild(l),(a=this.ms1)==null||a.refresh()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Qu=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select"),document.querySelector("#destroyBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.destroy(),this.ms1=null}),document.querySelector("#buildBtn").addEventListener("click",()=>{this.ms1=h("select")})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Zu=class{constructor(){d(this,"logElm");d(this,"ms1")}mount(){this.logElm=document.querySelector("textarea"),this.ms1=h("select",{filter:!0,onOpen:()=>{this.log(`onOpen event fire!
`)},onClose:()=>{this.log(`onClose event fire!
`)},onCheckAll:()=>{this.log(`onCheckAll event fire!
`)},onUncheckAll:()=>{this.log(`onUncheckAll event fire!
`)},onFocus:()=>{this.log(`onFocus event fire!
`)},onBlur:()=>{this.log(`onBlur event fire!
`)},onOptgroupClick:t=>{this.log("onOptgroupClick event fire! view: "+JSON.stringify(t)+`
`)},onClick:t=>{this.log("onClick event fire! view: "+JSON.stringify(t)+`
`)},onFilter:t=>{this.log("onFilter event fire! text: "+t+`
`)},onAfterCreate:()=>{this.log(`onAfterCreate event fire!
`)}})}log(t){this.logElm.textContent+=t,this.logElm.scrollTo(0,this.logElm.scrollHeight)}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}};class td{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{filter:!0,showOkButton:!0,formatAllSelected(){return"Tous sélectionnés"},formatCountSelected(t,e){return t+" de "+e+" sélectionnés"},formatNoMatchesFound(){return"Aucun résultat"},formatOkButton(){return"Fermer"},formatSelectAll(){return"[Tout sélectionner]"}})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}}const fo=[{name:"gettingStarted",view:"/src/getting-started.html",viewModel:Qc,title:"Getting Started"},{name:"examples",view:"/src/examples/example01.html",viewModel:Ai,title:"Examples"}],go=[{name:"Welcomes",routes:[{name:"example01",view:"/src/examples/example01.html",viewModel:Ai,title:"Single Select"},{name:"example02",view:"/src/examples/example02.html",viewModel:Zc,title:"Multiple Select"},{name:"example03",view:"/src/examples/example03.html",viewModel:tu,title:"Multiple Items"},{name:"example04",view:"/src/examples/example04.html",viewModel:eu,title:"Auto Width"},{name:"example05",view:"/src/examples/example05.html",viewModel:nu,title:"Disabled Select"},{name:"example06",view:"/src/examples/example06.html",viewModel:ou,title:"Selected/Disabled Options"},{name:"example07",view:"/src/examples/example07.html",viewModel:iu,title:"Submit Select"},{name:"example08",view:"/src/examples/example08.html",viewModel:su,title:"The Data"},{name:"example09",view:"/src/examples/example09.html",viewModel:lu,title:"Locale"},{name:"example10",view:"/src/examples/example10.html",viewModel:au,title:"Large Select"},{name:"example11",view:"/src/examples/example11.html",viewModel:ru,title:"The Themes"},{name:"example12",view:"/src/examples/example12.html",viewModel:pu,title:"Checkbox/Radio Icons"}]},{name:"Options",routes:[{name:"options01",view:"/src/options/options01.html",viewModel:cu,title:"The Placeholder"},{name:"options02",view:"/src/options/options02.html",viewModel:uu,title:"Single Radio"},{name:"options03",view:"/src/options/options03.html",viewModel:du,title:"Hide Select All"},{name:"options04",view:"/src/options/options04.html",viewModel:hu,title:"Hide Optgroup Checkboxes"},{name:"options05",view:"/src/options/options05.html",viewModel:mu,title:"Custom Dropdown Width"},{name:"options06",view:"/src/options/options06.html",viewModel:vu,title:"Max Height"},{name:"options07",view:"/src/options/options07.html",viewModel:bu,title:"Max Height Unit"},{name:"options08",view:"/src/options/options08.html",viewModel:fu,title:"The Position"},{name:"options09",view:"/src/options/options09.html",viewModel:gu,title:"Display Values"},{name:"options10",view:"/src/options/options10.html",viewModel:Eu,title:"Display Title"},{name:"options11",view:"/src/options/options11.html",viewModel:_u,title:"Display Delimiter"},{name:"options12",view:"/src/options/options12.html",viewModel:yu,title:"Minimum Count Selected"},{name:"options13",view:"/src/options/options13.html",viewModel:wu,title:"The Ellipsis"},{name:"options14",view:"/src/options/options14.html",viewModel:Au,title:"Is Open"},{name:"options15",view:"/src/options/options15.html",viewModel:Su,title:"Keep Open"},{name:"options16",view:"/src/options/options16.html",viewModel:Ou,title:"Open On Hover"},{name:"options17",view:"/src/options/options17.html",viewModel:Cu,title:"The Container"},{name:"options18",view:"/src/options/options18.html",viewModel:Tu,title:"The Filter"},{name:"options19",view:"/src/options/options19.html",viewModel:ku,title:"Filter Only Optgroup"},{name:"options20",view:"/src/options/options20.html",viewModel:xu,title:"Filter Placeholder"},{name:"options21",view:"/src/options/options21.html",viewModel:Du,title:"Filter Accept On Enter"},{name:"options22",view:"/src/options/options22.html",viewModel:Nu,title:"Filter By Data Length"},{name:"options23",view:"/src/options/options23.html",viewModel:Lu,title:"Custom Filter"},{name:"options24",view:"/src/options/options24.html",viewModel:Mu,title:"Show Clear"},{name:"options25",view:"/src/options/options25.html",viewModel:$u,title:"Show OK Button"},{name:"options26",view:"/src/options/options26.html",viewModel:Fu,title:"The Styler"},{name:"options27",view:"/src/options/options27.html",viewModel:Iu,title:"Text Template"},{name:"options28",view:"/src/options/options28.html",viewModel:Bu,title:"Label Template"},{name:"options29",view:"/src/options/options29.html",viewModel:Ru,title:"Auto-Adjust Drop Position"},{name:"options30",view:"/src/options/options30.html",viewModel:Pu,title:"Auto-Adjust Drop Height/Width"},{name:"options31",view:"/src/options/options31.html",viewModel:Hu,title:"Use Select Option as Label"},{name:"options32",view:"/src/options/options32.html",viewModel:ju,title:"Sanitizer"}]},{name:"Methods",routes:[{name:"methods01",view:"/src/methods/methods01.html",viewModel:Vu,title:"The getOptions"},{name:"methods02",view:"/src/methods/methods02.html",viewModel:Gu,title:"The refreshOptions"},{name:"methods03",view:"/src/methods/methods03.html",viewModel:Wu,title:"The setSelects/getSelects"},{name:"methods04",view:"/src/methods/methods04.html",viewModel:Ju,title:"The enable/disable"},{name:"methods05",view:"/src/methods/methods05.html",viewModel:Uu,title:"The open/close"},{name:"methods06",view:"/src/methods/methods06.html",viewModel:qu,title:"The check/uncheck"},{name:"methods07",view:"/src/methods/methods07.html",viewModel:Ku,title:"The checkAll/uncheckAll"},{name:"methods08",view:"/src/methods/methods08.html",viewModel:zu,title:"The checkInvert"},{name:"methods09",view:"/src/methods/methods09.html",viewModel:Yu,title:"The focus/blur"},{name:"methods10",view:"/src/methods/methods10.html",viewModel:Xu,title:"The refresh"},{name:"methods11",view:"/src/methods/methods11.html",viewModel:Qu,title:"The destroy"}]},{name:"Events",routes:[{name:"events",view:"/src/events/events.html",viewModel:Zu,title:"The Events"}]},{name:"I18N",routes:[{name:"i18n",view:"/src/i18n/i18n.html",viewModel:td,title:"The i18n"}]}],ed=Object.assign({"/src/events/events.html":Li,"/src/examples/example01.html":Mi,"/src/examples/example02.html":$i,"/src/examples/example03.html":Fi,"/src/examples/example04.html":Ii,"/src/examples/example05.html":Bi,"/src/examples/example06.html":Ri,"/src/examples/example07.html":Pi,"/src/examples/example08.html":Hi,"/src/examples/example09.html":ji,"/src/examples/example10.html":Vi,"/src/examples/example11.html":Gi,"/src/examples/example12.html":Wi,"/src/getting-started.html":Ji,"/src/i18n/i18n.html":Ui,"/src/main.html":Eo,"/src/methods/methods01.html":qi,"/src/methods/methods02.html":Ki,"/src/methods/methods03.html":zi,"/src/methods/methods04.html":Yi,"/src/methods/methods05.html":Xi,"/src/methods/methods06.html":Qi,"/src/methods/methods07.html":Zi,"/src/methods/methods08.html":ts,"/src/methods/methods09.html":es,"/src/methods/methods10.html":ns,"/src/methods/methods11.html":os,"/src/options/options01.html":is,"/src/options/options02.html":ss,"/src/options/options03.html":ls,"/src/options/options04.html":as,"/src/options/options05.html":rs,"/src/options/options06.html":ps,"/src/options/options07.html":cs,"/src/options/options08.html":us,"/src/options/options09.html":ds,"/src/options/options10.html":hs,"/src/options/options11.html":ms,"/src/options/options12.html":vs,"/src/options/options13.html":bs,"/src/options/options14.html":fs,"/src/options/options15.html":gs,"/src/options/options16.html":Es,"/src/options/options17.html":_s,"/src/options/options18.html":ys,"/src/options/options19.html":ws,"/src/options/options20.html":As,"/src/options/options21.html":Ss,"/src/options/options22.html":Os,"/src/options/options23.html":Cs,"/src/options/options24.html":Ts,"/src/options/options25.html":ks,"/src/options/options26.html":xs,"/src/options/options27.html":Ds,"/src/options/options28.html":Ns,"/src/options/options29.html":Ls,"/src/options/options30.html":Ms,"/src/options/options31.html":$s,"/src/options/options32.html":Fs});class nd{constructor(){d(this,"loading",!0);d(this,"currentModel");d(this,"currentRouter");d(this,"defaultRouteName","example01");d(this,"stateBangChar","#/");d(this,"baseUrl",window.location.origin+window.location.pathname);d(this,"viewModelObj",{})}async init(){const t=window.location;document.querySelector("#app").innerHTML=Eo;let e=t.hash.replace(this.stateBangChar,"");(!e||e==="/"||e==="#")&&(e=this.defaultRouteName),this.createRouteLinks(),this.loadRoute(e),Array.from(document.querySelectorAll(".panel-wm-left a.nav-link,.navbar-nav a.nav-link")).forEach(o=>{e.includes(o.id)&&o.classList.add("active")}),window.onpopstate=()=>{const i=window.location.hash.replace(this.stateBangChar,"");this.removeAllActiveLinks();const s=document.querySelector(`#${i}`);s&&(s.scrollIntoView(),s.classList.add("active")),this.loadRoute(i||this.defaultRouteName,!1)}}createRouteLinks(){var t,e,o;for(const i of fo){const s=x("li",{className:"nav-item"}),l=x("a",{id:i.name,className:"nav-link",textContent:i.title});l.addEventListener("click",this.clickEventListener.bind(this)),s.appendChild(l),(t=document.querySelector(".navbar-nav"))==null||t.appendChild(s)}for(const i of go){const s=x("li",{className:"m-1"}),l=x("p",{className:"navbar-vertical-label mb-1",textContent:i.name});s.appendChild(l),(e=document.querySelector(".nav-pills"))==null||e.appendChild(s);for(const a of i.routes){const r=x("li",{className:"nav-item"}),c=x("a",{id:a.name,className:"nav-link",textContent:a.title});c.addEventListener("click",this.clickEventListener.bind(this)),r.appendChild(c),(o=document.querySelector(".nav-pills"))==null||o.appendChild(r)}}}async loadRoute(t,e=!0){var s;const o=document.querySelector(".panel-wm-content");o.innerHTML="",o.classList.add("cloak");let i=fo.find(l=>l.name===t);if((i==null?void 0:i.name)==="examples"){const l=document.querySelector(".nav-pills .nav-item a.nav-link");l==null||l.classList.add("active")}else for(const l of go){const a=l.routes.find(r=>r.name===t);a&&(i=a)}if(this.currentModel&&this.unmountCurrentVM(this.currentModel,this.currentRouter),i){this.currentRouter=i,document.querySelector(".panel-wm-content").innerHTML=ed[i.view];const l=new i.viewModel;this.currentModel=l,window[i.name]=(s=l.mount)==null?void 0:s.call(l),window.onbeforeunload=()=>{var a;o.classList.add("cloak"),(a=l.unmount)==null||a.call(l),this.removeAllActiveLinks(!0),this.unmountAll(),i!=null&&i.name&&delete window[i.name]}}e&&window.history.pushState({},t,`${this.baseUrl}${this.stateBangChar}${t}`),document.title=`Multiple-Select-Vanilla · ${t}`,o.classList.remove("cloak")}async clickEventListener(t){this.removeAllActiveLinks();const e=t.target;e.classList.toggle("active"),this.loadRoute(e.id)}removeAllActiveLinks(t=!1){document.querySelectorAll(".panel-wm-left a.nav-link,.navbar-nav a.nav-link").forEach(e=>{e.classList.remove("active"),t&&e.addEventListener("click",this.clickEventListener.bind(this))})}unmountCurrentVM(t,e){var o;(o=t.unmount)==null||o.call(t),e&&delete window[e.name]}unmountAll(){for(const t of Object.keys(this.viewModelObj)){const e=this.viewModelObj[t];if(typeof(e==null?void 0:e.unmount)=="function"){e==null||e.unmount();for(const o of Object.keys(e))e[o]=null}window[t]=null,this.viewModelObj[t]=null,delete window[t],delete this.viewModelObj[t]}}}const od=new nd;od.init();
