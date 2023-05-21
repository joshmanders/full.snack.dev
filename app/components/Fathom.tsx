import { FC, useEffect } from 'react';
import { useLocation } from '@remix-run/react';
import { load, trackPageview } from 'fathom-client';

export type Props = {
  siteId: string;
  domains: string[];
};

export const Fathom: FC<Props> = ({ siteId, domains: includedDomains }) => {
  const location = useLocation();

  useEffect(() => {
    load(siteId, { includedDomains });
  }, []);

  useEffect(() => {
    trackPageview();
  }, [location.pathname, location.search]);

  return null;
};

export default Fathom;
