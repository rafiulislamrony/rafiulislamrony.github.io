<template>
  <div class="d-flex jc-between ai-center">
    <h2>All vendors</h2>
    <TheButton @click="addModal = true">Add New</TheButton>
  </div>
  <div class="text-center" v-if="gettingVendors">Loading...</div>

  <table class="mt-4" v-else>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="vendor in vendors" :key="vendor.name">
        <td>{{ vendor.name }}</td>
        <td>{{ vendor.description }}</td>
        <td>
          <img
            src="/img/edit.png"
            alt=""
            class="action-icon"
            @click="handelEdit(vendor)"
          />
          <img
            src="/img/trash.png"
            alt=""
            class="action-icon action-icon--delete ml-3"
            @click="
              selectedVendor = vendor;
              deleteModal = true;
            "
          />
        </td>
      </tr>
    </tbody>
  </table>

  <TheModal v-model="addModal" heading="Add New Vendor">
    <form @submit.prevent="addNew">
      <label class="block">Vendor Name</label>
      <input
        type="text"
        placeholder="Enter vendor name"
        class="mt-1 w-100"
        required
        v-model="newVendor.name"
      />
      <label class="block mt-3">Description</label>
      <input
        type="text"
        placeholder="Write Short Description"
        class="mt-31 w-100"
        required
        v-model="newVendor.description"
      />
      <the-button :loading="adding" class="w-100 mt-4"> Add </the-button>
    </form>
  </TheModal>

  <edit-vendor v-if="selectedVendor && editModal" :selectedVendor="selectedVendor" :editModal="editModal"/>

  <TheModal v-model="deleteModal" heading="Are you sure?">
    <p>
      Do you really want to delete?
      <strong>{{ selectedVendor.name }}</strong>
    </p>
    <TheButton class="mt-4" @click="deleteVendor" :loading="deleting"
      >Yes</TheButton
    >
    <TheButton class="ml-3" color="gray" @click="deleteModal = false"
      >No</TheButton
    >
  </TheModal>
</template>

<script> 
import TheButton from "../../components/TheButton.vue";
import TheModal from "../../components/TheModal.vue";
import { showErrorMessage, showSuccessMessage } from "../../utility/functions";
import privateServices from "../../service/privateServices";
import EditVendor from '../../components/models/EditVendor.vue';

export default {
  data: () => ({
    addModal: false,
    deleteModal: false,
    editModal: false,
    newVendor: {
      name: "",
      description: "",
    },
    selectedVendor: {},
    deleting: false,
    editing: false,
    adding: false,
    vendors: [],
    gettingVendors: false,
  }),
  components: {
    TheButton,
    TheModal,
    EditVendor,
  },
  mounted() {
    setTimeout(this.getAllVendors, 100);
    // this.getAllVendors();
  },
  methods: {
    handelEdit(vendor){
      this.selectedVendor = vendor;
      this.editModal = true;  
    },
    resetForm() {
      this.newVendor = { name: "", description: "" };
    },
    getAllVendors() {
      this.gettingVendors = true;

      privateServices
        .getVendors()

        .then((res) => {
          this.vendors = res.data;
        })
        .catch((err) => {
          showErrorMessage(err);
        })
        .finally(() => {
          this.gettingVendors = false;
        });
    },
    addNew() {
      console.log(localStorage.getItem("accessToken"));
      this.adding = true;
      privateServices
        .addVendor(this.newVendor)
        .then((res) => {
          showSuccessMessage(res);
          this.addModal = false;
          this.resetForm();
          this.getAllVendors();
        })
        .catch((err) => {
          showErrorMessage(err);
        })
        .finally(() => {
          this.adding = false;
        });
    },
    deleteVendor() {
      this.deleting = true;
      privateServices
        .deleteVendor(this.selectedVendor._id)
        .then((res) => {
          showSuccessMessage(res);
          this.deleteModal = false;
          this.getAllVendors();
        })
        .catch((err) => {
          showErrorMessage(err);
        })
        .finally(() => {
          this.deleting = false;
        });
    },
  },
};
</script>
