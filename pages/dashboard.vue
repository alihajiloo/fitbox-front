<template>
  <div dir="rtl">
    <div>
      <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">داشبورد</h1>
        </div>
      </header>
      <main
        dir="rtl"
        class="mx-auto flex max-w-7xl flex-wrap justify-center py-6 px-4 sm:px-6 lg:px-8">
        <!-- Replace with your content -->

        <div class="basis-1/2 md:max-w-1/4 mt-5 ml-5 w-full md:w-2/5">
          <NuxtLink
            to="/workoutplan"
            class="flex flex-col items-center rounded-lg border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row">
            <img
              class="h-96 w-full rounded-t-lg object-cover blur-xs filter md:h-36 md:rounded-none md:rounded-lg"
              src="~assets/images/bodybuilding-1.jpg"
              alt="" />
            <div class="absolute w-full px-12 py-4 text-right leading-normal">
              <h5 class="text-bold mb-2 text-3xl tracking-tight text-white">برنامه ورزشی</h5>
              <p class="text-medium mb-3 text-lg text-white dark:text-gray-400">مشاهده و مدیریت برنامه های ورزشی</p>
            </div>
          </NuxtLink>
        </div>
        <div class="basis-1/2 md:max-w-1/4 mt-5 ml-5 w-full md:w-2/5">
          <NuxtLink
            to="/coaches"
            class="flex flex-col items-center rounded-lg border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row">
            <img
              class="h-96 w-full rounded-t-lg object-cover blur-xs brightness-75 filter md:h-36 md:rounded-none md:rounded-lg"
              src="~assets/images/bodybuilding-coach-1.jpg"
              alt="" />
            <div class="absolute w-full px-12 py-4 text-right leading-normal">
              <h5 class="text-bold mb-2 text-3xl tracking-tight text-white">مربی ها</h5>
              <p class="text-medium mb-3 text-lg text-white dark:text-gray-400">مشاهده و مقایسه مربی ها</p>
            </div>
          </NuxtLink>
        </div>
        <!-- /End replace -->
      </main>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "داشبورد fitbox",
    };
  },
};
</script>
