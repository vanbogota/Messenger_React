import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { GistsList } from './gists';

describe('gists test', () => {
    it('matches snapshot with no article', () => {
        const component = render(
            <GistsList />
        );
        expect(component).toMatchSnapshot();
    })
});

