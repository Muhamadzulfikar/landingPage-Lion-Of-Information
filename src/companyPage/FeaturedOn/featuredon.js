import './featuredon.css'
import FeaturedOnContent from './featuredon-content/featuredon-content'

function FeaturedOn() {
    return (
        <div className="featuredon-container">
            <div className="flex">
                <button>Service</button>
                <button>Product</button>
            </div>

            <div className="flex">
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <div className="featuredon-content-container">
                <FeaturedOnContent />
            </div>
        </div>
    )
}
export default FeaturedOn