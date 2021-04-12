import axios from 'axios'
import { toast } from 'react-toastify';

// Alter defaults after instance has been created
axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.interceptors.response.use(res => {
    return res;
}, (error) => {
  //  toast.error(error.response.data?.message || 'Failure')
    return Promise.reject(error);
});