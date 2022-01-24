<template>
  <v-app>
    <v-app-bar app color="indigo darken-4" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title
        :class="$vuetify.breakpoint.xsOnly ? 'subtitle-1' : 'h5'"
      >
        Sistema Gestor de Tareas
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <BaseFooter></BaseFooter>
  </v-app>
</template>

<script>
import BaseFooter from "@/components/base/BaseFooter";
export default {
  name: "AppBar",
  components: {
    BaseFooter,
  },
  data: () => ({
    //
  }),
};
</script>
