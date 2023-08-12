<script lang="ts">
  import ReturnProductCard from "@/components/ReturnProductCard.svelte";
  import arrowBack from "/svg/arrow-back.svg";
  import type { Product } from "@/types/ProductType";

  import { Button, Input, Label } from "flowbite-svelte";
  import { onMount } from "svelte";
  import { SubmitReturn, getTransaction } from "@/lib/db/Transaction";
  import { navigate } from "svelte-routing";

  let transactionsTools = [];
  let transactionsComps = [];
  let arr = [];
  let phone: string;

  const onSubmit = async () => {};
  onMount(async () => {
    [transactionsTools, transactionsComps] = await getTransaction("11");
    // console.log(transactionsTools);
    // console.log(transactionsComps);
  });

  const Submit = () => {
    SubmitReturn("4", arr);
  };

  $: {
    console.log(arr);
  }
</script>

<div class="p-4">
  <div class="flex items-center">
    <button on:click={() => navigate("/")}>
      <img src={arrowBack} class="w-8 h-8 stroke-navy filter" alt="" />
    </button>
    <h1 class="text-3xl text-navy font-bold p-4">ของที่ถูกยืม</h1>
  </div>
  <form
    class="flex flex-col justify-center space-y-6"
    on:submit|preventDefault={onSubmit}
  >
    <!-- Phone No. -->
    <Label class="space-y-2">
      <span class="text-navy">เบอร์โทร</span>
      <Input
        type="text"
        name="phone"
        bind:value={phone}
        class="focus:border-orange focus:ring-orange"
        placeholder="086XXXXX"
        required
      />
    </Label>

    <Button type="submit" class="w-full bg-orange text-navy font-bold"
      >ค้นหา</Button
    >
  </form>
  <!-- List Transaction -->
  <div class="p-4">
    <h1 class="text-2xl text-orange font-bold">รายการของที่ยีม</h1>
    <div
      class="flex flex-col flex-wrap justify-center md:flex-row md:gap-x-4 md:basis-1/2 gap-y-4 px-6 py-2"
    >
      {#each transactionsTools as tool}
        <ReturnProductCard
          id={tool.id}
          uid={tool.edr_product_tools.category +
            "-" +
            tool.edr_product_tools.id}
          itemId={tool.edr_product_tools.id}
          name={tool.edr_product_tools.name}
          category={tool.edr_product_tools.category}
          image={tool.edr_product_tools.image}
          quantity={1}
          bind:arr
        />
      {/each}
      {#each transactionsComps as component}
        <ReturnProductCard
          id={component.id}
          uid={component.edr_product_components.category +
            "-" +
            component.edr_product_components.id}
          itemId={component.edr_product_components.id}
          name={component.edr_product_components.name}
          category={component.edr_product_components.category}
          image={component.edr_product_components.image}
          quantity={component.quantity}
          bind:arr
        />
      {/each}

      <Button
        type="submit"
        on:click={Submit}
        class="w-full bg-orange text-navy font-bold"
      >
        คืน
      </Button>
    </div>
  </div>
</div>
