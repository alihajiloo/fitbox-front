<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <NuxtLink to="/">
          <img
            class="mx-auto h-12 md:h-20 w-auto"
            src="~static/icon.png"
            alt="fitbox | فیت‌باکس"
          />
        </NuxtLink>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">ورود</h2>
        <h3 class="text-center mt2 text-gray-800">با اکانت فیت‌باکس خود وارد شوید</h3>
        <p
          dir="rtl"
          class="mt-2 text-center text-sm text-gray-600"
        >
          یا
          {{ ' ' }}
          <a
            href="#"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
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
          value="true"
        />
        <div class="rounded-md shadow-sm -space-y-px">
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
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="موبایل"
              v-model="username"
            />
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
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="کلمه عبور"
              v-model="password"
            />
          </div>
        </div>

        <div
          dir="rtl"
          class="flex items-center justify-between"
        >
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              for="remember-me"
              class="mr-2 block text-sm text-gray-900"
            >
              مرا به خاطر بسپار
            </label>
          </div>

          <NuxtLink to="/forgetPassword">
            <h3
              href="#"
              class="text-sm text-indigo-600 hover:text-indigo-500"
            >
              کلمه عبور خود را فراموش کرده اید؟
            </h3>
          </NuxtLink>
        </div>

        <div>
          <button
            @click.prevent="login(username, password)"
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-accent-2 hover:bg-primary-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                class="h-5 w-5 text-green-500 group-hover:text-green-400"
                aria-hidden="true"
              />
            </span>
            ورود
          </button>
          <h3
            dir="rtl"
            class="mt-2 text-sm text-center text-pink-800"
          >
            {{ error }}
          </h3>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async login(username, password) {
      // alert(username+":"+password)
      let error2 = '';
      await this.$axios
        .post('/auth/login', {
          username: username,
          password: password,
        })
        .then(function (response) {
          // after login completes
          location.replace('/dashboard');
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            error2 = 'موبایل یا کلمه عبور اشتباه است!';
          }
        });
      this.error = error2;
    },
  },
};
</script>
