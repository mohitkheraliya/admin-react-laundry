import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAddCoupon, useGetCoupon, useUpdateCoupon } from "../../hooks";
import toast from "react-hot-toast";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import * as Yup from "yup";
import { couponSchema } from "../../validation/couponSchema";

const CouponModal: React.FC = () => {
  const { addCoupon, loading: addingCoupon } = useAddCoupon();
  const { updateCoupon, loading: updatingCoupon } = useUpdateCoupon();
  const { coupon, fetchCoupon } = useGetCoupon();

  const { id } = useParams<{ id: string }>();
  const coupon_id = Number(id);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    code: null,
    title: "",
    description: "",
    discount_value: null,
    discount_type: null,
    start_time: dayjs(),
    end_time: dayjs(),
    maximum_usage_count_per_user: null,
    total_usage_count: null,
    coupon_type: null,
  });

  const [initialFormData, setInitialFormData] = useState({
    code: null,
    title: "",
    description: "",
    discount_value: null,
    discount_type: null,
    start_time: dayjs(),
    end_time: dayjs(),
    maximum_usage_count_per_user: null,
    total_usage_count: null,
    coupon_type: null,
  });

  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    const fetchCompanyData = async () => {
      await fetchCoupon(coupon_id);
    };
    fetchCompanyData();
  }, [coupon_id]);

  useEffect(() => {
    if (coupon) {
      const fetchedData = {
        code: coupon.code,
        title: coupon.title,
        description: coupon.description,
        discount_value: coupon.discount_value,
        discount_type: coupon.discount_type,
        start_time: dayjs(coupon.start_time),
        end_time: dayjs(coupon.end_time),
        maximum_usage_count_per_user:
          coupon.maximum_usage_count_per_user.toString(),
        total_usage_count: coupon.total_usage_count.toString(),
        coupon_type: coupon.coupon_type.toString(),
      };

      setFormData(fetchedData);
      setInitialFormData(fetchedData);
    }
  }, [coupon]);

  const handelCancel = () => {
    navigate("/coupon");
  };

  const handleStartTimeChange = (newValue: Dayjs | null) => {
    if (newValue) {
      setFormData((prev) => ({ ...prev, start_time: newValue }));
    }
  };

  const handleEndTimeChange = (newValue: Dayjs | null) => {
    if (newValue) {
      setFormData((prev) => ({ ...prev, end_time: newValue }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const dataToValidate = {
      ...formData,
      code: formData?.code?.toUpperCase(),
      discount_type: Number(formData.discount_type),
      coupon_type: Number(formData.coupon_type),
      discount_value: Number(formData.discount_value),
      maximum_usage_count_per_user: Number(
        formData.maximum_usage_count_per_user
      ),
      total_usage_count: Number(formData.total_usage_count),
      start_time: formData.start_time.toISOString(),
      end_time: formData.end_time.toISOString(),
    };

    try {
      const isDataChanged = () => {
        return (Object.keys(formData) as (keyof typeof formData)[]).some(
          (key) => {
            return formData[key] !== initialFormData[key];
          }
        );
      };

      if (!isDataChanged()) {
        navigate("/coupon");
        return;
      }

      let success;
      await couponSchema.validate(dataToValidate, { abortEarly: false });

      if (coupon?.coupon_id) {
        success = await updateCoupon(coupon.coupon_id, dataToValidate);
      } else {
        success = await addCoupon(dataToValidate);
      }
      if (success) {
        navigate("/coupon");
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const formErrors: any = {};
        error.inner.forEach((err) => {
          formErrors[err.path] = err.message;
        });
        setErrors(formErrors);
      } else {
        toast.error("Failed to submit the form. Please try again.");
      }
    }
  };

  const isLoading = addingCoupon || updatingCoupon;

  return (
    <div className="card max-w-4xl mx-auto p-6 bg-white shadow-md">
      <h1 className="text-2xl font-bold mb-6">
        {coupon ? "Edit Coupon" : "Add Coupon"}
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
          <div className="flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Code
            </label>
            <input
              type="text"
              value={formData.code ?? ""}
              onChange={(e) =>
                setFormData({ ...formData, code: e.target.value })
              }
              className="input border border-gray-300 rounded-md p-2"
            />
            <p className="w-full text-red-500 text-sm">
              {errors.code || "\u00A0"}
            </p>
          </div>

          <div className="flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              value={formData.title ?? ""}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="input border border-gray-300 rounded-md p-2 w-full"
            />
            <p className="text-red-500 text-sm">{errors.title || "\u00A0"}</p>
          </div>

          <div className="flex flex-col col-span-2 problem-001">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              value={formData.description ?? ""}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="h-20 input border border-gray-300 rounded-md p-2 w-full"
            />
            <p className="text-red-500 text-sm">
              {errors.description || "\u00A0"}
            </p>
          </div>

          <div className="flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Discount Type
            </label>
            <select
              className="select border border-gray-300 rounded-md p-2 w-full text-sm"
              value={formData.discount_type ?? ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  discount_type: Number(e.target.value),
                })
              }
            >
              <option value="" disabled>
                Select Discount Type
              </option>
              <option value={1}>Flat</option>
              <option value={2}>Percentage</option>
            </select>
            <p className="text-red-500 text-sm">
              {errors.discount_type || "\u00A0"}
            </p>
          </div>

          <div className="flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Discount Value
            </label>
            <input
              type="text"
              value={formData.discount_value ?? ""}
              onChange={(e) =>
                setFormData({ ...formData, discount_value: e.target.value })
              }
              className="input border border-gray-300 rounded-md p-2 w-full"
            />
            <p className="text-red-500 text-sm">
              {errors.discount_value || "\u00A0"}
            </p>
          </div>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="mb-4 col-span-1 w-[320px]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Start Time
              </label>
              <DateTimePicker
                value={formData.start_time}
                onChange={handleStartTimeChange}
                format="DD-MM-YYYY hh:mm:ss A"
                slotProps={{
                  textField: {
                    fullWidth: true,
                  },
                }}
                disablePast
              />
            </div>

            <div className="mb-4 col-span-1 w-[320px]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                End Time
              </label>
              <DateTimePicker
                value={formData.end_time}
                onChange={handleEndTimeChange}
                format="DD-MM-YYYY hh:mm:ss A"
                slotProps={{
                  textField: {
                    fullWidth: true,
                  },
                }}
                minDateTime={formData.start_time}
              />
            </div>
          </LocalizationProvider>

          <div className="flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Max Usage Per User
            </label>
            <input
              type="text"
              value={formData.maximum_usage_count_per_user ?? ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  maximum_usage_count_per_user: e.target.value,
                })
              }
              className="input border border-gray-300 rounded-md p-2 w-full"
            />
            <p className="text-red-500 text-sm">
              {errors.maximum_usage_count_per_user || "\u00A0"}
            </p>
          </div>

          <div className="flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Total Usage Count
            </label>
            <input
              type="text"
              value={formData.total_usage_count ?? ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  total_usage_count: e.target.value,
                })
              }
              className="input border border-gray-300 rounded-md p-2 w-full"
            />
            <p className="text-red-500 text-sm">
              {errors.total_usage_count || "\u00A0"}
            </p>
          </div>

          <div className="flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Coupon Type
            </label>
            <select
              className="select border border-gray-300 rounded-md p-2 w-full text-sm"
              value={formData.coupon_type ?? ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  coupon_type: Number(e.target.value),
                })
              }
            >
              <option value="" disabled>
                Select Coupon Type
              </option>
              <option value={1}>Web</option>
              <option value={2}>App</option>
              <option value={3}>Both</option>
            </select>
            <p className="text-red-500 text-sm">
              {errors.coupon_type || "\u00A0"}
            </p>
          </div>

        </div>
      </form>
    </div>
  );
};

export default CouponModal;
