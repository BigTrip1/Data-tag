import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import MainTitle from '@/components/main-title'
import axios from 'axios'

const DataTagSearchPage = () => {
  const [loading, setLoading] = useState(false)
  const [dataTags, setDataTags] = useState([])
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const PASSWORD = 'JCBLDL03'

  const handleLogin = () => {
    if (password === PASSWORD) {
      setLoggedIn(true)
    } else {
      toast.error('Incorrect password')
    }
  }

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
      {loggedIn ? (
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
                    <tr key={entry._id} className='hover:bg-green-700'>
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
      ) : (
        <div className='container mx-auto mt-4 mb-10 p-5 bg-gray-800 rounded-lg shadow-lg max-w-sm'>
          <div className='flex flex-col items-center justify-center'>
            <label className='text-white mb- font-bold text-xl text-center'>
              Enter Password:
            </label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='rounded p-4 w-full border-2 border-gray-200 text-black text-lg'
            />
            <button
              className='mt-3 p-6 w-full text-lg font-bold text-white rounded hover:bg-green-700 bg-jcb'
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default DataTagSearchPage
