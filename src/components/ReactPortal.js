import { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

function createWrapperAndAppendToBody(wrapperId) {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

function ReactPortal({ children, wrapperId = 'react-portal-wrapper' }) {
  const [wrapperElement, setWrapperElement] = useState(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      // delete the programmatically created element
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  // wrapperElement state will be null on very first render.
  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
}

ReactPortal.propTypes = {
  children: PropTypes.node.isRequired,
  wrapperId: PropTypes.string,
};

export default ReactPortal;
