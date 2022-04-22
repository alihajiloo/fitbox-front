<template>
  <!-- navbar goes here -->
  <nav class="max-w-7xl mx-auto">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex md:justify-between">
        <!-- mobile button goes here -->
        <div class="md:hidden flex items-center mr-4">
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
                class="p-2 max-h-12 sm:max-h-20"
                src="~assets/logo/plllatform.png"
                alt=""
              />
            </NuxtLink>
          </div>

          <!-- primary nav -->
          <div class="hidden md:flex items-center space-x-1">
            <a href="#" class="py-5 px-3 text-gray-900 hover:text-gray-700"
              >services</a
            >
            <a href="#" class="py-5 px-3 text-gray-900 hover:text-gray-700"
              >price</a
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
              text-gray-900
              hover:text-gray-700
              mr-8
            "
          >
            <NuxtLink to="login">
              <TButton>login</TButton>
            </NuxtLink>
          </a>
          <a
            href="#"
            class="
              whitespace-nowrap
              inline-flex
              items-center
              justify-center
              px-4
              py-2
              border border-transparent
              rounded-md
              shadow-sm
              text-base
              font-medium
              text-white
              bg-primary
              hover:bg-primary-2
            "
          >
            <NuxtLink to="register">
              <TButton>register</TButton>
            </NuxtLink>
          </a>
        </div>
      </div>
    </div>
    <hr class="my-2 border-gray-200 shadow-sm w-auto" />

    <!-- mobile menu -->
    <div
      id="menu"
      :class="[isOpen ? 'hidden' : '']"
      class="mobile-menu md:hidden"
    >
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200 text-white">services</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200 text-white">price</a>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true ,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
