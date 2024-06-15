import React from "react";

interface Props {
  className?: string;
  noContainer?: true;
  children: React.ReactNode;
}

export default function Section({ className = "", noContainer, children }: Props) {
  return (
    <>
      {noContainer ? (
        <section className={className}>{children}</section>
      ) : (
        <section className={className}>
          <div className="container">{children}</div>
        </section>
      )}
    </>
  );
}
