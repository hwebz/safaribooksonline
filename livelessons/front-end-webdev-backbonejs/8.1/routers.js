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

var BookView = Backbone.View.extend({
    tagName: 'tr',
    template: _.template(
        "<td><a href='#/book/<%= id %>'><%= title %></a></td><td><%= author %></td>"
    ),
    initialize: function() {
        this.listenTo(this.model, 'update', this.render);
        this.listenTo(this.model, 'destroy', this.remove); 
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    events: {
        //'click': 'destroyBook',
        'dblclick': 'showInputs',
        'focusout input': 'updateBook'
    },
    destroyBook: function() {
        this.model.destroy();
    },
    showInputs: function() {
        this.$el.find('td').first().replaceWith('<td><input type="text" name="title" value="'+ this.model.get('title') +'" /></td>');
        this.$el.find('td:nth-child(2)').replaceWith('<td><input type="text" name="author" value="'+ this.model.get('author') +'" /></td>');
    },
    updateBook: function() {
        var newTitle = this.$el.find('input[name="title"]').val();
        var newAuthor = this.$el.find('input[name="author"]').val();
        this.model.save({ title: newTitle, author: newAuthor }, { patch: true });
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

// Routers
//      Single page applications
//      Bookmark-able
//      Advanced routing
//
//      History
//      splats
//      route parameters
var BookRouter = Backbone.Router.extend({
    routes: {
        'book/:id': 'whichBook',
//        '*default': 'books'
        '': 'books'
    },
    books: function() {
        bookList.fetch();
    },
    whichBook: function(id) {
        bookListView.$el.empty();
        var book = bookList.get(id);
        var bookView = new BookView({ model: book });
        bookListView.$el.append(bookView.render().$el);
    }
});

var bookList = new BookCollection();
var bookListView = new BookCollectionView({collection: bookList});
var bookRouter = new BookRouter();
Backbone.history.start();
//bookList.fetch(); // Using router to fetch instead