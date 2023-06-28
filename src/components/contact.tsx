import * as React from "react";
import Cta from "../components/cta";
import { LiaDirectionsSolid } from "react-icons/lia";
import { FiPhone } from "react-icons/fi";

const Contact = (props: any) => {
  const { address, phone, showCTA } = props;

  return (
    <>
      <div className="text-lg font-normal space-y-4">
        <div className="space-y-1">
          <div className="font-bold text-2xl">Address</div>
          <div>{address.line1}</div>
          {address.line2 && <div>{address.line2}</div>}
          <div>
            {address.city}, {address.region} {address.postalCode}
          </div>
        </div>

        <div className="space-y-1">
          <div className="font-bold text-2xl">Phone number</div>
          <div className="flex leading-loose items-center">
            <FiPhone />
            {phone && (
              <span className="ml-2">
                {phone
                  .replace("+1", "")
                  .replace(/\D+/g, "")
                  .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
              </span>
            )}
          </div>
        </div>

        {showCTA && (
          <div className="gap-y-4">
            <div className="mt-4  uppercase text-blue-600  hover:cursor-pointer underline underline-offset-8">
              <a className="flex items-center gap-2">
                <LiaDirectionsSolid />
                <div>Get Directions</div>
              </a>
            </div>
            <div className="w-30 mt-4 md:mt-10">
              <Cta
                buttonText="Order Delivery"
                url="#"
                style="secondary-cta"
              ></Cta>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
