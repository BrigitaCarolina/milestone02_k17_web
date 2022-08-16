import Head from "next/Head";
import Header from "../components/Header";
import Layout from "../components/Layout";

export default function about() {
  return (
    <>
      <Head>
        <title>SAH | About</title>
      </Head>
      <Layout>
        <div className="bg-gradient-to-b from-orange-400 to-yellow-300 min-h-screen px-10">
          <div className="container max-w-4xl m-auto py-10">
            <h1 className="text-3xl font-bold underline flex justify-center mb-4">About</h1>
            <div className="bg-gradient-to-b from-white to-yellow-100 min-h-100 flex justify-center rounded-lg py-4 px-8">
              <p>
                CheTaim adalah LINE Chatbot yang dibuat oleh Kelompok “Sweet Seventeen” yang bertujuan untuk memberikan validasi terhadap klaim dari berita yang dibaca oleh netizen. Chatbot ini diharapkan menjadi solusi permasalahan
                misinformasi atau hoaks yang tersebar di sosial media. Chatbot ini dibuat dengan menggunakan framework Bottender.js dan mengambil data dari Google Fact Checker Tools API.
              </p>
              <div className="check-container min-h-1"></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
