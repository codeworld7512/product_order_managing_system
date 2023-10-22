import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import axios from 'src/utils/axios';
import Page from 'src/components/Page';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Header from './Header';
import Results from './Results';
import { API_BASE_URL } from 'src/config';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: 100
  }
}));

function InvoiceListView() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [invoices, setInvoices] = useState(null);

  const getInvoices = useCallback(() => {
    axios
      .get(API_BASE_URL + 'sales/list')
      .then((response) => {
        if (isMountedRef.current) {
          setInvoices(response.data.invoices);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getInvoices();
  }, [getInvoices]);

  if (!invoices) {
    return null;
  }

  const ondelete =(invoiceId) =>{
      axios
      .get(API_BASE_URL + 'sales/delete/'+invoiceId)
      .then((response) => {
        setInvoices(response.data.sales);
      });
  }
  return (
    <Page
      className={classes.root}
      title="Invoice List"
    >
      <Container maxWidth={false}>
        <Header />
          <Box mt={15}>
            <Results invoices={invoices} deleteInvoice={ondelete}/>
          </Box>
      </Container>
    </Page>
  );
}

export default InvoiceListView;
