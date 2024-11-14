import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Signup() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Create Account</CardTitle>
        <CardDescription>
          Enter your email and password to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
      <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline">
          Login
          </Link>
        </div>
        <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="fname">First Name*</Label>
            </div>
            <Input id="fname" type="text" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="lname">Last Name*</Label>
            </div>
            <Input id="lname" type="text" required />
          </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email*</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password*</Label>
            </div>
            <Input id="password" type="password" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Confirm Password*</Label>
            </div>
            <Input id="confirmpassword" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
          <Button variant="outline" className="w-full">
          Sign Up with Google
          </Button>
        </div>
        
      </CardContent>
    </Card>
  );
} 
