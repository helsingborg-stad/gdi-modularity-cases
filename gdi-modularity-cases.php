<?php

/**
 * Plugin Name:       GDI Modularity Cases
 * Plugin URI:        https://github.com/nramstedt/gdi-modularity-cases
 * Description:       GDI Cases module
 * Version:           1.0.0
 * Author:            Nikolas Ramstedt @ Helsingborg Stad
 * Author URI:        https://github.com/helsingborg-stad
 * License:           MIT
 * License URI:       https://opensource.org/licenses/MIT
 * Text Domain:       gdi-modularity-cases
 * Domain Path:       /languages
 */

// Protect agains direct file access
if (!defined('WPINC')) {
    die;
}

define('GDI_CASES_PATH', plugin_dir_path(__FILE__));
define('GDI_CASES_URL', plugins_url('', __FILE__));
define('GDI_CASES_TEMPLATE_PATH', GDI_CASES_PATH . 'templates/');
define('GDI_CASES_TEXT_DOMAIN', 'gdi-modularity-cases');
define('GDI_CASES_MODULE_PATH', GDI_CASES_PATH . 'source/php/Modules/');

load_plugin_textdomain(GDI_CASES_TEXT_DOMAIN, false, plugin_basename(dirname(__FILE__)) . '/languages');

require_once GDI_CASES_PATH . 'Public.php';

// Register the autoloader
require __DIR__ . '/vendor/autoload.php';

// Start application
new GdiCases\App();
