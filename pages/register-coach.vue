<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->

  <div dir="rtl">
    <div>
      <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-6 sm:px-0">
            <div class="h-auto rounded-lg border-4 border-dashed border-gray-200 px-8">
              <div>
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">اطلاعات حساب خود را تکمیل کنید</h2>
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
                  <div dir="rtl">
                    <label
                      for="experience"
                      class="text-demiBold mt-4 mb-2 mr-1 block text-xs sm:text-base">
                      سابقه
                    </label>
                    <input
                      id="experience"
                      name="experience"
                      v-model="experience"
                      type="number"
                      required="سابقه را وارد کنید!"
                      class="focus:outline-none relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="سابقه" />
                  </div>

                  <div dir="rtl">
                    <label
                      for="license"
                      class="text-demiBold mt-4 mb-2 mr-1 block text-xs sm:text-base">
                      مدارک
                    </label>
                    <textarea
                      id="license"
                      name="license"
                      v-model="license"
                      type="textarea"
                      rows="4"
                      maxlength="255"
                      class="focus:outline-none relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="مدارک"></textarea>
                  </div>

                  <div dir="rtl">
                    <label
                      for="resume"
                      class="text-demiBold mt-4 mb-2 mr-1 block text-xs sm:text-base">
                      رزومه
                    </label>
                    <textarea
                      id="resume"
                      name="resume"
                      v-model="resume"
                      type="textarea"
                      rows="4"
                      maxlength="255"
                      class="focus:outline-none relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="رزومه"></textarea>
                  </div>
                  <div dir="rtl">
                    <label
                      for="resume"
                      class="text-demiBold mt-4 mb-2 mr-1 block text-xs sm:text-base">
                      زمینه فعالیت
                    </label>
                    <select
                      v-model="field"
                      class="focus:outline-none relative block w-full appearance-none rounded-md border border-gray-300 px-8 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                      <option
                        selected="selected"
                        value="BODY_BUILDING">
                        بدن‌سازی
                      </option>
                      <option value="TRACK_AND_FIELD">دو میدانی</option>
                      <option value="YOGA">یوگا</option>
                      <option value="BOXING">بوکس</option>
                      <option value="TRX">TRX</option>
                      <option value="CROSS_FIT">کراس فیت</option>
                      <option value="WRESTLING">کشتی</option>
                      <option value="KARATE">کاراته</option>
                    </select>
                  </div>
                </div>
                <div>
                  <button
                    :disabled="isDisabled"
                    @click.prevent="register_coach(experience, license, resume, field)"
                    type="submit"
                    class="hover:bg-primary-2 focus:outline-none focus:ring-primary-500 group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white focus:ring-2 focus:ring-offset-2"
                    :class="{ 'bg-gray-600': isDisabled, 'bg-primary': !isDisabled }">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                      <LockClosedIcon
                        class="h-5 w-5 text-green-500 group-hover:text-green-400"
                        aria-hidden="true" />
                    </span>
                    تکمیل
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

          <!-- /End replace -->
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import "tw-elements";

export default {
  head() {
    return {
      title: "تکمیل پروفایل fitbox",
    };
  },
  data() {
    return {
      experience: "",
      license: "",
      resume: "",
      field: "",
      error: "",
      isDisabled: false,
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async register_coach(experience, license, resume, field) {
      const router = this.$router;

      let error2 = "";
      await this.$axios
        .post("/coach", {
          experience: +experience,
          license: license,
          resume: resume,
          field: field,
        })
        .then(function (response) {
          // after login completes
          // location.replace("/dashboard");
          router.push({ path: "/dashboard" });
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
    let experience = "";
    let license = "";
    let resume = "";
    let field = "";
    let isDisabled = false;
    await this.$axios
      .get("/coach")
      .then(function (response) {
        experience = "" + response.data.experience;
        license = response.data.license;
        resume = response.data.resume;
        field = response.data.field;
        if (response.data !== "") isDisabled = true;
      })
      .catch(function (error) {});
    this.experience = experience;
    this.license = license;
    this.resume = resume;
    this.field = field;
    this.isDisabled = isDisabled;
  },
};
</script>
