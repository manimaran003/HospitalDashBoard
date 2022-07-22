import * as React from 'react';
import './HospitalActivity.scss'
import { AiOutlineLike } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { Card, CardMedia, Divider } from '@mui/material'


const HospitalActivity: React.FC<{ activities: string, reportsData: any }> = (props) => {
    console.log(props.reportsData, "penil")
    return (
        <div>
            {
                props.activities === "HospitalActivity" ? (
                    <>
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


                            </ul>
                        </section>
                    </>
                ) : (
                    <>
                        <section className=''>
                            <ul className="timeline">
                                {
                                    props.reportsData.length > 0 && props.reportsData.map((val: any) => {
                                        return val.TimeLine.map((it: any) => {
                                            return (
                                                <>
                                                    <li className="timeline-item mb-5  d-flex align-items-start flex-column">
                                                        <p className="text-date">20-04-2018 - Today</p>
                                                        <h5 className="mb-2 fw-bold">A Brief History Of Anesthetics</h5>
                                                        <p className="text-name">
                                                            <span>Elisse Joson</span> San Francisco, CA
                                                        </p>
                                                        <p className="text-name">
                                                            <span>Elisse Joson</span>
                                                        </p>
                                                        <p className='text-comment'>
                                                            I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things.
                                                        </p>
                                                        <div className="w-100">
                                                            <div className="d-flex gap-5">
                                                                <Card sx={{ width: 300 }}>
                                                                    <CardMedia
                                                                        component="img"
                                                                        height="140"
                                                                        image="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                                        alt="green iguana"
                                                                    />
                                                                </Card>
                                                                <Card sx={{ width: 300 }}>
                                                                    <CardMedia
                                                                        component="img"
                                                                        height="140"
                                                                        image="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                                        alt="green iguana"
                                                                    />
                                                                </Card>
                                                            </div>
                                                            <div className="report--table w-100 d-flex gap-3 mt-4">
                                                                <div className="reports">
                                                                    <div className="d-flex justify-content-start">Analysis IDFB-3</div>
                                                                    <Divider />
                                                                    <div className="d-flex justify-content-between gap-5">
                                                                        <span>Down Cluster</span>
                                                                        <span>90.9%</span>
                                                                    </div>
                                                                    <Divider />
                                                                    <div className="d-flex justify-content-between gap-5">
                                                                        <span>Down Cluster</span>
                                                                        <span>90.9%</span>
                                                                    </div>
                                                                    <Divider />
                                                                    <div className="d-flex  justify-content-between gap-5">
                                                                        <span>Down Cluster</span>
                                                                        <span>90.9%</span>
                                                                    </div>
                                                                    <Divider />
                                                                    <div className="d-flex justify-content-between gap-5">
                                                                        <span>Down Cluster</span>
                                                                        <span>90.9%</span>
                                                                    </div>
                                                                    <Divider />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </li>
                                                </>
                                            )
                                        })
                                    })
                                }
                            </ul>
                        </section>
                    </>
                )
            }
        </div>

    );
}

export default HospitalActivity;