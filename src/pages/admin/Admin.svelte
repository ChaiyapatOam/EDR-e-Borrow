<script>
  import Navbar from "@/components/admin/Navbar.svelte";
  import AdminProductCard from "@/components/admin/AdminProductCard.svelte";
  import CategoryList from "@/components/admin/CategoryList.svelte";
  import Hero from "@/components/admin/Hero.svelte";
</script>

<div>
  <Navbar />
  <Hero />
  <CategoryList />
  <AdminProductCard name="Snorlax" uid="EDRT-001" />
</div>
