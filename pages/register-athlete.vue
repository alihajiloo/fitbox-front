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
            <div class="h-96 rounded-lg border-4 border-dashed border-gray-200 px-8">
              <div>
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  اطلاعات حساب خود را تکمیل کنید
                </h2>
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
                    class="flex justify-center pb-4">
                    <div>
                      <input
                        type="radio"
                        id="MALE"
                        value="MALE"
                        v-model="gender" />
                      <label for="MALE">مرد</label>
                    </div>
                    <div class="mr-2">
                      <input
                        type="radio"
                        id="FEMALE"
                        value="FEMALE"
                        v-model="gender" />
                      <label for="FEMALE">زن</label>
                    </div>
                  </div>
                  <div
                    dir="rtl"
                    class="flex justify-center pb-4">
                    <div>
                      <input
                        type="radio"
                        id="ECTOMORPH"
                        value="ECTOMORPH"
                        v-model="bodyType" />
                      <label for="ECTOMORPH">اکتومورف</label>
                    </div>
                    <div class="mr-2">
                      <input
                        type="radio"
                        id="MESOMORPH"
                        value="MESOMORPH"
                        v-model="bodyType" />
                      <label for="MESOMORPH">مزومورف</label>
                    </div>
                    <div class="mr-2">
                      <input
                        type="radio"
                        id="ENDOMORPH"
                        value="ENDOMORPH"
                        v-model="bodyType" />
                      <label for="ENDOMORPH">اندومورف</label>
                    </div>
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
                      for="weight"
                      class="sr-only">
                      وزن
                    </label>
                    <input
                      id="weight"
                      name="weight"
                      v-model="weight"
                      type="number"
                      required="وزن را وارد کنید!"
                      class="focus:outline-none relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="وزن" />
                  </div>
                  <div dir="rtl">
                    <label
                      for="height"
                      class="sr-only">
                      قد
                    </label>
                    <input
                      id="height"
                      name="height"
                      v-model="height"
                      type="number"
                      required="قد را وارد کنید!"
                      class="focus:outline-none relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="قد" />
                  </div>
                </div>

                <div>
                  <button
                    @click.prevent="register_athlete(age, weight, height, gender, bodyType)"
                    type="submit"
                    class="hover:bg-primary-2 focus:outline-none focus:ring-primary-500 group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white focus:ring-2 focus:ring-offset-2">
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
export default {
    head() {
    return {
      title: "تکمیل پروفایل fitbox",
    };
  },
  data() {
    return {
      age: "",
      weight: "",
      height: "",
      gender: "",
      bodyType: "",
      error: "",
    };
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async register_athlete(age, weight, height, gender, bodyType) {
    const router = this.$router;

    let error2 = "";
    await this.$axios
      .post("/athlete", {
        age: +age,
        weight: +weight,
        height: +height,
        gender: gender,
        bodyType: bodyType,
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
  async mounted() {
    let age = "";
    let weight = "";
    let height = "";
    let gender = "";
    let bodyType = "";
    await this.$axios
      .get("/athlete/byMobile")
      .then(function (response) {
        age = "" + response.data.age;
        weight = response.data.weight;
        height = response.data.height;
        gender = response.data.gender;
        bodyType = response.data.bodyType;
      })
      .catch(function (error) {});
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.gender = gender;
    this.bodyType = bodyType;
  },
};
</script>
