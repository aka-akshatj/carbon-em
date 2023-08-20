import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const nav = [
    {
      name: "REGISTER",
      href: "/register",
    },
    {
      name: "CLAIM",
      href: "/claim",
    },
    {
      name: "AUDIT",
      href: "/audit",
    },
    {
      name: "MY GREEN NFTS",
      href: "/my-green-nfts",
    },
    {
      name: "MARKETPLACE",
      href: "/marketplace",
    },
  ];
  return (
    <div className="w-full bg-gray-700 py-4">
      <div className="flex justify-evenly max-w-[75vw] mx-auto text-white ">
        {nav.map((data) => {
          return (
            <div
              onClick={() => {
                navigate(data.href);
              }}
            >
              {data.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
