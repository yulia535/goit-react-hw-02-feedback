(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,a){t.exports={notificationItem:"notification_notificationItem__28sN3"}},18:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),c=a(5),i=a.n(c),o=a(6),r=a(7),b=a(8),d=a(12),l=a(11),u=a(2),j=a.n(u),h=a(0),m=function(t){var e=t.good,a=t.neutral,n=t.bad,s=t.total,c=t.positivePercentage;return Object(h.jsxs)("div",{className:j.a.statistics,children:[Object(h.jsxs)("span",{className:j.a.statisticsItem,children:["Good:",e]}),Object(h.jsxs)("span",{className:j.a.statisticsItem,children:["Neutral:",a]}),Object(h.jsxs)("span",{className:j.a.statisticsItem,children:["Bad:",n]}),Object(h.jsxs)("span",{className:j.a.statisticsItem,children:["Total:",s]}),Object(h.jsxs)("span",{className:j.a.statisticsItem,children:["Positive feedback:",c,"%"]})]})};m.defaultProps={positivePercentage:0};var v=m,O=a(3),p=a.n(O),f=function(t){var e=t.onLeaveFeedback;return Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:p.a.buttonFeedback,type:"button",name:"good",onClick:e,children:"Good"}),Object(h.jsx)("button",{className:p.a.buttonFeedback,type:"button",name:"neutral",onClick:e,children:"Neutral"}),Object(h.jsx)("button",{className:p.a.buttonFeedback,type:"button",name:"bad",onClick:e,children:"Bad"})]})},x=a(9),k=a.n(x),g=function(t){var e=t.title,a=t.children;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:k.a.sectionTitle,children:e}),a]})},N=a(10),_=a.n(N),F=function(t){var e=t.message;return Object(h.jsx)("div",{children:Object(h.jsx)("span",{className:_.a.notificationItem,children:e})})},I=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={good:0,neutral:0,bad:0},t.increment=function(e){var a=e.currentTarget.name;t.setState((function(t){return Object(o.a)({},a,t[a]+1)}))},t}return Object(b.a)(a,[{key:"countTotalFeedback",value:function(){return this.state.good+this.state.neutral+this.state.bad}},{key:"countPositiveFeedbackPercentage",value:function(t){var e=this.state.good/t*100;return Math.round(e)}},{key:"render",value:function(){var t=this.countTotalFeedback();return Object(h.jsxs)("div",{children:[Object(h.jsx)(g,{title:"Please leave feedback",children:Object(h.jsx)(f,{onLeaveFeedback:this.increment})}),t>0?Object(h.jsxs)(g,{title:"Statistics",children:[Object(h.jsx)(v,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:t,positivePercentage:this.countPositiveFeedbackPercentage(t)})," "]}):Object(h.jsx)(F,{message:"No feedback given"})]})}}]),a}(s.a.Component),P=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(I,{})})};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))},2:function(t,e,a){t.exports={statisticsItem:"statistics_statisticsItem__2UMLO"}},3:function(t,e,a){t.exports={buttonFeedback:"feedbackOptions_buttonFeedback__p3MLU"}},9:function(t,e,a){t.exports={sectionTitle:"section_sectionTitle__3C1fW"}}},[[18,1,2]]]);
//# sourceMappingURL=main.d84bd8cb.chunk.js.map