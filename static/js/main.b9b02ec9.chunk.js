(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__cGeSH",Modal:"Modal_Modal__NO3ZY"}},23:function(e,t,a){e.exports={App:"App_App__3N0gX"}},24:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2EcOU"}},25:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3PkZv","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__1NPde"}},26:function(e,t,a){e.exports={Button:"Button_Button__2S6DZ"}},27:function(e,t,a){e.exports={Loader:"Loader_Loader__l_M7F"}},33:function(e,t,a){},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2Nbon",SearchForm:"Searchbar_SearchForm__3ANdr",SearchFormButton:"Searchbar_SearchFormButton__1N8jT",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2WQn5",SearchFormInput:"Searchbar_SearchFormInput__BOExf"}},74:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(21),c=a.n(o),s=(a(33),a(12)),u=a(7),l=a.n(u),i=a(10),m=a(5),h=a(22),b=a.n(h);var d=function(e,t){return b()({method:"GET",url:"https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=21806148-ef05846c07274d590c18cb52e&image_type=photo&orientation=horizontal&per_page=12")})},j=a(23),p=a.n(j),f=a(4),O=a.n(f),_=a(0);var g=function(e){var t=e.query,a=e.onSetQuery,r=e.onFormSubmit;return Object(_.jsx)("header",{className:O.a.Searchbar,children:Object(_.jsxs)("form",{className:O.a.SearchForm,onSubmit:r,children:[Object(_.jsx)("button",{type:"submit",className:O.a.SearchFormButton,children:Object(_.jsx)("span",{className:O.a.SearchFormButtonLabel,children:"Search"})}),Object(_.jsx)("input",{onInput:a,className:O.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:t})]})})},v=a(24),x=a.n(v),y=a(25),S=a.n(y);var I=function(e){var t=e.alt,a=e.src,r=e.modalUrl,n=e.showModal;return Object(_.jsx)("li",{className:S.a.ImageGalleryItem,children:Object(_.jsx)("img",{src:a,alt:t,className:"ImageGalleryItem-image",onClick:function(){return n(r)}})})};var w=function(e){var t=e.images,a=e.showModal;return Object(_.jsx)("ul",{className:x.a.ImageGallery,id:"Gallery",children:t.map((function(e){var t=e.id,r=e.tags,n=e.webformatURL,o=e.largeImageURL;return Object(_.jsx)(I,{alt:r,src:n,showModal:a,modalUrl:o},t)}))})},F=a(26),N=a.n(F);var k=function(e){var t=e.onLoadMore;return Object(_.jsx)("button",{type:"button",className:N.a.Button,onClick:t,children:"Load more"})},G=a(27),M=a.n(G),L=a(28),B=a.n(L);var E=function(){return Object(_.jsx)(B.a,{className:M.a.Loader,type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e4})},A=a(11),U=a.n(A);var q=function(e){var t=e.modalImg,a=e.closeModal;return Object(_.jsx)("div",{className:U.a.Overlay,onClick:a,children:Object(_.jsx)("div",{className:U.a.Modal,children:Object(_.jsx)("img",{src:t,alt:""})})})};var C=function(){var e=Object(r.useState)(""),t=Object(m.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)(1),c=Object(m.a)(o,2),u=c[0],h=c[1],b=Object(r.useState)([]),j=Object(m.a)(b,2),f=j[0],O=j[1],v=Object(r.useState)(""),x=Object(m.a)(v,2),y=x[0],S=x[1],I=Object(r.useState)(!1),F=Object(m.a)(I,2),N=F[0],G=F[1],M=function(e){if(console.log("event.key",e.key),"Escape"===e.key)return S("")};Object(r.useEffect)((function(){y?window.addEventListener("keydown",M):window.removeEventListener("keydown",M)}),[y]);var L=function(){var e=Object(i.a)(l.a.mark((function e(t){var r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),G(!0),h(1),e.next=5,d(a,1);case 5:r=e.sent,n=r.data.hits,G(!1),O(n),h((function(e){return e+1}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(i.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(!0),e.next=3,d(a,u);case 3:t=e.sent,r=t.data.hits,O((function(e){return[].concat(Object(s.a)(e),Object(s.a)(r))})),h((function(e){return e+1})),G(!1),window.scrollTo({top:document.querySelector("ul").scrollHeight,behavior:"smooth"});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(_.jsxs)("div",{className:p.a.App,children:[Object(_.jsx)(g,{query:a,onSetQuery:function(e){n(e.target.value)},onFormSubmit:L}),Object(_.jsx)(w,{images:f,showModal:function(e){S(e)}}),N&&Object(_.jsx)(E,{}),!!f.length&&Object(_.jsx)(k,{onLoadMore:B}),y&&Object(_.jsx)(q,{modalImg:y,closeModal:function(e){e.currentTarget===e.target&&S("")}})]})};c.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(C,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.b9b02ec9.chunk.js.map