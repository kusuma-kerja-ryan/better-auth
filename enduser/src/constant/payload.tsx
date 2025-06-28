import { Book, Sunset, Trees, Zap } from "lucide-react";

const payloadNavbar = {
    logo : {
        url: "/",
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
        alt: "logo",
        title: "Ryan Sukamoto",
      },
      menu : [
        {
          title: "Products",
          url: "/products",
          items: [
            {
              title: "Blog",
              description: "The latest industry news, updates, and info",
              icon: <Book className="size-5 shrink-0" />,
              url: "/blog",
            },
            {
              title: "About Me",
              description: "Our mission is to innovate and empower the world",
              icon: <Trees className="size-5 shrink-0" />,
              url: "/about",
            },
            {
              title: "Support",
              description:
                "Get in touch with our support team or visit our community forums",
              icon: <Zap className="size-5 shrink-0" />,
              url: "/support",
            },
          ],
        },
        {
          title: "Resources",
          url: "#",
          items: [
            {
              title: "Contact Us",
              description: "We are here to help you with any questions you have",
              icon: <Sunset className="size-5 shrink-0" />,
              url: "/contact",
            },
            {
              title: "Terms of Service",
              description: "Our terms and conditions for using our services",
              icon: <Book className="size-5 shrink-0" />,
              url: "/terms-of-service",
            },
          ],
        },
        // {
        //   title: "Pricing",
        //   url: "/#pricing",
        // },
        // {
        //   title: "Blog",
        //   url: "/blog",
        // },
      ],
      auth : {
        login: { title: "Login", url: "/auth/signin" },
        signup: { title: "Sign up", url: "/auth/signup" },
      },
}

export {
    payloadNavbar
}