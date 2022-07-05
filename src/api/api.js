import axios from '@/api/axios';

export async function login(params) {
  return await axios.post("/login",JSON.stringify(params));
}


