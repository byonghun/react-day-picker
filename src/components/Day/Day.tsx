import React, { useRef } from 'react';

import { useDayRender } from 'hooks/useDayRender';

import { Button } from '../Button';

/** Represent the props used by the {@link Day} component. */
export interface DayProps {
  /** The month where the date is displayed. */
  displayMonth: Date;
  /** The date to render. */
  date: Date;
}

/**
 * The content of a day cell – as a button or span element according to its
 * modifiers.
 */
export function Day(props: DayProps): JSX.Element {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dayRender = useDayRender(props.date, props.displayMonth, buttonRef);
  console.log('hi-test', { dayRender });

  if (dayRender.isHidden) {
    return <div role="gridcell">bye</div>;
  }
  if (!dayRender.isButton) {
    return <div {...dayRender.divProps}>hi</div>;
  }
  // return <Button name="day" ref={buttonRef} {...dayRender.buttonProps} />;
  return <div {...dayRender.divProps}>hi</div>;
}
