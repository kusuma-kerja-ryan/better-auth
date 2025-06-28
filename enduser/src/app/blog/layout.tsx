import { Metadata } from "next";
import { ReactNode, Suspense } from "react";

export const metadata: Metadata = {
  title: "Blog | Photography Portfolio",
  description: "Ryan Kusuma's Photography Portfolio",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
  )
}