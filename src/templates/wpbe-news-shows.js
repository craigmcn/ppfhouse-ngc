import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'
import NewsList from '../components/Wpbe/NewsList'
import EventList from '../components/Events/EventList'
import PageHeader from '../components/Wpbe/PageHeader'
import Sidebar from '../components/Wpbe/Sidebar'

const NewsPage = () => {

  return (
    <Layout className="music wpbe has-sidebar no-columns" pageHeader={ PageHeader } sidebar={ Sidebar }>
      <Helmet>
        <title>News :: PPF House</title>
        <meta name="description" content="PPF House news items" />
      </Helmet>

      <h2>news + shows</h2>

      <div className="columns-2">

        <div className="column">
          <div className="wrapper">

            <h3 id="news">news</h3>
            <NewsList />

          </div>
        </div>

        <div className="column">
          <div className="wrapper">

            <h3 id="events">events</h3>
            <EventList />

          </div>
        </div>

      </div>
    </Layout>
  )
}

export default NewsPage
