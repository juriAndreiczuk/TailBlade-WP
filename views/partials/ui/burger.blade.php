<button
  data-burger="wrap"
  title="menu"
  aria-label="menu"
  class="group relative z-50 ml-sm sm:ml-md"
>
  <div
    class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px]"
  >
    <div class="transform overflow-hidden">
      <div
        data-burger="open"
        class="transform origin-center flex flex-col justify-between w-[20px] h-[20px]"
      >
        <div class="bg-black h-0.5 w-7"></div>
        <div class="bg-black h-0.5 w-7"></div>
        <div class="bg-black h-0.5 w-7"></div>
      </div>
      <div
        data-burger="close"
        class="absolute origin-center items-center w-[20px] h-[20px] justify-between transform top-0 flex opacity-0"
      >
        <div class="absolute bg-black h-0.5 w-5 transform rotate-45"></div>
        <div class="absolute bg-black h-0.5 w-5 transform -rotate-45"></div>
      </div>
    </div>
  </div>
</button>
