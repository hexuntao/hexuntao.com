import React from "react";
import cn from "classnames";
import Link from "next/link";
import { motion } from "framer-motion";

import { TurboheroBackground } from "./TurboHeroBackground";
import { FadeIn } from "../home-shared/FadeIn";
import { LandingPageGlobalStyles } from "../home-shared/GlobalStyles";
import styles from "./index.module.css";
import Typed from "typed.js";
import { CTAButton } from "../home-shared/CTAButton";

function Background() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div
        className={cn(
          "z-[-1] absolute w-full h-full [--gradient-stop-1:60%] [--gradient-stop-2:85%] lg:[--gradient-stop-1:50%] lg:[--gradient-stop-2:90%]",
          "[--gradient-color-1=rgba(0,0,0,1)] [--gradient-color-2=rgba(0,0,0,0.8)] [--gradient-color-3=rgba(0,0,0,0)]",
          "dark:[--gradient-color-1=rgba(255,255,255,1)] dark:[--gradient-color-2=rgba(255,255,255,0.8)] dark:[--gradient-color-3=rgba(255,255,255,0)]"
        )}
        style={{
          background:
            "linear-gradient(180deg, var(--gradient-color-1) 0%, var(--gradient-color-2) var(--gradient-stop-1), var(--gradient-color-3) var(--gradient-stop-2), 100% transparent)",
        }}
      />
      <span className={cn(styles.leftLights, "opacity-50 dark:opacity-100")} />
      <span className={cn(styles.rightLights, "opacity-50 dark:opacity-100")} />
      <span className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t dark:from-black from-white to-transparent" />
      <span className="bg-gradient-to-b dark:from-black from-white to-transparent absolute top-[20vh] left-0 w-full h-[50vh]" />
      <TurboheroBackground />
    </div>
  );
}

function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const variants = {
    hidden: { opacity: 0 },
    active: { opacity: 1 },
  };
  return (
    <div
      className={cn(
        styles["counter-border"],
        "w-[calc(100%_-_0px)] h-[304]px sm:!w-[488px] sm:h-[352px]"
      )}
    >
      <motion.i
        initial="hidden"
        animate={"active"}
        variants={variants}
        aria-hidden="true"
      ></motion.i>
      <div
        className={cn(
          "relative w-full h-full max-w-full !pb-12 pt-8 md:!pb-4 md:!pt-4 p-3 rounded-xl overflow-hidden flex flex-col items-center justify-center border border-[rgba(255,255,255,0.05)]",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

function Teams() {
  return (
    <div className="mx-auto ">
      <p className="bg-contain mb-2 md:!mb-4 text-sm font-semibold tracking-wide text-[#666666] dark:text-[#888888] uppercase">
        ～得闲饮茶～ 🫖
      </p>
    </div>
  );
}

function TypedBios() {
  let el = React.useRef<any>(null);
  let typed = React.useRef<any>(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: "#bios",
      typeSpeed: 30,
      backSpeed: 40,
      loop: true,
      backDelay: 2000,
    });
    return () => typed.current.destroy();
  }, []);

  return (
    <div className="text-2xl">
      <ul id="bios" className="hidden " style={{ minHeight: 40 }}>
        <li>
          平时爱好 <span className="ml-1">🎱、 🏸️、 🏀、 🧗‍♀️ </span>
          ，有志同道合之人可骚扰。
        </li>
        <li>
          平时 <b className="font-medium">只想工作，不想上班</b> 。
        </li>
        <li>道理都懂，不喝鸡汤，只想...</li>
        <li>
          早日实现 <b className="font-medium text-blue-500">财富自由</b>、
        </li>
        <li>
          走向 <b className="font-medium text-green-500">人生巅峰</b>、
        </li>
        <li>
          迎娶 <b className="font-medium text-red-500">白富美</b>。
        </li>
        <li>......</li>
        <li>下面这句才是</li>
        <li>
          <b className="font-medium text-blue-500">
            做好自己，好好生活，天天向上。🙂️
          </b>
        </li>
        <li>......</li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
}

function ShortDescription() {
  let typed = React.useRef<any>(null);

  React.useEffect(() => {
    typed.current = new Typed("#intro", {
      strings: [
        "从2017年开始第一份编码工作，距今已有6年工作经验。<br/> 从原先的前端开发到之后开始学习Node全栈。 <br/> 目前主要技术栈 NestJs、ReactJs、VueJs、NextJs ... <br/> 该网站主要分享技术文章和经验，有时会记录下枯燥又简单的生活。(分享生活，没有什么不好的😎)",
      ],
      typeSpeed: 60,
      backSpeed: 20,
      loop: false,
      showCursor: false,
      backDelay: 5000,
    });
    return () => typed.current.destroy();
  }, []);

  return (
    <div
      id="intro"
      style={{ minHeight: 128 }}
      className="px-6 w-full text-lg leading-10"
    ></div>
  );
}

function LandingPage() {
  return (
    <div>
      <LandingPageGlobalStyles />
      <main className="relative flex flex-col items-center justify-center w-full h-full  overflow-hidden [--geist-foreground:#fff] dark:[--geist-foreground:#000] [--gradient-stop-1:0px] [--gradient-stop-2:120px] sm:[--gradient-stop-1:0px] sm:[--gradient-stop-2:120px]">
        <Background />
        <div className="py-20 flex-col md:flex-row nx-mx-auto nx-flex nx-max-w-[90rem] nx-items-center w-full nx-gap-2 nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]">
          <div className="md:w-1/2">
            <FadeIn className="z-10 flex flex-col justify-center w-full h-full">
              <div className="mt-12 font-extrabold text-5xl lg:text-6xl leading-tight mb-4 ">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-black/80 to-black dark:from-white dark:to-[#AAAAAA]">
                  嘿, 雷🐒 阿!
                </span>
                <b className="pl-2"> 😃</b>
              </div>
              <p className="mt-6 text-xl font-space-grotesk mb-4 text-[#666666] dark:text-[#888888]">
                我是 Hexuntao - 一名 专注于 Node 全栈开发 的 90后。
              </p>
              <FadeIn delay={0.5} className="h-20">
                <TypedBios />
              </FadeIn>
              <FadeIn
                delay={0.5}
                className="z-50 pt-5 pb-10 flex w-full max-w-md "
              >
                <div className="flex flex-col gap-6 w-full md:flex-row">
                  <CTAButton>
                    <Link href="/about" className="block py-3">
                      了解更多
                    </Link>
                  </CTAButton>
                  <CTAButton outline>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/hexuntao"
                      className="block py-3"
                    >
                      GitHub
                    </a>
                  </CTAButton>
                </div>
              </FadeIn>
              <FadeIn delay={0.3} className="z-10 py-8">
                <Teams />
              </FadeIn>
            </FadeIn>
          </div>
          <div className="md:w-1/2 flex flex-col items-center">
            <FadeIn delay={0.2}>
              <Card className="turbopackCardBg">
                <ShortDescription />
              </Card>
            </FadeIn>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
