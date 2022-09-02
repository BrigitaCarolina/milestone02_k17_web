import Head from "next/head";
import Layout from "../components/Layout";
import creators from "../public/json/creators.json";

export default function about() {
  return (
    <>
      <Head>
        <title>SAH | About</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link>
      </Head>
      <Layout>
        <div className="bg-gradient-to-b bg-gradient-to-b from-[#2F1C53] via-[#A46DFF] to-[#f5d1fd] min-h-screen px-10">
          <div className="container max-w-4xl m-auto py-10">
            <h1 className="text-3xl font-bold flex justify-center mb-4 font-roboto font-bold text-white drop-shadow-xl">ABOUT</h1>
            <div className="flex flex-col bg-white/[.6] backdrop-filter w-full backdrop-blur-lg items-center rounded-3xl my-4 p-8 md:p-12 shadow-xl gap-6">
              <h1 className="font-roboto font-bold text-4xl text-center"> SAH (Sudo Anti Hoax) </h1>
              <p className="font-thin font-inter text-lg md:text-xl text-justify">
              Sudo Anti Hoax adalah suatu linebot, yang mengaplikasikan fungsi Hoax Filter, 
              berfungsi untuk mengatasi permasalahan misinformasi atau hoax. 
              Hoax Filter di sini berperan sebagai sebuah tool yang nantinya menerima input klaim dari penggunanya 
              dan mengembalikan rating/nilai kebenaran dari klaim tersebut berdasarkan sumber-sumber yang valid. Sudo Anti Hoax menerapkan Hoax Filter Bot sebagai tool chatbot yang menggunakan platform LINE, berupa LINE Official Account yang dapat ditambahkan oleh pengguna LINE.
              </p>        
              <div className="check-container min-h-1"></div>
            </div>
            <h1 className="text-3xl font-bold flex justify-center mt-7 font-roboto font-bold text-white drop-shadow-xl">CREATORS</h1>
            <div className="flex flex-wrap justify-center gap-6">
              {creators.map((creator :any) => {
                return (
                  <>
                    <div className="flex flex-col bg-white/[.6] backdrop-filter w-full backdrop-blur-lg items-center rounded-3xl my-4 p-12 shadow-xl text-black min-w-[300px] w-[20vw] text-center font-roboto text-lg md:text-xl ">
                      <img src={creator.Foto} alt={creator.Nama} className="shadow-xl border-white border-2 mb-5"/>
                      <p className="font-bold">{creator.Nama}</p>
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
