import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import gif from "../public/dropbox-devices.gif";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-row ">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 h-1/2 w-1/2  ">
          <h1 className="text-5xl font-bold text-center text-white">
            Welcome to Dropbox. <br />
            <br />
            Storing everything for you and your business needs. All in one place.
          </h1>
          <p className="text-center mt-4 text-white">
            Stop file fatigue and dive into the Dropbox oasis. 
            Ditch endless folders and scattered clutter.
          </p>
          <div className="flex justify-between">
            <Link href="/dashboard" className="flex mt-5 ml-3 w-fit h-fit bg-blue-500 p-5 rounded-[10px]">
              Try it for free
              <ArrowRight />
            </Link>
          </div>
        </div>
        
        <div className="w-1/2 flex justify-center items-center bg-gray-800">
          <Image src={gif} alt="gif" height={400} className=" rounded-[10px]" />
        </div>
      </div>

      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        This video is made for informational and educational purposes only. We
        do not own or affiliate with Dropbox or/and any of its
        subsidiaries in any form. Copyright Disclaimer under section 107 of the
        Copyright Act 1976, allowance is made for "fair use" of this video for
        education purposes.
      </p>
    </main>
  );
}
