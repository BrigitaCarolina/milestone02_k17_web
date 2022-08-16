import Head from "next/head";
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
            <div className="bg-gradient-to-b from-white to-yellow-100 min-h-100 flex justify-center rounded-lg py-4 px-8">
              <p className="font-thin">
                Untuk menggunakan Chatbot ini, kamu bisa mengirimkan salah satu dari ketiga command berikut: /check Fitur check digunakan untuk mengecek kebenaran suatu klaim. Contoh: /check Virus Corona tidak berbahaya /help Fitur help
                berisi daftar fitur yang dapat digunakan. /about Fitur about berisi tentang kelompok milestone kami serta sumber data yang digunakan.
              </p>
              <div className="check-container min-h-1"></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
