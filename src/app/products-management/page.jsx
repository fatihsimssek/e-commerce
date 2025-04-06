import ProductManagement from "@/app/components/ProductsManagement";
import React from "react";
import SettingsSidebar from "../components/Settings/SettingsSidebar";

const ProductManagementPage = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <SettingsSidebar />
      <ProductManagement />
    </div>
  );
};

export default ProductManagementPage;
