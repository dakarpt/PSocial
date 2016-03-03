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

//Blaze._allowJavascriptUrls();

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

//Done Retirei o status / AR Melhorar a info do status, com min time e remover da entrada
//done Alterar para o owner em vez da url se for sem object no slot - ongoing
//done Transformar o slot num objecto - ongoing
//Done Complementar o profile com morada e telefone, depois do update sair para o listitems
//done Resolver o issue do novo user sem profile, usa as iniciais de for o owner em vez de url
//TODO lista de notificacoes com crud - rever o conceito
//done limites min e max das quantidades
//TODO diminuir as colunas dos forms, tipo quantidade
//TODO onsubmit dos forms voltar ao inicio, o do create, delete do project tb
//TODO rever permissoes
//TODO passar updates e gets para server side.
//TODO crop do avatar
//done onsubmit hooks
//done ranking na lista de projetos com autoupdate on save profile
//done por o footer dos panels blue info

