import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar/Navbar";


export default function Home() {
  const [query, setQuery] = useState("");
  const API_KEY = "AIzaSyCsET4iZRhfUz0qHOT7WprfsOWTSRDEEyA"
  const [obj, setObj] = useState(null)
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
      </Head>
      <Layout>
        <div className="flex bg-gradient-to-b from-orange-400 to-yellow-300 min-h-screen p-10 items-center">
          <div className="container max-w-4xl m-auto items-center">
            <a href="/" className="hover:text-sky-900">
              <h1 className="text-4xl font-bold underline flex justify-center mb-4">Anti Hoax Checker</h1>
            </a>
            <div className="mb-4 items-center rounded-lg">
              <div className="mx-2 md:mx-6 gap-8">
                <form className="justify-between flex items-center" onSubmit={handleSubmit}>
                  <input type="text" placeholder="Masukkan klaim disini" className="shadow-xl w-5/6 rounded-lg py-2 px-6 mx-2" onChange={e => setQuery(e.target.value)} />
                  <button type="submit" className="w-max-1/6 w-min-xl mx-2 rounded-full bg-sky-800 hover:bg-sky-900 px-6 py-2 text-white">
                    Submit
                  </button>
                </form>
                <div className = "gap-10 text-lg md:text-2xl">
                  {isSubmit ?
                   (Object.keys(obj).length === 0 && obj.constructor === Object) ?
                      <>
                        <div className="bg-gradient-to-b p-8 from-white to-yellow-100 items-center rounded-lg my-10 border-black border-2">
                          <p>MOHON MAAF! KLAIM TIDAK DITEMUKAN</p>
                        </div>
                      </>
                      :
                      (obj).claims?.map((c: any) => {
                        return (
                          <>
                            <div className="bg-gradient-to-b p-8 from-white to-yellow-100 items-center rounded-3xl my-4 border-black border-2">
                              <div className="my-6">
                                <h1>KLAIM</h1>
                                <p className="font-inter">{c.text}</p>
                              </div>
                              <div className="my-6">
                                <h1>REVIEW</h1>
                                <p className="font-inter">{c.claimReview[0].textualRating}</p>
                              </div>
                              <div className="my-6">
                                <h1>DIREVIEW OLEH</h1>
                                <p className="font-inter">{c.claimReview[0].publisher.name}</p>
                              </div>
                              <div className="my-6">
                                <h1>BACA SELENGKAPNYA</h1>
                                <a className="font-inter hover:text-sky-900" href={c.claimReview[0].url}>{c.claimReview[0].url}</a>
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
