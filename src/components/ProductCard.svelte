<script lang="ts">
  import { Cart } from "../store/cart";
  import plusIcon from "/svg/plus.svg";
  export let uid = "";
  export let name = "";
  export let image = "/images/snorlax-orange.png";
  const addToCart = () => {
    $Cart = [
      ...$Cart,
      {
        uid: uid,
        productName: name,
        itemCount: 1,
      },
    ];
  };
</script>

<div
  class="flex flex-row items-center justify-center gap-x-12 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
>
  <img
    class="object-contain w-32 rounded-t-lg h-48 md:w-22 md:rounded-none md:rounded-l-lg"
    src={image}
    alt=""
  />
  <div class="flex flex-col justify-between p-4 leading-normal">
    <!-- Head(Category) -->
    <p class="text-orange font-bold">{uid}</p>
    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
      {name}
    </h5>
    <!-- Bottom Section -->
    <div class="flex justify-center items-center gap-4">
      <p class="font-normal text-gray-700">คงเหลือ 3 ชิ้น</p>
      <button on:click={() => addToCart()}>
        <img src={plusIcon} class="w-6 h-6" alt="plus icon" />
      </button>
    </div>
  </div>
</div>
