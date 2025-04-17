"use client";

import { Button } from "@/components/ui/button";
import { db } from "@/utils/DB";
import { AIOutput } from "@/utils/schema";

import { useEffect, useState } from "react";
import { desc, eq } from "drizzle-orm";
import { TEMPLATE } from "../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { useAuth, useUser } from "@clerk/nextjs"; // Use useAuth() for client-side auth

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

function HistoryPage() {
  const { user } = useUser();

  // const { userId } = useAuth(); // Fetch user ID from Clerk (client-side)
  const [historyList, setHistoryList] = useState<HISTORY[]>();
 
  const [copiedId, setCopiedId] = useState<number | null>(null); // Track copied item ID

  const copyToClipboard = async (text: string, id: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id); // Set copied ID to track which row was copied

      // Reset the copied state after 2 seconds
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };


  const fetchHistory = async () => {
    if (!user) {
      console.log("No user ID found, skipping fetch.");
      return;
    }

    console.log("Fetching history for user:", user);

    try {
      {/* @ts-ignore */}
      const data: HISTORY[] = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput?.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(AIOutput?.id));

      console.log("Fetched history:", data);
      setHistoryList(data);
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  };

  useEffect(() => {
    user && fetchHistory();
  }, [user]);

  const GetTemplateName = (slug: string) => {
    const template: TEMPLATE | undefined = Templates?.find(
      (item) => item.slug === slug
    );
    return template ? template?.name : "Unknown";
  };



  return (
    <div className="p-6 max-w-full mx-auto">
      <h1 className="text-2xl font-bold mb-4">History</h1>
      <p>Search your previously generated AI Content</p>
      <div className="overflow-x-auto mt-4">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">TEMPLATE</th>
              <th className="border border-gray-300 px-4 py-2">AIRESP</th>
              <th className="border border-gray-300 px-4 py-2">DATE</th>

              <th className="border border-gray-300 px-4 py-2">WORDS</th>
              <th className="border border-gray-300 px-4 py-2">COPY</th>
            </tr>
          </thead>
          <tbody>
            {historyList?.map((item, index) => (
              <tr key={index} className="text-center border border-gray-300">
                <td className="border border-gray-300 px-4 py-2">
                  {GetTemplateName(item?.templateSlug)}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item?.aiResponse}
                </td>
                
                <td className="border border-gray-300 px-4 py-2">
                  {item?.createdAt}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {
                    item?.aiResponse
                      ?.split(/\s+/)
                      ?.filter((word) => word.length > 0)?.length
                  }
                </td>

                <td className="border border-gray-300 px-4 py-2">
                 
                <Button
                variant="ghost"
                className={`text-blue-600 ${copiedId === item.id ? "text-green-600 font-bold" : ""}`}
                onClick={() => copyToClipboard(item.aiResponse, item.id)}
              >
                {copiedId === item.id ? "Copied!" : "Copy"}
              </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HistoryPage;
