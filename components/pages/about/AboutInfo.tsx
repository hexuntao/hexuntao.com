import Image from "next/image";
import { HeroText, SectionSubtext } from "../home-shared/Headings";
import { Gradient } from "../home-shared/Gradient";
import { FadeIn } from "../home-shared/FadeIn";
import {
  EmailIcon,
  GitHubIcon,
  LinkedinIcon,
  TwitterIcon,
  WechatIcon,
} from "../icon";
import { CTAButton } from "../home-shared/CTAButton";

import { useModal } from "@nextui-org/react";
import ModalWechat from "../../ModalWechat";

export default function AboutInfo() {
  const { setVisible, bindings } = useModal();
  return (
    <FadeIn
      noVertical
      className="font-sans w-auto pb-16 pt-[48px] md:pb-24 lg:pb-32 md:pt-16 lg:pt-60 flex justify-between gap-8 items-center flex-col relative z-0"
    >
      <FadeIn className="z-50 flex items-center justify-center w-full ">
        <div className="absolute min-w-[614px] min-h-[614px]">
          {/* TODO: On dark mode, there should be a "breathing" gradient inside the inner circle */}
          <Image
            alt="Turborepo"
            src="/static/about/circles-dark.svg"
            width={614}
            height={614}
            className="hidden dark:block"
          />
          <Image
            alt="Turborepo"
            src="/static/about/circles-light.svg"
            width={614}
            height={614}
            className="block dark:hidden"
          />
        </div>
        <div className="absolute z-50 flex items-center justify-center w-64 h-64">
          <Gradient
            small
            width={120}
            height={120}
            conic
            className="dark:opacity-100 opacity-40"
          />
        </div>

        <div className="w-[120px] h-[120px] z-50 rounded-full overflow-hidden">
          <Image
            alt="avatar"
            src={`/static/avatar.png`}
            width={120}
            height={120}
            className="object-cover w-[120px] h-[120px]"
          />
        </div>
      </FadeIn>
      <Gradient
        width={1000}
        height={1000}
        className="top-[-500px] dark:opacity-20 opacity-[0.15]"
        conic
      />
      <div className="absolute top-0 z-10 w-full h-48 dark:from-black from-white to-transparent bg-gradient-to-b" />
      <FadeIn
        delay={0.15}
        className="z-50 flex flex-col items-center justify-center gap-5 px-6 text-center lg:gap-6"
      >
        <HeroText className="fill-black dark:fill-white !text-[30px] lg:text-[30px]">
          Hexuntao
        </HeroText>
        <SectionSubtext hero> 不断学习，会是一条出路。</SectionSubtext>
      </FadeIn>
      <FadeIn
        delay={0.3}
        className="z-50 flex flex-col gap-5 px-6 mt-12 md:flex-row"
      >
        <CTAButton>
          <a
            href="https://github.com/hexuntao"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 py-1.5 px-2 bg-[#24282d] !text-white"
          >
            <GitHubIcon className="!text-white" />
            GitHub
          </a>
        </CTAButton>
        <CTAButton>
          <a
            href="https://twitter.com/hexuntao1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 py-1.5 px-2 bg-[#1b95e0] !text-white"
          >
            <TwitterIcon className="!text-white" />
            Twitter
          </a>
        </CTAButton>
        <CTAButton>
          <a
            href="mailto:hexuntao@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 py-1.5 px-2 bg-[#f8981d] !text-white"
          >
            <EmailIcon className="!text-white" />
            Email
          </a>
        </CTAButton>
        <CTAButton>
          <a
            href="https://linkedin.com/in/hexuntao"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 py-1.5 px-2 bg-[#478cc5] !text-white"
          >
            <LinkedinIcon className="!text-white" />
            Linkedin
          </a>
        </CTAButton>
        <CTAButton>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 py-1.5 px-2 bg-[#55be69] !text-white"
            onClick={() => setVisible(true)}
          >
            <WechatIcon className="!text-white" />
            Wechat
          </a>
        </CTAButton>
      </FadeIn>
      <ModalWechat {...bindings} />
      <FadeIn delay={0.5} className="relative w-full">
        <div className="absolute bottom-0 w-full dark:from-black from-white to-transparent h-72 bg-gradient-to-t" />
      </FadeIn>
    </FadeIn>
  );
}
