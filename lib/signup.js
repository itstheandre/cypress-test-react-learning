import axios from "axios";

export async function signup(form) {
  const { data } = await axios.post("api/signup", form);
  return data;
}
