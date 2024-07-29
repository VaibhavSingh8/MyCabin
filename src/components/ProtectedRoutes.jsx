import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";

function ProtectedRoutes({ children }) {
  const { isAuthenticated, isLoading } = useUser(); // load the authenticated user

  const navigate = useNavigate();

  // note:  navigate can only be called inside another function, callback or useEffects like this
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading)
    return (
      <div className="h-screen bg-gray-50 flex justify-center items-center">
        <Spinner />
      </div>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoutes;
