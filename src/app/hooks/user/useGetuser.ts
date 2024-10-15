import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface User {
  first_name: string;
  last_name: string;
  email: string;
  mobile_number: string;
  password: string;
  gender: number;
  role_id: number;
}

const useGetUser = (user_id: number) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("authToken");
      const GET_USER_URL = `${import.meta.env.VITE_BASE_URL}/user/${user_id}`;

      setLoading(true);

      try {
        const response = await fetch(GET_USER_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          toast.error(errorData.message, { position: "top-center" });
          setLoading(false);
          return;
        }

        const data = await response.json();
        setUser(data?.data?.user);
      } catch (error: any) {
        toast.error(error?.message || "Network error: Failed to fetch.", {
          position: "top-center",
        });
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [user_id]);
  return { user, loading };
};

export default useGetUser;
