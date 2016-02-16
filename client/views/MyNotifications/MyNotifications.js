/**
 * Created by aramos on 23-10-2015.
 */

Template.DeleteModal.events({
    'click #confirm-delete': function () {
        $('#delete-modal').modal('hide')
    }
});

//Template.MyNotifications.events({
//    'click tbody > tr': function (event) {
//        var dataTable = $(event.target).closest('table').DataTable();
//        var rowData = dataTable.row(event.currentTarget).data();
//        //var ID = Notifications.findOne({ name: rowData._id });
//        console.log("Routing to /showNotification/" + rowData._id);
//        Router.go("/showNotification/" + rowData._id);
//    }
//});

Template.registerHelper("iconOptions", function () {
    return [
        {label: "ThumbsUp", value: "thumbs-up"},
        {label: "Bolt", value: "bolt"},
        {label: "Circle", value: "circle-o"},
        {label: "Other", value: "other"}
    ];
});

//Template.ShowNotification.events({
//    'click .check-out': function () {
//        console.log("Click tabular show", this._id);
//    }
//});
Template.EditNotification.events({
    'click .check-out': function () {
        console.log("Click tabular edit", this._id);
    }
});
Template.deleteNotification.events({
    'click .btn-delete': function () {
        console.log("Click tabular delete", this._id);
    }
});
