import CheckSvg from '../public/CheckSvg'
import { IPricingSectionRecord } from '../interfaces'

type Props = { card: IPricingSectionRecord['pricingCards'][number] }
export default function PricingCard({ card }: Props) {
  return (
    <div
      className={`w-full max-w-sm p-6 rounded-lg ${
        card.featured
          ? 'bg-indigo-100 text-indigo-900 border-4 border-amber-300'
          : 'bg-indigo-500'
      }`}
    >
      <div className="text-lg text-left ">
        <h3 className="font-semibold">{card.title}</h3>
        <div className="mt-2 text-5xl font-extrabold">
          {card.isFree ? (
            'Free'
          ) : (
            <div>
              ${parseInt(card.priceInCents) / 100}
              <span className="text-lg">{card.priceSuffix}</span>
            </div>
          )}
        </div>
        <ul className="py-8 space-y-2">
          {card.description.split('*').map(
            (point, i) =>
              point && (
                <li
                  key={i}
                  className="flex items-center gap-2 text-base sm:text-lg"
                >
                  <CheckSvg
                    className={`shrink-0 ${
                      card.featured ? 'fill-indigo-900' : 'fill-indigo-100'
                    }`}
                  />
                  <span>{point}</span>
                </li>
              )
          )}
        </ul>
      </div>
      <div className="flex flex-col text-center">
        <a
          className={`px-4 py-3 mt-6 text-xl font-medium rounded-md  
          ${
            card.featured
              ? 'bg-amber-300 hover:bg-indigo-300 hover:text-yellow-300'
              : 'bg-indigo-300 hover:text-indigo-500 hover:bg-amber-300'
          }`}
          href="#Pricing"
        >
          {card.buttonText +
            `${
              !card.isFree
                ? ' $' + parseInt(card.priceInCents) / 100 + card.priceSuffix
                : ''
            }`}
        </a>
        <span
          className={`mt-2 text-sm ${
            card.featured ? 'text-indigo-900' : 'text-indigo-300'
          }`}
        >
          {card.finePrint}
        </span>
      </div>
    </div>
  )
}
