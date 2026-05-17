import { Button } from '@/components/ui/xbutton'

export const FloatingActions = () => (
  <>
    {/* Floating WhatsApp - desktop & mobile */}
    <a
      href="https://wa.me/905378678445"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white text-accent-foreground shadow-glow transition-base hover:scale-105 md:bottom-6"
    >
      <img src={'/whatsapp_logo.webp'} alt="WhatsApp" className="h-8 w-8 object-contain" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
      </span>
    </a>

    {/* Mobile sticky CTA */}
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-xl md:hidden">
      <Button variant="hero" size="lg" className="w-full" asChild>
        <a href="/contact">Get Free Consultation</a>
      </Button>
    </div>
  </>
)
