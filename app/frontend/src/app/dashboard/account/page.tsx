"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";


const ProfilePage: React.FC = () => {
    // Sample user data
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    passwords: "**********",//set as invisible but able to edit 
    profilePic: "", // Replace with your image or link
  });

  return (
    <div className="min-h-screen  bg-gray-100/50 justify-center items-center">
      <div className=" px-6 ">
        <section>
            <Card className="p-10 mt-20">
              <CardHeader className="justify-center items-center">
                <CardTitle className="text-2xl text-center mb-4">
                  <Avatar className="mb-4 size-20 ">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </CardTitle>
                <CardDescription className="text-lg text-center">
                  <ul >
                    <li>Name : {user.name}</li>
                    <li>Email Address : {user.email}</li>
                    <li>Password : {user.passwords}</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
          
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
