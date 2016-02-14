/**
 * Created by aramos on 27-01-2016.
 */
Template.showItem.events({
    'click .detalhes': function (e) {
        console.log("Item click", this, e);
        //Router.go("/listItem/" + this._id);
        //Session.set("subtarefa", subtarefaID);
        Session.set("item", this._id);
        //var Asubtarefas = this.subtarefas;
        //for (var f=0; f<Asubtarefas.length; f++) {
        //    Session.set("subtarefa:" + this._id + "|" + Asubtarefas.ids + "|estado", subtarefaID);
        //}
        //Session.set("slots", itemID);
        if (e.target.attributes.ids===undefined)
            return;
        console.log("Slot clicked=%s subtarefa= %s item=%s", e.target.attributes.ids.value, e.target.parentElement.attributes.ids.value, e.target.parentElement.parentElement.attributes.ids.value)
        var slotID = e.target.attributes.ids.value;
        var subtarefaID = e.target.parentElement.attributes.ids.value;
        var itemID = e.target.parentElement.parentElement.attributes.ids.value;
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
        //console.log("Slot Item click", this, e);
    }
});