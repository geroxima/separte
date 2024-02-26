import RegisterForm from "@/components/RegisterForm";
import { useSession } from "@/components/hooks/useSession";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const RegisterPage = () => {
  const { isAuthenticated } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return <RegisterForm />;
};

export default RegisterPage;
