<script>
  import ProductCard from "./ProductCard.svelte";
</script>

<div class="flex flex-col md:flex-row md:gap-x-4 gap-y-4 px-6">
  <ProductCard uid="EDRC-001" name="Rare Orange Snorlax" />
  <ProductCard uid="EDRC-002" name="Snorlax" image="/images/snorlax.png" />
  <ProductCard uid="EDRT-001" name="Gopher" image="/images/goher-coffee.png" />
  <ProductCard uid="EDRT-002" name="Cat Meow" image="/images/cat.jpg" />
</div>
