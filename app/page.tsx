import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import AnimReveal from "@/components/anim-reveal";
import { personal_info } from "@/lib/personal-info";
import Image from "next/image";
import Linker from "@/components/link";
import { Icon } from "@iconify/react";
import { Tooltip } from "@heroui/tooltip";
import { replaceTokensWithLinks } from "@/utils/replaceTokensWithLinks";
import ShowAll from "@/components/show-all";
import { Divider } from "@heroui/divider";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center gap-4 py-4 ">
        <div className="flex w-full max-w-3xl items-center justify-between gap-4">
          <div>
            <AnimReveal className="flex flex-col">
              <div className="text-5xl font-medium">
                {personal_info.first_name + " " + personal_info.last_name}
              </div>
              <div className="text-base ml-2 font-light mt-2 text-secondary-foreground">
                {personal_info.occupation} at{" "}
                <Linker href={personal_info.current_company_url}>
                  {" "}
                  {personal_info.current_company}
                </Linker>
              </div>
              <div className="text-base ml-2 font-light text-secondary-foreground">
                {personal_info.degree}
              </div>

              <div className="flex gap-2 mt-4">
                {personal_info.social_links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-200 hover:scale-105"
                  >
                    <Card className="w-fit rounded-full ">
                      <CardBody className="flex flex-row gap-1 py-2 px-4 items-center">
                        <Icon icon={link.icon} className="text-white text-xl" />
                        <p className="text-white text-xs font-light">
                          {link.name}
                        </p>
                      </CardBody>
                    </Card>
                  </a>
                ))}
              </div>
            </AnimReveal>
          </div>
          <AnimReveal>
            <Image
              src={personal_info.profile_image}
              alt="Profile Image"
              width={200}
              height={200}
              className="rounded-full"
            />
          </AnimReveal>
        </div>
      </section>

      <section id="about" className="mt-8">
        <AnimReveal>
          <h2 className="text-2xl font-semibold mb-4">About </h2>
          {personal_info.about.map((item, index) => (
            <p
              key={index}
              className="mb-2 text-secondary-foreground font-light text-sm"
            >
              {replaceTokensWithLinks(item.text, item.tokens as any)}
            </p>
          ))}
        </AnimReveal>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Latest Updates</h2>

        <ShowAll>
          {personal_info.latest_updated.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 p-3 hover:bg-default-50 rounded-lg cursor-default"
            >
              <div className="text-sm font-light text-secondary-foreground">
                {item.date}
              </div>

              <div>
                <p className="text-sm font-medium">
                  {replaceTokensWithLinks(item.title, item.tokens)}
                </p>
                <p className="text-xs mt-1 text-secondary-foreground">
                  {replaceTokensWithLinks(item.description, item.tokens)}
                </p>
              </div>
            </div>
          ))}
        </ShowAll>
      </section>
    </>
  );
}
