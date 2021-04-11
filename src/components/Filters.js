import './Filters.scss';
import React, { useState } from 'react';


import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import Slider from '@material-ui/core/Slider';

function valuetext(value) {
    return `$${value}`;
  }

const Filters = ({collectionFilter, colorFilter, categoryFilter, priceFilter, resetProductsArray}) => {
    
        const [ valueSlider , setValueSlider] = useState([90, 3000]);
        const [ valueCollection , setvalueCollection ] = useState("")
        const [ valueColor , setvalueColor ] = useState("")
        const [ valueCategory , setvalueCategory ] = useState("")
        const [ filterOpen , setFilter ] = useState(false)
      
        const handleChange = (event, newValue) => {
          setValueSlider(newValue);
          priceFilter(newValue)
        };

        const handleChangeCollection = (e) => {
            setvalueCollection(e.target.value)
            collectionFilter(e.target.value)
        }

        const handleChangeColor= (e) => {
            setvalueColor(e.target.value)
            colorFilter(e.target.value)
        }

        const handleChangeCategory = (e) => {
            setvalueCategory(e.target.value)
            categoryFilter(e.target.value)
        }

        const handleClick = () => {
            setFilter(!filterOpen)
            filterOpen === false || resetProductsArray() 
        }


    return (
        <div className="filters_container">
            <p className="filters_title">FILTER BY</p>
            <Accordion className="accordion">
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={handleClick}
                >
                    <Typography className="">Collection</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="collection" name="collection" value={valueCollection} onChange={handleChangeCollection}>
                            <FormControlLabel value="modern" control={<Radio />} label="Modern" />
                            <FormControlLabel value="classic" control={<Radio />} label="Classic" />
                        </RadioGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={handleClick}
                >
                    <Typography className="">Color</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="color" name="color" value={valueColor} onChange={handleChangeColor}>
                            <FormControlLabel value="wood" control={<Radio />} label="Wood" />
                            <FormControlLabel value="gray" control={<Radio />} label="Gray" />
                            <FormControlLabel value="orange" control={<Radio />} label="Orange" />
                            <FormControlLabel value="white" control={<Radio />} label="White" />
                        </RadioGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={handleClick}
                >
                    <Typography className="">Category</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="category" name="category" value={valueCategory} onChange={handleChangeCategory}>
                            <FormControlLabel value="auxiliars" control={<Radio />} label="Auxiliars" />
                            <FormControlLabel value="furniture" control={<Radio />} label="Furniture" />
                        </RadioGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={handleClick}
                >
                    <Typography className="">Price Range</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Slider 
                        className="slider"
                        value={valueSlider}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        min={90}
                        max={3000}
                        aria-labelledby="range-slider"
                        getAriaValueText={valuetext}
                    />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Filters;