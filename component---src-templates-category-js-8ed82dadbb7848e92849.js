"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[102],{7310:function(e,t,r){var a=r(7294),n=r(1597);t.Z=function(){var e=(0,n.useStaticQuery)("3496359572").allMarkdownRemark,t=new Set;e.nodes.forEach((function(e){var r=e.fields;r&&r.category&&t.add(r.category)}));var r=Array.from(t);return a.createElement("div",{class:"nav-bar"},"Categories :     ",r.map((function(e){return a.createElement("span",null,a.createElement(n.Link,{to:"/category/"+e},e),"    ")})))}},3652:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var a=r(7294),n=r(7310),l=r(8678),c=r(262),i=r(1597),o=function(e){var t=e.frontmatter,r=e.fields,n=e.excerpt,l=t.title||r.slug;return a.createElement("ol",{style:{listStyle:"none"}},a.createElement("li",{key:r.slug},a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h2",null,a.createElement(i.Link,{to:r.slug,itemProp:"url"},a.createElement("span",{itemProp:"headline"},l))),a.createElement("small",null,t.date)),a.createElement("section",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:t.description||n},itemProp:"description"})))))},s=function(e){return e.postEdges.map((function(e){var t=e.node;return a.createElement(o,Object.assign({key:t.fields.slug},t))}))},m=function(e){var t,r=e.location,i=e.pageContext,o=e.data,m=i.category,u=(null===(t=o.site.siteMetadata)||void 0===t?void 0:t.title)||"Title";return a.createElement(l.Z,{location:r,title:u},a.createElement(c.Z,{title:'"'+m+'" 카테고리 목록'}),a.createElement(n.Z,null),a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h1",{itemProp:"headline"},"Category: ",m)),a.createElement(s,{postEdges:o.allMarkdownRemark.edges})))}}}]);
//# sourceMappingURL=component---src-templates-category-js-8ed82dadbb7848e92849.js.map