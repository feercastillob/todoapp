<!--
* Autor: María Fernanda Castillo Barradas
* Fecha de creación: 22/01/2022
* Fecha de modificación: 
-->
<template>
  <v-row>
    <v-col cols="12" align="center">
      <v-btn
        class="mx-2"
        fab
        dark
        color="indigo darken-4"
        @click="$emit('click-new-task')"
      >
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </v-col>
    <slot></slot>
  </v-row>
</template>

<script>
export default {
  name: "base-section-actions",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

<style>
</style>