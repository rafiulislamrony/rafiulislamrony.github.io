<template>
  <div>
    <br />
    <div>Brand Color {{ brandColor }}</div>
    <div class="brand-color"></div>
    <input :value="brandColor" type="color" name="bc" id="bc" class="mt-2" @input="handleInput" />
    <br />
    <br />
  </div>
  <TheButton>Save</TheButton>
</template>

<script>
import TheButton from "../../../components/TheButton.vue";
import { useThemeStore } from "../../../store/themeStore";
import { mapActions } from "pinia";
import { mapState } from "pinia";

export default {
  data: () => ({ 
  }),
  computed: {
    ...mapState(useThemeStore, {
      brandColor: "brandColor"
    })
  },
  components: {
    TheButton,
  },
  methods: {
    ...mapActions(useThemeStore,{
        setBrandColor: "setBrandColor"
    }),
    handleInput(e) {
        this.setBrandColor(e.target.value);
    },
  },
};
</script>

<style scoped>
.brand-color {
  background-color: var(--brand-color);
  width: 500px;
  height: 500px;
}
</style>
