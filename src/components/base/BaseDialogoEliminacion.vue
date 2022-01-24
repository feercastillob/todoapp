<!--
* Autor: María Fernanda Castillo Barradas
* Fecha de creación: 22/01/2022
* Fecha de modificación: 
-->

<template>
  <v-dialog v-model="activo" persistent width="300">
    <v-card>
      <v-card-title> Eliminar </v-card-title>
      <v-card-text>
        <v-row align="center" justify="start">
          <div class="my-3 ml-3">¿Deseas eliminar la tarea?</div>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="secondary"> Eliminar </v-btn>
        <v-btn text color="grey"> Cancelar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  /*  Descripción de props:
        activo - Controla si el dialogo es visible o no

        Descripción de eventos:
        eliminar - Regresa el valor seleccionado del dialogo 
                    (eliminar = true / cancelar = false)
    */
  props: ["activo"],
  methods: {
    enviar(valor) {
      this.$emit("eliminar", valor);
    },
  },
};
</script>