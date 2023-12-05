<template>
  <TheModal v-model="$parent.editModal" heading="Edit vendor">
    <form @submit.prevent="editVendor">
      <label class="block">Vendor Name</label>
      <input
        type="text"
        placeholder="Enter vendor name"
        class="mt-1 w-100"
        required
        v-model="fromData.name"
      />
      <label class="block mt-3">Description</label>
      <input
        type="text"
        placeholder="Write Short Description"
        class="mt-31 w-100"
        required
        v-model="fromData.description"
      />
      <the-button :loading="editing" class="w-100 mt-4">
        Save Changes
      </the-button>
    </form>
  </TheModal>
</template>

<script>
import TheButton from "../../components/TheButton.vue";
import TheModal from "../TheModal.vue";
import { showErrorMessage, showSuccessMessage } from "../../utility/functions";
import privateServices from "../../service/privateServices";
export default {
  name: "EditVendor",
  props: ["selectedVendor", "editModal"],
  components: {
    TheModal,
    TheButton
  },
  data() {
    return {
      fromData: {
        _id: "",
        name: "",
        description: "",
      },
    };
  },
  methods: {
    editVendor() {
      this.editing = true;
      privateServices
        .editVendor(this.fromData)
        .then((res) => {
          showSuccessMessage(res);
          this.$parent.editModal = false;
          this.$parent.getAllVendors();
        })
        .catch((err) => {
          showErrorMessage(err);
        })
        .finally(() => {
          this.$parent.editModal = false;
        });
    },
  },
  mounted() {
    this.fromData._id = this.selectedVendor._id;
    this.fromData.name = this.selectedVendor.name;
    this.fromData.description = this.selectedVendor.description;
  },
};
</script>

<style></style>
