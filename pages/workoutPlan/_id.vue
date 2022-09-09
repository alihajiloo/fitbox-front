<template>
  <div dir="rtl">
    <div>
      <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">برنامه ورزشی {{ name }}</h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <!-- Replace with your content -->

          <div class="relative w-full overflow-x-auto px-3 pb-3">
            <ul class="mx-auto flex w-full text-center text-sm font-medium text-gray-500 dark:text-gray-400">
              <li class="mr-2">
                <button
                  @click="getWorkoutPlan('SATURDAY')"
                  class="rounded-lg px-2 py-3"
                  :class="[day === 'SATURDAY' ? active : notActive]"
                  aria-current="page">
                  شنبه
                </button>
              </li>
              <li class="mr-2">
                <button
                  @click="getWorkoutPlan('SUNDAY')"
                  class="rounded-lg py-3 px-2"
                  :class="[day === 'SUNDAY' ? active : notActive]">
                  یک‌شنبه
                </button>
              </li>
              <li class="mr-2">
                <button
                  @click.prevent="getWorkoutPlan('MONDAY')"
                  class="rounded-lg py-3 px-2"
                  :class="[day === 'MONDAY' ? active : notActive]">
                  دوشنبه
                </button>
              </li>
              <li class="mr-2">
                <button
                  @click.prevent="getWorkoutPlan('TUESDAY')"
                  class="rounded-lg py-3 px-2"
                  :class="[day === 'TUESDAY' ? active : notActive]">
                  سه‌شنبه
                </button>
              </li>
              <li class="mr-2">
                <button
                  @click="getWorkoutPlan('WEDNESDAY')"
                  class="rounded-lg py-3 px-2"
                  :class="[day === 'WEDNESDAY' ? active : notActive]">
                  چهارشنبه
                </button>
              </li>
              <li class="mr-2">
                <button
                  @click="getWorkoutPlan('THURSDAY')"
                  class="rounded-lg py-3 px-2"
                  :class="[day === 'THURSDAY' ? active : notActive]">
                  پنج‌شنبه
                </button>
              </li>
              <li class="mr-2">
                <button
                  @click="getWorkoutPlan('FRIDAY')"
                  class="rounded-lg py-3 px-2"
                  :class="[day === 'FRIDAY' ? active : notActive]">
                  جمعه
                </button>
              </li>
            </ul>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-right text-sm text-gray-500 dark:text-gray-400">
              <thead class="text-demiBold bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    class="p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600" />
                      <label
                        for="checkbox-all-search"
                        class="sr-only"
                        >checkbox</label
                      >
                    </div>
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-2">
                    نام حرکت
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-2">
                    ست
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-2">
                    تکرار
                  </th>
                  <th
                    v-if="$auth.user.type === 'COACH'"
                    scope="col"
                    class="py-3 px-2">
                    عملیات
                  </th>
                </tr>
              </thead>
              <tbody v-if="workoutPlanInfos">
                <tr
                  v-for="infos in workoutPlanInfos"
                  class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600" />
                      <label
                        for="checkbox-table-search-1"
                        class="sr-only"
                        >checkbox</label
                      >
                    </div>
                  </td>
                  <td
                    scope="row"
                    class="whitespace-nowrap py-4 px-2 font-medium text-gray-900 dark:text-white">
                    {{ infos.name }}
                  </td>
                  <td class="py-4 px-2">
                    {{ infos.maxSet == infos.minSet ? infos.maxSet : infos.maxSet + " - " + infos.minSet }}
                  </td>
                  <td class="py-4 px-2">
                    {{ infos.maxReps == infos.minReps ? infos.maxReps : infos.maxReps + " - " + infos.minReps }}
                  </td>
                  <td
                    v-if="$auth.user.type === 'COACH'"
                    class="flex items-center space-x-3 py-4 px-2">
                    <button
                      @click="deleteInfo(infos.id)"
                      class="max-w-8 h-5 max-h-8 w-5 md:h-6 md:w-6">
                      <img
                        src="~/assets/vectors/delete.svg"
                        alt="حذف" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <!-- Modal toggle -->
                  <button
                    v-if="$auth.user.type === 'COACH'"
                    type="button"
                    @click="toggleModal"
                    data-modal-toggle="newWorkoutPlan-modal"
                    class="h-min mr-2 mb-2 flex w-max rounded-lg border border-purple-700 px-5 py-2.5 text-center text-sm font-medium text-purple-700 hover:bg-primary-600 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-500 dark:hover:text-white dark:focus:ring-purple-900">
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
                    افزودن آیتم
                  </button>

                  <!-- Start Modal -->
                  <div
                    id="newWorkoutPlan-modal"
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
                          <h3 class="text-demiBold mb-4 text-xl text-gray-900 dark:text-white">افزودن آیتم جدید</h3>
                          <form class="space-y-6">
                            <div>
                              <label
                                for="infoName"
                                class="text-medium mb-2 block text-sm text-gray-900 dark:text-gray-300"
                                >نام</label
                              >
                              <input
                                type="text"
                                name="infoName"
                                id="infoName"
                                v-model="infoName"
                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                                placeholder="جلو بازو دمبل"
                                required="" />
                            </div>

                            <div>
                              <label
                                for="minSet"
                                class="text-medium mb-2 block text-sm text-gray-900 dark:text-gray-300"
                                >ست (مینیمم)</label
                              >
                              <input
                                type="number"
                                name="minSet"
                                id="minSet"
                                v-model="minSet"
                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                                placeholder="۳ ست"
                                required="" />
                            </div>
                            <div>
                              <label
                                for="maxSet"
                                class="text-medium mb-2 block text-sm text-gray-900 dark:text-gray-300"
                                >ست (ماکسیمم)</label
                              >
                              <input
                                type="number"
                                name="maxSet"
                                id="maxSet"
                                v-model="maxSet"
                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                                placeholder="۵ ست"
                                required="" />
                            </div>
                            <div>
                              <label
                                for="minReps"
                                class="text-medium mb-2 block text-sm text-gray-900 dark:text-gray-300"
                                >تکرار (مینیمم)</label
                              >
                              <input
                                type="number"
                                name="minReps"
                                id="minReps"
                                v-model="minReps"
                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                                placeholder="۶ بار"
                                required="" />
                            </div>
                            <div>
                              <label
                                for="maxReps"
                                class="text-medium mb-2 block text-sm text-gray-900 dark:text-gray-300"
                                >تکرار (ماکسیمم)</label
                              >
                              <input
                                type="number"
                                name="maxReps"
                                id="maxReps"
                                v-model="maxReps"
                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                                placeholder="۱۰ بار"
                                required="" />
                            </div>
                            <button
                              @click.prevent="create(infoName, minSet, maxSet, minReps, maxReps)"
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
                </tr>
              </tbody>
            </table>
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
      workoutPlan: {},
      day: "SATURDAY",
      name: "",
      infoName: "",
      minSet: "",
      maxSet: "",
      minReps: "",
      maxReps: "",
      workoutPlanInfos: {},
      active: "active bg-blue-500 text-white dark:hover:bg-blue-700",
      notActive: "text-gray-900 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white",
      isOpen: false,
    };
  },
  // computed: {
  //   activeClass() {
  //     return {
  //       "bg-blue-500": true,
  //     };
  //   },
  // },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
    handleFocusOut() {
      this.isOpen = !this.isOpen;
    },
    async getWorkoutPlan(day) {
      let workoutPlan = {};
      await this.$axios
        .get("/workout-plan/workoutPlan", { params: { workoutPlanId: this.$route.params.id, day: day } })
        .then(function (response) {
          workoutPlan = response.data.workoutPlan;
        })
        .catch(function (error) {});

      this.workoutPlan = workoutPlan;
      this.day = day;
      if (workoutPlan) {
        this.workoutPlanInfos = workoutPlan.workoutPlanInfos;
      }
    },

    async create(infoName, minSet, maxSet, minReps, maxReps) {
      let toast = this.$toast;
      let toggleModal = this.toggleModal;
      let getWorkoutPlan = this.getWorkoutPlan;
      const day = this.day;
      await this.$axios
        .post("/workout-plan-info", {
          day: this.day,
          workoutPlanId: this.$route.params.id,
          name: infoName,
          minSet: +minSet,
          maxSet: +maxSet,
          minReps: +minReps,
          maxReps: +maxReps,
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
          toggleModal();
          getWorkoutPlan(day);
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
          }
        });
    },
    async deleteInfo(workoutPlanId) {
      let toast = this.$toast;
      let getWorkoutPlan = this.getWorkoutPlan;
      const day = this.day;
      await this.$axios
        .delete("/workout-plan-info", {
          params: {
            id: workoutPlanId,
          },
        })
        .then(function (response) {
          toast.show({
            message: ".با موفقیت حذف شد" + day,
            classToast: "bg-primary z-50",
            classTitle: "text-teal-100",
            classMessage: "text-white text-right text-bold",
            classClose: "text-white",
            classTimeout: "bg-primary-800",
          });
          getWorkoutPlan(day);
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
          }
        });
    },
  },
  async mounted() {},
  async created() {
    this.workoutPlan = {};
    this.workoutPlanInfos = {};
    let workoutPlan = {};
    await this.$axios
      .get("/workout-plan/workoutPlan", { params: { workoutPlanId: this.$route.params.id, day: this.day } })
      .then(function (response) {
        workoutPlan = response.data.workoutPlan;
      })
      .catch(function (error) {});

    if (workoutPlan) {
      this.workoutPlan = workoutPlan;
      this.workoutPlanInfos = workoutPlan.workoutPlanInfos;
      this.name = workoutPlan.name;
    }
  },
};
</script>
