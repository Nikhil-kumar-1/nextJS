"use client";
import React from "react";
import { useRouter } from "next/navigation";

const AboutCollege = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Welcome to AboutCollege page</h1>
      <button onClick={() => router.push("../about")}>About Page</button>
    </div>
  );
};

export default AboutCollege;
