import data from "@/data/site/data.json";
export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-inner"><p>© {new Date().getFullYear()} {data.footer}</p><a href="#top">{data.backToTop}</a></div></footer>;
}
