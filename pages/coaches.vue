<template>
  <div dir="rtl">
    <div>
      <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">لیست مربی ها</h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <!-- Replace with your content -->

          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <!-- <div class="mx-2 flex justify-end bg-white pb-4 dark:bg-gray-900">
              <label
                for="table-search"
                class="sr-only"
                >Search</label
              >
              <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    class="h-5 w-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search-users"
                  class="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="جستجوی مربی" />
              </div>
            </div> -->
            <table class="w-full text-right text-sm text-gray-500 dark:text-gray-400">
              <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    class="py-3 pr-16">
                    نام
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-6">
                    رشته
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-6">
                    وضعیت
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="coach in coaches"
                  class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="flex items-center whitespace-nowrap py-4 px-6 text-gray-900 dark:text-white">
                    <img
                      class="h-10 w-10 rounded-full"
                      src="~assets/vectors/profile.svg"
                      alt="Jese image" />
                    <div class="pl-3">
                      <div class="text-base font-semibold">{{ coach.user.firstName }} {{ coach.user.lastName }}</div>
                      <div class="font-normal text-gray-500">سابقه: {{ coach.experience }} سال</div>
                    </div>
                  </th>
                  <td class="py-4 px-6">{{ field[coach.field] }}</td>
                  <td class="py-4 px-6">
                    <div class="flex items-center">
                      <div class="ml-2 h-2.5 w-2.5 rounded-full bg-green-400"></div>
                      آنلاین
                    </div>
                  </td>
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
      coaches: [],
      field: {
        BODY_BUILDING: "بدنسازی",
        TRACK_AND_FIELD: "دومیدانی",
        YOGA: "یوگا",
        BOXING: "بوکس",
        TRX: "TRX",
        CROSS_FIT: "کراس فیت",
        WRESTLING: "کشتی",
        KARATE: "کاراته",
      },
    };
  },
  methods: {},
  async mounted() {
    let coaches = [];
    await this.$axios
      .get("/coach/all")
      .then(function (response) {
        coaches = response.data.Coaches;
      })
      .catch(function (error) {});
    this.coaches = coaches;
  },
};
</script>
