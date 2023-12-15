import { useState } from 'react'
import MainTitle from '@/components/main-title'
import { FaLongArrowAltRight } from 'react-icons/fa'

const ReallocationRequestPage = () => {
  const [rejectBuildNumber, setRejectBuildNumber] = useState('')
  const [rejectDatatagID, setRejectDatatagID] = useState('')
  const [reasonIssue, setReasonIssue] = useState('')
  const [newBuildNumber, setNewBuildNumber] = useState('')
  const [newDatatag, setNewDatatag] = useState('')
  const [resolutionFix, setResolutionFix] = useState('')
  const [name, setName] = useState('')
  const [clockCard, setClockCard] = useState('')

  const handleSubmit = () => {
    console.log('Form submitted')
    // Add your submission logic here
  }

  return (
    <>
      <div className=' bg-gray-800 rounded-lg shadow-lg m-6 p-5 max-w-full'>
        <div className='flex justify-between items-center flex-wrap gap-4'>
          {/* Reject Datatag */}
          <div className='flex-1 min-w-[350px]'>
            <h2 className='text-red-500 text-3xl font-bold text-center mb-4'>
              REJECT DATATAG
            </h2>
            <div className='bg-red-900 border-2 border-red-500 rounded-lg p-4'>
              <div className='mb-4'>
                <label htmlFor='rejectBuildNumber'>Build Number:</label>
                <input
                  type='text'
                  id='rejectBuildNumber'
                  value={rejectBuildNumber}
                  onChange={(e) => setRejectBuildNumber(e.target.value)}
                  placeholder='Enter Build Number'
                  className='rounded p-2 w-full'
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='rejectDatatagID'>Reject Datatag ID:</label>
                <input
                  type='text'
                  id='rejectDatatagID'
                  value={rejectDatatagID}
                  onChange={(e) => setRejectDatatagID(e.target.value)}
                  placeholder='Enter Datatag ID'
                  className='rounded p-2 w-full'
                />
              </div>
              <div>
                <label htmlFor='reasonIssue'>Reason / Issue:</label>
                <textarea
                  id='reasonIssue'
                  value={reasonIssue}
                  onChange={(e) => setReasonIssue(e.target.value)}
                  placeholder='Describe the issue'
                  className='rounded p-2 w-full'
                  rows='4'
                />
              </div>
            </div>
          </div>

          <FaLongArrowAltRight className='text-8xl text-green-500 hidden md:flex' />
          {/* New Datatag */}
          <div className='w-100 flex-1 min-w-[350px]'>
            <h2 className='text-green-500 text-3xl font-bold text-center mb-4'>
              NEW DATATAG
            </h2>
            <div className='bg-green-900 border-2 border-green-500 rounded-lg p-4'>
              <div className='mb-4'>
                <label htmlFor='newBuildNumber'>Build Number:</label>
                <input
                  type='text'
                  id='newBuildNumber'
                  value={newBuildNumber}
                  onChange={(e) => setNewBuildNumber(e.target.value)}
                  placeholder='Enter Build Number'
                  className='rounded p-2 w-full'
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='newDatatag'>New Datatag:</label>
                <input
                  type='text'
                  id='newDatatag'
                  value={newDatatag}
                  onChange={(e) => setNewDatatag(e.target.value)}
                  placeholder='Enter New Datatag'
                  className='rounded p-2 w-full'
                />
              </div>
              <div>
                <label htmlFor='resolutionFix'>Resolution / Fix:</label>
                <textarea
                  id='resolutionFix'
                  value={resolutionFix}
                  onChange={(e) => setResolutionFix(e.target.value)}
                  placeholder='Describe the resolution'
                  className='rounded p-2 w-full'
                  rows='4'
                />
              </div>
            </div>
          </div>
        </div>
        {/* Reallocation Confirmation */}
        <div className='mt-6'>
          <h2 className='text-blue-500 text-3xl font-bold text-center mb-4'>
            REALLOCATION CONFIRMATION
          </h2>
          <div className='bg-blue-900 border-2 border-blue-500 rounded-lg p-4'>
            <div className='mb-4'>
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter your name'
                className='rounded p-2 w-full'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='clockCard'>Clock Card:</label>
              <input
                type='text'
                id='clockCard'
                value={clockCard}
                onChange={(e) => setClockCard(e.target.value)}
                placeholder='Enter Clock Card Number'
                className='rounded p-2 w-full'
              />
            </div>
            <button
              onClick={handleSubmit}
              className='mt-4 p-3 bg-orange-500 text-white rounded hover:bg-orange-700 text-lg'
            >
              Submit Reallocation
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReallocationRequestPage
