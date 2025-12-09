@php
  $desktop = isset($desktop) ? (string) $desktop : '';
  $mobile = isset($mobile) ? (string) $mobile : '';
  $desktopWebp = get_webp($desktop) ?: '';
  $mobileWebp = get_webp($mobile) ?: '';

  $alt = isset($alt) ? (string) $alt : '';
  $classes = $classes ?? 'w-full';
  $loading = $loading ?? 'lazy';
  $fetchpriority = $fetchpriority ?? 'auto';

  $sizes_all = wp_get_additional_image_sizes() ?: [];
  $default_size = ['width' => 1920, 'height' => 980];
  $image_size =
      $size && isset($sizes_all[$size])
          ? [
              'width' => intval(
                  $sizes_all[$size]['width'] ?? $default_size['width'],
              ),
              'height' => intval(
                  $sizes_all[$size]['height'] ?? $default_size['height'],
              ),
          ]
          : $default_size;
@endphp

<picture>
  @if ($desktopWebp)
    <source
      media="(min-width: 576px)"
      srcset="{{ esc_url($desktopWebp) }}"
      type="image/webp"
    >
  @endif

  @if ($desktop)
    <source
      media="(min-width: 576px)"
      srcset="{{ esc_url($desktop) }}"
    >
  @endif

  @if ($mobileWebp)
    <source
      media="(max-width: 575px)"
      srcset="{{ esc_url($mobileWebp) }}"
      type="image/webp"
    >
  @endif

  @if ($mobile)
    <source
      media="(max-width: 575px)"
      srcset="{{ esc_url($mobile) }}"
    >
  @endif

  <img
    class="{{ esc_attr($classes) }}"
    loading="{{ esc_attr($loading) }}"
    @if ($image_size['width'] > 0) width="{{ $image_size['width'] }}" @endif
    @if ($image_size['height'] > 0) height="{{ $image_size['height'] }}" @endif
    fetchpriority="{{ esc_attr($fetchpriority) }}"
    src="{{ esc_url($desktop ?: $mobile) }}"
    alt="{{ esc_attr($alt) }}"
  >
</picture>
