import data from "@/data/site/data.json";
export function SiteFooter() {
  return <>
    <a className="back-to-top" href="#top">{data.backToTop}</a>
    <footer className="site-footer"><div className="container footer-inner"><p>© {new Date().getFullYear()} {data.footer}</p></div></footer>
  </>;
}
