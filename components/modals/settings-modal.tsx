"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSettings } from "@/hooks/use-settings";
import { ModeToggle } from "../shared/mode-toggle";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Settings } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useUser } from "@clerk/clerk-react";
import { Loader } from "../ui/loader";

const SettingsModal = () => {
  const settings = useSettings();
  const { user } = useUser();


  const { isOpen, onClose, onToggle } = settings;

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onToggle();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [onToggle]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">My settings</h2>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>Appearance</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Customize how noteman looks on your device
            </span>
          </div>
          <ModeToggle />
        </div>
        
      </DialogContent>
    </Dialog>
  );
};

export default SettingsModal;
