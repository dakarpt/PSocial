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

};
