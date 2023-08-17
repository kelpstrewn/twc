"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[499],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},h="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=o(n),u=r,c=h["".concat(d,".").concat(u)]||h[u]||g[u]||l;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5347:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={title:"Building bee boxes",author:"Stephen Curham",enableComments:!0},i=void 0,s={permalink:"/blog/2023/06/12/p02/building_hiveware",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/p02/2023-06-12-building_hiveware.md",source:"@site/blog/p02/2023-06-12-building_hiveware.md",title:"Building bee boxes",description:"Introduction",date:"2023-06-12T00:00:00.000Z",formattedDate:"June 12, 2023",tags:[],readingTime:4.995,hasTruncateMarker:!0,authors:[{name:"Stephen Curham"}],frontMatter:{title:"Building bee boxes",author:"Stephen Curham",enableComments:!0},prevItem:{title:"Mapping land",permalink:"/blog/2023/06/16/p03/mapping"},nextItem:{title:"Omphalos",permalink:"/blog/2023/06/05/p01/ -omphalos"}},d={authorsImageUrls:[void 0]},o=[{value:"Introduction",id:"introduction",level:2},{value:"Use wood",id:"use-wood",level:2},{value:"Tools and process",id:"tools-and-process",level:2},{value:"Pre cut",id:"pre-cut",level:2},{value:"Frame and box geometry",id:"frame-and-box-geometry",level:2},{value:"Tables of standard dimensions",id:"tables-of-standard-dimensions",level:2},{value:"Making",id:"making",level:2}],m={toc:o},h="wrapper";function g(e){let{components:t,...l}=e;return(0,r.kt)(h,(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This post is about building hiveware for beekeeping. It is historical, as due to time constraints I am not keeping bees at present. "),(0,r.kt)("h2",{id:"use-wood"},"Use wood"),(0,r.kt)("p",null,"This is because of a number of overlapping concerns.\nI was using all wood components in my hives, no plastic. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the long term I am interested in doing my beekeeping to the Demeter organic standard. "),(0,r.kt)("li",{parentName:"ul"},"I like working with wood. "),(0,r.kt)("li",{parentName:"ul"},"Having burnt hives, wood is less polluting and intrusive than burning plastic. Hives are required to burnt, by law, in New Zealand, if AFB is discovered.")),(0,r.kt)("p",null,"As part of that process I had to reacquaint myself with the sizes of the various components that make up a hive. I found that there was not much information available online for standard New Zealand langstroth hives and that a previous source at the Wellington Bee Club website is no longer available online. "),(0,r.kt)("p",null,"For this reason I decided to document the sizes and the process I took and put it online."),(0,r.kt)("h2",{id:"tools-and-process"},"Tools and process"),(0,r.kt)("p",null,"It is important to realise at the outset that making your own hardware from scratch is quite labour-intensive and can't really be justified in terms of an acceptable hourly rate for actually just doing your day job as against the money saved by making your own hiveware. "),(0,r.kt)("p",null,"That said it does provide the opportunity to reuse and recycle materials in a sustainable manner. I found that the work is quite satisfying. "),(0,r.kt)("p",null,"A number of tools are required to do the work:-"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rulers"),(0,r.kt)("li",{parentName:"ul"},"Setsquare"),(0,r.kt)("li",{parentName:"ul"},"Vise or clamps"),(0,r.kt)("li",{parentName:"ul"},"A table saw"),(0,r.kt)("li",{parentName:"ul"},"A handsaw"),(0,r.kt)("li",{parentName:"ul"},"A sharp chisel")),(0,r.kt)("p",null,"The table saw is perhaps the most important. There is quite a lot of ripping and cross cutting to size of timber in the process. "),(0,r.kt)("p",null,"This also means that a location for your saw where neighbours are not going to be sensitive to noise is important. If you don't have these things then I suggest that you buy pre cut components.  "),(0,r.kt)("h2",{id:"pre-cut"},"Pre cut"),(0,r.kt)("p",null,"Here are sources for standard NZ langstroth hive components. "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://beeswax.co.nz/alliance-beekeepers-woodware/"},"Alliance")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://www.tunnicliffes.co.nz/bee-woodware-.html"},"Tunicliffes")),(0,r.kt)("p",null,"If you do decide to go ahead and make your own the next step is knowing what you are going to make. Here is the rough drawing I used. This was derived from the measurements given in Practical Beekeeping in New Zealand. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hiveware",src:n(8929).Z,width:"800",height:"587"})),(0,r.kt)("h2",{id:"frame-and-box-geometry"},"Frame and box geometry"),(0,r.kt)("p",null,"I made amendments to the frame geometry to make the most efficient use of the timber I had on hand. This was American Ash timber slats which were recycled from rejected components of a tram building project that I am involved with. Very sadly, Ash is available because of ",(0,r.kt)("a",{parentName:"p",href:"https://www.woodworkingnetwork.com/wood-blogs/industrial-woodworker/production-industry-guest-blogs/As-Chestnut-Goes-Ash-Follows-a-Hundred-Years-Later-227585851.html"},"Emerald Ash Borer"),"."),(0,r.kt)("p",null,"Arguably, it is the outside dimensions of the frames that count and if you use thicker sections than would be provided by commercial hiveware suppliers it is unlikely to make any difference to the bees, as long as a 6-8mm beespace is maintained. "),(0,r.kt)("p",null,"Here are some drawings with dimensions.\n",(0,r.kt)("img",{alt:"hiveware",src:n(9786).Z,width:"918",height:"547"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hiveware",src:n(8685).Z,width:"964",height:"677"})),(0,r.kt)("h2",{id:"tables-of-standard-dimensions"},"Tables of standard dimensions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Hive box plan dimensions"),(0,r.kt)("th",{parentName:"tr",align:null},"Dimension in mm"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Timber thickness"),(0,r.kt)("td",{parentName:"tr",align:null},"20 (optional, the internal dimension is the important one)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Outer dimensions"),(0,r.kt)("td",{parentName:"tr",align:null},"505 x 405 (make larger if thicker timber is used)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Inner dimensions"),(0,r.kt)("td",{parentName:"tr",align:null},"465 x 365")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Hive box depths"),(0,r.kt)("th",{parentName:"tr",align:null},"Dimension in mm"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Full depth"),(0,r.kt)("td",{parentName:"tr",align:null},"240")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Three-quarter depth"),(0,r.kt)("td",{parentName:"tr",align:null},"185")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Half depth"),(0,r.kt)("td",{parentName:"tr",align:null},"133")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Frame holder (long side of box)"),(0,r.kt)("th",{parentName:"tr",align:null},"Dimension in mm"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rebate depth"),(0,r.kt)("td",{parentName:"tr",align:null},"13")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ledge"),(0,r.kt)("td",{parentName:"tr",align:null},"10")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Frame geometry"),(0,r.kt)("th",{parentName:"tr",align:null},"box"),(0,r.kt)("th",{parentName:"tr",align:null},"box"),(0,r.kt)("th",{parentName:"tr",align:null},"box"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Item"),(0,r.kt)("td",{parentName:"tr",align:null},"full depth"),(0,r.kt)("td",{parentName:"tr",align:null},"three quarter depth"),(0,r.kt)("td",{parentName:"tr",align:null},"half depth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Top bar"),(0,r.kt)("td",{parentName:"tr",align:null},"mm"),(0,r.kt)("td",{parentName:"tr",align:null},"mm"),(0,r.kt)("td",{parentName:"tr",align:null},"mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"length"),(0,r.kt)("td",{parentName:"tr",align:null},"482"),(0,r.kt)("td",{parentName:"tr",align:null},"482"),(0,r.kt)("td",{parentName:"tr",align:null},"482")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"thickness"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"16")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lug depth"),(0,r.kt)("td",{parentName:"tr",align:null},"mm"),(0,r.kt)("td",{parentName:"tr",align:null},"mm"),(0,r.kt)("td",{parentName:"tr",align:null},"mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(at point of contact)"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bottom bar"),(0,r.kt)("td",{parentName:"tr",align:null},"mm"),(0,r.kt)("td",{parentName:"tr",align:null},"mm"),(0,r.kt)("td",{parentName:"tr",align:null},"mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"length"),(0,r.kt)("td",{parentName:"tr",align:null},"450"),(0,r.kt)("td",{parentName:"tr",align:null},"450"),(0,r.kt)("td",{parentName:"tr",align:null},"450")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width (with rebate in bar, can leave out rebate, if so make thinner)"),(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"thickness"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"End bar"),(0,r.kt)("td",{parentName:"tr",align:null},"mm"),(0,r.kt)("td",{parentName:"tr",align:null},"mm"),(0,r.kt)("td",{parentName:"tr",align:null},"mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"length"),(0,r.kt)("td",{parentName:"tr",align:null},"230"),(0,r.kt)("td",{parentName:"tr",align:null},"175"),(0,r.kt)("td",{parentName:"tr",align:null},"123")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},"33"),(0,r.kt)("td",{parentName:"tr",align:null},"33"),(0,r.kt)("td",{parentName:"tr",align:null},"33")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"thickness (mine are 20mm)"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"10")))),(0,r.kt)("h2",{id:"making"},"Making"),(0,r.kt)("p",null,"I made use of simplified geometry for the top and bottom bars. I ripped them to profile and then used a hand saw to cut them to length and check out the ends of the top bars. This can also be done on a table saw and the use of an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dado_set"},"dado")," set of blades will make it even more efficient. "),(0,r.kt)("p",null,"The end bars have more complex geometry. In my case I decided to leave them at the 20 mm thickness of the ash slats. "),(0,r.kt)("p",null,"The same kind of thinking applies to sizing your boxes, except for boxes it is the internal dimension that matters not the external. You can use larger sections of timber and just make the boxes bigger externally, as long as internal size and ledge geometry remains correct."),(0,r.kt)("p",null,"Here are a sequence of images, giving some hints as to process, working back from the finished item.\n",(0,r.kt)("img",{alt:"hiveware",src:n(9772).Z,width:"730",height:"555"})),(0,r.kt)("p",null,"Assembled box and frames."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hiveware",src:n(4887).Z,width:"677",height:"644"})),(0,r.kt)("p",null,"Box, rebate short end for ledge and rebated corner."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hiveware",src:n(5181).Z,width:"612",height:"414"})),(0,r.kt)("p",null,"Box, ledge geometry."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hiveware",src:n(4483).Z,width:"834",height:"588"})),(0,r.kt)("p",null,"Assembled box."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hiveware",src:n(3624).Z,width:"895",height:"510"}),"\nAssembled frame.\n",(0,r.kt)("img",{alt:"hiveware",src:n(865).Z,width:"746",height:"492"})),(0,r.kt)("p",null,"Exploded view of frame."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hiveware",src:n(9879).Z,width:"800",height:"450"})),(0,r.kt)("p",null,"A finished frame."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hiveware",src:n(9879).Z,width:"800",height:"450"})),(0,r.kt)("p",null,"Frame before hot wire applied to wax. I didn't cut grooves into the top and bottom bar, but used off cut wax to hold in place. A groove is better. Also I used three wire runs here, four is better."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hiveware",src:n(5531).Z,width:"800",height:"450"})),(0,r.kt)("p",null,"Wax sheets need to be trimmed if the bar geometries are varied as I have done."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hiveware",src:n(810).Z,width:"800",height:"600"})),(0,r.kt)("p",null,"Here are the hives that were burned, made from recycled pallet timber. I used epoxy glue to join timbers to get correct box depths. Ex 250x50 timber is expensive to buy."))}g.isMDXComponent=!0},9879:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/beeshiveware02-5b6630f76132643dc6b7bf2454cd2f9a.jpg"},5531:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/beeshiveware03-a1d3f91eec6280bf9f7112efe6b28879.jpg"},810:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/beeshiveware04-1798c862ce3e3e5f13a4a199c6cce507.jpg"},4887:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/box1-aa0f261fb0bbd27ace20fa714e28cd66.png"},5181:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},4483:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/box3-869b6657ea02fe1181b8a507d08380a1.png"},9786:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/frame-bf4a56548e638adb27bdc17f5cd793ae.png"},8685:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/frame1-70808f0635cf26e4b265361458d35559.png"},3624:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/framedwg1-afc9f6069bde2b0614983c07f394ab3b.png"},865:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/framedwg2-27e57b8fdcbe584c608ac40623b50c84.png"},8929:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/roughboxsketch1-e192f8eddfb3d1079d3b975e7c9329b8.jpg"},9772:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wholebox-740d4c9c463ae0c2119e7a8e538988e0.png"}}]);