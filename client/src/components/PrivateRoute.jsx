import { useSession } from "./hooks/useSession";
import { useRouter } from "next/navigation";
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useSession();
  const { push } = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      push("/login");
    }
  }, []);
  return children;
};

export default PrivateRoute;
