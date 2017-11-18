<?php 
    if (isset($_FILES['upload_file'])) {
        if (move_uploaded_file($_FILES['upload_file']['tmp_name'], "data/".$_FILES['upload_file']['name'])) {
            echo $_FILES['upload_file']['name']. " OK ";
        }else{
            echo $_FILES['upload_file']['name']. " NOT OK ";
        }
        exit;
    }else{
        echo "No files uploaded ...";
    }
?>