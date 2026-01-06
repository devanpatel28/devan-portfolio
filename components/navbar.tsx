import { Icon } from "@iconify/react";
import { icons } from "@/config/icons";
import { Tooltip } from "@heroui/tooltip";
import { Card, CardBody } from "@heroui/card";
import Link from "next/link";

export const Navbar = () => {
  const options = [
    { icon: icons.home, link: "/", tooltip: "Home" },
    { icon: icons.blog, link: "/blog", tooltip: "Blog" },
    { icon: icons.resume, link: "/documents/resume.pdf", tooltip: "Resume" },
    { icon: icons.contact, link: "/contact", tooltip: "Contact" },
  ];

  const iconClass ="w-12 h-8 p-1 rounded-xl hover:w-20 transition-all duration-300 hover:scale-110 cursor-pointer";

  return (
    <div className="sticky top-2 z-50 flex justify-center">
      <Card className="rounded-2xl ">
        <CardBody className="flex flex-row gap-2">
          {options.map((option) => (
            <Tooltip
              key={option.tooltip}
              content={option.tooltip}
              color="primary"
              placement="bottom"
              closeDelay={0}
            >
              <Link href={option.link}>
                <Icon icon={option.icon} className={iconClass} />
              </Link>
            </Tooltip>
          ))}
        </CardBody>
      </Card>
    </div>
  );
};
