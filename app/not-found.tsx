import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <header>
        <div className="mx-auto mt-6" style={{ width: "47px" }}>
          <Link href="/">
            <Image src="/images/icon.png" alt="Nice Rhino logo" width="47" height="32" />
          </Link>
        </div>
      </header>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl text-barbie">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <Link href="mailto:help@nicerhino.com" className="text-sm font-semibold">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
