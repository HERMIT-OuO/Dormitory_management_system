(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-011f28c8"],{"174d":function(e,t,n){"use strict";var r=n("8d7d");n.n(r).a},"2e51":function(e,t,n){"use strict";n.r(t);n("386d");var r=n("cebc"),o=n("ffe7"),i=n.n(o),a=n("2f62"),s={mixins:[n("9e7c").a],components:{"d2-panel-search-item":function(){return n.e("chunk-86cc632a").then(n.bind(null,"6cd5"))}},data:function(){return{searchText:"",results:[]}},computed:Object(r.a)({},Object(a.e)("d2admin/search",["hotkey","pool"]),{resultsList:function(){return 0===this.results.length&&""===this.searchText?this.pool.map(function(e){return Object(r.a)({value:e.fullTitle},e)}):this.results}}),methods:{querySearch:function(e,t){var n=this.pool,r=this.query(e?n:[],e);t(this.results=r)},query:function(e,t){return new i.a(e,{shouldSort:!0,tokenize:!0,threshold:.6,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,keys:["fullTitle","path"]}).search(t).map(function(e){return Object(r.a)({value:e.fullTitle},e)})},focus:function(){var e=this;this.input="",setTimeout(function(){e.$refs.input&&e.$refs.input.focus(),e.searchText="",e.results=[]},500)},handleResultsGroupItemClick:function(e){e!==this.$route.path?this.handleMenuSelect(e):this.handleEsc()},handleSelect:function(e){var t=this,n=e.path;n!==this.$route.path?this.$nextTick(function(){t.handleMenuSelect(n)}):this.handleEsc()},closeSuggestion:function(){this.$refs.input.activated&&(this.$refs.input.suggestions=[],this.$refs.input.activated=!1)},handlePanelClick:function(){this.handleEsc()},handleEsc:function(){var e=this;this.closeSuggestion(),this.$nextTick(function(){e.$emit("close")})}}},c=(n("174d"),n("2877")),l=function(e){e.options.__source="src/layouts/HeaderAside/components/panel-search/index.vue"},h=Object(c.a)(s,function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"panel-search",attrs:{flex:"dir:top"}},[r("div",{staticClass:"panel-search__input-group",attrs:{"flex-box":"0",flex:"dir:top main:center cross:center"},on:{click:function(e){return e.target!==e.currentTarget?null:n.handlePanelClick(e)}}},[r("d2-icon-svg",{staticClass:"panel-search__logo",attrs:{name:"d2-admin-text"}}),r("el-autocomplete",{ref:"input",staticClass:"panel-search__input",attrs:{"suffix-icon":"el-icon-search",placeholder:"搜索页面","fetch-suggestions":n.querySearch,"trigger-on-focus":!1,clearable:!0},on:{select:n.handleSelect},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&n._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:n.handleEsc(e)}},scopedSlots:n._u([{key:"default",fn:function(e){var t=e.item;return r("d2-panel-search-item",{attrs:{item:t}})}}]),model:{value:n.searchText,callback:function(e){n.searchText=e},expression:"searchText"}}),r("div",{staticClass:"panel-search__tip"},[n._v("\n      您可以使用快捷键\n      "),r("span",{staticClass:"panel-search__key"},[n._v(n._s(n.hotkey.open))]),n._v("\n      唤醒搜索面板，按\n      "),r("span",{staticClass:"panel-search__key"},[n._v(n._s(n.hotkey.close))]),n._v("\n      关闭\n    ")])],1),0<n.resultsList.length?r("div",{staticClass:"panel-search__results-group",attrs:{"flex-box":"1"}},[r("el-card",[r("div",{staticClass:"panel-search__results-group-inner"},n._l(n.resultsList,function(t,e){return r("d2-panel-search-item",{key:e,attrs:{item:t,"hover-mode":!0},nativeOn:{click:function(e){return n.handleResultsGroupItemClick(t.path)}}})}),1)])],1):n._e()])},[],!1,null,"3c8add70",null);"function"==typeof l&&l(h);t.default=h.exports},"8d7d":function(e,t,n){},ffe7:function(e,t,n){
/*!
 * Fuse.js v3.4.4 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
e.exports=function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=n(2),J=n(8),z=n(0),o=function(){function q(e,t){var n=t.location,r=void 0===n?0:n,o=t.distance,i=void 0===o?100:o,a=t.threshold,s=void 0===a?.6:a,c=t.maxPatternLength,l=void 0===c?32:c,h=t.caseSensitive,u=void 0!==h&&h,f=t.tokenSeparator,d=void 0===f?/ +/g:f,p=t.findAllMatches,v=void 0!==p&&p,g=t.minMatchCharLength,y=void 0===g?1:g,m=t.id,k=void 0===m?null:m,x=t.keys,_=void 0===x?[]:x,S=t.shouldSort,b=void 0===S||S,M=t.getFn,C=void 0===M?J:M,w=t.sortFn,L=void 0===w?function(e,t){return e.score-t.score}:w,O=t.tokenize,A=void 0!==O&&O,T=t.matchAllTokens,I=void 0!==T&&T,j=t.includeMatches,P=void 0!==j&&j,$=t.includeScore,E=void 0!==$&&$,z=t.verbose,F=void 0!==z&&z;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,q),this.options={location:r,distance:i,threshold:s,maxPatternLength:l,isCaseSensitive:u,tokenSeparator:d,findAllMatches:v,minMatchCharLength:y,id:k,keys:_,includeMatches:P,includeScore:E,shouldSort:b,getFn:C,sortFn:L,verbose:F,tokenize:A,matchAllTokens:I},this.setCollection(e)}return r(q.prototype,[{key:"setCollection",value:function(e){return this.list=e}},{key:"search",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),r=n.tokenSearchers,o=n.fullSearcher,i=this._search(r,o),a=i.weights,s=i.results;return this._computeScore(a,s),this.options.shouldSort&&this._sort(s),t.limit&&"number"==typeof t.limit&&(s=s.slice(0,t.limit)),this._format(s)}},{key:"_prepareSearchers",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,o=n.length;r<o;r+=1)t.push(new i(n[r],this.options));return{tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=1<arguments.length?arguments[1]:void 0,n=this.list,r={},o=[];if("string"==typeof n[0]){for(var i=0,a=n.length;i<a;i+=1)this._analyze({key:"",value:n[i],record:i,index:i},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t});return{weights:null,results:o}}for(var s={},c=0,l=n.length;c<l;c+=1)for(var h=n[c],u=0,f=this.options.keys.length;u<f;u+=1){var d=this.options.keys[u];if("string"!=typeof d){if(s[d.name]={weight:1-d.weight||1},d.weight<=0||1<d.weight)throw new Error("Key weight has to be > 0 and <= 1");d=d.name}else s[d]={weight:1};this._analyze({key:d,value:this.options.getFn(h,d),record:h,index:c},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t})}return{weights:s,results:o}}},{key:"_analyze",value:function(e,t){var n=e.key,r=e.arrayIndex,o=void 0===r?-1:r,i=e.value,a=e.record,s=e.index,c=t.tokenSearchers,l=void 0===c?[]:c,h=t.fullSearcher,u=void 0===h?[]:h,f=t.resultMap,d=void 0===f?{}:f,p=t.results,v=void 0===p?[]:p;if(null!=i){var g=!1,y=-1,m=0;if("string"==typeof i){this._log("\nKey: ".concat(""===n?"-":n));var k=u.search(i);if(this._log('Full text: "'.concat(i,'", score: ').concat(k.score)),this.options.tokenize){for(var x=i.split(this.options.tokenSeparator),_=[],S=0;S<l.length;S+=1){var b=l[S];this._log('\nPattern: "'.concat(b.pattern,'"'));for(var M=!1,C=0;C<x.length;C+=1){var w=x[C],L=b.search(w),O={};L.isMatch?(O[w]=L.score,M=g=!0,_.push(L.score)):(O[w]=1,this.options.matchAllTokens||_.push(1)),this._log('Token: "'.concat(w,'", score: ').concat(O[w]))}M&&(m+=1)}y=_[0];for(var A=_.length,T=1;T<A;T+=1)y+=_[T];y/=A,this._log("Token score average:",y)}var I=k.score;-1<y&&(I=(I+y)/2),this._log("Score average:",I);var j=!this.options.tokenize||!this.options.matchAllTokens||m>=l.length;if(this._log("\nCheck Matches: ".concat(j)),(g||k.isMatch)&&j){var P=d[s];P?P.output.push({key:n,arrayIndex:o,value:i,score:I,matchedIndices:k.matchedIndices}):(d[s]={item:a,output:[{key:n,arrayIndex:o,value:i,score:I,matchedIndices:k.matchedIndices}]},v.push(d[s]))}}else if(z(i))for(var $=0,E=i.length;$<E;$+=1)this._analyze({key:n,arrayIndex:$,value:i[$],record:a,index:s},{resultMap:d,results:v,tokenSearchers:l,fullSearcher:u})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,r=t.length;n<r;n+=1){for(var o=t[n].output,i=o.length,a=1,s=1,c=0;c<i;c+=1){var l=e?e[o[c].key].weight:1,h=(1===l?o[c].score:o[c].score||.001)*l;1!==l?s=Math.min(s,h):(o[c].nScore=h,a*=h)}t[n].score=1===s?a:s,this._log(t[n])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===h(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t})),n=null}var r=[];this.options.includeMatches&&r.push(function(e,t){var n=e.output;t.matches=[];for(var r=0,o=n.length;r<o;r+=1){var i=n[r];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&-1<i.arrayIndex&&(a.arrayIndex=i.arrayIndex),t.matches.push(a)}}}),this.options.includeScore&&r.push(function(e,t){t.score=e.score});for(var o=0,i=e.length;o<i;o+=1){var a=e[o];if(this.options.id&&(a.item=this.options.getFn(a.item,this.options.id)[0]),r.length){for(var s={item:a.item},c=0,l=r.length;c<l;c+=1)r[c](a,s);t.push(s)}else t.push(a.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}]),q}();e.exports=o},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=n(3),u=n(4),k=n(7),o=function(){function m(e,t){var n=t.location,r=void 0===n?0:n,o=t.distance,i=void 0===o?100:o,a=t.threshold,s=void 0===a?.6:a,c=t.maxPatternLength,l=void 0===c?32:c,h=t.isCaseSensitive,u=void 0!==h&&h,f=t.tokenSeparator,d=void 0===f?/ +/g:f,p=t.findAllMatches,v=void 0!==p&&p,g=t.minMatchCharLength,y=void 0===g?1:g;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),this.options={location:r,distance:i,threshold:s,maxPatternLength:l,isCaseSensitive:u,tokenSeparator:d,findAllMatches:v,minMatchCharLength:y},this.pattern=this.options.isCaseSensitive?e:e.toLowerCase(),this.pattern.length<=l&&(this.patternAlphabet=k(this.pattern))}return r(m.prototype,[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,n=t.maxPatternLength,r=t.tokenSeparator;if(this.pattern.length>n)return h(e,this.pattern,r);var o=this.options,i=o.location,a=o.distance,s=o.threshold,c=o.findAllMatches,l=o.minMatchCharLength;return u(e,this.pattern,this.patternAlphabet,{location:i,distance:a,threshold:s,findAllMatches:c,minMatchCharLength:l})}}]),m}();e.exports=o},function(e,t){var h=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:/ +/g,r=new RegExp(t.replace(h,"\\$&").replace(n,"|")),o=e.match(r),i=!!o,a=[];if(i)for(var s=0,c=o.length;s<c;s+=1){var l=o[s];a.push([e.indexOf(l),l.length-1])}return{score:i?.5:1,isMatch:i,matchedIndices:a}}},function(e,t,n){var z=n(5),F=n(6);e.exports=function(e,t,n,r){for(var o=r.location,i=void 0===o?0:o,a=r.distance,s=void 0===a?100:a,c=r.threshold,l=void 0===c?.6:c,h=r.findAllMatches,u=void 0!==h&&h,f=r.minMatchCharLength,d=void 0===f?1:f,p=i,v=e.length,g=l,y=e.indexOf(t,p),m=t.length,k=[],x=0;x<v;x+=1)k[x]=0;if(-1!==y){var _=z(t,{errors:0,currentLocation:y,expectedLocation:p,distance:s});if(g=Math.min(_,g),-1!==(y=e.lastIndexOf(t,p+m))){var S=z(t,{errors:0,currentLocation:y,expectedLocation:p,distance:s});g=Math.min(S,g)}}y=-1;for(var b=[],M=1,C=m+v,w=1<<m-1,L=0;L<m;L+=1){for(var O=0,A=C;O<A;)z(t,{errors:L,currentLocation:p+A,expectedLocation:p,distance:s})<=g?O=A:C=A,A=Math.floor((C-O)/2+O);C=A;var T=Math.max(1,p-A+1),I=u?v:Math.min(p+A,v)+m,j=Array(I+2);j[I+1]=(1<<L)-1;for(var P=I;T<=P;P-=1){var $=P-1,E=n[e.charAt($)];if(E&&(k[$]=1),j[P]=(j[P+1]<<1|1)&E,0!==L&&(j[P]|=(b[P+1]|b[P])<<1|1|b[P+1]),j[P]&w&&(M=z(t,{errors:L,currentLocation:$,expectedLocation:p,distance:s}))<=g){if(g=M,(y=$)<=p)break;T=Math.max(1,2*p-y)}}if(z(t,{errors:L+1,currentLocation:p,expectedLocation:p,distance:s})>g)break;b=j}return{isMatch:0<=y,score:0===M?.001:M,matchedIndices:F(k,d)}}},function(e,t){e.exports=function(e,t){var n=t.errors,r=void 0===n?0:n,o=t.currentLocation,i=void 0===o?0:o,a=t.expectedLocation,s=void 0===a?0:a,c=t.distance,l=void 0===c?100:c,h=r/e.length,u=Math.abs(s-i);return l?h+u/l:u?1:h}},function(e,t){e.exports=function(){for(var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,o=-1,i=0,a=e.length;i<a;i+=1){var s=e[i];s&&-1===r?r=i:s||-1===r||((o=i-1)-r+1>=t&&n.push([r,o]),r=-1)}return e[i-1]&&t<=i-r&&n.push([r,i-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var o=0;o<n;o+=1)t[e.charAt(o)]|=1<<n-o-1;return t}},function(e,t,n){var h=n(0);e.exports=function(e,t){return function e(t,n,r){if(n){var o=n.indexOf("."),i=n,a=null;-1!==o&&(i=n.slice(0,o),a=n.slice(o+1));var s=t[i];if(null!=s)if(a||"string"!=typeof s&&"number"!=typeof s)if(h(s))for(var c=0,l=s.length;c<l;c+=1)e(s[c],a,r);else a&&e(s,a,r);else r.push(s.toString())}else r.push(t);return r}(e,t,[])}}])}}]);