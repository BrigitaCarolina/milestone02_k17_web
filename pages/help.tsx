import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";

export default function help() {
  return (
    <>
      <Head>
        <title>SAH | Help</title>
      </Head>
      <Layout>
        <div className="bg-gradient-to-b from-orange-400 to-yellow-300 min-h-screen px-10">
          <div className="container max-w-4xl m-auto py-10">
            <h1 className="text-3xl font-bold underline flex justify-center mb-4">Help</h1>
            <div className="bg-gradient-to-b from-white to-yellow-100 min-h-100 flex flex-col text-justify justify-center rounded-3xl p-12 gap-6">
              <h1 className="font-raya text-4xl text-center"> LINE CHATBOT </h1>
              <p className="font-thin font-inter text-lg md:text-2xl">
                Untuk menggunakan SAH, user harus menambahkan bot terlebih dahulu sebagai friend pada aplikasi LINE dengan menggunakan id <span className = "font-bold">@354kntnm</span>.
                Setelah itu, user dapat menggunakan salah satu dari ketiga command berikut: /check, /help, dan /about.
                Untuk menggunakan Chatbot ini, kamu bisa mengirimkan salah satu dari ketiga command berikut: 
              </p>
              <ul className="font-inter text-left list-disc text-lg md:text-2xl">
                <li>
                Fungsi <span className = "font-bold">/check</span> adalah fungsi utama dari bot ini, yaitu untuk melakukan pengecekan kebenaran pada suatu klaim.
                </li>
                <li>
                Fungsi <span className = "font-bold">/help</span> adalah fungsi yang dapat dipanggil apabila user ingin melihat semua command yang tersedia.
                </li>
                <li>
                Fungsi <span className = "font-bold">/about</span> adalah fungsi yang berisi tentang latar belakang dari pembuatannya bot SAH ini.
                </li>
              </ul>
              <div className="check-container min-h-1"></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
