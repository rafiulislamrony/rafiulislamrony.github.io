<template>
  <div class="login-page">
    <div class="login-card">
      <h2 class="text-center">{{ projectName }}</h2>

      <div class="text-center">
        <img class="login-card__icon" src="/public/img/lock.png" alt="" />
        <h2>User Login</h2>
      </div>
      <form action="#" @submit.prevent="handleSubmit">
        <label class="mt-3 block" for="username">Username</label>
        <input
          class="w-100"
          type="text"
          placeholder="Enter your username"
          v-model="formData.username"
          required
          ref="username"
        />
        <label class="mt-3 block" for="password">Password</label>
        <input
          class="w-100"
          type="password"
          placeholder="Enter your password"
          v-model="formData.password"
          required
          ref="password"
        />
        <TheButton :block="true" :loading="logginIn" class="mt-3"
          >Login</TheButton
        >

        <div class="d-flex jc-between mt-3">
          <div>
            <label for="">
              <input type="checkbox" />
              Remember Me
            </label>
          </div>
          <div>
            <a href="#">Forgot Password?</a>
          </div>
        </div>
        <br>
        <div>
          <p><strong>Username</strong>: Rafiul</p>
          <p><strong>Password</strong>: 123456</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "pinia";
import TheButton from "../components/TheButton.vue";
import { showErrorMessage, showSuccessMessage } from "../utility/functions";
import { setPrivateHeaders } from "../service/axiosInstance";
import { infoStore } from "../data/info";
import { useAuthStore } from "../store/authStore";

export default {
  data: () => ({
    formData: {
      username: "",
      password: "",
    },
    logginIn: false,
    movedToRight: false,
    showing: false,
    projectName: infoStore.projectName,
  }),
  computed: {
    ...mapState(useAuthStore, {
      username: "username",
      accessToken: "accessToken",
      refreshToken: "refreshToken",
      isLoggedIn: "isLoggedIn",
    }),
  },
  components: {
    TheButton,
  },
  methods: {
    ...mapActions(useAuthStore, {
      login: "login",
    }),
    handleSubmit() {
      if (!this.formData.username) {
        showErrorMessage("Username can not be empty.");
        this.$refs.username.focus();
        return;
      }

      if (this.formData.password.length < 6) {
        showErrorMessage("Password must be at lest 6 characters long!");
        this.$refs.password.focus();
        return;
      }

      // TODO : Call Api
      this.loggingIn = true;
      axios
        .post(
          "https://api.rimoned.com/api/pharmacy-management/v1/login",
          this.formData
        )
        .then((res) => {
          showSuccessMessage(res);
          this.login(res.data);
          localStorage.setItem("accessToken", res.data.accessToken);
          setPrivateHeaders();
          this.$router.push("/dashboard");
        })
        .catch((err) => {
          showErrorMessage(err);
        })
        .finally(() => {
          this.loggingIn = false;
        });
    },
  },
};
</script>

<style>
.box {
  width: 55px;
  height: 55px;
  background-color: greenyellow;
  margin-bottom: 22px;
  transition: all 0.5s;
}

.box--right {
  margin-left: 222px;
}

.box1 {
  width: 55px;
  height: 55px;
  background-color: greenyellow;
  margin-bottom: 22px;
  /* animation: showhide 1s ease-in; */
}

.login-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(235, 235, 235);
}

.login-card {
  width: 400px;
  /* border: 1px solid gray; */
  min-height: 193px;
  box-shadow: 0px 2px 9px 4px #dfdfdf;
  background-color: #fff;
  border-radius: 5px;
  padding: 44px 33px;
}

.login-card input[type="text"],
.login-card input[type="password"] {
  width: 100%;
}

.login-card__icon {
  max-width: 77px;
}

@keyframes showhide {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }

  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.showhide-enter-active {
  animation: showhide 1s ease-in;
  /* transition: all 0.5s; */
}
.showhide-enter-from {
  /* opacity: 0;
  transform: scale(0.5); */
}

.showhide-enter-to {
  /* opacity: 1;
  transform: scale(1); */
}

.showhide-leave-active {
  animation: showhide 1s ease-in reverse;
  /* transition: all 0.5s; */
}
.showhide-leave-from {
  /* opacity: 1;
  transform: scale(1); */
}

.showhide-leave-to {
  /* opacity: 0;
  transform: scale(0.5); */
}
</style>
