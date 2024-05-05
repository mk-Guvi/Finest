"use client";
import AnimationBg from "../../../public/images/animation-layer.svg";
import CarSvg from "../../../public/images/car.svg";
import { Drawer, DrawerContent } from "@/components/ui/drawer";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useModal } from "./modal-provider";
import {
  ArrowLeft,
  ArrowRight,
  Fingerprint,
  Home,
  PersonStanding,
  X,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { useChangeListener } from "@/lib/utils";

const OnboardModal = () => {
  const { isOpen, setClose } = useModal();
  const handleClose = () => setClose();
  const [steps, setSteps] = useState(1);
  const [experience, setExperience] = useState(0);
  const [verficationMethod, setVerficationMethod] = useState("MONTHLY");
  const [pancardNumber, setPancardNumber] = useState("DKWPAXXXXM");
  const [changes, recordChanges] = useChangeListener(8000);
  useEffect(() => {
    if (changes) {
      setSteps(4);
    }
  }, [changes]);
  useEffect(() => {
    setSteps(1);
  }, [isOpen]);
  return (
    <Drawer open={isOpen} onClose={handleClose}>
      <DrawerContent
        className={` ${steps===3?"h-[75dvh]":"min-h-[90dvh]"} sm:hidden flex flex-col   linear-gradient-onboarding `}
      >
        <X
          onClick={setClose}
          size={40}
          className="rounded-full fixed -top-14 bg-black/50 left-1/2 transform  -translate-x-1/2 text-white shadow-md p-2 "
        />
        <div className={`relative  ${steps > 2 ? "h-[90dvh]" : "h-[50dvh]"}`}>
          <div className="text-twilight-blue absolute top-10 p-4 z-10">
            <h1 className="  font-semibold text-2xl">
              {steps === 3
                ? "Fetching your PAN Details"
                : steps === 4
                ? "Verify your details"
                : "Get started with Fabits"}
            </h1>
            <p className=" my-1.5">
              {steps === 3
                ? "Getting your PAN Details by your chosen method"
                : steps === 4
                ? "Aadhaar link found"
                : "Answer a few questions to begin onboarding"}
            </p>
          </div>

          <Image
            src={AnimationBg.src}
            alt="Image"
            width={100}
            height={100}
            className={`w-full h-full object-cover`}
          />

          <Image
            src={CarSvg.src}
            alt="Image"
            width={80}
            height={80}
            className={`rounded-md absolute  ${
              steps===4?"hidden":steps === 3 ? "slide-animation-loading bottom-[13.5dvh]" : " slide-animation bottom-[8.5dvh]"
            } `}
          />
        </div>
        {steps === 4 ? (
          <>
            <div className="absolute top-0 backdrop-blur-sm h-full w-full" />
            <div className="flex flex-col absolute  top-28  py-10  z-20 justify-start items-center w-full gap-5">
              <div className="rounded-2xl text-twilight-blue flex flex-col gap-4 w-11/12 bg-white shadow-lg p-4 px-6 ">
                <div className="flex items-center gap-4">
                  <PersonStanding
                    className="rounded-full p-2  bg-twilight-blue text-[#D7EFA3]"
                    size={52}
                  />
                  <div className="flex flex-col gap-0.5">
                    <p className="font-semibold">{pancardNumber}</p>
                    <p className="font-normal text-xs">ASHAR RAI MUJEEB</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col gap-0.5">
                    <p>Fetched Via</p>
                    <p className="font-semibold">NSDL</p>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p>Last Updated</p>
                    <p className="font-semibold">24/04/2024</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl text-twilight-blue flex flex-col gap-4 w-11/12 bg-white shadow-lg p-4 px-6 ">
                <div className="flex items-center gap-4">
                  <Fingerprint
                    className="rounded-full p-2  bg-twilight-blue text-[#D7EFA3]"
                    size={52}
                  />
                  <div className="flex flex-col gap-0.5">
                    <p className="font-semibold">{"Aadhaar"}</p>

                    <p className="font-normal text-xs">UID</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col gap-0.5">
                    <p>Fetched Via</p>
                    <p className="font-semibold">Digio</p>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p>Date of Birth</p>
                    <p className="font-semibold">18/10/1994</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl text-twilight-blue flex flex-col gap-4 w-11/12 bg-white shadow-lg p-4 px-6 ">
                <div className="flex items-center gap-4">
                  <Home
                    className="rounded-full p-2  bg-twilight-blue text-[#D7EFA3]"
                    size={52}
                  />
                  <div className="flex flex-col gap-0.5">
                    <p className="font-semibold">{"Address"}</p>
                    <p className="font-normal text-xs">
                      16/2,8 Jat Regiment, c/o 56 Apo
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col gap-0.5">
                    <p>Fetched Via</p>
                    <p className="font-semibold">Digio</p>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p>Address Type</p>
                    <p className="font-semibold">Corresspondence</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}

        <div
          className={`flex-1 ${
            steps > 2 ? "hidden" : "flex"
          }   flex-col gap-3 p-4 linear-gradient-onboarding`}
        >
          <section className=" flex flex-1  flex-col  gap-4  ">
            <div className="flex items-center gap-3 justify-between">
              <h1 className=" font-semibold text-2xl">
                {steps === 2
                  ? "How much, and how often would you like to invest?"
                  : "How much trading experience do you have?"}
              </h1>
              <Badge
                variant={"default"}
                className="w-20 flex items-center justify-center !bg-black text-white"
              >
                {steps} / 2
              </Badge>
            </div>
            {steps == 1 ? (
              <>
                <div className="flex-1 flex items-center justify-evenly py-3">
                  <Button
                    variant={
                      experience === 0
                        ? "outline-green-selected"
                        : "outline-green"
                    }
                    onClick={() => {
                      setExperience(0);
                    }}
                    className="flex flex-col gap-1"
                  >
                    <div className="font-semibold">Brief</div>
                    <p className="font-normal text-sm">{`<1Y`}</p>
                  </Button>
                  <Button
                    variant={
                      experience === 1
                        ? "outline-green-selected"
                        : "outline-green"
                    }
                    onClick={() => {
                      setExperience(1);
                    }}
                    className="flex flex-col gap-1"
                  >
                    <div className="font-semibold">Short</div>
                    <p className="font-normal text-sm">{`1Y-3Y`}</p>
                  </Button>
                  <Button
                    onClick={() => {
                      setExperience(3);
                    }}
                    variant={
                      experience === 3
                        ? "outline-green-selected"
                        : "outline-green"
                    }
                    className="flex flex-col gap-1"
                  >
                    <div className="font-semibold">Mid</div>
                    <p className="font-normal text-sm">{`3Y-5Y`}</p>
                  </Button>
                  <Button
                    variant={
                      experience === 5
                        ? "outline-green-selected"
                        : "outline-green"
                    }
                    onClick={() => {
                      setExperience(5);
                    }}
                    className="flex flex-col gap-1"
                  >
                    <div className="font-semibold">Long</div>
                    <p className="font-normal text-sm">{`>5Y`}</p>
                  </Button>
                </div>
              </>
            ) : steps === 3 ? (
              <></>
            ) : (
              <>
                <p className="text-gray-600">Verification method</p>
                <div className="w-full flex items-center">
                  <Button
                    variant={
                      verficationMethod === "ONE_TIME"
                        ? "outline-green-selected"
                        : "outline-green"
                    }
                    onClick={() => {
                      setVerficationMethod("ONE_TIME");
                    }}
                    className="flex-1 border-2 font-semibold"
                  >
                    Manual
                  </Button>
                  <Button
                    variant={
                      verficationMethod === "MONTHLY"
                        ? "outline-green-selected"
                        : "outline-green"
                    }
                    onClick={() => {
                      setVerficationMethod("MONTHLY");
                    }}
                    className="flex-1 border-2 font-semibold"
                  >
                    Automatic
                  </Button>
                </div>
                <div className="w-full flex gap-0.5 items-center">
                  <p className="text-gray-600 w-1/2">Pancard Number</p>
                  <Input
                    value={pancardNumber}
                    onChange={(e) => {
                      setPancardNumber(e.target.value);
                    }}
                    className="w-1/2 bg-[#F5F8CC] line-clamp-6 rounded-2xl text-xl pl-7 py-7 border-2"
                  />
                </div>
              </>
            )}
          </section>

          <footer className="flex w-full  items-center transition-all duration-300 gap-4 justify-evenly">
            {steps == 2 ? (
              <div
                className="text-selected-green  p-4 border-2 rounded-xl"
                onClick={() => {
                  setSteps(1);
                }}
              >
                <ArrowLeft size={24} />
              </div>
            ) : null}
            <Button
              variant={"ghost-green"}
              className="flex  justify-between !p-5 !py-7 w-full gap-2"
              onClick={() => {
                if (steps === 1) {
                  setSteps(2);
                } else if (steps === 2 && pancardNumber) {
                  setSteps(3);
                  recordChanges();
                }
              }}
            >
              <div>{steps == 1 ? "Next" : "Complete"}</div>
              <ArrowRight />
            </Button>
          </footer>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default OnboardModal;
