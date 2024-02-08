import React from "react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center border-t py-4">
      <div className="lg:max-w-[854px]">
        <p className="text-xs text-center text-slate-500">
          ©Abdur Rozaq F 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
