<template>
  <div class="p-10 bg-slate-200 h-screen">
    <div class="font-extrabold">
      <div class="text-4xl mb-4 text-violet-400">
        Welcome to the startup template:
      </div>
      <div class="text-violet-300 text-3xl">
        Vue3 + Vite + Element Plus + Pinia + Tailwind CSS + Axios
      </div>
    </div>
    <el-space :size="30" class="my-3">
      <el-image src="/logo/element-plus-logo.svg" class="w-40" />
      <el-image src="/logo/vite-logo.svg" class="w-9" />
      <el-image src="/logo/pinia-logo.svg" class="w-7" />
      <el-image src="/logo/tailwind-logo.svg" class="w-40" />
      <el-image src="/logo/vue-logo.png" class="w-9" />
    </el-space>
    <div>
      <router-view />
    </div>
  </div>
</template>