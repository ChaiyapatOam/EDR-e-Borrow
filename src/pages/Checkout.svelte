<script lang="ts">
  import { SubmitBorrow } from "@/lib/db/Transaction";
  import { Button, Label, Input, Select } from "flowbite-svelte";
  import { Cart } from "@/store/cart";

  import { checkandCreateUser } from "@/lib/db/User";
  import { Link } from "svelte-routing";

  $: data = {
    name: "",
    phone: "",
  };
  const onSubmit = async () => {
    // await SubmitBorrow(data);
    const user = await checkandCreateUser(data.phone, data.name);
    await SubmitBorrow(user.id, $Cart);
  };
</script>

<div class="p-4">
  <h1 class="text-3xl text-navy font-bold p-4">ข้อมูลผู้ยืม</h1>

  <!-- Form -->
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <form
      class="flex flex-col justify-center space-y-6"
      on:submit|preventDefault={onSubmit}
    >
      <!-- Name -->
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
      <!-- Student No. -->
      <!-- <Label class="space-y-2">
        <span class="text-navy">รหัสนักศึกษา</span>
        <Input
          type="text"
          name="productName"
          bind:value={data.name}
          class="focus:border-orange focus:ring-orange"
          placeholder="จักรยานที่ขโมยมา"
          required
        />
      </Label> -->

      <!-- Phone No. -->
      <Label class="space-y-2">
        <span class="text-navy">เบอร์โทร</span>
        <Input
          type="text"
          name="phone"
          bind:value={data.phone}
          class="focus:border-orange focus:ring-orange"
          placeholder="086XXXXX"
          required
        />
      </Label>

      <Button type="submit" class="w-full bg-orange text-navy font-bold"
        >เพิ่ม</Button
      >
    </form>
    <Link to="/cart" class="flex justify-center text-navy underline"
      >ย้อนกลับ</Link
    >
  </div>
</div>
