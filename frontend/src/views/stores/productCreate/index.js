import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import ProductCreateForm from './ProductCreateForm';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    justifyContent:'center',
    paddingTop: theme.spacing(3),
    paddingBottom: 100
  }
}));

function ProductCreateView() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Product Create"
    >
       <Header />
      <Container maxWidth='md' style={{marginTop:'50px'}}>
        <ProductCreateForm />
      </Container>
    </Page>
  );
}

export default ProductCreateView;
