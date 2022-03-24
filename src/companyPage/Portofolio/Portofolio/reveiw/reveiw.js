import ReveiwUsername from './reveiwusername'
import ReveiwBar from './reveiwbar'
const Reveiw = () => {
    return (
        <div className="review">
            <h1 className="review-title">Review</h1>

            <div className="flex">
                <img src="./asset/Group 936.png" alt="vinding logo" />
                <ReveiwUsername />
            </div>

            <p className="review-text">Semakin maraknya jenis gadget yang modern dan canggih, semakin marak juga jenis aplikasi yang bisa didownload untuk penunjang gadget. Pengguna gadget akan mencari aplikasi pendukung kegiatan sehari-hari sehingga calon pengguna aplikasi memerlukan review.</p>
            <ReveiwBar />
        </div>
    )
}

export default Reveiw