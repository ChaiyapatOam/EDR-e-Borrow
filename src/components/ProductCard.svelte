<script lang="ts">
  import { Cart } from "@/store/cart";
  import plusIcon from "/svg/plus.svg";
  export let uid = "";
  export let name = "";
  export let itemCount = 0;
  export let image = "/images/snorlax-orange.png";
  const addToCart = () => {
    // Check if product is exited if length = 0 add Product else itemCout++
    $Cart.filter((c) => c.uid == uid).length == 0
      ? ($Cart = [
          ...$Cart,
          {
            uid: uid,
            productName: name,
            image: image,
            itemCount: 1,
          },
        ])
      : $Cart.find((c) => c.uid == uid).itemCount++;
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
  <!-- Right Side Content -->
  <div class="flex flex-col justify-between w-2/5 p-4 leading-normal">

    <!-- Head(Category) -->
    <p class="text-orange font-bold">{uid}</p>
    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
      {name}
    </h5>

    <!-- Bottom Section -->
    <div class="flex justify-between items-center gap-4">
      {#if itemCount === 0}
        <p class="text-black bg-red-500 rounded-md p-1">ยืมไม่ได้</p>
        
      {:else}

        <p class="font-normal text-gray-700">
          คงเหลือ <span class="font-bold">{itemCount}</span> ชิ้น
        </p>
        <!-- Button Add (ยืม) -->
        <button
          on:click={() => addToCart()}
          class=" hover:text-white border-2 border-orange hover:bg-orange focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg"
        >
          <img src={plusIcon} class="w-6 h-6" alt="plus icon" />
        </button>
      {/if}
    </div>
  </div>
</div>
