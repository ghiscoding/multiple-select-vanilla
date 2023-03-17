var Di=Object.defineProperty;var Ni=(n,t,e)=>t in n?Di(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var d=(n,t,e)=>(Ni(n,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Mi=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      The Events\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/events/events.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/events/events.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Multiple Select has some callback events.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Events </label>\r
\r
    <div class="col-sm-10">\r
      <textarea class="form-control" readonly rows="10" style="background-color: #f0f0f0"></textarea>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Group Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <optgroup label="Group 1">\r
          <option value="1">Option 1</option>\r
          <option value="2">Option 2</option>\r
          <option value="3">Option 3</option>\r
        </optgroup>\r
        <optgroup label="Group 2">\r
          <option value="4">Option 4</option>\r
          <option value="5">Option 5</option>\r
          <option value="6">Option 6</option>\r
        </optgroup>\r
        <optgroup label="Group 3">\r
          <option value="7">Option 7</option>\r
          <option value="8">Option 8</option>\r
          <option value="9">Option 9</option>\r
        </optgroup>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,Li=`<div class="row">
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
`,Bi=`<div class="row mb-2">
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
`,Ii=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      Disabled Select\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example05.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example05.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Show a disabled select width <code>disabled</code> attribute.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Disabled Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" disabled="disabled" class="full-width">\r
        <option value="1" selected>January</option>\r
        <option value="2">February</option>\r
        <option value="3" selected>March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
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
`,Hi=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      The Data\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example08.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example08.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Use <code>data</code> as data source.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Array </label>\r
\r
    <div class="col-sm-10">\r
      <select id="basic" class="full-width" multiple></select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Object </label>\r
\r
    <div class="col-sm-10">\r
      <select id="object" class="full-width" multiple></select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> String Array </label>\r
\r
    <div class="col-sm-10">\r
      <select id="string" class="full-width" multiple></select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Number Array </label>\r
\r
    <div class="col-sm-10">\r
      <select id="number" class="full-width" multiple></select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Group Array </label>\r
\r
    <div class="col-sm-10">\r
      <select id="group" class="full-width" multiple></select>\r
    </div>\r
  </div>\r
</div>\r
`,ji=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      The Locale\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example09.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example09.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Use <code>locale</code> to set the locale.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Locale Select </label>\r
\r
    <div class="col-sm-10">\r
      <select id="locale" class="full-width">\r
        <option value="en-US">English</option>\r
        <option value="fr-FR">French</option>\r
        <option value="es-ES">Spanish</option>\r
        <option value="it-IT">Italian</option>\r
        <option value="vi-VN">Vietnamese</option>\r
        <option value="zh-CN">简体中文</option>\r
        <option value="zh-TW">繁體中文</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Result Select </label>\r
\r
    <div class="col-sm-10">\r
      <select id="select" class="full-width" multiple="multiple">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,Vi=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      Large Select\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example10.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example10.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Virtual scroll will be used with a large set of data</div>\r
  </div>\r
\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2">\r
      Basic Select\r
    </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" id="select" class="full-width">\r
    </div>\r
  </div>\r
</div>\r
`,Gi=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      The Themes\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example11.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/examples/example11.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Multiple select with bootstrap theme.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2 col-form-label col-form-label-sm"> Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="form-control form-control-sm" placeholder="form-control-sm">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2 col-form-label"> Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="form-control" placeholder="form-control">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2 col-form-label col-form-label-lg"> Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="form-control form-control-lg" placeholder="form-control-lg">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
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
    <h2 class="bd-title">
      Dynamically create Multiple-Select with Data collection
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
      <select id="select1" class="full-width"></select>
    </div>
  </div>
</div>
`,Ui=`<div class="row mb-2">
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
      The folks over at UNPKG graciously provide CDN support for CSS and JavaScript of Multiple-Select-Vanilla. Just use these CDN
      links.
    </p>

    <div style="background: #f7f7f7; padding: 10px">
      <pre>
&lt;!-- Latest compiled and minified CSS --&gt;
&lt;link href=&quot;<span style="color:#880000">https://unpkg.com/multiple-select-vanilla@0.2.7/dist/styles/css/multiple-select.css</span>&quot; rel=&quot;<span style="color:#880000">stylesheet</span>&quot;&gt;

&lt;!-- Latest compiled and minified JavaScript --&gt;
&lt;script src=&quot;<span style="color:#880000">https://unpkg.com/multiple-select-vanilla@0.2.7/dist/multiple-select.js</span>&quot;&gt;&lt;/script&gt;</pre>
    </div>
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
`,qi=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      The i18n\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/i18n/i18n.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/i18n/i18n.ts">ts</a>\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Custom i18n options, for example French is used here.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">Janvier</option>\r
        <option value="2">Février</option>\r
        <option value="3">Mars</option>\r
        <option value="4">Avril</option>\r
        <option value="5">Mai</option>\r
        <option value="6">Juin</option>\r
        <option value="7">Juillet</option>\r
        <option value="8">Août</option>\r
        <option value="9">Septembre</option>\r
        <option value="10">Octobre</option>\r
        <option value="11">Novembre</option>\r
        <option value="12">Décembre</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="my-5 offset-sm-1 col-sm-10">\r
    <hr />\r
  </div>\r
\r
  <div class="row mt-5">\r
    <label class="col-sm-2">Code Sample</label>\r
    <div class="col-sm-10 col-lg-8">\r
      <iframe\r
        style="height: 100%; width: 60%; position: absolute"\r
        src="data:text/html;charset=utf-8,\r
        <head><base target='_blank' /></head>\r
        <body><script src='https://gist.github.com/ghiscoding/337a664ffd1564d2f95c3f9d1b814172.js'><\/script><\/script>\r
        </body>"\r
      >\r
      </iframe>\r
    </div>\r
  </div>\r
</div>\r
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
`,Ki=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      The getOptions\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods01.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods01.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Use <code>multipleSelect('select').getOptions()</code> to get the options object.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Methods </label>\r
\r
    <div class="col-sm-10">\r
      <button id="getOptions" class="btn btn-secondary">getOptions</button>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="text1">text1</option>\r
        <option value="text2">text2</option>\r
        <option value="text3">text3</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,zi=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      The refreshOptions\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods02.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods02.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">\r
      Use <code>multipleSelect('select').refreshOptions({ filter: false })</code> to refresh the options object.\r
    </div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Methods </label>\r
\r
    <div class="col-sm-10">\r
      <button id="refreshOptions" class="btn btn-secondary">refreshOptions</button>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="text1">text1</option>\r
        <option value="text2">text2</option>\r
        <option value="text3">text3</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,Yi=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      The setSelects/getSelects\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods03.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods03.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">\r
      Use <code>multipleSelect('select').setSelects([])</code> and <code>multipleSelect('select').getSelects()</code> to set\r
      selects and get selects.\r
    </div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Methods </label>\r
\r
    <div class="col-sm-10">\r
      <button id="setSelectsBtn" class="btn btn-secondary">SetSelects</button>\r
      <button id="getSelectsBtn" class="btn btn-secondary">GetSelects</button>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,Xi=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      The enable/disable\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods04.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods04.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">\r
      Use <code>multipleSelect('select').enable()</code> and <code>multipleSelect('select').disable()</code> to enable and disable\r
      select.\r
    </div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Methods </label>\r
\r
    <div class="col-sm-10">\r
      <button id="enableBtn" class="btn btn-secondary">Enable</button>\r
      <button id="disableBtn" class="btn btn-secondary">Disable</button>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,Qi=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      The open/close\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods05.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods05.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">\r
      Use <code>multipleSelect('select').open()</code> and <code>multipleSelect('select').close()</code> to open and close the\r
      select dropdown list.\r
    </div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Methods </label>\r
\r
    <div class="col-sm-10">\r
      <button id="openBtn" class="btn btn-secondary">Open</button>\r
      <button id="closeBtn" class="btn btn-secondary">Close</button>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,Zi=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      The check/uncheck\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods06.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods06.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">\r
      Methods: <code>multipleSelect('select').check(2)</code> and <code>multipleSelect('select').uncheck(2)</code> to check and\r
      uncheck a select option.\r
    </div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Methods </label>\r
\r
    <div class="col-sm-10">\r
      <button id="checkBtn" class="btn btn-secondary">Check</button>\r
      <button id="uncheckBtn" class="btn btn-secondary">Uncheck</button>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Single Select </label>\r
\r
    <div class="col-sm-10">\r
      <select>\r
        <option value="1">Value 1</option>\r
        <option value="2">Value 2</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Multiple Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1" selected>Value 1</option>\r
        <option value="2">Value 2</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Group Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <optgroup label="Group 1">\r
          <option value="1" selected>Value 1</option>\r
          <option value="2">Value 2</option>\r
        </optgroup>\r
        <optgroup label="Group 2">\r
          <option value="3" selected>Value 3</option>\r
          <option value="4">Value 4</option>\r
        </optgroup>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,ts=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      The checkAll/uncheckAll\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods07.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods07.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">\r
      Use <code>multipleSelect('select').checkAll()</code> and <code>multipleSelect('select').uncheckAll()</code> to check and\r
      uncheck all options.\r
    </div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Methods </label>\r
\r
    <div class="col-sm-10">\r
      <button id="checkAllBtn" class="btn btn-secondary">Check All</button>\r
      <button id="uncheckAllBtn" class="btn btn-secondary">Uncheck All</button>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Group Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <optgroup label="Group 1">\r
          <option value="1">Option 1</option>\r
          <option value="2">Option 2</option>\r
          <option value="3">Option 3</option>\r
        </optgroup>\r
        <optgroup label="Group 2">\r
          <option value="4">Option 4</option>\r
          <option value="5">Option 5</option>\r
          <option value="6">Option 6</option>\r
        </optgroup>\r
        <optgroup label="Group 3">\r
          <option value="7">Option 7</option>\r
          <option value="8">Option 8</option>\r
          <option value="9">Option 9</option>\r
        </optgroup>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,es=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      The checkInvert\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods08.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods08.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Methods: <code>multipleSelect('select').checkInvert()</code> to invert check all items.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Methods </label>\r
\r
    <div class="col-sm-10">\r
      <button id="checkInvert" class="btn btn-secondary">Check Invert</button>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Group Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <optgroup label="Group 1">\r
          <option value="1">Option 1</option>\r
          <option value="2">Option 2</option>\r
          <option value="3">Option 3</option>\r
        </optgroup>\r
        <optgroup label="Group 2">\r
          <option value="4">Option 4</option>\r
          <option value="5">Option 5</option>\r
          <option value="6">Option 6</option>\r
        </optgroup>\r
        <optgroup label="Group 3">\r
          <option value="7">Option 7</option>\r
          <option value="8">Option 8</option>\r
          <option value="9">Option 9</option>\r
        </optgroup>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,ns=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      The focus/blur\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods09.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods09.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">\r
      Use <code>multipleSelect('select').focus()</code> and <code>multipleSelect('select').blur()</code> to focus and blur the\r
      select.\r
    </div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Methods </label>\r
\r
    <div class="col-sm-10">\r
      <button id="focusBtn" class="btn btn-secondary">Focus</button>\r
      <button id="blurBtn" class="btn btn-secondary">Blur</button>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,os=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      The refresh\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods10.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods10.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">\r
      Use <code>multiple('select').refresh()</code> to refresh/reload the Multiple Select. If you're dynamically adding/removing\r
      option tags on the original select via AJAX or DOM manipulation methods, call refresh to reflect the changes.\r
    </div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Option text </label>\r
    <div class="col-sm-10">\r
      <input id="refreshInput" class="form-control" type="text" required="required" placeholder="Enter text" />\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Option attribute </label>\r
    <div class="col-sm-10">\r
      <label class="checkbox"> <input id="refreshSelected" type="checkbox" /> Selected </label>\r
      <label class="checkbox"> <input id="refreshDisabled" type="checkbox" /> Disabled </label>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"></label>\r
    <div class="col-sm-10">\r
      <button id="refreshAdd" class="btn btn-secondary">Add + Refresh</button>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Result Select </label>\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="text1">text1</option>\r
        <option value="text2">text2</option>\r
        <option value="text3">text3</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,is=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      The destroy\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods11.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/methods/methods11.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Use <code>multiple('select').destroy()</code> to destroy the select.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Methods </label>\r
\r
    <div class="col-sm-10">\r
      <button id="destroyBtn" class="btn btn-danger">Destroy</button>\r
      <button id="buildBtn" class="btn btn-primary">Build</button>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="my-5 offset-sm-1 col-sm-10">\r
    <hr />\r
  </div>\r
\r
  <div class="row mt-5">\r
    <label class="col-sm-2">Code Sample</label>\r
    <div class="col-sm-10 col-lg-8">\r
      <iframe\r
        style="height: 100%; width: 60%; position: absolute"\r
        src="data:text/html;charset=utf-8,\r
        <head><base target='_blank' /></head>\r
        <body><script src='https://gist.github.com/ghiscoding/4ab63b63f7374017e79151328f70ba73.js'><\/script>\r
        </body>"\r
      >\r
      </iframe>\r
    </div>\r
  </div>\r
</div>\r
`,ss=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      The Placeholder\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options01.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options01.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">\r
      Use <code>placeholder</code> attribute or <code>placeholder: ''</code> option to set placeholder.\r
    </div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Via attribute </label>\r
\r
    <div class="col-sm-10">\r
      <select id="select1" class="full-width" multiple="multiple" placeholder="Here is the placeholder via attribute">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Via options </label>\r
\r
    <div class="col-sm-10">\r
      <select id="select2" class="full-width" multiple="multiple">\r
        <optgroup label="Group 1">\r
          <option value="1">Option 1</option>\r
          <option value="2">Option 2</option>\r
          <option value="3">Option 3</option>\r
        </optgroup>\r
        <optgroup label="Group 2">\r
          <option value="4">Option 4</option>\r
          <option value="5">Option 5</option>\r
          <option value="6">Option 6</option>\r
        </optgroup>\r
        <optgroup label="Group 3">\r
          <option value="7">Option 7</option>\r
          <option value="8">Option 8</option>\r
          <option value="9">Option 9</option>\r
        </optgroup>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,ls=`<div class="row mb-2">
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
      <select class="full-width">
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
    <label class="col-sm-3">Single Select with Empty Option</label>

    <div class="col-sm-9">
      <select class="multiple-select full-width">
        <option value=""></option>
        <option value="2">Second</option>
        <option value="3">Third</option>
        <option value="4">Fourth</option>
      </select>
    </div>
  </div>
</div>
`,rs=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      Hide Select All\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options03.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options03.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Use <code>selectAll: false</code> to hide select all.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Hide Select All </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">First</option>\r
        <option value="2">Second</option>\r
        <option value="3">Third</option>\r
        <option value="4">Fourth</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,as=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      Hide Optgroup Checkboxes\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options04.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options04.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Use <code>hideOptgroupCheckboxes: true</code> option to hide the optgroup checkboxes.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Group Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <optgroup label="Group 1">\r
          <option value="1">1</option>\r
          <option value="2">2</option>\r
          <option value="3">3</option>\r
          <option value="4">4</option>\r
          <option value="5">5</option>\r
        </optgroup>\r
        <optgroup label="Group 2">\r
          <option value="6">6</option>\r
          <option value="7">7</option>\r
          <option value="8">8</option>\r
          <option value="9">9</option>\r
          <option value="10">10</option>\r
        </optgroup>\r
        <optgroup label="Group 3">\r
          <option value="11">11</option>\r
          <option value="12">12</option>\r
          <option value="13">13</option>\r
          <option value="14">14</option>\r
          <option value="15">15</option>\r
        </optgroup>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,ps=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      Custom Dropdown Width\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options05.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options05.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Use <code>dropWidth: 580</code> option to custom the dropdown width.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple">\r
        <option value="1">1</option>\r
        <option value="2">2</option>\r
        <option value="3">3</option>\r
        <option value="4">4</option>\r
        <option value="5">5</option>\r
        <option value="6">6</option>\r
        <option value="7">7</option>\r
        <option value="8">8</option>\r
        <option value="9">9</option>\r
        <option value="10">10</option>\r
        <option value="11">11</option>\r
        <option value="12">12</option>\r
        <option value="13">13</option>\r
        <option value="14">14</option>\r
        <option value="15">15</option>\r
        <option value="16">16</option>\r
        <option value="17">17</option>\r
        <option value="18">18</option>\r
        <option value="19">19</option>\r
        <option value="20">20</option>\r
        <option value="21">21</option>\r
        <option value="22">22</option>\r
        <option value="23">23</option>\r
        <option value="24">24</option>\r
        <option value="25">25</option>\r
        <option value="26">26</option>\r
        <option value="27">27</option>\r
        <option value="28">28</option>\r
        <option value="29">29</option>\r
        <option value="30">30</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,cs=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      Max Height\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options06.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options06.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Use <code>maxHeight: 140</code> option to custom the dropdown max height.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,us=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      Max Height Unit\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options07.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options07.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Use <code>maxHeightUnit: 'row'</code> option to set the max height unit.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Max Rows </label>\r
\r
    <div class="col-sm-10">\r
      <input id="number" type="number" value="5" min="1" max="10" />\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Single Select </label>\r
\r
    <div class="col-sm-10">\r
      <select class="full-width">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Multiple Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,ds=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      The Position\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options08.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options08.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Use <code>position: 'top'</code> to set the select dropdown in top position.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row" style="margin-top: 200px">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,hs=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      Display Values\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options09.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options09.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Use <code>displayValues: true</code> option to display selected values instead text.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,ms=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      Display Title\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options10.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options10.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Use <code>displayTitle: true</code> option to display title (for tooltip) of selected text.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,vs=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      Display Delimiter\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options11.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options11.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Use <code>displayDelimiter: ' | '</code> option to custom the display delimiter.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,bs=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      Minimum Count Selected\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options12.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options12.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">\r
      Use <code>minimumCountSelected: 8</code> option and the <code>%s of %s selected</code> will be shown only if more than 8\r
      items where selected.\r
    </div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,fs=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      The Ellipsis\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options13.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options13.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">\r
      Use <code>ellipsis: true</code> option to display ... after selected options instead of <code>%s of %s selected</code>.\r
    </div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,gs=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      Is Open\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options14.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options14.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Use <code>isOpen: true</code> to open the dropdown by default.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,Es=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      Keep Open\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options15.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options15.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Use <code>keepOpen: true</code> to keep the select dropdown always open.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,_s=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      Open On Hover\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options16.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options16.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Use <code>openOnHover: true</code> to open the select dropdown by hover instead of click.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,ys=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      The Container\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options17.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options17.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">\r
      Use <code>container</code> option to solve the cut off problem for example parent node is <code>overflow: hidden</code>.\r
    </div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> No container </label>\r
\r
    <div class="col-sm-10">\r
      <div class="parent" style="overflow: hidden">\r
        <select multiple="multiple" class="select1 full-width">\r
          <option value="1">January</option>\r
          <option value="2">February</option>\r
          <option value="3">March</option>\r
          <option value="4">April</option>\r
          <option value="5">May</option>\r
          <option value="6">June</option>\r
          <option value="7">July</option>\r
          <option value="8">August</option>\r
          <option value="9">September</option>\r
          <option value="10">October</option>\r
          <option value="11">November</option>\r
          <option value="12">December</option>\r
        </select>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> With data-container </label>\r
\r
    <div class="col-sm-10 my-container">\r
      <div class="parent" style="overflow: hidden">\r
        <select multiple="multiple" data-container=".my-container" class="select2 full-width">\r
          <option value="1">January</option>\r
          <option value="2">February</option>\r
          <option value="3">March</option>\r
          <option value="4">April</option>\r
          <option value="5">May</option>\r
          <option value="6">June</option>\r
          <option value="7">July</option>\r
          <option value="8">August</option>\r
          <option value="9">September</option>\r
          <option value="10">October</option>\r
          <option value="11">November</option>\r
          <option value="12">December</option>\r
        </select>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> With container option </label>\r
\r
    <div class="col-sm-10 my-container">\r
      <div class="parent" style="overflow: hidden">\r
        <select multiple="multiple" class="select3 full-width">\r
          <option value="1">January</option>\r
          <option value="2">February</option>\r
          <option value="3">March</option>\r
          <option value="4">April</option>\r
          <option value="5">May</option>\r
          <option value="6">June</option>\r
          <option value="7">July</option>\r
          <option value="8">August</option>\r
          <option value="9">September</option>\r
          <option value="10">October</option>\r
          <option value="11">November</option>\r
          <option value="12">December</option>\r
        </select>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Body Container </label>\r
\r
    <div class="col-sm-10">\r
      <div class="parent" style="overflow: hidden">\r
        <select multiple="multiple" class="select4 full-width">\r
          <option value="1">January</option>\r
          <option value="2">February</option>\r
          <option value="3">March</option>\r
          <option value="4">April</option>\r
          <option value="5">May</option>\r
          <option value="6">June</option>\r
          <option value="7">July</option>\r
          <option value="8">August</option>\r
          <option value="9">September</option>\r
          <option value="10">October</option>\r
          <option value="11">November</option>\r
          <option value="12">December</option>\r
        </select>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`,ws=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      The Filter\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options18.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options18.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Use <code>filter: true</code> to enable filter feature.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Single Select </label>\r
\r
    <div class="col-sm-10">\r
      <select class="full-width">\r
        <option value="1">abc</option>\r
        <option value="2">bcd</option>\r
        <option value="3">cde</option>\r
        <option value="4">def</option>\r
        <option value="5">efg</option>\r
        <option value="6">fgh</option>\r
        <option value="7">ghi</option>\r
        <option value="8">hij</option>\r
        <option value="9">ijk</option>\r
        <option value="10">jkl</option>\r
        <option value="11">klm</option>\r
        <option value="12">lmn</option>\r
        <option value="13">mno</option>\r
        <option value="14">nop</option>\r
        <option value="15">opq</option>\r
        <option value="16">pqr</option>\r
        <option value="17">qrs</option>\r
        <option value="18">rst</option>\r
        <option value="19">stu</option>\r
        <option value="20">tuv</option>\r
        <option value="21">uvw</option>\r
        <option value="22">vwx</option>\r
        <option value="23">wxy</option>\r
        <option value="24">xyz</option>\r
        <option value="25">123</option>\r
        <option value="26">234</option>\r
        <option value="27">345</option>\r
        <option value="28">456</option>\r
        <option value="29">567</option>\r
        <option value="30">678</option>\r
        <option value="31">789</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Single Group </label>\r
\r
    <div class="col-sm-10">\r
      <select class="full-width">\r
        <optgroup label="Group 10">\r
          <option value="1">000</option>\r
          <option value="2">111</option>\r
          <option value="3">222</option>\r
        </optgroup>\r
        <optgroup label="Group 11">\r
          <option value="4">333</option>\r
          <option value="5">444</option>\r
          <option value="6">555</option>\r
        </optgroup>\r
        <optgroup label="Group 12">\r
          <option value="7">666</option>\r
          <option value="8">777</option>\r
          <option value="9">888</option>\r
          <option value="10">999</option>\r
        </optgroup>\r
        <optgroup label="Group 20">\r
          <option value="11">210</option>\r
          <option value="12">321</option>\r
          <option value="13">432</option>\r
        </optgroup>\r
        <optgroup label="Group 21">\r
          <option value="14">543</option>\r
          <option value="15">654</option>\r
          <option value="16">765</option>\r
        </optgroup>\r
        <optgroup label="Group 22">\r
          <option value="17">876</option>\r
          <option value="18">987</option>\r
          <option value="19">098</option>\r
        </optgroup>\r
        <optgroup label="Group 30">\r
          <option value="20">012</option>\r
          <option value="21">123</option>\r
          <option value="22">234</option>\r
        </optgroup>\r
        <optgroup label="Group 31">\r
          <option value="23">345</option>\r
          <option value="24">456</option>\r
          <option value="25">567</option>\r
        </optgroup>\r
        <optgroup label="Group 32">\r
          <option value="26">678</option>\r
          <option value="27">789</option>\r
          <option value="28">890</option>\r
        </optgroup>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">abc</option>\r
        <option value="2">bcd</option>\r
        <option value="3">cde</option>\r
        <option value="4">def</option>\r
        <option value="5">efg</option>\r
        <option value="6">fgh</option>\r
        <option value="7">ghi</option>\r
        <option value="8">hij</option>\r
        <option value="9">ijk</option>\r
        <option value="10">jkl</option>\r
        <option value="11">klm</option>\r
        <option value="12">lmn</option>\r
        <option value="13">mno</option>\r
        <option value="14">nop</option>\r
        <option value="15">opq</option>\r
        <option value="16">pqr</option>\r
        <option value="17">qrs</option>\r
        <option value="18">rst</option>\r
        <option value="19">stu</option>\r
        <option value="20">tuv</option>\r
        <option value="21">uvw</option>\r
        <option value="22">vwx</option>\r
        <option value="23">wxy</option>\r
        <option value="24">xyz</option>\r
        <option value="25">123</option>\r
        <option value="26">234</option>\r
        <option value="27">345</option>\r
        <option value="28">456</option>\r
        <option value="29">567</option>\r
        <option value="30">678</option>\r
        <option value="31">789</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Group Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <optgroup label="Group 10">\r
          <option value="1">000</option>\r
          <option value="2">111</option>\r
          <option value="3">222</option>\r
        </optgroup>\r
        <optgroup label="Group 11">\r
          <option value="4">333</option>\r
          <option value="5">444</option>\r
          <option value="6">555</option>\r
        </optgroup>\r
        <optgroup label="Group 12">\r
          <option value="7">666</option>\r
          <option value="8">777</option>\r
          <option value="9">888</option>\r
          <option value="10">999</option>\r
        </optgroup>\r
        <optgroup label="Group 20">\r
          <option value="11">210</option>\r
          <option value="12">321</option>\r
          <option value="13">432</option>\r
        </optgroup>\r
        <optgroup label="Group 21">\r
          <option value="14">543</option>\r
          <option value="15">654</option>\r
          <option value="16">765</option>\r
        </optgroup>\r
        <optgroup label="Group 22">\r
          <option value="17">876</option>\r
          <option value="18">987</option>\r
          <option value="19">098</option>\r
        </optgroup>\r
        <optgroup label="Group 30">\r
          <option value="20">012</option>\r
          <option value="21">123</option>\r
          <option value="22">234</option>\r
        </optgroup>\r
        <optgroup label="Group 31">\r
          <option value="23">345</option>\r
          <option value="24">456</option>\r
          <option value="25">567</option>\r
        </optgroup>\r
        <optgroup label="Group 32">\r
          <option value="26">678</option>\r
          <option value="27">789</option>\r
          <option value="28">890</option>\r
        </optgroup>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,As=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      Filter Only Optgroup\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options19.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options19.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Use <code>filterGroup: true</code> to filter optgroups only and not options.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Group Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <optgroup label="Group A">\r
          <option value="1">000</option>\r
          <option value="2">111</option>\r
          <option value="3">222</option>\r
          <option value="4">333</option>\r
          <option value="5">444</option>\r
        </optgroup>\r
        <optgroup label="Group B">\r
          <option value="6">555</option>\r
          <option value="7">666</option>\r
          <option value="8">777</option>\r
          <option value="9">888</option>\r
          <option value="10">999</option>\r
        </optgroup>\r
        <optgroup label="Group C">\r
          <option value="20">012</option>\r
          <option value="21">123</option>\r
          <option value="22">234</option>\r
          <option value="23">345</option>\r
        </optgroup>\r
        <optgroup label="Group D">\r
          <option value="20">456</option>\r
          <option value="21">567</option>\r
          <option value="22">678</option>\r
          <option value="23">789</option>\r
        </optgroup>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,Ss=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      Filter Placeholder\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options20.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options20.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Use <code>filterPlaceholder: 'The filter placeholder'</code> to set the filter placeholder.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">abc</option>\r
        <option value="2">bcd</option>\r
        <option value="3">cde</option>\r
        <option value="4">def</option>\r
        <option value="5">efg</option>\r
        <option value="6">fgh</option>\r
        <option value="7">ghi</option>\r
        <option value="8">hij</option>\r
        <option value="9">ijk</option>\r
        <option value="10">jkl</option>\r
        <option value="11">klm</option>\r
        <option value="12">lmn</option>\r
        <option value="13">mno</option>\r
        <option value="14">nop</option>\r
        <option value="15">opq</option>\r
        <option value="16">pqr</option>\r
        <option value="17">qrs</option>\r
        <option value="18">rst</option>\r
        <option value="19">stu</option>\r
        <option value="20">tuv</option>\r
        <option value="21">uvw</option>\r
        <option value="22">vwx</option>\r
        <option value="23">wxy</option>\r
        <option value="24">xyz</option>\r
        <option value="25">123</option>\r
        <option value="26">234</option>\r
        <option value="27">345</option>\r
        <option value="28">456</option>\r
        <option value="29">567</option>\r
        <option value="30">678</option>\r
        <option value="31">789</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,Os=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      Filter Accept On Enter\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options21.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options21.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">\r
      Use <code>filterAcceptOnEnter: true</code> option to speed up keyboard use. Enter filter text and then hit\r
      <code>ENTER</code> or <code>SPACE</code> will auto click <code>select all</code> and close the dropdown.\r
    </div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Single Select </label>\r
\r
    <div class="col-sm-10">\r
      <select class="full-width">\r
        <option value="1">abc</option>\r
        <option value="2">bcd</option>\r
        <option value="3">cde</option>\r
        <option value="4">def</option>\r
        <option value="5">efg</option>\r
        <option value="6">fgh</option>\r
        <option value="7">ghi</option>\r
        <option value="8">hij</option>\r
        <option value="9">ijk</option>\r
        <option value="10">jkl</option>\r
        <option value="11">klm</option>\r
        <option value="12">lmn</option>\r
        <option value="13">mno</option>\r
        <option value="14">nop</option>\r
        <option value="15">opq</option>\r
        <option value="16">pqr</option>\r
        <option value="17">qrs</option>\r
        <option value="18">rst</option>\r
        <option value="19">stu</option>\r
        <option value="20">tuv</option>\r
        <option value="21">uvw</option>\r
        <option value="22">vwx</option>\r
        <option value="23">wxy</option>\r
        <option value="24">xyz</option>\r
        <option value="25">123</option>\r
        <option value="26">234</option>\r
        <option value="27">345</option>\r
        <option value="28">456</option>\r
        <option value="29">567</option>\r
        <option value="30">678</option>\r
        <option value="31">789</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Multiple Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">abc</option>\r
        <option value="2">bcd</option>\r
        <option value="3">cde</option>\r
        <option value="4">def</option>\r
        <option value="5">efg</option>\r
        <option value="6">fgh</option>\r
        <option value="7">ghi</option>\r
        <option value="8">hij</option>\r
        <option value="9">ijk</option>\r
        <option value="10">jkl</option>\r
        <option value="11">klm</option>\r
        <option value="12">lmn</option>\r
        <option value="13">mno</option>\r
        <option value="14">nop</option>\r
        <option value="15">opq</option>\r
        <option value="16">pqr</option>\r
        <option value="17">qrs</option>\r
        <option value="18">rst</option>\r
        <option value="19">stu</option>\r
        <option value="20">tuv</option>\r
        <option value="21">uvw</option>\r
        <option value="22">vwx</option>\r
        <option value="23">wxy</option>\r
        <option value="24">xyz</option>\r
        <option value="25">123</option>\r
        <option value="26">234</option>\r
        <option value="27">345</option>\r
        <option value="28">456</option>\r
        <option value="29">567</option>\r
        <option value="30">678</option>\r
        <option value="31">789</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,Cs=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      Filter By Data Length\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options22.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options22.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">\r
      Use <code>filterByDataLength: 10</code> option to auto enable filter when the data length is more than 10.\r
    </div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select class="full-width">\r
        <option value="1">abc</option>\r
        <option value="2">bcd</option>\r
        <option value="3">cde</option>\r
        <option value="4">def</option>\r
        <option value="5">efg</option>\r
        <option value="6">fgh</option>\r
        <option value="7">ghi</option>\r
        <option value="8">hij</option>\r
        <option value="9">ijk</option>\r
        <option value="10">jkl</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Multiple Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">abc</option>\r
        <option value="2">bcd</option>\r
        <option value="3">cde</option>\r
        <option value="4">def</option>\r
        <option value="5">efg</option>\r
        <option value="6">fgh</option>\r
        <option value="7">ghi</option>\r
        <option value="8">hij</option>\r
        <option value="9">ijk</option>\r
        <option value="10">jkl</option>\r
        <option value="11">klm</option>\r
        <option value="12">lmn</option>\r
        <option value="13">mno</option>\r
        <option value="14">nop</option>\r
        <option value="15">opq</option>\r
        <option value="16">pqr</option>\r
        <option value="17">qrs</option>\r
        <option value="18">rst</option>\r
        <option value="19">stu</option>\r
        <option value="20">tuv</option>\r
        <option value="21">uvw</option>\r
        <option value="22">vwx</option>\r
        <option value="23">wxy</option>\r
        <option value="24">xyz</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Group Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <optgroup label="Group 1">\r
          <option value="1">Option 1</option>\r
          <option value="2">Option 2</option>\r
          <option value="3">Option 3</option>\r
        </optgroup>\r
        <optgroup label="Group 2">\r
          <option value="4">Option 4</option>\r
          <option value="5">Option 5</option>\r
          <option value="6">Option 6</option>\r
        </optgroup>\r
        <optgroup label="Group 3">\r
          <option value="7">Option 7</option>\r
          <option value="8">Option 8</option>\r
          <option value="9">Option 9</option>\r
          <option value="10">Option 10</option>\r
        </optgroup>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Group Select2 </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <optgroup label="Group 1">\r
          <option value="1">Option 1</option>\r
          <option value="2">Option 2</option>\r
          <option value="3">Option 3</option>\r
        </optgroup>\r
        <optgroup label="Group 2">\r
          <option value="4">Option 4</option>\r
          <option value="5">Option 5</option>\r
          <option value="6">Option 6</option>\r
        </optgroup>\r
        <optgroup label="Group 3">\r
          <option value="7">Option 7</option>\r
          <option value="8">Option 8</option>\r
          <option value="9">Option 9</option>\r
          <option value="10">Option 10</option>\r
          <option value="11">Option 11</option>\r
        </optgroup>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,Ts=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      Custom Filter\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options23.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options23.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">\r
      Use <code>customFilter</code> to custom filter, in this case we filter by <code>startWith</code>.\r
    </div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-3 checkbox"> <input type="checkbox" /> Case Sensitive </label>\r
\r
    <div class="col-sm-9">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">abc</option>\r
        <option value="2">bcd</option>\r
        <option value="3">cde</option>\r
        <option value="4">def</option>\r
        <option value="5">efg</option>\r
        <option value="6">fgh</option>\r
        <option value="7">ghi</option>\r
        <option value="8">hij</option>\r
        <option value="9">ijk</option>\r
        <option value="10">jkl</option>\r
        <option value="11">klm</option>\r
        <option value="12">lmn</option>\r
        <option value="13">mno</option>\r
        <option value="14">nop</option>\r
        <option value="15">opq</option>\r
        <option value="16">pqr</option>\r
        <option value="17">qrs</option>\r
        <option value="18">rst</option>\r
        <option value="19">stu</option>\r
        <option value="20">tuv</option>\r
        <option value="21">uvw</option>\r
        <option value="22">vwx</option>\r
        <option value="23">wxy</option>\r
        <option value="24">xyz</option>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,ks=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      Show Clear\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options24.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options24.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Use <code>showClear</code> to show the clear icon to uncheck all selected items.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Single Select </label>\r
\r
    <div class="col-sm-10">\r
      <select class="full-width">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Group Single </label>\r
\r
    <div class="col-sm-10">\r
      <select class="full-width">\r
        <optgroup label="Group 1">\r
          <option value="1">Option 1</option>\r
          <option value="2">Option 2</option>\r
          <option value="3">Option 3</option>\r
        </optgroup>\r
        <optgroup label="Group 2">\r
          <option value="4">Option 4</option>\r
          <option value="5">Option 5</option>\r
          <option value="6">Option 6</option>\r
        </optgroup>\r
        <optgroup label="Group 3">\r
          <option value="7">Option 7</option>\r
          <option value="8">Option 8</option>\r
          <option value="9">Option 9</option>\r
        </optgroup>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Group Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <optgroup label="Group 1">\r
          <option value="1">Option 1</option>\r
          <option value="2">Option 2</option>\r
          <option value="3">Option 3</option>\r
        </optgroup>\r
        <optgroup label="Group 2">\r
          <option value="4">Option 4</option>\r
          <option value="5">Option 5</option>\r
          <option value="6">Option 6</option>\r
        </optgroup>\r
        <optgroup label="Group 3">\r
          <option value="7">Option 7</option>\r
          <option value="8">Option 8</option>\r
          <option value="9">Option 9</option>\r
        </optgroup>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,xs=`<div class="row mb-2">
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
`,Ds=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      The Styler\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options25.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options25.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Use <code>styler</code> to custom the item style.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select id="basic" multiple="multiple" class="full-width">\r
        <option value="1">January</option>\r
        <option value="2">February</option>\r
        <option value="3">March</option>\r
        <option value="4">April</option>\r
        <option value="5">May</option>\r
        <option value="6">June</option>\r
        <option value="7">July</option>\r
        <option value="8">August</option>\r
        <option value="9">September</option>\r
        <option value="10">October</option>\r
        <option value="11">November</option>\r
        <option value="12">December</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Group Select </label>\r
\r
    <div class="col-sm-10">\r
      <select id="group" multiple="multiple" class="full-width">\r
        <optgroup label="Group 1">\r
          <option value="1">Option 1</option>\r
          <option value="2">Option 2</option>\r
          <option value="3">Option 3</option>\r
        </optgroup>\r
        <optgroup label="Group 2">\r
          <option value="4">Option 4</option>\r
          <option value="5">Option 5</option>\r
          <option value="6">Option 6</option>\r
        </optgroup>\r
        <optgroup label="Group 3">\r
          <option value="7">Option 7</option>\r
          <option value="8">Option 8</option>\r
          <option value="9">Option 9</option>\r
        </optgroup>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
`,Ns=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>textTemplate</code> to customize the text template.</div>
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
`,Ms=`<div class="row mb-2">\r
  <div class="col-md-12 title-desc">\r
    <h2 class="bd-title">\r
      Label Template\r
      <span class="float-end links">\r
        Code <span class="fa fa-link"></span>\r
        <span class="small">\r
          <a\r
            target="_blank"\r
            href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options27.html"\r
            >html</a\r
          >\r
          |\r
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/demo/src/options/options27.ts"\r
            >ts</a\r
          >\r
        </span>\r
      </span>\r
    </h2>\r
    <div class="demo-subtitle">Use <code>labelTemplate</code> to custom the optgroup label template.</div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="mb-3 row">\r
    <label class="col-sm-2"> Basic Select </label>\r
\r
    <div class="col-sm-10">\r
      <select multiple="multiple" class="full-width">\r
        <optgroup label="Group 1">\r
          <option value="1">Option 1</option>\r
          <option value="2">Option 2</option>\r
          <option value="3">Option 3</option>\r
        </optgroup>\r
        <optgroup label="Group 2">\r
          <option value="4">Option 4</option>\r
          <option value="5">Option 5</option>\r
          <option value="6">Option 6</option>\r
        </optgroup>\r
        <optgroup label="Group 3">\r
          <option value="7">Option 7</option>\r
          <option value="8">Option 8</option>\r
          <option value="9">Option 9</option>\r
        </optgroup>\r
      </select>\r
    </div>\r
  </div>\r
</div>\r
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
`,$s=`<div class="row mb-2">
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
`,Fs=`<div class="row mb-2">
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
`,Bs=`<div class="row mb-2">
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
`;var F="top",R="bottom",P="right",B="left",we="auto",Pt=[F,R,P,B],_t="start",Mt="end",_o="clippingParents",ln="viewport",kt="popper",yo="reference",Ye=Pt.reduce(function(n,t){return n.concat([t+"-"+_t,t+"-"+Mt])},[]),rn=[].concat(Pt,[we]).reduce(function(n,t){return n.concat([t,t+"-"+_t,t+"-"+Mt])},[]),wo="beforeRead",Ao="read",So="afterRead",Oo="beforeMain",Co="main",To="afterMain",ko="beforeWrite",xo="write",Do="afterWrite",No=[wo,Ao,So,Oo,Co,To,ko,xo,Do];function X(n){return n?(n.nodeName||"").toLowerCase():null}function V(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var t=n.ownerDocument;return t&&t.defaultView||window}return n}function yt(n){var t=V(n).Element;return n instanceof t||n instanceof Element}function H(n){var t=V(n).HTMLElement;return n instanceof t||n instanceof HTMLElement}function an(n){if(typeof ShadowRoot>"u")return!1;var t=V(n).ShadowRoot;return n instanceof t||n instanceof ShadowRoot}function Is(n){var t=n.state;Object.keys(t.elements).forEach(function(e){var o=t.styles[e]||{},i=t.attributes[e]||{},s=t.elements[e];!H(s)||!X(s)||(Object.assign(s.style,o),Object.keys(i).forEach(function(l){var r=i[l];r===!1?s.removeAttribute(l):s.setAttribute(l,r===!0?"":r)}))})}function Rs(n){var t=n.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(o){var i=t.elements[o],s=t.attributes[o]||{},l=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:e[o]),r=l.reduce(function(p,u){return p[u]="",p},{});!H(i)||!X(i)||(Object.assign(i.style,r),Object.keys(s).forEach(function(p){i.removeAttribute(p)}))})}}const pn={name:"applyStyles",enabled:!0,phase:"write",fn:Is,effect:Rs,requires:["computeStyles"]};function z(n){return n.split("-")[0]}var Et=Math.max,ge=Math.min,Lt=Math.round;function Xe(){var n=navigator.userAgentData;return n!=null&&n.brands?n.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Mo(){return!/^((?!chrome|android).)*safari/i.test(Xe())}function $t(n,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var o=n.getBoundingClientRect(),i=1,s=1;t&&H(n)&&(i=n.offsetWidth>0&&Lt(o.width)/n.offsetWidth||1,s=n.offsetHeight>0&&Lt(o.height)/n.offsetHeight||1);var l=yt(n)?V(n):window,r=l.visualViewport,p=!Mo()&&e,u=(o.left+(p&&r?r.offsetLeft:0))/i,a=(o.top+(p&&r?r.offsetTop:0))/s,h=o.width/i,v=o.height/s;return{width:h,height:v,top:a,right:u+h,bottom:a+v,left:u,x:u,y:a}}function cn(n){var t=$t(n),e=n.offsetWidth,o=n.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:n.offsetLeft,y:n.offsetTop,width:e,height:o}}function Lo(n,t){var e=t.getRootNode&&t.getRootNode();if(n.contains(t))return!0;if(e&&an(e)){var o=t;do{if(o&&n.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function nt(n){return V(n).getComputedStyle(n)}function Ps(n){return["table","td","th"].indexOf(X(n))>=0}function pt(n){return((yt(n)?n.ownerDocument:n.document)||window.document).documentElement}function Ae(n){return X(n)==="html"?n:n.assignedSlot||n.parentNode||(an(n)?n.host:null)||pt(n)}function Ln(n){return!H(n)||nt(n).position==="fixed"?null:n.offsetParent}function Hs(n){var t=/firefox/i.test(Xe()),e=/Trident/i.test(Xe());if(e&&H(n)){var o=nt(n);if(o.position==="fixed")return null}var i=Ae(n);for(an(i)&&(i=i.host);H(i)&&["html","body"].indexOf(X(i))<0;){var s=nt(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function Yt(n){for(var t=V(n),e=Ln(n);e&&Ps(e)&&nt(e).position==="static";)e=Ln(e);return e&&(X(e)==="html"||X(e)==="body"&&nt(e).position==="static")?t:e||Hs(n)||t}function un(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function qt(n,t,e){return Et(n,ge(t,e))}function js(n,t,e){var o=qt(n,t,e);return o>e?e:o}function $o(){return{top:0,right:0,bottom:0,left:0}}function Fo(n){return Object.assign({},$o(),n)}function Bo(n,t){return t.reduce(function(e,o){return e[o]=n,e},{})}var Vs=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,Fo(typeof t!="number"?t:Bo(t,Pt))};function Gs(n){var t,e=n.state,o=n.name,i=n.options,s=e.elements.arrow,l=e.modifiersData.popperOffsets,r=z(e.placement),p=un(r),u=[B,P].indexOf(r)>=0,a=u?"height":"width";if(!(!s||!l)){var h=Vs(i.padding,e),v=cn(s),b=p==="y"?F:B,S=p==="y"?R:P,E=e.rects.reference[a]+e.rects.reference[p]-l[p]-e.rects.popper[a],y=l[p]-e.rects.reference[p],O=Yt(s),T=O?p==="y"?O.clientHeight||0:O.clientWidth||0:0,k=E/2-y/2,_=h[b],w=T-v[a]-h[S],A=T/2-v[a]/2+k,C=qt(_,A,w),M=p;e.modifiersData[o]=(t={},t[M]=C,t.centerOffset=C-A,t)}}function Ws(n){var t=n.state,e=n.options,o=e.element,i=o===void 0?"[data-popper-arrow]":o;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||Lo(t.elements.popper,i)&&(t.elements.arrow=i))}const Io={name:"arrow",enabled:!0,phase:"main",fn:Gs,effect:Ws,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ft(n){return n.split("-")[1]}var Js={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Us(n){var t=n.x,e=n.y,o=window,i=o.devicePixelRatio||1;return{x:Lt(t*i)/i||0,y:Lt(e*i)/i||0}}function $n(n){var t,e=n.popper,o=n.popperRect,i=n.placement,s=n.variation,l=n.offsets,r=n.position,p=n.gpuAcceleration,u=n.adaptive,a=n.roundOffsets,h=n.isFixed,v=l.x,b=v===void 0?0:v,S=l.y,E=S===void 0?0:S,y=typeof a=="function"?a({x:b,y:E}):{x:b,y:E};b=y.x,E=y.y;var O=l.hasOwnProperty("x"),T=l.hasOwnProperty("y"),k=B,_=F,w=window;if(u){var A=Yt(e),C="clientHeight",M="clientWidth";if(A===V(e)&&(A=pt(e),nt(A).position!=="static"&&r==="absolute"&&(C="scrollHeight",M="scrollWidth")),A=A,i===F||(i===B||i===P)&&s===Mt){_=R;var N=h&&A===w&&w.visualViewport?w.visualViewport.height:A[C];E-=N-o.height,E*=p?1:-1}if(i===B||(i===F||i===R)&&s===Mt){k=P;var D=h&&A===w&&w.visualViewport?w.visualViewport.width:A[M];b-=D-o.width,b*=p?1:-1}}var L=Object.assign({position:r},u&&Js),W=a===!0?Us({x:b,y:E}):{x:b,y:E};if(b=W.x,E=W.y,p){var $;return Object.assign({},L,($={},$[_]=T?"0":"",$[k]=O?"0":"",$.transform=(w.devicePixelRatio||1)<=1?"translate("+b+"px, "+E+"px)":"translate3d("+b+"px, "+E+"px, 0)",$))}return Object.assign({},L,(t={},t[_]=T?E+"px":"",t[k]=O?b+"px":"",t.transform="",t))}function qs(n){var t=n.state,e=n.options,o=e.gpuAcceleration,i=o===void 0?!0:o,s=e.adaptive,l=s===void 0?!0:s,r=e.roundOffsets,p=r===void 0?!0:r,u={placement:z(t.placement),variation:Ft(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,$n(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:p})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,$n(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:p})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const dn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:qs,data:{}};var le={passive:!0};function Ks(n){var t=n.state,e=n.instance,o=n.options,i=o.scroll,s=i===void 0?!0:i,l=o.resize,r=l===void 0?!0:l,p=V(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&u.forEach(function(a){a.addEventListener("scroll",e.update,le)}),r&&p.addEventListener("resize",e.update,le),function(){s&&u.forEach(function(a){a.removeEventListener("scroll",e.update,le)}),r&&p.removeEventListener("resize",e.update,le)}}const hn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Ks,data:{}};var zs={left:"right",right:"left",bottom:"top",top:"bottom"};function ve(n){return n.replace(/left|right|bottom|top/g,function(t){return zs[t]})}var Ys={start:"end",end:"start"};function Fn(n){return n.replace(/start|end/g,function(t){return Ys[t]})}function mn(n){var t=V(n),e=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:e,scrollTop:o}}function vn(n){return $t(pt(n)).left+mn(n).scrollLeft}function Xs(n,t){var e=V(n),o=pt(n),i=e.visualViewport,s=o.clientWidth,l=o.clientHeight,r=0,p=0;if(i){s=i.width,l=i.height;var u=Mo();(u||!u&&t==="fixed")&&(r=i.offsetLeft,p=i.offsetTop)}return{width:s,height:l,x:r+vn(n),y:p}}function Qs(n){var t,e=pt(n),o=mn(n),i=(t=n.ownerDocument)==null?void 0:t.body,s=Et(e.scrollWidth,e.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=Et(e.scrollHeight,e.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),r=-o.scrollLeft+vn(n),p=-o.scrollTop;return nt(i||e).direction==="rtl"&&(r+=Et(e.clientWidth,i?i.clientWidth:0)-s),{width:s,height:l,x:r,y:p}}function bn(n){var t=nt(n),e=t.overflow,o=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+i+o)}function Ro(n){return["html","body","#document"].indexOf(X(n))>=0?n.ownerDocument.body:H(n)&&bn(n)?n:Ro(Ae(n))}function Kt(n,t){var e;t===void 0&&(t=[]);var o=Ro(n),i=o===((e=n.ownerDocument)==null?void 0:e.body),s=V(o),l=i?[s].concat(s.visualViewport||[],bn(o)?o:[]):o,r=t.concat(l);return i?r:r.concat(Kt(Ae(l)))}function Qe(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function Zs(n,t){var e=$t(n,!1,t==="fixed");return e.top=e.top+n.clientTop,e.left=e.left+n.clientLeft,e.bottom=e.top+n.clientHeight,e.right=e.left+n.clientWidth,e.width=n.clientWidth,e.height=n.clientHeight,e.x=e.left,e.y=e.top,e}function Bn(n,t,e){return t===ln?Qe(Xs(n,e)):yt(t)?Zs(t,e):Qe(Qs(pt(n)))}function tl(n){var t=Kt(Ae(n)),e=["absolute","fixed"].indexOf(nt(n).position)>=0,o=e&&H(n)?Yt(n):n;return yt(o)?t.filter(function(i){return yt(i)&&Lo(i,o)&&X(i)!=="body"}):[]}function el(n,t,e,o){var i=t==="clippingParents"?tl(n):[].concat(t),s=[].concat(i,[e]),l=s[0],r=s.reduce(function(p,u){var a=Bn(n,u,o);return p.top=Et(a.top,p.top),p.right=ge(a.right,p.right),p.bottom=ge(a.bottom,p.bottom),p.left=Et(a.left,p.left),p},Bn(n,l,o));return r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}function Po(n){var t=n.reference,e=n.element,o=n.placement,i=o?z(o):null,s=o?Ft(o):null,l=t.x+t.width/2-e.width/2,r=t.y+t.height/2-e.height/2,p;switch(i){case F:p={x:l,y:t.y-e.height};break;case R:p={x:l,y:t.y+t.height};break;case P:p={x:t.x+t.width,y:r};break;case B:p={x:t.x-e.width,y:r};break;default:p={x:t.x,y:t.y}}var u=i?un(i):null;if(u!=null){var a=u==="y"?"height":"width";switch(s){case _t:p[u]=p[u]-(t[a]/2-e[a]/2);break;case Mt:p[u]=p[u]+(t[a]/2-e[a]/2);break}}return p}function Bt(n,t){t===void 0&&(t={});var e=t,o=e.placement,i=o===void 0?n.placement:o,s=e.strategy,l=s===void 0?n.strategy:s,r=e.boundary,p=r===void 0?_o:r,u=e.rootBoundary,a=u===void 0?ln:u,h=e.elementContext,v=h===void 0?kt:h,b=e.altBoundary,S=b===void 0?!1:b,E=e.padding,y=E===void 0?0:E,O=Fo(typeof y!="number"?y:Bo(y,Pt)),T=v===kt?yo:kt,k=n.rects.popper,_=n.elements[S?T:v],w=el(yt(_)?_:_.contextElement||pt(n.elements.popper),p,a,l),A=$t(n.elements.reference),C=Po({reference:A,element:k,strategy:"absolute",placement:i}),M=Qe(Object.assign({},k,C)),N=v===kt?M:A,D={top:w.top-N.top+O.top,bottom:N.bottom-w.bottom+O.bottom,left:w.left-N.left+O.left,right:N.right-w.right+O.right},L=n.modifiersData.offset;if(v===kt&&L){var W=L[i];Object.keys(D).forEach(function($){var dt=[P,R].indexOf($)>=0?1:-1,ht=[F,R].indexOf($)>=0?"y":"x";D[$]+=W[ht]*dt})}return D}function nl(n,t){t===void 0&&(t={});var e=t,o=e.placement,i=e.boundary,s=e.rootBoundary,l=e.padding,r=e.flipVariations,p=e.allowedAutoPlacements,u=p===void 0?rn:p,a=Ft(o),h=a?r?Ye:Ye.filter(function(S){return Ft(S)===a}):Pt,v=h.filter(function(S){return u.indexOf(S)>=0});v.length===0&&(v=h);var b=v.reduce(function(S,E){return S[E]=Bt(n,{placement:E,boundary:i,rootBoundary:s,padding:l})[z(E)],S},{});return Object.keys(b).sort(function(S,E){return b[S]-b[E]})}function ol(n){if(z(n)===we)return[];var t=ve(n);return[Fn(n),t,Fn(t)]}function il(n){var t=n.state,e=n.options,o=n.name;if(!t.modifiersData[o]._skip){for(var i=e.mainAxis,s=i===void 0?!0:i,l=e.altAxis,r=l===void 0?!0:l,p=e.fallbackPlacements,u=e.padding,a=e.boundary,h=e.rootBoundary,v=e.altBoundary,b=e.flipVariations,S=b===void 0?!0:b,E=e.allowedAutoPlacements,y=t.options.placement,O=z(y),T=O===y,k=p||(T||!S?[ve(y)]:ol(y)),_=[y].concat(k).reduce(function(St,it){return St.concat(z(it)===we?nl(t,{placement:it,boundary:a,rootBoundary:h,padding:u,flipVariations:S,allowedAutoPlacements:E}):it)},[]),w=t.rects.reference,A=t.rects.popper,C=new Map,M=!0,N=_[0],D=0;D<_.length;D++){var L=_[D],W=z(L),$=Ft(L)===_t,dt=[F,R].indexOf(W)>=0,ht=dt?"width":"height",I=Bt(t,{placement:L,boundary:a,rootBoundary:h,altBoundary:v,padding:u}),J=dt?$?P:B:$?R:F;w[ht]>A[ht]&&(J=ve(J));var ee=ve(J),mt=[];if(s&&mt.push(I[W]<=0),r&&mt.push(I[J]<=0,I[ee]<=0),mt.every(function(St){return St})){N=L,M=!1;break}C.set(L,mt)}if(M)for(var ne=S?3:1,De=function(it){var Wt=_.find(function(ie){var vt=C.get(ie);if(vt)return vt.slice(0,it).every(function(Ne){return Ne})});if(Wt)return N=Wt,"break"},Gt=ne;Gt>0;Gt--){var oe=De(Gt);if(oe==="break")break}t.placement!==N&&(t.modifiersData[o]._skip=!0,t.placement=N,t.reset=!0)}}const Ho={name:"flip",enabled:!0,phase:"main",fn:il,requiresIfExists:["offset"],data:{_skip:!1}};function In(n,t,e){return e===void 0&&(e={x:0,y:0}),{top:n.top-t.height-e.y,right:n.right-t.width+e.x,bottom:n.bottom-t.height+e.y,left:n.left-t.width-e.x}}function Rn(n){return[F,P,R,B].some(function(t){return n[t]>=0})}function sl(n){var t=n.state,e=n.name,o=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,l=Bt(t,{elementContext:"reference"}),r=Bt(t,{altBoundary:!0}),p=In(l,o),u=In(r,i,s),a=Rn(p),h=Rn(u);t.modifiersData[e]={referenceClippingOffsets:p,popperEscapeOffsets:u,isReferenceHidden:a,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":a,"data-popper-escaped":h})}const jo={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:sl};function ll(n,t,e){var o=z(n),i=[B,F].indexOf(o)>=0?-1:1,s=typeof e=="function"?e(Object.assign({},t,{placement:n})):e,l=s[0],r=s[1];return l=l||0,r=(r||0)*i,[B,P].indexOf(o)>=0?{x:r,y:l}:{x:l,y:r}}function rl(n){var t=n.state,e=n.options,o=n.name,i=e.offset,s=i===void 0?[0,0]:i,l=rn.reduce(function(a,h){return a[h]=ll(h,t.rects,s),a},{}),r=l[t.placement],p=r.x,u=r.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=p,t.modifiersData.popperOffsets.y+=u),t.modifiersData[o]=l}const Vo={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:rl};function al(n){var t=n.state,e=n.name;t.modifiersData[e]=Po({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const fn={name:"popperOffsets",enabled:!0,phase:"read",fn:al,data:{}};function pl(n){return n==="x"?"y":"x"}function cl(n){var t=n.state,e=n.options,o=n.name,i=e.mainAxis,s=i===void 0?!0:i,l=e.altAxis,r=l===void 0?!1:l,p=e.boundary,u=e.rootBoundary,a=e.altBoundary,h=e.padding,v=e.tether,b=v===void 0?!0:v,S=e.tetherOffset,E=S===void 0?0:S,y=Bt(t,{boundary:p,rootBoundary:u,padding:h,altBoundary:a}),O=z(t.placement),T=Ft(t.placement),k=!T,_=un(O),w=pl(_),A=t.modifiersData.popperOffsets,C=t.rects.reference,M=t.rects.popper,N=typeof E=="function"?E(Object.assign({},t.rects,{placement:t.placement})):E,D=typeof N=="number"?{mainAxis:N,altAxis:N}:Object.assign({mainAxis:0,altAxis:0},N),L=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,W={x:0,y:0};if(A){if(s){var $,dt=_==="y"?F:B,ht=_==="y"?R:P,I=_==="y"?"height":"width",J=A[_],ee=J+y[dt],mt=J-y[ht],ne=b?-M[I]/2:0,De=T===_t?C[I]:M[I],Gt=T===_t?-M[I]:-C[I],oe=t.elements.arrow,St=b&&oe?cn(oe):{width:0,height:0},it=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:$o(),Wt=it[dt],ie=it[ht],vt=qt(0,C[I],St[I]),Ne=k?C[I]/2-ne-vt-Wt-D.mainAxis:De-vt-Wt-D.mainAxis,Si=k?-C[I]/2+ne+vt+ie+D.mainAxis:Gt+vt+ie+D.mainAxis,Me=t.elements.arrow&&Yt(t.elements.arrow),Oi=Me?_==="y"?Me.clientTop||0:Me.clientLeft||0:0,Sn=($=L==null?void 0:L[_])!=null?$:0,Ci=J+Ne-Sn-Oi,Ti=J+Si-Sn,On=qt(b?ge(ee,Ci):ee,J,b?Et(mt,Ti):mt);A[_]=On,W[_]=On-J}if(r){var Cn,ki=_==="x"?F:B,xi=_==="x"?R:P,bt=A[w],se=w==="y"?"height":"width",Tn=bt+y[ki],kn=bt-y[xi],Le=[F,B].indexOf(O)!==-1,xn=(Cn=L==null?void 0:L[w])!=null?Cn:0,Dn=Le?Tn:bt-C[se]-M[se]-xn+D.altAxis,Nn=Le?bt+C[se]+M[se]-xn-D.altAxis:kn,Mn=b&&Le?js(Dn,bt,Nn):qt(b?Dn:Tn,bt,b?Nn:kn);A[w]=Mn,W[w]=Mn-bt}t.modifiersData[o]=W}}const Go={name:"preventOverflow",enabled:!0,phase:"main",fn:cl,requiresIfExists:["offset"]};function ul(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function dl(n){return n===V(n)||!H(n)?mn(n):ul(n)}function hl(n){var t=n.getBoundingClientRect(),e=Lt(t.width)/n.offsetWidth||1,o=Lt(t.height)/n.offsetHeight||1;return e!==1||o!==1}function ml(n,t,e){e===void 0&&(e=!1);var o=H(t),i=H(t)&&hl(t),s=pt(t),l=$t(n,i,e),r={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(o||!o&&!e)&&((X(t)!=="body"||bn(s))&&(r=dl(t)),H(t)?(p=$t(t,!0),p.x+=t.clientLeft,p.y+=t.clientTop):s&&(p.x=vn(s))),{x:l.left+r.scrollLeft-p.x,y:l.top+r.scrollTop-p.y,width:l.width,height:l.height}}function vl(n){var t=new Map,e=new Set,o=[];n.forEach(function(s){t.set(s.name,s)});function i(s){e.add(s.name);var l=[].concat(s.requires||[],s.requiresIfExists||[]);l.forEach(function(r){if(!e.has(r)){var p=t.get(r);p&&i(p)}}),o.push(s)}return n.forEach(function(s){e.has(s.name)||i(s)}),o}function bl(n){var t=vl(n);return No.reduce(function(e,o){return e.concat(t.filter(function(i){return i.phase===o}))},[])}function fl(n){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(n())})})),t}}function gl(n){var t=n.reduce(function(e,o){var i=e[o.name];return e[o.name]=i?Object.assign({},i,o,{options:Object.assign({},i.options,o.options),data:Object.assign({},i.data,o.data)}):o,e},{});return Object.keys(t).map(function(e){return t[e]})}var Pn={placement:"bottom",modifiers:[],strategy:"absolute"};function Hn(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Se(n){n===void 0&&(n={});var t=n,e=t.defaultModifiers,o=e===void 0?[]:e,i=t.defaultOptions,s=i===void 0?Pn:i;return function(r,p,u){u===void 0&&(u=s);var a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Pn,s),modifiersData:{},elements:{reference:r,popper:p},attributes:{},styles:{}},h=[],v=!1,b={state:a,setOptions:function(O){var T=typeof O=="function"?O(a.options):O;E(),a.options=Object.assign({},s,a.options,T),a.scrollParents={reference:yt(r)?Kt(r):r.contextElement?Kt(r.contextElement):[],popper:Kt(p)};var k=bl(gl([].concat(o,a.options.modifiers)));return a.orderedModifiers=k.filter(function(_){return _.enabled}),S(),b.update()},forceUpdate:function(){if(!v){var O=a.elements,T=O.reference,k=O.popper;if(Hn(T,k)){a.rects={reference:ml(T,Yt(k),a.options.strategy==="fixed"),popper:cn(k)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach(function(D){return a.modifiersData[D.name]=Object.assign({},D.data)});for(var _=0;_<a.orderedModifiers.length;_++){if(a.reset===!0){a.reset=!1,_=-1;continue}var w=a.orderedModifiers[_],A=w.fn,C=w.options,M=C===void 0?{}:C,N=w.name;typeof A=="function"&&(a=A({state:a,options:M,name:N,instance:b})||a)}}}},update:fl(function(){return new Promise(function(y){b.forceUpdate(),y(a)})}),destroy:function(){E(),v=!0}};if(!Hn(r,p))return b;b.setOptions(u).then(function(y){!v&&u.onFirstUpdate&&u.onFirstUpdate(y)});function S(){a.orderedModifiers.forEach(function(y){var O=y.name,T=y.options,k=T===void 0?{}:T,_=y.effect;if(typeof _=="function"){var w=_({state:a,name:O,instance:b,options:k}),A=function(){};h.push(w||A)}})}function E(){h.forEach(function(y){return y()}),h=[]}return b}}var El=Se(),_l=[hn,fn,dn,pn],yl=Se({defaultModifiers:_l}),wl=[hn,fn,dn,pn,Vo,Ho,Go,Io,jo],gn=Se({defaultModifiers:wl});const Wo=Object.freeze(Object.defineProperty({__proto__:null,afterMain:To,afterRead:So,afterWrite:Do,applyStyles:pn,arrow:Io,auto:we,basePlacements:Pt,beforeMain:Oo,beforeRead:wo,beforeWrite:ko,bottom:R,clippingParents:_o,computeStyles:dn,createPopper:gn,createPopperBase:El,createPopperLite:yl,detectOverflow:Bt,end:Mt,eventListeners:hn,flip:Ho,hide:jo,left:B,main:Co,modifierPhases:No,offset:Vo,placements:rn,popper:kt,popperGenerator:Se,popperOffsets:fn,preventOverflow:Go,read:Ao,reference:yo,right:P,start:_t,top:F,variationPlacements:Ye,viewport:ln,write:xo},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Al=1e6,Sl=1e3,Ze="transitionend",Ol=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),Cl=n=>{do n+=Math.floor(Math.random()*Al);while(document.getElementById(n));return n},Jo=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let e=n.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?e.trim():null}return t},Uo=n=>{const t=Jo(n);return t&&document.querySelector(t)?t:null},Z=n=>{const t=Jo(n);return t?document.querySelector(t):null},Tl=n=>{if(!n)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(n);const o=Number.parseFloat(t),i=Number.parseFloat(e);return!o&&!i?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*Sl)},qo=n=>{n.dispatchEvent(new Event(Ze))},tt=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),lt=n=>tt(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(n):null,Ht=n=>{if(!tt(n)||n.getClientRects().length===0)return!1;const t=getComputedStyle(n).getPropertyValue("visibility")==="visible",e=n.closest("details:not([open])");if(!e)return t;if(e!==n){const o=n.closest("summary");if(o&&o.parentNode!==e||o===null)return!1}return t},rt=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",Ko=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const t=n.getRootNode();return t instanceof ShadowRoot?t:null}return n instanceof ShadowRoot?n:n.parentNode?Ko(n.parentNode):null},Ee=()=>{},Xt=n=>{n.offsetHeight},zo=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,$e=[],kl=n=>{document.readyState==="loading"?($e.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of $e)t()}),$e.push(n)):n()},j=()=>document.documentElement.dir==="rtl",G=n=>{kl(()=>{const t=zo();if(t){const e=n.NAME,o=t.fn[e];t.fn[e]=n.jQueryInterface,t.fn[e].Constructor=n,t.fn[e].noConflict=()=>(t.fn[e]=o,n.jQueryInterface)}})},Q=n=>{typeof n=="function"&&n()},Yo=(n,t,e=!0)=>{if(!e){Q(n);return}const o=5,i=Tl(t)+o;let s=!1;const l=({target:r})=>{r===t&&(s=!0,t.removeEventListener(Ze,l),Q(n))};t.addEventListener(Ze,l),setTimeout(()=>{s||qo(t)},i)},En=(n,t,e,o)=>{const i=n.length;let s=n.indexOf(t);return s===-1?!e&&o?n[i-1]:n[0]:(s+=e?1:-1,o&&(s=(s+i)%i),n[Math.max(0,Math.min(s,i-1))])},xl=/[^.]*(?=\..*)\.|.*/,Dl=/\..*/,Nl=/::\d+$/,Fe={};let jn=1;const Xo={mouseenter:"mouseover",mouseleave:"mouseout"},Ml=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Qo(n,t){return t&&`${t}::${jn++}`||n.uidEvent||jn++}function Zo(n){const t=Qo(n);return n.uidEvent=t,Fe[t]=Fe[t]||{},Fe[t]}function Ll(n,t){return function e(o){return _n(o,{delegateTarget:n}),e.oneOff&&c.off(n,o.type,t),t.apply(n,[o])}}function $l(n,t,e){return function o(i){const s=n.querySelectorAll(t);for(let{target:l}=i;l&&l!==this;l=l.parentNode)for(const r of s)if(r===l)return _n(i,{delegateTarget:l}),o.oneOff&&c.off(n,i.type,t,e),e.apply(l,[i])}}function ti(n,t,e=null){return Object.values(n).find(o=>o.callable===t&&o.delegationSelector===e)}function ei(n,t,e){const o=typeof t=="string",i=o?e:t||e;let s=ni(n);return Ml.has(s)||(s=n),[o,i,s]}function Vn(n,t,e,o,i){if(typeof t!="string"||!n)return;let[s,l,r]=ei(t,e,o);t in Xo&&(l=(S=>function(E){if(!E.relatedTarget||E.relatedTarget!==E.delegateTarget&&!E.delegateTarget.contains(E.relatedTarget))return S.call(this,E)})(l));const p=Zo(n),u=p[r]||(p[r]={}),a=ti(u,l,s?e:null);if(a){a.oneOff=a.oneOff&&i;return}const h=Qo(l,t.replace(xl,"")),v=s?$l(n,e,l):Ll(n,l);v.delegationSelector=s?e:null,v.callable=l,v.oneOff=i,v.uidEvent=h,u[h]=v,n.addEventListener(r,v,s)}function tn(n,t,e,o,i){const s=ti(t[e],o,i);s&&(n.removeEventListener(e,s,!!i),delete t[e][s.uidEvent])}function Fl(n,t,e,o){const i=t[e]||{};for(const s of Object.keys(i))if(s.includes(o)){const l=i[s];tn(n,t,e,l.callable,l.delegationSelector)}}function ni(n){return n=n.replace(Dl,""),Xo[n]||n}const c={on(n,t,e,o){Vn(n,t,e,o,!1)},one(n,t,e,o){Vn(n,t,e,o,!0)},off(n,t,e,o){if(typeof t!="string"||!n)return;const[i,s,l]=ei(t,e,o),r=l!==t,p=Zo(n),u=p[l]||{},a=t.startsWith(".");if(typeof s<"u"){if(!Object.keys(u).length)return;tn(n,p,l,s,i?e:null);return}if(a)for(const h of Object.keys(p))Fl(n,p,h,t.slice(1));for(const h of Object.keys(u)){const v=h.replace(Nl,"");if(!r||t.includes(v)){const b=u[h];tn(n,p,l,b.callable,b.delegationSelector)}}},trigger(n,t,e){if(typeof t!="string"||!n)return null;const o=zo(),i=ni(t),s=t!==i;let l=null,r=!0,p=!0,u=!1;s&&o&&(l=o.Event(t,e),o(n).trigger(l),r=!l.isPropagationStopped(),p=!l.isImmediatePropagationStopped(),u=l.isDefaultPrevented());let a=new Event(t,{bubbles:r,cancelable:!0});return a=_n(a,e),u&&a.preventDefault(),p&&n.dispatchEvent(a),a.defaultPrevented&&l&&l.preventDefault(),a}};function _n(n,t){for(const[e,o]of Object.entries(t||{}))try{n[e]=o}catch{Object.defineProperty(n,e,{configurable:!0,get(){return o}})}return n}const st=new Map,Be={set(n,t,e){st.has(n)||st.set(n,new Map);const o=st.get(n);if(!o.has(t)&&o.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`);return}o.set(t,e)},get(n,t){return st.has(n)&&st.get(n).get(t)||null},remove(n,t){if(!st.has(n))return;const e=st.get(n);e.delete(t),e.size===0&&st.delete(n)}};function Gn(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function Ie(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const et={setDataAttribute(n,t,e){n.setAttribute(`data-bs-${Ie(t)}`,e)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${Ie(t)}`)},getDataAttributes(n){if(!n)return{};const t={},e=Object.keys(n.dataset).filter(o=>o.startsWith("bs")&&!o.startsWith("bsConfig"));for(const o of e){let i=o.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=Gn(n.dataset[o])}return t},getDataAttribute(n,t){return Gn(n.getAttribute(`data-bs-${Ie(t)}`))}};class Qt{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const o=tt(e)?et.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof o=="object"?o:{},...tt(e)?et.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const o of Object.keys(e)){const i=e[o],s=t[o],l=tt(s)?"element":Ol(s);if(!new RegExp(i).test(l))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${o}" provided type "${l}" but expected type "${i}".`)}}}const Bl="5.2.3";class q extends Qt{constructor(t,e){super(),t=lt(t),t&&(this._element=t,this._config=this._getConfig(e),Be.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Be.remove(this._element,this.constructor.DATA_KEY),c.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,o=!0){Yo(t,e,o)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Be.get(lt(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return Bl}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const Oe=(n,t="hide")=>{const e=`click.dismiss${n.EVENT_KEY}`,o=n.NAME;c.on(document,e,`[data-bs-dismiss="${o}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),rt(this))return;const s=Z(this)||this.closest(`.${o}`);n.getOrCreateInstance(s)[t]()})},Il="alert",Rl="bs.alert",oi=`.${Rl}`,Pl=`close${oi}`,Hl=`closed${oi}`,jl="fade",Vl="show";class Ce extends q{static get NAME(){return Il}close(){if(c.trigger(this._element,Pl).defaultPrevented)return;this._element.classList.remove(Vl);const e=this._element.classList.contains(jl);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),c.trigger(this._element,Hl),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=Ce.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Oe(Ce,"close");G(Ce);const Gl="button",Wl="bs.button",Jl=`.${Wl}`,Ul=".data-api",ql="active",Wn='[data-bs-toggle="button"]',Kl=`click${Jl}${Ul}`;class Te extends q{static get NAME(){return Gl}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(ql))}static jQueryInterface(t){return this.each(function(){const e=Te.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}c.on(document,Kl,Wn,n=>{n.preventDefault();const t=n.target.closest(Wn);Te.getOrCreateInstance(t).toggle()});G(Te);const g={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(e=>e.matches(t))},parents(n,t){const e=[];let o=n.parentNode.closest(t);for(;o;)e.push(o),o=o.parentNode.closest(t);return e},prev(n,t){let e=n.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(n,t){let e=n.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(e=>!rt(e)&&Ht(e))}},zl="swipe",jt=".bs.swipe",Yl=`touchstart${jt}`,Xl=`touchmove${jt}`,Ql=`touchend${jt}`,Zl=`pointerdown${jt}`,tr=`pointerup${jt}`,er="touch",nr="pen",or="pointer-event",ir=40,sr={endCallback:null,leftCallback:null,rightCallback:null},lr={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class _e extends Qt{constructor(t,e){super(),this._element=t,!(!t||!_e.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return sr}static get DefaultType(){return lr}static get NAME(){return zl}dispose(){c.off(this._element,jt)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),Q(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=ir)return;const e=t/this._deltaX;this._deltaX=0,e&&Q(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(c.on(this._element,Zl,t=>this._start(t)),c.on(this._element,tr,t=>this._end(t)),this._element.classList.add(or)):(c.on(this._element,Yl,t=>this._start(t)),c.on(this._element,Xl,t=>this._move(t)),c.on(this._element,Ql,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===nr||t.pointerType===er)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const rr="carousel",ar="bs.carousel",ct=`.${ar}`,ii=".data-api",pr="ArrowLeft",cr="ArrowRight",ur=500,Jt="next",Ot="prev",xt="left",be="right",dr=`slide${ct}`,Re=`slid${ct}`,hr=`keydown${ct}`,mr=`mouseenter${ct}`,vr=`mouseleave${ct}`,br=`dragstart${ct}`,fr=`load${ct}${ii}`,gr=`click${ct}${ii}`,si="carousel",re="active",Er="slide",_r="carousel-item-end",yr="carousel-item-start",wr="carousel-item-next",Ar="carousel-item-prev",li=".active",ri=".carousel-item",Sr=li+ri,Or=".carousel-item img",Cr=".carousel-indicators",Tr="[data-bs-slide], [data-bs-slide-to]",kr='[data-bs-ride="carousel"]',xr={[pr]:be,[cr]:xt},Dr={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Nr={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Zt extends q{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=g.findOne(Cr,this._element),this._addEventListeners(),this._config.ride===si&&this.cycle()}static get Default(){return Dr}static get DefaultType(){return Nr}static get NAME(){return rr}next(){this._slide(Jt)}nextWhenVisible(){!document.hidden&&Ht(this._element)&&this.next()}prev(){this._slide(Ot)}pause(){this._isSliding&&qo(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){c.one(this._element,Re,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){c.one(this._element,Re,()=>this.to(t));return}const o=this._getItemIndex(this._getActive());if(o===t)return;const i=t>o?Jt:Ot;this._slide(i,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&c.on(this._element,hr,t=>this._keydown(t)),this._config.pause==="hover"&&(c.on(this._element,mr,()=>this.pause()),c.on(this._element,vr,()=>this._maybeEnableCycle())),this._config.touch&&_e.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const o of g.find(Or,this._element))c.on(o,br,i=>i.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(xt)),rightCallback:()=>this._slide(this._directionToOrder(be)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),ur+this._config.interval))}};this._swipeHelper=new _e(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=xr[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=g.findOne(li,this._indicatorsElement);e.classList.remove(re),e.removeAttribute("aria-current");const o=g.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);o&&(o.classList.add(re),o.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const o=this._getActive(),i=t===Jt,s=e||En(this._getItems(),o,i,this._config.wrap);if(s===o)return;const l=this._getItemIndex(s),r=b=>c.trigger(this._element,b,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(o),to:l});if(r(dr).defaultPrevented||!o||!s)return;const u=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(l),this._activeElement=s;const a=i?yr:_r,h=i?wr:Ar;s.classList.add(h),Xt(s),o.classList.add(a),s.classList.add(a);const v=()=>{s.classList.remove(a,h),s.classList.add(re),o.classList.remove(re,h,a),this._isSliding=!1,r(Re)};this._queueCallback(v,o,this._isAnimated()),u&&this.cycle()}_isAnimated(){return this._element.classList.contains(Er)}_getActive(){return g.findOne(Sr,this._element)}_getItems(){return g.find(ri,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return j()?t===xt?Ot:Jt:t===xt?Jt:Ot}_orderToDirection(t){return j()?t===Ot?xt:be:t===Ot?be:xt}static jQueryInterface(t){return this.each(function(){const e=Zt.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}c.on(document,gr,Tr,function(n){const t=Z(this);if(!t||!t.classList.contains(si))return;n.preventDefault();const e=Zt.getOrCreateInstance(t),o=this.getAttribute("data-bs-slide-to");if(o){e.to(o),e._maybeEnableCycle();return}if(et.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});c.on(window,fr,()=>{const n=g.find(kr);for(const t of n)Zt.getOrCreateInstance(t)});G(Zt);const Mr="collapse",Lr="bs.collapse",te=`.${Lr}`,$r=".data-api",Fr=`show${te}`,Br=`shown${te}`,Ir=`hide${te}`,Rr=`hidden${te}`,Pr=`click${te}${$r}`,Pe="show",Nt="collapse",ae="collapsing",Hr="collapsed",jr=`:scope .${Nt} .${Nt}`,Vr="collapse-horizontal",Gr="width",Wr="height",Jr=".collapse.show, .collapse.collapsing",en='[data-bs-toggle="collapse"]',Ur={parent:null,toggle:!0},qr={parent:"(null|element)",toggle:"boolean"};class zt extends q{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const o=g.find(en);for(const i of o){const s=Uo(i),l=g.find(s).filter(r=>r===this._element);s!==null&&l.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Ur}static get DefaultType(){return qr}static get NAME(){return Mr}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(Jr).filter(r=>r!==this._element).map(r=>zt.getOrCreateInstance(r,{toggle:!1}))),t.length&&t[0]._isTransitioning||c.trigger(this._element,Fr).defaultPrevented)return;for(const r of t)r.hide();const o=this._getDimension();this._element.classList.remove(Nt),this._element.classList.add(ae),this._element.style[o]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(ae),this._element.classList.add(Nt,Pe),this._element.style[o]="",c.trigger(this._element,Br)},l=`scroll${o[0].toUpperCase()+o.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[o]=`${this._element[l]}px`}hide(){if(this._isTransitioning||!this._isShown()||c.trigger(this._element,Ir).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,Xt(this._element),this._element.classList.add(ae),this._element.classList.remove(Nt,Pe);for(const i of this._triggerArray){const s=Z(i);s&&!this._isShown(s)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(ae),this._element.classList.add(Nt),c.trigger(this._element,Rr)};this._element.style[e]="",this._queueCallback(o,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Pe)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=lt(t.parent),t}_getDimension(){return this._element.classList.contains(Vr)?Gr:Wr}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(en);for(const e of t){const o=Z(e);o&&this._addAriaAndCollapsedClass([e],this._isShown(o))}}_getFirstLevelChildren(t){const e=g.find(jr,this._config.parent);return g.find(t,this._config.parent).filter(o=>!e.includes(o))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const o of t)o.classList.toggle(Hr,!e),o.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const o=zt.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof o[t]>"u")throw new TypeError(`No method named "${t}"`);o[t]()}})}}c.on(document,Pr,en,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();const t=Uo(this),e=g.find(t);for(const o of e)zt.getOrCreateInstance(o,{toggle:!1}).toggle()});G(zt);const Jn="dropdown",Kr="bs.dropdown",wt=`.${Kr}`,yn=".data-api",zr="Escape",Un="Tab",Yr="ArrowUp",qn="ArrowDown",Xr=2,Qr=`hide${wt}`,Zr=`hidden${wt}`,ta=`show${wt}`,ea=`shown${wt}`,ai=`click${wt}${yn}`,pi=`keydown${wt}${yn}`,na=`keyup${wt}${yn}`,Dt="show",oa="dropup",ia="dropend",sa="dropstart",la="dropup-center",ra="dropdown-center",ft='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',aa=`${ft}.${Dt}`,fe=".dropdown-menu",pa=".navbar",ca=".navbar-nav",ua=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",da=j()?"top-end":"top-start",ha=j()?"top-start":"top-end",ma=j()?"bottom-end":"bottom-start",va=j()?"bottom-start":"bottom-end",ba=j()?"left-start":"right-start",fa=j()?"right-start":"left-start",ga="top",Ea="bottom",_a={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},ya={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Y extends q{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=g.next(this._element,fe)[0]||g.prev(this._element,fe)[0]||g.findOne(fe,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return _a}static get DefaultType(){return ya}static get NAME(){return Jn}toggle(){return this._isShown()?this.hide():this.show()}show(){if(rt(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!c.trigger(this._element,ta,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(ca))for(const o of[].concat(...document.body.children))c.on(o,"mouseover",Ee);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Dt),this._element.classList.add(Dt),c.trigger(this._element,ea,t)}}hide(){if(rt(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!c.trigger(this._element,Qr,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))c.off(o,"mouseover",Ee);this._popper&&this._popper.destroy(),this._menu.classList.remove(Dt),this._element.classList.remove(Dt),this._element.setAttribute("aria-expanded","false"),et.removeDataAttribute(this._menu,"popper"),c.trigger(this._element,Zr,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!tt(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${Jn.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof Wo>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:tt(this._config.reference)?t=lt(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=gn(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Dt)}_getPlacement(){const t=this._parent;if(t.classList.contains(ia))return ba;if(t.classList.contains(sa))return fa;if(t.classList.contains(la))return ga;if(t.classList.contains(ra))return Ea;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(oa)?e?ha:da:e?va:ma}_detectNavbar(){return this._element.closest(pa)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(et.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...typeof this._config.popperConfig=="function"?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const o=g.find(ua,this._menu).filter(i=>Ht(i));o.length&&En(o,e,t===qn,!o.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=Y.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===Xr||t.type==="keyup"&&t.key!==Un)return;const e=g.find(aa);for(const o of e){const i=Y.getInstance(o);if(!i||i._config.autoClose===!1)continue;const s=t.composedPath(),l=s.includes(i._menu);if(s.includes(i._element)||i._config.autoClose==="inside"&&!l||i._config.autoClose==="outside"&&l||i._menu.contains(t.target)&&(t.type==="keyup"&&t.key===Un||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const r={relatedTarget:i._element};t.type==="click"&&(r.clickEvent=t),i._completeHide(r)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),o=t.key===zr,i=[Yr,qn].includes(t.key);if(!i&&!o||e&&!o)return;t.preventDefault();const s=this.matches(ft)?this:g.prev(this,ft)[0]||g.next(this,ft)[0]||g.findOne(ft,t.delegateTarget.parentNode),l=Y.getOrCreateInstance(s);if(i){t.stopPropagation(),l.show(),l._selectMenuItem(t);return}l._isShown()&&(t.stopPropagation(),l.hide(),s.focus())}}c.on(document,pi,ft,Y.dataApiKeydownHandler);c.on(document,pi,fe,Y.dataApiKeydownHandler);c.on(document,ai,Y.clearMenus);c.on(document,na,Y.clearMenus);c.on(document,ai,ft,function(n){n.preventDefault(),Y.getOrCreateInstance(this).toggle()});G(Y);const Kn=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",zn=".sticky-top",pe="padding-right",Yn="margin-right";class nn{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,pe,e=>e+t),this._setElementAttributes(Kn,pe,e=>e+t),this._setElementAttributes(zn,Yn,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,pe),this._resetElementAttributes(Kn,pe),this._resetElementAttributes(zn,Yn)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,o){const i=this.getWidth(),s=l=>{if(l!==this._element&&window.innerWidth>l.clientWidth+i)return;this._saveInitialAttribute(l,e);const r=window.getComputedStyle(l).getPropertyValue(e);l.style.setProperty(e,`${o(Number.parseFloat(r))}px`)};this._applyManipulationCallback(t,s)}_saveInitialAttribute(t,e){const o=t.style.getPropertyValue(e);o&&et.setDataAttribute(t,e,o)}_resetElementAttributes(t,e){const o=i=>{const s=et.getDataAttribute(i,e);if(s===null){i.style.removeProperty(e);return}et.removeDataAttribute(i,e),i.style.setProperty(e,s)};this._applyManipulationCallback(t,o)}_applyManipulationCallback(t,e){if(tt(t)){e(t);return}for(const o of g.find(t,this._element))e(o)}}const ci="backdrop",wa="fade",Xn="show",Qn=`mousedown.bs.${ci}`,Aa={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Sa={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class ui extends Qt{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Aa}static get DefaultType(){return Sa}static get NAME(){return ci}show(t){if(!this._config.isVisible){Q(t);return}this._append();const e=this._getElement();this._config.isAnimated&&Xt(e),e.classList.add(Xn),this._emulateAnimation(()=>{Q(t)})}hide(t){if(!this._config.isVisible){Q(t);return}this._getElement().classList.remove(Xn),this._emulateAnimation(()=>{this.dispose(),Q(t)})}dispose(){this._isAppended&&(c.off(this._element,Qn),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(wa),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=lt(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),c.on(t,Qn,()=>{Q(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Yo(t,this._getElement(),this._config.isAnimated)}}const Oa="focustrap",Ca="bs.focustrap",ye=`.${Ca}`,Ta=`focusin${ye}`,ka=`keydown.tab${ye}`,xa="Tab",Da="forward",Zn="backward",Na={autofocus:!0,trapElement:null},Ma={autofocus:"boolean",trapElement:"element"};class di extends Qt{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Na}static get DefaultType(){return Ma}static get NAME(){return Oa}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),c.off(document,ye),c.on(document,Ta,t=>this._handleFocusin(t)),c.on(document,ka,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,c.off(document,ye))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const o=g.focusableChildren(e);o.length===0?e.focus():this._lastTabNavDirection===Zn?o[o.length-1].focus():o[0].focus()}_handleKeydown(t){t.key===xa&&(this._lastTabNavDirection=t.shiftKey?Zn:Da)}}const La="modal",$a="bs.modal",K=`.${$a}`,Fa=".data-api",Ba="Escape",Ia=`hide${K}`,Ra=`hidePrevented${K}`,hi=`hidden${K}`,mi=`show${K}`,Pa=`shown${K}`,Ha=`resize${K}`,ja=`click.dismiss${K}`,Va=`mousedown.dismiss${K}`,Ga=`keydown.dismiss${K}`,Wa=`click${K}${Fa}`,to="modal-open",Ja="fade",eo="show",He="modal-static",Ua=".modal.show",qa=".modal-dialog",Ka=".modal-body",za='[data-bs-toggle="modal"]',Ya={backdrop:!0,focus:!0,keyboard:!0},Xa={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class It extends q{constructor(t,e){super(t,e),this._dialog=g.findOne(qa,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new nn,this._addEventListeners()}static get Default(){return Ya}static get DefaultType(){return Xa}static get NAME(){return La}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||c.trigger(this._element,mi,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(to),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||c.trigger(this._element,Ia).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(eo),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const t of[window,this._dialog])c.off(t,K);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new ui({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new di({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=g.findOne(Ka,this._dialog);e&&(e.scrollTop=0),Xt(this._element),this._element.classList.add(eo);const o=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,c.trigger(this._element,Pa,{relatedTarget:t})};this._queueCallback(o,this._dialog,this._isAnimated())}_addEventListeners(){c.on(this._element,Ga,t=>{if(t.key===Ba){if(this._config.keyboard){t.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),c.on(window,Ha,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),c.on(this._element,Va,t=>{c.one(this._element,ja,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(to),this._resetAdjustments(),this._scrollBar.reset(),c.trigger(this._element,hi)})}_isAnimated(){return this._element.classList.contains(Ja)}_triggerBackdropTransition(){if(c.trigger(this._element,Ra).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,o=this._element.style.overflowY;o==="hidden"||this._element.classList.contains(He)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(He),this._queueCallback(()=>{this._element.classList.remove(He),this._queueCallback(()=>{this._element.style.overflowY=o},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),o=e>0;if(o&&!t){const i=j()?"paddingLeft":"paddingRight";this._element.style[i]=`${e}px`}if(!o&&t){const i=j()?"paddingRight":"paddingLeft";this._element.style[i]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const o=It.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof o[t]>"u")throw new TypeError(`No method named "${t}"`);o[t](e)}})}}c.on(document,Wa,za,function(n){const t=Z(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),c.one(t,mi,i=>{i.defaultPrevented||c.one(t,hi,()=>{Ht(this)&&this.focus()})});const e=g.findOne(Ua);e&&It.getInstance(e).hide(),It.getOrCreateInstance(t).toggle(this)});Oe(It);G(It);const Qa="offcanvas",Za="bs.offcanvas",ot=`.${Za}`,vi=".data-api",tp=`load${ot}${vi}`,ep="Escape",no="show",oo="showing",io="hiding",np="offcanvas-backdrop",bi=".offcanvas.show",op=`show${ot}`,ip=`shown${ot}`,sp=`hide${ot}`,so=`hidePrevented${ot}`,fi=`hidden${ot}`,lp=`resize${ot}`,rp=`click${ot}${vi}`,ap=`keydown.dismiss${ot}`,pp='[data-bs-toggle="offcanvas"]',cp={backdrop:!0,keyboard:!0,scroll:!1},up={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class at extends q{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return cp}static get DefaultType(){return up}static get NAME(){return Qa}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||c.trigger(this._element,op,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new nn().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(oo);const o=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(no),this._element.classList.remove(oo),c.trigger(this._element,ip,{relatedTarget:t})};this._queueCallback(o,this._element,!0)}hide(){if(!this._isShown||c.trigger(this._element,sp).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(io),this._backdrop.hide();const e=()=>{this._element.classList.remove(no,io),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new nn().reset(),c.trigger(this._element,fi)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){c.trigger(this._element,so);return}this.hide()},e=!!this._config.backdrop;return new ui({className:np,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new di({trapElement:this._element})}_addEventListeners(){c.on(this._element,ap,t=>{if(t.key===ep){if(!this._config.keyboard){c.trigger(this._element,so);return}this.hide()}})}static jQueryInterface(t){return this.each(function(){const e=at.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}c.on(document,rp,pp,function(n){const t=Z(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),rt(this))return;c.one(t,fi,()=>{Ht(this)&&this.focus()});const e=g.findOne(bi);e&&e!==t&&at.getInstance(e).hide(),at.getOrCreateInstance(t).toggle(this)});c.on(window,tp,()=>{for(const n of g.find(bi))at.getOrCreateInstance(n).show()});c.on(window,lp,()=>{for(const n of g.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&at.getOrCreateInstance(n).hide()});Oe(at);G(at);const dp=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),hp=/^aria-[\w-]*$/i,mp=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,vp=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,bp=(n,t)=>{const e=n.nodeName.toLowerCase();return t.includes(e)?dp.has(e)?!!(mp.test(n.nodeValue)||vp.test(n.nodeValue)):!0:t.filter(o=>o instanceof RegExp).some(o=>o.test(e))},gi={"*":["class","dir","id","lang","role",hp],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function fp(n,t,e){if(!n.length)return n;if(e&&typeof e=="function")return e(n);const i=new window.DOMParser().parseFromString(n,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const l of s){const r=l.nodeName.toLowerCase();if(!Object.keys(t).includes(r)){l.remove();continue}const p=[].concat(...l.attributes),u=[].concat(t["*"]||[],t[r]||[]);for(const a of p)bp(a,u)||l.removeAttribute(a.nodeName)}return i.body.innerHTML}const gp="TemplateFactory",Ep={allowList:gi,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},_p={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},yp={entry:"(string|element|function|null)",selector:"(string|element)"};class wp extends Qt{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Ep}static get DefaultType(){return _p}static get NAME(){return gp}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[i,s]of Object.entries(this._config.content))this._setContent(t,s,i);const e=t.children[0],o=this._resolvePossibleFunction(this._config.extraClass);return o&&e.classList.add(...o.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,o]of Object.entries(t))super._typeCheckConfig({selector:e,entry:o},yp)}_setContent(t,e,o){const i=g.findOne(o,t);if(i){if(e=this._resolvePossibleFunction(e),!e){i.remove();return}if(tt(e)){this._putElementInTemplate(lt(e),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(e);return}i.textContent=e}}_maybeSanitize(t){return this._config.sanitize?fp(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return typeof t=="function"?t(this):t}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const Ap="tooltip",Sp=new Set(["sanitize","allowList","sanitizeFn"]),je="fade",Op="modal",ce="show",Cp=".tooltip-inner",lo=`.${Op}`,ro="hide.bs.modal",Ut="hover",Ve="focus",Tp="click",kp="manual",xp="hide",Dp="hidden",Np="show",Mp="shown",Lp="inserted",$p="click",Fp="focusin",Bp="focusout",Ip="mouseenter",Rp="mouseleave",Pp={AUTO:"auto",TOP:"top",RIGHT:j()?"left":"right",BOTTOM:"bottom",LEFT:j()?"right":"left"},Hp={allowList:gi,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},jp={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Vt extends q{constructor(t,e){if(typeof Wo>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Hp}static get DefaultType(){return jp}static get NAME(){return Ap}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),c.off(this._element.closest(lo),ro,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=c.trigger(this._element,this.constructor.eventName(Np)),o=(Ko(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!o)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),c.trigger(this._element,this.constructor.eventName(Lp))),this._popper=this._createPopper(i),i.classList.add(ce),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))c.on(r,"mouseover",Ee);const l=()=>{c.trigger(this._element,this.constructor.eventName(Mp)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(l,this.tip,this._isAnimated())}hide(){if(!this._isShown()||c.trigger(this._element,this.constructor.eventName(xp)).defaultPrevented)return;if(this._getTipElement().classList.remove(ce),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))c.off(i,"mouseover",Ee);this._activeTrigger[Tp]=!1,this._activeTrigger[Ve]=!1,this._activeTrigger[Ut]=!1,this._isHovered=null;const o=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),c.trigger(this._element,this.constructor.eventName(Dp)))};this._queueCallback(o,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(je,ce),e.classList.add(`bs-${this.constructor.NAME}-auto`);const o=Cl(this.constructor.NAME).toString();return e.setAttribute("id",o),this._isAnimated()&&e.classList.add(je),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new wp({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Cp]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(je)}_isShown(){return this.tip&&this.tip.classList.contains(ce)}_createPopper(t){const e=typeof this._config.placement=="function"?this._config.placement.call(this,t,this._element):this._config.placement,o=Pp[e.toUpperCase()];return gn(this._element,t,this._getPopperConfig(o))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return typeof t=="function"?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:o=>{this._getTipElement().setAttribute("data-popper-placement",o.state.placement)}}]};return{...e,...typeof this._config.popperConfig=="function"?this._config.popperConfig(e):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")c.on(this._element,this.constructor.eventName($p),this._config.selector,o=>{this._initializeOnDelegatedTarget(o).toggle()});else if(e!==kp){const o=e===Ut?this.constructor.eventName(Ip):this.constructor.eventName(Fp),i=e===Ut?this.constructor.eventName(Rp):this.constructor.eventName(Bp);c.on(this._element,o,this._config.selector,s=>{const l=this._initializeOnDelegatedTarget(s);l._activeTrigger[s.type==="focusin"?Ve:Ut]=!0,l._enter()}),c.on(this._element,i,this._config.selector,s=>{const l=this._initializeOnDelegatedTarget(s);l._activeTrigger[s.type==="focusout"?Ve:Ut]=l._element.contains(s.relatedTarget),l._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},c.on(this._element.closest(lo),ro,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=et.getDataAttributes(this._element);for(const o of Object.keys(e))Sp.has(o)&&delete e[o];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:lt(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=Vt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}G(Vt);const Vp="popover",Gp=".popover-header",Wp=".popover-body",Jp={...Vt.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Up={...Vt.DefaultType,content:"(null|string|element|function)"};class wn extends Vt{static get Default(){return Jp}static get DefaultType(){return Up}static get NAME(){return Vp}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Gp]:this._getTitle(),[Wp]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=wn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}G(wn);const qp="scrollspy",Kp="bs.scrollspy",An=`.${Kp}`,zp=".data-api",Yp=`activate${An}`,ao=`click${An}`,Xp=`load${An}${zp}`,Qp="dropdown-item",Ct="active",Zp='[data-bs-spy="scroll"]',Ge="[href]",tc=".nav, .list-group",po=".nav-link",ec=".nav-item",nc=".list-group-item",oc=`${po}, ${ec} > ${po}, ${nc}`,ic=".dropdown",sc=".dropdown-toggle",lc={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},rc={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class ke extends q{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return lc}static get DefaultType(){return rc}static get NAME(){return qp}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=lt(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(c.off(this._config.target,ao),c.on(this._config.target,ao,Ge,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const o=this._rootElement||window,i=e.offsetTop-this._element.offsetTop;if(o.scrollTo){o.scrollTo({top:i,behavior:"smooth"});return}o.scrollTop=i}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=l=>this._targetLinks.get(`#${l.target.id}`),o=l=>{this._previousScrollData.visibleEntryTop=l.target.offsetTop,this._process(e(l))},i=(this._rootElement||document.documentElement).scrollTop,s=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const l of t){if(!l.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(l));continue}const r=l.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&r){if(o(l),!i)return;continue}!s&&!r&&o(l)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=g.find(Ge,this._config.target);for(const e of t){if(!e.hash||rt(e))continue;const o=g.findOne(e.hash,this._element);Ht(o)&&(this._targetLinks.set(e.hash,e),this._observableSections.set(e.hash,o))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Ct),this._activateParents(t),c.trigger(this._element,Yp,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(Qp)){g.findOne(sc,t.closest(ic)).classList.add(Ct);return}for(const e of g.parents(t,tc))for(const o of g.prev(e,oc))o.classList.add(Ct)}_clearActiveClass(t){t.classList.remove(Ct);const e=g.find(`${Ge}.${Ct}`,t);for(const o of e)o.classList.remove(Ct)}static jQueryInterface(t){return this.each(function(){const e=ke.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}c.on(window,Xp,()=>{for(const n of g.find(Zp))ke.getOrCreateInstance(n)});G(ke);const ac="tab",pc="bs.tab",At=`.${pc}`,cc=`hide${At}`,uc=`hidden${At}`,dc=`show${At}`,hc=`shown${At}`,mc=`click${At}`,vc=`keydown${At}`,bc=`load${At}`,fc="ArrowLeft",co="ArrowRight",gc="ArrowUp",uo="ArrowDown",gt="active",ho="fade",We="show",Ec="dropdown",_c=".dropdown-toggle",yc=".dropdown-menu",Je=":not(.dropdown-toggle)",wc='.list-group, .nav, [role="tablist"]',Ac=".nav-item, .list-group-item",Sc=`.nav-link${Je}, .list-group-item${Je}, [role="tab"]${Je}`,Ei='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Ue=`${Sc}, ${Ei}`,Oc=`.${gt}[data-bs-toggle="tab"], .${gt}[data-bs-toggle="pill"], .${gt}[data-bs-toggle="list"]`;class Rt extends q{constructor(t){super(t),this._parent=this._element.closest(wc),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),c.on(this._element,vc,e=>this._keydown(e)))}static get NAME(){return ac}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),o=e?c.trigger(e,cc,{relatedTarget:t}):null;c.trigger(t,dc,{relatedTarget:e}).defaultPrevented||o&&o.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(gt),this._activate(Z(t));const o=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(We);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),c.trigger(t,hc,{relatedTarget:e})};this._queueCallback(o,t,t.classList.contains(ho))}_deactivate(t,e){if(!t)return;t.classList.remove(gt),t.blur(),this._deactivate(Z(t));const o=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(We);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),c.trigger(t,uc,{relatedTarget:e})};this._queueCallback(o,t,t.classList.contains(ho))}_keydown(t){if(![fc,co,gc,uo].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=[co,uo].includes(t.key),o=En(this._getChildren().filter(i=>!rt(i)),t.target,e,!0);o&&(o.focus({preventScroll:!0}),Rt.getOrCreateInstance(o).show())}_getChildren(){return g.find(Ue,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const o of e)this._setInitialAttributesOnChild(o)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),o=this._getOuterElement(t);t.setAttribute("aria-selected",e),o!==t&&this._setAttributeIfNotExists(o,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=Z(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,e){const o=this._getOuterElement(t);if(!o.classList.contains(Ec))return;const i=(s,l)=>{const r=g.findOne(s,o);r&&r.classList.toggle(l,e)};i(_c,gt),i(yc,We),o.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,o){t.hasAttribute(e)||t.setAttribute(e,o)}_elemIsActive(t){return t.classList.contains(gt)}_getInnerElement(t){return t.matches(Ue)?t:g.findOne(Ue,t)}_getOuterElement(t){return t.closest(Ac)||t}static jQueryInterface(t){return this.each(function(){const e=Rt.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}c.on(document,mc,Ei,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!rt(this)&&Rt.getOrCreateInstance(this).show()});c.on(window,bc,()=>{for(const n of g.find(Oc))Rt.getOrCreateInstance(n)});G(Rt);const Cc="toast",Tc="bs.toast",ut=`.${Tc}`,kc=`mouseover${ut}`,xc=`mouseout${ut}`,Dc=`focusin${ut}`,Nc=`focusout${ut}`,Mc=`hide${ut}`,Lc=`hidden${ut}`,$c=`show${ut}`,Fc=`shown${ut}`,Bc="fade",mo="hide",ue="show",de="showing",Ic={animation:"boolean",autohide:"boolean",delay:"number"},Rc={animation:!0,autohide:!0,delay:5e3};class xe extends q{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Rc}static get DefaultType(){return Ic}static get NAME(){return Cc}show(){if(c.trigger(this._element,$c).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Bc);const e=()=>{this._element.classList.remove(de),c.trigger(this._element,Fc),this._maybeScheduleHide()};this._element.classList.remove(mo),Xt(this._element),this._element.classList.add(ue,de),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||c.trigger(this._element,Mc).defaultPrevented)return;const e=()=>{this._element.classList.add(mo),this._element.classList.remove(de,ue),c.trigger(this._element,Lc)};this._element.classList.add(de),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(ue),super.dispose()}isShown(){return this._element.classList.contains(ue)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const o=t.relatedTarget;this._element===o||this._element.contains(o)||this._maybeScheduleHide()}_setListeners(){c.on(this._element,kc,t=>this._onInteraction(t,!0)),c.on(this._element,xc,t=>this._onInteraction(t,!1)),c.on(this._element,Dc,t=>this._onInteraction(t,!0)),c.on(this._element,Nc,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=xe.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Oe(xe);G(xe);var Pc=Object.defineProperty,Hc=(n,t,e)=>t in n?Pc(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,f=(n,t,e)=>(Hc(n,typeof t!="symbol"?t+"":t,e),e),jc=class{constructor(n){f(this,"_distinctEvent"),f(this,"_boundedEvents",[]),this._distinctEvent=(n==null?void 0:n.distinctEvent)??!1}get boundedEvents(){return this._boundedEvents}dispose(){this.unbindAll(),this._boundedEvents=[]}bind(n,t,e,o){let i=Array.isArray(t)?t:[t];if(n!=null&&n.forEach)n==null||n.forEach(s=>{for(let l of i)(!this._distinctEvent||this._distinctEvent&&!this.hasBinding(s,l))&&(s.addEventListener(l,e,o),this._boundedEvents.push({element:s,eventName:l,listener:e}))});else for(let s of i)(!this._distinctEvent||this._distinctEvent&&!this.hasBinding(n,s))&&(n.addEventListener(s,e,o),this._boundedEvents.push({element:n,eventName:s,listener:e}))}hasBinding(n,t){return this._boundedEvents.some(e=>e.element===n&&(!t||e.eventName===t))}unbind(n,t,e){var o;if(n){let i=Array.isArray(n)?n:[n],s=Array.isArray(t)?t||"":[t||""];for(let l of i){e||(e=this._boundedEvents.find(r=>{if(r.element===l&&(!t||r.eventName===t))return r.listener}));for(let r of s)(o=l==null?void 0:l.removeEventListener)==null||o.call(l,r,e)}}}unbindAll(){for(;this._boundedEvents.length>0;){let n=this._boundedEvents.pop(),{element:t,eventName:e,listener:o}=n;this.unbind(t,e,o)}}},_i=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};_i.locales={["en-US"]:{formatSelectAll(){return"[Select all]"},formatAllSelected(){return"All selected"},formatCountSelected(n,t){return n+" of "+t+" selected"},formatNoMatchesFound(){return"No matches found"},formatOkButton(){return"OK"}}};var yi=_i.locales,Vc=50,Gc=4,wi={name:"",placeholder:"",data:void 0,locale:void 0,selectAll:!0,single:void 0,singleRadio:!1,multiple:!1,hideOptgroupCheckboxes:!1,multipleWidth:80,width:void 0,dropWidth:void 0,maxHeight:250,maxHeightUnit:"px",position:"bottom",displayValues:!1,displayTitle:!1,displayDelimiter:", ",minimumCountSelected:3,ellipsis:!1,isOpen:!1,keepOpen:!1,openOnHover:!1,container:null,filter:!1,filterGroup:!1,filterPlaceholder:"",filterAcceptOnEnter:!1,filterByDataLength:void 0,customFilter(n,t){return n.includes(t)},showClear:!1,autoAdjustDropHeight:!1,autoAdjustDropPosition:!1,autoAdjustDropWidthByTextSize:!1,adjustedHeightPadding:10,useSelectOptionLabel:!1,useSelectOptionLabelToHtml:!1,styler:()=>!1,textTemplate:n=>n.innerHTML.trim(),labelTemplate:n=>n.label,onOpen:()=>!1,onClose:()=>!1,onCheckAll:()=>!1,onUncheckAll:()=>!1,onFocus:()=>!1,onBlur:()=>!1,onOptgroupClick:()=>!1,onClick:()=>!1,onFilter:()=>!1,onClear:()=>!1,onAfterCreate:()=>!1,onDestroy:()=>!1,onAfterDestroy:()=>!1,onDestroyed:()=>!1},Wc=["init","getOptions","refreshOptions","getSelects","setSelects","enable","disable","open","close","check","uncheck","checkAll","uncheckAll","checkInvert","focus","blur","refresh","destroy"];Object.assign(wi,yi["en-US"]);var Jc={BLOCK_ROWS:Vc,CLUSTER_BLOCKS:Gc,DEFAULTS:wi,METHODS:Wc},U=Jc,Uc=class{constructor(n){f(this,"cache"),f(this,"clusterRows"),f(this,"dataStart"),f(this,"dataEnd"),f(this,"rows"),f(this,"scrollEl"),f(this,"blockHeight"),f(this,"clusterHeight"),f(this,"contentEl"),f(this,"parentEl"),f(this,"itemHeight"),f(this,"lastCluster"),f(this,"scrollTop"),f(this,"destroy"),f(this,"callback"),f(this,"sanitizer"),this.rows=n.rows,this.scrollEl=n.scrollEl,this.contentEl=n.contentEl,this.parentEl=n.contentEl.parentElement,this.callback=n.callback,this.cache={},this.scrollTop=this.scrollEl.scrollTop,this.initDOM(this.rows),this.scrollEl.scrollTop=this.scrollTop,this.lastCluster=0;let t=()=>{this.lastCluster!==(this.lastCluster=this.getNum())&&(this.initDOM(this.rows),this.callback())};this.scrollEl.addEventListener("scroll",t,!1),this.destroy=()=>{this.contentEl.innerHTML="",this.scrollEl.removeEventListener("scroll",t,!1)}}initDOM(n){if(typeof this.clusterHeight>"u"){this.cache.scrollTop=this.scrollEl.scrollTop;let r=n[0]+n[0]+n[0];this.contentEl.innerHTML=this.sanitizer?this.sanitizer(`${r}`):`${r}`,this.cache.data=r,this.getRowsHeight()}let t=this.initData(n,this.getNum()),e=t.rows.join(""),o=this.checkChanges("data",e),i=this.checkChanges("top",t.topOffset),s=this.checkChanges("bottom",t.bottomOffset),l=[];o&&i?(t.topOffset&&l.push(this.getExtra("top",t.topOffset)),l.push(e),t.bottomOffset&&l.push(this.getExtra("bottom",t.bottomOffset)),this.contentEl.innerHTML=this.sanitizer?this.sanitizer(l.join("")):l.join("")):s&&this.contentEl.lastChild&&(this.contentEl.lastChild.style.height=`${t.bottomOffset}px`)}getRowsHeight(){var n;if(typeof this.itemHeight>"u"){let t=((n=this.parentEl)==null?void 0:n.style.display)||"";this.parentEl&&(t===""||t==="none")&&(this.parentEl.style.display="block");let e=this.contentEl.children,o=e[Math.floor(e.length/2)];this.itemHeight=o.offsetHeight,this.parentEl&&(this.parentEl.style.display=t)}this.blockHeight=this.itemHeight*U.BLOCK_ROWS,this.clusterRows=U.BLOCK_ROWS*U.CLUSTER_BLOCKS,this.clusterHeight=this.blockHeight*U.CLUSTER_BLOCKS}getNum(){this.scrollTop=this.scrollEl.scrollTop;let n=(this.clusterHeight||0)-(this.blockHeight||0);return n&&Math.floor(this.scrollTop/n)||0}initData(n,t){if(n.length<U.BLOCK_ROWS)return{topOffset:0,bottomOffset:0,rowsAbove:0,rows:n};let e=Math.max((this.clusterRows-U.BLOCK_ROWS)*t,0),o=e+this.clusterRows,i=Math.max(e*this.itemHeight,0),s=Math.max((n.length-o)*this.itemHeight,0),l=[],r=e;i<1&&r++;for(let p=e;p<o;p++)n[p]&&l.push(n[p]);return this.dataStart=e,this.dataEnd=o,{topOffset:i,bottomOffset:s,rowsAbove:r,rows:l}}checkChanges(n,t){let e=t!==this.cache[n];return this.cache[n]=t,e}getExtra(n,t){let e=document.createElement("li");return e.className=`virtual-scroll-${n}`,t&&(e.style.height=`${t}px`),e.outerHTML}};function qe(n){let t=0,e=0,o=0,i=0,s=window.innerHeight??0,l=window.innerWidth??0,r=Kc(),p=r.top,u=r.left,a=on(n);if(a){let h=a.top??0,v=a.left??0;e=h-p,t=s-(h-p),o=v-u,i=l-(v-u)}return{top:e,bottom:t,left:o,right:i}}function x(n,t){let e=document.createElement(n);return t&&Object.keys(t).forEach(o=>{let i=t[o];typeof i=="object"?Object.assign({},e[o],i):e[o]=t[o]}),e}function on(n){var l;if(!n)return;let t=(l=n==null?void 0:n.getBoundingClientRect)==null?void 0:l.call(n),e=0,o=0,i=0,s=0;return(t==null?void 0:t.top)!==void 0&&t.left!==void 0&&(e=t.top+window.pageYOffset,o=t.left+window.pageXOffset,s=t.right,i=t.bottom),{top:e,left:o,bottom:i,right:s}}function he(n,t,e){let o=parseFloat(n.style[e]);if(!o||isNaN(o)){switch(t){case"outer":o=n[e==="width"?"offsetWidth":"offsetHeight"];break;case"scroll":o=n[e==="width"?"scrollWidth":"scrollHeight"];break;case"inner":default:o=n[e==="width"?"clientWidth":"clientHeight"];break}o=n.getBoundingClientRect()[e]}if(!o||isNaN(o)){let i=n.style.display,s=n.style.position;n.style.display="block",n.style.position="absolute";let l=window.getComputedStyle(n)[e];o=parseFloat(l),isNaN(o)&&(o=0),n.style.display=i,n.style.position=s}return o||0}function vo(n,t){let e=null,o=n.parentElement;for(;o;){let[i,s,l,r]=t.match(/^([a-z]*)([#.]{1})([a-z\-]+)$/i)||[];if(l&&r)for(let p of r.replace(l,"").split(" "))o.classList.contains(p)&&(s?(o==null?void 0:o.tagName.toLowerCase())===s&&(e=o):e=o);o=o.parentElement}return e}function qc(n,t){var e;(e=n.parentNode)==null||e.insertBefore(t,n.nextSibling)}function bo(n,t){n!=null&&n.style&&(n.style.display=n.style.display==="none"&&t!==!1||t===!0?"block":"none")}function Kc(){return{left:window.pageXOffset||document.documentElement.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||0}}function zc(n,t,e=!1){let o=Object.keys(n),i=Object.keys(t);if(e&&o.length!==i.length)return!1;for(let s of o)if(i.includes(s)&&n[s]!==t[s])return!1;return!0}function sn(n){let t=()=>{let i={};for(let s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=sn(n[s]));return i},e=()=>n.map(i=>sn(i)),o=Object.prototype.toString.call(n).slice(8,-1).toLowerCase();return o==="object"?t():o==="array"?e():n}function Yc(n){let t=0;return n.forEach((e,o)=>{e.type==="optgroup"?(e._key=`group_${o}`,e.visible=typeof e.visible>"u"?!0:e.visible,e.children.forEach((i,s)=>{i&&(i.visible=typeof(i==null?void 0:i.visible)>"u"?!0:i.visible,i.divider||(i._key=`option_${o}_${s}`,t+=1))})):(e.visible=typeof e.visible>"u"?!0:e.visible,e.divider||(e._key=`option_${o}`,t+=1))}),t}function me(n,t,e){if(Array.isArray(n))for(let o of n){if(o[t]===e||o[t]===+o[t]+""&&+o[t]===e)return o;if(o.type==="optgroup"){for(let i of o.children)if(i&&(i[t]===e||i[t]===+i[t]+""&&+i[t]===e))return i}}}function Xc(n){var i;var t=document.createElement("div");t.innerHTML=n;for(var e=t.getElementsByTagName("script"),o=e.length;o--;)(i=e[o].parentNode)==null||i.removeChild(e[o]);return t.innerHTML}function Ke(n){return Object.keys(n).forEach(t=>n[t]===void 0?delete n[t]:""),n}function Tt(n){return typeof n!="string"?n:n.normalize?n.normalize("NFD").replace(/[\u0300-\u036F]/g,""):[{base:"A",letters:/[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},{base:"AA",letters:/[\uA732]/g},{base:"AE",letters:/[\u00C6\u01FC\u01E2]/g},{base:"AO",letters:/[\uA734]/g},{base:"AU",letters:/[\uA736]/g},{base:"AV",letters:/[\uA738\uA73A]/g},{base:"AY",letters:/[\uA73C]/g},{base:"B",letters:/[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},{base:"C",letters:/[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},{base:"D",letters:/[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},{base:"DZ",letters:/[\u01F1\u01C4]/g},{base:"Dz",letters:/[\u01F2\u01C5]/g},{base:"E",letters:/[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},{base:"F",letters:/[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},{base:"G",letters:/[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},{base:"H",letters:/[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},{base:"I",letters:/[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},{base:"J",letters:/[\u004A\u24BF\uFF2A\u0134\u0248]/g},{base:"K",letters:/[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},{base:"L",letters:/[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},{base:"LJ",letters:/[\u01C7]/g},{base:"Lj",letters:/[\u01C8]/g},{base:"M",letters:/[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},{base:"N",letters:/[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},{base:"NJ",letters:/[\u01CA]/g},{base:"Nj",letters:/[\u01CB]/g},{base:"O",letters:/[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},{base:"OI",letters:/[\u01A2]/g},{base:"OO",letters:/[\uA74E]/g},{base:"OU",letters:/[\u0222]/g},{base:"P",letters:/[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},{base:"Q",letters:/[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},{base:"R",letters:/[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},{base:"S",letters:/[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},{base:"T",letters:/[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},{base:"TZ",letters:/[\uA728]/g},{base:"U",letters:/[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},{base:"V",letters:/[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},{base:"VY",letters:/[\uA760]/g},{base:"W",letters:/[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},{base:"X",letters:/[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},{base:"Y",letters:/[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},{base:"Z",letters:/[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},{base:"a",letters:/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},{base:"aa",letters:/[\uA733]/g},{base:"ae",letters:/[\u00E6\u01FD\u01E3]/g},{base:"ao",letters:/[\uA735]/g},{base:"au",letters:/[\uA737]/g},{base:"av",letters:/[\uA739\uA73B]/g},{base:"ay",letters:/[\uA73D]/g},{base:"b",letters:/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},{base:"c",letters:/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},{base:"d",letters:/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},{base:"dz",letters:/[\u01F3\u01C6]/g},{base:"e",letters:/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},{base:"f",letters:/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},{base:"g",letters:/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},{base:"h",letters:/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},{base:"hv",letters:/[\u0195]/g},{base:"i",letters:/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},{base:"j",letters:/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},{base:"k",letters:/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},{base:"l",letters:/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},{base:"lj",letters:/[\u01C9]/g},{base:"m",letters:/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},{base:"n",letters:/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},{base:"nj",letters:/[\u01CC]/g},{base:"o",letters:/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},{base:"oi",letters:/[\u01A3]/g},{base:"ou",letters:/[\u0223]/g},{base:"oo",letters:/[\uA74F]/g},{base:"p",letters:/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},{base:"q",letters:/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},{base:"r",letters:/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},{base:"s",letters:/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},{base:"t",letters:/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},{base:"tz",letters:/[\uA729]/g},{base:"u",letters:/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},{base:"v",letters:/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},{base:"vy",letters:/[\uA761]/g},{base:"w",letters:/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},{base:"x",letters:/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},{base:"y",letters:/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},{base:"z",letters:/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g}].reduce((t,{letters:e,base:o})=>t.replace(e,o),n)}var Qc=class{constructor(n,t){this.elm=n,f(this,"_bindEventService"),f(this,"allSelected",!1),f(this,"fromHtml",!1),f(this,"choiceElm"),f(this,"closeElm"),f(this,"filterText",""),f(this,"updateData",[]),f(this,"data",[]),f(this,"dataTotal"),f(this,"dropElm"),f(this,"okButtonElm"),f(this,"filterParentElm"),f(this,"ulElm"),f(this,"parentElm"),f(this,"labelElm"),f(this,"selectAllParentElm"),f(this,"selectAllElm"),f(this,"searchInputElm"),f(this,"selectGroupElms"),f(this,"selectItemElms"),f(this,"disableItemElms"),f(this,"noResultsElm"),f(this,"options"),f(this,"selectAllName",""),f(this,"selectGroupName",""),f(this,"selectItemName",""),f(this,"tabIndex"),f(this,"updateDataStart"),f(this,"updateDataEnd"),f(this,"virtualScroll"),f(this,"locales",{}),this.options=Object.assign({},U.DEFAULTS,this.elm.dataset,t),this._bindEventService=new jc({distinctEvent:!0})}init(){this.initLocale(),this.initContainer(),this.initData(),this.initSelected(!0),this.initFilter(),this.initDrop(),this.initView(),this.options.onAfterCreate()}destroy(n=!0){var t,e,o,i,s;this.parentElm&&(this.options.onDestroy({hardDestroy:n}),n&&this.options.onHardDestroy(),this.elm.before(this.parentElm),this.elm.classList.remove("ms-offscreen"),this._bindEventService.unbindAll(),this.tabIndex&&(this.elm.tabIndex=+this.tabIndex),(t=this.virtualScroll)==null||t.destroy(),(e=this.dropElm)==null||e.remove(),(o=this.parentElm.parentNode)==null||o.removeChild(this.parentElm),this.fromHtml&&(delete this.options.data,this.fromHtml=!1),this.options.onAfterDestroy({hardDestroy:n}),n&&((s=(i=this.options).onAfterHardDestroy)==null||s.call(i),Object.keys(this.options).forEach(l=>delete this[l])))}initLocale(){if(this.options.locale){let n=window.multipleSelect.locales,t=this.options.locale.split(/-|_/);if(t[0]=t[0].toLowerCase(),t[1]&&(t[1]=t[1].toUpperCase()),n[this.options.locale])Object.assign(this.options,n[this.options.locale]);else if(n[t.join("-")])Object.assign(this.options,n[t.join("-")]);else if(n[t[0]])Object.assign(this.options,n[t[0]]);else throw new Error(`[multiple-select-vanilla] invalid locales "${this.options.locale}", make sure to import it before using it`)}}initContainer(){var i;let n=this.elm.getAttribute("name")||this.options.name||"";this.elm.style.display="none",this.labelElm=this.elm.closest("label"),!this.labelElm&&this.elm.id&&(this.labelElm=document.createElement("label"),this.labelElm.htmlFor=this.elm.id),(i=this.labelElm)!=null&&i.querySelector("input")&&(this.labelElm=null),typeof this.options.single>"u"&&(this.options.single=!this.elm.multiple),this.parentElm=x("div",{className:`ms-parent ${this.elm.className||""}`,dataset:{test:"sel"}});let t=this.elm.getAttribute("data-test")||this.options.dataTest;t&&(this.parentElm.dataset.test=t);let e=this.elm.getAttribute("title")||"";e&&(this.parentElm.title=e),this.options.placeholder=this.options.placeholder||this.elm.getAttribute("placeholder")||"",this.tabIndex=this.elm.getAttribute("tabindex");let o="";this.tabIndex!==null&&(this.elm.tabIndex=-1,o=this.tabIndex&&`tabindex="${this.tabIndex}"`),this.choiceElm=x("button",{className:"ms-choice",type:"button"}),isNaN(o)&&(this.choiceElm.tabIndex=+o),this.choiceElm.appendChild(x("span",{className:"ms-placeholder",textContent:this.options.placeholder})),this.options.showClear&&this.choiceElm.appendChild(x("div",{className:"icon-close"})),this.choiceElm.appendChild(x("div",{className:"icon-caret"})),this.dropElm=x("div",{className:`ms-drop ${this.options.position}`}),n&&(this.dropElm.dataset.name=n),this.closeElm=this.choiceElm.querySelector(".icon-close"),this.options.dropWidth&&(this.dropElm.style.width=typeof this.options.dropWidth=="string"?this.options.dropWidth:`${this.options.dropWidth}px`),qc(this.elm,this.parentElm),this.parentElm.appendChild(this.choiceElm),this.parentElm.appendChild(this.dropElm),this.elm.disabled&&this.choiceElm.classList.add("disabled"),this.selectAllName=`data-name="selectAll${n}"`,this.selectGroupName=`data-name="selectGroup${n}"`,this.selectItemName=`data-name="selectItem${n}"`,this.options.keepOpen||(this._bindEventService.unbind(document.body,"click"),this._bindEventService.bind(document.body,"click",s=>{s.target===this.choiceElm||vo(s.target,".ms-choice")===this.choiceElm||(s.target===this.dropElm||vo(s.target,".ms-drop")!==this.dropElm&&s.target!==this.elm)&&this.options.isOpen&&this.close()}))}initData(){let n=[];if(this.options.data){if(Array.isArray(this.options.data))this.data=this.options.data.map(t=>typeof t=="string"||typeof t=="number"?{text:t,value:t}:t);else if(typeof this.options.data=="object"){for(let[t,e]of Object.entries(this.options.data))n.push({value:t,text:`${e}`});this.data=n}}else this.elm.childNodes.forEach(t=>{this.initRow(t)&&n.push(this.initRow(t))}),this.options.data=n,this.data=n,this.fromHtml=!0;this.dataTotal=Yc(this.data||[])}initRow(n,t){var o,i;let e={};return((o=n.tagName)==null?void 0:o.toLowerCase())==="option"?(e.type="option",e.text=this.options.textTemplate(n),e.value=n.value,e.visible=!0,e.selected=!!n.selected,e.disabled=t||n.disabled,e.classes=n.getAttribute("class")||"",e.title=n.getAttribute("title")||"",n.dataset.value&&(e._value=n.dataset.value),Object.keys(n.dataset).length&&(e._data=n.dataset,e._data.divider&&(e.divider=e._data.divider)),e):((i=n.tagName)==null?void 0:i.toLowerCase())==="optgroup"?(e.type="optgroup",e.label=this.options.labelTemplate(n),e.visible=!0,e.selected=!!n.selected,e.disabled=n.disabled,e.children=[],Object.keys(n.dataset).length&&(e._data=n.dataset),n.childNodes.forEach(s=>{e.children.push(this.initRow(s,e.disabled))}),e):null}initDrop(){this.initList(),this.update(!0),this.options.isOpen&&setTimeout(()=>this.open(),10),this.options.openOnHover&&this.parentElm&&(this._bindEventService.bind(this.parentElm,"mouseover",()=>this.open()),this._bindEventService.bind(this.parentElm,"mouseout",()=>this.close()))}initFilter(){if(this.filterText="",this.options.filter||!this.options.filterByDataLength)return;let n=0;for(let t of this.data||[])t.type==="optgroup"?n+=t.children.length:n+=1;this.options.filter=n>this.options.filterByDataLength}initList(){if(this.options.filter&&(this.filterParentElm=x("div",{className:"ms-search"}),this.filterParentElm.appendChild(x("input",{autocomplete:"off",autocapitalize:"off",spellcheck:!1,type:"text",placeholder:this.options.filterPlaceholder||"🔎︎"})),this.dropElm.appendChild(this.filterParentElm)),this.options.selectAll&&!this.options.single){let n=this.elm.getAttribute("name")||this.options.name||"";this.selectAllParentElm=x("div",{className:"ms-select-all"});let t=x("label"),e=x("input",{type:"checkbox",checked:this.allSelected});e.dataset.name=`selectAll${n}`,t.appendChild(e),t.appendChild(x("span",{textContent:this.formatSelectAll()})),this.selectAllParentElm.appendChild(t),this.dropElm.appendChild(this.selectAllParentElm)}this.ulElm=x("ul"),this.dropElm.appendChild(this.ulElm),this.options.showOkButton&&!this.options.single&&(this.okButtonElm=x("button",{className:"ms-ok-button",type:"button",textContent:this.formatOkButton()}),this.dropElm.appendChild(this.okButtonElm)),this.initListItems()}initListItems(){var e;let n=this.getListRows(),t=0;if(this.options.selectAll&&!this.options.single&&(t=-1),n.length>U.BLOCK_ROWS*U.CLUSTER_BLOCKS){(e=this.virtualScroll)==null||e.destroy();let o=this.dropElm.style.display!=="none";o||(this.dropElm.style.left="-10000",this.dropElm.style.display="block");let i=()=>{var s,l;this.virtualScroll&&(this.updateDataStart=this.virtualScroll.dataStart+t,this.updateDataEnd=this.virtualScroll.dataEnd+t,this.updateDataStart<0&&(this.updateDataStart=0),this.updateDataEnd>(((s=this.data)==null?void 0:s.length)??0)&&(this.updateDataEnd=((l=this.data)==null?void 0:l.length)??0))};this.ulElm&&(this.virtualScroll=new Uc({rows:n,scrollEl:this.ulElm,contentEl:this.ulElm,sanitizer:this.options.sanitizer,callback:()=>{i(),this.events()}})),i(),o||(this.dropElm.style.left="0",this.dropElm.style.display="none")}else this.ulElm&&(this.ulElm.innerHTML=this.options.sanitizer?this.options.sanitizer(n.join("")):n.join("")),this.updateDataStart=0,this.updateDataEnd=this.updateData.length,this.virtualScroll=null;this.events()}getListRows(){var t;let n=[];return this.updateData=[],(t=this.data)==null||t.forEach(e=>{n.push(...this.initListItem(e))}),n.push(`<li class="ms-no-results">${this.formatNoMatchesFound()}</li>`),n}initListItem(n,t=0){let e=n!=null&&n.title?`title="${n.title}"`:"",o=this.options.multiple?"multiple":"",i=this.options.single?"radio":"checkbox",s="";if(!(n!=null&&n.visible))return[];if(this.updateData.push(n),this.options.single&&!this.options.singleRadio&&(s="hide-radio "),n.selected&&(s+="selected "),n.type==="optgroup"){let p=this.options.styler(n),u=p?`style="${p}"`:"",a=[],h=this.options.hideOptgroupCheckboxes||this.options.single?`<span ${this.selectGroupName} data-key="${n._key}"></span>`:`<input type="checkbox"
          ${this.selectGroupName}
          data-key="${n._key}"
          ${n.selected?' checked="checked"':""}
          ${n.disabled?' disabled="disabled"':""}
        >`;return!s.includes("hide-radio")&&(this.options.hideOptgroupCheckboxes||this.options.single)&&(s+="hide-radio "),a.push(`
        <li class="group ${s}" ${u}>
        <label class="optgroup${this.options.single||n.disabled?" disabled":""}">
        ${h}${n.label}
        </label>
        </li>
      `),n.children.forEach(v=>{a.push(...this.initListItem(v,1))}),a}let l=this.options.styler(n),r=l?`style="${l}"`:"";return s+=n.classes||"",t&&this.options.single&&(s+=`option-level-${t} `),n.divider?'<li class="option-divider"/>':[`
      <li class="${o} ${s}" ${e} ${r}>
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
    `]}initSelected(n=!1){var e,o;let t=0;for(let i of this.data||[])if(i.type==="optgroup"){let s=i.children.filter(l=>l&&l.selected&&!l.disabled&&l.visible).length;i.children.length&&(i.selected=!this.options.single&&s&&s===i.children.filter(l=>l&&!l.disabled&&l.visible&&!l.divider).length),t+=s}else t+=i.selected&&!i.disabled&&i.visible?1:0;this.allSelected=((e=this.data)==null?void 0:e.filter(i=>i.selected&&!i.disabled&&i.visible).length)===((o=this.data)==null?void 0:o.filter(i=>!i.disabled&&i.visible&&!i.divider).length),n||(this.allSelected?this.options.onCheckAll():t===0&&this.options.onUncheckAll())}initView(){let n;window.getComputedStyle?(n=window.getComputedStyle(this.elm).width,n==="auto"&&(n=he(this.dropElm,"outer","width")+20)):n=he(this.elm,"outer","width")+20,this.parentElm.style.width=`${this.options.width||n}px`,this.elm.classList.add("ms-offscreen")}events(){this._bindEventService.unbind(this.okButtonElm),this._bindEventService.unbind(this.searchInputElm),this._bindEventService.unbind(this.selectAllElm),this._bindEventService.unbind(this.selectGroupElms),this._bindEventService.unbind(this.selectItemElms),this._bindEventService.unbind(this.disableItemElms),this._bindEventService.unbind(this.noResultsElm),this.searchInputElm=this.dropElm.querySelector(".ms-search input"),this.selectAllElm=this.dropElm.querySelector(`input[${this.selectAllName}]`),this.selectGroupElms=this.dropElm.querySelectorAll(`input[${this.selectGroupName}],span[${this.selectGroupName}]`),this.selectItemElms=this.dropElm.querySelectorAll(`input[${this.selectItemName}]:enabled`),this.disableItemElms=this.dropElm.querySelectorAll(`input[${this.selectItemName}]:disabled`),this.noResultsElm=this.dropElm.querySelector(".ms-no-results");let n=t=>{t.preventDefault(),!t.target.classList.contains("icon-close")&&this[this.options.isOpen?"close":"open"]()};this.labelElm&&this._bindEventService.bind(this.labelElm,"click",t=>{t.target.nodeName.toLowerCase()==="label"&&(n(t),(!this.options.filter||!this.options.isOpen)&&this.focus(),t.stopPropagation())}),this._bindEventService.bind(this.choiceElm,"click",n),this.options.onFocus&&this._bindEventService.bind(this.choiceElm,"focus",this.options.onFocus),this.options.onBlur&&this._bindEventService.bind(this.choiceElm,"blur",this.options.onBlur),this._bindEventService.bind(this.parentElm,"keydown",t=>{t.code==="Escape"&&!this.options.keepOpen&&(this.close(),this.choiceElm.focus())}),this.closeElm&&this._bindEventService.bind(this.closeElm,"click",t=>{t.preventDefault(),this._checkAll(!1,!0),this.initSelected(!1),this.updateSelected(),this.update(),this.options.onClear()}),this.searchInputElm&&(this._bindEventService.bind(this.searchInputElm,"keydown",t=>{t.code==="Tab"&&t.shiftKey&&this.close()}),this._bindEventService.bind(this.searchInputElm,"keyup",t=>{var e,o,i;if(this.options.filterAcceptOnEnter&&["Enter","Space"].includes(t.code)&&((e=this.searchInputElm)!=null&&e.value)){if(this.options.single){let s=[];if((o=this.selectItemElms)==null||o.forEach(l=>{var r;((r=l.closest("li"))==null?void 0:r.style.display)!=="none"&&s.push(l)}),s.length){let[l]=this.selectItemName.split("=");s[0].hasAttribute(l)&&this.setSelects([s[0].value])}}else(i=this.selectAllElm)==null||i.click();this.close(),this.focus();return}this.filter()})),this.selectAllElm&&(this._bindEventService.unbind(this.selectAllElm,"click"),this._bindEventService.bind(this.selectAllElm,"click",t=>{var e;this._checkAll((e=t.currentTarget)==null?void 0:e.checked)})),this.okButtonElm&&(this._bindEventService.unbind(this.okButtonElm,"click"),this._bindEventService.bind(this.okButtonElm,"click",t=>{n(t),t.stopPropagation()})),this._bindEventService.bind(this.selectGroupElms,"click",t=>{let e=t.currentTarget,o=e.checked,i=me(this.data,"_key",e.dataset.key);this._checkGroup(i,o),this.options.onOptgroupClick(Ke({label:i.label,selected:i.selected,data:i._data,children:i.children.map(s=>{if(s)return Ke({text:s.text,value:s.value,selected:s.selected,disabled:s.disabled,data:s._data})})}))}),this._bindEventService.bind(this.selectItemElms,"click",t=>{let e=t.currentTarget,o=e.checked,i=me(this.data,"_key",e.dataset.key);this._check(i,o),this.options.onClick(Ke({text:i.text,value:i.value,selected:i.selected,data:i._data})),this.options.single&&this.options.isOpen&&!this.options.keepOpen&&this.close()})}open(){var i,s,l,r,p,u,a;if((i=this.choiceElm)!=null&&i.classList.contains("disabled"))return;if(setTimeout(()=>this.options.isOpen=!0),this.parentElm.classList.add("ms-parent-open"),(l=(s=this.choiceElm)==null?void 0:s.querySelector("div"))==null||l.classList.add("open"),this.dropElm.style.display="block",(r=this.selectAllElm)!=null&&r.parentElement&&(this.selectAllElm.parentElement.style.display="block"),this.noResultsElm&&(this.noResultsElm.style.display="none"),(p=this.data)!=null&&p.length||((u=this.selectAllElm)!=null&&u.parentElement&&(this.selectAllElm.parentElement.style.display="none"),this.noResultsElm&&(this.noResultsElm.style.display="block")),this.options.container){let h=on(this.dropElm),v;this.options.container instanceof Node?v=this.options.container:typeof this.options.container=="string"&&(v=this.options.container==="body"?document.body:document.querySelector(this.options.container)),v.appendChild(this.dropElm),this.dropElm.style.top=`${(h==null?void 0:h.top)??0}px`,this.dropElm.style.left=`${(h==null?void 0:h.left)??0}px`,this.dropElm.style.minWidth="auto",this.dropElm.style.width=`${he(this.parentElm,"outer","width")}px`}let n=this.options.minHeight,t=this.options.maxHeight;if(this.options.maxHeightUnit==="row"){let h=this.dropElm.querySelector("ul>li");t=he(h,"outer","height")*this.options.maxHeight}let e=this.dropElm.querySelector("ul");e&&(n&&(e.style.minHeight=`${n}px`),e.style.maxHeight=`${t}px`),this.dropElm.querySelectorAll(".multiple").forEach(h=>h.style.width=`${this.options.multipleWidth}px`),(a=this.data)!=null&&a.length&&this.options.filter&&(this.searchInputElm&&(this.searchInputElm.value="",this.searchInputElm.focus()),this.filter(!0)),this.options.autoAdjustDropWidthByTextSize&&this.adjustDropWidthByText();let o=this.options.position;if(this.options.autoAdjustDropHeight){if(this.options.autoAdjustDropPosition){let{bottom:h,top:v}=qe(this.dropElm),b=this.dropElm.getBoundingClientRect().height;o=h<b&&v>h?"top":"bottom"}this.adjustDropHeight(o)}this.options.autoAdjustDropPosition&&this.adjustDropPosition(!0),this.options.onOpen()}close(){var n,t;this.options.isOpen=!1,this.parentElm.classList.remove("ms-parent-open"),(t=(n=this.choiceElm)==null?void 0:n.querySelector("div"))==null||t.classList.remove("open"),this.dropElm.style.display="none",this.options.container&&(this.parentElm.appendChild(this.dropElm),this.dropElm.style.top="auto",this.dropElm.style.left="auto"),this.options.onClose()}update(n=!1){var p;let t=this.getSelects(),e=this.getSelects("text");this.options.displayValues&&(e=t);let o=(p=this.choiceElm)==null?void 0:p.querySelector("span"),i=t.length,s=null,l=()=>{if(this.options.useSelectOptionLabel||this.options.useSelectOptionLabelToHtml){let u=t.join(this.options.displayDelimiter);return this.options.useSelectOptionLabelToHtml?Xc(u):u}else return e.join(this.options.displayDelimiter)};if(o){if(i===0){let u=this.options.placeholder||"";o.classList.add("ms-placeholder"),o.innerHTML=this.options.sanitizer?this.options.sanitizer(u):u}else i<this.options.minimumCountSelected?s=l():this.formatAllSelected()&&i===this.dataTotal?s=this.formatAllSelected():this.options.ellipsis&&i>this.options.minimumCountSelected?s=`${e.slice(0,this.options.minimumCountSelected).join(this.options.displayDelimiter)}...`:this.formatCountSelected(i,this.dataTotal)&&i>this.options.minimumCountSelected?s=this.formatCountSelected(i,this.dataTotal):s=l();if(s!==null&&(o==null||o.classList.remove("ms-placeholder"),this.options.useSelectOptionLabelToHtml?o.innerHTML=this.options.sanitizer?this.options.sanitizer(s):s:o.textContent=s),this.options.displayTitle||this.options.addTitle){this.options.addTitle&&console.warn("[Multiple-Select-Vanilla] Please note that the `addTitle` option was replaced with `displayTitle`.");let u=this.options.useSelectOptionLabel||this.options.useSelectOptionLabelToHtml?"value":"text";o.title=this.getSelects(u).join(this.options.displayDelimiter)}}let r=this.getSelects().join("");if(this.options.single)this.elm.value=r;else{let u=this.elm.options;for(let a=0,h=u.length;a<h;a++){let v=r.indexOf(u[a].value)>=0;u[a].selected=v}}n||this.elm.dispatchEvent(new Event("change"))}updateSelected(){var t;for(let e=this.updateDataStart;e<this.updateDataEnd;e++){let o=this.updateData[e],i=this.dropElm.querySelector(`input[data-key=${o._key}]`);if(i){i.checked=o.selected;let s=i.closest("li");s&&(o.selected&&!s.classList.contains("selected")?s.classList.add("selected"):o.selected||s.classList.remove("selected"))}}let n=((t=this.data)==null?void 0:t.filter(e=>e.visible).length)===0;this.selectAllElm&&(this.selectAllElm.checked=this.allSelected,bo(this.selectAllElm.closest("li"),!n)),bo(this.noResultsElm,n),this.virtualScroll&&(this.virtualScroll.rows=this.getListRows())}getOptions(n=!0){let t=Object.assign({},this.options);return delete t.data,n?sn(t):this.options}refreshOptions(n){zc(this.options,n,!0)||(this.options=Object.assign(this.options,n),this.destroy(!1),this.init())}getDropElement(){return this.dropElm}getParentElement(){return this.parentElm}getSelects(n="value"){let t=[];for(let e of this.data||[])if(e.type==="optgroup"){let o=e.children.filter(i=>i==null?void 0:i.selected);if(!o.length)continue;if(n==="value"||this.options.single)t.push(...o.map(i=>n==="value"&&i._value||i[n]));else{let i=[];i.push("["),i.push(e.label),i.push(`: ${o.map(s=>s[n]).join(", ")}`),i.push("]"),t.push(i.join(""))}}else e.selected&&t.push(n==="value"&&e._value||e[n]);return t}setSelects(n,t="value",e=!1){let o=!1,i=s=>{for(let l of s){let r=!1;t==="text"?r=n.includes(l.textContent.trim()):(r=n.includes(l._value||l.value),!r&&l.value===+l.value+""&&(r=n.includes(+l.value))),l.selected!==r&&(o=!0),l.selected=r}};for(let s of this.data||[])s.type==="optgroup"?i(s.children):i([s]);o&&(this.initSelected(e),this.updateSelected(),this.update(e))}enable(){var n;(n=this.choiceElm)==null||n.classList.remove("disabled")}disable(){var n;(n=this.choiceElm)==null||n.classList.add("disabled")}check(n){let t=me(this.data,"value",n);t&&this._check(t,!0)}uncheck(n){let t=me(this.data,"value",n);t&&this._check(t,!1)}_check(n,t){this.options.single&&this._checkAll(!1,!0),n.selected=t,this.initSelected(),this.updateSelected(),this.update()}checkAll(){this._checkAll(!0)}uncheckAll(){this._checkAll(!1)}_checkAll(n,t){for(let e of this.data||[])e.type==="optgroup"?this._checkGroup(e,n,!0):!e.disabled&&!e.divider&&(t||e.visible)&&(e.selected=n);t||(this.initSelected(),this.updateSelected(),this.update())}_checkGroup(n,t,e){n.selected=t,n.children.forEach(o=>{o&&!o.disabled&&!o.divider&&(e||o.visible)&&(o.selected=t)}),e||(this.initSelected(),this.updateSelected(),this.update())}checkInvert(){if(!this.options.single){for(let n of this.data||[])if(n.type==="optgroup")for(let t of n.children)t&&(t.divider||(t.selected=!t.selected));else n&&!n.divider&&(n.selected=!n.selected);this.initSelected(),this.updateSelected(),this.update()}}focus(){var n;(n=this.choiceElm)==null||n.focus(),this.options.onFocus()}blur(){var n;(n=this.choiceElm)==null||n.blur(),this.options.onBlur()}refresh(){this.destroy(!1),this.init()}filter(n){var o;let t=((o=this.searchInputElm)==null?void 0:o.value.trim())??"",e=t.toLowerCase();if(this.filterText!==e){this.filterText=e;for(let i of this.data||[])if(i.type==="optgroup")if(this.options.filterGroup){let s=`${(i==null?void 0:i.label)??""}`;if(i!=null){let l=this.options.customFilter(Tt(s.toLowerCase()),Tt(e),s,t);i.visible=l;for(let r of i.children)r&&(r.visible=l)}}else{for(let s of i.children)if(s!=null){let l=`${(s==null?void 0:s.text)??""}`;s.visible=this.options.customFilter(Tt(l.toLowerCase()),Tt(e),l,t)}i.visible=i.children.filter(s=>s==null?void 0:s.visible).length>0}else{let s=`${(i==null?void 0:i.text)??""}`;i.visible=this.options.customFilter(Tt(s.toLowerCase()),Tt(e),s,t)}this.initListItems(),this.initSelected(n),this.updateSelected(),n||this.options.onFilter(e)}}adjustDropHeight(n){var u,a,h,v;let t=n!=="top",e=((u=this.filterParentElm)==null?void 0:u.getBoundingClientRect().height)??0,o=((a=this.okButtonElm)==null?void 0:a.getBoundingClientRect().height)??0,i=this.options.single?0:((h=this.selectAllParentElm)==null?void 0:h.getBoundingClientRect().height)??0,s=e+o+i+5,{bottom:l,top:r}=qe(this.parentElm),p=this.options.maxHeight;if(t?p=l-s-this.options.adjustedHeightPadding:p=r-s-this.options.adjustedHeightPadding,!this.options.maxHeight||this.options.maxHeight&&p<this.options.maxHeight){let b=(v=this.dropElm)==null?void 0:v.querySelector("ul");return b&&(b.style.maxHeight=`${p}px`),!0}return!1}adjustDropPosition(n){let t="bottom";if(this.dropElm&&this.parentElm){let{bottom:e,top:o}=qe(this.dropElm),{top:i,left:s}=on(this.parentElm),l=this.dropElm.getBoundingClientRect().height,r=this.dropElm.getBoundingClientRect().width,p=document.body.offsetWidth||window.innerWidth,u=this.parentElm.getBoundingClientRect().width;if(e>l)t="bottom";else if(l>e&&o>e){if(this.options.container){let a=i-l;a<0&&(a=0),(a>0||n)&&(t="top",this.dropElm.style.top=`${a<0?0:a}px`)}else t="top",this.dropElm.classList.add(t);this.dropElm.classList.remove("bottom")}if(p-r<s){let a=s-(r-u);this.dropElm.style.left=`${a}px`}}return t}adjustDropWidthByText(){let n=this.parentElm.scrollWidth;(this.options.dropWidth||this.options.width)&&(n=this.options.dropWidth||this.options.width||0);let t=this.dropElm.querySelector(".ms-select-all span"),e=this.dropElm.querySelector("ul"),o=26,i=(t==null?void 0:t.clientWidth)??0+o,s=e.scrollHeight>e.clientHeight?this.getScrollbarWidth():0,l=0;this.dropElm.querySelectorAll("li label").forEach(r=>{r.scrollWidth>l&&(l=r.scrollWidth)}),l+=o+s,l<i&&(l=i),this.options.maxWidth&&l>this.options.maxWidth&&(l=this.options.maxWidth),this.options.minWidth&&l<this.options.minWidth&&(l=this.options.minWidth),(n==="100%"||+n<l)&&(this.dropElm.style.width=`${l}px`,this.dropElm.style.maxWidth=`${l}px`)}getScrollbarWidth(){var i;let n=document.createElement("div");n.style.visibility="hidden",n.style.width="100px",document.body.appendChild(n);let t=n.offsetWidth;n.style.overflow="scroll";let e=document.createElement("div");e.style.width="100%",n.appendChild(e);let o=e.offsetWidth;return(i=n.parentNode)==null||i.removeChild(n),t-o}formatAllSelected(){return this.options.allSelectedText||this.options.formatAllSelected()}formatCountSelected(n,t){return this.options.countSelectedText?this.options.countSelectedText.replace("#",`${n}`).replace("%",`${t}`):this.options.formatCountSelected(n,t)}formatNoMatchesFound(){return this.options.noMatchesFoundText||this.options.formatNoMatchesFound()}formatOkButton(){return this.options.okButtonText||this.options.formatOkButton()}formatSelectAll(){return this.options.selectAllText||this.options.formatSelectAll()}},m=function(n,t){return typeof n=="string"?ze(document.querySelectorAll(n),t):n instanceof Node?ze([n],t):ze(n,t)};function ze(n,t){let e=Array.from(n),o=[];for(let i=0;i<e.length;i++){let s=e[i];try{s._multipleSelect!==void 0&&(s._multipleSelect.destroy(),delete s._multipleSelect),s._multipleSelect=new Qc(s,t||{}),s._multipleSelect.init();let l=s._multipleSelect.getOptions(!1);l.onHardDestroy=()=>delete s._multipleSelect,l.onAfterHardDestroyed=()=>o[i]=null,o.push(s._multipleSelect)}catch(l){console.error(l)}}return o.length===1?o[0]:o}m.defaults=U.DEFAULTS;m.locales={...yi};m.methods=U.METHODS;typeof window<"u"&&(window.multipleSelect=m);let Zc=class{mount(){m("#select1"),m("#select2",{placeholder:"Here is the placeholder via javascript"})}},Ai=class{constructor(){d(this,"ms",[])}mount(){this.ms=m(".multiple-select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},tu=class{constructor(){d(this,"ms",[])}mount(){this.ms=m(".multiple-select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},eu=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select",{multiple:!0,multipleWidth:60})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},nu=class{constructor(){d(this,"multiMs",[]);d(this,"singleMs")}mount(){this.multiMs=m(".select"),this.singleMs=m(".data",{data:[{value:1,text:"Options 1",selected:!0},{value:2,text:"Options 2"},{value:3,text:"Options 3"}]})}unmount(){var t;this.multiMs.forEach(e=>e.destroy()),this.multiMs=[],(t=this.singleMs)==null||t.destroy(),this.singleMs=void 0}},ou=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select")}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},iu=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},su=class{constructor(){d(this,"btnElm");d(this,"ms",[]);d(this,"clickListener",()=>{const t=this.serialize(document.querySelector("form"));alert(t)})}mount(){this.ms=m("select"),this.btnElm=document.querySelector(".submit7"),this.btnElm.addEventListener("click",this.clickListener)}unmount(){this.btnElm.removeEventListener("click",this.clickListener),this.ms.forEach(t=>t.destroy()),this.ms=[]}serialize(t){let e=[];return t.querySelectorAll("[name]").forEach(o=>{const i=Array.from(o.selectedOptions);for(const s of i)e.push(o.name+"="+s.value)}),e.length>0?e.join("&"):!1}},lu=class{constructor(){d(this,"ms1");d(this,"ms2");d(this,"ms3");d(this,"ms4");d(this,"ms5")}mount(){this.ms1=m("#basic",{dataTest:"select1",data:[{text:"January",value:1},{text:"February",value:2},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}),this.ms2=m("#object",{dataTest:"select2",data:{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}}),this.ms3=m("#string",{dataTest:"select3",data:["January","February","March"]}),this.ms4=m("#number",{dataTest:"select4",data:[1,2,3]}),this.ms5=m("#group",{dataTest:"select5",data:[{type:"optgroup",label:"Group 1",children:[{text:"January",value:1,selected:!0},{text:"February",value:2,disabled:!0},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6}]},{type:"optgroup",label:"Group 2",children:[{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}]})}unmount(){var t,e,o,i,s;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),(s=this.ms5)==null||s.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0}};(()=>{var n=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};n.locales={["en-US"]:{formatSelectAll(){return"[Select all]"},formatAllSelected(){return"All selected"},formatCountSelected(a,h){return a+" of "+h+" selected"},formatNoMatchesFound(){return"No matches found"},formatOkButton(){return"OK"}}},n.locales;var t=window.multipleSelect;t.locales["es-ES"]={formatSelectAll(){return"[Seleccionar todo]"},formatAllSelected(){return"Todos seleccionados"},formatCountSelected(a,h){return a+" de "+h+" seleccionado"},formatNoMatchesFound(){return"No se encontraron coincidencias"},formatOkButton(){return"Cerrar"}},t.locales;var e=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};e.locales["fr-FR"]={formatSelectAll(){return"[Tout sélectionner]"},formatAllSelected(){return"Tous sélectionnés"},formatCountSelected(a,h){return a+" de "+h+" sélectionnés"},formatNoMatchesFound(){return"Aucun résultat"},formatOkButton(){return"Fermer"}},e.locales;var o=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};o.locales["hu-HU"]={formatSelectAll(){return"[Összes kiválasztása]"},formatAllSelected(){return"Összes kiválasztva"},formatCountSelected(a,h){return a+" / "+h+" kiválasztva"},formatNoMatchesFound(){return"Nincs találat"},formatOkButton(){return"Bezár"}},o.locales;var i=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};i.locales["it-IT"]={formatSelectAll(){return"[Seleziona tutti]"},formatAllSelected(){return"Tutti selezionati"},formatCountSelected(a,h){return a+" di "+h+" selezionati"},formatNoMatchesFound(){return"Nessun risultato"},formatOkButton(){return"Chiudere"}},i.locales;var s=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};s.locales["pt-BR"]={formatSelectAll(){return"[Selecionar todos]"},formatAllSelected(){return"Todos selecionados"},formatCountSelected(a,h){return a+" de "+h+" selecionado(s)"},formatNoMatchesFound(){return"Nenhum resultado encontrado"},formatOkButton(){return"Fechar"}},s.locales;var l=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};l.locales["ru-RU"]={formatSelectAll(){return"[Выбрать все]"},formatAllSelected(){return"Выбрано все"},formatCountSelected(a,h){return a+" из "+h+" выбрано"},formatNoMatchesFound(){return"Совпадений не найдено"},formatOkButton(){return"Закрывать"}},l.locales;var r=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};r.locales["vi-VN"]={formatSelectAll(){return"[Tất cả]"},formatAllSelected(){return"Chọn tất cả"},formatCountSelected(a,h){return"Đã chọn "+a+" trong "+h},formatNoMatchesFound(){return"Không tìm thấy kết quả."},formatOkButton(){return"Đóng"}},r.locales;var p=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};p.locales["zh-CN"]={formatSelectAll(){return"[全选]"},formatAllSelected(){return"已选择所有记录"},formatCountSelected(a,h){return"已从"+h+"条记录中选择"+a+"条"},formatNoMatchesFound(){return"没有找到记录"},formatOkButton(){return"关闭"}},p.locales;var u=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}};u.locales["zh-TW"]={formatSelectAll(){return"[全選]"},formatAllSelected(){return"已選擇所有記錄"},formatCountSelected(a,h){return"已從"+h+"條記錄中選擇"+a+"條"},formatNoMatchesFound(){return"沒有找到記錄"},formatOkButton(){return"关闭"}},u.locales})();let ru=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){const t=document.querySelector("#locale");t.addEventListener("change",e=>{this.updateLocale(e.target.value)}),this.ms1=m(t),this.ms2=m("#select",{filter:!0,showOkButton:!0})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}updateLocale(t){var e,o;(e=this.ms2)==null||e.destroy(),(o=this.ms2)==null||o.refreshOptions({locale:t})}},au=class{constructor(){d(this,"ms1")}mount(){for(var t=[],e=0;e<1e4;e++)t.push(e);this.ms1=m("#select",{filter:!0,data:t})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}};let pu=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}};let cu=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){this.ms1=m("#single",{singleRadio:!0}),this.ms2=m("#multiple",{showOkButton:!0})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},uu=class{constructor(){d(this,"createBtnElm");d(this,"destroyBtnElm");d(this,"ms1")}mount(){this.createBtnElm=document.querySelector("#createBtn"),this.destroyBtnElm=document.querySelector("#destroyBtn"),this.createBtnElm.addEventListener("click",this.createMultipleSelect.bind(this)),this.destroyBtnElm.addEventListener("click",this.destroyMultiSelect.bind(this))}createMultipleSelect(){this.ms1=m("#select1",{name:"my-select",single:!1,useSelectOptionLabelToHtml:!0,data:[{text:'<i class="fa fa-star"></i> January',value:1},{text:"February",value:2},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}),this.ms1.setSelects([1,3,4])}destroyMultiSelect(){var t;console.log("destroy"),(t=this.ms1)==null||t.destroy(),this.ms1=void 0}unmount(){this.destroyMultiSelect(),this.createBtnElm.removeEventListener("click",this.createMultipleSelect.bind(this)),this.destroyBtnElm.removeEventListener("click",this.destroyMultiSelect.bind(this))}},du=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){this.ms1=m("#select1"),this.ms2=m("#select2",{placeholder:"Here is the placeholder via javascript"})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},hu=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select",{singleRadio:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},mu=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{selectAll:!1})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},vu=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{multiple:!0,hideOptgroupCheckboxes:!0,multipleWidth:60})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},bu=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{multiple:!0,width:500,multipleWidth:70,dropWidth:580})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},fu=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{maxHeight:140})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},gu=class{constructor(){d(this,"ms",[])}mount(){const t=document.querySelector("#number");this.ms=m("select",{maxHeight:+t.value,maxHeightUnit:"row"}),t.addEventListener("change",()=>{this.ms.forEach(e=>{e.refreshOptions({maxHeight:+t.value,maxHeightUnit:"row"})})})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Eu=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{position:"top"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},_u=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{displayValues:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},yu=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{displayTitle:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},wu=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{displayDelimiter:" | "})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Au=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{minimumCountSelected:8})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Su=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{ellipsis:!0,minimumCountSelected:5})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Ou=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{isOpen:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Cu=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{keepOpen:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Tu=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{openOnHover:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},ku=class{constructor(){d(this,"ms1");d(this,"ms2");d(this,"ms3");d(this,"ms4")}mount(){this.ms1=m(".select1"),this.ms2=m(".select2"),this.ms3=m(".select3",{container:".my-container"}),this.ms4=m(".select4",{autoAdjustDropPosition:!0,container:"body"})}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},xu=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select",{filter:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Du=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{filter:!0,filterGroup:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Nu=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{filter:!0,filterPlaceholder:"The filter placeholder"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Mu=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select",{filter:!0,filterAcceptOnEnter:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Lu=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select",{filterByDataLength:10})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},$u=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{filter:!0,customFilter:(t,e,o,i)=>document.querySelector("input").checked?o.indexOf(i)===0:t.indexOf(e)===0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Fu=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select",{showClear:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Bu=class{constructor(){d(this,"ms",[])}mount(){this.ms.push(m(".select1",{showOkButton:!0})),this.ms.push(m(".select2",{showOkButton:!0})),this.ms.push(m(".select3",{showOkButton:!0,filter:!0})),this.ms.push(m(".select4",{showOkButton:!0}))}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Iu=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){this.ms1=m("#basic",{styler:t=>+((t==null?void 0:t.value)??0)==1?"background-color: #ffee00; color: #ff0000;":+((t==null?void 0:t.value)??0)==6?"background-color: #000; color: #fff;":null}),this.ms2=m("#group",{styler:t=>(t==null?void 0:t.type)==="optgroup"?"color: #777; font-weight: normal;":+((t==null?void 0:t.value)??0)==1?"color: blue;":null})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},Ru=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{textTemplate:t=>'<i class="fa fa-star"></i>'+t.innerHTML})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Pu=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{labelTemplate:t=>'<i class="fa fa-star"></i>'+t.getAttribute("label")})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Hu=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select",{autoAdjustDropPosition:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},ju=class{constructor(){d(this,"ms1");d(this,"ms2");d(this,"ms3");d(this,"ms4")}mount(){this.ms1=m("#select1",{autoAdjustDropWidthByTextSize:!0,autoAdjustDropHeight:!0,position:"top",showOkButton:!0}),this.ms2=m("#select2",{autoAdjustDropHeight:!0,position:"top",showOkButton:!0}),this.ms3=m("#select3",{autoAdjustDropHeight:!0,filter:!0,position:"top"}),this.ms4=m("#select4")}unmount(){var t,e,o,i;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(o=this.ms3)==null||o.destroy(),(i=this.ms4)==null||i.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},Vu=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){this.ms1=m("#select1",{useSelectOptionLabel:!0}),this.ms2=m("#select2",{useSelectOptionLabelToHtml:!0,data:[{text:'<i class="fa fa-star"></i> January',value:'<i class="fa fa-star"></i>1',selected:!0},{text:"February",value:"2"},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},Gu=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("#select1",{placeholder:'Placeholder with cross-site scripting code...<img src="not-found" onerror=alert("Hacked")>',sanitizer:t=>typeof t=="string"?decodeURIComponent(t).replace(/(\b)(on[a-z]+)(\s*)=|javascript:([^>]*)[^>]*|(<\s*)(\/*)script([<>]*).*(<\s*)(\/*)script(>*)|(&lt;)(\/*)(script|script defer)(.*)(&gt;|&gt;">)/gi,""):t})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Wu=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{filter:!0}),document.querySelector("#getOptions").addEventListener("click",()=>{alert(JSON.stringify(this.ms1.getOptions(),null,4))})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Ju=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{filter:!0}),document.querySelector("#refreshOptions").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.refreshOptions({filter:!1})})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Uu=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{filter:!0}),document.querySelector("#setSelectsBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.setSelects([1,3])}),document.querySelector("#getSelectsBtn").addEventListener("click",()=>{var t,e;alert("Selected values: "+((t=this.ms1)==null?void 0:t.getSelects())),alert("Selected texts: "+((e=this.ms1)==null?void 0:e.getSelects("text")))})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},qu=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select"),document.querySelector("#enableBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.enable()}),document.querySelector("#disableBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.disable()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Ku=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select"),document.querySelector("#openBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.open()}),document.querySelector("#closeBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.close()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},zu=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select"),document.querySelector("#checkBtn").addEventListener("click",()=>{for(const t of this.ms)t.check(2)}),document.querySelector("#uncheckBtn").addEventListener("click",()=>{for(const t of this.ms)t.uncheck(2)})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Yu=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select"),document.querySelector("#checkAllBtn").addEventListener("click",()=>{for(const t of this.ms)t.checkAll()}),document.querySelector("#uncheckAllBtn").addEventListener("click",()=>{for(const t of this.ms)t.uncheckAll()})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Xu=class{constructor(){d(this,"ms",[])}mount(){this.ms=m("select"),document.querySelector("#checkInvert").addEventListener("click",()=>{for(const t of this.ms)t.checkInvert()})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Qu=class{constructor(){d(this,"ms1")}mount(){this.ms1=m("select"),document.querySelector("#focusBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.focus()}),document.querySelector("#blurBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.blur()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Zu=class{constructor(){d(this,"ms1")}mount(){const t=document.querySelector("select");this.ms1=m(t),document.querySelector("#refreshAdd").addEventListener("click",()=>{var r;const e=document.querySelector("#refreshInput"),o=document.querySelector("#refreshSelected"),i=document.querySelector("#refreshDisabled"),s=e.value.trim(),l=document.createElement("option");if(l.value=s,l.text=s,!s){e.focus();return}o.checked&&(l.selected=!0),i.checked&&(l.disabled=!0),e.value="",t.appendChild(l),(r=this.ms1)==null||r.refresh()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},td=class{constructor(){d(this,"buildBtnElm");d(this,"destroyBtnElm");d(this,"ms1")}mount(){this.buildBtnElm=document.querySelector("#buildBtn"),this.destroyBtnElm=document.querySelector("#destroyBtn"),this.destroyBtnElm.addEventListener("click",this.destroyMultiSelect.bind(this)),this.buildBtnElm.addEventListener("click",this.createMultipleSelect.bind(this)),this.ms1=m("select")}createMultipleSelect(){this.ms1=m("select")}destroyMultiSelect(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=null}unmount(){this.destroyMultiSelect(),this.buildBtnElm.removeEventListener("click",this.destroyMultiSelect.bind(this)),this.destroyBtnElm.removeEventListener("click",this.createMultipleSelect.bind(this))}},ed=class{constructor(){d(this,"logElm");d(this,"ms1")}mount(){this.logElm=document.querySelector("textarea"),this.ms1=m("select",{filter:!0,onOpen:()=>{this.log(`onOpen event fire!
`)},onClose:()=>{this.log(`onClose event fire!
`)},onCheckAll:()=>{this.log(`onCheckAll event fire!
`)},onUncheckAll:()=>{this.log(`onUncheckAll event fire!
`)},onFocus:()=>{this.log(`onFocus event fire!
`)},onBlur:()=>{this.log(`onBlur event fire!
`)},onOptgroupClick:t=>{this.log("onOptgroupClick event fire! view: "+JSON.stringify(t)+`
`)},onClick:t=>{this.log("onClick event fire! view: "+JSON.stringify(t)+`
`)},onFilter:t=>{this.log("onFilter event fire! text: "+t+`
`)},onAfterCreate:()=>{this.log(`onAfterCreate event fire!
`)}})}log(t){this.logElm.textContent+=t,this.logElm.scrollTo(0,this.logElm.scrollHeight)}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}};class nd{constructor(){d(this,"ms1")}mount(){this.ms1=m("select",{filter:!0,showOkButton:!0,formatAllSelected(){return"Tous sélectionnés"},formatCountSelected(t,e){return t+" de "+e+" sélectionnés"},formatNoMatchesFound(){return"Aucun résultat"},formatOkButton(){return"Fermer"},formatSelectAll(){return"[Tout sélectionner]"}})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}}const fo=[{name:"getting-started",view:"/src/getting-started.html",viewModel:Zc,title:"Getting Started"},{name:"examples",view:"/src/examples/example01.html",viewModel:Ai,title:"Examples"}],go=[{name:"Welcomes",routes:[{name:"example01",view:"/src/examples/example01.html",viewModel:Ai,title:"Single Select"},{name:"example02",view:"/src/examples/example02.html",viewModel:tu,title:"Multiple Select"},{name:"example03",view:"/src/examples/example03.html",viewModel:eu,title:"Multiple Items"},{name:"example04",view:"/src/examples/example04.html",viewModel:nu,title:"Auto Width"},{name:"example05",view:"/src/examples/example05.html",viewModel:ou,title:"Disabled Select"},{name:"example06",view:"/src/examples/example06.html",viewModel:iu,title:"Selected/Disabled Options"},{name:"example07",view:"/src/examples/example07.html",viewModel:su,title:"Submit Select"},{name:"example08",view:"/src/examples/example08.html",viewModel:lu,title:"The Data"},{name:"example09",view:"/src/examples/example09.html",viewModel:ru,title:"Locale"},{name:"example10",view:"/src/examples/example10.html",viewModel:au,title:"Large Select"},{name:"example11",view:"/src/examples/example11.html",viewModel:pu,title:"The Themes"},{name:"example12",view:"/src/examples/example12.html",viewModel:cu,title:"Checkbox/Radio Icons"},{name:"example13",view:"/src/examples/example13.html",viewModel:uu,title:"Dynamically Create Select"}]},{name:"Options",routes:[{name:"options01",view:"/src/options/options01.html",viewModel:du,title:"The Placeholder"},{name:"options02",view:"/src/options/options02.html",viewModel:hu,title:"Single Radio"},{name:"options03",view:"/src/options/options03.html",viewModel:mu,title:"Hide Select All"},{name:"options04",view:"/src/options/options04.html",viewModel:vu,title:"Hide Optgroup Checkboxes"},{name:"options05",view:"/src/options/options05.html",viewModel:bu,title:"Custom Dropdown Width"},{name:"options06",view:"/src/options/options06.html",viewModel:fu,title:"Max Height"},{name:"options07",view:"/src/options/options07.html",viewModel:gu,title:"Max Height Unit"},{name:"options08",view:"/src/options/options08.html",viewModel:Eu,title:"The Position"},{name:"options09",view:"/src/options/options09.html",viewModel:_u,title:"Display Values"},{name:"options10",view:"/src/options/options10.html",viewModel:yu,title:"Display Title"},{name:"options11",view:"/src/options/options11.html",viewModel:wu,title:"Display Delimiter"},{name:"options12",view:"/src/options/options12.html",viewModel:Au,title:"Minimum Count Selected"},{name:"options13",view:"/src/options/options13.html",viewModel:Su,title:"The Ellipsis"},{name:"options14",view:"/src/options/options14.html",viewModel:Ou,title:"Is Open"},{name:"options15",view:"/src/options/options15.html",viewModel:Cu,title:"Keep Open"},{name:"options16",view:"/src/options/options16.html",viewModel:Tu,title:"Open On Hover"},{name:"options17",view:"/src/options/options17.html",viewModel:ku,title:"The Container"},{name:"options18",view:"/src/options/options18.html",viewModel:xu,title:"The Filter"},{name:"options19",view:"/src/options/options19.html",viewModel:Du,title:"Filter Only Optgroup"},{name:"options20",view:"/src/options/options20.html",viewModel:Nu,title:"Filter Placeholder"},{name:"options21",view:"/src/options/options21.html",viewModel:Mu,title:"Filter Accept On Enter"},{name:"options22",view:"/src/options/options22.html",viewModel:Lu,title:"Filter By Data Length"},{name:"options23",view:"/src/options/options23.html",viewModel:$u,title:"Custom Filter"},{name:"options24",view:"/src/options/options24.html",viewModel:Fu,title:"Show Clear"},{name:"options25",view:"/src/options/options25.html",viewModel:Bu,title:"Show OK Button"},{name:"options26",view:"/src/options/options26.html",viewModel:Iu,title:"The Styler"},{name:"options27",view:"/src/options/options27.html",viewModel:Ru,title:"Text Template"},{name:"options28",view:"/src/options/options28.html",viewModel:Pu,title:"Label Template"},{name:"options29",view:"/src/options/options29.html",viewModel:Hu,title:"Auto-Adjust Drop Position"},{name:"options30",view:"/src/options/options30.html",viewModel:ju,title:"Auto-Adjust Drop Height/Width"},{name:"options31",view:"/src/options/options31.html",viewModel:Vu,title:"Use Select Option as Label"},{name:"options32",view:"/src/options/options32.html",viewModel:Gu,title:"Sanitizer"}]},{name:"Methods",routes:[{name:"methods01",view:"/src/methods/methods01.html",viewModel:Wu,title:"The getOptions"},{name:"methods02",view:"/src/methods/methods02.html",viewModel:Ju,title:"The refreshOptions"},{name:"methods03",view:"/src/methods/methods03.html",viewModel:Uu,title:"The setSelects/getSelects"},{name:"methods04",view:"/src/methods/methods04.html",viewModel:qu,title:"The enable/disable"},{name:"methods05",view:"/src/methods/methods05.html",viewModel:Ku,title:"The open/close"},{name:"methods06",view:"/src/methods/methods06.html",viewModel:zu,title:"The check/uncheck"},{name:"methods07",view:"/src/methods/methods07.html",viewModel:Yu,title:"The checkAll/uncheckAll"},{name:"methods08",view:"/src/methods/methods08.html",viewModel:Xu,title:"The checkInvert"},{name:"methods09",view:"/src/methods/methods09.html",viewModel:Qu,title:"The focus/blur"},{name:"methods10",view:"/src/methods/methods10.html",viewModel:Zu,title:"The refresh"},{name:"methods11",view:"/src/methods/methods11.html",viewModel:td,title:"The destroy"}]},{name:"Events",routes:[{name:"events",view:"/src/events/events.html",viewModel:ed,title:"The Events"}]},{name:"I18N",routes:[{name:"i18n",view:"/src/i18n/i18n.html",viewModel:nd,title:"The i18n"}]}],od=Object.assign({"/src/events/events.html":Mi,"/src/examples/example01.html":Li,"/src/examples/example02.html":$i,"/src/examples/example03.html":Fi,"/src/examples/example04.html":Bi,"/src/examples/example05.html":Ii,"/src/examples/example06.html":Ri,"/src/examples/example07.html":Pi,"/src/examples/example08.html":Hi,"/src/examples/example09.html":ji,"/src/examples/example10.html":Vi,"/src/examples/example11.html":Gi,"/src/examples/example12.html":Wi,"/src/examples/example13.html":Ji,"/src/getting-started.html":Ui,"/src/i18n/i18n.html":qi,"/src/main.html":Eo,"/src/methods/methods01.html":Ki,"/src/methods/methods02.html":zi,"/src/methods/methods03.html":Yi,"/src/methods/methods04.html":Xi,"/src/methods/methods05.html":Qi,"/src/methods/methods06.html":Zi,"/src/methods/methods07.html":ts,"/src/methods/methods08.html":es,"/src/methods/methods09.html":ns,"/src/methods/methods10.html":os,"/src/methods/methods11.html":is,"/src/options/options01.html":ss,"/src/options/options02.html":ls,"/src/options/options03.html":rs,"/src/options/options04.html":as,"/src/options/options05.html":ps,"/src/options/options06.html":cs,"/src/options/options07.html":us,"/src/options/options08.html":ds,"/src/options/options09.html":hs,"/src/options/options10.html":ms,"/src/options/options11.html":vs,"/src/options/options12.html":bs,"/src/options/options13.html":fs,"/src/options/options14.html":gs,"/src/options/options15.html":Es,"/src/options/options16.html":_s,"/src/options/options17.html":ys,"/src/options/options18.html":ws,"/src/options/options19.html":As,"/src/options/options20.html":Ss,"/src/options/options21.html":Os,"/src/options/options22.html":Cs,"/src/options/options23.html":Ts,"/src/options/options24.html":ks,"/src/options/options25.html":xs,"/src/options/options26.html":Ds,"/src/options/options27.html":Ns,"/src/options/options28.html":Ms,"/src/options/options29.html":Ls,"/src/options/options30.html":$s,"/src/options/options31.html":Fs,"/src/options/options32.html":Bs});class id{constructor(){d(this,"loading",!0);d(this,"currentModel");d(this,"currentRouter");d(this,"defaultRouteName","getting-started");d(this,"stateBangChar","#/");d(this,"baseUrl",window.location.origin+window.location.pathname);d(this,"viewModelObj",{})}async init(){const t=window.location;document.querySelector("#app").innerHTML=Eo;let e=t.hash.replace(this.stateBangChar,"");(!e||e==="/"||e==="#")&&(e=this.defaultRouteName),this.createRouteLinks(),this.loadRoute(e),Array.from(document.querySelectorAll(".panel-wm-left a.nav-link,.navbar-nav a.nav-link")).forEach(o=>{e.includes(o.id)&&o.classList.add("active")}),window.onpopstate=()=>{const i=window.location.hash.replace(this.stateBangChar,"");this.removeAllActiveLinks();const s=document.querySelector(`#${i}`);s&&(s.scrollIntoView(),s.classList.add("active")),this.loadRoute(i||this.defaultRouteName,!1)}}createRouteLinks(){var t,e,o;for(const i of fo){const s=x("li",{className:"nav-item"}),l=x("a",{id:i.name,className:"nav-link",textContent:i.title});l.addEventListener("click",this.clickEventListener.bind(this)),s.appendChild(l),(t=document.querySelector(".navbar-nav"))==null||t.appendChild(s)}for(const i of go){const s=x("li",{className:"m-1"}),l=x("p",{className:"navbar-vertical-label mb-1",textContent:i.name});s.appendChild(l),(e=document.querySelector(".nav-pills"))==null||e.appendChild(s);for(const r of i.routes){const p=x("li",{className:"nav-item"}),u=x("a",{id:r.name,className:"nav-link",textContent:r.title});u.addEventListener("click",this.clickEventListener.bind(this)),p.appendChild(u),(o=document.querySelector(".nav-pills"))==null||o.appendChild(p)}}}async loadRoute(t,e=!0){var s;const o=document.querySelector(".panel-wm-content");o.innerHTML="",o.classList.add("cloak");let i=fo.find(l=>l.name===t);if((i==null?void 0:i.name)==="examples"){const l=document.querySelector(".nav-pills .nav-item a.nav-link");l==null||l.classList.add("active")}else for(const l of go){const r=l.routes.find(p=>p.name===t);r&&(i=r)}if(this.currentModel&&this.unmountCurrentVM(this.currentModel,this.currentRouter),i){this.currentRouter=i,document.querySelector(".panel-wm-content").innerHTML=od[i.view];const l=new i.viewModel;this.currentModel=l,window[i.name]=(s=l.mount)==null?void 0:s.call(l),window.onbeforeunload=()=>{var r;o.classList.add("cloak"),(r=l.unmount)==null||r.call(l),this.removeAllActiveLinks(!0),this.unmountAll(),i!=null&&i.name&&delete window[i.name]}}e&&window.history.pushState({},t,`${this.baseUrl}${this.stateBangChar}${t}`),document.title=`Multiple-Select-Vanilla · ${t}`,o.classList.remove("cloak")}async clickEventListener(t){this.removeAllActiveLinks();const e=t.target;e.classList.toggle("active"),this.loadRoute(e.id)}removeAllActiveLinks(t=!1){document.querySelectorAll(".panel-wm-left a.nav-link,.navbar-nav a.nav-link").forEach(e=>{e.classList.remove("active"),t&&e.addEventListener("click",this.clickEventListener.bind(this))})}unmountCurrentVM(t,e){var o;(o=t.unmount)==null||o.call(t),e&&delete window[e.name]}unmountAll(){for(const t of Object.keys(this.viewModelObj)){const e=this.viewModelObj[t];if(typeof(e==null?void 0:e.unmount)=="function"){e==null||e.unmount();for(const o of Object.keys(e))e[o]=null}window[t]=null,this.viewModelObj[t]=null,delete window[t],delete this.viewModelObj[t]}}}const sd=new id;sd.init();
