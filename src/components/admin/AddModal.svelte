<script>
  import { Button, Modal, Label, Input, Select } from "flowbite-svelte";
  let formModal = false;
  let selected = "EDRC";

  let categories = [
    { value: "EDRC", name: "Components" },
    { value: "EDRT", name: "Tools" },
  ];
</script>

<Button
  on:click={() => (formModal = true)}
  class="text-black bg-orange font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2"
  >เพิ่มของ</Button
>

<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
  <form class="flex flex-col justify-center space-y-6" action="#">
    <h3 class="mb-4 text-xl font-bold text-navy">
      เพิ่มของ
    </h3>
    <Label class="space-y-2">
      <span class="text-navy">ชื่อ</span>
      <Input type="text" name="name" class="focus:border-orange focus:ring-orange" placeholder="จักรยานที่ขโมยมา" required />
    </Label>

    <!-- หมวดหมู่ -->
    <Label class="space-y-2">
      <span>หมวดหมู่</span>
      <Select class="mt-2" items={categories} bind:value={selected} />
    </Label>

    <!-- จำนวน -->
    <Label class="space-y-2">
      <span>จำนวน</span>
      <Input type="number" value="1" name="count" placeholder="0" required />
    </Label>

    <!-- อัพโหลดรูป -->
    <Label class="space-y-2">
      <span>อัพโหลดรูป</span>
      <Input type="file" name="image" required />
    </Label>

    <Button type="submit" class="w-full bg-orange text-navy font-bold">เพิ่ม</Button>
  </form>
</Modal>
