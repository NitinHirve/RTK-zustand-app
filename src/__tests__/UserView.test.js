import { render, screen } from '@testing-library/react';
import UserView from '../features/user/UserView';
import { toBeInTheDocument } from '@testing-library/jest-dom'

import { useAppSelector, useAppDispatch } from '../ForTesting/redux-hooks'
import { textUseIceCreamSelector } from '../ForTesting/test-user-selector';

jest.mock('../ForTesting/redux-hooks');

describe('User component testing', () => {

    const dispatch = jest.fn();


    beforeEach(() => {
        useAppSelector.mockImplementation(textUseIceCreamSelector)
        useAppDispatch.mockImplementation(() => dispatch)

    })

    test('Initial render', async () => {

        render(<UserView />)
        const h2Text = screen.getByText('List of Users')
        screen.debug();
        expect(h2Text).toBeInTheDocument();

        expect(useAppDispatch).toHaveBeenCalled();
        // expect(dispatch).toHaveBeenCalledWith({
        //     "type": "user"
        // });

        // const commentLi = await screen.findByText("Leanne Graham",{exact:false});  //findBy
        // expect(commentLi).toBeInTheDocument();

    })


})