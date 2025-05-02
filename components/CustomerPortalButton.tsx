"use client";

import { useClientUser } from "@/hooks/useClientUser";

const customerPortalUrl = "";

export default function CustomerPortalButton() {
  const { user } = useClientUser();

  return (
    <a
      className="btn"
      href={`${customerPortalUrl}?prefilled_email=${user?.email}`}
    >
      Billing
    </a>
  );
}
