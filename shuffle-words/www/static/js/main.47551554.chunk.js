(this["webpackJsonpio.cordova.shufflewords"]=this["webpackJsonpio.cordova.shufflewords"]||[]).push([[0],{11:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(6),o=n.n(i),l=(n(16),{getFormatedTitle:function(e){if(void 0===e)return"";var t=e.split("_");return 1===t.length?e:t=t.join(" ")},getUnFormatedTitle:function(e){var t=e.split(" ");return 1===t.length?e:t=t.join("_")}}),s=function(e){var t=l.getFormatedTitle(e.title);return a.a.createElement("div",null,a.a.createElement("h1",{className:"display-4"},"Shuffle Words App"),"Entering"!==e.wordStatus?a.a.createElement("h4",null,t,a.a.createElement("small",{onClick:function(){return e.editIt(e.title)}},"edit"),a.a.createElement("small",{onClick:function(){return e.deleteIt(e.title)}},"delete")):a.a.createElement("div",null),a.a.createElement("hr",null))},c=n(7),u=n(8),d=n(10),m=n(9),p=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).dict=Object.assign({},e.props.obj.words),e.state={title:""===e.props.obj.title?"":l.getFormatedTitle(e.props.obj.title),content:""===e.props.obj.title?"":e.dict[e.props.obj.title]},e.onchange=function(t){var n=t.target.value;e.setState({content:n})},e.onchangeTitle=function(t){var n=t.target.value;e.setState({title:n})},e.submitted=function(){var t=e.state.content,n=l.getUnFormatedTitle(e.state.title),r=Object.assign({},e.props.obj.words);if(""!==n)if(""===t||t.split(",").length<2)alert("Please Enter Two or More Words Separated by Commas!");else{if(""!==e.props.obj.title)delete r[e.props.obj.title];else if(void 0!==r[n])if(!0!==window.confirm("This title has already been used! Are you sure you wish to replace the content under this title?"))return;r[n]=t,localStorage.setItem("Words",JSON.stringify(r));var a=JSON.stringify(r);localStorage.setItem("WORDS",a),e.props.obj.setWords(r),e.props.obj.setTitle(n),e.setState({content:""}),e.setState({title:""}),e.props.obj.setWordStatus("Original")}else alert("Please Enter A Title!")},e}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{className:"help"},"Separate Words by Commas, Please!"),a.a.createElement("div",{className:"question"},a.a.createElement("div",{className:"labels"},"Title:"),a.a.createElement("input",{type:"text",value:this.state.title,onChange:this.onchangeTitle}),a.a.createElement("div",{className:"labels"},"Input Words: "),a.a.createElement("textarea",{type:"text",value:this.state.content,onChange:this.onchange})),a.a.createElement("button",{className:"submit",onClick:this.submitted},"submit"))}}]),n}(a.a.Component),f=n(4),g={getRandomArray:function(e){for(var t,n,r,a,i=Object(f.a)(e),o=[];0!==i.length;)t=i.length,r=0,a=t-1,n=Math.floor(Math.random()*(a-r+1))+r,o.push(i[n]),i.splice(n,1);return o},getOrderedArray:function(e){var t=Object(f.a)(e);return t.sort(),t}},h=function(e){var t,n=e.obj,r=n.key,i=n.setKey,o=function(e){var t,n,r=[],i=[];for(t=0;t<e.length;t+=4){for(i=[],n=t;n<t+4&&n<e.length;n++)i.push(a.a.createElement("li",null,e[n]));r.push(i)}return r};o(e.currentWords);switch(e.obj.wordStatus){case"Shuffle":t=o(g.getRandomArray(e.currentWords)).map((function(e){return a.a.createElement("div",{className:"row"},e.map((function(e){return a.a.createElement("div",{className:"col-lg-3 list"},e)})))}));break;case"Order":t=o(g.getOrderedArray(e.currentWords)).map((function(e){return a.a.createElement("div",{className:"row"},e.map((function(e){return a.a.createElement("div",{className:"col-lg-3 list"},e)})))}));break;default:t=o(e.currentWords).map((function(e){return a.a.createElement("div",{className:"row"},e.map((function(e){return a.a.createElement("div",{className:"col-lg-3 list"},e)})))}))}return a.a.createElement("div",null,a.a.createElement("ol",null,t),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){e.obj.setWordStatus("Shuffle"),i(r+1)}},"Shuffle"),a.a.createElement("button",{onClick:function(){e.obj.setWordStatus("Order"),i(r+1)}},"Alphabetize"),a.a.createElement("button",{onClick:function(){e.obj.setWordStatus("Original"),i(r+1)}},"Original Order"),a.a.createElement("button",{onClick:function(){e.obj.setTitle(""),e.obj.setWordStatus("Entering"),i(r+1)}},"Input Other Words")))},b=function(e){var t,n;""!==e.obj.title&&void 0!==e.obj.title&&(t=function(e){var t;try{(t=e.split(",")).map((function(e){return t[t.indexOf(e)]=e.trim()}))}catch(n){t=[]}return t}(e.obj.words[e.obj.title]));switch(e.obj.wordStatus){case"Entering":n=a.a.createElement(p,{obj:e.obj,currentWords:t});break;default:n=a.a.createElement(h,{obj:e.obj,currentWords:t})}return a.a.createElement("div",null,n,a.a.createElement("hr",null))},v=function(e){var t=[];return Object.keys(e.words).map((function(n){return t.push(a.a.createElement("button",{className:"choices",onClick:function(){return e.changeTitle(n)}},l.getFormatedTitle(n)))})),t.reverse(),a.a.createElement("div",null,a.a.createElement("h2",null,"Common Choices"),a.a.createElement("hr",null),a.a.createElement("div",null,t.map((function(e){return e}))))},y=n(2),w=function(){var e=JSON.parse(localStorage.getItem("WORDS"));null===e&&(localStorage.setItem("WORDS",JSON.stringify({Common_Names:"Alice, Henry, Helen, James, John, Peter, Anna, Robert, Jennifer, Michael, Linda, William, Elizabeth, David, Barbara, Richard, Susan, Joseph, Jessica",German_Alphabet:"a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, \xdf, \xe4, \xf6, \xfc",Commonly_Misspelled_Words:"absence, accept, acceptable, accessible, accidentally, accommodate, achieved, acquainted, acquiescence, acquire, acquit, acknowledge, aerial, aggravate, agreeable, all right, alright, a lot, amateur, ambiguous, amendment, analysis, ancillary, apparent, appearance, approximate, argument, arrangement, ascend, atheist, baffled, beginning, benefited, believe, briefly, business, calculator, calendar, category, ceiling, cecemetery, changeable, chaotic, choice, colleagues, collectible, college, commission, commitment, committed, committee, companion, compensate, competitively, completely, concede, conceding, connoisseur, conscience, conscientious, conscious, consistent, convenient, correspondents, counterfeit, courteous, courtesy, criticism, crucial, dabble, debriefing, deceive, decipher, deficient, definite, definitely, description, desirable, deterrent, develop, disappear, disappointed, discipline, discrepancy, dissatisfied, dissertation, drunkenness, eccentric, econoomic, embarrass, embarrassment, emphasise, equipped, equipment, especially, essential, exaggerate, excellent, except, exercise, existence, expenses, extremely, exhilarate, exceed, existence, experience, faithfully, feasible, fiery, foreign, forfeit, forty, fourth, fulfilled, fulfilment, frivolous, gauge, generally, generalisation, government, grammar, grievance, grateful, guarantee, guardian, harass, height, hierarchy, ignorance, immediate, immediately, immensity, independent, indispensable, inoculate, intelligence, irrational, irrelevant, irreparable, judgement, kindly, knowledge, knowledgeable, leisure, liaise, library, lightning, maintenance, manoeuvre, mathematics, memento, millenium, miniature, minuscule, mischievous, miscellaneous, misspell, mationally, necessary, negotiate, niece, noticeable, occasion, occasionally, occupant, occur, occurred, occurrence, official, omission, omitted, parallel, particularly, parliament, pastime, permanenet, permutation, perserverance, pigeon, possession, precede, proferable, preference, preliminary, principal, principle, privilege, procedure, proceed, professor, proprietary, psychology, questionnaire, reasonable, receive, recommend, referred, reference, regrettable, relevant, relief, relieve, religious, repetition, restaurant, ridiculous, rhythm, sacrilegious, scandal, schedule, science, scissorrs, secretaries, sensible, separate, separately, seize, similar, sincerely, sovereign, special, stationary, stationery, success, supersede, surprising, tomorrow, transferred, twelfth, twentieth, tyranny, undoubtedly, unnecessary, until, unwritten, vacuum, vicious, visible, weather, weird, withdrawn, withhold",Greek_Alphabet:"\u0391 \u03b1, \u0392 \u03b2, \u0393 \u03b3, \u0394 \u03b4, \u0395 \u03b5, \u0396 \u03b6, \u0397 \u03b7, \u0398 \u03b8, \u0399 \u03b9, \u039a \u03ba, \u039b \u03bb, \u039c \u03bc, \u039d \u03bd, \u039e \u03be, \u039f \u03bf, \u03a0 \u03c0, \u03a1 \u03c1, \u03a3 \u03c3/\u03c2, \u03a4 \u03c4, \u03a5 \u03c5, \u03a6 \u03c6, \u03a7 \u03c7, \u03a8 \u03c8, \u03a9 \u03c9"})),e=JSON.parse(localStorage.getItem("WORDS")));var t=Object(r.useState)(""),n=Object(y.a)(t,2),a=n[0],i=n[1],o=Object(r.useState)(e),l=Object(y.a)(o,2),s=l[0],c=l[1],u=Object(r.useState)(1),d=Object(y.a)(u,2),m=d[0],p=d[1],f=Object(r.useState)("Entering"),g=Object(y.a)(f,2);return{title:a,setTitle:i,words:s,setWords:c,key:m,setKey:p,wordStatus:g[0],setWordStatus:g[1]}};var E=function(e){var t=w(),n=t.title,r=t.setTitle,i=t.words,o=t.setWords,l=t.key,c=t.setKey,u=t.wordStatus,d=t.setWordStatus,m={setWords:o,words:i,setTitle:r,title:n,setKey:c,key:l,setWordStatus:d,wordStatus:u};return a.a.createElement("div",{className:"container"},a.a.createElement(s,{title:n,editIt:function(e){r(e),d("Entering"),c(l+1)},deleteIt:function(e){if(!0===window.confirm("Are you sure you want to delete this set of words?")){var t=Object.assign({},i);delete t[e],localStorage.setItem("WORDS",JSON.stringify(t)),o(t),r(""),d("Entering"),c(l+1)}},wordStatus:u}),a.a.createElement(b,{obj:m,key:l}),a.a.createElement(v,{words:i,changeTitle:function(e){r(e),d("Original"),c(l+1)}}))},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var O=function(){o.a.render(a.a.createElement(E,null),document.getElementById("root"))};window.cordova?document.addEventListener("deviceready",(function(){O()}),!1):O(),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");j?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.47551554.chunk.js.map