import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Link href="/" className="flex items-center mb-8">
        <Image 
          src="/lion-snout.png"
          alt="LIONO"
          width={40}
          height={40}
          className="mr-2"
        />
        <span className="text-2xl font-bold">LIONO</span>
      </Link>
      <div className="w-full max-w-md">
        <SignUp 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "rounded-lg shadow-lg",
              headerTitle: "text-center",
              headerSubtitle: "text-center",
              socialButtonsBlockButton: "rounded-md",
              formButtonPrimary: "rounded-md bg-primary hover:bg-primary/90",
              footerAction: "text-center"
            }
          }}
          signInUrl="/sign-in"
          redirectUrl="/dashboard"
        />
      </div>
    </div>
  );
} 