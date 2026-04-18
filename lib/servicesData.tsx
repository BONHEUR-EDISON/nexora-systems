"use client";

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
  deliverables: string[];
  sla: string[];
  pricing: {
    base: number;
    min: number;
    max: number;
  };
  icon: React.ReactNode;
  badges?: React.ReactNode[];
};

/* ================================
   DATA (ENTERPRISE LEVEL)
================================ */

export const services: Service[] = [
  {
    slug: "web-mobile-development",
    title: "Web & Mobile Development",
    shortDesc: "Enterprise-grade scalable applications.",
    longDesc:
      "We architect and deliver high-performance web and mobile applications using modern frameworks (React, Node.js, cloud-native architectures). Our solutions are designed for scalability, security, and long-term maintainability, enabling companies to launch, iterate and scale efficiently across global markets.",

    benefits: [
      "⚡ High-performance optimized applications (Core Web Vitals compliant)",
      "📈 Scalable SaaS architecture (multi-tenant ready)",
      "🔐 Secure backend (JWT, OAuth2, RBAC)",
      "🎯 Conversion-focused UX/UI design",
      "🚀 Fast deployment pipelines (CI/CD automation)"
    ],

    useCases: [
      "SaaS platforms (B2B / B2C)",
      "Mobile applications (iOS / Android / PWA)",
      "Admin dashboards & analytics systems",
      "Marketplaces & e-commerce platforms"
    ],

    deliverables: [
      "Full-stack application (frontend + backend)",
      "API documentation (OpenAPI / Swagger)",
      "Production deployment (Vercel / AWS / VPS)",
      "Source code + documentation",
      "CI/CD pipeline setup"
    ],

    sla: [
      "99.9% uptime target",
      "Response time < 24h",
      "Bug fixes within 48h",
      "Continuous improvement roadmap"
    ],

    pricing: {
      base: 500,
      min: 500,
      max: 5000
    },

    icon: <Code2 size={28} />
  },

  {
    slug: "network-engineering",
    title: "Network Engineering",
    shortDesc: "Secure, scalable enterprise networking.",
    longDesc:
      "We design, implement and secure enterprise-grade network infrastructures (LAN/WAN, VPN, VLAN segmentation) with high availability and performance optimization. Our solutions ensure reliability, security and scalability for growing organizations.",

    benefits: [
      "🔒 Advanced network security (firewall, IDS/IPS)",
      "📡 Optimized routing & traffic management",
      "⚙️ High availability architecture",
      "🌍 Remote access via secure VPN",
      "📊 Network monitoring & analytics"
    ],

    useCases: [
      "Corporate network infrastructure",
      "Campus networks",
      "ISP / telecom setups",
      "Secure remote workforce environments"
    ],

    deliverables: [
      "Network architecture design",
      "Configuration (routers, switches, firewalls)",
      "Security hardening",
      "Documentation & diagrams",
      "Monitoring dashboards"
    ],

    sla: [
      "Network uptime 99.9%",
      "Incident response < 12h",
      "Security patching",
      "Continuous monitoring"
    ],

    pricing: {
      base: 300,
      min: 300,
      max: 3000
    },

    icon: <Network size={28} />
  },

  {
    slug: "server-deployment",
    title: "Server Deployment",
    shortDesc: "Production-ready cloud & on-prem servers.",
    longDesc:
      "We deploy, secure and optimize production servers (Linux & Windows) for high-performance workloads. From cloud infrastructure to dedicated servers, we ensure reliability, scalability and security aligned with industry best practices.",

    benefits: [
      "☁️ Cloud-ready infrastructure (AWS, VPS, Hybrid)",
      "🛡️ Security hardening (firewall, SSH, fail2ban)",
      "📈 Performance optimization",
      "🔁 Automated backups & recovery",
      "📊 Monitoring & alerting setup"
    ],

    useCases: [
      "Web hosting platforms",
      "Database servers",
      "Backend APIs & microservices",
      "Enterprise applications"
    ],

    deliverables: [
      "Server provisioning",
      "Security configuration",
      "Deployment scripts",
      "Monitoring setup",
      "Backup system"
    ],

    sla: [
      "99.9% uptime",
      "Critical issue response < 6h",
      "Daily backups",
      "Security updates"
    ],

    pricing: {
      base: 400,
      min: 400,
      max: 4000
    },

    icon: <Server size={28} />
  },

  {
    slug: "os-maintenance",
    title: "OS Maintenance",
    shortDesc: "System performance & security optimization.",
    longDesc:
      "We provide ongoing maintenance and optimization for operating systems across Linux, Windows and macOS environments. Our service ensures system stability, security compliance and peak performance.",

    benefits: [
      "⚡ Performance optimization",
      "🔐 Regular security updates",
      "🐞 Bug fixing & troubleshooting",
      "📉 Reduced downtime",
      "🧠 System health monitoring"
    ],

    useCases: [
      "Enterprise workstations",
      "Servers maintenance",
      "Personal systems optimization"
    ],

    deliverables: [
      "System audit report",
      "Optimization actions",
      "Security patches",
      "Performance tuning",
      "Maintenance logs"
    ],

    sla: [
      "Response < 24h",
      "Monthly maintenance",
      "Security compliance",
      "System monitoring"
    ],

    pricing: {
      base: 100,
      min: 100,
      max: 1000
    },

    icon: <ShieldCheck size={28} />,

    badges: [
      <FaLinux size={18} />,
      <FaWindows size={18} />,
      <FaApple size={18} />
    ]
  },

  {
    slug: "it-consulting",
    title: "IT Consulting",
    shortDesc: "Strategic digital transformation.",
    longDesc:
      "We provide high-level IT consulting to help organizations design, optimize and scale their technology infrastructure. From system audits to full digital transformation strategies, we align technology with business objectives.",

    benefits: [
      "📊 Full IT audit & assessment",
      "🏗️ Architecture design",
      "💰 Cost optimization",
      "🚀 Digital transformation roadmap",
      "📈 Scalable infrastructure planning"
    ],

    useCases: [
      "Startup scaling strategy",
      "Enterprise IT transformation",
      "System redesign & modernization"
    ],

    deliverables: [
      "Audit report",
      "Architecture blueprint",
      "Strategic roadmap",
      "Cost optimization plan",
      "Implementation guidance"
    ],

    sla: [
      "Consultation response < 24h",
      "Weekly follow-ups",
      "Strategic reporting",
      "Dedicated support"
    ],

    pricing: {
      base: 200,
      min: 200,
      max: 2000
    },

    icon: <Settings size={28} />
  }
];