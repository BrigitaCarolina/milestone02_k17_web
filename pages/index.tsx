import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>SAH | Homepage</title>
      </Head>
      <Layout>
        <div className="bg-gradient-to-b from-orange-400 to-yellow-300 min-h-screen px-10">
          <div className="container max-w-4xl m-auto py-10">
            <h1 className="text-4xl font-bold underline flex justify-center mb-4">Checker</h1>
            <div className="bg-gradient-to-b py-4 from-white to-yellow-100 mb-4 items-center rounded-lg">
              <p className="text-center"></p>
              <div className="check-containe mx-10 mb-4">
                <form class="todo-form justify-between flex">
                  <input type="text" placeholder="What's your plan?" class="shadow-xl w-5/6 rounded-lg py-2 px-6 mx-2" onkeyup="disableAddButton()" />

                  <button type="submit" class="w-max-1/6 w-min-xl mx-2 rounded-full bg-sky-800 hover:bg-sky-900 px-6 py-2 text-white" disabled>
                    Submit
                  </button>
                </form>
              </div>
              <div className="">aaa</div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
