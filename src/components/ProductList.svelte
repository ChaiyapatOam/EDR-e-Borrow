<script lang="ts">
  import { getAllProduct } from "@/lib/db/Product";
  import ProductCard from "./ProductCard.svelte";
  import { onMount } from "svelte";
  import type { Product } from "@/types/ProductType";

  let products: Product[];

  onMount(async () => {
    try {
      products = await getAllProduct();
      // console.log(products);
    } catch (error) {
      console.log(error);
    }
  });
</script>

<div
  class="flex flex-col flex-wrap justify-center md:flex-row md:gap-x-4 md:basis-1/2 gap-y-4 px-6"
>
  {#if products}
    {#each products as product}
      <ProductCard
        uid={product.category + "-" + product.id}
        name={product.name}
        image={product.image}
        quantity={product.quantity}
      />
    {/each}
  {:else}
    <h1 class="text-orange text-center font-bold p-4">Nothing here</h1>
  {/if}
</div>
