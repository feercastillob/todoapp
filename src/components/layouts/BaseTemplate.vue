<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <slot name="sectionListTasks"></slot>
      </v-col>
      <v-col cols="12">
        <slot name="sectionActions"></slot>
      </v-col>
    </v-row>
    <slot name="sectionForm"></slot>
    <slot name="sectionDeleteDialog"></slot>
  </v-container>
</template>

<script>
export default {
  name: "base-template",
};
</script>