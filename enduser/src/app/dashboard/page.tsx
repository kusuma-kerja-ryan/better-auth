"use client"
import { useSession, signOut } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data, isPending: isLoading } = useSession();
  const router = useRouter();

  if (isLoading) return <p>Loading...</p>;

  if (!data?.user) {
    router.push("/auth/signin");
    return null;
  }
  const logout = async () =>{
    await signOut({
  fetchOptions: {
    onSuccess: () => {
      router.push("/");
    },
  },
});
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {data.user.name}</p>
      <p>Email: {data.user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
