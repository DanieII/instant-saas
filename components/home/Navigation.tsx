"use client";

import { useClientUser } from "@/hooks/useClientUser";
import Link from "next/link";

export default function Navigation() {
  const { user } = useClientUser();

  return (
    <div className="container mx-auto px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <Link href="/">
            <span className="text-lg font-extrabold">Instant</span>
          </Link>
        </div>

        {/* Desktop */}
        <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
          <div className="flex gap-8">
            <Link className="link link-hover" href="#features">
              Features
            </Link>
            <Link className="link link-hover" href="#pricing">
              Pricing
            </Link>
            <Link className="link link-hover" href="#faq">
              FAQ
            </Link>
          </div>
        </div>
        <div className="hidden flex-1 justify-end md:flex">
          {user ? (
            <Link className="btn btn-primary" href="/">
              Dashboard
            </Link>
          ) : (
            <Link className="btn btn-primary" href="/signin">
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile */}
        <div className="flex flex-1 justify-end md:hidden">
          <details className="dropdown dropdown-end">
            <summary className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </summary>
            <ul className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm">
              <li>
                <Link href="#pricing">Pricing</Link>
              </li>
              <li>
                <Link href="#features">Features</Link>
              </li>
              <li>
                <Link href="#faq">FAQ</Link>
              </li>
              <li className="mt-2">
                {user ? (
                  <Link className="btn btn-primary" href="/">
                    Dashboard
                  </Link>
                ) : (
                  <Link href="/signin">Sign In</Link>
                )}
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
}
