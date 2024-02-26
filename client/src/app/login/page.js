"use client";
import LoginForm from "@/components/LoginForm";
import { useEffect } from "react";
import { useSession } from "@/components/hooks/useSession";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const { isAuthenticated } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);
  return <LoginForm />;
};

export default LoginPage;
