import React from "react";
import SectionHeading from "../SectionHeading";

// Custom Icons
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-10 7L2 7"></path>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MessageCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const contactDetails = [
  {
    icon: MapPinIcon,
    label: "Office Location",
    value: [
      "Head Office: EduGlobe Services FZ-LLC",
      "Ras Al Khaimah(RAK), UAE.",
      "Coordinating Office: Unit No. 209-04, Al Kazim, ",
      "2nd floor, Hor Alz Anz, Dubai, UAE(Near Al Qiyadah Metro Station).",
    ],
  },
  {
    icon: MailIcon,
    label: "Email",
    value: "business@eduglobe.ae",
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "+971 528313726",
  },
  {
    icon: MessageCircleIcon,
    label: "WhatsApp",
    value: "+971 528313726",
  },
];

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <SectionHeading title="Get in Touch" centered={false} />
      <div className="space-y-4">
        {contactDetails.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.label}
              className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/30 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary">
                <div className="transition-all duration-300 group-hover:text-white">
                  <IconComponent />
                </div>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.label}</p>
                <div className="text-sm sm:text-base font-semibold text-foreground space-y-1">
  {Array.isArray(item.value) ? (
    item.value.map((line, index) => (
      <p key={index}>{line}</p>
    ))
  ) : (
    <p>{item.value}</p>
  )}
</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;