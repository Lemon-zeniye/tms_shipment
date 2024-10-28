import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LoginPage from "./pages/LoginPage";
import AuthLayout from "./layouts/AuthLayout";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";
import { HeroSection } from "./components/hero-section";
import AddShipment from "./components/add-shipment";
import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import VehiclesPage from "./pages/vehicle/VehiclesPage";
import DriversPage from "./pages/driver/DriversPage";
import ShipmentsPage from "./pages/shipment/ShipmentsPage";
import ShipmentsDetailPage from "./pages/shipment/ShipmentsDetailPage";
import TrackShipment from "./pages/track/TrackShipment";
import TrackShipmentDetail from "./pages/track/TrackShipmentDetailPage";
import VehiclesDetailPage from "./pages/vehicle/VehiclesDetailPage";
import DriverDetailPage from "./pages/driver/DriverDetailPage";
import NewDriver from "./pages/driver/NewDriver";
import NewVehicle from "./pages/vehicle/NewVehicle";
import AssignShipment from "./pages/shipment/AssignShipment";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shipments" element={<ShipmentsPage />} />
        <Route path="/shipment/assign/:id" element={<AssignShipment />} />
        <Route path="/shipment/:id" element={<ShipmentsDetailPage />} />
        <Route path="/drivers" element={<DriversPage />} />
        <Route path="/driver/new" element={<NewDriver />} />
        <Route path="/driver/:id" element={<DriverDetailPage />} />
        <Route path="/vehicles" element={<VehiclesPage />} />
        <Route path="/vehicle/new" element={<NewVehicle />} />
        <Route path="/vehicle/:id" element={<VehiclesDetailPage />} />
        <Route path="/track" element={<TrackShipment />} />
        <Route path="/track/:id" element={<TrackShipmentDetail />} />
      </Route>

      <Route path="/" element={<AuthLayout />}>
        <Route index element={<HeroSection />} />
        <Route path="/shipment" element={<AddShipment />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
