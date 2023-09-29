import { SocialLinks } from "../constants/SocialsLinks";

export function SocMedComponent() {
  return (
    <aside className=" flex flex-col justify-center ml-5 basis-3/12 ">
      <div className="flex flex-col items-start ">
        <SocialLinks />
      </div>
    </aside>
  );
}
