<script>
  export let countItem = 1;
  import plusIcon from "/svg/plus.svg";
  import minusIcon from "/svg/minus.svg";
</script>

<!-- For Increment and decrease product -->
<div class="flex justify-center items-center gap-x-3">
  <button class="">
    <img
      src={minusIcon}
      class="w-6 h-6 rounded-md outline outline-orange"
      alt="minus icon"
    />
  </button>
  <p class="font-bold">{countItem}</p>
  <button>
    <img
      src={plusIcon}
      class="w-6 h-6 rounded-md outline outline-orange"
      alt="plus icon"
    />
  </button>
</div>
