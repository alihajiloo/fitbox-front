<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->
  <div
    class="
      min-h-full
      flex
      items-center
      justify-center
      py-12
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <NuxtLink to="/">
          <img
            class="mx-auto h-12 md:h-20 w-auto"
            src="~static/icon.png"
            alt="Workflow"
          />
        </NuxtLink>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          حساب فیت‌باکس خود را بسازید
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          یا
          {{ ' ' }}
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            <NuxtLink to="login">
              <TButton>وارد شوید</TButton>
            </NuxtLink>
          </a>
        </p>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="phone" class="sr-only">موبایل</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autocomplete="phone"
              required=""
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-t-md
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:z-10
                sm:text-sm
              "
              placeholder="موبایل"
            />
          </div>
          <div>
            <label for="password" class="sr-only">کلمه عبور</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-b-md
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:z-10
                sm:text-sm
              "
              placeholder="کلمه عبور"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="
              group
              relative
              w-full
              flex
              justify-center
              py-2
              px-4
              border border-transparent
              text-sm
              font-medium
              rounded-md
              text-white
              bg-primary
              hover:bg-primary-2
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-primary-500
            "
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                class="h-5 w-5 text-green-500 group-hover:text-green-400"
                aria-hidden="true"
              />
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
}
</script>
