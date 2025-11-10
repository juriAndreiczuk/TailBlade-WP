@php
  $desktopWebp = get_webp($desktop);
  $mobileWebp = get_webp($mobile);
@endphp

<picture>
  @if ($desktopWebp)
    <source
      media="(min-width: 576px)"
      srcset="{{ $desktopWebp }}"
      type="image/webp"
    >
  @endif
  <source
    media="(min-width: 576px)"
    srcset="{{ $desktop }}"
  >
  @if ($mobileWebp)
    <source
      media="(max-width: 575px)"
      srcset="{{ $mobileWebp }}"
      type="image/webp"
    >
  @endif

  <source
    media="(max-width: 575px)"
    srcset="{{ $mobile }}"
  >
  {!! $slot !!}
</picture>
