goodName = function (id) {
    if (!id) return "A user";

    var user = Meteor.users.findOne(id);

    if (user.username) {
        return user.username;
    }
    if ((user.profile) && (user.profile.firstName) && (user.profile.lastName)) {
        return user.profile.firstName + " " + user.profile.lastName;
    }
    if ((user.profile) && (user.profile.firstName)) {
        return user.profile.firstName;
    }
    if (user.emails[0].address) {
        return user.emails[0].address;
    }
    return "A user";
};

Blaze._allowJavascriptUrls();

Presence.state = function () {

    if (Meteor.userId()) {
        if (Router)
            if (Router.current())
                return {
                    currentRoomId: Router.current().url
                };
    }
    return {
        currentRoomId: "null"
    };
};

GetSlots = function (itemId, subtarefaId) {
    if (!isAdmin(Meteor.userId())) {
        throw new Meteor.Error("not-authorized");
    }
    check(itemId, String);
    check(subtarefaId, String);
    cw("ClientSide: GetSlots: Running...");
    var subtarefas = items.findOne({_id: itemId, subtarefas: {$elemMatch: {_id: subtarefaId}}})['subtarefas'];
    for (var f = 0; f < subtarefas.length; f++) {
        if (subtarefas[f]._id == subtarefaId) {
            //console.log("Found slots", subtarefas[f].slots);
            return subtarefas[f].slots;
        }
    }
    console.log("No slots found!");
};
//NTH AR Melhorar a info do status, com min time e remover da entrada
//FIXME AR Transformar o slot num objecto
//TODO Complementar o profile com morada e telefone
//TODO Resolver o issue do novo user sem profile

