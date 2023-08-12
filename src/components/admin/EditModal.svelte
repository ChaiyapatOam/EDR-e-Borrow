<script lang="ts">
    import { Button, Modal, Label, Input, Select } from "flowbite-svelte";
    import editIcon from "/svg/edit.svg";
    import { editProduct } from "@/lib/db/Product";
    let clickOutsideModal = false;

    export let id: number;
    export let name = "";
    export let category = "";
    export let itemCount;

    const onClick = () => {
        editProduct(id, name, category, itemCount);

        clickOutsideModal = false;
    };
</script>

<Button on:click={() => (clickOutsideModal = true)}>
    <img src={editIcon} class="w-6 h-6" alt="edit icon" />
</Button>

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
                bind:value={name}
                required
            />
        </Label>

        <!-- หมวดหมู่ *Cant Update Category *-->
        <!-- <Label class="space-y-2">
      <span>หมวดหมู่</span>
      <Select class="mt-2" items={categories} bind:value={selected} />
    </Label> -->

        <!-- จำนวน -->
        <Label class="space-y-2">
            <span>จำนวน</span>
            {#if category === "EDRC"}
                <Input
                    type="number"
                    bind:value={itemCount}
                    name="count"
                    placeholder="0"
                    required
                />
            {:else}
                <Input
                    type="number"
                    bind:value={itemCount}
                    name="count"
                    placeholder="1"
                    required
                    disabled
                />
            {/if}
        </Label>

        <!-- อัพโหลดรูป -->
        <!-- <Label class="space-y-2">
            <span>อัพโหลดรูป</span>
            <Input type="file" name="image" value={image} required />
        </Label> -->

        <!-- type="submit" -->
        <Button on:click={onClick} class="w-full bg-orange text-navy font-bold"
            >แก้ไข
        </Button>
    </form>
</Modal>
