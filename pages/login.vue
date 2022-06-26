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
            alt="fitbox | فیت‌باکس" />
        </NuxtLink>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">ورود</h2>
        <h3 class="mt2 text-center text-gray-800">با اکانت فیت‌باکس خود وارد شوید</h3>
        <p
          dir="rtl"
          class="mt-2 text-center text-sm text-gray-600">
          یا
          {{ " " }}
          <a
            href="#"
            class="font-medium text-indigo-600 hover:text-indigo-500">
            <NuxtLink to="register">
              <TButton dir="rtl">حساب بسازید.</TButton>
            </NuxtLink>
          </a>
        </p>
      </div>
      <form class="mt-8 space-y-6">
        <input
          type="hidden"
          name="remember"
          value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label
              for="phone"
              class="sr-only"
              >موبایل</label
            >
            <input
              id="phone"
              name="phone"
              type="tel"
              autocomplete="phone"
              required=""
              class="focus:outline-none relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="موبایل"
              v-model="username" />
          </div>
          <div>
            <label
              for="password"
              class="sr-only"
              >کلمه عبور</label
            >
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="focus:outline-none relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="کلمه عبور"
              v-model="password" />
          </div>
        </div>

        <div
          dir="rtl"
          class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
            <label
              for="remember-me"
              class="mr-2 block text-sm text-gray-900">
              مرا به خاطر بسپار
            </label>
          </div>

          <NuxtLink to="/forgetPassword">
            <h3
              href="#"
              class="text-sm text-indigo-600 hover:text-indigo-500">
              کلمه عبور خود را فراموش کرده اید؟
            </h3>
          </NuxtLink>
        </div>

        <div>
          <button
            @click.prevent="login(username, password)"
            type="submit"
            class="hover:bg-primary-2 focus:outline-none focus:ring-primary-500 group relative flex w-full justify-center rounded-md border border-transparent bg-accent-2 py-2 px-4 text-sm font-medium text-white focus:ring-2 focus:ring-offset-2">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                class="h-5 w-5 text-green-500 group-hover:text-green-400"
                aria-hidden="true" />
            </span>
            ورود
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "landing",
  auth: "guest",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login(username, password) {
      this.$auth
        .loginWith("local", {
          data: {
            username: username,
            password: password,
          },
        })
        .then(() => {
          this.$toast.show({
            message: ".با موفقیت وارد شدید",
            classToast: "bg-primary",
            classTitle: "text-teal-100",
            classMessage: "text-white text-right text-bold",
            classClose: "text-white",
            classTimeout: "bg-primary-800",
          });
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          if (error.response.status === 401) {
            this.$toast.show({
              message: "!موبایل یا کلمه عبور اشتباه است",
              classToast: "bg-accent-2",
              classTitle: "text-teal-100",
              classMessage: "text-white text-right text-bold",
              classClose: "text-white",
              classTimeout: "bg-red-800",
            });
          }
        });
    },
  },
};
</script>
