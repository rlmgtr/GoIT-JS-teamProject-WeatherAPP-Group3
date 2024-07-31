(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['favoriteElem.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"search-location__slider-list-item\">\n    <div class=\"search-location__slider-list-content\">\n        <p class=\"search-location__slider-list-sity\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</p>\n        <button type=\"button\" class=\"search-location__slider-list-content-renove-city__button\">X\n        </button>\n    </div>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":9,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();