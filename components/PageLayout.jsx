import React from 'react';
import SiteNavigation from './SiteNavigation';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';

export default function PageLayout({ children, breadcrumbs }) {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <SiteNavigation />
      <div style={{ paddingTop: '65px', flex: 1 }}>
        {breadcrumbs && <Breadcrumb crumbs={breadcrumbs} />}
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
