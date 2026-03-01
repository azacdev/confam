import { Notch } from "@/components/landing-page/notch";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-dvh">
      <Notch />

      <div className="relative min-h-dvh m-1.5 pt-14 rounded-3xl overflow-hidden">
        {children}
      </div>
    </div>
  );
}
