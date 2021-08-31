import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import * as redux from 'react-redux';

import { Header } from '.';

describe('Header component', () => {
  it('redirects to shopping cart', async () => {
    const spy = jest.spyOn(redux, 'useSelector')
    spy.mockReturnValue({ quantityOfProducts: 0 })

    const component = renderer.create(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    let componentJson = component.toJSON();
    expect(componentJson).toMatchSnapshot();
  });
});