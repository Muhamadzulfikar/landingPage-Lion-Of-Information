import './about.css'
import ItemBenefit from './ItemBenefit'
import VisiMisiAbout from './visiMisiAbout'

const data = [{ id: 1, image: './asset/ESOP 1.jpg',  image2: './asset/Group 700.svg', h1: 'ESOP', h2: 'Stay Creative', p: 'A stock option is a label that refers to a compensation contract between an employer and an employee that contains several characteristics of a financial option' },
{ id: 2, image: './asset/Travelling 1.jpg', image2: './asset/rating 1.svg', h1: 'Traveling', h2: 'Stay Productive & Collaboratif', p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,' },
{ id: 3, image: './asset/Career path 1.jpg', image2: './asset/Vector1.svg', h1: 'Path of Equality', h2: 'Stay Humble & Fun', p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,' },
{ id: 4, image: './asset/Portfolio 2.jpg', image2: './asset/brainstorming 1.svg', h1: 'e-Portfolio & e-Course', h2: 'Stay Commit & Adapt', p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,' }]

const dataVisi1 = [{ id: 1, h1: 'Visi', p: 'Lion Of Informatics adalah startup yang bertujuan untuk mengembangkan ekosistem teknologi di Indonesia. Berdiri sejak 17 Agustus 2018, Lion Of Informatics menyediakan berbagai produk & layanan untuk kebutuhan perusahaan/startup. mewujudkan masyarakat dan pendidikan informatika untuk mewujudkan Indonesia sebagai negara digital pada tahun 2035.' },
{ id: 2, h1: 'Misi', p: 'Lion Of Informatics adalah startup yang bertujuan untuk mengembangkan ekosistem teknologi di Indonesia. Berdiri sejak 17 Agustus 2018, Lion Of Informatics menyediakan berbagai produk & layanan untuk kebutuhan perusahaan/startup. mewujudkan masyarakat dan pendidikan informatika untuk mewujudkan Indonesia sebagai negara digital pada tahun 2035.' }]

const dataVisi2 = [{ id: 1, h1: 'Dream', p: 'Lion Of Informatics adalah startup yang bertujuan untuk mengembangkan ekosistem teknologi di Indonesia. Berdiri sejak 17 Agustus 2018, Lion Of Informatics menyediakan berbagai produk & layanan untuk kebutuhan perusahaan/startup. mewujudkan masyarakat dan pendidikan informatika untuk mewujudkan Indonesia sebagai negara digital pada tahun 2035.' },
{ id: 2, h1: 'Purpose', p: 'Lion Of Informatics adalah startup yang bertujuan untuk mengembangkan ekosistem teknologi di Indonesia. Berdiri sejak 17 Agustus 2018, Lion Of Informatics menyediakan berbagai produk & layanan untuk kebutuhan perusahaan/startup. mewujudkan masyarakat dan pendidikan informatika untuk mewujudkan Indonesia sebagai negara digital pada tahun 2035.' },
{ id: 3, h1: 'Value', p: 'Lion Of Informatics adalah startup yang bertujuan untuk mengembangkan ekosistem teknologi di Indonesia. Berdiri sejak 17 Agustus 2018, Lion Of Informatics menyediakan berbagai produk & layanan untuk kebutuhan perusahaan/startup. mewujudkan masyarakat dan pendidikan informatika untuk mewujudkan Indonesia sebagai negara digital pada tahun 2035.' }]

function About() {
    return (
        <section className="aboutUs">
            <div>
                <h1 className="aboutUs-header">About Us</h1>
                < div className="visimisi">
                    {
                        dataVisi1.map(function (dataVisi1) {
                            return (
                                <VisiMisiAbout id={dataVisi1.id} h1={dataVisi1.h1} p={dataVisi1.p} />
                            )
                        })
                    }
                </div>
            </div>


            <div>
                <div className="itemBenefit">
                    {
                        data.map(function (data) {
                            return (
                                <ItemBenefit id={data.id} image={data.image} h1={data.h1} p={data.p} />
                            )
                        })
                    }
                </div>
            </div>


            <div>
                <h1 className="aboutUs-header">Nilai-Nilai Kami</h1>
                <p className="nilaiKami">Our purpose is to become a family where people can develop themselves, unleash their potential while building a remarkable startup.</p>

                <div className="itemBenefit nilaiKami-image">
                    {
                        data.map(function (data) {
                            return (
                                <ItemBenefit id={data.id} image={data.image2} h1={data.h2} p={data.p} />
                            )
                        })
                    }
                </div>
            </div>


            <div>
                <h1 className="aboutUs-header"> Our Path</h1>
                < div className="visimisi">
                    {
                        dataVisi2.map(function (dataVisi2) {
                            return (
                                <VisiMisiAbout id={dataVisi2.id} h1={dataVisi2.h1} p={dataVisi2.p} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default About