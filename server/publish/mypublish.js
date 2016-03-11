///**
// * Created by aramos on 17-02-2016.
// */
//Meteor.publish('Notifications', function (ID) {
//    check(ID,String);
//    //var userIds = TagsUsers.find({ tagId: { $in: tagIds } }).map(function (connector) {
//    //    return connector.userId;
//    //});
//    return Notifications.find({ to: ID });
//});
Meteor.publish("Notifications", function () {
    return Notifications.find()
    });
//});

Meteor.publish('userProfile', function(_id){
    check(_id, String);
    //Meteor._sleepForMs(2000);//simulate network lag

    //find the user by id
    var user=Meteor.users.findOne(_id);

    //if not found, mark subscription ready and quit
    if (!user){
        this.ready();
        return;
    }
    //if user is the currently logged in user
    if (this.userId==user._id){
        //return the full user document
        return Meteor.users.find(this.userId);
    }
    //if viewing another user
    else {
        //only return the user's profile
        return Meteor.users.find({'_id': user._id},
            {fields: {
                profile: 1
            }
            });
    }
});