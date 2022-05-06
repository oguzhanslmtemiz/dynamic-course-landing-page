import type { NextPage, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { gql, GraphQLClient } from 'graphql-request'

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  course,
}) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{JSON.stringify(course)}</h1>
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
      }
    }
  }
`

type Course = {
  id: string
  name: string
  slug: string
  courseDetail: []
}

export async function getStaticProps() {
  const endpoint = 'https://graphql.datocms.com/'
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer ' + process.env.DATOCMS_API_KEY,
    },
  })
  const { course }: { course: Course } = await graphQLClient.request(query)

  return {
    props: { course },
  }
}

export default Home
