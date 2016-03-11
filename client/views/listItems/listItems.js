/**
 * Created by aramos on 27-01-2016.
 */
Template.showSmallItem.events({
    'click .detalhes': function (e) {
        //console.log("Item click", this, e);
        console.log("Item click", e.target.href);

        if (e.target.href) {
            if (e.target.href.indexOf("afModal") != -1) {
                console.log("Clicked del proj");
                e.preventDefault();
            }
        } else {
            UserSession.set("item-clicked", this._id);
            console.log("/listItem/" + this._id);
            Router.go("/listItem/" + this._id);
            e.preventDefault();
        }
    }
});