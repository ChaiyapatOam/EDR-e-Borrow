<script>
  import { Link } from "svelte-routing";
  import CartList from "@/components/CartList.svelte";
  import {cartCount } from "@/store/cart";
</script>

<div>
  <h1 class="text-3xl text-navy font-bold p-4">รายการทั้งหมด</h1>
  <CartList />

  <hr class="border mt-4" />
  <div class="flex justify-end">
    <h2 class="text-navy pt-3">รวมทั้งหมด {$cartCount} รายการ</h2>
  </div>
  <div class="flex justify-end">
    <button class="text-red-600 pr-3">ลบทั้งหมด</button>
  </div>

  <!-- Bottom Navigation -->
  <div class="flex justify-between py-2 px-6 text-navy">
    <Link to="/">&lt;&lt;ย้อนกลับ</Link>
    {#if $cartCount === 0}
      <p>ต่อไป &gt;&gt;</p>
    {:else}
      <Link to="/checkout">ต่อไป &gt;&gt;</Link>
    {/if}
  </div>
</div>
