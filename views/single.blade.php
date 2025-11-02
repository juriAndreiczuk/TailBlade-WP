@php
  $next_post = get_previous_post();
  $prev_post = get_next_post();
  $post_id = get_the_ID();
@endphp

@extends('layouts.default')

@section('content')
  <div
    class="main-info news-post generated-post"
    data-barba="container"
    data-barba-namespace="post"
  >
    <h1>{{ get_the_title($post_id) }}</h1>
  </div>
@endsection
