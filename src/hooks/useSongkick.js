import { useEffect, useState } from "react"
import format from 'date-fns/format'
import subDays from 'date-fns/subDays'
import { formatSongkickEvents } from "../utilities/songkick"

// time: 'past' | 'current'

export function useSongkick(artistId, time, daysPast = 0) {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const minDate = format(subDays(new Date(), daysPast), 'y-MM-dd')

  const api = `https://api.songkick.com/api/3.0/artists/${artistId}/`
  const endpoint = time === 'past' ? 'gigography' : 'calendar'
  let query = `${api}${endpoint}.json?apikey=${process.env.GATSBY_SONGKICK_API_KEY}`
  query += time === 'past' ? `&order=desc&min_date=${minDate}` : ''

  const cacheKey = `songkick-${artistId}-${time}`
  const cacheTime = Date.now()

  async function fetchData() {
    const cachedData = window.sessionStorage.getItem(cacheKey)
    const cacheJSON = JSON.parse(cachedData)
    if (cacheJSON && cacheJSON.cacheTime && cacheJSON.cacheTime > cacheTime - (1000 * 60 * 60)) {
      setData(cacheJSON.songkickEvents)
      setLoading(false)
      return
    }

    try {
      const response = await fetch(query)
      const { resultsPage } = await response.json()

      if (
        resultsPage.status === 'ok' &&
        resultsPage.results.event &&
        resultsPage.results.event.length
      ) {
        const songkickEvents = formatSongkickEvents(resultsPage.results.event)
        setData(songkickEvents)
        window.sessionStorage.setItem(cacheKey, JSON.stringify({ cacheTime, songkickEvents }))
      } else {
        if (resultsPage.error) {
          setError(resultsPage.error.message)
        } else {
          setError(`No ${time} Songkick events found`)
        }
        window.sessionStorage.setItem(cacheKey, JSON.stringify({ cacheTime, songkickEvents: [] }))
      }
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { loading, error, data }
}
