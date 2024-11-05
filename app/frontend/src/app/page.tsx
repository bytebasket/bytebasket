import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-32 text-center">
        <h1 className="mb-6 text-6xl font-bold tracking-tight">
          Your Smart Kitchen
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            {" "}
            Assistant
          </span>
        </h1>
        <p className="mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
          Transform your grocery shopping and cooking experience with AI-powered
          shopping lists, pantry management, and personalized recipe
          suggestions.
        </p>
        {/* <Link
          href="/signup"
          className="flex items-center gap-2 rounded-full bg-black px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-gray-800 dark:bg-white dark:text-black"
        >
          Get Started
        </Link> */}
        <Link href="/signup" className={buttonVariants({ variant: "outline" })}>
          Get Started
        </Link>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 gap-8 px-4 py-16 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Smart Shopping Lists</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Create and manage shopping lists that learn from your habits and
              automatically organize items.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="mb-3 text-xl font-semibold">
              Pantry Tracker
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Keep track of your ingredients and get notifications when items
              are running low.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="mb-3 text-xl font-semibold">
              AI Recipe Suggestions
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Get personalized recipe recommendations based on your available
              ingredients and preferences.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>
    </main>
  );
}
1;
