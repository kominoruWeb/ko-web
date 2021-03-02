import * as React from "react";

function SvgHamburger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name="\u30EC\u30A4\u30E4\u30FC 1"
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={10}
      viewBox="0 0 28 10"
      {...props}
    >
      <path fill="currentcolor" d="M0 0h28v1.8H0zM0 8.2h28V10H0z" />
    </svg>
  );
}

export default SvgHamburger;
