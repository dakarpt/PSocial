AutoForm.debug();


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

GetSlots = function (itemId, subtarefaId, TIPO) {
    //if (!isAdmin(Meteor.userId())) {
    //    throw new Meteor.Error("not-authorized");
    //}
    check(itemId, String);
    check(subtarefaId, String);
    check(TIPO, Boolean);
    cw("ClientSide: GetSlots: Running...");
    var subtarefas = items.findOne({_id: itemId, subtarefas: {$elemMatch: {ids: subtarefaId}}})['subtarefas'];
    for (var f = 0; f < subtarefas.length; f++) {
        if (subtarefas[f].ids == subtarefaId) {
            //console.log("Found slots", subtarefas[f].slots);
            if (!TIPO) {
                console.log("returning slots: ", subtarefas[f].slots);
                return subtarefas[f].slots;
            } else {
                console.log("returning tipo: ", subtarefas[f].tipo);
                return subtarefas[f].tipo;
            }
        }
    }
    console.log("No slots found!");
};

process_smsinfo = function (info) {
    console.log("Processing sms info:", info);
    var mobile= getQueryVariable(info.link, "mobile");
    if (!mobile) {
        console.log("Cant find mobile in link");
        return;
    }
    var item= getQueryVariable(info.link, "item");
    var slot= Number(getQueryVariable(info.link, "slot")) || -1;
    var smsText= getQueryVariable(info.link, "smsText");
    var dateadded= getQueryVariable(info.link, "dateadded");
    console.log("Mobile: %s, item: %s, slot: %s, Text: %s ", mobile, item, slot, smsText);
    if (!smsinfo.findOne({ mobile: mobile, item: item, slot: slot, dateadded: dateadded})) {
        console.log("inserting: ", { mobile: mobile, item: item, slot: slot, smsText: smsText, dateadded: dateadded} );
        //smsinfo.insert({ mobile: mobile, item: item, slot: slot});
        Meteor.call("insertSms", { mobile: mobile, item: item, slot: slot, smsText: smsText, dateadded: dateadded} );
    }
    return info;
};

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

//Done Retirei o status / AR Melhorar a info do status, com min time e remover da entrada
//FIXME Alterar para o owner em vez da url se for sem object no slot - ongoing
//FIXME Transformar o slot num objecto - ongoing
//Done Complementar o profile com morada e telefone, depois do update sair para o listitems
//done Resolver o issue do novo user sem profile, usa as iniciais de for o owner em vez de url
//TODO lista de notificacoes com crud - rever o conceito
//done limites min e max das quantidades
//TODO diminuir as colunas dos forms, tipo quantidade
//TODO onsubmit dos forms voltar ao incio, o do delete do project tb
//done por o footer dos panels blue info

