<?php

if (!defined('ABSPATH')) {
  exit;
}

if (class_exists('Dotenv\\Dotenv')) {
  $dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../..', '.env.development');
  $dotenv->safeLoad();
}

if (!defined('VITE_ENVIRONMENT_TYPE')) {
  define('VITE_ENVIRONMENT_TYPE', $_ENV['VITE_ENVIRONMENT_TYPE'] ?? 'production');
}

if (!defined('VITE_DEBUG')) {
  define('VITE_DEBUG', $_ENV['VITE_DEBUG'] ?? 'default');
}

if (VITE_ENVIRONMENT_TYPE === 'dev' && VITE_DEBUG === 'whoops') {
  $whoops = new \Whoops\Run;
  $whoops->pushHandler( new \Whoops\Handler\PrettyPageHandler );
  $whoops->register();
}