var xi=Object.defineProperty;var Ni=(o,t,e)=>t in o?xi(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var d=(o,t,e)=>(Ni(o,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Li=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">The Events</h2>
    <div class="demo-subtitle">Multiple Select has some callback events.</div>
  </div>
  <div class="col-md-5"></div>
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
`,ki=`<div class="row">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Single Select</h2>
    <div class="demo-subtitle">Single select without any options.</div>
  </div>
  <div class="col-md-5"></div>
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

  <div class="mb-3 row">
    <label class="col-sm-2"> Multiple Select </label>

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
`,$i=`<div class="row">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Multiple Select</h2>
    <div class="demo-subtitle">Multiple select without any options.</div>
  </div>
  <div class="col-md-5"></div>
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
`,Mi=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Multiple Items</h2>
    <div class="demo-subtitle">Use <code>multiple</code> and <code>multipleWidth</code> options to enable multiple items.</div>
  </div>
  <div class="col-md-5"></div>
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
`,Fi=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Auto Width</h2>
    <div class="demo-subtitle">Auto width by default without setting width style.</div>
  </div>
  <div class="col-md-5"></div>
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
`,Ii=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Disabled Select</h2>
    <div class="demo-subtitle">Show a disabled select width <code>disabled</code> attribute.</div>
  </div>
  <div class="col-md-5"></div>
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
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Selected/Disabled Options</h2>
    <div class="demo-subtitle">Selected or Disabled options.</div>
  </div>
  <div class="col-md-5"></div>
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
`,Bi=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Submit Select</h2>
    <div class="demo-subtitle">Submit select with <code>name</code> attribute in form.</div>
  </div>
  <div class="col-md-5"></div>
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
`,Pi=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">The Data</h2>
    <div class="demo-subtitle">Use <code>data</code> as data source.</div>
  </div>
  <div class="col-md-5"></div>
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
`,Hi=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">The Locale</h2>
    <div class="demo-subtitle">Use <code>locale</code> to set the locale.</div>
  </div>
  <div class="col-md-5"></div>
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
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Large Select</h2>
    <div class="demo-subtitle">Virtual scroll will be used with a large set of data</div>
  </div>
  <div class="col-md-5"></div>
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
`,ji=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">The Themes</h2>
    <div class="demo-subtitle">Multiple select with bootstrap theme.</div>
  </div>
  <div class="col-md-5"></div>
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
`,Gi=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Getting Started</h2>
  </div>
  <div class="col-md-5"></div>
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
    <h5>CDN <i class="fa fa-link"></i></h5>
    <p>
      The folks over at <a href="https://unpkg.com/multiple-select-vanilla">UNPKG</a> graciously provide CDN support for CSS and
      JavaScript of Multiple Select. Just use these CDN links.
    </p>
    <div style="background: #f7f7f7; padding: 10px">
      <pre style="margin-left: 0; padding-left: 0">
&lt;!-- Latest compiled and minified CSS -->
&lt;link rel="stylesheet" href="https://unpkg.com/multiple-select-vanilla@0.1.0/dist/multiple-select-vanilla.min.css" /&gt;

&lt;!-- Latest compiled and minified JavaScript --&gt;
&lt;script src="https://unpkg.com/multiple-select-vanilla@0.1.0/dist/multiple-select-vanilla.min.js"&gt;&lt;/script&gt;
</pre
      >
    </div>
  </section>

  <section>
    <h5>NPM</h5>
    <p>Install and manage Multiple Select's CSS, JavaScript using NPM.</p>

    <div style="background: #f7f7f7; padding: 10px">
      <pre> $ npm install multiple-select </pre>
    </div>
  </section>
</div>
`,Wi=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">The i18n</h2>
    <div class="demo-subtitle">Custom i18n options, for example French is used here.</div>
  </div>
  <div class="col-md-5"></div>
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
</div>
`,_n=`<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
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
`,Ui=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">The getOptions</h2>
    <div class="demo-subtitle">Use <code>multipleSelect('select').getOptions()</code> to get the options object.</div>
  </div>
  <div class="col-md-5"></div>
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
`,Ji=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">The refreshOptions</h2>
    <div class="demo-subtitle">
      Use <code>multipleSelect('select').refreshOptions({ filter: false })</code> to refresh the options object.
    </div>
  </div>
  <div class="col-md-5"></div>
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
`,qi=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">The setSelects/getSelects</h2>
    <div class="demo-subtitle">
      Use <code>multipleSelect('select').setSelects([])</code> and <code>multipleSelect('select').getSelects()</code> to set
      selects and get selects.
    </div>
  </div>
  <div class="col-md-5"></div>
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
`,Ki=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">The enable/disable</h2>
    <div class="demo-subtitle">
      Use <code>multipleSelect('select').enable()</code> and <code>multipleSelect('select').disable()</code> to enable and disable
      select.
    </div>
  </div>
  <div class="col-md-5"></div>
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
`,zi=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">The open/close</h2>
    <div class="demo-subtitle">
      Use <code>multipleSelect('select').open()</code> and <code>multipleSelect('select').close()</code> to open and close the
      select dropdown list.
    </div>
  </div>
  <div class="col-md-5"></div>
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
`,Yi=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">The check/uncheck</h2>
    <div class="demo-subtitle">
      Methods: <code>multipleSelect('select').check(2)</code> and <code>multipleSelect('select').uncheck(2)</code> to check and
      uncheck a select option.
    </div>
  </div>
  <div class="col-md-5"></div>
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
`,Xi=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">The checkAll/uncheckAll</h2>
    <div class="demo-subtitle">
      Use <code>multipleSelect('select').checkAll()</code> and <code>multipleSelect('select').uncheckAll()</code> to check and
      uncheck all options.
    </div>
  </div>
  <div class="col-md-5"></div>
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
`,Qi=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">The checkInvert</h2>
    <div class="demo-subtitle">Methods: <code>multipleSelect('select').checkInvert()</code> to invert check all items.</div>
  </div>
  <div class="col-md-5"></div>
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
`,Zi=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">The focus/blur</h2>
    <div class="demo-subtitle">
      Use <code>multipleSelect('select').focus()</code> and <code>multipleSelect('select').blur()</code> to focus and blur the
      select.
    </div>
  </div>
  <div class="col-md-5"></div>
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
`,ts=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">The refresh</h2>
    <div class="demo-subtitle">
      Use <code>multiple('select').refresh()</code> to refresh/reload the Multiple Select. If you're dynamically adding/removing
      option tags on the original select via AJAX or DOM manipulation methods, call refresh to reflect the changes.
    </div>
  </div>
  <div class="col-md-5"></div>
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
`,es=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">The destroy</h2>
    <div class="demo-subtitle">Use <code>multiple('select').destroy()</code> to destroy the select.</div>
  </div>
  <div class="col-md-5"></div>
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
</div>
`,os=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">The Placeholder</h2>
    <div class="demo-subtitle">
      Use <code>placeholder</code> attribute or <code>placeholder: ''</code> option to set placeholder.
    </div>
  </div>
  <div class="col-md-5"></div>
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
`,ns=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Single Radio</h2>
    <div class="demo-subtitle">Use <code>singleRadio: true</code> to show the radio input.</div>
  </div>
  <div class="col-md-5"></div>
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
`,is=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Hide Select All</h2>
    <div class="demo-subtitle">Use <code>selectAll: false</code> to hide select all.</div>
  </div>
  <div class="col-md-5"></div>
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
`,ss=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Hide Optgroup Checkboxes</h2>
    <div class="demo-subtitle">Use <code>hideOptgroupCheckboxes: true</code> option to hide the optgroup checkboxes.</div>
  </div>
  <div class="col-md-5"></div>
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
`,ls=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Custom Dropdown Width</h2>
    <div class="demo-subtitle">Use <code>dropWidth: 580</code> option to custom the dropdown width.</div>
  </div>
  <div class="col-md-5"></div>
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
`,as=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Max Height</h2>
    <div class="demo-subtitle">Use <code>maxHeight: 140</code> option to custom the dropdown max height.</div>
  </div>
  <div class="col-md-5"></div>
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
`,rs=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Max Height Unit</h2>
    <div class="demo-subtitle">Use <code>maxHeightUnit: 'row'</code> option to set the max height unit.</div>
  </div>
  <div class="col-md-5"></div>
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
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">The Position</h2>
    <div class="demo-subtitle">Use <code>position: 'top'</code> to set the select dropdown in top position.</div>
  </div>
  <div class="col-md-5"></div>
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
`,cs=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Display Values</h2>
    <div class="demo-subtitle">Use <code>displayValues: true</code> option to display selected values instead text.</div>
  </div>
  <div class="col-md-5"></div>
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
`,ps=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Display Title</h2>
    <div class="demo-subtitle">Use <code>displayTitle: true</code> option to display title of selected text.</div>
  </div>
  <div class="col-md-5"></div>
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
`,ds=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Display Delimiter</h2>
    <div class="demo-subtitle">Use <code>displayDelimiter: ' | '</code> option to custom the display delimiter.</div>
  </div>
  <div class="col-md-5"></div>
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
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Minimum Count Selected</h2>
    <div class="demo-subtitle">
      Use <code>minimumCountSelected: 8</code> option and the <code>%s of %s selected</code> will be shown only if more than 8
      items where selected.
    </div>
  </div>
  <div class="col-md-5"></div>
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
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">The Ellipsis</h2>
    <div class="demo-subtitle">
      Use <code>ellipsis: true</code> option to display ... after selected options instead of <code>%s of %s selected</code>.
    </div>
  </div>
  <div class="col-md-5"></div>
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
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Is Open</h2>
    <div class="demo-subtitle">Use <code>isOpen: true</code> to open the dropdown by default.</div>
  </div>
  <div class="col-md-5"></div>
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
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Keep Open</h2>
    <div class="demo-subtitle">Use <code>keepOpen: true</code> to keep the select dropdown always open.</div>
  </div>
  <div class="col-md-5"></div>
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
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Open On Hover</h2>
    <div class="demo-subtitle">Use <code>openOnHover: true</code> to open the select dropdown by hover instead of click.</div>
  </div>
  <div class="col-md-5"></div>
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
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">The Container</h2>
    <div class="demo-subtitle">
      Use <code>container</code> option to solve the cut off problem for example parent node is <code>overflow: hidden</code>.
    </div>
  </div>
  <div class="col-md-5"></div>
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
`,gs=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">The Filter</h2>
    <div class="demo-subtitle">Use <code>filter: true</code> to enable filter feature.</div>
  </div>
  <div class="col-md-5"></div>
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
`,_s=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Filter Only Optgroup</h2>
    <div class="demo-subtitle">Use <code>filterGroup: true</code> to filter optgroups only and not options.</div>
  </div>
  <div class="col-md-5"></div>
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
`,ys=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Filter Placeholder</h2>
    <div class="demo-subtitle">Use <code>filterPlaceholder: 'The filter placeholder'</code> to set the filter placeholder.</div>
  </div>
  <div class="col-md-5"></div>
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
`,As=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Filter Accept On Enter</h2>
    <div class="demo-subtitle">
      Use <code>filterAcceptOnEnter: true</code> option to speed up keyboard use. Enter filter text and then hit
      <code>ENTER</code> or <code>SPACE</code> will auto click <code>select all</code> and close the dropdown.
    </div>
  </div>
  <div class="col-md-5"></div>
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
`,ws=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Filter By Data Length</h2>
    <div class="demo-subtitle">
      Use <code>filterByDataLength: 10</code> option to auto enable filter when the data length is more than 10.
    </div>
  </div>
  <div class="col-md-5"></div>
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
`,Ss=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Custom Filter</h2>
    <div class="demo-subtitle">
      Use <code>customFilter</code> to custom filter, in this case we filter by <code>startWith</code>.
    </div>
  </div>
  <div class="col-md-5"></div>
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
`,Os=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Show Clear</h2>
    <div class="demo-subtitle">Use <code>showClear</code> to show the clear icon to uncheck all selected items.</div>
  </div>
  <div class="col-md-5"></div>
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
`,Ts=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">The Styler</h2>
    <div class="demo-subtitle">Use <code>styler</code> to custom the item style.</div>
  </div>
  <div class="col-md-5"></div>
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
`,Cs=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Text Template</h2>
    <div class="demo-subtitle">Use <code>textTemplate</code> to custom the text template.</div>
  </div>
  <div class="col-md-5"></div>
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
`,Ds=`<div class="row mb-2">
  <div class="col-md-7 title-desc">
    <h2 class="bd-title">Label Template</h2>
    <div class="demo-subtitle">Use <code>labelTemplate</code> to custom the optgroup label template.</div>
  </div>
  <div class="col-md-5"></div>
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
`;var F="top",B="bottom",P="right",I="left",we="auto",Ht=[F,B,P,I],yt="start",$t="end",yn="clippingParents",so="viewport",xt="popper",An="reference",Ye=Ht.reduce(function(o,t){return o.concat([t+"-"+yt,t+"-"+$t])},[]),lo=[].concat(Ht,[we]).reduce(function(o,t){return o.concat([t,t+"-"+yt,t+"-"+$t])},[]),wn="beforeRead",Sn="read",On="afterRead",Tn="beforeMain",Cn="main",Dn="afterMain",xn="beforeWrite",Nn="write",Ln="afterWrite",kn=[wn,Sn,On,Tn,Cn,Dn,xn,Nn,Ln];function Q(o){return o?(o.nodeName||"").toLowerCase():null}function G(o){if(o==null)return window;if(o.toString()!=="[object Window]"){var t=o.ownerDocument;return t&&t.defaultView||window}return o}function At(o){var t=G(o).Element;return o instanceof t||o instanceof Element}function V(o){var t=G(o).HTMLElement;return o instanceof t||o instanceof HTMLElement}function ao(o){if(typeof ShadowRoot>"u")return!1;var t=G(o).ShadowRoot;return o instanceof t||o instanceof ShadowRoot}function xs(o){var t=o.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},s=t.elements[e];!V(s)||!Q(s)||(Object.assign(s.style,n),Object.keys(i).forEach(function(l){var a=i[l];a===!1?s.removeAttribute(l):s.setAttribute(l,a===!0?"":a)}))})}function Ns(o){var t=o.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(n){var i=t.elements[n],s=t.attributes[n]||{},l=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:e[n]),a=l.reduce(function(r,p){return r[p]="",r},{});!V(i)||!Q(i)||(Object.assign(i.style,a),Object.keys(s).forEach(function(r){i.removeAttribute(r)}))})}}const ro={name:"applyStyles",enabled:!0,phase:"write",fn:xs,effect:Ns,requires:["computeStyles"]};function Y(o){return o.split("-")[0]}var _t=Math.max,ge=Math.min,Mt=Math.round;function Xe(){var o=navigator.userAgentData;return o!=null&&o.brands?o.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function $n(){return!/^((?!chrome|android).)*safari/i.test(Xe())}function Ft(o,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var n=o.getBoundingClientRect(),i=1,s=1;t&&V(o)&&(i=o.offsetWidth>0&&Mt(n.width)/o.offsetWidth||1,s=o.offsetHeight>0&&Mt(n.height)/o.offsetHeight||1);var l=At(o)?G(o):window,a=l.visualViewport,r=!$n()&&e,p=(n.left+(r&&a?a.offsetLeft:0))/i,u=(n.top+(r&&a?a.offsetTop:0))/s,v=n.width/i,E=n.height/s;return{width:v,height:E,top:u,right:p+v,bottom:u+E,left:p,x:p,y:u}}function uo(o){var t=Ft(o),e=o.offsetWidth,n=o.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:o.offsetLeft,y:o.offsetTop,width:e,height:n}}function Mn(o,t){var e=t.getRootNode&&t.getRootNode();if(o.contains(t))return!0;if(e&&ao(e)){var n=t;do{if(n&&o.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function nt(o){return G(o).getComputedStyle(o)}function Ls(o){return["table","td","th"].indexOf(Q(o))>=0}function ct(o){return((At(o)?o.ownerDocument:o.document)||window.document).documentElement}function Se(o){return Q(o)==="html"?o:o.assignedSlot||o.parentNode||(ao(o)?o.host:null)||ct(o)}function $o(o){return!V(o)||nt(o).position==="fixed"?null:o.offsetParent}function ks(o){var t=/firefox/i.test(Xe()),e=/Trident/i.test(Xe());if(e&&V(o)){var n=nt(o);if(n.position==="fixed")return null}var i=Se(o);for(ao(i)&&(i=i.host);V(i)&&["html","body"].indexOf(Q(i))<0;){var s=nt(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function Xt(o){for(var t=G(o),e=$o(o);e&&Ls(e)&&nt(e).position==="static";)e=$o(e);return e&&(Q(e)==="html"||Q(e)==="body"&&nt(e).position==="static")?t:e||ks(o)||t}function co(o){return["top","bottom"].indexOf(o)>=0?"x":"y"}function Kt(o,t,e){return _t(o,ge(t,e))}function $s(o,t,e){var n=Kt(o,t,e);return n>e?e:n}function Fn(){return{top:0,right:0,bottom:0,left:0}}function In(o){return Object.assign({},Fn(),o)}function Rn(o,t){return t.reduce(function(e,n){return e[n]=o,e},{})}var Ms=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,In(typeof t!="number"?t:Rn(t,Ht))};function Fs(o){var t,e=o.state,n=o.name,i=o.options,s=e.elements.arrow,l=e.modifiersData.popperOffsets,a=Y(e.placement),r=co(a),p=[I,P].indexOf(a)>=0,u=p?"height":"width";if(!(!s||!l)){var v=Ms(i.padding,e),E=uo(s),m=r==="y"?F:I,S=r==="y"?B:P,g=e.rects.reference[u]+e.rects.reference[r]-l[r]-e.rects.popper[u],y=l[r]-e.rects.reference[r],O=Xt(s),D=O?r==="y"?O.clientHeight||0:O.clientWidth||0:0,x=g/2-y/2,_=v[m],A=D-E[u]-v[S],w=D/2-E[u]/2+x,T=Kt(_,w,A),k=r;e.modifiersData[n]=(t={},t[k]=T,t.centerOffset=T-w,t)}}function Is(o){var t=o.state,e=o.options,n=e.element,i=n===void 0?"[data-popper-arrow]":n;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||Mn(t.elements.popper,i)&&(t.elements.arrow=i))}const Bn={name:"arrow",enabled:!0,phase:"main",fn:Fs,effect:Is,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function It(o){return o.split("-")[1]}var Rs={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Bs(o){var t=o.x,e=o.y,n=window,i=n.devicePixelRatio||1;return{x:Mt(t*i)/i||0,y:Mt(e*i)/i||0}}function Mo(o){var t,e=o.popper,n=o.popperRect,i=o.placement,s=o.variation,l=o.offsets,a=o.position,r=o.gpuAcceleration,p=o.adaptive,u=o.roundOffsets,v=o.isFixed,E=l.x,m=E===void 0?0:E,S=l.y,g=S===void 0?0:S,y=typeof u=="function"?u({x:m,y:g}):{x:m,y:g};m=y.x,g=y.y;var O=l.hasOwnProperty("x"),D=l.hasOwnProperty("y"),x=I,_=F,A=window;if(p){var w=Xt(e),T="clientHeight",k="clientWidth";if(w===G(e)&&(w=ct(e),nt(w).position!=="static"&&a==="absolute"&&(T="scrollHeight",k="scrollWidth")),w=w,i===F||(i===I||i===P)&&s===$t){_=B;var L=v&&w===A&&A.visualViewport?A.visualViewport.height:w[T];g-=L-n.height,g*=r?1:-1}if(i===I||(i===F||i===B)&&s===$t){x=P;var N=v&&w===A&&A.visualViewport?A.visualViewport.width:w[k];m-=N-n.width,m*=r?1:-1}}var $=Object.assign({position:a},p&&Rs),U=u===!0?Bs({x:m,y:g}):{x:m,y:g};if(m=U.x,g=U.y,r){var M;return Object.assign({},$,(M={},M[_]=D?"0":"",M[x]=O?"0":"",M.transform=(A.devicePixelRatio||1)<=1?"translate("+m+"px, "+g+"px)":"translate3d("+m+"px, "+g+"px, 0)",M))}return Object.assign({},$,(t={},t[_]=D?g+"px":"",t[x]=O?m+"px":"",t.transform="",t))}function Ps(o){var t=o.state,e=o.options,n=e.gpuAcceleration,i=n===void 0?!0:n,s=e.adaptive,l=s===void 0?!0:s,a=e.roundOffsets,r=a===void 0?!0:a,p={placement:Y(t.placement),variation:It(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Mo(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:r})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Mo(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:r})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const po={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ps,data:{}};var ae={passive:!0};function Hs(o){var t=o.state,e=o.instance,n=o.options,i=n.scroll,s=i===void 0?!0:i,l=n.resize,a=l===void 0?!0:l,r=G(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&p.forEach(function(u){u.addEventListener("scroll",e.update,ae)}),a&&r.addEventListener("resize",e.update,ae),function(){s&&p.forEach(function(u){u.removeEventListener("scroll",e.update,ae)}),a&&r.removeEventListener("resize",e.update,ae)}}const ho={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Hs,data:{}};var Vs={left:"right",right:"left",bottom:"top",top:"bottom"};function fe(o){return o.replace(/left|right|bottom|top/g,function(t){return Vs[t]})}var js={start:"end",end:"start"};function Fo(o){return o.replace(/start|end/g,function(t){return js[t]})}function vo(o){var t=G(o),e=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:e,scrollTop:n}}function mo(o){return Ft(ct(o)).left+vo(o).scrollLeft}function Gs(o,t){var e=G(o),n=ct(o),i=e.visualViewport,s=n.clientWidth,l=n.clientHeight,a=0,r=0;if(i){s=i.width,l=i.height;var p=$n();(p||!p&&t==="fixed")&&(a=i.offsetLeft,r=i.offsetTop)}return{width:s,height:l,x:a+mo(o),y:r}}function Ws(o){var t,e=ct(o),n=vo(o),i=(t=o.ownerDocument)==null?void 0:t.body,s=_t(e.scrollWidth,e.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=_t(e.scrollHeight,e.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-n.scrollLeft+mo(o),r=-n.scrollTop;return nt(i||e).direction==="rtl"&&(a+=_t(e.clientWidth,i?i.clientWidth:0)-s),{width:s,height:l,x:a,y:r}}function fo(o){var t=nt(o),e=t.overflow,n=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+i+n)}function Pn(o){return["html","body","#document"].indexOf(Q(o))>=0?o.ownerDocument.body:V(o)&&fo(o)?o:Pn(Se(o))}function zt(o,t){var e;t===void 0&&(t=[]);var n=Pn(o),i=n===((e=o.ownerDocument)==null?void 0:e.body),s=G(n),l=i?[s].concat(s.visualViewport||[],fo(n)?n:[]):n,a=t.concat(l);return i?a:a.concat(zt(Se(l)))}function Qe(o){return Object.assign({},o,{left:o.x,top:o.y,right:o.x+o.width,bottom:o.y+o.height})}function Us(o,t){var e=Ft(o,!1,t==="fixed");return e.top=e.top+o.clientTop,e.left=e.left+o.clientLeft,e.bottom=e.top+o.clientHeight,e.right=e.left+o.clientWidth,e.width=o.clientWidth,e.height=o.clientHeight,e.x=e.left,e.y=e.top,e}function Io(o,t,e){return t===so?Qe(Gs(o,e)):At(t)?Us(t,e):Qe(Ws(ct(o)))}function Js(o){var t=zt(Se(o)),e=["absolute","fixed"].indexOf(nt(o).position)>=0,n=e&&V(o)?Xt(o):o;return At(n)?t.filter(function(i){return At(i)&&Mn(i,n)&&Q(i)!=="body"}):[]}function qs(o,t,e,n){var i=t==="clippingParents"?Js(o):[].concat(t),s=[].concat(i,[e]),l=s[0],a=s.reduce(function(r,p){var u=Io(o,p,n);return r.top=_t(u.top,r.top),r.right=ge(u.right,r.right),r.bottom=ge(u.bottom,r.bottom),r.left=_t(u.left,r.left),r},Io(o,l,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Hn(o){var t=o.reference,e=o.element,n=o.placement,i=n?Y(n):null,s=n?It(n):null,l=t.x+t.width/2-e.width/2,a=t.y+t.height/2-e.height/2,r;switch(i){case F:r={x:l,y:t.y-e.height};break;case B:r={x:l,y:t.y+t.height};break;case P:r={x:t.x+t.width,y:a};break;case I:r={x:t.x-e.width,y:a};break;default:r={x:t.x,y:t.y}}var p=i?co(i):null;if(p!=null){var u=p==="y"?"height":"width";switch(s){case yt:r[p]=r[p]-(t[u]/2-e[u]/2);break;case $t:r[p]=r[p]+(t[u]/2-e[u]/2);break}}return r}function Rt(o,t){t===void 0&&(t={});var e=t,n=e.placement,i=n===void 0?o.placement:n,s=e.strategy,l=s===void 0?o.strategy:s,a=e.boundary,r=a===void 0?yn:a,p=e.rootBoundary,u=p===void 0?so:p,v=e.elementContext,E=v===void 0?xt:v,m=e.altBoundary,S=m===void 0?!1:m,g=e.padding,y=g===void 0?0:g,O=In(typeof y!="number"?y:Rn(y,Ht)),D=E===xt?An:xt,x=o.rects.popper,_=o.elements[S?D:E],A=qs(At(_)?_:_.contextElement||ct(o.elements.popper),r,u,l),w=Ft(o.elements.reference),T=Hn({reference:w,element:x,strategy:"absolute",placement:i}),k=Qe(Object.assign({},x,T)),L=E===xt?k:w,N={top:A.top-L.top+O.top,bottom:L.bottom-A.bottom+O.bottom,left:A.left-L.left+O.left,right:L.right-A.right+O.right},$=o.modifiersData.offset;if(E===xt&&$){var U=$[i];Object.keys(N).forEach(function(M){var ht=[P,B].indexOf(M)>=0?1:-1,vt=[F,B].indexOf(M)>=0?"y":"x";N[M]+=U[vt]*ht})}return N}function Ks(o,t){t===void 0&&(t={});var e=t,n=e.placement,i=e.boundary,s=e.rootBoundary,l=e.padding,a=e.flipVariations,r=e.allowedAutoPlacements,p=r===void 0?lo:r,u=It(n),v=u?a?Ye:Ye.filter(function(S){return It(S)===u}):Ht,E=v.filter(function(S){return p.indexOf(S)>=0});E.length===0&&(E=v);var m=E.reduce(function(S,g){return S[g]=Rt(o,{placement:g,boundary:i,rootBoundary:s,padding:l})[Y(g)],S},{});return Object.keys(m).sort(function(S,g){return m[S]-m[g]})}function zs(o){if(Y(o)===we)return[];var t=fe(o);return[Fo(o),t,Fo(t)]}function Ys(o){var t=o.state,e=o.options,n=o.name;if(!t.modifiersData[n]._skip){for(var i=e.mainAxis,s=i===void 0?!0:i,l=e.altAxis,a=l===void 0?!0:l,r=e.fallbackPlacements,p=e.padding,u=e.boundary,v=e.rootBoundary,E=e.altBoundary,m=e.flipVariations,S=m===void 0?!0:m,g=e.allowedAutoPlacements,y=t.options.placement,O=Y(y),D=O===y,x=r||(D||!S?[fe(y)]:zs(y)),_=[y].concat(x).reduce(function(Ot,st){return Ot.concat(Y(st)===we?Ks(t,{placement:st,boundary:u,rootBoundary:v,padding:p,flipVariations:S,allowedAutoPlacements:g}):st)},[]),A=t.rects.reference,w=t.rects.popper,T=new Map,k=!0,L=_[0],N=0;N<_.length;N++){var $=_[N],U=Y($),M=It($)===yt,ht=[F,B].indexOf(U)>=0,vt=ht?"width":"height",R=Rt(t,{placement:$,boundary:u,rootBoundary:v,altBoundary:E,padding:p}),J=ht?M?P:I:M?B:F;A[vt]>w[vt]&&(J=fe(J));var oe=fe(J),mt=[];if(s&&mt.push(R[U]<=0),a&&mt.push(R[J]<=0,R[oe]<=0),mt.every(function(Ot){return Ot})){L=$,k=!1;break}T.set($,mt)}if(k)for(var ne=S?3:1,Le=function(st){var Ut=_.find(function(se){var ft=T.get(se);if(ft)return ft.slice(0,st).every(function(ke){return ke})});if(Ut)return L=Ut,"break"},Wt=ne;Wt>0;Wt--){var ie=Le(Wt);if(ie==="break")break}t.placement!==L&&(t.modifiersData[n]._skip=!0,t.placement=L,t.reset=!0)}}const Vn={name:"flip",enabled:!0,phase:"main",fn:Ys,requiresIfExists:["offset"],data:{_skip:!1}};function Ro(o,t,e){return e===void 0&&(e={x:0,y:0}),{top:o.top-t.height-e.y,right:o.right-t.width+e.x,bottom:o.bottom-t.height+e.y,left:o.left-t.width-e.x}}function Bo(o){return[F,P,B,I].some(function(t){return o[t]>=0})}function Xs(o){var t=o.state,e=o.name,n=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,l=Rt(t,{elementContext:"reference"}),a=Rt(t,{altBoundary:!0}),r=Ro(l,n),p=Ro(a,i,s),u=Bo(r),v=Bo(p);t.modifiersData[e]={referenceClippingOffsets:r,popperEscapeOffsets:p,isReferenceHidden:u,hasPopperEscaped:v},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":v})}const jn={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Xs};function Qs(o,t,e){var n=Y(o),i=[I,F].indexOf(n)>=0?-1:1,s=typeof e=="function"?e(Object.assign({},t,{placement:o})):e,l=s[0],a=s[1];return l=l||0,a=(a||0)*i,[I,P].indexOf(n)>=0?{x:a,y:l}:{x:l,y:a}}function Zs(o){var t=o.state,e=o.options,n=o.name,i=e.offset,s=i===void 0?[0,0]:i,l=lo.reduce(function(u,v){return u[v]=Qs(v,t.rects,s),u},{}),a=l[t.placement],r=a.x,p=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=r,t.modifiersData.popperOffsets.y+=p),t.modifiersData[n]=l}const Gn={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Zs};function tl(o){var t=o.state,e=o.name;t.modifiersData[e]=Hn({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const bo={name:"popperOffsets",enabled:!0,phase:"read",fn:tl,data:{}};function el(o){return o==="x"?"y":"x"}function ol(o){var t=o.state,e=o.options,n=o.name,i=e.mainAxis,s=i===void 0?!0:i,l=e.altAxis,a=l===void 0?!1:l,r=e.boundary,p=e.rootBoundary,u=e.altBoundary,v=e.padding,E=e.tether,m=E===void 0?!0:E,S=e.tetherOffset,g=S===void 0?0:S,y=Rt(t,{boundary:r,rootBoundary:p,padding:v,altBoundary:u}),O=Y(t.placement),D=It(t.placement),x=!D,_=co(O),A=el(_),w=t.modifiersData.popperOffsets,T=t.rects.reference,k=t.rects.popper,L=typeof g=="function"?g(Object.assign({},t.rects,{placement:t.placement})):g,N=typeof L=="number"?{mainAxis:L,altAxis:L}:Object.assign({mainAxis:0,altAxis:0},L),$=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,U={x:0,y:0};if(w){if(s){var M,ht=_==="y"?F:I,vt=_==="y"?B:P,R=_==="y"?"height":"width",J=w[_],oe=J+y[ht],mt=J-y[vt],ne=m?-k[R]/2:0,Le=D===yt?T[R]:k[R],Wt=D===yt?-k[R]:-T[R],ie=t.elements.arrow,Ot=m&&ie?uo(ie):{width:0,height:0},st=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Fn(),Ut=st[ht],se=st[vt],ft=Kt(0,T[R],Ot[R]),ke=x?T[R]/2-ne-ft-Ut-N.mainAxis:Le-ft-Ut-N.mainAxis,wi=x?-T[R]/2+ne+ft+se+N.mainAxis:Wt+ft+se+N.mainAxis,$e=t.elements.arrow&&Xt(t.elements.arrow),Si=$e?_==="y"?$e.clientTop||0:$e.clientLeft||0:0,So=(M=$==null?void 0:$[_])!=null?M:0,Oi=J+ke-So-Si,Ti=J+wi-So,Oo=Kt(m?ge(oe,Oi):oe,J,m?_t(mt,Ti):mt);w[_]=Oo,U[_]=Oo-J}if(a){var To,Ci=_==="x"?F:I,Di=_==="x"?B:P,bt=w[A],le=A==="y"?"height":"width",Co=bt+y[Ci],Do=bt-y[Di],Me=[F,I].indexOf(O)!==-1,xo=(To=$==null?void 0:$[A])!=null?To:0,No=Me?Co:bt-T[le]-k[le]-xo+N.altAxis,Lo=Me?bt+T[le]+k[le]-xo-N.altAxis:Do,ko=m&&Me?$s(No,bt,Lo):Kt(m?No:Co,bt,m?Lo:Do);w[A]=ko,U[A]=ko-bt}t.modifiersData[n]=U}}const Wn={name:"preventOverflow",enabled:!0,phase:"main",fn:ol,requiresIfExists:["offset"]};function nl(o){return{scrollLeft:o.scrollLeft,scrollTop:o.scrollTop}}function il(o){return o===G(o)||!V(o)?vo(o):nl(o)}function sl(o){var t=o.getBoundingClientRect(),e=Mt(t.width)/o.offsetWidth||1,n=Mt(t.height)/o.offsetHeight||1;return e!==1||n!==1}function ll(o,t,e){e===void 0&&(e=!1);var n=V(t),i=V(t)&&sl(t),s=ct(t),l=Ft(o,i,e),a={scrollLeft:0,scrollTop:0},r={x:0,y:0};return(n||!n&&!e)&&((Q(t)!=="body"||fo(s))&&(a=il(t)),V(t)?(r=Ft(t,!0),r.x+=t.clientLeft,r.y+=t.clientTop):s&&(r.x=mo(s))),{x:l.left+a.scrollLeft-r.x,y:l.top+a.scrollTop-r.y,width:l.width,height:l.height}}function al(o){var t=new Map,e=new Set,n=[];o.forEach(function(s){t.set(s.name,s)});function i(s){e.add(s.name);var l=[].concat(s.requires||[],s.requiresIfExists||[]);l.forEach(function(a){if(!e.has(a)){var r=t.get(a);r&&i(r)}}),n.push(s)}return o.forEach(function(s){e.has(s.name)||i(s)}),n}function rl(o){var t=al(o);return kn.reduce(function(e,n){return e.concat(t.filter(function(i){return i.phase===n}))},[])}function ul(o){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(o())})})),t}}function cl(o){var t=o.reduce(function(e,n){var i=e[n.name];return e[n.name]=i?Object.assign({},i,n,{options:Object.assign({},i.options,n.options),data:Object.assign({},i.data,n.data)}):n,e},{});return Object.keys(t).map(function(e){return t[e]})}var Po={placement:"bottom",modifiers:[],strategy:"absolute"};function Ho(){for(var o=arguments.length,t=new Array(o),e=0;e<o;e++)t[e]=arguments[e];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Oe(o){o===void 0&&(o={});var t=o,e=t.defaultModifiers,n=e===void 0?[]:e,i=t.defaultOptions,s=i===void 0?Po:i;return function(a,r,p){p===void 0&&(p=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Po,s),modifiersData:{},elements:{reference:a,popper:r},attributes:{},styles:{}},v=[],E=!1,m={state:u,setOptions:function(O){var D=typeof O=="function"?O(u.options):O;g(),u.options=Object.assign({},s,u.options,D),u.scrollParents={reference:At(a)?zt(a):a.contextElement?zt(a.contextElement):[],popper:zt(r)};var x=rl(cl([].concat(n,u.options.modifiers)));return u.orderedModifiers=x.filter(function(_){return _.enabled}),S(),m.update()},forceUpdate:function(){if(!E){var O=u.elements,D=O.reference,x=O.popper;if(Ho(D,x)){u.rects={reference:ll(D,Xt(x),u.options.strategy==="fixed"),popper:uo(x)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(N){return u.modifiersData[N.name]=Object.assign({},N.data)});for(var _=0;_<u.orderedModifiers.length;_++){if(u.reset===!0){u.reset=!1,_=-1;continue}var A=u.orderedModifiers[_],w=A.fn,T=A.options,k=T===void 0?{}:T,L=A.name;typeof w=="function"&&(u=w({state:u,options:k,name:L,instance:m})||u)}}}},update:ul(function(){return new Promise(function(y){m.forceUpdate(),y(u)})}),destroy:function(){g(),E=!0}};if(!Ho(a,r))return m;m.setOptions(p).then(function(y){!E&&p.onFirstUpdate&&p.onFirstUpdate(y)});function S(){u.orderedModifiers.forEach(function(y){var O=y.name,D=y.options,x=D===void 0?{}:D,_=y.effect;if(typeof _=="function"){var A=_({state:u,name:O,instance:m,options:x}),w=function(){};v.push(A||w)}})}function g(){v.forEach(function(y){return y()}),v=[]}return m}}var pl=Oe(),dl=[ho,bo,po,ro],hl=Oe({defaultModifiers:dl}),vl=[ho,bo,po,ro,Gn,Vn,Wn,Bn,jn],Eo=Oe({defaultModifiers:vl});const Un=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Dn,afterRead:On,afterWrite:Ln,applyStyles:ro,arrow:Bn,auto:we,basePlacements:Ht,beforeMain:Tn,beforeRead:wn,beforeWrite:xn,bottom:B,clippingParents:yn,computeStyles:po,createPopper:Eo,createPopperBase:pl,createPopperLite:hl,detectOverflow:Rt,end:$t,eventListeners:ho,flip:Vn,hide:jn,left:I,main:Cn,modifierPhases:kn,offset:Gn,placements:lo,popper:xt,popperGenerator:Oe,popperOffsets:bo,preventOverflow:Wn,read:Sn,reference:An,right:P,start:yt,top:F,variationPlacements:Ye,viewport:so,write:Nn},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const ml=1e6,fl=1e3,Ze="transitionend",bl=o=>o==null?`${o}`:Object.prototype.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase(),El=o=>{do o+=Math.floor(Math.random()*ml);while(document.getElementById(o));return o},Jn=o=>{let t=o.getAttribute("data-bs-target");if(!t||t==="#"){let e=o.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?e.trim():null}return t},qn=o=>{const t=Jn(o);return t&&document.querySelector(t)?t:null},tt=o=>{const t=Jn(o);return t?document.querySelector(t):null},gl=o=>{if(!o)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(o);const n=Number.parseFloat(t),i=Number.parseFloat(e);return!n&&!i?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*fl)},Kn=o=>{o.dispatchEvent(new Event(Ze))},et=o=>!o||typeof o!="object"?!1:(typeof o.jquery<"u"&&(o=o[0]),typeof o.nodeType<"u"),at=o=>et(o)?o.jquery?o[0]:o:typeof o=="string"&&o.length>0?document.querySelector(o):null,Vt=o=>{if(!et(o)||o.getClientRects().length===0)return!1;const t=getComputedStyle(o).getPropertyValue("visibility")==="visible",e=o.closest("details:not([open])");if(!e)return t;if(e!==o){const n=o.closest("summary");if(n&&n.parentNode!==e||n===null)return!1}return t},rt=o=>!o||o.nodeType!==Node.ELEMENT_NODE||o.classList.contains("disabled")?!0:typeof o.disabled<"u"?o.disabled:o.hasAttribute("disabled")&&o.getAttribute("disabled")!=="false",zn=o=>{if(!document.documentElement.attachShadow)return null;if(typeof o.getRootNode=="function"){const t=o.getRootNode();return t instanceof ShadowRoot?t:null}return o instanceof ShadowRoot?o:o.parentNode?zn(o.parentNode):null},_e=()=>{},Qt=o=>{o.offsetHeight},Yn=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Fe=[],_l=o=>{document.readyState==="loading"?(Fe.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of Fe)t()}),Fe.push(o)):o()},j=()=>document.documentElement.dir==="rtl",W=o=>{_l(()=>{const t=Yn();if(t){const e=o.NAME,n=t.fn[e];t.fn[e]=o.jQueryInterface,t.fn[e].Constructor=o,t.fn[e].noConflict=()=>(t.fn[e]=n,o.jQueryInterface)}})},Z=o=>{typeof o=="function"&&o()},Xn=(o,t,e=!0)=>{if(!e){Z(o);return}const n=5,i=gl(t)+n;let s=!1;const l=({target:a})=>{a===t&&(s=!0,t.removeEventListener(Ze,l),Z(o))};t.addEventListener(Ze,l),setTimeout(()=>{s||Kn(t)},i)},go=(o,t,e,n)=>{const i=o.length;let s=o.indexOf(t);return s===-1?!e&&n?o[i-1]:o[0]:(s+=e?1:-1,n&&(s=(s+i)%i),o[Math.max(0,Math.min(s,i-1))])},yl=/[^.]*(?=\..*)\.|.*/,Al=/\..*/,wl=/::\d+$/,Ie={};let Vo=1;const Qn={mouseenter:"mouseover",mouseleave:"mouseout"},Sl=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Zn(o,t){return t&&`${t}::${Vo++}`||o.uidEvent||Vo++}function ti(o){const t=Zn(o);return o.uidEvent=t,Ie[t]=Ie[t]||{},Ie[t]}function Ol(o,t){return function e(n){return _o(n,{delegateTarget:o}),e.oneOff&&c.off(o,n.type,t),t.apply(o,[n])}}function Tl(o,t,e){return function n(i){const s=o.querySelectorAll(t);for(let{target:l}=i;l&&l!==this;l=l.parentNode)for(const a of s)if(a===l)return _o(i,{delegateTarget:l}),n.oneOff&&c.off(o,i.type,t,e),e.apply(l,[i])}}function ei(o,t,e=null){return Object.values(o).find(n=>n.callable===t&&n.delegationSelector===e)}function oi(o,t,e){const n=typeof t=="string",i=n?e:t||e;let s=ni(o);return Sl.has(s)||(s=o),[n,i,s]}function jo(o,t,e,n,i){if(typeof t!="string"||!o)return;let[s,l,a]=oi(t,e,n);t in Qn&&(l=(S=>function(g){if(!g.relatedTarget||g.relatedTarget!==g.delegateTarget&&!g.delegateTarget.contains(g.relatedTarget))return S.call(this,g)})(l));const r=ti(o),p=r[a]||(r[a]={}),u=ei(p,l,s?e:null);if(u){u.oneOff=u.oneOff&&i;return}const v=Zn(l,t.replace(yl,"")),E=s?Tl(o,e,l):Ol(o,l);E.delegationSelector=s?e:null,E.callable=l,E.oneOff=i,E.uidEvent=v,p[v]=E,o.addEventListener(a,E,s)}function to(o,t,e,n,i){const s=ei(t[e],n,i);s&&(o.removeEventListener(e,s,Boolean(i)),delete t[e][s.uidEvent])}function Cl(o,t,e,n){const i=t[e]||{};for(const s of Object.keys(i))if(s.includes(n)){const l=i[s];to(o,t,e,l.callable,l.delegationSelector)}}function ni(o){return o=o.replace(Al,""),Qn[o]||o}const c={on(o,t,e,n){jo(o,t,e,n,!1)},one(o,t,e,n){jo(o,t,e,n,!0)},off(o,t,e,n){if(typeof t!="string"||!o)return;const[i,s,l]=oi(t,e,n),a=l!==t,r=ti(o),p=r[l]||{},u=t.startsWith(".");if(typeof s<"u"){if(!Object.keys(p).length)return;to(o,r,l,s,i?e:null);return}if(u)for(const v of Object.keys(r))Cl(o,r,v,t.slice(1));for(const v of Object.keys(p)){const E=v.replace(wl,"");if(!a||t.includes(E)){const m=p[v];to(o,r,l,m.callable,m.delegationSelector)}}},trigger(o,t,e){if(typeof t!="string"||!o)return null;const n=Yn(),i=ni(t),s=t!==i;let l=null,a=!0,r=!0,p=!1;s&&n&&(l=n.Event(t,e),n(o).trigger(l),a=!l.isPropagationStopped(),r=!l.isImmediatePropagationStopped(),p=l.isDefaultPrevented());let u=new Event(t,{bubbles:a,cancelable:!0});return u=_o(u,e),p&&u.preventDefault(),r&&o.dispatchEvent(u),u.defaultPrevented&&l&&l.preventDefault(),u}};function _o(o,t){for(const[e,n]of Object.entries(t||{}))try{o[e]=n}catch{Object.defineProperty(o,e,{configurable:!0,get(){return n}})}return o}const lt=new Map,Re={set(o,t,e){lt.has(o)||lt.set(o,new Map);const n=lt.get(o);if(!n.has(t)&&n.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);return}n.set(t,e)},get(o,t){return lt.has(o)&&lt.get(o).get(t)||null},remove(o,t){if(!lt.has(o))return;const e=lt.get(o);e.delete(t),e.size===0&&lt.delete(o)}};function Go(o){if(o==="true")return!0;if(o==="false")return!1;if(o===Number(o).toString())return Number(o);if(o===""||o==="null")return null;if(typeof o!="string")return o;try{return JSON.parse(decodeURIComponent(o))}catch{return o}}function Be(o){return o.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const ot={setDataAttribute(o,t,e){o.setAttribute(`data-bs-${Be(t)}`,e)},removeDataAttribute(o,t){o.removeAttribute(`data-bs-${Be(t)}`)},getDataAttributes(o){if(!o)return{};const t={},e=Object.keys(o.dataset).filter(n=>n.startsWith("bs")&&!n.startsWith("bsConfig"));for(const n of e){let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=Go(o.dataset[n])}return t},getDataAttribute(o,t){return Go(o.getAttribute(`data-bs-${Be(t)}`))}};class Zt{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const n=et(e)?ot.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof n=="object"?n:{},...et(e)?ot.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const n of Object.keys(e)){const i=e[n],s=t[n],l=et(s)?"element":bl(s);if(!new RegExp(i).test(l))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${l}" but expected type "${i}".`)}}}const Dl="5.2.3";class q extends Zt{constructor(t,e){super(),t=at(t),t&&(this._element=t,this._config=this._getConfig(e),Re.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Re.remove(this._element,this.constructor.DATA_KEY),c.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,n=!0){Xn(t,e,n)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Re.get(at(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return Dl}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const Te=(o,t="hide")=>{const e=`click.dismiss${o.EVENT_KEY}`,n=o.NAME;c.on(document,e,`[data-bs-dismiss="${n}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),rt(this))return;const s=tt(this)||this.closest(`.${n}`);o.getOrCreateInstance(s)[t]()})},xl="alert",Nl="bs.alert",ii=`.${Nl}`,Ll=`close${ii}`,kl=`closed${ii}`,$l="fade",Ml="show";class Ce extends q{static get NAME(){return xl}close(){if(c.trigger(this._element,Ll).defaultPrevented)return;this._element.classList.remove(Ml);const e=this._element.classList.contains($l);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),c.trigger(this._element,kl),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=Ce.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Te(Ce,"close");W(Ce);const Fl="button",Il="bs.button",Rl=`.${Il}`,Bl=".data-api",Pl="active",Wo='[data-bs-toggle="button"]',Hl=`click${Rl}${Bl}`;class De extends q{static get NAME(){return Fl}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Pl))}static jQueryInterface(t){return this.each(function(){const e=De.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}c.on(document,Hl,Wo,o=>{o.preventDefault();const t=o.target.closest(Wo);De.getOrCreateInstance(t).toggle()});W(De);const b={find(o,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,o))},findOne(o,t=document.documentElement){return Element.prototype.querySelector.call(t,o)},children(o,t){return[].concat(...o.children).filter(e=>e.matches(t))},parents(o,t){const e=[];let n=o.parentNode.closest(t);for(;n;)e.push(n),n=n.parentNode.closest(t);return e},prev(o,t){let e=o.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(o,t){let e=o.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(o){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,o).filter(e=>!rt(e)&&Vt(e))}},Vl="swipe",jt=".bs.swipe",jl=`touchstart${jt}`,Gl=`touchmove${jt}`,Wl=`touchend${jt}`,Ul=`pointerdown${jt}`,Jl=`pointerup${jt}`,ql="touch",Kl="pen",zl="pointer-event",Yl=40,Xl={endCallback:null,leftCallback:null,rightCallback:null},Ql={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class ye extends Zt{constructor(t,e){super(),this._element=t,!(!t||!ye.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return Xl}static get DefaultType(){return Ql}static get NAME(){return Vl}dispose(){c.off(this._element,jt)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),Z(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=Yl)return;const e=t/this._deltaX;this._deltaX=0,e&&Z(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(c.on(this._element,Ul,t=>this._start(t)),c.on(this._element,Jl,t=>this._end(t)),this._element.classList.add(zl)):(c.on(this._element,jl,t=>this._start(t)),c.on(this._element,Gl,t=>this._move(t)),c.on(this._element,Wl,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===Kl||t.pointerType===ql)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Zl="carousel",ta="bs.carousel",pt=`.${ta}`,si=".data-api",ea="ArrowLeft",oa="ArrowRight",na=500,Jt="next",Tt="prev",Nt="left",be="right",ia=`slide${pt}`,Pe=`slid${pt}`,sa=`keydown${pt}`,la=`mouseenter${pt}`,aa=`mouseleave${pt}`,ra=`dragstart${pt}`,ua=`load${pt}${si}`,ca=`click${pt}${si}`,li="carousel",re="active",pa="slide",da="carousel-item-end",ha="carousel-item-start",va="carousel-item-next",ma="carousel-item-prev",ai=".active",ri=".carousel-item",fa=ai+ri,ba=".carousel-item img",Ea=".carousel-indicators",ga="[data-bs-slide], [data-bs-slide-to]",_a='[data-bs-ride="carousel"]',ya={[ea]:be,[oa]:Nt},Aa={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},wa={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class te extends q{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=b.findOne(Ea,this._element),this._addEventListeners(),this._config.ride===li&&this.cycle()}static get Default(){return Aa}static get DefaultType(){return wa}static get NAME(){return Zl}next(){this._slide(Jt)}nextWhenVisible(){!document.hidden&&Vt(this._element)&&this.next()}prev(){this._slide(Tt)}pause(){this._isSliding&&Kn(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){c.one(this._element,Pe,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){c.one(this._element,Pe,()=>this.to(t));return}const n=this._getItemIndex(this._getActive());if(n===t)return;const i=t>n?Jt:Tt;this._slide(i,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&c.on(this._element,sa,t=>this._keydown(t)),this._config.pause==="hover"&&(c.on(this._element,la,()=>this.pause()),c.on(this._element,aa,()=>this._maybeEnableCycle())),this._config.touch&&ye.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const n of b.find(ba,this._element))c.on(n,ra,i=>i.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(Nt)),rightCallback:()=>this._slide(this._directionToOrder(be)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),na+this._config.interval))}};this._swipeHelper=new ye(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=ya[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=b.findOne(ai,this._indicatorsElement);e.classList.remove(re),e.removeAttribute("aria-current");const n=b.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);n&&(n.classList.add(re),n.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const n=this._getActive(),i=t===Jt,s=e||go(this._getItems(),n,i,this._config.wrap);if(s===n)return;const l=this._getItemIndex(s),a=m=>c.trigger(this._element,m,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(n),to:l});if(a(ia).defaultPrevented||!n||!s)return;const p=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(l),this._activeElement=s;const u=i?ha:da,v=i?va:ma;s.classList.add(v),Qt(s),n.classList.add(u),s.classList.add(u);const E=()=>{s.classList.remove(u,v),s.classList.add(re),n.classList.remove(re,v,u),this._isSliding=!1,a(Pe)};this._queueCallback(E,n,this._isAnimated()),p&&this.cycle()}_isAnimated(){return this._element.classList.contains(pa)}_getActive(){return b.findOne(fa,this._element)}_getItems(){return b.find(ri,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return j()?t===Nt?Tt:Jt:t===Nt?Jt:Tt}_orderToDirection(t){return j()?t===Tt?Nt:be:t===Tt?be:Nt}static jQueryInterface(t){return this.each(function(){const e=te.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}c.on(document,ca,ga,function(o){const t=tt(this);if(!t||!t.classList.contains(li))return;o.preventDefault();const e=te.getOrCreateInstance(t),n=this.getAttribute("data-bs-slide-to");if(n){e.to(n),e._maybeEnableCycle();return}if(ot.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});c.on(window,ua,()=>{const o=b.find(_a);for(const t of o)te.getOrCreateInstance(t)});W(te);const Sa="collapse",Oa="bs.collapse",ee=`.${Oa}`,Ta=".data-api",Ca=`show${ee}`,Da=`shown${ee}`,xa=`hide${ee}`,Na=`hidden${ee}`,La=`click${ee}${Ta}`,He="show",kt="collapse",ue="collapsing",ka="collapsed",$a=`:scope .${kt} .${kt}`,Ma="collapse-horizontal",Fa="width",Ia="height",Ra=".collapse.show, .collapse.collapsing",eo='[data-bs-toggle="collapse"]',Ba={parent:null,toggle:!0},Pa={parent:"(null|element)",toggle:"boolean"};class Yt extends q{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const n=b.find(eo);for(const i of n){const s=qn(i),l=b.find(s).filter(a=>a===this._element);s!==null&&l.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Ba}static get DefaultType(){return Pa}static get NAME(){return Sa}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(Ra).filter(a=>a!==this._element).map(a=>Yt.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||c.trigger(this._element,Ca).defaultPrevented)return;for(const a of t)a.hide();const n=this._getDimension();this._element.classList.remove(kt),this._element.classList.add(ue),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(ue),this._element.classList.add(kt,He),this._element.style[n]="",c.trigger(this._element,Da)},l=`scroll${n[0].toUpperCase()+n.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[n]=`${this._element[l]}px`}hide(){if(this._isTransitioning||!this._isShown()||c.trigger(this._element,xa).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,Qt(this._element),this._element.classList.add(ue),this._element.classList.remove(kt,He);for(const i of this._triggerArray){const s=tt(i);s&&!this._isShown(s)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(ue),this._element.classList.add(kt),c.trigger(this._element,Na)};this._element.style[e]="",this._queueCallback(n,this._element,!0)}_isShown(t=this._element){return t.classList.contains(He)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=at(t.parent),t}_getDimension(){return this._element.classList.contains(Ma)?Fa:Ia}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(eo);for(const e of t){const n=tt(e);n&&this._addAriaAndCollapsedClass([e],this._isShown(n))}}_getFirstLevelChildren(t){const e=b.find($a,this._config.parent);return b.find(t,this._config.parent).filter(n=>!e.includes(n))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const n of t)n.classList.toggle(ka,!e),n.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const n=Yt.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}c.on(document,La,eo,function(o){(o.target.tagName==="A"||o.delegateTarget&&o.delegateTarget.tagName==="A")&&o.preventDefault();const t=qn(this),e=b.find(t);for(const n of e)Yt.getOrCreateInstance(n,{toggle:!1}).toggle()});W(Yt);const Uo="dropdown",Ha="bs.dropdown",wt=`.${Ha}`,yo=".data-api",Va="Escape",Jo="Tab",ja="ArrowUp",qo="ArrowDown",Ga=2,Wa=`hide${wt}`,Ua=`hidden${wt}`,Ja=`show${wt}`,qa=`shown${wt}`,ui=`click${wt}${yo}`,ci=`keydown${wt}${yo}`,Ka=`keyup${wt}${yo}`,Lt="show",za="dropup",Ya="dropend",Xa="dropstart",Qa="dropup-center",Za="dropdown-center",Et='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',tr=`${Et}.${Lt}`,Ee=".dropdown-menu",er=".navbar",or=".navbar-nav",nr=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",ir=j()?"top-end":"top-start",sr=j()?"top-start":"top-end",lr=j()?"bottom-end":"bottom-start",ar=j()?"bottom-start":"bottom-end",rr=j()?"left-start":"right-start",ur=j()?"right-start":"left-start",cr="top",pr="bottom",dr={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},hr={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class X extends q{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=b.next(this._element,Ee)[0]||b.prev(this._element,Ee)[0]||b.findOne(Ee,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return dr}static get DefaultType(){return hr}static get NAME(){return Uo}toggle(){return this._isShown()?this.hide():this.show()}show(){if(rt(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!c.trigger(this._element,Ja,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(or))for(const n of[].concat(...document.body.children))c.on(n,"mouseover",_e);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Lt),this._element.classList.add(Lt),c.trigger(this._element,qa,t)}}hide(){if(rt(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!c.trigger(this._element,Wa,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const n of[].concat(...document.body.children))c.off(n,"mouseover",_e);this._popper&&this._popper.destroy(),this._menu.classList.remove(Lt),this._element.classList.remove(Lt),this._element.setAttribute("aria-expanded","false"),ot.removeDataAttribute(this._menu,"popper"),c.trigger(this._element,Ua,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!et(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${Uo.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof Un>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:et(this._config.reference)?t=at(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=Eo(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Lt)}_getPlacement(){const t=this._parent;if(t.classList.contains(Ya))return rr;if(t.classList.contains(Xa))return ur;if(t.classList.contains(Qa))return cr;if(t.classList.contains(Za))return pr;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(za)?e?sr:ir:e?ar:lr}_detectNavbar(){return this._element.closest(er)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(ot.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...typeof this._config.popperConfig=="function"?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const n=b.find(nr,this._menu).filter(i=>Vt(i));n.length&&go(n,e,t===qo,!n.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=X.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===Ga||t.type==="keyup"&&t.key!==Jo)return;const e=b.find(tr);for(const n of e){const i=X.getInstance(n);if(!i||i._config.autoClose===!1)continue;const s=t.composedPath(),l=s.includes(i._menu);if(s.includes(i._element)||i._config.autoClose==="inside"&&!l||i._config.autoClose==="outside"&&l||i._menu.contains(t.target)&&(t.type==="keyup"&&t.key===Jo||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:i._element};t.type==="click"&&(a.clickEvent=t),i._completeHide(a)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),n=t.key===Va,i=[ja,qo].includes(t.key);if(!i&&!n||e&&!n)return;t.preventDefault();const s=this.matches(Et)?this:b.prev(this,Et)[0]||b.next(this,Et)[0]||b.findOne(Et,t.delegateTarget.parentNode),l=X.getOrCreateInstance(s);if(i){t.stopPropagation(),l.show(),l._selectMenuItem(t);return}l._isShown()&&(t.stopPropagation(),l.hide(),s.focus())}}c.on(document,ci,Et,X.dataApiKeydownHandler);c.on(document,ci,Ee,X.dataApiKeydownHandler);c.on(document,ui,X.clearMenus);c.on(document,Ka,X.clearMenus);c.on(document,ui,Et,function(o){o.preventDefault(),X.getOrCreateInstance(this).toggle()});W(X);const Ko=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",zo=".sticky-top",ce="padding-right",Yo="margin-right";class oo{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,ce,e=>e+t),this._setElementAttributes(Ko,ce,e=>e+t),this._setElementAttributes(zo,Yo,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,ce),this._resetElementAttributes(Ko,ce),this._resetElementAttributes(zo,Yo)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,n){const i=this.getWidth(),s=l=>{if(l!==this._element&&window.innerWidth>l.clientWidth+i)return;this._saveInitialAttribute(l,e);const a=window.getComputedStyle(l).getPropertyValue(e);l.style.setProperty(e,`${n(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,s)}_saveInitialAttribute(t,e){const n=t.style.getPropertyValue(e);n&&ot.setDataAttribute(t,e,n)}_resetElementAttributes(t,e){const n=i=>{const s=ot.getDataAttribute(i,e);if(s===null){i.style.removeProperty(e);return}ot.removeDataAttribute(i,e),i.style.setProperty(e,s)};this._applyManipulationCallback(t,n)}_applyManipulationCallback(t,e){if(et(t)){e(t);return}for(const n of b.find(t,this._element))e(n)}}const pi="backdrop",vr="fade",Xo="show",Qo=`mousedown.bs.${pi}`,mr={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},fr={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class di extends Zt{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return mr}static get DefaultType(){return fr}static get NAME(){return pi}show(t){if(!this._config.isVisible){Z(t);return}this._append();const e=this._getElement();this._config.isAnimated&&Qt(e),e.classList.add(Xo),this._emulateAnimation(()=>{Z(t)})}hide(t){if(!this._config.isVisible){Z(t);return}this._getElement().classList.remove(Xo),this._emulateAnimation(()=>{this.dispose(),Z(t)})}dispose(){this._isAppended&&(c.off(this._element,Qo),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(vr),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=at(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),c.on(t,Qo,()=>{Z(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Xn(t,this._getElement(),this._config.isAnimated)}}const br="focustrap",Er="bs.focustrap",Ae=`.${Er}`,gr=`focusin${Ae}`,_r=`keydown.tab${Ae}`,yr="Tab",Ar="forward",Zo="backward",wr={autofocus:!0,trapElement:null},Sr={autofocus:"boolean",trapElement:"element"};class hi extends Zt{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return wr}static get DefaultType(){return Sr}static get NAME(){return br}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),c.off(document,Ae),c.on(document,gr,t=>this._handleFocusin(t)),c.on(document,_r,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,c.off(document,Ae))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const n=b.focusableChildren(e);n.length===0?e.focus():this._lastTabNavDirection===Zo?n[n.length-1].focus():n[0].focus()}_handleKeydown(t){t.key===yr&&(this._lastTabNavDirection=t.shiftKey?Zo:Ar)}}const Or="modal",Tr="bs.modal",K=`.${Tr}`,Cr=".data-api",Dr="Escape",xr=`hide${K}`,Nr=`hidePrevented${K}`,vi=`hidden${K}`,mi=`show${K}`,Lr=`shown${K}`,kr=`resize${K}`,$r=`click.dismiss${K}`,Mr=`mousedown.dismiss${K}`,Fr=`keydown.dismiss${K}`,Ir=`click${K}${Cr}`,tn="modal-open",Rr="fade",en="show",Ve="modal-static",Br=".modal.show",Pr=".modal-dialog",Hr=".modal-body",Vr='[data-bs-toggle="modal"]',jr={backdrop:!0,focus:!0,keyboard:!0},Gr={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Bt extends q{constructor(t,e){super(t,e),this._dialog=b.findOne(Pr,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new oo,this._addEventListeners()}static get Default(){return jr}static get DefaultType(){return Gr}static get NAME(){return Or}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||c.trigger(this._element,mi,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(tn),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||c.trigger(this._element,xr).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(en),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const t of[window,this._dialog])c.off(t,K);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new di({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new hi({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=b.findOne(Hr,this._dialog);e&&(e.scrollTop=0),Qt(this._element),this._element.classList.add(en);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,c.trigger(this._element,Lr,{relatedTarget:t})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){c.on(this._element,Fr,t=>{if(t.key===Dr){if(this._config.keyboard){t.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),c.on(window,kr,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),c.on(this._element,Mr,t=>{c.one(this._element,$r,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(tn),this._resetAdjustments(),this._scrollBar.reset(),c.trigger(this._element,vi)})}_isAnimated(){return this._element.classList.contains(Rr)}_triggerBackdropTransition(){if(c.trigger(this._element,Nr).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;n==="hidden"||this._element.classList.contains(Ve)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(Ve),this._queueCallback(()=>{this._element.classList.remove(Ve),this._queueCallback(()=>{this._element.style.overflowY=n},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),n=e>0;if(n&&!t){const i=j()?"paddingLeft":"paddingRight";this._element.style[i]=`${e}px`}if(!n&&t){const i=j()?"paddingRight":"paddingLeft";this._element.style[i]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const n=Bt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t](e)}})}}c.on(document,Ir,Vr,function(o){const t=tt(this);["A","AREA"].includes(this.tagName)&&o.preventDefault(),c.one(t,mi,i=>{i.defaultPrevented||c.one(t,vi,()=>{Vt(this)&&this.focus()})});const e=b.findOne(Br);e&&Bt.getInstance(e).hide(),Bt.getOrCreateInstance(t).toggle(this)});Te(Bt);W(Bt);const Wr="offcanvas",Ur="bs.offcanvas",it=`.${Ur}`,fi=".data-api",Jr=`load${it}${fi}`,qr="Escape",on="show",nn="showing",sn="hiding",Kr="offcanvas-backdrop",bi=".offcanvas.show",zr=`show${it}`,Yr=`shown${it}`,Xr=`hide${it}`,ln=`hidePrevented${it}`,Ei=`hidden${it}`,Qr=`resize${it}`,Zr=`click${it}${fi}`,tu=`keydown.dismiss${it}`,eu='[data-bs-toggle="offcanvas"]',ou={backdrop:!0,keyboard:!0,scroll:!1},nu={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class ut extends q{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return ou}static get DefaultType(){return nu}static get NAME(){return Wr}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||c.trigger(this._element,zr,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new oo().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(nn);const n=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(on),this._element.classList.remove(nn),c.trigger(this._element,Yr,{relatedTarget:t})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown||c.trigger(this._element,Xr).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(sn),this._backdrop.hide();const e=()=>{this._element.classList.remove(on,sn),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new oo().reset(),c.trigger(this._element,Ei)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){c.trigger(this._element,ln);return}this.hide()},e=Boolean(this._config.backdrop);return new di({className:Kr,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new hi({trapElement:this._element})}_addEventListeners(){c.on(this._element,tu,t=>{if(t.key===qr){if(!this._config.keyboard){c.trigger(this._element,ln);return}this.hide()}})}static jQueryInterface(t){return this.each(function(){const e=ut.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}c.on(document,Zr,eu,function(o){const t=tt(this);if(["A","AREA"].includes(this.tagName)&&o.preventDefault(),rt(this))return;c.one(t,Ei,()=>{Vt(this)&&this.focus()});const e=b.findOne(bi);e&&e!==t&&ut.getInstance(e).hide(),ut.getOrCreateInstance(t).toggle(this)});c.on(window,Jr,()=>{for(const o of b.find(bi))ut.getOrCreateInstance(o).show()});c.on(window,Qr,()=>{for(const o of b.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(o).position!=="fixed"&&ut.getOrCreateInstance(o).hide()});Te(ut);W(ut);const iu=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),su=/^aria-[\w-]*$/i,lu=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,au=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,ru=(o,t)=>{const e=o.nodeName.toLowerCase();return t.includes(e)?iu.has(e)?Boolean(lu.test(o.nodeValue)||au.test(o.nodeValue)):!0:t.filter(n=>n instanceof RegExp).some(n=>n.test(e))},gi={"*":["class","dir","id","lang","role",su],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function uu(o,t,e){if(!o.length)return o;if(e&&typeof e=="function")return e(o);const i=new window.DOMParser().parseFromString(o,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const l of s){const a=l.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){l.remove();continue}const r=[].concat(...l.attributes),p=[].concat(t["*"]||[],t[a]||[]);for(const u of r)ru(u,p)||l.removeAttribute(u.nodeName)}return i.body.innerHTML}const cu="TemplateFactory",pu={allowList:gi,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},du={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},hu={entry:"(string|element|function|null)",selector:"(string|element)"};class vu extends Zt{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return pu}static get DefaultType(){return du}static get NAME(){return cu}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[i,s]of Object.entries(this._config.content))this._setContent(t,s,i);const e=t.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&e.classList.add(...n.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,n]of Object.entries(t))super._typeCheckConfig({selector:e,entry:n},hu)}_setContent(t,e,n){const i=b.findOne(n,t);if(i){if(e=this._resolvePossibleFunction(e),!e){i.remove();return}if(et(e)){this._putElementInTemplate(at(e),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(e);return}i.textContent=e}}_maybeSanitize(t){return this._config.sanitize?uu(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return typeof t=="function"?t(this):t}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const mu="tooltip",fu=new Set(["sanitize","allowList","sanitizeFn"]),je="fade",bu="modal",pe="show",Eu=".tooltip-inner",an=`.${bu}`,rn="hide.bs.modal",qt="hover",Ge="focus",gu="click",_u="manual",yu="hide",Au="hidden",wu="show",Su="shown",Ou="inserted",Tu="click",Cu="focusin",Du="focusout",xu="mouseenter",Nu="mouseleave",Lu={AUTO:"auto",TOP:"top",RIGHT:j()?"left":"right",BOTTOM:"bottom",LEFT:j()?"right":"left"},ku={allowList:gi,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},$u={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Gt extends q{constructor(t,e){if(typeof Un>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return ku}static get DefaultType(){return $u}static get NAME(){return mu}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),c.off(this._element.closest(an),rn,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=c.trigger(this._element,this.constructor.eventName(wu)),n=(zn(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!n)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),c.trigger(this._element,this.constructor.eventName(Ou))),this._popper=this._createPopper(i),i.classList.add(pe),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))c.on(a,"mouseover",_e);const l=()=>{c.trigger(this._element,this.constructor.eventName(Su)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(l,this.tip,this._isAnimated())}hide(){if(!this._isShown()||c.trigger(this._element,this.constructor.eventName(yu)).defaultPrevented)return;if(this._getTipElement().classList.remove(pe),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))c.off(i,"mouseover",_e);this._activeTrigger[gu]=!1,this._activeTrigger[Ge]=!1,this._activeTrigger[qt]=!1,this._isHovered=null;const n=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),c.trigger(this._element,this.constructor.eventName(Au)))};this._queueCallback(n,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(je,pe),e.classList.add(`bs-${this.constructor.NAME}-auto`);const n=El(this.constructor.NAME).toString();return e.setAttribute("id",n),this._isAnimated()&&e.classList.add(je),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new vu({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Eu]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(je)}_isShown(){return this.tip&&this.tip.classList.contains(pe)}_createPopper(t){const e=typeof this._config.placement=="function"?this._config.placement.call(this,t,this._element):this._config.placement,n=Lu[e.toUpperCase()];return Eo(this._element,t,this._getPopperConfig(n))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return typeof t=="function"?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:n=>{this._getTipElement().setAttribute("data-popper-placement",n.state.placement)}}]};return{...e,...typeof this._config.popperConfig=="function"?this._config.popperConfig(e):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")c.on(this._element,this.constructor.eventName(Tu),this._config.selector,n=>{this._initializeOnDelegatedTarget(n).toggle()});else if(e!==_u){const n=e===qt?this.constructor.eventName(xu):this.constructor.eventName(Cu),i=e===qt?this.constructor.eventName(Nu):this.constructor.eventName(Du);c.on(this._element,n,this._config.selector,s=>{const l=this._initializeOnDelegatedTarget(s);l._activeTrigger[s.type==="focusin"?Ge:qt]=!0,l._enter()}),c.on(this._element,i,this._config.selector,s=>{const l=this._initializeOnDelegatedTarget(s);l._activeTrigger[s.type==="focusout"?Ge:qt]=l._element.contains(s.relatedTarget),l._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},c.on(this._element.closest(an),rn,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=ot.getDataAttributes(this._element);for(const n of Object.keys(e))fu.has(n)&&delete e[n];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:at(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=Gt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}W(Gt);const Mu="popover",Fu=".popover-header",Iu=".popover-body",Ru={...Gt.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Bu={...Gt.DefaultType,content:"(null|string|element|function)"};class Ao extends Gt{static get Default(){return Ru}static get DefaultType(){return Bu}static get NAME(){return Mu}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Fu]:this._getTitle(),[Iu]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=Ao.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}W(Ao);const Pu="scrollspy",Hu="bs.scrollspy",wo=`.${Hu}`,Vu=".data-api",ju=`activate${wo}`,un=`click${wo}`,Gu=`load${wo}${Vu}`,Wu="dropdown-item",Ct="active",Uu='[data-bs-spy="scroll"]',We="[href]",Ju=".nav, .list-group",cn=".nav-link",qu=".nav-item",Ku=".list-group-item",zu=`${cn}, ${qu} > ${cn}, ${Ku}`,Yu=".dropdown",Xu=".dropdown-toggle",Qu={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Zu={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class xe extends q{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Qu}static get DefaultType(){return Zu}static get NAME(){return Pu}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=at(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(c.off(this._config.target,un),c.on(this._config.target,un,We,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const n=this._rootElement||window,i=e.offsetTop-this._element.offsetTop;if(n.scrollTo){n.scrollTo({top:i,behavior:"smooth"});return}n.scrollTop=i}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=l=>this._targetLinks.get(`#${l.target.id}`),n=l=>{this._previousScrollData.visibleEntryTop=l.target.offsetTop,this._process(e(l))},i=(this._rootElement||document.documentElement).scrollTop,s=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const l of t){if(!l.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(l));continue}const a=l.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&a){if(n(l),!i)return;continue}!s&&!a&&n(l)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=b.find(We,this._config.target);for(const e of t){if(!e.hash||rt(e))continue;const n=b.findOne(e.hash,this._element);Vt(n)&&(this._targetLinks.set(e.hash,e),this._observableSections.set(e.hash,n))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Ct),this._activateParents(t),c.trigger(this._element,ju,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(Wu)){b.findOne(Xu,t.closest(Yu)).classList.add(Ct);return}for(const e of b.parents(t,Ju))for(const n of b.prev(e,zu))n.classList.add(Ct)}_clearActiveClass(t){t.classList.remove(Ct);const e=b.find(`${We}.${Ct}`,t);for(const n of e)n.classList.remove(Ct)}static jQueryInterface(t){return this.each(function(){const e=xe.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}c.on(window,Gu,()=>{for(const o of b.find(Uu))xe.getOrCreateInstance(o)});W(xe);const tc="tab",ec="bs.tab",St=`.${ec}`,oc=`hide${St}`,nc=`hidden${St}`,ic=`show${St}`,sc=`shown${St}`,lc=`click${St}`,ac=`keydown${St}`,rc=`load${St}`,uc="ArrowLeft",pn="ArrowRight",cc="ArrowUp",dn="ArrowDown",gt="active",hn="fade",Ue="show",pc="dropdown",dc=".dropdown-toggle",hc=".dropdown-menu",Je=":not(.dropdown-toggle)",vc='.list-group, .nav, [role="tablist"]',mc=".nav-item, .list-group-item",fc=`.nav-link${Je}, .list-group-item${Je}, [role="tab"]${Je}`,_i='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',qe=`${fc}, ${_i}`,bc=`.${gt}[data-bs-toggle="tab"], .${gt}[data-bs-toggle="pill"], .${gt}[data-bs-toggle="list"]`;class Pt extends q{constructor(t){super(t),this._parent=this._element.closest(vc),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),c.on(this._element,ac,e=>this._keydown(e)))}static get NAME(){return tc}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),n=e?c.trigger(e,oc,{relatedTarget:t}):null;c.trigger(t,ic,{relatedTarget:e}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(gt),this._activate(tt(t));const n=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(Ue);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),c.trigger(t,sc,{relatedTarget:e})};this._queueCallback(n,t,t.classList.contains(hn))}_deactivate(t,e){if(!t)return;t.classList.remove(gt),t.blur(),this._deactivate(tt(t));const n=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(Ue);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),c.trigger(t,nc,{relatedTarget:e})};this._queueCallback(n,t,t.classList.contains(hn))}_keydown(t){if(![uc,pn,cc,dn].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=[pn,dn].includes(t.key),n=go(this._getChildren().filter(i=>!rt(i)),t.target,e,!0);n&&(n.focus({preventScroll:!0}),Pt.getOrCreateInstance(n).show())}_getChildren(){return b.find(qe,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const n of e)this._setInitialAttributesOnChild(n)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),n=this._getOuterElement(t);t.setAttribute("aria-selected",e),n!==t&&this._setAttributeIfNotExists(n,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=tt(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,e){const n=this._getOuterElement(t);if(!n.classList.contains(pc))return;const i=(s,l)=>{const a=b.findOne(s,n);a&&a.classList.toggle(l,e)};i(dc,gt),i(hc,Ue),n.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,n){t.hasAttribute(e)||t.setAttribute(e,n)}_elemIsActive(t){return t.classList.contains(gt)}_getInnerElement(t){return t.matches(qe)?t:b.findOne(qe,t)}_getOuterElement(t){return t.closest(mc)||t}static jQueryInterface(t){return this.each(function(){const e=Pt.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}c.on(document,lc,_i,function(o){["A","AREA"].includes(this.tagName)&&o.preventDefault(),!rt(this)&&Pt.getOrCreateInstance(this).show()});c.on(window,rc,()=>{for(const o of b.find(bc))Pt.getOrCreateInstance(o)});W(Pt);const Ec="toast",gc="bs.toast",dt=`.${gc}`,_c=`mouseover${dt}`,yc=`mouseout${dt}`,Ac=`focusin${dt}`,wc=`focusout${dt}`,Sc=`hide${dt}`,Oc=`hidden${dt}`,Tc=`show${dt}`,Cc=`shown${dt}`,Dc="fade",vn="hide",de="show",he="showing",xc={animation:"boolean",autohide:"boolean",delay:"number"},Nc={animation:!0,autohide:!0,delay:5e3};class Ne extends q{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Nc}static get DefaultType(){return xc}static get NAME(){return Ec}show(){if(c.trigger(this._element,Tc).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Dc);const e=()=>{this._element.classList.remove(he),c.trigger(this._element,Cc),this._maybeScheduleHide()};this._element.classList.remove(vn),Qt(this._element),this._element.classList.add(de,he),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||c.trigger(this._element,Sc).defaultPrevented)return;const e=()=>{this._element.classList.add(vn),this._element.classList.remove(he,de),c.trigger(this._element,Oc)};this._element.classList.add(he),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(de),super.dispose()}isShown(){return this._element.classList.contains(de)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const n=t.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){c.on(this._element,_c,t=>this._onInteraction(t,!0)),c.on(this._element,yc,t=>this._onInteraction(t,!1)),c.on(this._element,Ac,t=>this._onInteraction(t,!0)),c.on(this._element,wc,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=Ne.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Te(Ne);W(Ne);const Lc="modulepreload",kc=function(o,t){return new URL(o,t).href},mn={},z=function(t,e,n){if(!e||e.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(e.map(s=>{if(s=kc(s,n),s in mn)return;mn[s]=!0;const l=s.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(!!n)for(let u=i.length-1;u>=0;u--){const v=i[u];if(v.href===s&&(!l||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":Lc,l||(p.as="script",p.crossOrigin=""),p.href=s,document.head.appendChild(p),l)return new Promise((u,v)=>{p.addEventListener("load",u),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},$c=(o,t)=>{const e=o[t];return e?typeof e=="function"?e():Promise.resolve(e):new Promise((n,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+t)))})};var Mc=Object.defineProperty,Fc=(o,t,e)=>t in o?Mc(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,f=(o,t,e)=>(Fc(o,typeof t!="symbol"?t+"":t,e),e),yi={name:"",placeholder:"",data:void 0,locale:void 0,selectAll:!0,single:void 0,singleRadio:!1,multiple:!1,hideOptgroupCheckboxes:!1,multipleWidth:80,width:void 0,dropWidth:void 0,maxHeight:250,maxHeightUnit:"px",position:"bottom",displayValues:!1,displayTitle:!1,displayDelimiter:", ",minimumCountSelected:3,ellipsis:!1,isOpen:!1,keepOpen:!1,openOnHover:!1,container:null,filter:!1,filterGroup:!1,filterPlaceholder:"",filterAcceptOnEnter:!1,filterByDataLength:void 0,customFilter(o,t){return o.includes(t)},showClear:!1,animate:void 0,styler:()=>!1,textTemplate:o=>o.innerHTML.trim(),labelTemplate:o=>o.label,onOpen:()=>!1,onClose:()=>!1,onCheckAll:()=>!1,onUncheckAll:()=>!1,onFocus:()=>!1,onBlur:()=>!1,onOptgroupClick:()=>!1,onClick:()=>!1,onFilter:()=>!1,onClear:()=>!1,onAfterCreate:()=>!1,onDestroy:()=>!1,onAfterDestroy:()=>!1,onDestroyed:()=>!1},no={formatSelectAll:()=>"[Select all]",formatAllSelected:()=>"All selected",formatCountSelected:(o,t)=>`${o} of ${t} selected`,formatNoMatchesFound:()=>"No matches found"},Ic=["init","getOptions","refreshOptions","getSelects","setSelects","enable","disable","open","close","check","uncheck","checkAll","uncheckAll","checkInvert","focus","blur","refresh","destroy"];Object.assign(yi,no);var Rc={BLOCK_ROWS:50,CLUSTER_BLOCKS:4,DEFAULTS:yi,METHODS:Ic,LOCALES:{en:no,"en-US":no}},C=Rc,Bc={["en-US"]:{formatSelectAll(){return"[Select all]"},formatAllSelected(){return"All selected"},formatCountSelected(o,t){return o+" of "+t+" selected"},formatNoMatchesFound(){return"No matches found"}}};Object.assign(C.LOCALES,Bc);var Pc={["es-ES"]:{formatSelectAll(){return"[Seleccionar todo]"},formatAllSelected(){return"Todos seleccionados"},formatCountSelected(o,t){return o+" de "+t+" seleccionado"},formatNoMatchesFound(){return"No se encontraron coincidencias"}}};Object.assign(C.LOCALES,Pc);var Hc={["fr-FR"]:{formatSelectAll(){return"[Tout sélectionner]"},formatAllSelected(){return"Tous sélectionnés"},formatCountSelected(o,t){return o+" de "+t+" sélectionnés"},formatNoMatchesFound(){return"Aucun résultat"}}};Object.assign(C.LOCALES,Hc);var Vc={["hu-HU"]:{formatSelectAll(){return"[Összes kiválasztása]"},formatAllSelected(){return"Összes kiválasztva"},formatCountSelected(o,t){return o+" / "+t+" kiválasztva"},formatNoMatchesFound(){return"Nincs találat"}}};Object.assign(C.LOCALES,Vc);var jc={["it-IT"]:{formatSelectAll(){return"[Seleziona tutti]"},formatAllSelected(){return"Tutti selezionati"},formatCountSelected(o,t){return o+" di "+t+" selezionati"},formatNoMatchesFound(){return"Nessun risultato"}}};Object.assign(C.LOCALES,jc);var Gc={["pt-BR"]:{formatSelectAll(){return"[Selecionar todos]"},formatAllSelected(){return"Todos selecionados"},formatCountSelected(o,t){return o+" de "+t+" selecionado(s)"},formatNoMatchesFound(){return"Nenhum resultado encontrado"}}};Object.assign(C.LOCALES,Gc);var Wc={["ru-RU"]:{formatSelectAll(){return"[Выбрать все]"},formatAllSelected(){return"Выбрано все"},formatCountSelected(o,t){return o+" из "+t+" выбрано"},formatNoMatchesFound(){return"Совпадений не найдено"}}};Object.assign(C.LOCALES,Wc);var Uc={["vi-VN"]:{formatSelectAll(){return"[Tất cả]"},formatAllSelected(){return"Chọn tất cả"},formatCountSelected(o,t){return"Đã chọn "+o+" trong "+t},formatNoMatchesFound(){return"Không tìm thấy kết quả."}}};Object.assign(C.LOCALES,Uc);var Jc={["zh-CN"]:{formatSelectAll(){return"[全选]"},formatAllSelected(){return"已选择所有记录"},formatCountSelected(o,t){return"已从"+t+"条记录中选择"+o+"条"},formatNoMatchesFound(){return"没有找到记录"}}};Object.assign(C.LOCALES,Jc);var qc={["zh-TW"]:{formatSelectAll(){return"[全選]"},formatAllSelected(){return"已選擇所有記錄"},formatCountSelected(o,t){return"已從"+t+"條記錄中選擇"+o+"條"},formatNoMatchesFound(){return"沒有找到記錄"}}};Object.assign(C.LOCALES,qc);var Kc=class{constructor(o){f(this,"_distinctEvent"),f(this,"_boundedEvents",[]),this._distinctEvent=(o==null?void 0:o.distinctEvent)??!1}get boundedEvents(){return this._boundedEvents}dispose(){this.unbindAll(),this._boundedEvents=[]}bind(o,t,e,n){let i=Array.isArray(t)?t:[t];if(o!=null&&o.forEach)o==null||o.forEach(s=>{for(let l of i)(!this._distinctEvent||this._distinctEvent&&!this.hasBinding(s,l))&&(s.addEventListener(l,e,n),this._boundedEvents.push({element:s,eventName:l,listener:e}))});else for(let s of i)(!this._distinctEvent||this._distinctEvent&&!this.hasBinding(o,s))&&(o.addEventListener(s,e,n),this._boundedEvents.push({element:o,eventName:s,listener:e}))}hasBinding(o,t){return this._boundedEvents.some(e=>e.element===o&&(!t||e.eventName===t))}unbind(o,t,e){var n;if(o){let i=Array.isArray(o)?o:[o],s=Array.isArray(t)?t||"":[t||""];for(let l of i){e||(e=this._boundedEvents.find(a=>{if(a.element===l&&(!t||a.eventName===t))return a.listener}));for(let a of s)(n=l==null?void 0:l.removeEventListener)==null||n.call(l,a,e)}}}unbindAll(){for(;this._boundedEvents.length>0;){let o=this._boundedEvents.pop(),{element:t,eventName:e,listener:n}=o;this.unbind(t,e,n)}}},zc=class{constructor(o){f(this,"cache"),f(this,"clusterRows"),f(this,"dataStart"),f(this,"dataEnd"),f(this,"rows"),f(this,"scrollEl"),f(this,"blockHeight"),f(this,"clusterHeight"),f(this,"contentEl"),f(this,"parentEl"),f(this,"itemHeight"),f(this,"lastCluster"),f(this,"scrollTop"),f(this,"destroy"),f(this,"callback"),this.rows=o.rows,this.scrollEl=o.scrollEl,this.contentEl=o.contentEl,this.parentEl=o.contentEl.parentElement,this.callback=o.callback,this.cache={},this.scrollTop=this.scrollEl.scrollTop,this.initDOM(this.rows),this.scrollEl.scrollTop=this.scrollTop,this.lastCluster=0;let t=()=>{this.lastCluster!==(this.lastCluster=this.getNum())&&(this.initDOM(this.rows),this.callback())};this.scrollEl.addEventListener("scroll",t,!1),this.destroy=()=>{this.contentEl.innerHTML="",this.scrollEl.removeEventListener("scroll",t,!1)}}initDOM(o){if(typeof this.clusterHeight>"u"){this.cache.scrollTop=this.scrollEl.scrollTop;let a=o[0]+o[0]+o[0];this.contentEl.innerHTML=`${a}`,this.cache.data=a,this.getRowsHeight()}let t=this.initData(o,this.getNum()),e=t.rows.join(""),n=this.checkChanges("data",e),i=this.checkChanges("top",t.topOffset),s=this.checkChanges("bottom",t.bottomOffset),l=[];n&&i?(t.topOffset&&l.push(this.getExtra("top",t.topOffset)),l.push(e),t.bottomOffset&&l.push(this.getExtra("bottom",t.bottomOffset)),this.contentEl.innerHTML=l.join("")):s&&this.contentEl.lastChild&&(this.contentEl.lastChild.style.height=`${t.bottomOffset}px`)}getRowsHeight(){var o;if(typeof this.itemHeight>"u"){let t=((o=this.parentEl)==null?void 0:o.style.display)||"";this.parentEl&&(t===""||t==="none")&&(this.parentEl.style.display="block");let e=this.contentEl.children,n=e[Math.floor(e.length/2)];this.itemHeight=n.offsetHeight,this.parentEl&&(this.parentEl.style.display=t)}this.blockHeight=this.itemHeight*C.BLOCK_ROWS,this.clusterRows=C.BLOCK_ROWS*C.CLUSTER_BLOCKS,this.clusterHeight=this.blockHeight*C.CLUSTER_BLOCKS}getNum(){return this.scrollTop=this.scrollEl.scrollTop,Math.floor(this.scrollTop/(this.clusterHeight-this.blockHeight))||0}initData(o,t){if(o.length<C.BLOCK_ROWS)return{topOffset:0,bottomOffset:0,rowsAbove:0,rows:o};let e=Math.max((this.clusterRows-C.BLOCK_ROWS)*t,0),n=e+this.clusterRows,i=Math.max(e*this.itemHeight,0),s=Math.max((o.length-n)*this.itemHeight,0),l=[],a=e;i<1&&a++;for(let r=e;r<n;r++)o[r]&&l.push(o[r]);return this.dataStart=e,this.dataEnd=n,{topOffset:i,bottomOffset:s,rowsAbove:a,rows:l}}checkChanges(o,t){let e=t!==this.cache[o];return this.cache[o]=t,e}getExtra(o,t){let e=document.createElement("li");return e.className=`virtual-scroll-${o}`,t&&(e.style.height=`${t}px`),e.outerHTML}};function H(o,t){let e=document.createElement(o);return t&&Object.keys(t).forEach(n=>{let i=t[n];typeof i=="object"?Object.assign({},e[n],i):e[n]=t[n]}),e}function Yc(o){var l;if(!o)return;let t=(l=o==null?void 0:o.getBoundingClientRect)==null?void 0:l.call(o),e=0,n=0,i=0,s=0;return(t==null?void 0:t.top)!==void 0&&t.left!==void 0&&(e=t.top+window.pageYOffset,n=t.left+window.pageXOffset,s=t.right,i=t.bottom),{top:e,left:n,bottom:i,right:s}}function ve(o,t,e){let n=parseFloat(o.style[e]);if(!n||isNaN(n)){switch(t){case"outer":n=o[e==="width"?"offsetWidth":"offsetHeight"];break;case"scroll":n=o[e==="width"?"scrollWidth":"scrollHeight"];break;case"inner":default:n=o[e==="width"?"clientWidth":"clientHeight"];break}n=o.getBoundingClientRect()[e]}if(!n||isNaN(n)){let i=o.style.display,s=o.style.position;o.style.display="block",o.style.position="absolute";let l=window.getComputedStyle(o)[e];n=parseFloat(l),isNaN(n)&&(n=0),o.style.display=i,o.style.position=s}return n||0}function fn(o,t){let e=null,n=o.parentElement;for(;n;){let[i,s,l,a]=t.match(/^([a-z]*)([#.]{1})([a-z\-]+)$/i)||[];if(l&&a)for(let r of a.replace(l,"").split(" "))n.classList.contains(r)&&(s?(n==null?void 0:n.tagName.toLowerCase())===s&&(e=n):e=n);n=n.parentElement}return e}function Xc(o,t){var e;(e=o.parentNode)==null||e.insertBefore(t,o.nextSibling)}function bn(o,t){o!=null&&o.style&&(o.style.display=o.style.display==="none"&&t!==!1||t===!0?"block":"none")}function Qc(o,t,e=!1){let n=Object.keys(o),i=Object.keys(t);if(e&&n.length!==i.length)return!1;for(let s of n)if(i.includes(s)&&o[s]!==t[s])return!1;return!0}function io(o){let t=()=>{let i={};for(let s in o)Object.prototype.hasOwnProperty.call(o,s)&&(i[s]=io(o[s]));return i},e=()=>o.map(i=>io(i)),n=Object.prototype.toString.call(o).slice(8,-1).toLowerCase();return n==="object"?t():n==="array"?e():o}function Zc(o){let t=0;return o.forEach((e,n)=>{e.type==="optgroup"?(e._key=`group_${n}`,e.visible=typeof e.visible>"u"?!0:e.visible,e.children.forEach((i,s)=>{i&&(i.visible=typeof(i==null?void 0:i.visible)>"u"?!0:i.visible,i.divider||(i._key=`option_${n}_${s}`,t+=1))})):(e.visible=typeof e.visible>"u"?!0:e.visible,e.divider||(e._key=`option_${n}`,t+=1))}),t}function me(o,t,e){if(Array.isArray(o))for(let n of o){if(n[t]===e||n[t]===+n[t]+""&&+n[t]===e)return n;if(n.type==="optgroup"){for(let i of n.children)if(i&&(i[t]===e||i[t]===+i[t]+""&&+i[t]===e))return i}}}function Ke(o){return Object.keys(o).forEach(t=>o[t]===void 0?delete o[t]:""),o}function Dt(o){return typeof o!="string"?o:o.normalize?o.normalize("NFD").replace(/[\u0300-\u036F]/g,""):[{base:"A",letters:/[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},{base:"AA",letters:/[\uA732]/g},{base:"AE",letters:/[\u00C6\u01FC\u01E2]/g},{base:"AO",letters:/[\uA734]/g},{base:"AU",letters:/[\uA736]/g},{base:"AV",letters:/[\uA738\uA73A]/g},{base:"AY",letters:/[\uA73C]/g},{base:"B",letters:/[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},{base:"C",letters:/[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},{base:"D",letters:/[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},{base:"DZ",letters:/[\u01F1\u01C4]/g},{base:"Dz",letters:/[\u01F2\u01C5]/g},{base:"E",letters:/[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},{base:"F",letters:/[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},{base:"G",letters:/[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},{base:"H",letters:/[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},{base:"I",letters:/[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},{base:"J",letters:/[\u004A\u24BF\uFF2A\u0134\u0248]/g},{base:"K",letters:/[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},{base:"L",letters:/[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},{base:"LJ",letters:/[\u01C7]/g},{base:"Lj",letters:/[\u01C8]/g},{base:"M",letters:/[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},{base:"N",letters:/[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},{base:"NJ",letters:/[\u01CA]/g},{base:"Nj",letters:/[\u01CB]/g},{base:"O",letters:/[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},{base:"OI",letters:/[\u01A2]/g},{base:"OO",letters:/[\uA74E]/g},{base:"OU",letters:/[\u0222]/g},{base:"P",letters:/[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},{base:"Q",letters:/[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},{base:"R",letters:/[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},{base:"S",letters:/[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},{base:"T",letters:/[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},{base:"TZ",letters:/[\uA728]/g},{base:"U",letters:/[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},{base:"V",letters:/[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},{base:"VY",letters:/[\uA760]/g},{base:"W",letters:/[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},{base:"X",letters:/[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},{base:"Y",letters:/[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},{base:"Z",letters:/[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},{base:"a",letters:/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},{base:"aa",letters:/[\uA733]/g},{base:"ae",letters:/[\u00E6\u01FD\u01E3]/g},{base:"ao",letters:/[\uA735]/g},{base:"au",letters:/[\uA737]/g},{base:"av",letters:/[\uA739\uA73B]/g},{base:"ay",letters:/[\uA73D]/g},{base:"b",letters:/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},{base:"c",letters:/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},{base:"d",letters:/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},{base:"dz",letters:/[\u01F3\u01C6]/g},{base:"e",letters:/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},{base:"f",letters:/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},{base:"g",letters:/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},{base:"h",letters:/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},{base:"hv",letters:/[\u0195]/g},{base:"i",letters:/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},{base:"j",letters:/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},{base:"k",letters:/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},{base:"l",letters:/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},{base:"lj",letters:/[\u01C9]/g},{base:"m",letters:/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},{base:"n",letters:/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},{base:"nj",letters:/[\u01CC]/g},{base:"o",letters:/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},{base:"oi",letters:/[\u01A3]/g},{base:"ou",letters:/[\u0223]/g},{base:"oo",letters:/[\uA74F]/g},{base:"p",letters:/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},{base:"q",letters:/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},{base:"r",letters:/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},{base:"s",letters:/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},{base:"t",letters:/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},{base:"tz",letters:/[\uA729]/g},{base:"u",letters:/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},{base:"v",letters:/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},{base:"vy",letters:/[\uA761]/g},{base:"w",letters:/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},{base:"x",letters:/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},{base:"y",letters:/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},{base:"z",letters:/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g}].reduce((t,{letters:e,base:n})=>t.replace(e,n),o)}var tp=class{constructor(o,t){this.elm=o,f(this,"_bindEventService"),f(this,"allSelected",!1),f(this,"fromHtml",!1),f(this,"choiceElm"),f(this,"closeElm"),f(this,"filterText",""),f(this,"updateData",[]),f(this,"data",[]),f(this,"dataTotal"),f(this,"dropElm"),f(this,"ulElm"),f(this,"parentElm"),f(this,"labelElm"),f(this,"selectAllElm"),f(this,"searchInputElm"),f(this,"selectGroupElms"),f(this,"selectItemElms"),f(this,"disableItemElms"),f(this,"noResultsElm"),f(this,"options"),f(this,"selectAllName",""),f(this,"selectGroupName",""),f(this,"selectItemName",""),f(this,"tabIndex"),f(this,"updateDataStart"),f(this,"updateDataEnd"),f(this,"virtualScroll"),this.options=Object.assign({},C.DEFAULTS,this.elm.dataset,t),this._bindEventService=new Kc({distinctEvent:!0})}async init(){await this.initLocale(),this.initContainer(),this.initData(),this.initSelected(!0),this.initFilter(),this.initDrop(),this.initView(),this.options.onAfterCreate()}destroy(o=!0){var t,e,n,i;this.parentElm&&(this.options.onDestroy({hardDestroy:o}),o&&this.options.onHardDestroy(),this.elm.before(this.parentElm),this.elm.classList.remove("ms-offscreen"),this._bindEventService.unbindAll(),this.tabIndex&&(this.elm.tabIndex=+this.tabIndex),(t=this.virtualScroll)==null||t.destroy(),(e=this.parentElm.parentNode)==null||e.removeChild(this.parentElm),this.fromHtml&&(delete this.options.data,this.fromHtml=!1),this.options.onAfterDestroy({hardDestroy:o}),o&&((i=(n=this.options).onAfterHardDestroy)==null||i.call(n),Object.keys(this.options).forEach(s=>delete this[s])))}async initLocale(){if(this.options.locale){let o=await $c(Object.assign({"./locales/multiple-select-en-US.js":()=>z(()=>import("./multiple-select-en-US-678fdcf1.js"),[],import.meta.url),"./locales/multiple-select-es-ES.js":()=>z(()=>import("./multiple-select-es-ES-62918ed8.js"),[],import.meta.url),"./locales/multiple-select-fr-FR.js":()=>z(()=>import("./multiple-select-fr-FR-d9899d4e.js"),[],import.meta.url),"./locales/multiple-select-hu-HU.js":()=>z(()=>import("./multiple-select-hu-HU-3f443a5e.js"),[],import.meta.url),"./locales/multiple-select-it-IT.js":()=>z(()=>import("./multiple-select-it-IT-a9878ad2.js"),[],import.meta.url),"./locales/multiple-select-pt-BR.js":()=>z(()=>import("./multiple-select-pt-BR-2c1e5332.js"),[],import.meta.url),"./locales/multiple-select-ru-RU.js":()=>z(()=>import("./multiple-select-ru-RU-00867048.js"),[],import.meta.url),"./locales/multiple-select-vi-VN.js":()=>z(()=>import("./multiple-select-vi-VN-c8da094d.js"),[],import.meta.url),"./locales/multiple-select-zh-CN.js":()=>z(()=>import("./multiple-select-zh-CN-f3933ba6.js"),[],import.meta.url),"./locales/multiple-select-zh-TW.js":()=>z(()=>import("./multiple-select-zh-TW-cb3c8221.js"),[],import.meta.url)}),`./locales/multiple-select-${this.options.locale}.js`),t=(o==null?void 0:o.default)??o,e=this.options.locale.split(/-|_/);e[0]=e[0].toLowerCase(),e[1]&&(e[1]=e[1].toUpperCase()),t[this.options.locale]?Object.assign(this.options,t[this.options.locale]):t[e.join("-")]?Object.assign(this.options,t[e.join("-")]):t[e[0]]&&Object.assign(this.options,t[e[0]])}}initContainer(){var e;let o=this.elm.getAttribute("name")||this.options.name||"";this.elm.style.display="none",this.labelElm=this.elm.closest("label"),!this.labelElm&&this.elm.id&&(this.labelElm=document.createElement("label"),this.labelElm.htmlFor=this.elm.id),(e=this.labelElm)!=null&&e.querySelector("input")&&(this.labelElm=null),typeof this.options.single>"u"&&(this.options.single=!this.elm.multiple),this.parentElm=H("div",{className:`ms-parent ${this.elm.className||""}`,title:this.elm.getAttribute("title")||""}),this.options.placeholder=this.options.placeholder||this.elm.getAttribute("placeholder")||"",this.tabIndex=this.elm.getAttribute("tabindex");let t="";this.tabIndex!==null&&(this.elm.tabIndex=-1,t=this.tabIndex&&`tabindex="${this.tabIndex}"`),this.choiceElm=H("button",{type:"button",className:"ms-choice"}),isNaN(t)&&(this.choiceElm.tabIndex=+t),this.choiceElm.appendChild(H("span",{className:"ms-placeholder",textContent:this.options.placeholder})),this.options.showClear&&this.choiceElm.appendChild(H("div",{className:"icon-close"})),this.choiceElm.appendChild(H("div",{className:"icon-caret"})),this.dropElm=H("div",{className:`ms-drop ${this.options.position}`}),this.closeElm=this.choiceElm.querySelector(".icon-close"),this.options.dropWidth&&(this.dropElm.style.width=`${this.options.dropWidth}px`),Xc(this.elm,this.parentElm),this.parentElm.appendChild(this.choiceElm),this.parentElm.appendChild(this.dropElm),this.elm.disabled&&this.choiceElm.classList.add("disabled"),this.selectAllName=`data-name="selectAll${o}"`,this.selectGroupName=`data-name="selectGroup${o}"`,this.selectItemName=`data-name="selectItem${o}"`,this.options.keepOpen||(this._bindEventService.unbind(document.body,"click"),this._bindEventService.bind(document.body,"click",n=>{n.target===this.choiceElm||fn(n.target,".ms-choice")===this.choiceElm||(n.target===this.dropElm||fn(n.target,".ms-drop")!==this.dropElm&&n.target!==this.elm)&&this.options.isOpen&&this.close()}))}initData(){let o=[];if(this.options.data){if(Array.isArray(this.options.data))this.data=this.options.data.map(t=>typeof t=="string"||typeof t=="number"?{text:t,value:t}:t);else if(typeof this.options.data=="object"){for(let[t,e]of Object.entries(this.options.data))o.push({value:t,text:e});this.data=o}}else this.elm.childNodes.forEach(t=>{this.initRow(t)&&o.push(this.initRow(t))}),this.options.data=o,this.data=o,this.fromHtml=!0;this.dataTotal=Zc(this.data)}initRow(o,t){var n,i;let e={};return((n=o.tagName)==null?void 0:n.toLowerCase())==="option"?(e.type="option",e.text=this.options.textTemplate(o),e.value=o.value,e.visible=!0,e.selected=!!o.selected,e.disabled=t||o.disabled,e.classes=o.getAttribute("class")||"",e.title=o.getAttribute("title")||"",o.dataset.value&&(e._value=o.dataset.value),Object.keys(o.dataset).length&&(e._data=o.dataset,e._data.divider&&(e.divider=e._data.divider)),e):((i=o.tagName)==null?void 0:i.toLowerCase())==="optgroup"?(e.type="optgroup",e.label=this.options.labelTemplate(o),e.visible=!0,e.selected=!!o.selected,e.disabled=o.disabled,e.children=[],Object.keys(o.dataset).length&&(e._data=o.dataset),o.childNodes.forEach(s=>{e.children.push(this.initRow(s,e.disabled))}),e):null}initDrop(){this.initList(),this.update(!0),this.options.isOpen&&setTimeout(()=>this.open(),50),this.options.openOnHover&&this.parentElm&&(this._bindEventService.bind(this.parentElm,"mouseover",()=>this.open()),this._bindEventService.bind(this.parentElm,"mouseout",()=>this.close()))}initFilter(){if(this.filterText="",this.options.filter||!this.options.filterByDataLength)return;let o=0;for(let t of this.data)t.type==="optgroup"?o+=t.children.length:o+=1;this.options.filter=o>this.options.filterByDataLength}initList(){let o=[];this.options.filter&&o.push(`
        <div class="ms-search">
          <input type="text" autocomplete="off" autocorrect="off"
            autocapitalize="off" spellcheck="false"
            placeholder="${this.options.filterPlaceholder||"🔎︎"}">
        </div>
      `),o.push("<ul></ul>"),this.dropElm.innerHTML=o.join(""),this.ulElm=this.dropElm.querySelector("ul"),this.initListItems()}initListItems(){let o=this.getListRows(),t=0;if(this.options.selectAll&&!this.options.single&&(t=-1),o.length>C.BLOCK_ROWS*C.CLUSTER_BLOCKS){this.virtualScroll&&this.virtualScroll.destroy();let e=this.dropElm.style.display!=="none";e||(this.dropElm.style.left="-10000",this.dropElm.style.display="block");let n=()=>{this.updateDataStart=this.virtualScroll.dataStart+t,this.updateDataEnd=this.virtualScroll.dataEnd+t,this.updateDataStart<0&&(this.updateDataStart=0),this.updateDataEnd>this.data.length&&(this.updateDataEnd=this.data.length)};this.ulElm&&(this.virtualScroll=new zc({rows:o,scrollEl:this.ulElm,contentEl:this.ulElm,callback:()=>{n(),this.events()}})),n(),e||(this.dropElm.style.left="0",this.dropElm.style.display="none")}else this.ulElm&&(this.ulElm.innerHTML=o.join(""),this.updateDataStart=0,this.updateDataEnd=this.updateData.length,this.virtualScroll=null);this.events()}getListRows(){let o=[];return this.options.selectAll&&!this.options.single&&o.push(`
        <li class="ms-select-all">
        <label>
        <input type="checkbox" ${this.selectAllName}${this.allSelected?' checked="checked"':""} />
        <span>${this.options.formatSelectAll()}</span>
        </label>
        </li>
      `),this.updateData=[],this.data.forEach(t=>{o.push(...this.initListItem(t))}),o.push(`<li class="ms-no-results">${this.options.formatNoMatchesFound()}</li>`),o}initListItem(o,t=0){let e=o!=null&&o.title?`title="${o.title}"`:"",n=this.options.multiple?"multiple":"",i=this.options.single?"radio":"checkbox",s="";if(!(o!=null&&o.visible))return[];if(this.updateData.push(o),this.options.single&&!this.options.singleRadio&&(s="hide-radio "),o.selected&&(s+="selected "),o.type==="optgroup"){let r=this.options.styler(o),p=r?`style="${r}"`:"",u=[],v=this.options.hideOptgroupCheckboxes||this.options.single?`<span ${this.selectGroupName} data-key="${o._key}"></span>`:`<input type="checkbox"
          ${this.selectGroupName}
          data-key="${o._key}"
          ${o.selected?' checked="checked"':""}
          ${o.disabled?' disabled="disabled"':""}
        >`;return!s.includes("hide-radio")&&(this.options.hideOptgroupCheckboxes||this.options.single)&&(s+="hide-radio "),u.push(`
        <li class="group ${s}" ${p}>
        <label class="optgroup${this.options.single||o.disabled?" disabled":""}">
        ${v}${o.label}
        </label>
        </li>
      `),o.children.forEach(E=>{u.push(...this.initListItem(E,1))}),u}let l=this.options.styler(o),a=l?`style="${l}"`:"";return s+=o.classes||"",t&&this.options.single&&(s+=`option-level-${t} `),o.divider?'<li class="option-divider"/>':[`
      <li class="${n} ${s}" ${e} ${a}>
      <label class="${o.disabled?"disabled":""}">
      <input type="${i}"
        value="${o.value}"
        data-key="${o._key}"
        ${this.selectItemName}
        ${o.selected?' checked="checked"':""}
        ${o.disabled?' disabled="disabled"':""}
      >
      <span>${o.text}</span>
      </label>
      </li>
    `]}initSelected(o=!1){let t=0;for(let e of this.data)if(e.type==="optgroup"){let n=e.children.filter(i=>i&&i.selected&&!i.disabled&&i.visible).length;e.children.length&&(e.selected=!this.options.single&&n&&n===e.children.filter(i=>i&&!i.disabled&&i.visible&&!i.divider).length),t+=n}else t+=e.selected&&!e.disabled&&e.visible?1:0;this.allSelected=this.data.filter(e=>e.selected&&!e.disabled&&e.visible).length===this.data.filter(e=>!e.disabled&&e.visible&&!e.divider).length,o||(this.allSelected?this.options.onCheckAll():t===0&&this.options.onUncheckAll())}initView(){let o;window.getComputedStyle?(o=window.getComputedStyle(this.elm).width,o==="auto"&&(o=ve(this.dropElm,"outer","width")+20)):o=ve(this.elm,"outer","width")+20,this.parentElm.style.width=`${this.options.width||o}px`,this.elm.style.display="block",this.elm.classList.add("ms-offscreen")}events(){this._bindEventService.unbind(this.searchInputElm),this._bindEventService.unbind(this.selectAllElm),this._bindEventService.unbind(this.selectGroupElms),this._bindEventService.unbind(this.selectItemElms),this._bindEventService.unbind(this.disableItemElms),this._bindEventService.unbind(this.noResultsElm),this.searchInputElm=this.dropElm.querySelector(".ms-search input"),this.selectAllElm=this.dropElm.querySelector(`input[${this.selectAllName}]`),this.selectGroupElms=this.dropElm.querySelectorAll(`input[${this.selectGroupName}],span[${this.selectGroupName}]`),this.selectItemElms=this.dropElm.querySelectorAll(`input[${this.selectItemName}]:enabled`),this.disableItemElms=this.dropElm.querySelectorAll(`input[${this.selectItemName}]:disabled`),this.noResultsElm=this.dropElm.querySelector(".ms-no-results");let o=t=>{t.preventDefault(),!t.target.classList.contains("icon-close")&&this[this.options.isOpen?"close":"open"]()};this.labelElm&&this._bindEventService.bind(this.labelElm,"click",t=>{t.target.nodeName.toLowerCase()==="label"&&(o(t),(!this.options.filter||!this.options.isOpen)&&this.focus(),t.stopPropagation())}),this._bindEventService.bind(this.choiceElm,"click",o),this.options.onFocus&&this._bindEventService.bind(this.choiceElm,"focus",this.options.onFocus),this.options.onBlur&&this._bindEventService.bind(this.choiceElm,"blur",this.options.onBlur),this._bindEventService.bind(this.parentElm,"keydown",t=>{t.code==="Escape"&&!this.options.keepOpen&&(this.close(),this.choiceElm.focus())}),this.closeElm&&this._bindEventService.bind(this.closeElm,"click",t=>{t.preventDefault(),this._checkAll(!1,!0),this.initSelected(!1),this.updateSelected(),this.update(),this.options.onClear()}),this.searchInputElm&&(this._bindEventService.bind(this.searchInputElm,"keydown",t=>{t.code==="Tab"&&t.shiftKey&&this.close()}),this._bindEventService.bind(this.searchInputElm,"keyup",t=>{var e,n,i;if(this.options.filterAcceptOnEnter&&["Enter","Space"].includes(t.code)&&((e=this.searchInputElm)!=null&&e.value)){if(this.options.single){let s=[];if((n=this.selectItemElms)==null||n.forEach(l=>{var a;((a=l.closest("li"))==null?void 0:a.style.display)!=="none"&&s.push(l)}),s.length){let[l]=this.selectItemName.split("=");s[0].hasAttribute(l)&&this.setSelects([s[0].value])}}else(i=this.selectAllElm)==null||i.click();this.close(),this.focus();return}this.filter()})),this.selectAllElm&&(this._bindEventService.unbind(this.selectAllElm,"click"),this._bindEventService.bind(this.selectAllElm,"click",t=>{var e;this._checkAll((e=t.currentTarget)==null?void 0:e.checked)})),this._bindEventService.bind(this.selectGroupElms,"click",t=>{let e=t.currentTarget,n=e.checked,i=me(this.data,"_key",e.dataset.key);this._checkGroup(i,n),this.options.onOptgroupClick(Ke({label:i.label,selected:i.selected,data:i._data,children:i.children.map(s=>{if(s)return Ke({text:s.text,value:s.value,selected:s.selected,disabled:s.disabled,data:s._data})})}))}),this._bindEventService.bind(this.selectItemElms,"click",t=>{let e=t.currentTarget,n=e.checked,i=me(this.data,"_key",e.dataset.key);this._check(i,n),this.options.onClick(Ke({text:i.text,value:i.value,selected:i.selected,data:i._data})),this.options.single&&this.options.isOpen&&!this.options.keepOpen&&this.close()})}open(){var e,n,i,s,l;if((e=this.choiceElm)!=null&&e.classList.contains("disabled"))return;if(setTimeout(()=>this.options.isOpen=!0),this.parentElm.classList.add("ms-parent-open"),(i=(n=this.choiceElm)==null?void 0:n.querySelector("div"))==null||i.classList.add("open"),this.dropElm.style.display="block",(s=this.selectAllElm)!=null&&s.parentElement&&(this.selectAllElm.parentElement.style.display="block"),this.noResultsElm&&(this.noResultsElm.style.display="none"),this.data.length||((l=this.selectAllElm)!=null&&l.parentElement&&(this.selectAllElm.parentElement.style.display="none"),this.noResultsElm&&(this.noResultsElm.style.display="block")),this.options.container){let a=Yc(this.dropElm),r;this.options.container instanceof Node?r=this.options.container:typeof this.options.container=="string"&&(r=this.options.container==="body"?document.body:document.querySelector(this.options.container)),r.appendChild(this.dropElm),this.dropElm.style.top=`${(a==null?void 0:a.top)??0}px`,this.dropElm.style.left=`${(a==null?void 0:a.left)??0}px`,this.dropElm.style.minWidth="auto",this.dropElm.style.width=`${ve(this.parentElm,"outer","width")}px`}let o=this.options.maxHeight;if(this.options.maxHeightUnit==="row"){let a=this.dropElm.querySelector("ul>li");o=ve(a,"outer","height")*this.options.maxHeight}let t=this.dropElm.querySelector("ul");t&&(t.style.maxHeight=`${o}px`),this.dropElm.querySelectorAll(".multiple").forEach(a=>a.style.width=`${this.options.multipleWidth}px`),this.data.length&&this.options.filter&&(this.searchInputElm&&(this.searchInputElm.value="",this.searchInputElm.focus()),this.filter(!0)),this.options.onOpen()}close(){var o,t;this.options.isOpen=!1,this.parentElm.classList.remove("ms-parent-open"),(t=(o=this.choiceElm)==null?void 0:o.querySelector("div"))==null||t.classList.remove("open"),this.dropElm.style.display="none",this.options.container&&(this.parentElm.appendChild(this.dropElm),this.dropElm.style.top="auto",this.dropElm.style.left="auto"),this.options.onClose()}update(o=!1){var a;let t=this.getSelects(),e=this.getSelects("text");this.options.displayValues&&(e=t);let n=(a=this.choiceElm)==null?void 0:a.querySelector("span"),i=t.length,s="";i===0?(n.classList.add("ms-placeholder"),n.innerHTML=this.options.placeholder||""):i<this.options.minimumCountSelected?s=e.join(this.options.displayDelimiter):this.options.formatAllSelected()&&i===this.dataTotal?s=this.options.formatAllSelected():this.options.ellipsis&&i>this.options.minimumCountSelected?s=`${e.slice(0,this.options.minimumCountSelected).join(this.options.displayDelimiter)}...`:this.options.formatCountSelected(i,this.dataTotal)&&i>this.options.minimumCountSelected?s=this.options.formatCountSelected(i,this.dataTotal):s=e.join(this.options.displayDelimiter),s&&(n==null||n.classList.remove("ms-placeholder"),n.innerHTML=s),this.options.displayTitle&&(n.title=this.getSelects("text").join(""));let l=this.getSelects().join("");if(this.options.single)this.elm.value=l;else{let r=this.elm.options;for(let p=0,u=r.length;p<u;p++){let v=l.indexOf(r[p].value)>=0;r[p].selected=v}}o||this.elm.dispatchEvent(new Event("change"))}updateSelected(){for(let t=this.updateDataStart;t<this.updateDataEnd;t++){let e=this.updateData[t],n=this.dropElm.querySelector(`input[data-key=${e._key}]`);if(n){n.checked=e.selected;let i=n.closest("li");i&&(e.selected&&!i.classList.contains("selected")?i.classList.add("selected"):e.selected||i.classList.remove("selected"))}}let o=this.data.filter(t=>t.visible).length===0;this.selectAllElm&&(this.selectAllElm.checked=this.allSelected,bn(this.selectAllElm.closest("li"),!o)),bn(this.noResultsElm,o),this.virtualScroll&&(this.virtualScroll.rows=this.getListRows())}getOptions(o=!0){let t=Object.assign({},this.options);return delete t.data,o?io(t):this.options}refreshOptions(o){Qc(this.options,o,!0)||(this.options=Object.assign(this.options,o),this.destroy(!1),this.init())}getSelects(o="value"){let t=[];for(let e of this.data)if(e.type==="optgroup"){let n=e.children.filter(i=>i==null?void 0:i.selected);if(!n.length)continue;if(o==="value"||this.options.single)t.push(...n.map(i=>o==="value"&&i._value||i[o]));else{let i=[];i.push("["),i.push(e.label),i.push(`: ${n.map(s=>s[o]).join(", ")}`),i.push("]"),t.push(i.join(""))}}else e.selected&&t.push(o==="value"&&e._value||e[o]);return t}setSelects(o,t="value",e=!1){let n=!1,i=s=>{for(let l of s){let a=!1;t==="text"?a=o.includes(l.textContent.trim()):(a=o.includes(l._value||l.value),!a&&l.value===+l.value+""&&(a=o.includes(+l.value))),l.selected!==a&&(n=!0),l.selected=a}};for(let s of this.data)s.type==="optgroup"?i(s.children):i([s]);n&&(this.initSelected(e),this.updateSelected(),this.update(e))}enable(){var o;(o=this.choiceElm)==null||o.classList.remove("disabled")}disable(){var o;(o=this.choiceElm)==null||o.classList.add("disabled")}check(o){let t=me(this.data,"value",o);!t||this._check(t,!0)}uncheck(o){let t=me(this.data,"value",o);!t||this._check(t,!1)}_check(o,t){this.options.single&&this._checkAll(!1,!0),o.selected=t,this.initSelected(),this.updateSelected(),this.update()}checkAll(){this._checkAll(!0)}uncheckAll(){this._checkAll(!1)}_checkAll(o,t){for(let e of this.data)e.type==="optgroup"?this._checkGroup(e,o,!0):!e.disabled&&!e.divider&&(t||e.visible)&&(e.selected=o);t||(this.initSelected(),this.updateSelected(),this.update())}_checkGroup(o,t,e){o.selected=t,o.children.forEach(n=>{n&&!n.disabled&&!n.divider&&(e||n.visible)&&(n.selected=t)}),e||(this.initSelected(),this.updateSelected(),this.update())}checkInvert(){if(!this.options.single){for(let o of this.data)if(o.type==="optgroup")for(let t of o.children)t&&(t.divider||(t.selected=!t.selected));else o&&!o.divider&&(o.selected=!o.selected);this.initSelected(),this.updateSelected(),this.update()}}focus(){var o;(o=this.choiceElm)==null||o.focus(),this.options.onFocus()}blur(){var o;(o=this.choiceElm)==null||o.blur(),this.options.onBlur()}refresh(){this.destroy(!1),this.init()}filter(o){var n;let t=((n=this.searchInputElm)==null?void 0:n.value.trim())??"",e=t.toLowerCase();if(this.filterText!==e){this.filterText=e;for(let i of this.data)if(i.type==="optgroup")if(this.options.filterGroup){let s=`${(i==null?void 0:i.label)??""}`;if(i!=null){let l=this.options.customFilter(Dt(s.toLowerCase()),Dt(e),s,t);i.visible=l;for(let a of i.children)a&&(a.visible=l)}}else{for(let s of i.children)if(s!=null){let l=`${(s==null?void 0:s.text)??""}`;s.visible=this.options.customFilter(Dt(l.toLowerCase()),Dt(e),l,t)}i.visible=i.children.filter(s=>s==null?void 0:s.visible).length>0}else{let s=`${(i==null?void 0:i.text)??""}`;i.visible=this.options.customFilter(Dt(s.toLowerCase()),Dt(e),s,t)}this.initListItems(),this.initSelected(o),this.updateSelected(),o||this.options.onFilter(e)}}},h=function(o,t){return typeof o=="string"?ze(document.querySelectorAll(o),t):o instanceof Node?ze([o],t):ze(o,t)};function ze(o,t){let e=Array.from(o),n=[];for(let i=0;i<e.length;i++){let s=e[i];try{s._multipleSelect!==void 0&&(s._multipleSelect.destroy(),delete s._multipleSelect),s._multipleSelect=new tp(s,t||{}),s._multipleSelect.init();let l=s._multipleSelect.getOptions(!1);l.onHardDestroy=()=>delete s._multipleSelect,l.onAfterHardDestroyed=()=>n[i]=null,n.push(s._multipleSelect)}catch(l){console.error(l)}}return n.length===1?n[0]:n}h.defaults=C.DEFAULTS;h.locales=C.LOCALES;h.methods=C.METHODS;typeof window<"u"&&(window.multipleSelect=h);let ep=class{mount(){h("#select1"),h("#select2",{placeholder:"Here is the placeholder via javascript"})}},Ai=class{constructor(){d(this,"ms",[])}mount(){this.ms=h(".multiple-select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},op=class{constructor(){d(this,"ms",[])}mount(){this.ms=h(".multiple-select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},np=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select",{multiple:!0,multipleWidth:60})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},ip=class{constructor(){d(this,"multiMs",[]);d(this,"singleMs")}mount(){this.multiMs=h(".select"),this.singleMs=h(".data",{data:[{value:1,text:"Options 1",selected:!0},{value:2,text:"Options 2"},{value:3,text:"Options 3"}]})}unmount(){var t;this.multiMs.forEach(e=>e.destroy()),this.multiMs=[],(t=this.singleMs)==null||t.destroy(),this.singleMs=void 0}},sp=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select")}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},lp=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},ap=class{constructor(){d(this,"btnElm");d(this,"ms",[]);d(this,"clickListener",()=>{const t=this.serialize(document.querySelector("form"));alert(t)})}mount(){this.ms=h("select"),this.btnElm=document.querySelector(".submit7"),this.btnElm.addEventListener("click",this.clickListener)}unmount(){this.btnElm.removeEventListener("click",this.clickListener),this.ms.forEach(t=>t.destroy()),this.ms=[]}serialize(t){let e=[];return t.querySelectorAll("[name]").forEach(n=>{const i=Array.from(n.selectedOptions);for(const s of i)e.push(n.name+"="+s.value)}),e.length>0?e.join("&"):!1}},rp=class{constructor(){d(this,"ms1");d(this,"ms2");d(this,"ms3");d(this,"ms4");d(this,"ms5")}mount(){this.ms1=h("#basic",{data:[{text:"January",value:1},{text:"February",value:2},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}),this.ms2=h("#object",{data:{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}}),this.ms3=h("#string",{data:["January","February","March"]}),this.ms4=h("#number",{data:[1,2,3]}),this.ms5=h("#group",{data:[{type:"optgroup",label:"Group 1",children:[{text:"January",value:1,selected:!0},{text:"February",value:2,disabled:!0},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6}]},{type:"optgroup",label:"Group 2",children:[{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}]})}unmount(){var t,e,n,i,s;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(n=this.ms3)==null||n.destroy(),(i=this.ms4)==null||i.destroy(),(s=this.ms5)==null||s.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0}},up=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){const t=document.querySelector("#locale");t.addEventListener("change",e=>{this.updateLocale(e.target.value)}),this.ms1=h(t),this.ms2=h("#select")}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}updateLocale(t){var e,n;(e=this.ms2)==null||e.destroy(),(n=this.ms2)==null||n.refreshOptions({locale:t})}},cp=class{constructor(){d(this,"ms1")}mount(){for(var t=[],e=0;e<1e4;e++)t.push(e);this.ms1=h("#select",{filter:!0,data:t})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}};let pp=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},dp=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){this.ms1=h("#select1"),this.ms2=h("#select2",{placeholder:"Here is the placeholder via javascript"})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},hp=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select",{singleRadio:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},vp=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{selectAll:!1})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},mp=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{multiple:!0,hideOptgroupCheckboxes:!0,multipleWidth:60})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},fp=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{multiple:!0,width:500,multipleWidth:70,dropWidth:580})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},bp=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{maxHeight:140})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Ep=class{constructor(){d(this,"ms",[])}mount(){const t=document.querySelector("#number");this.ms=h("select",{maxHeight:+t.value,maxHeightUnit:"row"}),t.addEventListener("change",()=>{this.ms.forEach(e=>{e.refreshOptions({maxHeight:+t.value,maxHeightUnit:"row"})})})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},gp=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{position:"top"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},_p=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{displayValues:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},yp=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{displayTitle:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Ap=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{displayDelimiter:" | "})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},wp=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{minimumCountSelected:8})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Sp=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{ellipsis:!0,minimumCountSelected:5})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Op=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{isOpen:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Tp=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{keepOpen:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Cp=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{openOnHover:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Dp=class{constructor(){d(this,"ms1");d(this,"ms2");d(this,"ms3")}mount(){this.ms1=h(".select1"),this.ms2=h(".select2"),this.ms3=h(".select3",{container:".my-container"})}unmount(){var t,e,n;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),(n=this.ms3)==null||n.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0}},xp=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select",{filter:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Np=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{filter:!0,filterGroup:!0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Lp=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{filter:!0,filterPlaceholder:"The filter placeholder"})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},kp=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select",{filter:!0,filterAcceptOnEnter:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},$p=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select",{filterByDataLength:10})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Mp=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{filter:!0,customFilter:(t,e,n,i)=>document.querySelector("input").checked?n.indexOf(i)===0:t.indexOf(e)===0})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Fp=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select",{showClear:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Ip=class{constructor(){d(this,"ms1");d(this,"ms2")}mount(){this.ms1=h("#basic",{styler:t=>+t.value==1?"background-color: #ffee00; color: #ff0000;":+t.value==6?"background-color: #000; color: #fff;":null}),this.ms2=h("#group",{styler:t=>t.type==="optgroup"?"color: #777; font-weight: normal;":+t.value==1?"color: blue;":null})}unmount(){var t,e;(t=this.ms1)==null||t.destroy(),(e=this.ms2)==null||e.destroy(),this.ms1=void 0,this.ms2=void 0}},Rp=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{textTemplate:t=>'<i class="fa fa-star"></i>'+t.innerHTML})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Bp=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{labelTemplate:t=>'<i class="fa fa-star"></i>'+t.getAttribute("label")})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Pp=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{filter:!0}),document.querySelector("#getOptions").addEventListener("click",()=>{alert(JSON.stringify(this.ms1.getOptions(),null,4))})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Hp=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{filter:!0}),document.querySelector("#refreshOptions").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.refreshOptions({filter:!1})})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Vp=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{filter:!0}),document.querySelector("#setSelectsBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.setSelects([1,3])}),document.querySelector("#getSelectsBtn").addEventListener("click",()=>{var t,e;alert("Selected values: "+((t=this.ms1)==null?void 0:t.getSelects())),alert("Selected texts: "+((e=this.ms1)==null?void 0:e.getSelects("text")))})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},jp=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select"),document.querySelector("#enableBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.enable()}),document.querySelector("#disableBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.disable()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Gp=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select"),document.querySelector("#openBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.open()}),document.querySelector("#closeBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.close()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Wp=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select"),document.querySelector("#checkBtn").addEventListener("click",()=>{for(const t of this.ms)t.check(2)}),document.querySelector("#uncheckBtn").addEventListener("click",()=>{for(const t of this.ms)t.uncheck(2)})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Up=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select"),document.querySelector("#checkAllBtn").addEventListener("click",()=>{for(const t of this.ms)t.checkAll()}),document.querySelector("#uncheckAllBtn").addEventListener("click",()=>{for(const t of this.ms)t.uncheckAll()})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Jp=class{constructor(){d(this,"ms",[])}mount(){this.ms=h("select"),document.querySelector("#checkInvert").addEventListener("click",()=>{for(const t of this.ms)t.checkInvert()})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},qp=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select"),document.querySelector("#focusBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.focus()}),document.querySelector("#blurBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.blur()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Kp=class{constructor(){d(this,"ms1")}mount(){const t=document.querySelector("select");this.ms1=h(t),document.querySelector("#refreshAdd").addEventListener("click",()=>{var a;const e=document.querySelector("#refreshInput"),n=document.querySelector("#refreshSelected"),i=document.querySelector("#refreshDisabled"),s=e.value.trim(),l=document.createElement("option");if(l.value=s,l.text=s,!s){e.focus();return}n.checked&&(l.selected=!0),i.checked&&(l.disabled=!0),e.value="",t.appendChild(l),(a=this.ms1)==null||a.refresh()})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},zp=class{constructor(){d(this,"ms1")}mount(){this.ms1=h("select"),document.querySelector("#destroyBtn").addEventListener("click",()=>{var t;(t=this.ms1)==null||t.destroy(),this.ms1=null}),document.querySelector("#buildBtn").addEventListener("click",()=>{this.ms1=h("select")})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}},Yp=class{constructor(){d(this,"logElm");d(this,"ms1")}mount(){this.logElm=document.querySelector("textarea"),this.ms1=h("select",{filter:!0,onOpen:()=>{this.log(`onOpen event fire!
`)},onClose:()=>{this.log(`onClose event fire!
`)},onCheckAll:()=>{this.log(`onCheckAll event fire!
`)},onUncheckAll:()=>{this.log(`onUncheckAll event fire!
`)},onFocus:()=>{this.log(`onFocus event fire!
`)},onBlur:()=>{this.log(`onBlur event fire!
`)},onOptgroupClick:t=>{this.log("onOptgroupClick event fire! view: "+JSON.stringify(t)+`
`)},onClick:t=>{this.log("onClick event fire! view: "+JSON.stringify(t)+`
`)},onFilter:t=>{this.log("onFilter event fire! text: "+t+`
`)},onAfterCreate:()=>{this.log(`onAfterCreate event fire!
`)}})}log(t){this.logElm.textContent+=t,this.logElm.scrollTo(0,this.logElm.scrollHeight)}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}};class Xp{constructor(){d(this,"ms1")}mount(){this.ms1=h("select",{filter:!0,formatSelectAll(){return"[Tout sélectionner]"},formatAllSelected(){return"Tous sélectionnés"},formatCountSelected(t,e){return t+" de "+e+" sélectionnés"},formatNoMatchesFound(){return"Aucun résultat"}})}unmount(){var t;(t=this.ms1)==null||t.destroy(),this.ms1=void 0}}const En=[{name:"gettingStarted",view:"/src/getting-started.html",viewModel:ep,title:"Getting Started"},{name:"examples",view:"/src/examples/example01.html",viewModel:Ai,title:"Examples"}],gn=[{name:"Welcomes",routes:[{name:"example01",view:"/src/examples/example01.html",viewModel:Ai,title:"Single Select"},{name:"example02",view:"/src/examples/example02.html",viewModel:op,title:"Multiple Select"},{name:"example03",view:"/src/examples/example03.html",viewModel:np,title:"Multiple Items"},{name:"example04",view:"/src/examples/example04.html",viewModel:ip,title:"Auto Width"},{name:"example05",view:"/src/examples/example05.html",viewModel:sp,title:"Disabled Select"},{name:"example06",view:"/src/examples/example06.html",viewModel:lp,title:"Selected/Disabled Options"},{name:"example07",view:"/src/examples/example07.html",viewModel:ap,title:"Submit Select"},{name:"example08",view:"/src/examples/example08.html",viewModel:rp,title:"The Data"},{name:"example09",view:"/src/examples/example09.html",viewModel:up,title:"Locale"},{name:"example10",view:"/src/examples/example10.html",viewModel:cp,title:"Large Select"},{name:"example11",view:"/src/examples/example11.html",viewModel:pp,title:"The Themes"}]},{name:"Options",routes:[{name:"options01",view:"/src/options/options01.html",viewModel:dp,title:"The Placeholder"},{name:"options02",view:"/src/options/options02.html",viewModel:hp,title:"Single Radio"},{name:"options03",view:"/src/options/options03.html",viewModel:vp,title:"Hide Select All"},{name:"options04",view:"/src/options/options04.html",viewModel:mp,title:"Hide Optgroup Checkboxes"},{name:"options05",view:"/src/options/options05.html",viewModel:fp,title:"Custom Dropdown Width"},{name:"options06",view:"/src/options/options06.html",viewModel:bp,title:"Max Height"},{name:"options07",view:"/src/options/options07.html",viewModel:Ep,title:"Max Height Unit"},{name:"options08",view:"/src/options/options08.html",viewModel:gp,title:"The Position"},{name:"options09",view:"/src/options/options09.html",viewModel:_p,title:"Display Values"},{name:"options10",view:"/src/options/options10.html",viewModel:yp,title:"Display Title"},{name:"options11",view:"/src/options/options11.html",viewModel:Ap,title:"Display Delimiter"},{name:"options12",view:"/src/options/options12.html",viewModel:wp,title:"Minimum Count Selected"},{name:"options13",view:"/src/options/options13.html",viewModel:Sp,title:"The Ellipsis"},{name:"options14",view:"/src/options/options14.html",viewModel:Op,title:"Is Open"},{name:"options15",view:"/src/options/options15.html",viewModel:Tp,title:"Keep Open"},{name:"options16",view:"/src/options/options16.html",viewModel:Cp,title:"Open On Hover"},{name:"options17",view:"/src/options/options17.html",viewModel:Dp,title:"The Container"},{name:"options18",view:"/src/options/options18.html",viewModel:xp,title:"The Filter"},{name:"options19",view:"/src/options/options19.html",viewModel:Np,title:"Filter Only Optgroup"},{name:"options20",view:"/src/options/options20.html",viewModel:Lp,title:"Filter Placeholder"},{name:"options21",view:"/src/options/options21.html",viewModel:kp,title:"Filter Accept On Enter"},{name:"options22",view:"/src/options/options22.html",viewModel:$p,title:"Filter By Data Length"},{name:"options23",view:"/src/options/options23.html",viewModel:Mp,title:"Custom Filter"},{name:"options24",view:"/src/options/options24.html",viewModel:Fp,title:"Show Clear"},{name:"options25",view:"/src/options/options25.html",viewModel:Ip,title:"The Styler"},{name:"options26",view:"/src/options/options26.html",viewModel:Rp,title:"Text Template"},{name:"options27",view:"/src/options/options27.html",viewModel:Bp,title:"Label Template"}]},{name:"Methods",routes:[{name:"methods01",view:"/src/methods/methods01.html",viewModel:Pp,title:"The getOptions"},{name:"methods02",view:"/src/methods/methods02.html",viewModel:Hp,title:"The refreshOptions"},{name:"methods03",view:"/src/methods/methods03.html",viewModel:Vp,title:"The setSelects/getSelects"},{name:"methods04",view:"/src/methods/methods04.html",viewModel:jp,title:"The enable/disable"},{name:"methods05",view:"/src/methods/methods05.html",viewModel:Gp,title:"The open/close"},{name:"methods06",view:"/src/methods/methods06.html",viewModel:Wp,title:"The check/uncheck"},{name:"methods07",view:"/src/methods/methods07.html",viewModel:Up,title:"The checkAll/uncheckAll"},{name:"methods08",view:"/src/methods/methods08.html",viewModel:Jp,title:"The checkInvert"},{name:"methods09",view:"/src/methods/methods09.html",viewModel:qp,title:"The focus/blur"},{name:"methods10",view:"/src/methods/methods10.html",viewModel:Kp,title:"The refresh"},{name:"methods11",view:"/src/methods/methods11.html",viewModel:zp,title:"The destroy"}]},{name:"Events",routes:[{name:"events",view:"/src/events/events.html",viewModel:Yp,title:"The Events"}]},{name:"I18N",routes:[{name:"i18n",view:"/src/i18n/i18n.html",viewModel:Xp,title:"The i18n"}]}],Qp=Object.assign({"/src/events/events.html":Li,"/src/examples/example01.html":ki,"/src/examples/example02.html":$i,"/src/examples/example03.html":Mi,"/src/examples/example04.html":Fi,"/src/examples/example05.html":Ii,"/src/examples/example06.html":Ri,"/src/examples/example07.html":Bi,"/src/examples/example08.html":Pi,"/src/examples/example09.html":Hi,"/src/examples/example10.html":Vi,"/src/examples/example11.html":ji,"/src/getting-started.html":Gi,"/src/i18n/i18n.html":Wi,"/src/main.html":_n,"/src/methods/methods01.html":Ui,"/src/methods/methods02.html":Ji,"/src/methods/methods03.html":qi,"/src/methods/methods04.html":Ki,"/src/methods/methods05.html":zi,"/src/methods/methods06.html":Yi,"/src/methods/methods07.html":Xi,"/src/methods/methods08.html":Qi,"/src/methods/methods09.html":Zi,"/src/methods/methods10.html":ts,"/src/methods/methods11.html":es,"/src/options/options01.html":os,"/src/options/options02.html":ns,"/src/options/options03.html":is,"/src/options/options04.html":ss,"/src/options/options05.html":ls,"/src/options/options06.html":as,"/src/options/options07.html":rs,"/src/options/options08.html":us,"/src/options/options09.html":cs,"/src/options/options10.html":ps,"/src/options/options11.html":ds,"/src/options/options12.html":hs,"/src/options/options13.html":vs,"/src/options/options14.html":ms,"/src/options/options15.html":fs,"/src/options/options16.html":bs,"/src/options/options17.html":Es,"/src/options/options18.html":gs,"/src/options/options19.html":_s,"/src/options/options20.html":ys,"/src/options/options21.html":As,"/src/options/options22.html":ws,"/src/options/options23.html":Ss,"/src/options/options24.html":Os,"/src/options/options25.html":Ts,"/src/options/options26.html":Cs,"/src/options/options27.html":Ds});class Zp{constructor(){d(this,"loading",!0);d(this,"currentModel");d(this,"currentRouter");d(this,"defaultRouteName","example01");d(this,"stateBangChar","#/");d(this,"baseUrl",window.location.origin+window.location.pathname);d(this,"viewModelObj",{})}async init(){const t=window.location;document.querySelector("#app").innerHTML=_n;let e=t.hash.replace(this.stateBangChar,"");(!e||e==="/"||e==="#")&&(e=this.defaultRouteName),this.createRouteLinks(),this.loadRoute(e),Array.from(document.querySelectorAll(".panel-wm-left a.nav-link,.navbar-nav a.nav-link")).forEach(n=>{e.includes(n.id)&&n.classList.add("active")}),window.onpopstate=()=>{const i=window.location.hash.replace(this.stateBangChar,"");this.loadRoute(i||this.defaultRouteName,!1)}}createRouteLinks(){var t,e,n;for(const i of En){const s=H("li",{className:"nav-item"}),l=H("a",{id:i.name,className:"nav-link",textContent:i.title});l.addEventListener("click",this.clickEventListener.bind(this)),s.appendChild(l),(t=document.querySelector(".navbar-nav"))==null||t.appendChild(s)}for(const i of gn){const s=H("li",{className:"m-1"}),l=H("p",{className:"navbar-vertical-label mb-1",textContent:i.name});s.appendChild(l),(e=document.querySelector(".nav-pills"))==null||e.appendChild(s);for(const a of i.routes){const r=H("li",{className:"nav-item"}),p=H("a",{id:a.name,className:"nav-link",textContent:a.title});p.addEventListener("click",this.clickEventListener.bind(this)),r.appendChild(p),(n=document.querySelector(".nav-pills"))==null||n.appendChild(r)}}}async loadRoute(t,e=!0){var s;const n=document.querySelector(".panel-wm-content");n.innerHTML="",n.classList.add("cloak");let i=En.find(l=>l.name===t);if((i==null?void 0:i.name)==="examples"){const l=document.querySelector(".nav-pills .nav-item a.nav-link");l==null||l.classList.add("active")}else for(const l of gn){const a=l.routes.find(r=>r.name===t);a&&(i=a)}if(this.currentModel&&this.unmountCurrentVM(this.currentModel,this.currentRouter),i){this.currentRouter=i,document.querySelector(".panel-wm-content").innerHTML=Qp[i.view];const l=new i.viewModel;this.currentModel=l,window[i.name]=(s=l.mount)==null?void 0:s.call(l),window.onbeforeunload=()=>{var a;n.classList.add("cloak"),(a=l.unmount)==null||a.call(l),this.removeAllActiveLinks(!0),this.unmountAll(),i!=null&&i.name&&delete window[i.name]}}e&&window.history.pushState({},t,`${this.baseUrl}${this.stateBangChar}${t}`),document.title=`Multiple-Select-Vanilla · ${t}`,n.classList.remove("cloak")}async clickEventListener(t){this.removeAllActiveLinks();const e=t.target;e.classList.toggle("active"),this.loadRoute(e.id)}removeAllActiveLinks(t=!1){document.querySelectorAll(".panel-wm-left a.nav-link,.navbar-nav a.nav-link").forEach(e=>{e.classList.remove("active"),t&&e.addEventListener("click",this.clickEventListener.bind(this))})}unmountCurrentVM(t,e){var n;(n=t.unmount)==null||n.call(t),e&&delete window[e.name]}unmountAll(){for(const t of Object.keys(this.viewModelObj)){const e=this.viewModelObj[t];if(typeof(e==null?void 0:e.unmount)=="function"){e==null||e.unmount();for(const n of Object.keys(e))e[n]=null}window[t]=null,this.viewModelObj[t]=null,delete window[t],delete this.viewModelObj[t]}}}const td=new Zp;td.init();
