<template>
  <v-menu
    v-model="datePicker"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <v-text-field
          v-model="date"
          :label="label"
          prepend-icon="mdi-calendar"
          v-bind="properties"
          @click:clear="onClear"
        ></v-text-field>
      </div>
    </template>
    <v-date-picker
      color="secondary"
      v-model="cmpValue"
      no-title
      @input="datePicker = false"
    ></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: "BaseDateField",
  model: {
    prop: "value",
    event: "input",
  },
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    label: {
      type: String,
      default: "",
    },
    properties: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data: () => ({
    datePicker: false,
    date: "",
  }),
  computed: {
    cmpValue: {
      get: function () {
        this.date = this.humanFormat(this.value);
        return this.value;
      },
      set: function (newValue) {
        this.$emit("input", newValue);
      },
    },
  },
  methods: {
    humanFormat: function (value) {
      value =
        this.$constantes.util.convertions.fromISOToRegularDateFormat(value);
      this.date = value;
      return value;
    },
    machineFormat(value) {
      return this.$constantes.util.convertions.fromRegularToISODateFormat(
        value
      );
    },
    onClear() {
      this.$emit("input", null);
    },
  },
};
</script>

<style>
</style>