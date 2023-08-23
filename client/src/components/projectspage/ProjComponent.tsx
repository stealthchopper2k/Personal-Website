import React from "react";
import { AnimatedButton } from "../skillpage/ParaDiv";
import { FaReact } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { LiaNode } from "react-icons/lia";
import { BiLogoGoogleCloud } from "react-icons/bi";
import { SiWebpack } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

interface IconProps {
  color: string;
  children: React.ReactNode;
}

interface Props {
  href: string;
  img: string;
  Icon: React.ComponentType;
  IconColor: string;
  project_name: string;
  description: string;
  children: React.ReactNode;
}

const ColoredIcon: React.FC<IconProps> = ({ color, children }) => {
  const iconStyle = {
    color: color,
  };

  return <span style={iconStyle}>{children}</span>;
};

export default function ProjComponent({
  href,
  Icon,
  IconColor,
  img,
  project_name,
  description,
  children,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-5 mb-10">
      <div className="flex flex-col justify-between">
        <div className="flex flex-row justify-start items-center whitespace-nowrap">
          <AnimatedButton>
            <a href={href} className="text-5xl">
              {project_name}
            </a>
          </AnimatedButton>
          {img && <Image src={img} alt={img} width={80} height={80} />}
          <AnimatedButton>
            <a href={href}>
              <ColoredIcon color={IconColor}>
                <Icon />
              </ColoredIcon>
            </a>
          </AnimatedButton>
        </div>
        <p className="text-xl mt-auto w-96 md:w-full">{description}</p>
      </div>
      <div className="flex flex-row flex-wrap gap-5">{children}</div>
    </div>
  );
}
