import type { SVGProps } from "react";

export const Icons = {
  nextjs: (props: SVGProps<SVGSVGElement>) => (
    <svg
      aria-label="Next.js"
      role="img"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M64 0C28.653 0 0 28.653 0 64s28.653 64 64 64c35.347 0 64-28.653 64-64S99.347 0 64 0zm0 119.2C33.176 119.2 8.8 94.824 8.8 64S33.176 8.8 64 8.8s55.2 24.376 55.2 55.2-24.376 55.2-55.2 55.2z"
      />
      <path
        fill="currentColor"
        d="M74.143 42.112L52.682 78.498c-.468.802-.21 1.79.591 2.258.261.152.559.228.857.228.583 0 1.138-.344 1.396-.902L76.99 49.375c.468-.802.21-1.79-.591-2.258-.79-.46-1.77-.206-2.256.595zM89.263 42.102v37.495c0 .963.78 1.743 1.743 1.743.962 0 1.743-.78 1.743-1.743V42.102c0-.963-.78-1.743-1.743-1.743-.964 0-1.744.78-1.744 1.743z"
      />
    </svg>
  ),
  supabase: (props: SVGProps<SVGSVGElement>) => (
    <svg
      aria-label="Supabase"
      role="img"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      <path d="M12.03 0C5.385 0 0 4.237 0 9.473c0 3.318 2.505 6.22 6.042 7.942L12.03 24l5.988-6.585c3.537-1.722 6.042-4.624 6.042-7.942C24.06 4.237 18.675 0 12.03 0zm-2.11 14.53v-5.06l4.22 2.53-2.11 1.25z" />
    </svg>
  ),
  flutter: (props: SVGProps<SVGSVGElement>) => (
    <svg
      aria-label="Flutter"
      role="img"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      <path d="M13.498 0l-9.02 9.02 4.493 4.493L22.464 0h-8.966zm.002 10.023l-4.512 4.51L13.5 19.04l9.02-9.018-4.513-4.51-4.497 4.51z" />
    </svg>
  ),
};
