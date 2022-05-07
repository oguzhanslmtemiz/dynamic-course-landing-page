import { CourseDetail } from '../interfaces'
import CourseHeaderRecord from './CourseHeaderRecord'

type Props = {
  details: CourseDetail
}

export default function CourseSection({ details }: Props) {
  if (details.__typename === 'CourseHeaderRecord') {
    return <CourseHeaderRecord details={details} />
  }
  return <div>Course Section</div>
}
