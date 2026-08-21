<template>
  <UContainer class="pt-10 pb-4">
    <h1 class="sr-only">黫桃小丸子的小游標</h1>
    <SectionBox class="flex items-center gap-12">
      <h2 class="sr-only">畫師的資料</h2>
      <div><NuxtImg src="/images/profile.jpg" class="w-40 rounded-full" alt="畫師的頭像" /></div>
      <div>
        <p class="text-3xl font-medium text-primary-700">黫桃小丸子</p>
        <ul class="mt-2 flex items-center gap-2 text-[2.5rem]">
          <li>
            <a href="https://www.facebook.com/qin.yan.521963" target="_blank" class="flex text-primary-800/60 transition-colors hover:text-primary-800">
              <Icon name="i-mingcute-facebook-fill" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/yannn.520/" target="_blank" class="flex text-primary-800/60 transition-colors hover:text-primary-800">
              <Icon name="i-mingcute-instagram-line" />
            </a>
          </li>
          <li>
            <a href="https://www.threads.com/@yannn.520" target="_blank" class="flex text-primary-800/60 transition-colors hover:text-primary-800">
              <Icon name="i-mingcute-threads-line" />
            </a>
          </li>
        </ul>
      </div>
    </SectionBox>

    <SectionBox class="mt-10">
      <NuxtLink
        to="/cursor/files/yannn520-cursor.zip"
        class="
          -mx-8 -mt-8 mb-8 flex items-center
          justify-center gap-2 bg-pink-500 p-4 text-center
          text-xl font-medium text-white transition-colors
          hover:bg-pink-600
        "
        external
        @click="isDownload = true"
      >
        <template v-if="isDownload">
          <Icon name="i-mingcute-check-circle-fill" />
          <span>謝謝你～</span>
        </template>
        <template v-else>
          <Icon name="i-mingcute-download-2-line" />
          <span>下載游標</span>
        </template>
      </NuxtLink>
      <div
        class="
          grid grid-col-auto-fill-36 items-center justify-items-center gap-x-4
          gap-y-8
        "
      >
        <NuxtImg v-for="i in 16" :key="i" :src="`/images/cursors-gif/${i}.gif`" />
      </div>
    </SectionBox>
  </UContainer>
</template>

<script setup lang="ts">
const isDownload = shallowRef(false)
</script>

<style scoped>

</style>
