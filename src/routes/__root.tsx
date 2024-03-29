/* @global-imports */
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
/* @local-imports */
import "./../index.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="mb-10">
        <Nav />
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
