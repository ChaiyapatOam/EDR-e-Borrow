<script>
  import { Link } from "svelte-routing";
  import bar3 from "/svg/bar3.svg";
  import homeIcon from "/svg/home.svg";
</script>

<nav class="navbar bg-beige">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabIndex="0" class="btn btn-ghost btn-circle">
        <img src={bar3} class="w-6 h-6" alt="bar icon" />
      </div>

      <ul
        tabIndex="0"
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">ผู้ใช้ในระบบ</Link></li>
        <li><Link to="/transaction">ประวัติการยืม</Link></li>
      </ul>
    </div>
  </div>

  <div class="navbar-center">
    <h1 class="text-3xl">
      <span class="text-navy">EDR</span>
      <span class="text-orange">e-borrow</span>
    </h1>
  </div>

  <div class="navbar-end" />
</nav>
