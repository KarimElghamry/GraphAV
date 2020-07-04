import styled from 'styled-components';
import Theme from '../../models/Theme';

interface Props {
  theme: Theme;
}

const sliderTrackStyles = `
    width:100%;
    height:3px;
    cursor: pointer;
    background: #EFEFEF;
    border: none;
    border-radius: 200px;
`;

const Slider = styled.div`
    width: 200px;
    height: 25px;
    background-color: transparent;
    border: none;
    padding-left:20px;
    input{
        outline:none;
    }

    .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 25px;
        background: transparent;

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            margin-top:-7px;    /*fix chrome thumb not alligning with track*/
            appearance:none;
            width:18px;
            height:18px;
            background: ${(props) => props.theme.slider.background};
            border: 1px solid;
            border-color: ${(props) => props.theme.slider.foreground};
            border-radius: 200px;
        }
        
        &::-moz-range-thumb {
            width:16px;
            height:16px;
            background: ${(props) => props.theme.slider.background};
            border: 1px solid;
            border-color: ${(props) => props.theme.slider.foreground};
            border-radius: 200px;        
        }

        &::-ms-thumb {
            margin: 0px; /*removes the margin to fix thumb and track allignment in chrome from ie*/
        }

        &::-moz-focus-outer {
            border: 0; /* removes dotted border when clicked on in firefox */
        }

        &::-webkit-slider-runnable-track{
            ${sliderTrackStyles}
            background: ${(props) => props.theme.slider.background};
        }

        &::-moz-range-track{
            ${sliderTrackStyles}

        }

        &::-ms-track {
            ${sliderTrackStyles}
        }

        &::-moz-range-progress {
             background: ${(props) => props.theme.slider.background};
        }
    }
`;

export default Slider;
