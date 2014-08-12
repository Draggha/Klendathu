<?php
include('src/classes/loader.php');
echo '<pre>';
$data = json_decode($core->test());
print_r($data);