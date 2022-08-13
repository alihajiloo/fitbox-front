<template>
  <div dir="rtl">
    <div>
      <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">پروفایل</h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="w-full max-w-md space-y-8">
              <div class="mx-auto flex max-w-xs">
                <button class="focus:outline-none focus:shadow-solid mx-auto rounded-full text-sm text-white">
                  <img
                    class="h-20 w-20 rounded-full"
                    src="~assets/vectors/profile.svg"
                    alt />
                </button>
              </div>
              <form
                class="mt-8 space-y-6"
                action="#"
                novalidate="false"
                @submit.prevent="update(firstName, lastName, age, mobile, type, nationalId)"
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
                      class="text-demiBold mt-4 mb-2 mr-1 block text-xs sm:text-base">
                      نام
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      v-model="firstName"
                      required="نام را وارد کنید!"
                      class="focus:outline-none relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="نام" />
                  </div>
                  <div dir="rtl">
                    <label
                      for="lastName"
                      class="text-demiBold mt-4 mb-2 mr-1 block text-xs sm:text-base">
                      نام خانوادگی
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      v-model="lastName"
                      required="نام خانوادگی را وارد کنید!"
                      class="focus:outline-none relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="نام خانوادگی" />
                  </div>
                  <div dir="rtl">
                    <label
                      for="age"
                      class="text-demiBold mt-4 mb-2 mr-1 block text-xs sm:text-base">
                      سن
                    </label>
                    <input
                      id="age"
                      name="age"
                      v-model="age"
                      type="number"
                      required="سن را وارد کنید!"
                      class="focus:outline-none relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="سن" />
                  </div>
                  <div dir="rtl">
                    <label
                      for="nationalId"
                      class="text-demiBold mt-4 mb-2 mr-1 block text-xs sm:text-base">
                      کد ملی
                    </label>
                    <input
                      id="nationalId"
                      name="nationalId"
                      v-model="nationalId"
                      type="number"
                      disabled
                      required="کد ملی را وارد کنید!"
                      class="focus:outline-none relative block w-full appearance-none rounded-md border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="کد ملی" />
                  </div>
                  <div>
                    <label
                      for="phone"
                      class="text-demiBold mt-4 mb-2 mr-1 block text-xs sm:text-base">
                      موبایل
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      v-model="mobile"
                      autocomplete="phone"
                      disabled
                      class="focus:outline-none relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="موبایل" />
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
                    ویرایش
                  </button>
                  <h3
                    dir="rtl"
                    class="mt-2 text-center text-sm text-pink-800">
                    {{ error }}
                  </h3>
                  <div
                    dir="rtl"
                    v-if="errors.length">
                    <b>خطاهای زیر را برطرف کنید:</b>
                    <ul>
                      <li v-for="error in errors">{{ error }}</li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "پروفایل fitbox",
    };
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      age: 0,
      mobile: "",
      type: "",
      nationalId: "",
      errors: [],
    };
  },
  methods: {
    async update(firstName, lastName, age, mobile, type, nationalId, password) {
      this.errors = [];

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
  async mounted() {
    let firstName = "";
    let lastName = "";
    let age = "";
    let mobile = "";
    let type = "";
    let nationalId = "";
    await this.$axios
      .get("/user/profile")
      .then(function (response) {
        firstName = response.data.user.firstName;
        lastName = response.data.user.lastName;
        age = response.data.user.age;
        mobile = response.data.user.mobile;
        type = response.data.user.type;
        nationalId = response.data.user.nationalId;
      })
      .catch(function (error) {});
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.mobile = mobile;
    this.type = type;
    this.nationalId = nationalId;
  },
};
</script>
