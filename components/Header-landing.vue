<template>
  <!-- navbar goes here -->
  <nav dir="rtl" class="max-w-full mx-auto bg-dark-gary">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex md:justify-between items-center sm:px-6">
        <!-- mobile button goes here -->
        <div class="md:hidden flex items-center ml-4">
          <button @click="toggle" class="mobile-menu-button">
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div class="flex space-x-4">
          <!-- logo -->
          <div class="md:flex items-center">
            <NuxtLink to="/">
              <img
                class="p-2 max-h-12 sm:max-h-20 h-14"
                src="~assets/logo/parpal-white.png"
              />
            </NuxtLink>
          </div>

          <!-- primary nav -->
          <div class="hidden md:flex items-center space-x-1">
            <a href="#" class="py-5 px-3 text-white hover:text-gray-300"
              >خدمات</a
            >
            <a href="#" class="py-5 px-3 text-white hover:text-gray-300"
              >تعرفه</a
            >
          </div>
        </div>

        <!-- secondary nav -->

        <div class="hidden md:flex items-center justify-end">
          <a
            href="#"
            class="
              whitespace-nowrap
              text-base
              font-medium
              text-white
              hover:text-gray-300
              ml-4
            "
          >
            <NuxtLink to="login"> ورود </NuxtLink>
          </a>
          <a
            href="#"
            class="
              whitespace-nowrap
              inline-flex
              items-center
              justify-center
              py-2
              border border-transparent
              rounded-md
              shadow-sm
              text-base
              font-medium
              text-white
            "
          >
            <NuxtLink to="register"> ثبت نام </NuxtLink>
          </a>
        </div>
      </div>
    </div>
    <!-- <hr class="my-2 border-gray-200 shadow-sm w-auto" /> -->

    <!-- mobile menu -->
    <div
      id="menu"
      :class="[isOpen ? 'hidden' : '']"
      class="mobile-menu md:hidden"
    >
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200 text-white"
        >خدمات</a
      >
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200 text-white"
        >تعرفه</a
      >
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
