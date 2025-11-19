"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function TeacherLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Sidebar */}
      <aside
        className={`fixed md:static z-40 bg-muted border-r transition-all duration-300 ${
          open ? "w-64" : "w-0 md:w-64"
        } overflow-hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Teacher Panel</h2>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="flex flex-col p-4 space-y-2">
          <Link href="/dashboard/teacher" className="hover:text-primary">
            Dashboard
          </Link>
          <Link href="/dashboard/teacher/sessions" className="hover:text-primary">
            Sessions
          </Link>
          <Link href="/dashboard/teacher/students" className="hover:text-primary">
            Students
          </Link>
          <Button variant="ghost" className="text-red-500 mt-4 flex items-center space-x-2">
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-4 border-b bg-card shadow-sm">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-semibold">Welcome, Teacher 👋</h1>
        </header>

        <main className="p-6">
          <Card className="animate-fadeInUp">
            <CardHeader>
              <CardTitle>Dashboard Overview</CardTitle>
            </CardHeader>
            <CardContent>{children}</CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
