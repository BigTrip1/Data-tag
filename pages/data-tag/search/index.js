import { useState } from 'react'
import MainTitle from '@/components/main-title'

const DataTagSearchPage = () => {
  const [searchBuildNumber, setSearchBuildNumber] = useState('')
  const [resultDatatag, setResultDatatag] = useState('')

  const searchDatatag = () => {
    // Placeholder for search logic
    // This is where you would typically make an API call to your backend service
    // For now, it's just a placeholder alert
    alert('Search functionality not implemented')
  }

  return (
    <>
      <div className='container mx-auto mt-4 mb-10 p-5 bg-gray-800 rounded-lg shadow-lg max-w-sm'>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col'>
            <label
              className='text-white mb-2 font-bold text-xl text-center'
              htmlFor='searchBuildNumber'
            >
              Enter Build Numbers:
            </label>
            <input
              className='rounded p-4 w-full border-2 border-gray-200 text-black text-lg placeholder-gray-500'
              type='text'
              id='searchBuildNumber'
              value={searchBuildNumber}
              onChange={(e) => setSearchBuildNumber(e.target.value)}
              placeholder='Enter Build Number'
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
              className='rounded p-4 w-full border-2 border-gray-200 text-black text-lg placeholder-gray-500'
              style={{ width: '600px' }} // Custom width
              type='text'
              id='resultDatatag'
              value={resultDatatag}
              placeholder='Datatag ID will appear here'
              readOnly
            />
          </div>

          <button
            className='mt-8 p-3 w-full text-lg font-bold text-white rounded hover:bg-orange-700'
            style={{ backgroundColor: '#f9b101' }}
            onClick={searchDatatag}
          >
            Search Datatag
          </button>
        </div>
      </div>
    </>
  )
}

export default DataTagSearchPage
