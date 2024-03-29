<?php

namespace GdiCases\Modules\MyCases;

use Exception;
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
        $this->cacheTtl = false;
    }

    public function getMockJson(?callable $onError): string
    {
        if (get_field('mock_cases', $this->ID)) {
            $mockJson = get_field('json_mock_data', $this->ID);
            try {
                return base64_encode(
                    json_encode(
                        json_decode($mockJson, true, 512, JSON_THROW_ON_ERROR)
                    )
                );
            } catch (\JsonException $e) {
                if ($onError) {
                    $onError($e);
                }
            }
        }

        return '';
    }

    public function data(): array
    {
        $jsonErrorHandler = function (\JsonException $e) {
            if (is_user_logged_in()) {
                echo __('Failed to parse mock JSON', GDI_CASES_TEXT_DOMAIN) . ': ' . $e->getMessage();
            }
        };

        return [
            'aboutMeGraphQLUri' => get_field('cases_api_uri', 'options') . '/graphql',
            'aboutMeGraphQLJson' => $this->getMockJson($jsonErrorHandler),
        ];
    }

    public function template(): string
    {
        return 'my-cases.blade.php';
    }

    public function script()
    {
        if (!$this->hasModule()) {
            return;
        }

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
