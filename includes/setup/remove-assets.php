<?php


function remove_wp_default_assets() {
  wp_dequeue_style('wp-block-library');
  wp_dequeue_style('wp-block-library-theme');
  wp_dequeue_style('global-styles');
  wp_dequeue_style('classic-theme-styles');
  wp_dequeue_script('wp-i18n');
  wp_deregister_script('wp-i18n');

  wp_dequeue_script('wp-hooks');
  wp_deregister_script('wp-hooks');

  wp_dequeue_script('wp-polyfill');
  wp_deregister_script('wp-polyfill');
}

add_action('wp_enqueue_scripts', 'remove_wp_default_assets', 100);