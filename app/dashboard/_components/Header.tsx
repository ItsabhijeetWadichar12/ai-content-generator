"use client";

import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { BookDashed, BookDashedIcon, History, Moon, Search, Settings, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Header({ userSearchInputH }: any) {
  const [templateList, setTemplateList] = useState(Templates);
  const { theme, setTheme } = useTheme();

  const onSearchInput = (onSearchInput: any) => {
    if (onSearchInput) {
      const filterData = Templates.filter((item) =>
        item?.name?.toLowerCase().includes(onSearchInput.toLowerCase())
      );
      setTemplateList(filterData);
    } else {
      setTemplateList(Templates);
    }
    console.log(onSearchInput);
  };

  return (
    <div className="p-5 shadow-sm border-b-2 flex justify-between items-center bg-white dark:bg-gray-900">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg ">
        <Link href={"/"}>
          <Image src="/logo.svg" width={120} height={50} alt="logo" />
        </Link>
      </div>

      <div className="flex justify-center gap-3">
        <Link href={"/dashboard"}>
        <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Button
        variant="default"
        className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition-all duration-300 dark:from-emerald-600 dark:to-green-700 dark:hover:from-emerald-700 dark:hover:to-green-800"
      >
        Dashboard <BookDashedIcon className="flex justify-center text-sm gap-2 ml-2"/>
      </Button>
    </motion.div>
        </Link>

        <Link href={"/dashboard/history"}>
        <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Button
        variant="default"
        className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition-all duration-300 dark:from-emerald-600 dark:to-green-700 dark:hover:from-emerald-700 dark:hover:to-green-800"
      >
        History <History className="flex justify-center text-sm gap-2 ml-2"/>
      </Button>
    </motion.div>
        </Link>

        <Link href={"/dashboard/setting"}>
        <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Button
        variant="default"
        className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition-all duration-300 dark:from-emerald-600 dark:to-green-700 dark:hover:from-emerald-700 dark:hover:to-green-800"
      >
        Settings <Settings className="flex justify-center text-sm gap-2 ml-2"/>
      </Button>
    </motion.div>
        </Link>
        <Link href={"/dashboard/pricing"}>
        <h2 className="bg-emerald-600 p-1 rounded-full text-xs text-white">
          Join Membership Just for ₹99/-
        </h2>
        </Link>
        <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-md border bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>

        <UserButton />
      </div>
    </div>
  );
}

export default Header;
