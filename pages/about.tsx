import Head from "next/head";
import Layout from "../components/Layout";
import creators from "../public/json/creators.json";

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
            <div className="bg-gradient-to-b from-white to-yellow-100 min-h-100 flex flex-col text-justify justify-center rounded-3xl p-12 gap-6">
              <h1 className="font-raya text-4xl text-center"> SAH (Sudo Anti Hoax) </h1>
              <p className="font-thin font-inter text-lg md:text-2xl">
              Sudo Anti Hoax adalah suatu linebot, yang mengaplikasikan fungsi Hoax Filter, 
              berfungsi untuk mengatasi permasalahan misinformasi atau hoax. 
              Hoax Filter di sini berperan sebagai sebuah tool yang nantinya menerima input klaim dari penggunanya 
              dan mengembalikan rating/nilai kebenaran dari klaim tersebut berdasarkan sumber-sumber yang valid. Sudo Anti Hoax menerapkan Hoax Filter Bot sebagai tool chatbot yang menggunakan platform LINE, berupa LINE Official Account yang dapat ditambahkan oleh pengguna LINE.
              </p>        
              <div className="check-container min-h-1"></div>
            </div>
            <h1 className="text-3xl font-bold underline flex justify-center mt-7">Creators</h1>
            <div className="flex flex-wrap justify-center gap-4">
              {creators.map((creator :any) => {
                return (
                  <>
                    <div className="flex flex-col bg-gradient-to-b p-8 from-white to-yellow-100 items-center rounded-3xl my-4 border-black border-2 w-[60vw] md:w-[25vw] text-center items-center text-xl md:text-2xl">
                      <img src={creator.Foto} alt={creator.Nama} className="mb-5"/>
                      <p>{creator.Nama}</p>
                      <p>{creator.NIM}</p>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
