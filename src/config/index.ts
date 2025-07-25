import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for Deployi a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
        default: "Deployi - Deploy, manage & scale apps effortlessly",
        template: `%s | Deployi`
    },
    description: "Deployi is your all-in-one platform to deploy, manage, and scale any kind of application effortlessly. Whether you're deploying a simple web app or a complex microservices architecture, Deployi handles it all with speed, security, and flexibility",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "Deployi - Deploy, manage & scale apps effortlessly",
        description: "Deployi is your all-in-one platform to deploy, manage, and scale any kind of application effortlessly. Whether you're deploying a simple web app or a complex microservices architecture, Deployi handles it all with speed, security, and flexibility",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@ezeslucky",
        title: "Deployi - Deploy, manage & scale apps effortlessly",
        description: "Deployi is your all-in-one platform to deploy, manage, and scale any kind of application effortlessly. Whether you're deploying a simple web app or a complex microservices architecture, Deployi handles it all with speed, security, and flexibility",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://deployi.me"),
};
