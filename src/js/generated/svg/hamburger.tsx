import * as React from "react";

function SvgHamburger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name="\u30EC\u30A4\u30E4\u30FC 1"
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={14}
      viewBox="0 0 17 14"
      {...props}
    >
      <path
        fill="currentcolor"
        d="M0 0h17v1.8H0zM0 6.1h17v1.8H0zM0 12.2h17V14H0z"
      />
    </svg>
  );
}

export default SvgHamburger;
