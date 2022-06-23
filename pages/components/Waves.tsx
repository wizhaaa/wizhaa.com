const Waves = () => {
  return (
    <div className="wrapper">
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
          <use href="#gentle-wave" x="48" y="0" fill="#f7e8dc" />
          <use href="#gentle-wave" x="48" y="3" fill="#e3cab8" />
          <use href="#gentle-wave" x="48" y="7" fill="#c59b7c" />
        </g>
      </svg>
    </div>
  );
};

export default Waves;
