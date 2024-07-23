"use client";

import { useState } from "react";
import Image from "next/image";

export default function FeatureSet(): JSX.Element {
  const [feature, setFeature] = useState<number>(1);
  const [typing, setTyping] = useState<number>(1);

  const handleFeatureSelect = (selection: number) => {
    setFeature(selection);
    setTyping(selection);
  };

  return (
    <div className="w-[50%] h-96 flex hidden-css">
      <div className="w-[35%] flex flex-col border-2 border-r-0 z-0">
        <div className={`h-1/3 border-b-2 ${feature !== 1 && "opacity-70"} transition-all cursor-pointer`} onClick={() => handleFeatureSelect(1)}>
          <div
            className={`absolute h-[1px] w-[35%] bg-primary-white transition-all ${feature === 1 && "animate-load"}`}
            style={{ animation: feature === 1 ? "load 18s linear forwards" : "none" }}
            onAnimationEnd={() => handleFeatureSelect(2)}
          ></div>
          <div className="h-[1px] bg-blue-500"></div>
          <div className="h-full px-6 py-9">
            <h3 className="font-medium">Health insights</h3>
            <p className="text-xs">Give additional health tips based on user data.</p>
          </div>
        </div>
        <div className={`h-1/3 border-b-2 ${feature !== 2 && "opacity-70"} transition-all cursor-pointer`} onClick={() => handleFeatureSelect(2)}>
          <div
            className={`absolute h-[1px] w-[35%] bg-primary-white transition-all ${feature === 2 && "animate-load"}`}
            style={{ animation: feature === 2 ? "load 12s linear forwards" : "none" }}
            onAnimationEnd={() => handleFeatureSelect(3)}
          ></div>
          <div className={`h-[1px] bg-blue-500`}></div>
          <div className="h-full px-6 py-9">
            <h3 className="font-medium">EHR summarization</h3>
            <p className="text-xs">Manipulate EHR data in novel ways.</p>
          </div>
        </div>
        <div className={`h-1/3 ${feature !== 3 && "opacity-70"} transition-all cursor-pointer`} onClick={() => handleFeatureSelect(3)}>
          <div
            className={`absolute h-[1px] w-[35%] bg-primary-white transition-all ${feature === 3 && "animate-load"}`}
            style={{ animation: feature === 3 ? "load 9s linear forwards" : "none" }}
            onAnimationEnd={() => handleFeatureSelect(1)}
          ></div>
          <div className="h-[1px] bg-blue-500"></div>
          <div className="h-full px-6 py-9">
            <h3 className="font-medium">Support bots</h3>
            <p className="text-xs">Supercharge your medical support bots.</p>
          </div>
        </div>
      </div>

      {feature === 1 && (
        <div className="w-[65%] z-10 flex flex-col gap-8 bg-blue-200">
          <video
            className="h-96 object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/medisearch-424113.appspot.com/o/XKI_6S7_opr26eam.mp4?alt=media&token=e2abc5e6-b974-4753-99cc-6e2b5b650373"
            autoPlay
            muted
            playsInline
            loop
          ></video>
        </div>
      )}
      {feature === 2 && (
        <div className="w-[65%] z-10 flex flex-col gap-8 bg-blue-200">
          <video
            className="h-96 w-full object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/medisearch-424113.appspot.com/o/pU9LTTr5Kj3-kb3D.mp4?alt=media&token=5e6e0cb4-4a56-4507-aade-009eeff59474"
            autoPlay
            muted
            playsInline
            loop
          ></video>
        </div>
      )}
      {feature === 3 && (
        <div className="w-[65%] z-10 flex flex-col gap-8 bg-blue-200">
          <video
            className="h-96 object-contain"
            src="https://firebasestorage.googleapis.com/v0/b/medisearch-424113.appspot.com/o/GEIwvxjaoAAutZX.mp4?alt=media&token=a715a78a-8ff7-4a8e-af46-2bb0a624ef44"
            autoPlay
            muted
            playsInline
            loop
          ></video>
        </div>
      )}

      {/* {feature === 1 && (
        <div className="w-[65%] py-12 px-6 z-10 flex flex-col gap-8 bg-blue-200">
          <div className="flex gap-4">
            <Image
              className={`w-14 h-14 rounded-full ${feature === 1 && "animate-fade-in"}`}
              src="https://medisearch.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser-avatar.4288b2e6.png&w=64&q=75"
              alt="image"
              width={50}
              height={50}
            />
            <div className={`p-4 rounded-lg bg-secondary-light-blue ${feature === 1 && "animate-appear"}`}>
              <p>Can you please interpret my blood tests?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-4">
            <Image
              className={`w-14 h-14 rounded-full opacity-0 ${feature === 1 && "animate-fade-in"}`}
              style={{ animationDelay: "1s" }}
              src="https://medisearch.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbot-logo.e6243d23.png&w=64&q=75"
              alt="image"
              width={50}
              height={50}
            />
            <div className={`w-[70%] p-4 rounded-lg bg-primary-blue text-primary-white opacity-0 ${feature === 1 && "animate-appear"}`} style={{ animationDelay: "1s" }}>
              <p className={`${feature === 1 && "animate-typing"} overflow-hidden whitespace-nowrap`} style={{ animationDelay: "1s" }} onAnimationEnd={() => setTyping(2)}>
                Your vitamin D levels are below 12 ng/mL, better
              </p>
              <p className={`${typing === 2 && "animate-typing"} overflow-hidden whitespace-nowrap ${typing === 1 && "opacity-0"}`} onAnimationEnd={() => setTyping(0)}>
                get some sunlight! [1]
              </p>
            </div>
          </div>
        </div>
      )} */}
      {/* {feature === 2 && (
        <div className="w-[65%] py-12 px-6 z-10 flex flex-col gap-8 bg-blue-200">
          <div className="flex gap-4">
            <Image
              className={`w-14 h-14 rounded-full animate-fade-in`}
              src="https://medisearch.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser-avatar.4288b2e6.png&w=64&q=75"
              alt="image"
              width={50}
              height={50}
            />
            <div className={`p-4 rounded-lg bg-secondary-light-blue animate-appear`}>
              <p>Can you please interpret my blood tests?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-4">
            <Image
              className={`w-14 h-14 rounded-full opacity-0 animate-fade-in`}
              style={{ animationDelay: "1s" }}
              src="https://medisearch.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbot-logo.e6243d23.png&w=64&q=75"
              alt="image"
              width={50}
              height={50}
            />
            <div className={`w-[70%] p-4 rounded-lg bg-primary-blue text-primary-white opacity-0 animate-appear`} style={{ animationDelay: "1s" }}>
              <p className={`animate-typing overflow-hidden whitespace-nowrap`} style={{ animationDelay: "1s" }} onAnimationEnd={() => setTyping(3)}>
                Your vitamin D levels are below 12 ng/mL, better
              </p>
              <p className={`${typing === 3 && "animate-typing"} overflow-hidden whitespace-nowrap ${typing === 2 && "opacity-0"}`} onAnimationEnd={() => setTyping(0)}>
                get some sunlight! [1]
              </p>
            </div>
          </div>
        </div>
      )}
      {feature === 3 && (
        <div className="w-[65%] py-12 px-6 z-10 flex flex-col gap-8 bg-blue-200">
          <div className="flex gap-4">
            <Image
              className={`w-14 h-14 rounded-full animate-fade-in`}
              src="https://medisearch.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser-avatar.4288b2e6.png&w=64&q=75"
              alt="image"
              width={50}
              height={50}
            />
            <div className={`p-4 rounded-lg bg-secondary-light-blue animate-appear`}>
              <p>Can you please interpret my blood tests?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-4">
            <Image
              className={`w-14 h-14 rounded-full opacity-0 animate-fade-in`}
              style={{ animationDelay: "1s" }}
              src="https://medisearch.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbot-logo.e6243d23.png&w=64&q=75"
              alt="image"
              width={50}
              height={50}
            />
            <div className={`w-[70%] p-4 rounded-lg bg-primary-blue text-primary-white opacity-0 animate-appear`} style={{ animationDelay: "1s" }}>
              <p className={`animate-typing overflow-hidden whitespace-nowrap`} style={{ animationDelay: "1s" }} onAnimationEnd={() => setTyping(4)}>
                Your vitamin D levels are below 12 ng/mL, better
              </p>
              <p className={`${typing === 4 && "animate-typing"} overflow-hidden whitespace-nowrap ${typing === 3 && "opacity-0"}`} onAnimationEnd={() => setTyping(0)}>
                get some sunlight! [1]
              </p>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
