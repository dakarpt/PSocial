/**
 * Created by aramos on 27-01-2016.
 */
Template.showItem.events({
    'click .media-body': function (e) {
        console.log("Item click", this, e);
        console.log("Slot clicked=%s subtarefa= %s item=%s", e.target.attributes.id.value, e.target.parentElement.attributes.id.value, e.target.parentElement.parentElement.attributes.id.value)
        //Router.go("/listItem/" + this._id);
        var slotID = e.target.attributes.id.value;
        var subtarefaID = e.target.parentElement.attributes.id.value;
        var itemID = e.target.parentElement.parentElement.attributes.id.value;
        var slots = GetSlots(itemID, subtarefaID);
        if (slots[slotID] == "empty.png") {
            var picID = ProfilePictures.findOne(Meteor.users.findOne(Meteor.userId())['profile']['picture']);
            //var picURL = picID.url();
            slots[slotID] = picID.url();
            Meteor.call('UpdateSlots', itemID, subtarefaID, slots);
        } else
            console.log("Slot not empty");
    }
});

Template.showSlot.events({
    'click .slot': function (e) {
        console.log("Slot Item click", this, e);
    }
});