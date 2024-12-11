// import { Table, Button, Input, Select, Space } from "antd";
// import { SearchOutlined } from "@ant-design/icons";
// import man from "/man.png"; // Your image source

// const { Option } = Select;

// const Customer = () => {
//   const data = [
//     {
//       key: 1,
//       name: "Md. HASAN MIA",
//       mobile: "01740398196",
//       due: "50 BDT",
//       photo: man,
//     },
//     {
//       key: 2,
//       name: "Md. HASAN MIA",
//       mobile: "01740398196",
//       due: "0 BDT",
//       photo: man,
//     },
//   ];

//   const columns = [
//     {
//       title: "#",
//       dataIndex: "key",
//       key: "key",
//     },
//     {
//       title: "Photo",
//       dataIndex: "photo",
//       key: "photo",
//       render: (text) => (
//         <img
//           src={text}
//           alt="Customer"
//           style={{ width: 40, height: 40, borderRadius: "50%" }}
//         />
//       ),
//     },
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Mobile",
//       dataIndex: "mobile",
//       key: "mobile",
//     },
//     {
//       title: "Due",
//       dataIndex: "due",
//       key: "due",
//       render: (text) => (
//         <span
//           className={
//             text.includes("BDT")
//               ? text.includes("0 BDT")
//                 ? "text-green-500"
//                 : "text-red-500"
//               : ""
//           }
//         >
//           {text}
//         </span>
//       ),
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: () => (
//         <Space size="middle">
//           <Button
//             type="primary"
//             style={{ backgroundColor: "green", borderColor: "green" }}
//           >
//             View
//           </Button>
//           <Button
//             type="primary"
//             style={{ backgroundColor: "blue", borderColor: "blue" }}
//           >
//             Update
//           </Button>
//           <Button
//             type="primary"
//             style={{ backgroundColor: "red", borderColor: "red" }}
//           >
//             Delete
//           </Button>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div style={{ padding: 16 }}>
//       {/* Header */}
//       <header
//         style={{
//           marginBottom: 24,
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Customers</h1>
//       </header>

//       {/* Filters and Actions */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           marginBottom: 24,
//         }}
//       >
//         <div style={{ display: "flex", gap: 16 }}>
//           <Button
//             type="primary"
//             style={{ backgroundColor: "green", borderColor: "green" }}
//           >
//             Add Customer
//           </Button>
//           <Select defaultValue="" style={{ width: 200 }}>
//             <Option value="">All</Option>
//             <Option value="due">Due</Option>
//           </Select>
//         </div>

//         <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
//           <Input
//             style={{ width: 200 }}
//             placeholder="Search"
//             prefix={<SearchOutlined />}
//           />
//           <Button
//             type="primary"
//             style={{ backgroundColor: "blue", borderColor: "blue" }}
//           >
//             Search
//           </Button>
//         </div>
//       </div>

//       {/* Table Section */}
//       <div style={{ overflowX: "auto", maxWidth: "100%" }} id="customTable">

//       </div>
//     </div>
//   );
// };

// export default Customer;

import { Button } from "antd";
import React from "react";

const Customer = () => {
  return (
    <div className="customTable">
      <table className="table-auto">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
            <th>Action</th>
            <th>Action</th>
            <th>Action</th>
            <th>Action</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
            <td>
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
            </td>
            <td>
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
            </td>
            <td>
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
            </td>
            <td>
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Customer;
