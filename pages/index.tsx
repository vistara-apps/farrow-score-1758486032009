import { useState, useEffect } from 'react'

export default function Home() {
  const [scores, setScores] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Fetch NFL scores from API
    setLoading(false)
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🏈 Farrow Score - RedZone Live</h1>
      <p>Real-time NFL scores and win probability</p>
      
      {loading ? (
        <div>Loading scores...</div>
      ) : (
        <div>
          <h2>Live Scores</h2>
          <p>API integration coming soon...</p>
        </div>
      )}
    </div>
  )
}