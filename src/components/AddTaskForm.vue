<template>
  <v-dialog
    v-model="esFormularioVisible"
    persistent
    max-width="600"
    transition="dialog-transition"
  >
    <v-card>
      <v-card-title class="primary--text">Nueva tarea </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-row align="center" justify="start">
            <v-col cols="12" md="6" sm="6">
              <v-text-field
                v-model="taskForm.title"
                label="Título*"
                :rules="[$constantes.reglas.base.required]"
              />
            </v-col>
            <v-col cols="12" md="6" sm="6">
              <v-checkbox
                v-model="taskForm.is_completed"
                :label="taskForm.is_completed ? 'Completada' : 'No completada'"
              />
            </v-col>
            <v-col cols="12" md="6" sm="6">
              <h-date-field
                label="Fecha*"
                v-model="taskForm.due_date"
                :rules="[$constantes.reglas.base.required]"
              ></h-date-field>
            </v-col>
            <v-col cols="12" md="6" sm="6">
              <v-text-field v-model="taskForm.tags" label="Tags" />
            </v-col>
            <v-col cols="12" md="6" sm="6">
              <v-textarea
                v-model="taskForm.comments"
                label="Comentarios"
                rows="1"
                auto-grow
              />
            </v-col>
            <v-col cols="12" md="6" sm="6">
              <v-textarea
                v-model="taskForm.description"
                label="Descripción"
                rows="1"
                auto-grow
              />
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="secondary" text @click="onClickCancelForm">
          Cancelar
        </v-btn>
        <v-btn color="accent" text @click="onClickSaveForm">Guardar </v-btn>
      </v-card-actions>
    </v-card>
    <h-alert type="success" :val="dialogAlertSuccess"></h-alert>
    <h-alert type="error" :val="dialogAlertError"></h-alert>
  </v-dialog>
</template>

<script>
import TasksService from "@/api/TasksAPI";
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
    dialogAlertSuccess: false,
    dialogAlertError: false,
    isFormVisible: false,

    taskForm: {
      title: "",
      is_completed: false,
      due_date: "",
      comments: "",
      description: "",
      tags: "",
    },
  }),
  methods: {
    onClickCancelForm() {
      this.isFormVisible = false;
      this.$emit("input", this.isFormVisible);
      this.$refs.form.reset();
    },
    onClickSaveForm() {
      if (this.$refs.form.validate() && !this.isFormEdit) {
        this.registerTask();
      }
      if (this.$refs.form.validate() && this.isFormEdit) {
        this.updateTask();
      }
    },

    async registerTask() {
      const params = new URLSearchParams();
      Object.keys(this.taskForm).forEach((key) => {
        params.append(key, this.taskForm[key]);
      });
      TasksService.registrar(params);
      this.onClickCancelForm();
    },
    async updateTask() {
      // const params = new URLSearchParams();
      // Object.keys(this.taskForm).forEach((key) => {
      //   params.append(key, this.taskForm[key]);
      // });
      var task_id = this.taskForm.id;
      TasksService.actualizar(task_id);
      this.onClickCancelForm();
    },
    loadInformation() {
      this.taskForm = this.task;
      console.log(this.task);
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