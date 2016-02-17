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
    return Notifications.find({ to: this.userId })
    });
//});