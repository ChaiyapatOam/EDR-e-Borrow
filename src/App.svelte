<script lang="ts">
  import CategoryList from "./components/CategoryList.svelte";

  // import Counter from "./lib/Counter.svelte";

  import Hero from "./components/Hero.svelte";
  import Navbar from "./components/Navbar.svelte";
  import ProductList from "./components/ProductList.svelte";
  import SearchBar from "./components/SearchBar.svelte";
</script>

<main class="font-bai-jamjuree">
  <Navbar />
  <Hero />
  <SearchBar/>
  <CategoryList/>
  <ProductList/>

</main>

<style>
</style>
