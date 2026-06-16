var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=`<div class="row mb-2">
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

    <div class="col-sm-10"><textarea class="form-control" readonly rows="10" style="background-color: #f0f0f0"></textarea></div>
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
`,r=`<div class="row">
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
`,i=`<div class="row">
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
`,a=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>multiple</code>and <code>multipleWidth</code>options to enable multiple items.</div>
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
`,o=`<div class="row mb-2">
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

    <div class="col-sm-9"><select class="data" data-test="select2"></select></div>
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
`,s=`<div class="row mb-2">
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
    <div class="demo-subtitle">Show a disabled select width <code>disabled</code>attribute.</div>
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
`,c=`<div class="row mb-2">
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
`,l=`<div class="row mb-2">
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
    <div class="demo-subtitle">Submit select with <code>name</code>attribute in form.</div>
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
      <div class="col-sm-10 offset-sm-2"><button type="button" class="btn btn-primary submit7" data-testid="submit">Submit</button></div>
    </div>
  </form>
</div>
`,u=`<div class="row mb-2">
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
      Use <code>data</code>as data source. Also note when using <code>data</code>, you could also use any type of HTML container element.
      For example a span, a div or event an input (e.g. the last one below is targeting a span)
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Basic Array </label>

    <div class="col-sm-10"><select id="basic" class="full-width" multiple></select></div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Basic Object </label>

    <div class="col-sm-10"><select id="object" class="full-width" multiple></select></div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">String Array </label>

    <div class="col-sm-10"><select id="string" class="full-width" multiple></select></div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Number Array </label>

    <div class="col-sm-10"><select id="number" class="full-width" multiple></select></div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Group Array </label>

    <div class="col-sm-10"><span id="group" class="full-width"></span></div>
  </div>
</div>
`,d=`<div class="row mb-2">
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
      Use <code>locale</code>to set the locale. <strong>Please note</strong> that the months themselves aren't being translated, but every
      other labels like "Select All", "OK", "Cancel", "Search", etc. are the ones being translated.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-4">Locale Select </label>

    <div class="col-sm-8">
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
    <label class="col-sm-4">Result Select </label>

    <div class="col-sm-8">
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
  <div class="row">
    <div style="background: #f7f7f7; padding: 10px">
      <pre>
// ESM named import
<span style="color:#cf222e">import</span> { locales } <span style="color:#cf222e">from</span> <span style="color:#0a3069">'multiple-select-vanilla/dist/locales/all-locales.js'</span>;
<span style="color:#6639ba">multipleSelect</span>(<span style="color:#0a3069">'.select'</span>, {
  locales
}</span>);
</pre>
    </div>
  </div>

  <hr>

  <div class="my-5 row">
    <label class="col-sm-4"> named Locale import (e.g. <code>Spanish</code>) </label>

    <div class="col-sm-8">
      <select id="fixed-import" class="full-width" multiple="multiple">
        <option value="1">First</option>
        <option value="2">Second</option>
        <option value="3">Third</option>
        <option value="4">Fourth</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div style="background: #f7f7f7; padding: 10px">
      <pre>
// ESM named import
<span style="color:#cf222e">import</span> { multipleSelect } <span style="color:#cf222e">from</span> <span style="color:#0a3069">'multiple-select-vanilla'</span>;
<span style="color:#6639ba">multipleSelect</span>(<span style="color:#0a3069">'.select'</span>, {
  locale: <span style="color:#105fd7">Spanish</span>
}</span>);
</pre>
    </div>
  </div>
</div>
`,f=`<div class="row mb-2">
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

    <div class="col-sm-10"><select multiple="multiple" data-test="select10-1" id="select1" class="full-width"></select></div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">Object Array</label>

    <div class="col-sm-10"><select multiple="multiple" data-test="select10-2" id="select2" class="full-width"></select></div>
  </div>
</div>
`,p=`<div class="row mb-2">
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
`,m=`<div class="row mb-2">
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
    <div class="demo-subtitle">Display checkbox or radio icons</div>
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
`,h=`<div class="row mb-2">
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
      <button id="destroyBtn" type="button" class="btn btn-danger btn-sm">Destroy</button>
      <button id="createBtn" type="button" class="btn btn-primary btn-sm">Dynamically Create</button>
      <button id="modifyBtn" type="button" class="btn btn-outline-secondary btn-sm">Modify Data</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-4 text-end">Use Select Option Label & Render HTML</label>

    <div class="col-sm-8"><select id="select1" class="full-width" data-test="select1"></select></div>
  </div>
</div>
`,g=`<div class="row mb-2">
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

    <div class="col-sm-10"><select id="data-select1" class="data-select full-width" data-test="data1" multiple></select></div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Data Select 2</label>

    <div class="col-sm-10"><select id="data-select2" class="data-select full-width" data-test="data2" multiple></select></div>
  </div>
</div>
`,_=`<div class="example15-container">
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

      <div class="col-sm-10"><select id="data-select" class="data-select full-width" data-test="data1" multiple></select></div>
    </div>
  </div>
</div>
`,ee=`<div class="row mb-2">
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

    <div class="col-sm-10"><select id="select1" class="full-width" data-test="select1"></select></div>
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
`,v=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">Getting Started</h2>
  </div>
</div>

<div class="content-text">
  <h3>Download</h3>
  <hr>

  <section>
    <h5>GitHub <i class="fa fa-link"></i></h5>
    <p><a href="https://github.com/ghiscoding/multiple-select-vanilla">https://github.com/ghiscoding/multiple-select-vanilla</a></p>
  </section>

  <section>
    <h5>CDN</h5>
    <p>
      <a href="https://www.jsdelivr.com/" target="__blank">jsDelivr</a>
      graciously provide CDNs for many JavaScript libraries including Multiple-Select-Vanilla. Just use the following CDN links.
    </p>

    <div style="background: #f7f7f7; padding: 10px">
      <pre>
&lt;script <span style="color:#207eb1">type</span>=&quot;<span style="color:#f06605">module</span>&quot;&gt;
  // ESM Module import
  <span style="color:#cf222e">import</span> multipleSelect <span style="color:#cf222e">from</span> <span style="color:#0a3069">'https://cdn.jsdelivr.net/npm/multiple-select-vanilla@5.1.0/+esm'</span>;
&lt;/script&gt;
</pre>
    </div>
  </section>

  <section>
    <h5>NPM</h5>
    <p>Install and manage Multiple Select's CSS, JavaScript using NPM.</p>

    <div style="background: #f7f7f7; padding: 10px">
      <pre>$ npm install multiple-select-vanilla</pre>
    </div>
  </section>

  <h5>ESM import</h5>
  <p>The library provides ESM imports, see the example below:</p>
  <div style="background: #f7f7f7; padding: 10px">
    <pre>
// ESM
<span style="color:#cf222e">import</span> { multipleSelect } <span style="color:#cf222e">from</span> <span style="color:#0a3069">'multiple-select-vanilla'</span>;
<span style="color:#6639ba">multipleSelect</span>(<span style="color:#0a3069">'.multiple-select'</span>, {<span style="color:#a0a1a7">&nbsp;/* [options] */&nbsp;</span>});
</pre>
  </div>

  <br>

  <section>
    <h5>CSS / SASS Styling Themes</h5>
    <p>Load default or Bootstrap Theme style via either the <code>@use</code>(modern) or <code>@import</code>(legacy)</p>
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
  <h5>Legacy Versions</h5>
  <p>
    The project now ships as ESM-Only, if you still wish to use the legacy <code>&lt;script&gt;</code> standalone IIFE Script on the
    <code>window</code>
    object, then use the previous 4.x version.
  </p>
</div>
`,y=`<div class="row mb-2">
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
</div>
`,b=`<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand ms-2" href="https://github.com/ghiscoding/multiple-select-vanilla">
      <img src="./favicon.png" alt="Multiple-Select-Vanilla" width="34">
      <span>Multiple Select Vanilla</span>
    </a>
    <div class="github-button-container">
      <a href="https://github.com/ghiscoding/multiple-select-vanilla">
        <img src="https://img.shields.io/github/stars/ghiscoding/multiple-select-vanilla?style=social" alt="GitHub stars">
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
`,x=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>multipleSelect(selector).getOptions()</code>to get the options object.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Methods </label>

    <div class="col-sm-10"><button id="getOptions" type="button" class="btn btn-secondary">getOptions</button></div>
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
`,S=`<div class="row mb-2">
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
      Use <code>multipleSelect(selector).refreshOptions(&#123; filter: false &#125;)</code>to refresh the options object.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Methods </label>

    <div class="col-sm-5">
      <button id="refreshOptions" type="button" class="btn btn-secondary">refreshOptions</button>
      <button id="setDarkMode" type="button" class="btn btn-secondary">Toggle Dark Mode</button>
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
`,C=`<div class="row mb-2">
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
      Use <code>multipleSelect(selector).setSelects([])</code>and <code>multipleSelect(selector).getSelects()</code>to set selects and get
      selects.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Methods </label>

    <div class="col-sm-10">
      <button id="setSelectsBtn" type="button" class="btn btn-secondary">SetSelects</button>
      <button id="getSelectsBtn" type="button" class="btn btn-secondary">GetSelects</button>
      <button id="setSelectsBtn2" type="button" class="btn btn-secondary">SetSelects by 'text'</button>
      <button id="getSelectsBtn2" type="button" class="btn btn-secondary">GetSelects by 'text'</button>
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
`,w=`<div class="row mb-2">
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
      Use <code>multipleSelect(selector).enable()</code>and <code>multipleSelect(selector).disable()</code>to enable and disable select.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Methods </label>

    <div class="col-sm-10">
      <button id="enableBtn" type="button" class="btn btn-secondary">Enable</button>
      <button id="disableBtn" type="button" class="btn btn-secondary">Disable</button>
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
`,T=`<div class="row mb-2">
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
      Use <code>multipleSelect(selector).open()</code>and <code>multipleSelect(selector).close()</code>to open and close the select dropdown
      list.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Methods </label>

    <div class="col-sm-10">
      <button id="openBtn" type="button" class="btn btn-secondary">Open</button>
      <button id="closeBtn" type="button" class="btn btn-secondary">Close</button>
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
`,te=`<div class="row mb-2">
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
      Methods: <code>multipleSelect(selector).check(2)</code>and <code>multipleSelect(selector).uncheck(2)</code>to check and uncheck a
      select option.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Methods </label>

    <div class="col-sm-10">
      <button id="checkBtn" type="button" class="btn btn-secondary">Check</button>
      <button id="uncheckBtn" type="button" class="btn btn-secondary">Uncheck</button>
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
`,ne=`<div class="row mb-2">
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
      Use <code>multipleSelect(selector).checkAll()</code>and <code>multipleSelect(selector).uncheckAll()</code>to check and uncheck all
      options.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Methods </label>

    <div class="col-sm-10">
      <button id="checkAllBtn" type="button" class="btn btn-secondary">Check All</button>
      <button id="uncheckAllBtn" type="button" class="btn btn-secondary">Uncheck All</button>
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
`,E=`<div class="row mb-2">
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
    <div class="demo-subtitle">Methods: <code>multipleSelect(selector).checkInvert()</code>to invert check all items.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Methods </label>

    <div class="col-sm-10"><button id="checkInvert" type="button" class="btn btn-secondary">Check Invert</button></div>
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
`,re=`<div class="row mb-2">
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
      Use <code>multipleSelect(selector).focus()</code>and <code>multipleSelect(selector).blur()</code>to focus and blur the select.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Methods </label>

    <div class="col-sm-10">
      <button id="focusBtn" type="button" class="btn btn-secondary">Focus</button>
      <button id="blurBtn" type="button" class="btn btn-secondary">Blur</button>
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
`,D=`<div class="row mb-2">
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
      Use <code>multipleSelect(selector).refresh()</code>to refresh/reload the Multiple Select. If you're dynamically adding/removing option
      tags on the original select via AJAX or DOM manipulation methods, call refresh to reflect the changes.
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Option text </label>
    <div class="col-sm-10"><input id="refreshInput" class="form-control" type="text" required="required" placeholder="Enter text"></div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Option attribute </label>
    <div class="col-sm-10">
      <label class="checkbox">
        <input id="refreshSelected" type="checkbox">
        Selected
      </label>
      <label class="checkbox">
        <input id="refreshDisabled" type="checkbox">
        Disabled
      </label>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2"></label>
    <div class="col-sm-10"><button id="refreshAdd" type="button" class="btn btn-secondary">Add + Refresh</button></div>
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
`,O=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>multipleSelect(selector).destroy()</code>to destroy the select.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Methods </label>

    <div class="col-sm-10">
      <button id="destroyBtn" type="button" class="btn btn-danger">Destroy</button>
      <button id="buildBtn" type="button" class="btn btn-primary">Build</button>
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
`,ie=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>multipleSelect(selector).getData()</code>to get the loaded data.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Methods</label>

    <div class="col-sm-10"><button id="getData" type="button" class="btn btn-secondary">getData</button></div>
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
`,ae=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      The setData
      <span class="float-end links">
        Code <span class="fa fa-link"></span>
        <span class="small">
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods13.html"
            >html</a
          >
          |
          <a target="_blank" href="https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/src/methods/methods13.ts"
            >ts</a
          >
        </span>
      </span>
    </h2>
    <div class="demo-subtitle">Use <code>multipleSelect(selector).setData([/*data*/])</code> to update the loaded data.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Methods</label>
    <div class="col-sm-10">
      <button id="setData-basic" type="button" class="btn btn-secondary">setData (basic array)</button>
      <button id="setData-object" type="button" class="btn btn-secondary">setData (object)</button>
      <button id="setData-string" type="button" class="btn btn-secondary">setData (string array)</button>
      <button id="setData-group" type="button" class="btn btn-secondary">setData (group array)</button>
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
`,oe=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>placeholder</code>attribute or <code>placeholder: ''</code>option to set placeholder.</div>
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
`,se=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>singleRadio: true</code>to show the radio input.</div>
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
`,ce=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>selectAll: false</code>to hide select all.</div>
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
`,le=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>hideOptgroupCheckboxes: true</code>option to hide the optgroup checkboxes.</div>
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
`,k=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>dropWidth: 580</code>option to custom the dropdown width.</div>
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
`,ue=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>maxHeight: 140</code>option to custom the dropdown max height.</div>
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
`,A=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>maxHeightUnit: 'row'</code>option to set the max height unit.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Max Rows </label>

    <div class="col-sm-10"><input id="number" type="number" value="5" min="1" max="10"></div>
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
`,de=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>position: 'top'</code>to set the select dropdown in top position.</div>
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
`,j=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>displayValues: true</code>option to display selected values instead text.</div>
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
`,fe=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>displayTitle: true</code>option to display title (for tooltip) of selected text.</div>
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
`,pe=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>displayDelimiter: ' | '</code>option to custom the display delimiter.</div>
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
`,me=`<div class="row mb-2">
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
`,he=`<div class="row mb-2">
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
`,ge=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>isOpen: true</code>to open the dropdown by default.</div>
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
`,_e=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>keepOpen: true</code>to keep the select dropdown always open.</div>
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
`,ve=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>openOnHover: true</code>to open the select dropdown by hover instead of click.</div>
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
`,ye=`<div class="row mb-2">
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
`,be=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>filter: true</code>to enable filter feature.</div>
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
`,xe=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>filterGroup: true</code>to filter optgroups only and not options.</div>
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
`,Se=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>filterPlaceholder: 'The filter placeholder'</code>to set the filter placeholder.</div>
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
`,Ce=`<div class="row mb-2">
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
`,we=`<div class="row mb-2">
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
`,Te=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>customFilter</code>to custom filter, in this case we filter by <code>startWith</code>.</div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-3 checkbox">
      <input type="checkbox">
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
`,Ee=`<div class="row mb-2">
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
`,De=`<div class="row mb-2">
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
`,Oe=`<div class="row mb-2">
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
    <div class="demo-subtitle">Use <code>styler</code>to custom the item style.</div>
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
`,ke=`<div class="row mb-2">
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
    <label class="col-sm-4"> Enable/Disable <code>renderOptionLabelAsHtml</code>option </label>

    <div class="col-sm-8">
      <button id="enableRenderHtml" type="button" class="btn btn-primary">Enable renderOptionLabelAsHtml</button>
      <button id="disableRenderHtml" type="button" class="btn btn-secondary">Disable renderOptionLabelAsHtml</button>
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

    <div class="col-sm-8"><select id="from-data" data-test="select2" class="full-width" multiple></select></div>
  </div>
</div>
`,Ae=`<div class="row mb-2">
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
`,je=`<div class="row mb-2">
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
`,Me=`<div class="row mb-2">
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
`,Ne=`<div class="row mb-2">
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

    <div class="col-sm-9"><select id="select2" multiple="multiple" data-width="150" data-test="select2"></select></div>
  </div>
</div>
`,Pe=`<div class="row mb-2">
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
      <select id="select1" multiple="multiple" class="full-width"></select>
    </div>
  </div>
</div>
`,Fe=`<div class="row mb-2">
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
</div>
`,Ie=`<div class="row mb-2">
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
`,Le=`<div class="row mb-2">
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
    <div class="col-sm-3"><input class="form-control in-log" readonly style="background-color: #f0f0f0"></div>
    <div class="py-1 col-sm-1 w-35px">=&gt;</div>
    <div class="col-sm-3 text-start"><input class="form-control out-log" readonly style="background-color: #f0f0f0"></div>
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
`,Re=`<div class="row mb-2">
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

    <div class="col-sm-10"><select data-test="select1" id="select1" class="full-width"></select></div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">Large List (2,000)</label>

    <div class="col-sm-10"><select multiple="multiple" data-test="select2" id="select2" class="full-width"></select></div>
  </div>
</div>
`,ze=`<div class="row">
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
`,Be=`<div class="example38-container">
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

      <div class="col-sm-5"><button id="setDarkMode" type="button" class="btn btn-secondary">Toggle Dark Mode</button></div>
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

      <div class="col-sm-10"><select id="data-select" class="data-select full-width" data-test="data1" multiple></select></div>
    </div>
  </div>
</div>
`,Ve=`<div class="row mb-2">
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
      the <code>id</code>and <code>aria-labelledby</code> from <code>.ms-choice</code>select button with your custom label.
    </div>
    <div class="demo-subtitle">Clicking the label will open the select dropdown.</div>
  </div>
</div>

<div>
  <div class="mb-10"><label class="mb-2" for="custom-label">My Select Label</label></div>
  <div class="mb-10">
    <select class="col-sm-8">
      <option value="1">First</option>
      <option value="2">Second</option>
      <option value="3">Third</option>
      <option value="4">Fourth</option>
    </select>
  </div>
</div>
`,He=`<div class="row mb-2">
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
`,Ue=`<div class="row mb-2">
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

    <div class="col-sm-10"><select multiple="multiple" class="full-width" data-test="select3"></select></div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Group Select (from data)</label>

    <div class="col-sm-10"><select multiple="multiple" class="full-width" data-test="select4"></select></div>
  </div>
</div>
`,We=`<div class="row mb-2">
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
      Use <code>&#123; lazyData: (resolve, reject) &#125;</code>to lazy load data, the 2 arguments are callback functions to call when the
      data is ready by calling <code>resolve(data)</code>. Lazy data will only be loaded once and reopening the dropdown will show
      instantly. If a failure happened, by calling the <code>reject()</code> callback, then the user could retry the data loading by closing
      and reopening the dropdown. For testing purposes, you can refresh the page or click the button to retest the lazy loading. <br>
      <strong>Note:</strong>
      any pre-selected options will only show up after the data is fully loaded (e.g. 4th select with "Filter &amp; OK button").
    </div>
  </div>
</div>

<div>
  <div class="mb-3 row">
    <label class="col-sm-2">Server Delay (ms) </label>

    <div class="col-sm-10 d-flex align-items-center gap-2">
      <input id="serverdelay" type="number" value="1000" step="100" style="height: 34px; width: 100px;">
      <button id="resetlazy" type="button" class="btn btn-outline-secondary btn-sm">Reset Lazy Load</button>
    </div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Basic Array </label>

    <div class="col-sm-10"><select id="basic" class="full-width" data-test="select1"></select></div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Data Array </label>

    <div class="col-sm-10"><select id="group" class="full-width" multiple data-test="select2"></select></div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Group Array </label>

    <div class="col-sm-10"><select id="group" class="full-width" multiple data-test="select3"></select></div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Filter &amp; OK button </label>

    <div class="col-sm-10"><select id="group" class="full-width" multiple data-test="select4"></select></div>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2">Lazy Data Failure</label>

    <div class="col-sm-10"><select id="group" class="full-width" multiple data-test="select5"></select></div>
  </div>
</div>
`,Ge=`<div class="row mb-2">
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

    <div class="col-sm-10"><select id="data-select" class="data-select full-width" data-test="data1" multiple></select></div>
  </div>
</div>
`,Ke=`<div class="row mb-2">
  <div class="col-md-12 title-desc">
    <h2 class="bd-title">
      tabindex <small>(for accessibility)</small>
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
      For accessibility reason we could add a <code>tabIndex</code>option to the button with the <code>.ms-choice</code>select button.
    </div>
  </div>
</div>

<div>
  <div class="mb-10"><label class="mb-2" for="custom-label">tabIndex = 0</label></div>
  <div class="mb-10">
    <select class="col-sm-8">
      <option value="1">First</option>
      <option value="2">Second</option>
      <option value="3">Third</option>
      <option value="4">Fourth</option>
    </select>
  </div>
</div>
`,M=`bottom`,qe=`right`,N=`left`,Je=`auto`,P=[`top`,M,qe,N],Ye=`start`,Xe=`clippingParents`,Ze=`viewport`,Qe=`popper`,$e=`reference`,et=P.reduce(function(e,t){return e.concat([t+`-`+Ye,t+`-end`])},[]),tt=[].concat(P,[Je]).reduce(function(e,t){return e.concat([t,t+`-`+Ye,t+`-end`])},[]),nt=`beforeRead`,rt=`read`,it=`afterRead`,at=`beforeMain`,ot=`main`,st=`afterMain`,ct=`beforeWrite`,lt=`write`,ut=`afterWrite`,dt=[nt,rt,it,at,ot,st,ct,lt,ut];function ft(e){return e?(e.nodeName||``).toLowerCase():null}function F(e){if(e==null)return window;if(e.toString()!==`[object Window]`){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function pt(e){return e instanceof F(e).Element||e instanceof Element}function I(e){return e instanceof F(e).HTMLElement||e instanceof HTMLElement}function mt(e){return typeof ShadowRoot>`u`?!1:e instanceof F(e).ShadowRoot||e instanceof ShadowRoot}function ht(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];!I(i)||!ft(i)||(Object.assign(i.style,n),Object.keys(r).forEach(function(e){var t=r[e];t===!1?i.removeAttribute(e):i.setAttribute(e,t===!0?``:t)}))})}function gt(e){var t=e.state,n={popper:{position:t.options.strategy,left:`0`,top:`0`,margin:`0`},arrow:{position:`absolute`},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]=``,e},{});!I(r)||!ft(r)||(Object.assign(r.style,a),Object.keys(i).forEach(function(e){r.removeAttribute(e)}))})}}var _t={name:`applyStyles`,enabled:!0,phase:`write`,fn:ht,effect:gt,requires:[`computeStyles`]};function vt(e){return e.split(`-`)[0]}var yt=Math.max,bt=Math.min,xt=Math.round;function St(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+`/`+e.version}).join(` `):navigator.userAgent}function Ct(){return!/^((?!chrome|android).)*safari/i.test(St())}function wt(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),i=1,a=1;t&&I(e)&&(i=e.offsetWidth>0&&xt(r.width)/e.offsetWidth||1,a=e.offsetHeight>0&&xt(r.height)/e.offsetHeight||1);var o=(pt(e)?F(e):window).visualViewport,s=!Ct()&&n,c=(r.left+(s&&o?o.offsetLeft:0))/i,l=(r.top+(s&&o?o.offsetTop:0))/a,u=r.width/i,d=r.height/a;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c,x:c,y:l}}function Tt(e){var t=wt(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Et(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&mt(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Dt(e){return F(e).getComputedStyle(e)}function Ot(e){return[`table`,`td`,`th`].indexOf(ft(e))>=0}function kt(e){return((pt(e)?e.ownerDocument:e.document)||window.document).documentElement}function At(e){return ft(e)===`html`?e:e.assignedSlot||e.parentNode||(mt(e)?e.host:null)||kt(e)}function jt(e){return!I(e)||Dt(e).position===`fixed`?null:e.offsetParent}function Mt(e){var t=/firefox/i.test(St());if(/Trident/i.test(St())&&I(e)&&Dt(e).position===`fixed`)return null;var n=At(e);for(mt(n)&&(n=n.host);I(n)&&[`html`,`body`].indexOf(ft(n))<0;){var r=Dt(n);if(r.transform!==`none`||r.perspective!==`none`||r.contain===`paint`||[`transform`,`perspective`].indexOf(r.willChange)!==-1||t&&r.willChange===`filter`||t&&r.filter&&r.filter!==`none`)return n;n=n.parentNode}return null}function Nt(e){for(var t=F(e),n=jt(e);n&&Ot(n)&&Dt(n).position===`static`;)n=jt(n);return n&&(ft(n)===`html`||ft(n)===`body`&&Dt(n).position===`static`)?t:n||Mt(e)||t}function Pt(e){return[`top`,`bottom`].indexOf(e)>=0?`x`:`y`}function Ft(e,t,n){return yt(e,bt(t,n))}function It(e,t,n){var r=Ft(e,t,n);return r>n?n:r}function Lt(){return{top:0,right:0,bottom:0,left:0}}function Rt(e){return Object.assign({},Lt(),e)}function zt(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}var Bt=function(e,t){return e=typeof e==`function`?e(Object.assign({},t.rects,{placement:t.placement})):e,Rt(typeof e==`number`?zt(e,P):e)};function Vt(e){var t,n=e.state,r=e.name,i=e.options,a=n.elements.arrow,o=n.modifiersData.popperOffsets,s=vt(n.placement),c=Pt(s),l=[`left`,`right`].indexOf(s)>=0?`height`:`width`;if(!(!a||!o)){var u=Bt(i.padding,n),d=Tt(a),f=c===`y`?`top`:N,p=c===`y`?M:qe,m=n.rects.reference[l]+n.rects.reference[c]-o[c]-n.rects.popper[l],h=o[c]-n.rects.reference[c],g=Nt(a),_=g?c===`y`?g.clientHeight||0:g.clientWidth||0:0,ee=m/2-h/2,v=u[f],y=_-d[l]-u[p],b=_/2-d[l]/2+ee,x=Ft(v,b,y),S=c;n.modifiersData[r]=(t={},t[S]=x,t.centerOffset=x-b,t)}}function Ht(e){var t=e.state,n=e.options.element,r=n===void 0?`[data-popper-arrow]`:n;r!=null&&(typeof r==`string`&&(r=t.elements.popper.querySelector(r),!r)||Et(t.elements.popper,r)&&(t.elements.arrow=r))}var Ut={name:`arrow`,enabled:!0,phase:`main`,fn:Vt,effect:Ht,requires:[`popperOffsets`],requiresIfExists:[`preventOverflow`]};function Wt(e){return e.split(`-`)[1]}var Gt={top:`auto`,right:`auto`,bottom:`auto`,left:`auto`};function Kt(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:xt(n*i)/i||0,y:xt(r*i)/i||0}}function qt(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.variation,o=e.offsets,s=e.position,c=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,d=e.isFixed,f=o.x,p=f===void 0?0:f,m=o.y,h=m===void 0?0:m,g=typeof u==`function`?u({x:p,y:h}):{x:p,y:h};p=g.x,h=g.y;var _=o.hasOwnProperty(`x`),ee=o.hasOwnProperty(`y`),v=N,y=`top`,b=window;if(l){var x=Nt(n),S=`clientHeight`,C=`clientWidth`;if(x===F(n)&&(x=kt(n),Dt(x).position!==`static`&&s===`absolute`&&(S=`scrollHeight`,C=`scrollWidth`)),x=x,i===`top`||(i===`left`||i===`right`)&&a===`end`){y=M;var w=d&&x===b&&b.visualViewport?b.visualViewport.height:x[S];h-=w-r.height,h*=c?1:-1}if(i===`left`||(i===`top`||i===`bottom`)&&a===`end`){v=qe;var T=d&&x===b&&b.visualViewport?b.visualViewport.width:x[C];p-=T-r.width,p*=c?1:-1}}var te=Object.assign({position:s},l&&Gt),ne=u===!0?Kt({x:p,y:h},F(n)):{x:p,y:h};if(p=ne.x,h=ne.y,c){var E;return Object.assign({},te,(E={},E[y]=ee?`0`:``,E[v]=_?`0`:``,E.transform=(b.devicePixelRatio||1)<=1?`translate(`+p+`px, `+h+`px)`:`translate3d(`+p+`px, `+h+`px, 0)`,E))}return Object.assign({},te,(t={},t[y]=ee?h+`px`:``,t[v]=_?p+`px`:``,t.transform=``,t))}function Jt(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=r===void 0?!0:r,a=n.adaptive,o=a===void 0?!0:a,s=n.roundOffsets,c=s===void 0?!0:s,l={placement:vt(t.placement),variation:Wt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy===`fixed`};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,qt(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,qt(Object.assign({},l,{offsets:t.modifiersData.arrow,position:`absolute`,adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var Yt={name:`computeStyles`,enabled:!0,phase:`beforeWrite`,fn:Jt,data:{}},Xt={passive:!0};function Zt(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=i===void 0?!0:i,o=r.resize,s=o===void 0?!0:o,c=F(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(e){e.addEventListener(`scroll`,n.update,Xt)}),s&&c.addEventListener(`resize`,n.update,Xt),function(){a&&l.forEach(function(e){e.removeEventListener(`scroll`,n.update,Xt)}),s&&c.removeEventListener(`resize`,n.update,Xt)}}var Qt={name:`eventListeners`,enabled:!0,phase:`write`,fn:function(){},effect:Zt,data:{}},$t={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function en(e){return e.replace(/left|right|bottom|top/g,function(e){return $t[e]})}var tn={start:`end`,end:`start`};function nn(e){return e.replace(/start|end/g,function(e){return tn[e]})}function rn(e){var t=F(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function an(e){return wt(kt(e)).left+rn(e).scrollLeft}function on(e,t){var n=F(e),r=kt(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;var l=Ct();(l||!l&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}return{width:a,height:o,x:s+an(e),y:c}}function sn(e){var t=kt(e),n=rn(e),r=e.ownerDocument?.body,i=yt(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=yt(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),o=-n.scrollLeft+an(e),s=-n.scrollTop;return Dt(r||t).direction===`rtl`&&(o+=yt(t.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:o,y:s}}function cn(e){var t=Dt(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function ln(e){return[`html`,`body`,`#document`].indexOf(ft(e))>=0?e.ownerDocument.body:I(e)&&cn(e)?e:ln(At(e))}function un(e,t){t===void 0&&(t=[]);var n=ln(e),r=n===e.ownerDocument?.body,i=F(n),a=r?[i].concat(i.visualViewport||[],cn(n)?n:[]):n,o=t.concat(a);return r?o:o.concat(un(At(a)))}function dn(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function fn(e,t){var n=wt(e,!1,t===`fixed`);return n.top+=e.clientTop,n.left+=e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function pn(e,t,n){return t===`viewport`?dn(on(e,n)):pt(t)?fn(t,n):dn(sn(kt(e)))}function mn(e){var t=un(At(e)),n=[`absolute`,`fixed`].indexOf(Dt(e).position)>=0&&I(e)?Nt(e):e;return pt(n)?t.filter(function(e){return pt(e)&&Et(e,n)&&ft(e)!==`body`}):[]}function hn(e,t,n,r){var i=t===`clippingParents`?mn(e):[].concat(t),a=[].concat(i,[n]),o=a[0],s=a.reduce(function(t,n){var i=pn(e,n,r);return t.top=yt(i.top,t.top),t.right=bt(i.right,t.right),t.bottom=bt(i.bottom,t.bottom),t.left=yt(i.left,t.left),t},pn(e,o,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function gn(e){var t=e.reference,n=e.element,r=e.placement,i=r?vt(r):null,a=r?Wt(r):null,o=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,c;switch(i){case`top`:c={x:o,y:t.y-n.height};break;case M:c={x:o,y:t.y+t.height};break;case qe:c={x:t.x+t.width,y:s};break;case N:c={x:t.x-n.width,y:s};break;default:c={x:t.x,y:t.y}}var l=i?Pt(i):null;if(l!=null){var u=l===`y`?`height`:`width`;switch(a){case Ye:c[l]=c[l]-(t[u]/2-n[u]/2);break;case`end`:c[l]=c[l]+(t[u]/2-n[u]/2);break;default:}}return c}function _n(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=r===void 0?e.placement:r,a=n.strategy,o=a===void 0?e.strategy:a,s=n.boundary,c=s===void 0?Xe:s,l=n.rootBoundary,u=l===void 0?Ze:l,d=n.elementContext,f=d===void 0?Qe:d,p=n.altBoundary,m=p===void 0?!1:p,h=n.padding,g=h===void 0?0:h,_=Rt(typeof g==`number`?zt(g,P):g),ee=f===`popper`?$e:Qe,v=e.rects.popper,y=e.elements[m?ee:f],b=hn(pt(y)?y:y.contextElement||kt(e.elements.popper),c,u,o),x=wt(e.elements.reference),S=gn({reference:x,element:v,strategy:`absolute`,placement:i}),C=dn(Object.assign({},v,S)),w=f===`popper`?C:x,T={top:b.top-w.top+_.top,bottom:w.bottom-b.bottom+_.bottom,left:b.left-w.left+_.left,right:w.right-b.right+_.right},te=e.modifiersData.offset;if(f===`popper`&&te){var ne=te[i];Object.keys(T).forEach(function(e){var t=[`right`,`bottom`].indexOf(e)>=0?1:-1,n=[`top`,`bottom`].indexOf(e)>=0?`y`:`x`;T[e]+=ne[n]*t})}return T}function vn(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=n.boundary,a=n.rootBoundary,o=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?tt:c,u=Wt(r),d=u?s?et:et.filter(function(e){return Wt(e)===u}):P,f=d.filter(function(e){return l.indexOf(e)>=0});f.length===0&&(f=d);var p=f.reduce(function(t,n){return t[n]=_n(e,{placement:n,boundary:i,rootBoundary:a,padding:o})[vt(n)],t},{});return Object.keys(p).sort(function(e,t){return p[e]-p[t]})}function yn(e){if(vt(e)===`auto`)return[];var t=en(e);return[nn(e),t,nn(t)]}function bn(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,a=i===void 0?!0:i,o=n.altAxis,s=o===void 0?!0:o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,d=n.rootBoundary,f=n.altBoundary,p=n.flipVariations,m=p===void 0?!0:p,h=n.allowedAutoPlacements,g=t.options.placement,_=vt(g)===g,ee=c||(_||!m?[en(g)]:yn(g)),v=[g].concat(ee).reduce(function(e,n){return e.concat(vt(n)===`auto`?vn(t,{placement:n,boundary:u,rootBoundary:d,padding:l,flipVariations:m,allowedAutoPlacements:h}):n)},[]),y=t.rects.reference,b=t.rects.popper,x=new Map,S=!0,C=v[0],w=0;w<v.length;w++){var T=v[w],te=vt(T),ne=Wt(T)===Ye,E=[`top`,M].indexOf(te)>=0,re=E?`width`:`height`,D=_n(t,{placement:T,boundary:u,rootBoundary:d,altBoundary:f,padding:l}),O=E?ne?qe:N:ne?M:`top`;y[re]>b[re]&&(O=en(O));var ie=en(O),ae=[];if(a&&ae.push(D[te]<=0),s&&ae.push(D[O]<=0,D[ie]<=0),ae.every(function(e){return e})){C=T,S=!1;break}x.set(T,ae)}if(S)for(var oe=m?3:1,se=function(e){var t=v.find(function(t){var n=x.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return C=t,`break`},ce=oe;ce>0&&se(ce)!==`break`;ce--);t.placement!==C&&(t.modifiersData[r]._skip=!0,t.placement=C,t.reset=!0)}}var xn={name:`flip`,enabled:!0,phase:`main`,fn:bn,requiresIfExists:[`offset`],data:{_skip:!1}};function Sn(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Cn(e){return[`top`,qe,M,N].some(function(t){return e[t]>=0})}function wn(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,a=t.modifiersData.preventOverflow,o=_n(t,{elementContext:`reference`}),s=_n(t,{altBoundary:!0}),c=Sn(o,r),l=Sn(s,i,a),u=Cn(c),d=Cn(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}var Tn={name:`hide`,enabled:!0,phase:`main`,requiresIfExists:[`preventOverflow`],fn:wn};function En(e,t,n){var r=vt(e),i=[`left`,`top`].indexOf(r)>=0?-1:1,a=typeof n==`function`?n(Object.assign({},t,{placement:e})):n,o=a[0],s=a[1];return o||=0,s=(s||0)*i,[`left`,`right`].indexOf(r)>=0?{x:s,y:o}:{x:o,y:s}}function Dn(e){var t=e.state,n=e.options,r=e.name,i=n.offset,a=i===void 0?[0,0]:i,o=tt.reduce(function(e,n){return e[n]=En(n,t.rects,a),e},{}),s=o[t.placement],c=s.x,l=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=o}var On={name:`offset`,enabled:!0,phase:`main`,requires:[`popperOffsets`],fn:Dn};function kn(e){var t=e.state,n=e.name;t.modifiersData[n]=gn({reference:t.rects.reference,element:t.rects.popper,strategy:`absolute`,placement:t.placement})}var An={name:`popperOffsets`,enabled:!0,phase:`read`,fn:kn,data:{}};function jn(e){return e===`x`?`y`:`x`}function Mn(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,a=i===void 0?!0:i,o=n.altAxis,s=o===void 0?!1:o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.padding,f=n.tether,p=f===void 0?!0:f,m=n.tetherOffset,h=m===void 0?0:m,g=_n(t,{boundary:c,rootBoundary:l,padding:d,altBoundary:u}),_=vt(t.placement),ee=Wt(t.placement),v=!ee,y=Pt(_),b=jn(y),x=t.modifiersData.popperOffsets,S=t.rects.reference,C=t.rects.popper,w=typeof h==`function`?h(Object.assign({},t.rects,{placement:t.placement})):h,T=typeof w==`number`?{mainAxis:w,altAxis:w}:Object.assign({mainAxis:0,altAxis:0},w),te=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,ne={x:0,y:0};if(x){if(a){var E=y===`y`?`top`:N,re=y===`y`?M:qe,D=y===`y`?`height`:`width`,O=x[y],ie=O+g[E],ae=O-g[re],oe=p?-C[D]/2:0,se=ee===`start`?S[D]:C[D],ce=ee===`start`?-C[D]:-S[D],le=t.elements.arrow,k=p&&le?Tt(le):{width:0,height:0},ue=t.modifiersData[`arrow#persistent`]?t.modifiersData[`arrow#persistent`].padding:Lt(),A=ue[E],de=ue[re],j=Ft(0,S[D],k[D]),fe=v?S[D]/2-oe-j-A-T.mainAxis:se-j-A-T.mainAxis,pe=v?-S[D]/2+oe+j+de+T.mainAxis:ce+j+de+T.mainAxis,me=t.elements.arrow&&Nt(t.elements.arrow),he=me?y===`y`?me.clientTop||0:me.clientLeft||0:0,ge=te?.[y]??0,_e=O+fe-ge-he,ve=O+pe-ge,ye=Ft(p?bt(ie,_e):ie,O,p?yt(ae,ve):ae);x[y]=ye,ne[y]=ye-O}if(s){var be=y===`x`?`top`:N,xe=y===`x`?M:qe,Se=x[b],Ce=b===`y`?`height`:`width`,we=Se+g[be],Te=Se-g[xe],Ee=[`top`,N].indexOf(_)!==-1,De=te?.[b]??0,Oe=Ee?we:Se-S[Ce]-C[Ce]-De+T.altAxis,ke=Ee?Se+S[Ce]+C[Ce]-De-T.altAxis:Te,Ae=p&&Ee?It(Oe,Se,ke):Ft(p?Oe:we,Se,p?ke:Te);x[b]=Ae,ne[b]=Ae-Se}t.modifiersData[r]=ne}}var Nn={name:`preventOverflow`,enabled:!0,phase:`main`,fn:Mn,requiresIfExists:[`offset`]};function Pn(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Fn(e){return e===F(e)||!I(e)?rn(e):Pn(e)}function In(e){var t=e.getBoundingClientRect(),n=xt(t.width)/e.offsetWidth||1,r=xt(t.height)/e.offsetHeight||1;return n!==1||r!==1}function Ln(e,t,n){n===void 0&&(n=!1);var r=I(t),i=I(t)&&In(t),a=kt(t),o=wt(e,i,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((ft(t)!==`body`||cn(a))&&(s=Fn(t)),I(t)?(c=wt(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):a&&(c.x=an(a))),{x:o.left+s.scrollLeft-c.x,y:o.top+s.scrollTop-c.y,width:o.width,height:o.height}}function Rn(e){var t=new Map,n=new Set,r=[];e.forEach(function(e){t.set(e.name,e)});function i(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}}),r.push(e)}return e.forEach(function(e){n.has(e.name)||i(e)}),r}function zn(e){var t=Rn(e);return dt.reduce(function(e,n){return e.concat(t.filter(function(e){return e.phase===n}))},[])}function Bn(e){var t;return function(){return t||=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})}),t}}function Vn(e){var t=e.reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{});return Object.keys(t).map(function(e){return t[e]})}var Hn={placement:`bottom`,modifiers:[],strategy:`absolute`};function Un(){return![...arguments].some(function(e){return!(e&&typeof e.getBoundingClientRect==`function`)})}function Wn(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,i=t.defaultOptions,a=i===void 0?Hn:i;return function(e,t,n){n===void 0&&(n=a);var i={placement:`bottom`,orderedModifiers:[],options:Object.assign({},Hn,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],s=!1,c={state:i,setOptions:function(n){var o=typeof n==`function`?n(i.options):n;u(),i.options=Object.assign({},a,i.options,o),i.scrollParents={reference:pt(e)?un(e):e.contextElement?un(e.contextElement):[],popper:un(t)};var s=zn(Vn([].concat(r,i.options.modifiers)));return i.orderedModifiers=s.filter(function(e){return e.enabled}),l(),c.update()},forceUpdate:function(){if(!s){var e=i.elements,t=e.reference,n=e.popper;if(Un(t,n)){i.rects={reference:Ln(t,Nt(n),i.options.strategy===`fixed`),popper:Tt(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach(function(e){return i.modifiersData[e.name]=Object.assign({},e.data)});for(var r=0;r<i.orderedModifiers.length;r++){if(i.reset===!0){i.reset=!1,r=-1;continue}var a=i.orderedModifiers[r],o=a.fn,l=a.options,u=l===void 0?{}:l,d=a.name;typeof o==`function`&&(i=o({state:i,options:u,name:d,instance:c})||i)}}}},update:Bn(function(){return new Promise(function(e){c.forceUpdate(),e(i)})}),destroy:function(){u(),s=!0}};if(!Un(e,t))return c;c.setOptions(n).then(function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)});function l(){i.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=n===void 0?{}:n,a=e.effect;if(typeof a==`function`){var s=a({state:i,name:t,instance:c,options:r});o.push(s||function(){})}})}function u(){o.forEach(function(e){return e()}),o=[]}return c}}var Gn=Wn(),Kn=Wn({defaultModifiers:[Qt,An,Yt,_t]}),qn=Wn({defaultModifiers:[Qt,An,Yt,_t,On,xn,Nn,Ut,Tn]}),Jn=t({afterMain:()=>st,afterRead:()=>it,afterWrite:()=>ut,applyStyles:()=>_t,arrow:()=>Ut,auto:()=>Je,basePlacements:()=>P,beforeMain:()=>at,beforeRead:()=>nt,beforeWrite:()=>ct,bottom:()=>M,clippingParents:()=>Xe,computeStyles:()=>Yt,createPopper:()=>qn,createPopperBase:()=>Gn,createPopperLite:()=>Kn,detectOverflow:()=>_n,end:()=>`end`,eventListeners:()=>Qt,flip:()=>xn,hide:()=>Tn,left:()=>N,main:()=>ot,modifierPhases:()=>dt,offset:()=>On,placements:()=>tt,popper:()=>Qe,popperGenerator:()=>Wn,popperOffsets:()=>An,preventOverflow:()=>Nn,read:()=>rt,reference:()=>$e,right:()=>qe,start:()=>Ye,top:()=>`top`,variationPlacements:()=>et,viewport:()=>Ze,write:()=>lt}),Yn=new Map,Xn={set(e,t,n){Yn.has(e)||Yn.set(e,new Map);let r=Yn.get(e);if(!r.has(t)&&r.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);return}r.set(t,n)},get(e,t){return Yn.has(e)&&Yn.get(e).get(t)||null},remove(e,t){if(!Yn.has(e))return;let n=Yn.get(e);n.delete(t),n.size===0&&Yn.delete(e)}},Zn=1e6,Qn=1e3,$n=`transitionend`,er=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),e),tr=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),nr=e=>{do e+=Math.floor(Math.random()*Zn);while(document.getElementById(e));return e},rr=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);return!Number.parseFloat(t)&&!Number.parseFloat(n)?0:(t=t.split(`,`)[0],n=n.split(`,`)[0],(Number.parseFloat(t)+Number.parseFloat(n))*Qn)},ir=e=>{e.dispatchEvent(new Event($n))},ar=e=>!e||typeof e!=`object`?!1:(e.jquery!==void 0&&(e=e[0]),e.nodeType!==void 0),or=e=>ar(e)?e.jquery?e[0]:e:typeof e==`string`&&e.length>0?document.querySelector(er(e)):null,sr=e=>{if(!ar(e)||e.getClientRects().length===0)return!1;let t=getComputedStyle(e).getPropertyValue(`visibility`)===`visible`,n=e.closest(`details:not([open])`);if(!n)return t;if(n!==e){let t=e.closest(`summary`);if(t&&t.parentNode!==n||t===null)return!1}return t},cr=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains(`disabled`)?!0:e.disabled===void 0?e.hasAttribute(`disabled`)&&e.getAttribute(`disabled`)!==`false`:e.disabled,lr=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode==`function`){let t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?lr(e.parentNode):null},ur=()=>{},dr=e=>{e.offsetHeight},fr=()=>window.jQuery&&!document.body.hasAttribute(`data-bs-no-jquery`)?window.jQuery:null,pr=[],mr=e=>{document.readyState===`loading`?(pr.length||document.addEventListener(`DOMContentLoaded`,()=>{for(let e of pr)e()}),pr.push(e)):e()},L=()=>document.documentElement.dir===`rtl`,R=e=>{mr(()=>{let t=fr();if(t){let n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}})},z=(e,t=[],n=e)=>typeof e==`function`?e.call(...t):n,hr=(e,t,n=!0)=>{if(!n){z(e);return}let r=rr(t)+5,i=!1,a=({target:n})=>{n===t&&(i=!0,t.removeEventListener($n,a),z(e))};t.addEventListener($n,a),setTimeout(()=>{i||ir(t)},r)},gr=(e,t,n,r)=>{let i=e.length,a=e.indexOf(t);return a===-1?!n&&r?e[i-1]:e[0]:(a+=n?1:-1,r&&(a=(a+i)%i),e[Math.max(0,Math.min(a,i-1))])},_r=/[^.]*(?=\..*)\.|.*/,vr=/\..*/,yr=/::\d+$/,br={},xr=1,Sr={mouseenter:`mouseover`,mouseleave:`mouseout`},Cr=new Set(`click.dblclick.mouseup.mousedown.contextmenu.mousewheel.DOMMouseScroll.mouseover.mouseout.mousemove.selectstart.selectend.keydown.keypress.keyup.orientationchange.touchstart.touchmove.touchend.touchcancel.pointerdown.pointermove.pointerup.pointerleave.pointercancel.gesturestart.gesturechange.gestureend.focus.blur.change.reset.select.submit.focusin.focusout.load.unload.beforeunload.resize.move.DOMContentLoaded.readystatechange.error.abort.scroll`.split(`.`));function wr(e,t){return t&&`${t}::${xr++}`||e.uidEvent||xr++}function Tr(e){let t=wr(e);return e.uidEvent=t,br[t]=br[t]||{},br[t]}function Er(e,t){return function n(r){return Pr(r,{delegateTarget:e}),n.oneOff&&B.off(e,r.type,t),t.apply(e,[r])}}function Dr(e,t,n){return function r(i){let a=e.querySelectorAll(t);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(let s of a)if(s===o)return Pr(i,{delegateTarget:o}),r.oneOff&&B.off(e,i.type,t,n),n.apply(o,[i])}}function Or(e,t,n=null){return Object.values(e).find(e=>e.callable===t&&e.delegationSelector===n)}function kr(e,t,n){let r=typeof t==`string`,i=r?n:t||n,a=Nr(e);return Cr.has(a)||(a=e),[r,i,a]}function Ar(e,t,n,r,i){if(typeof t!=`string`||!e)return;let[a,o,s]=kr(t,n,r);t in Sr&&(o=(e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)})(o));let c=Tr(e),l=c[s]||(c[s]={}),u=Or(l,o,a?n:null);if(u){u.oneOff=u.oneOff&&i;return}let d=wr(o,t.replace(_r,``)),f=a?Dr(e,n,o):Er(e,o);f.delegationSelector=a?n:null,f.callable=o,f.oneOff=i,f.uidEvent=d,l[d]=f,e.addEventListener(s,f,a)}function jr(e,t,n,r,i){let a=Or(t[n],r,i);a&&(e.removeEventListener(n,a,!!i),delete t[n][a.uidEvent])}function Mr(e,t,n,r){let i=t[n]||{};for(let[a,o]of Object.entries(i))a.includes(r)&&jr(e,t,n,o.callable,o.delegationSelector)}function Nr(e){return e=e.replace(vr,``),Sr[e]||e}var B={on(e,t,n,r){Ar(e,t,n,r,!1)},one(e,t,n,r){Ar(e,t,n,r,!0)},off(e,t,n,r){if(typeof t!=`string`||!e)return;let[i,a,o]=kr(t,n,r),s=o!==t,c=Tr(e),l=c[o]||{},u=t.startsWith(`.`);if(a!==void 0){if(!Object.keys(l).length)return;jr(e,c,o,a,i?n:null);return}if(u)for(let n of Object.keys(c))Mr(e,c,n,t.slice(1));for(let[n,r]of Object.entries(l)){let i=n.replace(yr,``);(!s||t.includes(i))&&jr(e,c,o,r.callable,r.delegationSelector)}},trigger(e,t,n){if(typeof t!=`string`||!e)return null;let r=fr(),i=t!==Nr(t),a=null,o=!0,s=!0,c=!1;i&&r&&(a=r.Event(t,n),r(e).trigger(a),o=!a.isPropagationStopped(),s=!a.isImmediatePropagationStopped(),c=a.isDefaultPrevented());let l=Pr(new Event(t,{bubbles:o,cancelable:!0}),n);return c&&l.preventDefault(),s&&e.dispatchEvent(l),l.defaultPrevented&&a&&a.preventDefault(),l}};function Pr(e,t={}){for(let[n,r]of Object.entries(t))try{e[n]=r}catch{Object.defineProperty(e,n,{configurable:!0,get(){return r}})}return e}function Fr(e){if(e===`true`)return!0;if(e===`false`)return!1;if(e===Number(e).toString())return Number(e);if(e===``||e===`null`)return null;if(typeof e!=`string`)return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function Ir(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}var Lr={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${Ir(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${Ir(t)}`)},getDataAttributes(e){if(!e)return{};let t={},n=Object.keys(e.dataset).filter(e=>e.startsWith(`bs`)&&!e.startsWith(`bsConfig`));for(let r of n){let n=r.replace(/^bs/,``);n=n.charAt(0).toLowerCase()+n.slice(1),t[n]=Fr(e.dataset[r])}return t},getDataAttribute(e,t){return Fr(e.getAttribute(`data-bs-${Ir(t)}`))}},Rr=class{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw Error(`You have to implement the static method "NAME", for each component!`)}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){let n=ar(t)?Lr.getDataAttribute(t,`config`):{};return{...this.constructor.Default,...typeof n==`object`?n:{},...ar(t)?Lr.getDataAttributes(t):{},...typeof e==`object`?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(let[n,r]of Object.entries(t)){let t=e[n],i=ar(t)?`element`:tr(t);if(!new RegExp(r).test(i))throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${i}" but expected type "${r}".`)}}},zr=`5.3.8`,Br=class extends Rr{constructor(e,t){super(),e=or(e),e&&(this._element=e,this._config=this._getConfig(t),Xn.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Xn.remove(this._element,this.constructor.DATA_KEY),B.off(this._element,this.constructor.EVENT_KEY);for(let e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){hr(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return Xn.get(or(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,typeof t==`object`?t:null)}static get VERSION(){return zr}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}},Vr=e=>{let t=e.getAttribute(`data-bs-target`);if(!t||t===`#`){let n=e.getAttribute(`href`);if(!n||!n.includes(`#`)&&!n.startsWith(`.`))return null;n.includes(`#`)&&!n.startsWith(`#`)&&(n=`#${n.split(`#`)[1]}`),t=n&&n!==`#`?n.trim():null}return t?t.split(`,`).map(e=>er(e)).join(`,`):null},V={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(e=>e.matches(t))},parents(e,t){let n=[],r=e.parentNode.closest(t);for(;r;)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){let t=[`a`,`button`,`input`,`textarea`,`select`,`details`,`[tabindex]`,`[contenteditable="true"]`].map(e=>`${e}:not([tabindex^="-"])`).join(`,`);return this.find(t,e).filter(e=>!cr(e)&&sr(e))},getSelectorFromElement(e){let t=Vr(e);return t&&V.findOne(t)?t:null},getElementFromSelector(e){let t=Vr(e);return t?V.findOne(t):null},getMultipleElementsFromSelector(e){let t=Vr(e);return t?V.find(t):[]}},Hr=(e,t=`hide`)=>{let n=`click.dismiss${e.EVENT_KEY}`,r=e.NAME;B.on(document,n,`[data-bs-dismiss="${r}"]`,function(n){if([`A`,`AREA`].includes(this.tagName)&&n.preventDefault(),cr(this))return;let i=V.getElementFromSelector(this)||this.closest(`.${r}`);e.getOrCreateInstance(i)[t]()})},Ur=`alert`,Wr=`.bs.alert`,Gr=`close${Wr}`,Kr=`closed${Wr}`,qr=`fade`,Jr=`show`,Yr=class e extends Br{static get NAME(){return Ur}close(){if(B.trigger(this._element,Gr).defaultPrevented)return;this._element.classList.remove(Jr);let e=this._element.classList.contains(qr);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),B.trigger(this._element,Kr),this.dispose()}static jQueryInterface(t){return this.each(function(){let n=e.getOrCreateInstance(this);if(typeof t==`string`){if(n[t]===void 0||t.startsWith(`_`)||t===`constructor`)throw TypeError(`No method named "${t}"`);n[t](this)}})}};Hr(Yr,`close`),R(Yr);var Xr=`button`,Zr=`.bs.button`,Qr=`.data-api`,$r=`active`,ei=`[data-bs-toggle="button"]`,ti=`click${Zr}${Qr}`,ni=class e extends Br{static get NAME(){return Xr}toggle(){this._element.setAttribute(`aria-pressed`,this._element.classList.toggle($r))}static jQueryInterface(t){return this.each(function(){let n=e.getOrCreateInstance(this);t===`toggle`&&n[t]()})}};B.on(document,ti,ei,e=>{e.preventDefault();let t=e.target.closest(ei);ni.getOrCreateInstance(t).toggle()}),R(ni);var ri=`swipe`,ii=`.bs.swipe`,ai=`touchstart${ii}`,oi=`touchmove${ii}`,si=`touchend${ii}`,ci=`pointerdown${ii}`,li=`pointerup${ii}`,ui=`touch`,di=`pen`,fi=`pointer-event`,pi=40,mi={endCallback:null,leftCallback:null,rightCallback:null},hi={endCallback:`(function|null)`,leftCallback:`(function|null)`,rightCallback:`(function|null)`},gi=class e extends Rr{constructor(t,n){super(),this._element=t,!(!t||!e.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return mi}static get DefaultType(){return hi}static get NAME(){return ri}dispose(){B.off(this._element,ii)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),z(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){let e=Math.abs(this._deltaX);if(e<=pi)return;let t=e/this._deltaX;this._deltaX=0,t&&z(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(B.on(this._element,ci,e=>this._start(e)),B.on(this._element,li,e=>this._end(e)),this._element.classList.add(fi)):(B.on(this._element,ai,e=>this._start(e)),B.on(this._element,oi,e=>this._move(e)),B.on(this._element,si,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===di||e.pointerType===ui)}static isSupported(){return`ontouchstart`in document.documentElement||navigator.maxTouchPoints>0}},_i=`carousel`,vi=`.bs.carousel`,yi=`.data-api`,bi=`ArrowLeft`,xi=`ArrowRight`,Si=500,Ci=`next`,wi=`prev`,Ti=`left`,Ei=`right`,Di=`slide${vi}`,Oi=`slid${vi}`,ki=`keydown${vi}`,Ai=`mouseenter${vi}`,ji=`mouseleave${vi}`,Mi=`dragstart${vi}`,Ni=`load${vi}${yi}`,Pi=`click${vi}${yi}`,Fi=`carousel`,Ii=`active`,Li=`slide`,Ri=`carousel-item-end`,zi=`carousel-item-start`,Bi=`carousel-item-next`,Vi=`carousel-item-prev`,Hi=`.active`,Ui=`.carousel-item`,Wi=Hi+Ui,Gi=`.carousel-item img`,Ki=`.carousel-indicators`,qi=`[data-bs-slide], [data-bs-slide-to]`,Ji=`[data-bs-ride="carousel"]`,Yi={[bi]:Ei,[xi]:Ti},Xi={interval:5e3,keyboard:!0,pause:`hover`,ride:!1,touch:!0,wrap:!0},Zi={interval:`(number|boolean)`,keyboard:`boolean`,pause:`(string|boolean)`,ride:`(boolean|string)`,touch:`boolean`,wrap:`boolean`},Qi=class e extends Br{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=V.findOne(Ki,this._element),this._addEventListeners(),this._config.ride===Fi&&this.cycle()}static get Default(){return Xi}static get DefaultType(){return Zi}static get NAME(){return _i}next(){this._slide(Ci)}nextWhenVisible(){!document.hidden&&sr(this._element)&&this.next()}prev(){this._slide(wi)}pause(){this._isSliding&&ir(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){B.one(this._element,Oi,()=>this.cycle());return}this.cycle()}}to(e){let t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding){B.one(this._element,Oi,()=>this.to(e));return}let n=this._getItemIndex(this._getActive());if(n===e)return;let r=e>n?Ci:wi;this._slide(r,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&B.on(this._element,ki,e=>this._keydown(e)),this._config.pause===`hover`&&(B.on(this._element,Ai,()=>this.pause()),B.on(this._element,ji,()=>this._maybeEnableCycle())),this._config.touch&&gi.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(let e of V.find(Gi,this._element))B.on(e,Mi,e=>e.preventDefault());let e={leftCallback:()=>this._slide(this._directionToOrder(Ti)),rightCallback:()=>this._slide(this._directionToOrder(Ei)),endCallback:()=>{this._config.pause===`hover`&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Si+this._config.interval))}};this._swipeHelper=new gi(this._element,e)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;let t=Yi[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;let t=V.findOne(Hi,this._indicatorsElement);t.classList.remove(Ii),t.removeAttribute(`aria-current`);let n=V.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(Ii),n.setAttribute(`aria-current`,`true`))}_updateInterval(){let e=this._activeElement||this._getActive();if(!e)return;let t=Number.parseInt(e.getAttribute(`data-bs-interval`),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;let n=this._getActive(),r=e===Ci,i=t||gr(this._getItems(),n,r,this._config.wrap);if(i===n)return;let a=this._getItemIndex(i),o=t=>B.trigger(this._element,t,{relatedTarget:i,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:a});if(o(Di).defaultPrevented||!n||!i)return;let s=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(a),this._activeElement=i;let c=r?zi:Ri,l=r?Bi:Vi;i.classList.add(l),dr(i),n.classList.add(c),i.classList.add(c),this._queueCallback(()=>{i.classList.remove(c,l),i.classList.add(Ii),n.classList.remove(Ii,l,c),this._isSliding=!1,o(Oi)},n,this._isAnimated()),s&&this.cycle()}_isAnimated(){return this._element.classList.contains(Li)}_getActive(){return V.findOne(Wi,this._element)}_getItems(){return V.find(Ui,this._element)}_clearInterval(){this._interval&&=(clearInterval(this._interval),null)}_directionToOrder(e){return L()?e===Ti?wi:Ci:e===Ti?Ci:wi}_orderToDirection(e){return L()?e===wi?Ti:Ei:e===wi?Ei:Ti}static jQueryInterface(t){return this.each(function(){let n=e.getOrCreateInstance(this,t);if(typeof t==`number`){n.to(t);return}if(typeof t==`string`){if(n[t]===void 0||t.startsWith(`_`)||t===`constructor`)throw TypeError(`No method named "${t}"`);n[t]()}})}};B.on(document,Pi,qi,function(e){let t=V.getElementFromSelector(this);if(!t||!t.classList.contains(Fi))return;e.preventDefault();let n=Qi.getOrCreateInstance(t),r=this.getAttribute(`data-bs-slide-to`);if(r){n.to(r),n._maybeEnableCycle();return}if(Lr.getDataAttribute(this,`slide`)===`next`){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()}),B.on(window,Ni,()=>{let e=V.find(Ji);for(let t of e)Qi.getOrCreateInstance(t)}),R(Qi);var $i=`collapse`,ea=`.bs.collapse`,ta=`.data-api`,na=`show${ea}`,ra=`shown${ea}`,ia=`hide${ea}`,aa=`hidden${ea}`,oa=`click${ea}${ta}`,sa=`show`,ca=`collapse`,la=`collapsing`,ua=`collapsed`,da=`:scope .${ca} .${ca}`,fa=`collapse-horizontal`,pa=`width`,ma=`height`,ha=`.collapse.show, .collapse.collapsing`,ga=`[data-bs-toggle="collapse"]`,_a={parent:null,toggle:!0},va={parent:`(null|element)`,toggle:`boolean`},ya=class e extends Br{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];let n=V.find(ga);for(let e of n){let t=V.getSelectorFromElement(e),n=V.find(t).filter(e=>e===this._element);t!==null&&n.length&&this._triggerArray.push(e)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return _a}static get DefaultType(){return va}static get NAME(){return $i}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(ha).filter(e=>e!==this._element).map(t=>e.getOrCreateInstance(t,{toggle:!1}))),t.length&&t[0]._isTransitioning||B.trigger(this._element,na).defaultPrevented)return;for(let e of t)e.hide();let n=this._getDimension();this._element.classList.remove(ca),this._element.classList.add(la),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;let r=()=>{this._isTransitioning=!1,this._element.classList.remove(la),this._element.classList.add(ca,sa),this._element.style[n]=``,B.trigger(this._element,ra)},i=`scroll${n[0].toUpperCase()+n.slice(1)}`;this._queueCallback(r,this._element,!0),this._element.style[n]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown()||B.trigger(this._element,ia).defaultPrevented)return;let e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,dr(this._element),this._element.classList.add(la),this._element.classList.remove(ca,sa);for(let e of this._triggerArray){let t=V.getElementFromSelector(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;let t=()=>{this._isTransitioning=!1,this._element.classList.remove(la),this._element.classList.add(ca),B.trigger(this._element,aa)};this._element.style[e]=``,this._queueCallback(t,this._element,!0)}_isShown(e=this._element){return e.classList.contains(sa)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=or(e.parent),e}_getDimension(){return this._element.classList.contains(fa)?pa:ma}_initializeChildren(){if(!this._config.parent)return;let e=this._getFirstLevelChildren(ga);for(let t of e){let e=V.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){let t=V.find(da,this._config.parent);return V.find(e,this._config.parent).filter(e=>!t.includes(e))}_addAriaAndCollapsedClass(e,t){if(e.length)for(let n of e)n.classList.toggle(ua,!t),n.setAttribute(`aria-expanded`,t)}static jQueryInterface(t){let n={};return typeof t==`string`&&/show|hide/.test(t)&&(n.toggle=!1),this.each(function(){let r=e.getOrCreateInstance(this,n);if(typeof t==`string`){if(r[t]===void 0)throw TypeError(`No method named "${t}"`);r[t]()}})}};B.on(document,oa,ga,function(e){(e.target.tagName===`A`||e.delegateTarget&&e.delegateTarget.tagName===`A`)&&e.preventDefault();for(let e of V.getMultipleElementsFromSelector(this))ya.getOrCreateInstance(e,{toggle:!1}).toggle()}),R(ya);var ba=`dropdown`,xa=`.bs.dropdown`,Sa=`.data-api`,Ca=`Escape`,wa=`Tab`,Ta=`ArrowUp`,Ea=`ArrowDown`,Da=2,Oa=`hide${xa}`,ka=`hidden${xa}`,Aa=`show${xa}`,ja=`shown${xa}`,Ma=`click${xa}${Sa}`,Na=`keydown${xa}${Sa}`,Pa=`keyup${xa}${Sa}`,Fa=`show`,Ia=`dropup`,La=`dropend`,Ra=`dropstart`,za=`dropup-center`,Ba=`dropdown-center`,Va=`[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)`,Ha=`${Va}.${Fa}`,Ua=`.dropdown-menu`,Wa=`.navbar`,Ga=`.navbar-nav`,Ka=`.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)`,qa=L()?`top-end`:`top-start`,Ja=L()?`top-start`:`top-end`,Ya=L()?`bottom-end`:`bottom-start`,Xa=L()?`bottom-start`:`bottom-end`,Za=L()?`left-start`:`right-start`,Qa=L()?`right-start`:`left-start`,$a=`top`,eo=`bottom`,to={autoClose:!0,boundary:`clippingParents`,display:`dynamic`,offset:[0,2],popperConfig:null,reference:`toggle`},no={autoClose:`(boolean|string)`,boundary:`(string|element)`,display:`string`,offset:`(array|string|function)`,popperConfig:`(null|object|function)`,reference:`(string|element|object)`},ro=class e extends Br{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=V.next(this._element,Ua)[0]||V.prev(this._element,Ua)[0]||V.findOne(Ua,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return to}static get DefaultType(){return no}static get NAME(){return ba}toggle(){return this._isShown()?this.hide():this.show()}show(){if(cr(this._element)||this._isShown())return;let e={relatedTarget:this._element};if(!B.trigger(this._element,Aa,e).defaultPrevented){if(this._createPopper(),`ontouchstart`in document.documentElement&&!this._parent.closest(Ga))for(let e of[].concat(...document.body.children))B.on(e,`mouseover`,ur);this._element.focus(),this._element.setAttribute(`aria-expanded`,!0),this._menu.classList.add(Fa),this._element.classList.add(Fa),B.trigger(this._element,ja,e)}}hide(){if(cr(this._element)||!this._isShown())return;let e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!B.trigger(this._element,Oa,e).defaultPrevented){if(`ontouchstart`in document.documentElement)for(let e of[].concat(...document.body.children))B.off(e,`mouseover`,ur);this._popper&&this._popper.destroy(),this._menu.classList.remove(Fa),this._element.classList.remove(Fa),this._element.setAttribute(`aria-expanded`,`false`),Lr.removeDataAttribute(this._menu,`popper`),B.trigger(this._element,ka,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference==`object`&&!ar(e.reference)&&typeof e.reference.getBoundingClientRect!=`function`)throw TypeError(`${ba.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(Jn===void 0)throw TypeError(`Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)`);let e=this._element;this._config.reference===`parent`?e=this._parent:ar(this._config.reference)?e=or(this._config.reference):typeof this._config.reference==`object`&&(e=this._config.reference);let t=this._getPopperConfig();this._popper=qn(e,this._menu,t)}_isShown(){return this._menu.classList.contains(Fa)}_getPlacement(){let e=this._parent;if(e.classList.contains(La))return Za;if(e.classList.contains(Ra))return Qa;if(e.classList.contains(za))return $a;if(e.classList.contains(Ba))return eo;let t=getComputedStyle(this._menu).getPropertyValue(`--bs-position`).trim()===`end`;return e.classList.contains(Ia)?t?Ja:qa:t?Xa:Ya}_detectNavbar(){return this._element.closest(Wa)!==null}_getOffset(){let{offset:e}=this._config;return typeof e==`string`?e.split(`,`).map(e=>Number.parseInt(e,10)):typeof e==`function`?t=>e(t,this._element):e}_getPopperConfig(){let e={placement:this._getPlacement(),modifiers:[{name:`preventOverflow`,options:{boundary:this._config.boundary}},{name:`offset`,options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display===`static`)&&(Lr.setDataAttribute(this._menu,`popper`,`static`),e.modifiers=[{name:`applyStyles`,enabled:!1}]),{...e,...z(this._config.popperConfig,[void 0,e])}}_selectMenuItem({key:e,target:t}){let n=V.find(Ka,this._menu).filter(e=>sr(e));n.length&&gr(n,t,e===Ea,!n.includes(t)).focus()}static jQueryInterface(t){return this.each(function(){let n=e.getOrCreateInstance(this,t);if(typeof t==`string`){if(n[t]===void 0)throw TypeError(`No method named "${t}"`);n[t]()}})}static clearMenus(t){if(t.button===Da||t.type===`keyup`&&t.key!==wa)return;let n=V.find(Ha);for(let r of n){let n=e.getInstance(r);if(!n||n._config.autoClose===!1)continue;let i=t.composedPath(),a=i.includes(n._menu);if(i.includes(n._element)||n._config.autoClose===`inside`&&!a||n._config.autoClose===`outside`&&a||n._menu.contains(t.target)&&(t.type===`keyup`&&t.key===wa||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;let o={relatedTarget:n._element};t.type===`click`&&(o.clickEvent=t),n._completeHide(o)}}static dataApiKeydownHandler(t){let n=/input|textarea/i.test(t.target.tagName),r=t.key===Ca,i=[Ta,Ea].includes(t.key);if(!i&&!r||n&&!r)return;t.preventDefault();let a=this.matches(Va)?this:V.prev(this,Va)[0]||V.next(this,Va)[0]||V.findOne(Va,t.delegateTarget.parentNode),o=e.getOrCreateInstance(a);if(i){t.stopPropagation(),o.show(),o._selectMenuItem(t);return}o._isShown()&&(t.stopPropagation(),o.hide(),a.focus())}};B.on(document,Na,Va,ro.dataApiKeydownHandler),B.on(document,Na,Ua,ro.dataApiKeydownHandler),B.on(document,Ma,ro.clearMenus),B.on(document,Pa,ro.clearMenus),B.on(document,Ma,Va,function(e){e.preventDefault(),ro.getOrCreateInstance(this).toggle()}),R(ro);var io=`backdrop`,ao=`fade`,oo=`show`,so=`mousedown.bs.${io}`,co={className:`modal-backdrop`,clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:`body`},lo={className:`string`,clickCallback:`(function|null)`,isAnimated:`boolean`,isVisible:`boolean`,rootElement:`(element|string)`},uo=class extends Rr{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return co}static get DefaultType(){return lo}static get NAME(){return io}show(e){if(!this._config.isVisible){z(e);return}this._append();let t=this._getElement();this._config.isAnimated&&dr(t),t.classList.add(oo),this._emulateAnimation(()=>{z(e)})}hide(e){if(!this._config.isVisible){z(e);return}this._getElement().classList.remove(oo),this._emulateAnimation(()=>{this.dispose(),z(e)})}dispose(){this._isAppended&&=(B.off(this._element,so),this._element.remove(),!1)}_getElement(){if(!this._element){let e=document.createElement(`div`);e.className=this._config.className,this._config.isAnimated&&e.classList.add(ao),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=or(e.rootElement),e}_append(){if(this._isAppended)return;let e=this._getElement();this._config.rootElement.append(e),B.on(e,so,()=>{z(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){hr(e,this._getElement(),this._config.isAnimated)}},fo=`focustrap`,po=`.bs.focustrap`,mo=`focusin${po}`,ho=`keydown.tab${po}`,go=`Tab`,_o=`forward`,vo=`backward`,yo={autofocus:!0,trapElement:null},bo={autofocus:`boolean`,trapElement:`element`},xo=class extends Rr{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return yo}static get DefaultType(){return bo}static get NAME(){return fo}activate(){this._isActive||=(this._config.autofocus&&this._config.trapElement.focus(),B.off(document,po),B.on(document,mo,e=>this._handleFocusin(e)),B.on(document,ho,e=>this._handleKeydown(e)),!0)}deactivate(){this._isActive&&(this._isActive=!1,B.off(document,po))}_handleFocusin(e){let{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;let n=V.focusableChildren(t);n.length===0?t.focus():this._lastTabNavDirection===vo?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){e.key===go&&(this._lastTabNavDirection=e.shiftKey?vo:_o)}},So=`.fixed-top, .fixed-bottom, .is-fixed, .sticky-top`,Co=`.sticky-top`,wo=`padding-right`,To=`margin-right`,Eo=class{constructor(){this._element=document.body}getWidth(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){let e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,wo,t=>t+e),this._setElementAttributes(So,wo,t=>t+e),this._setElementAttributes(Co,To,t=>t-e)}reset(){this._resetElementAttributes(this._element,`overflow`),this._resetElementAttributes(this._element,wo),this._resetElementAttributes(So,wo),this._resetElementAttributes(Co,To)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,`overflow`),this._element.style.overflow=`hidden`}_setElementAttributes(e,t,n){let r=this.getWidth();this._applyManipulationCallback(e,e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+r)return;this._saveInitialAttribute(e,t);let i=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${n(Number.parseFloat(i))}px`)})}_saveInitialAttribute(e,t){let n=e.style.getPropertyValue(t);n&&Lr.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){this._applyManipulationCallback(e,e=>{let n=Lr.getDataAttribute(e,t);if(n===null){e.style.removeProperty(t);return}Lr.removeDataAttribute(e,t),e.style.setProperty(t,n)})}_applyManipulationCallback(e,t){if(ar(e)){t(e);return}for(let n of V.find(e,this._element))t(n)}},Do=`modal`,H=`.bs.modal`,Oo=`.data-api`,ko=`Escape`,Ao=`hide${H}`,jo=`hidePrevented${H}`,Mo=`hidden${H}`,No=`show${H}`,Po=`shown${H}`,Fo=`resize${H}`,Io=`click.dismiss${H}`,Lo=`mousedown.dismiss${H}`,Ro=`keydown.dismiss${H}`,zo=`click${H}${Oo}`,Bo=`modal-open`,Vo=`fade`,Ho=`show`,Uo=`modal-static`,Wo=`.modal.show`,Go=`.modal-dialog`,Ko=`.modal-body`,qo=`[data-bs-toggle="modal"]`,Jo={backdrop:!0,focus:!0,keyboard:!0},Yo={backdrop:`(boolean|string)`,focus:`boolean`,keyboard:`boolean`},Xo=class e extends Br{constructor(e,t){super(e,t),this._dialog=V.findOne(Go,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Eo,this._addEventListeners()}static get Default(){return Jo}static get DefaultType(){return Yo}static get NAME(){return Do}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||B.trigger(this._element,No,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Bo),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||B.trigger(this._element,Ao).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Ho),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){B.off(window,H),B.off(this._dialog,H),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new uo({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new xo({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display=`block`,this._element.removeAttribute(`aria-hidden`),this._element.setAttribute(`aria-modal`,!0),this._element.setAttribute(`role`,`dialog`),this._element.scrollTop=0;let t=V.findOne(Ko,this._dialog);t&&(t.scrollTop=0),dr(this._element),this._element.classList.add(Ho),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,B.trigger(this._element,Po,{relatedTarget:e})},this._dialog,this._isAnimated())}_addEventListeners(){B.on(this._element,Ro,e=>{if(e.key===ko){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),B.on(window,Fo,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),B.on(this._element,Lo,e=>{B.one(this._element,Io,t=>{if(!(this._element!==e.target||this._element!==t.target)){if(this._config.backdrop===`static`){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display=`none`,this._element.setAttribute(`aria-hidden`,!0),this._element.removeAttribute(`aria-modal`),this._element.removeAttribute(`role`),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Bo),this._resetAdjustments(),this._scrollBar.reset(),B.trigger(this._element,Mo)})}_isAnimated(){return this._element.classList.contains(Vo)}_triggerBackdropTransition(){if(B.trigger(this._element,jo).defaultPrevented)return;let e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._element.style.overflowY;t===`hidden`||this._element.classList.contains(Uo)||(e||(this._element.style.overflowY=`hidden`),this._element.classList.add(Uo),this._queueCallback(()=>{this._element.classList.remove(Uo),this._queueCallback(()=>{this._element.style.overflowY=t},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){let e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){let e=L()?`paddingLeft`:`paddingRight`;this._element.style[e]=`${t}px`}if(!n&&e){let e=L()?`paddingRight`:`paddingLeft`;this._element.style[e]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft=``,this._element.style.paddingRight=``}static jQueryInterface(t,n){return this.each(function(){let r=e.getOrCreateInstance(this,t);if(typeof t==`string`){if(r[t]===void 0)throw TypeError(`No method named "${t}"`);r[t](n)}})}};B.on(document,zo,qo,function(e){let t=V.getElementFromSelector(this);[`A`,`AREA`].includes(this.tagName)&&e.preventDefault(),B.one(t,No,e=>{e.defaultPrevented||B.one(t,Mo,()=>{sr(this)&&this.focus()})});let n=V.findOne(Wo);n&&Xo.getInstance(n).hide(),Xo.getOrCreateInstance(t).toggle(this)}),Hr(Xo),R(Xo);var Zo=`offcanvas`,Qo=`.bs.offcanvas`,$o=`.data-api`,es=`load${Qo}${$o}`,ts=`Escape`,ns=`show`,rs=`showing`,is=`hiding`,as=`offcanvas-backdrop`,os=`.offcanvas.show`,ss=`show${Qo}`,cs=`shown${Qo}`,ls=`hide${Qo}`,us=`hidePrevented${Qo}`,ds=`hidden${Qo}`,fs=`resize${Qo}`,ps=`click${Qo}${$o}`,ms=`keydown.dismiss${Qo}`,hs=`[data-bs-toggle="offcanvas"]`,gs={backdrop:!0,keyboard:!0,scroll:!1},_s={backdrop:`(boolean|string)`,keyboard:`boolean`,scroll:`boolean`},vs=class e extends Br{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return gs}static get DefaultType(){return _s}static get NAME(){return Zo}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||B.trigger(this._element,ss,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Eo().hide(),this._element.setAttribute(`aria-modal`,!0),this._element.setAttribute(`role`,`dialog`),this._element.classList.add(rs),this._queueCallback(()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(ns),this._element.classList.remove(rs),B.trigger(this._element,cs,{relatedTarget:e})},this._element,!0))}hide(){!this._isShown||B.trigger(this._element,ls).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(is),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(ns,is),this._element.removeAttribute(`aria-modal`),this._element.removeAttribute(`role`),this._config.scroll||new Eo().reset(),B.trigger(this._element,ds)},this._element,!0))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){let e=()=>{if(this._config.backdrop===`static`){B.trigger(this._element,us);return}this.hide()},t=!!this._config.backdrop;return new uo({className:as,isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?e:null})}_initializeFocusTrap(){return new xo({trapElement:this._element})}_addEventListeners(){B.on(this._element,ms,e=>{if(e.key===ts){if(this._config.keyboard){this.hide();return}B.trigger(this._element,us)}})}static jQueryInterface(t){return this.each(function(){let n=e.getOrCreateInstance(this,t);if(typeof t==`string`){if(n[t]===void 0||t.startsWith(`_`)||t===`constructor`)throw TypeError(`No method named "${t}"`);n[t](this)}})}};B.on(document,ps,hs,function(e){let t=V.getElementFromSelector(this);if([`A`,`AREA`].includes(this.tagName)&&e.preventDefault(),cr(this))return;B.one(t,ds,()=>{sr(this)&&this.focus()});let n=V.findOne(os);n&&n!==t&&vs.getInstance(n).hide(),vs.getOrCreateInstance(t).toggle(this)}),B.on(window,es,()=>{for(let e of V.find(os))vs.getOrCreateInstance(e).show()}),B.on(window,fs,()=>{for(let e of V.find(`[aria-modal][class*=show][class*=offcanvas-]`))getComputedStyle(e).position!==`fixed`&&vs.getOrCreateInstance(e).hide()}),Hr(vs),R(vs);var ys={"*":[`class`,`dir`,`id`,`lang`,`role`,/^aria-[\w-]*$/i],a:[`target`,`href`,`title`,`rel`],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:[`src`,`srcset`,`alt`,`title`,`width`,`height`],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},bs=new Set([`background`,`cite`,`href`,`itemtype`,`longdesc`,`poster`,`src`,`xlink:href`]),xs=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Ss=(e,t)=>{let n=e.nodeName.toLowerCase();return t.includes(n)?bs.has(n)?!!xs.test(e.nodeValue):!0:t.filter(e=>e instanceof RegExp).some(e=>e.test(n))};function Cs(e,t,n){if(!e.length)return e;if(n&&typeof n==`function`)return n(e);let r=new window.DOMParser().parseFromString(e,`text/html`),i=[].concat(...r.body.querySelectorAll(`*`));for(let e of i){let n=e.nodeName.toLowerCase();if(!Object.keys(t).includes(n)){e.remove();continue}let r=[].concat(...e.attributes),i=[].concat(t[`*`]||[],t[n]||[]);for(let t of r)Ss(t,i)||e.removeAttribute(t.nodeName)}return r.body.innerHTML}var ws=`TemplateFactory`,Ts={allowList:ys,content:{},extraClass:``,html:!1,sanitize:!0,sanitizeFn:null,template:`<div></div>`},Es={allowList:`object`,content:`object`,extraClass:`(string|function)`,html:`boolean`,sanitize:`boolean`,sanitizeFn:`(null|function)`,template:`string`},Ds={entry:`(string|element|function|null)`,selector:`(string|element)`},Os=class extends Rr{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return Ts}static get DefaultType(){return Es}static get NAME(){return ws}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){let e=document.createElement(`div`);e.innerHTML=this._maybeSanitize(this._config.template);for(let[t,n]of Object.entries(this._config.content))this._setContent(e,n,t);let t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(` `)),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(let[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},Ds)}_setContent(e,t,n){let r=V.findOne(n,e);if(r){if(t=this._resolvePossibleFunction(t),!t){r.remove();return}if(ar(t)){this._putElementInTemplate(or(t),r);return}if(this._config.html){r.innerHTML=this._maybeSanitize(t);return}r.textContent=t}}_maybeSanitize(e){return this._config.sanitize?Cs(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return z(e,[void 0,this])}_putElementInTemplate(e,t){if(this._config.html){t.innerHTML=``,t.append(e);return}t.textContent=e.textContent}},ks=`tooltip`,As=new Set([`sanitize`,`allowList`,`sanitizeFn`]),js=`fade`,Ms=`modal`,Ns=`show`,Ps=`.tooltip-inner`,Fs=`.${Ms}`,Is=`hide.bs.modal`,Ls=`hover`,Rs=`focus`,zs=`click`,Bs=`manual`,Vs=`hide`,Hs=`hidden`,Us=`show`,Ws=`shown`,Gs=`inserted`,Ks=`click`,qs=`focusin`,Js=`focusout`,Ys=`mouseenter`,Xs=`mouseleave`,Zs={AUTO:`auto`,TOP:`top`,RIGHT:L()?`left`:`right`,BOTTOM:`bottom`,LEFT:L()?`right`:`left`},Qs={allowList:ys,animation:!0,boundary:`clippingParents`,container:!1,customClass:``,delay:0,fallbackPlacements:[`top`,`right`,`bottom`,`left`],html:!1,offset:[0,6],placement:`top`,popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:`<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>`,title:``,trigger:`hover focus`},$s={allowList:`object`,animation:`boolean`,boundary:`(string|element)`,container:`(string|element|boolean)`,customClass:`(string|function)`,delay:`(number|object)`,fallbackPlacements:`array`,html:`boolean`,offset:`(array|string|function)`,placement:`(string|function)`,popperConfig:`(null|object|function)`,sanitize:`boolean`,sanitizeFn:`(null|function)`,selector:`(string|boolean)`,template:`string`,title:`(string|element|function)`,trigger:`string`},ec=class e extends Br{constructor(e,t){if(Jn===void 0)throw TypeError(`Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)`);super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Qs}static get DefaultType(){return $s}static get NAME(){return ks}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),B.off(this._element.closest(Fs),Is,this._hideModalHandler),this._element.getAttribute(`data-bs-original-title`)&&this._element.setAttribute(`title`,this._element.getAttribute(`data-bs-original-title`)),this._disposePopper(),super.dispose()}show(){if(this._element.style.display===`none`)throw Error(`Please use show on visible elements`);if(!(this._isWithContent()&&this._isEnabled))return;let e=B.trigger(this._element,this.constructor.eventName(Us)),t=(lr(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!t)return;this._disposePopper();let n=this._getTipElement();this._element.setAttribute(`aria-describedby`,n.getAttribute(`id`));let{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(n),B.trigger(this._element,this.constructor.eventName(Gs))),this._popper=this._createPopper(n),n.classList.add(Ns),`ontouchstart`in document.documentElement)for(let e of[].concat(...document.body.children))B.on(e,`mouseover`,ur);this._queueCallback(()=>{B.trigger(this._element,this.constructor.eventName(Ws)),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(!(!this._isShown()||B.trigger(this._element,this.constructor.eventName(Vs)).defaultPrevented)){if(this._getTipElement().classList.remove(Ns),`ontouchstart`in document.documentElement)for(let e of[].concat(...document.body.children))B.off(e,`mouseover`,ur);this._activeTrigger[zs]=!1,this._activeTrigger[Rs]=!1,this._activeTrigger[Ls]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute(`aria-describedby`),B.trigger(this._element,this.constructor.eventName(Hs)))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||=this._createTipElement(this._newContent||this._getContentForTemplate()),this.tip}_createTipElement(e){let t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(js,Ns),t.classList.add(`bs-${this.constructor.NAME}-auto`);let n=nr(this.constructor.NAME).toString();return t.setAttribute(`id`,n),this._isAnimated()&&t.classList.add(js),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new Os({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Ps]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute(`data-bs-original-title`)}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(js)}_isShown(){return this.tip&&this.tip.classList.contains(Ns)}_createPopper(e){let t=Zs[z(this._config.placement,[this,e,this._element]).toUpperCase()];return qn(this._element,e,this._getPopperConfig(t))}_getOffset(){let{offset:e}=this._config;return typeof e==`string`?e.split(`,`).map(e=>Number.parseInt(e,10)):typeof e==`function`?t=>e(t,this._element):e}_resolvePossibleFunction(e){return z(e,[this._element,this._element])}_getPopperConfig(e){let t={placement:e,modifiers:[{name:`flip`,options:{fallbackPlacements:this._config.fallbackPlacements}},{name:`offset`,options:{offset:this._getOffset()}},{name:`preventOverflow`,options:{boundary:this._config.boundary}},{name:`arrow`,options:{element:`.${this.constructor.NAME}-arrow`}},{name:`preSetPlacement`,enabled:!0,phase:`beforeMain`,fn:e=>{this._getTipElement().setAttribute(`data-popper-placement`,e.state.placement)}}]};return{...t,...z(this._config.popperConfig,[void 0,t])}}_setListeners(){let e=this._config.trigger.split(` `);for(let t of e)if(t===`click`)B.on(this._element,this.constructor.eventName(Ks),this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger[zs]=!(t._isShown()&&t._activeTrigger[zs]),t.toggle()});else if(t!==Bs){let e=t===Ls?this.constructor.eventName(Ys):this.constructor.eventName(qs),n=t===Ls?this.constructor.eventName(Xs):this.constructor.eventName(Js);B.on(this._element,e,this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger[e.type===`focusin`?Rs:Ls]=!0,t._enter()}),B.on(this._element,n,this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger[e.type===`focusout`?Rs:Ls]=t._element.contains(e.relatedTarget),t._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},B.on(this._element.closest(Fs),Is,this._hideModalHandler)}_fixTitle(){let e=this._element.getAttribute(`title`);e&&(!this._element.getAttribute(`aria-label`)&&!this._element.textContent.trim()&&this._element.setAttribute(`aria-label`,e),this._element.setAttribute(`data-bs-original-title`,e),this._element.removeAttribute(`title`))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){let t=Lr.getDataAttributes(this._element);for(let e of Object.keys(t))As.has(e)&&delete t[e];return e={...t,...typeof e==`object`&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:or(e.container),typeof e.delay==`number`&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title==`number`&&(e.title=e.title.toString()),typeof e.content==`number`&&(e.content=e.content.toString()),e}_getDelegateConfig(){let e={};for(let[t,n]of Object.entries(this._config))this.constructor.Default[t]!==n&&(e[t]=n);return e.selector=!1,e.trigger=`manual`,e}_disposePopper(){this._popper&&=(this._popper.destroy(),null),this.tip&&=(this.tip.remove(),null)}static jQueryInterface(t){return this.each(function(){let n=e.getOrCreateInstance(this,t);if(typeof t==`string`){if(n[t]===void 0)throw TypeError(`No method named "${t}"`);n[t]()}})}};R(ec);var tc=`popover`,nc=`.popover-header`,rc=`.popover-body`,ic={...ec.Default,content:``,offset:[0,8],placement:`right`,template:`<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>`,trigger:`click`},ac={...ec.DefaultType,content:`(null|string|element|function)`};R(class e extends ec{static get Default(){return ic}static get DefaultType(){return ac}static get NAME(){return tc}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[nc]:this._getTitle(),[rc]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){let n=e.getOrCreateInstance(this,t);if(typeof t==`string`){if(n[t]===void 0)throw TypeError(`No method named "${t}"`);n[t]()}})}});var oc=`scrollspy`,sc=`.bs.scrollspy`,cc=`.data-api`,lc=`activate${sc}`,uc=`click${sc}`,dc=`load${sc}${cc}`,fc=`dropdown-item`,pc=`active`,mc=`[data-bs-spy="scroll"]`,hc=`[href]`,gc=`.nav, .list-group`,_c=`.nav-link`,vc=`${_c}, .nav-item > ${_c}, .list-group-item`,yc=`.dropdown`,bc=`.dropdown-toggle`,xc={offset:null,rootMargin:`0px 0px -25%`,smoothScroll:!1,target:null,threshold:[.1,.5,1]},Sc={offset:`(number|null)`,rootMargin:`string`,smoothScroll:`boolean`,target:`element`,threshold:`array`},Cc=class e extends Br{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY===`visible`?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return xc}static get DefaultType(){return Sc}static get NAME(){return oc}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(let e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=or(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold==`string`&&(e.threshold=e.threshold.split(`,`).map(e=>Number.parseFloat(e))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(B.off(this._config.target,uc),B.on(this._config.target,uc,hc,e=>{let t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();let n=this._rootElement||window,r=t.offsetTop-this._element.offsetTop;if(n.scrollTo){n.scrollTo({top:r,behavior:`smooth`});return}n.scrollTop=r}}))}_getNewObserver(){let e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),e)}_observerCallback(e){let t=e=>this._targetLinks.get(`#${e.target.id}`),n=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(t(e))},r=(this._rootElement||document.documentElement).scrollTop,i=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(let a of e){if(!a.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(a));continue}let e=a.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&e){if(n(a),!r)return;continue}!i&&!e&&n(a)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;let e=V.find(hc,this._config.target);for(let t of e){if(!t.hash||cr(t))continue;let e=V.findOne(decodeURI(t.hash),this._element);sr(e)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,e))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(pc),this._activateParents(e),B.trigger(this._element,lc,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(fc)){V.findOne(bc,e.closest(yc)).classList.add(pc);return}for(let t of V.parents(e,gc))for(let e of V.prev(t,vc))e.classList.add(pc)}_clearActiveClass(e){e.classList.remove(pc);let t=V.find(`${hc}.${pc}`,e);for(let e of t)e.classList.remove(pc)}static jQueryInterface(t){return this.each(function(){let n=e.getOrCreateInstance(this,t);if(typeof t==`string`){if(n[t]===void 0||t.startsWith(`_`)||t===`constructor`)throw TypeError(`No method named "${t}"`);n[t]()}})}};B.on(window,dc,()=>{for(let e of V.find(mc))Cc.getOrCreateInstance(e)}),R(Cc);var wc=`tab`,Tc=`.bs.tab`,Ec=`hide${Tc}`,Dc=`hidden${Tc}`,Oc=`show${Tc}`,kc=`shown${Tc}`,Ac=`click${Tc}`,jc=`keydown${Tc}`,Mc=`load${Tc}`,Nc=`ArrowLeft`,Pc=`ArrowRight`,Fc=`ArrowUp`,Ic=`ArrowDown`,Lc=`Home`,Rc=`End`,zc=`active`,Bc=`fade`,Vc=`show`,Hc=`dropdown`,Uc=`.dropdown-toggle`,Wc=`.dropdown-menu`,Gc=`:not(${Uc})`,Kc=`.list-group, .nav, [role="tablist"]`,qc=`.nav-item, .list-group-item`,Jc=`.nav-link${Gc}, .list-group-item${Gc}, [role="tab"]${Gc}`,Yc=`[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]`,Xc=`${Jc}, ${Yc}`,Zc=`.${zc}[data-bs-toggle="tab"], .${zc}[data-bs-toggle="pill"], .${zc}[data-bs-toggle="list"]`,Qc=class e extends Br{constructor(e){super(e),this._parent=this._element.closest(Kc),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),B.on(this._element,jc,e=>this._keydown(e)))}static get NAME(){return wc}show(){let e=this._element;if(this._elemIsActive(e))return;let t=this._getActiveElem(),n=t?B.trigger(t,Ec,{relatedTarget:e}):null;B.trigger(e,Oc,{relatedTarget:t}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){e&&(e.classList.add(zc),this._activate(V.getElementFromSelector(e)),this._queueCallback(()=>{if(e.getAttribute(`role`)!==`tab`){e.classList.add(Vc);return}e.removeAttribute(`tabindex`),e.setAttribute(`aria-selected`,!0),this._toggleDropDown(e,!0),B.trigger(e,kc,{relatedTarget:t})},e,e.classList.contains(Bc)))}_deactivate(e,t){e&&(e.classList.remove(zc),e.blur(),this._deactivate(V.getElementFromSelector(e)),this._queueCallback(()=>{if(e.getAttribute(`role`)!==`tab`){e.classList.remove(Vc);return}e.setAttribute(`aria-selected`,!1),e.setAttribute(`tabindex`,`-1`),this._toggleDropDown(e,!1),B.trigger(e,Dc,{relatedTarget:t})},e,e.classList.contains(Bc)))}_keydown(t){if(![Nc,Pc,Fc,Ic,Lc,Rc].includes(t.key))return;t.stopPropagation(),t.preventDefault();let n=this._getChildren().filter(e=>!cr(e)),r;if([Lc,Rc].includes(t.key))r=n[t.key===Lc?0:n.length-1];else{let e=[Pc,Ic].includes(t.key);r=gr(n,t.target,e,!0)}r&&(r.focus({preventScroll:!0}),e.getOrCreateInstance(r).show())}_getChildren(){return V.find(Xc,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,`role`,`tablist`);for(let e of t)this._setInitialAttributesOnChild(e)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);let t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute(`aria-selected`,t),n!==e&&this._setAttributeIfNotExists(n,`role`,`presentation`),t||e.setAttribute(`tabindex`,`-1`),this._setAttributeIfNotExists(e,`role`,`tab`),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){let t=V.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,`role`,`tabpanel`),e.id&&this._setAttributeIfNotExists(t,`aria-labelledby`,`${e.id}`))}_toggleDropDown(e,t){let n=this._getOuterElement(e);if(!n.classList.contains(Hc))return;let r=(e,r)=>{let i=V.findOne(e,n);i&&i.classList.toggle(r,t)};r(Uc,zc),r(Wc,Vc),n.setAttribute(`aria-expanded`,t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(zc)}_getInnerElement(e){return e.matches(Xc)?e:V.findOne(Xc,e)}_getOuterElement(e){return e.closest(qc)||e}static jQueryInterface(t){return this.each(function(){let n=e.getOrCreateInstance(this);if(typeof t==`string`){if(n[t]===void 0||t.startsWith(`_`)||t===`constructor`)throw TypeError(`No method named "${t}"`);n[t]()}})}};B.on(document,Ac,Yc,function(e){[`A`,`AREA`].includes(this.tagName)&&e.preventDefault(),!cr(this)&&Qc.getOrCreateInstance(this).show()}),B.on(window,Mc,()=>{for(let e of V.find(Zc))Qc.getOrCreateInstance(e)}),R(Qc);var $c=`toast`,el=`.bs.toast`,tl=`mouseover${el}`,nl=`mouseout${el}`,rl=`focusin${el}`,il=`focusout${el}`,al=`hide${el}`,ol=`hidden${el}`,sl=`show${el}`,cl=`shown${el}`,ll=`fade`,ul=`hide`,dl=`show`,fl=`showing`,pl={animation:`boolean`,autohide:`boolean`,delay:`number`},ml={animation:!0,autohide:!0,delay:5e3},hl=class e extends Br{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return ml}static get DefaultType(){return pl}static get NAME(){return $c}show(){B.trigger(this._element,sl).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add(ll),this._element.classList.remove(ul),dr(this._element),this._element.classList.add(dl,fl),this._queueCallback(()=>{this._element.classList.remove(fl),B.trigger(this._element,cl),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){!this.isShown()||B.trigger(this._element,al).defaultPrevented||(this._element.classList.add(fl),this._queueCallback(()=>{this._element.classList.add(ul),this._element.classList.remove(fl,dl),B.trigger(this._element,ol)},this._element,this._config.animation))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(dl),super.dispose()}isShown(){return this._element.classList.contains(dl)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case`mouseover`:case`mouseout`:this._hasMouseInteraction=t;break;case`focusin`:case`focusout`:this._hasKeyboardInteraction=t;break}if(t){this._clearTimeout();return}let n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){B.on(this._element,tl,e=>this._onInteraction(e,!0)),B.on(this._element,nl,e=>this._onInteraction(e,!1)),B.on(this._element,rl,e=>this._onInteraction(e,!0)),B.on(this._element,il,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){let n=e.getOrCreateInstance(this,t);if(typeof t==`string`){if(n[t]===void 0)throw TypeError(`No method named "${t}"`);n[t](this)}})}};Hr(hl),R(hl);function gl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function _l(e){if(Array.isArray(e))return e}function vl(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function yl(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bl(e,t){return _l(e)||vl(e,t)||xl(e,t)||yl()}function xl(e,t){if(e){if(typeof e==`string`)return gl(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?gl(e,t):void 0}}var Sl=Object.entries,Cl=Object.setPrototypeOf,wl=Object.isFrozen,Tl=Object.getPrototypeOf,El=Object.getOwnPropertyDescriptor,U=Object.freeze,Dl=Object.seal,Ol=Object.create,kl=typeof Reflect<`u`&&Reflect,Al=kl.apply,jl=kl.construct;U||=function(e){return e},Dl||=function(e){return e},Al||=function(e,t){var n=[...arguments].slice(2);return e.apply(t,n)},jl||=function(e){return new e(...[...arguments].slice(1))};var Ml=q(Array.prototype.forEach),Nl=q(Array.prototype.lastIndexOf),Pl=q(Array.prototype.pop),Fl=q(Array.prototype.push),Il=q(Array.prototype.splice),W=Array.isArray,Ll=q(String.prototype.toLowerCase),Rl=q(String.prototype.toString),zl=q(String.prototype.match),Bl=q(String.prototype.replace),Vl=q(String.prototype.indexOf),Hl=q(String.prototype.trim),Ul=q(Number.prototype.toString),Wl=q(Boolean.prototype.toString),Gl=typeof BigInt>`u`?null:q(BigInt.prototype.toString),Kl=typeof Symbol>`u`?null:q(Symbol.prototype.toString),G=q(Object.prototype.hasOwnProperty),ql=q(Object.prototype.toString),K=q(RegExp.prototype.test),Jl=Yl(TypeError);function q(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);var n=[...arguments].slice(1);return Al(e,t,n)}}function Yl(e){return function(){return jl(e,[...arguments])}}function J(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ll;if(Cl&&Cl(e,null),!W(t))return e;let r=t.length;for(;r--;){let i=t[r];if(typeof i==`string`){let e=n(i);e!==i&&(wl(t)||(t[r]=e),i=e)}e[i]=!0}return e}function Xl(e){for(let t=0;t<e.length;t++)G(e,t)||(e[t]=null);return e}function Y(e){let t=Ol(null);for(let r of Sl(e)){var n=bl(r,2);let i=n[0],a=n[1];G(e,i)&&(W(a)?t[i]=Xl(a):a&&typeof a==`object`&&a.constructor===Object?t[i]=Y(a):t[i]=a)}return t}function Zl(e){switch(typeof e){case`string`:return e;case`number`:return Ul(e);case`boolean`:return Wl(e);case`bigint`:return Gl?Gl(e):`0`;case`symbol`:return Kl?Kl(e):`Symbol()`;case`undefined`:return ql(e);case`function`:case`object`:{if(e===null)return ql(e);let t=e,n=Ql(t,`toString`);if(typeof n==`function`){let e=n(t);return typeof e==`string`?e:ql(e)}return ql(e)}default:return ql(e)}}function Ql(e,t){for(;e!==null;){let n=El(e,t);if(n){if(n.get)return q(n.get);if(typeof n.value==`function`)return q(n.value)}e=Tl(e)}function n(){return null}return n}function $l(e){try{return K(e,``),!0}catch{return!1}}var eu=U(`a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr`.split(`.`)),tu=U(`svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern`.split(`.`)),nu=U([`feBlend`,`feColorMatrix`,`feComponentTransfer`,`feComposite`,`feConvolveMatrix`,`feDiffuseLighting`,`feDisplacementMap`,`feDistantLight`,`feDropShadow`,`feFlood`,`feFuncA`,`feFuncB`,`feFuncG`,`feFuncR`,`feGaussianBlur`,`feImage`,`feMerge`,`feMergeNode`,`feMorphology`,`feOffset`,`fePointLight`,`feSpecularLighting`,`feSpotLight`,`feTile`,`feTurbulence`]),ru=U([`animate`,`color-profile`,`cursor`,`discard`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`foreignobject`,`hatch`,`hatchpath`,`mesh`,`meshgradient`,`meshpatch`,`meshrow`,`missing-glyph`,`script`,`set`,`solidcolor`,`unknown`,`use`]),iu=U(`math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts`.split(`.`)),au=U([`maction`,`maligngroup`,`malignmark`,`mlongdiv`,`mscarries`,`mscarry`,`msgroup`,`mstack`,`msline`,`msrow`,`semantics`,`annotation`,`annotation-xml`,`mprescripts`,`none`]),ou=U([`#text`]),su=U(`accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns`.split(`.`)),cu=U(`accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan`.split(`.`)),lu=U(`accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns`.split(`.`)),uu=U([`xlink:href`,`xml:id`,`xlink:title`,`xml:space`,`xmlns:xlink`]),du=Dl(/{{[\w\W]*|^[\w\W]*}}/g),fu=Dl(/<%[\w\W]*|^[\w\W]*%>/g),pu=Dl(/\${[\w\W]*/g),mu=Dl(/^data-[\-\w.\u00B7-\uFFFF]+$/),hu=Dl(/^aria-[\-\w]+$/),gu=Dl(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),_u=Dl(/^(?:\w+script|data):/i),vu=Dl(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),yu=Dl(/^html$/i),bu=Dl(/^[a-z][.\w]*(-[.\w]+)+$/i),xu={element:1,text:3,progressingInstruction:7,comment:8,document:9},Su=function(){return typeof window>`u`?null:window},Cu=function(e,t){if(typeof e!=`object`||typeof e.createPolicy!=`function`)return null;let n=null,r=`data-tt-policy-suffix`;t&&t.hasAttribute(r)&&(n=t.getAttribute(r));let i=`dompurify`+(n?`#`+n:``);try{return e.createPolicy(i,{createHTML(e){return e},createScriptURL(e){return e}})}catch{return console.warn(`TrustedTypes policy `+i+` could not be created.`),null}},wu=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Tu(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Su(),t=e=>Tu(e);if(t.version=`3.4.3`,t.removed=[],!e||!e.document||e.document.nodeType!==xu.document||!e.Element)return t.isSupported=!1,t;let n=e.document,r=n,i=r.currentScript,a=e.DocumentFragment,o=e.HTMLTemplateElement,s=e.Node,c=e.Element,l=e.NodeFilter,u=e.NamedNodeMap,d=u===void 0?e.NamedNodeMap||e.MozNamedAttrMap:u,f=e.HTMLFormElement,p=e.DOMParser,m=e.trustedTypes,h=c.prototype,g=Ql(h,`cloneNode`),_=Ql(h,`remove`),ee=Ql(h,`nextSibling`),v=Ql(h,`childNodes`),y=Ql(h,`parentNode`);if(typeof o==`function`){let e=n.createElement(`template`);e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let b,x=``,S=n,C=S.implementation,w=S.createNodeIterator,T=S.createDocumentFragment,te=S.getElementsByTagName,ne=r.importNode,E=wu();t.isSupported=typeof Sl==`function`&&typeof y==`function`&&C&&C.createHTMLDocument!==void 0;let re=du,D=fu,O=pu,ie=mu,ae=hu,oe=_u,se=vu,ce=bu,le=gu,k=null,ue=J({},[...eu,...tu,...nu,...iu,...ou]),A=null,de=J({},[...su,...cu,...lu,...uu]),j=Object.seal(Ol(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),fe=null,pe=null,me=Object.seal(Ol(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),he=!0,ge=!0,_e=!1,ve=!0,ye=!1,be=!0,xe=!1,Se=!1,Ce=!1,we=!1,Te=!1,Ee=!1,De=!0,Oe=!1,ke=`user-content-`,Ae=!0,je=!1,Me={},Ne=null,Pe=J({},[`annotation-xml`,`audio`,`colgroup`,`desc`,`foreignobject`,`head`,`iframe`,`math`,`mi`,`mn`,`mo`,`ms`,`mtext`,`noembed`,`noframes`,`noscript`,`plaintext`,`script`,`style`,`svg`,`template`,`thead`,`title`,`video`,`xmp`]),Fe=null,Ie=J({},[`audio`,`video`,`img`,`source`,`image`,`track`]),Le=null,Re=J({},[`alt`,`class`,`for`,`id`,`label`,`name`,`pattern`,`placeholder`,`role`,`summary`,`title`,`value`,`style`,`xmlns`]),ze=`http://www.w3.org/1998/Math/MathML`,Be=`http://www.w3.org/2000/svg`,Ve=`http://www.w3.org/1999/xhtml`,He=Ve,Ue=!1,We=null,Ge=J({},[ze,Be,Ve],Rl),Ke=J({},[`mi`,`mo`,`mn`,`ms`,`mtext`]),M=J({},[`annotation-xml`]),qe=J({},[`title`,`style`,`font`,`a`,`script`]),N=null,Je=[`application/xhtml+xml`,`text/html`],P=null,Ye=null,Xe=n.createElement(`form`),Ze=function(e){return e instanceof RegExp||e instanceof Function},Qe=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Ye&&Ye===e)return;(!e||typeof e!=`object`)&&(e={}),e=Y(e),N=Je.indexOf(e.PARSER_MEDIA_TYPE)===-1?`text/html`:e.PARSER_MEDIA_TYPE,P=N===`application/xhtml+xml`?Rl:Ll,k=G(e,`ALLOWED_TAGS`)&&W(e.ALLOWED_TAGS)?J({},e.ALLOWED_TAGS,P):ue,A=G(e,`ALLOWED_ATTR`)&&W(e.ALLOWED_ATTR)?J({},e.ALLOWED_ATTR,P):de,We=G(e,`ALLOWED_NAMESPACES`)&&W(e.ALLOWED_NAMESPACES)?J({},e.ALLOWED_NAMESPACES,Rl):Ge,Le=G(e,`ADD_URI_SAFE_ATTR`)&&W(e.ADD_URI_SAFE_ATTR)?J(Y(Re),e.ADD_URI_SAFE_ATTR,P):Re,Fe=G(e,`ADD_DATA_URI_TAGS`)&&W(e.ADD_DATA_URI_TAGS)?J(Y(Ie),e.ADD_DATA_URI_TAGS,P):Ie,Ne=G(e,`FORBID_CONTENTS`)&&W(e.FORBID_CONTENTS)?J({},e.FORBID_CONTENTS,P):Pe,fe=G(e,`FORBID_TAGS`)&&W(e.FORBID_TAGS)?J({},e.FORBID_TAGS,P):Y({}),pe=G(e,`FORBID_ATTR`)&&W(e.FORBID_ATTR)?J({},e.FORBID_ATTR,P):Y({}),Me=G(e,`USE_PROFILES`)?e.USE_PROFILES&&typeof e.USE_PROFILES==`object`?Y(e.USE_PROFILES):e.USE_PROFILES:!1,he=e.ALLOW_ARIA_ATTR!==!1,ge=e.ALLOW_DATA_ATTR!==!1,_e=e.ALLOW_UNKNOWN_PROTOCOLS||!1,ve=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ye=e.SAFE_FOR_TEMPLATES||!1,be=e.SAFE_FOR_XML!==!1,xe=e.WHOLE_DOCUMENT||!1,we=e.RETURN_DOM||!1,Te=e.RETURN_DOM_FRAGMENT||!1,Ee=e.RETURN_TRUSTED_TYPE||!1,Ce=e.FORCE_BODY||!1,De=e.SANITIZE_DOM!==!1,Oe=e.SANITIZE_NAMED_PROPS||!1,Ae=e.KEEP_CONTENT!==!1,je=e.IN_PLACE||!1,le=$l(e.ALLOWED_URI_REGEXP)?e.ALLOWED_URI_REGEXP:gu,He=typeof e.NAMESPACE==`string`?e.NAMESPACE:Ve,Ke=G(e,`MATHML_TEXT_INTEGRATION_POINTS`)&&e.MATHML_TEXT_INTEGRATION_POINTS&&typeof e.MATHML_TEXT_INTEGRATION_POINTS==`object`?Y(e.MATHML_TEXT_INTEGRATION_POINTS):J({},[`mi`,`mo`,`mn`,`ms`,`mtext`]),M=G(e,`HTML_INTEGRATION_POINTS`)&&e.HTML_INTEGRATION_POINTS&&typeof e.HTML_INTEGRATION_POINTS==`object`?Y(e.HTML_INTEGRATION_POINTS):J({},[`annotation-xml`]);let t=G(e,`CUSTOM_ELEMENT_HANDLING`)&&e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING==`object`?Y(e.CUSTOM_ELEMENT_HANDLING):Ol(null);if(j=Ol(null),G(t,`tagNameCheck`)&&Ze(t.tagNameCheck)&&(j.tagNameCheck=t.tagNameCheck),G(t,`attributeNameCheck`)&&Ze(t.attributeNameCheck)&&(j.attributeNameCheck=t.attributeNameCheck),G(t,`allowCustomizedBuiltInElements`)&&typeof t.allowCustomizedBuiltInElements==`boolean`&&(j.allowCustomizedBuiltInElements=t.allowCustomizedBuiltInElements),ye&&(ge=!1),Te&&(we=!0),Me&&(k=J({},ou),A=Ol(null),Me.html===!0&&(J(k,eu),J(A,su)),Me.svg===!0&&(J(k,tu),J(A,cu),J(A,uu)),Me.svgFilters===!0&&(J(k,nu),J(A,cu),J(A,uu)),Me.mathMl===!0&&(J(k,iu),J(A,lu),J(A,uu))),me.tagCheck=null,me.attributeCheck=null,G(e,`ADD_TAGS`)&&(typeof e.ADD_TAGS==`function`?me.tagCheck=e.ADD_TAGS:W(e.ADD_TAGS)&&(k===ue&&(k=Y(k)),J(k,e.ADD_TAGS,P))),G(e,`ADD_ATTR`)&&(typeof e.ADD_ATTR==`function`?me.attributeCheck=e.ADD_ATTR:W(e.ADD_ATTR)&&(A===de&&(A=Y(A)),J(A,e.ADD_ATTR,P))),G(e,`ADD_URI_SAFE_ATTR`)&&W(e.ADD_URI_SAFE_ATTR)&&J(Le,e.ADD_URI_SAFE_ATTR,P),G(e,`FORBID_CONTENTS`)&&W(e.FORBID_CONTENTS)&&(Ne===Pe&&(Ne=Y(Ne)),J(Ne,e.FORBID_CONTENTS,P)),G(e,`ADD_FORBID_CONTENTS`)&&W(e.ADD_FORBID_CONTENTS)&&(Ne===Pe&&(Ne=Y(Ne)),J(Ne,e.ADD_FORBID_CONTENTS,P)),Ae&&(k[`#text`]=!0),xe&&J(k,[`html`,`head`,`body`]),k.table&&(J(k,[`tbody`]),delete fe.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!=`function`)throw Jl(`TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.`);if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!=`function`)throw Jl(`TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.`);b=e.TRUSTED_TYPES_POLICY,x=b.createHTML(``)}else b===void 0&&(b=Cu(m,i)),b!==null&&typeof x==`string`&&(x=b.createHTML(``));U&&U(e),Ye=e},$e=J({},[...tu,...nu,...ru]),et=J({},[...iu,...au]),tt=function(e){let t=y(e);(!t||!t.tagName)&&(t={namespaceURI:He,tagName:`template`});let n=Ll(e.tagName),r=Ll(t.tagName);return We[e.namespaceURI]?e.namespaceURI===Be?t.namespaceURI===Ve?n===`svg`:t.namespaceURI===ze?n===`svg`&&(r===`annotation-xml`||Ke[r]):!!$e[n]:e.namespaceURI===ze?t.namespaceURI===Ve?n===`math`:t.namespaceURI===Be?n===`math`&&M[r]:!!et[n]:e.namespaceURI===Ve?t.namespaceURI===Be&&!M[r]||t.namespaceURI===ze&&!Ke[r]?!1:!et[n]&&(qe[n]||!$e[n]):!!(N===`application/xhtml+xml`&&We[e.namespaceURI]):!1},nt=function(e){Fl(t.removed,{element:e});try{y(e).removeChild(e)}catch{_(e)}},rt=function(e,n){try{Fl(t.removed,{attribute:n.getAttributeNode(e),from:n})}catch{Fl(t.removed,{attribute:null,from:n})}if(n.removeAttribute(e),e===`is`)if(we||Te)try{nt(n)}catch{}else try{n.setAttribute(e,``)}catch{}},it=function(e){let t=null,r=null;if(Ce)e=`<remove></remove>`+e;else{let t=zl(e,/^[\r\n\t ]+/);r=t&&t[0]}N===`application/xhtml+xml`&&He===Ve&&(e=`<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>`+e+`</body></html>`);let i=b?b.createHTML(e):e;if(He===Ve)try{t=new p().parseFromString(i,N)}catch{}if(!t||!t.documentElement){t=C.createDocument(He,`template`,null);try{t.documentElement.innerHTML=Ue?x:i}catch{}}let a=t.body||t.documentElement;return e&&r&&a.insertBefore(n.createTextNode(r),a.childNodes[0]||null),He===Ve?te.call(t,xe?`html`:`body`)[0]:xe?t.documentElement:a},at=function(e){return w.call(e.ownerDocument||e,e,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)},ot=function(e){return e instanceof f&&(typeof e.nodeName!=`string`||typeof e.textContent!=`string`||typeof e.removeChild!=`function`||!(e.attributes instanceof d)||typeof e.removeAttribute!=`function`||typeof e.setAttribute!=`function`||typeof e.namespaceURI!=`string`||typeof e.insertBefore!=`function`||typeof e.hasChildNodes!=`function`)},st=function(e){return typeof s==`function`&&e instanceof s};function ct(e,n,r){Ml(e,e=>{e.call(t,n,r,Ye)})}let lt=function(e){let n=null;if(ct(E.beforeSanitizeElements,e,null),ot(e))return nt(e),!0;let r=P(e.nodeName);if(ct(E.uponSanitizeElement,e,{tagName:r,allowedTags:k}),be&&e.hasChildNodes()&&!st(e.firstElementChild)&&K(/<[/\w!]/g,e.innerHTML)&&K(/<[/\w!]/g,e.textContent)||be&&e.namespaceURI===Ve&&r===`style`&&st(e.firstElementChild)||e.nodeType===xu.progressingInstruction||be&&e.nodeType===xu.comment&&K(/<[/\w]/g,e.data))return nt(e),!0;if(fe[r]||!(me.tagCheck instanceof Function&&me.tagCheck(r))&&!k[r]){if(!fe[r]&&ft(r)&&(j.tagNameCheck instanceof RegExp&&K(j.tagNameCheck,r)||j.tagNameCheck instanceof Function&&j.tagNameCheck(r)))return!1;if(Ae&&!Ne[r]){let t=y(e)||e.parentNode,n=v(e)||e.childNodes;if(n&&t){let r=n.length;for(let i=r-1;i>=0;--i){let r=g(n[i],!0);t.insertBefore(r,ee(e))}}}return nt(e),!0}return e instanceof c&&!tt(e)||(r===`noscript`||r===`noembed`||r===`noframes`)&&K(/<\/no(script|embed|frames)/i,e.innerHTML)?(nt(e),!0):(ye&&e.nodeType===xu.text&&(n=e.textContent,Ml([re,D,O],e=>{n=Bl(n,e,` `)}),e.textContent!==n&&(Fl(t.removed,{element:e.cloneNode()}),e.textContent=n)),ct(E.afterSanitizeElements,e,null),!1)},ut=function(e,t,r){if(pe[t]||De&&(t===`id`||t===`name`)&&(r in n||r in Xe))return!1;let i=A[t]||me.attributeCheck instanceof Function&&me.attributeCheck(t,e);if(!(ge&&!pe[t]&&K(ie,t))&&!(he&&K(ae,t))){if(!i||pe[t]){if(!(ft(e)&&(j.tagNameCheck instanceof RegExp&&K(j.tagNameCheck,e)||j.tagNameCheck instanceof Function&&j.tagNameCheck(e))&&(j.attributeNameCheck instanceof RegExp&&K(j.attributeNameCheck,t)||j.attributeNameCheck instanceof Function&&j.attributeNameCheck(t,e))||t===`is`&&j.allowCustomizedBuiltInElements&&(j.tagNameCheck instanceof RegExp&&K(j.tagNameCheck,r)||j.tagNameCheck instanceof Function&&j.tagNameCheck(r))))return!1}else if(!Le[t]&&!K(le,Bl(r,se,``))&&!((t===`src`||t===`xlink:href`||t===`href`)&&e!==`script`&&Vl(r,`data:`)===0&&Fe[e])&&!(_e&&!K(oe,Bl(r,se,``)))&&r)return!1}return!0},dt=J({},[`annotation-xml`,`color-profile`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`missing-glyph`]),ft=function(e){return!dt[Ll(e)]&&K(ce,e)},F=function(e){ct(E.beforeSanitizeAttributes,e,null);let n=e.attributes;if(!n||ot(e))return;let r={attrName:``,attrValue:``,keepAttr:!0,allowedAttributes:A,forceKeepAttr:void 0},i=n.length;for(;i--;){let a=n[i],o=a.name,s=a.namespaceURI,c=a.value,l=P(o),u=c,d=o===`value`?u:Hl(u);if(r.attrName=l,r.attrValue=d,r.keepAttr=!0,r.forceKeepAttr=void 0,ct(E.uponSanitizeAttribute,e,r),d=r.attrValue,Oe&&(l===`id`||l===`name`)&&Vl(d,ke)!==0&&(rt(o,e),d=ke+d),be&&K(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,d)){rt(o,e);continue}if(l===`attributename`&&zl(d,`href`)){rt(o,e);continue}if(r.forceKeepAttr)continue;if(!r.keepAttr){rt(o,e);continue}if(!ve&&K(/\/>/i,d)){rt(o,e);continue}ye&&Ml([re,D,O],e=>{d=Bl(d,e,` `)});let f=P(e.nodeName);if(!ut(f,l,d)){rt(o,e);continue}if(b&&typeof m==`object`&&typeof m.getAttributeType==`function`&&!s)switch(m.getAttributeType(f,l)){case`TrustedHTML`:d=b.createHTML(d);break;case`TrustedScriptURL`:d=b.createScriptURL(d);break}if(d!==u)try{s?e.setAttributeNS(s,o,d):e.setAttribute(o,d),ot(e)?nt(e):Pl(t.removed)}catch{rt(o,e)}}ct(E.afterSanitizeAttributes,e,null)},pt=function(e){let t=null,n=at(e);for(ct(E.beforeSanitizeShadowDOM,e,null);t=n.nextNode();)ct(E.uponSanitizeShadowNode,t,null),lt(t),F(t),t.content instanceof a&&pt(t.content);ct(E.afterSanitizeShadowDOM,e,null)},I=function(e){if(e.nodeType===xu.element&&e.shadowRoot instanceof a){let t=e.shadowRoot;I(t),pt(t)}let t=e.childNodes;if(!t)return;let n=[];Ml(t,e=>{Fl(n,e)});for(let e of n)I(e)};return t.sanitize=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=null,o=null,c=null,l=null;if(Ue=!e,Ue&&(e=`<!-->`),typeof e!=`string`&&!st(e)&&(e=Zl(e),typeof e!=`string`))throw Jl(`dirty is not a string, aborting`);if(!t.isSupported)return e;if(Se||Qe(n),t.removed=[],typeof e==`string`&&(je=!1),je){let t=e.nodeName;if(typeof t==`string`){let e=P(t);if(!k[e]||fe[e])throw Jl(`root node is forbidden and cannot be sanitized in-place`)}I(e)}else if(e instanceof s)i=it(`<!---->`),o=i.ownerDocument.importNode(e,!0),o.nodeType===xu.element&&o.nodeName===`BODY`||o.nodeName===`HTML`?i=o:i.appendChild(o),I(o);else{if(!we&&!ye&&!xe&&e.indexOf(`<`)===-1)return b&&Ee?b.createHTML(e):e;if(i=it(e),!i)return we?null:Ee?x:``}i&&Ce&&nt(i.firstChild);let u=at(je?e:i);for(;c=u.nextNode();)lt(c),F(c),c.content instanceof a&&pt(c.content);if(je)return e;if(we){if(ye){i.normalize();let e=i.innerHTML;Ml([re,D,O],t=>{e=Bl(e,t,` `)}),i.innerHTML=e}if(Te)for(l=T.call(i.ownerDocument);i.firstChild;)l.appendChild(i.firstChild);else l=i;return(A.shadowroot||A.shadowrootmode)&&(l=ne.call(r,l,!0)),l}let d=xe?i.outerHTML:i.innerHTML;return xe&&k[`!doctype`]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&K(yu,i.ownerDocument.doctype.name)&&(d=`<!DOCTYPE `+i.ownerDocument.doctype.name+`>
`+d),ye&&Ml([re,D,O],e=>{d=Bl(d,e,` `)}),b&&Ee?b.createHTML(d):d},t.setConfig=function(){Qe(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}),Se=!0},t.clearConfig=function(){Ye=null,Se=!1},t.isValidAttribute=function(e,t,n){return Ye||Qe({}),ut(P(e),P(t),n)},t.addHook=function(e,t){typeof t==`function`&&Fl(E[e],t)},t.removeHook=function(e,t){if(t!==void 0){let n=Nl(E[e],t);return n===-1?void 0:Il(E[e],n,1)[0]}return Pl(E[e])},t.removeHooks=function(e){E[e]=[]},t.removeAllHooks=function(){E=wu()},t}var Eu=Tu(),Du=Object.defineProperty,Ou=(e,t,n)=>t in e?Du(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,X=(e,t,n)=>Ou(e,typeof t==`symbol`?t:t+``,n),ku={formatSelectAll(){return`[Select all]`},formatAllSelected(){return`All selected`},formatCountSelected(e,t){return`${e} of ${t} selected`},formatNoMatchesFound(){return`No matches found`},formatOkButton(){return`OK`},formatLazyLoading(){return`Loading...`},formatLazyFailed(){return`Failed to load data`}},Au=50,ju=4,Z=()=>!1,Mu=()=>!0,Nu={name:``,placeholder:``,classes:``,classPrefix:``,data:void 0,locale:void 0,selectAll:!0,single:void 0,singleRadio:!1,multiple:!1,hideOptgroupCheckboxes:!1,multipleWidth:80,width:void 0,dropWidth:void 0,maxHeight:250,maxHeightUnit:`px`,position:`bottom`,displayValues:!1,displayTitle:!1,displayDelimiter:`, `,minimumCountSelected:3,ellipsis:!1,isOpen:!1,keepOpen:!1,openOnHover:!1,container:null,filter:!1,filterGroup:!1,filterPlaceholder:``,filterAcceptOnEnter:!1,filterByDataLength:void 0,customFilter(e){let{text:t,label:n,search:r}=e;return(n||t||``).includes(r)},showClear:!1,autoAdjustDropHeight:!1,autoAdjustDropPosition:!1,autoAdjustDropWidthByTextSize:!1,adjustedHeightPadding:10,useSelectOptionLabel:!1,useSelectOptionLabelToHtml:!1,navigationHighlight:!0,infiniteScroll:!1,virtualScroll:!0,cssStyler:()=>null,textTemplate:e=>e.innerHTML.trim(),labelTemplate:e=>e.label,onBeforeOpen:Z,onChange:Z,onOpen:Z,onBeforeClose:Mu,onClose:Z,onCheckAll:Z,onUncheckAll:Z,onFocus:Z,onBlur:Z,onOptgroupClick:Z,onBeforeClick:Mu,onClick:Z,onFilter:Z,onFilterClear:Z,onClear:Z,onAfterCreate:Z,onDestroy:Z,onAfterDestroy:Z,onDestroyed:Z,sanitizer:e=>{if(`setHTML`in Element.prototype){let t=document.createElement(`div`);return t.setHTML(e,{sanitizer:new Sanitizer({elements:[`i`,`span`,`div`,`p`,`b`,`strong`,`em`,`br`,`ul`,`ol`,`li`,`a`,`img`],attributes:[`class`,`title`,`alt`,`src`,`href`,`target`,`rel`,`width`,`height`,`level`],replaceWithChildrenElements:[]})}),t.innerHTML}return e}},Pu=[`init`,`getOptions`,`refreshOptions`,`getSelects`,`setSelects`,`enable`,`disable`,`open`,`close`,`check`,`uncheck`,`checkAll`,`uncheckAll`,`checkInvert`,`focus`,`blur`,`refresh`,`destroy`];Object.assign(Nu,ku);var Fu={BLOCK_ROWS:Au,CLUSTER_BLOCKS:ju,DEFAULTS:Nu,METHODS:Pu},Iu=class{constructor(e){X(this,`_distinctEvent`),X(this,`_boundedEvents`,[]),this._distinctEvent=e?.distinctEvent??!1}get boundedEvents(){return this._boundedEvents}dispose(){this.unbindAll(),this._boundedEvents=[]}bind(e,t,n,r,i=``){let a=Array.isArray(t)?t:[t];typeof e?.forEach==`function`?e.forEach(e=>this.bindElementEvents(e,a,n,r,i)):this.bindElementEvents(e,a,n,r,i)}hasBinding(e,t){return this._boundedEvents.some(n=>n.element===e&&(!t||n.eventName===t))}unbind(e,t,n){if(e){let r=Array.isArray(e)?e:[e],i=Array.isArray(t)?t:[t||``];for(let e of r){n||=this._boundedEvents.find(n=>{if(n.element===e&&(!t||n.eventName===t))return n.listener});for(let t of i)e?.removeEventListener?.(t,n)}}}unbindAll(e){if(e){let t=Array.isArray(e)?e:[e];for(let e=this._boundedEvents.length-1;e>=0;--e){let n=this._boundedEvents[e];if(t.some(e=>e===n.groupName)){let{element:t,eventName:r,listener:i}=n;this.unbind(t,r,i),this._boundedEvents.splice(e,1)}}}else for(;this._boundedEvents.length>0;){let{element:e,eventName:t,listener:n}=this._boundedEvents.pop();this.unbind(e,t,n)}}bindElementEvents(e,t,n,r,i=``){for(let a of t)(!this._distinctEvent||this._distinctEvent&&!this.hasBinding(e,a))&&(e.addEventListener(a,n,r),this._boundedEvents.push({element:e,eventName:a,listener:n,groupName:i}))}};function Lu(e,t,n=!1){let r=Object.keys(e),i=Object.keys(t);if(n&&r.length!==i.length)return!1;for(let n of r)if(i.includes(n)&&e[n]!==t[n])return!1;return!0}function Ru(e){return typeof e!=`object`||!e?e:Array.isArray(e)?e.map(Ru):typeof e==`function`?e:Object.fromEntries(Object.entries(e).map(([e,t])=>[e,Ru(t)]))}function zu(e){return e!=null&&e!==``}function Bu(e,t){return typeof e==`object`?Object.fromEntries(t?Object.entries(e).filter(([e,n])=>!zu(n)&&!t.includes(e)||zu(n)):Object.entries(e).filter(([e,t])=>zu(t))):e}function Vu(e){let t=0;return e.forEach((e,n)=>{e.type===`optgroup`?(e._key=`group_${n}`,e.visible=typeof e.visible>`u`?!0:e.visible,e.children.forEach((e,r)=>{e&&(e.visible=typeof e?.visible>`u`?!0:e.visible,e.divider||(e._key=`option_${n}_${r}`,t+=1))})):(e.visible=typeof e.visible>`u`?!0:e.visible,e.divider||(e._key=`option_${n}`,t+=1))}),t}function Hu(e,t,n){if(Array.isArray(e))for(let r of e){if(r[t]===n||r[t]===`${+r[t]}`&&+r[t]===n)return r;if(r.type===`optgroup`){for(let e of r.children)if(e&&(e[t]===n||e[t]===`${+e[t]}`&&+e[t]===n))return e}}}function Uu(e){return Object.keys(e).forEach(t=>zu(e[t])?``:delete e[t]),e}function Wu(e,t){if(typeof e!=`string`)return e;if(typeof t==`function`)return t(e);if(typeof e.normalize==`function`)return e.normalize(`NFD`).replace(/[\u0300-\u036F]/g,``);throw Error("[Multiple-Select-Vanilla] `normalize()` function is not defined, you can optionally provide a custom parser via the `diacriticParser` option.")}function Gu(e){let{innerHeight:t=0,innerWidth:n=0}=window,{top:r,left:i}=id(),{top:a,left:o}=Xu(e);return{top:a-r,bottom:t-(a-r),left:o-i,right:n-(o-i)}}function Ku(e=``){return e.split(` `).filter(e=>e)}function Q(e,t,n){let r=document.createElement(e);return t&&Object.keys(t).forEach(e=>{let n=t[e];typeof n==`object`?Object.assign(r[e],n):r[e]=t[e]}),n?.appendChild(r),r}function qu(e,t,n){let r=e.props?.innerHTML?nd(e.props,`innerHTML`):e.props,i=Q(e.tagName,Bu(r,[`className`,`title`,`style`]),t),a=n;if(a||=i,e.props.innerHTML&&(i.innerHTML=e.props.innerHTML),e.attrs)for(let t of Object.keys(e.attrs))i.setAttribute(t,e.attrs[t]);if(e.children)for(let t of e.children)qu(t,i,a);return t?.appendChild(i),i}function Ju(e){return e.hasOwnProperty(`tagName`)?qu(e):document.createElement(`li`)}function Yu(e){for(;e?.firstChild;)e.lastChild&&e.removeChild(e.lastChild);return e}function Xu(e){if(!e)return{top:0,bottom:0,left:0,right:0};let{top:t,left:n,bottom:r,right:i}=e.getBoundingClientRect();return{top:t+window.pageYOffset,left:n+window.pageXOffset,bottom:r,right:i}}function Zu(e,t,n){if(!e)return 0;let r=Number.parseFloat(e.style[n]);if(!r||Number.isNaN(r)){let i=n===`height`?`Height`:`Width`;switch(t){case`outer`:r=e[`offset${i}`];break;case`scroll`:r=e[`scroll${i}`];break;default:r=e[`client${i}`];break}r=e.getBoundingClientRect()[n]}if(!r||Number.isNaN(r)){let t=e.style.display,i=e.style.position;e.style.display=`block`,e.style.position=`absolute`,r=Qu(e,n),e.style.display=t,e.style.position=i}return r||0}function Qu(e,t){let n=window.getComputedStyle(e)[t],r=Number.parseFloat(n);return Number.isNaN(r)&&(r=0),r}function $u(e,t){let n=null,r=e?.parentElement;for(;r;){let[e,i,a,o]=t.match(/^([a-z]*)([#.]{1})([a-z-]+)$/i)||[];if(a&&o)for(let e of o.replace(a,``).split(` `))r.classList.contains(e)&&(i?r?.tagName.toLowerCase()===i&&(n=r):n=r);r=r.parentElement}return n}function ed(e){if(zu(e)){let t=document.createElement(`textarea`);return t.innerHTML=e.toString().replace(/&#(\d+);/g,(e,t)=>String.fromCharCode(t)),t.value}return``}function td(e,t){e.parentNode?.insertBefore(t,e.nextSibling)}function nd(e,t){let{[t]:n,...r}=e;return r}function rd(e,t){e?.style&&(e.style.display=e.style.display===`none`&&t!==!1||t===!0?`block`:`none`)}function id(){return{left:window.pageXOffset,top:window.pageYOffset}}var ad=class{constructor(e){X(this,`clusterRows`),X(this,`cache`),X(this,`scrollEl`),X(this,`blockHeight`),X(this,`clusterHeight`),X(this,`contentEl`),X(this,`parentEl`),X(this,`itemHeight`),X(this,`lastCluster`),X(this,`scrollTop`),X(this,`dataStart`),X(this,`dataEnd`),X(this,`rows`),X(this,`destroy`),X(this,`callback`),X(this,`sanitizer`),this.rows=e.rows,this.scrollEl=e.scrollEl,this.contentEl=e.contentEl,this.parentEl=e.contentEl?.parentElement,this.callback=e.callback,this.cache={},this.scrollTop=this.scrollEl.scrollTop,this.initDOM(this.rows),this.scrollEl.scrollTop=this.scrollTop,this.lastCluster=0;let t=()=>{this.lastCluster!==(this.lastCluster=this.getNum())&&(this.initDOM(this.rows),this.callback())};this.scrollEl.addEventListener(`scroll`,t,!1),this.destroy=()=>{this.scrollEl.removeEventListener(`scroll`,t,!1),Yu(this.contentEl)}}reset(e){this.lastCluster=0,this.cache={},Yu(this.contentEl),this.initDOM(e)}initDOM(e){if(typeof this.clusterHeight>`u`){this.cache.scrollTop=this.scrollEl.scrollTop;let t=Ju(e[0]);this.contentEl.appendChild(t),this.contentEl.appendChild(t),this.contentEl.appendChild(t),this.cache.data=[e[0]],this.getRowsHeight()}let t=this.initData(e,this.getNum()),n=this.checkChanges(`data`,t.rows),r=this.checkChanges(`top`,t.topOffset),i=this.checkChanges(`bottom`,t.bottomOffset);Yu(this.contentEl),n&&r?(t.topOffset&&this.contentEl.appendChild(this.getExtra(`top`,t.topOffset)),t.rows.forEach(e=>this.contentEl.appendChild(Ju(e))),t.bottomOffset&&this.contentEl.appendChild(this.getExtra(`bottom`,t.bottomOffset))):i&&this.contentEl.lastChild&&(this.contentEl.lastChild.style.height=`${t.bottomOffset}px`)}getRowsHeight(){if(typeof this.itemHeight>`u`){let e=this.parentEl?.style.display||``;this.parentEl&&(e===``||e===`none`)&&(this.parentEl.style.display=`block`);let t=this.contentEl.children,n=t[Math.floor(t.length/2)];this.itemHeight=n.offsetHeight,this.parentEl&&(this.parentEl.style.display=e)}this.blockHeight=this.itemHeight*Fu.BLOCK_ROWS,this.clusterRows=Fu.BLOCK_ROWS*Fu.CLUSTER_BLOCKS,this.clusterHeight=this.blockHeight*Fu.CLUSTER_BLOCKS}getNum(){this.scrollTop=this.scrollEl.scrollTop;let e=(this.clusterHeight||0)-(this.blockHeight||0);return e&&Math.floor(this.scrollTop/e)||0}initData(e,t){if(e.length<Fu.BLOCK_ROWS)return{topOffset:0,bottomOffset:0,rowsAbove:0,rows:e};let n=Math.max((this.clusterRows-Fu.BLOCK_ROWS)*t,0),r=n+this.clusterRows,i=Math.max(n*this.itemHeight,0),a=Math.max((e.length-r)*this.itemHeight,0),o=[],s=n;i<1&&s++;for(let t=n;t<r;t++)e[t]&&o.push(e[t]);return this.dataStart=n,this.dataEnd=r,{topOffset:i,bottomOffset:a,rowsAbove:s,rows:o}}checkChanges(e,t){let n=t!==this.cache[e];return this.cache[e]=t,n}getExtra(e,t){let n=Q(`li`,{className:`virtual-scroll-${e}`});return t&&(n.style.height=`${t}px`),n}},od=`.ms-select-all, ul li[data-key]`,sd=`.ms-select-all.highlighted, ul li[data-key].highlighted`,cd=class{constructor(e,t){X(this,`elm`,e),X(this,`_bindEventService`),X(this,`_isOpen`,!1),X(this,`isAllSelected`,!1),X(this,`isPartiallyAllSelected`,!1),X(this,`fromHtml`,!1),X(this,`choiceElm`),X(this,`selectClearElm`),X(this,`closeElm`),X(this,`clearSearchIconElm`),X(this,`filterText`,``),X(this,`updateData`,[]),X(this,`data`,[]),X(this,`dataTotal`),X(this,`dropElm`),X(this,`okButtonElm`),X(this,`filterParentElm`),X(this,`lastFocusedItemKey`,``),X(this,`lastMouseOverPosition`,``),X(this,`ulElm`),X(this,`parentElm`),X(this,`labelElm`),X(this,`selectAllParentElm`),X(this,`selectAllElm`),X(this,`searchInputElm`),X(this,`selectGroupElms`),X(this,`selectCheckboxElms`),X(this,`noResultsElm`),X(this,`options`),X(this,`selectAllName`,``),X(this,`selectGroupName`,``),X(this,`selectItemName`,``),X(this,`scrolledByMouse`,!1),X(this,`openDelayTimer`),X(this,`updateDataStart`),X(this,`updateDataEnd`),X(this,`virtualScroll`),X(this,`_currentHighlightIndex`,-1),X(this,`_currentSelectedElm`),X(this,`_isLazyLoaded`,!1),X(this,`isMoveUpRecalcRequired`,!1),X(this,`locales`,{}),this.options=Object.assign({},Fu.DEFAULTS,this.elm.dataset,t),this._bindEventService=new Iu({distinctEvent:!0})}get isRenderAsHtml(){return this.options.renderOptionLabelAsHtml||this.options.useSelectOptionLabelToHtml}init(){this.initLocale(),this.initContainer(),this.initData(),this.initSelected(!0),this.initFilter(),this.initDrop(),this.initView(),this.options.onAfterCreate()}destroy(e=!0){this.elm&&this.parentElm&&(this.options.onDestroy({hardDestroy:e}),e&&this.options.onHardDestroy(),this.elm.parentElement&&this.parentElm.parentElement&&this.elm.parentElement.insertBefore(this.elm,this.parentElm.parentElement.firstChild),this.elm.classList.remove(`ms-offscreen`),this._bindEventService.unbindAll(),this.virtualScroll?.destroy(),this.dropElm?.remove(),this.dropElm=void 0,this.parentElm.parentNode?.removeChild(this.parentElm),this.fromHtml&&=(delete this.options.data,!1),this.options.onAfterDestroy({hardDestroy:e}),e&&(this.options.onAfterHardDestroy?.(),Object.keys(this.options).forEach(e=>delete this[e])))}initLocale(){if(this.options.locale){if(typeof this.options.locale==`object`){Object.assign(this.options,this.options.locale);return}let e=this.options.locales||this.locales||{},t=this.options.locale.split(/-|_/);if(t[0]=t[0].toLowerCase(),t[1]&&=t[1].toUpperCase(),e[this.options.locale])Object.assign(this.options,e[this.options.locale]);else if(e[t.join(`-`)])Object.assign(this.options,e[t.join(`-`)]);else if(e[t[0]])Object.assign(this.options,e[t[0]]);else throw Error(`[multiple-select-vanilla] invalid locales "${this.options.locale}", make sure to import it before using it`)}}initContainer(){let e=this.elm.getAttribute(`name`)||this.options.name||``;this.options.classes&&this.elm.classList.add(this.options.classes),this.options.classPrefix&&(this.elm.classList.add(this.options.classPrefix),this.options.size&&this.elm.classList.add(`${this.options.classPrefix}-${this.options.size}`)),this.elm.style.display=`none`,this.labelElm=this.elm.closest(`label`),!this.labelElm&&this.elm.id&&(this.labelElm=Q(`label`,{htmlFor:this.elm.id})),this.labelElm?.querySelector(`input`)&&(this.labelElm=null),this.options.single===void 0&&(this.options.single=!this.elm.multiple),this.parentElm=Q(`div`,{className:Ku(`ms-parent ${this.elm.className||``} ${this.options.classes}`).join(` `),dataset:{test:`sel`}}),this.options.darkMode&&this.parentElm.classList.add(`ms-dark-mode`);let t=this.elm.getAttribute(`title`)||``;t&&(this.parentElm.title=t),this.options.placeholder=this.options.placeholder||this.elm.getAttribute(`placeholder`)||``,this.choiceElm=Q(`button`,{className:`ms-choice`,type:`button`},this.parentElm),this.options.labelId&&(this.choiceElm.id=this.options.labelId,this.choiceElm.setAttribute(`aria-labelledby`,this.options.labelId)),this.options.tabIndex!==void 0&&(this.choiceElm.tabIndex=this.options.tabIndex),this.choiceElm.appendChild(Q(`span`,{className:`ms-placeholder`,textContent:this.options.placeholder})),this.options.showClear&&(this.selectClearElm=Q(`div`,{className:`ms-icon ms-icon-close`}),this.selectClearElm.style.display=`none`,this.choiceElm.appendChild(this.selectClearElm)),this.choiceElm.appendChild(Q(`div`,{className:`ms-icon ms-icon-caret`})),this.dropElm=Q(`div`,{className:`ms-drop ${this.options.position}`,ariaExpanded:`false`},this.parentElm),this.options.darkMode&&this.dropElm.classList.add(`ms-dark-mode`),e&&(this.dropElm.dataset.name=e);let n=this.elm.getAttribute(`data-test`)||this.options.dataTest;n&&(this.parentElm.dataset.test=n,this.dropElm.dataset.test=n),this.closeElm=this.choiceElm.querySelector(`.ms-icon-close`);for(let e of[`minWidth`,`maxWidth`,`width`,`dropWidth`])if(this.options[e]){let t=e===`dropWidth`?`width`:e;this.dropElm.style[t]=typeof this.options[e]==`string`?this.options[e]:`${this.options[e]}px`}td(this.elm,this.parentElm),this.elm.disabled&&(this.choiceElm.classList.add(`disabled`),this.choiceElm.disabled=!0),this.selectAllName=`selectAll${e}`,this.selectGroupName=`selectGroup${e}`,this.selectItemName=`selectItem${e}`,this.options.keepOpen||(this._bindEventService.unbindAll(`body-click`),this._bindEventService.bind(document.body,`click`,(e=>{if(this.getEventTarget(e)===this.choiceElm||$u(this.getEventTarget(e),`.ms-choice`)===this.choiceElm)return;let t=this.getEventTarget(e),n=$u(this.getEventTarget(e),`.ms-drop`);this._isOpen&&(t===this.dropElm||n!==this.dropElm&&t!==this.elm)&&this.close(`body.click`)}),void 0,`body-click`))}initData(){let e=[];if(this.options.data){if(Array.isArray(this.options.data))this.data=this.options.data.map(e=>typeof e==`string`||typeof e==`number`?{text:e,value:e}:e);else if(typeof this.options.data==`object`){for(let[t,n]of Object.entries(this.options.data))e.push({value:t,text:`${n}`});this.data=e}}else this.elm.childNodes.forEach(t=>{let n=this.initRow(t);n&&e.push(n)}),this.options.data=e,this.data=e,this.fromHtml=!0;this.data&&this.options.preFilter&&(this.data=this.data.filter(this.options.preFilter)),this.data&&this.options.preSort&&(this.data=this.data.sort(this.options.preSort)),this.dataTotal=Vu(this.data||[])}initRow(e,t){let n={};return e.tagName?.toLowerCase()===`option`?(n.type=`option`,n.text=this.options.textTemplate(e),n.value=e.value,n.visible=!0,n.selected=!!e.selected,n.disabled=t||e.disabled,n.classes=e.getAttribute(`class`)||``,n.title=e.getAttribute(`title`)||``,e.dataset.value&&(n._value=e.dataset.value),Object.keys(e.dataset).length&&(n._data=e.dataset,n._data.divider&&(n.divider=n._data.divider)),n):e.tagName?.toLowerCase()===`optgroup`?(n.type=`optgroup`,n.label=this.options.labelTemplate(e),n.visible=!0,n.selected=!!e.selected,n.disabled=e.disabled,n.children=[],Object.keys(e.dataset).length&&(n._data=e.dataset),e.childNodes.forEach(e=>{n.children.push(this.initRow(e,n.disabled))}),n):null}initDrop(){this.initList(!this.options.lazyData),this.update(!0),this.options.isOpen&&this.open(0),this.options.openOnHover&&this.parentElm&&(this._bindEventService.bind(this.parentElm,`mouseover`,()=>this.open(null)),this._bindEventService.bind(this.parentElm,`mouseout`,()=>this.close(`hover.mouseout`)))}initFilter(){if(this.filterText=``,this.options.filter||!this.options.filterByDataLength)return;let e=0;for(let t of this.data||[])t.type===`optgroup`?e+=t.children.length:e+=1;this.options.filter=e>this.options.filterByDataLength}initList(e=!0){if(e&&(this.options.filter&&(this.filterParentElm=Q(`div`,{className:`ms-search`},this.dropElm),this.filterParentElm.appendChild(Q(`input`,{autocomplete:`off`,autocapitalize:`off`,spellcheck:!1,type:`text`,placeholder:this.options.filterPlaceholder||`🔎︎`})),this.options.showSearchClear&&this.filterParentElm.appendChild(Q(`span`,{className:`ms-icon ms-icon-close`}))),this.options.selectAll&&!this.options.single)){let e=this.elm.getAttribute(`name`)||this.options.name||``;this.selectAllParentElm=Q(`div`,{className:`ms-select-all`,dataset:{key:`select_all`}});let t=document.createElement(`label`),n=`ms-icon ${this.isAllSelected?`ms-icon-check`:`ms-icon-${this.isPartiallyAllSelected?`partial-all`:`uncheck`}`}`,r=Q(`div`,{className:`icon-checkbox-container`},t);Q(`input`,{type:`checkbox`,ariaChecked:String(this.isAllSelected),checked:this.isAllSelected,dataset:{name:`selectAll${e}`}},r),Q(`div`,{className:n},r),t.appendChild(Q(`span`,{textContent:this.formatSelectAll()})),this.selectAllParentElm.appendChild(t),this.dropElm?.appendChild(this.selectAllParentElm)}this.ulElm=Q(`ul`,{className:`ms-list`,role:`listbox`,ariaExpanded:`false`,ariaMultiSelectable:String(!this.options.single)}),this.dropElm?.appendChild(this.ulElm),e&&this.options.showOkButton&&!this.options.single&&(this.okButtonElm=Q(`button`,{className:`ms-ok-button`,type:`button`,textContent:this.formatOkButton()},this.dropElm)),this.initListItems()}initListItems(){let e=0,t=this.getListRows();if(this.options.selectAll&&!this.options.single&&(e=-1),this.options.virtualScroll&&t.length>Fu.BLOCK_ROWS*Fu.CLUSTER_BLOCKS){let n=this.dropElm&&this.dropElm?.style.display!==`none`;!n&&this.dropElm&&(this.dropElm.style.left=`-10000`,this.dropElm.style.display=`block`,this.dropElm.ariaExpanded=`true`);let r=()=>{if(this.virtualScroll){this._currentHighlightIndex=0,this.updateDataStart=this.virtualScroll.dataStart+e,this.updateDataEnd=this.virtualScroll.dataEnd+e,this.updateDataStart<0&&(this.updateDataStart=0,this._currentHighlightIndex=0);let t=this.getDataLength();this.updateDataEnd>t&&(this.updateDataEnd=t),this.ulElm&&(this.isMoveUpRecalcRequired?this.recalculateArrowMove(`up`):this.virtualScroll.dataStart>this.updateDataStart&&this.recalculateArrowMove(`down`))}};this.ulElm&&(this.virtualScroll?this.virtualScroll.reset(t):this.virtualScroll=new ad({rows:t,scrollEl:this.ulElm,contentEl:this.ulElm,sanitizer:this.options.sanitizer,callback:()=>{r(),this.events()}})),r(),!n&&this.dropElm&&(this.dropElm.style.left=`0`,this.dropElm.style.display=`none`,this.dropElm.ariaExpanded=`false`)}else this.ulElm&&(Yu(this.ulElm),t.forEach(e=>this.ulElm.appendChild(Ju(e)))),this.updateDataStart=0,this.updateDataEnd=this.updateData.length;return this.events(),t}getEventTarget(e){try{return e.composedPath?.()[0]||e.path?.[0]||e.target}catch{return e.target}}getListRows(){let e=[];return this.updateData=[],this.data?.forEach(t=>e.push(...this.initListItem(t))),this.options.infiniteScroll&&e.push({tagName:`li`,props:{className:`ms-infinite-option`,role:`option`}}),e.push({tagName:`li`,props:{className:`ms-no-results`,textContent:this.formatNoMatchesFound()}}),e}initListItem(e,t=0){let n=e?.title||``,r=this.options.multiple?`multiple`:``,i=this.options.single?`radio`:`checkbox`,a=!!e?.selected,o=this.options.single&&!this.options.singleRadio,s=``;if(!e?.visible)return[];if(this.updateData.push(e),o&&(s=`hide-radio `),e.selected&&(s+=`selected `),e.type===`optgroup`){let t=[],n;if(this.options.hideOptgroupCheckboxes||this.options.single)n={tagName:`span`,props:{dataset:{name:this.selectGroupName,key:e._key}}};else{let t={tagName:`input`,props:{type:`checkbox`,dataset:{name:this.selectGroupName,key:e._key},checked:a,disabled:e.disabled}};if(o)n=t;else{let r=!1;`children`in e&&e.children.some(e=>e?.selected)&&(r=!0),n={tagName:`div`,props:{className:`icon-checkbox-container${i===`radio`?` radio`:``}`},children:[t,{tagName:`div`,props:{className:`ms-icon ${a?i===`radio`?`ms-icon-radio`:`ms-icon-check`:`ms-icon-${r?`partial-group`:`uncheck`}`}`}}]}}}!s.includes(`hide-radio`)&&(this.options.hideOptgroupCheckboxes||this.options.single)&&(s+=`hide-radio `);let r={tagName:`span`,props:{}};this.applyAsTextOrHtmlWhenEnabled(r.props,e.label);let c={tagName:`li`,props:{className:Ku(`group${this.options.single||e.disabled?` disabled`:``} ${s}`).join(` `),role:`option`,ariaSelected:String(a),dataset:{key:e._key}},children:[{tagName:`label`,props:{className:Ku(`optgroup${this.options.single||e.disabled?` disabled`:``}`).join(` `)},children:[n,r]}]},l=this.options.cssStyler(e);return l&&(c.props.style=l),t.push(c),e.children.forEach(e=>t.push(...this.initListItem(e,1))),t}if(s+=e.classes||``,t&&this.options.single&&(s+=`option-level-${t} `),e.divider)return[{tagName:`li`,props:{className:`option-divider`}}];let c=r||s?(r+s).trim():``;e.disabled&&(c+=` disabled`);let l=`${e.disabled?`disabled`:``}`,u={tagName:`span`,props:{}};this.applyAsTextOrHtmlWhenEnabled(u.props,e.text);let d={tagName:`input`,props:{type:i,value:encodeURI(e.value),dataset:{key:e._key,name:this.selectItemName},checked:a,disabled:!!e.disabled}};e.selected&&(d.attrs={checked:`checked`});let f={tagName:`div`,props:{className:`icon-checkbox-container${i===`radio`?` radio`:``}`},children:[d,{tagName:`div`,props:{className:`ms-icon ${d.props.checked?i===`radio`?`ms-icon-radio`:`ms-icon-check`:`ms-icon-uncheck`}`}}]},p={tagName:`li`,props:{role:`option`,title:n,ariaSelected:String(a),dataset:{key:e._key}},children:[{tagName:`label`,props:{className:l},children:[o?d:f,u]}]};c&&(p.props.className=c);let m=this.options.cssStyler(e);return m&&(p.props.style=m),[p]}initSelected(e=!1){let t=0;for(let e of this.data||[])if(e.type===`optgroup`){let n=e.children.filter(e=>e?.selected&&!e.disabled&&e.visible).length;e.children.length&&(e.selected=!this.options.single&&n&&n===e.children.filter(e=>e&&!e.disabled&&e.visible&&!e.divider).length),t+=n}else t+=e.selected&&!e.disabled&&e.visible?1:0;if(this.isAllSelected=this.data?.filter(e=>e.selected&&!e.disabled&&e.visible).length===this.data?.filter(e=>!e.disabled&&e.visible&&!e.divider).length,this.isPartiallyAllSelected=!this.isAllSelected&&t>0,!e){let e=``;this.isAllSelected?e=`onCheckAll`:t===0&&(e=`onUncheckAll`),e&&(this.options[e](),this.handleOnChange(e))}}initView(){let e;window.getComputedStyle?(e=window.getComputedStyle(this.elm).width,e===`auto`&&(e=Zu(this.dropElm,`outer`,`width`)+20)):e=Zu(this.elm,`outer`,`width`)+20,this.parentElm.style.width=`${this.options.width||e}px`,this.elm.classList.add(`ms-offscreen`)}events(){this._bindEventService.unbindAll([`ok-button`,`search-input`,`select-all-checkbox`,`input-checkbox-list`,`group-checkbox-list`,`hover-highlight`,`arrow-highlight`,`option-list-scroll`]),this.clearSearchIconElm=this.filterParentElm?.querySelector(`.ms-icon-close`),this.searchInputElm=this.dropElm?.querySelector(`.ms-search input`),this.selectAllElm=this.dropElm?.querySelector(`input[data-name="${this.selectAllName}"]`),this.selectGroupElms=this.dropElm?.querySelectorAll(`input[data-name="${this.selectGroupName}"],span[data-name="${this.selectGroupName}"]`),this.selectCheckboxElms=this.dropElm?.querySelectorAll(`input[data-name="${this.selectItemName}"]:enabled`),this.noResultsElm=this.dropElm?.querySelector(`.ms-no-results`);let e=e=>{e.preventDefault(),!this.getEventTarget(e).classList.contains(`ms-icon-close`)&&(this.options.isOpen?this.close(`toggle.close`):this.open())};this.labelElm&&this._bindEventService.bind(this.labelElm,`click`,(t=>{this.getEventTarget(t).nodeName.toLowerCase()===`label`&&(e(t),(!this.options.filter||!this.options.isOpen)&&this.focus(),t.stopPropagation())})),this._bindEventService.bind(this.choiceElm,`click`,e),this.options.onFocus&&this._bindEventService.bind(this.choiceElm,`focus`,this.options.onFocus),this.options.onBlur&&this._bindEventService.bind(this.choiceElm,`blur`,this.options.onBlur),this._bindEventService.bind(this.parentElm,`keydown`,(e=>{e.code===`Escape`&&this.handleEscapeKey()})),this.closeElm&&this._bindEventService.bind(this.closeElm,`click`,(e=>{e.preventDefault(),this._checkAll(!1,!0),this.initSelected(!1),this.updateSelected(),this.update(),this.options.onClear()})),this.clearSearchIconElm&&this._bindEventService.bind(this.clearSearchIconElm,`click`,(e=>{e.preventDefault(),this.searchInputElm&&(this.searchInputElm.value=``,this.searchInputElm.focus()),this._currentHighlightIndex=-1,this.moveHighlightDown(),this.filter(),this.options.onFilterClear()})),this.searchInputElm&&(this._bindEventService.bind(this.searchInputElm,`keydown`,(e=>{e.code===`Tab`&&e.shiftKey&&this.close(`key.shift+tab`)}),void 0,`search-input`),this._bindEventService.bind(this.searchInputElm,`keyup`,(e=>{if(this.options.filterAcceptOnEnter&&[`Enter`,`Space`].includes(e.code)&&this.searchInputElm?.value){if(this.options.single){let e=[];this.selectCheckboxElms?.forEach(t=>{t.closest(`li`)?.style.display!==`none`&&e.push(t)}),e.length&&e[0].hasAttribute(`data-name`)&&this.setSelects([e[0].value])}else this.selectAllElm?.click();this.close(`key.${e.code.toLowerCase()}`),this.focus();return}this.filter()}),void 0,`search-input`)),this.selectAllElm&&this._bindEventService.bind(this.selectAllElm,`click`,(e=>this._checkAll(e.currentTarget?.checked)),void 0,`select-all-checkbox`),this.okButtonElm&&this._bindEventService.bind(this.okButtonElm,`click`,(t=>{e(t),t.stopPropagation()}),void 0,`ok-button`),this.selectGroupElms&&this._bindEventService.bind(this.selectGroupElms,`click`,(e=>{let t=e.currentTarget,n=t.checked,r=Hu(this.data,`_key`,t.dataset.key);this._checkGroup(r,n),this.options.onOptgroupClick(Uu({label:r.label,selected:!!r.selected,data:r._data,children:r.children.filter(e=>e).map(e=>Uu({label:e.text,value:e.value,selected:e.selected,disabled:e.disabled,data:e._data}))})),this.handleOnChange(`onOptgroupClick`,{label:r.label,selected:!!r.selected,type:r.type})}),void 0,`group-checkbox-list`),this.selectCheckboxElms&&this._bindEventService.bind(this.selectCheckboxElms,`click`,(e=>{let t=e.currentTarget,n=t.checked,r=Hu(this.data,`_key`,t.dataset.key),i=()=>{this.options.single&&this.options.isOpen&&!this.options.keepOpen&&this.close(`selection`)};if(this.options.onBeforeClick(r)===!1){i();return}this._check(r,n),this.options.onClick(Uu({label:r.text,value:r.value,selected:r.selected,data:r._data})),this.handleOnChange(`onClick`,{label:r.text,value:r.value,selected:r.selected,type:r.type}),i()}),void 0,`input-checkbox-list`),this.lastFocusedItemKey&&this.dropElm&&this.dropElm.querySelector(`li[data-key=${this.lastFocusedItemKey}]`)?.focus(),this.options.navigationHighlight&&this.dropElm&&(this._bindEventService.bind(this.dropElm,`mouseover`,(e=>{let t=this.getEventTarget(e).closest(`.ms-select-all`)||this.getEventTarget(e).closest(`li`);if(this.dropElm?.contains(t)&&this.lastMouseOverPosition!==`${e.clientX}:${e.clientY}`){let e=this.dropElm?.querySelectorAll(od)||[],n=Array.from(e).findIndex(e=>e.dataset.key===t.dataset.key);this._currentHighlightIndex!==n&&!t.classList.contains(`disabled`)&&(this._currentSelectedElm=t,this._currentHighlightIndex=n,this.changeCurrentOptionHighlight(t))}this.lastMouseOverPosition=`${e.clientX}:${e.clientY}`}),void 0,`hover-highlight`),this._bindEventService.bind(this.dropElm,`keydown`,(e=>{switch(e.key){case`ArrowUp`:e.preventDefault(),this.moveHighlightUp();break;case`ArrowDown`:e.preventDefault(),this.moveHighlightDown();break;case`Escape`:this.handleEscapeKey();break;case`Enter`:case` `:if(document.activeElement!==this.okButtonElm){let t=this.getEventTarget(e).closest(`.ms-select-all`)||this.getEventTarget(e).closest(`li`);if(e.key===` `&&this.options.filter||this.options.filterAcceptOnEnter&&!t)return;e.preventDefault(),this._currentSelectedElm?.querySelector(`input`)?.click(),this.options.single&&(this.choiceElm.focus(),this.lastFocusedItemKey=this.choiceElm?.dataset.key||``)}break;case`Tab`:{e.preventDefault();let t=!this.options.single&&this.options.showOkButton;t&&e.shiftKey&&document.activeElement===this.okButtonElm?(this.focusSelectAllOrList(),this.highlightCurrentOption(),this.filterParentElm?.querySelector(`input`)?.focus()):t&&!e.shiftKey&&document.activeElement!==this.okButtonElm?(this.changeCurrentOptionHighlight(),this.okButtonElm?.focus()):(this.options.onBlur(e),this.options.isOpen&&this.options.closeOnTab&&this.close(`blur`));break}}}),void 0,`arrow-highlight`)),this.ulElm&&this.options.infiniteScroll&&this._bindEventService.bind(this.ulElm,`scroll`,this.infiniteScrollHandler.bind(this),void 0,`option-list-scroll`)}handleOnChange(e,t){this.options.onChange({eventName:e,item:t,selection:{labels:this.getSelects(`text`),values:this.getSelects(`value`)}})}handleEscapeKey(){this.options.keepOpen||(this.close(`key.escape`),this.choiceElm.focus())}infiniteScrollHandler(e,t,n){let r=!1;e&&this.getEventTarget(e)&&this.ulElm&&this.scrolledByMouse?this.getEventTarget(e).scrollTop+this.getEventTarget(e).clientHeight===this.ulElm.scrollHeight&&(r=!0):t!==void 0&&t+1===n&&(r=!0),r&&this.ulElm&&(this.virtualScroll?this.initListItems():this.ulElm.scrollTop=0,this._currentHighlightIndex=0,this.highlightCurrentOption())}open(e=0){return new Promise(t=>{e!==null&&e>=0?(window.clearTimeout(this.openDelayTimer),this.openDelayTimer=window.setTimeout(()=>{this.openDrop(),t()},e)):(this.openDrop(),t())})}openDrop(){if(!this.dropElm||this.choiceElm?.classList.contains(`disabled`))return;this.options.onBeforeOpen();let e=!1;if(this.options.lazyData&&!this._isLazyLoaded&&(e=!0,this.dropElm?.querySelector(`ul.ms-list`)?.remove(),this.options.lazyData(e=>{this._isLazyLoaded=!0,this.dropElm?.querySelector(`.ms-loading`)?.remove(),this.setData(e,!0)},e=>{this.dropElm?.querySelector(`.ms-loading`)?.remove(),this.dropElm?.querySelector(`.ms-lazy-failed`)?.remove();let t=Q(`div`,{className:`ms-lazy-failed`});t.appendChild(Q(`div`,{className:`ms-icon ms-icon-lazy-failed`})),t.appendChild(Q(`span`,{textContent:e??this.formatLazyFailed()})),this.dropElm?.appendChild(t)})),this.options.isOpen=!0,this.parentElm.classList.add(`ms-parent-open`),this.choiceElm?.querySelector(`div.ms-icon-caret`)?.classList.add(`open`),this.dropElm.style.display=`block`,this.dropElm.ariaExpanded=`true`,this.selectAllElm?.parentElement&&(this.selectAllElm.parentElement.style.display=`inline-flex`),this.noResultsElm&&(this.noResultsElm.style.display=`none`),!this.getDataLength())if(this.selectAllElm?.parentElement&&(this.selectAllElm.parentElement.style.display=`none`),e&&!this._isLazyLoaded&&!this.dropElm.querySelector(`.ms-loading`)){this.dropElm.querySelector(`.ms-lazy-failed`)?.remove();let e=Q(`div`,{className:`ms-loading`});e.appendChild(Q(`div`,{className:`ms-icon ms-icon-loading ms-spin`})),e.appendChild(Q(`span`,{textContent:this.formatLazyLoading()})),this.dropElm.appendChild(e)}else this.noResultsElm&&(this.noResultsElm.style.display=`block`);this.adjustDropSizeAndPosition(),(!e||this._isLazyLoaded)&&(this.getDataLength()&&this.options.filter?(this.searchInputElm&&(this.searchInputElm.value=``,this.searchInputElm.focus()),this.filter(!0)):this.focusSelectAllOrList()),this._currentHighlightIndex<0?this.moveHighlightDown():this.highlightCurrentOption(),this._isOpen=!0,this.options.onOpen()}adjustDropSizeAndPosition(){if(this.dropElm){if(this.options.container){let e;this.options.container instanceof Node?e=this.options.container:typeof this.options.container==`string`&&(e=this.options.container===`body`?document.body:document.querySelector(this.options.container)),e.appendChild(this.dropElm);let{top:t,left:n}=Xu(this.parentElm);this.dropElm.style.top=`${t+this.parentElm.offsetHeight}px`,this.dropElm.style.left=`${n}px`,this.dropElm.style.width=`${this.parentElm.offsetWidth}px`,this.dropElm.style.minWidth=`auto`}let e=this.options.minHeight,t=this.options.maxHeight;this.options.maxHeightUnit===`row`&&(t=Zu(this.dropElm.querySelector(`ul>li`),`outer`,`height`)*this.options.maxHeight),this.ulElm??=this.dropElm.querySelector(`ul`),this.ulElm&&(e&&(!this.options.lazyData||this._isLazyLoaded)&&(this.ulElm.style.minHeight=`${e}px`),this.ulElm.style.maxHeight=`${t}px`),this.dropElm.querySelectorAll(`.multiple`).forEach(e=>{e.style.width=`${this.options.multipleWidth}px`}),this.options.autoAdjustDropWidthByTextSize&&this.adjustDropWidthByText();let n=this.options.position;if(this.options.autoAdjustDropHeight){if(this.options.autoAdjustDropPosition){let{bottom:e,top:t}=Gu(this.dropElm);n=e<this.dropElm.getBoundingClientRect().height&&t>e?`top`:`bottom`}this.adjustDropHeight(n)}this.options.autoAdjustDropPosition&&this.adjustDropPosition(!0)}}focusSelectAllOrList(){this.selectAllElm?this.selectAllElm.focus():this.ulElm&&(this.ulElm.tabIndex=0,this.ulElm.focus())}highlightCurrentOption(){let e=this.dropElm?.querySelectorAll(od)||[];if(this._currentHighlightIndex<=e.length){let t=e[this._currentHighlightIndex];t&&(this.lastFocusedItemKey=t.dataset.key||``,this._currentSelectedElm=t,this.scrolledByMouse=!1,t.scrollIntoView({block:`nearest`}),this.changeCurrentOptionHighlight(t),window.setTimeout(()=>this.scrolledByMouse=!0,10))}}changeCurrentOptionHighlight(e){e?.classList.add(`highlighted`),(this.dropElm?.querySelectorAll(sd)||[]).forEach(t=>{t!==e&&t.classList.remove(`highlighted`)})}moveHighlightDown(){let e=this.dropElm?.querySelectorAll(od)||[],t=e.length;this._currentHighlightIndex<t-1?(this._currentHighlightIndex++,e[this._currentHighlightIndex]?.classList.contains(`disabled`)&&this.moveHighlightDown()):this.options.infiniteScroll&&this.infiniteScrollHandler(null,this._currentHighlightIndex,t),this.highlightCurrentOption()}moveHighlightUp(){let e=this.dropElm?.querySelectorAll(od)||[],t=+!this.options.single;if(this.virtualScroll&&this._currentHighlightIndex<=t&&this.updateDataStart>0&&this.ulElm){let t=e[this._currentHighlightIndex+ +!this.options.single],n=t?.dataset.key;this.lastFocusedItemKey=n,this.ulElm.scrollTop=this.ulElm.scrollTop-t?.getBoundingClientRect().height||10,this.isMoveUpRecalcRequired=!0;return}this._currentHighlightIndex>0&&(this._currentHighlightIndex--,e[this._currentHighlightIndex]?.classList.contains(`disabled`)&&this.moveHighlightUp()),this.highlightCurrentOption()}recalculateArrowMove(e){let t=this.dropElm?.querySelectorAll(od)||[],n=Array.from(t).findIndex(e=>e.dataset.key===this.lastFocusedItemKey);this._currentHighlightIndex=n-1,e===`down`?this.moveHighlightDown():e===`up`&&(this.moveHighlightUp(),this.isMoveUpRecalcRequired=!1)}close(e){this.options.onBeforeClose(e)!==!1&&(this._isOpen=!1,this.options.isOpen=!1,this.parentElm.classList.remove(`ms-parent-open`),this.choiceElm?.querySelector(`div.ms-icon-caret`)?.classList.remove(`open`),this.dropElm&&(this.dropElm.style.display=`none`,this.dropElm.ariaExpanded=`false`,this.options.container&&(this.parentElm.appendChild(this.dropElm),this.dropElm.style.top=`auto`,this.dropElm.style.left=`auto`)),this.options.onClose(e))}applyAsTextOrHtmlWhenEnabled(e,t){e||={},this.isRenderAsHtml?e.innerHTML=typeof this.options.sanitizer==`function`?this.options.sanitizer(t):t:e.textContent=ed(t)}update(e=!1){let t=this.getSelects(),n=this.getSelects(`text`);this.options.displayValues&&(n=t);let r=this.choiceElm?.querySelector(`span`),i=t.length,a=null,o=()=>this.options.useSelectOptionLabel||this.options.useSelectOptionLabelToHtml?t.join(this.options.displayDelimiter):n.join(this.options.displayDelimiter);if(r){if(i===0){let e=this.options.placeholder||``;r.classList.add(`ms-placeholder`),this.applyAsTextOrHtmlWhenEnabled(r,e)}else a=i<this.options.minimumCountSelected?o():this.formatAllSelected()&&i===this.dataTotal?this.formatAllSelected():this.options.ellipsis&&i>this.options.minimumCountSelected?`${n.slice(0,this.options.minimumCountSelected).join(this.options.displayDelimiter)}...`:this.formatCountSelected(i,this.dataTotal)&&i>this.options.minimumCountSelected?this.formatCountSelected(i,this.dataTotal):o();if(a!==null&&(r?.classList.remove(`ms-placeholder`),this.applyAsTextOrHtmlWhenEnabled(r,a)),this.options.showClear&&this.selectClearElm){let e=a?`block`:`none`;this.selectClearElm.style.display=e}if(this.options.displayTitle){let e=this.options.useSelectOptionLabel||this.options.useSelectOptionLabelToHtml?`value`:`text`;r.title=this.getSelects(e).join(this.options.displayDelimiter)}}if(this.elm instanceof HTMLSelectElement){let e=this.getSelects();this.options.single?this.elm.value=e.length?e[0]:``:Array.from(this.elm.options).forEach(t=>{t.selected=e.some(e=>e===t.value)})}e||this.elm.dispatchEvent(new Event(`change`))}updateSelected(e){for(let e=this.updateDataStart;e<this.updateDataEnd;e++){let t=this.updateData[e],n=this.dropElm?.querySelector(`input[data-key=${t._key}]`);if(n){n.checked=t.selected;let e=n.closest(`li`),r=e?.querySelector(`.icon-checkbox-container div`);if(e){let i=!1;`children`in t&&t.children.some(e=>e?.selected)&&(i=!0),t.selected&&!e.classList.contains(`selected`)?(e.classList.add(`selected`),e.ariaSelected=`true`,r&&(r.className=`ms-icon ms-icon-${n.type===`radio`?`radio`:`check`}`)):t.selected||(e.classList.remove(`selected`),e.ariaSelected=`false`,r&&(r.className=`ms-icon ms-icon-${i?`partial-group`:`uncheck`}`))}}}let t=!this.data?.some(e=>e.visible);if(this.selectAllElm){this.selectAllElm.ariaChecked=String(this.isAllSelected);let e=this.dropElm?.querySelector(`.ms-select-all .icon-checkbox-container div`);if(e){let t=``;t=this.isAllSelected?`ms-icon-check`:this.isPartiallyAllSelected?`ms-icon-partial-all`:`ms-icon-uncheck`,e.className=`ms-icon ${t}`}this.selectAllElm.checked=this.isAllSelected,rd(this.selectAllElm.closest(`li`),!t)}rd(this.noResultsElm,t),this.virtualScroll&&(this.virtualScroll.rows=e??this.getListRows())}getData(){return this.options.data}getDataLength(){return this.data?.length??0}getOptions(e=!0){let t=Object.assign({},this.options);return delete t.data,e?Ru(t):this.options}refreshOptions(e){Lu(this.options,e,!0)||(this.options=Object.assign(this.options,e),this.destroy(!1),this.init())}getDropElement(){return this.dropElm}getParentElement(){return this.parentElm}getSelects(e=`value`){let t=[];for(let n of this.data||[])if(n.type===`optgroup`){let r=n.children.filter(e=>e?.selected);if(!r.length)continue;if(e===`value`||this.options.single)t.push(...r.map(t=>e===`value`&&t._value||t[e]));else{let i=[];i.push(`[`),i.push(n.label),i.push(`: ${r.map(t=>t[e]).join(`, `)}`),i.push(`]`),t.push(i.join(``))}}else n.selected&&t.push(e===`value`&&n._value||n[e]);return t}setSelects(e,t=`value`,n=!1){let r=!1,i=n=>{for(let i of n){let n=!1;if(t===`text`){let t=document.createElement(`div`);this.applyAsTextOrHtmlWhenEnabled(t,i.text),n=e.includes(t.textContent?.trim()??``)}else i&&(n=e.includes(i._value||i.value),!n&&i.value===`${+i.value}`&&(n=e.includes(+i.value)));i&&(i.selected!==n&&(r=!0),i.selected=n)}};for(let e of this.data||[])e.type===`optgroup`?i(e.children):i([e]);r&&(this.initSelected(n),this.updateSelected(),this.update(n))}enable(){this.choiceElm&&(this.choiceElm.classList.remove(`disabled`),this.choiceElm.disabled=!1)}disable(){this.choiceElm&&(this.choiceElm?.classList.add(`disabled`),this.choiceElm.disabled=!0)}check(e){let t=Hu(this.data,`value`,e);t&&this._check(t,!0)}uncheck(e){let t=Hu(this.data,`value`,e);t&&this._check(t,!1)}_check(e,t){this.options.single&&this._checkAll(!1,!0),e.selected=t,this.initSelected(),this.updateSelected(),this.update()}checkAll(){this._checkAll(!0)}uncheckAll(){this._checkAll(!1)}setData(e,t=!1){Yu(this.elm),this.ulElm?.remove(),this.options.data=e,this.initData(),this.initList(t),this.update(),this.adjustDropSizeAndPosition()}_checkAll(e,t){for(let n of this.data||[])n.type===`optgroup`?this._checkGroup(n,e,!0):!n.disabled&&!n.divider&&(t||n.visible)&&(n.selected=e);t||(this.initSelected(),this.updateSelected(),this.update())}_checkGroup(e,t,n){e.selected=t,e.children.forEach(e=>{e&&!e.disabled&&!e.divider&&(n||e.visible)&&(e.selected=t)}),n||(this.initSelected(),this.updateSelected(),this.update())}checkInvert(){if(!this.options.single){for(let e of this.data||[])if(e.type===`optgroup`)for(let t of e.children)t&&(t.divider||(t.selected=!t.selected));else e&&!e.divider&&(e.selected=!e.selected);this.initSelected(),this.updateSelected(),this.update()}}focus(){this.choiceElm?.focus(),this.options.onFocus()}blur(){this.choiceElm?.blur(),this.options.onBlur()}refresh(){this.destroy(!1),this.init()}filter(e){let t=this.searchInputElm?.value.trim()??``,n=t.toLowerCase();if(this.filterText===n)return;this.filterText=n;for(let e of this.data||[])if(e.type===`optgroup`)if(this.options.filterGroup){let r=`${e?.label??``}`;if(e!=null){let i=this.options.customFilter({label:Wu(r.toString().toLowerCase(),this.options.diacriticParser),search:Wu(n,this.options.diacriticParser),originalLabel:r,originalSearch:t,row:e});e.visible=i;for(let t of e.children)t&&(t.visible=i)}}else{for(let r of e.children)if(r!=null){let i=`${r?.text??``}`;r.visible=this.options.customFilter({text:Wu(i.toString().toLowerCase(),this.options.diacriticParser),search:Wu(n,this.options.diacriticParser),originalText:i,originalSearch:t,row:r,parent:e})}e.visible=e.children.some(e=>e?.visible)}else{let r=`${e?.text??``}`;e.visible=this.options.customFilter({text:Wu(r.toString().toLowerCase(),this.options.diacriticParser),search:Wu(n,this.options.diacriticParser),originalText:r,originalSearch:t,row:e})}let r=this.initListItems();this.initSelected(e),this.updateSelected(r),e||this.options.onFilter(t)}adjustDropHeight(e){let t=e!==`top`,n=this.filterParentElm?.getBoundingClientRect().height??0,r=this.okButtonElm?.getBoundingClientRect().height??0,i=this.options.single?0:this.selectAllParentElm?.getBoundingClientRect().height??0,a=n+r+i+5,{bottom:o,top:s}=Gu(this.parentElm),c=this.options.maxHeight;if(c=t?o-a-this.options.adjustedHeightPadding:s-a-this.options.adjustedHeightPadding,!this.options.maxHeight||this.options.maxHeight&&c<this.options.maxHeight){let e=this.dropElm?.querySelector(`ul`);return e&&(e.style.maxHeight=`${c}px`),!0}return!1}adjustDropPosition(e){let t=`bottom`;if(this.dropElm&&this.parentElm){let{bottom:n,top:r}=Gu(this.dropElm),{top:i,left:a}=Xu(this.parentElm),o=this.dropElm.getBoundingClientRect().height,s=this.dropElm.getBoundingClientRect().width,c=document.body.offsetWidth||window.innerWidth,l=this.parentElm.getBoundingClientRect().width;if(n>o)t=`bottom`;else if(o>n&&r>n){if(this.options.container){let n=i-o;n<0&&(n=0),(n>0||e)&&(t=`top`,this.dropElm.style.top=`${n<0?0:n}px`)}else t=`top`,this.dropElm.classList.add(t);this.dropElm.classList.remove(`bottom`)}c-s<a&&(this.dropElm.style.left=`${a-(s-l)}px`)}return t}adjustDropWidthByText(){if(this.dropElm){let e=this.parentElm.scrollWidth;(this.options.dropWidth||this.options.width)&&(e=this.options.dropWidth||this.options.width||0);let t=this.dropElm.querySelector(`.ms-select-all span`),n=this.dropElm.querySelector(`ul`);if(n){let r=0,i=0,a=(t?.clientWidth??0)+i,o=n.scrollHeight>n.clientHeight?this.getScrollbarWidth():0;i+=Qu(n,`paddingLeft`)*2;let s=!1;for(let e of Array.from(n.querySelectorAll(`li`))){let t=e.querySelector(`label`),n=e.querySelector(`.icon-checkbox-container`),a=e.querySelector(`span`);t&&a?.textContent&&(s||=(i+=Qu(e,`paddingLeft`)*2,i+=Qu(t,`paddingLeft`)*2,i+=Qu(a,`paddingLeft`),i+=n?.offsetWidth??0,!0),a.offsetWidth>r&&(r=a.offsetWidth))}r+=i+o,r<a&&(r=a),this.options.maxWidth&&r>this.options.maxWidth&&(r=this.options.maxWidth),this.options.minWidth&&r<this.options.minWidth&&(r=this.options.minWidth),(e===`100%`||+e<r)&&(this.dropElm.style.minWidth=`auto`,this.dropElm.style.width=`${r}px`)}}}getScrollbarWidth(){let e=Q(`div`,{style:{visibility:`hidden`,width:`100px`}});document.body.appendChild(e);let t=e.offsetWidth;e.style.overflow=`scroll`;let n=Q(`div`,{style:{width:`100%`}});e.appendChild(n);let r=n.offsetWidth;return e.parentNode?.removeChild(e),t-r}formatAllSelected(){return this.options.allSelectedText||this.options.formatAllSelected()}formatCountSelected(e,t){return this.options.countSelectedText?this.options.countSelectedText.replace(`#`,`${e}`).replace(`%`,`${t}`):this.options.formatCountSelected(e,t)}formatNoMatchesFound(){return this.options.noMatchesFoundText||this.options.formatNoMatchesFound()}formatOkButton(){return this.options.okButtonText||this.options.formatOkButton()}formatLazyLoading(){return this.options.lazyLoadingText||this.options.formatLazyLoading()}formatLazyFailed(){return this.options.lazyFailedText||this.options.formatLazyFailed()}formatSelectAll(){return this.options.selectAllText||this.options.formatSelectAll()}},$=(e,t)=>typeof e==`string`?ld(document.querySelectorAll(e),t):e instanceof Node?ld([e],t):ld(e,t);function ld(e,t){let n=Array.from(e),r=[];for(let e=0;e<n.length;e++){let i=n[e];try{i._multipleSelect!==void 0&&(i._multipleSelect.destroy(),delete i._multipleSelect),i._multipleSelect=new cd(i,t||{}),i._multipleSelect.init();let n=i._multipleSelect.getOptions(!1);n.onHardDestroy=()=>delete i._multipleSelect,n.onAfterHardDestroy=()=>r[e]=null,r.push(i._multipleSelect)}catch(e){console.error(e)}}return r.length===1?r[0]:r}var ud=class{logElm;ms1;mount(){this.logElm=document.querySelector(`textarea`),this.ms1=$(`select`,{filter:!0,showSearchClear:!0,onBeforeOpen:()=>{this.log(`onBeforeOpen event fire!
`)},onOpen:()=>{this.log(`onOpen event fire!
`)},onBeforeClose:e=>{this.log(`onBeforeClose event fire! Reason: "${e}"\n`)},onClose:e=>{this.log(`onClose event fire! Reason: "${e}"\n`)},onCheckAll:()=>{this.log(`onCheckAll event fire!
`)},onUncheckAll:()=>{this.log(`onUncheckAll event fire!
`)},onFocus:()=>{this.log(`onFocus event fire!
`)},onBlur:()=>{this.log(`onBlur event fire!
`)},onOptgroupClick:e=>{this.log(`onOptgroupClick event fire! view: ${JSON.stringify(e)}\n`)},onClick:e=>{this.log(`onClick event fire! view: ${JSON.stringify(e)}\n`)},onFilter:e=>{this.log(`onFilter event fire! text: ${e}\n`)},onFilterClear:()=>{this.log(`onFilterClear event fire!
`)},onAfterCreate:()=>{this.log(`onAfterCreate event fire!
`)},onChange:e=>{this.log(`onChange event fire! data: ${JSON.stringify(e)}\n`)}})}log(e){this.logElm.textContent+=e,this.logElm.scrollTo(0,this.logElm.scrollHeight)}unmount(){this.ms1?.destroy(),this.ms1=void 0}},dd=class{ms=[];mount(){this.ms=$(`.multiple-select`)}unmount(){this.ms.forEach(e=>e.destroy()),this.ms=[]}},fd=class{ms=[];mount(){this.ms=$(`.multiple-select`)}unmount(){this.ms.forEach(e=>e.destroy()),this.ms=[]}},pd=class{ms=[];mount(){this.ms=$(`select`,{multiple:!0,multipleWidth:70})}unmount(){this.ms.forEach(e=>e.destroy()),this.ms=[]}},md=class{multiMs=[];singleMs;mount(){this.multiMs=$(`.select`),this.singleMs=$(`.data`,{data:[{value:1,text:`Options 1`,selected:!0},{value:2,text:`Options 2`},{value:3,text:`Options 3`}]})}unmount(){this.multiMs.forEach(e=>e.destroy()),this.multiMs=[],this.singleMs?.destroy(),this.singleMs=void 0}},hd=class{ms1;mount(){this.ms1=$(`select`)}unmount(){this.ms1?.destroy(),this.ms1=void 0}},gd=class{ms=[];mount(){this.ms=$(`select`)}unmount(){this.ms.forEach(e=>e.destroy()),this.ms=[]}},_d=class{btnElm;ms=[];mount(){this.ms=$(`select`),this.btnElm=document.querySelector(`.submit7`),this.btnElm.addEventListener(`click`,this.clickListener)}unmount(){this.btnElm.removeEventListener(`click`,this.clickListener),this.ms.forEach(e=>e.destroy()),this.ms=[]}clickListener=()=>{let e=this.serialize(document.querySelector(`form`));alert(e)};serialize(e){let t=[];return e.querySelectorAll(`[name]`).forEach(e=>{let n=Array.from(e.selectedOptions);for(let r of n)t.push(`${e.name}=${r.value}`)}),t.length>0?t.join(`&`):!1}},vd=class{ms1;ms2;ms3;ms4;ms5;mount(){this.ms1=$(`#basic`,{dataTest:`select1`,data:[{text:`January`,value:1},{text:`February`,value:2},{text:`March`,value:3},{text:`April`,value:4},{text:`May`,value:5},{text:`June`,value:6},{text:`July`,value:7},{text:`August`,value:8},{text:`September`,value:9},{text:`October`,value:10},{text:`November`,value:11},{text:`December`,value:12}]}),this.ms2=$(`#object`,{dataTest:`select2`,data:{1:`January`,2:`February`,3:`March`,4:`April`,5:`May`,6:`June`,7:`July`,8:`August`,9:`September`,10:`October`,11:`November`,12:`December`}}),this.ms3=$(`#string`,{dataTest:`select3`,data:[`January`,`February`,`March`]}),this.ms4=$(`#number`,{dataTest:`select4`,data:[1,2,3]}),this.ms5=$(`#group`,{dataTest:`select5`,single:!1,data:[{type:`optgroup`,label:`Group 1`,children:[{text:`January`,value:1,selected:!0},{text:`February`,value:2,disabled:!0},{text:`March`,value:3},{text:`April`,value:4},{text:`May`,value:5},{text:`June`,value:6}]},{type:`optgroup`,label:`Group 2`,children:[{text:`July`,value:7},{text:`August`,value:8},{text:`September`,value:9},{text:`October`,value:10},{text:`November`,value:11},{text:`December`,value:12}]}]})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms3?.destroy(),this.ms4?.destroy(),this.ms5?.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0}},yd={formatSelectAll(){return`[Seleccionar todo]`},formatAllSelected(){return`Todos seleccionados`},formatCountSelected(e,t){return`${e} de ${t} seleccionado`},formatNoMatchesFound(){return`No se encontraron coincidencias`},formatOkButton(){return`Cerrar`},formatLazyLoading(){return`Cargando...`},formatLazyFailed(){return`Error al cargar los datos`}},bd={"cz-CS":{formatSelectAll(){return`[Vybrat vše]`},formatAllSelected(){return`Vše vybráno`},formatCountSelected(e,t){return`${e} z ${t} vybr\xE1no`},formatNoMatchesFound(){return`Nebylo nalezeno`},formatOkButton(){return`Zavřít`},formatLazyLoading(){return`Načítám se...`},formatLazyFailed(){return`Nepodařilo se načíst data`}},"da-DK":{formatSelectAll(){return`[Vælg alle]`},formatAllSelected(){return`Alle valgt`},formatCountSelected(e,t){return`${e} af ${t} valgt`},formatNoMatchesFound(){return`Søgning uden resultat`},formatOkButton(){return`Lukke`},formatLazyLoading(){return`Indlæser nu...`},formatLazyFailed(){return`Kunne ikke indlæse data`}},"de-DE":{formatSelectAll(){return`[Alles auswählen]`},formatAllSelected(){return`Alles ausgewählt`},formatCountSelected(e,t){return`${e} von ${t} ausgew\xE4hlt`},formatNoMatchesFound(){return`Keine Ergebnisse`},formatOkButton(){return`Schließen`},formatLazyLoading(){return`Jetzt wird geladen...`},formatLazyFailed(){return`Daten konnten nicht geladen werden`}},"en-US":{formatSelectAll(){return`[Select all]`},formatAllSelected(){return`All selected`},formatCountSelected(e,t){return`${e} of ${t} selected`},formatNoMatchesFound(){return`No matches found`},formatOkButton(){return`OK`},formatLazyLoading(){return`Loading...`},formatLazyFailed(){return`Failed to load data`}},"es-ES":{formatSelectAll(){return`[Seleccionar todo]`},formatAllSelected(){return`Todos seleccionados`},formatCountSelected(e,t){return`${e} de ${t} seleccionado`},formatNoMatchesFound(){return`No se encontraron coincidencias`},formatOkButton(){return`Cerrar`},formatLazyLoading(){return`Cargando...`},formatLazyFailed(){return`Error al cargar los datos`}},"fr-FR":{formatSelectAll(){return`[Tout sélectionner]`},formatAllSelected(){return`Tous sélectionnés`},formatCountSelected(e,t){return`${e} de ${t} s\xE9lectionn\xE9s`},formatNoMatchesFound(){return`Aucun résultat`},formatOkButton(){return`Fermer`},formatLazyLoading(){return`Chargement...`},formatLazyFailed(){return`Échec de chargement des données`}},"hu-HU":{formatSelectAll(){return`[Összes kiválasztása]`},formatAllSelected(){return`Összes kiválasztva`},formatCountSelected(e,t){return`${e} / ${t} kiv\xE1lasztva`},formatNoMatchesFound(){return`Nincs találat`},formatOkButton(){return`Bezár`},formatLazyLoading(){return`Most betöltés...`},formatLazyFailed(){return`Az adatok betöltése nem sikerült`}},"id-ID":{formatSelectAll(){return`[Pilih Semua]`},formatAllSelected(){return`Semua Dipilih`},formatCountSelected(e,t){return`${e} dari ${t} dipilih`},formatNoMatchesFound(){return`Tidak ditemukan`},formatOkButton(){return`Tutup`},formatLazyLoading(){return`Memuat...`},formatLazyFailed(){return`Gagal memuat data`}},"it-IT":{formatSelectAll(){return`[Seleziona tutti]`},formatAllSelected(){return`Tutti selezionati`},formatCountSelected(e,t){return`${e} di ${t} selezionati`},formatNoMatchesFound(){return`Nessun risultato`},formatOkButton(){return`Chiudere`},formatLazyLoading(){return`Caricamento...`},formatLazyFailed(){return`Impossibile caricare i dati`}},"ja-JP":{formatSelectAll(){return`[すべて選択]`},formatAllSelected(){return`すべて選択`},formatCountSelected(e,t){return`${t} \u4EF6\u4E2D ${e} \u4EF6\u9078\u629E`},formatNoMatchesFound(){return`見つかりません`},formatOkButton(){return`閉める`},formatLazyLoading(){return`積載...`},formatLazyFailed(){return`データの読み込みに失敗しました`}},"ko-KR":{formatSelectAll(){return`[전체선택]`},formatAllSelected(){return`전체 선택됨`},formatCountSelected(e,t){return`${e}/${t} \uC120\uD0DD\uB428`},formatNoMatchesFound(){return`검색 결과가 없습니다.`},formatOkButton(){return`닫다`},formatLazyLoading(){return`로딩 중...`},formatLazyFailed(){return`데이터를 불러오지 못했습니다`}},"pt-BR":{formatSelectAll(){return`[Selecionar todos]`},formatAllSelected(){return`Todos selecionados`},formatCountSelected(e,t){return`${e} de ${t} selecionado(s)`},formatNoMatchesFound(){return`Nenhum resultado encontrado`},formatOkButton(){return`Fechar`},formatLazyLoading(){return`Carregamento...`},formatLazyFailed(){return`Falha ao carregar os dados`}},"ru-RU":{formatSelectAll(){return`[Выбрать все]`},formatAllSelected(){return`Выбрано все`},formatCountSelected(e,t){return`${e} \u0438\u0437 ${t} \u0432\u044B\u0431\u0440\u0430\u043D\u043E`},formatNoMatchesFound(){return`Совпадений не найдено`},formatOkButton(){return`Закрывать`},formatLazyLoading(){return`погрузка...`},formatLazyFailed(){return`Не удалось загрузить данные`}},"vi-VN":{formatSelectAll(){return`[Tất cả]`},formatAllSelected(){return`Chọn tất cả`},formatCountSelected(e,t){return`\u0110\xE3 ch\u1ECDn ${e} trong ${t}`},formatNoMatchesFound(){return`Không tìm thấy kết quả.`},formatOkButton(){return`Đóng`},formatLazyLoading(){return`Tải...`},formatLazyFailed(){return`Không tải được dữ liệu`}},"zh-CN":{formatSelectAll(){return`[全选]`},formatAllSelected(){return`已选择所有记录`},formatCountSelected(e,t){return`\u5DF2\u4ECE${t}\u6761\u8BB0\u5F55\u4E2D\u9009\u62E9${e}\u6761`},formatNoMatchesFound(){return`没有找到记录`},formatOkButton(){return`关闭`},formatLazyLoading(){return`加载...`},formatLazyFailed(){return`数据加载失败`}},"zh-TW":{formatSelectAll(){return`[全選]`},formatAllSelected(){return`已選擇所有記錄`},formatCountSelected(e,t){return`\u5DF2\u5F9E${t}\u689D\u8A18\u9304\u4E2D\u9078\u64C7${e}\u689D`},formatNoMatchesFound(){return`沒有找到記錄`},formatOkButton(){return`關閉`},formatLazyLoading(){return`加載...`},formatLazyFailed(){return`資料載入失敗`}}},xd=class{ms0;ms1;ms2;mount(){let e=document.querySelector(`#locale`);e.addEventListener(`change`,(e=>{this.updateLocale(e.target.value)})),this.ms0=$(e,{maxHeight:400}),this.ms1=$(`#dynamic-select`,{filter:!0,showOkButton:!0,dataTest:`select1`,locales:bd}),this.ms2=$(`#fixed-import`,{filter:!0,showOkButton:!0,dataTest:`select2`,locale:yd})}unmount(){this.ms0?.destroy(),this.ms1?.destroy(),this.ms2?.destroy(),this.ms0=void 0,this.ms1=void 0,this.ms2=void 0}updateLocale(e){this.ms1?.destroy(),this.ms1?.refreshOptions({locale:e})}},Sd=class{ms1;ms2;mount(){let e=[],t=[];for(let t=0;t<1e4;t++)e.push(t);for(let e=0;e<1e4;e++)t.push({text:`<i class="fa fa-star"></i> Task ${e}`,value:e});this.ms1=$(`#select1`,{filter:!0,data:e,showSearchClear:!0}),this.ms2=$(`#select2`,{filter:!0,data:t,showSearchClear:!0,useSelectOptionLabelToHtml:!0})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms1=void 0,this.ms2=void 0}},Cd=class{ms=[];mount(){this.ms=$(`select`)}unmount(){this.ms.forEach(e=>e.destroy()),this.ms=[]}},wd=class{ms1;ms2;mount(){this.ms1=$(`#single`,{singleRadio:!0}),this.ms2=$(`#multiple`,{showOkButton:!0})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms1=void 0,this.ms2=void 0}},Td=class{createBtnElm;destroyBtnElm;modifyBtnElm;ms1;mount(){this.createBtnElm=document.querySelector(`#createBtn`),this.destroyBtnElm=document.querySelector(`#destroyBtn`),this.modifyBtnElm=document.querySelector(`#modifyBtn`),this.createBtnElm.addEventListener(`click`,this.createMultipleSelect.bind(this)),this.destroyBtnElm.addEventListener(`click`,this.destroyMultiSelect.bind(this)),this.modifyBtnElm.addEventListener(`click`,this.modifyData.bind(this))}createMultipleSelect(){this.ms1=$(`#select1`,{name:`my-select`,single:!1,useSelectOptionLabelToHtml:!0,sanitizer:e=>Eu.sanitize(e,{RETURN_TRUSTED_TYPE:!0}),data:[{text:`<i class="fa fa-star"></i> January`,value:1},{text:`February`,value:2},{text:`March`,value:3},{text:`April`,value:4},{text:`May`,value:5},{text:`June`,value:6},{text:`July`,value:7},{text:`August`,value:8},{text:`September`,value:9},{text:`October`,value:10},{text:`November`,value:11},{text:`December`,value:12}]}),this.ms1.setSelects([1,3,4])}destroyMultiSelect(){console.log(`destroy`),this.ms1?.destroy(),this.ms1=void 0}modifyData(){this.ms1?.refreshOptions({data:[{value:1,text:`Options 1`},{value:2,text:`Options 2`},{value:3,text:`Options 3`,selected:!0},{value:4,text:`Options 4`,selected:!0},{value:5,text:`Options 5`}]})}unmount(){this.destroyMultiSelect(),this.createBtnElm.removeEventListener(`click`,this.createMultipleSelect.bind(this)),this.destroyBtnElm.removeEventListener(`click`,this.destroyMultiSelect.bind(this)),this.modifyBtnElm.removeEventListener(`click`,this.modifyData.bind(this))}},Ed=class{ms1=[];ms2=[];mount(){this.ms1=$(`.select`),this.ms2=$(`.data-select`,{dataTest:`select1`,data:[{value:1,text:`Option 1`},{value:2,text:`Option 2`},{value:3,text:`Option 3`},{divider:!0},{value:4,text:`Option 4`},{value:5,text:`Option 5`},{value:6,text:`Option 6`}]})}unmount(){this.ms1.forEach(e=>e.destroy()),this.ms2.forEach(e=>e.destroy()),this.ms1=[],this.ms2=[]}},Dd=class{ms1;ms2;ms3;ms4;ms5;darkMode=!0;mount(){document.querySelector(`.panel-wm-content`)?.classList.add(`dark-mode`),this.ms1=$(`select[data-test=single]`,{darkMode:!0}),this.ms2=$(`select[data-test=radio]`,{darkMode:!0,singleRadio:!0}),this.ms3=$(`select[data-test=multiple]`,{darkMode:!0}),this.ms4=$(`select[data-test=group]`,{darkMode:!0}),this.ms5=$(`select[data-test=data1]`,{darkMode:!0,dataTest:`select1`,filter:!0,showOkButton:!0,showClear:!0,showSearchClear:!0,data:[{value:1,text:`Option 1`},{value:2,text:`Option 2`},{value:3,text:`Option 3`},{divider:!0},{value:4,text:`Option 4`},{value:5,text:`Option 5`},{value:6,text:`Option 6`}]})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms3?.destroy(),this.ms4?.destroy(),this.ms5?.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0,document.querySelector(`.panel-wm-content`)?.classList.remove(`dark-mode`)}},Od=``+new URL(`avatar1-Dfqkz6jG.png`,import.meta.url).href,kd=``+new URL(`avatar2-C5pX2a2d.png`,import.meta.url).href,Ad=``+new URL(`avatar3-COtlxv_R.png`,import.meta.url).href,jd=``+new URL(`avatar4-Dom6eBE9.png`,import.meta.url).href,Md=``+new URL(`avatar5-B_ltAQdV.png`,import.meta.url).href,Nd=class{ms1;ms2;mount(){this.ms1=$(`[data-test=select1]`,{data:[{value:`1`,text:`<img alt="avatar1" src="${Od}" class="avatar"> Eric`},{value:`2`,text:`<img alt="avatar2" src="${kd}" class="avatar"> Smith`},{value:`3`,text:`<img alt="avatar3" src="${Ad}" class="avatar"> Erika`},{value:`4`,text:`<img alt="avatar4" src="${jd}" class="avatar"> Julia`},{value:`5`,text:`<img alt="avatar5" src="${Md}" class="avatar"> Catherine`}],renderOptionLabelAsHtml:!0}),this.ms2=$(`[data-test=select2]`,{singleRadio:!0,renderOptionLabelAsHtml:!0,textTemplate:e=>{let[t,n]=e.textContent.split(`::`);return`<div class="image-container"><img alt="avatar${e.value}" src="${this.getAvatarByIdx(e.value)}" class="avatar"><div class="text-container"><div class="name-section">${t}</div><div class="job-section">${n}</div></div></div>`},sanitizer:e=>Eu.sanitize(e,{RETURN_TRUSTED_TYPE:!0})})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms1=void 0,this.ms2=void 0}getAvatarByIdx(e){let t;switch(+e){case 1:t=Od;break;case 2:t=kd;break;case 3:t=Ad;break;case 4:t=jd;break;case 5:t=Md;break}return t}},Pd=class{},Fd=class{ms1;mount(){this.ms1=$(`select`,{filter:!0,showOkButton:!0,formatAllSelected(){return`Tous sélectionnés`},formatCountSelected(e,t){return`${e} de ${t} sélectionnés`},formatNoMatchesFound(){return`Aucun résultat`},formatOkButton(){return`Fermer`},formatSelectAll(){return`[Tout sélectionner]`}})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Id=class{ms1;mount(){this.ms1=$(`select`,{filter:!0}),document.querySelector(`#getOptions`).addEventListener(`click`,()=>{alert(JSON.stringify(this.ms1.getOptions(),null,4))})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Ld=class{ms1;ms2;darkMode2=!1;mount(){this.ms1=$(`.select1`,{filter:!0}),this.ms2=$(`.select2`,{darkMode:this.darkMode2,showOkButton:!0}),document.querySelector(`#refreshOptions`)?.addEventListener(`click`,()=>this.refreshOption1()),document.querySelector(`#setDarkMode`)?.addEventListener(`click`,()=>this.toggleDarkMode2())}refreshOption1(){this.ms1?.refreshOptions({filter:!1})}toggleDarkMode2(){this.darkMode2=!this.darkMode2,this.ms2?.refreshOptions({darkMode:this.darkMode2})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms1=void 0,this.ms2=void 0,document.querySelector(`#refreshOptions`)?.removeEventListener(`click`,()=>this.refreshOption1()),document.querySelector(`#setDarkMode`)?.removeEventListener(`click`,()=>this.toggleDarkMode2())}},Rd=class{ms1;mount(){this.ms1=$(`select`,{filter:!0}),document.querySelector(`#setSelectsBtn`).addEventListener(`click`,()=>{this.ms1?.setSelects([1,3])}),document.querySelector(`#getSelectsBtn`).addEventListener(`click`,()=>{alert(`Selected values: ${this.ms1?.getSelects()}`),alert(`Selected texts: ${this.ms1?.getSelects(`text`)}`)}),document.querySelector(`#setSelectsBtn2`).addEventListener(`click`,()=>{this.ms1?.setSelects([`February`,`April`],`text`)}),document.querySelector(`#getSelectsBtn2`).addEventListener(`click`,()=>{alert(`Selected values: ${this.ms1?.getSelects(`text`)}`)})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},zd=class{ms1;mount(){this.ms1=$(`select`),document.querySelector(`#enableBtn`).addEventListener(`click`,()=>{this.ms1?.enable()}),document.querySelector(`#disableBtn`).addEventListener(`click`,()=>{this.ms1?.disable()})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Bd=class{ms1;mount(){this.ms1=$(`select`),document.querySelector(`#openBtn`).addEventListener(`click`,()=>{this.ms1?.open()}),document.querySelector(`#closeBtn`).addEventListener(`click`,()=>{this.ms1?.close()})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Vd=class{ms=[];mount(){this.ms=$(`select`),document.querySelector(`#checkBtn`).addEventListener(`click`,()=>{for(let e of this.ms)e.check(2)}),document.querySelector(`#uncheckBtn`).addEventListener(`click`,()=>{for(let e of this.ms)e.uncheck(2)})}unmount(){this.ms.forEach(e=>e.destroy()),this.ms=[]}},Hd=class{ms=[];mount(){this.ms=$(`select`),document.querySelector(`#checkAllBtn`).addEventListener(`click`,()=>{for(let e of this.ms)e.checkAll()}),document.querySelector(`#uncheckAllBtn`).addEventListener(`click`,()=>{for(let e of this.ms)e.uncheckAll()})}unmount(){this.ms.forEach(e=>e.destroy()),this.ms=[]}},Ud=class{ms=[];mount(){this.ms=$(`select`),document.querySelector(`#checkInvert`).addEventListener(`click`,()=>{for(let e of this.ms)e.checkInvert()})}unmount(){this.ms.forEach(e=>e.destroy()),this.ms=[]}},Wd=class{ms1;mount(){this.ms1=$(`select`),document.querySelector(`#focusBtn`).addEventListener(`click`,()=>{this.ms1?.focus()}),document.querySelector(`#blurBtn`).addEventListener(`click`,()=>{this.ms1?.blur()})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Gd=class{ms1;mount(){let e=document.querySelector(`select`);this.ms1=$(e),document.querySelector(`#refreshAdd`).addEventListener(`click`,()=>{let t=document.querySelector(`#refreshInput`),n=document.querySelector(`#refreshSelected`),r=document.querySelector(`#refreshDisabled`),i=t.value.trim(),a=document.createElement(`option`);if(a.value=i,a.text=i,!i){t.focus();return}n.checked&&(a.selected=!0),r.checked&&(a.disabled=!0),t.value=``,e.appendChild(a),this.ms1?.refresh()})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Kd=class{buildBtnElm;destroyBtnElm;ms1;mount(){this.buildBtnElm=document.querySelector(`#buildBtn`),this.destroyBtnElm=document.querySelector(`#destroyBtn`),this.destroyBtnElm.addEventListener(`click`,this.destroyMultiSelect.bind(this)),this.buildBtnElm.addEventListener(`click`,this.createMultipleSelect.bind(this)),this.ms1=$(`select`)}createMultipleSelect(){this.ms1=$(`select`)}destroyMultiSelect(){this.ms1?.destroy(),this.ms1=null}unmount(){this.destroyMultiSelect(),this.buildBtnElm.removeEventListener(`click`,this.destroyMultiSelect.bind(this)),this.destroyBtnElm.removeEventListener(`click`,this.createMultipleSelect.bind(this))}},qd=class{ms1;mount(){this.ms1=$(`select`,{filter:!0}),document.querySelector(`#getData`).addEventListener(`click`,()=>{console.log(`tt`,JSON.stringify(this.ms1.getData())),alert(JSON.stringify(this.ms1.getData(),null,4))})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Jd=class{ms1;mount(){this.ms1=$(`select`,{filter:!0}),document.querySelector(`#setData-basic`).addEventListener(`click`,()=>{this.ms1.setData([{text:`Basic One`,value:`basic1`},{text:`Basic Two`,value:`basic2`},{text:`Basic Three`,value:`basic3`}])}),document.querySelector(`#setData-object`).addEventListener(`click`,()=>{this.ms1.setData({obj1:`Object One`,obj2:`Object Two`,obj3:`Object Three`})}),document.querySelector(`#setData-string`).addEventListener(`click`,()=>{this.ms1.setData([`String One`,`String Two`,`String Three`])}),document.querySelector(`#setData-group`).addEventListener(`click`,()=>{this.ms1.setData([{type:`optgroup`,label:`Group 1`,children:[{text:`Group One`,value:`group1`,type:`option`},{text:`Group Two`,value:`group2`,type:`option`}]},{type:`optgroup`,label:`Group 2`,children:[{text:`Group Three`,value:`group3`,type:`option`}]}])})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Yd=class{ms1;ms2;mount(){this.ms1=$(`#select1`),this.ms2=$(`#select2`,{placeholder:`Here is the placeholder via javascript`})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms1=void 0,this.ms2=void 0}},Xd=class{ms=[];mount(){this.ms=$(`select`,{singleRadio:!0})}unmount(){this.ms.forEach(e=>e.destroy()),this.ms=[]}},Zd=class{ms1;mount(){this.ms1=$(`select`,{selectAll:!1})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Qd=class{ms1;mount(){this.ms1=$(`select`,{multiple:!0,hideOptgroupCheckboxes:!0,multipleWidth:70})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},$d=class{ms1;mount(){this.ms1=$(`select`,{multiple:!0,width:500,multipleWidth:70,dropWidth:580})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},ef=class{ms1;mount(){this.ms1=$(`select`,{maxHeight:140})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},tf=class{ms=[];mount(){let e=document.querySelector(`#number`);this.ms=$(`select`,{maxHeight:+e.value,maxHeightUnit:`row`}),e.addEventListener(`change`,()=>{this.ms.forEach(t=>{t.refreshOptions({maxHeight:+e.value,maxHeightUnit:`row`})})})}unmount(){this.ms.forEach(e=>e.destroy()),this.ms=[]}},nf=class{ms1;mount(){this.ms1=$(`select`,{position:`top`})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},rf=class{ms1;mount(){this.ms1=$(`select`,{displayValues:!0})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},af=class{ms1;mount(){this.ms1=$(`select`,{displayTitle:!0})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},of=class{ms1;mount(){this.ms1=$(`select`,{displayDelimiter:` | `})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},sf=class{ms1;mount(){this.ms1=$(`select`,{minimumCountSelected:8})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},cf=class{ms1;mount(){this.ms1=$(`select`,{ellipsis:!0,minimumCountSelected:5})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},lf=class{ms1;mount(){this.ms1=$(`select`,{isOpen:!0})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},uf=class{ms1;mount(){this.ms1=$(`select`,{keepOpen:!0})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},df=class{ms1;mount(){this.ms1=$(`select`,{openOnHover:!0})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},ff=class{ms1;ms2;ms3;ms4;mount(){this.ms1=$(`.select1`),this.ms2=$(`.select2`),this.ms3=$(`.select3`,{container:`.my-container`}),this.ms4=$(`.select4`,{autoAdjustDropPosition:!0,container:`body`})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms3?.destroy(),this.ms4?.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},pf=class{ms=[];mount(){this.ms=$(`select`,{filter:!0})}unmount(){this.ms.forEach(e=>e.destroy()),this.ms=[]}},mf=class{ms1;mount(){this.ms1=$(`select`,{filter:!0,filterGroup:!0})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},hf=class{ms1;mount(){this.ms1=$(`select`,{filter:!0,filterPlaceholder:`The filter placeholder`})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},gf=class{ms=[];mount(){this.ms=$(`select`,{filter:!0,filterAcceptOnEnter:!0})}unmount(){this.ms.forEach(e=>e.destroy()),this.ms=[]}},_f=class{ms=[];mount(){this.ms=$(`select`,{filterByDataLength:10})}unmount(){this.ms.forEach(e=>e.destroy()),this.ms=[]}},vf=class{ms1;mount(){this.ms1=$(`select`,{filter:!0,customFilter:({text:e,search:t,originalText:n,originalSearch:r})=>document.querySelector(`input`).checked?n.indexOf(r)===0:e.indexOf(t)===0})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},yf=class{ms=[];mount(){this.ms=$(`select`,{showClear:!0})}unmount(){this.ms.forEach(e=>e.destroy()),this.ms=[]}},bf=class{ms=[];mount(){this.ms.push($(`.select1`,{showOkButton:!0})),this.ms.push($(`.select2`,{showOkButton:!0})),this.ms.push($(`.select3`,{showOkButton:!0,filter:!0})),this.ms.push($(`.select4`,{showOkButton:!0}))}unmount(){this.ms.forEach(e=>e.destroy()),this.ms=[]}},xf=class{ms1;ms2;mount(){this.ms1=$(`[data-test="select3"]`,{cssStyler:e=>+(e?.value??0)==2?{backgroundColor:`#6fbeff`,color:`#0014ff`,fontStyle:`italic`}:+(e?.value??0)==4?{backgroundColor:`#972727`,color:`#fff`}:null}),this.ms2=$(`[data-test="select4"]`,{cssStyler:e=>e?.type===`optgroup`?{color:`#787878`,fontWeight:`normal`}:+(e?.value??0)==3?{color:`purple`,textDecoration:`underline`}:null})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms1=void 0,this.ms2=void 0}},Sf=class{ms1;ms2;btnEnableElm;btnDisableElm;mount(){this.ms1=$(`#basic`,{filter:!0,displayTitle:!0,renderOptionLabelAsHtml:!0,textTemplate:e=>`<i class="fa fa-star"></i>${e.innerHTML}`,customFilter:({search:e,text:t})=>{let n=document.createElement(`div`);return n.innerHTML=t,n.textContent?.includes(e)??!0},sanitizer:e=>Eu.sanitize(e,{RETURN_TRUSTED_TYPE:!0})}),this.ms2=$(`#from-data`,{dataTest:`select1`,displayTitle:!0,renderOptionLabelAsHtml:!0,data:[{value:`50"`,text:`50"`},{value:`44'`,text:`44'`},{value:`33`,text:`<span style="font-weight:bold">33</span>`}],sanitizer:e=>Eu.sanitize(e,{RETURN_TRUSTED_TYPE:!0})}),this.btnEnableElm=document.querySelector(`#enableRenderHtml`),this.btnEnableElm.addEventListener(`click`,()=>this.renderAsHtmlHandler(!0)),this.btnDisableElm=document.querySelector(`#disableRenderHtml`),this.btnDisableElm.addEventListener(`click`,()=>this.renderAsHtmlHandler(!1))}renderAsHtmlHandler(e){this.ms1?.refreshOptions({renderOptionLabelAsHtml:e}),this.ms2?.refreshOptions({renderOptionLabelAsHtml:e})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms1=void 0,this.ms2=void 0,this.btnEnableElm?.removeEventListener(`click`,()=>this.renderAsHtmlHandler(!0)),this.btnDisableElm?.removeEventListener(`click`,()=>this.renderAsHtmlHandler(!1))}},Cf=class{ms1;mount(){this.ms1=$(`select`,{renderOptionLabelAsHtml:!0,labelTemplate:e=>`<i class="fa fa-star"></i>${e.getAttribute(`label`)}`})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},wf=class{ms=[];mount(){this.ms=$(`select`,{autoAdjustDropPosition:!0})}unmount(){this.ms.forEach(e=>e.destroy()),this.ms=[]}},Tf=class{ms1;ms2;ms3;ms4;mount(){this.ms1=$(`#select1`,{autoAdjustDropWidthByTextSize:!0,autoAdjustDropHeight:!0,position:`top`,showOkButton:!0,sanitizer:e=>Eu.sanitize(e,{RETURN_TRUSTED_TYPE:!0})}),this.ms2=$(`#select2`,{autoAdjustDropHeight:!0,position:`top`,showOkButton:!0,sanitizer:e=>Eu.sanitize(e,{RETURN_TRUSTED_TYPE:!0})}),this.ms3=$(`#select3`,{autoAdjustDropHeight:!0,filter:!0,position:`top`,sanitizer:e=>Eu.sanitize(e,{RETURN_TRUSTED_TYPE:!0})}),this.ms4=$(`#select4`)}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms3?.destroy(),this.ms4?.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},Ef=class{ms1;ms2;mount(){this.ms1=$(`#select1`,{useSelectOptionLabel:!0}),this.ms2=$(`#select2`,{useSelectOptionLabelToHtml:!0,sanitizer:e=>Eu.sanitize(e,{RETURN_TRUSTED_TYPE:!0}),data:[{text:`<i class="fa fa-star"></i> January`,value:`<i class="fa fa-star"></i>1`,selected:!0},{text:`February`,value:`2`},{text:`March`,value:3},{text:`April`,value:4},{text:`May`,value:5},{text:`June`,value:6},{text:`July`,value:7},{text:`August`,value:8},{text:`September`,value:9},{text:`October`,value:10},{text:`November`,value:11},{text:`December`,value:12}]})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms1=void 0,this.ms2=void 0}},Df=class{ms1;mount(){this.ms1=$(`#select1`,{data:[{value:`<strong style="color: green">Safe HTML value</strong>`,text:`1. Safe HTML example`},{value:'<img src="x" onerror="alert(`This should be removed by stripScripts`)">Blocked by stripScripts',text:`2. Payload blocked by stripScripts`},{value:`<iframe srcdoc="<script>alert('XSS')
<\/script>"></iframe>`,text:`3. Payload that bypasses stripScripts and executes`}],filter:!0,placeholder:`Placeholder with cross-site scripting code...&lt;script&gt;alert('XSS')&lt;/script&gt;`,useSelectOptionLabelToHtml:!0,sanitizer:e=>Eu.sanitize(e,{RETURN_TRUSTED_TYPE:!0})})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Of=class{ms=[];mount(){this.ms=$(`select`,{classes:`form-control`,classPrefix:`form-control`})}unmount(){this.ms.forEach(e=>e.destroy()),this.ms=[]}},kf=class{ms=[];mount(){this.ms=$(`select`,{filter:!0,showSearchClear:!0})}unmount(){this.ms.forEach(e=>e.destroy()),this.ms=[]}},Af={a:`ÀÁÂÃÄÅàáâãäåĀāąĄ`,c:`ÇçćĆčČ`,d:`đĐďĎ`,e:`ÈÉÊËèéêëěĚĒēęĘ`,i:`ÌÍÎÏìíîïĪī`,l:`łŁ`,n:`ÑñňŇńŃ`,o:`ÒÓÔÕÕÖØòóôõöøŌō`,r:`řŘ`,s:`ŠšśŚ`,t:`ťŤ`,u:`ÙÚÛÜùúûüůŮŪū`,y:`ŸÿýÝ`,z:`ŽžżŻźŹ`},jf=class{ms1;ms2;inLogElm;outLogElm;mount(){this.inLogElm=document.querySelector(`input.in-log`),this.outLogElm=document.querySelector(`input.out-log`),this.ms1=$(`#select1`,{filter:!0,showSearchClear:!0,filterPlaceholder:`🔎︎ search with "é", "û" or simply "u"`,diacriticParser:e=>{let t=e.split(``).map(e=>Object.keys(Af).find(t=>Af[t].includes(e))||e).join(``);return this.inLogElm.value=e,this.outLogElm.value=t,t}}),this.ms2=$(`#select2`,{filter:!0,showSearchClear:!0,filterPlaceholder:`🔎︎ search with "é", "û" or simply "u"`})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms1=void 0,this.ms2=void 0}},Mf=class{ms1;ms2;mount(){let e=[],t=[];for(let t=1;t<=25;t++)e.push({text:`Title ${t}`,value:t});for(let e=1;e<=2e3;e++)t.push({text:`<i class="fa fa-star"></i> Task ${e}`,value:e});this.ms1=$(`#select1`,{data:e,infiniteScroll:!0}),this.ms2=$(`#select2`,{filter:!0,data:t,showSearchClear:!0,useSelectOptionLabelToHtml:!0,infiniteScroll:!0})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms1=void 0,this.ms2=void 0}},Nf=class{ms1;ms2;ms3;ms4;mount(){this.ms1=$(`select[data-test=select1]`),this.ms2=$(`select[data-test=select2]`),this.ms3=$(`select[data-test=select3]`),this.ms4=$(`select[data-test=select4]`,{filter:!0})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms3?.destroy(),this.ms4?.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},Pf=class{pageContentElm=null;ms1;ms2;ms3;ms4;ms5;darkMode=!0;mount(){this.pageContentElm=document.querySelector(`.panel-wm-content`),this.pageContentElm?.classList.add(`dark-mode`),document.querySelector(`#setDarkMode`)?.addEventListener(`click`,()=>this.toggleDarkMode()),this.ms1=$(`select[data-test=single]`,{darkMode:!0}),this.ms2=$(`select[data-test=radio]`,{darkMode:!0,singleRadio:!0}),this.ms3=$(`select[data-test=multiple]`,{darkMode:!0}),this.ms4=$(`select[data-test=group]`,{darkMode:!0}),this.ms5=$(`select[data-test=data1]`,{darkMode:!0,dataTest:`select1`,filter:!0,showOkButton:!0,showClear:!0,showSearchClear:!0,data:[{value:1,text:`Option 1`},{value:2,text:`Option 2`},{value:3,text:`Option 3`},{divider:!0},{value:4,text:`Option 4`},{value:5,text:`Option 5`},{value:6,text:`Option 6`}]})}toggleDarkMode(){if(this.darkMode=!this.darkMode,this.ms1?.refreshOptions({darkMode:this.darkMode}),this.ms2?.refreshOptions({darkMode:this.darkMode}),this.ms3?.refreshOptions({darkMode:this.darkMode}),this.ms4?.refreshOptions({darkMode:this.darkMode}),this.ms5?.refreshOptions({darkMode:this.darkMode}),this.pageContentElm){let e=this.darkMode?`add`:`remove`;this.pageContentElm.classList[e](`dark-mode`)}}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms3?.destroy(),this.ms4?.destroy(),this.ms5?.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0,this.pageContentElm?.classList.remove(`dark-mode`),document.querySelector(`#setDarkMode`)?.removeEventListener(`click`,()=>this.toggleDarkMode())}},Ff=class{ms1;mount(){this.ms1=$(`select`,{labelId:`custom-label`})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},If=class{ms1;ms2;ms3;ms4;mount(){this.ms1=$(`select[data-test=select1]`,{filter:!0,preFilter:e=>e.value!==`1`&&e.value!==`3`}),this.ms2=$(`select[data-test=select2]`,{filter:!0,preFilter:e=>e.label!==`Group 2`}),this.ms3=$(`select[data-test=select3]`,{data:{1:`January`,2:`February`,3:`March`,4:`April`,5:`May`,6:`June`,7:`July`,8:`August`,9:`September`,10:`October`,11:`November`,12:`December`},preFilter:e=>e.value!==`2`&&e.value!==`4`}),this.ms4=$(`select[data-test=select4]`,{data:[{type:`optgroup`,label:`Q1`,children:[{text:`January`,value:1,selected:!0},{text:`February`,value:2},{text:`March`,value:3}]},{type:`optgroup`,label:`Q2`,children:[{text:`April`,value:4},{text:`May`,value:5},{text:`June`,value:6}]},{type:`optgroup`,label:`Q3`,children:[{text:`July`,value:7},{text:`August`,value:8},{text:`September`,value:9}]},{type:`optgroup`,label:`Q4`,children:[{text:`October`,value:10},{text:`November`,value:11},{text:`December`,value:12}]}],preFilter:e=>e.label!==`Q1`})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms3?.destroy(),this.ms4?.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},Lf=class{ms1;ms2;ms3;ms4;mount(){this.ms1=$(`select[data-test=select1]`,{filter:!0,preSort:(e,t)=>(e.value-+t.value)*-1}),this.ms2=$(`select[data-test=select2]`,{filter:!0,preSort:(e,t)=>e.label<t.label?1:-1}),this.ms3=$(`select[data-test=select3]`,{data:{1:`January`,2:`February`,3:`March`,4:`April`,5:`May`,6:`June`,7:`July`,8:`August`,9:`September`,10:`October`,11:`November`,12:`December`},preSort:(e,t)=>(e.value-+t.value)*-1}),this.ms4=$(`select[data-test=select4]`,{data:[{type:`optgroup`,label:`Q1`,children:[{text:`January`,value:1,selected:!0},{text:`February`,value:2},{text:`March`,value:3}]},{type:`optgroup`,label:`Q2`,children:[{text:`April`,value:4},{text:`May`,value:5},{text:`June`,value:6}]},{type:`optgroup`,label:`Q3`,children:[{text:`July`,value:7},{text:`August`,value:8},{text:`September`,value:9}]},{type:`optgroup`,label:`Q4`,children:[{text:`October`,value:10},{text:`November`,value:11},{text:`December`,value:12}]}],preSort:(e,t)=>e.label<t.label?1:-1})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms3?.destroy(),this.ms4?.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},Rf=class{serverDelayInput;resetLazyBtn;ms1;ms2;ms3;ms4;ms5;serverDelay=1e3;changeServerDelay(e){let t=e.target;this.serverDelay=+t.value,this.createMultipleSelect()}mount(){this.serverDelayInput=document.querySelector(`#serverdelay`),this.resetLazyBtn=document.querySelector(`#resetlazy`),this.serverDelayInput.addEventListener(`keyup`,this.changeServerDelay.bind(this)),this.resetLazyBtn.addEventListener(`click`,this.createMultipleSelect.bind(this)),this.createMultipleSelect()}createMultipleSelect(){this.ms1=$(`select[data-test=select1]`,{singleRadio:!0,lazyData:e=>{setTimeout(()=>{e([`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`])},this.serverDelay)}}),this.ms2=$(`select[data-test=select2]`,{lazyData:e=>{setTimeout(()=>{e([{text:`January`,value:1},{text:`February`,value:2,selected:!0},{text:`March`,value:3,disabled:!0},{text:`April`,value:4,selected:!0},{text:`May`,value:5},{text:`June`,value:6},{text:`July`,value:7},{text:`August`,value:8},{text:`September`,value:9},{text:`October`,value:10},{text:`November`,value:11},{text:`December`,value:12}])},this.serverDelay)}}),this.ms3=$(`select[data-test=select3]`,{lazyData:e=>{setTimeout(()=>{e([{type:`optgroup`,label:`Q1`,children:[{text:`January`,value:1},{text:`February`,value:2,selected:!0},{text:`March`,value:3,selected:!0}]},{type:`optgroup`,label:`Q2`,children:[{text:`April`,value:4},{text:`May`,value:5},{text:`June`,value:6}]},{type:`optgroup`,label:`Q3`,children:[{text:`July`,value:7},{text:`August`,value:8},{text:`September`,value:9}]},{type:`optgroup`,label:`Q4`,children:[{text:`October`,value:10},{text:`November`,value:11},{text:`December`,value:12}]}])},this.serverDelay)}}),this.ms4=$(`select[data-test=select4]`,{filter:!0,filterPlaceholder:`filter placeholder`,showOkButton:!0,showClear:!0,minHeight:70,lazyData:e=>{setTimeout(()=>{e([{text:`January`,value:1},{text:`February`,value:2,selected:!0},{text:`March`,value:3,disabled:!0},{text:`April`,value:4,selected:!0},{text:`May`,value:5},{text:`June`,value:6},{text:`July`,value:7},{text:`August`,value:8},{text:`September`,value:9},{text:`October`,value:10},{text:`November`,value:11},{text:`December`,value:12}])},this.serverDelay)}}),this.ms5=$(`select[data-test=select5]`,{filter:!0,filterPlaceholder:`filter placeholder`,showOkButton:!0,showClear:!0,minHeight:70,lazyData:(e,t)=>{setTimeout(()=>{t()},this.serverDelay)}})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms3?.destroy(),this.ms4?.destroy(),this.ms5?.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0,this.serverDelayInput.removeEventListener(`click`,this.changeServerDelay.bind(this)),this.resetLazyBtn.removeEventListener(`click`,this.createMultipleSelect.bind(this))}},zf=class{pageContentElm=null;ms1;ms2;ms3;ms4;ms5;mount(){this.pageContentElm=document.querySelector(`.panel-wm-content`),this.ms1=$(`select[data-test=single]`,{closeOnTab:!0}),this.ms2=$(`select[data-test=radio]`,{closeOnTab:!0,singleRadio:!0}),this.ms3=$(`select[data-test=multiple]`,{closeOnTab:!0}),this.ms4=$(`select[data-test=group]`,{closeOnTab:!0}),this.ms5=$(`select[data-test=data1]`,{closeOnTab:!0,dataTest:`select1`,filter:!0,showOkButton:!0,showClear:!0,showSearchClear:!0,data:[{value:1,text:`Option 1`},{value:2,text:`Option 2`},{value:3,text:`Option 3`},{divider:!0},{value:4,text:`Option 4`},{value:5,text:`Option 5`},{value:6,text:`Option 6`}]})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms3?.destroy(),this.ms4?.destroy(),this.ms5?.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0}},Bf=class{ms1;mount(){this.ms1=$(`select`,{tabIndex:0})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Vf=[{name:`getting-started`,view:`/src/getting-started.html`,viewModel:Pd,title:`Getting Started`},{name:`examples`,view:`/src/examples/example01.html`,viewModel:dd,title:`Examples`}],Hf=[{name:`Welcomes`,routes:[{name:`example01`,view:`/src/examples/example01.html`,viewModel:dd,title:`Single Select`},{name:`example02`,view:`/src/examples/example02.html`,viewModel:fd,title:`Multiple Select`},{name:`example03`,view:`/src/examples/example03.html`,viewModel:pd,title:`Multiple Items`},{name:`example04`,view:`/src/examples/example04.html`,viewModel:md,title:`Auto Width`},{name:`example05`,view:`/src/examples/example05.html`,viewModel:hd,title:`Disabled Select`},{name:`example06`,view:`/src/examples/example06.html`,viewModel:gd,title:`Selected/Disabled Options`},{name:`example07`,view:`/src/examples/example07.html`,viewModel:_d,title:`Submit Select`},{name:`example08`,view:`/src/examples/example08.html`,viewModel:vd,title:`The Data`},{name:`example09`,view:`/src/examples/example09.html`,viewModel:xd,title:`Locale`},{name:`example10`,view:`/src/examples/example10.html`,viewModel:Sd,title:`Large Select (Virtual Scroll)`},{name:`example11`,view:`/src/examples/example11.html`,viewModel:Cd,title:`Themes / Sizes`},{name:`example12`,view:`/src/examples/example12.html`,viewModel:wd,title:`Checkbox/Radio Icons`},{name:`example13`,view:`/src/examples/example13.html`,viewModel:Td,title:`Dynamically Create Select`},{name:`example14`,view:`/src/examples/example14.html`,viewModel:Ed,title:`The Divider`},{name:`example15`,view:`/src/examples/example15.html`,viewModel:Dd,title:`Dark Mode`},{name:`example16`,view:`/src/examples/example16.html`,viewModel:Nd,title:`Template with Images`}]},{name:`Options`,routes:[{name:`options01`,view:`/src/options/options01.html`,viewModel:Yd,title:`The Placeholder`},{name:`options02`,view:`/src/options/options02.html`,viewModel:Xd,title:`Single Radio`},{name:`options03`,view:`/src/options/options03.html`,viewModel:Zd,title:`Hide Select All`},{name:`options04`,view:`/src/options/options04.html`,viewModel:Qd,title:`Hide Optgroup Checkboxes`},{name:`options05`,view:`/src/options/options05.html`,viewModel:$d,title:`Custom Dropdown Width`},{name:`options06`,view:`/src/options/options06.html`,viewModel:ef,title:`Max Height`},{name:`options07`,view:`/src/options/options07.html`,viewModel:tf,title:`Max Height Unit`},{name:`options08`,view:`/src/options/options08.html`,viewModel:nf,title:`The Position`},{name:`options09`,view:`/src/options/options09.html`,viewModel:rf,title:`Display Values`},{name:`options10`,view:`/src/options/options10.html`,viewModel:af,title:`Display Title`},{name:`options11`,view:`/src/options/options11.html`,viewModel:of,title:`Display Delimiter`},{name:`options12`,view:`/src/options/options12.html`,viewModel:sf,title:`Minimum Count Selected`},{name:`options13`,view:`/src/options/options13.html`,viewModel:cf,title:`The Ellipsis`},{name:`options14`,view:`/src/options/options14.html`,viewModel:lf,title:`Is Open`},{name:`options15`,view:`/src/options/options15.html`,viewModel:uf,title:`Keep Open`},{name:`options16`,view:`/src/options/options16.html`,viewModel:df,title:`Open On Hover`},{name:`options17`,view:`/src/options/options17.html`,viewModel:ff,title:`The Container`},{name:`options18`,view:`/src/options/options18.html`,viewModel:pf,title:`The Filter`},{name:`options19`,view:`/src/options/options19.html`,viewModel:mf,title:`Filter Only Optgroup`},{name:`options20`,view:`/src/options/options20.html`,viewModel:hf,title:`Filter Placeholder`},{name:`options21`,view:`/src/options/options21.html`,viewModel:gf,title:`Filter Accept On Enter`},{name:`options22`,view:`/src/options/options22.html`,viewModel:_f,title:`Filter By Data Length`},{name:`options23`,view:`/src/options/options23.html`,viewModel:vf,title:`Custom Filter`},{name:`options24`,view:`/src/options/options24.html`,viewModel:yf,title:`Show Clear`},{name:`options25`,view:`/src/options/options25.html`,viewModel:bf,title:`Show OK Button`},{name:`options26`,view:`/src/options/options26.html`,viewModel:xf,title:`The Styler`},{name:`options27`,view:`/src/options/options27.html`,viewModel:Sf,title:`Text Template`},{name:`options28`,view:`/src/options/options28.html`,viewModel:Cf,title:`Label Template`},{name:`options29`,view:`/src/options/options29.html`,viewModel:wf,title:`Auto-Adjust Drop Position`},{name:`options30`,view:`/src/options/options30.html`,viewModel:Tf,title:`Auto-Adjust Drop Height/Width`},{name:`options31`,view:`/src/options/options31.html`,viewModel:Ef,title:`Use Select Option as Label`},{name:`options32`,view:`/src/options/options32.html`,viewModel:Df,title:`Sanitizer`},{name:`options33`,view:`/src/options/options33.html`,viewModel:Of,title:`Classes`},{name:`options34`,view:`/src/options/options34.html`,viewModel:kf,title:`Show Search Clear`},{name:`options35`,view:`/src/options/options35.html`,viewModel:jf,title:`Custom Diacritic Parser`},{name:`options36`,view:`/src/options/options36.html`,viewModel:Mf,title:`Infinite Scroll`},{name:`options37`,view:`/src/options/options37.html`,viewModel:Nf,title:`Navigation Highlight`},{name:`options38`,view:`/src/options/options38.html`,viewModel:Pf,title:`Dark Mode`},{name:`options39`,view:`/src/options/options39.html`,viewModel:Ff,title:`Label Id (aria-labelledby)`},{name:`options40`,view:`/src/options/options40.html`,viewModel:If,title:`Pre-Filter Data`},{name:`options41`,view:`/src/options/options41.html`,viewModel:Lf,title:`Pre-Sort Data`},{name:`options42`,view:`/src/options/options42.html`,viewModel:Rf,title:`Lazy Load Data`},{name:`options43`,view:`/src/options/options43.html`,viewModel:zf,title:`Close on Tab`},{name:`options44`,view:`/src/options/options44.html`,viewModel:Bf,title:`tabIndex`}]},{name:`Methods`,routes:[{name:`methods01`,view:`/src/methods/methods01.html`,viewModel:Id,title:`The getOptions`},{name:`methods02`,view:`/src/methods/methods02.html`,viewModel:Ld,title:`The refreshOptions`},{name:`methods03`,view:`/src/methods/methods03.html`,viewModel:Rd,title:`The setSelects/getSelects`},{name:`methods04`,view:`/src/methods/methods04.html`,viewModel:zd,title:`The enable/disable`},{name:`methods05`,view:`/src/methods/methods05.html`,viewModel:Bd,title:`The open/close`},{name:`methods06`,view:`/src/methods/methods06.html`,viewModel:Vd,title:`The check/uncheck`},{name:`methods07`,view:`/src/methods/methods07.html`,viewModel:Hd,title:`The checkAll/uncheckAll`},{name:`methods08`,view:`/src/methods/methods08.html`,viewModel:Ud,title:`The checkInvert`},{name:`methods09`,view:`/src/methods/methods09.html`,viewModel:Wd,title:`The focus/blur`},{name:`methods10`,view:`/src/methods/methods10.html`,viewModel:Gd,title:`The refresh`},{name:`methods11`,view:`/src/methods/methods11.html`,viewModel:Kd,title:`The destroy`},{name:`methods12`,view:`/src/methods/methods12.html`,viewModel:qd,title:`The getData`},{name:`methods13`,view:`/src/methods/methods13.html`,viewModel:Jd,title:`The setData`}]},{name:`Events`,routes:[{name:`events`,view:`/src/events/events.html`,viewModel:ud,title:`The Events`}]},{name:`I18N`,routes:[{name:`i18n`,view:`/src/i18n/i18n.html`,viewModel:Fd,title:`The i18n`}]}],Uf=Object.assign({"/src/events/events.html":n,"/src/examples/example01.html":r,"/src/examples/example02.html":i,"/src/examples/example03.html":a,"/src/examples/example04.html":o,"/src/examples/example05.html":s,"/src/examples/example06.html":c,"/src/examples/example07.html":l,"/src/examples/example08.html":u,"/src/examples/example09.html":d,"/src/examples/example10.html":f,"/src/examples/example11.html":p,"/src/examples/example12.html":m,"/src/examples/example13.html":h,"/src/examples/example14.html":g,"/src/examples/example15.html":_,"/src/examples/example16.html":ee,"/src/getting-started.html":v,"/src/i18n/i18n.html":y,"/src/main.html":b,"/src/methods/methods01.html":x,"/src/methods/methods02.html":S,"/src/methods/methods03.html":C,"/src/methods/methods04.html":w,"/src/methods/methods05.html":T,"/src/methods/methods06.html":te,"/src/methods/methods07.html":ne,"/src/methods/methods08.html":E,"/src/methods/methods09.html":re,"/src/methods/methods10.html":D,"/src/methods/methods11.html":O,"/src/methods/methods12.html":ie,"/src/methods/methods13.html":ae,"/src/options/options01.html":oe,"/src/options/options02.html":se,"/src/options/options03.html":ce,"/src/options/options04.html":le,"/src/options/options05.html":k,"/src/options/options06.html":ue,"/src/options/options07.html":A,"/src/options/options08.html":de,"/src/options/options09.html":j,"/src/options/options10.html":fe,"/src/options/options11.html":pe,"/src/options/options12.html":me,"/src/options/options13.html":he,"/src/options/options14.html":ge,"/src/options/options15.html":_e,"/src/options/options16.html":ve,"/src/options/options17.html":ye,"/src/options/options18.html":be,"/src/options/options19.html":xe,"/src/options/options20.html":Se,"/src/options/options21.html":Ce,"/src/options/options22.html":we,"/src/options/options23.html":Te,"/src/options/options24.html":Ee,"/src/options/options25.html":De,"/src/options/options26.html":Oe,"/src/options/options27.html":ke,"/src/options/options28.html":Ae,"/src/options/options29.html":je,"/src/options/options30.html":Me,"/src/options/options31.html":Ne,"/src/options/options32.html":Pe,"/src/options/options33.html":Fe,"/src/options/options34.html":Ie,"/src/options/options35.html":Le,"/src/options/options36.html":Re,"/src/options/options37.html":ze,"/src/options/options38.html":Be,"/src/options/options39.html":Ve,"/src/options/options40.html":He,"/src/options/options41.html":Ue,"/src/options/options42.html":We,"/src/options/options43.html":Ge,"/src/options/options44.html":Ke});new class{loading=!0;currentModel;currentRouter;defaultRouteName=`getting-started`;stateBangChar=`#/`;baseUrl=window.location.origin+window.location.pathname;viewModelObj={};async init(){let e=window.location;document.querySelector(`#app`).innerHTML=Eu.sanitize(b,{RETURN_TRUSTED_TYPE:!0});let t=e.hash.replace(this.stateBangChar,``);(!t||t===`/`||t===`#`)&&(t=this.defaultRouteName),this.createRouteLinks(),this.loadRoute(t),Array.from(document.querySelectorAll(`.panel-wm-left a.nav-link,.navbar-nav a.nav-link`)).forEach(e=>{t.includes(e.id)&&e.classList.add(`active`)}),window.onpopstate=()=>{let e=window.location.hash.replace(this.stateBangChar,``);this.removeAllActiveLinks();let t=document.querySelector(`#${e}`);t&&(t.scrollIntoView(),t.classList.add(`active`)),this.loadRoute(e||this.defaultRouteName,!1)}}createRouteLinks(){for(let e of Vf){let t=Q(`li`,{className:`nav-item`});Q(`a`,{id:e.name,className:`nav-link`,textContent:e.title},t).addEventListener(`click`,this.clickEventListener.bind(this)),document.querySelector(`.navbar-nav`)?.appendChild(t)}for(let e of Hf){let t=Q(`li`,{className:`m-1`});Q(`p`,{className:`navbar-vertical-label mb-1`,textContent:e.name},t),document.querySelector(`.nav-pills`)?.appendChild(t);for(let t of e.routes){let e=Q(`li`,{className:`nav-item`}),n=Q(`a`,{id:t.name,className:`nav-link`,textContent:t.title});n.addEventListener(`click`,this.clickEventListener.bind(this)),e.appendChild(n),document.querySelector(`.nav-pills`)?.appendChild(e)}}}async loadRoute(e,t=!0){let n=document.querySelector(`.panel-wm-content`);Yu(n),n.classList.add(`cloak`);let r=Vf.find(t=>t.name===e);if(r?.name===`examples`)document.querySelector(`.nav-pills .nav-item a.nav-link`)?.classList.add(`active`);else for(let t of Hf){let n=t.routes.find(t=>t.name===e);n&&(r=n)}if(this.currentModel&&this.unmountCurrentVM(this.currentModel,this.currentRouter),r){this.currentRouter=r,document.querySelector(`.panel-wm-content`).innerHTML=Eu.sanitize(Uf[r.view],{RETURN_TRUSTED_TYPE:!0});let e=new r.viewModel;this.currentModel=e,window[r.name]=e.mount?.(),window.onbeforeunload=()=>{n.classList.add(`cloak`),e.unmount?.(),this.removeAllActiveLinks(!0),this.unmountAll(),r?.name&&delete window[r.name]}}t&&window.history.pushState({},e,`${this.baseUrl}${this.stateBangChar}${e}`),document.title=`Multiple-Select-Vanilla · ${e}`,n.classList.remove(`cloak`)}async clickEventListener(e){this.removeAllActiveLinks();let t=e.target;t.classList.toggle(`active`),this.loadRoute(t.id)}removeAllActiveLinks(e=!1){document.querySelectorAll(`.panel-wm-left a.nav-link,.navbar-nav a.nav-link`).forEach(t=>{t.classList.remove(`active`),e&&t.removeEventListener(`click`,this.clickEventListener.bind(this))})}unmountCurrentVM(e,t){e.unmount?.(),t&&delete window[t.name]}unmountAll(){for(let e of Object.keys(this.viewModelObj)){let t=this.viewModelObj[e];if(typeof t?.unmount==`function`){t?.unmount();for(let e of Object.keys(t))t[e]=null}window[e]=null,this.viewModelObj[e]=null,delete window[e],delete this.viewModelObj[e]}}}().init();