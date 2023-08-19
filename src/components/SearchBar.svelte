<script>
  import searchIcon from "/svg/search.svg";

  export let search = "";
</script>

<form class="p-4">
  <label
    for="default-search"
    class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label
  >
  <div class="relative">
    <input
      type="text"
      id="default-search"
      class="block w-full p-4 pl-10 text-sm text-gray-900 border border-navy focus:border-navy focus:ring-navy rounded-lg bg-gray-50"
      placeholder="หมูกรอบคั่วพริกเกลือ..."
      bind:value={search}
      required
    />
    <!-- <button
      type="submit"
      class="text-white absolute right-2.5 bottom-2.5 bg-navy hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >ค้นหา</button
    > -->
  </div>
</form>
