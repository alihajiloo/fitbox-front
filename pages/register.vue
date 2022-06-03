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
          <div
            dir="rtl"
            class="mb-4 flex justify-center">
            <div>
              <input
                type="radio"
                id="ATHLETE"
                value="ATHLETE"
                v-model="type" />
              <label for="ATHLETE">ورزشکار</label>
            </div>
            <div class="mr-2">
              <input
                type="radio"
                id="COACH"
                value="COACH"
                v-model="type" />
              <label for="COACH">مربی</label>
            </div>
          </div>
          <div dir="rtl">
            <label
              for="firstName"
              class="sr-only">
              نام
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              v-model="firstName"
              required="نام را وارد کنید!"
              class="focus:outline-none relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="نام" />
          </div>
          <div dir="rtl">
            <label
              for="lastName"
              class="sr-only">
              نام خانوادگی
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              v-model="lastName"
              required="نام خانوادگی را وارد کنید!"
              class="focus:outline-none relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="نام خانوادگی" />
          </div>
          <div dir="rtl">
            <label
              for="age"
              class="sr-only">
              سن
            </label>
            <input
              id="age"
              name="age"
              v-model="age"
              type="number"
              required="سن را وارد کنید!"
              class="focus:outline-none relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="سن" />
          </div>
          <div dir="rtl">
            <label
              for="nationalId"
              class="sr-only">
              کد ملی
            </label>
            <input
              id="nationalId"
              name="nationalId"
              v-model="nationalId"
              type="number"
              required="کد ملی را وارد کنید!"
              class="focus:outline-none relative block w-full appearance-none rounded-none border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="کد ملی" />
          </div>
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
              v-model="mobile"
              autocomplete="phone"
              required=""
              class="focus:outline-none relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
              v-model="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="focus:outline-none relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="کلمه عبور" />
          </div>
        </div>

        <div>
          <button
            @click.prevent="register(firstName, lastName, age, mobile, type, nationalId, password)"
            type="submit"
            class="hover:bg-primary-2 focus:outline-none focus:ring-primary-500 group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white focus:ring-2 focus:ring-offset-2">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                class="h-5 w-5 text-green-500 group-hover:text-green-400"
                aria-hidden="true" />
            </span>
            ثبت نام
          </button>
          <h3
            dir="rtl"
            class="mt-2 text-center text-sm text-pink-800">
            {{ error }}
          </h3>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  auth: "guest",
  data() {
    return {
      firstName: "",
      lastName: "",
      age: 0,
      mobile: "",
      type: "",
      nationalId: "",
      username: "",
      password: "",
      error: "",
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async register(firstName, lastName, age, mobile, type, nationalId, password) {
      // alert(username+":"+password)
      const router = this.$router;

      let error2 = "";
      await this.$axios
        .post("/user", {
          firstName: firstName,
          lastName: lastName,
          age: +age,
          mobile: mobile,
          type: type,
          nationalId: nationalId,
          password: password,
        })
        .then(function (response) {
          // after login completes
          // location.replace("/dashboard");
          router.push({ path: "/login" });
        })
        .catch(function (error) {
          if (error.response.status === 402) {
            error2 = "کاربری با این مشخصات قبلا ثبت نام کرده است";
          } else {
            error2 = "خطایی رخ داده. اطلاعات ورودی را بررسی نمایید!";
          }
        });
      this.error = error2;
    },
  },
};
</script>
