<?php

namespace GdiCases;

class App
{
    public function __construct()
    {
        add_action('plugins_loaded', array($this, 'registerModules'));
    }

    public function registerModules()
    {
        foreach (['mod-cases' => 'AboutMe'] as $slug => $name) {
            if (function_exists('modularity_register_module')) {
                modularity_register_module(
                    GDI_CASES_MODULE_PATH . "/" . $name,
                    $name
                );
            }

            add_filter(
                '/Modularity/externalViewPath',
                fn (array $paths) => array_merge(
                    $paths,
                    [$slug => GDI_CASES_MODULE_PATH . "/" . $name . "/views"]
                ),
                1,
                3
            );
        }
    }
}
