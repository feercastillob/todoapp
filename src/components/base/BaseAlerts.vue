<template>
  <v-alert dense outlined shaped text :value="val" :type="tipo">{{
    message
  }}</v-alert>
</template>

<script>
export default {
  name: "BaseDateField",

  props: {
    tipo: {
      type: String,
      default: "",
    },
    val: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
    },
  },
  data: () => ({
    datePicker: false,
    date: "",
  }),
  computed: {},
  methods: {},
};
</script>

<style>
</style>