<script lang="ts">
    import { Cart } from "@/store/cart";
    import plusIcon from "/svg/plus.svg";
    export let id: number;
    export let uid = "";
    export let name = "";
    export let quantity = 0;
    export let category = "";
    export let image = "/images/no-image.webp";
    const addToCart = () => {
        // Check if product is exited if length = 0 add Product else itemCout++
        $Cart.filter((c) => c.id == id).length == 0
            ? ($Cart = [
                  ...$Cart,
                  {
                      id: id,
                      name: name,
                      image: image,
                      category: category,
                      quantity: 1,
                  },
              ])
            : $Cart.find((c) => c.id == id).quantity++;
    };
</script>

<div class="grid grid-cols-2 max-w-xs bg-white border border-gray-200 rounded-lg shadow">
    <div class="p-4">
        <img
            class="object-contain w-32 rounded-t-lg h-48 md:w-22 md:rounded-none md:rounded-l-lg"
            src={image}
            alt=""
        />
    </div>
    <!-- Right Side Content -->
    <div class="flex flex-col self-center p-4 leading-normal">
        <!-- Head(Category) -->
        <p class="text-orange font-bold">{uid}</p>
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
            {name}
        </h5>

        <!-- Bottom Section -->
        <div class="flex justify-between items-center gap-4">
            {#if category == "EDRT"}
                {#if quantity === 0}
                    <p class="text-black bg-red-500 rounded-md p-1">
                        ยืมไม่ได้
                    </p>
                {:else}
                    <p class="text-black bg-green-400 rounded-md p-1">ยืมได้</p>
                {/if}
            {:else if quantity === 0}
                <p class="text-black bg-red-500 rounded-md p-1">ยืมไม่ได้</p>
            {:else}
                <p class="font-normal text-gray-700">
                    คงเหลือ <span class="font-bold">{quantity}</span> ชิ้น
                </p>
            {/if}
            <!-- Button Add (ยืม) -->
            {#if quantity > 0}
                <button
                    on:click={() => addToCart()}
                    class=" hover:text-white border-2 border-orange hover:bg-orange focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg"
                >
                    <img src={plusIcon} class="w-6 h-6" alt="plus icon" />
                </button>
            {/if}
        </div>
    </div>
</div>
