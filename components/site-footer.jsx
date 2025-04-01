import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2025 TravelBuddy. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Terms
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Privacy
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
} 