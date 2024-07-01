import TestApi from "@/components/TestApi";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <TestApi />
      <Button>CLick me</Button>
    </>
  );
}
