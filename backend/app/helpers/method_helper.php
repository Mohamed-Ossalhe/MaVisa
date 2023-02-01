<?php
    function checkMethod($method) {
        if($_SERVER["REQUEST_METHOD"] === $method) {
            return true;
        }else {
            echo json_encode(array("message" => "Method Not Allowed"));
            return false;
        }
    }
?>