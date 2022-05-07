export type Course = {
  id: string
  name: string
  slug: string
  courseDetail: CourseDetail[]
}

export type CourseDetail = {
  __typename: string
  id: string
  bigTitle: string
  smallTitle: string
  description: string
  buttonText: string
}
