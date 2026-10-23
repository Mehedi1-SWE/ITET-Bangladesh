export default function SupportInquiries() {
  return (
    <section className="bg-white py-12 md:py-16 border-t border-gray-200">
      <div className="mx-[5%] md:mx-[5%] lg:mx-[5%] xl:mx-[6%] 2xl:mx-[8%]">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0Z" />
              <path d="M20 3v4M22 5h-4M4 17v2M5 18H3" />
            </svg>
            <span>Support &amp; Inquiries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary tracking-tight">
            Have Questions? <span className="text-primary">Contact the Secretariat</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">Our administrative and membership desk is available to assist with your inquiries.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" />
      </div>
    </section>
  );
}
