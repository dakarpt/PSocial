/**
 * Created by aramos on 23-10-2015.
 */

//Template.DeleteModal.events({
//    'click #confirm-delete': function () {
//        $('#delete-modal').modal('hide')
//    }
//});

//Template.deleteNotification.events({
//    'click #deleteNotification': function () {
//        console.log("Cilck del not");
//    }
//});


//Template.MyNotifications.events({
//    'click tbody > tr': function (event) {
//        console.log("Envent: ", event);
//        var dataTable = $(event.target).closest('table').DataTable();
//        var rowData = dataTable.row(event.currentTarget).data();
//        var NOT = Notifications.findOne(rowData._id);
//
//        console.log("Rowdata:",NOT);
//        console.log("Routing to /showNotification/" + NOT._id);
//        //Router.go("/showNotification/" + NOT._id);
//    }
//});

Template.MyNotifications.events({
    'click #delete': function (event) {
        console.log("Click del not");
        event.stopPropagation();
        //event.preventDefault();
    },
    'click tbody > tr > td': function (event) {
        console.log("this", this);
        console.log("element ", event.toElement.attributes.id);
        var dataTable = $(event.target).closest('table').DataTable();
        var rowData = dataTable.row(this).data();
        var colData = dataTable.cell(this).data();
        //var ID = Notifications.findOne({ name: rowData._id });
        var element = event.toElement;
        if (!event.toElement.attributes.id) {
            if ((element.toString().indexOf("pencil") == -1) && (element.toString().indexOf("times") == -1)) {
                console.log("Routing to /showNotification/" + rowData._id);
                console.log("Row data", rowData);
                console.log("to element", event.toElement);
                Router.go("/showNotification/" + rowData._id);
            }
        } else {
            console.log("Show modal");
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
//Template.replyNotification.events({
//    'click .reply': function () {
//        console.log("Click tabular edit", this._id);
//    }
//});
//Template.deleteNotification.events({
//    'click .btn-delete': function () {
//        console.log("Click tabular delete", this._id);
//    }
//});
//
//var hooksObject = {
//    onSuccess: function (formType, result) {
//        console.log("Success delete");
//    }
//};
//
//AutoForm.addHooks(['deleteNot'], hooksObject);
//AutoForm.hooks({
//    deleteNot: {
//        onSuccess: function (formType, result) {
//        console.log("Success delete");
//        }
//    }
//});
