import { Link } from '@reach/router';

const AsideNavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: `${
          isCurrent ? 'border-brand-500 text-secondary' : ' border-transparent text-secondary-dark'
        } block border-l-4 px-4 py-1 flex justify-between hover:text-secondary`
      };
    }}
  />
);

export default AsideNavLink;
