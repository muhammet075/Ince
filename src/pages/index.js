import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    document.querySelector("footer").classList.add("displaynone");
    document.querySelector(".cikisdugmesi").classList.add("displaynone");
    document.querySelector(".ayarlardugmesi").classList.add("displaynone");
    document.querySelector(".yardimdugmesi").classList.add("displaynone");

        setTimeout(function () {
          window.location = "/giris";
        }, 500);
  }, []);

  return (
    <div>
      <Head>
        <title>Ziraat</title>
      </Head>

      <div class='lds-dual-ring-beyaz girisyuklenmesi'></div>

    </div>
  );
}
