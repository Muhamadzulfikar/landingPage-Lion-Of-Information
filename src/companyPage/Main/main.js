import './main.css'

function Main() {
    return (
        <div className="container-main">
            <div className="bg-color">
                <div className="caption flex">
                    <div>
                        <div className="bullet"></div>
                        <div className="bullet"></div>
                        <div className="bullet"></div>
                    </div>
                    <div>
                        <h1 className="title">We deliver Digital inovation <br /> and bright solutions for your <br /> business</h1>
                        <button className="button">Get Started</button>
                        <button className="button button-secondary">
                            <img src="./asset/vector.svg" />
                            Watch Video
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main