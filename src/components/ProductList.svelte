<script lang="ts">
  import { getAllProduct } from "@/lib/db/Product";
  import ProductCard from "./ProductCard.svelte";
  import { onMount } from "svelte";
  import type { Product as ProductType } from "@/types/ProductType";

  let products: ProductType[];

  onMount(async () => {
    try {
      products = await getAllProduct();
      // console.log(products);
    } catch (error) {
      console.log(error);
    }
  });

  let categoryList = ["All", "Components", "Tools"];
  $: state = 0;

  const changeIndex = (idx: number) => {
    state = idx;
  };

</script>

<!-- Category -->
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

<!-- ProductList -->
<div
  class="flex flex-col flex-wrap justify-center md:flex-row md:gap-x-4 md:basis-1/2 gap-y-4 px-6"
>
  {#if products}
    {#if state === 0}
      {#each products as product}
        <ProductCard
          uid={product.category + "-" + product.id}
          name={product.name}
          image={product.image}
          quantity={product.quantity}
        />
      {/each}
    {/if}
    <!-- EDRC -->
    {#if state === 1}
      {#each products.filter((p) => p.category == "EDRC") as product}
        <ProductCard
          uid={product.category + "-" + product.id}
          name={product.name}
          image={product.image}
          quantity={product.quantity}
        />
      {/each}
    {/if}
    <!-- EDRT -->
    {#if state === 2}
      {#each products.filter((p) => p.category == "EDRT") as product}
        <ProductCard
          uid={product.category + "-" + product.id}
          name={product.name}
          image={product.image}
          quantity={product.quantity}
        />
      {/each}
    {/if}
  {:else}
    <h1 class="text-orange text-center font-bold p-4">Nothing here</h1>
  {/if}
</div>
