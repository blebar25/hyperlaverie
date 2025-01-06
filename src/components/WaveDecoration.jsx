const WaveDecoration = () => {
  return (
    <div className="relative h-24 bg-gradient-to-b from-[#003D7D] to-[#004E9F] overflow-hidden">
      <div className="absolute inset-0" style={{ opacity: 1 }}>
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1440 74"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,37 C240,74 480,74 720,37 C960,0 1200,0 1440,37 L1440,74 L0,74 Z"
            fill="#004E9F"
          />
          <path
            d="M0,37 C240,74 480,74 720,37 C960,0 1200,0 1440,37"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
            pathLength="1"
            strokeDashoffset="0px"
            strokeDasharray="0.9855750387941953px 1px"
          />
        </svg>
      </div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse-dot" />
        <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-white rounded-full animate-pulse-dot animation-delay-1000" />
        <div className="absolute top-2/3 left-3/4 w-2 h-2 bg-white rounded-full animate-pulse-dot animation-delay-2000" />
      </div>
    </div>
  );
};

export default WaveDecoration;
