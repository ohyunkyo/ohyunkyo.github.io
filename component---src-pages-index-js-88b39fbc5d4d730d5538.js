"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{8771:function(e,t,a){var l=a(7294),n=a(1597),r=a(396);t.Z=function(){var e,t,i=(0,n.useStaticQuery)("3257411868"),c=null===(e=i.site.siteMetadata)||void 0===e?void 0:e.author;null===(t=i.site.siteMetadata)||void 0===t||t.social;return l.createElement("div",{className:"bio"},l.createElement(r.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(1550)}),(null==c?void 0:c.name)&&l.createElement("p",null,"Written by ",l.createElement("strong",null,c.name),l.createElement("br",null)," ",(null==c?void 0:c.summary)||null," "))}},4877:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var l=a(7294),n=a(1597),r=function(){var e=(0,n.useStaticQuery)("3496359572").allMarkdownRemark.nodes,t=new Set;e.forEach((function(e){var a=e.fields;a&&a.category&&t.add(a.category)}));var a=Array.from(t);return l.createElement("div",null,"카테고리 :     ",a.map((function(e){return l.createElement("span",null,l.createElement(n.Link,{to:"/category/"+e},e),"    ")})),l.createElement("br",null),l.createElement("br",null),l.createElement("br",null))},i=a(8771),c=a(8678),o=a(262),s=function(e){var t,a=e.data,s=e.location,d=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",f=a.allMarkdownRemark.nodes;return 0===f.length?l.createElement(c.Z,{location:s,title:d},l.createElement(o.Z,{title:"All posts"}),l.createElement(r,null),l.createElement(i.Z,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(c.Z,{location:s,title:d},l.createElement(o.Z,{title:"All posts"}),l.createElement(r,null),l.createElement(i.Z,null),l.createElement("ol",{style:{listStyle:"none"}},f.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(n.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}},1550:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/6dacf7b2c4db85249eda1745ffb570ed/e5610/profile-pic.png","srcSet":"/static/6dacf7b2c4db85249eda1745ffb570ed/e5610/profile-pic.png 50w,\\n/static/6dacf7b2c4db85249eda1745ffb570ed/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/6dacf7b2c4db85249eda1745ffb570ed/d4bf4/profile-pic.avif 50w,\\n/static/6dacf7b2c4db85249eda1745ffb570ed/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/6dacf7b2c4db85249eda1745ffb570ed/3faea/profile-pic.webp 50w,\\n/static/6dacf7b2c4db85249eda1745ffb570ed/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-index-js-88b39fbc5d4d730d5538.js.map