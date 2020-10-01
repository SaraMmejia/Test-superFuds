import React, { useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "../CartContext";

export default function GetData() {
  const { state, dispatch } = useContext(CartContext);

  const getData = async () => {
    const result = await axios(
      "https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json"
    );
    dispatch({ type: "INITIAL_DATA", data: result.data });
  };
  useEffect(() => {
    getData();
  }, []);

  return <>{console.log("Estado en getData", state)}</>;
}
