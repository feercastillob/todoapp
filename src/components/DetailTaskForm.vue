<template>
  <v-dialog
    v-model="esFormularioVisible"
    persistent
    max-width="600"
    transition="dialog-transition"
  >
    <v-card>
      <v-card-title class="primary--text text--darken-5"
        >Detalle tareas
      </v-card-title>
      <v-card-text class="mt-5">
        <v-form ref="form">
          <v-row align="center" justify="start">
            <v-col cols="12" md="6" sm="6">
              <h-textfield-chip
                labeltext="Titulo"
                :chiptext="taskForm.title"
                text
              ></h-textfield-chip>
            </v-col>
            <v-col cols="12" md="6" sm="6">
              <h-textfield-chip
                labeltext="Estatus"
                :chiptext="
                  taskForm.is_completed ? 'Completada' : 'No completada'
                "
                text
              ></h-textfield-chip>
            </v-col>
            <v-col cols="12" md="6" sm="6">
              <h-textfield-chip
                labeltext="Fecha"
                :chiptext="
                  $constantes.util.convertions.fromISOToRegularDateFormat(
                    taskForm.due_date
                  )
                "
                text
              ></h-textfield-chip>
            </v-col>
            <v-col cols="12" md="6" sm="6">
              <h-textfield-chip
                labeltext="Tags"
                :chiptext="taskForm.tags"
                text
              ></h-textfield-chip>
            </v-col>
            <v-col cols="12" md="6" sm="6">
              <h-textfield-chip
                labeltext="Comentarios"
                :chiptext="taskForm.comments"
                text
              ></h-textfield-chip>
            </v-col>
            <v-col cols="12" md="6" sm="6">
              <h-textfield-chip
                labeltext="Descripción"
                :chiptext="taskForm.description"
                text
              ></h-textfield-chip>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="secondary" text @click="onClickCancelForm"> Cerrar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "AddTaskForm",
  components: {},
  model: {
    prop: "esFormularioVisible",
    event: "input",
  },
  props: {
    esFormularioVisible: {
      type: Boolean,
      default: false,
    },
    task: {
      type: Object | Array,
    },
    isFormEdit: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    esFormularioValido: true,
    isFormVisible: false,

    taskForm: {},
  }),
  methods: {
    onClickCancelForm() {
      this.isFormVisible = false;
      this.$emit("input", this.isFormVisible);
      this.$refs.form.reset();
    },
    loadInformation() {
      this.taskForm = this.task;
      console.log(this.taskForm);
    },
  },
  mounted() {
    this.isFormVisible = this.esFormularioVisible;
  },
  watch: {
    esFormularioVisible: function (value) {
      if (value && this.isFormEdit) {
        this.loadInformation();
      }
    },
  },
};
</script>