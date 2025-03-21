import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { BASE_URL } from '../../utils/constant';

interface Coupon {
  coupon_id: number;
  code: string;
  discount_value: number;
  discount_type: number;
  start_time: string;
  end_time: string;
  title: string;
  description: string;
  coupon_type: number;
  maximum_usage_count_per_user: number;
  total_usage_count: number;
}

const useGetCoupons = (
  pageNumber: number,
  perPage: number,
  search: string = '',
  sortColumn?: string,
  sortOrder?: string,
  discount_types?: number,
  coupon_types?: number,
) => {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [count, setCount] = useState(0);

  const fetchCoupons = async () => {
    const token = localStorage.getItem("authToken");
    const queryParams = new URLSearchParams();

    if (pageNumber) queryParams.append("page_number", pageNumber.toString());
    if (perPage) queryParams.append("per_page", perPage.toString());
    if (search) queryParams.append("search", search);
    if (sortColumn) queryParams.append("sort_by", sortColumn);
    if (sortOrder) queryParams.append("order", sortOrder);
    if (discount_types) queryParams.append("discount_types", discount_types.toString());
    if (coupon_types) queryParams.append("coupon_types", coupon_types.toString());


    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/admin/coupon?${queryParams}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
      
      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message, { position: 'top-center' });
        return;
      }

      setCoupons(data?.data?.result || []);
      setCount(data?.data?.count || 0);
    } catch (error: any) {
      toast.error(error?.message || 'Network error: Failed to fetch.', {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, [pageNumber, perPage, search, sortColumn, sortOrder, coupon_types, discount_types]);

  return { coupons, count, loading, fetchCoupons };
};

export default useGetCoupons;
