<template>
  <base-template>
    <template #sectionListTasks>
      <v-card shaped elevation="6" style="max-height: 500px; overflow: auto">
        <v-list dense>
          <v-subheader>Todo</v-subheader>
          <v-list-item-group
            v-model="itemListSelected"
            active-class="indigo--text text--darken-5"
          >
            <template v-for="(task, index) in getTasks">
              <v-list-item :key="task.title" @click="onClickDetailTask(task)">
                <v-list-item-action>
                  <v-icon
                    large
                    :color="task.is_completed === true ? 'green' : 'red'"
                    >{{
                      task.is_completed === true
                        ? "mdi-check"
                        : "mdi-reload-alert"
                    }}
                  </v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title v-text="task.title" />
                  <v-list-item-subtitle v-text="task.due_date" />
                  <v-list-item-subtitle
                    v-text="task.comments"
                    v-if="!$vuetify.breakpoint.xsOnly"
                  />
                  <v-list-item-subtitle
                    v-text="task.description"
                    v-if="!$vuetify.breakpoint.xsOnly"
                  />
                  <v-list-item-subtitle v-if="!$vuetify.breakpoint.xsOnly">
                    <v-chip-group column active-class="primary--text">
                      <v-chip
                        v-for="tag in task.tags"
                        :key="tag"
                        color="teal"
                        dark
                        x-small
                      >
                        <v-icon x-small left> mdi-label </v-icon>
                        {{ tag }}
                      </v-chip>
                    </v-chip-group>
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn
                    icon
                    color="primary"
                    @click.stop="onClickEditTask(task)"
                  >
                    <v-icon>mdi-pencil-outline</v-icon>
                  </v-btn>
                </v-list-item-action>
                <v-list-item-action>
                  <v-btn icon color="red" @click.stop="onClickDeleteTask">
                    <v-icon>mdi-trash-can-outline</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-divider
                v-if="index < getTasks.length - 1"
                :key="index"
              ></v-divider>
            </template>
          </v-list-item-group>
        </v-list>
      </v-card>
    </template>
    <template #sectionActions>
      <h-section-actions
        :numberTasks="5"
        nameButton="Nueva tarea"
        @click-new-task="onClickNewTask"
      ></h-section-actions>
    </template>
    <template #sectionForm>
      <add-task-form
        v-model="dialogTask"
        :task.sync="taskSelected"
        :isFormEdit.sync="isFormEdit"
        @reload="getAllTasks"
      ></add-task-form>
      <detail-task-form
        v-model="dialogDetailTask"
        :task.sync="taskSelected"
        :isFormEdit.sync="isFormEdit"
      ></detail-task-form>
    </template>
    <template #sectionDeleteDialog>
      <h-dialogo-eliminacion
        :activo="dialogDelete"
        @eliminar="onResponseEliminarForm"
      ></h-dialogo-eliminacion>
    </template>
  </base-template>
</template>

<script>
import BaseTemplate from "@/components/layouts/BaseTemplate.vue";
import AddTaskForm from "@/components/AddTaskForm";
import DetailTaskForm from "@/components/DetailTaskForm";
import TasksService from "@/api/TasksAPI";

export default {
  name: "Home",

  components: {
    "base-template": BaseTemplate,
    "add-task-form": AddTaskForm,
    "detail-task-form": DetailTaskForm,
  },
  data: () => ({
    itemListSelected: null,
    taskSelected: [],
    dialogTask: false,
    dialogDetailTask: false,
    dialogDelete: false,
    isFormEdit: false,
    taskToDelete: null,

    tasksData: [],
  }),
  created() {
    this.getAllTasks();
  },
  computed: {
    getTasks() {
      return this.tasksData;
    },
  },
  methods: {
    onClickNewTask() {
      this.dialogTask = true;
      this.isFormEdit = false;
    },
    onClickEditTask(task) {
      this.dialogTask = true;
      this.isFormEdit = true;
      this.taskSelected = { ...task };
    },
    onClickDetailTask(task) {
      this.dialogDetailTask = true;
      this.isFormEdit = true;
      this.taskSelected = { ...task };
    },
    onClickDeleteTask(task) {
      this.dialogDelete = true;
      this.taskToDelete = task.id;
    },
    onResponseEliminarForm(valor) {
      this.dialogDelete = false;
      if (valor) {
        this.deleteTask();
      } else {
        this.taskToDelete = null;
      }
    },
    async deleteTask() {
      TasksService.delete(task_id);
    },
    async getAllTasks() {
      const response = await TasksService.getAll();
      this.tasksData = response.data;
    },
  },
};
</script>

<style>
</style>