import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingSpinner from "./UI/LoadingSpinner";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const NotFound = React.lazy(() => import("./components/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner asOverlay />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
