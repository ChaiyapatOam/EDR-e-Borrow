<script>
  import { Cart } from "../store/cart";
</script>

<div>
  <h1 class="text-3xl text-navy">รายการทั้งหมด</h1>
  {#each $Cart as item}
    <p>
      {item.uid} :
      {item.productName}
      {item.itemCount}
    </p>
  {/each}
</div>
