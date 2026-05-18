import { Button } from '../ui/xbutton'

type LinkType = {
  link: { appearance: string; url: string; label: string }
}

interface CtaHeroProp {
  links: LinkType[]
}

export default function CtaHero(props: CtaHeroProp) {
  const { links } = props
  return (
    <>
      {links?.map(({ link }, i) => {
        if (link?.appearance === 'default') {
          return (
            <Button variant="hero" size="lg" asChild key={i}>
              <a href={link?.url || '#'}>{link?.label}</a>
            </Button>
          )
        }
        return (
          <Button variant="outline" size="lg" asChild key={i}>
            <a href={link?.url || ''}> {link?.label}</a>
          </Button>
        )
      })}
    </>
  )
}
