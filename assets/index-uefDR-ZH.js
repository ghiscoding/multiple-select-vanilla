(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Ul=`<div class="row mb-2">
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
`,Zl=`<div class="row mb-2">
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
`,sa=`<div class="row mb-2">
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
&lt;!-- Get latest compiled and minified CSS --&gt;
&lt;link href=&quot;<span style="color:#0a3069">https://cdn.jsdelivr.net/npm/multiple-select-vanilla@4.3.5/dist/styles/css/multiple-select.css</span>&quot; rel=&quot;<span style="color:#0a3069">stylesheet</span>&quot;&gt;

&lt;!-- ESM import requires <span style="color:#d63384">type=&quot;module&quot;</span>, get latest compiled and minified JavaScript code --&gt;
&lt;script type=&quot;module&quot; src=&quot;<span style="color:#0a3069">https://cdn.jsdelivr.net/npm/multiple-select-vanilla@4.3.5/dist/browser/multiple-select.js</span>&quot;&gt;&lt;/script&gt;
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
`,as=`<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand ms-2" href="https://github.com/ghiscoding/multiple-select-vanilla">
      <img src="./favicon.png" alt="Multiple-Select-Vanilla" width="34">
      <span>Multiple Select Vanilla</span>
    </a>
    <div class="github-button-container">
      <a href="https://github.com/ghiscoding/multiple-select-vanilla">
        <img src="https://img.shields.io/github/stars/ghiscoding/multiple-select-vanilla?style=social">
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
`,aa=`<div class="row mb-2">
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
`,ra=`<div class="row mb-2">
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
`,pa=`<div class="row mb-2">
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
`,ca=`<div class="row mb-2">
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
`,ua=`<div class="row mb-2">
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
`,da=`<div class="row mb-2">
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
`,ma=`<div class="row mb-2">
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
`,ha=`<div class="row mb-2">
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
`,va=`<div class="row mb-2">
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
`,fa=`<div class="row mb-2">
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
      <input id="refreshInput" class="form-control" type="text" required="required" placeholder="Enter text">
    </div>
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
`,ba=`<div class="row mb-2">
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
`,ga=`<div class="row mb-2">
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
`,_a=`<div class="row mb-2">
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
`,Ea=`<div class="row mb-2">
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
`,ya=`<div class="row mb-2">
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
`,wa=`<div class="row mb-2">
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
`,Sa=`<div class="row mb-2">
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
`,Aa=`<div class="row mb-2">
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
`,Oa=`<div class="row mb-2">
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
      <input id="number" type="number" value="5" min="1" max="10">
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
`,ka=`<div class="row mb-2">
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
`,Ta=`<div class="row mb-2">
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
`,xa=`<div class="row mb-2">
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
`,Ca=`<div class="row mb-2">
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
`,Da=`<div class="row mb-2">
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
`,Ma=`<div class="row mb-2">
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
`,La=`<div class="row mb-2">
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
`,Na=`<div class="row mb-2">
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
`,$a=`<div class="row mb-2">
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
`,Ia=`<div class="row mb-2">
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
`,Ra=`<div class="row mb-2">
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
`,Pa=`<div class="row mb-2">
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
`,Fa=`<div class="row mb-2">
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
`,Ha=`<div class="row mb-2">
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
`,Ba=`<div class="row mb-2">
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
`,Ga=`<div class="row mb-2">
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
`,Ua=`<div class="row mb-2">
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
`,Ja=`<div class="row mb-2">
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
`,ja=`<div class="row mb-2">
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
`,za=`<div class="row mb-2">
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
`,Wa=`<div class="row mb-2">
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
`,Va=`<div class="row mb-2">
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
`,qa=`<div class="row mb-2">
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
`,Ka=`<div class="row mb-2">
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
`,Ya=`<div class="row mb-2">
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
`,Xa=`<div class="row mb-2">
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
`,Qa=`<div class="row mb-2">
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
`,Za=`<div class="row mb-2">
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
      <input class="form-control in-log" readonly style="background-color: #f0f0f0">
    </div>
    <div class="py-1 col-sm-1 w-35px">=&gt;</div>
    <div class="col-sm-3 text-start">
      <input class="form-control out-log" readonly style="background-color: #f0f0f0">
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
`,tr=`<div class="row mb-2">
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
`,er=`<div class="row">
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
`,nr=`<div class="example38-container">
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
`,or=`<div class="row mb-2">
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
`,ir=`<div class="row mb-2">
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
`,sr=`<div class="row mb-2">
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
`,lr=`<div class="row mb-2">
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
      <input id="serverdelay" type="number" value="1000" step="100" style="height: 34px; width: 100px;">
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
`,ar=`<div class="row mb-2">
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
`;var X="top",it="bottom",st="right",Q="left",Cn="auto",De=[X,it,st,Q],ie="start",Se="end",rs="clippingParents",xo="viewport",_e="popper",ps="reference",fo=De.reduce(function(e,t){return e.concat([t+"-"+ie,t+"-"+Se])},[]),Co=[].concat(De,[Cn]).reduce(function(e,t){return e.concat([t,t+"-"+ie,t+"-"+Se])},[]),cs="beforeRead",us="read",ds="afterRead",ms="beforeMain",hs="main",vs="afterMain",fs="beforeWrite",bs="write",gs="afterWrite",_s=[cs,us,ds,ms,hs,vs,fs,bs,gs];function St(e){return e?(e.nodeName||"").toLowerCase():null}function lt(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function se(e){var t=lt(e).Element;return e instanceof t||e instanceof Element}function at(e){var t=lt(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Do(e){if(typeof ShadowRoot>"u")return!1;var t=lt(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function rr(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var o=t.styles[n]||{},i=t.attributes[n]||{},s=t.elements[n];!at(s)||!St(s)||(Object.assign(s.style,o),Object.keys(i).forEach(function(l){var r=i[l];r===!1?s.removeAttribute(l):s.setAttribute(l,r===!0?"":r)}))})}function pr(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(o){var i=t.elements[o],s=t.attributes[o]||{},l=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:n[o]),r=l.reduce(function(p,h){return p[h]="",p},{});!at(i)||!St(i)||(Object.assign(i.style,r),Object.keys(s).forEach(function(p){i.removeAttribute(p)}))})}}const Mo={name:"applyStyles",enabled:!0,phase:"write",fn:rr,effect:pr,requires:["computeStyles"]};function yt(e){return e.split("-")[0]}var oe=Math.max,On=Math.min,Ae=Math.round;function bo(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Es(){return!/^((?!chrome|android).)*safari/i.test(bo())}function Oe(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var o=e.getBoundingClientRect(),i=1,s=1;t&&at(e)&&(i=e.offsetWidth>0&&Ae(o.width)/e.offsetWidth||1,s=e.offsetHeight>0&&Ae(o.height)/e.offsetHeight||1);var l=se(e)?lt(e):window,r=l.visualViewport,p=!Es()&&n,h=(o.left+(p&&r?r.offsetLeft:0))/i,u=(o.top+(p&&r?r.offsetTop:0))/s,y=o.width/i,S=o.height/s;return{width:y,height:S,top:u,right:h+y,bottom:u+S,left:h,x:h,y:u}}function Lo(e){var t=Oe(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function ys(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Do(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Ft(e){return lt(e).getComputedStyle(e)}function cr(e){return["table","td","th"].indexOf(St(e))>=0}function Vt(e){return((se(e)?e.ownerDocument:e.document)||window.document).documentElement}function Dn(e){return St(e)==="html"?e:e.assignedSlot||e.parentNode||(Do(e)?e.host:null)||Vt(e)}function li(e){return!at(e)||Ft(e).position==="fixed"?null:e.offsetParent}function ur(e){var t=/firefox/i.test(bo()),n=/Trident/i.test(bo());if(n&&at(e)){var o=Ft(e);if(o.position==="fixed")return null}var i=Dn(e);for(Do(i)&&(i=i.host);at(i)&&["html","body"].indexOf(St(i))<0;){var s=Ft(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function Qe(e){for(var t=lt(e),n=li(e);n&&cr(n)&&Ft(n).position==="static";)n=li(n);return n&&(St(n)==="html"||St(n)==="body"&&Ft(n).position==="static")?t:n||ur(e)||t}function No(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function qe(e,t,n){return oe(e,On(t,n))}function dr(e,t,n){var o=qe(e,t,n);return o>n?n:o}function ws(){return{top:0,right:0,bottom:0,left:0}}function Ss(e){return Object.assign({},ws(),e)}function As(e,t){return t.reduce(function(n,o){return n[o]=e,n},{})}var mr=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,Ss(typeof t!="number"?t:As(t,De))};function hr(e){var t,n=e.state,o=e.name,i=e.options,s=n.elements.arrow,l=n.modifiersData.popperOffsets,r=yt(n.placement),p=No(r),h=[Q,st].indexOf(r)>=0,u=h?"height":"width";if(!(!s||!l)){var y=mr(i.padding,n),S=Lo(s),_=p==="y"?X:Q,k=p==="y"?it:st,w=n.rects.reference[u]+n.rects.reference[p]-l[p]-n.rects.popper[u],A=l[p]-n.rects.reference[p],D=Qe(s),$=D?p==="y"?D.clientHeight||0:D.clientWidth||0:0,N=w/2-A/2,b=y[_],T=$-S[u]-y[k],x=$/2-S[u]/2+N,I=qe(b,x,T),G=p;n.modifiersData[o]=(t={},t[G]=I,t.centerOffset=I-x,t)}}function vr(e){var t=e.state,n=e.options,o=n.element,i=o===void 0?"[data-popper-arrow]":o;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||ys(t.elements.popper,i)&&(t.elements.arrow=i))}const Os={name:"arrow",enabled:!0,phase:"main",fn:hr,effect:vr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ke(e){return e.split("-")[1]}var fr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function br(e,t){var n=e.x,o=e.y,i=t.devicePixelRatio||1;return{x:Ae(n*i)/i||0,y:Ae(o*i)/i||0}}function ai(e){var t,n=e.popper,o=e.popperRect,i=e.placement,s=e.variation,l=e.offsets,r=e.position,p=e.gpuAcceleration,h=e.adaptive,u=e.roundOffsets,y=e.isFixed,S=l.x,_=S===void 0?0:S,k=l.y,w=k===void 0?0:k,A=typeof u=="function"?u({x:_,y:w}):{x:_,y:w};_=A.x,w=A.y;var D=l.hasOwnProperty("x"),$=l.hasOwnProperty("y"),N=Q,b=X,T=window;if(h){var x=Qe(n),I="clientHeight",G="clientWidth";if(x===lt(n)&&(x=Vt(n),Ft(x).position!=="static"&&r==="absolute"&&(I="scrollHeight",G="scrollWidth")),x=x,i===X||(i===Q||i===st)&&s===Se){b=it;var B=y&&x===T&&T.visualViewport?T.visualViewport.height:x[I];w-=B-o.height,w*=p?1:-1}if(i===Q||(i===X||i===it)&&s===Se){N=st;var H=y&&x===T&&T.visualViewport?T.visualViewport.width:x[G];_-=H-o.width,_*=p?1:-1}}var C=Object.assign({position:r},h&&fr),q=u===!0?br({x:_,y:w},lt(n)):{x:_,y:w};if(_=q.x,w=q.y,p){var U;return Object.assign({},C,(U={},U[b]=$?"0":"",U[N]=D?"0":"",U.transform=(T.devicePixelRatio||1)<=1?"translate("+_+"px, "+w+"px)":"translate3d("+_+"px, "+w+"px, 0)",U))}return Object.assign({},C,(t={},t[b]=$?w+"px":"",t[N]=D?_+"px":"",t.transform="",t))}function gr(e){var t=e.state,n=e.options,o=n.gpuAcceleration,i=o===void 0?!0:o,s=n.adaptive,l=s===void 0?!0:s,r=n.roundOffsets,p=r===void 0?!0:r,h={placement:yt(t.placement),variation:ke(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,ai(Object.assign({},h,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:p})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,ai(Object.assign({},h,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:p})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const $o={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:gr,data:{}};var cn={passive:!0};function _r(e){var t=e.state,n=e.instance,o=e.options,i=o.scroll,s=i===void 0?!0:i,l=o.resize,r=l===void 0?!0:l,p=lt(t.elements.popper),h=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&h.forEach(function(u){u.addEventListener("scroll",n.update,cn)}),r&&p.addEventListener("resize",n.update,cn),function(){s&&h.forEach(function(u){u.removeEventListener("scroll",n.update,cn)}),r&&p.removeEventListener("resize",n.update,cn)}}const Io={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:_r,data:{}};var Er={left:"right",right:"left",bottom:"top",top:"bottom"};function En(e){return e.replace(/left|right|bottom|top/g,function(t){return Er[t]})}var yr={start:"end",end:"start"};function ri(e){return e.replace(/start|end/g,function(t){return yr[t]})}function Ro(e){var t=lt(e),n=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:n,scrollTop:o}}function Po(e){return Oe(Vt(e)).left+Ro(e).scrollLeft}function wr(e,t){var n=lt(e),o=Vt(e),i=n.visualViewport,s=o.clientWidth,l=o.clientHeight,r=0,p=0;if(i){s=i.width,l=i.height;var h=Es();(h||!h&&t==="fixed")&&(r=i.offsetLeft,p=i.offsetTop)}return{width:s,height:l,x:r+Po(e),y:p}}function Sr(e){var t,n=Vt(e),o=Ro(e),i=(t=e.ownerDocument)==null?void 0:t.body,s=oe(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=oe(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),r=-o.scrollLeft+Po(e),p=-o.scrollTop;return Ft(i||n).direction==="rtl"&&(r+=oe(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:l,x:r,y:p}}function Fo(e){var t=Ft(e),n=t.overflow,o=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+o)}function ks(e){return["html","body","#document"].indexOf(St(e))>=0?e.ownerDocument.body:at(e)&&Fo(e)?e:ks(Dn(e))}function Ke(e,t){var n;t===void 0&&(t=[]);var o=ks(e),i=o===((n=e.ownerDocument)==null?void 0:n.body),s=lt(o),l=i?[s].concat(s.visualViewport||[],Fo(o)?o:[]):o,r=t.concat(l);return i?r:r.concat(Ke(Dn(l)))}function go(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ar(e,t){var n=Oe(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function pi(e,t,n){return t===xo?go(wr(e,n)):se(t)?Ar(t,n):go(Sr(Vt(e)))}function Or(e){var t=Ke(Dn(e)),n=["absolute","fixed"].indexOf(Ft(e).position)>=0,o=n&&at(e)?Qe(e):e;return se(o)?t.filter(function(i){return se(i)&&ys(i,o)&&St(i)!=="body"}):[]}function kr(e,t,n,o){var i=t==="clippingParents"?Or(e):[].concat(t),s=[].concat(i,[n]),l=s[0],r=s.reduce(function(p,h){var u=pi(e,h,o);return p.top=oe(u.top,p.top),p.right=On(u.right,p.right),p.bottom=On(u.bottom,p.bottom),p.left=oe(u.left,p.left),p},pi(e,l,o));return r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}function Ts(e){var t=e.reference,n=e.element,o=e.placement,i=o?yt(o):null,s=o?ke(o):null,l=t.x+t.width/2-n.width/2,r=t.y+t.height/2-n.height/2,p;switch(i){case X:p={x:l,y:t.y-n.height};break;case it:p={x:l,y:t.y+t.height};break;case st:p={x:t.x+t.width,y:r};break;case Q:p={x:t.x-n.width,y:r};break;default:p={x:t.x,y:t.y}}var h=i?No(i):null;if(h!=null){var u=h==="y"?"height":"width";switch(s){case ie:p[h]=p[h]-(t[u]/2-n[u]/2);break;case Se:p[h]=p[h]+(t[u]/2-n[u]/2);break}}return p}function Te(e,t){t===void 0&&(t={});var n=t,o=n.placement,i=o===void 0?e.placement:o,s=n.strategy,l=s===void 0?e.strategy:s,r=n.boundary,p=r===void 0?rs:r,h=n.rootBoundary,u=h===void 0?xo:h,y=n.elementContext,S=y===void 0?_e:y,_=n.altBoundary,k=_===void 0?!1:_,w=n.padding,A=w===void 0?0:w,D=Ss(typeof A!="number"?A:As(A,De)),$=S===_e?ps:_e,N=e.rects.popper,b=e.elements[k?$:S],T=kr(se(b)?b:b.contextElement||Vt(e.elements.popper),p,u,l),x=Oe(e.elements.reference),I=Ts({reference:x,element:N,placement:i}),G=go(Object.assign({},N,I)),B=S===_e?G:x,H={top:T.top-B.top+D.top,bottom:B.bottom-T.bottom+D.bottom,left:T.left-B.left+D.left,right:B.right-T.right+D.right},C=e.modifiersData.offset;if(S===_e&&C){var q=C[i];Object.keys(H).forEach(function(U){var dt=[st,it].indexOf(U)>=0?1:-1,At=[X,it].indexOf(U)>=0?"y":"x";H[U]+=q[At]*dt})}return H}function Tr(e,t){t===void 0&&(t={});var n=t,o=n.placement,i=n.boundary,s=n.rootBoundary,l=n.padding,r=n.flipVariations,p=n.allowedAutoPlacements,h=p===void 0?Co:p,u=ke(o),y=u?r?fo:fo.filter(function(k){return ke(k)===u}):De,S=y.filter(function(k){return h.indexOf(k)>=0});S.length===0&&(S=y);var _=S.reduce(function(k,w){return k[w]=Te(e,{placement:w,boundary:i,rootBoundary:s,padding:l})[yt(w)],k},{});return Object.keys(_).sort(function(k,w){return _[k]-_[w]})}function xr(e){if(yt(e)===Cn)return[];var t=En(e);return[ri(e),t,ri(t)]}function Cr(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var i=n.mainAxis,s=i===void 0?!0:i,l=n.altAxis,r=l===void 0?!0:l,p=n.fallbackPlacements,h=n.padding,u=n.boundary,y=n.rootBoundary,S=n.altBoundary,_=n.flipVariations,k=_===void 0?!0:_,w=n.allowedAutoPlacements,A=t.options.placement,D=yt(A),$=D===A,N=p||($||!k?[En(A)]:xr(A)),b=[A].concat(N).reduce(function(kt,M){return kt.concat(yt(M)===Cn?Tr(t,{placement:M,boundary:u,rootBoundary:y,padding:h,flipVariations:k,allowedAutoPlacements:w}):M)},[]),T=t.rects.reference,x=t.rects.popper,I=new Map,G=!0,B=b[0],H=0;H<b.length;H++){var C=b[H],q=yt(C),U=ke(C)===ie,dt=[X,it].indexOf(q)>=0,At=dt?"width":"height",K=Te(t,{placement:C,boundary:u,rootBoundary:y,altBoundary:S,padding:h}),ot=dt?U?st:Q:U?it:X;T[At]>x[At]&&(ot=En(ot));var Yt=En(ot),Ot=[];if(s&&Ot.push(K[q]<=0),r&&Ot.push(K[ot]<=0,K[Yt]<=0),Ot.every(function(kt){return kt})){B=C,G=!1;break}I.set(C,Ot)}if(G)for(var Xt=k?3:1,P=function(M){var mt=b.find(function(Gt){var gt=I.get(Gt);if(gt)return gt.slice(0,M).every(function(Qt){return Qt})});if(mt)return B=mt,"break"},Bt=Xt;Bt>0;Bt--){var F=P(Bt);if(F==="break")break}t.placement!==B&&(t.modifiersData[o]._skip=!0,t.placement=B,t.reset=!0)}}const xs={name:"flip",enabled:!0,phase:"main",fn:Cr,requiresIfExists:["offset"],data:{_skip:!1}};function ci(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ui(e){return[X,st,it,Q].some(function(t){return e[t]>=0})}function Dr(e){var t=e.state,n=e.name,o=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,l=Te(t,{elementContext:"reference"}),r=Te(t,{altBoundary:!0}),p=ci(l,o),h=ci(r,i,s),u=ui(p),y=ui(h);t.modifiersData[n]={referenceClippingOffsets:p,popperEscapeOffsets:h,isReferenceHidden:u,hasPopperEscaped:y},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":y})}const Cs={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Dr};function Mr(e,t,n){var o=yt(e),i=[Q,X].indexOf(o)>=0?-1:1,s=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,l=s[0],r=s[1];return l=l||0,r=(r||0)*i,[Q,st].indexOf(o)>=0?{x:r,y:l}:{x:l,y:r}}function Lr(e){var t=e.state,n=e.options,o=e.name,i=n.offset,s=i===void 0?[0,0]:i,l=Co.reduce(function(u,y){return u[y]=Mr(y,t.rects,s),u},{}),r=l[t.placement],p=r.x,h=r.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=p,t.modifiersData.popperOffsets.y+=h),t.modifiersData[o]=l}const Ds={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Lr};function Nr(e){var t=e.state,n=e.name;t.modifiersData[n]=Ts({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const Ho={name:"popperOffsets",enabled:!0,phase:"read",fn:Nr,data:{}};function $r(e){return e==="x"?"y":"x"}function Ir(e){var t=e.state,n=e.options,o=e.name,i=n.mainAxis,s=i===void 0?!0:i,l=n.altAxis,r=l===void 0?!1:l,p=n.boundary,h=n.rootBoundary,u=n.altBoundary,y=n.padding,S=n.tether,_=S===void 0?!0:S,k=n.tetherOffset,w=k===void 0?0:k,A=Te(t,{boundary:p,rootBoundary:h,padding:y,altBoundary:u}),D=yt(t.placement),$=ke(t.placement),N=!$,b=No(D),T=$r(b),x=t.modifiersData.popperOffsets,I=t.rects.reference,G=t.rects.popper,B=typeof w=="function"?w(Object.assign({},t.rects,{placement:t.placement})):w,H=typeof B=="number"?{mainAxis:B,altAxis:B}:Object.assign({mainAxis:0,altAxis:0},B),C=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,q={x:0,y:0};if(x){if(s){var U,dt=b==="y"?X:Q,At=b==="y"?it:st,K=b==="y"?"height":"width",ot=x[b],Yt=ot+A[dt],Ot=ot-A[At],Xt=_?-G[K]/2:0,P=$===ie?I[K]:G[K],Bt=$===ie?-G[K]:-I[K],F=t.elements.arrow,kt=_&&F?Lo(F):{width:0,height:0},M=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ws(),mt=M[dt],Gt=M[At],gt=qe(0,I[K],kt[K]),Qt=N?I[K]/2-Xt-gt-mt-H.mainAxis:P-gt-mt-H.mainAxis,on=N?-I[K]/2+Xt+gt+Gt+H.mainAxis:Bt+gt+Gt+H.mainAxis,re=t.elements.arrow&&Qe(t.elements.arrow),Ut=re?b==="y"?re.clientTop||0:re.clientLeft||0:0,Zt=(U=C?.[b])!=null?U:0,Tt=ot+Qt-Zt-Ut,$e=ot+on-Zt,pe=qe(_?On(Yt,Tt):Yt,ot,_?oe(Ot,$e):Ot);x[b]=pe,q[b]=pe-ot}if(r){var xt,ce=b==="x"?X:Q,ue=b==="x"?it:st,_t=x[T],te=T==="y"?"height":"width",sn=_t+A[ce],de=_t-A[ue],Ct=[X,Q].indexOf(D)!==-1,Dt=(xt=C?.[T])!=null?xt:0,Mt=Ct?sn:_t-I[te]-G[te]-Dt+H.altAxis,Ie=Ct?_t+I[te]+G[te]-Dt-H.altAxis:de,Re=_&&Ct?dr(Mt,_t,Ie):qe(_?Mt:sn,_t,_?Ie:de);x[T]=Re,q[T]=Re-_t}t.modifiersData[o]=q}}const Ms={name:"preventOverflow",enabled:!0,phase:"main",fn:Ir,requiresIfExists:["offset"]};function Rr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Pr(e){return e===lt(e)||!at(e)?Ro(e):Rr(e)}function Fr(e){var t=e.getBoundingClientRect(),n=Ae(t.width)/e.offsetWidth||1,o=Ae(t.height)/e.offsetHeight||1;return n!==1||o!==1}function Hr(e,t,n){n===void 0&&(n=!1);var o=at(t),i=at(t)&&Fr(t),s=Vt(t),l=Oe(e,i,n),r={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(o||!o&&!n)&&((St(t)!=="body"||Fo(s))&&(r=Pr(t)),at(t)?(p=Oe(t,!0),p.x+=t.clientLeft,p.y+=t.clientTop):s&&(p.x=Po(s))),{x:l.left+r.scrollLeft-p.x,y:l.top+r.scrollTop-p.y,width:l.width,height:l.height}}function Br(e){var t=new Map,n=new Set,o=[];e.forEach(function(s){t.set(s.name,s)});function i(s){n.add(s.name);var l=[].concat(s.requires||[],s.requiresIfExists||[]);l.forEach(function(r){if(!n.has(r)){var p=t.get(r);p&&i(p)}}),o.push(s)}return e.forEach(function(s){n.has(s.name)||i(s)}),o}function Gr(e){var t=Br(e);return _s.reduce(function(n,o){return n.concat(t.filter(function(i){return i.phase===o}))},[])}function Ur(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Jr(e){var t=e.reduce(function(n,o){var i=n[o.name];return n[o.name]=i?Object.assign({},i,o,{options:Object.assign({},i.options,o.options),data:Object.assign({},i.data,o.data)}):o,n},{});return Object.keys(t).map(function(n){return t[n]})}var di={placement:"bottom",modifiers:[],strategy:"absolute"};function mi(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Mn(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,o=n===void 0?[]:n,i=t.defaultOptions,s=i===void 0?di:i;return function(r,p,h){h===void 0&&(h=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},di,s),modifiersData:{},elements:{reference:r,popper:p},attributes:{},styles:{}},y=[],S=!1,_={state:u,setOptions:function(D){var $=typeof D=="function"?D(u.options):D;w(),u.options=Object.assign({},s,u.options,$),u.scrollParents={reference:se(r)?Ke(r):r.contextElement?Ke(r.contextElement):[],popper:Ke(p)};var N=Gr(Jr([].concat(o,u.options.modifiers)));return u.orderedModifiers=N.filter(function(b){return b.enabled}),k(),_.update()},forceUpdate:function(){if(!S){var D=u.elements,$=D.reference,N=D.popper;if(mi($,N)){u.rects={reference:Hr($,Qe(N),u.options.strategy==="fixed"),popper:Lo(N)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(H){return u.modifiersData[H.name]=Object.assign({},H.data)});for(var b=0;b<u.orderedModifiers.length;b++){if(u.reset===!0){u.reset=!1,b=-1;continue}var T=u.orderedModifiers[b],x=T.fn,I=T.options,G=I===void 0?{}:I,B=T.name;typeof x=="function"&&(u=x({state:u,options:G,name:B,instance:_})||u)}}}},update:Ur(function(){return new Promise(function(A){_.forceUpdate(),A(u)})}),destroy:function(){w(),S=!0}};if(!mi(r,p))return _;_.setOptions(h).then(function(A){!S&&h.onFirstUpdate&&h.onFirstUpdate(A)});function k(){u.orderedModifiers.forEach(function(A){var D=A.name,$=A.options,N=$===void 0?{}:$,b=A.effect;if(typeof b=="function"){var T=b({state:u,name:D,instance:_,options:N}),x=function(){};y.push(T||x)}})}function w(){y.forEach(function(A){return A()}),y=[]}return _}}var jr=Mn(),zr=[Io,Ho,$o,Mo],Wr=Mn({defaultModifiers:zr}),Vr=[Io,Ho,$o,Mo,Ds,xs,Ms,Os,Cs],Bo=Mn({defaultModifiers:Vr});const Ls=Object.freeze(Object.defineProperty({__proto__:null,afterMain:vs,afterRead:ds,afterWrite:gs,applyStyles:Mo,arrow:Os,auto:Cn,basePlacements:De,beforeMain:ms,beforeRead:cs,beforeWrite:fs,bottom:it,clippingParents:rs,computeStyles:$o,createPopper:Bo,createPopperBase:jr,createPopperLite:Wr,detectOverflow:Te,end:Se,eventListeners:Io,flip:xs,hide:Cs,left:Q,main:hs,modifierPhases:_s,offset:Ds,placements:Co,popper:_e,popperGenerator:Mn,popperOffsets:Ho,preventOverflow:Ms,read:us,reference:ps,right:st,start:ie,top:X,variationPlacements:fo,viewport:xo,write:bs},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.7 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Jt=new Map,Jn={set(e,t,n){Jt.has(e)||Jt.set(e,new Map);const o=Jt.get(e);if(!o.has(t)&&o.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`);return}o.set(t,n)},get(e,t){return Jt.has(e)&&Jt.get(e).get(t)||null},remove(e,t){if(!Jt.has(e))return;const n=Jt.get(e);n.delete(t),n.size===0&&Jt.delete(e)}},qr=1e6,Kr=1e3,_o="transitionend",Ns=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(t,n)=>`#${CSS.escape(n)}`)),e),Yr=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),Xr=e=>{do e+=Math.floor(Math.random()*qr);while(document.getElementById(e));return e},Qr=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const o=Number.parseFloat(t),i=Number.parseFloat(n);return!o&&!i?0:(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*Kr)},$s=e=>{e.dispatchEvent(new Event(_o))},Rt=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u"),jt=e=>Rt(e)?e.jquery?e[0]:e:typeof e=="string"&&e.length>0?document.querySelector(Ns(e)):null,Me=e=>{if(!Rt(e)||e.getClientRects().length===0)return!1;const t=getComputedStyle(e).getPropertyValue("visibility")==="visible",n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const o=e.closest("summary");if(o&&o.parentNode!==n||o===null)return!1}return t},zt=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled")?!0:typeof e.disabled<"u"?e.disabled:e.hasAttribute("disabled")&&e.getAttribute("disabled")!=="false",Is=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode=="function"){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?Is(e.parentNode):null},kn=()=>{},Ze=e=>{e.offsetHeight},Rs=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,jn=[],Zr=e=>{document.readyState==="loading"?(jn.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of jn)t()}),jn.push(e)):e()},rt=()=>document.documentElement.dir==="rtl",ut=e=>{Zr(()=>{const t=Rs();if(t){const n=e.NAME,o=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=o,e.jQueryInterface)}})},nt=(e,t=[],n=e)=>typeof e=="function"?e.call(...t):n,Ps=(e,t,n=!0)=>{if(!n){nt(e);return}const i=Qr(t)+5;let s=!1;const l=({target:r})=>{r===t&&(s=!0,t.removeEventListener(_o,l),nt(e))};t.addEventListener(_o,l),setTimeout(()=>{s||$s(t)},i)},Go=(e,t,n,o)=>{const i=e.length;let s=e.indexOf(t);return s===-1?!n&&o?e[i-1]:e[0]:(s+=n?1:-1,o&&(s=(s+i)%i),e[Math.max(0,Math.min(s,i-1))])},tp=/[^.]*(?=\..*)\.|.*/,ep=/\..*/,np=/::\d+$/,zn={};let hi=1;const Fs={mouseenter:"mouseover",mouseleave:"mouseout"},op=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Hs(e,t){return t&&`${t}::${hi++}`||e.uidEvent||hi++}function Bs(e){const t=Hs(e);return e.uidEvent=t,zn[t]=zn[t]||{},zn[t]}function ip(e,t){return function n(o){return Uo(o,{delegateTarget:e}),n.oneOff&&d.off(e,o.type,t),t.apply(e,[o])}}function sp(e,t,n){return function o(i){const s=e.querySelectorAll(t);for(let{target:l}=i;l&&l!==this;l=l.parentNode)for(const r of s)if(r===l)return Uo(i,{delegateTarget:l}),o.oneOff&&d.off(e,i.type,t,n),n.apply(l,[i])}}function Gs(e,t,n=null){return Object.values(e).find(o=>o.callable===t&&o.delegationSelector===n)}function Us(e,t,n){const o=typeof t=="string",i=o?n:t||n;let s=Js(e);return op.has(s)||(s=e),[o,i,s]}function vi(e,t,n,o,i){if(typeof t!="string"||!e)return;let[s,l,r]=Us(t,n,o);t in Fs&&(l=(k=>function(w){if(!w.relatedTarget||w.relatedTarget!==w.delegateTarget&&!w.delegateTarget.contains(w.relatedTarget))return k.call(this,w)})(l));const p=Bs(e),h=p[r]||(p[r]={}),u=Gs(h,l,s?n:null);if(u){u.oneOff=u.oneOff&&i;return}const y=Hs(l,t.replace(tp,"")),S=s?sp(e,n,l):ip(e,l);S.delegationSelector=s?n:null,S.callable=l,S.oneOff=i,S.uidEvent=y,h[y]=S,e.addEventListener(r,S,s)}function Eo(e,t,n,o,i){const s=Gs(t[n],o,i);s&&(e.removeEventListener(n,s,!!i),delete t[n][s.uidEvent])}function lp(e,t,n,o){const i=t[n]||{};for(const[s,l]of Object.entries(i))s.includes(o)&&Eo(e,t,n,l.callable,l.delegationSelector)}function Js(e){return e=e.replace(ep,""),Fs[e]||e}const d={on(e,t,n,o){vi(e,t,n,o,!1)},one(e,t,n,o){vi(e,t,n,o,!0)},off(e,t,n,o){if(typeof t!="string"||!e)return;const[i,s,l]=Us(t,n,o),r=l!==t,p=Bs(e),h=p[l]||{},u=t.startsWith(".");if(typeof s<"u"){if(!Object.keys(h).length)return;Eo(e,p,l,s,i?n:null);return}if(u)for(const y of Object.keys(p))lp(e,p,y,t.slice(1));for(const[y,S]of Object.entries(h)){const _=y.replace(np,"");(!r||t.includes(_))&&Eo(e,p,l,S.callable,S.delegationSelector)}},trigger(e,t,n){if(typeof t!="string"||!e)return null;const o=Rs(),i=Js(t),s=t!==i;let l=null,r=!0,p=!0,h=!1;s&&o&&(l=o.Event(t,n),o(e).trigger(l),r=!l.isPropagationStopped(),p=!l.isImmediatePropagationStopped(),h=l.isDefaultPrevented());const u=Uo(new Event(t,{bubbles:r,cancelable:!0}),n);return h&&u.preventDefault(),p&&e.dispatchEvent(u),u.defaultPrevented&&l&&l.preventDefault(),u}};function Uo(e,t={}){for(const[n,o]of Object.entries(t))try{e[n]=o}catch{Object.defineProperty(e,n,{configurable:!0,get(){return o}})}return e}function fi(e){if(e==="true")return!0;if(e==="false")return!1;if(e===Number(e).toString())return Number(e);if(e===""||e==="null")return null;if(typeof e!="string")return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function Wn(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const Pt={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${Wn(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${Wn(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter(o=>o.startsWith("bs")&&!o.startsWith("bsConfig"));for(const o of n){let i=o.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1),t[i]=fi(e.dataset[o])}return t},getDataAttribute(e,t){return fi(e.getAttribute(`data-bs-${Wn(t)}`))}};class tn{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,n){const o=Rt(n)?Pt.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof o=="object"?o:{},...Rt(n)?Pt.getDataAttributes(n):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,n=this.constructor.DefaultType){for(const[o,i]of Object.entries(n)){const s=t[o],l=Rt(s)?"element":Yr(s);if(!new RegExp(i).test(l))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${o}" provided type "${l}" but expected type "${i}".`)}}}const ap="5.3.7";class bt extends tn{constructor(t,n){super(),t=jt(t),t&&(this._element=t,this._config=this._getConfig(n),Jn.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Jn.remove(this._element,this.constructor.DATA_KEY),d.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,n,o=!0){Ps(t,n,o)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Jn.get(jt(t),this.DATA_KEY)}static getOrCreateInstance(t,n={}){return this.getInstance(t)||new this(t,typeof n=="object"?n:null)}static get VERSION(){return ap}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const Vn=e=>{let t=e.getAttribute("data-bs-target");if(!t||t==="#"){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&n!=="#"?n.trim():null}return t?t.split(",").map(n=>Ns(n)).join(","):null},E={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(n=>n.matches(t))},parents(e,t){const n=[];let o=e.parentNode.closest(t);for(;o;)n.push(o),o=o.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(t,e).filter(n=>!zt(n)&&Me(n))},getSelectorFromElement(e){const t=Vn(e);return t&&E.findOne(t)?t:null},getElementFromSelector(e){const t=Vn(e);return t?E.findOne(t):null},getMultipleElementsFromSelector(e){const t=Vn(e);return t?E.find(t):[]}},Ln=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,o=e.NAME;d.on(document,n,`[data-bs-dismiss="${o}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),zt(this))return;const s=E.getElementFromSelector(this)||this.closest(`.${o}`);e.getOrCreateInstance(s)[t]()})},rp="alert",pp="bs.alert",js=`.${pp}`,cp=`close${js}`,up=`closed${js}`,dp="fade",mp="show";class Nn extends bt{static get NAME(){return rp}close(){if(d.trigger(this._element,cp).defaultPrevented)return;this._element.classList.remove(mp);const n=this._element.classList.contains(dp);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),d.trigger(this._element,up),this.dispose()}static jQueryInterface(t){return this.each(function(){const n=Nn.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}Ln(Nn,"close");ut(Nn);const hp="button",vp="bs.button",fp=`.${vp}`,bp=".data-api",gp="active",bi='[data-bs-toggle="button"]',_p=`click${fp}${bp}`;class $n extends bt{static get NAME(){return hp}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(gp))}static jQueryInterface(t){return this.each(function(){const n=$n.getOrCreateInstance(this);t==="toggle"&&n[t]()})}}d.on(document,_p,bi,e=>{e.preventDefault();const t=e.target.closest(bi);$n.getOrCreateInstance(t).toggle()});ut($n);const Ep="swipe",Le=".bs.swipe",yp=`touchstart${Le}`,wp=`touchmove${Le}`,Sp=`touchend${Le}`,Ap=`pointerdown${Le}`,Op=`pointerup${Le}`,kp="touch",Tp="pen",xp="pointer-event",Cp=40,Dp={endCallback:null,leftCallback:null,rightCallback:null},Mp={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Tn extends tn{constructor(t,n){super(),this._element=t,!(!t||!Tn.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Dp}static get DefaultType(){return Mp}static get NAME(){return Ep}dispose(){d.off(this._element,Le)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),nt(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=Cp)return;const n=t/this._deltaX;this._deltaX=0,n&&nt(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(d.on(this._element,Ap,t=>this._start(t)),d.on(this._element,Op,t=>this._end(t)),this._element.classList.add(xp)):(d.on(this._element,yp,t=>this._start(t)),d.on(this._element,wp,t=>this._move(t)),d.on(this._element,Sp,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===Tp||t.pointerType===kp)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Lp="carousel",Np="bs.carousel",qt=`.${Np}`,zs=".data-api",$p="ArrowLeft",Ip="ArrowRight",Rp=500,He="next",fe="prev",Ee="left",yn="right",Pp=`slide${qt}`,qn=`slid${qt}`,Fp=`keydown${qt}`,Hp=`mouseenter${qt}`,Bp=`mouseleave${qt}`,Gp=`dragstart${qt}`,Up=`load${qt}${zs}`,Jp=`click${qt}${zs}`,Ws="carousel",un="active",jp="slide",zp="carousel-item-end",Wp="carousel-item-start",Vp="carousel-item-next",qp="carousel-item-prev",Vs=".active",qs=".carousel-item",Kp=Vs+qs,Yp=".carousel-item img",Xp=".carousel-indicators",Qp="[data-bs-slide], [data-bs-slide-to]",Zp='[data-bs-ride="carousel"]',tc={[$p]:yn,[Ip]:Ee},ec={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},nc={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class en extends bt{constructor(t,n){super(t,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=E.findOne(Xp,this._element),this._addEventListeners(),this._config.ride===Ws&&this.cycle()}static get Default(){return ec}static get DefaultType(){return nc}static get NAME(){return Lp}next(){this._slide(He)}nextWhenVisible(){!document.hidden&&Me(this._element)&&this.next()}prev(){this._slide(fe)}pause(){this._isSliding&&$s(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){d.one(this._element,qn,()=>this.cycle());return}this.cycle()}}to(t){const n=this._getItems();if(t>n.length-1||t<0)return;if(this._isSliding){d.one(this._element,qn,()=>this.to(t));return}const o=this._getItemIndex(this._getActive());if(o===t)return;const i=t>o?He:fe;this._slide(i,n[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&d.on(this._element,Fp,t=>this._keydown(t)),this._config.pause==="hover"&&(d.on(this._element,Hp,()=>this.pause()),d.on(this._element,Bp,()=>this._maybeEnableCycle())),this._config.touch&&Tn.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const o of E.find(Yp,this._element))d.on(o,Gp,i=>i.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(Ee)),rightCallback:()=>this._slide(this._directionToOrder(yn)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Rp+this._config.interval))}};this._swipeHelper=new Tn(this._element,n)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const n=tc[t.key];n&&(t.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const n=E.findOne(Vs,this._indicatorsElement);n.classList.remove(un),n.removeAttribute("aria-current");const o=E.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);o&&(o.classList.add(un),o.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const n=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(t,n=null){if(this._isSliding)return;const o=this._getActive(),i=t===He,s=n||Go(this._getItems(),o,i,this._config.wrap);if(s===o)return;const l=this._getItemIndex(s),r=_=>d.trigger(this._element,_,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(o),to:l});if(r(Pp).defaultPrevented||!o||!s)return;const h=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(l),this._activeElement=s;const u=i?Wp:zp,y=i?Vp:qp;s.classList.add(y),Ze(s),o.classList.add(u),s.classList.add(u);const S=()=>{s.classList.remove(u,y),s.classList.add(un),o.classList.remove(un,y,u),this._isSliding=!1,r(qn)};this._queueCallback(S,o,this._isAnimated()),h&&this.cycle()}_isAnimated(){return this._element.classList.contains(jp)}_getActive(){return E.findOne(Kp,this._element)}_getItems(){return E.find(qs,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return rt()?t===Ee?fe:He:t===Ee?He:fe}_orderToDirection(t){return rt()?t===fe?Ee:yn:t===fe?yn:Ee}static jQueryInterface(t){return this.each(function(){const n=en.getOrCreateInstance(this,t);if(typeof t=="number"){n.to(t);return}if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}d.on(document,Jp,Qp,function(e){const t=E.getElementFromSelector(this);if(!t||!t.classList.contains(Ws))return;e.preventDefault();const n=en.getOrCreateInstance(t),o=this.getAttribute("data-bs-slide-to");if(o){n.to(o),n._maybeEnableCycle();return}if(Pt.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});d.on(window,Up,()=>{const e=E.find(Zp);for(const t of e)en.getOrCreateInstance(t)});ut(en);const oc="collapse",ic="bs.collapse",nn=`.${ic}`,sc=".data-api",lc=`show${nn}`,ac=`shown${nn}`,rc=`hide${nn}`,pc=`hidden${nn}`,cc=`click${nn}${sc}`,Kn="show",we="collapse",dn="collapsing",uc="collapsed",dc=`:scope .${we} .${we}`,mc="collapse-horizontal",hc="width",vc="height",fc=".collapse.show, .collapse.collapsing",yo='[data-bs-toggle="collapse"]',bc={parent:null,toggle:!0},gc={parent:"(null|element)",toggle:"boolean"};class Xe extends bt{constructor(t,n){super(t,n),this._isTransitioning=!1,this._triggerArray=[];const o=E.find(yo);for(const i of o){const s=E.getSelectorFromElement(i),l=E.find(s).filter(r=>r===this._element);s!==null&&l.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return bc}static get DefaultType(){return gc}static get NAME(){return oc}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(fc).filter(r=>r!==this._element).map(r=>Xe.getOrCreateInstance(r,{toggle:!1}))),t.length&&t[0]._isTransitioning||d.trigger(this._element,lc).defaultPrevented)return;for(const r of t)r.hide();const o=this._getDimension();this._element.classList.remove(we),this._element.classList.add(dn),this._element.style[o]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(dn),this._element.classList.add(we,Kn),this._element.style[o]="",d.trigger(this._element,ac)},l=`scroll${o[0].toUpperCase()+o.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[o]=`${this._element[l]}px`}hide(){if(this._isTransitioning||!this._isShown()||d.trigger(this._element,rc).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,Ze(this._element),this._element.classList.add(dn),this._element.classList.remove(we,Kn);for(const i of this._triggerArray){const s=E.getElementFromSelector(i);s&&!this._isShown(s)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(dn),this._element.classList.add(we),d.trigger(this._element,pc)};this._element.style[n]="",this._queueCallback(o,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Kn)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=jt(t.parent),t}_getDimension(){return this._element.classList.contains(mc)?hc:vc}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(yo);for(const n of t){const o=E.getElementFromSelector(n);o&&this._addAriaAndCollapsedClass([n],this._isShown(o))}}_getFirstLevelChildren(t){const n=E.find(dc,this._config.parent);return E.find(t,this._config.parent).filter(o=>!n.includes(o))}_addAriaAndCollapsedClass(t,n){if(t.length)for(const o of t)o.classList.toggle(uc,!n),o.setAttribute("aria-expanded",n)}static jQueryInterface(t){const n={};return typeof t=="string"&&/show|hide/.test(t)&&(n.toggle=!1),this.each(function(){const o=Xe.getOrCreateInstance(this,n);if(typeof t=="string"){if(typeof o[t]>"u")throw new TypeError(`No method named "${t}"`);o[t]()}})}}d.on(document,cc,yo,function(e){(e.target.tagName==="A"||e.delegateTarget&&e.delegateTarget.tagName==="A")&&e.preventDefault();for(const t of E.getMultipleElementsFromSelector(this))Xe.getOrCreateInstance(t,{toggle:!1}).toggle()});ut(Xe);const gi="dropdown",_c="bs.dropdown",le=`.${_c}`,Jo=".data-api",Ec="Escape",_i="Tab",yc="ArrowUp",Ei="ArrowDown",wc=2,Sc=`hide${le}`,Ac=`hidden${le}`,Oc=`show${le}`,kc=`shown${le}`,Ks=`click${le}${Jo}`,Ys=`keydown${le}${Jo}`,Tc=`keyup${le}${Jo}`,ye="show",xc="dropup",Cc="dropend",Dc="dropstart",Mc="dropup-center",Lc="dropdown-center",ee='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Nc=`${ee}.${ye}`,wn=".dropdown-menu",$c=".navbar",Ic=".navbar-nav",Rc=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Pc=rt()?"top-end":"top-start",Fc=rt()?"top-start":"top-end",Hc=rt()?"bottom-end":"bottom-start",Bc=rt()?"bottom-start":"bottom-end",Gc=rt()?"left-start":"right-start",Uc=rt()?"right-start":"left-start",Jc="top",jc="bottom",zc={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Wc={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class wt extends bt{constructor(t,n){super(t,n),this._popper=null,this._parent=this._element.parentNode,this._menu=E.next(this._element,wn)[0]||E.prev(this._element,wn)[0]||E.findOne(wn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return zc}static get DefaultType(){return Wc}static get NAME(){return gi}toggle(){return this._isShown()?this.hide():this.show()}show(){if(zt(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!d.trigger(this._element,Oc,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Ic))for(const o of[].concat(...document.body.children))d.on(o,"mouseover",kn);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ye),this._element.classList.add(ye),d.trigger(this._element,kc,t)}}hide(){if(zt(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!d.trigger(this._element,Sc,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))d.off(o,"mouseover",kn);this._popper&&this._popper.destroy(),this._menu.classList.remove(ye),this._element.classList.remove(ye),this._element.setAttribute("aria-expanded","false"),Pt.removeDataAttribute(this._menu,"popper"),d.trigger(this._element,Ac,t),this._element.focus()}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!Rt(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${gi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof Ls>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let t=this._element;this._config.reference==="parent"?t=this._parent:Rt(this._config.reference)?t=jt(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const n=this._getPopperConfig();this._popper=Bo(t,this._menu,n)}_isShown(){return this._menu.classList.contains(ye)}_getPlacement(){const t=this._parent;if(t.classList.contains(Cc))return Gc;if(t.classList.contains(Dc))return Uc;if(t.classList.contains(Mc))return Jc;if(t.classList.contains(Lc))return jc;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(xc)?n?Fc:Pc:n?Bc:Hc}_detectNavbar(){return this._element.closest($c)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Pt.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...nt(this._config.popperConfig,[void 0,t])}}_selectMenuItem({key:t,target:n}){const o=E.find(Rc,this._menu).filter(i=>Me(i));o.length&&Go(o,n,t===Ei,!o.includes(n)).focus()}static jQueryInterface(t){return this.each(function(){const n=wt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}static clearMenus(t){if(t.button===wc||t.type==="keyup"&&t.key!==_i)return;const n=E.find(Nc);for(const o of n){const i=wt.getInstance(o);if(!i||i._config.autoClose===!1)continue;const s=t.composedPath(),l=s.includes(i._menu);if(s.includes(i._element)||i._config.autoClose==="inside"&&!l||i._config.autoClose==="outside"&&l||i._menu.contains(t.target)&&(t.type==="keyup"&&t.key===_i||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const r={relatedTarget:i._element};t.type==="click"&&(r.clickEvent=t),i._completeHide(r)}}static dataApiKeydownHandler(t){const n=/input|textarea/i.test(t.target.tagName),o=t.key===Ec,i=[yc,Ei].includes(t.key);if(!i&&!o||n&&!o)return;t.preventDefault();const s=this.matches(ee)?this:E.prev(this,ee)[0]||E.next(this,ee)[0]||E.findOne(ee,t.delegateTarget.parentNode),l=wt.getOrCreateInstance(s);if(i){t.stopPropagation(),l.show(),l._selectMenuItem(t);return}l._isShown()&&(t.stopPropagation(),l.hide(),s.focus())}}d.on(document,Ys,ee,wt.dataApiKeydownHandler);d.on(document,Ys,wn,wt.dataApiKeydownHandler);d.on(document,Ks,wt.clearMenus);d.on(document,Tc,wt.clearMenus);d.on(document,Ks,ee,function(e){e.preventDefault(),wt.getOrCreateInstance(this).toggle()});ut(wt);const Xs="backdrop",Vc="fade",yi="show",wi=`mousedown.bs.${Xs}`,qc={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Kc={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Qs extends tn{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return qc}static get DefaultType(){return Kc}static get NAME(){return Xs}show(t){if(!this._config.isVisible){nt(t);return}this._append();const n=this._getElement();this._config.isAnimated&&Ze(n),n.classList.add(yi),this._emulateAnimation(()=>{nt(t)})}hide(t){if(!this._config.isVisible){nt(t);return}this._getElement().classList.remove(yi),this._emulateAnimation(()=>{this.dispose(),nt(t)})}dispose(){this._isAppended&&(d.off(this._element,wi),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Vc),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=jt(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),d.on(t,wi,()=>{nt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Ps(t,this._getElement(),this._config.isAnimated)}}const Yc="focustrap",Xc="bs.focustrap",xn=`.${Xc}`,Qc=`focusin${xn}`,Zc=`keydown.tab${xn}`,tu="Tab",eu="forward",Si="backward",nu={autofocus:!0,trapElement:null},ou={autofocus:"boolean",trapElement:"element"};class Zs extends tn{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return nu}static get DefaultType(){return ou}static get NAME(){return Yc}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),d.off(document,xn),d.on(document,Qc,t=>this._handleFocusin(t)),d.on(document,Zc,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,d.off(document,xn))}_handleFocusin(t){const{trapElement:n}=this._config;if(t.target===document||t.target===n||n.contains(t.target))return;const o=E.focusableChildren(n);o.length===0?n.focus():this._lastTabNavDirection===Si?o[o.length-1].focus():o[0].focus()}_handleKeydown(t){t.key===tu&&(this._lastTabNavDirection=t.shiftKey?Si:eu)}}const Ai=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Oi=".sticky-top",mn="padding-right",ki="margin-right";class wo{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,mn,n=>n+t),this._setElementAttributes(Ai,mn,n=>n+t),this._setElementAttributes(Oi,ki,n=>n-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,mn),this._resetElementAttributes(Ai,mn),this._resetElementAttributes(Oi,ki)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,n,o){const i=this.getWidth(),s=l=>{if(l!==this._element&&window.innerWidth>l.clientWidth+i)return;this._saveInitialAttribute(l,n);const r=window.getComputedStyle(l).getPropertyValue(n);l.style.setProperty(n,`${o(Number.parseFloat(r))}px`)};this._applyManipulationCallback(t,s)}_saveInitialAttribute(t,n){const o=t.style.getPropertyValue(n);o&&Pt.setDataAttribute(t,n,o)}_resetElementAttributes(t,n){const o=i=>{const s=Pt.getDataAttribute(i,n);if(s===null){i.style.removeProperty(n);return}Pt.removeDataAttribute(i,n),i.style.setProperty(n,s)};this._applyManipulationCallback(t,o)}_applyManipulationCallback(t,n){if(Rt(t)){n(t);return}for(const o of E.find(t,this._element))n(o)}}const iu="modal",su="bs.modal",pt=`.${su}`,lu=".data-api",au="Escape",ru=`hide${pt}`,pu=`hidePrevented${pt}`,tl=`hidden${pt}`,el=`show${pt}`,cu=`shown${pt}`,uu=`resize${pt}`,du=`click.dismiss${pt}`,mu=`mousedown.dismiss${pt}`,hu=`keydown.dismiss${pt}`,vu=`click${pt}${lu}`,Ti="modal-open",fu="fade",xi="show",Yn="modal-static",bu=".modal.show",gu=".modal-dialog",_u=".modal-body",Eu='[data-bs-toggle="modal"]',yu={backdrop:!0,focus:!0,keyboard:!0},wu={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class xe extends bt{constructor(t,n){super(t,n),this._dialog=E.findOne(gu,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new wo,this._addEventListeners()}static get Default(){return yu}static get DefaultType(){return wu}static get NAME(){return iu}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||d.trigger(this._element,el,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Ti),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||d.trigger(this._element,ru).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(xi),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){d.off(window,pt),d.off(this._dialog,pt),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Qs({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Zs({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=E.findOne(_u,this._dialog);n&&(n.scrollTop=0),Ze(this._element),this._element.classList.add(xi);const o=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,d.trigger(this._element,cu,{relatedTarget:t})};this._queueCallback(o,this._dialog,this._isAnimated())}_addEventListeners(){d.on(this._element,hu,t=>{if(t.key===au){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),d.on(window,uu,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),d.on(this._element,mu,t=>{d.one(this._element,du,n=>{if(!(this._element!==t.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Ti),this._resetAdjustments(),this._scrollBar.reset(),d.trigger(this._element,tl)})}_isAnimated(){return this._element.classList.contains(fu)}_triggerBackdropTransition(){if(d.trigger(this._element,pu).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,o=this._element.style.overflowY;o==="hidden"||this._element.classList.contains(Yn)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(Yn),this._queueCallback(()=>{this._element.classList.remove(Yn),this._queueCallback(()=>{this._element.style.overflowY=o},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),o=n>0;if(o&&!t){const i=rt()?"paddingLeft":"paddingRight";this._element.style[i]=`${n}px`}if(!o&&t){const i=rt()?"paddingRight":"paddingLeft";this._element.style[i]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,n){return this.each(function(){const o=xe.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof o[t]>"u")throw new TypeError(`No method named "${t}"`);o[t](n)}})}}d.on(document,vu,Eu,function(e){const t=E.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),d.one(t,el,i=>{i.defaultPrevented||d.one(t,tl,()=>{Me(this)&&this.focus()})});const n=E.findOne(bu);n&&xe.getInstance(n).hide(),xe.getOrCreateInstance(t).toggle(this)});Ln(xe);ut(xe);const Su="offcanvas",Au="bs.offcanvas",Ht=`.${Au}`,nl=".data-api",Ou=`load${Ht}${nl}`,ku="Escape",Ci="show",Di="showing",Mi="hiding",Tu="offcanvas-backdrop",ol=".offcanvas.show",xu=`show${Ht}`,Cu=`shown${Ht}`,Du=`hide${Ht}`,Li=`hidePrevented${Ht}`,il=`hidden${Ht}`,Mu=`resize${Ht}`,Lu=`click${Ht}${nl}`,Nu=`keydown.dismiss${Ht}`,$u='[data-bs-toggle="offcanvas"]',Iu={backdrop:!0,keyboard:!0,scroll:!1},Ru={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Wt extends bt{constructor(t,n){super(t,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Iu}static get DefaultType(){return Ru}static get NAME(){return Su}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||d.trigger(this._element,xu,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new wo().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Di);const o=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Ci),this._element.classList.remove(Di),d.trigger(this._element,Cu,{relatedTarget:t})};this._queueCallback(o,this._element,!0)}hide(){if(!this._isShown||d.trigger(this._element,Du).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Mi),this._backdrop.hide();const n=()=>{this._element.classList.remove(Ci,Mi),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new wo().reset(),d.trigger(this._element,il)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){d.trigger(this._element,Li);return}this.hide()},n=!!this._config.backdrop;return new Qs({className:Tu,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?t:null})}_initializeFocusTrap(){return new Zs({trapElement:this._element})}_addEventListeners(){d.on(this._element,Nu,t=>{if(t.key===ku){if(this._config.keyboard){this.hide();return}d.trigger(this._element,Li)}})}static jQueryInterface(t){return this.each(function(){const n=Wt.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}d.on(document,Lu,$u,function(e){const t=E.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),zt(this))return;d.one(t,il,()=>{Me(this)&&this.focus()});const n=E.findOne(ol);n&&n!==t&&Wt.getInstance(n).hide(),Wt.getOrCreateInstance(t).toggle(this)});d.on(window,Ou,()=>{for(const e of E.find(ol))Wt.getOrCreateInstance(e).show()});d.on(window,Mu,()=>{for(const e of E.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(e).position!=="fixed"&&Wt.getOrCreateInstance(e).hide()});Ln(Wt);ut(Wt);const Pu=/^aria-[\w-]*$/i,sl={"*":["class","dir","id","lang","role",Pu],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Fu=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Hu=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Bu=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?Fu.has(n)?!!Hu.test(e.nodeValue):!0:t.filter(o=>o instanceof RegExp).some(o=>o.test(n))};function Gu(e,t,n){if(!e.length)return e;if(n&&typeof n=="function")return n(e);const i=new window.DOMParser().parseFromString(e,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const l of s){const r=l.nodeName.toLowerCase();if(!Object.keys(t).includes(r)){l.remove();continue}const p=[].concat(...l.attributes),h=[].concat(t["*"]||[],t[r]||[]);for(const u of p)Bu(u,h)||l.removeAttribute(u.nodeName)}return i.body.innerHTML}const Uu="TemplateFactory",Ju={allowList:sl,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},ju={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},zu={entry:"(string|element|function|null)",selector:"(string|element)"};class Wu extends tn{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Ju}static get DefaultType(){return ju}static get NAME(){return Uu}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[i,s]of Object.entries(this._config.content))this._setContent(t,s,i);const n=t.children[0],o=this._resolvePossibleFunction(this._config.extraClass);return o&&n.classList.add(...o.split(" ")),n}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[n,o]of Object.entries(t))super._typeCheckConfig({selector:n,entry:o},zu)}_setContent(t,n,o){const i=E.findOne(o,t);if(i){if(n=this._resolvePossibleFunction(n),!n){i.remove();return}if(Rt(n)){this._putElementInTemplate(jt(n),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(n);return}i.textContent=n}}_maybeSanitize(t){return this._config.sanitize?Gu(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return nt(t,[void 0,this])}_putElementInTemplate(t,n){if(this._config.html){n.innerHTML="",n.append(t);return}n.textContent=t.textContent}}const Vu="tooltip",qu=new Set(["sanitize","allowList","sanitizeFn"]),Xn="fade",Ku="modal",hn="show",Yu=".tooltip-inner",Ni=`.${Ku}`,$i="hide.bs.modal",Be="hover",Qn="focus",Zn="click",Xu="manual",Qu="hide",Zu="hidden",td="show",ed="shown",nd="inserted",od="click",id="focusin",sd="focusout",ld="mouseenter",ad="mouseleave",rd={AUTO:"auto",TOP:"top",RIGHT:rt()?"left":"right",BOTTOM:"bottom",LEFT:rt()?"right":"left"},pd={allowList:sl,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},cd={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Ne extends bt{constructor(t,n){if(typeof Ls>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(t,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return pd}static get DefaultType(){return cd}static get NAME(){return Vu}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),d.off(this._element.closest(Ni),$i,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=d.trigger(this._element,this.constructor.eventName(td)),o=(Is(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!o)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),d.trigger(this._element,this.constructor.eventName(nd))),this._popper=this._createPopper(i),i.classList.add(hn),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))d.on(r,"mouseover",kn);const l=()=>{d.trigger(this._element,this.constructor.eventName(ed)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(l,this.tip,this._isAnimated())}hide(){if(!this._isShown()||d.trigger(this._element,this.constructor.eventName(Qu)).defaultPrevented)return;if(this._getTipElement().classList.remove(hn),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))d.off(i,"mouseover",kn);this._activeTrigger[Zn]=!1,this._activeTrigger[Qn]=!1,this._activeTrigger[Be]=!1,this._isHovered=null;const o=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),d.trigger(this._element,this.constructor.eventName(Zu)))};this._queueCallback(o,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const n=this._getTemplateFactory(t).toHtml();if(!n)return null;n.classList.remove(Xn,hn),n.classList.add(`bs-${this.constructor.NAME}-auto`);const o=Xr(this.constructor.NAME).toString();return n.setAttribute("id",o),this._isAnimated()&&n.classList.add(Xn),n}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Wu({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Yu]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Xn)}_isShown(){return this.tip&&this.tip.classList.contains(hn)}_createPopper(t){const n=nt(this._config.placement,[this,t,this._element]),o=rd[n.toUpperCase()];return Bo(this._element,t,this._getPopperConfig(o))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_resolvePossibleFunction(t){return nt(t,[this._element,this._element])}_getPopperConfig(t){const n={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:o=>{this._getTipElement().setAttribute("data-popper-placement",o.state.placement)}}]};return{...n,...nt(this._config.popperConfig,[void 0,n])}}_setListeners(){const t=this._config.trigger.split(" ");for(const n of t)if(n==="click")d.on(this._element,this.constructor.eventName(od),this._config.selector,o=>{const i=this._initializeOnDelegatedTarget(o);i._activeTrigger[Zn]=!(i._isShown()&&i._activeTrigger[Zn]),i.toggle()});else if(n!==Xu){const o=n===Be?this.constructor.eventName(ld):this.constructor.eventName(id),i=n===Be?this.constructor.eventName(ad):this.constructor.eventName(sd);d.on(this._element,o,this._config.selector,s=>{const l=this._initializeOnDelegatedTarget(s);l._activeTrigger[s.type==="focusin"?Qn:Be]=!0,l._enter()}),d.on(this._element,i,this._config.selector,s=>{const l=this._initializeOnDelegatedTarget(s);l._activeTrigger[s.type==="focusout"?Qn:Be]=l._element.contains(s.relatedTarget),l._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},d.on(this._element.closest(Ni),$i,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,n){clearTimeout(this._timeout),this._timeout=setTimeout(t,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const n=Pt.getDataAttributes(this._element);for(const o of Object.keys(n))qu.has(o)&&delete n[o];return t={...n,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:jt(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[n,o]of Object.entries(this._config))this.constructor.Default[n]!==o&&(t[n]=o);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const n=Ne.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}ut(Ne);const ud="popover",dd=".popover-header",md=".popover-body",hd={...Ne.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},vd={...Ne.DefaultType,content:"(null|string|element|function)"};class jo extends Ne{static get Default(){return hd}static get DefaultType(){return vd}static get NAME(){return ud}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[dd]:this._getTitle(),[md]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const n=jo.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}ut(jo);const fd="scrollspy",bd="bs.scrollspy",zo=`.${bd}`,gd=".data-api",_d=`activate${zo}`,Ii=`click${zo}`,Ed=`load${zo}${gd}`,yd="dropdown-item",be="active",wd='[data-bs-spy="scroll"]',to="[href]",Sd=".nav, .list-group",Ri=".nav-link",Ad=".nav-item",Od=".list-group-item",kd=`${Ri}, ${Ad} > ${Ri}, ${Od}`,Td=".dropdown",xd=".dropdown-toggle",Cd={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Dd={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class In extends bt{constructor(t,n){super(t,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Cd}static get DefaultType(){return Dd}static get NAME(){return fd}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=jt(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(n=>Number.parseFloat(n))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(d.off(this._config.target,Ii),d.on(this._config.target,Ii,to,t=>{const n=this._observableSections.get(t.target.hash);if(n){t.preventDefault();const o=this._rootElement||window,i=n.offsetTop-this._element.offsetTop;if(o.scrollTo){o.scrollTo({top:i,behavior:"smooth"});return}o.scrollTop=i}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),t)}_observerCallback(t){const n=l=>this._targetLinks.get(`#${l.target.id}`),o=l=>{this._previousScrollData.visibleEntryTop=l.target.offsetTop,this._process(n(l))},i=(this._rootElement||document.documentElement).scrollTop,s=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const l of t){if(!l.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(l));continue}const r=l.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&r){if(o(l),!i)return;continue}!s&&!r&&o(l)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=E.find(to,this._config.target);for(const n of t){if(!n.hash||zt(n))continue;const o=E.findOne(decodeURI(n.hash),this._element);Me(o)&&(this._targetLinks.set(decodeURI(n.hash),n),this._observableSections.set(n.hash,o))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(be),this._activateParents(t),d.trigger(this._element,_d,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(yd)){E.findOne(xd,t.closest(Td)).classList.add(be);return}for(const n of E.parents(t,Sd))for(const o of E.prev(n,kd))o.classList.add(be)}_clearActiveClass(t){t.classList.remove(be);const n=E.find(`${to}.${be}`,t);for(const o of n)o.classList.remove(be)}static jQueryInterface(t){return this.each(function(){const n=In.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}d.on(window,Ed,()=>{for(const e of E.find(wd))In.getOrCreateInstance(e)});ut(In);const Md="tab",Ld="bs.tab",ae=`.${Ld}`,Nd=`hide${ae}`,$d=`hidden${ae}`,Id=`show${ae}`,Rd=`shown${ae}`,Pd=`click${ae}`,Fd=`keydown${ae}`,Hd=`load${ae}`,Bd="ArrowLeft",Pi="ArrowRight",Gd="ArrowUp",Fi="ArrowDown",eo="Home",Hi="End",ne="active",Bi="fade",no="show",Ud="dropdown",ll=".dropdown-toggle",Jd=".dropdown-menu",oo=`:not(${ll})`,jd='.list-group, .nav, [role="tablist"]',zd=".nav-item, .list-group-item",Wd=`.nav-link${oo}, .list-group-item${oo}, [role="tab"]${oo}`,al='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',io=`${Wd}, ${al}`,Vd=`.${ne}[data-bs-toggle="tab"], .${ne}[data-bs-toggle="pill"], .${ne}[data-bs-toggle="list"]`;class Ce extends bt{constructor(t){super(t),this._parent=this._element.closest(jd),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),d.on(this._element,Fd,n=>this._keydown(n)))}static get NAME(){return Md}show(){const t=this._element;if(this._elemIsActive(t))return;const n=this._getActiveElem(),o=n?d.trigger(n,Nd,{relatedTarget:t}):null;d.trigger(t,Id,{relatedTarget:n}).defaultPrevented||o&&o.defaultPrevented||(this._deactivate(n,t),this._activate(t,n))}_activate(t,n){if(!t)return;t.classList.add(ne),this._activate(E.getElementFromSelector(t));const o=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(no);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),d.trigger(t,Rd,{relatedTarget:n})};this._queueCallback(o,t,t.classList.contains(Bi))}_deactivate(t,n){if(!t)return;t.classList.remove(ne),t.blur(),this._deactivate(E.getElementFromSelector(t));const o=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(no);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),d.trigger(t,$d,{relatedTarget:n})};this._queueCallback(o,t,t.classList.contains(Bi))}_keydown(t){if(![Bd,Pi,Gd,Fi,eo,Hi].includes(t.key))return;t.stopPropagation(),t.preventDefault();const n=this._getChildren().filter(i=>!zt(i));let o;if([eo,Hi].includes(t.key))o=n[t.key===eo?0:n.length-1];else{const i=[Pi,Fi].includes(t.key);o=Go(n,t.target,i,!0)}o&&(o.focus({preventScroll:!0}),Ce.getOrCreateInstance(o).show())}_getChildren(){return E.find(io,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,n){this._setAttributeIfNotExists(t,"role","tablist");for(const o of n)this._setInitialAttributesOnChild(o)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const n=this._elemIsActive(t),o=this._getOuterElement(t);t.setAttribute("aria-selected",n),o!==t&&this._setAttributeIfNotExists(o,"role","presentation"),n||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const n=E.getElementFromSelector(t);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,n){const o=this._getOuterElement(t);if(!o.classList.contains(Ud))return;const i=(s,l)=>{const r=E.findOne(s,o);r&&r.classList.toggle(l,n)};i(ll,ne),i(Jd,no),o.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(t,n,o){t.hasAttribute(n)||t.setAttribute(n,o)}_elemIsActive(t){return t.classList.contains(ne)}_getInnerElement(t){return t.matches(io)?t:E.findOne(io,t)}_getOuterElement(t){return t.closest(zd)||t}static jQueryInterface(t){return this.each(function(){const n=Ce.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}d.on(document,Pd,al,function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),!zt(this)&&Ce.getOrCreateInstance(this).show()});d.on(window,Hd,()=>{for(const e of E.find(Vd))Ce.getOrCreateInstance(e)});ut(Ce);const qd="toast",Kd="bs.toast",Kt=`.${Kd}`,Yd=`mouseover${Kt}`,Xd=`mouseout${Kt}`,Qd=`focusin${Kt}`,Zd=`focusout${Kt}`,tm=`hide${Kt}`,em=`hidden${Kt}`,nm=`show${Kt}`,om=`shown${Kt}`,im="fade",Gi="hide",vn="show",fn="showing",sm={animation:"boolean",autohide:"boolean",delay:"number"},lm={animation:!0,autohide:!0,delay:5e3};class Rn extends bt{constructor(t,n){super(t,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return lm}static get DefaultType(){return sm}static get NAME(){return qd}show(){if(d.trigger(this._element,nm).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(im);const n=()=>{this._element.classList.remove(fn),d.trigger(this._element,om),this._maybeScheduleHide()};this._element.classList.remove(Gi),Ze(this._element),this._element.classList.add(vn,fn),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||d.trigger(this._element,tm).defaultPrevented)return;const n=()=>{this._element.classList.add(Gi),this._element.classList.remove(fn,vn),d.trigger(this._element,em)};this._element.classList.add(fn),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(vn),super.dispose()}isShown(){return this._element.classList.contains(vn)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,n){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const o=t.relatedTarget;this._element===o||this._element.contains(o)||this._maybeScheduleHide()}_setListeners(){d.on(this._element,Yd,t=>this._onInteraction(t,!0)),d.on(this._element,Xd,t=>this._onInteraction(t,!1)),d.on(this._element,Qd,t=>this._onInteraction(t,!0)),d.on(this._element,Zd,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const n=Rn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}Ln(Rn);ut(Rn);/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */const{entries:rl,setPrototypeOf:Ui,isFrozen:am,getPrototypeOf:rm,getOwnPropertyDescriptor:pm}=Object;let{freeze:Z,seal:ct,create:pl}=Object,{apply:So,construct:Ao}=typeof Reflect<"u"&&Reflect;Z||(Z=function(t){return t});ct||(ct=function(t){return t});So||(So=function(t,n,o){return t.apply(n,o)});Ao||(Ao=function(t,n){return new t(...n)});const bn=tt(Array.prototype.forEach),cm=tt(Array.prototype.lastIndexOf),Ji=tt(Array.prototype.pop),Ge=tt(Array.prototype.push),um=tt(Array.prototype.splice),Sn=tt(String.prototype.toLowerCase),so=tt(String.prototype.toString),ji=tt(String.prototype.match),Ue=tt(String.prototype.replace),dm=tt(String.prototype.indexOf),mm=tt(String.prototype.trim),ht=tt(Object.prototype.hasOwnProperty),Y=tt(RegExp.prototype.test),Je=hm(TypeError);function tt(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return So(e,t,o)}}function hm(e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return Ao(e,n)}}function O(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Sn;Ui&&Ui(e,null);let o=t.length;for(;o--;){let i=t[o];if(typeof i=="string"){const s=n(i);s!==i&&(am(t)||(t[o]=s),i=s)}e[i]=!0}return e}function vm(e){for(let t=0;t<e.length;t++)ht(e,t)||(e[t]=null);return e}function It(e){const t=pl(null);for(const[n,o]of rl(e))ht(e,n)&&(Array.isArray(o)?t[n]=vm(o):o&&typeof o=="object"&&o.constructor===Object?t[n]=It(o):t[n]=o);return t}function je(e,t){for(;e!==null;){const o=pm(e,t);if(o){if(o.get)return tt(o.get);if(typeof o.value=="function")return tt(o.value)}e=rm(e)}function n(){return null}return n}const zi=Z(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),lo=Z(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ao=Z(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),fm=Z(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ro=Z(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),bm=Z(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Wi=Z(["#text"]),Vi=Z(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),po=Z(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),qi=Z(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),gn=Z(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),gm=ct(/\{\{[\w\W]*|[\w\W]*\}\}/gm),_m=ct(/<%[\w\W]*|[\w\W]*%>/gm),Em=ct(/\$\{[\w\W]*/gm),ym=ct(/^data-[\-\w.\u00B7-\uFFFF]+$/),wm=ct(/^aria-[\-\w]+$/),cl=ct(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Sm=ct(/^(?:\w+script|data):/i),Am=ct(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ul=ct(/^html$/i),Om=ct(/^[a-z][.\w]*(-[.\w]+)+$/i);var Ki=Object.freeze({__proto__:null,ARIA_ATTR:wm,ATTR_WHITESPACE:Am,CUSTOM_ELEMENT:Om,DATA_ATTR:ym,DOCTYPE_NAME:ul,ERB_EXPR:_m,IS_ALLOWED_URI:cl,IS_SCRIPT_OR_DATA:Sm,MUSTACHE_EXPR:gm,TMPLIT_EXPR:Em});const ze={element:1,text:3,progressingInstruction:7,comment:8,document:9},km=function(){return typeof window>"u"?null:window},Tm=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let o=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(o=n.getAttribute(i));const s="dompurify"+(o?"#"+o:"");try{return t.createPolicy(s,{createHTML(l){return l},createScriptURL(l){return l}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}},Yi=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function dl(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:km();const t=g=>dl(g);if(t.version="3.2.6",t.removed=[],!e||!e.document||e.document.nodeType!==ze.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const o=n,i=o.currentScript,{DocumentFragment:s,HTMLTemplateElement:l,Node:r,Element:p,NodeFilter:h,NamedNodeMap:u=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:y,DOMParser:S,trustedTypes:_}=e,k=p.prototype,w=je(k,"cloneNode"),A=je(k,"remove"),D=je(k,"nextSibling"),$=je(k,"childNodes"),N=je(k,"parentNode");if(typeof l=="function"){const g=n.createElement("template");g.content&&g.content.ownerDocument&&(n=g.content.ownerDocument)}let b,T="";const{implementation:x,createNodeIterator:I,createDocumentFragment:G,getElementsByTagName:B}=n,{importNode:H}=o;let C=Yi();t.isSupported=typeof rl=="function"&&typeof N=="function"&&x&&x.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:q,ERB_EXPR:U,TMPLIT_EXPR:dt,DATA_ATTR:At,ARIA_ATTR:K,IS_SCRIPT_OR_DATA:ot,ATTR_WHITESPACE:Yt,CUSTOM_ELEMENT:Ot}=Ki;let{IS_ALLOWED_URI:Xt}=Ki,P=null;const Bt=O({},[...zi,...lo,...ao,...ro,...Wi]);let F=null;const kt=O({},[...Vi,...po,...qi,...gn]);let M=Object.seal(pl(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),mt=null,Gt=null,gt=!0,Qt=!0,on=!1,re=!0,Ut=!1,Zt=!0,Tt=!1,$e=!1,pe=!1,xt=!1,ce=!1,ue=!1,_t=!0,te=!1;const sn="user-content-";let de=!0,Ct=!1,Dt={},Mt=null;const Ie=O({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Re=null;const Wo=O({},["audio","video","img","source","image","track"]);let Pn=null;const Vo=O({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ln="http://www.w3.org/1998/Math/MathML",an="http://www.w3.org/2000/svg",Lt="http://www.w3.org/1999/xhtml";let me=Lt,Fn=!1,Hn=null;const Il=O({},[ln,an,Lt],so);let rn=O({},["mi","mo","mn","ms","mtext"]),pn=O({},["annotation-xml"]);const Rl=O({},["title","style","font","a","script"]);let Pe=null;const Pl=["application/xhtml+xml","text/html"],Fl="text/html";let j=null,he=null;const Hl=n.createElement("form"),qo=function(a){return a instanceof RegExp||a instanceof Function},Bn=function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(he&&he===a)){if((!a||typeof a!="object")&&(a={}),a=It(a),Pe=Pl.indexOf(a.PARSER_MEDIA_TYPE)===-1?Fl:a.PARSER_MEDIA_TYPE,j=Pe==="application/xhtml+xml"?so:Sn,P=ht(a,"ALLOWED_TAGS")?O({},a.ALLOWED_TAGS,j):Bt,F=ht(a,"ALLOWED_ATTR")?O({},a.ALLOWED_ATTR,j):kt,Hn=ht(a,"ALLOWED_NAMESPACES")?O({},a.ALLOWED_NAMESPACES,so):Il,Pn=ht(a,"ADD_URI_SAFE_ATTR")?O(It(Vo),a.ADD_URI_SAFE_ATTR,j):Vo,Re=ht(a,"ADD_DATA_URI_TAGS")?O(It(Wo),a.ADD_DATA_URI_TAGS,j):Wo,Mt=ht(a,"FORBID_CONTENTS")?O({},a.FORBID_CONTENTS,j):Ie,mt=ht(a,"FORBID_TAGS")?O({},a.FORBID_TAGS,j):It({}),Gt=ht(a,"FORBID_ATTR")?O({},a.FORBID_ATTR,j):It({}),Dt=ht(a,"USE_PROFILES")?a.USE_PROFILES:!1,gt=a.ALLOW_ARIA_ATTR!==!1,Qt=a.ALLOW_DATA_ATTR!==!1,on=a.ALLOW_UNKNOWN_PROTOCOLS||!1,re=a.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ut=a.SAFE_FOR_TEMPLATES||!1,Zt=a.SAFE_FOR_XML!==!1,Tt=a.WHOLE_DOCUMENT||!1,xt=a.RETURN_DOM||!1,ce=a.RETURN_DOM_FRAGMENT||!1,ue=a.RETURN_TRUSTED_TYPE||!1,pe=a.FORCE_BODY||!1,_t=a.SANITIZE_DOM!==!1,te=a.SANITIZE_NAMED_PROPS||!1,de=a.KEEP_CONTENT!==!1,Ct=a.IN_PLACE||!1,Xt=a.ALLOWED_URI_REGEXP||cl,me=a.NAMESPACE||Lt,rn=a.MATHML_TEXT_INTEGRATION_POINTS||rn,pn=a.HTML_INTEGRATION_POINTS||pn,M=a.CUSTOM_ELEMENT_HANDLING||{},a.CUSTOM_ELEMENT_HANDLING&&qo(a.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(M.tagNameCheck=a.CUSTOM_ELEMENT_HANDLING.tagNameCheck),a.CUSTOM_ELEMENT_HANDLING&&qo(a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(M.attributeNameCheck=a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),a.CUSTOM_ELEMENT_HANDLING&&typeof a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(M.allowCustomizedBuiltInElements=a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ut&&(Qt=!1),ce&&(xt=!0),Dt&&(P=O({},Wi),F=[],Dt.html===!0&&(O(P,zi),O(F,Vi)),Dt.svg===!0&&(O(P,lo),O(F,po),O(F,gn)),Dt.svgFilters===!0&&(O(P,ao),O(F,po),O(F,gn)),Dt.mathMl===!0&&(O(P,ro),O(F,qi),O(F,gn))),a.ADD_TAGS&&(P===Bt&&(P=It(P)),O(P,a.ADD_TAGS,j)),a.ADD_ATTR&&(F===kt&&(F=It(F)),O(F,a.ADD_ATTR,j)),a.ADD_URI_SAFE_ATTR&&O(Pn,a.ADD_URI_SAFE_ATTR,j),a.FORBID_CONTENTS&&(Mt===Ie&&(Mt=It(Mt)),O(Mt,a.FORBID_CONTENTS,j)),de&&(P["#text"]=!0),Tt&&O(P,["html","head","body"]),P.table&&(O(P,["tbody"]),delete mt.tbody),a.TRUSTED_TYPES_POLICY){if(typeof a.TRUSTED_TYPES_POLICY.createHTML!="function")throw Je('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof a.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Je('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');b=a.TRUSTED_TYPES_POLICY,T=b.createHTML("")}else b===void 0&&(b=Tm(_,i)),b!==null&&typeof T=="string"&&(T=b.createHTML(""));Z&&Z(a),he=a}},Ko=O({},[...lo,...ao,...fm]),Yo=O({},[...ro,...bm]),Bl=function(a){let m=N(a);(!m||!m.tagName)&&(m={namespaceURI:me,tagName:"template"});const v=Sn(a.tagName),R=Sn(m.tagName);return Hn[a.namespaceURI]?a.namespaceURI===an?m.namespaceURI===Lt?v==="svg":m.namespaceURI===ln?v==="svg"&&(R==="annotation-xml"||rn[R]):!!Ko[v]:a.namespaceURI===ln?m.namespaceURI===Lt?v==="math":m.namespaceURI===an?v==="math"&&pn[R]:!!Yo[v]:a.namespaceURI===Lt?m.namespaceURI===an&&!pn[R]||m.namespaceURI===ln&&!rn[R]?!1:!Yo[v]&&(Rl[v]||!Ko[v]):!!(Pe==="application/xhtml+xml"&&Hn[a.namespaceURI]):!1},Et=function(a){Ge(t.removed,{element:a});try{N(a).removeChild(a)}catch{A(a)}},ve=function(a,m){try{Ge(t.removed,{attribute:m.getAttributeNode(a),from:m})}catch{Ge(t.removed,{attribute:null,from:m})}if(m.removeAttribute(a),a==="is")if(xt||ce)try{Et(m)}catch{}else try{m.setAttribute(a,"")}catch{}},Xo=function(a){let m=null,v=null;if(pe)a="<remove></remove>"+a;else{const J=ji(a,/^[\r\n\t ]+/);v=J&&J[0]}Pe==="application/xhtml+xml"&&me===Lt&&(a='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+a+"</body></html>");const R=b?b.createHTML(a):a;if(me===Lt)try{m=new S().parseFromString(R,Pe)}catch{}if(!m||!m.documentElement){m=x.createDocument(me,"template",null);try{m.documentElement.innerHTML=Fn?T:R}catch{}}const W=m.body||m.documentElement;return a&&v&&W.insertBefore(n.createTextNode(v),W.childNodes[0]||null),me===Lt?B.call(m,Tt?"html":"body")[0]:Tt?m.documentElement:W},Qo=function(a){return I.call(a.ownerDocument||a,a,h.SHOW_ELEMENT|h.SHOW_COMMENT|h.SHOW_TEXT|h.SHOW_PROCESSING_INSTRUCTION|h.SHOW_CDATA_SECTION,null)},Gn=function(a){return a instanceof y&&(typeof a.nodeName!="string"||typeof a.textContent!="string"||typeof a.removeChild!="function"||!(a.attributes instanceof u)||typeof a.removeAttribute!="function"||typeof a.setAttribute!="function"||typeof a.namespaceURI!="string"||typeof a.insertBefore!="function"||typeof a.hasChildNodes!="function")},Zo=function(a){return typeof r=="function"&&a instanceof r};function Nt(g,a,m){bn(g,v=>{v.call(t,a,m,he)})}const ti=function(a){let m=null;if(Nt(C.beforeSanitizeElements,a,null),Gn(a))return Et(a),!0;const v=j(a.nodeName);if(Nt(C.uponSanitizeElement,a,{tagName:v,allowedTags:P}),Zt&&a.hasChildNodes()&&!Zo(a.firstElementChild)&&Y(/<[/\w!]/g,a.innerHTML)&&Y(/<[/\w!]/g,a.textContent)||a.nodeType===ze.progressingInstruction||Zt&&a.nodeType===ze.comment&&Y(/<[/\w]/g,a.data))return Et(a),!0;if(!P[v]||mt[v]){if(!mt[v]&&ni(v)&&(M.tagNameCheck instanceof RegExp&&Y(M.tagNameCheck,v)||M.tagNameCheck instanceof Function&&M.tagNameCheck(v)))return!1;if(de&&!Mt[v]){const R=N(a)||a.parentNode,W=$(a)||a.childNodes;if(W&&R){const J=W.length;for(let et=J-1;et>=0;--et){const $t=w(W[et],!0);$t.__removalCount=(a.__removalCount||0)+1,R.insertBefore($t,D(a))}}}return Et(a),!0}return a instanceof p&&!Bl(a)||(v==="noscript"||v==="noembed"||v==="noframes")&&Y(/<\/no(script|embed|frames)/i,a.innerHTML)?(Et(a),!0):(Ut&&a.nodeType===ze.text&&(m=a.textContent,bn([q,U,dt],R=>{m=Ue(m,R," ")}),a.textContent!==m&&(Ge(t.removed,{element:a.cloneNode()}),a.textContent=m)),Nt(C.afterSanitizeElements,a,null),!1)},ei=function(a,m,v){if(_t&&(m==="id"||m==="name")&&(v in n||v in Hl))return!1;if(!(Qt&&!Gt[m]&&Y(At,m))){if(!(gt&&Y(K,m))){if(!F[m]||Gt[m]){if(!(ni(a)&&(M.tagNameCheck instanceof RegExp&&Y(M.tagNameCheck,a)||M.tagNameCheck instanceof Function&&M.tagNameCheck(a))&&(M.attributeNameCheck instanceof RegExp&&Y(M.attributeNameCheck,m)||M.attributeNameCheck instanceof Function&&M.attributeNameCheck(m))||m==="is"&&M.allowCustomizedBuiltInElements&&(M.tagNameCheck instanceof RegExp&&Y(M.tagNameCheck,v)||M.tagNameCheck instanceof Function&&M.tagNameCheck(v))))return!1}else if(!Pn[m]){if(!Y(Xt,Ue(v,Yt,""))){if(!((m==="src"||m==="xlink:href"||m==="href")&&a!=="script"&&dm(v,"data:")===0&&Re[a])){if(!(on&&!Y(ot,Ue(v,Yt,"")))){if(v)return!1}}}}}}return!0},ni=function(a){return a!=="annotation-xml"&&ji(a,Ot)},oi=function(a){Nt(C.beforeSanitizeAttributes,a,null);const{attributes:m}=a;if(!m||Gn(a))return;const v={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:F,forceKeepAttr:void 0};let R=m.length;for(;R--;){const W=m[R],{name:J,namespaceURI:et,value:$t}=W,Fe=j(J),Un=$t;let V=J==="value"?Un:mm(Un);if(v.attrName=Fe,v.attrValue=V,v.keepAttr=!0,v.forceKeepAttr=void 0,Nt(C.uponSanitizeAttribute,a,v),V=v.attrValue,te&&(Fe==="id"||Fe==="name")&&(ve(J,a),V=sn+V),Zt&&Y(/((--!?|])>)|<\/(style|title)/i,V)){ve(J,a);continue}if(v.forceKeepAttr)continue;if(!v.keepAttr){ve(J,a);continue}if(!re&&Y(/\/>/i,V)){ve(J,a);continue}Ut&&bn([q,U,dt],si=>{V=Ue(V,si," ")});const ii=j(a.nodeName);if(!ei(ii,Fe,V)){ve(J,a);continue}if(b&&typeof _=="object"&&typeof _.getAttributeType=="function"&&!et)switch(_.getAttributeType(ii,Fe)){case"TrustedHTML":{V=b.createHTML(V);break}case"TrustedScriptURL":{V=b.createScriptURL(V);break}}if(V!==Un)try{et?a.setAttributeNS(et,J,V):a.setAttribute(J,V),Gn(a)?Et(a):Ji(t.removed)}catch{ve(J,a)}}Nt(C.afterSanitizeAttributes,a,null)},Gl=function g(a){let m=null;const v=Qo(a);for(Nt(C.beforeSanitizeShadowDOM,a,null);m=v.nextNode();)Nt(C.uponSanitizeShadowNode,m,null),ti(m),oi(m),m.content instanceof s&&g(m.content);Nt(C.afterSanitizeShadowDOM,a,null)};return t.sanitize=function(g){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},m=null,v=null,R=null,W=null;if(Fn=!g,Fn&&(g="<!-->"),typeof g!="string"&&!Zo(g))if(typeof g.toString=="function"){if(g=g.toString(),typeof g!="string")throw Je("dirty is not a string, aborting")}else throw Je("toString is not a function");if(!t.isSupported)return g;if($e||Bn(a),t.removed=[],typeof g=="string"&&(Ct=!1),Ct){if(g.nodeName){const $t=j(g.nodeName);if(!P[$t]||mt[$t])throw Je("root node is forbidden and cannot be sanitized in-place")}}else if(g instanceof r)m=Xo("<!---->"),v=m.ownerDocument.importNode(g,!0),v.nodeType===ze.element&&v.nodeName==="BODY"||v.nodeName==="HTML"?m=v:m.appendChild(v);else{if(!xt&&!Ut&&!Tt&&g.indexOf("<")===-1)return b&&ue?b.createHTML(g):g;if(m=Xo(g),!m)return xt?null:ue?T:""}m&&pe&&Et(m.firstChild);const J=Qo(Ct?g:m);for(;R=J.nextNode();)ti(R),oi(R),R.content instanceof s&&Gl(R.content);if(Ct)return g;if(xt){if(ce)for(W=G.call(m.ownerDocument);m.firstChild;)W.appendChild(m.firstChild);else W=m;return(F.shadowroot||F.shadowrootmode)&&(W=H.call(o,W,!0)),W}let et=Tt?m.outerHTML:m.innerHTML;return Tt&&P["!doctype"]&&m.ownerDocument&&m.ownerDocument.doctype&&m.ownerDocument.doctype.name&&Y(ul,m.ownerDocument.doctype.name)&&(et="<!DOCTYPE "+m.ownerDocument.doctype.name+`>
`+et),Ut&&bn([q,U,dt],$t=>{et=Ue(et,$t," ")}),b&&ue?b.createHTML(et):et},t.setConfig=function(){let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Bn(g),$e=!0},t.clearConfig=function(){he=null,$e=!1},t.isValidAttribute=function(g,a,m){he||Bn({});const v=j(g),R=j(a);return ei(v,R,m)},t.addHook=function(g,a){typeof a=="function"&&Ge(C[g],a)},t.removeHook=function(g,a){if(a!==void 0){const m=cm(C[g],a);return m===-1?void 0:um(C[g],m,1)[0]}return Ji(C[g])},t.removeHooks=function(g){C[g]=[]},t.removeAllHooks=function(){C=Yi()},t}var ft=dl(),xm=Object.defineProperty,Cm=(e,t,n)=>t in e?xm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t,n)=>Cm(e,typeof t!="symbol"?t+"":t,n),ml=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},Dm={formatSelectAll(){return"[Select all]"},formatAllSelected(){return"All selected"},formatCountSelected(e,t){return`${e} of ${t} selected`},formatNoMatchesFound(){return"No matches found"},formatOkButton(){return"OK"},formatLazyLoading(){return"Loading..."}};ml.locales["en-US"]=Dm;var hl=ml.locales,Mm=50,Lm=4,z=()=>!1,Nm=()=>!0,vl={name:"",placeholder:"",classes:"",classPrefix:"",data:void 0,locale:void 0,selectAll:!0,single:void 0,singleRadio:!1,multiple:!1,hideOptgroupCheckboxes:!1,multipleWidth:80,width:void 0,dropWidth:void 0,maxHeight:250,maxHeightUnit:"px",position:"bottom",displayValues:!1,displayTitle:!1,displayDelimiter:", ",minimumCountSelected:3,ellipsis:!1,isOpen:!1,keepOpen:!1,openOnHover:!1,container:null,filter:!1,filterGroup:!1,filterPlaceholder:"",filterAcceptOnEnter:!1,filterByDataLength:void 0,customFilter(e){let{text:t,label:n,search:o}=e;return(n||t||"").includes(o)},showClear:!1,autoAdjustDropHeight:!1,autoAdjustDropPosition:!1,autoAdjustDropWidthByTextSize:!1,adjustedHeightPadding:10,useSelectOptionLabel:!1,useSelectOptionLabelToHtml:!1,navigationHighlight:!0,infiniteScroll:!1,virtualScroll:!0,cssStyler:()=>null,textTemplate:e=>e.innerHTML.trim(),labelTemplate:e=>e.label,onBeforeOpen:z,onChange:z,onOpen:z,onClose:z,onCheckAll:z,onUncheckAll:z,onFocus:z,onBlur:z,onOptgroupClick:z,onBeforeClick:Nm,onClick:z,onFilter:z,onFilterClear:z,onClear:z,onAfterCreate:z,onDestroy:z,onAfterDestroy:z,onDestroyed:z},$m=["init","getOptions","refreshOptions","getSelects","setSelects","enable","disable","open","close","check","uncheck","checkAll","uncheckAll","checkInvert","focus","blur","refresh","destroy"];Object.assign(vl,hl["en-US"]);var Im={BLOCK_ROWS:Mm,CLUSTER_BLOCKS:Lm,DEFAULTS:vl,METHODS:$m},vt=Im,Rm=class{constructor(e){f(this,"_distinctEvent"),f(this,"_boundedEvents",[]),this._distinctEvent=e?.distinctEvent??!1}get boundedEvents(){return this._boundedEvents}dispose(){this.unbindAll(),this._boundedEvents=[]}bind(e,t,n,o,i=""){let s=Array.isArray(t)?t:[t];typeof e?.forEach=="function"?e.forEach(l=>this.bindElementEvents(l,s,n,o,i)):this.bindElementEvents(e,s,n,o,i)}hasBinding(e,t){return this._boundedEvents.some(n=>n.element===e&&(!t||n.eventName===t))}unbind(e,t,n){if(e){let o=Array.isArray(e)?e:[e],i=Array.isArray(t)?t:[t||""];for(let s of o){n||(n=this._boundedEvents.find(l=>{if(l.element===s&&(!t||l.eventName===t))return l.listener}));for(let l of i)s?.removeEventListener?.(l,n)}}}unbindAll(e){if(e){let t=Array.isArray(e)?e:[e];for(let n=this._boundedEvents.length-1;n>=0;--n){let o=this._boundedEvents[n];if(t.some(i=>i===o.groupName)){let{element:i,eventName:s,listener:l}=o;this.unbind(i,s,l),this._boundedEvents.splice(n,1)}}}else for(;this._boundedEvents.length>0;){let{element:t,eventName:n,listener:o}=this._boundedEvents.pop();this.unbind(t,n,o)}}bindElementEvents(e,t,n,o,i=""){for(let s of t)(!this._distinctEvent||this._distinctEvent&&!this.hasBinding(e,s))&&(e.addEventListener(s,n,o),this._boundedEvents.push({element:e,eventName:s,listener:n,groupName:i}))}};function Pm(e,t,n=!1){let o=Object.keys(e),i=Object.keys(t);if(n&&o.length!==i.length)return!1;for(let s of o)if(i.includes(s)&&e[s]!==t[s])return!1;return!0}function Oo(e){return typeof e!="object"||e===null?e:Array.isArray(e)?e.map(Oo):typeof e=="function"?e:Object.fromEntries(Object.entries(e).map(([t,n])=>[t,Oo(n)]))}function An(e){return e!=null&&e!==""}function Fm(e,t){return typeof e=="object"?Object.fromEntries(t?Object.entries(e).filter(([n,o])=>!An(o)&&!t.includes(n)||An(o)):Object.entries(e).filter(([n,o])=>An(o))):e}function Hm(e){let t=0;return e.forEach((n,o)=>{n.type==="optgroup"?(n._key=`group_${o}`,n.visible=typeof n.visible>"u"?!0:n.visible,n.children.forEach((i,s)=>{i&&(i.visible=typeof i?.visible>"u"?!0:i.visible,i.divider||(i._key=`option_${o}_${s}`,t+=1))})):(n.visible=typeof n.visible>"u"?!0:n.visible,n.divider||(n._key=`option_${o}`,t+=1))}),t}function _n(e,t,n){if(Array.isArray(e))for(let o of e){if(o[t]===n||o[t]===`${+o[t]}`&&+o[t]===n)return o;if(o.type==="optgroup"){for(let i of o.children)if(i&&(i[t]===n||i[t]===`${+i[t]}`&&+i[t]===n))return i}}}function Bm(e){return e.replace(/(\b)(on[a-z]+)(\s*)=([^>]*)|javascript:([^>]*)[^>]*|(<\s*)(\/*)script([<>]*).*(<\s*)(\/*)script(>*)|(&lt;|&#60;)(\/*)(script|script defer)(.*)(&#62;|&gt;|&gt;">)/gi,"")}function co(e){return Object.keys(e).forEach(t=>An(e[t])?"":delete e[t]),e}function ge(e,t){if(typeof e!="string")return e;if(typeof t=="function")return t(e);if(typeof e.normalize=="function")return e.normalize("NFD").replace(/[\u0300-\u036F]/g,"");throw new Error("[Multiple-Select-Vanilla] `normalize()` function is not defined, you can optionally provide a custom parser via the `diacriticParser` option.")}function uo(e){let{innerHeight:t=0,innerWidth:n=0}=window,{top:o,left:i}=Jm(),{top:s=0,left:l=0}=To(e)||{};return{top:s-o,bottom:t-(s-o),left:l-i,right:n-(l-i)}}function mo(e=""){return e.split(" ").filter(t=>t)}function L(e,t,n){let o=document.createElement(e);return t&&Object.keys(t).forEach(i=>{let s=t[i];typeof s=="object"?Object.assign(o[i],s):o[i]=t[i]}),n?.appendChild(o),o}function fl(e,t,n){let o=e.props?.innerHTML?Um(e.props,"innerHTML"):e.props,i=L(e.tagName,Fm(o,["className","title","style"]),t);if(e.props.innerHTML&&(i.innerHTML=e.props.innerHTML),e.attrs)for(let s of Object.keys(e.attrs))i.setAttribute(s,e.attrs[s]);if(e.children)for(let s of e.children)fl(s,i);return t?.appendChild(i),i}function ko(e){return e.hasOwnProperty("tagName")?fl(e):document.createElement("li")}function Ye(e){for(;e?.firstChild;)e.lastChild&&e.removeChild(e.lastChild);return e}function To(e){if(e){let{top:t,left:n,bottom:o,right:i}=e.getBoundingClientRect();return{top:t+window.pageYOffset,left:n+window.pageXOffset,bottom:o,right:i}}}function ho(e,t,n){if(!e)return 0;let o=Number.parseFloat(e.style[n]);if(!o||Number.isNaN(o)){let i=n==="height"?"Height":"Width";switch(t){case"outer":o=e[`offset${i}`];break;case"scroll":o=e[`scroll${i}`];break;case"inner":default:o=e[`client${i}`];break}o=e.getBoundingClientRect()[n]}if(!o||Number.isNaN(o)){let i=e.style.display,s=e.style.position;e.style.display="block",e.style.position="absolute",o=Ve(e,n),e.style.display=i,e.style.position=s}return o||0}function Ve(e,t){let n=window.getComputedStyle(e)[t],o=Number.parseFloat(n);return Number.isNaN(o)&&(o=0),o}function Xi(e,t){let n=null,o=e?.parentElement;for(;o;){let[i,s,l,r]=t.match(/^([a-z]*)([#.]{1})([a-z-]+)$/i)||[];if(l&&r)for(let p of r.replace(l,"").split(" "))o.classList.contains(p)&&(s?o?.tagName.toLowerCase()===s&&(n=o):n=o);o=o.parentElement}return n}function Gm(e,t){e.parentNode?.insertBefore(t,e.nextSibling)}function Um(e,t){let{[t]:n,...o}=e;return o}function Qi(e,t){e?.style&&(e.style.display=e.style.display==="none"&&t!==!1||t===!0?"block":"none")}function Jm(){return{left:window.pageXOffset||document.documentElement.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||0}}var jm=class{constructor(t){f(this,"clusterRows"),f(this,"cache"),f(this,"scrollEl"),f(this,"blockHeight"),f(this,"clusterHeight"),f(this,"contentEl"),f(this,"parentEl"),f(this,"itemHeight"),f(this,"lastCluster"),f(this,"scrollTop"),f(this,"dataStart"),f(this,"dataEnd"),f(this,"rows"),f(this,"destroy"),f(this,"callback"),f(this,"sanitizer"),this.rows=t.rows,this.scrollEl=t.scrollEl,this.contentEl=t.contentEl,this.parentEl=t.contentEl?.parentElement,this.callback=t.callback,this.cache={},this.scrollTop=this.scrollEl.scrollTop,this.initDOM(this.rows),this.scrollEl.scrollTop=this.scrollTop,this.lastCluster=0;let n=()=>{this.lastCluster!==(this.lastCluster=this.getNum())&&(this.initDOM(this.rows),this.callback())};this.scrollEl.addEventListener("scroll",n,!1),this.destroy=()=>{this.scrollEl.removeEventListener("scroll",n,!1),Ye(this.contentEl)}}reset(t){this.lastCluster=0,this.cache={},Ye(this.contentEl),this.initDOM(t)}initDOM(t){if(typeof this.clusterHeight>"u"){this.cache.scrollTop=this.scrollEl.scrollTop;let l=ko(t[0]);this.contentEl.appendChild(l),this.contentEl.appendChild(l),this.contentEl.appendChild(l),this.cache.data=[t[0]],this.getRowsHeight()}let n=this.initData(t,this.getNum()),o=this.checkChanges("data",n.rows),i=this.checkChanges("top",n.topOffset),s=this.checkChanges("bottom",n.bottomOffset);Ye(this.contentEl),o&&i?(n.topOffset&&this.contentEl.appendChild(this.getExtra("top",n.topOffset)),n.rows.forEach(l=>this.contentEl.appendChild(ko(l))),n.bottomOffset&&this.contentEl.appendChild(this.getExtra("bottom",n.bottomOffset))):s&&this.contentEl.lastChild&&(this.contentEl.lastChild.style.height=`${n.bottomOffset}px`)}getRowsHeight(){if(typeof this.itemHeight>"u"){let t=this.parentEl?.style.display||"";this.parentEl&&(t===""||t==="none")&&(this.parentEl.style.display="block");let n=this.contentEl.children,o=n[Math.floor(n.length/2)];this.itemHeight=o.offsetHeight,this.parentEl&&(this.parentEl.style.display=t)}this.blockHeight=this.itemHeight*vt.BLOCK_ROWS,this.clusterRows=vt.BLOCK_ROWS*vt.CLUSTER_BLOCKS,this.clusterHeight=this.blockHeight*vt.CLUSTER_BLOCKS}getNum(){this.scrollTop=this.scrollEl.scrollTop;let t=(this.clusterHeight||0)-(this.blockHeight||0);return t&&Math.floor(this.scrollTop/t)||0}initData(t,n){if(t.length<vt.BLOCK_ROWS)return{topOffset:0,bottomOffset:0,rowsAbove:0,rows:t};let o=Math.max((this.clusterRows-vt.BLOCK_ROWS)*n,0),i=o+this.clusterRows,s=Math.max(o*this.itemHeight,0),l=Math.max((t.length-i)*this.itemHeight,0),r=[],p=o;s<1&&p++;for(let h=o;h<i;h++)t[h]&&r.push(t[h]);return this.dataStart=o,this.dataEnd=i,{topOffset:s,bottomOffset:l,rowsAbove:p,rows:r}}checkChanges(t,n){let o=n!==this.cache[t];return this.cache[t]=n,o}getExtra(t,n){let o=L("li",{className:`virtual-scroll-${t}`});return n&&(o.style.height=`${n}px`),o}},We=".ms-select-all, ul li[data-key]",zm=".ms-select-all.highlighted, ul li[data-key].highlighted",Wm=class{constructor(e,t){this.elm=e,f(this,"_bindEventService"),f(this,"isAllSelected",!1),f(this,"isPartiallyAllSelected",!1),f(this,"fromHtml",!1),f(this,"choiceElm"),f(this,"selectClearElm"),f(this,"closeElm"),f(this,"clearSearchIconElm"),f(this,"filterText",""),f(this,"updateData",[]),f(this,"data",[]),f(this,"dataTotal"),f(this,"dropElm"),f(this,"okButtonElm"),f(this,"filterParentElm"),f(this,"lastFocusedItemKey",""),f(this,"lastMouseOverPosition",""),f(this,"ulElm"),f(this,"parentElm"),f(this,"labelElm"),f(this,"selectAllParentElm"),f(this,"selectAllElm"),f(this,"searchInputElm"),f(this,"selectGroupElms"),f(this,"selectCheckboxElms"),f(this,"noResultsElm"),f(this,"options"),f(this,"selectAllName",""),f(this,"selectGroupName",""),f(this,"selectItemName",""),f(this,"scrolledByMouse",!1),f(this,"openDelayTimer"),f(this,"updateDataStart"),f(this,"updateDataEnd"),f(this,"virtualScroll"),f(this,"_currentHighlightIndex",-1),f(this,"_currentSelectedElm"),f(this,"_isLazyLoaded",!1),f(this,"isMoveUpRecalcRequired",!1),f(this,"locales",{}),this.options=Object.assign({},vt.DEFAULTS,this.elm.dataset,t),this._bindEventService=new Rm({distinctEvent:!0})}get isRenderAsHtml(){return this.options.renderOptionLabelAsHtml||this.options.useSelectOptionLabelToHtml}init(){this.initLocale(),this.initContainer(),this.initData(),this.initSelected(!0),this.initFilter(),this.initDrop(),this.initView(),this.options.onAfterCreate()}destroy(e=!0){this.elm&&this.parentElm&&(this.options.onDestroy({hardDestroy:e}),e&&this.options.onHardDestroy(),this.elm.parentElement&&this.parentElm.parentElement&&this.elm.parentElement.insertBefore(this.elm,this.parentElm.parentElement.firstChild),this.elm.classList.remove("ms-offscreen"),this._bindEventService.unbindAll(),this.virtualScroll?.destroy(),this.dropElm?.remove(),this.dropElm=void 0,this.parentElm.parentNode?.removeChild(this.parentElm),this.fromHtml&&(delete this.options.data,this.fromHtml=!1),this.options.onAfterDestroy({hardDestroy:e}),e&&(this.options.onAfterHardDestroy?.(),Object.keys(this.options).forEach(t=>delete this[t])))}initLocale(){if(this.options.locale){if(typeof this.options.locale=="object"){Object.assign(this.options,this.options.locale);return}let e=window.multipleSelect.locales,t=this.options.locale.split(/-|_/);if(t[0]=t[0].toLowerCase(),t[1]&&(t[1]=t[1].toUpperCase()),e[this.options.locale])Object.assign(this.options,e[this.options.locale]);else if(e[t.join("-")])Object.assign(this.options,e[t.join("-")]);else if(e[t[0]])Object.assign(this.options,e[t[0]]);else throw new Error(`[multiple-select-vanilla] invalid locales "${this.options.locale}", make sure to import it before using it`)}}initContainer(){let e=this.elm.getAttribute("name")||this.options.name||"";this.options.classes&&this.elm.classList.add(this.options.classes),this.options.classPrefix&&(this.elm.classList.add(this.options.classPrefix),this.options.size&&this.elm.classList.add(`${this.options.classPrefix}-${this.options.size}`)),this.elm.style.display="none",this.labelElm=this.elm.closest("label"),!this.labelElm&&this.elm.id&&(this.labelElm=L("label",{htmlFor:this.elm.id})),this.labelElm?.querySelector("input")&&(this.labelElm=null),this.options.single===void 0&&(this.options.single=!this.elm.multiple),this.parentElm=L("div",{className:mo(`ms-parent ${this.elm.className||""} ${this.options.classes}`).join(" "),dataset:{test:"sel"}}),this.options.darkMode&&this.parentElm.classList.add("ms-dark-mode");let t=this.elm.getAttribute("title")||"";t&&(this.parentElm.title=t),this.options.placeholder=this.options.placeholder||this.elm.getAttribute("placeholder")||"",this.choiceElm=L("button",{className:"ms-choice",type:"button"},this.parentElm),this.options.labelId&&(this.choiceElm.id=this.options.labelId,this.choiceElm.setAttribute("aria-labelledby",this.options.labelId)),this.choiceElm.appendChild(L("span",{className:"ms-placeholder",textContent:this.options.placeholder})),this.options.showClear&&(this.selectClearElm=L("div",{className:"ms-icon ms-icon-close"}),this.selectClearElm.style.display="none",this.choiceElm.appendChild(this.selectClearElm)),this.choiceElm.appendChild(L("div",{className:"ms-icon ms-icon-caret"})),this.dropElm=L("div",{className:`ms-drop ${this.options.position}`,ariaExpanded:"false"},this.parentElm),this.options.darkMode&&this.dropElm.classList.add("ms-dark-mode"),e&&(this.dropElm.dataset.name=e);let n=this.elm.getAttribute("data-test")||this.options.dataTest;n&&(this.parentElm.dataset.test=n,this.dropElm.dataset.test=n),this.closeElm=this.choiceElm.querySelector(".ms-icon-close");let o=["minWidth","maxWidth","width","dropWidth"];for(let i of o)if(this.options[i]){let s=i==="dropWidth"?"width":i;this.dropElm.style[s]=typeof this.options[i]=="string"?this.options[i]:`${this.options[i]}px`}Gm(this.elm,this.parentElm),this.elm.disabled&&(this.choiceElm.classList.add("disabled"),this.choiceElm.disabled=!0),this.selectAllName=`selectAll${e}`,this.selectGroupName=`selectGroup${e}`,this.selectItemName=`selectItem${e}`,this.options.keepOpen||(this._bindEventService.unbindAll("body-click"),this._bindEventService.bind(document.body,"click",i=>{this.getEventTarget(i)===this.choiceElm||Xi(this.getEventTarget(i),".ms-choice")===this.choiceElm||(this.getEventTarget(i)===this.dropElm||Xi(this.getEventTarget(i),".ms-drop")!==this.dropElm&&this.getEventTarget(i)!==this.elm)&&this.options.isOpen&&this.close("body.click")},void 0,"body-click"))}initData(){let e=[];if(this.options.data){if(Array.isArray(this.options.data))this.data=this.options.data.map(t=>typeof t=="string"||typeof t=="number"?{text:t,value:t}:t);else if(typeof this.options.data=="object"){for(let[t,n]of Object.entries(this.options.data))e.push({value:t,text:`${n}`});this.data=e}}else this.elm.childNodes.forEach(t=>{let n=this.initRow(t);n&&e.push(n)}),this.options.data=e,this.data=e,this.fromHtml=!0;this.data&&this.options.preFilter&&(this.data=this.data.filter(this.options.preFilter)),this.data&&this.options.preSort&&(this.data=this.data.sort(this.options.preSort)),this.dataTotal=Hm(this.data||[])}initRow(e,t){let n={};return e.tagName?.toLowerCase()==="option"?(n.type="option",n.text=this.options.textTemplate(e),n.value=e.value,n.visible=!0,n.selected=!!e.selected,n.disabled=t||e.disabled,n.classes=e.getAttribute("class")||"",n.title=e.getAttribute("title")||"",e.dataset.value&&(n._value=e.dataset.value),Object.keys(e.dataset).length&&(n._data=e.dataset,n._data.divider&&(n.divider=n._data.divider)),n):e.tagName?.toLowerCase()==="optgroup"?(n.type="optgroup",n.label=this.options.labelTemplate(e),n.visible=!0,n.selected=!!e.selected,n.disabled=e.disabled,n.children=[],Object.keys(e.dataset).length&&(n._data=e.dataset),e.childNodes.forEach(o=>{n.children.push(this.initRow(o,n.disabled))}),n):null}initDrop(){this.initList(!this.options.lazyData),this.update(!0),this.options.isOpen&&this.open(0),this.options.openOnHover&&this.parentElm&&(this._bindEventService.bind(this.parentElm,"mouseover",()=>this.open(null)),this._bindEventService.bind(this.parentElm,"mouseout",()=>this.close("hover.mouseout")))}initFilter(){if(this.filterText="",this.options.filter||!this.options.filterByDataLength)return;let e=0;for(let t of this.data||[])t.type==="optgroup"?e+=t.children.length:e+=1;this.options.filter=e>this.options.filterByDataLength}initList(e=!0){if(e&&(this.options.filter&&(this.filterParentElm=L("div",{className:"ms-search"},this.dropElm),this.filterParentElm.appendChild(L("input",{autocomplete:"off",autocapitalize:"off",spellcheck:!1,type:"text",placeholder:this.options.filterPlaceholder||"🔎︎"})),this.options.showSearchClear&&this.filterParentElm.appendChild(L("span",{className:"ms-icon ms-icon-close"}))),this.options.selectAll&&!this.options.single)){let t=this.elm.getAttribute("name")||this.options.name||"";this.selectAllParentElm=L("div",{className:"ms-select-all",dataset:{key:"select_all"}});let n=document.createElement("label"),o=`ms-icon ${this.isAllSelected?"ms-icon-check":this.isPartiallyAllSelected?"ms-icon-minus":"ms-icon-uncheck"}`,i=L("div",{className:"icon-checkbox-container"},n);L("input",{type:"checkbox",ariaChecked:String(this.isAllSelected),checked:this.isAllSelected,dataset:{name:`selectAll${t}`}},i),L("div",{className:o},i),n.appendChild(L("span",{textContent:this.formatSelectAll()})),this.selectAllParentElm.appendChild(n),this.dropElm?.appendChild(this.selectAllParentElm)}this.ulElm=L("ul",{className:"ms-list",role:"listbox",ariaExpanded:"false",ariaMultiSelectable:String(!this.options.single)}),this.dropElm?.appendChild(this.ulElm),e&&this.options.showOkButton&&!this.options.single&&(this.okButtonElm=L("button",{className:"ms-ok-button",type:"button",textContent:this.formatOkButton()},this.dropElm)),this.initListItems()}initListItems(){let e=0,t=this.getListRows();if(this.options.selectAll&&!this.options.single&&(e=-1),t.length>vt.BLOCK_ROWS*vt.CLUSTER_BLOCKS){let n=this.dropElm&&this.dropElm?.style.display!=="none";!n&&this.dropElm&&(this.dropElm.style.left="-10000",this.dropElm.style.display="block",this.dropElm.ariaExpanded="true");let o=()=>{if(this.virtualScroll){this._currentHighlightIndex=0,this.updateDataStart=this.virtualScroll.dataStart+e,this.updateDataEnd=this.virtualScroll.dataEnd+e,this.updateDataStart<0&&(this.updateDataStart=0,this._currentHighlightIndex=0);let i=this.getDataLength();this.updateDataEnd>i&&(this.updateDataEnd=i),this.ulElm&&(this.isMoveUpRecalcRequired?this.recalculateArrowMove("up"):this.virtualScroll.dataStart>this.updateDataStart&&this.recalculateArrowMove("down"))}};this.ulElm&&(this.virtualScroll?this.virtualScroll.reset(t):this.virtualScroll=new jm({rows:t,scrollEl:this.ulElm,contentEl:this.ulElm,sanitizer:this.options.sanitizer,callback:()=>{o(),this.events()}})),o(),!n&&this.dropElm&&(this.dropElm.style.left="0",this.dropElm.style.display="none",this.dropElm.ariaExpanded="false")}else this.ulElm&&(Ye(this.ulElm),t.forEach(n=>this.ulElm.appendChild(ko(n)))),this.updateDataStart=0,this.updateDataEnd=this.updateData.length;return this.events(),t}getEventTarget(e){try{return e.composedPath?.()[0]||e.path?.[0]||e.target}catch{return e.target}}getListRows(){let e=[];return this.updateData=[],this.data?.forEach(t=>e.push(...this.initListItem(t))),this.options.infiniteScroll&&e.push({tagName:"li",props:{className:"ms-infinite-option",role:"option"}}),e.push({tagName:"li",props:{className:"ms-no-results",textContent:this.formatNoMatchesFound()}}),e}initListItem(e,t=0){let n=e?.title||"",o=this.options.multiple?"multiple":"",i=this.options.single?"radio":"checkbox",s=!!e?.selected,l=this.options.single&&!this.options.singleRadio,r="";if(!e?.visible)return[];if(this.updateData.push(e),l&&(r="hide-radio "),e.selected&&(r+="selected "),e.type==="optgroup"){let w=[],A;if(this.options.hideOptgroupCheckboxes||this.options.single)A={tagName:"span",props:{dataset:{name:this.selectGroupName,key:e._key}}};else{let b={tagName:"input",props:{type:"checkbox",dataset:{name:this.selectGroupName,key:e._key},checked:s,disabled:e.disabled}};l?A=b:A={tagName:"div",props:{className:`icon-checkbox-container${i==="radio"?" radio":""}`},children:[b,{tagName:"div",props:{className:`ms-icon ${s?i==="radio"?"ms-icon-radio":"ms-icon-check":"ms-icon-uncheck"}`}}]}}!r.includes("hide-radio")&&(this.options.hideOptgroupCheckboxes||this.options.single)&&(r+="hide-radio ");let D={tagName:"span",props:{}};this.applyAsTextOrHtmlWhenEnabled(D.props,e.label);let $={tagName:"li",props:{className:mo(`group${this.options.single||e.disabled?" disabled":""} ${r}`).join(" "),role:"option",ariaSelected:String(s),dataset:{key:e._key}},children:[{tagName:"label",props:{className:mo(`optgroup${this.options.single||e.disabled?" disabled":""}`).join(" ")},children:[A,D]}]},N=this.options.cssStyler(e);return N&&($.props.style=N),w.push($),e.children.forEach(b=>w.push(...this.initListItem(b,1))),w}if(r+=e.classes||"",t&&this.options.single&&(r+=`option-level-${t} `),e.divider)return[{tagName:"li",props:{className:"option-divider"}}];let p=o||r?(o+r).trim():"";e.disabled&&(p+=" disabled");let h=`${e.disabled?"disabled":""}`,u={tagName:"span",props:{}};this.applyAsTextOrHtmlWhenEnabled(u.props,e.text);let y={tagName:"input",props:{type:i,value:encodeURI(e.value),dataset:{key:e._key,name:this.selectItemName},checked:s,disabled:!!e.disabled}};e.selected&&(y.attrs={checked:"checked"});let S={tagName:"div",props:{className:`icon-checkbox-container${i==="radio"?" radio":""}`},children:[y,{tagName:"div",props:{className:`ms-icon ${y.props.checked?i==="radio"?"ms-icon-radio":"ms-icon-check":"ms-icon-uncheck"}`}}]},_={tagName:"li",props:{role:"option",title:n,ariaSelected:String(s),dataset:{key:e._key}},children:[{tagName:"label",props:{className:h},children:[l?y:S,u]}]};p&&(_.props.className=p);let k=this.options.cssStyler(e);return k&&(_.props.style=k),[_]}initSelected(e=!1){let t=0;for(let n of this.data||[])if(n.type==="optgroup"){let o=n.children.filter(i=>i?.selected&&!i.disabled&&i.visible).length;n.children.length&&(n.selected=!this.options.single&&o&&o===n.children.filter(i=>i&&!i.disabled&&i.visible&&!i.divider).length),t+=o}else t+=n.selected&&!n.disabled&&n.visible?1:0;if(this.isAllSelected=this.data?.filter(n=>n.selected&&!n.disabled&&n.visible).length===this.data?.filter(n=>!n.disabled&&n.visible&&!n.divider).length,this.isPartiallyAllSelected=!this.isAllSelected&&t>0,!e){let n="";this.isAllSelected?n="onCheckAll":t===0&&(n="onUncheckAll"),n&&(this.options[n](),this.handleOnChange(n))}}initView(){let e;window.getComputedStyle?(e=window.getComputedStyle(this.elm).width,e==="auto"&&(e=ho(this.dropElm,"outer","width")+20)):e=ho(this.elm,"outer","width")+20,this.parentElm.style.width=`${this.options.width||e}px`,this.elm.classList.add("ms-offscreen")}events(){this._bindEventService.unbindAll(["ok-button","search-input","select-all-checkbox","input-checkbox-list","group-checkbox-list","hover-highlight","arrow-highlight","option-list-scroll"]),this.clearSearchIconElm=this.filterParentElm?.querySelector(".ms-icon-close"),this.searchInputElm=this.dropElm?.querySelector(".ms-search input"),this.selectAllElm=this.dropElm?.querySelector(`input[data-name="${this.selectAllName}"]`),this.selectGroupElms=this.dropElm?.querySelectorAll(`input[data-name="${this.selectGroupName}"],span[data-name="${this.selectGroupName}"]`),this.selectCheckboxElms=this.dropElm?.querySelectorAll(`input[data-name="${this.selectItemName}"]:enabled`),this.noResultsElm=this.dropElm?.querySelector(".ms-no-results");let e=t=>{t.preventDefault(),!this.getEventTarget(t).classList.contains("ms-icon-close")&&(this.options.isOpen?this.close("toggle.close"):this.open())};this.labelElm&&this._bindEventService.bind(this.labelElm,"click",t=>{this.getEventTarget(t).nodeName.toLowerCase()==="label"&&(e(t),(!this.options.filter||!this.options.isOpen)&&this.focus(),t.stopPropagation())}),this._bindEventService.bind(this.choiceElm,"click",e),this.options.onFocus&&this._bindEventService.bind(this.choiceElm,"focus",this.options.onFocus),this.options.onBlur&&this._bindEventService.bind(this.choiceElm,"blur",this.options.onBlur),this._bindEventService.bind(this.parentElm,"keydown",t=>{t.code==="Escape"&&this.handleEscapeKey()}),this.closeElm&&this._bindEventService.bind(this.closeElm,"click",t=>{t.preventDefault(),this._checkAll(!1,!0),this.initSelected(!1),this.updateSelected(),this.update(),this.options.onClear()}),this.clearSearchIconElm&&this._bindEventService.bind(this.clearSearchIconElm,"click",t=>{t.preventDefault(),this.searchInputElm&&(this.searchInputElm.value="",this.searchInputElm.focus()),this._currentHighlightIndex=-1,this.moveHighlightDown(),this.filter(),this.options.onFilterClear()}),this.searchInputElm&&(this._bindEventService.bind(this.searchInputElm,"keydown",t=>{t.code==="Tab"&&t.shiftKey&&this.close("key.shift+tab")},void 0,"search-input"),this._bindEventService.bind(this.searchInputElm,"keyup",t=>{if(this.options.filterAcceptOnEnter&&["Enter","Space"].includes(t.code)&&this.searchInputElm?.value){if(this.options.single){let n=[];this.selectCheckboxElms?.forEach(o=>{o.closest("li")?.style.display!=="none"&&n.push(o)}),n.length&&n[0].hasAttribute("data-name")&&this.setSelects([n[0].value])}else this.selectAllElm?.click();this.close(`key.${t.code.toLowerCase()}`),this.focus();return}this.filter()},void 0,"search-input")),this.selectAllElm&&this._bindEventService.bind(this.selectAllElm,"click",t=>this._checkAll(t.currentTarget?.checked),void 0,"select-all-checkbox"),this.okButtonElm&&this._bindEventService.bind(this.okButtonElm,"click",t=>{e(t),t.stopPropagation()},void 0,"ok-button"),this.selectGroupElms&&this._bindEventService.bind(this.selectGroupElms,"click",t=>{let n=t.currentTarget,o=n.checked,i=_n(this.data,"_key",n.dataset.key);this._checkGroup(i,o),this.options.onOptgroupClick(co({label:i.label,selected:!!i.selected,data:i._data,children:i.children.filter(s=>s).map(s=>co({label:s.text,value:s.value,selected:s.selected,disabled:s.disabled,data:s._data}))})),this.handleOnChange("onOptgroupClick",{label:i.label,selected:!!i.selected,type:i.type})},void 0,"group-checkbox-list"),this.selectCheckboxElms&&this._bindEventService.bind(this.selectCheckboxElms,"click",t=>{let n=t.currentTarget,o=n.checked,i=_n(this.data,"_key",n.dataset.key),s=()=>{this.options.single&&this.options.isOpen&&!this.options.keepOpen&&this.close("selection")};if(this.options.onBeforeClick(i)===!1){s();return}this._check(i,o),this.options.onClick(co({label:i.text,value:i.value,selected:i.selected,data:i._data})),this.handleOnChange("onClick",{label:i.text,value:i.value,selected:i.selected,type:i.type}),s()},void 0,"input-checkbox-list"),this.lastFocusedItemKey&&this.dropElm&&this.dropElm.querySelector(`li[data-key=${this.lastFocusedItemKey}]`)?.focus(),this.options.navigationHighlight&&this.dropElm&&(this._bindEventService.bind(this.dropElm,"mouseover",t=>{let n=this.getEventTarget(t).closest(".ms-select-all")||this.getEventTarget(t).closest("li");if(this.dropElm?.contains(n)&&this.lastMouseOverPosition!==`${t.clientX}:${t.clientY}`){let o=this.dropElm?.querySelectorAll(We)||[],i=Array.from(o).findIndex(s=>s.dataset.key===n.dataset.key);this._currentHighlightIndex!==i&&!n.classList.contains("disabled")&&(this._currentSelectedElm=n,this._currentHighlightIndex=i,this.changeCurrentOptionHighlight(n))}this.lastMouseOverPosition=`${t.clientX}:${t.clientY}`},void 0,"hover-highlight"),this._bindEventService.bind(this.dropElm,"keydown",t=>{switch(t.key){case"ArrowUp":t.preventDefault(),this.moveHighlightUp();break;case"ArrowDown":t.preventDefault(),this.moveHighlightDown();break;case"Escape":this.handleEscapeKey();break;case"Enter":case" ":{if(document.activeElement!==this.okButtonElm){let n=this.getEventTarget(t).closest(".ms-select-all")||this.getEventTarget(t).closest("li");if(t.key===" "&&this.options.filter||this.options.filterAcceptOnEnter&&!n)return;t.preventDefault(),this._currentSelectedElm?.querySelector("input")?.click(),this.options.single&&(this.choiceElm.focus(),this.lastFocusedItemKey=this.choiceElm?.dataset.key||"")}break}case"Tab":{t.preventDefault();let n=!this.options.single&&this.options.showOkButton;n&&t.shiftKey&&document.activeElement===this.okButtonElm?(this.focusSelectAllOrList(),this.highlightCurrentOption(),this.filterParentElm?.querySelector("input")?.focus()):n&&!t.shiftKey&&document.activeElement!==this.okButtonElm?(this.changeCurrentOptionHighlight(),this.okButtonElm?.focus()):(this.options.onBlur(t),this.options.isOpen&&this.options.closeOnTab&&this.close("blur"));break}}},void 0,"arrow-highlight")),this.ulElm&&this.options.infiniteScroll&&this._bindEventService.bind(this.ulElm,"scroll",this.infiniteScrollHandler.bind(this),void 0,"option-list-scroll")}handleOnChange(e,t){this.options.onChange({eventName:e,item:t,selection:{labels:this.getSelects("text"),values:this.getSelects("value")}})}handleEscapeKey(){this.options.keepOpen||(this.close("key.escape"),this.choiceElm.focus())}infiniteScrollHandler(e,t,n){let o=!1;e&&this.getEventTarget(e)&&this.ulElm&&this.scrolledByMouse?this.getEventTarget(e).scrollTop+this.getEventTarget(e).clientHeight===this.ulElm.scrollHeight&&(o=!0):t!==void 0&&t+1===n&&(o=!0),o&&this.ulElm&&(this.virtualScroll?this.initListItems():this.ulElm.scrollTop=0,this._currentHighlightIndex=0,this.highlightCurrentOption())}open(e=0){return new Promise(t=>{e!==null&&e>=0?(window.clearTimeout(this.openDelayTimer),this.openDelayTimer=window.setTimeout(()=>{this.openDrop(),t()},e)):(this.openDrop(),t())})}openDrop(){if(!this.dropElm||this.choiceElm?.classList.contains("disabled"))return;this.options.onBeforeOpen();let e=!1;if(this.options.lazyData&&!this._isLazyLoaded&&(e=!0,this.dropElm?.querySelector("ul.ms-list")?.remove(),this.options.lazyData().then(t=>{this.options.data=t,this._isLazyLoaded=!0,this.dropElm?.querySelector(".ms-loading")?.remove(),this.initData(),this.initList(!0),this.update(),this.adjustDropSizeAndPosition()})),this.options.isOpen=!0,this.parentElm.classList.add("ms-parent-open"),this.choiceElm?.querySelector("div.ms-icon-caret")?.classList.add("open"),this.dropElm.style.display="block",this.dropElm.ariaExpanded="true",this.selectAllElm?.parentElement&&(this.selectAllElm.parentElement.style.display="inline-flex"),this.noResultsElm&&(this.noResultsElm.style.display="none"),!this.getDataLength())if(this.selectAllElm?.parentElement&&(this.selectAllElm.parentElement.style.display="none"),e&&!this._isLazyLoaded&&!this.dropElm.querySelector(".ms-loading")){let t=L("div",{className:"ms-loading"});t.appendChild(L("div",{className:"ms-icon ms-icon-loading ms-spin"})),t.appendChild(L("span",{textContent:this.formatLazyLoading()})),this.dropElm.appendChild(t)}else this.noResultsElm&&(this.noResultsElm.style.display="block");this.adjustDropSizeAndPosition(),(!e||this._isLazyLoaded)&&(this.getDataLength()&&this.options.filter?(this.searchInputElm&&(this.searchInputElm.value="",this.searchInputElm.focus()),this.filter(!0)):this.focusSelectAllOrList()),this._currentHighlightIndex<0?this.moveHighlightDown():this.highlightCurrentOption(),this.options.onOpen()}adjustDropSizeAndPosition(){if(this.dropElm){if(this.options.container){let o;this.options.container instanceof Node?o=this.options.container:typeof this.options.container=="string"&&(o=this.options.container==="body"?document.body:document.querySelector(this.options.container)),o.appendChild(this.dropElm);let{top:i=0,left:s=0}=To(this.parentElm)||{};this.dropElm.style.top=`${i+this.parentElm.offsetHeight}px`,this.dropElm.style.left=`${s}px`,this.dropElm.style.width=`${this.parentElm.offsetWidth}px`,this.dropElm.style.minWidth="auto"}let e=this.options.minHeight,t=this.options.maxHeight;this.options.maxHeightUnit==="row"&&(t=ho(this.dropElm.querySelector("ul>li"),"outer","height")*this.options.maxHeight),this.ulElm??=this.dropElm.querySelector("ul"),this.ulElm&&(e&&(!this.options.lazyData||this._isLazyLoaded)&&(this.ulElm.style.minHeight=`${e}px`),this.ulElm.style.maxHeight=`${t}px`),this.dropElm.querySelectorAll(".multiple").forEach(o=>{o.style.width=`${this.options.multipleWidth}px`}),this.options.autoAdjustDropWidthByTextSize&&this.adjustDropWidthByText();let n=this.options.position;if(this.options.autoAdjustDropHeight){if(this.options.autoAdjustDropPosition){let{bottom:o,top:i}=uo(this.dropElm),s=this.dropElm.getBoundingClientRect().height;n=o<s&&i>o?"top":"bottom"}this.adjustDropHeight(n)}this.options.autoAdjustDropPosition&&this.adjustDropPosition(!0)}}focusSelectAllOrList(){this.selectAllElm?this.selectAllElm.focus():this.ulElm&&(this.ulElm.tabIndex=0,this.ulElm.focus())}highlightCurrentOption(){let e=this.dropElm?.querySelectorAll(We)||[];if(this._currentHighlightIndex<=e.length){let t=e[this._currentHighlightIndex];t&&(this.lastFocusedItemKey=t.dataset.key||"",this._currentSelectedElm=t,this.scrolledByMouse=!1,t.scrollIntoView({block:"nearest"}),this.changeCurrentOptionHighlight(t),window.setTimeout(()=>this.scrolledByMouse=!0,10))}}changeCurrentOptionHighlight(e){e?.classList.add("highlighted"),(this.dropElm?.querySelectorAll(zm)||[]).forEach(t=>{t!==e&&t.classList.remove("highlighted")})}moveHighlightDown(){let e=this.dropElm?.querySelectorAll(We)||[],t=e.length;this._currentHighlightIndex<t-1?(this._currentHighlightIndex++,e[this._currentHighlightIndex]?.classList.contains("disabled")&&this.moveHighlightDown()):this.options.infiniteScroll&&this.infiniteScrollHandler(null,this._currentHighlightIndex,t),this.highlightCurrentOption()}moveHighlightUp(){let e=this.dropElm?.querySelectorAll(We)||[],t=this.options.single?0:1;if(this.virtualScroll&&this._currentHighlightIndex<=t&&this.updateDataStart>0&&this.ulElm){let n=e[this._currentHighlightIndex+(this.options.single?0:1)],o=n?.dataset.key;this.lastFocusedItemKey=o,this.ulElm.scrollTop=this.ulElm.scrollTop-n?.getBoundingClientRect().height||10,this.isMoveUpRecalcRequired=!0;return}this._currentHighlightIndex>0&&(this._currentHighlightIndex--,e[this._currentHighlightIndex]?.classList.contains("disabled")&&this.moveHighlightUp()),this.highlightCurrentOption()}recalculateArrowMove(e){let t=this.dropElm?.querySelectorAll(We)||[],n=Array.from(t).findIndex(o=>o.dataset.key===this.lastFocusedItemKey);this._currentHighlightIndex=n-1,e==="down"?this.moveHighlightDown():e==="up"&&(this.moveHighlightUp(),this.isMoveUpRecalcRequired=!1)}close(e){this.options.isOpen=!1,this.parentElm.classList.remove("ms-parent-open"),this.choiceElm?.querySelector("div.ms-icon-caret")?.classList.remove("open"),this.dropElm&&(this.dropElm.style.display="none",this.dropElm.ariaExpanded="false",this.options.container&&(this.parentElm.appendChild(this.dropElm),this.dropElm.style.top="auto",this.dropElm.style.left="auto")),this.options.onClose(e)}applyAsTextOrHtmlWhenEnabled(e,t){e||(e={}),this.isRenderAsHtml?e.innerHTML=typeof this.options.sanitizer=="function"?this.options.sanitizer(t):t:e.textContent=t}update(e=!1){let t=this.getSelects(),n=this.getSelects("text");this.options.displayValues&&(n=t);let o=this.choiceElm?.querySelector("span"),i=t.length,s=null,l=()=>{if(this.options.useSelectOptionLabel||this.options.useSelectOptionLabelToHtml){let p=t.join(this.options.displayDelimiter);return this.options.useSelectOptionLabelToHtml?Bm(p):p}return n.join(this.options.displayDelimiter)};if(o){if(i===0){let p=this.options.placeholder||"";o.classList.add("ms-placeholder"),this.applyAsTextOrHtmlWhenEnabled(o,p)}else i<this.options.minimumCountSelected?s=l():this.formatAllSelected()&&i===this.dataTotal?s=this.formatAllSelected():this.options.ellipsis&&i>this.options.minimumCountSelected?s=`${n.slice(0,this.options.minimumCountSelected).join(this.options.displayDelimiter)}...`:this.formatCountSelected(i,this.dataTotal)&&i>this.options.minimumCountSelected?s=this.formatCountSelected(i,this.dataTotal):s=l();if(s!==null&&(o?.classList.remove("ms-placeholder"),this.applyAsTextOrHtmlWhenEnabled(o,s)),this.options.showClear&&this.selectClearElm){let p=s?"block":"none";this.selectClearElm.style.display=p}if(this.options.displayTitle){let p=this.options.useSelectOptionLabel||this.options.useSelectOptionLabelToHtml?"value":"text";o.title=this.getSelects(p).join(this.options.displayDelimiter)}}let r=this.getSelects();this.options.single?this.elm.value=r.length?r[0]:"":Array.from(this.elm.options).forEach(p=>{p.selected=r.some(h=>h===p.value)}),e||this.elm.dispatchEvent(new Event("change"))}updateSelected(e){for(let n=this.updateDataStart;n<this.updateDataEnd;n++){let o=this.updateData[n],i=this.dropElm?.querySelector(`input[data-key=${o._key}]`);if(i){i.checked=o.selected;let s=i.closest("li"),l=s?.querySelector(".icon-checkbox-container div");s&&(o.selected&&!s.classList.contains("selected")?(s.classList.add("selected"),s.ariaSelected="true",l&&(l.className=`ms-icon ms-icon-${i.type==="radio"?"radio":"check"}`)):o.selected||(s.classList.remove("selected"),s.ariaSelected="false",l&&(l.className="ms-icon ms-icon-uncheck")))}}let t=this.data?.filter(n=>n.visible).length===0;if(this.selectAllElm){this.selectAllElm.ariaChecked=String(this.isAllSelected);let n=this.dropElm?.querySelector(".ms-select-all .icon-checkbox-container div");if(n){let o="";this.isAllSelected?o="ms-icon-check":this.isPartiallyAllSelected?o="ms-icon-minus":o="ms-icon-uncheck",n.className=`ms-icon ${o}`}this.selectAllElm.checked=this.isAllSelected,Qi(this.selectAllElm.closest("li"),!t)}Qi(this.noResultsElm,t),this.virtualScroll&&(this.virtualScroll.rows=e??this.getListRows())}getData(){return this.options.data}getDataLength(){return this.data?.length??0}getOptions(e=!0){let t=Object.assign({},this.options);return delete t.data,e?Oo(t):this.options}refreshOptions(e){Pm(this.options,e,!0)||(this.options=Object.assign(this.options,e),this.destroy(!1),this.init())}getDropElement(){return this.dropElm}getParentElement(){return this.parentElm}getSelects(e="value"){let t=[];for(let n of this.data||[])if(n.type==="optgroup"){let o=n.children.filter(i=>i?.selected);if(!o.length)continue;if(e==="value"||this.options.single)t.push(...o.map(i=>e==="value"&&i._value||i[e]));else{let i=[];i.push("["),i.push(n.label),i.push(`: ${o.map(s=>s[e]).join(", ")}`),i.push("]"),t.push(i.join(""))}}else n.selected&&t.push(e==="value"&&n._value||n[e]);return t}setSelects(e,t="value",n=!1){let o=!1,i=s=>{for(let l of s){let r=!1;if(t==="text"){let p=document.createElement("div");this.applyAsTextOrHtmlWhenEnabled(p,l.text),r=e.includes(p.textContent?.trim()??"")}else r=e.includes(l._value||l.value),!r&&l.value===`${+l.value}`&&(r=e.includes(+l.value));l.selected!==r&&(o=!0),l.selected=r}};for(let s of this.data||[])s.type==="optgroup"?i(s.children):i([s]);o&&(this.initSelected(n),this.updateSelected(),this.update(n))}enable(){this.choiceElm&&(this.choiceElm.classList.remove("disabled"),this.choiceElm.disabled=!1)}disable(){this.choiceElm&&(this.choiceElm?.classList.add("disabled"),this.choiceElm.disabled=!0)}check(e){let t=_n(this.data,"value",e);t&&this._check(t,!0)}uncheck(e){let t=_n(this.data,"value",e);t&&this._check(t,!1)}_check(e,t){this.options.single&&this._checkAll(!1,!0),e.selected=t,this.initSelected(),this.updateSelected(),this.update()}checkAll(){this._checkAll(!0)}uncheckAll(){this._checkAll(!1)}_checkAll(e,t){for(let n of this.data||[])n.type==="optgroup"?this._checkGroup(n,e,!0):!n.disabled&&!n.divider&&(t||n.visible)&&(n.selected=e);t||(this.initSelected(),this.updateSelected(),this.update())}_checkGroup(e,t,n){e.selected=t,e.children.forEach(o=>{o&&!o.disabled&&!o.divider&&(n||o.visible)&&(o.selected=t)}),n||(this.initSelected(),this.updateSelected(),this.update())}checkInvert(){if(!this.options.single){for(let e of this.data||[])if(e.type==="optgroup")for(let t of e.children)t&&(t.divider||(t.selected=!t.selected));else e&&!e.divider&&(e.selected=!e.selected);this.initSelected(),this.updateSelected(),this.update()}}focus(){this.choiceElm?.focus(),this.options.onFocus()}blur(){this.choiceElm?.blur(),this.options.onBlur()}refresh(){this.destroy(!1),this.init()}filter(e){let t=this.searchInputElm?.value.trim()??"",n=t.toLowerCase();if(this.filterText===n)return;this.filterText=n;for(let i of this.data||[])if(i.type==="optgroup")if(this.options.filterGroup){let s=`${i?.label??""}`;if(i!=null){let l=this.options.customFilter({label:ge(s.toString().toLowerCase(),this.options.diacriticParser),search:ge(n,this.options.diacriticParser),originalLabel:s,originalSearch:t,row:i});i.visible=l;for(let r of i.children)r&&(r.visible=l)}}else{for(let s of i.children)if(s!=null){let l=`${s?.text??""}`;s.visible=this.options.customFilter({text:ge(l.toString().toLowerCase(),this.options.diacriticParser),search:ge(n,this.options.diacriticParser),originalText:l,originalSearch:t,row:s,parent:i})}i.visible=i.children.filter(s=>s?.visible).length>0}else{let s=`${i?.text??""}`;i.visible=this.options.customFilter({text:ge(s.toString().toLowerCase(),this.options.diacriticParser),search:ge(n,this.options.diacriticParser),originalText:s,originalSearch:t,row:i})}let o=this.initListItems();this.initSelected(e),this.updateSelected(o),e||this.options.onFilter(t)}adjustDropHeight(e){let t=e!=="top",n=this.filterParentElm?.getBoundingClientRect().height??0,o=this.okButtonElm?.getBoundingClientRect().height??0,i=this.options.single?0:this.selectAllParentElm?.getBoundingClientRect().height??0,s=n+o+i+5,{bottom:l,top:r}=uo(this.parentElm),p=this.options.maxHeight;if(t?p=l-s-this.options.adjustedHeightPadding:p=r-s-this.options.adjustedHeightPadding,!this.options.maxHeight||this.options.maxHeight&&p<this.options.maxHeight){let h=this.dropElm?.querySelector("ul");return h&&(h.style.maxHeight=`${p}px`),!0}return!1}adjustDropPosition(e){let t="bottom";if(this.dropElm&&this.parentElm){let{bottom:n,top:o}=uo(this.dropElm),{top:i,left:s}=To(this.parentElm),l=this.dropElm.getBoundingClientRect().height,r=this.dropElm.getBoundingClientRect().width,p=document.body.offsetWidth||window.innerWidth,h=this.parentElm.getBoundingClientRect().width;if(n>l)t="bottom";else if(l>n&&o>n){if(this.options.container){let u=i-l;u<0&&(u=0),(u>0||e)&&(t="top",this.dropElm.style.top=`${u<0?0:u}px`)}else t="top",this.dropElm.classList.add(t);this.dropElm.classList.remove("bottom")}p-r<s&&(this.dropElm.style.left=`${s-(r-h)}px`)}return t}adjustDropWidthByText(){if(this.dropElm){let e=this.parentElm.scrollWidth;(this.options.dropWidth||this.options.width)&&(e=this.options.dropWidth||this.options.width||0);let t=this.dropElm.querySelector(".ms-select-all span"),n=this.dropElm.querySelector("ul");if(n){let o=0,i=0,s=(t?.clientWidth??0)+i,l=n.scrollHeight>n.clientHeight?this.getScrollbarWidth():0;i+=Ve(n,"paddingLeft")*2;let r=!1;for(let p of Array.from(n.querySelectorAll("li"))){let h=p.querySelector("label"),u=p.querySelector(".icon-checkbox-container"),y=p.querySelector("span");h&&y?.textContent&&(r||(i+=Ve(p,"paddingLeft")*2,i+=Ve(h,"paddingLeft")*2,i+=Ve(y,"paddingLeft"),i+=u?.offsetWidth??0,r=!0),y.offsetWidth>o&&(o=y.offsetWidth))}o+=i+l,o<s&&(o=s),this.options.maxWidth&&o>this.options.maxWidth&&(o=this.options.maxWidth),this.options.minWidth&&o<this.options.minWidth&&(o=this.options.minWidth),(e==="100%"||+e<o)&&(this.dropElm.style.minWidth="auto",this.dropElm.style.width=`${o}px`)}}}getScrollbarWidth(){let e=L("div",{style:{visibility:"hidden",width:"100px"}});document.body.appendChild(e);let t=e.offsetWidth;e.style.overflow="scroll";let n=L("div",{style:{width:"100%"}});e.appendChild(n);let o=n.offsetWidth;return e.parentNode?.removeChild(e),t-o}formatAllSelected(){return this.options.allSelectedText||this.options.formatAllSelected()}formatCountSelected(e,t){return this.options.countSelectedText?this.options.countSelectedText.replace("#",`${e}`).replace("%",`${t}`):this.options.formatCountSelected(e,t)}formatNoMatchesFound(){return this.options.noMatchesFoundText||this.options.formatNoMatchesFound()}formatOkButton(){return this.options.okButtonText||this.options.formatOkButton()}formatLazyLoading(){return this.options.lazyLoadingText||this.options.formatLazyLoading()}formatSelectAll(){return this.options.selectAllText||this.options.formatSelectAll()}},c=(e,t)=>typeof e=="string"?vo(document.querySelectorAll(e),t):e instanceof Node?vo([e],t):vo(e,t);function vo(e,t){let n=Array.from(e),o=[];for(let i=0;i<n.length;i++){let s=n[i];try{s._multipleSelect!==void 0&&(s._multipleSelect.destroy(),delete s._multipleSelect),s._multipleSelect=new Wm(s,t||{}),s._multipleSelect.init();let l=s._multipleSelect.getOptions(!1);l.onHardDestroy=()=>delete s._multipleSelect,l.onAfterHardDestroy=()=>o[i]=null,o.push(s._multipleSelect)}catch(l){console.error(l)}}return o.length===1?o[0]:o}c.defaults=vt.DEFAULTS;c.locales={...hl};c.methods=vt.METHODS;window!==void 0&&(window.multipleSelect=c);let Vm=class{logElm;ms1;mount(){this.logElm=document.querySelector("textarea"),this.ms1=c("select",{filter:!0,showSearchClear:!0,onBeforeOpen:()=>{this.log(`onBeforeOpen event fire!
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
`)}})}log(t){this.logElm.textContent+=t,this.logElm.scrollTo(0,this.logElm.scrollHeight)}unmount(){this.ms1?.destroy(),this.ms1=void 0}},bl=class{ms=[];mount(){this.ms=c(".multiple-select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},qm=class{ms=[];mount(){this.ms=c(".multiple-select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Km=class{ms=[];mount(){this.ms=c("select",{multiple:!0,multipleWidth:70})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Ym=class{multiMs=[];singleMs;mount(){this.multiMs=c(".select"),this.singleMs=c(".data",{data:[{value:1,text:"Options 1",selected:!0},{value:2,text:"Options 2"},{value:3,text:"Options 3"}]})}unmount(){this.multiMs.forEach(t=>t.destroy()),this.multiMs=[],this.singleMs?.destroy(),this.singleMs=void 0}},Xm=class{ms1;mount(){this.ms1=c("select")}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Qm=class{ms=[];mount(){this.ms=c("select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Zm=class{btnElm;ms=[];mount(){this.ms=c("select"),this.btnElm=document.querySelector(".submit7"),this.btnElm.addEventListener("click",this.clickListener)}unmount(){this.btnElm.removeEventListener("click",this.clickListener),this.ms.forEach(t=>t.destroy()),this.ms=[]}clickListener=()=>{const t=this.serialize(document.querySelector("form"));alert(t)};serialize(t){const n=[];return t.querySelectorAll("[name]").forEach(o=>{const i=Array.from(o.selectedOptions);for(const s of i)n.push(`${o.name}=${s.value}`)}),n.length>0?n.join("&"):!1}},th=class{ms1;ms2;ms3;ms4;ms5;mount(){this.ms1=c("#basic",{dataTest:"select1",data:[{text:"January",value:1},{text:"February",value:2},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}),this.ms2=c("#object",{dataTest:"select2",data:{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}}),this.ms3=c("#string",{dataTest:"select3",data:["January","February","March"]}),this.ms4=c("#number",{dataTest:"select4",data:[1,2,3]}),this.ms5=c("#group",{dataTest:"select5",data:[{type:"optgroup",label:"Group 1",children:[{text:"January",value:1,selected:!0},{text:"February",value:2,disabled:!0},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6}]},{type:"optgroup",label:"Group 2",children:[{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}]})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms3?.destroy(),this.ms4?.destroy(),this.ms5?.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0}};var gl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},_l={formatSelectAll(){return"[Seleccionar todo]"},formatAllSelected(){return"Todos seleccionados"},formatCountSelected(e,t){return`${e} de ${t} seleccionado`},formatNoMatchesFound(){return"No se encontraron coincidencias"},formatOkButton(){return"Cerrar"},formatLazyLoading(){return"Cargando..."}};gl.locales["es-ES"]=_l;gl.locales;var El=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},eh={formatSelectAll(){return"[Vybrat vše]"},formatAllSelected(){return"Vše vybráno"},formatCountSelected(e,t){return`${e} z ${t} vybráno`},formatNoMatchesFound(){return"Nebylo nalezeno"},formatOkButton(){return"Zavřít"},formatLazyLoading(){return"Načítám se..."}};El.locales["cz-CS"]=eh;El.locales;var yl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},nh={formatSelectAll(){return"[Vælg alle]"},formatAllSelected(){return"Alle valgt"},formatCountSelected(e,t){return`${e} af ${t} valgt`},formatNoMatchesFound(){return"Søgning uden resultat"},formatOkButton(){return"Lukke"},formatLazyLoading(){return"Indlæser nu..."}};yl.locales["da-DK"]=nh;yl.locales;var wl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},oh={formatSelectAll(){return"[Alles auswählen]"},formatAllSelected(){return"Alles ausgewählt"},formatCountSelected(e,t){return`${e} von ${t} ausgewählt`},formatNoMatchesFound(){return"Keine Ergebnisse"},formatOkButton(){return"Schließen"},formatLazyLoading(){return"Jetzt wird geladen..."}};wl.locales["de-DE"]=oh;wl.locales;var Sl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},ih={formatSelectAll(){return"[Select all]"},formatAllSelected(){return"All selected"},formatCountSelected(e,t){return`${e} of ${t} selected`},formatNoMatchesFound(){return"No matches found"},formatOkButton(){return"OK"},formatLazyLoading(){return"Loading..."}};Sl.locales["en-US"]=ih;Sl.locales;var Al=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},sh={formatSelectAll(){return"[Seleccionar todo]"},formatAllSelected(){return"Todos seleccionados"},formatCountSelected(e,t){return`${e} de ${t} seleccionado`},formatNoMatchesFound(){return"No se encontraron coincidencias"},formatOkButton(){return"Cerrar"},formatLazyLoading(){return"Cargando..."}};Al.locales["es-ES"]=sh;Al.locales;var Ol=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},lh={formatSelectAll(){return"[Tout sélectionner]"},formatAllSelected(){return"Tous sélectionnés"},formatCountSelected(e,t){return`${e} de ${t} sélectionnés`},formatNoMatchesFound(){return"Aucun résultat"},formatOkButton(){return"Fermer"},formatLazyLoading(){return"Chargement..."}};Ol.locales["fr-FR"]=lh;Ol.locales;var kl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},ah={formatSelectAll(){return"[Összes kiválasztása]"},formatAllSelected(){return"Összes kiválasztva"},formatCountSelected(e,t){return`${e} / ${t} kiválasztva`},formatNoMatchesFound(){return"Nincs találat"},formatOkButton(){return"Bezár"},formatLazyLoading(){return"Most betöltés..."}};kl.locales["hu-HU"]=ah;kl.locales;var Tl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},rh={formatSelectAll(){return"[Pilih Semua]"},formatAllSelected(){return"Semua Dipilih"},formatCountSelected(e,t){return`${e} dari ${t} dipilih`},formatNoMatchesFound(){return"Tidak ditemukan"},formatOkButton(){return"Tutup"},formatLazyLoading(){return"Memuat..."}};Tl.locales["id-ID"]=rh;Tl.locales;var xl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},ph={formatSelectAll(){return"[Seleziona tutti]"},formatAllSelected(){return"Tutti selezionati"},formatCountSelected(e,t){return`${e} di ${t} selezionati`},formatNoMatchesFound(){return"Nessun risultato"},formatOkButton(){return"Chiudere"},formatLazyLoading(){return"Caricamento..."}};xl.locales["it-IT"]=ph;xl.locales;var Cl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},ch={formatSelectAll(){return"[すべて選択]"},formatAllSelected(){return"すべて選択"},formatCountSelected(e,t){return`${t} 件中 ${e} 件選択`},formatNoMatchesFound(){return"見つかりません"},formatOkButton(){return"閉める"},formatLazyLoading(){return"積載..."}};Cl.locales["ja-JP"]=ch;Cl.locales;var Dl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},uh={formatSelectAll(){return"[Selecionar todos]"},formatAllSelected(){return"Todos selecionados"},formatCountSelected(e,t){return`${e} de ${t} selecionado(s)`},formatNoMatchesFound(){return"Nenhum resultado encontrado"},formatOkButton(){return"Fechar"},formatLazyLoading(){return"Carregamento..."}};Dl.locales["pt-BR"]=uh;Dl.locales;var Ml=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},dh={formatSelectAll(){return"[Выбрать все]"},formatAllSelected(){return"Выбрано все"},formatCountSelected(e,t){return`${e} из ${t} выбрано`},formatNoMatchesFound(){return"Совпадений не найдено"},formatOkButton(){return"Закрывать"},formatLazyLoading(){return"погрузка..."}};Ml.locales["ru-RU"]=dh;Ml.locales;var Ll=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},mh={formatSelectAll(){return"[Tất cả]"},formatAllSelected(){return"Chọn tất cả"},formatCountSelected(e,t){return`Đã chọn ${e} trong ${t}`},formatNoMatchesFound(){return"Không tìm thấy kết quả."},formatOkButton(){return"Đóng"},formatLazyLoading(){return"Tải..."}};Ll.locales["vi-VN"]=mh;Ll.locales;var Nl=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},hh={formatSelectAll(){return"[全选]"},formatAllSelected(){return"已选择所有记录"},formatCountSelected(e,t){return`已从${t}条记录中选择${e}条`},formatNoMatchesFound(){return"没有找到记录"},formatOkButton(){return"关闭"},formatLazyLoading(){return"装载..."}};Nl.locales["zh-CN"]=hh;Nl.locales;var $l=typeof window<"u"&&window.multipleSelect!==void 0?window.multipleSelect:{locales:{}},vh={formatSelectAll(){return"[全選]"},formatAllSelected(){return"已選擇所有記錄"},formatCountSelected(e,t){return`已從${t}條記錄中選擇${e}條`},formatNoMatchesFound(){return"沒有找到記錄"},formatOkButton(){return"关闭"},formatLazyLoading(){return"装载..."}};$l.locales["zh-TW"]=vh;$l.locales;let fh=class{ms0;ms1;ms2;mount(){const t=document.querySelector("#locale");t.addEventListener("change",n=>{this.updateLocale(n.target.value)}),this.ms0=c(t,{maxHeight:400}),this.ms1=c("#dynamic-select",{filter:!0,showOkButton:!0,dataTest:"select1"}),this.ms2=c("#fixed-import",{filter:!0,showOkButton:!0,dataTest:"select2",locale:_l})}unmount(){this.ms0?.destroy(),this.ms1?.destroy(),this.ms2?.destroy(),this.ms0=void 0,this.ms1=void 0,this.ms2=void 0}updateLocale(t){this.ms1?.destroy(),this.ms1?.refreshOptions({locale:t})}},bh=class{ms1;ms2;mount(){const t=[],n=[];for(let o=0;o<1e4;o++)t.push(o);for(let o=0;o<1e4;o++)n.push({text:`<i class="fa fa-star"></i> Task ${o}`,value:o});this.ms1=c("#select1",{filter:!0,data:t,showSearchClear:!0}),this.ms2=c("#select2",{filter:!0,data:n,showSearchClear:!0,useSelectOptionLabelToHtml:!0})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms1=void 0,this.ms2=void 0}},gh=class{ms=[];mount(){this.ms=c("select")}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},_h=class{ms1;ms2;mount(){this.ms1=c("#single",{singleRadio:!0}),this.ms2=c("#multiple",{showOkButton:!0})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms1=void 0,this.ms2=void 0}},Eh=class{createBtnElm;destroyBtnElm;modifyBtnElm;ms1;mount(){this.createBtnElm=document.querySelector("#createBtn"),this.destroyBtnElm=document.querySelector("#destroyBtn"),this.modifyBtnElm=document.querySelector("#modifyBtn"),this.createBtnElm.addEventListener("click",this.createMultipleSelect.bind(this)),this.destroyBtnElm.addEventListener("click",this.destroyMultiSelect.bind(this)),this.modifyBtnElm.addEventListener("click",this.modifyData.bind(this))}createMultipleSelect(){this.ms1=c("#select1",{name:"my-select",single:!1,useSelectOptionLabelToHtml:!0,sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0}),data:[{text:'<i class="fa fa-star"></i> January',value:1},{text:"February",value:2},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}),this.ms1.setSelects([1,3,4])}destroyMultiSelect(){console.log("destroy"),this.ms1?.destroy(),this.ms1=void 0}modifyData(){this.ms1?.refreshOptions({data:[{value:1,text:"Options 1"},{value:2,text:"Options 2"},{value:3,text:"Options 3",selected:!0},{value:4,text:"Options 4",selected:!0},{value:5,text:"Options 5"}]})}unmount(){this.destroyMultiSelect(),this.createBtnElm.removeEventListener("click",this.createMultipleSelect.bind(this)),this.destroyBtnElm.removeEventListener("click",this.destroyMultiSelect.bind(this)),this.modifyBtnElm.removeEventListener("click",this.modifyData.bind(this))}},yh=class{ms1=[];ms2=[];mount(){this.ms1=c(".select"),this.ms2=c(".data-select",{dataTest:"select1",data:[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"},{divider:!0},{value:4,text:"Option 4"},{value:5,text:"Option 5"},{value:6,text:"Option 6"}]})}unmount(){this.ms1.forEach(t=>t.destroy()),this.ms2.forEach(t=>t.destroy()),this.ms1=[],this.ms2=[]}},wh=class{ms1;ms2;ms3;ms4;ms5;darkMode=!0;mount(){document.querySelector(".panel-wm-content")?.classList.add("dark-mode"),this.ms1=c("select[data-test=single]",{darkMode:!0}),this.ms2=c("select[data-test=radio]",{darkMode:!0,singleRadio:!0}),this.ms3=c("select[data-test=multiple]",{darkMode:!0}),this.ms4=c("select[data-test=group]",{darkMode:!0}),this.ms5=c("select[data-test=data1]",{darkMode:!0,dataTest:"select1",filter:!0,showOkButton:!0,showClear:!0,showSearchClear:!0,data:[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"},{divider:!0},{value:4,text:"Option 4"},{value:5,text:"Option 5"},{value:6,text:"Option 6"}]})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms3?.destroy(),this.ms4?.destroy(),this.ms5?.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0,document.querySelector(".panel-wm-content")?.classList.remove("dark-mode")}};const Zi=""+new URL("avatar1-Dfqkz6jG.png",import.meta.url).href,ts=""+new URL("avatar2-C5pX2a2d.png",import.meta.url).href,es=""+new URL("avatar3-COtlxv_R.png",import.meta.url).href,ns=""+new URL("avatar4-Dom6eBE9.png",import.meta.url).href,os=""+new URL("avatar5-B_ltAQdV.png",import.meta.url).href;let Sh=class{ms1;ms2;mount(){this.ms1=c("[data-test=select1]",{data:[{value:"1",text:`<img alt="avatar1" src="${Zi}" class="avatar"> Eric`},{value:"2",text:`<img alt="avatar2" src="${ts}" class="avatar"> Smith`},{value:"3",text:`<img alt="avatar3" src="${es}" class="avatar"> Erika`},{value:"4",text:`<img alt="avatar4" src="${ns}" class="avatar"> Julia`},{value:"5",text:`<img alt="avatar5" src="${os}" class="avatar"> Catherine`}],renderOptionLabelAsHtml:!0}),this.ms2=c("[data-test=select2]",{singleRadio:!0,renderOptionLabelAsHtml:!0,textTemplate:t=>{const[n,o]=t.textContent.split("::");return`<div class="image-container"><img alt="avatar${t.value}" src="${this.getAvatarByIdx(t.value)}" class="avatar"><div class="text-container"><div class="name-section">${n}</div><div class="job-section">${o}</div></div></div>`},sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0})})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms1=void 0,this.ms2=void 0}getAvatarByIdx(t){let n;switch(+t){case 1:n=Zi;break;case 2:n=ts;break;case 3:n=es;break;case 4:n=ns;break;case 5:n=os;break}return n}},Ah=class{},Oh=class{ms1;mount(){this.ms1=c("select",{filter:!0,showOkButton:!0,formatAllSelected(){return"Tous sélectionnés"},formatCountSelected(t,n){return`${t} de ${n} sélectionnés`},formatNoMatchesFound(){return"Aucun résultat"},formatOkButton(){return"Fermer"},formatSelectAll(){return"[Tout sélectionner]"}})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},kh=class{ms1;mount(){this.ms1=c("select",{filter:!0}),document.querySelector("#getOptions").addEventListener("click",()=>{alert(JSON.stringify(this.ms1.getOptions(),null,4))})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Th=class{ms1;ms2;darkMode2=!1;mount(){this.ms1=c(".select1",{filter:!0}),this.ms2=c(".select2",{darkMode:this.darkMode2,showOkButton:!0}),document.querySelector("#refreshOptions")?.addEventListener("click",()=>this.refreshOption1()),document.querySelector("#setDarkMode")?.addEventListener("click",()=>this.toggleDarkMode2())}refreshOption1(){this.ms1?.refreshOptions({filter:!1})}toggleDarkMode2(){this.darkMode2=!this.darkMode2,this.ms2?.refreshOptions({darkMode:this.darkMode2})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms1=void 0,this.ms2=void 0,document.querySelector("#refreshOptions")?.removeEventListener("click",()=>this.refreshOption1()),document.querySelector("#setDarkMode")?.removeEventListener("click",()=>this.toggleDarkMode2())}},xh=class{ms1;mount(){this.ms1=c("select",{filter:!0}),document.querySelector("#setSelectsBtn").addEventListener("click",()=>{this.ms1?.setSelects([1,3])}),document.querySelector("#getSelectsBtn").addEventListener("click",()=>{alert(`Selected values: ${this.ms1?.getSelects()}`),alert(`Selected texts: ${this.ms1?.getSelects("text")}`)}),document.querySelector("#setSelectsBtn2").addEventListener("click",()=>{this.ms1?.setSelects(["February","April"],"text")}),document.querySelector("#getSelectsBtn2").addEventListener("click",()=>{alert(`Selected values: ${this.ms1?.getSelects("text")}`)})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Ch=class{ms1;mount(){this.ms1=c("select"),document.querySelector("#enableBtn").addEventListener("click",()=>{this.ms1?.enable()}),document.querySelector("#disableBtn").addEventListener("click",()=>{this.ms1?.disable()})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Dh=class{ms1;mount(){this.ms1=c("select"),document.querySelector("#openBtn").addEventListener("click",()=>{this.ms1?.open()}),document.querySelector("#closeBtn").addEventListener("click",()=>{this.ms1?.close()})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Mh=class{ms=[];mount(){this.ms=c("select"),document.querySelector("#checkBtn").addEventListener("click",()=>{for(const t of this.ms)t.check(2)}),document.querySelector("#uncheckBtn").addEventListener("click",()=>{for(const t of this.ms)t.uncheck(2)})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Lh=class{ms=[];mount(){this.ms=c("select"),document.querySelector("#checkAllBtn").addEventListener("click",()=>{for(const t of this.ms)t.checkAll()}),document.querySelector("#uncheckAllBtn").addEventListener("click",()=>{for(const t of this.ms)t.uncheckAll()})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Nh=class{ms=[];mount(){this.ms=c("select"),document.querySelector("#checkInvert").addEventListener("click",()=>{for(const t of this.ms)t.checkInvert()})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},$h=class{ms1;mount(){this.ms1=c("select"),document.querySelector("#focusBtn").addEventListener("click",()=>{this.ms1?.focus()}),document.querySelector("#blurBtn").addEventListener("click",()=>{this.ms1?.blur()})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Ih=class{ms1;mount(){const t=document.querySelector("select");this.ms1=c(t),document.querySelector("#refreshAdd").addEventListener("click",()=>{const n=document.querySelector("#refreshInput"),o=document.querySelector("#refreshSelected"),i=document.querySelector("#refreshDisabled"),s=n.value.trim(),l=document.createElement("option");if(l.value=s,l.text=s,!s){n.focus();return}o.checked&&(l.selected=!0),i.checked&&(l.disabled=!0),n.value="",t.appendChild(l),this.ms1?.refresh()})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Rh=class{buildBtnElm;destroyBtnElm;ms1;mount(){this.buildBtnElm=document.querySelector("#buildBtn"),this.destroyBtnElm=document.querySelector("#destroyBtn"),this.destroyBtnElm.addEventListener("click",this.destroyMultiSelect.bind(this)),this.buildBtnElm.addEventListener("click",this.createMultipleSelect.bind(this)),this.ms1=c("select")}createMultipleSelect(){this.ms1=c("select")}destroyMultiSelect(){this.ms1?.destroy(),this.ms1=null}unmount(){this.destroyMultiSelect(),this.buildBtnElm.removeEventListener("click",this.destroyMultiSelect.bind(this)),this.destroyBtnElm.removeEventListener("click",this.createMultipleSelect.bind(this))}},Ph=class{ms1;mount(){this.ms1=c("select",{filter:!0}),document.querySelector("#getData").addEventListener("click",()=>{console.log("tt",JSON.stringify(this.ms1.getData())),alert(JSON.stringify(this.ms1.getData(),null,4))})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Fh=class{ms1;ms2;mount(){this.ms1=c("#select1"),this.ms2=c("#select2",{placeholder:"Here is the placeholder via javascript"})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms1=void 0,this.ms2=void 0}},Hh=class{ms=[];mount(){this.ms=c("select",{singleRadio:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},Bh=class{ms1;mount(){this.ms1=c("select",{selectAll:!1})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Gh=class{ms1;mount(){this.ms1=c("select",{multiple:!0,hideOptgroupCheckboxes:!0,multipleWidth:70})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Uh=class{ms1;mount(){this.ms1=c("select",{multiple:!0,width:500,multipleWidth:70,dropWidth:580})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Jh=class{ms1;mount(){this.ms1=c("select",{maxHeight:140})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},jh=class{ms=[];mount(){const t=document.querySelector("#number");this.ms=c("select",{maxHeight:+t.value,maxHeightUnit:"row"}),t.addEventListener("change",()=>{this.ms.forEach(n=>{n.refreshOptions({maxHeight:+t.value,maxHeightUnit:"row"})})})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},zh=class{ms1;mount(){this.ms1=c("select",{position:"top"})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Wh=class{ms1;mount(){this.ms1=c("select",{displayValues:!0})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Vh=class{ms1;mount(){this.ms1=c("select",{displayTitle:!0})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},qh=class{ms1;mount(){this.ms1=c("select",{displayDelimiter:" | "})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Kh=class{ms1;mount(){this.ms1=c("select",{minimumCountSelected:8})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Yh=class{ms1;mount(){this.ms1=c("select",{ellipsis:!0,minimumCountSelected:5})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Xh=class{ms1;mount(){this.ms1=c("select",{isOpen:!0})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Qh=class{ms1;mount(){this.ms1=c("select",{keepOpen:!0})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Zh=class{ms1;mount(){this.ms1=c("select",{openOnHover:!0})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},tv=class{ms1;ms2;ms3;ms4;mount(){this.ms1=c(".select1"),this.ms2=c(".select2"),this.ms3=c(".select3",{container:".my-container"}),this.ms4=c(".select4",{autoAdjustDropPosition:!0,container:"body"})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms3?.destroy(),this.ms4?.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},ev=class{ms=[];mount(){this.ms=c("select",{filter:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},nv=class{ms1;mount(){this.ms1=c("select",{filter:!0,filterGroup:!0})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},ov=class{ms1;mount(){this.ms1=c("select",{filter:!0,filterPlaceholder:"The filter placeholder"})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},iv=class{ms=[];mount(){this.ms=c("select",{filter:!0,filterAcceptOnEnter:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},sv=class{ms=[];mount(){this.ms=c("select",{filterByDataLength:10})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},lv=class{ms1;mount(){this.ms1=c("select",{filter:!0,customFilter:({text:t,search:n,originalText:o,originalSearch:i})=>document.querySelector("input").checked?o.indexOf(i)===0:t.indexOf(n)===0})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},av=class{ms=[];mount(){this.ms=c("select",{showClear:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},rv=class{ms=[];mount(){this.ms.push(c(".select1",{showOkButton:!0})),this.ms.push(c(".select2",{showOkButton:!0})),this.ms.push(c(".select3",{showOkButton:!0,filter:!0})),this.ms.push(c(".select4",{showOkButton:!0}))}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},pv=class{ms1;ms2;mount(){this.ms1=c('[data-test="select3"]',{cssStyler:t=>+(t?.value??0)==2?{backgroundColor:"#6fbeff",color:"#0014ff",fontStyle:"italic"}:+(t?.value??0)==4?{backgroundColor:"#972727",color:"#fff"}:null}),this.ms2=c('[data-test="select4"]',{cssStyler:t=>t?.type==="optgroup"?{color:"#787878",fontWeight:"normal"}:+(t?.value??0)==3?{color:"purple",textDecoration:"underline"}:null})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms1=void 0,this.ms2=void 0}},cv=class{ms1;ms2;btnEnableElm;btnDisableElm;mount(){this.ms1=c("#basic",{filter:!0,displayTitle:!0,renderOptionLabelAsHtml:!0,textTemplate:t=>`<i class="fa fa-star"></i>${t.innerHTML}`,customFilter:({search:t,text:n})=>{const o=document.createElement("div");return o.innerHTML=n,o.textContent?.includes(t)??!0},sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms2=c("#from-data",{dataTest:"select1",displayTitle:!0,renderOptionLabelAsHtml:!0,data:[{value:'50"',text:'50"'},{value:"44'",text:"44'"},{value:"33",text:'<span style="font-weight:bold">33</span>'}],sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.btnEnableElm=document.querySelector("#enableRenderHtml"),this.btnEnableElm.addEventListener("click",()=>this.renderAsHtmlHandler(!0)),this.btnDisableElm=document.querySelector("#disableRenderHtml"),this.btnDisableElm.addEventListener("click",()=>this.renderAsHtmlHandler(!1))}renderAsHtmlHandler(t){this.ms1?.refreshOptions({renderOptionLabelAsHtml:t}),this.ms2?.refreshOptions({renderOptionLabelAsHtml:t})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms1=void 0,this.ms2=void 0,this.btnEnableElm?.removeEventListener("click",()=>this.renderAsHtmlHandler(!0)),this.btnDisableElm?.removeEventListener("click",()=>this.renderAsHtmlHandler(!1))}},uv=class{ms1;mount(){this.ms1=c("select",{renderOptionLabelAsHtml:!0,labelTemplate:t=>`<i class="fa fa-star"></i>${t.getAttribute("label")}`,sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0})})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},dv=class{ms=[];mount(){this.ms=c("select",{autoAdjustDropPosition:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},mv=class{ms1;ms2;ms3;ms4;mount(){this.ms1=c("#select1",{autoAdjustDropWidthByTextSize:!0,autoAdjustDropHeight:!0,position:"top",showOkButton:!0,sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms2=c("#select2",{autoAdjustDropHeight:!0,position:"top",showOkButton:!0,sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms3=c("#select3",{autoAdjustDropHeight:!0,filter:!0,position:"top",sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0})}),this.ms4=c("#select4")}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms3?.destroy(),this.ms4?.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},hv=class{ms1;ms2;mount(){this.ms1=c("#select1",{useSelectOptionLabel:!0}),this.ms2=c("#select2",{useSelectOptionLabelToHtml:!0,sanitizer:t=>ft.sanitize(t,{RETURN_TRUSTED_TYPE:!0}),data:[{text:'<i class="fa fa-star"></i> January',value:'<i class="fa fa-star"></i>1',selected:!0},{text:"February",value:"2"},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms1=void 0,this.ms2=void 0}},vv=class{ms1;mount(){this.ms1=c("#select1",{placeholder:'Placeholder with cross-site scripting code...<img src="not-found" onerror=alert("Hacked")>',sanitizer:t=>typeof t=="string"?decodeURIComponent(t).replace(/(\b)(on[a-z]+)(\s*)=|javascript:([^>]*)[^>]*|(<\s*)(\/*)script([<>]*).*(<\s*)(\/*)script(>*)|(&lt;)(\/*)(script|script defer)(.*)(&gt;|&gt;">)/gi,""):t})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},fv=class{ms=[];mount(){this.ms=c("select",{classes:"form-control",classPrefix:"form-control"})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}},bv=class{ms=[];mount(){this.ms=c("select",{filter:!0,showSearchClear:!0})}unmount(){this.ms.forEach(t=>t.destroy()),this.ms=[]}};const is={a:"ÀÁÂÃÄÅàáâãäåĀāąĄ",c:"ÇçćĆčČ",d:"đĐďĎ",e:"ÈÉÊËèéêëěĚĒēęĘ",i:"ÌÍÎÏìíîïĪī",l:"łŁ",n:"ÑñňŇńŃ",o:"ÒÓÔÕÕÖØòóôõöøŌō",r:"řŘ",s:"ŠšśŚ",t:"ťŤ",u:"ÙÚÛÜùúûüůŮŪū",y:"ŸÿýÝ",z:"ŽžżŻźŹ"};let gv=class{ms1;ms2;inLogElm;outLogElm;mount(){this.inLogElm=document.querySelector("input.in-log"),this.outLogElm=document.querySelector("input.out-log"),this.ms1=c("#select1",{filter:!0,showSearchClear:!0,filterPlaceholder:'🔎︎ search with "é", "û" or simply "u"',diacriticParser:t=>{const n=t.split("").map(o=>Object.keys(is).find(i=>is[i].includes(o))||o).join("");return this.inLogElm.value=t,this.outLogElm.value=n,n}}),this.ms2=c("#select2",{filter:!0,showSearchClear:!0,filterPlaceholder:'🔎︎ search with "é", "û" or simply "u"'})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms1=void 0,this.ms2=void 0}},_v=class{ms1;ms2;mount(){const t=[],n=[];for(let o=1;o<=25;o++)t.push({text:`Title ${o}`,value:o});for(let o=1;o<=2e3;o++)n.push({text:`<i class="fa fa-star"></i> Task ${o}`,value:o});this.ms1=c("#select1",{data:t,infiniteScroll:!0}),this.ms2=c("#select2",{filter:!0,data:n,showSearchClear:!0,useSelectOptionLabelToHtml:!0,infiniteScroll:!0})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms1=void 0,this.ms2=void 0}},Ev=class{ms1;ms2;ms3;ms4;mount(){this.ms1=c("select[data-test=select1]"),this.ms2=c("select[data-test=select2]"),this.ms3=c("select[data-test=select3]"),this.ms4=c("select[data-test=select4]",{filter:!0})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms3?.destroy(),this.ms4?.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},yv=class{pageContentElm=null;ms1;ms2;ms3;ms4;ms5;darkMode=!0;mount(){this.pageContentElm=document.querySelector(".panel-wm-content"),this.pageContentElm?.classList.add("dark-mode"),document.querySelector("#setDarkMode")?.addEventListener("click",()=>this.toggleDarkMode()),this.ms1=c("select[data-test=single]",{darkMode:!0}),this.ms2=c("select[data-test=radio]",{darkMode:!0,singleRadio:!0}),this.ms3=c("select[data-test=multiple]",{darkMode:!0}),this.ms4=c("select[data-test=group]",{darkMode:!0}),this.ms5=c("select[data-test=data1]",{darkMode:!0,dataTest:"select1",filter:!0,showOkButton:!0,showClear:!0,showSearchClear:!0,data:[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"},{divider:!0},{value:4,text:"Option 4"},{value:5,text:"Option 5"},{value:6,text:"Option 6"}]})}toggleDarkMode(){if(this.darkMode=!this.darkMode,this.ms1?.refreshOptions({darkMode:this.darkMode}),this.ms2?.refreshOptions({darkMode:this.darkMode}),this.ms3?.refreshOptions({darkMode:this.darkMode}),this.ms4?.refreshOptions({darkMode:this.darkMode}),this.ms5?.refreshOptions({darkMode:this.darkMode}),this.pageContentElm){const t=this.darkMode?"add":"remove";this.pageContentElm.classList[t]("dark-mode")}}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms3?.destroy(),this.ms4?.destroy(),this.ms5?.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0,this.pageContentElm?.classList.remove("dark-mode"),document.querySelector("#setDarkMode")?.removeEventListener("click",()=>this.toggleDarkMode())}},wv=class{ms1;mount(){this.ms1=c("select",{labelId:"custom-label"})}unmount(){this.ms1?.destroy(),this.ms1=void 0}},Sv=class{ms1;ms2;ms3;ms4;mount(){this.ms1=c("select[data-test=select1]",{filter:!0,preFilter:t=>t.value!=="1"&&t.value!=="3"}),this.ms2=c("select[data-test=select2]",{filter:!0,preFilter:t=>t.label!=="Group 2"}),this.ms3=c("select[data-test=select3]",{data:{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"},preFilter:t=>t.value!=="2"&&t.value!=="4"}),this.ms4=c("select[data-test=select4]",{data:[{type:"optgroup",label:"Q1",children:[{text:"January",value:1,selected:!0},{text:"February",value:2},{text:"March",value:3}]},{type:"optgroup",label:"Q2",children:[{text:"April",value:4},{text:"May",value:5},{text:"June",value:6}]},{type:"optgroup",label:"Q3",children:[{text:"July",value:7},{text:"August",value:8},{text:"September",value:9}]},{type:"optgroup",label:"Q4",children:[{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}],preFilter:t=>t.label!=="Q1"})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms3?.destroy(),this.ms4?.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},Av=class{ms1;ms2;ms3;ms4;mount(){this.ms1=c("select[data-test=select1]",{filter:!0,preSort:(t,n)=>(+t.value-+n.value)*-1}),this.ms2=c("select[data-test=select2]",{filter:!0,preSort:(t,n)=>t.label<n.label?1:-1}),this.ms3=c("select[data-test=select3]",{data:{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"},preSort:(t,n)=>(+t.value-+n.value)*-1}),this.ms4=c("select[data-test=select4]",{data:[{type:"optgroup",label:"Q1",children:[{text:"January",value:1,selected:!0},{text:"February",value:2},{text:"March",value:3}]},{type:"optgroup",label:"Q2",children:[{text:"April",value:4},{text:"May",value:5},{text:"June",value:6}]},{type:"optgroup",label:"Q3",children:[{text:"July",value:7},{text:"August",value:8},{text:"September",value:9}]},{type:"optgroup",label:"Q4",children:[{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}],preSort:(t,n)=>t.label<n.label?1:-1})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms3?.destroy(),this.ms4?.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0}},Ov=class{serverDelayInput;resetLazyBtn;ms1;ms2;ms3;ms4;serverDelay=1e3;changeServerDelay(t){const n=t.target;this.serverDelay=+n.value,this.createMultipleSelect()}mount(){this.serverDelayInput=document.querySelector("#serverdelay"),this.resetLazyBtn=document.querySelector("#resetlazy"),this.serverDelayInput.addEventListener("keyup",this.changeServerDelay.bind(this)),this.resetLazyBtn.addEventListener("click",this.createMultipleSelect.bind(this)),this.createMultipleSelect()}createMultipleSelect(){console.log("recreate ms-select"),this.ms1=c("select[data-test=select1]",{singleRadio:!0,lazyData:()=>new Promise(t=>{setTimeout(()=>{t(["January","February","March","April","May","June","July","August","September","October","November","December"])},this.serverDelay)})}),this.ms2=c("select[data-test=select2]",{lazyData:()=>new Promise(t=>{setTimeout(()=>{t([{text:"January",value:1},{text:"February",value:2,selected:!0},{text:"March",value:3,disabled:!0},{text:"April",value:4,selected:!0},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}])},this.serverDelay)})}),this.ms3=c("select[data-test=select3]",{lazyData:()=>new Promise(t=>{setTimeout(()=>{t([{type:"optgroup",label:"Q1",children:[{text:"January",value:1},{text:"February",value:2,selected:!0},{text:"March",value:3,selected:!0}]},{type:"optgroup",label:"Q2",children:[{text:"April",value:4},{text:"May",value:5},{text:"June",value:6}]},{type:"optgroup",label:"Q3",children:[{text:"July",value:7},{text:"August",value:8},{text:"September",value:9}]},{type:"optgroup",label:"Q4",children:[{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}]}])},this.serverDelay)})}),this.ms4=c("select[data-test=select4]",{filter:!0,filterPlaceholder:"filter placeholder",showOkButton:!0,showClear:!0,minHeight:70,lazyData:()=>new Promise(t=>{setTimeout(()=>{t([{text:"January",value:1},{text:"February",value:2,selected:!0},{text:"March",value:3,disabled:!0},{text:"April",value:4,selected:!0},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}])},this.serverDelay)})})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms3?.destroy(),this.ms4?.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.serverDelayInput.removeEventListener("click",this.changeServerDelay.bind(this)),this.resetLazyBtn.removeEventListener("click",this.createMultipleSelect.bind(this))}};class kv{pageContentElm=null;ms1;ms2;ms3;ms4;ms5;mount(){this.pageContentElm=document.querySelector(".panel-wm-content"),this.ms1=c("select[data-test=single]",{closeOnTab:!0}),this.ms2=c("select[data-test=radio]",{closeOnTab:!0,singleRadio:!0}),this.ms3=c("select[data-test=multiple]",{closeOnTab:!0}),this.ms4=c("select[data-test=group]",{closeOnTab:!0}),this.ms5=c("select[data-test=data1]",{closeOnTab:!0,dataTest:"select1",filter:!0,showOkButton:!0,showClear:!0,showSearchClear:!0,data:[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"},{divider:!0},{value:4,text:"Option 4"},{value:5,text:"Option 5"},{value:6,text:"Option 6"}]})}unmount(){this.ms1?.destroy(),this.ms2?.destroy(),this.ms3?.destroy(),this.ms4?.destroy(),this.ms5?.destroy(),this.ms1=void 0,this.ms2=void 0,this.ms3=void 0,this.ms4=void 0,this.ms5=void 0}}const ss=[{name:"getting-started",view:"/src/getting-started.html",viewModel:Ah,title:"Getting Started"},{name:"examples",view:"/src/examples/example01.html",viewModel:bl,title:"Examples"}],ls=[{name:"Welcomes",routes:[{name:"example01",view:"/src/examples/example01.html",viewModel:bl,title:"Single Select"},{name:"example02",view:"/src/examples/example02.html",viewModel:qm,title:"Multiple Select"},{name:"example03",view:"/src/examples/example03.html",viewModel:Km,title:"Multiple Items"},{name:"example04",view:"/src/examples/example04.html",viewModel:Ym,title:"Auto Width"},{name:"example05",view:"/src/examples/example05.html",viewModel:Xm,title:"Disabled Select"},{name:"example06",view:"/src/examples/example06.html",viewModel:Qm,title:"Selected/Disabled Options"},{name:"example07",view:"/src/examples/example07.html",viewModel:Zm,title:"Submit Select"},{name:"example08",view:"/src/examples/example08.html",viewModel:th,title:"The Data"},{name:"example09",view:"/src/examples/example09.html",viewModel:fh,title:"Locale"},{name:"example10",view:"/src/examples/example10.html",viewModel:bh,title:"Large Select (Virtual Scroll)"},{name:"example11",view:"/src/examples/example11.html",viewModel:gh,title:"Themes / Sizes"},{name:"example12",view:"/src/examples/example12.html",viewModel:_h,title:"Checkbox/Radio Icons"},{name:"example13",view:"/src/examples/example13.html",viewModel:Eh,title:"Dynamically Create Select"},{name:"example14",view:"/src/examples/example14.html",viewModel:yh,title:"The Divider"},{name:"example15",view:"/src/examples/example15.html",viewModel:wh,title:"Dark Mode"},{name:"example16",view:"/src/examples/example16.html",viewModel:Sh,title:"Template with Images"}]},{name:"Options",routes:[{name:"options01",view:"/src/options/options01.html",viewModel:Fh,title:"The Placeholder"},{name:"options02",view:"/src/options/options02.html",viewModel:Hh,title:"Single Radio"},{name:"options03",view:"/src/options/options03.html",viewModel:Bh,title:"Hide Select All"},{name:"options04",view:"/src/options/options04.html",viewModel:Gh,title:"Hide Optgroup Checkboxes"},{name:"options05",view:"/src/options/options05.html",viewModel:Uh,title:"Custom Dropdown Width"},{name:"options06",view:"/src/options/options06.html",viewModel:Jh,title:"Max Height"},{name:"options07",view:"/src/options/options07.html",viewModel:jh,title:"Max Height Unit"},{name:"options08",view:"/src/options/options08.html",viewModel:zh,title:"The Position"},{name:"options09",view:"/src/options/options09.html",viewModel:Wh,title:"Display Values"},{name:"options10",view:"/src/options/options10.html",viewModel:Vh,title:"Display Title"},{name:"options11",view:"/src/options/options11.html",viewModel:qh,title:"Display Delimiter"},{name:"options12",view:"/src/options/options12.html",viewModel:Kh,title:"Minimum Count Selected"},{name:"options13",view:"/src/options/options13.html",viewModel:Yh,title:"The Ellipsis"},{name:"options14",view:"/src/options/options14.html",viewModel:Xh,title:"Is Open"},{name:"options15",view:"/src/options/options15.html",viewModel:Qh,title:"Keep Open"},{name:"options16",view:"/src/options/options16.html",viewModel:Zh,title:"Open On Hover"},{name:"options17",view:"/src/options/options17.html",viewModel:tv,title:"The Container"},{name:"options18",view:"/src/options/options18.html",viewModel:ev,title:"The Filter"},{name:"options19",view:"/src/options/options19.html",viewModel:nv,title:"Filter Only Optgroup"},{name:"options20",view:"/src/options/options20.html",viewModel:ov,title:"Filter Placeholder"},{name:"options21",view:"/src/options/options21.html",viewModel:iv,title:"Filter Accept On Enter"},{name:"options22",view:"/src/options/options22.html",viewModel:sv,title:"Filter By Data Length"},{name:"options23",view:"/src/options/options23.html",viewModel:lv,title:"Custom Filter"},{name:"options24",view:"/src/options/options24.html",viewModel:av,title:"Show Clear"},{name:"options25",view:"/src/options/options25.html",viewModel:rv,title:"Show OK Button"},{name:"options26",view:"/src/options/options26.html",viewModel:pv,title:"The Styler"},{name:"options27",view:"/src/options/options27.html",viewModel:cv,title:"Text Template"},{name:"options28",view:"/src/options/options28.html",viewModel:uv,title:"Label Template"},{name:"options29",view:"/src/options/options29.html",viewModel:dv,title:"Auto-Adjust Drop Position"},{name:"options30",view:"/src/options/options30.html",viewModel:mv,title:"Auto-Adjust Drop Height/Width"},{name:"options31",view:"/src/options/options31.html",viewModel:hv,title:"Use Select Option as Label"},{name:"options32",view:"/src/options/options32.html",viewModel:vv,title:"Sanitizer"},{name:"options33",view:"/src/options/options33.html",viewModel:fv,title:"Classes"},{name:"options34",view:"/src/options/options34.html",viewModel:bv,title:"Show Search Clear"},{name:"options35",view:"/src/options/options35.html",viewModel:gv,title:"Custom Diacritic Parser"},{name:"options36",view:"/src/options/options36.html",viewModel:_v,title:"Infinite Scroll"},{name:"options37",view:"/src/options/options37.html",viewModel:Ev,title:"Navigation Highlight"},{name:"options38",view:"/src/options/options38.html",viewModel:yv,title:"Dark Mode"},{name:"options39",view:"/src/options/options39.html",viewModel:wv,title:"Label Id (aria-labelledby)"},{name:"options40",view:"/src/options/options40.html",viewModel:Sv,title:"Pre-Filter Data"},{name:"options41",view:"/src/options/options41.html",viewModel:Av,title:"Pre-Sort Data"},{name:"options42",view:"/src/options/options42.html",viewModel:Ov,title:"Lazy Load Data"},{name:"options43",view:"/src/options/options43.html",viewModel:kv,title:"Close on Tab"}]},{name:"Methods",routes:[{name:"methods01",view:"/src/methods/methods01.html",viewModel:kh,title:"The getOptions"},{name:"methods02",view:"/src/methods/methods02.html",viewModel:Th,title:"The refreshOptions"},{name:"methods03",view:"/src/methods/methods03.html",viewModel:xh,title:"The setSelects/getSelects"},{name:"methods04",view:"/src/methods/methods04.html",viewModel:Ch,title:"The enable/disable"},{name:"methods05",view:"/src/methods/methods05.html",viewModel:Dh,title:"The open/close"},{name:"methods06",view:"/src/methods/methods06.html",viewModel:Mh,title:"The check/uncheck"},{name:"methods07",view:"/src/methods/methods07.html",viewModel:Lh,title:"The checkAll/uncheckAll"},{name:"methods08",view:"/src/methods/methods08.html",viewModel:Nh,title:"The checkInvert"},{name:"methods09",view:"/src/methods/methods09.html",viewModel:$h,title:"The focus/blur"},{name:"methods10",view:"/src/methods/methods10.html",viewModel:Ih,title:"The refresh"},{name:"methods11",view:"/src/methods/methods11.html",viewModel:Rh,title:"The destroy"},{name:"methods12",view:"/src/methods/methods12.html",viewModel:Ph,title:"The getData"}]},{name:"Events",routes:[{name:"events",view:"/src/events/events.html",viewModel:Vm,title:"The Events"}]},{name:"I18N",routes:[{name:"i18n",view:"/src/i18n/i18n.html",viewModel:Oh,title:"The i18n"}]}],Tv=Object.assign({"/src/events/events.html":Ul,"/src/examples/example01.html":Jl,"/src/examples/example02.html":jl,"/src/examples/example03.html":zl,"/src/examples/example04.html":Wl,"/src/examples/example05.html":Vl,"/src/examples/example06.html":ql,"/src/examples/example07.html":Kl,"/src/examples/example08.html":Yl,"/src/examples/example09.html":Xl,"/src/examples/example10.html":Ql,"/src/examples/example11.html":Zl,"/src/examples/example12.html":ta,"/src/examples/example13.html":ea,"/src/examples/example14.html":na,"/src/examples/example15.html":oa,"/src/examples/example16.html":ia,"/src/getting-started.html":sa,"/src/i18n/i18n.html":la,"/src/main.html":as,"/src/methods/methods01.html":aa,"/src/methods/methods02.html":ra,"/src/methods/methods03.html":pa,"/src/methods/methods04.html":ca,"/src/methods/methods05.html":ua,"/src/methods/methods06.html":da,"/src/methods/methods07.html":ma,"/src/methods/methods08.html":ha,"/src/methods/methods09.html":va,"/src/methods/methods10.html":fa,"/src/methods/methods11.html":ba,"/src/methods/methods12.html":ga,"/src/options/options01.html":_a,"/src/options/options02.html":Ea,"/src/options/options03.html":ya,"/src/options/options04.html":wa,"/src/options/options05.html":Sa,"/src/options/options06.html":Aa,"/src/options/options07.html":Oa,"/src/options/options08.html":ka,"/src/options/options09.html":Ta,"/src/options/options10.html":xa,"/src/options/options11.html":Ca,"/src/options/options12.html":Da,"/src/options/options13.html":Ma,"/src/options/options14.html":La,"/src/options/options15.html":Na,"/src/options/options16.html":$a,"/src/options/options17.html":Ia,"/src/options/options18.html":Ra,"/src/options/options19.html":Pa,"/src/options/options20.html":Fa,"/src/options/options21.html":Ha,"/src/options/options22.html":Ba,"/src/options/options23.html":Ga,"/src/options/options24.html":Ua,"/src/options/options25.html":Ja,"/src/options/options26.html":ja,"/src/options/options27.html":za,"/src/options/options28.html":Wa,"/src/options/options29.html":Va,"/src/options/options30.html":qa,"/src/options/options31.html":Ka,"/src/options/options32.html":Ya,"/src/options/options33.html":Xa,"/src/options/options34.html":Qa,"/src/options/options35.html":Za,"/src/options/options36.html":tr,"/src/options/options37.html":er,"/src/options/options38.html":nr,"/src/options/options39.html":or,"/src/options/options40.html":ir,"/src/options/options41.html":sr,"/src/options/options42.html":lr,"/src/options/options43.html":ar});class xv{loading=!0;currentModel;currentRouter;defaultRouteName="getting-started";stateBangChar="#/";baseUrl=window.location.origin+window.location.pathname;viewModelObj={};async init(){const t=window.location;document.querySelector("#app").innerHTML=ft.sanitize(as,{RETURN_TRUSTED_TYPE:!0});let n=t.hash.replace(this.stateBangChar,"");(!n||n==="/"||n==="#")&&(n=this.defaultRouteName),this.createRouteLinks(),this.loadRoute(n),Array.from(document.querySelectorAll(".panel-wm-left a.nav-link,.navbar-nav a.nav-link")).forEach(o=>{n.includes(o.id)&&o.classList.add("active")}),window.onpopstate=()=>{const i=window.location.hash.replace(this.stateBangChar,"");this.removeAllActiveLinks();const s=document.querySelector(`#${i}`);s&&(s.scrollIntoView(),s.classList.add("active")),this.loadRoute(i||this.defaultRouteName,!1)}}createRouteLinks(){for(const t of ss){const n=L("li",{className:"nav-item"});L("a",{id:t.name,className:"nav-link",textContent:t.title},n).addEventListener("click",this.clickEventListener.bind(this)),document.querySelector(".navbar-nav")?.appendChild(n)}for(const t of ls){const n=L("li",{className:"m-1"});L("p",{className:"navbar-vertical-label mb-1",textContent:t.name},n),document.querySelector(".nav-pills")?.appendChild(n);for(const o of t.routes){const i=L("li",{className:"nav-item"}),s=L("a",{id:o.name,className:"nav-link",textContent:o.title});s.addEventListener("click",this.clickEventListener.bind(this)),i.appendChild(s),document.querySelector(".nav-pills")?.appendChild(i)}}}async loadRoute(t,n=!0){const o=document.querySelector(".panel-wm-content");Ye(o),o.classList.add("cloak");let i=ss.find(s=>s.name===t);if(i?.name==="examples")document.querySelector(".nav-pills .nav-item a.nav-link")?.classList.add("active");else for(const s of ls){const l=s.routes.find(r=>r.name===t);l&&(i=l)}if(this.currentModel&&this.unmountCurrentVM(this.currentModel,this.currentRouter),i){this.currentRouter=i,document.querySelector(".panel-wm-content").innerHTML=ft.sanitize(Tv[i.view],{RETURN_TRUSTED_TYPE:!0});const s=new i.viewModel;this.currentModel=s,window[i.name]=s.mount?.(),window.onbeforeunload=()=>{o.classList.add("cloak"),s.unmount?.(),this.removeAllActiveLinks(!0),this.unmountAll(),i?.name&&delete window[i.name]}}n&&window.history.pushState({},t,`${this.baseUrl}${this.stateBangChar}${t}`),document.title=`Multiple-Select-Vanilla · ${t}`,o.classList.remove("cloak")}async clickEventListener(t){this.removeAllActiveLinks();const n=t.target;n.classList.toggle("active"),this.loadRoute(n.id)}removeAllActiveLinks(t=!1){document.querySelectorAll(".panel-wm-left a.nav-link,.navbar-nav a.nav-link").forEach(n=>{n.classList.remove("active"),t&&n.removeEventListener("click",this.clickEventListener.bind(this))})}unmountCurrentVM(t,n){t.unmount?.(),n&&delete window[n.name]}unmountAll(){for(const t of Object.keys(this.viewModelObj)){const n=this.viewModelObj[t];if(typeof n?.unmount=="function"){n?.unmount();for(const o of Object.keys(n))n[o]=null}window[t]=null,this.viewModelObj[t]=null,delete window[t],delete this.viewModelObj[t]}}}const Cv=new xv;Cv.init();
