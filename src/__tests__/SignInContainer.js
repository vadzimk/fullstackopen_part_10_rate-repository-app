
import {render, fireEvent, waitFor} from "@testing-library/react-native";
import React from 'react';
import {SignInContainer} from "../components/SignIn.jsx";

describe('SignIn', () => {
    it('submits the form', async () => {
        const onSubmit = jest.fn();

        const {getByTestId} = render(<SignInContainer onSubmit={onSubmit}/>);

        fireEvent.changeText(getByTestId('username'), 'kalle');
        fireEvent.changeText(getByTestId('password'), 'password');
        fireEvent.press(getByTestId('submitbutton'));

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledTimes(1);
            expect(onSubmit.mock.calls[0][0]).toEqual({
                    username: 'kalle',
                    password: 'password'
                }
            );
        });
    });
});