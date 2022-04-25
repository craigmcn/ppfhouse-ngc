import React from 'react'
import Layout from '../../components/Layout'
import { Helmet } from 'react-helmet'
import NewsList from '../../components/News/NewsList'

const NewsPage = () => {

  return (
    <Layout className="news background has-sidebar">
      <Helmet>
        <title>News :: PPF House</title>
        <meta name="description" content="PPF House news items" />
      </Helmet>
      
      <NewsList />

    </Layout>
  )
}

export default NewsPage
