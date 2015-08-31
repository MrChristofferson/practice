// Model

var Blog = Backbone.Model.extend({
  defaults: {
    author: '',
    title: '',
    url: ''
  }
});

var blog1 = new Blog({author: 'Chris', title: 'My Blog', url: 'google.com'});

// Collection

var blogs = Backbone.Collection.extend({})

// instantiate two blogs

var blog2 = new Blog({author: 'number2', title: 'number2', url: 'number2'})
var blog3 = new Blog({author: 'number3', title: 'number3', url: 'number3'})

// instantiate a collection

var blogs = new Blogs([blog1, blog2, blog3])

// View

var BlogView = Backbone.View.extend({

});

var BlogsView = Backbone.View.extend({
  
});