<?php

if (!defined('ABSPATH')) {
    exit;
}

define('VITE_SERVER', isset($_ENV['VITE_SERVER']) ? $_ENV['VITE_SERVER'] : 'localhost:5173');

class ViteConfig {
  public $dist_dir = 'dist';
  public $dist_uri;
  public $dist_path;

  public function __construct() {
    $this->dist_uri = get_template_directory_uri() . '/' . $this->dist_dir;
    $this->dist_path = get_template_directory() . '/' . $this->dist_dir;
  }

  public static function init() {
    $instance = new self();
    add_action('wp_enqueue_scripts', array($instance, 'enqueue'));
  }

  public function enqueue() {
    if (VITE_ENVIRONMENT_TYPE === 'dev') {
        add_action('wp_head', array($this, 'vite_head_module_hook'));
    } else {
      $manifest = json_decode(file_get_contents($this->dist_path . '/.vite/manifest.json'), true);
      if (is_array($manifest)) {
        $css_file = $manifest['src/scripts/main.ts']['css'][0] ?? null;
        if ($css_file !== null) {
            $href = $this->dist_uri . '/' . $css_file;

            add_action('wp_head', function() use ($href) {
                echo '<link rel="preload" href="' . esc_url($href) . '" as="style" onload="this.onload=null;this.rel=\'stylesheet\'">' . "\n";
                echo '<noscript><link rel="stylesheet" href="' . esc_url($href) . '"></noscript>' . "\n";
            });
        }
        wp_enqueue_script('main', $this->dist_uri . '/' . $manifest['src/scripts/main.ts']['file'], array(), false, true);
      }
    }
  }

  public function vite_head_module_hook() {
    echo '<script type="module" crossorigin src="http://' . VITE_SERVER . '/@vite/client"></script>';
    echo '<script type="module" crossorigin src="http://' . VITE_SERVER . '/src/scripts/main.ts"></script>';
  }
}
