import React, { useState } from "react";
import ProductModal from "./ProductModal";
import ProductTable from "./ProductTable";
import * as Yup from "yup";
import { searchSchema } from "../../validation/searchSchema";

const Product: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [currentProduct, setCurrentProduct] = useState<any>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleAddProduct = () => {
    setEditMode(false);
    setModalIsOpen(true);
    setCurrentProduct(null);
  };

  const handleEditProduct = (product_id: number) => {
    setEditMode(true);
    setCurrentProduct(product_id);
    setModalIsOpen(true);
  };

  const onSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await searchSchema.validate(
        { search: searchInput },
        { abortEarly: false }
      );
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
          Products
        </h1>
        <button onClick={handleAddProduct} className="btn btn-primary">
          <i className="ki-filled ki-plus-squared"></i>Add Product
        </button>
      </div>

      <div className="absolute top-11 right-[2.5rem] mt-2">
        <form onSubmit={onSearchSubmit} className="w-64 relative flex">
          <input
            type="search"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              if (e.target.value === "") {
                setSearch("");
              }
            }}
            className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] text-gray-700 outline-none focus:border-gray-500 focus:bg-white border-gray-500"
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
        <p className="absolute top-8 right-[0.2rem] mt-2 text-red-500 text-sm w-80">
          {errorMessage || "\u00A0"}
        </p>
      </div>

      <ProductTable
        search={search}
        isSubmit={isSubmit}
        setIsSubmit={setIsSubmit}
        setEditProduct={handleEditProduct}
      />

      <ProductModal
        setIsSubmit={setIsSubmit}
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        product_id={currentProduct}
      />
    </div>
  );
};

export default Product;
