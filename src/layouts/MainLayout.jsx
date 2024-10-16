import { Outlet } from "react-router-dom";
import { BasicAppShell } from "../components/shell";

function MainLayout() {
  return (
    <BasicAppShell>
      <Outlet />
    </BasicAppShell>
  );
}

export default MainLayout;
