import React from 'react'
import { useLocation } from 'react-router-dom';
import { Card, CardContent, Avatar, Grid, Paper, Box, CircularProgress } from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import AdbOutlinedIcon from '@mui/icons-material/AdbOutlined';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import './ViewDoctor.scss'
const ViewDoctor = () => {
    const loc = useLocation()
    return (
        <div className='w-100'>
            <Grid container spacing={4} >
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <div className="w-100">
                                <Card sx={{ minWidth: 275, backgroundColor: "#DCDCDC" }}>
                                    <CardContent>
                                        <div className="d-flex justify-content-center p-3">
                                            <Avatar
                                                alt="Remy Sharp"
                                                src="https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4="
                                                sx={{ width: 150, height: 150 }}
                                            />
                                        </div>
                                        <div className="content">
                                            <h6 className='content-name'>Chandler Bing</h6>
                                            <span className='content-text'>Washington, d.c.</span>
                                        </div>

                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item xs={8}>
                            <Paper elevation={1} >
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Grid item xs={3}>
                                                <div className="d-flex flex-column gap-2 justify-content-center pt-4 pb-4 align-items-center">
                                                    <div className='cart--show'>
                                                        <ThumbUpAltIcon className="cart--show-icon" />
                                                        <div className="cart--show-number">2345</div>
                                                        <div className='cart--show-text'>Experience</div>
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <div className="d-flex flex-column gap-2 justify-content-center pt-4 pb-4 align-items-center">
                                                    <div className='cart--show'>
                                                        <StarPurple500OutlinedIcon className="cart--show-icon" />
                                                        <div className="cart--show-number">2345</div>
                                                        <div className='cart--show-text'>Awards</div>
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <div className="d-flex flex-column gap-2 justify-content-center pt-4 pb-4 align-items-center">
                                                    <div className='cart--show'>
                                                        <PersonSharpIcon className="cart--show-icon" />
                                                        <div className="cart--show-number">2345</div>
                                                        <div className='cart--show-text'>Clients</div>
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <div className="d-flex flex-column gap-2 justify-content-center pt-4 pb-4 align-items-center">
                                                    <div className='cart--show'>
                                                        <AdbOutlinedIcon className="cart--show-icon" />
                                                        <div className="cart--show-number">2345</div>
                                                        <div className='cart--show-text'>Surgery</div>
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Box className="mt-3">
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Grid container spacing={4}>
                                            <Grid item xs={3}>
                                                <Card sx={{ width: "100%" }}>
                                                    <CardContent>
                                                        <div>
                                                            <div className="w-100 h-100">
                                                                <CircularProgress variant="determinate" value={100} />
                                                            </div>
                                                            <div>Events</div>
                                                            <span>12 of this month</span>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Card sx={{ width: "100%" }}>
                                                    <CardContent>
                                                        <div>
                                                            <div className="w-100 h-100">
                                                                <CircularProgress variant="determinate" value={100} />
                                                            </div>
                                                            <div>Events</div>
                                                            <span>12 of this month</span>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Card sx={{ width: "100%" }}>
                                                    <CardContent>
                                                        <div>
                                                            <div className="w-100 h-100">
                                                                <CircularProgress variant="determinate" value={100} />
                                                            </div>
                                                            <div>Events</div>
                                                            <span>12 of this month</span>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Card sx={{ width: "100%" }}>
                                                    <CardContent>
                                                        <div>
                                                            <div className="w-100 h-100">
                                                                <CircularProgress variant="determinate" value={100} />
                                                            </div>
                                                            <div>Events</div>
                                                            <span>12 of this month</span>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default ViewDoctor; 