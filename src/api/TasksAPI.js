import api from "./BaseApiService";

const BASE_URL = "tasks-challenge";
const TOKEN = process.env.VUE_APP_BASIC_TOKEN;

export const TasksService = {
  getAll() {
    const params = new URLSearchParams();
    params.append("token", TOKEN);
    return api.get(`${BASE_URL}/tasks`, { params });
  },
  getById() {
    const params = new URLSearchParams();
    params.append("token", TOKEN);
    return api.get(`${BASE_URL}/tasks/${task_id}`);
  },
  registrar(body) {
    const params = new URLSearchParams();
    body.append("token", TOKEN);
    return api.post(`${BASE_URL}/tasks`, body);
  },
  actualizar(body) {
    const params = new URLSearchParams();
    body.append("token", TOKEN);
    return api.put(`${BASE_URL}/tasks/${task_id}`, body);
  },
  eliminar() {
    const params = new URLSearchParams();
    params.append("token", TOKEN);
    return api.delete(`${BASE_URL}/tasks/${task_id}`);
  },
};
export default TasksService;
