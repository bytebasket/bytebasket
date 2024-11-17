"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const ProfilePage: React.FC = () => {
  // Sample user data
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "**********", // Initially, the password is hidden
    profilePic: "", // Replace with your image or link
  });

  // States for editing email and password
  const [newEmail, setNewEmail] = useState(user.email);
  const [newPassword, setNewPassword] = useState(user.password);

  // To toggle password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Handle changes to email
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmail(e.target.value);
  };

  // Handle changes to password
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle save (e.g., update user profile)
  const handleSaveChanges = () => {
    // Simulate saving the updated email and password
    setUser({
      ...user,
      email: newEmail,
      password: newPassword,
    });
    alert("Profile updated!");
  };

  return (
    <main className="flex min-h-screen flex-col">
      <div className="min-h-screen bg-gray-100/50 justify-center items-center">
        <div className="mx-auto w-full max-w-7xl px-52">
          <section>
            <Card className="p-10 mt-20">
              <CardHeader className="justify-center items-center">
                <CardTitle className="text-2xl text-center mb-4">
                  <Avatar className="mb-4 size-20">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </CardTitle>
                <CardDescription className="text-lg text-center">
                  <ul>
                    <li>
                      <strong>Name:</strong> {user.name}
                    </li>
                    <li>
                      <strong>Email Address:</strong>{" "}
                      <input
                        type="email"
                        value={newEmail}
                        onChange={handleEmailChange}
                        className="border p-1 rounded mt-2"
                      />
                    </li>
                    <li>
                      <strong>Password:</strong>{" "}
                      <input
                        type={passwordVisible ? "text" : "password"}
                        value={newPassword}
                        onChange={handlePasswordChange}
                        className="border p-1 rounded mt-2"
                      />
                      <button
                        onClick={togglePasswordVisibility}
                        className="ml-2 text-blue-500"
                      >
                        {passwordVisible ? "Hide" : "Show"}
                      </button>
                    </li>
                  </ul>
                </CardDescription>
              </CardHeader>

              <div className="mt-4 flex justify-center">
                <button
                  onClick={handleSaveChanges}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md"
                >
                  Save Changes
                </button>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
