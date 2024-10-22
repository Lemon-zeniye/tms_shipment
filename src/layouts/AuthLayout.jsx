import { Outlet } from "react-router-dom";
import { HeaderMenu } from "../shared/components/navbar";
import { Box, Container } from "@mantine/core";

function AuthLayout() {
  return (
    <main>
      <HeaderMenu />
      <div className="bg-[#F3F3F3]">
        <Outlet />
      </div>
    </main>
  );
}

export default AuthLayout;
