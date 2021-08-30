import axios from 'axios';

import { Product } from '../../interfaces';
import { getConfig } from './index';

jest.mock('axios');

const productTest: Product = {
  createdAt: '2021-08-28T12:00:00.000Z',
  id: '1',
  image: 'https://miro.medium.com/max/544/1*REfN2oQiMwz7sgEYkJVY8g.jpeg',
  name: 'React Testing Library',
  price: '300.00',
  quantity: 2,
  stock: 10,
}

describe('ProductList page', () => {
  it('should fetches successfully data from am API', async () => {
    // Arrange
    const response = { status: 200, data: [productTest] };
    jest.spyOn(axios, 'get').mockImplementationOnce(() => 
      Promise.resolve(response)
    );

    // Act
    return getConfig().then(data => {
      // Assert
      expect(data).toEqual([productTest]);
    });
  });

  it('should fetches erroneously data from am API', async () => {
    // Arrange
    const spyWarn = jest.spyOn(global.console, "warn").mockImplementation(jest.fn());
    jest.spyOn(axios, 'get').mockRejectedValueOnce(() => 
      new Error('Failed request')
    );

    // Act 
    return getConfig().catch(data => {
      // Assert
      expect(data).toEqual('Failed request');
      expect(spyWarn).toBeCalledTimes(1);
      spyWarn.mockRestore();
    });
  });
});