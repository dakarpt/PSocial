/**
 * Created by aramos on 01-12-2015.
 */
if (Meteor.isServer)
    //getRanking = function () {
    //    return 0;
    //};

    Accounts.onCreateUser(function (options, user) {
        var d6 = function () {
            return Math.floor(Random.fraction() * 6) + 1;
        };
        user.dexterity = d6() + d6() + d6();
        if (options.profile)
            user.profile = options.profile;
        else
            user.profile = { picture: '/default-profile.png' };

        return user;
    });

getQueryVariable = function (link, variable) {
    var query = link;
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
};


pre_process_sms = function (link) {
    console.log("SERVER: pre process sms:", link);
    var mobile= getQueryVariable(link, "mobile");
    if (!mobile) {
        console.log("Cant find mobile in link");
        return "ERROR: Cant find mobile in link";
    }
    var item= getQueryVariable(link, "item");
    //var slot= Number(getQueryVariable(link, "slot")) || -1;
    var slot= -1;
    var smsText= getQueryVariable(link, "smsText");
    var dateadded= getQueryVariable(link, "dateadded");
    console.log("SERVER: Pre Processing sms: Mobile: %s, item: %s, slot: %s, Text: %s ", mobile, item, slot, smsText);
    //if (!smsinfo.findOne({ mobile: mobile, item: item, slot: slot, dateadded: dateadded})) {
        console.log("inserting: ", { mobile: mobile, item: item, slot: slot, smsText: smsText, dateadded: dateadded} );
        //smsinfo.insert({ mobile: mobile, item: item, slot: slot});
        Meteor.call("insertSms", { mobile: mobile, item: item, slot: slot, smsText: smsText, dateadded: dateadded}, function (err) {
            if (!err)
                return "SUCCESS"
            else
                return "FAIL"
        } );
    //}
    return "SUCCESS"
};

process_Server_smsinfo= function(info) {
    check(info, Match.Any);
    console.log("SERVER: Call process smsinfo:", info);
    var user=Meteor.users.findOne({ "profile.mobile": info.mobile });
    if (!user) {
        console.log("Unknown account: SMS from %s", info.mobile);
        return;
    }
    info.item = UserSession.get("confirm-itemID", user._id);
    var subtarefa = UserSession.get("confirm-subtarefaID", user._id);
    info.slot = UserSession.get("confirm-slotID", user._id) || -1;

    //info.slot = Number(info.slot) || -1;
    console.log("Found user:", user);
    console.log("Updating with:", info);
    var item = items.findOne({ _id: info.item });
    if (!item) {
        console.log("Unknown item:%s SMS from %s", info.item, info.mobile);
        return;
    }

    var subtarefas = item.subtarefas;
    var f;
    for ( f = 0; f < subtarefas.length; f++) {
        if ((subtarefas[f].tipo == "Donativos-sms") && (subtarefas[f].ids==subtarefa)) {
            for (var j=0; j<subtarefas[f].slots.length;j++) {
                if ((subtarefas[f].slots[j].num == info.slot)&& subtarefas[f].slots[j].owner.indexOf("empty.png") != -1 ) {
                    subtarefas[f].slots[j].owner = user._id;
                    Meteor.call('UpdateSlots', item._id, subtarefas[f].ids, subtarefas[f].slots);
                    return;
                }
            }
        }
    }
    // nao achou
    for ( f = 0; f < subtarefas.length; f++) {
        if (subtarefas[f].ids == subtarefa) {
            for (var j=0; j<=subtarefas[f].slots.length;j++) {
                if (subtarefas[f].slots[j].owner.indexOf("empty.png") != -1) {
                    subtarefas[f].slots[j].owner = user._id;
                    Meteor.call('UpdateSlots', item._id, subtarefas[f].ids, subtarefas[f].slots);
                    return;
                }
            }
        }
    }
};

//Roles.addUsersToRoles('hJZzwmr8kv9CeWymK', 'admin');

if (Meteor.isServer) Meteor.methods({
    'insertSms': function (info) {
        check(info, Match.Any);
        console.log("SERVER: insertSms: params: ", info);
        if (!info.slot)
            info.slot = -1;
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
        //console.log("Slots", slots);
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
