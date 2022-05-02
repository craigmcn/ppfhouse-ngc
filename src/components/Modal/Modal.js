import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ChildrenPropType } from '../../utilities/propTypes';
import ReactPortal from '../ReactPortal';
import * as styles from './modalStyles.module.scss';
import './modalTransitions.css';

const Modal = ({ children, isOpen, handleClose, className }) => {
  const nodeRef = useRef(null);
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  useEffect(() => {
    document.body.classList.toggle('modal-open', isOpen);
  }, [isOpen]);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={{ entry: 0, exit: 300 }}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >
        <div className={styles.modal} ref={nodeRef}>
          <div className={styles.modalOuter}>
            <div className={styles.modalClose}>
              <button onClick={handleClose} aria-label="Close">
                <FontAwesomeIcon icon={faXmark} size="2x" fixedWidth />
              </button>
            </div>
            <div
              className={`${styles.modalInner}${
                className ? ' ' + className : ''
              }`}
            >
              {children}
            </div>
          </div>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
};

Modal.propTypes = {
  children: ChildrenPropType,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  className: PropTypes.string,
};

export default Modal;
