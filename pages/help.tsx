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
            <div className="bg-gradient-to-b from-white to-yellow-100 min-h-100 flex flex-col text-center justify-center rounded-lg p-8">
              <h1 className="font-raya text-4xl"> LINE CHATBOT </h1>
              <p className="font-thin font-inter">
                Untuk menggunakan SAH, user harus menambahkan bot terlebih dahulu sebagai friend pada aplikasi LINE dengan menggunakan id @354kntnm.
                Setelah itu, user dapat menggunakan salah satu dari ketiga command berikut: /check, /help, dan /about.
                Untuk menggunakan Chatbot ini, kamu bisa mengirimkan salah satu dari ketiga command berikut: 
              </p>
              <ul>
                
              </ul>
              <div className="check-container min-h-1"></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
