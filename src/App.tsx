import { useState } from 'react'
import './App.css'
import { Rating } from './components/Rating'
import ThankYou from './components/ThankYou'
function App() {
    const [submitted, setSubmitted] = useState<boolean>(false)
    const [rating, setRating] = useState<number>()

    return (
        <main className="app">
            {submitted ? (
                <ThankYou rating={rating} />
            ) : (
                <Rating
                    setRating={setRating}
                    submitted={submitted}
                    setSubmitted={setSubmitted}
                />
            )}
        </main>
    )
}

export default App
