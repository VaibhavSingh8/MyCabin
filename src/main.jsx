import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import {
  Dashboard,
  Account,
  Login,
  ErrorPage,
  Bookings,
  Cabins,
  Settings,
  Booking,
  Checkin,
} from "./exports.js";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <App />
      </ProtectedRoutes>
    ),
    children: [
      { path: "/", element: <Navigate replace to="cabins" /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/account", element: <Account /> },
      { path: "/bookings", element: <Bookings /> },
      { path: "/booking/:bookingId", element: <Booking /> },
      { path: "/checkin/:bookingId", element: <Checkin /> },
      { path: "/cabins", element: <Cabins /> },
      { path: "/settings", element: <Settings /> },
    ],
    errorElement: <ErrorPage />,
  },
  { path: "/login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          className: "text-base max-w-lg py-4 px-6 bg-gray-50 text-gray-700",
        }}
      />
    </QueryClientProvider>
  </React.StrictMode>
);
