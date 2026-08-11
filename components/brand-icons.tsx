import type { SVGProps } from "react"

/**
 * Brand icons (GitHub, LinkedIn, YouTube).
 * lucide-react v1.x removed brand marks, so these are provided here.
 * They accept the same `className` sizing convention as lucide icons.
 */

export function GithubIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.575.106.785-.25.785-.556 0-.274-.01-1.002-.015-1.967-3.196.695-3.87-1.54-3.87-1.54-.523-1.328-1.277-1.682-1.277-1.682-1.043-.713.08-.699.08-.699 1.153.081 1.76 1.184 1.76 1.184 1.026 1.758 2.692 1.25 3.348.956.104-.743.401-1.25.73-1.538-2.552-.29-5.236-1.276-5.236-5.68 0-1.255.448-2.281 1.183-3.086-.119-.29-.513-1.46.112-3.045 0 0 .965-.309 3.163 1.179a10.98 10.98 0 0 1 2.879-.387c.977.004 1.961.132 2.88.387 2.196-1.488 3.16-1.18 3.16-1.18.626 1.586.232 2.756.114 3.046.737.805 1.182 1.831 1.182 3.086 0 4.415-2.688 5.386-5.248 5.671.413.355.78 1.056.78 2.129 0 1.537-.014 2.776-.014 3.153 0 .309.207.668.79.555A11.503 11.503 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

export function LinkedinIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  )
}

export function YoutubeIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81ZM9.6 15.6V8.4l6.24 3.6L9.6 15.6Z" />
    </svg>
  )
}
