import React from 'react';
import { Validations } from './Validations';
import { render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe("Validations test",()=>{
 it("should render  button as expected",()=>{
    const {getByRole} = render(<Validations/>);
    const signIn = getByRole('button',{name: 'Sign In'});
    expect(signIn).toBeInTheDocument();
})
it("should render email text field as expected",()=>{
    const {getByTestId} = render(<Validations/>);
    expect(getByTestId('email')).toBeInTheDocument(); 
})
it("should render password text field as expected",()=>{
    const {getByTestId} = render(<Validations/>);
    expect(getByTestId('password')).toBeInTheDocument();
})
})