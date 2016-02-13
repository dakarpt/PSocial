/**
 * Created by aramos on 08-10-2015.
 */
Template.FavLinks.events({
    'click .FavLink': function () {
        //Players.update(Session.get("selected_player"), {$inc: {score: 5}})
        console.log("Fav click");
        Session.set("selected_fav", this.doc);
        Router.go(this.route);
    }
});

Template.post.helpers({
    isFavselected: function () {
        console.log("Posts helper fav isFavselected");
        //console.log(this);
        //Router.data();
        //(Session.get("selected_fav"));
        return (this._id == (Session.get("selected_fav")));
    }
});

Template.posts.helpers({
    //posts: function(){
    //    Posts.find({},{sort: {createdAt: -1}}).fetch();
    //},
    isFavselect: function () {
        console.log("Posts helper fav isFavselect");
        //console.log(posts);
        //Router.data();
        return (Session.get("selected_fav"));
        //return 1;
    }
});


