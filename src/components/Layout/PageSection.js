import React from "react";

function PageSection({ children, title }) {
  return (
    <section className="mb-4">
      {!!title && <h5 className="py-1">{title}</h5>}
      {children}
    </section>
  );
}

export default PageSection;
