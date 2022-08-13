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
                  <!-- <th
                    scope="col"
                    class="py-3 px-2">
                    عملیات
                  </th> -->
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
                  <th
                    scope="row"
                    class="whitespace-nowrap py-4 px-2 font-medium text-gray-900 dark:text-white">
                    {{ infos.name }}
                  </th>
                  <td class="py-4 px-2">
                    {{ infos.maxSet == infos.minSet ? infos.maxSet : infos.maxSet + " - " + infos.minSet }}
                  </td>
                  <td class="py-4 px-2">
                    {{ infos.maxReps == infos.minReps ? infos.maxReps : infos.maxReps + " - " + infos.minReps }}
                  </td>
                  <!-- <td class="flex items-center space-x-3 py-4 px-2">
                    <a
                      href="#"
                      class="max-w-8 h-5 max-h-8 w-5 md:h-6 md:w-6"
                      ><img
                        src="~/assets/vectors/check-mark.svg"
                        alt="انجام شد" />
                    </a>
                  </td> -->
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
      workoutPlanInfos: {},
      active: "active bg-blue-500 text-white dark:hover:bg-blue-700",
      notActive: "text-gray-900 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white",
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
