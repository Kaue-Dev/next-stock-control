import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { Clock, Grid2X2Check, Package, PackagePlus, Settings } from "lucide-react";

type SidebarItem = {
  title: string;
  url: string;
  icon: React.ElementType;
}

const dataVisualizationItems: SidebarItem[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: Grid2X2Check,
  },
  {
    title: "History",
    url: "/history",
    icon: Clock,
  },
]

const stockManagementItems: SidebarItem[] = [
  {
    title: "Add Product",
    url: "/add-product",
    icon: PackagePlus,
  },
  {
    title: "Products",
    url: "/products",
    icon: Package,
  },
]

const CustomizationItems: SidebarItem[] = [
  {
    title: "Configurations",
    url: "/configurations",
    icon: Settings,
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Data Visualization</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {dataVisualizationItems.map(item => (
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
        <SidebarGroup>
          <SidebarGroupLabel>Stock Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {stockManagementItems.map(item => (
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
        <SidebarGroup>
          <SidebarGroupLabel>Customization</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {CustomizationItems.map(item => (
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
  )
}