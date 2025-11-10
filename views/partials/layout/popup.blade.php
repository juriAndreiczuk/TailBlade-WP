@php
  $id = $id ?? uniqid('popup-');
  $trigger = $trigger ?? 'Open popup';
  $title = $title ?? null;
@endphp

<div
  id="{{ $id }}"
  class="relative"
  data-popup="wrap"
>
  <button
    type="button"
    data-popup="trigger"
  >
    {{ $trigger }}
  </button>

  <div
    class="fixed inset-0 z-50 hidden"
    aria-hidden="true"
    data-popup="overlay"
  >
    <div
      class="absolute inset-0 bg-black/60"
      data-popup="backdrop"
    ></div>
    <div class="relative flex min-h-screen items-center justify-center">
      <div
        class="relative w-full max-w-lg bg-white p-8"
        role="dialog"
        aria-modal="true"
        data-popup="panel"
      >
        <button
          type="button"
          class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center"
          aria-label="Close popup"
          data-popup="close"
        >
          x
        </button>

        @if ($title)
          <h3>{{ $title }}</h3>
        @endif

        <div
          data-popup="content"
          class="pt-4"
        >
          {!! $slot ?? ($content ?? '') !!}
        </div>
      </div>
    </div>
  </div>
</div>
