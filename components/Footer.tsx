import { Github } from 'lucide-react';
import { Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Me</h3>
            <p className="text-sm">
              I'm Gaurav Wankhede, a passionate software developer specializing in
              machine learning and web development. Explore my projects and skills here.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="https://gaurav-wankhede.vercel.app/" className="hover:text-primary">Portfolio</Link></li>
              <li><Link href="https://gaurav-wankhede.vercel.app/Ask-to-Gaurav" className="hover:text-primary">Ask to Gaurav</Link></li>
              <li><Link href="https://gaurav-wankhede.vercel.app/projects" className="hover:text-primary">Projects</Link></li>
              <li><Link href="https://gaurav-wankhede.vercel.app/about" className="hover:text-primary">About</Link></li>
              <li><Link href="https://gaurav-wankhede.vercel.app/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link href="https://heroic-upsc.vercel.app/" className="hover:text-primary">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Me</h3>
            <ul className="space-y-2">
              <li>Email: <a href="mailto:gauravanilwankhede2002@gmail.com" className="hover:text-primary">gauravanilwankhede2002@gmail.com</a></li>
              <li>Phone: <a href="https://wa.me/918530341845" className="hover:text-primary">+91 8530341845</a></li>
              <li>Location: <a href="https://www.google.com/maps?q=Boisar,Maharashtra,India" className="hover:text-primary">Boisar, Palghar, Maharashtra, India</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.linkedin.com/in/wankhede-gaurav/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                <Linkedin size={24} className="md:w-8 md:h-8" />
              </a>
              <a href="https://github.com/Gaurav-Wankhede" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                <Github size={24} className="md:w-8 md:h-8" />
              </a>
              <a href="https://www.instagram.com/_gaurav_wankhede_/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                <Instagram size={24} className="md:w-8 md:h-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 <Link href="https://gaurav-wankhede.vercel.app" className="text-primary hover:underline">Gaurav Wankhede</Link>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;