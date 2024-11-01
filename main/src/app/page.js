import Image from "next/image";
import { NavBar } from "@/components/ui/navbar";
import { Input } from "@/components/ui/input"


export default function Home() {
  return (
    <div className>
      <div className="flex m-5 space-x-5">
        <NavBar/>
      </div>
    </div>
  );
}
