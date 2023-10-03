'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './thirdsection.scss';
import img1 from '../../../assets/img/1618x1010/img2.jpg';
import svg1 from '../../../assets/svg/brands/amazon-dark.svg';
import svg2 from '../../../assets/svg/brands/airbnb-dark.svg';
import svg3 from '../../../assets/svg/brands/visa.svg';
import svg4 from '../../../assets/svg/brands/vidados-gray.svg';
import Image from 'next/image';

function ThirdSection() {
    return (
    <div className="position-relative bg-light rounded-2 mx-3 mx-lg-10 thirdsection">
        <div className="container content-space-2 content-space-lg-3">
        <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5">
        <h2>Wow your audience from the first second</h2>
        <p>The powerful and flexible theme for all kinds of businesses</p>
        </div>
        <div className="text-center mb-10">
        {/* List Checked */}
        <ul className="list-inline list-checked list-checked-primary">
            <li className="list-inline-item list-checked-item"><i className="bi bi-check"></i>Responsive</li>
            <li className="list-inline-item list-checked-item"><i className="bi bi-check"></i>5-star support</li>
            <li className="list-inline-item list-checked-item"><i className="bi bi-check"></i>Constant updates</li>
        </ul>
        {/* End List Checked */}
        </div>
        <div className="row">
        <div className="col-lg-7 mb-9 mb-lg-0">
            <div className="pe-lg-6">
            {/* Browser Device */}
            <figure className="device-browser">
                <div className="device-browser-header">
                    <div className="device-browser-header-btn-list">
                        <span className="device-browser-header-btn-list-btn" />
                        <span className="device-browser-header-btn-list-btn" />
                        <span className="device-browser-header-btn-list-btn" />
                    </div>
                </div>
                <div className="device-browser-frame">
                <Image className="device-browser-img" src={img1} alt="Image Description" />
                </div>
            </figure>
            {/* End Browser Device */}
            </div>
        </div>
        {/* End Col */}
        <div className="col-lg-5">
            {/* Heading */}
            <div className="mb-4">
            <h2>Collaborative tools to design user experience</h2>
            <p>We help businesses bring ideas to life in the digital world, by designing and implementing the technology tools that they need to win.</p>
            </div>
            {/* End Heading */}
            {/* List Checked */}
            <ul className="list-checked list-checked-primary mb-5">
            <li className="list-checked-item">Less routine – more creativity</li>
            <li className="list-checked-item">Hundreds of thousands saved</li>
            <li className="list-checked-item">Scale budgets efficiently</li>
            </ul>
            {/* End List Checked */}
            <a className="btn btn-primary" href="#">Get started</a>
            <hr className="my-5" />
            <span className="d-block">Trusted by leading companies</span>
            <div className="row">
            <div className="col py-3">
                <Image className="avatar avatar-4x3" src={svg1} alt="Logo" />
            </div>
            {/* End Col */}
            <div className="col py-3">
                <Image className="avatar avatar-4x3" src={svg2} alt="Logo" />
            </div>
            {/* End Col */}
            <div className="col py-3">
                <Image className="avatar avatar-4x3" src={svg3} alt="Logo" />
            </div>
            {/* End Col */}
            <div className="col py-3">
                <Image className="avatar avatar-4x3" src={svg4} alt="Logo" />
            </div>
            {/* End Col */}
            </div>
            {/* End Row */}
        </div>
        {/* End Col */}
        </div>
        {/* End Row */}
    </div>
    </div>
    )
}

export default ThirdSection;