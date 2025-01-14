import React, { useState } from "react";
import { useSelector } from "react-redux";

const dummycartData = {
  Paymentstatus: false,
  email: "NewBackendAdmin@admin.com",
  endDate: "2025-01-27",
  name: "New Backend Admin",
  packageType: "A2",
  price: "788€",
  startDate: "2025-01-21",
};

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  // https://app.hubspot.com/forms/20102221/editor/d73c6041-358a-467d-b36b-c1532d9cebc3/edit/form?redirectUrl=https%3A%2F%2Fapp.hubspot.com%2Fforms%2F20102221%2F

  const HUBSPOT_PORTAL_ID = import.meta.env.HUBSPOT_PORTAL_ID_A;
  const FORM_GUID = import.meta.env.FORM_GUID_A;

  const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${FORM_GUID}`;

  console.log(HUBSPOT_PORTAL_ID);
  console.log(FORM_GUID);

  // const reduxCartData = useSelector((state) => state.cart);

  // console.log(reduxCartData);

  return (
    <div className="py-20">
      <h2 className="">Cart</h2>

      {/* {cartData && (
        <div>
          <h1 className="text-black">{cartData.name}</h1>
        </div>
      )} */}
    </div>
  );
};

export default Cart;
