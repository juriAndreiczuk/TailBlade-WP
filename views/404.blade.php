<?php /* Template Name: Error */ ?>

@extends('layouts.default')

@section('content')
  <div
    class="main-info"
    data-barba="container"
    data-barba-namespace="error"
  >
    <h1>404</h1>
    <a href="{{ get_home_url() }}">Error</a>
  </div>
@endsection
