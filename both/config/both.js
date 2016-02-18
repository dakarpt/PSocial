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

TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Notifications = new Tabular.Table({
    name: "Notification Messages",
    collection: Notifications,
    responsive: true,
    autoWidth: false,
    paging: false,
    limit: 10,
    bInfo: false,
    //deferRender: true,
    searching: false,
    createdRow: function (row, data, dataIndex) {
        //$('td', row).addClass(data.newstatus);
        console.log("row:", data);
        if (data.owner == Meteor.userId()) {
            console.log("Bad self not");
            $('td', row).remove();
        }
    },
    columns: [
        {
            data: 'icon',
            //title: 'Icon',
            createdCell: function (node, cellData, rowData) {
                $(node).html(Blaze.toHTMLWithData(Template.showIcon, {icon: cellData, _id: rowData._id}),
                    {
                        width: '40px',
                        orderable: false
                    })
            }
        },
        {
            data: "date",
            title: "Data",
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).format('D/M/YYYY HH:MM')
                } else {
                    return "Never";
                }
            }
        },
        {
            data: 'from_email',
            title: 'De:',
            width: "10%",
            createdCell: function (node, cellData, rowData) {
                $(node).html(Blaze.toHTMLWithData(Template.UsersMailBtn, {email: cellData, _id: rowData._id}),
                    {
                        //width: '40px',
                        orderable: true
                    })
            }
        },
        //{
        //    data: 'to',
        //    title: 'Para',
        //    createdCell: function (node, cellData, rowData) {
        //        $(node).html(Blaze.toHTMLWithData(Template.UsersMailBtn, { email: cellData}),
        //            {
        //                //width: '40px',
        //                orderable: false
        //            })
        //    }
        //},
        //{data: "from_email", title: "De:"},
        {data: "title", title: "Titulo"},
        //{data: "message", title: "Mensagem"},
        //{data: "read", title: "Leitura"},
        //{
        //    title: "Editar",
        //    tmpl: Meteor.isClient && Template.EditNotification
        //},
        //{
        //    data: '_id',
        //    title: 'Reply',
        //    createdCell: function (node, cellData, rowData) {
        //        $(node).html(Blaze.toHTMLWithData(Template.replyNotification, {_id: cellData}),
        //            {
        //                width: '40px',
        //                orderable: false
        //            })
        //    }
        //},
        //{
        //    data: '_id',
        //    title: 'Delete',
        //    createdCell: function (node, cellData, rowData) {
        //        $(node).html(Blaze.toHTMLWithData(Template.deleteNotification, {_id: cellData}),
        //            {
        //                //width: '40px',
        //                orderable: false
        //            })
        //    }
        //}
    ],
    extraFields: ['date', '_id', 'owner'],
    order: [[1, 'desc']],
    columnDefs: [
        {className: "col_center", targets: [0, 1]},
        {className: "col_left", targets: [3]},
        //{ className: "label label-default", targets: [ 2 ] }
    ],
    //aoColumnDefs: [
    //    { "bSortable": false, "sClass": "indexLeft", "aTargets": [ 0 ] },
    //    { "bSortable": false, "sClass": "indexRight", "aTargets": [ -1 ] }
    //],
    //stateSave: true
});