import React from 'react';
import clsx from 'clsx';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import {
  Box,
  Button,
  TextField,
  makeStyles
} from '@material-ui/core';
import axios from 'src/utils/axios';
import { API_BASE_URL } from 'src/config';
import {useParams} from 'react-router-dom';


const useStyles = makeStyles(() => ({
  root: {}
}));

function RegisterForm({ className, onSubmitSuccess, invoice, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const params = useParams();
  const id = params.Id;

  return (
    <Formik
      initialValues={{
        customername: invoice.customerName,
        location:invoice.customerLocation,
        product: invoice.product,
        paid: invoice.paid,
        unpaid: invoice.unpaid
      }}
      validationSchema={Yup.object().shape({
        customername: Yup.string().max(255).required('user name is required'),
        location: Yup.string().max(255).required('location is required'),
        product: Yup.string().max(255).required('invoice product is required'),
        paid: Yup.number().required('paid amount is required'),
        unpaid: Yup.number().required('unpaid amount is required')
      })}
      onSubmit={async (values, {
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {
          const {customername, location, product, paid, unpaid} =values;
          var data ='';

          await axios.post(API_BASE_URL+'sales/update', { id, customername, location, product, paid, unpaid})
            .then((response) => {
                data = response.data; 
            })
            if(data.success)
            {
              setStatus({ success: true });
              setSubmitting(false);   
              enqueueSnackbar(data.message, {
              variant: 'success',
            });    }
            else {
              enqueueSnackbar(data.message, {
                variant: 'error'
              }); 
            }
            onSubmitSuccess(); 
        }
       catch (error) {
          setStatus({ success: false });
          setErrors({ submit: error.message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values
      }) => (
        <form
          className={clsx(classes.root, className)}
          onSubmit={handleSubmit}
          {...rest}
        >
          <TextField
            error={Boolean(touched.customername && errors.customername)}
            fullWidth
            helperText={touched.customername && errors.usercustomernamename}
            label="Customer name"
            margin="normal"
            name="customername"
            onBlur={handleBlur}
            onChange={handleChange}
            type="string"
            value={values.customername}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.location && errors.location)}
            fullWidth
            helperText={touched.location && errors.location}
            label="Customer Location(country or city)"
            margin="normal"
            name="location"
            onBlur={handleBlur}
            onChange={handleChange}
            type="string"
            value={values.location}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.product && errors.product)}
            fullWidth
            helperText={touched.product && errors.product}
            label="Invoice Product"
            margin="normal"
            name="product"
            onBlur={handleBlur}
            onChange={handleChange}
            type="string"
            value={values.product}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.paid && errors.paid)}
            fullWidth
            helperText={touched.paid && errors.paid}
            label="Paid Amount($)"
            margin="normal"
            name="paid"
            onBlur={handleBlur}
            onChange={handleChange}
            type="number"
            value={values.paid}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.unpaid && errors.unpaid)}
            fullWidth
            helperText={touched.unpaid && errors.unpaid}
            label="Unpaid Amount($)"
            margin="normal"
            name="unpaid"
            onBlur={handleBlur}
            onChange={handleChange}
            type="number"
            value={values.unpaid}
            variant="outlined"
          />
          <Box mt={2}>
            <Button
              color="secondary"
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Save
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}

RegisterForm.propTypes = {
  className: PropTypes.string,
  onSubmitSuccess: PropTypes.func
};

RegisterForm.default = {
  onSubmitSuccess: () => {}
};

export default RegisterForm;
