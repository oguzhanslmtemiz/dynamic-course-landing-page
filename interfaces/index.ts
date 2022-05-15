export interface ICourse {
  id: string
  name: string
  slug: string
  courseDetail: CourseDetail
}

export type CourseDetail = [
  ICourseHeader,
  ICalloutRecord,
  ILearningSectionRecord,
  IPricingSectionRecord
]

export interface ICourseHeader {
  __typename: 'CourseHeaderRecord'
  id: string
  bigTitle: string
  smallTitle: string
  description: string
  buttonText: string
}

export interface ICalloutRecord {
  __typename: 'CalloutRecord'
  id: string
  bigTitle: string
  smallTitle: string
  description: string
  image: {
    url: string
    width: number
    height: number
  }
}

export interface ILearningSectionRecord {
  __typename: 'LearningSectionRecord'
  id: string
  numberOfLessons: string
  hoursOfContent: string
  title: string
  learningPoints: { id: string; title: string }[]
}

export interface IPricingSectionRecord {
  __typename: 'PricingSectionRecord'
  id: string
  title: string
  pricingCards: IPricingCards[]
}

interface IPricingCards {
  id: string
  isFree: boolean
  title: string
  priceSuffix: string
  priceInCents: string
  finePrint: string
  featured: boolean
  description: string
  buttonText: string
}
