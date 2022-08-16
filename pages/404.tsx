import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <div className="bg-black flex">
      <h1 className="title-not-found">Kamu tersesat kawanku</h1>
      <h1 className="title-not-found">Halaman yang kamu cari tidak ada</h1>
    </div>
  );
}
