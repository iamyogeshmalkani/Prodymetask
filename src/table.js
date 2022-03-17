import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

export default function DescTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper style={{paddingBottom: "4rem"}} >
      <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          
            <TableRow>
              <TableCell  >
                Product  Specification
              </TableCell>
              <TableCell  >
               Reviews
              </TableCell>
              <TableCell >
               FAQs
              </TableCell>
            </TableRow>
          
            
         
          <TableBody>
          <TableRow>
            <TableCell  >
                <b>
                Category Title A
                    </b>
              
              </TableCell>

            </TableRow>
              <TableRow>
                  <TableCell>
                  Field Name
                 </TableCell>
                 <TableCell>
                     Field Value
                 </TableCell>
                  
              </TableRow>
              <TableRow>
                  <TableCell>
                  Field Name
                 </TableCell>
                 <TableCell>
                     Field Value
                 </TableCell>
                  
              </TableRow>
              <TableRow>
                  <TableCell>
                  Field Name
                 </TableCell>
                 <TableCell>
                     Field Value
                 </TableCell>
                  
              </TableRow>
          </TableBody>
          <TableBody>
          <TableRow>
          <TableCell  >
                <b>
                Category Title B
                    </b>
              
              </TableCell>

            </TableRow>
              <TableRow>
                  <TableCell>
                  Field Name
                 </TableCell>
                 <TableCell>
                     Field Value
                 </TableCell>
                  
              </TableRow>
              
          </TableBody>
          <TableBody>
          <TableRow>
          <TableCell  >
                <b>
                Category Title C
                    </b>
              
              </TableCell>

            </TableRow>
              <TableRow>
                  <TableCell>
                  Field Name
                 </TableCell>
                 <TableCell>
                     Field Value
                 </TableCell>
                  
              </TableRow>
              <TableRow>
                  <TableCell style={{color: "#F07732"}} align="right" colSpan={3}>
                 view More
                 </TableCell>
                 
                  
              </TableRow>

              
          </TableBody>
          
      
        </Table>
      </TableContainer>
     
    </Paper>
  );
}
