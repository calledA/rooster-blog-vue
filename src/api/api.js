import axios from '@/api/axios';

export async function login(params) {
  return await axios.post("/api/admin/login",JSON.stringify(params));
}


