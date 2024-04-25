import { useAuth } from "@/providers/AuthProvider";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const { session, loading } = useAuth();
  console.log("got here", session);
  if (loading) {
    return null;
  }
  if (session) {
    return <Redirect href={"/"} />;
  }

  return <Stack />;
}
