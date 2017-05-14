// Backbone Models
// Getters & Setters
//      get
//      set
// Attributes
//      atttributes
//      changed
// CRUD Operations
//      sync
//      fetch
//      save
//      destroy
var BookModel = Backbone.Model.extend({
    defaults: {
        title: null,
        author: null
    },
    initialize: function() {
        console.log("I'm alive!");
    }
});

// Backbone Views
// User Interface
//      template
//      render
// Interaction
//      events
//      initialize
var BookView = Backbone.View.extend({
    tagName: 'li',
    template: _.template('#book_template').html()),
    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        $('#book_info').append(this.$el);
        return this;
    },
    events: {
        'click': 'doSomething'
    },
    doSomething: function() {
        console.log('Click in the view!');
    }
});

// Backbone Collections
// Getters & Setters
//      get
//      set
//      at
// CRUD Operations
//      create
//      add
//      remove
//      sync
var BookCollection = Backbone.Collection.extend({
    model: BookModel,
    url: "/books",
    initialize: function() {
        this.listenTo(this, 'change', this.logTheChange);
    },
    logTheChange: function() {
        console.log('Change in a book model');
    }
});