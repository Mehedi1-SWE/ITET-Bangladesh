import AboutHero from "@/components/shared/AboutHero";
import SupportInquiries from "@/components/shared/SupportInquiries";

export const metadata = { title: "Mission & Vision | ITET Bangladesh | ITET Bangladesh" };

export default function MissionVision() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero meta="Purpose & Goals" before="Strategic Vision" accent="& Core Mission" after="of ITET" description="Our strategic vision, institutional objectives, and steadfast commitment to advancing Bangladesh's textile engineering profession." />

      <section className="bg-white py-10 md:py-14">
        <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
          <div className="mx-auto max-w-6xl space-y-7">
            <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
              <div className="border-b border-gray-100 bg-gradient-to-r from-orange-50 to-white px-6 py-5 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Our Vision</p>
              </div>
              <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-2">
                <div>
                  <h2 className="font-manuale text-2xl font-semibold text-secondary">আমাদের দৃষ্টিভঙ্গি</h2>
                  <p className="mt-4 text-sm leading-8 text-gray-600">টেক্সটাইল ইঞ্জিনিয়ারিং-এ অগ্রগতি সাধন, শিল্পের মানদণ্ড নির্ধারণ এবং উদ্ভাবন, শিক্ষা ও নৈতিক চর্চার মাধ্যমে ভবিষ্যৎ প্রজন্মকে অনুপ্রাণিত করে—বস্ত্র পেশাজীবীদের একটি বিশ্বব্যাপী স্বীকৃত প্রতিষ্ঠান হিসেবে প্রতিষ্ঠিত হওয়া।</p>
                </div>
                <div className="border-t border-gray-100 pt-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                  <h2 className="font-manuale text-2xl font-semibold text-secondary">Our Vision</h2>
                  <p className="mt-4 text-sm leading-8 text-gray-600">To be a globally recognized institution of textile professionals—leading advancements in textile engineering, shaping industry standards, and inspiring future generations through innovation, education, and ethical practice.</p>
                </div>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
              <div className="border-b border-gray-100 bg-gradient-to-r from-orange-50 to-white px-6 py-5 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Our Mission</p>
              </div>
              <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-2">
                <div>
                  <h2 className="font-manuale text-2xl font-semibold text-secondary">আমাদের লক্ষ্য</h2>
                  <p className="mt-4 text-sm leading-8 text-gray-600">বাংলাদেশসহ বিশ্বব্যাপী বস্ত্রশিল্পে উদ্ভাবন, টেকসই উন্নয়ন এবং উৎকর্ষ সাধনে অবদান রাখতে বস্ত্র প্রকৌশলী ও প্রযুক্তিবিদদের ধারাবাহিক পেশাগত উন্নয়ন, জ্ঞান বিনিময় এবং কৌশলগত অংশীদারিত্বের মাধ্যমে ক্ষমতায়ন করা।</p>
                </div>
                <div className="border-t border-gray-100 pt-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                  <h2 className="font-manuale text-2xl font-semibold text-secondary">Our Mission</h2>
                  <p className="mt-4 text-sm leading-8 text-gray-600">To empower textile engineers and technologists through continuous professional development, knowledge sharing, and strategic partnerships — driving innovation, sustainability, and excellence in the textile industry of Bangladesh and beyond.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <SupportInquiries />
    </div>
  );
}
