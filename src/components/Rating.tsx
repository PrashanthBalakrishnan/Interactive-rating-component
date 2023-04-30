import star from '../assets/icon-star.svg'
import { FormEvent, useState } from 'react'

type RatingProps = {
    setSubmitted: React.Dispatch<React.SetStateAction<boolean>>
    submitted: boolean
    setRating: React.Dispatch<React.SetStateAction<number | undefined>>
}

export const Rating = ({ setSubmitted, submitted, setRating }: RatingProps) => {
    const handleClick = (num: number) => {
        setRating(num)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setSubmitted(!submitted)
    }
    return (
        <div className="card">
            <div className="card__logo">
                <img src={star} alt="star logo" />
            </div>
            <div>
                <h2 className="card__heading">How did we do?</h2>
                <p className="card__desc">
                    Please let us know how we did with your support request. All
                    feedback is appreciated to help us improve our offering!
                </p>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="card__rating">
                    {[1, 2, 3, 4, 5].map((num) => (
                        <button
                            key={num}
                            onClick={() => handleClick(num)}
                            className="btn ratingBtn"
                            type="button"
                        >
                            {num}
                        </button>
                    ))}
                </div>
                <button className="btn submitBtn" type="submit">
                    SUBMIT
                </button>
            </form>
        </div>
    )
}
