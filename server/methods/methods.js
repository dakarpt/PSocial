/**
 * Created by aramos on 01-12-2015.
 */

//Roles.addUsersToRoles('hJZzwmr8kv9CeWymK', 'admin');
if (Meteor.isServer) Meteor.methods({
    'UpdateSlots': function (itemId, subtarefaId, slots) {
        if (!isAdmin(Meteor.userId())) {
            throw new Meteor.Error("not-authorized");
        }
        check(itemId, String);
        check(subtarefaId, String);
        check(slots, Array);
        cw("ServerSide: UpdateSlots: Updating...");
        items.update({
            _id: itemId,
            subtarefas: {$elemMatch: {ids: subtarefaId}}
        }, {$set: {"subtarefas.$.slots": slots}})
    },
    'GetSlots': function (itemId, subtarefaId) {
        if (!isAdmin(Meteor.userId())) {
            throw new Meteor.Error("not-authorized");
        }
        check(itemId, String);
        check(subtarefaId, String);
        cw("ServerSide: GetSlots: Running...");
        var subtarefas = items.findOne({_id: itemId, subtarefas: {$elemMatch: {ids: subtarefaId}}})['subtarefas'];
        for (var f = 0; f < subtarefas.length; f++) {
            if (subtarefas[f].ids == subtarefaId) {
                console.log("slots", subtarefas[f].slots);
                return subtarefas[f].slots;
            }
        }
    }
});
//    Processos.after.update(function (userId, doc, fieldNames, modifier, options) {
//        cw("ServerSide: Changed Processo: " + this.previous._id);
//        //cw(this.previous);
//        //cw(doc);
//        if (doc.status != this.previous.status) {
//            var obj = {
//                oldstatus: this.previous.status,
//                newstatus: doc.status,
//                tipo: "AUTO",
//                processoOwner: this.previous._id,
//                processo: this.previous.name,
//                message: "Status changed from " + this.previous.status + " to " + doc.status
//            };
//            //cw(obj);
//            cw("IsUser:" + isUser(Meteor.userId()));
//            cw("IsAdmin:" + isAdmin(Meteor.userId()));
//            if (isAdmin(Meteor.userId()))
//                Meteor.call("InsertLog", obj);
//            else
//                cw("Not admin, ignored InsertLog");
//        }
//    }, {fetchPrevious: true});
//}

