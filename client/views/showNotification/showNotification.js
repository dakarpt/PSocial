/**
 * Created by aramos on 29-01-2016.
 */
Template.showNotification.helpers({
        selectedDoc: function () {
            console.log("Selected doc helper", this);
            return Notifications.findOne(this._id);
        }
    }
);