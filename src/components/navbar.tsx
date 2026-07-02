import { Button } from "@/components/ui/button";

const navItems = ["How it Works", "Why This Approach", "Contact"];

const languages = ["EN", "ES"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="text-lg font-semibold tracking-tight text-slate-900">
          rbqe.ai
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center rounded-full border border-slate-200 p-1 sm:flex">
            {languages.map((language, index) => (
              <button
                key={language}
                type="button"
                className={`rounded-full px-3 py-1 text-sm font-medium ${
                  index === 0 ? "bg-slate-900 text-white" : "text-slate-700"
                }`}
              >
                {language}
              </button>
            ))}
          </div>

          <Button variant="default" size="sm" className="rounded-full">
            Book a Call
          </Button>
        </div>
      </div>
    </header>
  );
}
