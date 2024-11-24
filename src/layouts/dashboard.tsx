import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router";
import React from "react";
import { Menu } from "lucide-react";

export default function DashboardLayout() {
  const [open, setOpen] = React.useState(true);

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <AppSidebar />
      <main className="flex flex-col grow bg-stone-50 w-full p-2">
        <div className="flex gap-2 items-center">
          <Menu
            className="cursor-pointer"
            onClick={() => {
              setOpen((currentValue) => !currentValue);
            }}
          ></Menu>
          <span
            className={`font-bold opacity-0 ${
              !open && "opacity-100"
            } duration-300  transition-opacity`}
          >
            UNAD - Proyecto I
          </span>
        </div>
        <div className="flex flex-col p-4">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
