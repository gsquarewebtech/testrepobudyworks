!function(e){function t(r){if(n[r])return n[r].exports;var l=n[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var r=n(2),l=n(3),a=(n.n(l),n(4)),o=(n.n(a),wp.i18n.__);(0,wp.blocks.registerBlockType)("sermons-blog-layout/sermons-grid",{title:o("Sermons"),icon:"book",category:"common",keywords:[o("Sermons"),o("Grid")],getEditWrapperProps:function(e){var t=e.postBlockWidth;if("wide"===t||"full"===t)return{"data-align":t}},edit:r.a,save:function(){return null}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=wp.element.Component,m=wp.editor,c=m.InspectorControls,p=m.BlockControls,u=m.AlignmentToolbar,d=(m.BlockAlignmentToolbar,wp.element.Fragment),g=wp.data.withSelect,f=wp.i18n.__,y=wp.components,w=y.QueryControls,h=y.PanelBody,b=y.Spinner,_=y.Placeholder,v=y.RangeControl,E=y.SelectControl,S=y.Toolbar,C=y.ToggleControl,T=y.TextControl,k=wp.htmlEntities.decodeEntities,P=function(e){function t(e){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.categoriesList,r=e.setAttributes,l=e.latestPosts,a=e.className,i=e.postTypes,s=e.media,m=(t.post_type,t.categories),g=t.order,y=t.orderBy,P=t.postscount,x=t.columns,N=t.imagePosition,L=t.equalHeight,D=t.displayMasonry,M=t.featuredType,A=t.postLayout,F=t.displayFilters,B=t.displayFilterTopics,O=t.displayFilterSeries,I=t.displayFilterPreacher,H=t.displayFilterBook,j=t.displayFilterServiceType,R=t.displayFilterDates,G=t.displaySermonFeaturedType,q=t.displaySermonSeries,V=t.displayTitle,Q=t.displaySermonDate,W=t.displaySermonDescription,U=t.displaySermonReadMoreButton,Y=t.displaySermonAudio,z=t.displaySermonPreacher,J=t.displaySermonBiblePassage,K=t.displaySermonServiceType,X=t.postReadMoreButtonText,Z=t.displayPagination,$=t.paginationTotalPages,ee=t.displayPrevNext,te=t.previousLabel,ne=t.nextLabel,re=t.paginationAlignment,le=t.titlePadding,ae=t.descriptionPadding,oe=t.align,ie=t.gridLayoutStyle,se=t.columnGap,me=Array.isArray(l)&&l.length,ce=Array.isArray(i)&&i.length,pe=Array.isArray(s)&&s.length;if(!me||!ce||!pe)return wp.element.createElement(d,null,wp.element.createElement(_,{icon:"admin-post",label:f("No Semons Available")},Array.isArray(l)&&Array.isArray(ce)&&Array.isArray(pe)?f("No sermons found."):wp.element.createElement(b,null)));for(var ue=l.length>P?l.slice(0,P):l,de=[{icon:"grid-view",title:f("Grid View"),onClick:function(){return r({postLayout:"grid"})},isActive:"grid"===A},{icon:"list-view",title:f("List View"),onClick:function(){return r({postLayout:"list"})},isActive:"list"===A}],ge="grid"===A?"gpl-column-"+x:"",fe="list"===A?"list-layout":"",ye=L?"equal-height":"",we={"--item-padding-left-right":se?se+"px":void 0,"--item-margin-bottom":se?2*se+"px":void 0,"--item-height":se?300-se+"px":void 0},he=[{label:f("Image"),value:"image"},{label:f("Video"),value:"video"}],be=[],_e=2;_e<$+1;_e++)be.push(_e);var ve=be.map(function(e){return wp.element.createElement("a",{className:"page-numbers",href:"#"},e)});return wp.element.createElement(d,null,wp.element.createElement(p,null,wp.element.createElement(u,{value:oe,onChange:function(e){r({align:e})}}),wp.element.createElement(S,{controls:de})),wp.element.createElement(c,{key:"inspector"},wp.element.createElement(h,{title:f("Layout Settings")},"grid"===A&&wp.element.createElement(v,{label:f("Columns"),value:x,onChange:function(e){return r({columns:e})},min:1,max:6}),wp.element.createElement(v,{label:f("Column Gap"),value:se,min:0,max:20,onChange:function(e){return r({columnGap:e})}}),"grid"===A&&!D&&wp.element.createElement(C,{label:f("Equal Height"),checked:!!L,onChange:function(e){return r({equalHeight:e})}}),"grid"===A&&!L&&wp.element.createElement(C,{label:f("Show Masonry"),checked:!!D,onChange:function(e){return r({displayMasonry:e})}}),"list"===A&&wp.element.createElement(E,{label:f("Image position"),options:[{label:f("Left"),value:"left"},{label:f("Right"),value:"right"},{label:f("Top"),value:"top"}],value:N,onChange:function(e){r({imagePosition:e})}})),wp.element.createElement(h,{title:f("Query Settings"),initialOpen:!1},wp.element.createElement(w,o({order:g,orderBy:y},{numberOfItems:P,categoriesList:n,selectedCategoryId:m,onOrderChange:function(e){return r({order:e})},onOrderByChange:function(e){return r({orderBy:e})},onCategoryChange:function(e){return r({categories:""!==e?e:void 0})},onNumberOfItemsChange:function(e){return r({postscount:e})}}))),wp.element.createElement(h,{title:f("Filters"),initialOpen:!1},wp.element.createElement(C,{label:f("Display Filters"),checked:!!F,onChange:function(e){return r({displayFilters:e})}}),F&&wp.element.createElement(C,{label:f("Display Filter Preacher"),checked:!!I,onChange:function(e){return r({displayFilterPreacher:e})}}),F&&wp.element.createElement(C,{label:f("Display Filter Series"),checked:!!O,onChange:function(e){return r({displayFilterSeries:e})}}),F&&wp.element.createElement(C,{label:f("Display Filter Topics"),checked:!!B,onChange:function(e){return r({displayFilterTopics:e})}}),F&&wp.element.createElement(C,{label:f("Display Filter Book"),checked:!!H,onChange:function(e){return r({displayFilterBook:e})}}),F&&wp.element.createElement(C,{label:f("Display Filter Service Type"),checked:!!j,onChange:function(e){return r({displayFilterServiceType:e})}}),F&&wp.element.createElement(C,{label:f("Display Filter Dates"),checked:!!R,onChange:function(e){return r({displayFilterDates:e})}})),wp.element.createElement(h,{title:f("Additional Settings"),initialOpen:!1},wp.element.createElement(C,{label:f("Display Featured Image/Video"),checked:!!G,onChange:function(e){return r({displaySermonFeaturedType:e})}}),G&&wp.element.createElement(E,{label:f("Featured Type"),options:he,value:M,onChange:function(e){r({featuredType:e})}}),wp.element.createElement(C,{label:f("Display Sermon Series"),checked:!!q,onChange:function(e){return r({displaySermonSeries:e})}}),wp.element.createElement(C,{label:f("Display Title"),checked:!!V,onChange:function(e){return r({displayTitle:e})}}),V&&wp.element.createElement(v,{label:f("Title Padding"),value:le,min:0,max:30,onChange:function(e){return r({titlePadding:e})}}),wp.element.createElement(C,{label:f("Display Sermon Date"),checked:!!Q,onChange:function(e){return r({displaySermonDate:e})}}),wp.element.createElement(C,{label:f("Display Sermon Description"),checked:!!W,onChange:function(e){return r({displaySermonDescription:e})}}),W&&wp.element.createElement(v,{label:f("Description Padding"),value:ae,min:0,max:30,onChange:function(e){return r({descriptionPadding:e})}}),wp.element.createElement(C,{label:f("Display Sermon Read More Button"),checked:!!U,onChange:function(e){return r({displaySermonReadMoreButton:e})}}),U&&wp.element.createElement(T,{label:f("Read More Button Text"),type:"text",value:X,onChange:function(e){return r({postReadMoreButtonText:e})}}),wp.element.createElement(C,{label:f("Display Sermon Audio"),checked:!!Y,onChange:function(e){return r({displaySermonAudio:e})}}),wp.element.createElement(C,{label:f("Display Sermon Preacher"),checked:!!z,onChange:function(e){return r({displaySermonPreacher:e})}}),wp.element.createElement(C,{label:f("Display Sermon Bible Passage"),checked:!!J,onChange:function(e){return r({displaySermonBiblePassage:e})}}),wp.element.createElement(C,{label:f("Display Sermon Service Type"),checked:!!K,onChange:function(e){return r({displaySermonServiceType:e})}})),wp.element.createElement(h,{title:f("Pagination"),initialOpen:!1},wp.element.createElement(v,{label:f("Sermons Per Page"),value:P,min:0,max:24,onChange:function(e){return r({postscount:e})}}),wp.element.createElement(C,{label:f("Show Pagination"),checked:!!Z,onChange:function(e){return r({displayPagination:e})}}),Z&&wp.element.createElement(v,{label:f("Pagination Total Pages"),value:$,min:0,max:100,onChange:function(e){return r({paginationTotalPages:e})}}),Z&&wp.element.createElement(C,{label:f("Show Prev/Next Links"),checked:!!ee,onChange:function(e){return r({displayPrevNext:e})}}),Z&&ee&&wp.element.createElement(T,{label:f("Previous Label"),type:"text",value:te,onChange:function(e){return r({previousLabel:e})}}),Z&&ee&&wp.element.createElement(T,{label:f("Next Label"),type:"text",value:ne,onChange:function(e){return r({nextLabel:e})}}),Z&&wp.element.createElement(E,{label:f("Pagination Alignment"),options:[{label:f("Left"),value:"left"},{label:f("Center"),value:"center"},{label:f("Right"),value:"right"}],value:re,onChange:function(e){r({paginationAlignment:e})}}))),wp.element.createElement("div",{className:a+" sermons-grid-view gpl-d-flex gpl-flex-wrap "+ie+" "+fe,style:we},wp.element.createElement("div",{className:"gutenber-filtering"},F&&I&&ue.slice(0,1).map(function(e,t){return wp.element.createElement("div",{dangerouslySetInnerHTML:{__html:e.sermons_blog_filters_preachers}})}),F&&O&&ue.slice(0,1).map(function(e,t){return wp.element.createElement("div",{dangerouslySetInnerHTML:{__html:e.sermons_blog_filters_series}})}),F&&B&&ue.slice(0,1).map(function(e,t){return wp.element.createElement("div",{dangerouslySetInnerHTML:{__html:e.sermons_blog_filters_topics}})}),F&&H&&ue.slice(0,1).map(function(e,t){return wp.element.createElement("div",{dangerouslySetInnerHTML:{__html:e.sermons_blog_filters_books}})}),F&&j&&ue.slice(0,1).map(function(e,t){return wp.element.createElement("div",{dangerouslySetInnerHTML:{__html:e.sermons_blog_filters_service_types}})}),F&&R&&ue.slice(0,1).map(function(e,t){return wp.element.createElement("div",{dangerouslySetInnerHTML:{__html:e.sermons_blog_filters_dates}})})),wp.element.createElement("div",{className:"sm-inner-grid gpl-column-12 gpl-d-flex gpl-flex-wrap","data-masonry":'{ "gutter": 0 }'},ue.map(function(e,t){return wp.element.createElement("article",{className:"post-item wpfc-sermon gpl-mb-30 "+ge+" "+ie},wp.element.createElement("div",{className:"wpfc-sermon-inner "+oe+" "+ye+" image-position-"+N},G&&"image"==M&&wp.element.createElement("div",{className:"post-image wpfc-sermon-image"},wp.element.createElement("a",{href:e.link,target:"_blank",rel:"bookmark"},wp.element.createElement("img",{src:e.sermons_blog_image_url}),wp.element.createElement("div",{className:"wpfc-sermon-image-img",style:{backgroundImage:"url("+e.sermons_blog_image_url+")"}}))),G&&"video"==M&&e.sermons_blog_video&&wp.element.createElement("div",{className:"wpfc-sermon-video wpfc-sermon-video-link",dangerouslySetInnerHTML:{__html:e.sermons_blog_video}}),wp.element.createElement("div",{className:"wpfc-sermon-main "},wp.element.createElement("div",{className:"wpfc-sermon-header"},wp.element.createElement("div",{className:"wpfc-sermon-header-main"},e.sermons_blog_series&&q&&wp.element.createElement("div",{className:"wpfc-sermon-meta-item wpfc-sermon-meta-series",dangerouslySetInnerHTML:{__html:e.sermons_blog_series}}),V&&wp.element.createElement("h3",{className:"wpfc-sermon-title",style:{paddingBottom:le+"px"}},wp.element.createElement("a",{className:"wpfc-sermon-title-text",href:e.link},"wp_block"!==e.type&&k(e.title.rendered.trim())||f("Untitled"))),Q&&e.date_gmt&&wp.element.createElement("div",{className:"wpfc-sermon-meta-item wpfc-sermon-meta-date",datetime:moment(e.date_gmt).utc().format()},moment(e.date_gmt).local().format("MMMM DD, Y")))),wp.element.createElement("div",{className:"wpfc-sermon-description"},W&&e.sermons_blog_meta_sermon_description&&"wp_block"!==e.type&&wp.element.createElement("div",{className:"sermon-description-content",style:{paddingBottom:ae+"px"}},wp.element.createElement("div",{dangerouslySetInnerHTML:{__html:e.sermons_blog_meta_sermon_description}})),U&&e.sermons_blog_show_readmore&&wp.element.createElement("div",{className:"wpfc-sermon-description-read-more"},wp.element.createElement("a",{className:"post-read-moore",href:e.link,target:"_blank",rel:"bookmark"},X))),e.sermons_blog_audio&&Y&&wp.element.createElement("div",{className:"wpfc-sermon-audio",dangerouslySetInnerHTML:{__html:e.sermons_blog_audio}}),(e.sermons_blog_preacher&&z||e.sermons_blog_bible_passage&&J||e.sermons_blog_service_type&&K)&&wp.element.createElement("div",{className:"wpfc-sermon-footer"},e.sermons_blog_preacher&&z&&wp.element.createElement("div",{className:"wpfc-sermon-meta-item wpfc-sermon-meta-preacher"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:e.sermons_blog_preacher_image}}),wp.element.createElement("span",{className:"wpfc-sermon-meta-prefix"}," Preacher : "),wp.element.createElement("span",{className:"wpfc-sermon-meta-text",dangerouslySetInnerHTML:{__html:e.sermons_blog_preacher}})),e.sermons_blog_bible_passage&&J&&wp.element.createElement("div",{className:"wpfc-sermon-meta-item wpfc-sermon-meta-passage"},wp.element.createElement("span",{className:"wpfc-sermon-meta-prefix"},"Passage : "),wp.element.createElement("span",{className:"wpfc-sermon-meta-text"},e.sermons_blog_bible_passage)),e.sermons_blog_service_type&&K&&wp.element.createElement("div",{className:"wpfc-sermon-meta-item wpfc-sermon-meta-service"},wp.element.createElement("span",{className:"wpfc-sermon-meta-prefix"},"Service Type : "),wp.element.createElement("span",{className:"wpfc-sermon-meta-text",dangerouslySetInnerHTML:{__html:e.sermons_blog_service_type}}))))))})),Z&&wp.element.createElement("nav",{className:"gutenberg-pagination",style:{textAlign:""+re,width:"100%"}},wp.element.createElement("p",null,wp.element.createElement("span",{"aria-current":"page",className:"page-numbers current"},"1"),ve,ee&&wp.element.createElement("a",{className:"next page-numbers",href:"#"},ne)))))}}]),t}(s);t.a=g(function(e,t){var n=t.attributes,r=n.categories,l=n.order,a=n.orderBy,o=n.postscount,i=n.post_type,s=e("core"),m=s.getEntityRecords,c=s.getPostTypes,p=s.getTaxonomies,u=s.getMediaItems,d=p();if(Array.isArray(d)&&d.length){var g=[],f=null;d.map(function(e,t){e.types.includes(i)&&(g.push(e.slug),1===g.length&&(f=e.rest_base))});var y={order:l,orderby:a,per_page:o};r&&f&&(y[f]=r);var w={per_page:100};return{latestPosts:m("postType",i,y),categoriesList:m("taxonomy",g[0],w),postTypes:c(),media:u()}}})(P)},function(e,t){},function(e,t){}]);