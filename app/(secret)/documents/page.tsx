"use client";

import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { api } from "@/convex/_generated/api";
import useSubscription from "@/hooks/use-subscription";
import { useUser } from "@clerk/clerk-react";
import { useMutation, useQuery } from "convex/react";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const DocumentPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const createDocument = useMutation(api.document.createDocument);

  const documents = useQuery(api.document.getAllDocuments);
  const {  plan } = useSubscription(
    user?.emailAddresses[0]?.emailAddress!
  );

  const onCreateDocument = () => {
    if (documents?.length && documents.length >= 3 && plan === "Free") {
      toast.error("You can only create 3 documents in the free plan");
      return;
    }

    const promise = createDocument({
      title: "Untitled",
    }).then((docId) => router.push(`/documents/${docId}`));

    toast.promise(promise, {
      loading: "Createing a new blank...",
      success: "Created a new blank!",
      error: "Failed to create a new blank",
    });
  };

  return (
    <div className="h-screen w-full flex justify-center items-center space-y-4 flex-col bg-white dark:bg-[#212121] bg-[radial-gradient(#a1a1aa_1px,transparent_1px)] dark:bg-[radial-gradient(#52525b_1px,transparent_1px)] [background-size:16px_16px]">
      <h2 className="text-lg font-bold">
        Welcome to {user?.firstName}`s document page!
      </h2>
      <Button onClick={onCreateDocument}>   
            <Plus className="h-4 w-4 mr-2" />
            Create a blank
      </Button>
    </div>
  );
};

export default DocumentPage;
