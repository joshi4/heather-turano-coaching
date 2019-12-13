import React, { useState, FC, ReactNode } from "react";

import "./Carousel.module.scss";

export interface CarouselProps {
  entries: any[];
  children: (props: any) => ReactNode;
}

export const Carousel: FC<CarouselProps> = ({ entries, children }) => {
  const [currentEntry, setCurrentEntry] = useState(0);

  const goToEntry = (index: number) => setCurrentEntry(index);

  return (
    <div styleName="carousel">
      <div>{children({ ...entries[currentEntry] })}</div>
      <footer>
        {entries.map((_: any, index: number) => (
          <button
            type="button"
            key={index.toString()}
            styleName={`bubble ${index === currentEntry ? "active" : ""}`}
            onClick={() => goToEntry(index)}
          />
        ))}
      </footer>
    </div>
  );
};
