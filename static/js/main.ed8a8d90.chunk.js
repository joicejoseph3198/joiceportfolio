/*! For license information please see main.ed8a8d90.chunk.js.LICENSE.txt */
(this["webpackJsonpweb-1"]=this["webpackJsonpweb-1"]||[]).push([[0],{18:function(e,t,i){!function(e){"use strict";var t="";function i(){return String.fromCharCode.apply(null,arguments)}function n(e){return m.getComputedStyle(e)}function s(e,t){var i;return y(e)?e:"string"==(i=typeof e)&&!t&&e?N.call(f.querySelectorAll(e),0):e&&"object"==i&&"length"in e?N.call(e,0):e?[e]:[]}function r(e){return"absolute"===e.position||!0===e.absolute}function a(e,t){for(var i,n=t.length;-1<--n;)if(i=t[n],e.substr(0,i.length)===i)return i.length}function c(e,t){void 0===e&&(e="");var i=~e.indexOf("++"),n=1;return i&&(e=e.split("++").join("")),function(){return"<"+t+" style='position:relative;display:inline-block;'"+(e?" class='"+e+(i?n++:"")+"'>":">")}}function o(e,t,i){var n=e.nodeType;if(1===n||9===n||11===n)for(e=e.firstChild;e;e=e.nextSibling)o(e,t,i);else 3!==n&&4!==n||(e.nodeValue=e.nodeValue.split(t).join(i))}function l(e,t){for(var i=t.length;-1<--i;)e.push(t[i])}function d(e,t,i){for(var n;e&&e!==t;){if(n=e._next||e.nextSibling)return n.textContent.charAt(0)===i;e=e.parentNode||e._parent}}function h(e){var t,i,n=s(e.childNodes),r=n.length;for(t=0;t<r;t++)(i=n[t])._isSplit?h(i):(t&&3===i.previousSibling.nodeType?i.previousSibling.nodeValue+=3===i.nodeType?i.nodeValue:i.firstChild.nodeValue:3!==i.nodeType&&e.insertBefore(i.firstChild,i),e.removeChild(i))}function j(e,t){return parseFloat(t[e])||0}function u(e,t,i,s,a,c,u){var b,p,m,g,x,O,v,y,N,S,w,C,_=n(e),k=j("paddingLeft",_),T=-999,L=j("borderBottomWidth",_)+j("borderTopWidth",_),A=j("borderLeftWidth",_)+j("borderRightWidth",_),I=j("paddingTop",_)+j("paddingBottom",_),E=j("paddingLeft",_)+j("paddingRight",_),P=.2*j("fontSize",_),M=_.textAlign,D=[],V=[],R=[],W=t.wordDelimiter||" ",B=t.tag?t.tag:t.span?"span":"div",H=t.type||t.split||"chars,words,lines",J=a&&~H.indexOf("lines")?[]:null,F=~H.indexOf("words"),q=~H.indexOf("chars"),z=r(t),G=t.linesClass,Y=~(G||"").indexOf("++"),K=[];for(Y&&(G=G.split("++").join("")),m=(p=e.getElementsByTagName("*")).length,x=[],b=0;b<m;b++)x[b]=p[b];if(J||z)for(b=0;b<m;b++)((O=(g=x[b]).parentNode===e)||z||q&&!F)&&(C=g.offsetTop,J&&O&&Math.abs(C-T)>P&&("BR"!==g.nodeName||0===b)&&(v=[],J.push(v),T=C),z&&(g._x=g.offsetLeft,g._y=C,g._w=g.offsetWidth,g._h=g.offsetHeight),J&&((g._isSplit&&O||!q&&O||F&&O||!F&&g.parentNode.parentNode===e&&!g.parentNode._isSplit)&&(v.push(g),g._x-=k,d(g,e,W)&&(g._wordEnd=!0)),"BR"===g.nodeName&&(g.nextSibling&&"BR"===g.nextSibling.nodeName||0===b)&&J.push([])));for(b=0;b<m;b++)O=(g=x[b]).parentNode===e,"BR"!==g.nodeName?(z&&(N=g.style,F||O||(g._x+=g.parentNode._x,g._y+=g.parentNode._y),N.left=g._x+"px",N.top=g._y+"px",N.position="absolute",N.display="block",N.width=g._w+1+"px",N.height=g._h+"px"),!F&&q?g._isSplit?(g._next=g.nextSibling,g.parentNode.appendChild(g)):g.parentNode._isSplit?(g._parent=g.parentNode,!g.previousSibling&&g.firstChild&&(g.firstChild._isFirst=!0),g.nextSibling&&" "===g.nextSibling.textContent&&!g.nextSibling.nextSibling&&K.push(g.nextSibling),g._next=g.nextSibling&&g.nextSibling._isFirst?null:g.nextSibling,g.parentNode.removeChild(g),x.splice(b--,1),m--):O||(C=!g.nextSibling&&d(g.parentNode,e,W),g.parentNode._parent&&g.parentNode._parent.appendChild(g),C&&g.parentNode.appendChild(f.createTextNode(" ")),"span"===B&&(g.style.display="inline"),D.push(g)):g.parentNode._isSplit&&!g._isSplit&&""!==g.innerHTML?V.push(g):q&&!g._isSplit&&("span"===B&&(g.style.display="inline"),D.push(g))):J||z?(g.parentNode&&g.parentNode.removeChild(g),x.splice(b--,1),m--):F||e.appendChild(g);for(b=K.length;-1<--b;)K[b].parentNode.removeChild(K[b]);if(J){for(z&&(S=f.createElement(B),e.appendChild(S),w=S.offsetWidth+"px",C=S.offsetParent===e?0:e.offsetLeft,e.removeChild(S)),N=e.style.cssText,e.style.cssText="display:none;";e.firstChild;)e.removeChild(e.firstChild);for(y=" "===W&&(!z||!F&&!q),b=0;b<J.length;b++){for(v=J[b],(S=f.createElement(B)).style.cssText="display:block;text-align:"+M+";position:"+(z?"absolute;":"relative;"),G&&(S.className=G+(Y?b+1:"")),R.push(S),m=v.length,p=0;p<m;p++)"BR"!==v[p].nodeName&&(g=v[p],S.appendChild(g),y&&g._wordEnd&&S.appendChild(f.createTextNode(" ")),z&&(0===p&&(S.style.top=g._y+"px",S.style.left=k+C+"px"),g.style.top="0px",C&&(g.style.left=g._x-C+"px")));0===m?S.innerHTML="&nbsp;":F||q||(h(S),o(S,String.fromCharCode(160)," ")),z&&(S.style.width=w,S.style.height=g._h+"px"),e.appendChild(S)}e.style.cssText=N}z&&(u>e.clientHeight&&(e.style.height=u-I+"px",e.clientHeight<u&&(e.style.height=u+L+"px")),c>e.clientWidth&&(e.style.width=c-E+"px",e.clientWidth<c&&(e.style.width=c+A+"px"))),l(i,D),F&&l(s,V),l(a,R)}function b(e,i,n,s){var c,l,d,h,j,u,b,p,m=i.tag?i.tag:i.span?"span":"div",g=~(i.type||i.split||"chars,words,lines").indexOf("chars"),v=r(i),y=i.wordDelimiter||" ",N=" "!==y?"":v?"&#173; ":" ",S="</"+m+">",w=1,C=i.specialChars?"function"==typeof i.specialChars?i.specialChars:a:null,_=f.createElement("div"),k=e.parentNode;for(k.insertBefore(_,e),_.textContent=e.nodeValue,k.removeChild(e),b=-1!==(c=function e(t){var i=t.nodeType,n="";if(1===i||9===i||11===i){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=e(t)}else if(3===i||4===i)return t.nodeValue;return n}(e=_)).indexOf("<"),!1!==i.reduceWhiteSpace&&(c=c.replace(O," ").replace(x,"")),b&&(c=c.split("<").join("{{LT}}")),j=c.length,l=(" "===c.charAt(0)?N:"")+n(),d=0;d<j;d++)if(u=c.charAt(d),C&&(p=C(c.substr(d),i.specialChars)))u=c.substr(d,p||1),l+=g&&" "!==u?s()+u+"</"+m+">":u,d+=p-1;else if(u===y&&c.charAt(d-1)!==y&&d){for(l+=w?S:"",w=0;c.charAt(d+1)===y;)l+=N,d++;d===j-1?l+=N:")"!==c.charAt(d+1)&&(l+=N+n(),w=1)}else"{"===u&&"{{LT}}"===c.substr(d,6)?(l+=g?s()+"{{LT}}</"+m+">":"{{LT}}",d+=5):55296<=u.charCodeAt(0)&&u.charCodeAt(0)<=56319||65024<=c.charCodeAt(d+1)&&c.charCodeAt(d+1)<=65039?(h=((c.substr(d,12).split(t)||[])[1]||"").length||2,l+=g&&" "!==u?s()+c.substr(d,h)+"</"+m+">":c.substr(d,h),d+=h-1):l+=g&&" "!==u?s()+u+"</"+m+">":u;e.outerHTML=l+(w?S:""),b&&o(k,"{{LT}}","<")}function p(e,t,i,a){var c,o,l=s(e.childNodes),d=l.length,h=r(t);if(3!==e.nodeType||1<d){for(t.absolute=!1,c=0;c<d;c++)3===(o=l[c]).nodeType&&!/\S+/.test(o.nodeValue)||(h&&3!==o.nodeType&&"inline"===n(o).display&&(o.style.display="inline-block",o.style.position="relative"),o._isSplit=!0,p(o,t,i,a));return t.absolute=h,void(e._isSplit=!0)}b(e,t,i,a)}var f,m,g,x=/(?:\r|\n|\t\t)/g,O=/(?:\s\s+)/g,v=(i(103,114,101,101,110,115,111,99,107,46,99,111,109),!0),y=Array.isArray,N=[].slice,S=function(){function e(e,t){g||(f=document,m=window,g=1),this.elements=s(e),this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=t||{},v&&this.split(t)}var t=e.prototype;return t.split=function(e){this.isSplit&&this.revert(),this.vars=e=e||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var t,i,n,s=this.elements.length,r=e.tag?e.tag:e.span?"span":"div",a=c(e.wordsClass,r),o=c(e.charsClass,r);-1<--s;)n=this.elements[s],this._originals[s]=n.innerHTML,t=n.clientHeight,i=n.clientWidth,p(n,e,a,o),u(n,e,this.chars,this.words,this.lines,i,t);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},t.revert=function(){var e=this._originals;if(!e)throw"revert() call wasn't scoped properly.";return this.elements.forEach((function(t,i){return t.innerHTML=e[i]})),this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},e.create=function(t,i){return new e(t,i)},e}();S.version="3.0.0",e.SplitText=S,e.default=S,Object.defineProperty(e,"__esModule",{value:!0})}(t)},24:function(e,t,i){},25:function(e,t,i){},27:function(e,t,i){},28:function(e,t,i){},29:function(e,t,i){},30:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},37:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){"use strict";i.r(t);var n=i(2),s=i.n(n),r=i(17),a=i.n(r),c=i(3),o=(i(24),i(25),i(5)),l=i(13),d=i(1);function h(){return Object(d.jsxs)("div",{id:"home",className:"navbar","data-scroll-section":!0,children:[Object(d.jsx)("div",{children:Object(d.jsx)("ul",{className:"item",children:Object(d.jsx)("div",{className:"menu",id:"menu",children:"Work in Progress _"})})}),Object(d.jsxs)("div",{id:"icons",children:[Object(d.jsx)("a",{href:"https://github.com/joicejoseph3198",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)(o.b,{id:"git"})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/joice-v-joseph-85311a1a1/",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)(l.a,{id:"linkd"})}),Object(d.jsx)("a",{href:"mailto:joice.joseph3198@gmail.com",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)(l.b,{id:"mail"})})]})]})}i(27);function j(){return Object(n.useEffect)((function(){}),[]),Object(d.jsx)("section",{className:"header-container","data-scroll-section":!0,children:Object(d.jsxs)("div",{className:"header-text",children:[Object(d.jsxs)("div",{className:"static-text",id:"static-text",children:["Hi.",Object(d.jsx)("br",{}),Object(d.jsxs)("span",{children:["I am Joice.",Object(d.jsx)("br",{})]})]}),Object(d.jsx)("div",{className:"dynamic-text",children:Object(d.jsx)("span",{children:"Programmer."})}),Object(d.jsxs)("div",{className:"quote",children:[Object(d.jsx)(o.c,{id:"icons"})," Small steps in the right direction lead to better results. ",Object(d.jsx)(o.d,{id:"icons"}),Object(d.jsx)("br",{}),"- Gradient Descent"]})]})})}i(28);var u=i(4),b=i(18),p=i.n(b),f=i.p+"static/media/Final Image 1.e4713098.jpg",m=i(7),g=i.n(m);var x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.3,i=Object(n.useState)(!1),s=Object(c.a)(i,2),r=s[0],a=s[1];return Object(n.useEffect)((function(){var i=new IntersectionObserver((function(e){var t,i=Object(c.a)(e,1)[0];a(null!==(t=null===i||void 0===i?void 0:i.isIntersecting)&&void 0!==t&&t)}),{rootMargin:"0px",threshold:t}),n=e.current;return n&&i.observe(n),function(){n&&i.unobserve(n)}}),[e,t]),r};function O(){var e=Object(n.useRef)(),t=Object(n.useState)(!1),i=Object(c.a)(t,2),s=i[0],r=i[1],a=x(e);Object(n.useEffect)((function(){a&&r(a)}),[a]),Object(n.useEffect)((function(){if(s){var e=new p.a("#about-info",{type:"lines",linesClass:"lineChildren"});u.a.to(e.lines,{duration:1,y:-20,opacity:1,stagger:.1,ease:"power4.out"})}}),[s]);var o=document.getElementById("about-info");return Object(d.jsxs)("section",{className:"about","data-scroll-section":!0,children:[Object(d.jsx)("div",{className:"about-content",id:"about",children:Object(d.jsxs)("div",{id:"about-visual",children:[Object(d.jsx)("section",{className:"about-heading",children:"A little bit about me"}),Object(d.jsxs)("section",{className:"about-image",children:[Object(d.jsx)("img",{src:f,alt:"image1","data-scroll":!0}),Object(d.jsx)("h2",{id:"button1",onClick:function(){u.a.to(o,{xPercent:-65})},children:" SLIDE  "})]})]})}),Object(d.jsxs)("div",{ref:e,className:g()("about-info",{"is-reveal":s}),id:"about-info",children:["Hey! I am Joice. I'm a fourth year university student pursuing Computer Science, with passion for Machine Learning, and Web Development. I aspire towards a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences. Always on the lookout for opportunites to learn, improve and further build expertise in the field.",Object(d.jsx)("h2",{id:"button2",onClick:function(){u.a.to(o,{xPercent:0})},children:"Close"})]})]})}var v=i(15),y=(i(29),i(6)),N=[{title:"Object Detection",description:"Attempt at the 'Global Wheat Detection' Kaggle competition to detect wheat heads from outdoor images of wheat plants including wheat datasets from around the globe. Made use of the YOLOv5 to carry out object detection.",category:"Object Detection, Yolov5, Image Analysis",link:""},{title:"Image Classification",description:"Using transfer learning to fine tune a CNN-VGG16 for classification of Oxford's Flowers-17 dataset using ImageNet weights",category:"Classification, Transfer Learning",link:""},{title:"Semantic Segmentation",description:"Attempt at 'iMaterialist(Fashion)' Kaggle competition to develop algorithm that will help with an important step towards automatic product detection \u2013 to accurately assign segmentations and attribute labels for fashion images. ",category:"Computer Vision, Semantic Segmentation, Instance Segmentation, Mask R-CNN",link:""},{title:"Visualization",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",category:"EDA, Visualization",link:""}];function S(e){var t=e.category,i=e.description,s=e.title,r=e.link,a=e.updateActiveProject,c=e.index,l=Object(n.useRef)(null),h=x(l,.5);return Object(n.useEffect)((function(){h&&a(c)}),[h,c,a]),Object(d.jsx)("div",{className:g()("gallery-item-wrapper",{"is-reveal":h}),ref:l,children:Object(d.jsx)("div",{className:"gallery-item",children:Object(d.jsxs)("div",{className:"gallery-item-info",children:[Object(d.jsxs)("h1",{className:"gallery-item-title",children:[s," "]}),Object(d.jsx)("h6",{className:"gallery-item-description",children:i}),Object(d.jsxs)("p",{className:"gallery-item-category",children:[t,Object(d.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)(o.b,{id:"git"})})]})]})})})}function w(e){e.index,e.columnOffset;var t=Object(n.useState)(1),i=Object(c.a)(t,2),s=i[0],r=i[1],a=Object(n.useRef)(null),o=function(e){r(e+1)};return Object(n.useEffect)((function(){setTimeout((function(){console.log(a.current.offsetWidth),console.log(a.current.clientWidth),console.log({current:a.current});var e=u.b.utils.toArray(".gallery-item-wrapper");u.b.to(e,{xPercent:-100*(e.length-1),ease:"none",scrollTrigger:{start:"top top",trigger:a.current,scroller:"#main-container",pin:!0,scrub:.5,span:1/(e.length-1),end:function(){return"+=".concat(a.current.offsetWidth)}}}),y.a.refresh()}))}),[]),Object(d.jsxs)("section",{"data-scroll-section":!0,className:"section-wrapper gallery-wrap",children:[Object(d.jsx)("div",{id:"projects",className:"gallery-heading",children:"Projects I have worked on"}),Object(d.jsxs)("div",{className:"gallery",ref:a,children:[Object(d.jsxs)("div",{className:"gallery-counter",children:[Object(d.jsx)("span",{children:s}),Object(d.jsx)("span",{className:"divider"}),Object(d.jsx)("span",{children:N.length})]}),N.map((function(e,t){return Object(d.jsx)(S,Object(v.a)(Object(v.a)({index:t},e),{},{updateActiveProject:o}))}))]})]})}i(30),i(9);i(33);function C(){return Object(d.jsxs)("section",{className:"skill","data-scroll-section":!0,children:[Object(d.jsx)("div",{id:"heading",children:" Skills"}),Object(d.jsxs)("div",{id:"sections",children:[Object(d.jsxs)("div",{id:"prog",children:["Programming",Object(d.jsxs)("div",{id:"list",children:[Object(d.jsx)("li",{}),"C/C++",Object(d.jsx)("li",{}),"Python",Object(d.jsx)("li",{}),"SQL"]})]}),Object(d.jsxs)("div",{id:"webd",children:["Web Development",Object(d.jsxs)("div",{id:"list",children:[Object(d.jsx)("li",{}),"HTML",Object(d.jsx)("li",{}),"CSS",Object(d.jsx)("li",{}),"JavaScript",Object(d.jsx)("li",{}),"React"]})]}),Object(d.jsxs)("div",{id:"ml",children:["Machine Learning",Object(d.jsxs)("div",{id:"list",children:[Object(d.jsx)("li",{}),"Data Mining",Object(d.jsx)("li",{}),"Data Analysis",Object(d.jsx)("li",{}),"Data Visualization",Object(d.jsx)("li",{}),"Data Modeling",Object(d.jsx)("li",{}),"Deep Learning",Object(d.jsx)("li",{}),"Computer Vision"]})]})]})]})}i(34);function _(){return Object(d.jsxs)("div",{className:"contact-page","data-scroll-section":!0,children:[Object(d.jsxs)("div",{id:"contact-content",children:[Object(d.jsx)("div",{id:"header",children:"That's enough about me. Let's talk about you."}),Object(d.jsxs)("p",{children:["Do you have any suggestions or feedback for my website? Would you have any work to offer me? Feel free to leave a message. ",Object(d.jsx)("br",{}),"I would love to hear from you."]}),Object(d.jsx)("br",{})]}),Object(d.jsx)("div",{className:"form",id:"contact-form",children:Object(d.jsxs)("div",{id:"form-content",children:[Object(d.jsx)("div",{id:"close-btn",onClick:function(){u.a.to(["#contact-content","#contact-form"],{xPercent:0})},children:"close"}),Object(d.jsxs)("form",{action:"https://formspree.io/f/xknkvqqj",method:"post",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{for:"name",children:" Name "}),Object(d.jsx)("input",{type:"text",id:"name",name:"Name"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{for:"name",children:" Email "}),Object(d.jsx)("input",{type:"text",id:"email",name:"Email"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{for:"name",children:" Message "}),Object(d.jsx)("textarea",{id:"message",name:"Message"})]}),Object(d.jsx)("button",{type:"submit",children:"Submit"})]}),Object(d.jsx)("div",{id:"slide-btn",onClick:function(){u.a.to(["#contact-content","#contact-form"],{xPercent:-73})},children:"slide"})]})})]})}var k=i(19);i(36);u.a.registerPlugin(y.a);i(37),i(16);var T=i(14),L=[{icon:Object(d.jsx)(o.a,{}),title:"Computer Vision Intern at BraynixAI",description:"Part of medical image analysis team.",description1:"-Reading, understanding and extracting insights from various AI research papers.",description2:"-Prototyping and experimenting with various ML and deep learning techniques for performance.",description3:"-Leveraging open source code and libraries to experiment and build novel solutions for healthcare app.",date:"Sep 2021 - Present",location:"Remote"},{title:"Machine Learning Intern at The Sparks Foundation",icon:Object(d.jsx)(o.a,{}),description:"-Analyzed data from various internal and external sources.",description1:"-Performed exploratory data analysis and built basic Machine Learning models",date:"Jul 2020 - Aug 2020",location:"Remote"},{title:"Northern India Engineering College, GGSIPU",icon:Object(d.jsx)(o.f,{}),description:"College-Pursuing BTech in CSE",date:"2018-2022",location:"New Delhi"},{title:"St.Paul's School",icon:Object(d.jsx)(o.e,{}),description:"High School - X, XII",date:"2015, 2017",location:"New Delhi"}];function A(){return Object(d.jsxs)("section",{className:"timeline","data-scroll-section":!0,children:[Object(d.jsx)("h1",{children:"Timeline"}),Object(d.jsx)(T.VerticalTimeline,{lineColor:"black",children:L.map((function(e){return Object(d.jsxs)(T.VerticalTimelineElement,{date:e.date,dateClassName:"date",contentArrowStyle:{borderRight:"0.8vw solid  black"},contentStyle:{background:"white",color:"black"},iconStyle:{background:"white",color:"black"},icon:e.icon,children:[Object(d.jsx)("h3",{className:"vertical-timeline-element-title",children:e.title}),Object(d.jsx)("h5",{className:"vertical-timeline-element-subtitle",children:e.location}),Object(d.jsxs)("p",{id:"description",children:[e.description,Object(d.jsx)("br",{}),e.description1,Object(d.jsx)("br",{}),e.description2,Object(d.jsx)("br",{}),e.description3]})]})}))})]})}i(41);var I=i.p+"static/media/blog2.6ba3bd15.jpg";function E(){return Object(d.jsxs)("section",{className:"blog-container","data-scroll-section":!0,children:[Object(d.jsx)("h1",{className:"blog-title",id:"blog",children:"sharing concepts, ideas, and code."}),Object(d.jsxs)("div",{className:"blog-list",children:[Object(d.jsx)("div",{}),Object(d.jsxs)("div",{className:"blog-item",children:[Object(d.jsxs)("div",{className:"text-info",children:[Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)("h1",{children:"Monitor Social Distancing using Python, YOLOv5, OpenCV."}),Object(d.jsx)("p",{children:"Since the Pandemic, there is an increased need for maintaining appropriate social distance in public spaces. Having some knowledge in computer vision and given the context, I thought it could be interesting to make a rather meaningful object detection project by creating a model that can monitor social distancing by analyzing surveillance footage."})]}),Object(d.jsx)("h5",{children:"Published on January 2, 2022"}),Object(d.jsx)("h5",{children:"7 min read"}),Object(d.jsx)("a",{href:"https://medium.com/@joicejoseph",target:"_blank",rel:"noopener noreferrer",children:"Read More"})]}),Object(d.jsx)("div",{className:"blog-img",style:{backgroundImage:"url(".concat(I,")")}})]}),Object(d.jsx)("div",{})]})]})}var P=i(8);var M=function(){var e,t=Object(n.useState)(!0),i=Object(c.a)(t,2),s=i[0],r=i[1],a=Object(n.useState)(3),o=Object(c.a)(a,2),l=o[0],u=o[1],b=Object(n.useRef)(null);return e=!s,Object(n.useEffect)((function(){if(e){var t=document.querySelector("#main-container"),i=new k.a({el:t,smooth:!0,smartphone:{smooth:!0},tablet:{smooth:!0},multiplier:1,class:"is-reveal"});i.on("scroll",(function(){y.a.update()})),y.a.scrollerProxy(t,{scrollTop:function(e){return i?arguments.length?i.scrollTo(e,0,0):i.scroll.instance.scroll.y:null},scrollLeft:function(e){return i?arguments.length?i.scrollTo(e,0,0):i.scroll.instance.scroll.x:null}});var n=function(){i&&i.update()};return y.a.addEventListener("refresh",n),y.a.refresh(),function(){i&&(y.a.removeEventListener("refresh",n),i.destroy(),i=null)}}}),[e]),Object(n.useEffect)((function(){b.current=window.setInterval((function(){u((function(e){return e-1}))}),1e3)}),[]),Object(n.useEffect)((function(){0===l&&(window.clearInterval(b.current),r(!1))}),[l]),Object(d.jsx)(P.a,{children:s?Object(d.jsx)("div",{className:"loader-wrapper absolute",children:Object(d.jsx)("h6",{children:" Joice V Joseph "})}):Object(d.jsxs)("div",{className:"main-container",id:"main-container","data-scroll-container":!0,children:[Object(d.jsx)(h,{}),Object(d.jsx)(j,{}),Object(d.jsx)(O,{}),Object(d.jsx)(C,{}),Object(d.jsx)(A,{}),Object(d.jsx)(w,{}),Object(d.jsx)(E,{}),Object(d.jsx)(_,{})]})})};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(M,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.ed8a8d90.chunk.js.map