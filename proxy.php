<?php
$url = $_GET["url"];
$content = file_get_contents($url);
header('Content-type: text/html');
echo $content;
?>