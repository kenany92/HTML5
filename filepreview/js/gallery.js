
var uploadfiles = document.querySelector('#file');
uploadfiles.addEventListener('change', function(evt){
   var files = this.files;
   for (var i = 0; i < files.length; i++) {
       previewImage(this.files[i]);
       
   }
}, false);

function previewImage(file) {
    var galleryId = "gallery";

    var gallery = document.getElementById(galleryId);
    var imageType = /image.*/;

    if (!file.type.match(imageType)) {
        throw "File Type must be an image";
    }

    var thumb = document.createElement('div');
    thumb.classList.add('thumbnail');

    var img = document.createElement('img');
    img.file = file;
    thumb.appendChild(img);
    gallery.appendChild(thumb);

    var reader = new FileReader();
    reader.onload = (function(aImg) {
        return function(evt){
            aImg.src = evt.target.result;
        };
    })(img);
    reader.readAsDataURL(file);
}