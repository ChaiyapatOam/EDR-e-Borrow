<script>
  import { Button, Modal, Label, Input, Select } from "flowbite-svelte";
  import editIcon from "/svg/edit.svg";
  let clickOutsideModal = false;
  let selected = "EDRC";

  let categories = [
    { value: "EDRC", name: "Components" },
    { value: "EDRT", name: "Tools" },
  ];
  export let uid = "";
  export let name = "";
  export let image = "";
  export let itemCount;
</script>

<Button on:click={() => (clickOutsideModal = true)}>
  <img src={editIcon} class="w-6 h-6" alt="edit icon" /></Button
>

<Modal
  bind:open={clickOutsideModal}
  size="xs"
  class="w-full"
  outsideclose={true}
>
  <form class="flex flex-col justify-center space-y-6" action="#">
    <h3 class="mb-4 text-xl font-bold text-navy">แก้ไข</h3>
    <Label class="space-y-2">
      <span class="text-navy">ชื่อ</span>
      <Input
        type="text"
        name="name"
        class="focus:border-orange focus:ring-orange"
        placeholder="จักรยานที่ขโมยมา"
        value={name}
        required
      />
    </Label>

    <!-- หมวดหมู่ -->
    <Label class="space-y-2">
      <span>หมวดหมู่</span>
      <Select class="mt-2" items={categories} bind:value={selected} />
    </Label>

    <!-- จำนวน -->
    <Label class="space-y-2">
      <span>จำนวน</span>
      <Input
        type="number"
        value={itemCount}
        name="count"
        placeholder="0"
        required
      />
    </Label>

    <!-- อัพโหลดรูป -->
    <Label class="space-y-2">
      <span>อัพโหลดรูป</span>
      <Input type="file" name="image" value={image} required />
    </Label>

    <Button type="submit" class="w-full bg-orange text-navy font-bold"
      >แก้ไข</Button
    >
  </form>
</Modal>
