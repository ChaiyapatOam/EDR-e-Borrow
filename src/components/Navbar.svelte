<script>
  import { Link } from "svelte-routing";
  import cartIcon from "/svg/cart.svg";
</script>

<nav class="navbar bg-beige">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabIndex="0" class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          /></svg
        >
      </div>

      <ul
        tabIndex="0"
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </div>
  </div>
  <div class="navbar-center">
    <h1 class="text-3xl">
      <span class="text-navy">EDR</span>
      <span class="text-orange">e-borrow</span>
    </h1>
  </div>
  <div class="navbar-end">
    <!-- Cart -->
    <button class="btn btn-ghost btn-circle">
      <Link to="/cart" class="indicator">
        <img src={cartIcon} class="cart" alt="cart" />
        <span class="badge badge-xs badge-success indicator-item"> 3</span>
      </Link>
    </button>
  </div>
</nav>
