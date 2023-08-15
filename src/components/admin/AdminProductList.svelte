<script lang="ts">
    import { getAllProduct } from "@/lib/db/Product";
    import { onMount } from "svelte";
    import type { Product } from "@/types/ProductType";
    import AdminProductCard from "./AdminProductCard.svelte";

    let products: Product[];

    onMount(async () => {
        try {
            products = await getAllProduct();
        } catch (error) {
            console.log(error);
        }
    });
</script>

<section>
    <div class="flex flex-wrap justify-center mx-auto gap-y-4 md:gap-x-4 px-6">
        {#if products}
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
        {:else}
            <h1 class="text-orange text-center font-bold p-4">Nothing</h1>
        {/if}
    </div>
</section>
