<script lang="ts">
  export let id: number;
  export let itemId: number;
  export let uid = "";
  export let name = "";
  export let category = "";
  export let quantity = 1;
  export let arr = [];
  export let image = "/images/no-image.webp";

  const handleChage = (event: any) => {
    if (event.target.checked) {
      arr = [
        ...arr,
        {
          id: id,
          category: category,
          itemId: itemId,
          quantity: quantity,
        },
      ];
    }
    // remove from list
    else {
      arr = arr.filter((item) => item.id !== id);
    }
  };
</script>

<!-- <div
  class="flex flex-row items-center justify-center gap-x-8 bg-white border border-gray-200 rounded-lg shadow" 
>-->
<div
  class="grid grid-cols-[1fr_3fr_3fr] bg-white border border-gray-200 rounded-lg shadow mx-auto"
>
  <!-- Checkbox -->
  <div class="flex items-center justify-center">
    <input
      type="checkbox"
      on:change={handleChage}
      class="text-navy rounded focus:ring-orange focus:ring-2"
    />
  </div>
  <div>
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
  </div>
</div>
