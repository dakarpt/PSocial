/**
 * Created by aramos on 23-10-2015.
 */

Template.registerHelper("iconOptions", function () {
    return [
        {label: "ThumbsUp", value: "thumbs-up"},
        {label: "Bolt", value: "bolt"},
        {label: "Circle", value: "circle-o"},
        {label: "Other", value: "other"}
    ];
});