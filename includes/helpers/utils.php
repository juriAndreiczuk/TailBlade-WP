<?php

function images($val) {
  $target_folder = VITE_ENVIRONMENT_TYPE === 'dev' ? 'src/img/' : 'dist/assets/';
  return bloginfo('template_directory').'/'.$target_folder.$val;
}
