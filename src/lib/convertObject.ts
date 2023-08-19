// function to rename key edr_product_tools to product
export const renameObjectTools = (Data: any[]) => {
  Data.map((data, index) => {
    Data[index]["uid"] =
      data.edr_product_tools.category + "-" + data.edr_product_tools.id;
    Data[index]["product"] = data.edr_product_tools;
    delete Data[index]["tool_id"];
    delete Data[index]["edr_product_tools"];
  });
  return Data;
};

export const renameObjectComp = (Data: any[]) => {
  Data.map((data, index) => {
    Data[index]["uid"] =
      data.edr_product_components.category +
      "-" +
      data.edr_product_components.id;
    Data[index]["product"] = data.edr_product_components;
    delete Data[index]["comp_id"];
    delete Data[index]["edr_product_components"];
  });
  return Data;
};
