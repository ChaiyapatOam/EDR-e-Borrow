<script>
  import { Cart } from "@/store/cart";
  import CartProduct from "./CartProduct.svelte";
</script>

<div class="flex flex-col justify-center flex-wrap lg:flex-row lg:gap-x-4 gap-y-4 px-6">
  {#each $Cart as c}
    <CartProduct id={c.id} name={c.name} image={c.image} category={c.category} quantity={c.quantity}/>
  {/each}
  {#if !$Cart[0]}
    <h1 class="text-orange text-center font-bold p-4">ยังไม่มีของในตะกร้า</h1>
  {/if}
</div>
