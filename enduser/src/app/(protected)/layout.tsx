import ProtectedRoute from "@/components/layout/wrapper/ProtectedRoute";
import type { ReactNode } from "react";

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
