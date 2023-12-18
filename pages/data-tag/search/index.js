import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const DataTagSearchPage = () => {
  const [searchBuildNumber, setSearchBuildNumber] = useState('')
  const [resultDatatag, setResultDatatag] = useState('')
  const [loading, setLoading] = useState(false)

  const searchDatatag = async () => {
    if (!searchBuildNumber || searchBuildNumber.trim().length !== 9) {
      toast.error('Build number should be 9 charcters long')
      return
    }

    try {
      setLoading(true)
      let data = {
        searchBuildNumber: searchBuildNumber.toUpperCase(),
      }

      let link = '/api/search'

      const response = await axios.post(link, data)

      console.log(response.data)

      //handle if data has an error
      if (response.data.error) {
        toast.error(response.data.error)
        setLoading(false)
      } else {
        toast.success('Done')

        if (response.data.found) {
          setResultDatatag(response.data.found.tagNumber)
        }

        // setBuildNumber('')
        // setDatatagID('')
        // setClockCard('')
        // setValidationErrors({})
      }

      setLoading(false)
    } catch (error) {
      toast.error('Somehing went wrong')
      setLoading(false)
    }
  }

  useEffect(() => {
    if (searchBuildNumber.trim().length === 9) {
      searchDatatag()
    }
  }, [searchBuildNumber])

  const buildInputChangeHandler = (e) => {
    setSearchBuildNumber(e.target.value)
  }

  return (
    <>
      <div className='container mx-auto mt-4 mb-10 p-5 bg-gray-800 rounded-lg shadow-lg max-w-sm'>
        <div className='flex flex-col gap-5 w-[600px]'>
          <div className='flex flex-col'>
            <label
              className='text-white mb-2 font-bold text-xl text-center'
              htmlFor='searchBuildNumber'
            >
              Enter Build Number:
            </label>
            <input
              className='rounded p-4 w-full border-2 border-gray-200 text-black text-lg placeholder-gray-500'
              type='text'
              id='searchBuildNumber'
              value={searchBuildNumber}
              onChange={(e) => buildInputChangeHandler(e)}
              placeholder='Enter Build Number'
              maxLength={9}
            />
          </div>

          <div className='flex flex-col'>
            <label
              className='text-white mb-2 font-bold text-xl text-center'
              htmlFor='resultDatatag'
            >
              Datatag ID:
            </label>
            <input
              className='rounded p-4 border-2 border-gray-200 text-black text-lg placeholder-gray-500 '
              type='text'
              id='resultDatatag'
              value={searchBuildNumber.trim().length == 9 ? resultDatatag : ''}
              placeholder='Datatag ID will appear here'
              readOnly
            />
          </div>

          {/* <button
            className='mt-8 p-6 w-full text-lg font-bold text-white rounded hover:bg-green-700 bg-jcb'
            onClick={searchDatatag}
            disabled={
              !searchBuildNumber ||
              searchBuildNumber.trim().length !== 9 ||
              loading
            }
          >
            Search Datatag
          </button> */}
        </div>
      </div>
    </>
  )
}

export default DataTagSearchPage
