/**
 * Created by aramos on 06-11-2015.
 */
//Meteor.startup(function () {
//    Status.setTemplate('bootstrap3', {classes: 'alert-danger'});
//});

//Template.Filtros.helpers({
//    x: function () {
//        return Processos.find({}, {sort: {status: -1, name: 1}});
//    }
//});
//
//Template.Filtros.events({
//        'click ': function () {
//            //console.log(this);
//        }
//    }
//);

//changeFilter=function(e) {
//    cw(e);
//    Session.set("leaderFilter", { sort: { macro_nome: 1, name: e } });
//}
//
//Template.LogMessages.helpers({
//    LogMessages: function () {
//       return LogMessages.find({}, {limit: 20, sort: { timestamp: -1}});
//    }
//});
//
//LogMessages.helpers({
//    niceTime: function() {
//        cw("Timestampas");
//        return Utils.MyprettyDate(this.timestamp);
//    }
//});
//
//Template.home.events({
//    'click tbody > tr': function (event) {
//        var dataTable = $(event.target).closest('table').DataTable();
//        var rowData = dataTable.row(event.currentTarget).data();
//        var ID = Processos.findOne({ name: rowData.processo });
//        Session.set("selected_processo", ID);
//        //console.log(rowData.processo);
//    }
//});