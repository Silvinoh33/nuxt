import type { LoginPayload } from "@types";
import type { RegisterPayload } from "@types";
import type { User } from "@types";
import axios from "axios";

/**
 * A reactive reference to the currently authenticated user, or `null` if no user is authenticated.
 */
const user = ref<User | null>(null);



export const useAuth = () => {

  async function getUser(): Promise<User  | null> {
    if (user.value) return user.value;
    try {
      const response = await axios.get("/user");
      const user = response.data as User;
      return  user;
    } catch (e:unknown) {
      return null;
    }
  }


  async function initUser() {
    user.value = await getUser();
  }


  async function login(payload: LoginPayload) {
    await axios.post("/login", payload);
    useRouter().push("/me");
  }

  async function logout() {
    await axios.post("/logout");
    user.value = null;
    useRouter().push("/login");
  }

  async function register(payload: RegisterPayload) {
    await axios.post("/register", payload);
    await axios.post("/login", {
      email: payload.email,
      password: payload.password,
    });
    useRouter().push("/me");
  }

  return {
    login,
    logout,
    register,
    initUser,
    user,
  };
};
