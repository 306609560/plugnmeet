import{o as e}from"./rolldown-runtime.CMxvf4Kt.js";import{At as t,B as n,Dt as r,En as i,H as a,It as o,Jt as s,Lt as c,Nt as l,Pt as u,Xt as d,cn as f,kt as p,ln as m,qt as h,wt as g}from"./excalidraw.BioUBqwA.js";import{$ as _,G as v,H as y,J as b,K as x,Q as S,U as C,V as w,W as T,X as E,Y as D,Z as O,_ as k,b as A,ct as j,dt as ee,et as te,ft as ne,lt as re,nt as ie,q as M,tt as ae,ut as oe,v as N,y as se}from"./vendor.D8Ma-c7L.js";var ce=a(),P=e(i(),1),le=e(A(),1),F=e(se(),1),ue=e(N(),1),de=e(k(),1),I=(function(){var e=f(function(e,t,n,r){for(n||={},r=e.length;r--;n[e[r]]=t);return n},`o`),t=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],n=[1,26],r=[1,27],i=[1,28],a=[1,29],o=[1,30],s=[1,31],c=[1,32],l=[1,33],u=[1,34],d=[1,9],p=[1,10],m=[1,11],h=[1,12],g=[1,13],_=[1,14],v=[1,15],y=[1,16],b=[1,19],x=[1,20],S=[1,21],C=[1,22],w=[1,23],T=[1,25],E=[1,35],D={trace:f(function(){},`trace`),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:`error`,4:`gantt`,6:`EOF`,8:`SPACE`,10:`NL`,12:`weekday_monday`,13:`weekday_tuesday`,14:`weekday_wednesday`,15:`weekday_thursday`,16:`weekday_friday`,17:`weekday_saturday`,18:`weekday_sunday`,20:`weekend_friday`,21:`weekend_saturday`,22:`dateFormat`,23:`inclusiveEndDates`,24:`topAxis`,25:`axisFormat`,26:`tickInterval`,27:`excludes`,28:`includes`,29:`todayMarker`,30:`title`,31:`acc_title`,32:`acc_title_value`,33:`acc_descr`,34:`acc_descr_value`,35:`acc_descr_multiline_value`,36:`section`,38:`taskTxt`,39:`taskData`,40:`click`,41:`callbackname`,42:`callbackargs`,43:`href`},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:f(function(e,t,n,r,i,a,o){var s=a.length-1;switch(i){case 1:return a[s-1];case 2:this.$=[];break;case 3:a[s-1].push(a[s]),this.$=a[s-1];break;case 4:case 5:this.$=a[s];break;case 6:case 7:this.$=[];break;case 8:r.setWeekday(`monday`);break;case 9:r.setWeekday(`tuesday`);break;case 10:r.setWeekday(`wednesday`);break;case 11:r.setWeekday(`thursday`);break;case 12:r.setWeekday(`friday`);break;case 13:r.setWeekday(`saturday`);break;case 14:r.setWeekday(`sunday`);break;case 15:r.setWeekend(`friday`);break;case 16:r.setWeekend(`saturday`);break;case 17:r.setDateFormat(a[s].substr(11)),this.$=a[s].substr(11);break;case 18:r.enableInclusiveEndDates(),this.$=a[s].substr(18);break;case 19:r.TopAxis(),this.$=a[s].substr(8);break;case 20:r.setAxisFormat(a[s].substr(11)),this.$=a[s].substr(11);break;case 21:r.setTickInterval(a[s].substr(13)),this.$=a[s].substr(13);break;case 22:r.setExcludes(a[s].substr(9)),this.$=a[s].substr(9);break;case 23:r.setIncludes(a[s].substr(9)),this.$=a[s].substr(9);break;case 24:r.setTodayMarker(a[s].substr(12)),this.$=a[s].substr(12);break;case 27:r.setDiagramTitle(a[s].substr(6)),this.$=a[s].substr(6);break;case 28:this.$=a[s].trim(),r.setAccTitle(this.$);break;case 29:case 30:this.$=a[s].trim(),r.setAccDescription(this.$);break;case 31:r.addSection(a[s].substr(8)),this.$=a[s].substr(8);break;case 33:r.addTask(a[s-1],a[s]),this.$=`task`;break;case 34:this.$=a[s-1],r.setClickEvent(a[s-1],a[s],null);break;case 35:this.$=a[s-2],r.setClickEvent(a[s-2],a[s-1],a[s]);break;case 36:this.$=a[s-2],r.setClickEvent(a[s-2],a[s-1],null),r.setLink(a[s-2],a[s]);break;case 37:this.$=a[s-3],r.setClickEvent(a[s-3],a[s-2],a[s-1]),r.setLink(a[s-3],a[s]);break;case 38:this.$=a[s-2],r.setClickEvent(a[s-2],a[s],null),r.setLink(a[s-2],a[s-1]);break;case 39:this.$=a[s-3],r.setClickEvent(a[s-3],a[s-1],a[s]),r.setLink(a[s-3],a[s-2]);break;case 40:this.$=a[s-1],r.setLink(a[s-1],a[s]);break;case 41:case 47:this.$=a[s-1]+` `+a[s];break;case 42:case 43:case 45:this.$=a[s-2]+` `+a[s-1]+` `+a[s];break;case 44:case 46:this.$=a[s-3]+` `+a[s-2]+` `+a[s-1]+` `+a[s];break}},`anonymous`),table:[{3:1,4:[1,2]},{1:[3]},e(t,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:n,13:r,14:i,15:a,16:o,17:s,18:c,19:18,20:l,21:u,22:d,23:p,24:m,25:h,26:g,27:_,28:v,29:y,30:b,31:x,33:S,35:C,36:w,37:24,38:T,40:E},e(t,[2,7],{1:[2,1]}),e(t,[2,3]),{9:36,11:17,12:n,13:r,14:i,15:a,16:o,17:s,18:c,19:18,20:l,21:u,22:d,23:p,24:m,25:h,26:g,27:_,28:v,29:y,30:b,31:x,33:S,35:C,36:w,37:24,38:T,40:E},e(t,[2,5]),e(t,[2,6]),e(t,[2,17]),e(t,[2,18]),e(t,[2,19]),e(t,[2,20]),e(t,[2,21]),e(t,[2,22]),e(t,[2,23]),e(t,[2,24]),e(t,[2,25]),e(t,[2,26]),e(t,[2,27]),{32:[1,37]},{34:[1,38]},e(t,[2,30]),e(t,[2,31]),e(t,[2,32]),{39:[1,39]},e(t,[2,8]),e(t,[2,9]),e(t,[2,10]),e(t,[2,11]),e(t,[2,12]),e(t,[2,13]),e(t,[2,14]),e(t,[2,15]),e(t,[2,16]),{41:[1,40],43:[1,41]},e(t,[2,4]),e(t,[2,28]),e(t,[2,29]),e(t,[2,33]),e(t,[2,34],{42:[1,42],43:[1,43]}),e(t,[2,40],{41:[1,44]}),e(t,[2,35],{43:[1,45]}),e(t,[2,36]),e(t,[2,38],{42:[1,46]}),e(t,[2,37]),e(t,[2,39])],defaultActions:{},parseError:f(function(e,t){if(t.recoverable)this.trace(e);else{var n=Error(e);throw n.hash=t,n}},`parseError`),parse:f(function(e){var t=this,n=[0],r=[],i=[null],a=[],o=this.table,s=``,c=0,l=0,u=0,d=2,p=1,m=a.slice.call(arguments,1),h=Object.create(this.lexer),g={yy:{}};for(var _ in this.yy)Object.prototype.hasOwnProperty.call(this.yy,_)&&(g.yy[_]=this.yy[_]);h.setInput(e,g.yy),g.yy.lexer=h,g.yy.parser=this,h.yylloc===void 0&&(h.yylloc={});var v=h.yylloc;a.push(v);var y=h.options&&h.options.ranges;typeof g.yy.parseError==`function`?this.parseError=g.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function b(e){n.length-=2*e,i.length-=e,a.length-=e}f(b,`popStack`);function x(){var e=r.pop()||h.lex()||p;return typeof e!=`number`&&(e instanceof Array&&(r=e,e=r.pop()),e=t.symbols_[e]||e),e}f(x,`lex`);for(var S,C,w,T,E,D={},O,k,A,j;;){if(w=n[n.length-1],this.defaultActions[w]?T=this.defaultActions[w]:(S??=x(),T=o[w]&&o[w][S]),T===void 0||!T.length||!T[0]){var ee=``;for(O in j=[],o[w])this.terminals_[O]&&O>d&&j.push(`'`+this.terminals_[O]+`'`);ee=h.showPosition?`Parse error on line `+(c+1)+`:
`+h.showPosition()+`
Expecting `+j.join(`, `)+`, got '`+(this.terminals_[S]||S)+`'`:`Parse error on line `+(c+1)+`: Unexpected `+(S==p?`end of input`:`'`+(this.terminals_[S]||S)+`'`),this.parseError(ee,{text:h.match,token:this.terminals_[S]||S,line:h.yylineno,loc:v,expected:j})}if(T[0]instanceof Array&&T.length>1)throw Error(`Parse Error: multiple actions possible at state: `+w+`, token: `+S);switch(T[0]){case 1:n.push(S),i.push(h.yytext),a.push(h.yylloc),n.push(T[1]),S=null,C?(S=C,C=null):(l=h.yyleng,s=h.yytext,c=h.yylineno,v=h.yylloc,u>0&&u--);break;case 2:if(k=this.productions_[T[1]][1],D.$=i[i.length-k],D._$={first_line:a[a.length-(k||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(k||1)].first_column,last_column:a[a.length-1].last_column},y&&(D._$.range=[a[a.length-(k||1)].range[0],a[a.length-1].range[1]]),E=this.performAction.apply(D,[s,l,c,g.yy,T[1],i,a].concat(m)),E!==void 0)return E;k&&(n=n.slice(0,-1*k*2),i=i.slice(0,-1*k),a=a.slice(0,-1*k)),n.push(this.productions_[T[1]][0]),i.push(D.$),a.push(D._$),A=o[n[n.length-2]][n[n.length-1]],n.push(A);break;case 3:return!0}}return!0},`parse`)};D.lexer=(function(){return{EOF:1,parseError:f(function(e,t){if(this.yy.parser)this.yy.parser.parseError(e,t);else throw Error(e)},`parseError`),setInput:f(function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match=``,this.conditionStack=[`INITIAL`],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},`setInput`),input:f(function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},`input`),unput:f(function(e){var t=e.length,n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},`unput`),more:f(function(){return this._more=!0,this},`more`),reject:f(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError(`Lexical error on line `+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:``,token:null,line:this.yylineno});return this},`reject`),less:f(function(e){this.unput(this.match.slice(e))},`less`),pastInput:f(function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?`...`:``)+e.substr(-20).replace(/\n/g,``)},`pastInput`),upcomingInput:f(function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?`...`:``)).replace(/\n/g,``)},`upcomingInput`),showPosition:f(function(){var e=this.pastInput(),t=Array(e.length+1).join(`-`);return e+this.upcomingInput()+`
`+t+`^`},`showPosition`),test_match:f(function(e,t){var n,r,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),r=e[0].match(/(?:\r\n?|\n).*/g),r&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],n=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var a in i)this[a]=i[a];return!1}return!1},`test_match`),next:f(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var e,t,n,r;this._more||(this.yytext=``,this.match=``);for(var i=this._currentRules(),a=0;a<i.length;a++)if(n=this._input.match(this.rules[i[a]]),n&&(!t||n[0].length>t[0].length)){if(t=n,r=a,this.options.backtrack_lexer){if(e=this.test_match(n,i[a]),e!==!1)return e;if(this._backtrack){t=!1;continue}else return!1}else if(!this.options.flex)break}return t?(e=this.test_match(t,i[r]),e===!1?!1:e):this._input===``?this.EOF:this.parseError(`Lexical error on line `+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:``,token:null,line:this.yylineno})},`next`),lex:f(function(){return this.next()||this.lex()},`lex`),begin:f(function(e){this.conditionStack.push(e)},`begin`),popState:f(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},`popState`),_currentRules:f(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},`_currentRules`),topState:f(function(e){return e=this.conditionStack.length-1-Math.abs(e||0),e>=0?this.conditionStack[e]:`INITIAL`},`topState`),pushState:f(function(e){this.begin(e)},`pushState`),stateStackSize:f(function(){return this.conditionStack.length},`stateStackSize`),options:{"case-insensitive":!0},performAction:f(function(e,t,n,r){switch(n){case 0:return this.begin(`open_directive`),`open_directive`;case 1:return this.begin(`acc_title`),31;case 2:return this.popState(),`acc_title_value`;case 3:return this.begin(`acc_descr`),33;case 4:return this.popState(),`acc_descr_value`;case 5:this.begin(`acc_descr_multiline`);break;case 6:this.popState();break;case 7:return`acc_descr_multiline_value`;case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin(`href`);break;case 15:this.popState();break;case 16:return 43;case 17:this.begin(`callbackname`);break;case 18:this.popState();break;case 19:this.popState(),this.begin(`callbackargs`);break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin(`click`);break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return`date`;case 45:return 30;case 46:return`accDescription`;case 47:return 36;case 48:return 38;case 49:return 39;case 50:return`:`;case 51:return 6;case 52:return`INVALID`}},`anonymous`),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}}})();function O(){this.yy={}}return f(O,`Parser`),O.prototype=D,D.Parser=O,new O})();I.parser=I;var fe=I;P.default.extend(le.default),P.default.extend(F.default),P.default.extend(ue.default);var pe={friday:5,saturday:6},L=``,me=``,he=void 0,ge=``,R=[],z=[],_e=new Map,B=[],V=[],H=``,U=``,ve=[`active`,`done`,`crit`,`milestone`,`vert`],W=[],G=``,K=!1,ye=!1,be=`sunday`,q=`saturday`,xe=0,Se=f(function(){B=[],V=[],H=``,W=[],tt=0,it=void 0,Y=void 0,X=[],L=``,me=``,U=``,he=void 0,ge=``,R=[],z=[],K=!1,ye=!1,xe=0,_e=new Map,G=``,r(),be=`sunday`,q=`saturday`},`clear`),Ce=f(function(e){G=e},`setDiagramId`),we=f(function(e){me=e},`setAxisFormat`),Te=f(function(){return me},`getAxisFormat`),Ee=f(function(e){he=e},`setTickInterval`),De=f(function(){return he},`getTickInterval`),Oe=f(function(e){ge=e},`setTodayMarker`),ke=f(function(){return ge},`getTodayMarker`),Ae=f(function(e){L=e},`setDateFormat`),je=f(function(){K=!0},`enableInclusiveEndDates`),Me=f(function(){return K},`endDatesAreInclusive`),Ne=f(function(){ye=!0},`enableTopAxis`),Pe=f(function(){return ye},`topAxisEnabled`),Fe=f(function(e){U=e},`setDisplayMode`),Ie=f(function(){return U},`getDisplayMode`),Le=f(function(){return L},`getDateFormat`),Re=f(function(e){R=e.toLowerCase().split(/[\s,]+/)},`setIncludes`),ze=f(function(){return R},`getIncludes`),Be=f(function(e){z=e.toLowerCase().split(/[\s,]+/)},`setExcludes`),Ve=f(function(){return z},`getExcludes`),He=f(function(){return _e},`getLinks`),Ue=f(function(e){H=e,B.push(e)},`addSection`),We=f(function(){return B},`getSections`),Ge=f(function(){let e=ct(),t=0;for(;!e&&t<10;)e=ct(),t++;return V=X,V},`getTasks`),Ke=f(function(e,t,n,r){let i=e.format(t.trim()),a=e.format(`YYYY-MM-DD`);return r.includes(i)||r.includes(a)?!1:n.includes(`weekends`)&&(e.isoWeekday()===pe[q]||e.isoWeekday()===pe[q]+1)||n.includes(e.format(`dddd`).toLowerCase())?!0:n.includes(i)||n.includes(a)},`isInvalidDate`),qe=f(function(e){be=e},`setWeekday`),Je=f(function(){return be},`getWeekday`),Ye=f(function(e){q=e},`setWeekend`),Xe=f(function(e,t,n,r){if(!n.length||e.manualEndTime)return;let i;i=e.startTime instanceof Date?(0,P.default)(e.startTime):(0,P.default)(e.startTime,t,!0),i=i.add(1,`d`);let a;a=e.endTime instanceof Date?(0,P.default)(e.endTime):(0,P.default)(e.endTime,t,!0);let[o,s]=Ze(i,a,t,n,r);e.endTime=o.toDate(),e.renderEndTime=s},`checkTaskDates`),Ze=f(function(e,t,n,r,i){let a=!1,o=null,s=t.add(1e4,`d`);for(;e<=t;){if(a||(o=t.toDate()),a=Ke(e,n,r,i),a&&(t=t.add(1,`d`),t>s))throw Error("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.");e=e.add(1,`d`)}return[t,o]},`fixTaskDates`),Qe=f(function(e,t,n){if(n=n.trim(),f(e=>{let t=e.trim();return t===`x`||t===`X`},`isTimestampFormat`)(t)&&/^\d+$/.test(n))return new Date(Number(n));let r=/^after\s+(?<ids>[\d\w- ]+)/.exec(n);if(r!==null){let e=null;for(let t of r.groups.ids.split(` `)){let n=Z(t);n!==void 0&&(!e||n.endTime>e.endTime)&&(e=n)}if(e)return e.endTime;let t=new Date;return t.setHours(0,0,0,0),t}let i=(0,P.default)(n,t.trim(),!0);if(i.isValid())return i.toDate();{m.debug(`Invalid date:`+n),m.debug(`With date format:`+t.trim());let e=new Date(n);if(e===void 0||isNaN(e.getTime())||e.getFullYear()<-1e4||e.getFullYear()>1e4)throw Error(`Invalid date:`+n);return e}},`getStartDate`),$e=f(function(e){let t=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(e.trim());return t===null?[NaN,`ms`]:[Number.parseFloat(t[1]),t[2]]},`parseDuration`),et=f(function(e,t,n,r=!1){n=n.trim();let i=/^until\s+(?<ids>[\d\w- ]+)/.exec(n);if(i!==null){let e=null;for(let t of i.groups.ids.split(` `)){let n=Z(t);n!==void 0&&(!e||n.startTime<e.startTime)&&(e=n)}if(e)return e.startTime;let t=new Date;return t.setHours(0,0,0,0),t}let a=(0,P.default)(n,t.trim(),!0);if(a.isValid())return r&&(a=a.add(1,`d`)),a.toDate();let o=(0,P.default)(e),[s,c]=$e(n);if(!Number.isNaN(s)){let e=o.add(s,c);e.isValid()&&(o=e)}return o.toDate()},`getEndDate`),tt=0,J=f(function(e){return e===void 0?(tt+=1,`task`+tt):e},`parseId`),nt=f(function(e,t){let n;n=t.substr(0,1)===`:`?t.substr(1,t.length):t;let r=n.split(`,`),i={};mt(r,i,ve);for(let e=0;e<r.length;e++)r[e]=r[e].trim();let a=``;switch(r.length){case 1:i.id=J(),i.startTime=e.endTime,a=r[0];break;case 2:i.id=J(),i.startTime=Qe(void 0,L,r[0]),a=r[1];break;case 3:i.id=J(r[0]),i.startTime=Qe(void 0,L,r[1]),a=r[2];break;default:}return a&&(i.endTime=et(i.startTime,L,a,K),i.manualEndTime=(0,P.default)(a,`YYYY-MM-DD`,!0).isValid(),Xe(i,L,z,R)),i},`compileData`),rt=f(function(e,t){let n;n=t.substr(0,1)===`:`?t.substr(1,t.length):t;let r=n.split(`,`),i={};mt(r,i,ve);for(let e=0;e<r.length;e++)r[e]=r[e].trim();switch(r.length){case 1:i.id=J(),i.startTime={type:`prevTaskEnd`,id:e},i.endTime={data:r[0]};break;case 2:i.id=J(),i.startTime={type:`getStartDate`,startData:r[0]},i.endTime={data:r[1]};break;case 3:i.id=J(r[0]),i.startTime={type:`getStartDate`,startData:r[1]},i.endTime={data:r[2]};break;default:}return i},`parseData`),it,Y,X=[],at={},ot=f(function(e,t){let n={section:H,type:H,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:t},task:e,classes:[]},r=rt(Y,t);n.raw.startTime=r.startTime,n.raw.endTime=r.endTime,n.id=r.id,n.prevTaskId=Y,n.active=r.active,n.done=r.done,n.crit=r.crit,n.milestone=r.milestone,n.vert=r.vert,n.order=xe,xe++;let i=X.push(n);Y=n.id,at[n.id]=i-1},`addTask`),Z=f(function(e){let t=at[e];return X[t]},`findTaskById`),st=f(function(e,t){let n={section:H,type:H,description:e,task:e,classes:[]},r=nt(it,t);n.startTime=r.startTime,n.endTime=r.endTime,n.id=r.id,n.active=r.active,n.done=r.done,n.crit=r.crit,n.milestone=r.milestone,n.vert=r.vert,it=n,V.push(n)},`addTaskOrg`),ct=f(function(){let e=f(function(e){let t=X[e],n=``;switch(X[e].raw.startTime.type){case`prevTaskEnd`:t.startTime=Z(t.prevTaskId).endTime;break;case`getStartDate`:n=Qe(void 0,L,X[e].raw.startTime.startData),n&&(X[e].startTime=n);break}return X[e].startTime&&(X[e].endTime=et(X[e].startTime,L,X[e].raw.endTime.data,K),X[e].endTime&&(X[e].processed=!0,X[e].manualEndTime=(0,P.default)(X[e].raw.endTime.data,`YYYY-MM-DD`,!0).isValid(),Xe(X[e],L,z,R))),X[e].processed},`compileTask`),t=!0;for(let[n,r]of X.entries())e(n),t&&=r.processed;return t},`compileTasks`),lt=f(function(e,t){let n=t;o().securityLevel!==`loose`&&(n=(0,ce.sanitizeUrl)(t)),e.split(`,`).forEach(function(e){Z(e)!==void 0&&(ft(e,()=>{window.open(n,`_self`)}),_e.set(e,n))}),ut(e,`clickable`)},`setLink`),ut=f(function(e,t){e.split(`,`).forEach(function(e){let n=Z(e);n!==void 0&&n.classes.push(t)})},`setClass`),dt=f(function(e,t,r){if(o().securityLevel!==`loose`||t===void 0)return;let i=[];if(typeof r==`string`){i=r.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let e=0;e<i.length;e++){let t=i[e].trim();t.startsWith(`"`)&&t.endsWith(`"`)&&(t=t.substr(1,t.length-2)),i[e]=t}}i.length===0&&i.push(e),Z(e)!==void 0&&ft(e,()=>{n.runFunc(t,...i)})},`setClickFun`),ft=f(function(e,t){W.push(function(){let n=G?`${G}-${e}`:e,r=document.querySelector(`[id="${n}"]`);r!==null&&r.addEventListener(`click`,function(){t()})},function(){let n=G?`${G}-${e}`:e,r=document.querySelector(`[id="${n}-text"]`);r!==null&&r.addEventListener(`click`,function(){t()})})},`pushFun`),pt={getConfig:f(()=>o().gantt,`getConfig`),clear:Se,setDateFormat:Ae,getDateFormat:Le,enableInclusiveEndDates:je,endDatesAreInclusive:Me,enableTopAxis:Ne,topAxisEnabled:Pe,setAxisFormat:we,getAxisFormat:Te,setTickInterval:Ee,getTickInterval:De,setTodayMarker:Oe,getTodayMarker:ke,setAccTitle:s,getAccTitle:u,setDiagramTitle:d,getDiagramTitle:c,setDiagramId:Ce,setDisplayMode:Fe,getDisplayMode:Ie,setAccDescription:h,getAccDescription:l,addSection:Ue,getSections:We,getTasks:Ge,addTask:ot,findTaskById:Z,addTaskOrg:st,setIncludes:Re,getIncludes:ze,setExcludes:Be,getExcludes:Ve,setClickEvent:f(function(e,t,n){e.split(`,`).forEach(function(e){dt(e,t,n)}),ut(e,`clickable`)},`setClickEvent`),setLink:lt,getLinks:He,bindFunctions:f(function(e){W.forEach(function(t){t(e)})},`bindFunctions`),parseDuration:$e,isInvalidDate:Ke,setWeekday:qe,getWeekday:Je,setWeekend:Ye};function mt(e,t,n){let r=!0;for(;r;)r=!1,n.forEach(function(n){let i=`^\\s*`+n+`\\s*$`,a=new RegExp(i);e[0].match(a)&&(t[n]=!0,e.shift(1),r=!0)})}f(mt,`getTaskTags`),P.default.extend(de.default);var ht=f(function(){m.debug(`Something is calling, setConf, remove the call`)},`setConf`),gt={monday:v,tuesday:D,wednesday:E,thursday:b,friday:T,saturday:x,sunday:M},_t=f((e,t)=>{let n=[...e].map(()=>-1/0),r=[...e].sort((e,t)=>e.startTime-t.startTime||e.order-t.order),i=0;for(let e of r)for(let r=0;r<n.length;r++)if(e.startTime>=n[r]){n[r]=e.endTime,e.order=r+t,r>i&&(i=r);break}return i},`getMaxIntersections`),Q,$=1e4,vt={parser:fe,db:pt,renderer:{setConf:ht,draw:f(function(e,n,r,i){let a=o().gantt;i.db.setDiagramId(n);let s=o().securityLevel,c;s===`sandbox`&&(c=g(`#i`+n));let l=g(s===`sandbox`?c.nodes()[0].contentDocument.body:`body`),u=s===`sandbox`?c.nodes()[0].contentDocument:document,d=u.getElementById(n);Q=d.parentElement.offsetWidth,Q===void 0&&(Q=1200),a.useWidth!==void 0&&(Q=a.useWidth);let h=i.db.getTasks(),v=[];for(let e of h)v.push(e.type);v=F(v);let b={},x=2*a.topPadding;if(i.db.getDisplayMode()===`compact`||a.displayMode===`compact`){let e={};for(let t of h)e[t.section]===void 0?e[t.section]=[t]:e[t.section].push(t);let t=0;for(let n of Object.keys(e)){let r=_t(e[n],t)+1;t+=r,x+=r*(a.barHeight+a.barGap),b[n]=r}}else{x+=h.length*(a.barHeight+a.barGap);for(let e of v)b[e]=h.filter(t=>t.type===e).length}d.setAttribute(`viewBox`,`0 0 `+Q+` `+x);let T=l.select(`[id="${n}"]`),E=w().domain([ee(h,function(e){return e.startTime}),ne(h,function(e){return e.endTime})]).rangeRound([0,Q-a.leftPadding-a.rightPadding]);function D(e,t){let n=e.startTime,r=t.startTime,i=0;return n>r?i=1:n<r&&(i=-1),i}f(D,`taskCompare`),h.sort(D),k(h,Q,x),t(T,x,Q,a.useMaxWidth),T.append(`text`).text(i.db.getDiagramTitle()).attr(`x`,Q/2).attr(`y`,a.titleTopMargin).attr(`class`,`titleText`);function k(e,t,n){let r=a.barHeight,o=r+a.barGap,s=a.topPadding,c=a.leftPadding,l=ie().domain([0,v.length]).range([`#00B9FA`,`#F95002`]).interpolate(j);M(o,s,c,t,n,e,i.db.getExcludes(),i.db.getIncludes()),se(c,s,t,n),A(e,o,s,c,r,l,t,n),ce(o,s,c,r,l),le(c,s,t,n)}f(k,`makeGantt`);function A(e,t,r,s,c,l,u){e.sort((e,t)=>e.vert===t.vert?0:e.vert?1:-1);let d=[...new Set(e.map(e=>e.order))].map(t=>e.find(e=>e.order===t));T.append(`g`).selectAll(`rect`).data(d).enter().append(`rect`).attr(`x`,0).attr(`y`,function(e,n){return n=e.order,n*t+r-2}).attr(`width`,function(){return u-a.rightPadding/2}).attr(`height`,t).attr(`class`,function(e){for(let[t,n]of v.entries())if(e.type===n)return`section section`+t%a.numberSectionStyles;return`section section0`}).enter();let f=T.append(`g`).selectAll(`rect`).data(e).enter(),p=i.db.getLinks();if(f.append(`rect`).attr(`id`,function(e){return n+`-`+e.id}).attr(`rx`,3).attr(`ry`,3).attr(`x`,function(e){return e.milestone?E(e.startTime)+s+.5*(E(e.endTime)-E(e.startTime))-.5*c:E(e.startTime)+s}).attr(`y`,function(e,n){return n=e.order,e.vert?a.gridLineStartPadding:n*t+r}).attr(`width`,function(e){return e.milestone?c:e.vert?.08*c:E(e.renderEndTime||e.endTime)-E(e.startTime)}).attr(`height`,function(e){return e.vert?h.length*(a.barHeight+a.barGap)+a.barHeight*2:c}).attr(`transform-origin`,function(e,n){return n=e.order,(E(e.startTime)+s+.5*(E(e.endTime)-E(e.startTime))).toString()+`px `+(n*t+r+.5*c).toString()+`px`}).attr(`class`,function(e){let t=``;e.classes.length>0&&(t=e.classes.join(` `));let n=0;for(let[t,r]of v.entries())e.type===r&&(n=t%a.numberSectionStyles);let r=``;return e.active?e.crit?r+=` activeCrit`:r=` active`:e.done?r=e.crit?` doneCrit`:` done`:e.crit&&(r+=` crit`),r.length===0&&(r=` task`),e.milestone&&(r=` milestone `+r),e.vert&&(r=` vert `+r),r+=n,r+=` `+t,`task`+r}),f.append(`text`).attr(`id`,function(e){return n+`-`+e.id+`-text`}).text(function(e){return e.task}).attr(`font-size`,a.fontSize).attr(`x`,function(e){let t=E(e.startTime),n=E(e.renderEndTime||e.endTime);if(e.milestone&&(t+=.5*(E(e.endTime)-E(e.startTime))-.5*c,n=t+c),e.vert)return E(e.startTime)+s;let r=this.getBBox().width;return r>n-t?n+r+1.5*a.leftPadding>u?t+s-5:n+s+5:(n-t)/2+t+s}).attr(`y`,function(e,n){return e.vert?a.gridLineStartPadding+h.length*(a.barHeight+a.barGap)+60:(n=e.order,n*t+a.barHeight/2+(a.fontSize/2-2)+r)}).attr(`text-height`,c).attr(`class`,function(e){let t=E(e.startTime),n=E(e.endTime);e.milestone&&(n=t+c);let r=this.getBBox().width,i=``;e.classes.length>0&&(i=e.classes.join(` `));let o=0;for(let[t,n]of v.entries())e.type===n&&(o=t%a.numberSectionStyles);let s=``;return e.active&&(s=e.crit?`activeCritText`+o:`activeText`+o),e.done?s=e.crit?s+` doneCritText`+o:s+` doneText`+o:e.crit&&(s=s+` critText`+o),e.milestone&&(s+=` milestoneText`),e.vert&&(s+=` vertText`),r>n-t?n+r+1.5*a.leftPadding>u?i+` taskTextOutsideLeft taskTextOutside`+o+` `+s:i+` taskTextOutsideRight taskTextOutside`+o+` `+s+` width-`+r:i+` taskText taskText`+o+` `+s+` width-`+r}),o().securityLevel===`sandbox`){let e;e=g(`#i`+n);let t=e.nodes()[0].contentDocument;f.filter(function(e){return p.has(e.id)}).each(function(e){var r=t.querySelector(`#`+CSS.escape(n+`-`+e.id)),i=t.querySelector(`#`+CSS.escape(n+`-`+e.id+`-text`));let a=r.parentNode;var o=t.createElement(`a`);o.setAttribute(`xlink:href`,p.get(e.id)),o.setAttribute(`target`,`_top`),a.appendChild(o),o.appendChild(r),o.appendChild(i)})}}f(A,`drawRects`);function M(e,t,r,o,s,c,l,u){if(l.length===0&&u.length===0)return;let d,f;for(let{startTime:e,endTime:t}of c)(d===void 0||e<d)&&(d=e),(f===void 0||t>f)&&(f=t);if(!d||!f)return;if((0,P.default)(f).diff((0,P.default)(d),`year`)>5){m.warn(`The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.`);return}let p=i.db.getDateFormat(),h=[],g=null,_=(0,P.default)(d);for(;_.valueOf()<=f;)i.db.isInvalidDate(_,p,l,u)?g?g.end=_:g={start:_,end:_}:g&&=(h.push(g),null),_=_.add(1,`d`);T.append(`g`).selectAll(`rect`).data(h).enter().append(`rect`).attr(`id`,e=>n+`-exclude-`+e.start.format(`YYYY-MM-DD`)).attr(`x`,e=>E(e.start.startOf(`day`))+r).attr(`y`,a.gridLineStartPadding).attr(`width`,e=>E(e.end.endOf(`day`))-E(e.start.startOf(`day`))).attr(`height`,s-t-a.gridLineStartPadding).attr(`transform-origin`,function(t,n){return(E(t.start)+r+.5*(E(t.end)-E(t.start))).toString()+`px `+(n*e+.5*s).toString()+`px`}).attr(`class`,`exclude-range`)}f(M,`drawExcludeDays`);function N(e,t,n,r){if(n<=0||e>t)return 1/0;let i=t-e,a=P.default.duration({[r??`day`]:n}).asMilliseconds();return a<=0?1/0:Math.ceil(i/a)}f(N,`getEstimatedTickCount`);function se(e,t,n,r){let o=i.db.getDateFormat(),s=i.db.getAxisFormat(),c;c=s||(o===`D`?`%d`:a.axisFormat??`%Y-%m-%d`);let l=re(E).tickSize(-r+t+a.gridLineStartPadding).tickFormat(y(c)),u=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||a.tickInterval);if(u!==null){let e=parseInt(u[1],10);if(isNaN(e)||e<=0)m.warn(`Invalid tick interval value: "${u[1]}". Skipping custom tick interval.`);else{let t=u[2],n=i.db.getWeekday()||a.weekday,r=E.domain(),o=r[0],s=r[1],c=N(o,s,e,t);if(c>$)m.warn(`The tick interval "${e}${t}" would generate ${c} ticks, which exceeds the maximum allowed (${$}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(t){case`millisecond`:l.ticks(ae.every(e));break;case`second`:l.ticks(te.every(e));break;case`minute`:l.ticks(_.every(e));break;case`hour`:l.ticks(S.every(e));break;case`day`:l.ticks(O.every(e));break;case`week`:l.ticks(gt[n].every(e));break;case`month`:l.ticks(C.every(e));break}}}if(T.append(`g`).attr(`class`,`grid`).attr(`transform`,`translate(`+e+`, `+(r-50)+`)`).call(l).selectAll(`text`).style(`text-anchor`,`middle`).attr(`fill`,`#000`).attr(`stroke`,`none`).attr(`font-size`,10).attr(`dy`,`1em`),i.db.topAxisEnabled()||a.topAxis){let n=oe(E).tickSize(-r+t+a.gridLineStartPadding).tickFormat(y(c));if(u!==null){let e=parseInt(u[1],10);if(isNaN(e)||e<=0)m.warn(`Invalid tick interval value: "${u[1]}". Skipping custom tick interval.`);else{let t=u[2],r=i.db.getWeekday()||a.weekday,o=E.domain(),s=o[0],c=o[1];if(N(s,c,e,t)<=$)switch(t){case`millisecond`:n.ticks(ae.every(e));break;case`second`:n.ticks(te.every(e));break;case`minute`:n.ticks(_.every(e));break;case`hour`:n.ticks(S.every(e));break;case`day`:n.ticks(O.every(e));break;case`week`:n.ticks(gt[r].every(e));break;case`month`:n.ticks(C.every(e));break}}}T.append(`g`).attr(`class`,`grid`).attr(`transform`,`translate(`+e+`, `+t+`)`).call(n).selectAll(`text`).style(`text-anchor`,`middle`).attr(`fill`,`#000`).attr(`stroke`,`none`).attr(`font-size`,10)}}f(se,`makeGrid`);function ce(e,t){let n=0,r=Object.keys(b).map(e=>[e,b[e]]);T.append(`g`).selectAll(`text`).data(r).enter().append(function(e){let t=e[0].split(p.lineBreakRegex),n=-(t.length-1)/2,r=u.createElementNS(`http://www.w3.org/2000/svg`,`text`);r.setAttribute(`dy`,n+`em`);for(let[e,n]of t.entries()){let t=u.createElementNS(`http://www.w3.org/2000/svg`,`tspan`);t.setAttribute(`alignment-baseline`,`central`),t.setAttribute(`x`,`10`),e>0&&t.setAttribute(`dy`,`1em`),t.textContent=n,r.appendChild(t)}return r}).attr(`x`,10).attr(`y`,function(i,a){if(a>0)for(let o=0;o<a;o++)return n+=r[a-1][1],i[1]*e/2+n*e+t;else return i[1]*e/2+t}).attr(`font-size`,a.sectionFontSize).attr(`class`,function(e){for(let[t,n]of v.entries())if(e[0]===n)return`sectionTitle sectionTitle`+t%a.numberSectionStyles;return`sectionTitle`})}f(ce,`vertLabels`);function le(e,t,n,r){let o=i.db.getTodayMarker();if(o===`off`)return;let s=T.append(`g`).attr(`class`,`today`),c=new Date,l=s.append(`line`);l.attr(`x1`,E(c)+e).attr(`x2`,E(c)+e).attr(`y1`,a.titleTopMargin).attr(`y2`,r-a.titleTopMargin).attr(`class`,`today`),o!==``&&l.attr(`style`,o.replace(/,/g,`;`))}f(le,`drawToday`);function F(e){let t={},n=[];for(let r=0,i=e.length;r<i;++r)Object.prototype.hasOwnProperty.call(t,e[r])||(t[e[r]]=!0,n.push(e[r]));return n}f(F,`checkUnique`)},`draw`)},styles:f(e=>`
  .mermaid-main-font {
        font-family: ${e.fontFamily};
  }

  .exclude-range {
    fill: ${e.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${e.sectionBkgColor};
  }

  .section2 {
    fill: ${e.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${e.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${e.titleColor};
  }

  .sectionTitle1 {
    fill: ${e.titleColor};
  }

  .sectionTitle2 {
    fill: ${e.titleColor};
  }

  .sectionTitle3 {
    fill: ${e.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${e.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${e.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${e.fontFamily};
    fill: ${e.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${e.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${e.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${e.taskTextDarkColor};
    text-anchor: start;
    font-family: ${e.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${e.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${e.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${e.taskBkgColor};
    stroke: ${e.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${e.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${e.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${e.activeTaskBkgColor};
    stroke: ${e.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${e.doneTaskBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${e.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar \u2014 same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${e.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${e.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${e.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.titleColor||e.textColor};
    font-family: ${e.fontFamily};
  }
`,`getStyles`)};export{vt as diagram};