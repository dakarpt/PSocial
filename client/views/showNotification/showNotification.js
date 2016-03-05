///**
// * Created by aramos on 29-01-2016.
// */
//Template.showNotification.helpers({
//        selectedDoc: function () {
//            console.log("Selected doc helper", this);
//            return Notifications.findOne(this._id);
//        }
//    }
//);

//Template.showNotification.onRendered(function () {
//    console.log("Marked notification %s as read", this.data._id);
//    Notifications.read(this.data._id);
//});

Template.showNotification.events({
    'click #read': function (e) {
        console.log(("Marking as read %s", this._id));
        //Notifications.read(this._id);
        Notifications.update({ _id:this._id}, { $set: { read: true, icon: "circle-o"}});
    }
});