@if ($tabs && $btns)
  <div data-tabs="wrap">
    <div data-tabs="container">
      <div
        class="flex flex-col sm:flex-row flex-wrap justify-center mx-auto overflow-hidden"
      >
        @foreach ($btns as $btn)
          <button data-tabs="btn">
            {{ $btn }}
          </button>
        @endforeach
      </div>
      @foreach ($tabs as $tab)
        <div data-tabs="tab">
          {!! $tab !!}
        </div>
      @endforeach
    </div>
  </div>
@endif
