import { FC } from 'react';
import { LinksFunction, V2_MetaFunction as MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import tailwind from 'tailwindcss/tailwind.css';
import Fathom from './components/Fathom';

export const meta: MetaFunction = () => {
  return [
    { title: 'Full Snack Developer for Hire | Josh Manders' },
    {
      name: 'description',
      content:
        'Josh is a full snack developer specializing in modern web technologies such as Node.js, React.js, React Native, Next.js, Remix.run, Prisma, Tailwind CSS, PostgreSQL, Docker, Kubernetes and many other fantastic tools.',
    },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Full Snack Developer for Hire | Josh Manders' },
    {
      name: 'twitter:description',
      content:
        'Josh is a full snack developer specializing in modern web technologies such as Node.js, React.js, React Native, Next.js, Remix.run, Prisma, Tailwind CSS, PostgreSQL, Docker, Kubernetes and many other fantastic tools.',
    },
    { name: 'twitter:creator', content: '@joshmanders' },
    { name: 'twitter:image:src', content: 'https://full.snack.dev/og.png' },
    { property: 'og:title', content: 'Full Snack Developer for Hire | Josh Manders' },
    {
      property: 'og:description',
      content:
        'Josh is a full snack developer specializing in modern web technologies such as Node.js, React.js, React Native, Next.js, Remix.run, Prisma, Tailwind CSS, PostgreSQL, Docker, Kubernetes and many other fantastic tools.',
    },
    { property: 'og:image', content: 'https://full.snack.dev/og.png' },
  ];
};

export const links: LinksFunction = () => {
  return [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossOrigin: 'anonymous' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap',
    },
    { rel: 'stylesheet', href: tailwind },
  ];
};

const App: FC = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="w-screen h-full border-t-8 border-primary-500 text-gray-800 font-sans">
        <Fathom siteId="YKHDMTUX" domains={['full.snack.dev']} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default App;
