import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetailPage from "./pages/onePage.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetailPage />} />*/}
    </Routes>
  );
};

export default memo(App);
