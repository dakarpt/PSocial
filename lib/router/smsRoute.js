///**
// * Created by aramos on 02-03-2016.
// */
//Router.route('/smsinfo', function () {
//    body = this.request.body;
//    console.log(this.request);
//    console.log(this.params.query);
//    // this.response.write(body);
//    this.response.end("Call served");
//}, {where: 'server'});
//
//Router.route('/smsinfo', function () {
//    var req = this.request;
//    var res = this.response;
//    console.log("Request: smsinfo: ",this.request);
//    res.end('hello from the server\n');
//}, {where: 'server'});
//
////Router.map(function () {
////    this.route('/smsinfo', {
////        where: 'server',
////        action: function () {
////            console.log(this.request.query);
////        }
////    });
////});