import CreateButton from './CreateButton';
import CustomHome from './CustomHome';
import CustomRouterLink from './CustomRouterLink';
import SignInButton from './SignInButton';
import {
  AtlassianNavigation,
  PrimaryButton,
} from '@atlaskit/atlassian-navigation';

const Navbar = () => (
  <AtlassianNavigation
    label="site"
    primaryItems={[
      <PrimaryButton
        component={CustomRouterLink}
        href={'item1'}
        key={'nav-item-1'}
      >
        Item 1
      </PrimaryButton>,
      <PrimaryButton
        component={CustomRouterLink}
        href={'item2'}
        isHighlighted={true}
        key={'nav-item-2'}
      >
        Item 2
      </PrimaryButton>,
      <PrimaryButton
        component={CustomRouterLink}
        href={'item3'}
        key={'nav-item-3'}
      >
        Item 3
      </PrimaryButton>,
    ]}
    renderCreate={CreateButton}
    renderProductHome={CustomHome}
    renderSignIn={SignInButton}
  />
);

export default Navbar;
