import React from 'react'

import type { Page } from '@/payload-types'

import { HighImpactHero } from '@/heros/HighImpact'
import { LowImpactHero } from '@/heros/LowImpact'
import { MediumImpactHero } from '@/heros/MediumImpact'

import { HighImpactV2Hero } from '@/heros/HighImpactV2'
import { MediumImpactV2Hero } from '@/heros/MediumImpactV2'
import { LowImpactV2Hero } from '@/heros/LowImpactV2'

const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
  highImpactv2: HighImpactV2Hero,
  mediumImpactv2: MediumImpactV2Hero,
  lowImpactv2: LowImpactV2Hero,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
