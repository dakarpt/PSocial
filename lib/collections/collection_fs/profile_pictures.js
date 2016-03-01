/**
 * Created by aramos on 09-12-2015.
 */
this.ProfilePictures = new FS.Collection("profilePictures", {
    stores: [
        new FS.Store.GridFS("images", {
            transformWrite: function (fileObj, readStream, writeStream) {
                //if (gm.isAvailable) {
                //    return gm(readStream, fileObj.name()).autoOrient().stream().pipe(writeStream);
                //} else {
                //console.log("images", fileObj);
                //var scaledImage = loadImage.scale(
                //    fileObj, // img or canvas element
                //    {maxWidth: 100}
                //);
                return readStream.pipe(writeStream);
                //}
            }
        }), new FS.Store.GridFS("thumbs", {
            transformWrite: function (fileObj, readStream, writeStream) {
                console.log("THUMBS", fileObj);
                //var scaledImage = loadImage.scale(
                //    fileObj, // img or canvas element
                //    {maxWidth: 100}
                //);
                //if (gm.isAvailable) {
                //    size = {
                //        width: 100,
                //        height: 100
                //    };
                //    return gm(readStream, fileObj.name()).autoOrient().resize(size.width + "^>", size.height + "^>").gravity("Center").extent(size.width, size.height).stream().pipe(writeStream);
                //} else {
                return readStream.pipe(writeStream);
                //}
            }
        })
    ],
    filter: {
        allow: {
            contentTypes: ['image/*']
        }
    }
});