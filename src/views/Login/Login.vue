<template>
  <div class="login-wrap">
    <div class="login-content">
      <div class="login-title">
        <span style="color: #7366ff; font-size: 38px">R</span
        ><span>ooster</span>
      </div>
      <div class="form-box">
        <h1 style="margin: 10px 0 10px 0">Sign in to account</h1>
        <p style="margin-bottom: 25px; font-size: 15px; color: #898989">
          Enter your email & password to login
        </p>
        <a-space
          direction="vertical"
          size="large"
          :style="{ width: '400px', fontSize: '14px' }"
        >
          <a-form
            :model="form"
            @submit-success="handleSubmit"
            layout="vertical"
          >
            <a-form-item
              field="username"
              label="Username"
              :rules="[
                { required: true, message: 'Username is required' },
                { minLength: 5, message: 'must be greater than 5 characters' },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-input
                :style="{ height: '40px' }"
                v-model="form.username"
                placeholder="Email address"
              />
            </a-form-item>
            <a-form-item
              field="password"
              label="Password"
              :rules="[
                { required: true, message: 'Password is required' },
                { minLength: 5, message: 'must be greater than 5 characters' },
              ]"
              :validate-trigger="['change', 'input']"
            >
              <a-input
                :style="{ height: '40px' }"
                v-model="form.password"
                placeholder="Password"
                type="password"
              />
            </a-form-item>
            <a-form-item field="isRemember">
              <a-checkbox v-model="isRemember"
                ><span style="font-size: 15px">
                  Remember password</span
                ></a-checkbox
              >
            </a-form-item>
            <a-form-item>
              <a-spin :loading="loading">
                <template #icon>
                  <icon-sync />
                </template>
                <input class="box-button" type="submit" value="Sign In" />
              </a-spin>
            </a-form-item>
          </a-form>
        </a-space>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, getCurrentInstance, onMounted } from "vue";
import { login } from "@/api/api";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const router = useRouter();
const store = useStore();
const { proxy } = getCurrentInstance();
const loading = ref(false);

onMounted(() => {
  if (localStorage.getItem("username") && localStorage.getItem("password")) {
    form.username = localStorage.getItem("username");
    form.password = localStorage.getItem("password");
    isRemember.value = true;
  }
});

let isRemember = ref(false);
const form = reactive({
  username: "",
  password: "",
});

const handleSubmit = () => {
  // console.log(222);
  loading.value = true;
  login(form)
    .then(
      (res) => {
        router.push("/home");
        proxy.$notification.success({
          content: "登陆成功！",
          closable: "true",
        });
        if (isRemember.value) {
          localStorage.setItem("username", form.username);
          localStorage.setItem("password", form.password);
        } else {
          localStorage.removeItem("username");
          localStorage.removeItem("password");
        }
        resetForm();
      },
      (err) => {
        router.push("/login");
        proxy.$notification.error({
          content: "用户名或密码错误！",
          closable: "true",
        });
        isRemember.value = false;
        resetForm();
        console.log(err);
      }
    )
    .finally(() => {
      loading.value = false;
    });
};

const resetForm = () => {
  form.username = "";
  form.password = "";
};
</script>
<style scoped>
.login-wrap {
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  position: relative;
}
.login-content {
  width: 480px;
  height: 580px;
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login-title {
  width: 480px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 32px;
}
.form-box {
  width: 480px;
  height: 500px;
  box-sizing: border-box;
  padding: 40px;
  border-radius: 10px;
  background-color: #fff;
}
.box-button {
  width: 370px;
  height: 40px;
  border-radius: 5px;
  font-size: 17px;
  background-color: #7366ff;
  color: #fff;
  cursor: pointer;
}
</style>
