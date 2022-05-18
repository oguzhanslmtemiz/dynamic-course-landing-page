import { IPricingSectionRecord } from '../interfaces'
import PricingCard from './PricingCard'

type Props = { details: IPricingSectionRecord }

export default function PricingSectionRecord({ details }: Props) {
  return (
    <div id="Pricing" className="flex flex-col px-10 py-20 bg-indigo-600 text-indigo-50">
      <h2 className="text-6xl font-extrabold text-center sm:text-7xl">
        {details.title}
      </h2>
      <div className="flex flex-col items-center justify-center gap-8 mt-10 md:flex-row">
        {details.pricingCards.map((card) => (
          <PricingCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}
