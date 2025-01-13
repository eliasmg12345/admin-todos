import Link from "next/link";

export default function ExtraPage() {
  return (
    <div className="flex flex-col">
      <h1 className="mb-20">Hello EXTRA</h1>
      <Link 
      href="/dashboard/extra/crucigram"
      className="text-xl font-bold hover:text-blue-500"
      >
        Crucigram
      </Link>
      <Link 
      href="/dashboard/extra/crucigram-make"
      className="text-xl font-bold hover:text-blue-500"
      >
        Crucigram Maker
      </Link>
      <Link 
      href="/dashboard/extra/crucigram-done"
      className="text-xl font-bold hover:text-blue-500"
      >
        Crucigram Done
      </Link>
    </div>
  );
}