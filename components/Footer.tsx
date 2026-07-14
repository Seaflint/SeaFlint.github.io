export default function Footer() {
  return (
    <footer className="w-full py-xl bg-surface border-t border-outline-variant">
      <div className="max-w-7xl mx-auto px-gutter flex flex-col sm:flex-row items-center justify-between gap-md text-center">
        <div className="flex items-center gap-sm">
          <img src="/assets/logo.png" alt="SeaFlint" className="h-24 w-auto" />
        </div>
        <p className="font-body-sm text-on-surface-variant">© 2026 SeaFlint</p>
      </div>
    </footer>
  );
}
