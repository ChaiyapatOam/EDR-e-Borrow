<script>
  import { convertNewCsv, csvGenerator } from "@/lib/csvGenerator";
  import AddModal from "./AddModal.svelte";
  import { getAllProduct } from "@/lib/db/Product";

  let tableHeader = ["id", "uid", "name", "quantity", "category"];

  const downloadHandler = async () => {
    const product = await getAllProduct();
    const tableData = convertNewCsv(product); //add uid
    csvGenerator(tableData, tableHeader, "EDR-Product.csv");
  };
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
      <AddModal />
      <button
        class="text-black bg-orange font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2"
        on:click={downloadHandler}
      >
        CSV
      </button>
    </div>
  </div>
</div>
