import Head from "components/Heading/Head";
import SiteData from "./../requests/content";

export default function Home() {
  return (
    <div className="max-w-full">
      <Head name={SiteData.getName()} title={SiteData.getTitle()} />
    </div>
  );
}
