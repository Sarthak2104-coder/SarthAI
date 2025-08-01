import React from "react";
import { Button } from "./ui/button";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  Home,
  User,
  Settings,
} from "lucide-react";
import Link from "next/link";

export default function NavigationButtons() {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <Link href="/">
        <Button variant="outline" className="flex items-center gap-2">
          <Home className="w-4 h-4" />
          Home
        </Button>
      </Link>
      
      <Link href="/dashboard">
        <Button variant="outline" className="flex items-center gap-2">
          <LayoutDashboard className="w-4 h-4" />
          Dashboard
        </Button>
      </Link>
      
      <Link href="/resume">
        <Button variant="outline" className="flex items-center gap-2">
          <FileText className="w-4 h-4" />
          Resume Builder
        </Button>
      </Link>
      
      <Link href="/ai-cover-letter">
        <Button variant="outline" className="flex items-center gap-2">
          <PenBox className="w-4 h-4" />
          Cover Letters
        </Button>
      </Link>
      
      <Link href="/interview">
        <Button variant="outline" className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4" />
          Interview Prep
        </Button>
      </Link>
      
      <Link href="/onboarding">
        <Button variant="outline" className="flex items-center gap-2">
          <User className="w-4 h-4" />
          Profile Setup
        </Button>
      </Link>
    </div>
  );
}

// Alternative component for card-style navigation
export function NavigationCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Link href="/dashboard">
        <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
          <LayoutDashboard className="w-8 h-8 mb-2" />
          <h3 className="font-semibold">Dashboard</h3>
          <p className="text-sm text-gray-600">View your progress and stats</p>
        </div>
      </Link>
      
      <Link href="/resume">
        <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
          <FileText className="w-8 h-8 mb-2" />
          <h3 className="font-semibold">Resume Builder</h3>
          <p className="text-sm text-gray-600">Create and edit your resume</p>
        </div>
      </Link>
      
      <Link href="/ai-cover-letter">
        <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
          <PenBox className="w-8 h-8 mb-2" />
          <h3 className="font-semibold">Cover Letters</h3>
          <p className="text-sm text-gray-600">Generate AI-powered cover letters</p>
        </div>
      </Link>
      
      <Link href="/interview">
        <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
          <GraduationCap className="w-8 h-8 mb-2" />
          <h3 className="font-semibold">Interview Prep</h3>
          <p className="text-sm text-gray-600">Practice and improve your skills</p>
        </div>
      </Link>
      
      <Link href="/onboarding">
        <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
          <User className="w-8 h-8 mb-2" />
          <h3 className="font-semibold">Profile Setup</h3>
          <p className="text-sm text-gray-600">Complete your profile</p>
        </div>
      </Link>
    </div>
  );
} 