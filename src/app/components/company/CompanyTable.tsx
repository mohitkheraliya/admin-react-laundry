import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDeleteCompany, useGetCompany } from "../../hooks";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPencilAlt,
  FaTrash,
} from "react-icons/fa";
import Swal from "sweetalert2";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import TableShimmer from "../shimmer/TableShimmer";

interface CompanyTableProps {
  search: string;
}

const CompanyTable: React.FC<CompanyTableProps> = ({ search }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState<number>(5);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"ASC" | "DESC" | null>(null);
  const pageParams = searchParams.get("page");
  const perPageParams = searchParams.get("perPage");

  const { companies, fetchCompanies, loading, totalCount } = useGetCompany(
    currentPage,
    perPage,
    search,
    sortColumn,
    sortOrder
  );

  const navigate = useNavigate();

  const totalPages = Math.ceil(totalCount / perPage);

  const { deleteCompany } = useDeleteCompany();

  const handleDeleteCompany = async (company_id: number) => {
    try {
      const { isConfirmed } = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#dc3545",
        cancelButtonColor: "#6c757d",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel",
      });

      if (isConfirmed) {
        const { success, message } = await deleteCompany(company_id);
        if (success) {
          const updatedCompanies = companies.filter(
            (company) => company.company_id !== company_id
          );
          if (updatedCompanies.length === 0 && currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setSearchParams({
              page: (currentPage - 1).toString(),
              perPage: perPage.toString(),
            });
          }
          await fetchCompanies();
          Swal.fire(message);
        } else {
          Swal.fire(message);
        }
      } else {
        Swal.fire("Cancelled", "The company is safe :)", "info");
      }
    } catch (error: any) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
    }
  };

  const handleUpdateCompany = (company: any) => {
    navigate(`/company/edit/${company.company_id}`, { state: { company } });
  };

  useEffect(() => {
    if (pageParams) {
      setCurrentPage(Number(pageParams));
    }
    if (perPageParams) {
      setPerPage(Number(perPageParams));
    }
  }, [pageParams, perPageParams]);

  useEffect(() => {
    if (search) {
      setCurrentPage(1);
      setSearchParams({
        search: search,
        page: "1",
        perPage: perPage.toString(),
      });
    } else {
      setSearchParams({
        page: "1",
        perPage: perPage.toString(),
      });
    }
  }, [search]);

  useEffect(() => {
    fetchCompanies();
  }, [perPage, currentPage, search, sortColumn, sortOrder, fetchCompanies]);

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      if (sortOrder === "ASC") {
        setSortOrder("DESC");
      } else {
        setSortOrder("ASC");
      }
    } else {
      setSortColumn(column);
      setSortOrder("ASC");
    }
    fetchCompanies();
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      setSearchParams({
        page: newPage.toString(),
        perPage: perPage.toString(),
      });
    }
  };

  const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPerPage = Number(e.target.value);
    setPerPage(newPerPage);
    setCurrentPage(1);
    setSearchParams({ page: "1", perPage: newPerPage.toString() });
  };

  return (
    <>
      <div className="inline-block">
        <div className="flex mb-3 items-center gap-2">
          Show
          <select
            className="select select-sm w-16"
            value={perPage}
            onChange={handlePerPageChange}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          per page
        </div>
      </div>
      <div className="grid gap-5 lg:gap-7.5">
        <div className="card card-grid min-w-full">
          <div className="card-body">
            <table className="table table-auto table-border">
              <thead>
                <tr>
                  <th className="w-[100px]">
                    <div
                      className="flex justify-between cursor-pointer"
                      onClick={() => handleSort("company_id")}
                    >
                      Id
                      <div className="flex cursor-pointer">
                        <FaArrowDownLong
                          color={
                            sortColumn === "company_id" && sortOrder === "ASC"
                              ? "gray"
                              : "lightgray"
                          }
                        />
                        <FaArrowUpLong
                          color={
                            sortColumn === "company_id" && sortOrder === "DESC"
                              ? "gray"
                              : "lightgray"
                          }
                        />
                      </div>
                    </div>
                  </th>
                  <th className="min-w-[200px]">
                    <div
                      className="flex justify-between cursor-pointer"
                      onClick={() => handleSort("company_name")}
                    >
                      Company Name
                      <div className="flex cursor-pointer">
                        <FaArrowDownLong
                          color={
                            sortColumn === "company_name" && sortOrder === "ASC"
                              ? "gray"
                              : "lightgray"
                          }
                        />
                        <FaArrowUpLong
                          color={
                            sortColumn === "company_name" &&
                            sortOrder === "DESC"
                              ? "gray"
                              : "lightgray"
                          }
                        />
                      </div>
                    </div>
                  </th>
                  <th className="min-w-[240px]">
                    <div
                      className="flex justify-between cursor-pointer"
                      onClick={() => handleSort("address")}
                    >
                      Address
                      <div className="flex cursor-pointer">
                        <FaArrowDownLong
                          color={
                            sortColumn === "address" && sortOrder === "ASC"
                              ? "gray"
                              : "lightgray"
                          }
                        />
                        <FaArrowUpLong
                          color={
                            sortColumn === "address" && sortOrder === "DESC"
                              ? "gray"
                              : "lightgray"
                          }
                        />
                      </div>
                    </div>
                  </th>
                  <th className="w-[50px]">Actions</th>
                </tr>
              </thead>
              {loading ? (
                <TableShimmer />
              ) : companies.length > 0 ? (
                <tbody>
                  {companies.map((company) => (
                    <tr key={company.company_id}>
                      <td>{company.company_id}</td>
                      <td>
                        <span
                          className="cursor-pointer hover:text-primary"
                          onClick={() =>
                            navigate(`/company-profile/${company.company_id}`)
                          }
                        >
                          {company.company_name}
                        </span>
                      </td>
                      <td>{company.address}</td>
                      <td>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleUpdateCompany(company)}
                            className="bg-yellow-100 hover:bg-yellow-200 p-2 rounded-full"
                          >
                            <FaPencilAlt className="text-yellow-600" />
                          </button>
                          <button
                            onClick={() =>
                              handleDeleteCompany(company.company_id)
                            }
                            className="bg-red-100 hover:bg-red-200 p-2 rounded-full"
                          >
                            <FaTrash className="text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td colSpan={4} className="text-center">
                      No companies available.
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </div>

        {totalCount > perPage && (
          <div className="flex items-center gap-4 mt-4">
            <span className="text-gray-700">
              Showing {companies.length} of {totalCount} Companies
            </span>

            <div className="pagination" data-datatable-pagination="true">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className={`btn ${currentPage === 1 ? "disabled" : ""}`}
              >
                <FaChevronLeft />
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`btn ${currentPage === index + 1 ? "active" : ""}`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className={`btn ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CompanyTable;
