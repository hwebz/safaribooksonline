var BookModel = Backbone.Model.extend({
    defaults: {
        title: null,
        author: null
    } 
});

var BookCollection = Backbone.Collection.extend({
    model: BookModel,
    url: 'http://localhost:3000/books'
});


// Built-in Backbone Events
//      add
//      remove
//      sync
//      update
//      destroy
var BookView = Backbone.View.extend({
    tagName: 'tr',
    template: _.template(
        "<td><%= title %></td><td><%= author %></td>"
    ),
    initialize: function() {
        this.listenTo(this.model, 'update', this.render);
        this.listenTo(this.model, 'destroy', this.remove); // this.remove() is the jquery func to remove current <td> when model was destroyed
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    events: {
        'click': 'destroyBook'
    },
    destroyBook: function() {
        this.model.destroy();
    }
});

var BookCollectionView = Backbone.View.extend({
    el: 'tbody',
    initialize: function() {
        this.listenTo(this.collection, 'sync', this.render);
    },
    render: function() {
        this.$el.empty();
        this.collection.each(function(book) {
            var bookView = new BookView({model : book});
            this.$el.append(bookView.render().$el);
        }, this);
    }
});

var bookList = new BookCollection();
var bookListView = new BookCollectionView({collection: bookList});
bookList.fetch();