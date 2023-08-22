<script lang="ts">
    import { navigate } from "svelte-routing";
    import arrowBack from "/svg/arrow-back.svg";
    import { onMount } from "svelte";
    import { getAllTransaction } from "@/lib/db/Transaction";
    import { renameObjectComp, renameObjectTools } from "@/lib/convertObject";

    let data1 = [];
    let data2 = [];
    let transactions = [];
    onMount(async () => {
        [data1, data2] = await getAllTransaction();
        renameObjectTools(data1);
        renameObjectComp(data2);

        transactions = data1.concat(data2);
        // console.log(transactions);
    });
</script>

<div class="p-4">
    <div class="flex items-center">
        <button on:click={() => navigate("/admin")}>
            <img src={arrowBack} class="w-8 h-8 stroke-navy filter" alt="" />
        </button>
        <h1 class="text-3xl text-navy font-bold p-4">ของที่ถูกยืม</h1>
    </div>
    <!-- Table -->
    <table class="table-auto border">
        <thead>
            <tr>
                <th class="border-2">ชื่อผู้ยืม</th>
                <th class="border-2">เบอร์โทร</th>
                <th class="border-2">ของที่ยืม</th>
                <th class="border-2">จำนวน</th>
                <th class="border-2">สถานะ</th>
            </tr>
        </thead>
        <tbody>
            {#each transactions as transaction}
                <tr class="text-center">
                    <td class="border p-3">{transaction.edr_users.name}</td>
                    <td class="border p-3">{transaction.edr_users.phone}</td>
                    <td class="border p-3">{transaction.product.name}</td>
                    <td class="border p-3">{transaction.product.quantity}</td>
                    <td class="border p-3">
                        {#if transaction.status}
                            <p class="text-green-400">คืนแล้ว</p>
                        {:else}
                            <p class="text-red-400">ยังไม่คืน</p>
                        {/if}
                    </td>
                    <!-- <td class="border p-3">{transaction.phone}</td> -->
                </tr>
            {/each}
        </tbody>
    </table>
</div>
