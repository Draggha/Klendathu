<?php
/**
 * Loads all needed classes and instantiates them
 * User: chaensel
 * Date: 12.08.14
 * Time: 21:24
 */


require_once('src/classes/Sag/Sag.php');
require_once('src/classes/Core/Core.php');

$sag = new Sag();



$core = new Core($sag);

