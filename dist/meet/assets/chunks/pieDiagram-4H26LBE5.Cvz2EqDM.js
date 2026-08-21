import{At as e,Dt as t,It as n,Jt as r,Lt as i,Mt as a,N as o,Nt as s,Pt as c,R as l,Xt as u,cn as d,ln as f,q as p,qt as m}from"./excalidraw.BioUBqwA.js";import{R as h,it as g,z as _}from"./vendor.D8Ma-c7L.js";import{t as v}from"./mermaid-parser.core.DlxA3sEd.js";import{t as y}from"./chunk-4BX2VUAB.CNqLd6Xr.js";var b=a.pie,x={sections:new Map,showData:!1,config:b},S=x.sections,C=x.showData,w=structuredClone(b),T={getConfig:d(()=>structuredClone(w),`getConfig`),clear:d(()=>{S=new Map,C=x.showData,t()},`clear`),setDiagramTitle:u,getDiagramTitle:i,setAccTitle:r,getAccTitle:c,setAccDescription:m,getAccDescription:s,addSection:d(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);S.has(e)||(S.set(e,t),f.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:d(()=>S,`getSections`),setShowData:d(e=>{C=e},`setShowData`),getShowData:d(()=>C,`getShowData`)},E=d((e,t)=>{y(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),D={parse:d(async e=>{let t=await v(`pie`,e);f.debug(t),E(t,T)},`parse`)},O=d(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,`getStyles`),k=d(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),n=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1);return h().value(e=>e.value).sort(null)(n)},`createPieArcs`),A={parser:D,db:T,renderer:{draw:d((t,r,i,a)=>{f.debug(`rendering pie chart
`+t);let s=a.db,c=n(),u=o(s.getConfig(),c.pie),d=p(r),m=d.append(`g`);m.attr(`transform`,`translate(225,225)`);let{themeVariables:h}=c,[v]=l(h.pieOuterStrokeWidth);v??=2;let y=u.textPosition,b=_().innerRadius(0).outerRadius(185),x=_().innerRadius(185*y).outerRadius(185*y);m.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+v/2).attr(`class`,`pieOuterCircle`);let S=s.getSections(),C=k(S),w=[h.pie1,h.pie2,h.pie3,h.pie4,h.pie5,h.pie6,h.pie7,h.pie8,h.pie9,h.pie10,h.pie11,h.pie12],T=0;S.forEach(e=>{T+=e});let E=C.filter(e=>(e.data.value/T*100).toFixed(0)!==`0`),D=g(w).domain([...S.keys()]);m.selectAll(`mySlices`).data(E).enter().append(`path`).attr(`d`,b).attr(`fill`,e=>D(e.data.label)).attr(`class`,`pieCircle`),m.selectAll(`mySlices`).data(E).enter().append(`text`).text(e=>(e.data.value/T*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+x.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`);let O=m.append(`text`).text(s.getDiagramTitle()).attr(`x`,0).attr(`y`,-400/2).attr(`class`,`pieTitleText`),A=[...S.entries()].map(([e,t])=>({label:e,value:t})),j=m.selectAll(`.legend`).data(A).enter().append(`g`).attr(`class`,`legend`).attr(`transform`,(e,t)=>{let n=22*A.length/2;return`translate(216,`+(t*22-n)+`)`});j.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>D(e.label)).style(`stroke`,e=>D(e.label)),j.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>s.getShowData()?`${e.label} [${e.value}]`:e.label);let M=512+Math.max(...j.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0)),N=O.node()?.getBoundingClientRect().width??0,P=450/2-N/2,F=450/2+N/2,I=Math.min(0,P),L=Math.max(M,F)-I;d.attr(`viewBox`,`${I} 0 ${L} 450`),e(d,450,L,u.useMaxWidth)},`draw`)},styles:O};export{A as diagram};