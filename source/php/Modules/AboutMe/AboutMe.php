<?php

namespace GdiCases\Modules\AboutMe;

use GdiCases\Helper\CacheBust;

class AboutMe extends \Modularity\Module
{
    public $slug = 'mod-about-me';
    public $supports = array();

    public function init()
    {
        $this->nameSingular = __('GDI Cases', GDI_CASES_TEXT_DOMAIN);
        $this->namePlural = __('GDI Cases', GDI_CASES_TEXT_DOMAIN);
        $this->description = __('Modularity Module', GDI_CASES_TEXT_DOMAIN);
    }

    public function data(): array
    {
        return [
            'aboutMeGraphQLUri' => get_field('cases_graphql_uri', 'options')
        ];
    }

    public function template(): string
    {
        return 'about-me.blade.php';
    }

    public function script()
    {
        wp_enqueue_script(
            'gdi-modularity-about-me',
            GDI_CASES_URL . '/dist/' . CacheBust::name('js/gdi-modularity-cases.js'),
            null
        );
    }
}
