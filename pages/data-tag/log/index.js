import { useState, useEffect } from 'react'

import MainTitle from '@/components/main-title'
import axios from 'axios'

const DataTagSearchPage = () => {
  const [loading, setLoading] = useState(false)
  const [dataTags, setDataTags] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      let link = `/api/data-tag`

      const { data } = await axios.get(link)

      console.log(data)

      //handle if data has an error
      if (data.error) {
        toast.error(data.error)
        setLoading(false)
      }

      if (data.tags.length > 0) {
        setDataTags(data.tags)
      }

      setLoading(false)
    } catch (error) {
      toast.error('Somehing went wrong')
      setLoading(false)
    }
  }

  const datatagEntries = [
    {
      buildNumber: 'Example Build Number',
      datatagID: 'Example Datatag ID',
      clockCard: 'Example Clock Card',
      dateTime: 'Example Date & Time',
    },
    // More entries will be added here dynamically
  ]
  return (
    <>
      <div>
        <div className='container'>
          <table>
            <thead>
              <tr>
                <th>Build Number</th>
                <th>Datatag I.D</th>
                <th>Clock Card</th>
                <th>Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {dataTags &&
                dataTags.length > 0 &&
                dataTags.map((entry, i) => (
                  <tr key={entry._id}>
                    <td>{entry.buildNumber}</td>
                    <td>{entry.tagNumber}</td>
                    <td>{entry.clockCardNumber}</td>
                    <td>{entry.createdAt}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default DataTagSearchPage
