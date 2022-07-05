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
            <a-form-item field="email" label="Email Address">
              <a-input
                :style="{ height: '40px' }"
                v-model="form.email"
                placeholder="Email address"
              />
            </a-form-item>
            <a-form-item field="password" label="Password">
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
              <input class="box-button" type="submit" value="Sign In" />
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

const route = useRoute();
const router = useRouter();
const { proxy } = getCurrentInstance();

onMounted(() => {
  if (localStorage.getItem("email") && localStorage.getItem("password")) {
    form.email = localStorage.getItem("email");
    form.password = localStorage.getItem("password");
    isRemember.value = true;
  }
});

let isRemember = ref(false);
const form = reactive({
  email: "",
  password: "",
});

const handleSubmit = () => {
  login(form).then(
    (res) => {
      router.push("/home");
      if (isRemember.value) {
        localStorage.setItem("email", form.email);
        localStorage.setItem("password", form.password);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }
      form.email = "";
      form.password = "";
    },
    (err) => {
      router.push("/login");
      form.email = "";
      form.password = "";
      console.log(err);
    }
  );
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
