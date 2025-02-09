"use client";

import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Heroes = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <>
      <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          Make learning an experience with NoteMan
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl font-medium">
          Noteman is a productive note taking app that helps you collaborate and ideate with complete freedom of customization.
        </h3>
        {isLoading && (
          <div className="w-full flex justify-center items-center">
            <Loader />
          </div>
        )}

        {isAuthenticated && !isLoading && (
          <Button asChild>
            <Link href={"/documents"}>
              Enter noteman <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        )}

        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button>
                Get noteman Free <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </SignInButton>
          </>
        )}
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center">
          <div className="relative h-[400px] w-auto hidden md:flex md:gap-4">
            <Image
              src={"/not1.svg"}
              alt="Logo"
              width={300}
              height={300}
              
            />
            <Image
              src={"/not2.svg"}
              alt="Logo"
              width={300}
              height={300}
              
            />
            <Image
              src={"/not3.svg"}
              alt="Logo"
              width={300}
              height={300}
              
            />
          </div>
        </div>
      </div>
    </>
  );
};
