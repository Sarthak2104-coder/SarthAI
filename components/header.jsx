import React from "react";
import { Button } from "./ui/button";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  StarsIcon,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";

export default async function Header() {
  await checkUser();

  return (
    <header className="fixed top-0 left-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo on the left */}
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="SarthAI Logo"
            width={450}
            height={150}
            className="h-32 w-auto object-contain"
          />
        </Link>

        {/* Navigation buttons and user profile on the right */}
        <div className="flex items-center gap-3">
          <Link href="/dashboard">
            <Button
              variant="outline"
              className="bg-white hover:bg-black hover:text-white border-gray-300 text-black rounded-lg px-4 py-2 flex items-center gap-2 transition-colors"
            >
              <BarChart3 className="w-4 h-4" />
              Dashboard
            </Button>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-white hover:bg-black hover:text-white border-gray-300 text-black rounded-lg px-4 py-2 flex items-center gap-2 transition-colors"
              >
                <TrendingUp className="w-4 h-4" />
                Growth Tools
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-gray-800 border-gray-700">
              <DropdownMenuItem asChild>
                <Link href="/resume" className="text-white hover:bg-gray-700 flex items-center gap-2 px-3 py-2">
                  <FileText className="w-4 h-4" />
                  Resume Builder
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/ai-cover-letter" className="text-white hover:bg-gray-700 flex items-center gap-2 px-3 py-2">
                  <PenBox className="w-4 h-4" />
                  Cover Letter Generator
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/interview" className="text-white hover:bg-gray-700 flex items-center gap-2 px-3 py-2">
                  <GraduationCap className="w-4 h-4" />
                  Interview Prep
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Sign In button or User profile */}
          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
