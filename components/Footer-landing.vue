<template>
  <footer
    dir="rtl"
    class="footer">
    <div class="footer--container">
      <div class="mx-auto mb-10 flex w-full max-w-6xl flex-wrap items-start justify-between px-4 sm:px-6">
        <div class="w-full px-4 lg:w-6/12">
          <div class="w-1/2">
            <NuxtLink
              class="items-center md:flex"
              to="/">
              <!-- <a href="#" class="text--logo"> -->

              <img
                class="h-14 max-h-12 p-2 sm:max-h-20"
                src="~static/icon.png" />

              <h2 class="text-2xl">فیت‌باکس</h2>
              <!-- </a> -->
            </NuxtLink>
          </div>
          <div class="my-2">
            <h5 class="text-md my-0 text-gray-500">با فیت‌باکس هوشمندانه ورزش کنید!</h5>
          </div>
        </div>

        <div class="w-full px-4 lg:w-4/12">
          <div class="flex w-full flex-wrap items-start justify-between">
            <div class="mr-autol w-6/12">
              <ul class="text-md list-none text-gray-500">
                <li class="mb-2 block text-gray-800">
                  <h3>اطلاعات</h3>
                </li>
                <li class="mb-2 block">
                  <NuxtLink to="about">
                    <button>درباره ما</button>
                  </NuxtLink>
                </li>
                <li class="mb-2 block">خدمات</li>
              </ul>
            </div>

            <div class="mr-auto w-6/12">
              <ul class="text-md list-none text-gray-500">
                <li class="mb-2 block text-gray-800">
                  <h3>پشتیبانی</h3>
                </li>
                <li class="mb-2 block">FAQ</li>
                <li class="mb-2 block">حریم خصوصی</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 shadow-sm" />
      <div class="flex w-full flex-wrap items-center justify-center md:justify-between">
        <div
          dir="ltr"
          class="mx-auto w-full px-4 text-center text-gray-400">
          © 2022 Hadi Maddahi. All Rights Reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
