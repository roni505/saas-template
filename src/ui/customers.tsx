import ReviewCard from "./review-card";
import SectionHeader from "./section-header";
import { ReviewCardProps } from "./review-card";

const reviewCardInputs: ReviewCardProps[] = [
    {
        review: "“Stratify transformed our brand with their innovative designs and strategic vision. Their creativity and attention to detail set them apart”",
        src: "",
        name: " James Rutherford",
        work: "CEO of Coffee Breaks & Procrastination"
    },
    {
        review: "“I was skeptical at first, but now I pretend I knew it would be amazing all along. It’s rare to find something that actually delivers”",
        src: "",
        name: "Sophia Mitchell",
        work: "Chief Overthinker at Decisions Inc."
    },
    {
        review: "This changed my life! Not dramatically, but just enough to brag about it at dinner parties.",
        src: "",
        name: "Daniel Carter",
        work: "Vice President of Last-Minute Fixes"
    },
    {
        review: "Absolutely blown away! Everything worked so smoothly that I started questioning my past choices. If only everything else was this easy!",
        src: "",
        name: "Emily Ross",
        work: "Director of Unnecessary Meetings"
    },
    {
        review: "I’d leave a longer review, but I’m too busy enjoying the results. Everything was seamless, and I feel great about my decision!",
        src: "",
        name: "Michael Bennett",
        work: "Head of ‘I Told You So’ Department"
    },
    {
        review: "I give it five stars, mostly because six isn’t an option. The experience was effortless, and I couldn’t be happier!",
        src: "",
        name: "Olivia Parker",
        work: "Senior Specialist in Pretending to Work"
    },
]


const Customers = () => {
    return (
        <div className="flex justify-center items-center mx-auto max-w-7xl flex-col">
            <SectionHeader 
            chip="Customers"
            title="What Our Customers Are Saying"
            description="Discover what our satisfied customers have to say about their experience with us!"
            />
            <div className="flex flex-wrap gap-4 justify-center items-center px-5 md:px-0">
                {
                    reviewCardInputs.map((reviewCard) => {
                        return (
                            <ReviewCard
                            review={reviewCard.review}
                            src="/cyclesIcon.svg"
                            name={reviewCard.name}
                            work={reviewCard.work}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Customers;