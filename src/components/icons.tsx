import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  title?: string;
};

function BaseIcon({ title, children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function AndroidIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M7 8.5 5.2 5.8M17 8.5l1.8-2.7M8 11.5h8M7.2 18V11.2a4.8 4.8 0 0 1 9.6 0V18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 18h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="9" cy="9" r="0.9" fill="currentColor" />
      <circle cx="15" cy="9" r="0.9" fill="currentColor" />
    </BaseIcon>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M12 4v9m0 0 3.5-3.5M12 13 8.5 9.5M5 19h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="m12 3 7 3v5c0 4.5-2.6 7.8-7 10-4.4-2.2-7-5.5-7-10V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m9.5 12.2 1.8 1.9 3.5-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="m15 15 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </BaseIcon>
  );
}

export function FilterIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M5 6h14M8 12h8M10.5 18h3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </BaseIcon>
  );
}

export function PhotosIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="4" y="5" width="16" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="m7 15 3.1-3.1a1.2 1.2 0 0 1 1.7 0L14 14l1.6-1.6a1.2 1.2 0 0 1 1.7 0L20 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="9" r="1.2" fill="currentColor" />
    </BaseIcon>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M9.5 11.5a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm5 0a2.4 2.4 0 1 0-2.4-2.4 2.4 2.4 0 0 0 2.4 2.4ZM4.8 18c.3-2.8 2-4.5 4.7-4.5s4.4 1.7 4.7 4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}

export function WorldIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3.5 12h17M12 3.5c2.1 2.3 3.2 4.9 3.2 8.5S14.1 17.7 12 20.5c-2.1-2.8-3.2-5.4-3.2-8.5S9.9 5.8 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </BaseIcon>
  );
}

export function BadgeCheckIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="m12 3 7 3v5c0 4.7-2.8 8.2-7 10-4.2-1.8-7-5.3-7-10V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m9.4 12.1 1.9 1.9 3.4-4.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.2" fill="currentColor" />
    </BaseIcon>
  );
}

export function TagIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M5.5 12.8 12.8 5.5H19v6.2l-7.3 7.3a1.8 1.8 0 0 1-2.5 0l-3.7-3.7a1.8 1.8 0 0 1 0-2.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="16.3" cy="7.7" r="1.1" fill="currentColor" />
    </BaseIcon>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M20 11.9a7.9 7.9 0 0 1-11.9 6.8L4 19l1.3-4.1A7.9 7.9 0 1 1 20 11.9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.6 8.9c.2-.5.5-.7.9-.7h.6c.2 0 .4.1.5.3l.9 1.6c.1.2.1.4 0 .5l-.6.7c-.1.1-.1.3 0 .4.5.9 1.2 1.7 2.1 2.2.1.1.3.1.4 0l.8-.6c.2-.1.4-.1.5 0l1.6.8c.2.1.3.3.3.5v.7c0 .4-.2.7-.6.9-.4.2-1 .2-1.9-.1-2.4-.8-4.5-2.8-5.5-5.2-.4-.9-.5-1.5-.1-1.9Z"
        fill="currentColor"
      />
    </BaseIcon>
  );
}
