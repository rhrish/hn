var $ = require('jquery');
var ReactDom = require('react-dom');
var React = require('react');
var NewsList = require('./NewsList');

$.ajax({
  url: '/json/items.json'
}).then(function(items){
  ReactDom.render(<NewsList items={items} />, $("#content")[0]);
});
