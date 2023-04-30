import thankyou from '../assets/illustration-thank-you.svg'

type ThankYouProps = {
    rating: number | undefined
}

const ThankYou = ({ rating }: ThankYouProps) => {
    return (
        <div className="card txt-center">
            <img className="thankYou__img" src={thankyou} alt="" />
            <div className="card__rated">
                <span>You selected {rating} out of 5</span>
            </div>
            <div>
                <h2 className="card__heading">Thank you!</h2>
                <p className="card__desc">
                    We appreciate you taking the time to give a rating. If you
                    ever need more support, don’t hesitate to get in touch!
                </p>
            </div>
        </div>
    )
}
export default ThankYou
