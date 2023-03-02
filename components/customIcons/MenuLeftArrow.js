import React from "react";

export function MenuLeftArrow({ fill }) {
  return (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3255 5.94413L11.3442 5.94002L3.31434 5.94002L5.83864 8.47822C5.96225 8.60214 6.03005 8.77 6.03005 8.94619C6.03005 9.12238 5.96225 9.28908 5.83864 9.41329L5.44586 9.80756C5.32234 9.93148 5.15776 10 4.98225 10C4.80664 10 4.64195 9.93197 4.51844 9.80805L0.191319 5.46705C0.0673193 5.34264 -0.000485613 5.17692 2.17673e-06 5.00064C-0.000485644 4.82337 0.0673192 4.65756 0.191319 4.53334L4.51844 0.191948C4.64195 0.0681267 4.80654 4.1421e-07 4.98224 3.98849e-07C5.15776 3.83505e-07 5.32234 0.0682245 5.44585 0.191948L5.83863 0.58622C5.96224 0.709944 6.03005 0.87517 6.03005 1.05136C6.03005 1.22745 5.96224 1.38397 5.83863 1.50779L3.28586 4.06018L11.3344 4.06018C11.6961 4.06018 12 4.37291 12 4.73557L12 5.29321C12 5.65586 11.6871 5.94413 11.3255 5.94413Z"
        fill={fill}
      />
    </svg>
  );
}