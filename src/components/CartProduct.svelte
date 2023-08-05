<script lang="ts">
  import { Cart } from "@/store/cart";
  import Couter from "./Couter.svelte";
  import trashIcon from "/svg/trash.svg";
  export let uid = "";
  export let name = "";
  export let itemCount = 1;
  export let image = "/images/snorlax-orange.png";
  const deleteProduct = () => {
    $Cart = $Cart.filter((cart) => cart.uid !== uid);
  };
</script>

<div
  class="flex flex-row items-center justify-center gap-x-12 bg-white border border-gray-200 rounded-lg shadow"
>
  <img
    class="object-contain w-32 rounded-t-lg h-48 md:w-22 md:rounded-none md:rounded-l-lg"
    src={image}
    alt=""
  />
  <!-- Right -->
  <div class="flex flex-col justify-between w-2/5 p-4 leading-normal">
    <!-- Head(Category) -->
    <p class="text-orange font-bold">{uid}</p>
    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
      {name}
    </h5>
    <!-- Bottom Section -->
    <div class="flex justify-between items-center gap-4 pt-4">
      <Couter countItem={itemCount} />
      <button on:click={deleteProduct}>
        <img src={trashIcon} class="w-6 h-6" alt="trash icon" />
      </button>
    </div>
  </div>
</div>
