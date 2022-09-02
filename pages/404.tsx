import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <Layout>
      <div className="bg-gradient-to-b bg-gradient-to-b from-[#2F1C53] via-[#A46DFF] to-[#f5d1fd] h-screen w-full flex items-center justify-center px-10 text-2xl md:text-5xl font-roboto text-white font-bold text-center">
          <p> LAMAN YANG ANDA CARI TIDAK DITEMUKAN.</p>
      </div>
    </Layout>
  );
}
