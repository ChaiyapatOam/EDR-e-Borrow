<script lang="ts">
  import { navigate } from "svelte-routing";
  import arrowBack from "/svg/arrow-back.svg";
  import { onMount } from "svelte";
  import { getAllUser } from "@/lib/db/User";

  let users = [];

  onMount(async () => {
    try {
      users = await getAllUser();
    } catch (error) {
      console.log(error);
    }
  });
</script>

<div class="p-4">
  <div class="flex items-center">
    <button on:click={() => navigate("/admin")}>
      <img src={arrowBack} class="w-8 h-8 stroke-navy filter" alt="" />
    </button>
    <h1 class="text-3xl text-navy font-bold p-4">รายการผู้ใช้</h1>
  </div>
  <table class="table-auto border">
    <thead>
      <tr>
        <th class="border">ชื่อ</th>
        <th class="border">เบอร์โทร</th>
      </tr>
    </thead>
    <tbody>
      {#each users as user}
        <tr class="text-center">
          <td class="border p-3">{user.name}</td>
          <td class="border p-3">{user.phone}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
