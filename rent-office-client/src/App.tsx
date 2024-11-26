import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CityDetails from "./pages/CityDetails";
import OfficeDetails from "./pages/OfficeDetails";
import BookOffice from "./pages/BookOffice";
import SuccessBooking from "./pages/SuccessBooking";
import CheckBooking from "./pages/CheckBooking";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:slug" element={<CityDetails />} />
        <Route path="/office/:slug" element={<OfficeDetails />} />
        <Route path="/office/:slug/book" element={<BookOffice />} />
        <Route path="/success-booking" element={<SuccessBooking />} />
        <Route path="/check-booking" element={<CheckBooking />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
