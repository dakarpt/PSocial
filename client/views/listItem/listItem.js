/**
 * Created by aramos on 27-01-2016.
 */
Template.listItem.helpers({
        selectedDoc: function () {
            console.log("Selected doc helper", this);
            return items.findOne(this._id).picture;
        }
    }
);