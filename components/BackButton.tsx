import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const BackButton = ({ text, href }: any) => {
  return (
    <>
      <Button>
        <Link href={href}>{text}</Link>
      </Button>
    </>
  );
};

export default BackButton;
