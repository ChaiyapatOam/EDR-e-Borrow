<script>
  import { Link } from "svelte-routing";
  import CartList from "@/components/CartList.svelte";
  import { Cart, cartCount } from "@/store/cart";
</script>

<div>
  <h1 class="text-3xl text-navy font-bold p-4">รายการทั้งหมด</h1>
  {#each $Cart as item}
    <p>
      {item.uid} :
      {item.productName}
      {item.itemCount}
    </p>
  {/each}
  <CartList />

  <hr class="border mt-4" />
  <div class="flex justify-end">
    <h2 class="text-navy p-3">รวมทั้งหมด {$cartCount} รายการ</h2>
  </div>

  <!-- Bottom Navigation -->
  <div class="flex justify-between py-2 px-6 text-navy">
    <Link to="/">&lt;&lt;ย้อนกลับ</Link>
    <Link to="/checkout">ต่อไป &gt;&gt;</Link>
  </div>
</div>
