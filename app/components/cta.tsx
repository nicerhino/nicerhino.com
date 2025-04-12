export default function Cta() {
  return (
    <section id="cta" className="mx-auto max-w-2xl text-center">
      <h2 className="text-base/7 font-semibold text-indigo-600">Connect with us</h2>
      <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl lg:text-balance">
        Drive the change your organisation needs.
        <br />
        <span className="text-barbie">Let&apos;s talk.</span>
      </p>
      <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-400">
        Our initial consultation is cost and obligation free. If you don&apos;t like what you hear,
        walk away at any time.
      </p>
      <div className="mt-8 flex justify-center">
        <a
          href="/connect"
          className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          Connect with us
        </a>
      </div>
    </section>
  );
}
