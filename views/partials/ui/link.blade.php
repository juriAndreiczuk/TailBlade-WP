@if ($link && $title)
  <a
    href="{{ $link }}"
    class="transition flex items-center group"
    title="{{ $title }}"
    target={{ isset($target) && $target ? $target : '_self' }}
  >
    <span class="text-sm text-nowrap font-body block">{{ $title }}</span>
    <img
      loading="lazy"
      class="md:ml-1 block transition duration-300 lg:group-hover:translate-x-1"
      src="{{ images('right-arrow.svg') }}"
      alt="Arrow right"
    >
  </a>
  @php($target = null)
@endif
