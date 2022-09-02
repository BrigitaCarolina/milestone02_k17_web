import Head from "next/head";
import React from "react";
import { useState } from "react";
import Layout from "../components/Layout";


export default function Home() {
  const [query, setQuery] = useState("");
  const API_KEY = "AIzaSyCsET4iZRhfUz0qHOT7WprfsOWTSRDEEyA"
  const [obj, setObj] = useState({claims:[]})
  async function check() {
    console.log("hello")
    setQuery(encodeURIComponent(query));
    const res = await fetch("https://factchecktools.googleapis.com/v1alpha1/claims:search?query=" + query + "&key=" + API_KEY)
    setObj (await res.json());
    setIsSubmit(true);
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    check();
  }
  const [isSubmit, setIsSubmit] = useState(false)
  return (
    <>
      <Head>
        <title>SAH | Homepage</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <Layout>
        <div className="flex bg-gradient-to-b from-[#2F1C53] via-[#A46DFF] to-[#f5d1fd] min-h-screen p-4 md:p-10 items-center">
          <div className="container max-w-4xl m-auto items-center gap-6">
            <a href="/" className={`hover:text-sky-900`}>
              <div className="flex w-full justify-center">
                <img src="/logo-SAH2.png" className="w-[15vw] h-[15vw] min-w-[150px] min-h-[150px] text-center drop-shadow-2xl"/>
              </div>
              <h1 className="text-3xl md:text-5xl text-white font-[700] flex justify-center mb-4 font-roboto drop-shadow-2xl hover:text-[#f5d1fd]">Sudo Anti Hoax</h1>
            </a>
            <p className={`text-lg text-white text-center font-roboto mb-6 md:mb-10 ${isSubmit ? "hidden" : ""}`}>
              A tool to help you check the factuality of a claim and avoid misinformation in the modern age of social media.
            </p>
            <div className="mb-4 items-center rounded-lg">
              <div className="mx-0 md:mx-6 gap-8">
                <form className={`justify-between flex items-center gap-6 ${isSubmit ? "flex-col md:flex-row m-10" : "flex-col"}`} onSubmit={handleSubmit}>
                  <input type="text" placeholder="Masukkan klaim disini" className="shadow-xl w-5/6 rounded-lg py-2 px-6 md:mx-2 font-roboto bg-white/[.7] backdrop-filter" onChange={e => setQuery(e.target.value)} />
                  <button type="submit" className="shadow-xl w-max-1/6 w-min-xl mx-2 rounded-lg bg-[#2F1C53]/[.8] backdrop-blur-lg hover:bg-[#A46DFF] px-16 py-2 text-lg md:text-xl text-white font-[700] font-roboto">
                    CHECK
                  </button>
                </form>
                <div className = "gap-10 text-lg md:text-2xl">
                  {isSubmit ?
                   (Object.keys(obj).length === 0 && obj.constructor === Object) ?
                      <>
                        <div className="w-full h-full flex justify-center items-center text-4xl text-white font-bold font-roboto">
                          <p>MOHON MAAF. KLAIM TIDAK DITEMUKAN</p>
                        </div>
                      </>
                      :
                      (obj).claims?.map((c: any) => {
                        return (
                          <>
                            <div className="flex gap-10">
                              <div className="bg-white/[.7] backdrop-filter w-full backdrop-blur-lg items-center rounded-3xl my-4 p-6 shadow-xl text-sm md:text-xl">
                              <div className="my-6">
                                <h1 className="font-roboto font-bold text-white">KLAIM</h1>
                                <p className="font-inter">{c.text}</p>
                              </div>
                              <div className="my-6">
                                <h1 className="font-roboto font-bold text-white">REVIEW</h1>
                                <p className="font-inter">{c.claimReview[0].textualRating}</p>
                              </div>
                              <div className="my-6">
                                <h1 className="font-roboto font-bold text-white">DIREVIEW OLEH</h1>
                                <p className="font-inter">{c.claimReview[0].publisher.name}</p>
                              </div>
                              <div className="my-6">
                                <h1 className="font-roboto font-bold text-white">BACA SELENGKAPNYA</h1>
                                <a className="font-inter text-[#2F1C53] underline hover:text-sky-900" href={c.claimReview[0].url}>{c.claimReview[0].url}</a>
                              </div>
                            </div>
                            </div>
                          </>
                        )
                      })
                    :
                    <>
                    </>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
