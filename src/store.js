import { reactive } from "vue";

export const store = reactive({
    apiBaseUrl: 'http://192.168.1.155:8000',
    loading: false
});