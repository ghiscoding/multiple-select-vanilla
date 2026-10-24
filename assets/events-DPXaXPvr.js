import{n as e}from"./index-BdaOVSHk.js";var t=class{logElm;ms1;mount(){this.logElm=document.querySelector(`textarea`),this.ms1=e(`select`,{filter:!0,showSearchClear:!0,onBeforeOpen:()=>{this.log(`onBeforeOpen event fire!
`)},onOpen:()=>{this.log(`onOpen event fire!
`)},onBeforeClose:e=>{this.log(`onBeforeClose event fire! Reason: "${e}"\n`)},onClose:e=>{this.log(`onClose event fire! Reason: "${e}"\n`)},onCheckAll:()=>{this.log(`onCheckAll event fire!
`)},onUncheckAll:()=>{this.log(`onUncheckAll event fire!
`)},onFocus:()=>{this.log(`onFocus event fire!
`)},onBlur:()=>{this.log(`onBlur event fire!
`)},onOptgroupClick:e=>{this.log(`onOptgroupClick event fire! view: ${JSON.stringify(e)}\n`)},onClick:e=>{this.log(`onClick event fire! view: ${JSON.stringify(e)}\n`)},onFilter:e=>{this.log(`onFilter event fire! text: ${e}\n`)},onFilterClear:()=>{this.log(`onFilterClear event fire!
`)},onAfterCreate:()=>{this.log(`onAfterCreate event fire!
`)},onChange:e=>{this.log(`onChange event fire! data: ${JSON.stringify(e)}\n`)}})}log(e){this.logElm.textContent+=e,this.logElm.scrollTo(0,this.logElm.scrollHeight)}unmount(){this.ms1?.destroy(),this.ms1=void 0}};export{t as default};