"use client"
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import LoginForm from "@/components/form/login-form";

export default function Login() {
  return (
    <Provider store={store}>
      <LoginForm />
    </Provider>
  );
}
