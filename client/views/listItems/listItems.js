/**
 * Created by aramos on 27-01-2016.
 */
Template.showSmallItem.events({
    'click .detalhes': function (e) {
        console.log("Item click", this, e);
        UserSession.set("item-clicked", this._id);
        console.log("/listItem/" + this._id);
        Router.go("/listItem/" + this._id);
        e.preventDefault();
    }
});