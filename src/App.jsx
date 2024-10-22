import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import LoginPage from "./pages/LoginPage";
import AuthLayout from "./layouts/AuthLayout";
import ProductPage from "./pages/ProductPage";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";
import Transporter from "./pages/Transporter";
import Vehicles from "./pages/vehicles";
import { HeroSection } from "./components/hero-section";
import AddShipment from "./components/add-shipment";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route path="/admin" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transporters" element={<Transporter />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </Route>

      <Route path="/" element={<AuthLayout />}>
        <Route index element={<HeroSection />} />
        <Route path="/shipment" element={<AddShipment />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
