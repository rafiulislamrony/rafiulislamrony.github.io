<template>
  <router-view></router-view>
  <!-- <div class="toasts"> -->
    <TransitionGroup name="slide-left" tag="div" class="toasts">
      <TheTost
        v-for="(toast, i) in toasts"
        :key="i"
        :toastType="toast.type"
        :message="toast.message"
      >
      </TheTost>
    </TransitionGroup>
  <!-- </div> -->
</template>

<script>
import TheTost from "./components/TheTost.vue";
import {eventBus} from "./utility/eventBus"
export default {
  data: () => ({
    toasts: [
      // {
      //   type: "Success",
      //   message: "Done Successfully!"
      // },
      // {
      //   type: "Error",
      //   message: "Something wnet wrong!"
      // }
    ],
  }),

  components: {
    TheTost,
  },
  mounted() {
    eventBus.on("toast", (data) => {
      this.toasts.push(data);
      this.removeOneToast();
    });
  },
  methods: {
    removeOneToast() {
      setTimeout(() => {
        this.toasts.shift();
      }, 2222);
    },
  },
};
</script>
<style>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.25s ease;
}
.slide-left-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>