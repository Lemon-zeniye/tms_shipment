import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div>
      <main>
        Auth layout
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;
