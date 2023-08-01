<script>
  import AddModal from "./AddModal.svelte";

</script>
<div class="hero min-h-full bg-navy">
  <div class="hero-content flex-col lg:flex-row">
    <img
      alt="img"
      src="/images/store.png"
      class="max-w-sm rounded-lg shadow-2xl"
    />
    <div class="text-white">
      <h1 class="text-2xl font-bold">จัดการคลังยืม-คืน</h1>
      <p class="text-lg py-6">สำหรับอำนวยความสะดวกแก่ชมรม EDR KMUTT</p>
      <AddModal/>
    </div>
  </div>
</div>
