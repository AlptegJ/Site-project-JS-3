export function SocialLinks() {
  const links = [
    {
      prefix: "https://www.",
      name: "Facebook",
      suffix: ".com",
    },
    {
      prefix: "https://www.",
      name: "Instagram",
      suffix: ".com",
    },
    {
      prefix: "https://www.",
      name: "Github",
      suffix: ".com",
    },
    {
      prefix: "https://www.",
      name: "LinkedIn",
      suffix: ".com",
    },
  ];
  return (
    <>
      {links.map((link) => (
        <button
          key={link.name}
          href={link.prefix + link.name + link.suffix}
          onClick={() => {
            console.log(link);
          }}
        >
          {link.name}
        </button>
      ))}
    </>
  );
}
