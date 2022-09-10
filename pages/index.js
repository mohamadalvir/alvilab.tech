import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [typingIndicator, setTypingIndicator] = useState(true);
  const [bubbles, setbubbles] = useState([
    { txt: "Halo 👋", show: false, delay: 1000 },
    { txt: "Kenalin, aku Alvira Mohamad", show: false, delay: 3500 },
    {
      txt: "Saat ini, aku lagi merintis karir sebagai seorang programmer, khususnya di bidang web frontend",
      show: false,
      delay: 8000,
    },

    {
      txt: "Ini beberapa project yang pernah aku buat..",
      show: false,
      delay: 12000,
    },
    {
      attachment: [
        {
          img: "/portofolio/kreasijabar.png",
          title: "Kreasi Jabar",
          label: "Fullstack Website",
        },
        {
          img: "/portofolio/bizlook.png",
          title: "Bizlook",
          label: "Fullstack Website",
        },
      ],
      show: false,
      delay: 12000,
    },
    {
      txt: "Btw, ini cuma ala-ala chat ya :D",
      show: false,
      delay: 18000,
    },
  ]);

  const timeline = (count) => {
    setTimeout(() => {
      if (count < bubbles.length) {
        let items = [...bubbles];
        items[count].show = true;
        setbubbles(items);
        setTypingIndicator(false);
        setTimeout(() => {
          setTypingIndicator(true);
        }, 800);
      }
    }, bubbles[count].delay);
  };

  useEffect(() => {
    let calcTypingSpeed = 0;
    bubbles.forEach((element, key) => {
      timeline(key);
      if (calcTypingSpeed < element.delay) calcTypingSpeed = element.delay;
    });

    setTimeout(() => {
      setTypingIndicator(false);
    }, calcTypingSpeed + 1000);
  }, []);

  return (
    <div className="flex flex-col justify-center min-h-screen py-2 bg-gray-50">
      <Head>
        <title>Alvira Mohamad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="hidden">Alvira Mohamad</h1>
      <h3 className="font-serif text-4xl text-left px-6 md:px-36 mt-6">
        alvilab.my.id
      </h3>
      <div className="flex flex-col justify-end flex-1 px-6 md:px-36 text-center mb-6">
        <div className="flex flex-col items-start justify-around">
          {bubbles.map((item, key) => {
            if (item.attachment === undefined) {
              return (
                <p
                  key={key}
                  className={`${
                    item.show ? "animate-bounce-bottom-left" : "hidden"
                  } mt-4 ml-2 px-6 py-3 text-left border rounded-xl shadow-sm bg-white`}
                >
                  {item.txt}
                </p>
              );
            } else {
              return (
                <div
                  className={`${
                    item.show ? "animate-bounce-bottom-left" : "hidden"
                  } flex mt-4 ml-2 gap-2 text-left`}
                >
                  {item.attachment.map((attachmentElement) => {
                    return (
                      <div className="pt-4 border rounded-xl shadow-sm bg-white overflow-hidden">
                        <div className="px-4 mb-2">
                          <h3 className="text-lg font-normal text-gray-700 leading-none">
                            {attachmentElement.title}
                          </h3>
                          <p className="bg-red-100 text-red-700 px-2 rounded-full text-xs font-semibold inline-block text-left">
                            {attachmentElement.label}
                          </p>
                        </div>
                        <img src={attachmentElement.img} />
                      </div>
                    );
                  })}
                </div>
              );
            }
          })}
          <div className="flex items-center">
            <div className="w-14 h-14 rounded-full  mt-4 overflow-hidden shadow-lg border-white border-2">
              <img src="./me.jpg" />
            </div>
            <div className={`mx-2 mt-3 ${typingIndicator ? "" : "hidden"}`}>
              <svg
                id="prefix__typing_bubble"
                data-name="typing bubble"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={6}
                viewBox="0 0 24 6"
              >
                <defs>
                  <style>
                    {
                      "@keyframes ball-beat{0%{opacity:.7}33.33%{opacity:.55}66.67%{opacity:.4}to{opacity:1}}.prefix__dot{fill:rgb(24 37 78 / 70%);transform-origin:50% 50%;animation:ball-beat 1.1s 0s infinite cubic-bezier(.445,.05,.55,.95)}.prefix__dot:nth-child(2){animation-delay:.3s!important}.prefix__dot:nth-child(3){animation-delay:.6s!important}"
                    }
                  </style>
                </defs>
                <circle className="prefix__dot" cx={3} cy={3} r={3} />
                <circle className="prefix__dot" cx={12} cy={3} r={3} />
                <circle className="prefix__dot" cx={21} cy={3} r={3} />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className={"flex items-center justify-center "}
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
