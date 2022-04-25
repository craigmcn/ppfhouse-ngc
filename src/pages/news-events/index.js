import React from 'react'
import Layout from '../../components/Layout'
import { Helmet } from 'react-helmet'
import NewsList from "../../components/News/GeneralNewsList"
import EventList from '../../components/Events/EventList'

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

            <h2 id="news">news</h2>
            <NewsList />

          </div>
        </div>

        <div className="column">
          <div className="wrapper">

            <h2 id="events">events</h2>
            <EventList />

          </div>
        </div>

      </div>

    </Layout>
  )
}

export default NewsEventsPage