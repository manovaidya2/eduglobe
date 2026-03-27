import SectionHeading from "../SectionHeading";

// Globe Icon
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const audiences = [
  "Universities", "Colleges", "Schools", "Boards & Associations", "Training Institutes",
];

const WhoWeServe = () => {
  return (
    <section className="section-padding hero-gradient">
      <div className="">
        <SectionHeading title="Who We Serve" light />
        <div className="flex flex-wrap justify-center gap-4">
          {audiences.map((audience, index) => (
            <div
              key={audience}
              className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur px-6 py-4 rounded-lg border border-primary-foreground/20"
            >
              <GlobeIcon />
              <span className="text-primary-foreground font-semibold">{audience}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;