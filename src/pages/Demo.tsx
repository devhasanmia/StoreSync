import React, { useState } from "react";
import { Table, Input, Select, Space } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const Demo: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const data = [
    {
      key: 1,
      name: "Md. HASAN MIA",
      mobile: "01740398196",
      due: "50 BDT",
      photo: "man",
    },
    {
      key: 2,
      name: "Md. HASAN MIA",
      mobile: "01740398196",
      due: "0 BDT",
      photo: "man",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Photo",
      dataIndex: "photo",
      key: "photo",
      render: (text) => (
        <img
          src={text}
          alt="Customer"
          style={{ width: 40, height: 40, borderRadius: "50%" }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "Due",
      dataIndex: "due",
      key: "due",
      render: (text) => (
        <span
          className={
            text.includes("BDT")
              ? text.includes("0 BDT")
                ? "text-green-500"
                : "text-red-500"
              : ""
          }
        >
          {text}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button
            type="primary"
            style={{ backgroundColor: "green", borderColor: "green" }}
          >
            View
          </Button>
          <Button
            type="primary"
            style={{ backgroundColor: "blue", borderColor: "blue" }}
          >
            Update
          </Button>
          <Button
            type="primary"
            style={{ backgroundColor: "red", borderColor: "red" }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <Layout style={{ overflow: "hidden", height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        collapsed={collapsed} // Pass collapsed state
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div style={{ padding: 16 }}>
              {/* Header */}
              <header
                style={{
                  marginBottom: 24,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
                  Customers
                </h1>
              </header>

              {/* Filters and Actions */}
              <div style={{ padding: 16 }}>
                {/* Header */}
                <header
                  style={{
                    marginBottom: 24,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
                    Customers
                  </h1>
                </header>

                {/* Filters and Actions */}
                <div className="flex flex-col md:flex-row justify-between gap-4">
  <div className="flex gap-4">
    <button className="bg-green-500 border-green-500 text-white px-4 py-2 rounded">
      Add Customer
    </button>
    <select className="w-full md:w-48 border border-gray-300 rounded px-2 py-1">
      <option value="">All</option>
      <option value="due">Due</option>
    </select>
  </div>

  <div className="flex gap-4 items-center">
    <input
      type="text"
      className="w-full md:w-48 border border-gray-300 rounded px-2 py-1"
      placeholder="Search"
    />
    <button className="bg-blue-500 border-blue-500 text-white px-4 py-2 rounded">
      Search
    </button>
  </div>
</div>


                {/* Table Section */}
                <Table
                  columns={columns}
                  dataSource={data}
                  scroll={{ x: "max-content" }}
                />
              </div>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Demo;
