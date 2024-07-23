"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CircleCross, DownloadPhone, LogoAndroid, LogoApple } from "./Icons";

export function DownloadAppButton() {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isIosOpen, setIsIosOpen] = useState(false);
  const [isAndroidOpen, setIsAndroidOpen] = useState(false);

  useEffect(() => {
    if (isDownloadOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDownloadOpen]);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsDownloadOpen(false);
    }
  };

  return (
    <div ref={modalRef}>
      <div
        onClick={() => {
          if (!isDownloadOpen) {
            setIsIosOpen(false);
            setIsAndroidOpen(false);
          }
          setIsDownloadOpen((prev) => !prev);
        }}
        className="px-3 py-2 flex gap-1 items-center fixed bottom-4 right-4 rounded-lg bg-primary-lighter-blue border border-primary-black hover:cursor-pointer hover:bg-primary-black group transition-colors"
      >
        <div className="w-6 h-6 group-hover:text-primary-white transition-colors">
          <DownloadPhone />
        </div>
        <p className="text-sm text-primary-black font-bold group-hover:text-primary-white transition-colors">Download App</p>
      </div>
      <div
        className={`px-3 py-3 fixed bottom-16 right-4 rounded-2xl bg-primary-lighter-blue border border-primary-black transition-all ${isDownloadOpen ? "block animate-fade-in" : "hidden animate-fade-out"}`}
      >
        <div className="mb-2 flex gap-5 justify-between">
          <p className="text-sm font-bold">Download MediSearch App</p>
          <CircleCross
            className="text-primary-grey cursor-pointer"
            onClick={() => {
              setIsDownloadOpen(false);
            }}
          />
        </div>
        <div>
          {isIosOpen || isAndroidOpen ? (
            ""
          ) : (
            <div
              onClick={() => setIsIosOpen(true)}
              className="px-3 py-2 mb-2 flex gap-1 items-center justify-center rounded-full bg-primary-lighter-blue border border-primary-black cursor-pointer hover:bg-primary-black group transition-colors"
            >
              <div className="w-6 h-6 group-hover:text-primary-white transition-colors">
                <LogoApple />
              </div>
              <p className="text-sm text-primary-black font-bold group-hover:text-primary-white transition-colors">iOS App</p>
            </div>
          )}
          {isIosOpen || isAndroidOpen ? (
            ""
          ) : (
            <div
              onClick={() => setIsAndroidOpen(true)}
              className="w-60 px-3 py-2 flex gap-1 items-center justify-center rounded-full bg-primary-lighter-blue border border-primary-black cursor-pointer hover:bg-primary-black group transition-colors"
            >
              <div className="w-6 h-6 group-hover:text-primary-white transition-colors">
                <LogoAndroid />
              </div>
              <p className="text-sm text-primary-black font-bold group-hover:text-primary-white transition-colors">Android App</p>
            </div>
          )}

          {isIosOpen ? (
            <div className={`w-60 text-sm flex flex-col items-center ${isIosOpen ? "block animate-appear-in" : "hidden animate-appear-out"}`}>
              <p className="my-2">Scan the QR code with your phone to download the app</p>
              <Image src="https://medisearch.io/_next/static/media/qr_app_store.6deed4c6.svg" alt="QR" height={200} width={200} />
            </div>
          ) : isAndroidOpen ? (
            <div className={`w-60 text-sm flex flex-col items-center ${isAndroidOpen ? "block animate-appear-in" : "hidden animate-appear-out"}`}>
              <p className="my-2">Scan the QR code with your phone to download the app</p>
              <Image src="https://medisearch.io/_next/static/media/qr_google_store.78c532f0.svg" alt="QR" height={200} width={200} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
