import { Story } from '@storybook/api';
// eslint-disable-next-line fsd-relative-path-checker/layer-imports
import 'app/styles/index.scss';

export const StyleDecorator = (story: () => Story) => story();
