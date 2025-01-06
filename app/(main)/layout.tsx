import type { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppHeader } from "@/components/layout/app-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Reportes Granada",
  description: "Sistema de reportes gereciales",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  // const user = {
  //   name: data?.user.user_metadata?.first_name ?? "",
  //   email: data?.user.user_metadata?.email ?? "",
  //   avatar: null,
  //   initials:
  //     (data?.user.user_metadata?.first_name.trim()?.[0]?.toUpperCase() ?? "") +
  //     (data?.user.user_metadata?.last_name.trim()?.[0]?.toUpperCase() ?? ""),
  // };
  // console.log(user);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
