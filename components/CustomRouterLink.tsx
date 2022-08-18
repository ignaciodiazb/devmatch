import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  href: string;
}

const CustomRouterLink = ({ children, href }: Props) => (
  <Link href={href}>
    <a>{children}</a>
  </Link>
);

export default CustomRouterLink;
