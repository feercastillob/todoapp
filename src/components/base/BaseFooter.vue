<!--
* Autor: María Fernanda Castillo Barradas
* Fecha de creación: 22/01/2022
* Fecha de modificación: 
-->

<template>
  <v-footer app class="indigo darken-4">
    <v-row align="center" justify="center" no-gutters>
      <span class="text-center textfooter white--text font-weight-medium">
        Ejemplo de Footer
      </span>
    </v-row>
  </v-footer>
</template>

<style type="text/css">
.textfooter {
  font-size: 0.813rem !important;
  font-weight: 700;
  font-family: Roboto, sans-serif !important;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

@media screen and (max-width: 600px) {
  .textfooter {
    font-size: 0.562rem !important;
    font-weight: 400 !important;
    font-family: Roboto, sans-serif !important;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
}
</style>