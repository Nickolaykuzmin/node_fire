var mongoose = require('mongoose');
var conf = require('../libs/config');
mongoose.connect(conf.mongoose.uri);

var db = mongoose.connection;

db.on('error', function (err) {
    console.log('Connection error:' + err.message);

});

db.once('open', function callback (err) {
    console.log("Connection successful");
});

var Schema = mongoose.Schema;

var Article = new Schema({
    title:{type:String},
    author:{type:String},
    description:{type:String},
    url:{type:String}
    //modified: {type:Date,default:Date.now()}
});

//validation

Article.path('title').validate(function (v) {
    return v.length > 5 && v.length < 70;
});

Article.path('author').validate(function (author) {
    return author.lenght > 5 && author.length < 30;
});

Article.path('description').validate(function (descr) {
    return descr.length > 10 && descr.length < 200;
});

var ArticleModel = mongoose.model('Article', Article);
module.exports = ArticleModel;