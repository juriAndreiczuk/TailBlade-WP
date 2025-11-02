<!doctype html>
<html {!! language_attributes() !!}>

<head>
  <meta charset="{{ bloginfo('charset') }}">
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  >
  <meta
    name="msapplication-TileColor"
    content="#333333"
  >
  <meta
    name="theme-color"
    content="#ffffff"
  >
  <link
    rel="shortcut icon"
    type="image/x-icon"
    href="{{ get_template_directory_uri() }}/favicon.ico"
  />
  @php wp_head(); @endphp
</head>

<body data-barba="wrapper">
  <div
    id="page"
    class="site"
  >
    @include('partials.header')
    <div
      id="content"
      class="site-content"
    >
      @yield('content')
    </div>
    @include('partials.footer')
  </div>

  <script>
    var ajaxurl = '<?= admin_url('admin-ajax.php') ?>';
  </script>
  @php wp_footer(); @endphp
</body>

</html>
