import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { CatalogItem } from './CatalogItem';

describe('CatalogItem', () => {
    test('Show name', () => {
        const name = 'Test Name';

        render(
            <BrowserRouter>
                <CatalogItem _id={'id'} name={name} />
            </BrowserRouter>
        );

        expect(screen.queryByText(name)).toBeInTheDocument()
    });

});
