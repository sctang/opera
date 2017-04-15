import React, { PropTypes } from 'react';

/* eslint-disable max-len, arrow-body-style */
const SVGDoorThermostatSwitch = ({ size, dX, dY }) => {
  return size === 'xs' ? null : (
    <g
      fill="none"
      fillRule="evenodd"
      transform={`translate(${115 - dX * 0.6} ${180 - dY * 0.6})`}
    >
      <rect fillOpacity=".25" fill="#484848" width="122" height="245" rx="4" />
      <path d="M4 245V4.88c0-.572.29-.88.88-.88h116.24c.59 0 .88.308.88.88V245" stroke="#956639" strokeWidth="4" fill="#8C6239" />
      <path d="M6 8l2-2v239l-2-2h114l-2 2V6l2 2H6zm0-2h114v239H6V6z" fill="#815A34" />
      <path d="M8.143 188.216H3.857c-.261 0-.857-.373-.857-.853V165.17c0-.48.596-.853.857-.853h4.286c.26 0 .857.373.857.853v22.192c0 .48-.597.853-.857.853" fill="#79868E" />
      <path d="M8.167 188.216H4.833c-.336 0-.833-.373-.833-.853V165.17c0-.48.497-.853.833-.853h3.334c.336 0 .833.373.833.853v22.192c0 .48-.497.853-.833.853" fill="#8B9BA4" />
      <path d="M3.857 86.69c-.261 0-.857-.373-.857-.853V63.646c0-.48.596-.854.857-.854h4.286c.26 0 .857.374.857.854v22.191c0 .48-.597.854-.857.854H3.857z" fill="#79868E" />
      <path d="M4.833 86.69c-.336 0-.833-.373-.833-.853V63.646c0-.48.497-.854.833-.854h3.334c.336 0 .833.374.833.854v22.191c0 .48-.497.854-.833.854H4.833z" fill="#8B9BA4" />
      <g transform="translate(89.021 116)">
        <ellipse fill="#7A5531" cx="10.979" cy="11" rx="10" ry="10" />
        <g transform="translate(4.979)">
          <ellipse stroke="#979797" strokeWidth="2" fill="#4A4A4A" cx="9" cy="9" rx="9" ry="9" />
          <path d="M14 9A5 5 0 1 1 4 9a5 5 0 0 1 10 0" fill="#666" />
          <circle stroke="#0F3" strokeLinecap="round" strokeDasharray="1,1.299999952316284" cx="9" cy="9" r="3" />
        </g>
      </g>
      <g transform="translate(136 125)">
        <path d="M18.421 17H1.58C.599 17 0 16.39 0 15.4V2.6C0 1.61.6 1 1.579 1H18.42c.981 0 1.58.61 1.58 1.6v12.8c0 .99-.6 1.6-1.579 1.6" fillOpacity=".25" fill="#484848" />
        <path d="M19.421 16H2.58C1.599 16 1 15.39 1 14.4V1.6C1 .61 1.6 0 2.579 0H19.42C20.401 0 21 .61 21 1.6v12.8c0 .99-.6 1.6-1.579 1.6" fill="#E6E6E6" />
        <rect fill="#D8D8D8" x="3" y="2" width="16" height="12" rx="2" />
        <path d="M13.875 12C12.733 12 12 11.386 12 10.4V5.6c0-.986.733-1.6 1.875-1.6h1.25C16.266 4 17 4.614 17 5.6v4.8c0 .986-.734 1.6-1.875 1.6h-1.25zm-5.75 0h-1.25C5.733 12 5 11.386 5 10.4V5.6C5 4.614 5.733 4 6.875 4h1.25C9.266 4 10 4.614 10 5.6v4.8c0 .986-.734 1.6-1.875 1.6" stroke="#CECECE" fill="#E6E6E6" />
      </g>
      <path d="M159 104.706c0 8.578-6.716 15.294-14.706 15.294-8.578 0-15.294-6.716-15.294-15.294C129 96.716 135.716 90 144.294 90c7.99 0 14.706 6.716 14.706 14.706" fillOpacity=".25" fill="#333" />
      <path d="M147.275 117c-8.007 0-14.275-6.268-14.275-14.275C133 95.268 139.268 89 147.275 89 154.732 89 161 95.268 161 102.725c0 8.007-6.268 14.275-13.725 14.275z" stroke="#969696" strokeWidth="2" fill="#333" />
      <path d="M153 103.24c0 3.074-2.686 5.76-5.76 5.76-3.554 0-6.24-2.686-6.24-5.76 0-3.554 2.686-6.24 6.24-6.24 3.074 0 5.76 2.686 5.76 6.24" fill="#29ABE2" />
      <path d="M142 96.316V93.55h.5v.52c.263-.387.585-.581.967-.581.238 0 .428.076.57.228.142.152.213.356.213.613v1.986h-.499v-1.823c0-.206-.03-.352-.09-.44-.06-.087-.16-.131-.298-.131-.305 0-.594.201-.864.604v1.79H142zm5.238-.089a3.03 3.03 0 0 1-.86.153c-.405 0-.735-.135-.991-.406s-.384-.622-.384-1.053c0-.42.113-.764.338-1.032a1.08 1.08 0 0 1 .865-.403c.333 0 .59.12.772.357.182.238.272.576.272 1.014l-.002.155h-1.736c.073.657.393.986.96.986.208 0 .463-.056.766-.168v.397zm-1.703-1.592h1.214c0-.514-.191-.772-.573-.772-.383 0-.597.258-.641.772zm3.307 1.745c-.228 0-.505-.053-.831-.16v-.461c.326.163.61.244.851.244a.54.54 0 0 0 .357-.117.365.365 0 0 0 .142-.293c0-.172-.132-.313-.398-.425l-.291-.125c-.43-.18-.646-.44-.646-.777 0-.241.085-.431.254-.57.17-.138.403-.207.699-.207.153 0 .343.021.57.064l.104.02v.418c-.28-.083-.5-.125-.664-.125-.321 0-.482.117-.482.352 0 .15.122.278.365.382l.24.101c.273.116.465.238.579.366a.7.7 0 0 1 .17.48.74.74 0 0 1-.287.599c-.19.156-.435.234-.732.234zm2.741 0c-.253 0-.45-.073-.592-.22-.142-.145-.213-.348-.213-.608v-1.625h-.345v-.377h.345v-.502l.499-.048v.55h.72v.377h-.72v1.533c0 .362.155.543.466.543.066 0 .146-.011.24-.033v.346a1.536 1.536 0 0 1-.4.064z" fill="#F2F2F2" />
    </g>
  );
};
/* eslint-enable max-len, arrow-body-style */

SVGDoorThermostatSwitch.propTypes = {
  size: PropTypes.string.isRequired,
  dX: PropTypes.number.isRequired,
  dY: PropTypes.number.isRequired
};

export default SVGDoorThermostatSwitch;
