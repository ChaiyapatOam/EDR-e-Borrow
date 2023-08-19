<script lang="ts">
  import { getAllProduct } from "@/lib/db/Product";
  import { onMount } from "svelte";
  import type { Product } from "@/types/ProductType";
  import AdminProductCard from "./AdminProductCard.svelte";

  let products: Product[];

  onMount(async () => {
    try {
      products = await getAllProduct();
    //   console.log(products);
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

<div class="p-4">
  <h1 class="text-2xl text-orange font-bold">แก้ไขคลังของ</h1>
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

<section>
  <div class="flex flex-wrap justify-center mx-auto gap-y-4 md:gap-x-4 px-6">
    {#if products}
      {#if state === 0}
        {#each products as product}
          <AdminProductCard
            id={product.id}
            uid={product.category + "-" + product.id}
            name={product.name}
            image={product.image}
            quantity={product.quantity}
            category={product.category}
          />
        {/each}
      {/if}
    {/if}

    {#if state === 1}
      {#each products as product}
        {#if product.category == "EDREC"}
          <AdminProductCard
            id={product.id}
            uid={product.category + "-" + product.id}
            name={product.name}
            image={product.image}
            quantity={product.quantity}
            category={product.category}
          />
        {/if}
      {/each}
    {/if}

    {#if state === 2}
      {#each products as product}
        {#if product.category == "EDRET"}
          <AdminProductCard
            id={product.id}
            uid={product.category + "-" + product.id}
            name={product.name}
            image={product.image}
            quantity={product.quantity}
            category={product.category}
          />
        {/if}
      {/each}
    {/if}
  </div>
</section>
