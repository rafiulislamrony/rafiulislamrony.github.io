<template>
  <TheModal v-model="$parent.editModal" heading="Edit Drug">
    <form @submit.prevent="editDrug">
      <label class="block">Select Drug Type</label>
      <div class="mt-2">
        <label>
          <input
            type="radio"
            name="drugtype"
            value="Tab"
            v-model="selectedDrug.type"
          />
          Tab
        </label>

        <label class="ml-2">
          <input
            type="radio"
            name="drugtype"
            value="Capsule"
            v-model="selectedDrug.type"
          />
          Capsule
        </label>

        <label class="ml-2">
          <input
            type="radio"
            name="drugtype"
            value="Syrup"
            v-model="selectedDrug.type"
          />
          Syrup
        </label>

        <label class="ml-2">
          <input
            type="radio"
            name="drugtype"
            value="Suppository"
            v-model="selectedDrug.type"
          />
          Suppository
        </label>
      </div>

      <label class="block mt-3">Drug Name</label>
      <input
        type="text"
        placeholder="Drug Name"
        class="mt-1 w-100"
        v-model="selectedDrug.name"
      />

      <label class="block mt-3">Weight</label>
      <input
        type="text"
        placeholder="weight in mg"
        class="mt-1 w-100"
        v-model="selectedDrug.weight"
      />

      <label class="block mt-3">Vendor</label>
      <select v-model="selectedDrug.vendor">
        <option value="">Select One</option>
        <option
          v-for="vendor in vendors"
          :key="vendor.name"
          :value="vendor.name"
        >
          {{ vendor.name }}
        </option>
      </select>

      <label class="block mt-3">Price</label>
      <input
        type="text"
        placeholder="Pack Price"
        class="mt-1 w-100"
        v-model="selectedDrug.price"
      />

      <label class="block mt-3">Quantity</label>
      <input
        type="number"
        placeholder="Enter Quantity"
        class="mt-1 w-100"
        v-model="selectedDrug.quantity"
      />

      <the-button :loading="editing" class="w-100 mt-4">
        Save Changes
      </the-button>
    </form>
  </TheModal>
</template>

<script>
import TheButton from "../TheButton.vue";
import TheModal from "../TheModal.vue";
import { showErrorMessage, showSuccessMessage } from "../../utility/functions";
import privateServices from "../../service/privateServices";
export default {
  name: "editDrug",
  props: ["selectedDrug", "editModal"],
  components: {
    TheModal,
    TheButton,
  },
  data() {
    return {
      fromData: {
        _id: "",
        name: "",
        weight: "",
        type: "",
        vendor: "",
        price: "",
        quantity: "",
      },
    };
  },
  methods: {
    editDrug() {
      this.editing = true;
      privateServices
        .editDrug(this.fromData)
        .then((res) => {
          showSuccessMessage(res);
          this.$parent.editModal = false;
          this.$parent.getAlldrugs();
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
    this.fromData._id = this.selectedDrug._id;
    this.fromData.name = this.selectedDrug.name;
    this.fromData.weight = this.selectedDrug.weight;
    this.fromData.type = this.selectedDrug.type;
    this.fromData.vendor = this.selectedDrug.vendor;
    this.fromData.price = this.selectedDrug.price;
    this.fromData.quantity = this.selectedDrug.quantity;
  },
};
</script>

<style></style>
