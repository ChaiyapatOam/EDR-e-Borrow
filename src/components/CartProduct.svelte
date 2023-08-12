<script lang="ts">
  import { Cart } from "@/store/cart";
  import Couter from "./Couter.svelte";
  import trashIcon from "/svg/trash.svg";
  export let id: number;
  export let category = "";
  export let name = "";
  export let quantity = 1;
  export let image = "/images/no-image.webp";
  const deleteProduct = () => {
    $Cart = $Cart.filter((cart) => cart.id !== id);
  };
</script>

<div
  class="grid grid-cols-2 max-w-xs bg-white border border-gray-200 rounded-lg shadow"
>

  <div class="p-4">
    <img
    class="object-contain w-32 rounded-t-lg h-48 md:w-22 md:rounded-none md:rounded-l-lg"
    src={image}
    alt=""
  />
  </div>
  <!-- Right -->
  <div class="flex flex-col self-center p-4 leading-normal">
    <!-- Head(Category) -->
    <p class="text-orange font-bold">{category + "-" + id}</p>
    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
      {name}
    </h5>
    <!-- Bottom Section -->
    <div class="flex justify-between items-center gap-4 pt-4">
      <Couter countItem={quantity} />
      <button on:click={deleteProduct}>
        <img src={trashIcon} class="w-6 h-6" alt="trash icon" />
      </button>
    </div>
  </div>
</div>
