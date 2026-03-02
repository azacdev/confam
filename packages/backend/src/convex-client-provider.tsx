"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

export function ConvexClientProvider({
  children,
  url,
}: {
  children: ReactNode;
  url: string;
}) {
  const convex = new ConvexReactClient(url);

  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
