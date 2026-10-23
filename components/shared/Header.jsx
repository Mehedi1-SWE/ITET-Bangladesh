import Link from "next/link";
import Navbar from "@/components/shared/Navbar";

function SocialIcon({ type }) {
  if (type === "facebook") return <svg viewBox="0 0 320 512" className="h-4 w-4" fill="currentColor"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>;
  if (type === "linkedin") return <svg viewBox="0 0 448 512" className="h-4 w-4" fill="currentColor"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>;
  if (type === "instagram") return <svg viewBox="0 0 448 512" className="h-4 w-4" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7z"/></svg>;
  return <svg viewBox="0 0 576 512" className="h-4 w-4" fill="currentColor"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zM232.145 337.591V175.185l142.739 81.205-142.739 81.201z"/></svg>;
}

export default function Header() {
  return (
    <>
      <div className="hidden xl:block">
        <div className="bg-secondary text-white text-[13px]">
          <div className="flex justify-between items-center gap-4 py-1.5 px-6">
            <div />
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <Link className="hover:text-primary" href="/member-portal">Members Portal</Link>
                <Link className="hover:text-primary" href="/client-portal">Advertiser Portal</Link>
                <Link className="hover:text-primary" href="/contact">Contact Us</Link>
              </div>
              <span className="mx-2">|</span>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/groups/itetbd/?ref=share&mibextid=KtfwRi" target="_blank" rel="noreferrer" className="hover:text-primary"><SocialIcon type="facebook" /></a>
                <a href="https://www.linkedin.com/in" target="_blank" rel="noreferrer" className="hover:text-primary"><SocialIcon type="linkedin" /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-primary"><SocialIcon type="instagram" /></a>
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="hover:text-primary"><SocialIcon type="youtube" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex xl:hidden bg-gray-50/90 px-4 py-2 justify-center border-b border-gray-100">
        <div className="flex items-center gap-4 text-xs font-medium text-gray-600">
          <a href="tel:+8801715771454" className="flex items-center gap-1.5 hover:text-primary transition-colors">+880 1715-771454</a>
          <span className="text-gray-300">|</span>
          <a href="mailto:info@itetbd.net" className="flex items-center gap-1.5 hover:text-primary transition-colors">info@itetbd.net</a>
        </div>
      </div>

      <header className="relative sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-xs transition-all duration-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            <Link className="flex items-center gap-2.5 sm:gap-3 group shrink-0" href="/">
              <div className="relative w-12 h-12 overflow-hidden">
                <img src="/images/logo/itet-logo.jpg" alt="ITET Logo" className="absolute inset-0 h-full w-full object-contain p-0.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-xs sm:text-sm lg:text-[15px] text-gray-900 tracking-tight leading-tight group-hover:text-primary transition-colors">
                  The Institution of Textile Engineers &amp; <br /> Technologists (ITET), Bangladesh
                </span>
              </div>
            </Link>
            <Navbar />
          </div>
        </div>
      </header>
    </>
  );
}
