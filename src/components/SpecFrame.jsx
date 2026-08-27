const TickCorner = ({ className }) => (
  <span
    aria-hidden="true"
    className={`absolute w-3 h-3 border-[#2F6FED] dark:border-[#5C8CFF] ${className}`}
  />
);

/**
 * A bordered panel with blueprint-style corner ticks.
 * Reserved for the hero's signature spec panel so the motif
 * stays a single, deliberate moment rather than a repeated decoration.
 */
const SpecFrame = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <TickCorner className="top-0 left-0 border-t-2 border-l-2" />
    <TickCorner className="top-0 right-0 border-t-2 border-r-2" />
    <TickCorner className="bottom-0 left-0 border-b-2 border-l-2" />
    <TickCorner className="bottom-0 right-0 border-b-2 border-r-2" />
    {children}
  </div>
);

export default SpecFrame;
