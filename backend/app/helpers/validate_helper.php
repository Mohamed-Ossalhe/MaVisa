<?php
    function validateData($data) {
        if(isset($data) && !empty($data)) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }
    }
?>