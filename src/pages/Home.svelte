<script>
  import Hero from "@/components/Hero.svelte";
  import Navbar from "@/components/Navbar.svelte";
  import ProductList from "@/components/ProductList.svelte";
  import SearchBar from "@/components/SearchBar.svelte";

  let search = "";
</script>

<div>
  <Navbar />
  <Hero />
  <SearchBar bind:search />
  <ProductList bind:search/>
</div>
