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
    params.append(
      "token",
      "e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd"
    );
    return api.get(`${BASE_URL}/tasks/${task_id}`);
  },
  registrar(body) {
    body.append(
      "token",
      "e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd"
    );
    return api.post(`${BASE_URL}/tasks`, body);
  },
  actualizar(body) {
    return api.put(`${BASE_URL}/tasks/${task_id}`, body);
  },
  eliminar() {
    return api.delete(`${BASE_URL}/tasks/${task_id}`);
  },
};
export default TasksService;
