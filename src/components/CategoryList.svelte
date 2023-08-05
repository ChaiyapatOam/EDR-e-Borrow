<script lang="ts">
  import { Cart } from "@/store/cart";

  let categoryList = ["All", "Components", "Tools"];
  let state = 0;

  const changeIndex = (idx: number) => {
    state = idx;
  };
  // Filter components and tools
  if (state === 1) {
  //  $Product = $Product.filter((c) => c.uid == uid)
  }

  let color = "";
</script>

<div class="p-4">
  <h1 class="text-2xl text-orange font-bold">หมวดหมู่</h1>
  <div class="flex items-center py-4 overflow-auto whitespace-nowrap">
    {#each categoryList as category, index}
      <button
        type="button"
        on:click={() => changeIndex(index)}
        class={state === index
          ? "text-white hover:text-black bg-orange  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
          : "text-white hover:text-black bg-navy  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"}
        >{category}</button
      >
    {/each}
  </div>
</div>
