import data from "@/data/site/data.json";
import { BackToTop } from "./back-to-top";

export function SiteFooter() {
  return <>
    <BackToTop label={data.backToTop} />
    <footer className="site-footer"><div className="container footer-inner"><p>© {new Date().getFullYear()} {data.footer}</p></div></footer>
  </>;
}
