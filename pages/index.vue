<template>
  <div class="mx-auto h-screen bg-primary relative">
    <div class="absolute top-0 right-0">
      <NuxtLink to="/register">
        <button class="bg-primary ring-2 rounded ring-white text-white p-2 m-2">
          ثبت نام
        </button></NuxtLink
      >
      <NuxtLink to="/login">
        <button class="bg-transparent text-white p-2 m-2">
          ورود
        </button></NuxtLink
      >
    </div>
    <div class="h-screen flex">
      <div class="m-auto">
        <img
          class=""
          src="~assets/images/dambbbel.ir.svg"
          width="400"
          height="400"
        />
        <h2 class="text-center text-2xl md:text-3xl lalezar text-white">
          فیت‌باکس: سامانه ورزشی هوشمند
        </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'landing',
})
</script>
