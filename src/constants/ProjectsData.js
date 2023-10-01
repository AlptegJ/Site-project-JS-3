import { ProjState } from "../states/ProjState";
import { useRecoilState } from "recoil";

export function ProjectData() {
  const [projectsDisplay, setProjectsDisplay] = useRecoilState(ProjState);

  const projectsData = [
    {
      category: "branding",
      title: "Rebranding and Logo Redesign for Upstart Innovations",
      text: "Upstart Innovations, a tech startup, approached TechWeavers for a complete rebranding. The project encompassed crafting a fresh brand identity, redesigning their logo, and developing marketing collateral. The rebrand not only boosted their market visibility but also garnered positive attention from investors",
    },
    {
      category: "branding",
      title: "E-Commerce Transformation for LuxeGoods Co.",
      text: "TechWeavers partnered with LuxeGoods Co., a luxury retail brand, to revamp their e-commerce platform. The project involved creating a visually stunning website with a seamless user experience, including a user-friendly checkout process and integrated payment gateways. The result? A 40% increase in online sales within the first quarter.",
    },
    {
      category: "web",
      title: "Non-Profit Website Overhaul for Community Connect",
      text: "Community Connect, a non-profit organization, needed a modern website to better engage with donors and volunteers. TechWeavers revamped their website with responsive design, intuitive navigation, and improved content management. The result was a 50% increase in online donations and volunteer sign-ups.",
    },
    {
      category: "web",
      title: "Mobile App Development for HealthTech Solutions",
      text: "TechWeavers developed a custom mobile app for HealthTech Solutions, a healthcare startup. The app allowed patients to schedule appointments, access medical records, and receive real-time health alerts. The project received widespread acclaim and contributed to a 30% increase in patient retention.",
    },
    {
      category: "strategy",
      title: "Comprehensive Digital Strategy for Regional Tourism Board",
      text: "A regional tourism board sought TechWeavers' expertise in developing a comprehensive digital strategy. This involved optimizing their online presence, enhancing social media engagement, and creating engaging content. As a result, the region experienced a 20% increase in tourist visits and a 15% rise in positive online reviews.",
    },
    {
      category: "strategy",
      title: "Educational Platform for EdTech Innovators",
      text: "TechWeavers collaborated with an EdTech startup to create an interactive educational platform. The project included developing a robust learning management system, designing engaging course materials, and implementing gamification elements. The platform's success was evident through a 25% increase in user engagement and improved student performance",
    },
    {
      category: "testemonial",
      title: "LuxeGoods Co.",
      text: "TechWeavers transformed our online business. Their expertise in web development and design helped us create a stunning e-commerce platform. Our online sales increased significantly, and our customers love the user-friendly experience. TechWeavers is a true partner in our success.",
      person: "John Smith, CEO of LuxeGoods Co.",
    },
    {
      category: "testemonial",
      title: "Upstart Innovations",
      text: "TechWeavers took our startup's rebranding to a whole new level. Their creative team completely revamped our brand identity and logo, giving us a fresh and modern look. The positive response from our customers and investors has been overwhelming. TechWeavers is the go-to agency for brand transformation.",
      person: "Sarah Johnson, Founder of Upstart Innovations",
    },
    {
      category: "testemonial",
      title: "Community Connect",
      text: "Our non-profit organization needed a modern website to connect with our community better, and TechWeavers delivered beyond our expectations. They not only redesigned our website but also improved its functionality. The increase in online donations and volunteer sign-ups speaks volumes about their expertise.",
      person: "Emily Davis, Executive Director of Community Connect",
    },
  ];

  if (projectsDisplay === "branding") {
    return (
      <>
        {projectsData.map((project) =>
          project.category === "branding" ? (
            <section key={project.title}>
              <h4>{project.category}</h4>
              <h2>{project.title}</h2>
              <p>{project.text}</p>
            </section>
          ) : (
            <></>
          )
        )}
      </>
    );
  } else if (projectsDisplay === "web") {
    return (
      <>
        {projectsData.map((project) =>
          project.category === "web" ? (
            <section key={project.title}>
              <h4>{project.category}</h4>
              <h2>{project.title}</h2>
              <p>{project.text}</p>
            </section>
          ) : (
            <></>
          )
        )}
      </>
    );
  } else if (projectsDisplay === "strategy") {
    return (
      <>
        {projectsData.map((project) =>
          project.category === "strategy" ? (
            <section key={project.title}>
              <h4>{project.category}</h4>
              <h2>{project.title}</h2>
              <p>{project.text}</p>
            </section>
          ) : (
            <></>
          )
        )}
      </>
    );
  } else if (projectsDisplay === "testemonials") {
    return (
      <>
        {projectsData.map((project) =>
          project.category === "testemonial" ? (
            <section key={project.title}>
              <h4>{project.category}</h4>
              <h2>{project.title}</h2>
              <p>{project.text}</p>
              <h2>{project.person}</h2>
            </section>
          ) : (
            <></>
          )
        )}
      </>
    );
  } else {
    return <h2>Pick a category!</h2>;
  }
}
