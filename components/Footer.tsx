import { useRouter } from "next/router";
import Link from "next/link";
import { useState, ReactNode, ReactElement } from "react";
import cn from "classnames";
import { ThemeSwitch } from "nextra-theme-docs";

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const classes =
    "text-sm text-[#666666] dark:text-[#888888] no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition";
  if (href.startsWith("http")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

function FooterHeader({ children }: { children: ReactNode }) {
  return <h3 className="text-sm text-black dark:text-white">{children}</h3>;
}

const navigation = {
  general: [
    { name: "Blog", href: "/blog" },
    { name: "Releases", href: "https://github.com/vercel/turbo/releases" },
  ],
  repo: [
    { name: "Documentation", href: "/repo/docs" },
    {
      name: "API Reference",
      href: "/repo/docs/reference/command-line-reference",
    },
    { name: "FAQ", href: "/repo/docs/faq" },
  ],
  pack: [
    { name: "Documentation", href: "/pack/docs" },
    { name: "Features", href: "/pack/docs/features" },
  ],
  support: [
    {
      name: "GitHub",
      href: "https://github.com/vercel/turbo",
    },
    {
      name: "Discord",
      href: "https://turbo.build/discord",
    },
  ],
  company: () => [
    { name: "Vercel", href: "https://vercel.com" },
    {
      name: "Open Source Software",
      href: "https://vercel.com/oss?utm_source=turbo.build&utm_medium=referral&utm_campaign=footer-ossLink",
    },
    { name: "Twitter", href: "https://twitter.com/vercel" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function FooterContent() {
  return (
    <div className="w-full" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="w-full mx-auto">
        {/* <div className="flex justify-end">
          <div className="mt-12 md:!mt-0">
            <FooterHeader>联系方式</FooterHeader>
            <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
              <li>
                <FooterLink href={"https://github.com"}>Github</FooterLink>
              </li>
              <li>
                <FooterLink href={"https://twitter.com/hexuntao1"}>
                  Twitter
                </FooterLink>
              </li>
              <li>
                <FooterLink href={"https://linkedin.com/in/hexuntao"}>
                  Linkedin
                </FooterLink>
              </li>
            </ul>
          </div>
        </div> */}

        <div className="flex items-center justify-center ">
          <div>
            <p className="mt-4 text-xs text-gray-500 dark:text-[#888888]">
              &copy; {new Date().getFullYear()} · Hexuntao
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Footer({ menu }: { menu?: boolean }): ReactElement {
  return (
    <footer className="bg-[#FAFAFA] pb-[env(safe-area-inset-bottom)] relative dark:bg-[#111111]">
      <div className="absolute top-0 h-12 w-full -translate-y-full bg-gradient-to-t from-[#FAFAFA] to-transparent dark:from-black pointer-events-none" />
      <div
        className={cn(
          "mx-auto max-w-[90rem] py-2 px-4 flex gap-2",
          menu ? "flex" : "hidden"
        )}
      >
        <ThemeSwitch />
      </div>
      <hr className="dark:border-neutral-800" />
      <div
        className={cn(
          "mx-auto max-w-[90rem] py-12 flex justify-center md:justify-center text-black dark:text-white",
          "pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]"
        )}
      >
        <FooterContent />
      </div>
    </footer>
  );
}
