<?php

require 'vendor/autoload.php';
use eftec\bladeone\BladeOne;

$views = __DIR__ . '/views';
$cache = __DIR__ . '/cache';
if (!is_dir($cache)) mkdir($cache, 0755, true);

$blade = new BladeOne($views, $cache, BladeOne::MODE_AUTO);

require_once 'includes/setup/env.php';
require_once 'includes/setup/load-blade-templates.php';
require_once 'includes/setup/theme-setup.php';
require_once 'includes/setup/script-modifier.php';
require_once 'includes/setup/vite.config.php';
require_once 'includes/setup/remove-assets.php';
require_once 'includes/posts/load-posts.php';
require_once 'includes/posts/post-type-custom.php';
require_once 'includes/helpers/utils.php';
require_once 'includes/helpers/get_webp.php';
require_once 'includes/helpers/migrate_database.php';

ViteConfig::init();
