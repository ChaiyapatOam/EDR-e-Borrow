<script lang="ts">
  export let id: number;
  export let productQuantity: number;
  export let countItem = 1;
  import plusIcon from "/svg/plus.svg";
  import minusIcon from "/svg/minus.svg";
  import { Cart } from "@/store/cart";
  const increaseItem = () => {
    // const cartProduct = $Cart.find((c) => c.id == id);
    // if (cartProduct.quantity < productQuantity) {
    //   $Cart.find((c) => c.id == id).quantity++;
    // }
    $Cart.find((c) => c.id == id).quantity++;
  };
  const decreaseItem = () => {};
</script>

<!-- For Increment and decrease product -->
<div class="flex justify-center items-center gap-x-3">
  <button class="" on:click={decreaseItem}>
    <img
      src={minusIcon}
      class="w-6 h-6 rounded-md border-2 border-orange hover:bg-orange"
      alt="minus icon"
    />
  </button>
  <p class="font-bold">{countItem}</p>
  <button on:click={increaseItem}>
    <img
      src={plusIcon}
      class="w-6 h-6 rounded-md border-2 border-orange hover:bg-orange"
      alt="plus icon"
    />
  </button>
</div>
