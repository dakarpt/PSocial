/**
 * Created by aramos on 29-10-2015.
 */

toogleLanguage = function () {
    if (TAPi18next.lng() == "pt")
        return "en"
    else
        return "pt"
};

Template.languageSelection.helpers({
    helper: toogleLanguage()
});

Template.languageSelection.events({
    'click': function (event) {
        var lang = TAPi18next.lng();
        var nextLang = toogleLanguage();
        console.log("click lang: now " + lang + " changing to " + nextLang);
        TAPi18n.setLanguage(nextLang);
        T9n.setLanguage(nextLang);
        Session.set("language", nextLang);
        event.preventDefault();
        event.stopPropagation();
        return false;
    }
});