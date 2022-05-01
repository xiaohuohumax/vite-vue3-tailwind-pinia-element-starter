<template>
  <div class="h-screen flex flex-col justify-center">
    <el-result title="404" sub-title="404 NOT FOUND">
      <template #extra>
        <el-button type="primary">
          <router-link to="/">Back Home</router-link>
        </el-button>
      </template>
    </el-result>
  </div>
</template>