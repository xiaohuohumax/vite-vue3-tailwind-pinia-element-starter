<template>
  <el-row>
    <el-button type="success" @click="testRequest">Axios</el-button>
    <el-button type="info">
      Icon
      <el-icon class="ml-2"><basketball /></el-icon>
    </el-button>
    <el-button type="warning">
      <router-link to="/about">About</router-link>
    </el-button>
    <el-button type="danger" @click="showMessage">Element Plus</el-button>
    <el-button type="primary" @click="defineStore.addAccount">
      Pinia {{ count }}
    </el-button>
    <el-button type="danger">
      <Click />
    </el-button>
  </el-row>
</template>
<script setup>
import { ElMessage, ElNotification } from "element-plus";
import { useDefineStore } from "@/store/define";
import { storeToRefs } from "pinia";
import apis from "@/api/apis";

const defineStore = useDefineStore();
const { count } = storeToRefs(defineStore);

const testRequest = () => {
  apis.test
    .testHttp()
    .then(() => {})
    .catch((error) => ElMessage({ type: "error", message: error }));
};

const showMessage = () => {
  ElNotification({
    title: "Success",
    message: "This is a success message",
    type: "success",
  });
};
</script>
