import Link from 'next/link';
import React, {useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface ComponentProps {
  label: string;
  href: string;
  activeOnlyWhenExact?: boolean;
}

const ActiveLink: React.FC<ComponentProps> = ({label, href, activeOnlyWhenExact}) => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsActive(
      activeOnlyWhenExact
        ? router.pathname === href
        : router.pathname.startsWith(href)
    );
  }, [router.pathname, href, activeOnlyWhenExact]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsActive(true);
    router.push(href);
  };

  return (
    <a
      href={href}
      className={`nav-link block hover:text-white focus:text-white focus:outline-none font-semibold md:mr-4 ${
        isActive ? 'active' : ''
      }`}
      style={{
        color: isActive ? '#21ADA8' : '#2e2d2d',
        transition: 'color 0.2s',
      }}
      onClick={handleClick}
      onMouseEnter={() => {
        const link = document.querySelector(
          `.nav-link[href="${href}"]`
        ) as HTMLAnchorElement;
        link.style.color = '#21ADA8';
      }}
      onMouseLeave={() => {
        const link = document.querySelector(
          `.nav-link[href="${href}"]`
        ) as HTMLAnchorElement;
        link.style.color = isActive ? '#21ADA8' : '#2e2d2d';
      }}
    >
      {label}
    </a>
  );
};

export default ActiveLink;
