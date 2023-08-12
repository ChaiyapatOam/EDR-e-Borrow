<script lang="ts">
    import EditModal from "./EditModal.svelte";
    import editIcon from "/svg/edit.svg";
    export let id: number;
    export let uid = "";
    export let name = "";
    export let quantity = 1;
    export let category = "";
    export let image = "/images/snorlax-orange.png";
    import trashIcon from "/svg/trash.svg";

    const editProduct = () => {};
    const deleteProduct = () => {};
</script>

<div
    class="grid grid-cols-2 max-w-xs bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
>
    <div class="p-4">
        <img
            class="object-contain w-32 rounded-t-lg h-48 md:w-22 md:rounded-none md:rounded-l-lg"
            src={image}
            alt=""
        />
    </div>
    <!-- Right -->
    <div class="flex flex-col self-center p-4 leading-normal">
        <!-- Head(Category) -->
        <p class="text-orange font-bold">{uid}</p>
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
            {name}
        </h5>
        <!-- Bottom Section -->
        <div class="flex justify-center items-center gap-2">
            <p class="font-normal text-gray-700">
                เหลือ <span class="font-bold">{quantity}</span> ชิ้น
            </p>
            <EditModal {id} {name} itemCount={quantity} {category} />
            <!-- <button on:click={deleteProduct}>
        <img src={trashIcon} class="w-6 h-6" alt="trash icon" />
      </button> -->
        </div>
    </div>
</div>
