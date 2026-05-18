import { getCachedGlobal } from '@/utilities/getGlobals'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()
  const { description, columns, contact, bottomBar } = footerData || {}

  return (
    <footer className="bg-primary text-primary-foreground w-full">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">{description}</p>
          </div>
          {columns?.map((quickLinks, i) => (
            <div key={quickLinks.id}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-primary-foreground">
                {quickLinks?.label}
              </h4>
              <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
                {quickLinks?.quickLinks?.map(({ link, id }, i) => (
                  <li key={id}>
                    <CMSLink
                      className="text-primary-foreground/70 hover:text-accent transition-base"
                      key={i}
                      {...link}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary-foreground">
              {contact?.title}
            </h4>
            <div className="mt-5 space-y-2 text-sm text-primary-foreground/80">
              <a
                href={`mailto:${contact?.email?.trim()}`}
                className="flex items-center gap-2 transition-base hover:text-accent"
              >
                <Mail className="h-4 w-4" /> {contact?.email}
              </a>
              <a
                href={`tel:${contact?.phone?.replaceAll(' ', '')?.replaceAll('(', '')?.replaceAll(')', '')}`}
                className="flex items-center gap-2 hover:text-accent transition-base"
              >
                <Phone className="h-4 w-4" /> {contact?.phone}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>{contact?.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                <span>{contact?.workingHours} </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/60 md:flex-row">
          <p>
            © {new Date().getFullYear()} {bottomBar?.copyrightText}
          </p>
          <div className="flex items-center gap-4">
            {bottomBar?.legalLinks?.map(({ link }, i) => {
              return (
                <CMSLink
                  className="text-primary-foreground/70 transition-base hover:text-accent"
                  key={i}
                  {...link}
                />
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
