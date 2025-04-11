"use client";

import Image from "next/image";
import nicerhino from "../../nicerhino.json";

const navigation = {
  solutions: [
    { name: "Advisory", href: "/advisory" },
    { name: "Turnaround", href: "/turnaround" },
    { name: "Deep Tech", href: "/deep-tech" },
  ],
  connect: [{ name: "Connect", href: "/connect" }],
  company: [{ name: "Company", href: "/" }],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/nicerhino",
      icon: (props: Record<string, string>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/nicerhino",
      icon: (props: Record<string, string>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM8.078,18.737H5.085v-9H8.078ZM6.582,8.5h-.02A1.56,1.56,0,1,1,6.6,5.393,1.56,1.56,0,1,1,6.582,8.5ZM18.87,18.737H15.877V13.921c0-1.211-.433-2.036-1.516-2.036a1.637,1.637,0,0,0-1.535,1.094,2.032,2.032,0,0,0-.1.731v5.027H9.734s.04-8.16,0-9h2.992V11.01a2.97,2.97,0,0,1,2.7-1.488c1.969,0,3.446,1.287,3.446,4.053Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="mt-32 mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32 border-t border-white/10">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              alt="Nice Rhino"
              src="/images/icon.png"
              className="h-9 w-auto"
              width={47}
              height={32}
            />
            <p className="text-sm/6 text-balance text-slate-300">
              Your most reliable ally. With you through every challenge. Guiding you to prosperity.
            </p>
            <div className="flex gap-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-slate-400 hover:text-slate-200">
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6 text-slate-400">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-white">Connect</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.connect.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6 text-slate-400">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6 text-slate-400">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm/6 text-slate-400">
            &copy; {currentYear} Nice Rhino Pty Ltd • ABN: {nicerhino.abn} • ACN: {nicerhino.acn}
          </p>
        </div>
      </div>
    </footer>
  );
}
