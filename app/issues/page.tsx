import React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
const IssuePage = () => {
  return (
    <div>
      <Button className="text-xl" variant="secondary" size="lg">
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default IssuePage;
