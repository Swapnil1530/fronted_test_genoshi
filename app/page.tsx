import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <Link href="/Profile">
          <Button>Profile</Button>
        </Link>

        <Link href="/Pricing">
          <Button className="mx-4">Pricing Plan</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
