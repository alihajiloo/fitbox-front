<template>
  <footer dir="rtl" class="footer">
    <div class="footer--container">
      <div
        class="w-full flex flex-wrap justify-between items-start mb-10 max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div class="w-full lg:w-6/12 px-4">
          <div class="w-1/2">
            <NuxtLink class="md:flex items-center" to="/">
              <!-- <a href="#" class="text--logo"> -->

              <img
                class="p-2 max-h-12 sm:max-h-20 h-14"
                src="~static/icon.png"
              />

              <h2 class="text-2xl">فیت‌باکس</h2>
              <!-- </a> -->
            </NuxtLink>
          </div>
          <div class="my-2">
            <h5 class="text-md my-0 text-gray-500">با فیت‌باکس هوشمندانه ورزش کنید!</h5>
          </div>
        </div>

        <div class="w-full lg:w-4/12 px-4">
          <div class="w-full flex-wrap flex justify-between items-start">
            <div class="w-full lg:w-6/12 mr-auto">
              <ul class="list-none text-md text-gray-500">
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

            <div class="w-full lg:w-6/12 mr-auto">
              <ul class="list-none text-md text-gray-500">
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
      <div
        class="w-full flex flex-wrap items-center md:justify-between justify-center"
      >
        <div dir="ltr" class="w-full px-4 mx-auto text-center text-gray-400">
          © 2022 Hadi Maddahi. All Rights Reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
