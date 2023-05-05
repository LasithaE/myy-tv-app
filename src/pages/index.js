import Image from "next/image";
import NavBar from "../components/NavBar";
import Shows from "./shows";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Shows />
    </div>
  );
}
