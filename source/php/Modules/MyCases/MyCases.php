<?php

namespace GdiCases\Modules\MyCases;

use GdiCases\Helper\CacheBust;

class MyCases extends \Modularity\Module
{
    public $slug = 'mod-my-cases';
    public $supports = array();

    public function init()
    {
        $this->nameSingular = __('My Cases', GDI_CASES_TEXT_DOMAIN);
        $this->namePlural = __('My Cases', GDI_CASES_TEXT_DOMAIN);
        $this->description = __('Modularity Module', GDI_CASES_TEXT_DOMAIN);
    }

    public function data(): array
    {
        return [
            'aboutMeGraphQLUri' => get_field('cases_api_uri', 'options') . '/graphql'
        ];
    }

    public function template(): string
    {
        return 'my-cases.blade.php';
    }

    public function script()
    {
        wp_enqueue_script(
            'gdi-modularity-my-cases-js',
            GDI_CASES_URL . '/dist/' . CacheBust::name('js/gdi-modularity-cases.js'),
            null
        );
        wp_enqueue_style(
            'gdi-modularity-my-cases-css',
            GDI_CASES_URL . '/dist/' . CacheBust::name('js/gdi-modularity-cases.css'),
            null
        );
    }
}
