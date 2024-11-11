import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-start pl-16 h-screen bg-[#0e440e] text-white">
        <div className="flex flex-col gap-6 mb-12 mt-28">
          <h1 className="text-6xl text-[#c6ff29] font-extrabold">
            Everything you are. In <br /> one, simple link in bio.
          </h1>
          <p className="text-lg font-semibold text-[#c6ff29]">
            Join 50M+ people using Linktree for their link bio. One link to help
            you share <br /> everytjing you create, curate and sell from your
            Instagram, TikTokm Twitter, <br /> youTube and other social media
            profiles.
          </p>
        </div>
        <div className="flex gap-4 font-semibold">
          <input
            type="text"
            placeholder="linkt.ee/yourname"
            className="p-4 rounded-lg w-[40svh] text-black"
          />
          <button className="rounded-full px-8 py-5 text-black bg-[#fcbefc]">
            Claim your Linktree
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-end pr-16 h-screen bg-[#e495e4] text-white">
        <div className="flex flex-col gap-6 mb-12 mt-28 ">
          <h1 className="text-6xl text-[#471c79] font-extrabold">
            Create and customize <br /> your Linktree in <br /> minutes
          </h1>
          <p className="text-lg font-semibold text-[#471c79]">
            Connect your TikTok, Instagram, Twitter, Website, store, videos,
            music, podcast, <br /> events and more. It all comes together in a
            link in bio landing page designed to <br /> convert.
          </p>
        </div>
        <div className="flex mr-[70vh]  font-semibold">
          <button className="rounded-full px-8 py-5 text-black bg-[#471c79] text-white">
            Claim your Linktree
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-start pl-16 h-screen bg-[#8b1b1b] text-white">
        <div className="flex flex-col gap-6 mb-12 mt-28 ">
          <h1 className="text-6xl text-[#ecb1e9] font-extrabold">
            Share your Linktree <br /> from your Instagram, <br /> TikTok,
            Twitter and <br /> other bios
          </h1>
          <p className="text-lg font-semibold text-[#ecb1e9]">
            Add your unique Linktree URL to all the platforms and places you
            find your <br /> audience. Then use your QR code to drive your
            offline traffic online.
          </p>
        </div>
        <div className="flex font-semibold">
          <button className="rounded-full px-8 py-5 text-black bg-[#ecb1e9]">
            Claim your Linktree
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-end pr-16 h-screen bg-[#e9e9e9] text-white">
        <div className="flex flex-col gap-6 mb-12 mt-28 ">
          <h1 className="text-6xl text-[#000000] font-extrabold">
            Analyze your audience <br /> and keep your <br /> followers engaged
          </h1>
          <p className="text-lg font-semibold text-[#000000]">
            Track your engagement over time, monitor revenue and learn what’s
            converting <br /> your audience. Make informed updates on the fly to
            keep them coming back.
          </p>
        </div>
        <div className="flex mr-[70vh]  font-semibold">
          <button className="rounded-full px-8 py-5 bg-[#ecb1e9] text-black">
            Claim your Linktree
          </button>
        </div>
      </div>
    </div>
  );
}
