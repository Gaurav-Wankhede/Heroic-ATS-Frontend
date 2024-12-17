"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

interface Button {
  variant?: string;
}

const Navbar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const routes = [
    { path: 'https://gaurav-wankhede.vercel.app/', label: 'Portfolio' },
    { path: 'https://gaurav-wankhede.vercel.app/projects', label: 'Projects' },
    { path: 'https://gaurav-wankhede.vercel.app/about', label: 'About' },
    { path: 'https://gaurav-wankhede.vercel.app/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-transparent flex justify-center">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4 flex justify-center">
        <div className="inline-flex flex-wrap justify-center items-center bg-background/40 backdrop-filter backdrop-blur-xl border border-gray-200/30 dark:border-none rounded-full shadow-lg dark:shadow-white/25 px-3 sm:px-6 py-2">
          <Link href="/" className="text-xl sm:text-2xl font-bold mr-2 sm:mr-4">
            GW
          </Link>
          <div className="flex flex-wrap items-center justify-center">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={`text-sm sm:text-base hover:text-primary transition-colors px-2 py-1 sm:px-3 sm:py-2 ${
                  pathname === route.path
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground'
                }`}
              >
                {route.label}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full bg-white/10 backdrop-filter backdrop-blur-lg ml-2 sm:ml-4"
            >
              <SunIcon className="h-4 w-4 sm:h-5 sm:w-5 rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-100" />
              <MoonIcon className="absolute h-4 w-4 sm:h-5 sm:w-5 rotate-90 scale-0 transition-all dark:rotate-90 dark:scale-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;