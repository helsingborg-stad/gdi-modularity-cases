<?php

// Get around direct access blockers.
if (!defined('ABSPATH')) {
    define('ABSPATH', __DIR__ . '/../../../');
}

define('GDI_CASES_PATH', __DIR__ . '/../../../');
define('GDI_CASES_URL', 'https://example.com/wp-content/plugins/' . 'modularity-gdi-modularity-cases');
define('GDI_CASES_TEMPLATE_PATH', GDI_CASES_PATH . 'templates/');


// Register the autoloader
$loader = require __DIR__ . '/../../../vendor/autoload.php';
$loader->addPsr4('GdiCases\\Test\\', __DIR__ . '/../php/');

require_once __DIR__ . '/PluginTestCase.php';
