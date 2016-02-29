/**
 * Created by aramos on 27-01-2016.
 */
Template.showSmallItem.events({
    'click .detalhes': function (e) {
        console.log("Item click", this, e);
        //Router.go("/listItem/" + this._id);
        //Session.set("subtarefa", subtarefaID);
        Session.set("item-clicked", this._id);
        console.log("/listItem/" + this._id);
        Router.go("/listItem/" + this._id);
        e.preventDefault();
        //var Asubtarefas = this.subtarefas;
        //for (var f=0; f<Asubtarefas.length; f++) {
        //    Session.set("subtarefa:" + this._id + "|" + Asubtarefas.ids + "|estado", subtarefaID);
        //}
        //Session.set("slots", itemID);
        //if (e.target.attributes.ids === undefined) {
        //    console.log("Click nao foi num slot", e);
        //    return;
        //}
        //console.log("Slot clicked=%s subtarefa= %s item=%s", e.target.attributes.ids.value, e.target.parentElement.attributes.ids.value, e.target.parentElement.parentElement.attributes.ids.value)
        //var slotID = e.target.attributes.ids.value;
        //var subtarefaID = e.target.parentElement.attributes.ids.value;
        //var itemID = e.target.parentElement.parentElement.attributes.ids.value;
        //var slots = GetSlots(itemID, subtarefaID, false);
        //if (slots[slotID].indexOf("empty.png") != -1) {
        //    var user = Meteor.users.findOne(Meteor.userId());
        //    if ((user.profile) && (user.profile.picture)) {
        //        var picID = ProfilePictures.findOne(user.profile.picture);
        //        //var picURL = picID.url();
        //        slots[slotID] = picID.url();
        //    } else
        //        slots[slotID] = "/default-profile.png";
        //    Meteor.call('UpdateSlots', itemID, subtarefaID, slots);
        //} else {
        //    console.log("Slot not empty");
        //    user = Meteor.users.findOne(Meteor.userId());
        //    if ((user.profile) && (user.profile.picture)) {
        //        picID = ProfilePictures.findOne(user.profile.picture);
        //        //var picURL = picID.url();
        //        console.log("Pc do slot: %s", slots[slotID]);
        //        console.log("Pc do user: %s", picID.url());
        //        var slotPic = slots[slotID];
        //        var userpic = picID.url();
        //        var RslotPic = slotPic.split("?");
        //        var Ruserpic = userpic.split("?");
        //        console.log("Pc do slotn: %s", RslotPic[0]);
        //        console.log("Pc do usern: %s", Ruserpic[0]);
        //        /// comp
        //        if (RslotPic[0] != Ruserpic[0]) {
        //            return
        //        }
        //    } else if (slots[slotID] != "/default-profile.png") {
        //        return
        //    }
        //    //if (slots[slotID] == "")
        //    Session.set("confirm-itemID", itemID)
        //    Session.set("confirm-subtarefaID", subtarefaID)
        //    Session.set("confirm-slotID", slotID)
        //    Modal.show('confirmModal');
        //    //    , {},{
        //    //    backdrop: 'static',
        //    //    keyboard: false,
        //    //});
        //}
    }
});

//Template.showSlot.events({
//    'click .slot': function (e) {
//        //console.log("Slot Item click", this, e);
//    }
//});

//Template.confirmModal.events({
//    'click #delete': function (e) {
//        console.log("Slot Item confirm retirar, event:", e);
//        var itemID = Session.get("confirm-itemID");
//        var subtarefaID = Session.get("confirm-subtarefaID");
//        var slotID = Session.get("confirm-slotID");
//        Modal.hide("confirmModal");
//        var slots = GetSlots(itemID, subtarefaID, false);
//        var tipo = GetSlots(itemID, subtarefaID, true);
//        cw("Tipo de slot:", tipo);
//        slots[slotID] = tipo + "-empty.png";
//        //var picID = ProfilePictures.findOne(Meteor.users.findOne(Meteor.userId())['profile']['picture']);
//        //var picURL = picID.url();
//        //slots[slotID] = picID.url();
//        Meteor.call('UpdateSlots', itemID, subtarefaID, slots);
//    }
//});
