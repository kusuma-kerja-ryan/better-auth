"use client";

import { useSession } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { error, isPending: isLoading } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (error?.message === "unauthenticated") {
            router.replace("/auth/signin");
        }
    }, [error]);

    if (isLoading) return <div>Loading...</div>;

    return <>{children}</>;
}
