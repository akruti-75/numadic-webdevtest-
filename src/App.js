import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import "./App.css";
 

const countriesURL = "https://restcountries.eu/rest/v2/all";

const useStyles = makeStyles({
  table: {
    minWidth: 500
  },
});

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const classes = useStyles();

  const getCountriesWithAxios = async () => {
    const response = await axios.get(countriesURL);
    setCountriesData(response.data);
    setCountriesData(response.data);
  };

  useEffect(() => {
    getCountriesWithAxios();
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <TableContainer style={{backgroundColor: "lightblue" ,paddingTop:"10px", paddingBottom:"10px",
      fontFamily: ""}} component={Paper}>
            <Table className={classes.table} aria-label="simple table" style={{width:"100%",height:"100%"}}>
              <TableHead >
                <TableRow >
                  <TableCell>
                    <strong style={{color: "red"}}>Name</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong style={{color: "red"}}>Flag</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong style={{color: "red"}}>Capital</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong style={{color: "red"}}>Population</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong style={{color: "red"}}>Region</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {countriesData.map((country) => (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {country.name}
                    </TableCell>
                    <TableCell align="right" >
                      <img src={country.flag} alt="" width="32px" />
                    </TableCell>
                    <TableCell align="right">{country.capital}</TableCell>
                    <TableCell align="right">{country.population}</TableCell>
                    <TableCell align="right">{country.region}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      
    </>
    
  );
}

export default App;
