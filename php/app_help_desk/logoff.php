<?php
session_start();
//remover índices do array session
//unset()
//destruir a variável de session
//session_detroy()
session_destroy();
header('location:index.php');
?>