(function(){"use strict";function W(e,o,t){return{state:e,uuid:t.uuid,data:o,timestamp:Date.now()}}function B(e,o){return{uuid:function(){return"generate-uuid-4you-seem-professional".replace(/[genratuidyosmpfl]/g,function(t){const n=Math.random()*16|0;return(t==="x"?n:n&3|8).toString(16)})}(),type:e,data:o,timestamp:Date.now()}}const R={request:function(e){return new Promise((o,t)=>{chrome.runtime.sendMessage(B("FetchRequest",e),n=>{n.state?o(n.data):t(n.data)})})},get:function(e){return new Promise((o,t)=>{chrome.runtime.sendMessage(B("FetchGet",e),n=>{n.state?o(n):t(n)})})},post:function(e){return new Promise((o,t)=>{chrome.runtime.sendMessage(B("FetchPost",e),n=>{n.state?o(n.data):t(n.data)})})}};var N="";chrome.storage.local.get("userInfo").then(e=>{Object.keys(e).length!==0&&(N=e.userInfo)});var m={localStorage:!0,cloudStorage:!1,nodeColor:"#CCFF66",lineColor:"#0099CC"};chrome.storage.local.get("localConfig").then(e=>{Object.keys(e).length!==0&&(m.localStorage=e.localConfig.localStorage,m.cloudStorage=e.localConfig.cloudStorage,m.nodeColor=e.localConfig.nodeColor,m.lineColor=e.localConfig.lineColor)}),chrome.runtime.onMessage.addListener((e,o,t)=>{if(typeof e!="object"||!e.type){console.error("消息格式不符合规范：",e),reject(`消息 ${JSON.stringify(e)} 格式不符合规范。`);return}switch(e.type){case"ChangeLocalConfig":{m=e.data,T(),t("已重新绘画");break}case"getPageKGInfo":{chrome.storage.local.set({visionData:s}).then(()=>{}),t(W(!0,{},e)),console.log(`消息 ${JSON.stringify(e)} 处理完成。`);break}default:{console.error("消息类型非法：",e),reject(`消息 ${e} 类型非法。`);break}}}),document.addEventListener("mouseup",V,{capture:!0});var b=window.location.href;function Y(e){setTimeout(function(o){if(b!=window.location.href){for(let t of s.relationList)t.id&&document.getElementById(t.id).remove();for(let t of Object.keys(s.nodeList))for(let n of Array.from(document.getElementsByClassName(t)))n.remove();b=window.location.href,z()}},1e3)}document.addEventListener("mousedown",Y,{capture:!0});var s={nodeList:{},relationList:[],startNodeId:"",createTime:"",pageTitle:""};function K(){let e=new Date,o=e.getFullYear(),t=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0"),i=String(e.getHours()).padStart(2,"0"),l=String(e.getMinutes()).padStart(2,"0"),r=String(e.getSeconds()).padStart(2,"0");return o+"-"+t+"-"+n+"-"+i+"-"+l+"-"+r}function F(e){let o=e.split("-"),t=parseInt(o[0],10),n=parseInt(o[1],10),i=parseInt(o[2],10),l=parseInt(o[3],10),r=parseInt(o[4],10),a=parseInt(o[5],10);return new Date(t,n,i,l,r,a)}function z(){if(m.cloudStorage)R.get({url:`http://www.note-map.com/graph/findGraphByUser?username=${N.username}&email=${N.email}&url=${b}`,data:{username:N.username,email:N.email,url:b}}).then(o=>{console.log("response.data.body==============>",o);var t=JSON.parse(o.data.body);if(t.data){let i=JSON.parse(t.data.content);if(m.localStorage)try{let l=JSON.parse(window.localStorage.getItem(b)),r=F(i.createTime),a=F(l.createTime);r==a||r>a?s=i:s=l}catch{s=i}else s=i}else{var n=JSON.parse(window.localStorage.getItem(b));n&&(Object.keys(n).length!==0?(s=n,T()):s={nodeList:{},relationList:[],startNodeId:"",createTime:"",pageTitle:""})}T()});else if(m.localStorage){var e=JSON.parse(window.localStorage.getItem(b));e&&(Object.keys(e).length!==0?(s=e,T()):s={nodeList:{},relationList:[],startNodeId:"",createTime:"",pageTitle:""})}else s={nodeList:{},relationList:[],startNodeId:"",createTime:"",pageTitle:""}}setTimeout(z,1e3);function O(e){e.createTime=K(),e.pageTitle=document.title,m.localStorage&&window.localStorage.setItem(b,JSON.stringify(e)),m.cloudStorage&&R.post({url:"http://www.note-map.com/graph/upsertGraphByUser",data:{id:"",username:N.username,email:N.email,content:e,url:b}})}function V(e){var o;if(window.getSelection){window.getSelection().toString();var o=window.getSelection().getRangeAt(0)}else document.selection&&document.selection.type!="Control"&&document.selection.createRange().text;o.collapsed||Z(o)}function Q(e,o,t,n,i="#000",l="red"){var r=e.getContext("2d"),a=0,f=360;function c(d,p,v,y,u){r.save(),r.translate(d,p),r.rotate(y),r.fillStyle=i,r.beginPath(),r.arc(0,0,v,0,Math.PI,!0),r.fill(),r.beginPath(),r.fillStyle=l,r.arc(0,0,v,0,Math.PI,!1),r.fill(),r.fillStyle=l,r.beginPath(),r.arc(u*-.5*v,0,v/2,0,Math.PI*2,!0),r.fill(),r.beginPath(),r.fillStyle=i,r.arc(u*.5*v,0,v/2,0,Math.PI*2,!1),r.arc(u*-.5*v,0,v/10,0,Math.PI*2,!0),r.fill(),r.beginPath(),r.fillStyle=l,r.arc(u*.5*v,0,v/10,0,Math.PI*2,!0),r.fill(),r.restore()}setInterval(function(){r.clearRect(0,0,e.width,e.height),c(o,t,n,Math.PI*(a/f)*2,!0),a=(a+5)%f},50)}function Z(e){var o=P(e),t=o.top,n=o.left,i=o.rh,l;l=M(23,23,t+i+"px",n+3+"px","absolute","page-map-canvas"),l.addEventListener("mousedown",function(){_(e)},!0),l.getContext&&Q(l,11.5,11.5,10,m.lineColor,m.nodeColor),document.body.appendChild(l)}document.addEventListener("mousedown",H,{capture:!0});var j;const ee=400;function te(){clearTimeout(j),j=setTimeout(T,ee)}window.onresize=te,document.addEventListener&&document.addEventListener("DOMMouseScroll",T,!1),window.addEventListener("scroll",T,!0);function H(){var e=document.getElementById("page-map-canvas");e&&e.remove()}function T(){for(var e in s.nodeList){var o=le(s.nodeList[[e]]);_(o,!0,s.nodeList[[e]])}for(let t of s.relationList)G(t.starId,t.endId)}function ne(e,o,t,n,i,l,r,a,f,c,d,p){return{nodeId:e,startParentNodeDomName:o,startParentNodeDomIndex:t,startContainerOffsetTransform:n,startNodeName:i,endParentNodeDomName:l,endParentNodeDomIndex:r,endContainerOffsetTransform:a,endNodeName:f,label:c,nodeType:d,nodeContent:p}}function oe(e,o,t){return{id:e+"-"+o,starId:e,endId:o,label:t}}function re(e,o){try{var t=P(document.getElementsByClassName(e+" last")),n=t.top,i=t.left,l=t.rh,r=t.rw,a=P(document.getElementsByClassName(o+" first"),"first"),f=a.top,c=a.left,d=a.rh,p=a.rw,v={p1:[n,i+r/2,"U"],p2:[n+l/2,i+r,"R"],p3:[n+l,i+r/2,"D"],p4:[n+l/2,i,"L"]},y={p1:[f-6,c+p/2,"U"],p2:[f+d/2,c+p+6,"R"],p3:[f+d+6,c+p/2,"D"],p4:[f+d/2,c-6,"L"]},u=Number.MAX_VALUE,C,L,E,A,k,I;for(let w in v){let h=v[w];for(let g in y){let S=y[g],D=Math.sqrt(Math.pow(h[0]-S[0],2)+Math.pow(h[1]-S[1],2));D<u&&(u=D,C=h[0],L=h[1],E=h[2],A=S[0],k=S[1],I=S[2])}}return{starPointTop:C,starPointLeft:L,starPointDirec:E,endPointTop:A,endPointLeft:k,endPointDirec:I,viewTag:t.viewTag|a.viewTag}}catch(w){console.log(w)}}function ie(e){try{var o,t,n,i,l=Math.abs(e.starPointLeft-e.endPointLeft)/2;return(e.starPointDirec=="U"||e.starPointDirec=="D")&&(t=e.starPointLeft,o=(e.endPointTop+e.starPointTop)/2),e.starPointDirec=="L"&&(t=e.starPointLeft-l,o=e.starPointTop),e.starPointDirec=="R"&&(t=e.starPointLeft+l,o=e.starPointTop),(e.endPointDirec=="U"||e.endPointDirec=="D")&&(i=e.endPointLeft,n=(e.starPointTop+e.endPointTop)/2),e.endPointDirec=="L"&&(i=e.endPointLeft-l,n=e.endPointTop),e.endPointDirec=="R"&&(i=e.endPointLeft+l,n=e.endPointTop),{controlP1Top:o,controlP1Left:t,controlP2Top:n,controlP2Left:i}}catch(r){console.log(r)}}function x(e,o){const t="http://www.w3.org/2000/svg",n="http://www.w3.org/1999/xlink";let i=document.createElementNS(t,e);e==="svg"&&i.setAttribute("xmlns:xlink",n);for(let l in o)l==="xlink:href"?i.setAttributeNS(n,l,o[l]):i.setAttribute(l,o[l]);return i}function ae(e){let o=x("defs"),t=x("marker");t.setAttribute("id",e),t.setAttribute("markerWidth","13"),t.setAttribute("markerHeight","13"),t.setAttribute("refX","4"),t.setAttribute("refY","6"),t.setAttribute("orient","auto"),o.appendChild(t);let n=x("path");return n.setAttribute("d","M2,2 L4,6 L2,10 L10,6 L2,2"),n.setAttribute("style",`visibility:visible;stroke-width:0px;stroke:none;fill:${m.lineColor};z-index:9999`),n.style["fill-opacity"]="0.5",n.style["stroke-opacity"]="0.5",t.appendChild(n),o}function J(e){var o=[];for(let t of s.relationList)t.id.indexOf(e)==-1?o.push(t):document.getElementById(t.id).remove();s.relationList=o,O(s)}function G(e,o){try{let S=function(){document.getElementById(e+"-"+o+"-txt").style.visibility="hidden"},D=function(){k=setTimeout(S,1e3)},q=function(){clearTimeout(k)};var t=document.getElementById(e+"-"+o);t&&t.remove();let h=re(e,o),g=ie(h);var n=0,i=0,l=0,r=0;n=Math.min(h.starPointLeft,h.endPointLeft,g.controlP1Left,g.controlP2Left),i=Math.min(h.starPointTop,h.endPointTop,g.controlP1Top,g.controlP2Top),l=Math.max(h.starPointLeft,h.endPointLeft,g.controlP1Left,g.controlP2Left),r=Math.max(h.starPointTop,h.endPointTop,g.controlP1Top,g.controlP2Top);var a=x("svg");a.setAttribute("width",`${l-n+40}`),a.setAttribute("height",`${r-i+40}`),a.setAttribute("style",`left:${n-20}px;top:${i-20}px;position: absolute;pointer-events: none;z-index:9999;visibility:hidden;`),a.id=e+"-"+o,document.body.appendChild(a);var f=ae("arrow");a.appendChild(f);var c=x("path"),d=h.starPointLeft-n+20,p=h.starPointTop-i+20,v=g.controlP1Left-n+20,y=g.controlP1Top-i+20,u=g.controlP2Left-n+20,C=g.controlP2Top-i+20,L=h.endPointLeft-n+20,E=h.endPointTop-i+20,A=`M${d},${p} C${v},${y} ${u},${C} ${L},${E}`;c.setAttribute("d",A),c.setAttribute("style",`visibility:visible;fill-opacity:0.5;stroke-opacity:0.5;fill:none;stroke:${m.lineColor};stroke-width: 1.5;pointer-events: auto;marker-end:url(#arrow);z-index:9999;`),c.addEventListener("mouseover",function(){q(),document.getElementById(e+"-"+o+"-txt").style.visibility="visible"},!0),c.addEventListener("mouseleave",function(){document.getElementById(e+"-"+o+"-txt").style.visibility="visible",D()},!0);var k,I=c.getPointAtLength(c.getTotalLength()/2),w=x("text");w.id=e+"-"+o+"-txt",w.setAttributeNS(null,"x",`${I.x}`),w.setAttributeNS(null,"y",`${I.y}`),w.setAttributeNS(null,"font-size","15"),w.setAttribute("style",`visibility:hidden;stroke:${m.lineColor};dominant-baseline:middle;text-anchor:middle;pointer-events: auto;z-index:9999;`),w.innerHTML="✖",w.addEventListener("mousedown",function(){q(),J(e+"-"+o)},!0),a.appendChild(c),a.appendChild(w)}catch(h){console.log(h)}}function P(e,o="last"){try{if(e instanceof HTMLCollection){var t=e[0].getClientRects();if(o=="last")var n=t[t.length-1];else var n=t[0]}else if(e instanceof DOMRect)var n=e;else{var t=e.getClientRects();if(o=="last")var n=t[t.length-1];else var n=t[0]}var a=document.body,r=document.documentElement,f=window.pageYOffset||r.scrollTop||a.scrollTop,i=window.pageXOffset||r.scrollLeft||a.scrollLeft,l=r.clientTop||a.clientTop||0,r=r.clientLeft||a.clientLeft||0,a=n.top+f-l,f=n.left+i-r;const c=window.innerHeight||document.documentElement.clientHeight,d=window.innerWidth||document.documentElement.clientWidth;return{top:a,left:f,rw:n.width,rh:n.height,viewTag:n.top>=0&&n.left>=0&&n.right<=d&&n.bottom<=c}}catch(c){console.log(c)}}function M(e=150,o=300,t=5,n=5,i="absolute",l=""){var r=window.devicePixelRatio||1,a=document.createElement("canvas");return a.width=o*r,a.height=e*r,a.style.width=`${o}px`,a.style.height=`${e}px`,a.style.position=i,a.style.left=n,a.style.top=t,a.style.zIndex=1e4,a.id=l,a.getContext("2d").setTransform(r,0,0,r,0,0),a}function U(e,o){const t=[e];let n=null,i=0;for(;n=t.pop();){const l=n.childNodes;for(let r=l.length-1;r>=0;r--)t.push(l[r]);if(n.nodeType===3&&n!==o)i+=n.textContent.length;else if(n.nodeType===3)break}return i}function X(e,o){const t=[e];let n=null,i=0,l=0;for(;n=t.pop();){const r=n.childNodes;for(let a=r.length-1;a>=0;a--)t.push(r[a]);if(n.nodeType===3&&(l=o-i,i+=n.textContent.length,i>=o))break}return n||(n=e),{node:n,offset:l}}function le(e){try{if(e.startNodeName=="#text")var o=X(Array.from(document.getElementsByTagName(e.startParentNodeDomName))[e.startParentNodeDomIndex],e.startContainerOffsetTransform),t=o.node,n=o.offset;else var t=document.getElementsByTagName(e.startNodeName)[e.startParentNodeDomIndex],n=e.startContainerOffsetTransform;if(e.endNodeName=="#text")var i=X(Array.from(document.getElementsByTagName(e.endParentNodeDomName))[e.endParentNodeDomIndex],e.endContainerOffsetTransform),l=i.node,r=i.offset;else var l=document.getElementsByTagName(e.endNodeName)[e.endParentNodeDomIndex],r=e.endContainerOffsetTransform;let a=new Range;return a.setStart(t,n),a.setEnd(l,r),a}catch(a){console.log(a)}}function de(e,o){try{let r=function(){l=setTimeout(function(){$(t)},1e3)},a=function(){clearTimeout(l)};for(let f of Array.from(document.getElementsByClassName(o.nodeId)))f.remove(),$(o.nodeId);var t=o.nodeId,n=[],i=Array.from(e.getClientRects());i.forEach((f,c)=>{var d=P(f);if(c===0)if(i.length===1)var p=x("svg",{width:`${d.rw}px`,height:`${d.rh}px`,style:`width:${d.rw}px;height:${d.rh}px;left:${d.left}px;top:${d.top}px;background-color:${m.nodeColor};position: absolute;z-index:9999;opacity:0.5;`,class:t+" first last"});else var p=x("svg",{width:`${d.rw}px`,height:`${d.rh}px`,style:`width:${d.rw}px;height:${d.rh}px;left:${d.left}px;top:${d.top}px;background-color:${m.nodeColor};position: absolute;z-index:9999;opacity:0.5;`,class:t+" first"});else if(c===i.length-1)var p=x("svg",{width:`${d.rw}px`,height:`${d.rh}px`,style:`width:${d.rw}px;height:${d.rh}px;left:${d.left}px;top:${d.top}px;background-color:${m.nodeColor};position: absolute;z-index:9999;opacity:0.5;`,class:t+" last"});else var p=x("svg",{width:`${d.rw}px`,height:`${d.rh}px`,style:`width:${d.rw}px;height:${d.rh}px;left:${d.left}px;top:${d.top}px;background-color:${m.nodeColor};position: absolute;z-index:9999;opacity:0.5;`,class:t+" mid"});document.body.appendChild(p),n.push(p)}),n.forEach(f=>{f.addEventListener("mouseup",function(){if(s.startNodeId!=""){let c=!1;for(let d in s.relationList)if(d.id==s.startNodeId+"-"+t){c=!0;break}if(!c){G(s.startNodeId,t);let d=oe(s.startNodeId,t,"");s.relationList=s.relationList.filter(p=>p.id!==d.id),s.relationList.push(d),O(s)}}}),f.addEventListener("mouseover",function(){var c=P(n[n.length-1]),d=c.top,p=c.left,v=c.rh;a(),$(t);var y=M(16,16,d+v+1+"px",p+1+"px","absolute",t+"-canvas1");if(y.getContext){var u=y.getContext("2d");u.fillStyle=m.nodeColor,u.beginPath(),u.arc(8,8,7,0,Math.PI*2,!0),u.closePath(),u.fill(),u.fillStyle=m.lineColor,u.font="13px FontAwesome",u.fillText("✖",2,13)}y.addEventListener("mouseover",a,!0),y.addEventListener("mouseleave",r,{capture:!0}),y.addEventListener("mousedown",function(){se(t)},!0),document.body.appendChild(y);var C=M(16,16,d+v+1+"px",p+19+"px","absolute",t+"-canvas2");if(C.getContext){var u=C.getContext("2d");u.fillStyle=m.nodeColor,u.beginPath(),u.arc(8,8,7,0,Math.PI*2,!0),u.closePath(),u.fill(),u.fillStyle=m.lineColor,u.font="18px FontAwesome",u.fillText("➘",1,14)}C.addEventListener("mouseover",a,!0),C.addEventListener("mouseleave",r,{capture:!0}),C.addEventListener("mousedown",function(L){L.stopPropagation(),s.startNodeId=t,$(t)},!0),document.body.appendChild(C)},{capture:!0}),f.addEventListener("mouseleave",r,{capture:!0})});var l}catch(r){console.log(r)}}function _(e,o=!1,t={}){try{if(!o){H();var n=window.getSelection().toString();if(n||(n=""),e.startContainer.nodeName=="#text")var i=e.startContainer.parentElement.tagName,l=Array.from(document.getElementsByTagName(i)).indexOf(e.startContainer.parentElement),r=U(e.startContainer.parentElement,e.startContainer)+e.startOffset;else var i=e.startContainer.tagName,l=Array.from(document.getElementsByTagName(i)).indexOf(e.startContainer),r=e.startOffset;if(e.endContainer.nodeName=="#text")var a=e.endContainer.parentElement.tagName,f=Array.from(document.getElementsByTagName(a)).indexOf(e.endContainer.parentElement),c=U(e.endContainer.parentElement,e.endContainer)+e.endOffset;else var a=e.endContainer.tagName,f=Array.from(document.getElementsByTagName(a)).indexOf(e.endContainer),c=e.endOffset;if(e.startContainer.nodeName.indexOf("text")>=0&e.endContainer.nodeName.indexOf("text")>=0)var d="text";else var d="other";var p=i+"-"+l.toString()+"-"+r.toString()+"-"+a+"-"+f.toString()+"-"+c.toString(),t=ne(p,i,l,r,e.startContainer.nodeName,a,f,c,e.endContainer.nodeName,"",d,n);s.nodeList[t.nodeId]=t,O(s)}de(e,t)}catch(v){console.log(v)}}function $(e){var o=document.getElementById(e+"-canvas1");o&&o.remove();var o=document.getElementById(e+"-canvas2");o&&o.remove()}function se(e){J(e);for(let o of Array.from(document.getElementsByClassName(e)))o.remove(),$(e);delete s.nodeList[e],O(s)}})();
