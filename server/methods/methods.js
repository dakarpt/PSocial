/**
 * Created by aramos on 01-12-2015.
 */
//if (Meteor.isServer)
//    Accounts.onCreateUser(function (options, user) {
//        var d6 = function () {
//            return Math.floor(Random.fraction() * 6) + 1;
//        };
//        user.dexterity = d6() + d6() + d6();
//        // We still want the default hook's 'profile' behavior.
//        if (options.profile)
//            user.profile = options.profile;
//        //else user.profile = { }
//        return user;
//    });

process_Server_smsinfo= function(info) {
    console.log("SERVER: Call process smsinfo:", info);
    var user=Meteor.users.findOne({ "profile.mobile": "966598860" });
    info.slot = Number(info.slot);
    console.log("Found user:", user);
    console.log("Updating with:", { _id: info.item, subtarefas: {$elemMatch: {tipo:"Donativos",slots: {$elemMatch: { num:info.slot } }}}}, {$set: {"slots.$.owner": user._id}});

    //items.update({ _id: info.item, subtarefas: {$elemMatch: {tipo:"Donativos",slots: {$elemMatch: { num:info.slot } }}}}, {$set: {"slots.$.owner": user._id}}, function (err) {
    //    if (err)
    //        console.log("ERRO no UPdate", err);
    //});
};

//Roles.addUsersToRoles('hJZzwmr8kv9CeWymK', 'admin');
if (Meteor.isServer) Meteor.methods({
    'insertSms': function (info) {
        check(info, Match.Any);
        console.log("SERVER: insertSms: params: ", info);
        if (!smsinfo.findOne(info)) {
            smsinfo.insert(info);
            console.log("Server: Inserting ", info);
            process_Server_smsinfo(info);
        }
    },
    'UpdateSlots': function (itemId, subtarefaId, slots) {
        if (!isUser(Meteor.userId())) {
            throw new Meteor.Error("not logged in");
        }
        check(itemId, String);
        check(subtarefaId, String);
        check(slots, Match.Any);
        cw("ServerSide: UpdateSlots: Updating...");
        console.log("Slots", slots);
        items.update({
            _id: itemId,
            subtarefas: {$elemMatch: {ids: subtarefaId}}
        }, {$set: {"subtarefas.$.slots": slots}})
    },
    //'GetSlots': function (itemId, subtarefaId) {
    //    if (!isUser(Meteor.userId())) {
    //        throw new Meteor.Error("not logged in");
    //    }
    //    check(itemId, String);
    //    check(subtarefaId, String);
    //    cw("ServerSide: GetSlots: Running...");
    //    var subtarefas = items.findOne({_id: itemId, subtarefas: {$elemMatch: {ids: subtarefaId}}})['subtarefas'];
    //    for (var f = 0; f < subtarefas.length; f++) {
    //        if (subtarefas[f].ids == subtarefaId) {
    //            console.log("slots", subtarefas[f].slots);
    //            return subtarefas[f].slots;
    //        }
    //    }
    //}
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

