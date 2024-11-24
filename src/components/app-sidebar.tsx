import { User, File, UserSquare2Icon, LogOut } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router";

// Menu items.
const items = [
  {
    title: "Usuarios",
    url: "/dashboard/usuarios",
    icon: User,
  },
  {
    title: "Ordenes de trabajo",
    url: "/dashboard/ordenes-de-trabajo",
    icon: File,
  },
  {
    title: "Roles y permisos",
    url: "/dashboard/roles-y-permisos",
    icon: UserSquare2Icon,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <span className="font-bold">UNAD - Proyecto I</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                onClick={() => {
                  console.log(88);
                }}
              >
                <Link to="/ingreso">
                  <LogOut />
                  <span>Cerrar session</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </SidebarFooter>
    </Sidebar>
  );
}
