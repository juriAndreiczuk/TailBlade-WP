<?php


class ThemeSetup {
	public static function after_setup () {
		add_theme_support('automatic-feed-links');
		add_theme_support('title-tag');
		add_theme_support('post-thumbnails');
		register_nav_menus(['menu-1' => esc_html__('Primary', 'fv')]);
		add_image_size( 'full-hd', 1920);
		show_admin_bar(false);
		if (function_exists('acf_add_options_page')) {
			acf_add_options_page();
		}
	}

	public static function mimes ($mimes) {
		$mimes['svg'] = 'image/svg+xml';
		return $mimes;
	}
}

add_action('after_setup_theme', array('ThemeSetup', 'after_setup'));
add_filter('upload_mimes', array('ThemeSetup', 'mimes'));
