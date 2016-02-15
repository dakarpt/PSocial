/**
 * Created by aramos on 02-12-2015.
 */

//if (Meteor.isClient)  {
//    $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
//        options.async = true;
//    });
//}

isAdmin = function isAdmin(id) {
    return Roles.userIsInRole(id, "admin")
};

isUser = function (id) {
    return (id === Meteor.userId());
};

cw = function (valor) {
    console.log(valor);
};

//TabularTables = {};
//
//Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);
//
//TabularTables.LogMessages = new Tabular.Table({
//    name: "Log MEssages",
//    collection: LogMessages,
//    createdRow: function( row, data, dataIndex ) {
//        $('td', row).addClass(data.newstatus);
//    },
//    columns: [
//        {data: "timestamp", title: "Data/hora"},
//        {data: "oldstatus", title: "Antes"},
//        {data: "newstatus", title: "Depois"},
//        {data: "processo", title: "Processo"},
//        {data: "message", title: "Mensagem"}
//    ],
//    extraFields: ['timestamp'],
//    order: [[ 0, 'desc' ]],
//    columnDefs: [
//        { className: "col_center", targets: [ 1,2,3 ] }
//    ]
//});