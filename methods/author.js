var express = require('express');
var Firebase = require('firebase');

var rootRef = new Firebase('https://testfireapplication.firebaseio.com/');

var articleAuth = {

    addAuthor: function (req) {


        var onComplete = function (error) {
            if(error){
                console.log('Synchronization failed' + error);
            }

            else{
             console.log('Success data');
            }

        };

        var users = rootRef.child('users');

        users.push({
            title: [req.params.title],

            author:[req.params.author],

            description: [req.params.description],

            url: [req.params.url]

        },onComplete);

    },
    getAllFields: function () {

        rootRef.child('users').on('value', function (snapshot) {
            console.log(snapshot.val());
        }, function (errorObj) {
            console.log('The read is failed!' + errorObj);
        })
    },
    getAuthorByName: function () {

        var userByName  = rootRef.child('users/');

        userByName.on('value', function (snapshot) {
            console.log(snapshot.val());
        }, function (errorObj) {
            console.log ('Can"t get User By this Name!' + errorObj);
        })
    },
    deleteByAuthor: function () {
       var removeItemID = rootRef.child('users');

        removeItemID.remove(function (err) {
            if(!err){
                console.log('Success remove By Author');
            }
        })
    }
};

module.exports = articleAuth;

