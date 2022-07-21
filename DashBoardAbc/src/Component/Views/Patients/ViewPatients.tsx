import React from 'react'
import { useLocation } from 'react-router-dom'
import { Paper, Avatar } from '@mui/material'
import './ViewPatients.scss'
const ViewPatients = () => {
    let location = useLocation()
    return (
        <div className='view--card d-flex'>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <Paper className="view--paper">
                    <div className=''>
                        <div className='img--card'>
                            ManiMaran
                        </div>
                        <div className="avatar--card">
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                                sx={{ width: 200, height: 200 }}
                            />
                        </div>
                    </div>
                </Paper>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-8 col-xl-">
            </div>
        </div>
    )
}

export default ViewPatients