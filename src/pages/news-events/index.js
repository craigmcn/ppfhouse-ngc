import React from 'react'
import Layout from '../../components/Layout'
import { Helmet } from 'react-helmet'
import NewsList from "../../components/NewsList"
import EventList from '../../components/EventList'

const NewsEventsPage = () => {

  return (
    <Layout className="news-events background has-columns">
      <Helmet>
        <title>News and Events :: PPF House</title>
        <meta name="description" content="PPF House news and events" />
      </Helmet>

      <div className="columns-2">

        <div className="column">
          <div className="wrapper">

            <NewsList />

          </div>
        </div>

        <div className="column">
          <div className="wrapper">

            <EventList />

          </div>
        </div>

      </div>

    </Layout>
  )
}

export default NewsEventsPage