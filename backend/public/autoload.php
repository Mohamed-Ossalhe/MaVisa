<?php
// session start
session_start();
define('ROOT', dirname(__DIR__) . DIRECTORY_SEPARATOR);
define('APP', ROOT . 'app' . DIRECTORY_SEPARATOR);
define('VIEW', ROOT . 'app' . DIRECTORY_SEPARATOR . 'view' . DIRECTORY_SEPARATOR);
define('MODEL', ROOT . 'app' . DIRECTORY_SEPARATOR . 'model' . DIRECTORY_SEPARATOR);
define('HELPERS', ROOT . 'app' . DIRECTORY_SEPARATOR . 'helpers' . DIRECTORY_SEPARATOR);
define('SESSION_HELPER', ROOT . 'app' . DIRECTORY_SEPARATOR . 'helpers' . DIRECTORY_SEPARATOR . "session_helper.php");
define('HEADERS_HELPER', ROOT . 'app' . DIRECTORY_SEPARATOR . 'helpers' . DIRECTORY_SEPARATOR . "headers_helper.php");
define('METHOD_HELPER', ROOT . 'app' . DIRECTORY_SEPARATOR . 'helpers' . DIRECTORY_SEPARATOR . "method_helper.php");
define('VALIDATE_HELPER', ROOT . 'app' . DIRECTORY_SEPARATOR . 'helpers' . DIRECTORY_SEPARATOR . "validate_helper.php");
define('DATA', ROOT . 'app' . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR);
define('CORE', ROOT . 'app' . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR);
define('CONTROLLER', ROOT . 'app' . DIRECTORY_SEPARATOR . 'controller' . DIRECTORY_SEPARATOR);
define('BASE_URL','http://mavisa.ma/');
$modules = [ROOT, APP, CORE, CONTROLLER, DATA, MODEL, HELPERS];
require_once SESSION_HELPER;
require_once HEADERS_HELPER;
require_once METHOD_HELPER;
require_once VALIDATE_HELPER;
set_include_path(get_include_path() . PATH_SEPARATOR . implode(PATH_SEPARATOR, $modules));
spl_autoload_register('spl_autoload');
new App();