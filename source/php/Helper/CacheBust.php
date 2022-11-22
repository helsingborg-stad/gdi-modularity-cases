<?php

namespace GdiCases\Helper;

class CacheBust
{
    /**
     * Returns the revved/cache-busted file name of an asset.
     * @param string $name Asset name (array key) from rev-mainfest.json
     * @return string filename of the asset (including directory above)
     */
    public static function name($name)
    {
        $jsonPath = GDI_CASES_PATH . apply_filters(
            'GdiCases/Helper/CacheBust/RevManifestPath',
            'dist/manifest.json'
        );

        $revManifest = [];
        if (file_exists($jsonPath)) {
            $revManifest = json_decode(file_get_contents($jsonPath), true);
        } elseif (defined('WP_DEBUG') && WP_DEBUG) {
            echo '<div style="color:red">Error: Assets not built. Go to ' . GDI_CASES_PATH . ' and run gulp. See ' . GDI_CASES_PATH . 'README.md for more info.</div>';
        }

        if (!isset($revManifest[$name])) {
            return;
        }

        return $revManifest[$name];
    }
}
