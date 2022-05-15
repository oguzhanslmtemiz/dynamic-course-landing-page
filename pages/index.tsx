import type { NextPage, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { gql, GraphQLClient } from 'graphql-request'
import CourseSection from '../components/CourseSection'
import { ICourse } from '../interfaces'

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  course,
}) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {course.courseDetail.map((section) => (
        <CourseSection details={section} key={section.id} />
      ))}
    </div>
  )
}

const query = gql`
  query {
    course {
      id
      name
      slug
      courseDetail {
        ... on CourseHeaderRecord {
          __typename
          id
          bigTitle
          smallTitle
          description
          buttonText
        }
        ... on CalloutRecord {
          __typename
          id
          smallTitle
          description
          bigTitle
          image {
            url
            width
            height
          }
        }
        ... on LearningSectionRecord {
          __typename
          numberOfLessons
          id
          hoursOfContent
          title
          learningPoints {
            id
            title
          }
        }
        ... on PricingSectionRecord {
          __typename
          id
          title
          pricingCards {
            id
            isFree
            title
            priceSuffix
            priceInCents
            finePrint
            featured
            description
            buttonText
          }
        }
      }
    }
  }
`

export async function getStaticProps() {
  const endpoint = 'https://graphql.datocms.com/'
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer ' + process.env.DATOCMS_API_KEY,
    },
  })
  const { course }: { course: ICourse } = await graphQLClient.request(query)

  return {
    props: { course },
  }
}

export default Home
