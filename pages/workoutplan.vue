<template>
  <div dir="rtl">
    <div>
      <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">برنامه ورزشی</h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <!-- Replace with your content -->

          <!-- Modal toggle -->
          <button
            v-if="$auth.user.type === 'COACH'"
            type="button"
            @click="toggleModal"
            data-modal-toggle="newWorkoutPlan-modal"
            class="mr-2 mb-2 flex rounded-lg border border-purple-700 px-5 py-2.5 text-center text-sm font-medium text-purple-700 hover:bg-primary-600 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-500 dark:hover:text-white dark:focus:ring-purple-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-1 h-5 w-5"
              fill="none hover:fill-white"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4v16m8-8H4" />
            </svg>
            ساخت برنامه
          </button>

          <!-- Start Modal -->
          <div
            id="newWorkoutPlan-modal"
            tabindex="-1"
            class="h-modal fixed top-0 right-0 left-0 z-40 block flex w-full items-center justify-center overflow-y-auto overflow-x-hidden backdrop-blur-sm backdrop-brightness-75 backdrop-filter md:inset-0 md:h-full"
            aria-modal="true"
            :class="[!isOpen ? 'hidden' : '']"
            role="dialog">
            <div class="relative h-full w-full max-w-md p-4 md:h-auto">
              <!-- Modal content -->
              <div class="relative rounded-lg bg-white shadow dark:bg-gray-700">
                <button
                  @click="toggleModal"
                  type="button"
                  class="absolute top-3 left-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-toggle="authentication-modal">
                  <svg
                    aria-hidden="true"
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
                <div class="py-6 px-6 lg:px-8">
                  <h3 class="text-demiBold mb-4 text-xl text-gray-900 dark:text-white">ساخت برنامه جدید</h3>
                  <form class="space-y-6">
                    <div>
                      <label
                        for="name"
                        class="text-medium mb-2 block text-sm text-gray-900 dark:text-gray-300"
                        >نام</label
                      >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        v-model="name"
                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                        placeholder="حجم طبیعی"
                        required="" />
                    </div>

                    <div>
                      <label
                        for="goal"
                        class="text-medium mb-2 block text-sm text-gray-900 dark:text-gray-300"
                        >هدف</label
                      >
                      <input
                        type="text"
                        name="goal"
                        id="goal"
                        v-model="goal"
                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                        placeholder="۷۵ کیلو"
                        required="" />
                    </div>

                    <div>
                      <label
                        for="duration"
                        class="text-medium mb-2 block text-sm text-gray-900 dark:text-gray-300"
                        >مدت</label
                      >
                      <input
                        type="tel"
                        name="duration"
                        id="duration"
                        v-model="duration"
                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                        placeholder="۴ هفته‌ای"
                        required="" />
                    </div>

                    <div>
                      <label
                        for="athleteMobile"
                        class="text-medium mb-2 block text-sm text-gray-900 dark:text-gray-300"
                        >ورزشکار</label
                      >
                      <input
                        type="tel"
                        name="athleteMobile"
                        id="athleteMobile"
                        v-model="athleteMobile"
                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                        placeholder="۰۹۱۲xxx-xxxx"
                        required="" />
                    </div>
                    <button
                      @click.prevent="create(name, goal, duration, athleteMobile)"
                      type="submit"
                      class="focus:outline-none w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-700 dark:bg-blue-600 dark:hover:bg-purple-700">
                      ثبت
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- End Modal -->
          <div class="mx-4 rounded-lg border bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
            <div class="flow-root">
              <ul
                role="list"
                class="divide-y divide-gray-200 dark:divide-gray-700">
                <li
                  v-for="workoutPlan in workoutPlans"
                  class="py-3 px-3 hover:bg-gray-100 sm:py-4 sm:px-4">
                  <NuxtLink
                    class=""
                    :to="`/workoutPlan/${workoutPlan.id}`">
                    <div class="flex items-center">
                      <div class="min-w-0 flex-1">
                        <p class="text-demiBold truncate text-gray-900 dark:text-white">
                          برنامه {{ workoutPlan.name }}
                        </p>
                        <p class="truncate text-sm text-gray-500 dark:text-gray-400">هدف: {{ workoutPlan.goal }}</p>
                      </div>

                      <div class="w-max">
                        <p class="w-full text-center font-semibold text-gray-900 dark:text-white">
                          {{ workoutPlan.duration }} هفته
                        </p>
                        <div class="grid w-full place-items-center">
                          <!-- <span
                            v-if="workoutPlan.isSuccess"
                            class="rounded bg-green-100 py-0.5 px-2.5 text-sm font-medium text-green-800 dark:bg-green-200 dark:text-green-900">
                            خاتمه یافته
                          </span> -->
                          <!-- <span
                            v-else
                            class="rounded bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800 dark:bg-red-200 dark:text-red-900">
                            خاتمه نیافته
                          </span> -->
                        </div>
                      </div>
                    </div>
                  </NuxtLink>
                </li>
              </ul>
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
      title: "برنامه ورزشی fitbox",
    };
  },
  data() {
    return {
      workoutPlans: [],
      isOpen: false,
      name: "",
      goal: "",
      duration: "",
      athleteMobile: "",
    };
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
    handleFocusOut() {
      if (this.isOpen) this.isOpen = false;
    },

    async create(name, goal, duration, athleteMobile) {
      let toast = this.$toast;
      await this.$axios
        .post("/workout-plan", {
          name: name,
          goal: goal,
          duration: +duration,
          athleteMobile: athleteMobile,
        })
        .then(function (response) {
          toast.show({
            message: ".با موفقیت ثبت شد",
            classToast: "bg-primary z-50",
            classTitle: "text-teal-100",
            classMessage: "text-white text-right text-bold",
            classClose: "text-white",
            classTimeout: "bg-primary-800",
          });
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            toast.show({
              message: "!خطا! شما مربی نیستید",
              classToast: "bg-accent-2 z-50",
              classTitle: "text-teal-100",
              classMessage: "text-white text-right text-bold",
              classClose: "text-white",
              classTimeout: "bg-red-800",
            });
          } else if (error.response.status === 400) {
            toast.show({
              message: "!شماره موبایل را بررسی کنید",
              classToast: "bg-accent-2 z-50",
              classTitle: "text-teal-100",
              classMessage: "text-white text-right text-bold",
              classClose: "text-white",
              classTimeout: "bg-red-800",
            });
          } else if (error.response.status === 404) {
            toast.show({
              x: 0,
              y: 0,
              message: "!شماره تماس ورزشکار در سامانه موجود نمی‌باشد",
              classToast: "bg-yellow-500 z-50",
              classTitle: "text-teal-100",
              classMessage: "text-white text-right text-bold",
              classClose: "text-white",
              classTimeout: "bg-yellow-800",
            });
          }
        });
    },
  },
  async mounted() {
    let workoutPlans = [];
    await this.$axios
      .get("/workout-plan/athleteWorkoutPlans")
      .then(function (response) {
        workoutPlans = response.data.workoutPlans;
      })
      .catch(function (error) {});
    this.workoutPlans = workoutPlans;
  },
};
</script>
