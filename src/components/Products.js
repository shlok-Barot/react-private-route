import React, { useState, useEffect } from "react";
import { Table, Modal } from "antd";
import fetchapi from "../config/fetchApi";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productImg, setProductImg] = useState("");
  const [productName, setProductName] = useState("");

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    let reqBody = {
      method: "get",
      reqUrl: "ProductList",
    };
    const apiResponse = await fetchapi(reqBody);
    if (apiResponse.data[0].length > 0) {
      setProductData(apiResponse.data[0]);
    }
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns = [
    {
      title: "Product Id",
      dataIndex: "key",
    },
    {
      title: "Product Image",
      dataIndex: "productImage",
      render: (data, item) => (
        <img
          src={item.productImage}
          alt="img"
          className="product_img"
          onClick={() => OpenProductData(item)}
        />
      ),
    },
    {
      title: "Product Name",
      dataIndex: "productName",
    },
    {
      title: "Product Price",
      dataIndex: "productPrice",
    },
    {
      title: "Product Price",
      dataIndex: "productPrice",
    },
  ];

  const hasSelected = selectedRowKeys.length > 0;

  const OpenProductData = (data) => {
    setProductImg(data.productImage);
    setProductName(data.productName);
    setIsModalOpen(true);
  };

  return (
    <div>
      <span
        style={{
          marginLeft: 8,
        }}
      >
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
      </span>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={productData}
      />
      <Modal
        title={productName}
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        className="product_mdl"
      >
        <img
          src={productImg}
          alt="img"
          style={{ width: "150px", margin: "0 20px" }}
        />
      </Modal>
    </div>
  );
};

export default Products;
