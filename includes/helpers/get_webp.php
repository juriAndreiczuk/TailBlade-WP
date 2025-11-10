<?php

function get_webp(string $img): ?string {
  $uploads = wp_get_upload_dir();
  $path = str_replace($uploads['baseurl'], $uploads['basedir'], $img);

  $webp_path_1 = preg_replace('/\.(jpe?g|png)$/i', '.webp', $path);
  $webp_path_2 = $path . '.webp';

  if (file_exists($webp_path_1)) {
    return str_replace($uploads['basedir'], $uploads['baseurl'], $webp_path_1);
  }

  if (file_exists($webp_path_2)) {
    return str_replace($uploads['basedir'], $uploads['baseurl'], $webp_path_2);
  }

  return null;
}