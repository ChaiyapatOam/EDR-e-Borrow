<script>
  import { Link } from "svelte-routing";
</script>

<div class="p-4">
  <h1 class="text-3xl text-navy font-bold p-4">ข้อมูลผู้ยืม</h1>

  <!-- Form -->
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <form class="space-y-4 md:space-y-6" action="#">
      <div>
        <label
          for="userName"
          class="block mb-2 text-sm font-medium text-navy dark:text-white"
          >ชื่อผู้ยืม</label
        >
        <input
          type="userName"
          name="userName"
          id="userName"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required
        />
      </div>

      <div>
        <label
          for="studentNumber"
          class="block mb-2 text-sm font-medium text-navy dark:text-white"
          >รหัสนักศึกษา</label
        >
        <input
          type="studentNumber"
          name="studentNumber"
          id="studentNumber"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="65XX"
          required
        />
      </div>

      <div>
        <label
          for="phone"
          class="block mb-2 text-sm font-medium text-navy dark:text-white"
          >เบอร์โทร</label
        >
        <input
          type="phone"
          name="phone"
          id="phone"
          placeholder="081XX"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label
          for="date"
          class="block mb-2 text-sm font-medium text-navy dark:text-white"
          >วันที่นำมาคืน</label
        >
        <input
          type="date"
          name="date"
          id="date"
          placeholder="••••••••"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        class="w-full text-black bg-orange focus:ring-4 focus:outline-none focus:ring-black font-bold rounded-lg text-lg px-5 py-2.5 text-center"
        >ยืนยันการยืม</button
      >
    </form>
    <Link to="/cart" class="flex justify-center text-navy underline">ย้อนกลับ</Link>
  </div>
</div>
