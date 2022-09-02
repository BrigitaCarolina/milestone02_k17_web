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
        <div className="bg-gradient-to-b bg-gradient-to-b from-[#2F1C53] via-[#A46DFF] to-[#f5d1fd] min-h-screen px-4 md:px-10">
          <div className="container max-w-4xl m-auto py-10">
            <h1 className="text-3xl font-bold font-roboto text-white flex justify-center my-4">CHATBOT</h1>
            <div className="bg-white/[.6] backdrop-filter w-full backdrop-blur-lg items-center rounded-3xl my-4 p-12 shadow-xl text-sm md:text-xl">
              <p className="font-thin font-inter text-md md:text-xl text-center">
                   Untuk menggunakan SAH LINE CHATBOT, user harus menambahkan bot terlebih dahulu sebagai friend pada aplikasi LINE dengan menggunakan id <span className = "font-bold">@354kntnm</span>.
                Setelah itu, user dapat menggunakan salah satu dari ketiga command berikut: /check, /help, dan /about. <br/><br/>
                Untuk menggunakan Chatbot ini, kamu bisa mengirimkan salah satu dari ketiga command berikut: 
              </p>
              <ul className="font-inter text-left list-disc text-md md:text-xl my-4">
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
              <a className="flex" href="https://liff.line.me/1645278921-kWRPP32q/?accountId=354kntnm" target="_blank"><button className="rounded-xl font-roboto font-bold text-lg shadow-xl text-white p-4 mt-6 mx-auto bg-[#2F1C53]/[.8] backdrop-blur-lg hover:bg-[#A46DFF]">TAMBAHKAN SAH DI LINE</button></a>
              <div className="check-container min-h-1"></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
