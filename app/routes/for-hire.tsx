import { FC, Fragment } from 'react';
import { V2_MetaFunction as MetaFunction } from '@remix-run/react';
import { Testimonial } from '@app/components/Testimonial';

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

const testimonials = [
  {
    name: 'Justin Reeve',
    title: 'Senior Software Engineer',
    company: 'FranklinCovey and Educational Technology Consultant',
    content:
      "I've worked with and corresponded with Josh remotely for several years, and am amazed at his expertise and ability to code solutions to complex problems, and his ability to pick up new technologies and languages very quickly. I consider myself a proficient coder, but I've gone to him for coding help when I've needed it, and have never been disappointed in his recommendations and assistance. He is a master of his craft, and would be a good fit for anyone needs an experienced senior developer to help their company.",
  },
  {
    name: 'Matthew Evans',
    title: 'Technical Architect',
    company: 'Benevity',
    content:
      'The independence and motivation exhibited by Josh is very impressive. His ability to put himself to a task and grind out production-ready code is one of his best traits.<br /><br />Josh also exudes technical confidence, which helps him establish and maintain long-term professional relationships with colleagues who go to him for advice and code review. His interpersonal skills are quite strong as a result, and his patience with those who may not be as technologically inclined is a definite asset to a team or small business employer.',
  },
];

const ForHirePage: FC = () => {
  return (
    <Fragment>
      <div className="bg-primary-200 shadow-lg">
        <div className="container mx-auto px-4 md:px-0 py-6 md:py-24 md:flex">
          <img
            src="https://github.com/joshmanders.png"
            alt="It's Josh!"
            className="rounded-lg mx-auto w-24 h-24 md:w-56 md:h-56 mb-4 md:mr-4 md:mb-0 shadow-lg"
          />
          <div className="md:flex-1">
            <h1 className="font-bold md:text-5xl md:mb-3">
              Hello, I'm{' '}
              <a
                href="https://twitter.com/joshmanders"
                title="Josh Manders on Twitter"
                className="border-b-2 border-primary-500 hover:text-gray-900"
              >
                Josh
              </a>{' '}
              and I want to work with you!
            </h1>
            <h2 className="md:text-4xl">
              I'm a <span className="text-primary-500">full snack developer</span> who specializes in modern web
              technologies such as <span className="border-b-2 border-primary-500 font-semibold">Node.js</span>,{' '}
              <span className="border-b-2 border-primary-500 font-semibold">React.js</span>,{' '}
              <span className="border-b-2 border-primary-500 font-semibold">React Native</span>,{' '}
              <span className="border-b-2 border-primary-500 font-semibold">Next.js</span>,{' '}
              <span className="border-b-2 border-primary-500 font-semibold">Remix.run</span>,{' '}
              <span className="border-b-2 border-primary-500 font-semibold">Prisma</span>,{' '}
              <span className="border-b-2 border-primary-500 font-semibold">Tailwind CSS</span>,{' '}
              <span className="border-b-2 border-primary-500 font-semibold">PostgreSQL</span>,{' '}
              <span className="border-b-2 border-primary-500 font-semibold">Docker</span>,{' '}
              <span className="border-b-2 border-primary-500 font-semibold">Kubernetes</span> and many other fantastic
              tools.
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-6 md:mt-20 mb-6 px-4 md:px-0">
        <h3 className="text-xl md:text-3xl font-bold pb-4">
          <span className="block md:inline-block pb-1 md:pr-6 border-b-2 border-gray-800">About me</span>
        </h3>
        <p className="md:leading-loose text-lg md:text-2xl mb-6">
          With almost 20 years of full stack web development experience for global businesses, I offer the technical
          expertise you are seeking.
        </p>
        <p className="md:leading-loose text-lg md:text-2xl mb-6">
          I started building websites in 1997 and it quickly grew to become my passion and career. I have built websites
          for myself as an internet marketer, and for clients such as <span className="font-semibold">John Deere</span>,
          and <span className="font-semibold">Harley Davidson</span> and many in between.
        </p>
        <p className="md:leading-loose text-lg md:text-2xl mb-6">
          Known for creating robust, high quality web and mobile apps, my work has helped grow revenues, accelerate
          customer acquisition, increase web traffic and deliver an industry-leading competitive advantage.
        </p>
        <p className="md:leading-loose text-lg md:text-2xl mb-6">
          As a developer focused on customer satisfaction, I manage all aspects of development from concept to
          requirements definition, design, development, launch, maintenance and support. I enjoy working closely with
          team members to produce high-quality deliverables.
        </p>
      </div>
      <div className="container mx-auto mt-6 md:mt-20 mb-6 px-4 md:px-0">
        <h3 className="text-xl md:text-3xl font-bold pb-4">
          <span className="block md:inline-block pb-1 md:pr-6 border-b-2 border-gray-800">
            What I am currently working on
          </span>
        </h3>
        <p className="md:leading-loose text-lg md:text-2xl mb-6">
          Currently when I am not working on client work, I spend my time building products for my own company{' '}
          <a
            href="https://aniftyco.com/"
            title="NiftyCo"
            className="font-bold border-b-2 border-teal-500 hover:text-teal-600"
          >
            NiftyCo
          </a>{' '}
          such as{' '}
          <a
            href="https://getmakerlog.com/"
            title="Makerlog"
            className="font-bold border-b-2 border-emerald-500 hover:text-emerald-600"
          >
            Makerlog
          </a>{' '}
          which is a community of{' '}
          <span className="italic font-semibold text-emerald-600">~10,000 makers and indie hackers</span> building
          products in public.
        </p>
        <p className="md:leading-loose text-lg md:text-2xl mb-6">
          I also contribute heavily to open source either by releasing{' '}
          <a
            href="https://github.com/aniftyco"
            title="NiftyCo's GitHub Page"
            className="font-bold hover:underline hover:text-primary-600"
          >
            my own open source projects
          </a>
          , or helping on{' '}
          <a
            href="https://github.com/joshmanders"
            title="Josh's GitHub Page"
            className="font-bold hover:underline hover:text-primary-600"
          >
            existing open source
          </a>{' '}
          that I use.
        </p>
      </div>
      <div className="container mx-auto mt-6 md:mt-20 mb-6 px-4 md:px-0">
        <h3 className="text-xl md:text-3xl font-bold pb-6">
          <span className="block md:inline-block pb-1 md:pr-6 border-b-2 border-gray-800">
            What people have said about me
          </span>
        </h3>
        {testimonials.map(({ name, title, company, content }) => (
          <Testimonial key={name} name={name} title={title} company={company}>
            {content}
          </Testimonial>
        ))}
      </div>
      <div className="container mx-auto mt-6 md:mt-20 mb-6 px-4 md:px-0">
        <h3 className="text-xl md:text-3xl font-bold pb-6">
          <span className="block md:inline-block pb-1 md:pr-6 border-b-2 border-gray-800">Get in touch with me</span>
        </h3>
        <form action="/web/20200212212134/http://full.snack.dev/" method="post">
          <div className="flex flex-col md:flex-row mb-4">
            <div className="md:w-1/2 md:pr-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                className="appearance-none block w-full bg-gray-300 text-gray-600 border-2 rounded py-3 px-4 mb-3 focus:outline-none focus:border-gray-600 focus:bg-white"
                type="text"
                placeholder="Jane Doe"
                required
              />
            </div>
            <div className="md:w-1/2 md:pl-3 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                className="appearance-none block w-full bg-gray-300 text-gray-600 border-2 rounded py-3 px-4 mb-3 focus:outline-none focus:border-gray-600 focus:bg-white"
                type="email"
                placeholder="jane.doe@example.com"
                required
              />
            </div>
          </div>
          <div className="w-full mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2" htmlFor="message">
              What can I help you with?
            </label>
            <textarea
              id="message"
              name="message"
              rows={10}
              className="appearance-none resize-none block w-full bg-gray-300 text-gray-600 border-2 rounded py-3 px-4 mb-3 focus:outline-none focus:border-gray-600 focus:bg-white"
              placeholder="Build me a dope ass application!"
              required
            ></textarea>
          </div>
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="w-full md:w-auto bg-primary-500 hover:bg-primary-600 text-primary-200 uppercase font-bold rounded px-4 py-2"
            >
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ForHirePage;
