import './visimisi.css'
import VisiMisiContent from './VisiMisi/visimisicontent/visimisicontent'
import VisiMisiAbout from './VisiMisi/visimisiabout'
import VisiMisiMainPower from './VisiMisi/visimisimainpower/visimisimainpower'
import VisiMisiMediaCoverage from './VisiMisi/visimisimediacoverage'

function VisiMisi() {
    return (
        <div className="container-visiMisi">
            <VisiMisiContent />
            <div>
                <VisiMisiAbout />
                <VisiMisiMainPower />
                <VisiMisiMediaCoverage />
            </div>
        </div>
    )
}

export default VisiMisi