import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function useClientUser() {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await await supabase.auth.getUser();
      setUser(data.user);
    };

    fetchUser();
  }, [supabase]);

  return { user };
}
