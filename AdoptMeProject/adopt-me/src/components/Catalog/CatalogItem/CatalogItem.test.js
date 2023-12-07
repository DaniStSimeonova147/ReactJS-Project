import React from 'react';
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { CatalogItem } from './CatalogItem';

describe('CatalogItem', () => {
    const testItem = {
        _id: '1',
        name: 'Ro',
        type: 'dog',
        imageUrl: '/test.jpg',
      };
    
      it('Renders the CatalogItem component', () => {
        render(
          <BrowserRouter>
            <CatalogItem {...testItem} />
          </BrowserRouter>
        );
    
        expect(screen.getByAltText('post')).toBeInTheDocument();
        expect(screen.getByText('Name: Ro')).toBeInTheDocument();
        expect(screen.getByText('Type: dog')).toBeInTheDocument();
        expect(screen.getByText('See details')).toBeInTheDocument();
      });

});
