import Details from '../components/Details'
import FeedbackSession from '../components/FeedbackSession'
import Header from '../components/Header'

const DetailsPage = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-10 pb-6">
      <Header />
      <Details />
      <FeedbackSession />
    </div>
  )
}

export default DetailsPage
