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
Template.confirmModalNot.events({
    //'click #opendelnot': function (e) {
    //    Modal.show("confirmModalNot");
    //}
    'click #delnot': function (e) {
        console.log("delnot", e);
        //Notifications.read(this._id);
        var Not = Session.get("delnot");
        Modal.hide("confirmModalNot");
        console.log("Notfication to delete: ", Not);
        Notifications.remove(Not);
        Router.go("/MyNotifications");
        e.preventDefault();
    }
});

Template.showNotification.events({
    'click #opendelnot': function (e) {
        console.log(e.target.attributes.ids.value);
        Session.set("delnot", e.target.attributes.ids.value);
        Modal.show("confirmModalNot");
    },
    'click #read': function (e) {
        console.log(("Marking as read %s", this._id));
        //Notifications.read(this._id);
        Notifications.update({ _id:this._id}, { $set: { read: true, icon: "circle-o"}});
    }
});

//AutoForm.hooks({
//    deleteNotificationShow: {
//        onSuccess: function(operation, result, template) {
//            console.log("DeleteNotification");
//            if (result) {
//                Router.go("/MyNotifications");
//            }
//        }
//    }
//});

//bu= function () {
//    return function () {
//        console.log("buuuuuu");
//    }
//};


//AutoForm.addHooks(['deleteNotificationShow'], {
//    before: {
//        insert: function(doc){
//            console.log("insert");
//            return doc;
//        }
//    },
//    onSuccess: function(formType, result){
//        console.log("success");
//    }
//});
//var insertFormhook = {
//    onSubmit: function(update, result) {
//        console.log("DeleteNotification hook");
//        if(result){
//            console.log("DeleteNotification hook");
//        }
//    }
//};
//
//AutoForm.addHooks('deleteNotificationShow',insertFormhook);
//var hooksObject = {
//    before: {
//        // Replace `formType` with the form `type` attribute to which this hook applies
//        remove: function(doc) {
//            // Potentially alter the doc
//            return doc;
//
//            // Then return it or pass it to this.result()
//            //return doc; (synchronous)
//            //return false; (synchronous, cancel)
//            //this.result(doc); (asynchronous)
//            //this.result(false); (asynchronous, cancel)
//        }
//    },
//
//    // The same as the callbacks you would normally provide when calling
//    // collection.insert, collection.update, or Meteor.call
//    after: {
//        // Replace `formType` with the form `type` attribute to which this hook applies
//        remove: function(error, result) {}
//    },
//
//    // Called when form does not have a `type` attribute
//    onSubmit: function(insertDoc, updateDoc, currentDoc) {
//        // You must call this.done()!
//        console.log("buuuuuu");
//        this.done(); // submitted successfully, call onSuccess
//        //this.done(new Error('foo')); // failed to submit, call onError with the provided error
//        //this.done(null, "foo"); // submitted successfully, call onSuccess with `result` arg set to "foo"
//    },
//
//    // Called when any submit operation succeeds
//    onSuccess: function(formType, result) {
//        console.log("buuuuuu111");
//    },
//
//    // Called when any submit operation fails
//    onError: function(formType, error) {
//        console.log("buuuuuu2222");
//    },
//
//    // Called every time an insert or typeless form
//    // is revalidated, which can be often if keyup
//    // validation is used.
//    formToDoc: function(doc) {
//        // alter doc
//        // return doc;
//    },
//
//    // Called every time an update or typeless form
//    // is revalidated, which can be often if keyup
//    // validation is used.
//    formToModifier: function(modifier) {
//        // alter modifier
//        // return modifier;
//    },
//
//    // Called whenever `doc` attribute reactively changes, before values
//    // are set in the form fields.
//    docToForm: function(doc, ss) {},
//
//    // Called at the beginning and end of submission, respectively.
//    // This is the place to disable/enable buttons or the form,
//    // show/hide a "Please wait" message, etc. If these hooks are
//    // not defined, then by default the submit button is disabled
//    // during submission.
//    beginSubmit: function() {
//        console.log("buuuuuu33333");
//    },
//    endSubmit: function() {
//        console.log("buuuuuu55555");
//    }
//};
//
//AutoForm.hooks({
//    deleteNotificationShow: hooksObject
//});