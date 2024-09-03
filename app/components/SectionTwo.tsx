import Image from "next/image";
import square from "../../public/square.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import sketch from "../../public/tech-icons/sketch.svg";
import canva from "../../public/tech-icons/canva.svg";
import ai from "../../public/tech-icons/ai.svg";
import figma from "../../public/tech-icons/figma.svg";
import chatgpt from "../../public/tech-icons/chatgpt.svg";
import cloud from "../../public/tech-icons/creativecloud.svg";
import framer from "../../public/tech-icons/framer.svg";
import github from "../../public/tech-icons/github.svg";
import slack from "../../public/tech-icons/slack.svg";
import discord from "../../public/tech-icons/discord.svg";
import youtube from "../../public/tech-icons/youtube.svg";
import chrome from "../../public/tech-icons/chrome.svg";
import pr from "../../public/tech-icons/pr.svg";
import ps from "../../public/tech-icons/ps.svg";
import notion from "../../public/tech-icons/notion.svg";
import micro from "../../public/tech-icons/micro.svg";
import twitter from "../../public/twitter.svg";
import whatsapp from "../../public/whatsapp1.png";
import linkedin from "../../public/linkedin.svg";
import { Button } from "@/components/ui/button";


const icons = [
  canva,
  figma,
  chatgpt,
  github,
  slack,
  discord,
  youtube,
  chrome,
  ps,
  micro,
];

const socialMedia = [
  {
    id: 1,
    icon: whatsapp,
    name: "Whatapps",
    username: "@paras",
    link: "https://api.whatsapp.com/send/?phone=7058145570&text=Hello+%21%21&type=phone_number&app_absent=0",
  },
  {
    id: 2,
    icon: twitter,
    name: "X / Twitter",
    username: "@paras",
    link: "https://x.com/ParasSalve59821",
  },
  {
    id: 3,
    icon: linkedin,
    name: "Linkedin",
    username: "@paras",
    link: "https://www.linkedin.com/checkpoint/challengesV2/AQGxFEOBheSDnQAAAZCRsoZ9TjvLt24hY37yY4uf_xtlnG5mDqg7u7odBETmOlucwKV2FF2bvslKLv_ugkvr5XKyf8gJB-glJg?original_referer=https%3A%2F%2Fprotfolio-hgqy-qphwj8zng-paras-projects-19ce3062.vercel.app%2F",
  },
];

export function SectionTwo() {
  return (
    <div className="grid gird-cols-1 lg:grid-cols-3 gap-4 mt-10">
      <div className="w-full relative col-span-1">
        <Image
          src={square}
          alt="square"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
          {socialMedia.map((item) => (
            <Card
              key={item.id}
              className="p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none"
            >
              <Image src={item.icon} alt="Icon" className="w-16 h-16" />
              <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
              <p className="text-muted-foreground">{item.username}</p>
              <Button className="mt-4" size="sm" asChild>
                <a href={item.link}>Follow</a>
              </Button>
            </Card>
          ))}
        </div>
        <Card className="bg-gray-100 border-none">
          <CardHeader>
            <CardTitle>Explore my stack</CardTitle>
            <CardDescription>Check out the tools i use daily</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            {icons.map((item, index) => (
              <Image key={index} src={item} alt="Icon" className="w-16 h-16" />
            ))}
          </CardContent>
        </Card>

        
      </div>
    </div>
  );
}
