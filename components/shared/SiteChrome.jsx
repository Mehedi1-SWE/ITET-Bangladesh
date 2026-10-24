"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import MembershipCta from "@/components/shared/MembershipCta";

export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const standalone = pathname === "/client-portal" || pathname.startsWith("/client-portal/");

  if (standalone) return <>{children}</>;

  return (
    <>
      <Header />
      <main>{children}</main>
      {pathname !== "/" ? <MembershipCta /> : null}
      <Footer />
    </>
  );
}
