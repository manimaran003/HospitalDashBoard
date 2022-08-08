import React, { useState } from 'react';
import FormikControl from '../CustomComponent/FormikControl';
import { Grid } from '@mui/material';
interface CountryOption {
  id: string;
  key: string;
  data: string;
}
interface specialistDoctor {
  id: string;
  key: string;
  data: string;
}
const FomrikCheckerComponent: React.FC<{
  checkFormik: any;
  countryData: CountryOption;
  specialist: specialistDoctor;
  schemaInitial: any;
  patientAdder: boolean;
}> = ({ checkFormik, countryData, specialist, schemaInitial, patientAdder }) => {
  const [image, setImg] = useState('');
  return (
    <div>
      <div>
        <Grid container>
          <Grid item xs={12}>
            <FormikControl
              control="upload"
              name="doctorImage"
              type="file"
              onChange={(event: any) => {
                console.log(event.target.files);
                checkFormik.setFieldValue('doctorImage', event.target.files);
                let reader: any;
                reader = new FileReader();
                reader.onload = () => {
                  setImg(reader.result);
                };
                reader.readAsDataURL(event.target.files[0]);
                console.log(reader);
              }}
              error={checkFormik.errors?.schemaInitial?.doctorImage}
              imgData={image}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormikControl
              control="input"
              type="text"
              label="Name"
              name="doctorName"
              onBlur={checkFormik.handleBlur}
              onChange={checkFormik.handleChange}
              error={
                checkFormik.touched?.schemaInitial?.doctorName &&
                Boolean(checkFormik.errors?.schemaInitial?.doctorName)
              }
              helperText={
                checkFormik.touched?.schemaInitial?.doctorName &&
                checkFormik.errors?.schemaInitial?.doctorName
              }
            />
          </Grid>
          <Grid item xs={6}>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
              onChange={checkFormik.handleChange}
              error={
                checkFormik.touched?.schemaInitial?.email &&
                Boolean(checkFormik.errors?.schemaInitial?.email)
              }
              helperText={
                checkFormik.touched?.schemaInitial?.email &&
                checkFormik.errors?.schemaInitial?.email
              }
            />
          </Grid>
          <Grid item xs={6}>
            <FormikControl
              control="input"
              type="text"
              label="Address"
              name="address"
              onChange={checkFormik.handleChange}
              error={
                checkFormik.touched?.schemaInitial?.address &&
                Boolean(checkFormik.errors?.schemaInitial?.address)
              }
              helperText={
                checkFormik.touched?.schemaInitial?.address &&
                checkFormik.errors?.schemaInitial?.address
              }
            />
          </Grid>
          <Grid item xs={6}>
            <FormikControl
              control="input"
              type="text"
              label="PhoneNumber"
              name="phoneNumber"
              onChange={checkFormik.handleChange}
              error={
                checkFormik.touched?.schemaInitial?.phoneNumber &&
                Boolean(checkFormik.errors?.schemaInitial?.phoneNumber)
              }
              helperText={
                checkFormik.touched?.schemaInitial?.phoneNumber &&
                checkFormik.errors?.schemaInitial?.phoneNumber
              }
            />
          </Grid>
          <Grid item xs={6}>
            <FormikControl
              control="select"
              label="Country"
              name="country"
              options={countryData}
              onChange={checkFormik.handleChange}
              error={
                checkFormik.touched?.schemaInitial?.country &&
                Boolean(checkFormik.errors?.schemaInitial?.country)
              }
              helperText={
                checkFormik.touched?.schemaInitial?.country &&
                checkFormik.errors?.schemaInitial?.country
              }
            />
          </Grid>
          <Grid item xs={6}>
            <FormikControl
              control="select"
              label="Speciality"
              name="specialist"
              onChange={checkFormik.handleChange}
              options={specialist}
              error={
                checkFormik.touched?.schemaInitial?.specialist &&
                Boolean(checkFormik.errors?.schemaInitial?.specialist)
              }
              helperText={
                checkFormik.touched?.schemaInitial?.specialist &&
                checkFormik.errors?.schemaInitial?.specialist
              }
            />
          </Grid>

          <Grid item xs={6}>
            <FormikControl
              control="input"
              label="Dob"
              name="dob"
              type="date"
              onChange={checkFormik.handleChange}
              error={
                checkFormik.touched?.schemaInitial?.dob &&
                Boolean(checkFormik.errors?.schemaInitial?.dob)
              }
              helperText={
                checkFormik.touched?.schemaInitial?.dob && checkFormik.errors?.schemaInitial?.dob
              }
            />
          </Grid>
          {patientAdder && (
            <>
              <Grid item xs={6}>
                <FormikControl
                  control="input"
                  label="Age"
                  name="age"
                  type="number"
                  onChange={checkFormik.handleChange}
                  error={
                    checkFormik.touched?.schemaInitial?.age &&
                    Boolean(checkFormik.errors?.schemaInitial?.age)
                  }
                  helperText={
                    checkFormik.touched?.schemaInitial?.age &&
                    checkFormik.errors?.schemaInitial?.age
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <FormikControl
                  control="input"
                  label="AdmitDate"
                  name="admitDate"
                  type="date"
                  onChange={checkFormik.handleChange}
                  error={
                    checkFormik.touched?.schemaInitial?.admitDate &&
                    Boolean(checkFormik.errors?.schemaInitial?.admitDate)
                  }
                  helperText={
                    checkFormik.touched?.schemaInitial?.admitDate &&
                    checkFormik.errors?.schemaInitial?.admitDate
                  }
                />
              </Grid>
            </>
          )}
        </Grid>
        <div></div>
      </div>
      <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
          Cancel
        </button>
        <button className="btn btn-secondary" aria-label="Close">
          save
        </button>
      </div>
    </div>
  );
};

export default FomrikCheckerComponent;
