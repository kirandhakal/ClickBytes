import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Kiran Dhakal. Built with care. Tested with curiosity.</p>
        <Link href="/#">Back to top ↑</Link>
      </div>
    </footer>
  );
}
