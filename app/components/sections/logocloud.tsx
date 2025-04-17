import Image from "next/image";

export default function LogoCloud() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-center text-base/7 font-semibold text-indigo-600">
        Experience at the highest levels
      </h2>
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center justify-items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        <Image
          alt="HSBC UK logo"
          src="/images/logos/hsbc-uk.png"
          width={365}
          height={80}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        />
        <Image
          alt="Crossrail logo"
          src="/images/logos/crossrail.png"
          width={365}
          height={341}
          className="col-span-2 max-w-20 object-contain lg:col-span-1"
        />
        <Image
          alt="Lloyds Bank logo"
          src="/images/logos/lloyds.png"
          width={365}
          height={197}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        />
        <Image
          alt="Office Depot logo"
          src="/images/logos/officedepot.png"
          width={365}
          height={155}
          className="col-span-2 max-w-32 object-contain lg:col-span-1"
        />
      </div>
    </div>
  );
}
