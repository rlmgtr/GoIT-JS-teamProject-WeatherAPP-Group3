(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['calendar.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class='date-day'>"
    + alias4(((helper = (helper = lookupProperty(helpers,"day") || (depth0 != null ? lookupProperty(depth0,"day") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"day","hash":{},"data":data,"loc":{"start":{"line":1,"column":22},"end":{"line":1,"column":29}}}) : helper)))
    + "<sup>"
    + alias4(((helper = (helper = lookupProperty(helpers,"ending") || (depth0 != null ? lookupProperty(depth0,"ending") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ending","hash":{},"data":data,"loc":{"start":{"line":1,"column":34},"end":{"line":1,"column":44}}}) : helper)))
    + "</sup> "
    + alias4(((helper = (helper = lookupProperty(helpers,"weekDay") || (depth0 != null ? lookupProperty(depth0,"weekDay") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"weekDay","hash":{},"data":data,"loc":{"start":{"line":1,"column":51},"end":{"line":1,"column":62}}}) : helper)))
    + "</div>\n<div class='all-time-elem'>\n<div class='date-month-time'>\n  <p class='date-month'>"
    + alias4(((helper = (helper = lookupProperty(helpers,"month") || (depth0 != null ? lookupProperty(depth0,"month") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"month","hash":{},"data":data,"loc":{"start":{"line":4,"column":24},"end":{"line":4,"column":33}}}) : helper)))
    + "</p>\n  <p class='date-time'>"
    + alias4(((helper = (helper = lookupProperty(helpers,"time") || (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":5,"column":23},"end":{"line":5,"column":31}}}) : helper)))
    + "</p>\n</div>\n<div class='date-sun'>\n  <div class='date-sunrise'>\n    <img src='"
    + alias4(((helper = (helper = lookupProperty(helpers,"sunriseIcon") || (depth0 != null ? lookupProperty(depth0,"sunriseIcon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sunriseIcon","hash":{},"data":data,"loc":{"start":{"line":9,"column":14},"end":{"line":9,"column":29}}}) : helper)))
    + "' alt='Время рассвета' class='date-sunrise-icon' />\n    <p class='date-sunrise-time'>"
    + alias4(((helper = (helper = lookupProperty(helpers,"sunriseTime") || (depth0 != null ? lookupProperty(depth0,"sunriseTime") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sunriseTime","hash":{},"data":data,"loc":{"start":{"line":10,"column":33},"end":{"line":10,"column":48}}}) : helper)))
    + "</p>\n  </div>\n  <div class='date-sunset'>\n    <img src='"
    + alias4(((helper = (helper = lookupProperty(helpers,"sunsetIcon") || (depth0 != null ? lookupProperty(depth0,"sunsetIcon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sunsetIcon","hash":{},"data":data,"loc":{"start":{"line":13,"column":14},"end":{"line":13,"column":28}}}) : helper)))
    + "' alt='Время заката' class='date-sunset-icon' />\n    <p class='date-sunset-time'>"
    + alias4(((helper = (helper = lookupProperty(helpers,"sunsetTime") || (depth0 != null ? lookupProperty(depth0,"sunsetTime") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sunsetTime","hash":{},"data":data,"loc":{"start":{"line":14,"column":32},"end":{"line":14,"column":46}}}) : helper)))
    + "</p>\n  </div>\n  </div>";
},"useData":true});
})();