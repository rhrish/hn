var $ = require("jquery");
var React = require("react");
var ReactDom = require("react-dom");
var NewsItem = require("./NewsItem");

$.ajax({
  url: '../json/items.json'
}).then(function(items) {
  console.log('items', items);
  ReactDom.render(<NewsItem item={items[1]} rank={1} />, $('#content')[0]);
});
