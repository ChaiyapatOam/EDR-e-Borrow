<script lang="ts">
  import { UploadImage } from "@/lib/supabase";
  import { createProduct } from "@/lib/db/Product";
  import { Button, Modal, Label, Input, Select } from "flowbite-svelte";
  import type { Product } from "@/types/ProductType";

  let formModal = false;
  let categories = [
    { value: "EDRC", name: "Components(EDRC)" },
    { value: "EDRT", name: "Tools(EDRT)" },
  ];

  let imageFile: File;
  let data: Omit<Product, "id">; //Omit remove "id" from Type

  $: data = {
    name: "",
    category: "EDRC",
    quantity: 1,
    image: "",
  };

  const onFileSelected = (e) => {
    imageFile = e.target.files[0];
  };

  const onSubmit = async () => {
    data.image = await UploadImage(imageFile);

    formModal = false;
    await createProduct(data);
  };
</script>

<Button
  on:click={() => (formModal = true)}
  class="text-black bg-orange font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2"
  >เพิ่มของ</Button
>

<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
  <form
    class="flex flex-col justify-center space-y-6"
    on:submit|preventDefault={onSubmit}
  >
    <h3 class="mb-4 text-xl font-bold text-navy">เพิ่มของ</h3>
    <Label class="space-y-2">
      <span class="text-navy">ชื่อ</span>
      <Input
        type="text"
        name="productName"
        bind:value={data.name}
        class="focus:border-orange focus:ring-orange"
        placeholder="จักรยานที่ขโมยมา"
        required
      />
    </Label>

    <!-- หมวดหมู่ -->
    <Label class="space-y-2">
      <span class="text-navy">หมวดหมู่</span>
      <Select
        class="mt-2 focus:border-orange focus:ring-orange"
        items={categories}
        bind:value={data.category}
      />
    </Label>

    <!-- จำนวน -->
    <Label class="space-y-2">
      <span class="text-navy">จำนวน</span>
      <Input
        type="number"
        bind:value={data.quantity}
        class="focus:border-orange focus:ring-orange"
        name="count"
        placeholder="0"
        required
      />
    </Label>

    <!-- อัพโหลดรูป -->
    <Label class="space-y-2">
      <span class="text-navy">อัพโหลดรูป</span>
      <input
        type="file"
        name="image"
        class="block"
        on:change={(e) => onFileSelected(e)}
        accept="image/jpeg,image/jpg,image/png"
        required
      />
    </Label>

    <Button type="submit" class="w-full bg-orange text-navy font-bold"
      >เพิ่ม</Button
    >
  </form>
</Modal>
