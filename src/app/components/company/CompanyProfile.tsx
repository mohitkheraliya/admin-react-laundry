import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CompanyDetail from "./CompanyDetail";
import ContactDetail from "./ContactDetail";
import RegistrationDetail from "./RegistrationDetail";
import Shimmer02 from "../shimmer/ProfileShimmer01";
import { useGetCompany } from "../../hooks";

const CompanyProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { companies, loading } = useGetCompany();
  const [selectedCompany, setSelectedCompany] = useState<any>(null);

  useEffect(() => {
    if (companies.length > 0 && id) {
      const company = companies.find(
        (comp) => comp.company_id === parseInt(id)
      );
      setSelectedCompany(company);
    }
  }, [companies, id]);

  return (
    <div>
      {!loading && !selectedCompany && <p>No company data available.</p>}
      
      {loading && <Shimmer02 />} 

      {selectedCompany && (
        <div>
          <div className="bg-center bg-cover bg-no-repeat hero-bg">
            <div className="container-fixed">
              <div className="flex flex-col items-center gap-2 lg:gap-3.5 py-4 lg:pt-5 lg:pb-10">
                <div className="flex overflow-hidden items-center justify-center rounded-full border-2 border-success-clarity size-[100px] shrink-0 bg-light">
                  <img
                    className="rounded object-cover w-full h-full"
                    src={selectedCompany.logo}
                    alt={selectedCompany.company_name}
                  />
                </div>

                <div className="flex items-center gap-1.5">
                  <div className="text-lg leading-5 font-semibold text-gray-900">
                    {selectedCompany.company_name}
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-1 lg:gap-4.5 text-sm">
                  <div className="flex gap-1.25 items-center">
                    <i className="ki-filled ki-geolocation text-gray-500 text-sm"></i>
                    <span className="text-gray-600">
                      {selectedCompany.city}, {selectedCompany.state}
                    </span>
                  </div>

                  <div className="flex gap-1.25 items-center">
                    <i className="ki-filled ki-sms text-gray-500 text-sm"></i>
                    <a
                      className="text-gray-600 hover:text-primary"
                      href={`mailto:${selectedCompany.email}`}
                    >
                      {selectedCompany.email}
                    </a>
                  </div>

                  <div className="flex gap-1.25 items-center">
                    <i className="ki-filled ki-link text-gray-500 text-sm"></i>
                    <a
                      className="text-gray-600 hover:text-primary"
                      href={selectedCompany.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {selectedCompany.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fixed">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
              <CompanyDetail company={selectedCompany} />
              <ContactDetail company={selectedCompany} />
              <RegistrationDetail company={selectedCompany} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyProfile;