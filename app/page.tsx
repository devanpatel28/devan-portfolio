import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import AnimReveal from "@/components/anim-reveal";
import { personal_info } from "@/lib/personal-info";
import Linker from "@/components/link";
import { Icon } from "@iconify/react";
import { Image } from "@heroui/image";
import { replaceTokensWithLinks } from "@/utils/replaceTokensWithLinks";
import ShowAll from "@/components/show-all";
import CustomHeader from "@/components/custom-header";
import { project_info } from "@/lib/projects-info";
import { Chip } from "@heroui/chip";
import { Avatar } from "@heroui/avatar";
import { icons } from "@/config/icons";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="flex flex-col items-center gap-4 mt-10 md:mt-20"
      >
        <div className="flex flex-col md:flex-row w-full max-w-3xl items-center justify-between gap-4 md:gap-6">
          <div className="order-2 md:order-1 w-full md:w-auto">
            <AnimReveal className="flex flex-col">
              <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-center md:text-left">
                {personal_info.first_name + " " + personal_info.last_name}
              </div>
              <div className="text-sm sm:text-base ml-0 md:ml-2 font-light mt-2 text-secondary-foreground text-center md:text-left">
                {personal_info.occupation} at{" "}
                <Linker href={personal_info.current_company_url}>
                  {" "}
                  {personal_info.current_company}
                </Linker>
              </div>
              <div className="text-sm sm:text-base ml-0 md:ml-2 font-light text-secondary-foreground text-center md:text-left">
                {personal_info.degree}
              </div>

              <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                {personal_info.social_links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-200 hover:scale-105"
                  >
                    <Card className="w-fit rounded-full">
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
          <AnimReveal className="order-1 md:order-2">
            <Avatar
              src={personal_info.profile_image}
              alt="Profile Image"
              className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 "
            />
          </AnimReveal>
        </div>
      </section>

      <section id="about" className="mt-10">
        <AnimReveal>
          <h2 className="text-2xl font-semibold mb-4">About </h2>
          {personal_info.about.map((item, index) => (
            <p
              key={index}
              className="mb-2 text-secondary-foreground font-light md:text-sm text-xs"
            >
              {replaceTokensWithLinks(item.text, item.tokens as any)}
            </p>
          ))}
        </AnimReveal>
      </section>

      <section id="latest-updates" className="mt-10">
        <AnimReveal>
          <h2 className="text-2xl font-semibold mb-4">Latest Updates</h2>

          <ShowAll>
            {personal_info.latest_updated.map((item, index) => (
              <div
                key={index}
                className="block md:flex gap-2 p-3 px-0 md:px-3 hover:bg-default-50 rounded-lg cursor-default"
              >
                <div className="text-sm font-light text-secondary-foreground">
                  {item.date}
                </div>

                <div>
                  <p className="text-xs md:text-sm font-medium">
                    {replaceTokensWithLinks(item.title, item.tokens)}
                  </p>
                  <p className="text-exs md:text-xs mt-1 text-secondary-foreground">
                    {replaceTokensWithLinks(item.description, item.tokens)}
                  </p>
                </div>
              </div>
            ))}
          </ShowAll>
        </AnimReveal>
      </section>

      <section id="skills" className="mt-20">
        <AnimReveal>
          <h2 className="text-2xl font-semibold mb-4">Skills </h2>
          <div className="flex flex-wrap gap-2">
            {personal_info.skills.map((item, index) => (
              <Chip
                key={index}
                classNames={{
                  base: "cursor-pointer bg-white text-black text-xs md:text-sm transition-colors rounded-lg ",
                  content: "flex flex-row items-center gap-1 p-0 px-1",
                }}
              >
                <Icon icon={item.icon} className="text-sm md:text-base" />
                {item.name}
              </Chip>
            ))}
          </div>
        </AnimReveal>
      </section>

      <section id="education" className="mt-10">
        <AnimReveal>
          <h2 className="text-2xl font-semibold mb-4">Education </h2>
          <div className="flex flex-col">
            {personal_info.education.map((item, index) => (
              <a
                key={index}
                href={item.institution_web}
                target="_blank"
                rel="noopener noreferrer"
                className="flex p-3 px-0 md:px-3 justify-between hover:bg-default-50 rounded-lg cursor-pointer group"
              >
                <div className="flex gap-3 items-center">
                  <Avatar
                    src={item.institution_logo}
                    className="w-10 h-10 md:w-12 md:h-12 aspect-square flex-shrink-0"
                  />

                  <div>
                    <p className="text-xs md:text-sm items-center font-medium flex ">
                      {item.institution_name}
                      <Icon
                        icon={icons.chevronRight}
                        className="md:block hidden text-xl opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out"
                      />
                      <span className="text-exs ml-2 md:hidden text-secondary-foreground">
                        ({item.time})
                      </span>
                    </p>
                   
                    <p className="text-exs md:text-xs md:mt-1 text-secondary-foreground">
                      {item.course}
                    </p>
                    <p className="text-xs mt-1 text-secondary-foreground"></p>
                  </div>
                </div>
                <p className="text-sm hidden md:block text-secondary-foreground">
                  {item.time}
                </p>
              </a>
            ))}
          </div>
        </AnimReveal>
      </section>

      <section id="work-experience" className="mt-10">
        <AnimReveal>
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>

          <div className="flex flex-col">
            {personal_info.work_experience.map((item, index) => (
              <a
                key={index}
                href={item.company_web}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start p-3 px-0 md:px-3 hover:bg-default-50 rounded-lg cursor-pointer group"
              >
                <div className="flex items-center gap-3 flex-1">
                  <Avatar
                    src={item.company_logo}
                    className="w-10 h-10 md:w-12 md:h-12 aspect-square flex-shrink-0"
                  />

                  <div>
                    <p className="text-xs md:text-sm font-medium flex items-center">
                      {item.company_name}
                      <Icon
                        icon={icons.chevronRight}
                        className="
                        hidden md:block
                    ml-1 text-xl
                    opacity-0 -translate-x-1
                    group-hover:opacity-100
                    group-hover:translate-x-0
                    transition-all duration-300 ease-out
                  "
                      />
                     <span className="md:hidden ml-2 text-secondary-foreground text-exs">
                      ({replaceTokensWithLinks(item.time)})
                    </span>
                    </p>
                   
                    <p className="text-exs md:text-xs md:mt-1 text-secondary-foreground">
                      {item.position}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex flex-col items-end text-right">
                  <p className="text-sm text-secondary-foreground">
                    {item.location}
                  </p>
                  <p className="text-sm text-secondary-foreground">
                    {replaceTokensWithLinks(item.time)}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </AnimReveal>
      </section>

      <section id="projects" className="mt-10">
        <CustomHeader
          badgeTitle="Selected Project"
          title="Check out my latest work"
          className="mb-10 mt-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <ShowAll initialCount={3}>
            {project_info.map((item, index) => (
              <Card
                key={index}
                className="border border-default-100 rounded-xl"
              >
                <div className="w-full aspect-[3/2] overflow-hidden rounded-lg">
                  <Image
                    src={item.project_image}
                    alt={item.project_name}
                    className="w-full h-full object-cover hover:scale-102 transition-transform duration-200 object-top"
                    removeWrapper
                  />
                </div>

                <CardBody className="flex flex-col items-start p-2">
                  <p className="text-base font-bold text-white">
                    {item.project_name}
                  </p>

                  <p className="text-xs font-light text-white mt-1">
                    {item.time}
                  </p>
                  <p className="text-xs font-light text-secondary-foreground mt-1">
                    {item.description}
                  </p>

                  <div className="flex gap-2 mt-2">
                    {item.links?.map((link, idx) => (
                      <Chip
                        key={idx}
                        as="a"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        classNames={{
                          base: "cursor-pointer bg-white text-black rounded-lg",
                          content: "flex flex-row items-center gap-1 p-0 px-1",
                        }}
                      >
                        <Icon icon={link.icon} className="text-sm" />
                        <span className="text-xs">{link.name}</span>
                      </Chip>
                    ))}
                  </div>
                </CardBody>
              </Card>
            ))}
          </ShowAll>
        </div>
      </section>

      <section id="achievements" className="mt-10">
        <CustomHeader
          badgeTitle="Milestones"
          title="Professional Achievements"
          className="mb-10 mt-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ShowAll initialCount={3}>
            {personal_info.achievements.map((item, index) => (
              <Card
                key={index}
                className="border border-default-100 rounded-xl flex flex-col overflow-hidden"
              >
                <div className="w-full aspect-[3/2] overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-102 transition-transform duration-200 object-top"
                    radius="none"
                    removeWrapper
                  />
                </div>

                {/* Content */}
                <CardBody className="flex flex-col items-start p-3 flex-grow">
                  <p className="text-base font-bold text-white">{item.title}</p>

                  <p className="text-xs font-light text-white mt-1">
                    {item.date}
                  </p>

                  <p className="text-xs font-light text-secondary-foreground mt-1 flex-grow">
                    {item.description}
                  </p>

                  <div className="flex gap-2 mt-2 flex-wrap">
                    {item.place?.map((place, idx) => (
                      <Chip
                        key={idx}
                        as="a"
                        href={place.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        classNames={{
                          base: "cursor-pointer bg-white text-black rounded-lg",
                          content: "flex items-center  gap-1 px-2 py-1",
                        }}
                      >
                        <Image
                          src={place.icon}
                          alt={place.place}
                          className="w-4 h-4"
                          radius="none"
                        />
                        <span className="text-xs">{place.place}</span>
                      </Chip>
                    ))}
                  </div>
                </CardBody>
              </Card>
            ))}
          </ShowAll>
        </div>
      </section>

      <section id="certifications" className="mt-10">
        <CustomHeader
          badgeTitle="Learning Milestones"
          title="Certifications Earned "
          className="mb-10 mt-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ShowAll initialCount={3}>
            {personal_info.certifications.map((item, index) => (
              <Card
                key={index}
                className="border border-default-100 rounded-xl flex flex-col overflow-hidden"
              >
                <div className="w-full aspect-[3/2] overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-102 transition-transform duration-200 object-top"
                    radius="none"
                    removeWrapper
                  />
                </div>

                {/* Content */}
                <CardBody className="flex flex-col items-start p-3 flex-grow">
                  <p className="text-base font-bold text-white">{item.title}</p>

                  <p className="text-xs font-light text-white mt-1">
                    {item.date}
                  </p>

                  <div className="flex gap-2 mt-2 flex-wrap">
                    {item.from?.map((from, idx) => (
                      <Chip
                        key={idx}
                        as="a"
                        href={from.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        classNames={{
                          base: "cursor-pointer bg-white text-black rounded-lg",
                          content: "flex items-center  gap-1 px-2 py-1",
                        }}
                      >
                        <Image
                          src={from.icon}
                          alt={from.name}
                          className="w-4 h-4"
                          radius="none"
                        />
                        <span className="text-xs">{from.name}</span>
                      </Chip>
                    ))}
                  </div>
                </CardBody>
              </Card>
            ))}
          </ShowAll>
        </div>
      </section>
    </>
  );
}
