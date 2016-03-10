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

GetSlots = function (itemId, subtarefaId) {
    //if (!isAdmin(Meteor.userId())) {
    //    throw new Meteor.Error("not-authorized");
    //}
    check(itemId, String);
    check(subtarefaId, String);
    //check(TIPO, Number);
    cw("ClientSide: GetSlots: Running...");
    var subtarefas = items.findOne({_id: itemId, subtarefas: {$elemMatch: {ids: subtarefaId}}})['subtarefas'];
    for (var f = 0; f < subtarefas.length; f++) {
        if (subtarefas[f].ids == subtarefaId) {
            //console.log("Found slots", subtarefas[f].slots);
            return {
                slots: subtarefas[f].slots,
                tipo: subtarefas[f].tipo,
                unidade: subtarefas[f].unidade
                //smsengine: subtarefas[f].smsengine
            }
        }
    }
    console.log("No slots found!");
};


//Manage TodoList

//Alreday done

//Done Retirei o status / AR Melhorar a info do status, com min time e remover da entrada
//done Alterar para o owner em vez da url se for sem object no slot - ongoing
//done Transformar o slot num objecto - ongoing
//Done Complementar o profile com morada e telefone, depois do update sair para o listitems
//done Resolver o issue do novo user sem profile, usa as iniciais de for o owner em vez de url
//done onsubmit hooks
//done ranking na lista de projetos com autoupdate on save profile
//done por o footer dos panels blue info
//done limites min e max das quantidades

//Structural
//TODO rever permissoes das collections
//TODO passar updates e gets para server side com verificação
//TODO crop do avatar, multicrop das pics

//Must Have
//TODO onsubmit dos forms voltar ao inicio, delete do project
//done altera o processo de selecao para todos os tipos, confirmação no slot
//done altera o processo de selecao para donativos, confirmação no slot - ongoing
//TODO update slot, confirmar as alterações por causa da modal
//TODO rever o apagar not da mynots

//Nice to have
//TODO pensar nas Alterações das tarefas, quantidade
//TODO show profile, mini info
//TODO onhover nos slots - info do participante com link para mini profile
//TODO onsuccess show notification marcar como lida.
//TODO icon para read and unread notifications
//TODO criar o reply e delete
//TODO lista de notificacoes com crud - rever o conceito
//TODO diminuir as colunas dos forms, tipo quantidade


