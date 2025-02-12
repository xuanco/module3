import React from "react";
import ReactDOM from "react-dom/client";

const browserInfo = navigator.userAgent; // Lấy thông tin trình duyệt

const element = <h4>Browser's details: {browserInfo}</h4>; // JSX hiển thị thông tin trình duyệt

const root = ReactDOM.createRoot(document.getElementById("root")); // Khởi tạo root
root.render(element); // Render element vào UI