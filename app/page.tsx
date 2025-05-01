import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main>
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-extrabold">Hello World</h1>
          {user ? (
            <p>Signed in as {user.email}</p>
          ) : (
            <Link href="/signin" className="btn btn-primary">
              Sign in
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
