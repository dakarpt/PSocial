/**
 * Created by aramos on 23-10-2015.
 */

Template.DeleteModal.events({
    'click #confirm-delete': function () {
        $('#delete-modal').modal('hide')
    }
});

Template.MyNotifications.events({
    'click tbody > tr > td': function (event) {
        console.log("this", this);
        var dataTable = $(event.target).closest('table').DataTable();
        var rowData = dataTable.row(this).data();
        var colData = dataTable.cell(this).data();
        //var ID = Notifications.findOne({ name: rowData._id });
        var element = event.toElement;

        if ((element.toString().indexOf("pencil") == -1) && (element.toString().indexOf("times") == -1)) {
            console.log("Routing to /showNotification/" + rowData._id, rowData, colData, event.toElement);
            Router.go("/showNotification/" + rowData._id);
        }
    }
});

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
