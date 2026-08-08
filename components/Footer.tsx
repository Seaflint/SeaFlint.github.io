export default function Footer() {
  return (
    <footer className="w-full py-md bg-[#0D9488] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-gutter flex flex-col sm:flex-row items-center justify-between gap-sm text-center">
        <div className="flex items-center gap-sm">
          <img
            src="/assets/logo.png"
            alt="SeaFlint"
            className="h-10 w-auto brightness-0 invert saturate-150"
          />
        </div>
        <p className="font-body-sm text-white/70">© 2026 SeaFlint</p>
      </div>
    </footer>
  );
}
