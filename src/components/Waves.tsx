const Waves = () => {
  return (
    <svg
      className="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className="parallax">
        <use href="#gentle-wave" x="48" y="5" fill="#7d7c7c" />
        <use href="#gentle-wave" x="48" y="7" fill="#bababa" />
        <use href="#gentle-wave" x="48" y="10" fill="#2f2f2f" />
      </g>
    </svg>
  );
};

export default Waves;
