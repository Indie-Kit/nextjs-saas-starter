import Link from "next/link";
import { appConfig } from "@/lib/config";

const FooterSection = () => {
  return (
    <section className="mx-auto w-full p-4 flex flex-col items-center">
      <div className="rounded-full border bg-background/95 px-6 py-4 shadow-lg backdrop-blur-xs supports-backdrop-filter:bg-background/60 max-w-(--breakpoint-xl) w-full">
        <div className="flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <Link href="/" className="font-semibold">
                {appConfig.projectName}
              </Link>
              <span className="text-muted-foreground">
                © {new Date().getFullYear()}
              </span>
            </div>
          </div>

          <nav className="flex items-center gap-6 text-muted-foreground">
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
            <Link href="/privacy" className="hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
