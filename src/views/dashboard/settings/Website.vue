<template>
    <div class="pt-3">
      <div class="text-center" v-if="getting">Loading...</div>
      <div v-else>
        <label class="block">Shop Name</label>
        <input type="text" v-model="websiteSettings.shopName" />
        <label class="mt-3 block">Address</label>
        <input type="text" v-model="websiteSettings.address" />
        <br />
        <TheButton class="inline-block mt-4" :loading="saving" @click="saveData">
            Save
          </TheButton>
      </div>
    </div>
  </template>

<script>
import TheButton from "../../../components/TheButton.vue";
import privateServices from "../../../service/privateServices";
import {showErrorMessage,showSuccessMessage,} from "../../../utility/functions";
export default {
  data: () => ({
    getting: true,
    saving: false,
    websiteSettings: {
        shopName: "",
        address: ""
    }
  }),

  methods: {
      getWebSettings() {
      this.getting = true;
      privateServices
        .getWebSettings()
        .then((res) => {
          if (res.data.shopName) {
            this.websiteSettings = res.data;
          }
        })
        .catch((e) => {})
        .finally(() => {
          this.getting = false;
        });
    },

    saveData() { 
      this.saving = true;
      privateServices
        .updateWebSettings(this.websiteSettings)
        .then((res) => {
          showSuccessMessage(res);
        })
        .catch((err) => {
          showErrorMessage(err);
        })
        .finally(() => {
          this.saving = false;
        });
    }
  },
  components: {
    TheButton
  },

  mounted() {
    setTimeout(this.getWebSettings, 333);
  }
};
</script>

<style></style>
