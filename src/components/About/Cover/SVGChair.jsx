import React, { PropTypes } from 'react';

/* eslint-disable max-len */
const SVGChair = ({ dX, dY }) => {
  const x = 422 + 15 - dX * 1.1;
  const y = 161 + 180 - dY * 1.1;
  return (
    <g fill="none" fillRule="evenodd" transform={`translate(${x} ${y})`}>
      <path d="M38.845 130.315c-1.26-.526-6.428-.996-7-1-7.675-1.101-14.626-1.49-15-1-3.357-.738-3.814.649-1 3h1c.387.245-8.85 1.378-11 2-3.263.843-1.604 2.223 0 2 4.734-.14 11.387.43 11 0 .387.43-11.087 3.151-11 7-.087 4.178 56.06 2.773 56-1 .06-2.38-9.077-4.734-9-5-.077.266 2.144-.384 10 0 4.677.174 2.02-3.724 0-4-5.117-1.05-12.615-.755-13-1l4-1c3.744-1.787 3.51-3 2-3-1.682.252-10.632 1.49-17 3z" fillOpacity=".25" fill="#151718" />
      <path d="M8 132c0 1.105-.896 2-2.222 2-.883 0-1.778-.895-1.778-2s.895-2 1.778-2c1.326 0 2.222.895 2.222 2zm58-1c0 1.105-.896 2-2.222 2-.883 0-1.778-.895-1.778-2s.895-2 1.778-2c1.326 0 2.222.895 2.222 2m-55-7c0 1.105-.672 2-1.5 2-.829 0-1.5-.895-1.5-2s.671-2 1.5-2c.828 0 1.5.895 1.5 2m51 0c0 1.105-.672 2-1.5 2-.829 0-1.5-.895-1.5-2s.671-2 1.5-2c.828 0 1.5.895 1.5 2" fill="#373E42" />
      <path d="M18.004 52.787L22.303 75l4.7-.787L22.706 52zM46.678 52l-4.3 22.213L47.08 75l4.299-22.213z" fill="#CCC" />
      <path d="M53.918 53H16.082c-5.512 0-10.67-4.647-11.948-11.042l-3.983-26.5C-.908 7.23 3.68 0 11.104 0h47.792C66.32 0 70.908 7.23 69.85 15.458l-3.983 26.5C64.588 48.353 59.43 53 53.918 53" fill="#2A2A2A" />
      <path d="M52.156 49H17.844c-5.18 0-9.896-4.296-10.784-9.8L3.139 14.156C2.17 6.684 6.364 0 12.942 0h44.116c6.578 0 10.772 6.684 9.803 14.156L62.94 39.2c-.888 5.504-5.604 9.8-10.784 9.8" fill="#333" />
      <path d="M61.538 87H8.462c-1.517 0-3.237-1.431-3.66-3l-.458-2.5c-1.218-4.087.915-7.5 4.575-7.5h52.162c3.66 0 5.793 3.413 4.575 7.5L65.2 84c-.424 1.569-2.144 3-3.66 3" fill="#2B2B2B" />
      <path d="M60.555 85H9.445c-1.602 0-3.267-1.211-3.65-2.87l-.457-1.913C4.146 76.887 6.21 74 9.902 74h50.196c3.692 0 5.756 2.888 4.564 6.217l-.457 1.913c-.383 1.659-2.048 2.87-3.65 2.87" fill="#333" />
      <path fill="#8B9BA4" d="M32 112h6V87h-6z" />
      <path d="M33 113.946v5.523c0 .551-.283.96-.464.92l-24.607 4.603c-.509.075-.929-.379-.929-.92v-.921c0-.65.228-1.03.464-.92l24.607-9.205c.432-.142.929.324.929.92m4 0v5.523c0 .551.283.96.464.92l24.607 4.603c.509.075.929-.379.929-.92v-.921c0-.65-.228-1.03-.464-.92l-24.607-9.205c-.432-.142-.929.324-.929.92" fill="#373E42" />
      <path d="M32.524 123h4.952c.896 0 1.524-.864 1.524-2.2V112h-8v8.8c0 1.336.628 2.2 1.524 2.2" fill="#464E53" />
      <path d="M33 115.97v5.525c0 .583-.326 1.062-.938 1.382l-28.124 9.668c-.453.14-.938-.238-.938-.92v-.921c0-.564.262-1.002.469-1.382l28.593-14.272c.365-.192.938.181.938.92m4-.031v5.344c0 .564.326 1.027.938 1.336l28.124 9.353c.453.135.938-.23.938-.89v-.891c0-.545-.262-.969-.469-1.336l-28.594-13.807c-.364-.185-.937.176-.937.89" fill="#373E42" />
    </g>
  );
};
/* eslint-enable max-len */

SVGChair.propTypes = {
  dX: PropTypes.number.isRequired,
  dY: PropTypes.number.isRequired
};

export default SVGChair;
