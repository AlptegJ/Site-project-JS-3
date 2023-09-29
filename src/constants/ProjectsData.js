import { ProjState } from "../states/ProjState";
import { useRecoilState } from "recoil";

export function ProjectData({}) {
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
  ];

  if (projectsDisplay === "branding") {
    const filtered = [];
    return (
      <>
        {projectsData.map((project) => (
          <section key={project.title}>
            <h4>{project.category}</h4>
            <h2>{project.title}</h2>
            <p>{project.text}</p>
          </section>
        ))}
      </>
    );
  } else if (projectsDisplay === "web") {
    return <div>web</div>;
  } else if (projectsDisplay === "strategy") {
    return <div>strategy</div>;
  } else if (projectsDisplay === "testemonials") {
    return <div>Testemonials</div>;
  } else {
    return (
      <>
        {projectsData.map((project) => (
          <section key={project.title}>
            <h4>{project.category}</h4>
            <h2>{project.title}</h2>
            <p>{project.text}</p>
          </section>
        ))}
      </>
    );
  }
}
