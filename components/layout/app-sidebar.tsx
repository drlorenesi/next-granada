"use client";

import * as React from "react";
import { ChartPie, Package, SquareChevronRight } from "lucide-react";

import { NavHeader } from "./nav-header";
import { NavGroup } from "@/components/layout/nav-group";
import { NavUser } from "@/components/layout/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";

// Sample user data for the sidebar.
const user = {
  data: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

// Sample menu for the sidebar.
const generales = {
  label: "Reportes",
  items: [
    {
      title: "Ventas",
      url: "#",
      icon: ChartPie,
      items: [
        {
          title: "Por Canal",
          url: "#",
        },
        {
          title: "Por Producto",
          url: "#",
        },
        {
          title: "Por Categoría",
          url: "#",
        },
        {
          title: "Por Unidades Mensuales",
          url: "#",
        },
      ],
    },
    {
      title: "Producción",
      url: "#",
      icon: Package,
      items: [
        {
          title: "Orden Sugerida - PT",
          url: "#",
        },
        {
          title: "Orden Sugerida - Materiales",
          url: "#",
        },
        {
          title: "Unidades Producidas Mensuales",
          url: "#",
        },
      ],
    },
  ],
};

const desarrollo = {
  label: "Desarrollo",
  items: [
    {
      title: "Plantillas",
      url: "#",
      icon: SquareChevronRight,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <NavHeader />
      <SidebarContent>
        <NavGroup label={generales.label} items={generales.items} />
        <NavGroup label={desarrollo.label} items={desarrollo.items} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user.data} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}