<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";

  import Navbar from "./components/Navbar.svelte";
  import Home from "./pages/Home.svelte";
  import Cart from "./pages/Cart.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import Admin from "./pages/admin/Admin.svelte";
  import Checkout from "./pages/Checkout.svelte";
  export let url = "";
</script>

<Router {url}>
  <main class="font-bai-jamjuree">
    <Route path="/" component={Home} />
    <Route path="/cart" component={Cart} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/admin" component={Admin} />
    <Route component={NotFound} />
  </main>
</Router>

<style>
</style>
