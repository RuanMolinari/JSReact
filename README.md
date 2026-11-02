# React Calculator

A small calculator component built with React functional components and the `useState` Hook. The project demonstrates state management, event handling, and basic arithmetic operations in a user interface.

## Features

- Numeric input through buttons.
- Addition, subtraction, multiplication, and division.
- Decimal-point input.
- Clear/reset action.
- Display of the current value and calculation result.

## Implementation

The component is defined in `calculadora_react.js` and exported as `Calculadora`.

It uses React state to keep track of:
- The current display value.
- The first operand.
- The selected arithmetic operator.

Button handlers update the state and trigger the corresponding calculation.

## Run in a React application

This repository contains the calculator component, not a complete React/Vite application scaffold. To use it:

1. Create a React project (for example, with Vite).
2. Add the required React dependencies.
3. Copy `calculadora_react.js` into the application's source directory.
4. Import and render the `Calculadora` component.
5. Add CSS for the `calculadora`, `display`, and `botoes` classes.

Example import:

```jsx
import Calculadora from './calculadora_react';
```

## Current limitations

The current implementation is a learning exercise. It does not yet include robust handling for division by zero, invalid numeric input, keyboard interaction, operator precedence, or automated tests.

## Author

Ruan Molinari — [GitHub](https://github.com/RuanMolinari)
