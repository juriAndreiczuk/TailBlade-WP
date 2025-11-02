<div
  class="transition duration-300 mb-5 rounded-lg"
  data-acc="wrap"
>
  <button
    data-acc="trigger"
    class="w-full text-left p-4 flex justify-between items-start"
    title="{{ $title }}"
  >
    <span class="font-body text-lg">{{ $title }}</span>
    <img
      class="block ml-2"
      data-acc="icon"
      src="{{ images('right-arrow.svg') }}"
      alt="Arrow right"
    >
  </button>
  <div
    data-acc="panel"
    class="h-0 overflow-hidden relative"
  >
    <div class="p-4">
      {!! $text !!}
    </div>
  </div>
</div>
