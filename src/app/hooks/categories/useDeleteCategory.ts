import { useState } from "react";
import toast from "react-hot-toast";

const useDeleteCategory = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const token = localStorage.getItem("authToken");

  const deleteCategory = async (category_id: number): Promise<{ success: boolean; message: string }> => {
    setLoading(true);
    const DELETE_URL = `${import.meta.env.VITE_BASE_URL}/admin/categories/${category_id}`;

    try {
      const response = await fetch(DELETE_URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();
      
      if (!response.ok) {
        toast.error(result.message, { position: "top-center" });
        return { success: false, message: result.message };
      }

      return { success: true, message: result.message };
    } catch (error: any) {
      toast.error("An error occurred while deleting the category.", {
        position: "top-center",
      });
      return { success: false, message: error.message };
    } finally {
      setLoading(false);
    }
  };

  return { deleteCategory, loading };
};

export default useDeleteCategory;
