import Link from "next/link";
import CustomerPortalButton from "./CustomerPortalButton";

export default function Navigation() {
  return (
    <div className="container mx-auto px-8 py-4">
      <div className="flex items-center justify-between">
        <Link href="/">
          <span className="text-lg font-extrabold">Instant</span>
        </Link>
        <CustomerPortalButton />
      </div>
    </div>
  );
}
