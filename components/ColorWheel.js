import React, { useEffect, useRef } from 'react';
import iro from '@jaames/iro';
import Color from 'color';

function ColorWheel(props) {
  const elRef = useRef(null);
  const colorPickerRef = useRef(null);

  const createColorWheel = (colors) => {
    // Create a new iro color picker and pass component props to it
    colorPickerRef.current = new iro.ColorPicker(elRef.current, {
      ...props,
      borderWidth: 2,
      colors, // Pass an array of colors
      layout: [
        {
          component: iro.ui.Wheel,
          options: {
            borderColor: '#4b5563',
            wheelAngle: 0,
            wheelDirection: 'anticlockwise',
          },
        },
        {
          component: iro.ui.Slider,
          options: {
            borderColor: '#4b5563',
            margin: 30,
          },
        },
      ],
    });
  };

  // Create a new color wheel when the component mounts
  useEffect(() => {
    createColorWheel([props.color, '#E1341E']);
  }, []);

  // Call onColorChange prop whenever the color changes
  useEffect(() => {
    colorPickerRef.current.on('color:change', (color) => {
      const activeColor = color.hexString;
      handleMode(activeColor, colorPickerRef, props);
    });
  }, [props]);

  useEffect(() => {
    // Check if the props.color is a valid hex color
    const isValidHex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(props.color);

    if (!isValidHex) return;

    colorPickerRef.current.setColors([props.color]);
    handleMode(props.color, colorPickerRef, props);
  }, [props.color]);

  // Set the color wheel colors based on the mode
  useEffect(() => {
    const activeColor = colorPickerRef.current.color.hexString;
    handleMode(activeColor, colorPickerRef, props);
  }, [props.mode]);

  return <div ref={elRef} />;
}

function handleMode(color, ref, props) {
  switch (props.mode) {
    case 'complementary':
      setComplementaryColors(color, ref, props);
      break;
    case 'monochromatic':
      setMonochromaticColors(color, ref, props);
      break;
    case 'analogous':
      setAnalogusColors(color, ref, props);
      break;
    case 'triadic':
      setTriadicColors(color, ref, props);
      break;
    case 'tetradic':
      setTetradicColors(color, ref, props);
      break;
    default:
      break;
  }

  props.setColor(color);
}

function setComplementaryColors(color, colorWheel, props) {
  const secondaryColor = Color(color).rotate(180).hex();
  colorWheel.current.setColors([color, secondaryColor]);
  props.setColors([color, secondaryColor]);
}

function setMonochromaticColors(color, colorWheel, props) {
  colorWheel.current.setColors([color]);

  const selectedColor = Color(color);
  const shades = [];

  if (selectedColor.isDark()) {
    shades.push(selectedColor.lighten(0.1).hex());
    shades.push(selectedColor.lighten(0.2).hex());
    shades.push(selectedColor.lighten(0.3).hex());
  } else {
    shades.push(selectedColor.darken(0.1).hex());
    shades.push(selectedColor.darken(0.2).hex());
    shades.push(selectedColor.darken(0.3).hex());
  }

  props.setColors([color, ...shades]);
}

function setAnalogusColors(color, colorWheel, props) {
  const secondaryColor = Color(color).rotate(30).hex();
  const tertiaryColor = Color(color).rotate(-30).hex();
  colorWheel.current.setColors([color, secondaryColor, tertiaryColor]);
  props.setColors([color, secondaryColor, tertiaryColor]);
}

function setTriadicColors(color, colorWheel, props) {
  const secondaryColor = Color(color).rotate(120).hex();
  const tertiaryColor = Color(color).rotate(240).hex();
  colorWheel.current.setColors([color, secondaryColor, tertiaryColor]);
  props.setColors([color, secondaryColor, tertiaryColor]);
}

function setTetradicColors(color, colorWheel, props) {
  const secondaryColor = Color(color).rotate(90).hex();
  const tertiaryColor = Color(color).rotate(180).hex();
  const quaternaryColor = Color(color).rotate(270).hex();
  colorWheel.current.setColors([
    color,
    secondaryColor,
    tertiaryColor,
    quaternaryColor,
  ]);
  props.setColors([color, secondaryColor, tertiaryColor, quaternaryColor]);
}

export default ColorWheel;
