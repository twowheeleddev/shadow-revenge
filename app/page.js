"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/intro"); // Redirect to the intro scene
  }, [router]);

  return null; // No content as it redirects immediately
}
