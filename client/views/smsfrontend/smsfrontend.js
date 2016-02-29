/**
 * Created by aramos on 29-02-2016.
 */
Template.smsfrontend.onRendered(
    function () {
        //console.log(this);
        process_smsinfo({ link: this.data.link });
        //Router.go("/listItems");
    }
);