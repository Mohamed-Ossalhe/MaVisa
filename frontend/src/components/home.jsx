import CTAbtn from './CTAbtn'
import heroSvg from '../assets/img/hero-svg2.svg';
import starsSvg from '../assets/img/svgsvg.svg';

const Home = () => {
    return (
        <div className="home h-full overflow-hidden">
            <div className="container mx-auto h-full flex items-center py-12">
                <div className="home-wrapper md:flex md:items-center md:justify-between px-12 gap-12">
                    <div className="home-text w-1/2">
                        <h1>{sessionStorage.getItem("rdv-date")}</h1>
                        <img src={starsSvg} alt="" className="h-20"/>
                        <div className="home-text-content">
                            <h1 className="font-bold text-xl mb-4">Get You Visa RDV Without Any Come and Go.</h1>
                            <p className="w-2/3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </p>
                            <div className="cta-btns mt-6 flex gap-4 items-center">
                                <CTAbtn text="Check Visa Situation" link="/check-visa-situation"/>
                                <CTAbtn text="Apply For Visa" link="/apply-for-visa"/>
                            </div>
                        </div>
                    </div>
                    <div className="home-image w-1/2">
                        <img src={heroSvg} alt="" className=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home