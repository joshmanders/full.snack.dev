import { FC, PropsWithChildren } from 'react';

export type Props = {
  name: string;
  title: string;
  company: string;
};

export const Testimonial: FC<PropsWithChildren<Props>> = ({ name, title, company, children }) => {
  return (
    <div className="mb-8 md:border-l-8 border-primary-500 -ml-4 pl-4">
      <p className="text-lg md:text-2xl italic" dangerouslySetInnerHTML={{ __html: children as string }} />
      <p className="md:text-xl font-bold my-2">
        - {name}, {title} @ {company}
      </p>
    </div>
  );
};
