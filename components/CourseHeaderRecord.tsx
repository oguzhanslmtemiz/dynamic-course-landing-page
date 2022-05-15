import { ICourseHeader } from '../interfaces'

type Props = {
  details: ICourseHeader
}

export default function CourseHeaderRecord({ details }: Props) {
  const sentences = details.description.trim().split('.')
  return (
    <div className="flex flex-col items-center px-10 py-20 text-center bg-gray-200">
      <h1 className="text-xl font-bold text-center text-gray-700 sm:text-2xl">
        {details.smallTitle}
        <span className="block text-5xl font-bold text-gray-900 mb-7 sm:text-7xl">
          {details.bigTitle}
        </span>
      </h1>
      <div>
        {sentences.map((sentence, i) => (
          <p className="max-w-lg text-gray-600" key={i}>
            {sentence && sentence + '.'}
          </p>
        ))}
      </div>
      <a
        className="px-4 py-3 mt-6 font-medium text-gray-800 bg-yellow-300 rounded-md hover:bg-yellow-400"
        href="#Pricing"
      >
        {details.buttonText}
      </a>
    </div>
  )
}
