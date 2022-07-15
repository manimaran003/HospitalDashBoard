import * as React from 'react';
import './HospitalActivity.scss'
import { AiOutlineLike } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'


const HospitalActivity = () => {
    return (
        <section className=''>
            <ul className="timeline">
                <li className="timeline-item mb-5  d-flex align-items-start flex-column">
                    <p className="text-date">20-04-2018 - Today</p>
                    <h5 className="mb-2 fw-bold">A Brief History Of Anesthetics</h5>
                    <p className="text-name">
                        <span>Elisse Joson</span> San Francisco, CA
                    </p>
                    <p className='text-comment'>
                        I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things.
                    </p>
                    <div className="d-flex gap-3">
                        <div className='text-comment-icons'>
                            <AiOutlineLike className="text-comment-icons" /> like
                        </div>
                        <div className='text-comment-icons'>
                            <FaRegComment className="text-comment-icons" /> comment
                        </div>
                    </div>
                </li>
                <li className="timeline-item mb-5  d-flex align-items-start flex-column">
                    <p className="text-date">20-04-2018 - Today</p>
                    <h5 className="mb-2 fw-bold">A Brief History Of Anesthetics</h5>
                    <p className="text-name">
                        <span>Elisse Joson</span> San Francisco, CA
                    </p>
                    <p className='text-comment'>
                        I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things.
                    </p>
                    <div className="d-flex gap-3">
                        <div className="d-flex gap-3">
                            <div className='text-comment-icons'>
                                <AiOutlineLike className="text-comment-icons" /> like
                            </div>
                            <div className='text-comment-icons'>
                                <FaRegComment className="text-comment-icons" /> comment
                            </div>
                        </div>
                    </div>
                </li>
                <li className="timeline-item mb-5  d-flex align-items-start flex-column">
                    <p className="text-date">20-04-2018 - Today</p>
                    <h5 className="mb-2 fw-bold">A Brief History Of Anesthetics</h5>
                    <p className="text-name">
                        <span>Elisse Joson</span> San Francisco, CA
                    </p>
                    <p className='text-comment'>
                        I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things.
                    </p>
                    <div className="d-flex gap-3">
                        <div className='text-comment-icons'>
                            <AiOutlineLike className="text-comment-icons" /> like
                        </div>
                        <div className='text-comment-icons'>
                            <FaRegComment className="text-comment-icons" /> comment
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default HospitalActivity;