import Image from 'next/image';

export default function Navbar() {
  return (
    <>
      <div className="bg-white py-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-x-5">
          <Image src="/logo.svg" width="32" height="32" alt="HueHub" />
          <span className="text-lg font-medium text-gray-900">HueHub</span>
        </div>
      </div>
    </>
  );
}
