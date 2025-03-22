import { ArrowRight, Database, Users, FileText, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center">
          <Image 
            src="/lion-snout.png"
            alt="LIONO"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-2xl font-bold">LIONO</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/sign-in" className="text-sm font-medium hover:underline underline-offset-4">
            Sign In
          </Link>
          <Link 
            href="/sign-up" 
            className="text-sm font-medium bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md"
          >
            Get Started
          </Link>
        </nav>
      </header>

      {/* Hero section */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Your Complete Knowledge Management System
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Connect people, documents, and projects in one powerful graph-based system to unlock insights across your organization.
            </p>
            <div className="space-x-4">
              <Link
                href="/sign-up"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/sign-in"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1"
              >
                Sign In
              </Link>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Key Features
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover how LIONO can transform your knowledge management
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <Database className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Graph Database</h3>
                <p className="text-muted-foreground text-center">
                  Discover hidden connections between entities with our powerful graph visualization
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <Users className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">People & Organizations</h3>
                <p className="text-muted-foreground text-center">
                  Manage relationships between people, companies, and projects
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <FileText className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Document Management</h3>
                <p className="text-muted-foreground text-center">
                  Store, categorize and link documents to other entities
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <Search className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Advanced Search</h3>
                <p className="text-muted-foreground text-center">
                  Find information quickly with our powerful search capabilities
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} LIONO. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

