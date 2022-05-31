<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <NuxtLink to="/">
          <img
            class="mx-auto h-12 w-auto md:h-20"
            src="~static/icon.png"
            alt="Workflow" />
        </NuxtLink>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          حساب فیت‌باکس خود را بسازید
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          یا
          {{ " " }}
          <a
            href="#"
            class="font-medium text-indigo-600 hover:text-indigo-500">
            <NuxtLink to="login">
              <TButton>وارد شوید</TButton>
            </NuxtLink>
          </a>
        </p>
      </div>
      <form
        class="mt-8 space-y-6"
        action="#"
        method="POST">
        <input
          type="hidden"
          name="remember"
          value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label
              for="phone"
              class="sr-only">
              موبایل
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autocomplete="phone"
              required=""
              class="focus:outline-none relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="موبایل" />
          </div>
          <div>
            <label
              for="password"
              class="sr-only">
              کلمه عبور
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="focus:outline-none relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="کلمه عبور" />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="hover:bg-primary-2 focus:outline-none focus:ring-primary-500 group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white focus:ring-2 focus:ring-offset-2">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                class="h-5 w-5 text-green-500 group-hover:text-green-400"
                aria-hidden="true" />
            </span>
            ثبت نام
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
