import { useState } from 'react'
import MainTitle from '@/components/main-title'
import { toast } from 'react-hot-toast'

import axios from 'axios'

const DataTagMainPage = () => {
  const [buildNumber, setBuildNumber] = useState('')
  const [datatagID, setDatatagID] = useState('')
  const [clockCard, setClockCard] = useState('')
  const [validationErrors, setValidationErrors] = useState({})

  const [loading, setLoading] = useState(false)

  const handleBuildNumberChange = (e) => {
    const value = e.target.value.toUpperCase()
    setBuildNumber(value)
    validateBuildNumber(value)
  }

  const handleDatatagIDChange = (e) => {
    const value = e.target.value.toUpperCase()
    setDatatagID(value)
    validateDatatagID(value)
  }

  const handleClockCardChange = (e) => {
    const value = e.target.value.toUpperCase()
    setClockCard(value)
    validateClockCard(value)
  }

  const validateBuildNumber = (value) => {
    if (!/^[A-Z]{3}\d{6,9}$/.test(value)) {
      setValidationErrors((prev) => ({
        ...prev,
        buildNumber:
          'Build number must start with 3 letters followed by 6-9 numbers.',
      }))
    } else {
      setValidationErrors((prev) => ({ ...prev, buildNumber: null }))
    }
  }

  const validateDatatagID = (value) => {
    if (value.includes('CFN')) {
      setValidationErrors((prev) => ({
        ...prev,
        datatagID: 'Incorrect barcode. Please see the SOP and try again.',
      }))
    } else if (!/^\d[A-Z0-9]{15}$/.test(value)) {
      setValidationErrors((prev) => ({
        ...prev,
        datatagID:
          'Barcodes scanned in the wrong sequence. Please see the SOP and try again.',
      }))
    } else {
      setValidationErrors((prev) => ({ ...prev, datatagID: null }))
    }
  }

  const validateClockCard = (value) => {
    if (!/^01\d{6}$/.test(value)) {
      setValidationErrors((prev) => ({
        ...prev,
        clockCard:
          'Invalid Clock Card. Please scan or enter full clock card number.',
      }))
    } else {
      setValidationErrors((prev) => ({ ...prev, clockCard: null }))
    }
  }

  const validateAndSubmit = async () => {
    if (!buildNumber || !datatagID || !clockCard) {
      toast.error('Please fill in all fields')
      return
    }

    if (
      validationErrors.buildNumber ||
      validationErrors.datatagID ||
      validationErrors.clockCard
    ) {
      toast.error('data in wrong format')
      return
    }

    let finalBuildNumber = buildNumber
    if (buildNumber.length > 9 && buildNumber.endsWith('001')) {
      finalBuildNumber = buildNumber.slice(0, -3)
    }

    // Add logic here to submit data or navigate
    setLoading(true)

    try {
      let data = {
        finalBuildNumber,
        datatagID,
        clockCard,
      }

      let link = `/api/data-tag`

      const response = await axios.post(link, data)

      console.log(response.data)

      //handle if data has an error
      if (response.data.error) {
        toast.error(response.data.error)
        setLoading(false)
      } else {
        toast.success('Done')

        setBuildNumber('')
        setDatatagID('')
        setClockCard('')
        setValidationErrors({})
      }

      setLoading(false)
    } catch (error) {
      toast.error('Somehing went wrong')
      setLoading(false)
    }
  }

  return (
    <>
      <div className='container mx-auto mt-4 mb-10 p-5 bg-gray-800 rounded-lg shadow-lg max-w-sm'>
        <div className='flex flex-col gap-10'>
          {/* Build Number Input */}
          <div className='flex flex-col'>
            <label
              className='text-white mb-2 font-bold text-xl text-center'
              htmlFor='buildNumber'
            >
              Scan Build Numbers:
            </label>
            <input
              className={`rounded p-2 w-full border-2 ${
                validationErrors.buildNumber
                  ? 'border-red-500'
                  : 'border-gray-200'
              } text-black text-lg placeholder-gray-500`}
              style={{ width: '600px' }} // Custom width
              type='text'
              id='buildNumber'
              value={buildNumber}
              onChange={handleBuildNumberChange}
              placeholder='Enter Build Number'
              required
            />
            {validationErrors.buildNumber && (
              <p className='text-red-500 text-sm'>
                {validationErrors.buildNumber}
              </p>
            )}
          </div>

          {/* Datatag ID Input */}
          <div className='flex flex-col'>
            <label
              className='text-white mb-2 font-bold text-xl text-center'
              htmlFor='datatagID'
            >
              Scan Datatag:
            </label>
            <input
              className={`rounded p-2 w-full border-2 ${
                validationErrors.datatagID
                  ? 'border-red-500'
                  : 'border-gray-200'
              } text-black text-lg placeholder-gray-500`}
              type='text'
              id='datatagID'
              value={datatagID}
              onChange={handleDatatagIDChange}
              placeholder='Enter Datatag ID'
              required
            />
            {validationErrors.datatagID && (
              <p className='text-red-500 text-sm'>
                {validationErrors.datatagID}
              </p>
            )}
          </div>

          {/* Clock Card Input */}
          <div className='flex flex-col'>
            <label
              className='text-white mb-2 font-bold text-xl text-center'
              htmlFor='clockCard'
            >
              Scan Clock Card:
            </label>
            <input
              className={`rounded p-2 w-full border-2 ${
                validationErrors.clockCard
                  ? 'border-red-500'
                  : 'border-gray-200'
              } text-black text-lg placeholder-gray-500`}
              type='text'
              id='clockCard'
              value={clockCard}
              onChange={handleClockCardChange}
              placeholder='Enter Clock Card Number'
              required
            />
            {validationErrors.clockCard && (
              <p className='text-red-500 text-sm'>
                {validationErrors.clockCard}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            className='mt-8 p-3 w-full text-lg font-bold text-white rounded hover:bg-orange-700'
            style={{ backgroundColor: 'rgb(249, 177, 1)' }}
            onClick={validateAndSubmit}
            disabled={loading}
          >
            Submit Datatag
          </button>
        </div>
      </div>
    </>
  )
}

export default DataTagMainPage
