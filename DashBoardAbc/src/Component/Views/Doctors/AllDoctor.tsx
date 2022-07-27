import React from 'react'
import './AllDoctor.scss'
import { Grid } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom'
import CustomAddModal from '../../Utils/CustomAddModal'
interface DoctorProfile {
    id: number,
    name: string,
    img: string,
    address: string,
    role: string

}
const Data: DoctorProfile[] = [
    {
        id: 1,
        name: "jonas",
        img: "https://www.felixhospital.com/sites/default/files/2022-06/Dr.%20Parag%20Agarwal.jpg",
        address: "795 Folsom Ave, Suite 600 San Francisco, faCADGE 94107",
        role: "Dentist"
    },
    {
        id: 2,
        name: "jonas",
        img: "https://www.felixhospital.com/sites/default/files/2022-06/Dr.%20Parag%20Agarwal.jpg",
        address: "795 Folsom Ave, Suite 600 San Francisco, faCADGE 94107",
        role: "Dentist"
    },
    {
        id: 3,
        name: "jonas",
        img: "https://www.felixhospital.com/sites/default/files/2022-06/Dr.%20Parag%20Agarwal.jpg",
        address: "795 Folsom Ave, Suite 600 San Francisco, faCADGE 94107",
        role: "Dentist"
    },
    {
        id: 4,
        name: "jonas",
        img: "https://www.felixhospital.com/sites/default/files/2022-06/Dr.%20Parag%20Agarwal.jpg",
        address: "795 Folsom Ave, Suite 600 San Francisco, faCADGE 94107",
        role: "Dentist"
    },
    {
        id: 5,
        name: "jonas",
        img: "https://www.felixhospital.com/sites/default/files/2022-06/Dr.%20Parag%20Agarwal.jpg",
        address: "795 Folsom Ave, Suite 600 San Francisco, faCADGE 94107",
        role: "Dentist"
    }
]

const AllDoctor = () => {

    return (
        <div className="w-100 mt-3 cursor-pointer">
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                            <div className='w-100 h-100'>
                                <div className="w-48 h-100 rounded overflow-hidden shadow-lg d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center p-3 flex-column align-items-center">
                                        <div>
                                            <p className="add--icon-content">Add new  Doctor</p>
                                        </div>
                                        <div className="add--icon">
                                            <AddIcon data-bs-toggle="modal" data-bs-target="#exampleModal" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <CustomAddModal id={"exampleModal"}  />
                        </Grid>
                        {
                            Data?.map((item: DoctorProfile) => {
                                return (
                                    <>
                                        <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                                            <Link to={`/dashboard/ViewDoctor`}
                                                state={{ test: item }}>
                                                <div className='w-100'>
                                                    <div className="w-48 rounded overflow-hidden shadow-lg">
                                                        <div className="d-flex justify-content-center p-3">
                                                            <div className='rounded--image'>
                                                                <img className='' src="https://media.istockphoto.com/photos/indian-male-doctor-picture-id177373093?k=20&m=177373093&s=612x612&w=0&h=-PQwmaJszuQyxLQYuWL4VL731lr_dnhrttc4AOcB3-k=" alt="doc" />
                                                            </div>
                                                        </div>
                                                        <div className="px-6 py-4 card--content">
                                                            <div className="font-bold text-xl card--content-name">Dr. John Smith</div>
                                                            <span className='card--content-role'>Dentist</span>
                                                            <div>
                                                                <p className='card--content-address mt-2'>795 Folsom Ave, Suite 600 San Francisco, faCADGE 94107</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Grid>

                                    </>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default AllDoctor;