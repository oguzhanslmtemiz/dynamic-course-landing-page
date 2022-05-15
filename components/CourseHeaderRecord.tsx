import { ICourseHeader } from '../interfaces'

type Props = {
  details: ICourseHeader
}

export default function CourseHeaderRecord({ details }: Props) {
  const sentences = details.description.trim().split('.')
  return (
    <div className="flex flex-col items-center px-10 py-20 bg-gray-200">
      <h1 className="text-2xl font-bold text-center text-gray-700">
        {details.smallTitle}
        <span className="block font-bold text-gray-900 mb-7 text-7xl">
          {details.bigTitle}
        </span>
      </h1>
      {sentences.map((sentence, i) => (
        <p className="max-w-lg text-gray-600" key={i}>
          {sentence && sentence + '.'}
        </p>
      ))}
      <a
        className="px-4 py-3 mt-6 font-medium text-gray-800 bg-yellow-300 rounded-md hover:bg-yellow-400"
        href="#Pricing"
      >
        {details.buttonText}
      </a>
    </div>
  )
}
