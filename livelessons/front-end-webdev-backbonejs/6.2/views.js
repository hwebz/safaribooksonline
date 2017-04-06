var BookModel = Backbone.Model.extend({
    defaults: {
        title: null,
        author: null
    } 
});
// Underscore template (suggestion using: Mustache, Handlebars)
// User Interface
//      template
//      render
// Interaction
//      events
//      initialize
var bookTemplate = _.template(
    "<tr><td><%= title %></td><td><%= author %></td></tr>"
);

var book1 = new BookModel({ title: "The Odyssey", author: "Homer"});
//$('tbody').append(bookTemplate(book1.toJSON()));

// Build a template and render a view
var BookView = Backbone.View.extend({
    tagName: 'tr',
    template: _.template(
        "<td><%= title %></td><td><%= author %></td>"
    ),
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        $('tbody').append(this.$el);
        return this;
    }
});

var bookView = new BookView({ model: book1 });