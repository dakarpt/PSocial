/**
 * Created by aramos on 09-12-2015.
 */
b64ToBlob = function (b64Data, contentType, sliceSize) {
    var byteArray, byteArrays, byteCharacters, byteNumbers, i, offset, slice;
    sliceSize = sliceSize || 512;
    byteCharacters = atob(b64Data);
    byteArrays = [];
    offset = 0;
    while (offset < byteCharacters.length) {
        slice = byteCharacters.slice(offset, offset + sliceSize);
        byteNumbers = (function () {
            var j, ref, results;
            results = [];
            for (i = j = 0, ref = slice.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
                results.push(slice.charCodeAt(i));
            }
            return results;
        })();
        byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
        offset += sliceSize;
    }
    return new Blob(byteArrays, {
        type: contentType
    });
};

HandleResize = function (file) {
    //var uploader = new Slingshot.Upload("avatars");
    //var file = event.currentTarget.files[0];
    //console.log("t:", t);
    //var data=null;
    //return data = processImage(file, 100, 100, 0.75, function(data, t) {
    //    var match = /^data:([^;]+);base64,(.+)$/.exec(data);
    //    var name = file.name;
    //    var type = match[1];
    //    var b64 = match[2];
    //    var blob = b64ToBlob(b64, type);
    //    blob.name = name;
    //    console.log("Blob:", blob);
    //    return ProfilePictures.insert(blob);
    //img = new FS.File(blob);
    //console.log("File:", img);
    //result=blob;
    //return blob;
    //uploader.send(blob, function (error, downloadUrl) {
    //    if (error) {
    //        console.error('Error uploading: ', uploader.xhr.response);
    //        alert(error);
    //        // Handle the error
    //    }
    //    else {
    //        // Put this in a method
    //        Meteor.users.update( {_id: Meteor.userId()} , {$set: {"profile.image": downloadUrl}});
    //        alert('Image uploaded and saved');
    //    }
    //});
    //});
    //console.log("Data:", data);
    //console.log("result:", result);
    //return result;
    //return processImage(file, 100, 100, function(data) {
    //var img;
    //img = new FS.File(data);
    //img.metadata = {
    //    date: Date.now(),
    //    ownerId: Meteor.userId()
    //};
    //return Images.insert(img, function(err, fileObj) {
    //    if (err) {
    //        return console.log(err);
    //    }
    //});
    //console.log("img", img);
    //return img;
    //});
    //return processImage(file, 100, 100, function (data) {
    //    img = new FS.File(data)
    //    console.log("img:", img);
    //   return img;
    //});
    //console.log("data:", data);
    //return data;
    //return Resizer.resize(file, {width: 100, height: 100, cropSquare: true}, function (err, file) {
    //    return file;
    //});
};


//var handleTransformErrors = function (storageName, transformFunction) {
//    return function (file, readStream, writeStream) {
//        var handleError = function (error) {
//            if (_.isObject(error) && error.errorType === 'Meteor.Error') {
//                error = _.pick(error, 'error', 'reason', 'details');
//            }
//            console.log('handleTransformError', error);
//            file.copies[storageName].error = error;
//            writeStream.emit('error', error);
//            readStream.unpipe(writeStream);
//            writeStream.emit('stored', {
//                fileKey: '',
//                size: 0,
//                storedAt: new Date()
//            });
//        };
//        try {
//            transformFunction(file, readStream, writeStream, handleError);
//        } catch (error) {
//            handleError(error);
//        }
//    };
//};