<script lang="ts">
    import { Cart } from "@/store/cart";
    import plusIcon from "/svg/plus.svg";
    import minusIcon from "/svg/minus.svg";

    export let id: number;
    export let category = "";
    let selectQuantity = $Cart.find(
        (c) => c.id == id && c.category == category
    ).selectQuantity;
    let productQuantity = $Cart.find(
        (c) => c.id == id && c.category == category
    ).quantity;

    const increaseItem = () => {
        if (productQuantity > selectQuantity) {
            $Cart.find((c) => c.id == id).selectQuantity++;
            selectQuantity = $Cart.find(
                (c) => c.id == id && c.category == category
            ).selectQuantity;
        }
    };
    const decreaseItem = () => {
        if (selectQuantity > 1) {
            $Cart.find((c) => c.id == id).selectQuantity--;
            selectQuantity = $Cart.find(
                (c) => c.id == id && c.category == category
            ).selectQuantity;
        }
    };
</script>

<!-- For Increment and decrease product -->
<div class="flex justify-center items-center gap-x-3">
    <button class="" on:click={decreaseItem}>
        <img
            src={minusIcon}
            class="w-6 h-6 rounded-md border-2 border-orange hover:bg-orange"
            alt="minus icon"
        />
    </button>
    <p class="font-bold">{selectQuantity}</p>
    <button on:click={increaseItem}>
        <img
            src={plusIcon}
            class="w-6 h-6 rounded-md border-2 border-orange hover:bg-orange"
            alt="plus icon"
        />
    </button>
</div>
