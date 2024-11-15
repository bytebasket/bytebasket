import { Home, ShoppingCart, Refrigerator, Receipt, History, Settings, User, UserPlus, Link } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Shopping List",
    url: "/dashboard/shopping-list",
    icon: ShoppingCart,
  },
  {
    title: "Pantry",
    url: "/dashboard/pantry",
    icon: Refrigerator,
  },
  {
    title: "History",
    url: "/dashboard/shopping-history",
    icon: History,
  },
  {
    title: "Receipt",
    url: "/dashboard/receipts",
    icon: Receipt,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Account",
    url: "/dashboard/account",
    icon: User,
  },
  {
    title: "Invite",
    url: "/dashboard/invite",
    icon: UserPlus,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        {/* Logo Section */}
        <div className="flex items-center justify-center p-4">
          <img
            src="/Logo.png"
            alt="App Logo"
            className="w-480 h-auto object-contain"
          />
        </div>
        
        {/* Main Sidebar Content */}
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
    </Sidebar>
  );
}
