"use client";

import React, { useState } from "react";

import HeaderNav from "@/components/HeaderNav";

import Image from "next/image";
import IconBtn from "@/components/Button/IconBtn";
import Input from "@/components/Form/Input";
import HeaderSection from "@/components/HeaderSection";

import BurnBack from "@/assets/image/burn-back.png";
import Floki from "@/assets/icons/floki.svg";
import BurnImage from "@/assets/image/burn-image.png";
import ExportedImage from "next-image-export-optimizer";

const Burn = () => {
  const [active, setActive] = useState(1);
  const [page, setPage] = useState(1);

  const burnList = [
    {
      grade: "Diamond",
      amount: "$100",
      slot: 1,
      maxSlot: 20,
    },
    {
      grade: "Gold",
      amount: "$50",
      slot: 1,
      maxSlot: 40,
    },
    {
      grade: "Silver",
      amount: "$25",
      slot: 1,
      maxSlot: 70,
    },
    {
      grade: "Bronze",
      amount: "$10",
      slot: 1,
      maxSlot: 100,
    },
  ];
  return (
    <div className="relative min-h-[1340px] max-sm:min-h-[1000px]">
      <HeaderSection />
      <div className="flex flex-row justify-center">
        <div className="mt-[105px] max-sm:mt-[30px] w-[760px] max-sm:w-[100%] bg-[#1B1B1B] border border-[#2C2C2C] rounded-[16px]">
          <ExportedImage src={BurnBack} alt="Image" />
          <div className="pt-[40px] px-5 pb-7">
            <p className="text-center text-white text-[42px] font-bold max-sm:text-2xl">
              Burn Floki and earn <br /> Whitelist
            </p>

            {page === 1 ? (
              <table class="w-[100%] border-collapse max-sm:mt-[10px]">
                <thead>
                  <tr className="text-[#86888C] text-[14px] max-sm:text-[12px] border-b border-[#2C2C2C] h-[49px]">
                    <td className="pl-5 max-sm:pl-1 border-none">Grade</td>
                    <td className="pl-5 max-sm:pl-1 border-none">
                      Burn Floki Amount
                    </td>
                    <td className="pl-5 max-sm:pl-1 border-none">
                      Whitelist Slot
                    </td>
                    <td className="pl-5 max-sm:pl-1 border-none">
                      Max Number Of Slots
                    </td>
                  </tr>
                </thead>
                <tbody className="text-white text-[14px]">
                  {burnList.map((item, key) =>
                    active === key ? (
                      <tr
                        className="bg-[#C03F4A] h-[49px] cursor-pointer border-none text-[#16171B]"
                        key={key}
                        onClick={() => setActive(key)}
                      >
                        <td className="pl-5 max-sm:pl-1">{item.grade}</td>
                        <td className="pl-5 max-sm:pl-1">{item.amount}</td>
                        <td className="pl-5 max-sm:pl-1">{item.slot}</td>
                        <td className="pl-5 max-sm:pl-1">{item.maxSlot}</td>
                      </tr>
                    ) : (
                      <tr
                        className="h-[49px] cursor-pointer"
                        key={key}
                        onClick={() => setActive(key)}
                      >
                        <td className="pl-5 max-sm:pl-1 border-b border-[#2C2C2C]">
                          {item.grade}
                        </td>
                        <td className="pl-5 max-sm:pl-1 border-b border-[#2C2C2C]">
                          {item.amount}
                        </td>
                        <td className="pl-5 max-sm:pl-1 border-b border-[#2C2C2C]">
                          {item.slot}
                        </td>
                        <td className="pl-5 max-sm:pl-1 border-b border-[#2C2C2C]">
                          {item.maxSlot}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            ) : (
              <div className="flex flex-col mt-[52px]">
                <Input placeholder="Enter a Floki amount" />
              </div>
            )}

            <div className="flex flex-col mt-16">
              <IconBtn
                text={page === 1 ? "Burn Floki" : "Validate Burn"}
                BgClass="bg-[#C03F4A]"
                rounded="rounded-[8px]"
                TxClass="text-[#16171B]"
                icon={Floki}
                py="py-[16px]"
                heigh="h-[60px]"
                onClick={() => setPage(page + 1)}
              />
            </div>
          </div>
        </div>
      </div>
      <ExportedImage
        src={BurnImage}
        alt="image"
        className="absolute -bottom-16 -right-10 max-sm:hidden"
      />
    </div>
  );
};

export default Burn;
