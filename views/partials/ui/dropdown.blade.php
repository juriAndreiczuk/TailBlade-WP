@php
  array_unshift($options, $placeholder);
@endphp

<div
  id="{{ $id }}"
  class="relative w-full"
  data-dropdown="{{ $id }}"
>
  <div
    class="bg-no-repeat bg-left block appearance-none cursor-pointer justify-between items-center"
    style="background: url('{{ images('right-arrow.svg') }}') no-repeat right 8px center"
    data-dropdown="toggle"
  >
    <span class="selected">{{ $placeholder }}</span>
  </div>

  <div
    class="absolute left-0 right-0 z-50 max-h-52 hidden overflow-auto"
    data-dropdown="menu"
  >
    @foreach ($options as $option)
      <button
        type="button"
        class="block w-full text-left"
        data-dropdown="option"
      >
        {{ $option }}
      </button>
    @endforeach
  </div>
</div>
