<template>
  <!-- navbar goes here -->
  <div dir="rtl">
    <nav class="bg-primary-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <NuxtLink to="/">
              <div class="flex-shrink-0">
                <img
                  class="h-8 w-8"
                  src="~assets/images/dambbbel.ir.svg"
                  alt="fitbox" /></div
            ></NuxtLink>
            <div class="hidden md:block">
              <div class="mr-10 flex items-baseline">
                <NuxtLink
                  to="/dashboard"
                  class="focus:outline-none rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white focus:bg-gray-700 focus:text-white"
                  >داشبورد</NuxtLink
                >
                <NuxtLink
                  to="/workoutplan"
                  class="focus:outline-none mr-4 rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white"
                  >برنامه ورزشی</NuxtLink
                >
                <NuxtLink
                  to="/mealplan"
                  class="focus:outline-none mr-4 rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white"
                  >برنامه غذایی</NuxtLink
                >
              </div>
            </div>
          </div>
          <div
            @focusout="handleFocusOut"
            tabindex="0"
            class="hidden md:block">
            <div class="mr-4 flex items-center md:mr-6">
              <!-- Profile dropdown -->
              <div class="relative">
                <div>
                  <div class="flex max-w-xs justify-center">
                    <button
                      @click="toggle"
                      class="focus:outline-none focus:shadow-solid rounded-full text-sm text-white"
                      id="user-menu"
                      aria-label="User menu"
                      aria-haspopup="true">
                      <img
                        class="h-8 w-8 rounded-full"
                        src="~assets/vectors/profile.svg"
                        alt />
                    </button>
                  </div>
                  <h3 class="text-center text-white">
                    {{ $auth.user.firstName + " " + $auth.user.lastName }}
                  </h3>
                </div>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95">
                  <div
                    v-show="isOpen"
                    class="absolute left-0 mt-2 w-48 origin-top-right rounded-md shadow-lg">
                    <div
                      class="shadow-xs rounded-md bg-white py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu">
                      <NuxtLink
                        to="/register-athlete"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        >تکمیل پروفایل</NuxtLink
                      >
                      <NuxtLink
                        to="/profile"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        >پروفایل</NuxtLink
                      >
                      <NuxtLink
                        to="/settings"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        >تنظیمات</NuxtLink
                      >
                      <a
                        @click="logout"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem">
                        خروج
                      </a>
                    </div>
                  </div>
                </transition>
              </div>
              <button
                class="focus:outline-none mr-3 rounded-full border-2 border-transparent p-1 text-white hover:text-white focus:bg-gray-700 focus:text-white"
                aria-label="Notifications">
                <svg
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button
              @click="toggle"
              class="focus:outline-none inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white">
              <svg
                :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg
                :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        @focusout="handleFocusOut"
        tabindex="0"
        :class="[isOpen ? '' : 'hidden', 'md:hidden']">
        <div class="px-2 pt-2 pb-3 sm:px-3">
          <NuxtLink
            to="/dashboard"
            class="focus:outline-none block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white focus:bg-gray-700 focus:text-white"
            >داشبورد</NuxtLink
          >
          <NuxtLink
            to="/workoutplan"
            class="focus:outline-none mt-1 block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white"
            >برنامه ورزشی</NuxtLink
          >
          <NuxtLink
            to="/mealplan"
            class="focus:outline-none mt-1 block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white"
            >برنامه غذایی</NuxtLink
          >
        </div>
        <div class="border-t border-gray-700 pt-4 pb-3">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="~assets/vectors/profile.svg"
                alt />
            </div>
            <div class="mr-3">
              <div class="text-base font-medium leading-none text-white">
                {{ $auth.user.firstName + " " + $auth.user.lastName }}
              </div>
              <div class="mt-1 text-sm font-medium leading-none text-white">
                {{ $auth.user.mobile }}
              </div>
            </div>
          </div>
          <div class="mt-3 px-2">
            <a
              href="#"
              class="focus:outline-none block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white"
              >تکمیل پروفایل</a
            ><a
              href="#"
              class="focus:outline-none block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white"
              >پروفایل</a
            >
            <a
              href="#"
              class="focus:outline-none mt-1 block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white"
              >تنظیمات</a
            >
            <a
              @click="logout"
              class="focus:outline-none mt-1 block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white">
              خروج
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    async logout() {
      this.$toast.show({
        message: ".با موفقیت خارج شدید",
        classToast: "bg-accent-2",
        classTitle: "text-teal-100",
        classMessage: "text-white text-right text-bold",
        classClose: "text-white",
        classTimeout: "bg-red-800",
      });
      await this.$auth.logout();
      this.$router.push("/login");
    },
    handleFocusOut() {
      if (this.isOpen) this.isOpen = false;
    },
  },
};
</script>
