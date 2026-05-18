import Gallery from '@/components/Gallery'
import RichText from '@/components/RichText'
import type { Media, TradeCategoryBlock as TradeCategoryProps } from '@/payload-types'
import { cn } from '@/utilities/ui'

// const sections: Section[] = [
//   {
//     id: "furniture",
//     title: "Project Furniture",
//     images: [furniture, consumer, logistics, industrial, furniture],
//     paragraphs: [
//       "We deliver complete project furniture solutions for hotels, resorts, residential developments and commercial spaces — from contract-grade seating and casegoods to bespoke lighting and decorative accessories.",
//       "Working with trusted manufacturers, we coordinate design, production and on-site installation so developers and interior designers receive cohesive, durable interiors delivered on schedule and on budget.",
//     ],
//   },
//   {
//     id: "doors",
//     title: "Turkish Doors",
//     images: [furniture, consumer, logistics, industrial, furniture],
//     paragraphs: [
//       "We supply and export high-quality Turkish doors for residential, commercial, hospitality, and large-scale construction projects — including interior doors, fire-rated doors, steel doors, wooden doors, and custom architectural solutions.",

//       "Through our network of trusted Turkish manufacturers, we manage sourcing, production, quality control, and international logistics to deliver durable, design-focused door solutions tailored to global project requirements.",
//     ],
//     reversed: true,
//   },
//   {
//     id: "construction",
//     title: "Construction Materials",
//     images: [construction, logistics, industrial, consumer, construction],
//     paragraphs: [
//       "Source premium construction materials with our international trade solutions. We specialize in supplying high-grade structural components, finishing materials and fixtures for projects of any scale — built for durability, compliance and efficient delivery.",
//       "Transform your projects with our reliable supply chain. Whether you're building hotels, residential complexes or commercial spaces, we ensure quality at every step.",
//     ],
//   },
//   {
//     id: "industrial",
//     title: "Industrial Equipment",
//     images: [industrial, construction, logistics, consumer, industrial],
//     paragraphs: [
//       "We understand that an industrial operation depends on dependable machinery. Our dedicated partners offer specialties in delivering modern, efficient and reliable equipment — solutions tailored to elevate your workflow.",
//       "Whether you're outfitting a factory or upgrading existing systems, our comprehensive equipment solutions combine durability, performance and value to support long-term productivity.",
//     ],
//     reversed: true,
//   },
//   {
//     id: "logistics",
//     title: "Logistics & Shipping",
//     images: [logistics, construction, industrial, consumer, logistics],
//     paragraphs: [
//       "We transform complex international shipments into seamless, on-time deliveries. As your dedicated partner in global logistics, we bring a perfect blend of expertise, coverage and reliability to every move.",
//       "As a leading supplier of trade and freight services, we are committed to handling cargo with care — ensuring your shipments cross borders quickly and safely.",
//     ],
//   },
//   {
//     id: "consumer",
//     title: "Consumer Goods",
//     images: [consumer, construction, industrial, logistics, consumer],
//     paragraphs: [
//       "From textiles and home furnishings to lifestyle essentials, we connect markets to premium consumer goods that meet international standards of quality and design.",
//       "Our curated selection helps retailers, distributors and wholesalers diversify their offering with reliable products backed by transparent sourcing and dependable delivery.",
//     ],
//     reversed: true,
//   },
// ];

export const TradeCategoryBlock: React.FC<TradeCategoryProps> = ({ carousel }) => {
  const getImage = (images: any) => {
    if (!images) return null
    return images.map((item: any) => ({ ...item.image }))
  }

  return (
    <section>
      {carousel?.map((item, i) => (
        <div className="py-16 md:py-24" id={item?.hashLink} key={item.id}>
          <div className="container-px mx-auto max-w-7xl">
            <h2 className="mb-10 font-serif text-3xl text-primary md:text-4xl">{item?.title}</h2>

            <div
              className={cn(
                'grid items-start gap-10 lg:gap-14',
                item.reversed ? 'lg:grid-cols-[1fr_1.3fr]' : 'lg:grid-cols-[1.3fr_1fr]',
              )}
            >
              {/* Gallery */}
              <div className={item.reversed ? 'lg:order-2' : 'lg:order-1'}>
                <Gallery images={getImage(item?.images)} alt={item?.title} />
              </div>

              {/* Content */}
              <div
                className={cn(
                  'space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg',
                  item.reversed ? 'lg:order-1' : 'lg:order-2',
                )}
              >
                {item?.description && (
                  <RichText
                    className="mb-0  text-lg text-muted-foreground"
                    data={item?.description}
                    enableGutter={false}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
