import { Outlet } from "react-router-dom";
import { HeaderMenu } from "../shared/components/navbar";
import { Box, Container } from "@mantine/core";

function AuthLayout() {
  return (
    <main>
      <HeaderMenu />
      <div className="bg-gradient-to-br from-[#fdfeff] to-[#c3cfe2] min-h-[91vh]">
        <Outlet />
      </div>
    </main>
  );
}

export default AuthLayout;
