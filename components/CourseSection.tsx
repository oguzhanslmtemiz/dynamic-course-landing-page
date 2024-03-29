import { CourseDetail } from '../interfaces'
import CourseHeaderRecord from './CourseHeaderRecord'
import CalloutRecord from './CalloutRecord'
import LearningSectionRecord from './LearningSectionRecord'
import PricingSectionRecord from './PricingSectionRecord'

type Props = {
  details: CourseDetail[number]
}

export default function CourseSection({ details }: Props) {
  if (details.__typename === 'CourseHeaderRecord') {
    return <CourseHeaderRecord details={details} />
  } else if (details.__typename === 'CalloutRecord') {
    return <CalloutRecord details={details} />
  } else if (details.__typename === 'LearningSectionRecord') {
    return <LearningSectionRecord details={details} />
  } else if (details.__typename === 'PricingSectionRecord') {
    return <PricingSectionRecord details={details} />
  }
  return null
}
