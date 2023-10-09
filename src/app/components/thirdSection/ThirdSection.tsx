'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './thirdsection.scss';
import img1 from '../../../assets/img/1618x1010/img2.jpg';
import svg1 from '../../../assets/svg/brands/amazon-dark.svg';
import svg2 from '../../../assets/svg/brands/airbnb-dark.svg';
import svg3 from '../../../assets/svg/brands/visa.svg';
import svg4 from '../../../assets/svg/brands/vidados-gray.svg';
import Image from 'next/image';
import check from '../../../assets/additional/check.svg';


function ThirdSection() {
    return (
    <div className="position-relative bg-light rounded-2 mx-3 mx-lg-10 thirdsection">
        <div className="container content-space-2 content-space-lg-3">
        <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5">
        <h2 className='wow'>Fraktional.dev: Where Capacity Meets Flexibility</h2>
        <p>Unlock tailored tech opportunities, balance costs, and connect effortlessly through Fraktional.</p>
        </div>
        <div className="text-center mb-10 ">
        {/* List Checked */}
        <ul className="list-inline list-checked list-checked-primary top-ul">
            <li className="list-inline-item list-checked-item"><Image src={check} alt='checkmark' width={20} height={20} />Flexible.</li>
            <li className="list-inline-item list-checked-item"><Image src={check} alt='checkmark' width={20} height={20} />Reliable.</li>
            <li className="list-inline-item list-checked-item"><Image src={check} alt='checkmark' width={20} height={20} />Efficient</li>
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
            <h2>Are You Settling for Rigid Tech Resourcing?</h2>
            <p>Don't be confined by traditional hiring practices. With Fraktional, dive into a dynamic pool of tech expertise tailored to your immediate project needs.</p>
            </div>
            {/* End Heading */}
            {/* List Checked */}
            <ul className="list-checked list-checked-primary mb-5 routine">
            <li className="list-checked-item"><Image src={check} alt='checkmark' width={20} height={20} />24 hour turnaround</li>
            <li className="list-checked-item"><Image src={check} alt='checkmark' width={20} height={20} />Specialist Skills</li>
            <li className="list-checked-item"><Image src={check} alt='checkmark' width={20} height={20} />30 Days Onboarding</li>
            </ul>
            {/* End List Checked */}
            <a className="btn btn-primary started" href="#">Get started</a>
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