import { useState } from "react";
import toast from "react-hot-toast";
import { BASE_URL } from "../../utils/constant";

const useAddUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [newUser, setNewUser] = useState();

  const addUser = async (formData: any) => {
    const token = localStorage.getItem("authToken");
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/user`, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.message, { position: "top-center" });
        return false;
      }

      const data = await response.json();
      if(formData.role_id === 5)
      {
      toast.success("Customer added successfully", { position: "top-center" });
      }else{
        toast.success(data.message, { position: "top-center" });
      }
      setNewUser(data?.data?.result);
      return true;
    } catch (error: any) {
      toast.error(error?.message || "Error adding User", {
        position: "top-center",
      });
      return false;
    } finally {
      setLoading(false);
    }
  };
  return { addUser, newUser, loading };
};

export default useAddUser;
