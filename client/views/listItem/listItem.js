/**
 * Created by aramos on 27-01-2016.
 */
Template.showItem.events({
    'click .detalhes': function (e) {
        //console.log("Item click", this, e);
        //Session.set("item-clicked", this._id);
        if (e.target.attributes.ids === undefined) {
            console.log("Click nao foi num slot", e)
            return;
        }
        console.log("Slot clicked=%s subtarefa= %s item=%s", e.target.attributes.ids.value, e.target.parentElement.attributes.ids.value, e.target.parentElement.parentElement.attributes.ids.value)
        var slotID = e.target.attributes.ids.value;
        var subtarefaID = e.target.parentElement.attributes.ids.value;
        var itemID = e.target.parentElement.parentElement.attributes.ids.value;
        var res = GetSlots(itemID, subtarefaID);
        var tipo = res.tipo;
        var slots = res.slots;
        var unidade = res.unidade;
        if (tipo=="Donativos-sms")
            var smsengine=1;
        else
            var smsengine=0;
        console.log("TIPO: %s", tipo, smsengine);
        //var smsengine = res.smsengine;
        //var smsengine = 1;
        if (slots[slotID].owner.indexOf("empty.png") != -1) {
            UserSession.set("confirm-itemID", itemID);
            UserSession.set("confirm-subtarefaID", subtarefaID);
            UserSession.set("confirm-slotID", slotID);
            if (tipo != "Donativos-sms")
                Modal.show('confirmModalSlot', {unidade: unidade});
            else
                Modal.show('confirmModalSlotDonativos', {unidade: unidade, smsengine: smsengine});
            //var user = Meteor.users.findOne(Meteor.userId());
            //if ((user.profile) && (user.profile.picture)) {
            //    var picID = ProfilePictures.findOne(user.profile.picture);
            //    //var picURL = picID.url();
            //    slots[slotID].owner = Meteor.userId();
            //    slots[slotID].timestamp = new Date();
            //} else
            //    slots[slotID].owner = "/default-profile.png";
            //slots[slotID].timestamp = new Date();
            //Meteor.call('UpdateSlots', itemID, subtarefaID, slots);

        } else {
            console.log("Slot not empty");
            if (tipo == "Donativos-sms") {
                return
            }
            user = Meteor.users.findOne(Meteor.userId());
            if ((user.profile) && (user.profile.picture)) {
                //picID = ProfilePictures.findOne(user.profile.picture);
                //var slotPic = slots[slotID].owner;
                if (slots[slotID].owner != Meteor.userId()) {
                    return
                }
            } else if (slots[slotID] != "/default-profile.png") {
                return
            }
            //if (slots[slotID] == "")
            Session.set("confirm-itemID", itemID);
            Session.set("confirm-subtarefaID", subtarefaID);
            Session.set("confirm-slotID", slotID);
            Modal.show('confirmModal');
        }
    }
});

Template.confirmModal.events({
    'click #delete': function (e) {
        console.log("Slot Item confirm retirar, event:", e);
        var itemID = UserSession.get("confirm-itemID");
        var subtarefaID = UserSession.get("confirm-subtarefaID");
        var slotID = UserSession.get("confirm-slotID");
        Modal.hide("confirmModal");
        var res = GetSlots(itemID, subtarefaID);
        var slots = res.slots;
        var tipo = res.tipo;
        console.log("Tipo de slot:", tipo);
        slots[slotID].owner = "/" + tipo + "-empty.png";
        slots[slotID].timestamp = new Date();
        Meteor.call('UpdateSlots', itemID, subtarefaID, slots);
    }
});

Template.confirmModalSlot.events({
    'click #confirm': function (e) {
        console.log("Slot Item confirm add, event:", e);
        var itemID = UserSession.get("confirm-itemID");
        var subtarefaID = UserSession.get("confirm-subtarefaID");
        var slotID = UserSession.get("confirm-slotID");
        Modal.hide("confirmModalSlot");
        var res = GetSlots(itemID, subtarefaID);
        var slots = res.slots;
        var tipo = res.tipo;
        var unidade = res.unidade;
        console.log("Tipo de slot:%s, unidade: %s", tipo, unidade);

        var user = Meteor.users.findOne(Meteor.userId());
        if ((user.profile) && (user.profile.picture)) {
            slots[slotID].owner = Meteor.userId();
            slots[slotID].timestamp = new Date();
        } else {
            console.log("WARN: No profile");
            slots[slotID].owner = "/default-profile.png";
        }
        slots[slotID].timestamp = new Date();
        Meteor.call('UpdateSlots', itemID, subtarefaID, slots);
    }
});

Template.confirmModalSlotDonativos.events({
    'click #confirm': function (e) {
        console.log("Slot Item confirm add Donativos, event:", e);
        var itemID = UserSession.get("confirm-itemID");
        var subtarefaID = UserSession.get("confirm-subtarefaID");
        var slotID = UserSession.get("confirm-slotID");
        Modal.hide("confirmModalSlotDonativos");
        var res = GetSlots(itemID, subtarefaID);
        var slots = res.slots;
        var tipo = res.tipo;
        var unidade = res.unidade;
        console.log("Tipo de slot:%s, unidade: %s", tipo, unidade);

        var user = Meteor.users.findOne(Meteor.userId());
        if ((user.profile) && (user.profile.picture)) {
            slots[slotID].owner = Meteor.userId();
            slots[slotID].timestamp = new Date();
        } else {
            console.log("WARN: No profile");
            slots[slotID].owner = "/default-profile.png";
        }
        slots[slotID].timestamp = new Date();
        Meteor.call('UpdateSlots', itemID, subtarefaID, slots);
    },
    'click #wish': function (e) {
        Modal.hide("confirmModalSlotDonativos");
    }
});

Template.showItem.helpers({
    getTitle: function () {
        console.log("showItem helper", this);
        return "Quer apagar o Projeto: " + this.nome;
    }
});

//
//AutoForm.hooks({
//    deleteProject: {
//        onSubmit: function (insertDoc, updateDoc, currentDoc) {
//            //if (customHandler(insertDoc)) {
//            //    this.done();
//            //} else {
//            //    this.done(new Error("Submission failed"));
//            console.log("Calling onSubmit deleteProject");
//            Router.go("/listItems");
//            this.done();
//            return true;
//        }
//    }
//});