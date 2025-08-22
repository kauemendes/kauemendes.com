export interface LinkItem {
  name: string;
  url: string;
  description?: string;
  icon?: string;
  featured?: boolean;
  external?: boolean;
}

export interface LinkCategory {
  title: string;
  links: LinkItem[];
}

export const linkCategories: LinkCategory[] = [
  {
    title: "Social & Professional",
    links: [
      {
        name: "LinkedIn",
        url: "/linkedin",
        description: "Connect with me professionally",
        icon: "linkedin",
        featured: true,
        external: true
      },
      {
        name: "GitHub",
        url: "/github",
        description: "Check out my code and projects",
        icon: "github",
        featured: true,
        external: true
      },
      {
        name: "WhatsApp",
        url: "/whatsapp",
        description: "Send me a message",
        icon: "whatsapp",
        featured: true,
        external: true
      }
    ]
  },
  {
    title: "Content & Blog",
    links: [
      {
        name: "Latest Blog Posts",
        url: "/blog",
        description: "Read my thoughts on tech and development",
        icon: "blog",
        featured: true,
        external: false
      },
      {
        name: "About Me",
        url: "/about",
        description: "Learn more about my background",
        icon: "user",
        featured: false,
        external: false
      }
    ]
  },
  {
    title: "Projects & Work",
    links: [
      {
        name: "Portfolio",
        url: "/projects",
        description: "See my latest projects and work",
        icon: "code",
        featured: true,
        external: false
      },
      {
        name: "Azure DevOps Extensions",
        url: "/projects/azdevops-json-to-variable",
        description: "JSON to Variable extension for Azure DevOps",
        icon: "tool",
        featured: false,
        external: false
      },
      {
        name: "Pipeline Variables Extension",
        url: "/projects/azdevops-pipeline-variables",
        description: "Print Variables extension for Azure DevOps",
        icon: "tool",
        featured: false,
        external: false
      }
    ]
  },
  {
    title: "Professional Services",
    links: [
      {
        name: "Consulting",
        url: "/consult",
        description: "DevOps and cloud consulting services",
        icon: "consulting",
        featured: true,
        external: false
      },
      {
        name: "Resume/CV",
        url: "/resume",
        description: "View my interactive resume",
        icon: "resume",
        featured: false,
        external: false
      }
    ]
  }
];

export const featuredLinks = linkCategories
  .flatMap(category => category.links)
  .filter(link => link.featured);