<template>
  <div class="mx-auto h-screen bg-primary relative">
    <button
      class="
        absolute
        bg-primary
        ring-2
        rounded
        ring-white
        text-white
        p-2
        m-2
        top-0
        right-0
      "
    >
      دریافت اپلیکیشن
    </button>
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
