const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = true, 
  light = false 
}) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${
        light ? "text-primary-foreground" : "text-foreground"
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-3xl leading-relaxed ${
          centered ? "mx-auto" : ""
        } ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 rounded-full bg-gold ${
        centered ? "mx-auto" : ""
      }`} />
    </div>
  );
};

export default SectionHeading;