/**
 * Created by aramos on 24-02-2016.
 */
items.before.insert(function(userId, doc) {
    console.log("Before insert doc:", doc);
    //return;
    var subtarefas = doc.subtarefas;
    var slot= null;
    for (var f=0; f<subtarefas.length; f++) {
        var curSlot = subtarefas[f].slots;
        if ((curSlot |= undefined) && (curSlot.length==0))  {
            console.log("Already has slots", curSlot);
            continue;
        }
        console.log("Sub tarefa #%d", f, subtarefas[f]);
        console.log("Sub tarefa #%d duracao:%d tipo:%s", f, subtarefas[f].duracao, subtarefas[f].tipo);
        var myslots = [];
        for (var j=0; j<subtarefas[f].duracao; j++) {
            slot = {
                num: j,
                ids: Random.id(),
                owner: "/" + subtarefas[f].tipo + "-empty.png",
                timestamp: new Date()
            };
            myslots.push(slot);
        }
        console.log("created slots: ", myslots);
        subtarefas[f].slots = myslots;
    }
});

items.before.update(function (userId, doc, fieldNames, modifier, options) {
    console.log("ori e new fields #%d:", fieldNames.length, fieldNames );
    console.log("ori e new", doc);
    console.log("new", modifier);
    if (fieldNames.length == 2) {
        console.log("Items: Before update: Just subtarefas & timestamp, leaving");
        return;
    }
    var subtarefas = doc.subtarefas;
    for (var f=0; f<subtarefas.length; f++) {
        var curSlot = subtarefas[f].slots;
        if ((curSlot != undefined) && (curSlot.length > 0)) {
            console.log("Already has slots", curSlot);
            //curSlot.timestamp = Date.now();
            modifier.$set.subtarefas[f].slots = curSlot;
        } else {

        }
    }
    if (modifier.$set.subtarefas.length > doc.subtarefas.length) {
        console.log("new tarefa old:%d new:%d", doc.subtarefas.length, modifier.$set.subtarefas.length );
        subtarefas = modifier.$set.subtarefas;
        for (var f=doc.subtarefas.length; f<modifier.$set.subtarefas.length; f++) {
            //var curSlot = subtarefas[f].slots;
            //if ((curSlot |= undefined) && (curSlot.length==0))  {
            //    console.log("Already has slots", curSlot);
            //    continue;
            //}
            console.log("Sub tarefa #%d", f, subtarefas[f]);
            console.log("Sub tarefa #%d duracao:%d tipo:%s", f, subtarefas[f].duracao, subtarefas[f].tipo);
            var myslots = [];
            for (var j=0; j<subtarefas[f].duracao; j++) {
                slot = {
                    num: j,
                    ids: Random.id(),
                    owner: "/" + subtarefas[f].tipo + "-empty.png",
                    timestamp: new Date()
                };
                myslots.push(slot);
            }
            console.log("created slots: ", myslots);
            modifier.$set.subtarefas[f].slots = myslots;
        }





        //var myslots = [];
        //var newtarefas = modifier.$set.subtarefas;
        //for (var j=doc.subtarefas.length-1; j<newtarefas[f].duracao; j++) {
        //    slot = {
        //        num: j,
        //        ids: Random.id(),
        //        owner: "/" + subtarefas[f].tipo + "-empty.png"
        //        //,timestamp: Date.now()
        //    };
        //    myslots.push(slot);
        //}
        //console.log("created slots: ", myslots);
        //modifier.$set.subtarefas[f].slots = myslots;
    }
    console.log("moded:" , modifier)

});