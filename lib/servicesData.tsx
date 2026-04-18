'use client';

import React from "react";
import {
  Code2,
  Network,
  Server,
  Settings,
  ShieldCheck
} from "lucide-react";

import { FaLinux, FaWindows, FaApple } from "react-icons/fa";

/* ================================
   TYPES
================================ */

export type Service = {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  useCases: string[];
  pricing: {
    base: number;
    min: number;
    max: number;
  };
  icon: React.ReactNode;
  badges?: React.ReactNode[];
};

/* ================================
   DATA
================================ */

export const services: Service[] = [
  {
    slug: "web-mobile-development",
    title: "Web & Mobile Development",
    shortDesc: "Modern scalable applications.",
    longDesc:
      "We design and build high-performance web and mobile applications using modern stacks like React, Node.js and scalable architectures.",
    benefits: [
      "High performance apps",
      "Modern UI/UX systems",
      "API-driven architecture",
      "Scalable SaaS ready"
    ],
    useCases: ["SaaS platforms", "Mobile apps", "Admin dashboards"],
    pricing: {
      base: 500,
      min: 500,
      max: 5000
    },
    icon: <Code2 size={ 28} />
  },
  

{
  slug: "network-engineering",
    title: "Network Engineering",
      shortDesc: "Secure LAN/WAN infrastructure.",
        longDesc:
  "We design and deploy secure enterprise networks with high availability and optimized performance.",
    benefits: [
      "Secure architecture",
      "High uptime",
      "Optimized routing",
      "Scalable systems"
    ],
      useCases: ["Company networks", "Campus systems", "ISP setups"],
        pricing: {
    base: 300,
      min: 300,
        max: 3000
  },
  icon: <Network size={ 28 } />
},

{
  slug: "server-deployment",
    title: "Server Deployment",
      shortDesc: "Linux & Windows servers.",
        longDesc:
  "We deploy and manage production-ready servers with full security and optimization.",
    benefits: [
      "Cloud-ready infra",
      "Security hardening",
      "High availability",
      "Monitoring setup"
    ],
      useCases: ["Web hosting", "Databases", "APIs backend"],
        pricing: {
    base: 400,
      min: 400,
        max: 4000
  },
  icon: <Server size={ 28 } />
},

{
  slug: "os-maintenance",
    title: "OS Maintenance",
      shortDesc: "System optimization.",
        longDesc:
  "We maintain and optimize operating systems for performance, security and stability.",
    benefits: [
      "System optimization",
      "Security updates",
      "Bug fixing",
      "Performance boost"
    ],
      useCases: ["Company PCs", "Servers", "Personal systems"],
        pricing: {
    base: 100,
      min: 100,
        max: 1000
  },
  icon: <ShieldCheck size={ 28 } />,
  badges: [
    <FaLinux size={ 18} />,
    <FaWindows size={ 18} />,
    <FaApple size={ 18} />
    ]
},

{
  slug: "it-consulting",
    title: "IT Consulting",
      shortDesc: "Digital transformation strategy.",
        longDesc:
  "We help companies build IT strategies, optimize systems and migrate to modern infrastructures.",
    benefits: [
      "System audit",
      "Architecture design",
      "Cost optimization",
      "Digital transformation"
    ],
      useCases: ["Startups scaling", "Enterprise audit", "System redesign"],
        pricing: {
    base: 200,
      min: 200,
        max: 2000
  },
  icon: <Settings size={ 28 } />
}
];
console.log(typeof services[0].pricing.base);




