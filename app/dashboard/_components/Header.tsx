"use client";

import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import {
  BookDashedIcon,
  History,
  Moon,
  Search,
  Settings,
  Sun,
  Menu,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Header({ userSearchInputH }: any) {
  const [templateList, setTemplateList] = useState(Templates);
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <>
      <div className="p-5 shadow-sm border-b-2 flex justify-between items-center bg-white dark:bg-gray-900 relative z-50">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo.svg" width={120} height={50} alt="logo" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/dashboard">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg dark:from-emerald-600 dark:to-green-700 dark:hover:from-emerald-700 dark:hover:to-green-800">
                Dashboard <BookDashedIcon className="ml-2" />
              </Button>
            </motion.div>
          </Link>

          <Link href="/dashboard/history">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg dark:from-emerald-600 dark:to-green-700 dark:hover:from-emerald-700 dark:hover:to-green-800">
                History <History className="ml-2" />
              </Button>
            </motion.div>
          </Link>

          <Link href="/dashboard/setting">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg dark:from-emerald-600 dark:to-green-700 dark:hover:from-emerald-700 dark:hover:to-green-800">
                Settings <Settings className="ml-2" />
              </Button>
            </motion.div>
          </Link>

          <Link href="/dashboard/pricing">
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

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-3 ">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-md border bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <UserButton />

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-2 p-2 rounded-md border bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-start gap-4 px-6 py-4 bg-white dark:bg-gray-900 shadow-md z-40">
          <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="ghost" className="w-full justify-start bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg dark:from-emerald-600 dark:to-green-700 dark:hover:from-emerald-700 dark:hover:to-green-800">
              Dashboard <BookDashedIcon className="ml-2" />
            </Button>
          </Link>

          <Link href="/dashboard/history" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="ghost" className="w-full justify-start bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg dark:from-emerald-600 dark:to-green-700 dark:hover:from-emerald-700 dark:hover:to-green-800">
              History <History className="ml-2" />
            </Button>
          </Link>

          <Link href="/dashboard/setting" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="ghost" className="w-full justify-start bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg dark:from-emerald-600 dark:to-green-700 dark:hover:from-emerald-700 dark:hover:to-green-800">
              Settings <Settings className="ml-2" />
            </Button>
          </Link>

          <Link href="/dashboard/pricing" onClick={() => setIsMobileMenuOpen(false)}>
            <h2 className="bg-emerald-600 p-1 rounded-full text-xs text-white">
              Join Membership Just for ₹99/-
            </h2>
          </Link>
        </div>
      )}
    </>
  );
}

export default Header;
