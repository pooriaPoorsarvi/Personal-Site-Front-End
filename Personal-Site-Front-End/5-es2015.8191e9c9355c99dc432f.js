(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+/fp":function(e,t){e.exports=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}},"4MG8":function(e,t,n){const s=n("T9Ld"),r=n("66f7"),i=n("SbYC"),l=n("+/fp"),o=n("hyX7"),a=n("J7Ao"),{merge:c,checkSanitizeDeprecation:h,escape:p}=n("rUJ1"),{getDefaults:u,changeDefaults:g,defaults:d}=n("vbtb");function b(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"==typeof t){n||(n=t,t=null),t=c({},b.defaults,t||{}),h(t);const l=t.highlight;let o,a,p=0;try{o=s.lex(e,t)}catch(i){return n(i)}a=o.length;const u=function(e){if(e)return t.highlight=l,n(e);let s;try{s=r.parse(o,t)}catch(i){e=i}return t.highlight=l,e?n(e):n(null,s)};if(!l||l.length<3)return u();if(delete t.highlight,!a)return u();for(;p<o.length;p++)!function(e){"code"!==e.type?--a||u():l(e.text,e.lang,(function(t,n){return t?u(t):null==n||n===e.text?--a||u():(e.text=n,e.escaped=!0,void(--a||u()))}))}(o[p])}else try{return t=c({},b.defaults,t||{}),h(t),r.parse(s.lex(e,t),t)}catch(i){if(i.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||b.defaults).silent)return"<p>An error occurred:</p><pre>"+p(i.message+"",!0)+"</pre>";throw i}}b.options=b.setOptions=function(e){return c(b.defaults,e),g(b.defaults),b},b.getDefaults=u,b.defaults=d,b.Parser=r,b.parser=r.parse,b.Renderer=i,b.TextRenderer=l,b.Lexer=s,b.lexer=s.lex,b.InlineLexer=o,b.inlineLexer=o.output,b.Slugger=a,b.parse=b,e.exports=b},"66f7":function(e,t,n){const s=n("SbYC"),r=n("J7Ao"),i=n("hyX7"),l=n("+/fp"),{defaults:o}=n("vbtb"),{merge:a,unescape:c}=n("rUJ1");e.exports=class e{constructor(e){this.tokens=[],this.token=null,this.options=e||o,this.options.renderer=this.options.renderer||new s,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new r}static parse(t,n){return new e(n).parse(t)}parse(e){this.inline=new i(e.links,this.options),this.inlineText=new i(e.links,a({},this.options,{renderer:new l})),this.tokens=e.reverse();let t="";for(;this.next();)t+=this.tok();return t}next(){return this.token=this.tokens.pop(),this.token}peek(){return this.tokens[this.tokens.length-1]||0}parseText(){let e=this.token.text;for(;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)}tok(){let e="";switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,c(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":{let t,n,s,r,i="";for(s="",t=0;t<this.token.header.length;t++)s+=this.renderer.tablecell(this.inline.output(this.token.header[t]),{header:!0,align:this.token.align[t]});for(i+=this.renderer.tablerow(s),t=0;t<this.token.cells.length;t++){for(n=this.token.cells[t],s="",r=0;r<n.length;r++)s+=this.renderer.tablecell(this.inline.output(n[r]),{header:!1,align:this.token.align[r]});e+=this.renderer.tablerow(s)}return this.renderer.table(i,e)}case"blockquote_start":for(e="";"blockquote_end"!==this.next().type;)e+=this.tok();return this.renderer.blockquote(e);case"list_start":{e="";const t=this.token.ordered,n=this.token.start;for(;"list_end"!==this.next().type;)e+=this.tok();return this.renderer.list(e,t,n)}case"list_item_start":{e="";const t=this.token.loose,n=this.token.checked,s=this.token.task;if(this.token.task)if(t)if("text"===this.peek().type){const e=this.peek();e.text=this.renderer.checkbox(n)+" "+e.text}else this.tokens.push({type:"text",text:this.renderer.checkbox(n)});else e+=this.renderer.checkbox(n);for(;"list_item_end"!==this.next().type;)e+=t||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(e,s,n)}case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:{const e='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(e);console.log(e)}}}}},J7Ao:function(e,t){e.exports=class{constructor(){this.seen={}}slug(e){let t=e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){const e=t;do{this.seen[e]++,t=e+"-"+this.seen[e]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t}}},SbYC:function(e,t,n){const{defaults:s}=n("vbtb"),{cleanUrl:r,escape:i}=n("rUJ1");e.exports=class{constructor(e){this.options=e||s}code(e,t,n){const s=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,s);null!=t&&t!==e&&(n=!0,e=t)}return s?'<pre><code class="'+this.options.langPrefix+i(s,!0)+'">'+(n?e:i(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:i(e,!0))+"</code></pre>"}blockquote(e){return"<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,t,n,s){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+s.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,n){const s=t?"ol":"ul";return"<"+s+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+s+">\n"}listitem(e){return"<li>"+e+"</li>\n"}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,n){if(null===(e=r(this.options.sanitize,this.options.baseUrl,e)))return n;let s='<a href="'+i(e)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>",s}image(e,t,n){if(null===(e=r(this.options.sanitize,this.options.baseUrl,e)))return n;let s='<img src="'+e+'" alt="'+n+'"';return t&&(s+=' title="'+t+'"'),s+=this.options.xhtml?"/>":">",s}text(e){return e}}},T9Ld:function(e,t,n){const{defaults:s}=n("vbtb"),{block:r}=n("e56X"),{rtrim:i,splitCells:l,escape:o}=n("rUJ1");e.exports=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||s,this.rules=r.normal,this.options.pedantic?this.rules=r.pedantic:this.options.gfm&&(this.rules=r.gfm)}static get rules(){return r}static lex(t,n){return new e(n).lex(t)}lex(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.token(e,!0)}token(e,t){let n,s,a,c,h,p,u,g,d,b,f,m,k,x,_,w;for(e=e.replace(/^ +$/gm,"");e;)if((a=this.rules.newline.exec(e))&&(e=e.substring(a[0].length),a[0].length>1&&this.tokens.push({type:"space"})),a=this.rules.code.exec(e)){const t=this.tokens[this.tokens.length-1];e=e.substring(a[0].length),t&&"paragraph"===t.type?t.text+="\n"+a[0].trimRight():(a=a[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?a:i(a,"\n")}))}else if(a=this.rules.fences.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"code",lang:a[2]?a[2].trim():a[2],text:a[3]||""});else if(a=this.rules.heading.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"heading",depth:a[1].length,text:a[2]});else if((a=this.rules.nptable.exec(e))&&(p={type:"table",header:l(a[1].replace(/^ *| *\| *$/g,"")),align:a[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:a[3]?a[3].replace(/\n$/,"").split("\n"):[]},p.header.length===p.align.length)){for(e=e.substring(a[0].length),f=0;f<p.align.length;f++)p.align[f]=/^ *-+: *$/.test(p.align[f])?"right":/^ *:-+: *$/.test(p.align[f])?"center":/^ *:-+ *$/.test(p.align[f])?"left":null;for(f=0;f<p.cells.length;f++)p.cells[f]=l(p.cells[f],p.header.length);this.tokens.push(p)}else if(a=this.rules.hr.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"hr"});else if(a=this.rules.blockquote.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"blockquote_start"}),a=a[0].replace(/^ *> ?/gm,""),this.token(a,t),this.tokens.push({type:"blockquote_end"});else if(a=this.rules.list.exec(e)){for(e=e.substring(a[0].length),c=a[2],x=c.length>1,u={type:"list_start",ordered:x,start:x?+c:"",loose:!1},this.tokens.push(u),a=a[0].match(this.rules.item),g=[],n=!1,k=a.length,f=0;f<k;f++)p=a[f],b=p.length,p=p.replace(/^ *([*+-]|\d+\.) */,""),~p.indexOf("\n ")&&(b-=p.length,p=p.replace(this.options.pedantic?/^ {1,4}/gm:new RegExp("^ {1,"+b+"}","gm"),"")),f!==k-1&&(h=r.bullet.exec(a[f+1])[0],(c.length>1?1===h.length:h.length>1||this.options.smartLists&&h!==c)&&(e=a.slice(f+1).join("\n")+e,f=k-1)),s=n||/\n\n(?!\s*$)/.test(p),f!==k-1&&(n="\n"===p.charAt(p.length-1),s||(s=n)),s&&(u.loose=!0),_=/^\[[ xX]\] /.test(p),w=void 0,_&&(w=" "!==p[1],p=p.replace(/^\[[ xX]\] +/,"")),d={type:"list_item_start",task:_,checked:w,loose:s},g.push(d),this.tokens.push(d),this.token(p,!1),this.tokens.push({type:"list_item_end"});if(u.loose)for(k=g.length,f=0;f<k;f++)g[f].loose=!0;this.tokens.push({type:"list_end"})}else if(a=this.rules.html.exec(e))e=e.substring(a[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===a[1]||"script"===a[1]||"style"===a[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):o(a[0]):a[0]});else if(t&&(a=this.rules.def.exec(e)))e=e.substring(a[0].length),a[3]&&(a[3]=a[3].substring(1,a[3].length-1)),m=a[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[m]||(this.tokens.links[m]={href:a[2],title:a[3]});else if((a=this.rules.table.exec(e))&&(p={type:"table",header:l(a[1].replace(/^ *| *\| *$/g,"")),align:a[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:a[3]?a[3].replace(/\n$/,"").split("\n"):[]},p.header.length===p.align.length)){for(e=e.substring(a[0].length),f=0;f<p.align.length;f++)p.align[f]=/^ *-+: *$/.test(p.align[f])?"right":/^ *:-+: *$/.test(p.align[f])?"center":/^ *:-+ *$/.test(p.align[f])?"left":null;for(f=0;f<p.cells.length;f++)p.cells[f]=l(p.cells[f].replace(/^ *\| *| *\| *$/g,""),p.header.length);this.tokens.push(p)}else if(a=this.rules.lheading.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"heading",depth:"="===a[2].charAt(0)?1:2,text:a[1]});else if(t&&(a=this.rules.paragraph.exec(e)))e=e.substring(a[0].length),this.tokens.push({type:"paragraph",text:"\n"===a[1].charAt(a[1].length-1)?a[1].slice(0,-1):a[1]});else if(a=this.rules.text.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"text",text:a[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens}}},"U4+L":function(e,t,n){"use strict";n.r(t),n.d(t,"BlogModule",(function(){return C}));var s=n("AytR"),r=n("tk/3"),i=n("fXoL");class l{}let o=(()=>{class e{constructor(e){this.httpClient=e}getByID(e){const t=new r.c;return t.append("Access-Control-Allow-Origin","*"),this.httpClient.get(s.a.apiUrl+"/blog-posts/"+e,{headers:t})}getAll(){const e=new r.c;return e.append("Access-Control-Allow-Origin","*"),this.httpClient.get(s.a.apiUrl+"/blog-posts",{headers:e})}}return e.\u0275fac=function(t){return new(t||e)(i.Zb(r.a))},e.\u0275prov=i.Ib({token:e,factory:e.\u0275fac}),e})();var a=n("tyNb"),c=n("ofXK"),h=n("4MG8"),p=n("jhN1"),u=n("lJxs");n("SxV6");const g=["*"];class d{}const b=new i.q("SECURITY_CONTEXT");let f=(()=>{let e=class{constructor(e,t,n,s,r){this.platform=e,this.securityContext=t,this.http=n,this.sanitizer=r,this.initialMarkedOptions={renderer:new h.Renderer},this.options=s}get options(){return this._options}set options(e){this._options=Object.assign(Object.assign({},this.initialMarkedOptions),e)}get renderer(){return this.options.renderer}set renderer(e){this.options.renderer=e}compile(e,t=!1,n=this.options){const s=this.trimIndentation(e),r=t?this.decodeHtml(s):s,i=Object(h.parse)(r,n);return this.sanitizer.sanitize(this.securityContext,i)}getSource(e){if(!this.http)throw new Error("[ngx-markdown] When using the [src] attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information");return this.http.get(e,{responseType:"text"}).pipe(Object(u.a)(t=>this.handleExtension(e,t)))}highlight(e){if(Object(c.t)(this.platform)&&"undefined"!=typeof Prism){e||(e=document);const t=e.querySelectorAll('pre code:not([class*="language-"])');Array.prototype.forEach.call(t,e=>e.classList.add("language-none")),Prism.highlightAllUnder(e)}}renderKatex(e,t){if("undefined"==typeof katex||void 0===katex.renderToString)throw new Error("[ngx-markdown When using the [katex] attribute you *have to* include KaTeX files to `angular.json` or use imports. See README for more information");return e.replace(/\$([^\s][^$]*?[^\s])\$/gm,(e,n)=>katex.renderToString(n,t))}decodeHtml(e){if(Object(c.t)(this.platform)){const t=document.createElement("textarea");return t.innerHTML=e,t.value}return e}handleExtension(e,t){const n=e?e.split("?")[0].split(".").splice(-1).join():null;return"md"!==n?"```"+n+"\n"+t+"\n```":t}trimIndentation(e){if(!e)return"";let t;return e.split("\n").map(e=>{let n=t;return e.length>0&&(n=isNaN(n)?e.search(/\S|$/):Math.min(e.search(/\S|$/),n)),isNaN(t)&&(t=n),n?e.substring(n):e}).join("\n")}};return e.\u0275fac=function(t){return new(t||e)(i.Zb(i.B),i.Zb(b),i.Zb(r.a,8),i.Zb(d,8),i.Zb(p.b))},e.\u0275prov=i.Ib({token:e,factory:e.\u0275fac}),e})();var m=function(e){return e.LineHighlight="line-highlight",e.LineNumbers="line-numbers",e}({});let k=(()=>{let e=class{constructor(e,t){this.element=e,this.markdownService=t,this.error=new i.n,this.load=new i.n,this.ready=new i.n,this._katex=!1,this._lineHighlight=!1,this._lineNumbers=!1}get katex(){return this._katex}set katex(e){this._katex=this.coerceBooleanProperty(e)}get lineNumbers(){return this._lineNumbers}set lineNumbers(e){this._lineNumbers=this.coerceBooleanProperty(e)}get lineHighlight(){return this._lineHighlight}set lineHighlight(e){this._lineHighlight=this.coerceBooleanProperty(e)}ngOnChanges(){null==this.data?null==this.src||this.handleSrc():this.handleData()}ngAfterViewInit(){this.data||this.src||this.handleTransclusion()}render(e,t=!1){let n=this.markdownService.compile(e,t);n=this.katex?this.markdownService.renderKatex(n,this.katexOptions):n,this.element.nativeElement.innerHTML=n,this.handlePlugins(),this.markdownService.highlight(this.element.nativeElement),this.ready.emit()}coerceBooleanProperty(e){return null!=e&&"false"!==`${e}`}handleData(){this.render(this.data)}handleSrc(){this.markdownService.getSource(this.src).subscribe(e=>{this.render(e),this.load.emit(e)},e=>this.error.emit(e))}handleTransclusion(){this.render(this.element.nativeElement.innerHTML,!0)}handlePlugins(){this.lineHighlight&&(this.setPluginClass(this.element.nativeElement,m.LineHighlight),this.setPluginOptions(this.element.nativeElement,{dataLine:this.line,dataLineOffset:this.lineOffset})),this.lineNumbers&&(this.setPluginClass(this.element.nativeElement,m.LineNumbers),this.setPluginOptions(this.element.nativeElement,{dataStart:this.start}))}setPluginClass(e,t){const n=e.querySelectorAll("pre");for(let s=0;s<n.length;s++){const e=t instanceof Array?t:[t];n.item(s).classList.add(...e)}}setPluginOptions(e,t){const n=e.querySelectorAll("pre");for(let s=0;s<n.length;s++)Object.keys(t).forEach(e=>{const r=t[e];if(r){const t=this.toLispCase(e);n.item(s).setAttribute(t,r.toString())}})}toLispCase(e){const t=e.match(/([A-Z])/g);if(!t)return e;let n=e.toString();for(let s=0,r=t.length;s<r;s++)n=n.replace(new RegExp(t[s]),"-"+t[s].toLowerCase());return"-"===n.slice(0,1)&&(n=n.slice(1)),n}};return e.\u0275fac=function(t){return new(t||e)(i.Mb(i.l),i.Mb(f))},e.\u0275cmp=i.Gb({type:e,selectors:[["markdown"],["","markdown",""]],inputs:{katex:"katex",lineNumbers:"lineNumbers",lineHighlight:"lineHighlight",data:"data",src:"src",katexOptions:"katexOptions",start:"start",line:"line",lineOffset:"lineOffset"},outputs:{error:"error",load:"load",ready:"ready"},features:[i.xb],ngContentSelectors:g,decls:1,vars:0,template:function(e,t){1&e&&(i.hc(),i.gc(0))},encapsulation:2}),e})();var x;let _=(()=>{let e=x=class{static forRoot(e){return{ngModule:x,providers:[f,e&&e.loader||[],e&&e.markedOptions||[],{provide:b,useValue:e&&null!=e.sanitize?e.sanitize:i.H.HTML}]}}static forChild(){return{ngModule:x}}};return e.\u0275mod=i.Kb({type:e}),e.\u0275inj=i.Jb({factory:function(t){return new(t||e)}}),e})(),w=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Gb({type:e,selectors:[["app-mark-down-detail"]],inputs:{innerHTMLMarkdown:"innerHTMLMarkdown"},decls:5,vars:1,consts:[[1,"card-body"],[3,"innerHTML"]],template:function(e,t){1&e&&(i.Rb(0,"markdown",0),i.zc(1,"\n  "),i.Rb(2,"div",1),i.zc(3,"\n  "),i.Qb(),i.zc(4,"\n"),i.Qb()),2&e&&(i.zb(2),i.ic("innerHTML",t.innerHTMLMarkdown,i.rc))},directives:[k],styles:[""]}),e})();function y(e,t){if(1&e&&i.Nb(0,"app-mark-down-detail",5),2&e){const e=i.fc();i.ic("innerHTMLMarkdown",e.blogEntity.markDown)}}let S=(()=>{class e{constructor(e,t,n){this.blogService=e,this.ref=t,this.route=n,this.blogEntity=new l,this.blogEntity.markDown="",this.id=this.route.snapshot.params.id,this.getIndividualParam(),this.route.params.subscribe(e=>{this.id=e.id,this.getIndividualParam()})}getIndividualParam(){const e=this.blogService.getByID(this.id).subscribe(t=>{this.blogEntity=t,this.ref.detectChanges(),e.unsubscribe()},t=>{console.log("error in recieving the blog post"),e.unsubscribe()})}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(i.Mb(o),i.Mb(i.h),i.Mb(a.a))},e.\u0275cmp=i.Gb({type:e,selectors:[["app-blog-post"]],decls:6,vars:3,consts:[[1,"row","align-items-center","no-gutters","mb-4"],[1,"col-xl-12",3,"innerHTML"],["alt","",1,"img-fluid","col-lg-8","col-md-10","col-12",3,"src"],[1,"col-xl-12","card"],[3,"innerHTMLMarkdown",4,"ngIf"],[3,"innerHTMLMarkdown"]],template:function(e,t){1&e&&(i.Rb(0,"div",0),i.Nb(1,"div",1),i.Nb(2,"img",2),i.Qb(),i.Rb(3,"div",0),i.Rb(4,"div",3),i.xc(5,y,1,1,"app-mark-down-detail",4),i.Qb(),i.Qb()),2&e&&(i.zb(1),i.ic("innerHTML",t.blogEntity.title,i.rc),i.zb(1),i.ic("src",t.blogEntity.imageSrc,i.sc),i.zb(3),i.ic("ngIf",""!=t.blogEntity.markDown))},directives:[c.j,w],styles:[""]}),e})(),v=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Gb({type:e,selectors:[["app-blog"]],decls:8,vars:0,consts:[[1,"masthead"],[1,"container","d-flex","h-100","align-items-center"],[1,"mx-auto","text-center"],[1,"col-12","my-0","text-uppercase",2,"font-size","xx-large"],["id","projects",1,"projects-section","bg-light"],[1,"container"]],template:function(e,t){1&e&&(i.Rb(0,"header",0),i.Rb(1,"div",1),i.Rb(2,"div",2),i.Rb(3,"h1",3),i.zc(4,"Pooria Poorsarvi Tehrani's Blog"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(5,"section",4),i.Rb(6,"div",5),i.Nb(7,"router-outlet"),i.Qb(),i.Qb())},directives:[a.d],styles:[""]}),e})();const $=["*"];let z=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Gb({type:e,selectors:[["app-individual-blog-snippet"]],inputs:{image_src:"image_src"},ngContentSelectors:$,decls:5,vars:1,consts:[[1,"row","align-items-center","no-gutters","mb-4","mb-lg-5"],[1,"col-xl-8","col-lg-7"],["alt","",1,"img-fluid","mb-3","mb-lg-0",3,"src"],[1,"col-xl-4","col-lg-5"]],template:function(e,t){1&e&&(i.hc(),i.Rb(0,"div",0),i.Rb(1,"div",1),i.Nb(2,"img",2),i.Qb(),i.Rb(3,"div",3),i.gc(4),i.Qb(),i.Qb()),2&e&&(i.zb(2),i.ic("src",t.image_src,i.sc))},styles:[""]}),e})();function A(e,t){if(1&e){const e=i.Sb();i.Rb(0,"app-individual-blog-snippet",1),i.dc("click",(function(){i.qc(e);const n=t.$implicit;return i.fc().navigateToPost(n.id)})),i.Nb(1,"div",2),i.Qb()}if(2&e){const e=t.$implicit;i.ic("image_src",e.imageSrc),i.zb(1),i.ic("innerHTML",e.intro,i.rc)}}const R=[{path:"",component:v,children:[{path:"blog-list",component:(()=>{class e{constructor(e,t){this.router=e,this.blogService=t,this.blogEntities=[],t.getAll().subscribe(e=>{this.blogEntities=e},e=>{console.log("error in recieving the blog post")})}ngOnInit(){}navigateToPost(e){this.router.navigate(["blog","blog-post",String(e)])}}return e.\u0275fac=function(t){return new(t||e)(i.Mb(a.b),i.Mb(o))},e.\u0275cmp=i.Gb({type:e,selectors:[["app-blog-list"]],decls:1,vars:1,consts:[[3,"image_src","click",4,"ngFor","ngForOf"],[3,"image_src","click"],[3,"innerHTML"]],template:function(e,t){1&e&&i.xc(0,A,2,2,"app-individual-blog-snippet",0),2&e&&i.ic("ngForOf",t.blogEntities)},directives:[c.i,z],styles:["app-individual-blog-snippet[_ngcontent-%COMP%]{cursor:pointer}"]}),e})()},{path:"blog-post/:id",component:S},{path:"",redirectTo:"blog-list"}]}];let L=(()=>{class e{}return e.\u0275mod=i.Kb({type:e}),e.\u0275inj=i.Jb({factory:function(t){return new(t||e)},imports:[[a.c.forChild(R)],a.c]}),e})(),C=(()=>{class e{}return e.\u0275mod=i.Kb({type:e}),e.\u0275inj=i.Jb({factory:function(t){return new(t||e)},providers:[o],imports:[[c.b,_.forRoot(),L]]}),e})()},e56X:function(e,t,n){const{noopTest:s,edit:r,merge:i}=n("rUJ1"),l={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:s,table:s,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};l.def=r(l.def).replace("label",l._label).replace("title",l._title).getRegex(),l.bullet=/(?:[*+-]|\d{1,9}\.)/,l.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,l.item=r(l.item,"gm").replace(/bull/g,l.bullet).getRegex(),l.list=r(l.list).replace(/bull/g,l.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+l.def.source+")").getRegex(),l._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",l._comment=/<!--(?!-?>)[\s\S]*?-->/,l.html=r(l.html,"i").replace("comment",l._comment).replace("tag",l._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),l.paragraph=r(l._paragraph).replace("hr",l.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",l._tag).getRegex(),l.blockquote=r(l.blockquote).replace("paragraph",l.paragraph).getRegex(),l.normal=i({},l),l.gfm=i({},l.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),l.gfm.nptable=r(l.gfm.nptable).replace("hr",l.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",l._tag).getRegex(),l.gfm.table=r(l.gfm.table).replace("hr",l.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",l._tag).getRegex(),l.pedantic=i({},l.normal,{html:r("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",l._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:s,paragraph:r(l.normal._paragraph).replace("hr",l.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",l.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const o={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:s,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:s,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"};o.em=r(o.em).replace(/punctuation/g,o._punctuation).getRegex(),o._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,o._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,o._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,o.autolink=r(o.autolink).replace("scheme",o._scheme).replace("email",o._email).getRegex(),o._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,o.tag=r(o.tag).replace("comment",l._comment).replace("attribute",o._attribute).getRegex(),o._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,o._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,o._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,o.link=r(o.link).replace("label",o._label).replace("href",o._href).replace("title",o._title).getRegex(),o.reflink=r(o.reflink).replace("label",o._label).getRegex(),o.normal=i({},o),o.pedantic=i({},o.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:r(/^!?\[(label)\]\((.*?)\)/).replace("label",o._label).getRegex(),reflink:r(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",o._label).getRegex()}),o.gfm=i({},o.normal,{escape:r(o.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),o.gfm.url=r(o.gfm.url,"i").replace("email",o.gfm._extended_email).getRegex(),o.breaks=i({},o.gfm,{br:r(o.br).replace("{2,}","*").getRegex(),text:r(o.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),e.exports={block:l,inline:o}},hyX7:function(e,t,n){const s=n("SbYC"),{defaults:r}=n("vbtb"),{inline:i}=n("e56X"),{findClosingBracket:l,escape:o}=n("rUJ1");e.exports=class e{constructor(e,t){if(this.options=t||r,this.links=e,this.rules=i.normal,this.options.renderer=this.options.renderer||new s,this.renderer=this.options.renderer,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=i.pedantic:this.options.gfm&&(this.rules=this.options.breaks?i.breaks:i.gfm)}static get rules(){return i}static output(t,n,s){return new e(n,s).output(t)}output(t){let n,s,r,i,a,c,h="";for(;t;)if(a=this.rules.escape.exec(t))t=t.substring(a[0].length),h+=o(a[1]);else if(a=this.rules.tag.exec(t))!this.inLink&&/^<a /i.test(a[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(a[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(a[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0])&&(this.inRawBlock=!1),t=t.substring(a[0].length),h+=this.renderer.html(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):o(a[0]):a[0]);else if(a=this.rules.link.exec(t)){const s=l(a[2],"()");if(s>-1){const e=(0===a[0].indexOf("!")?5:4)+a[1].length+s;a[2]=a[2].substring(0,s),a[0]=a[0].substring(0,e).trim(),a[3]=""}t=t.substring(a[0].length),this.inLink=!0,r=a[2],this.options.pedantic?(n=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r),n?(r=n[1],i=n[3]):i=""):i=a[3]?a[3].slice(1,-1):"",r=r.trim().replace(/^<([\s\S]*)>$/,"$1"),h+=this.outputLink(a,{href:e.escapes(r),title:e.escapes(i)}),this.inLink=!1}else if((a=this.rules.reflink.exec(t))||(a=this.rules.nolink.exec(t))){if(t=t.substring(a[0].length),n=(a[2]||a[1]).replace(/\s+/g," "),n=this.links[n.toLowerCase()],!n||!n.href){h+=a[0].charAt(0),t=a[0].substring(1)+t;continue}this.inLink=!0,h+=this.outputLink(a,n),this.inLink=!1}else if(a=this.rules.strong.exec(t))t=t.substring(a[0].length),h+=this.renderer.strong(this.output(a[4]||a[3]||a[2]||a[1]));else if(a=this.rules.em.exec(t))t=t.substring(a[0].length),h+=this.renderer.em(this.output(a[6]||a[5]||a[4]||a[3]||a[2]||a[1]));else if(a=this.rules.code.exec(t))t=t.substring(a[0].length),h+=this.renderer.codespan(o(a[2].trim(),!0));else if(a=this.rules.br.exec(t))t=t.substring(a[0].length),h+=this.renderer.br();else if(a=this.rules.del.exec(t))t=t.substring(a[0].length),h+=this.renderer.del(this.output(a[1]));else if(a=this.rules.autolink.exec(t))t=t.substring(a[0].length),"@"===a[2]?(s=o(this.mangle(a[1])),r="mailto:"+s):(s=o(a[1]),r=s),h+=this.renderer.link(r,null,s);else if(this.inLink||!(a=this.rules.url.exec(t))){if(a=this.rules.text.exec(t))t=t.substring(a[0].length),h+=this.renderer.text(this.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):o(a[0]):a[0]:o(this.smartypants(a[0])));else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}else{if("@"===a[2])s=o(a[0]),r="mailto:"+s;else{do{c=a[0],a[0]=this.rules._backpedal.exec(a[0])[0]}while(c!==a[0]);s=o(a[0]),r="www."===a[1]?"http://"+s:s}t=t.substring(a[0].length),h+=this.renderer.link(r,null,s)}return h}static escapes(t){return t?t.replace(e.rules._escapes,"$1"):t}outputLink(e,t){const n=t.href,s=t.title?o(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,s,this.output(e[1])):this.renderer.image(n,s,o(e[1]))}smartypants(e){return this.options.smartypants?e.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201c").replace(/"/g,"\u201d").replace(/\.{3}/g,"\u2026"):e}mangle(e){if(!this.options.mangle)return e;const t=e.length;let n,s="",r=0;for(;r<t;r++)n=e.charCodeAt(r),Math.random()>.5&&(n="x"+n.toString(16)),s+="&#"+n+";";return s}}},rUJ1:function(e,t){const n=/[&<>"']/,s=/[&<>"']/g,r=/[<>"']|&(?!#?\w+;)/,i=/[<>"']|&(?!#?\w+;)/g,l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},o=e=>l[e],a=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function c(e){return e.replace(a,(e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")}const h=/(^|[^\[])\^/g,p=/[^\w:]/g,u=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i,g={},d=/^[^:]+:\/*[^/]*$/,b=/^([^:]+:)[\s\S]*$/,f=/^([^:]+:\/*[^/]*)[\s\S]*$/;function m(e,t){g[" "+e]||(g[" "+e]=d.test(e)?e+"/":k(e,"/",!0));const n=-1===(e=g[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(b,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(f,"$1")+t:e+t}function k(e,t,n){const s=e.length;if(0===s)return"";let r=0;for(;r<s;){const i=e.charAt(s-r-1);if(i!==t||n){if(i===t||!n)break;r++}else r++}return e.substr(0,s-r)}e.exports={escape:function(e,t){if(t){if(n.test(e))return e.replace(s,o)}else if(r.test(e))return e.replace(i,o);return e},unescape:c,edit:function(e,t){e=e.source||e,t=t||"";const n={replace:(t,s)=>(s=(s=s.source||s).replace(h,"$1"),e=e.replace(t,s),n),getRegex:()=>new RegExp(e,t)};return n},cleanUrl:function(e,t,n){if(e){let e;try{e=decodeURIComponent(c(n)).replace(p,"").toLowerCase()}catch(s){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!u.test(n)&&(n=m(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(s){return null}return n},resolveUrl:m,noopTest:{exec:function(){}},merge:function(e){let t,n,s=1;for(;s<arguments.length;s++)for(n in t=arguments[s],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},splitCells:function(e,t){const n=e.replace(/\|/g,(e,t,n)=>{let s=!1,r=t;for(;--r>=0&&"\\"===n[r];)s=!s;return s?"|":" |"}).split(/ \|/);let s=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n},rtrim:k,findClosingBracket:function(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let s=0,r=0;for(;r<n;r++)if("\\"===e[r])r++;else if(e[r]===t[0])s++;else if(e[r]===t[1]&&(s--,s<0))return r;return-1},checkSanitizeDeprecation:function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}}},vbtb:function(e,t){e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1},getDefaults:function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}},changeDefaults:function(t){e.exports.defaults=t}}}}]);