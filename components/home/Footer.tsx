export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover" href="mailto:">
          Email
        </a>
        <a className="link link-hover">Instagram</a>
        <a className="link link-hover">TikTok</a>
        <a className="link link-hover">Discord</a>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>
    </footer>
  );
}
