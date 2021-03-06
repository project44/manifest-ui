import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useIsomorphicLayoutEffect } from '@manifest-ui/hooks';

export interface PortalProps {
  /**
   * The ref of the element to append the children to.
   */
  containerRef?: React.RefObject<HTMLElement>;
}

export const Portal: React.FC<PortalProps> = props => {
  const { children, containerRef } = props;

  const [container, setContainer] = React.useState<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    setContainer(containerRef ? containerRef.current : document.body);
  }, [containerRef]);

  return container ? ReactDom.createPortal(children, container) : container;
};

Portal.displayName = 'Portal';
