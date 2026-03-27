import ContactForm from "../ContactForm";
import SectionHeading from "../SectionHeading";

const CtaSection = () => {
  return (
    <section className="section-padding section-light">
      <div className="p-2">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading
              title="Ready to Partner?"
              subtitle="Looking to establish or scale your institution? Partner with EduGlobe Services FZ LLC for complete institutional solutions."
              centered={false}
            />
            <div className="space-y-4 text-muted-foreground">
              <p>Whether you're establishing a new university, scaling a training institute, or optimizing an existing college — we're your strategic partner.</p>
              <p>Fill out the inquiry form and our team will connect with you within 24 hours.</p>
            </div>
          </div>
          <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
            <h3 className="font-heading text-xl font-semibold mb-6 text-foreground">Quick Inquiry</h3>
            {/* ContactForm component will be added here */}
            <ContactForm/>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;