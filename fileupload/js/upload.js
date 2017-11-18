
var uploadfiles = document.querySelector('#file');
uploadfiles.addEventListener('change', function(evt){
   var files = this.files;
   for (var i = 0; i < files.length; i++) {
       uploadFile(this.files[i]);
       
   }
}, false);

function uploadFile(file) {
    var url = 'php/upload.php';
    var xhr = new XMLHttpRequest();
    var fd = new FormData();

    xhr.open('POST', url, true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.responseText);
        }
    };
    fd.append('upload_file', file);
    xhr.send(fd);
}