import { useEffect, useState } from "react";
import { useAddUser } from "../../hooks";
import * as Yup from "yup";
import { customerSchema } from "../../validation/userSchema";
import toast from "react-hot-toast";
import useAddAddress from "../../hooks/address/useAddAddress";

interface CustomerModalProps {
  isOpen: boolean;
  onClose: () => void;
  setIsSubmit: (value: boolean) => void;
  onCustomerCreated: (customer: any) => void;
}

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  mobile_number: string;
  gender: number | null;
  role_id: number;
}

interface User {
  user_id: number;
  [key: string]: any;
}

const schema = Yup.object().shape({
  pincode: Yup.string()
    .required("Pin Code is required")
    .matches(/^[0-9]{6}$/, "Pincode must be 6 digits"),
  address_type: Yup.number().required("Address type is required"),
});

const CustomerModal: React.FC<CustomerModalProps> = ({
  isOpen,
  onClose,
  setIsSubmit,
  onCustomerCreated,
}) => {
  const { addUser, newUser, loading: addingCustomer } = useAddUser();
  const { addAddress, loading: addingAddress } = useAddAddress();
  const [newCustomerId, setNewCustomerId] = useState<number | null>(null);

  const formDataState: FormData = {
    first_name: "",
    last_name: "",
    email: "",
    mobile_number: "",
    gender: null,
    role_id: 5,
  };

  const [formData, setFormData] = useState(formDataState);
  const [addressData, setAddressData] = useState({
    building_number: "",
    area: "",
    landmark: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
    user_id: null,
    address_type: null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [step, setStep] = useState<"customer" | "address">("customer");

  useEffect(() => {
    if (!isOpen) {
      setFormData(formDataState);
      setAddressData({
        building_number: "",
        area: "",
        landmark: "",
        pincode: "",
        city: "",
        state: "",
        country: "",
        user_id: null,
        address_type: null,
      });
      setErrors({});
      setNewCustomerId(null);
      setStep("customer");
    }
  }, [isOpen]);

  useEffect(() => {
    if (newUser && (newUser as User).user_id) {
      const user = newUser as User;
      onCustomerCreated(user);
      setNewCustomerId(user.user_id);
      setAddressData((prev) => ({ ...prev, user_id: user.user_id }));
      setStep("address");
    }
  }, [newUser]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const schema = customerSchema();
      await schema.validate(formData, { abortEarly: false });

      await addUser(formData);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const formErrors: Record<string, string> = {};
        error.inner.forEach((err) => {
          formErrors[err.path || ""] = err.message;
        });
        setErrors(formErrors);
      } else {
        toast.error("Failed to submit the form. Please try again.");
      }
    }
  };

  const handleAddressSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await schema.validate(addressData, { abortEarly: false });

      if (newCustomerId) {
        await addAddress(addressData);
        toast.success("Customer and address added successfully!");
        setIsSubmit(true);
        onClose();
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const formErrors: Record<string, string> = {};
        error.inner.forEach((err) => {
          formErrors[err.path || ""] = err.message;
        });
        setErrors(formErrors);
      } else {
        toast.error("Failed to submit the form. Please try again.");
      }
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 grid overflow-auto items-center justify-center z-50 p-4">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg smobile:min-w-[85%] max-w-[1000px] z-10 relative">
        <button
          className="btn btn-sm btn-icon btn-light btn-outline absolute top-0 right-0 mr-5 mt-5 lg:mr-5 shadow-default"
          onClick={onClose}
        >
          <i className="ki-filled ki-cross"></i>
        </button>
        <div className="flex flex-row w-full gap-5">
          <div>
            <h2 className="text-2xl font-bold mb-6">Add New Customer</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-gray-700 font-semibold"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, first_name: e.target.value })
                    }
                    className="w-full input border border-gray-300 rounded-md"
                  />
                  <p className="text-red-500 text-sm">
                    {errors.first_name || "\u00A0"}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-gray-700 font-semibold"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        last_name: e.target.value,
                      })
                    }
                    className="w-full input border border-gray-300 rounded-md"
                  />
                  <p className="text-red-500 text-sm">
                    {errors.last_name || "\u00A0"}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full input border border-gray-300 rounded-md"
                  />
                  <p className="text-red-500 text-sm">
                    {errors.email || "\u00A0"}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="mobile_number"
                    className="block text-gray-700 font-semibold"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    id="mobile_number"
                    name="mobile_number"
                    value={formData.mobile_number}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        mobile_number: e.target.value,
                      })
                    }
                    className="w-full input border border-gray-300 rounded-md"
                  />
                  <p className="text-red-500 text-sm">
                    {errors.mobile_number || "\u00A0"}
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-gray-700 font-semibold">
                    Gender
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="gender"
                        value={1}
                        checked={formData.gender === 1}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            gender: parseInt(e.target.value),
                          })
                        }
                        className="radio radio-primary"
                      />
                      <span className="text-sm">Male</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="gender"
                        value={2}
                        checked={formData.gender === 2}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            gender: parseInt(e.target.value),
                          })
                        }
                        className="radio radio-primary"
                      />
                      <span className="text-sm">Female</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="gender"
                        value={3}
                        checked={formData.gender === 3}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            gender: parseInt(e.target.value),
                          })
                        }
                        className="radio radio-primary"
                      />
                      <span className="text-sm">Other</span>
                    </label>
                  </div>
                  <p className="text-red-500 text-sm">
                    {errors.gender || "\u00A0"}
                  </p>
                </div>
              </div>

              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  onClick={handleSubmit}
                  // disabled={loading}
                  className="btn btn-primary"
                >
                   Save Customer
                </button>
              </div>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Add Address</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="building_number"
                    className="block text-gray-700 font-semibold"
                  >
                    Building Number
                  </label>
                  <input
                    type="text"
                    id="building_number"
                    name="building_number"
                    value={addressData.building_number}
                    onChange={(e) =>
                      setAddressData({
                        ...addressData,
                        building_number: e.target.value,
                      })
                    }
                    className="w-full input border border-gray-300 rounded-md p-2"
                  />
                </div>

                <div>
                  <label
                    htmlFor="area"
                    className="block text-gray-700 font-semibold"
                  >
                    Area
                  </label>
                  <input
                    type="text"
                    id="area"
                    name="area"
                    value={addressData.area}
                    onChange={(e) =>
                      setAddressData({
                        ...addressData,
                        area: e.target.value,
                      })
                    }
                    className="w-full input border border-gray-300 rounded-md p-2"
                  />
                </div>

                <div>
                  <label
                    htmlFor="landmark"
                    className="block text-gray-700 font-semibold"
                  >
                    Landmark
                  </label>
                  <input
                    type="text"
                    id="landmark"
                    name="landmark"
                    value={addressData.landmark}
                    onChange={(e) =>
                      setAddressData({
                        ...addressData,
                        landmark: e.target.value,
                      })
                    }
                    className="w-full input border border-gray-300 rounded-md p-2"
                  />
                </div>

                <div>
                  <label
                    htmlFor="pincode"
                    className="block text-gray-700 font-semibold"
                  >
                    Pin code
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={addressData.pincode}
                    onChange={(e) =>
                      setAddressData({
                        ...addressData,
                        pincode: e.target.value,
                      })
                    }
                    className="w-full input border border-gray-300 rounded-md p-2"
                  />
                  <p className="w-full text-red-500 text-sm">
                    {errors.pincode || "\u00A0"}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-gray-700 font-semibold"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={addressData.city}
                    onChange={(e) =>
                      setAddressData({
                        ...addressData,
                        city: e.target.value,
                      })
                    }
                    className="w-full input border border-gray-300 rounded-md p-2"
                  />
                </div>

                <div>
                  <label
                    htmlFor="state"
                    className="block text-gray-700 font-semibold"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={addressData.state}
                    onChange={(e) =>
                      setAddressData({
                        ...addressData,
                        state: e.target.value,
                      })
                    }
                    className="w-full input border border-gray-300 rounded-md p-2"
                  />
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block text-gray-700 font-semibold"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={addressData.country}
                    onChange={(e) =>
                      setAddressData({
                        ...addressData,
                        country: e.target.value,
                      })
                    }
                    className="w-full input border border-gray-300 rounded-md p-2"
                  />
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block text-gray-700 font-semibold"
                  >
                    Address Type
                  </label>
                  <select
                    className="select select-lg text-sm"
                    onChange={(e) =>
                      setAddressData({
                        ...addressData,
                        address_type: Number(e.target.value),
                      })
                    }
                  >
                    <option
                      value=""
                      selected
                      disabled
                      className="badge-danger badge-outline"
                    >
                      Select Address Type
                    </option>
                    <option value="1">Home</option>
                    <option value="2">Office</option>
                    <option value="3">Other</option>
                  </select>
                  <p className="w-full text-red-500 text-sm">
                    {errors.address_type || "\u00A0"}
                  </p>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn btn-light mr-2"
                  // disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  // disabled={loading}
                  className="btn btn-primary"
                  // className={`btn btn-primary ${
                  //   loading ? "opacity-50 cursor-not-allowed" : ""
                  onClick={handleAddressSubmit}
                  // }`}
                >
                  {/* {loading ? "Submitting..." : "Submit"} */}
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerModal;
