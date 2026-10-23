import Link from "next/link";
import Navbar from "@/components/shared/Navbar";

function SocialIcon({ type }) {
  if (type === "facebook") {
    return <svg viewBox="0 0 320 512" height="1em" width="1em" fill="currentColor" aria-hidden="true"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>;
  }

  if (type === "linkedin") {
    return <svg viewBox="0 0 448 512" height="1em" width="1em" fill="currentColor" aria-hidden="true"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>;
  }

  if (type === "instagram") {
    return <svg viewBox="0 0 448 512" height="1em" width="1em" fill="currentColor" aria-hidden="true"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>;
  }

  return <svg viewBox="0 0 576 512" height="1em" width="1em" fill="currentColor" aria-hidden="true"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>;
}

export default function Header() {
  return (
    <>
      <div className="hidden xl:block">
        <div className="h-8 bg-secondary text-white text-[13px] leading-none">
          <div className="flex h-8 flex-col lg:flex-row justify-between items-start lg:items-center gap-4 px-4 lg:px-6">
            <div className="flex flex-col sm:flex-row flex-wrap items-center sm:items-center gap-4 sm:gap-6">
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                <span>House #6, Road #2, Sector #11, Uttara, Dhaka.</span>
              </span>
              <a href="mailto:info@itetbd.net" className="flex items-center gap-1.5 hover:text-primary">
                <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                <span>info@itetbd.net</span>
              </a>
              <a href="tel:+8801715771454" className="flex items-center gap-1.5 hover:text-primary">
                <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                <span>+880 1715-771454</span>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <Link className="hover:text-primary" href="/member-portal">Members Portal</Link>
                <Link className="hover:text-primary" href="/client-portal">Advertiser Portal</Link>
                <Link className="hover:text-primary" href="/contact">Contact Us</Link>
              </div>
              <span className="hidden sm:block mx-2">|</span>
              <div className="flex h-full items-center gap-3 text-[14px] leading-none">
                <a href="https://www.facebook.com/groups/itetbd/?ref=share&mibextid=KtfwRi" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-primary transition-transform duration-500"><SocialIcon type="facebook" /></a>
                <a href="https://www.linkedin.com/in" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-primary transition-transform duration-500"><SocialIcon type="linkedin" /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-primary transition-transform duration-500"><SocialIcon type="instagram" /></a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="text-white hover:text-primary transition-transform duration-500"><SocialIcon type="youtube" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex xl:hidden bg-gray-50/90 px-4 py-2 justify-center border-b border-gray-100">
        <div className="flex items-center gap-4 text-xs font-medium text-gray-600">
          <a href="tel:+8801715771454" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
            <span>+880 1715-771454</span>
          </a>
          <span className="text-gray-300">|</span>
          <a href="mailto:info@itetbd.net" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" strokeWidth="2"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
            <span>info@itetbd.net</span>
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-xs transition-all duration-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between sm:h-[72px]">
            <Link className="flex items-center gap-2.5 sm:gap-3 group shrink-0" href="/">
              <div className="relative w-12 h-12 sm:w-12 sm:h-12 overflow-hidden">
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
