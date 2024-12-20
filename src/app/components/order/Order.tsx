import React, { useState } from "react";
import OrderTable from "./OrderTable";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { searchSchema } from "../../validation/searchSchema";

const Order: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigate = useNavigate();

  const handleAddOrder = () => {
    navigate("/order/add");
  };

  const onSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await searchSchema.validate({ search: searchInput }, { abortEarly: false });
      setSearch(searchInput);
      setErrorMessage("");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setErrorMessage(error.errors[0]); 
      }
    }
  };


  return (
    <div className="container-fixed relative">
    <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
        <h1 className="text-xl font-semibold leading-none text-gray-900">
          Orders
        </h1>
        <button className="btn btn-primary" onClick={handleAddOrder}>
          <i className="ki-filled ki-plus-squared"></i>Add Order
        </button>
      </div>

      <div className="absolute top-11 right-[2.5rem] mt-2">
        <form onSubmit={onSearchSubmit} className="w-64 relative flex">
          <input
            type="search"
            value={searchInput}
            onChange={(e) => {
            setSearchInput(e.target.value)
            if(e.target.value === "")
            {
              setSearch("");
            }
          }}
            className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] text-gray-700 outline-none focus:border-primary focus:bg-white border-primary"
            placeholder="Search"
          />

          <button
            type="submit"
            className="relative z-[2] -ml-0.5 flex items-center rounded-e bg-gray-500 px-5 text-xs font-medium uppercase leading-normal text-white"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </form>
        <p className="absolute top-8 right-[0.2rem] mt-2 text-red-500 text-sm w-80">{errorMessage || "\u00A0"}</p>
      </div>

      <OrderTable search={search} />
    </div>
  );
};

export default Order;
