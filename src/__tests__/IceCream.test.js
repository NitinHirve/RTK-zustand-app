
import App from '../App';
import { render as rtlRender, screen } from '@testing-library/react';

import { useAppSelector, useAppDispatch } from '../ForTesting/redux-hooks';
import { textUseIceCreamSelector } from '../ForTesting/test-user-selector';
import IceCreamView from '../features/icecream/IceCreamView'

import { toBeInTheDocument } from '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import store from '../app/store';
import { Provider } from 'react-redux';

const render = component => rtlRender(
    <Provider store={store()}>
        {component}
    </Provider>

)


jest.mock('../ForTesting/redux-hooks');



describe('Test cases for Ice cream', () => {

    const dispatch = jest.fn();

    // beforeEach(() => {
    //     useAppSelector.mockImplementation(store.icecream);
    //     useAppDispatch.mockImplementation(() => dispatch)
    // })

    // afterEach(() => {
    //     jest.clearAllMocks();
    // })

    test('Initial test case', () => {

        render(<IceCreamView />)
        const h4text = screen.getByText('Number of Ice cream', { exact: false });
        expect(h4text).toBeInTheDocument();

    })

    test('Order Ice cream functionality', () => {



        render(<IceCreamView />)

        const orderIceCreamBtn = screen.getByRole("button", { name: 'Order Ice cream', exact: false });
        userEvent.click(orderIceCreamBtn);

        // const iceCreamCount = screen.getByText(' 39',{exact:false});
        // expect(iceCreamCount).toBeInTheDocument();

        expect(useAppDispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith({
            "type": "icecream/ordered"
        });
        screen.debug();


    })
})