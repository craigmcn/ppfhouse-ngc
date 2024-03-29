import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import { getFontSize } from '../../utilities';
import { HTMLContent } from '../shared/Content';
import Modal from '../Modal/Modal';
import './lightbox.scss';

const Lightbox = (props) => {
  const {
    gallery = [],
    current = {},
    headerPosition = 'top',
    loading = true,
    open = false,
    onClose,
  } = props;

  const [isLoading, setIsLoading] = useState(loading);
  const [isOpen, setIsOpen] = useState(open);
  const [currentItem, setCurrentItem] = useState(current);
  const contentRef = useRef();
  const lightboxHeaderRef = useRef();

  useEffect(() => {
    setCurrentItem(current);
  }, [current]);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useEffect(() => {
    !isOpen && onClose();
  }, [isOpen, onClose]);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  const resizeContent = useCallback(() => {
    if (contentRef.current) {
      const html = document.querySelector('html');
      const fontSize = getFontSize();
      const aspectRatio =
        currentItem.type === 'image'
          ? contentRef.current.naturalWidth / contentRef.current.naturalHeight
          : 16 / 9;
      let width = html.clientWidth - fontSize * 5 - 40; // 40 is the padding on the modal
      let height = width * (1 / aspectRatio);
      const maxHeight =
        html.clientHeight -
        lightboxHeaderRef.current?.clientHeight -
        fontSize * 2.5;
      if (height > maxHeight) {
        height = maxHeight;
        width = height * aspectRatio;
      }
      contentRef.current.style.width = `${width}px`;
      contentRef.current.style.height = `${height}px`;
    }
  }, [currentItem.type]);

  useEffect(() => {
    window.addEventListener('resize', resizeContent);

    return () => window.removeEventListener('resize', resizeContent);
  }, [resizeContent]);

  const handleModalPrevious = useCallback(() => {
    setIsLoading(true);
    setCurrentItem((previous) => {
      const currentItemIndex = gallery.findIndex(
        (item) => item.id === previous.id,
      );
      const previousItemIndex =
        currentItemIndex === 0 ? gallery.length - 1 : currentItemIndex - 1;
      return {
        ...gallery[previousItemIndex],
      };
    });
  }, [gallery]);

  const handleModalNext = useCallback(() => {
    setIsLoading(true);
    setCurrentItem((previous) => {
      const currentItemIndex = gallery.findIndex(
        (item) => item.id === previous.id,
      );
      const nextItemIndex =
        currentItemIndex === gallery.length - 1 ? 0 : currentItemIndex + 1;
      return {
        ...gallery[nextItemIndex],
      };
    });
  }, [gallery]);

  const handleLoad = useCallback(
    (e) => {
      resizeContent();
      setIsLoading(false);
    },
    [resizeContent],
  );

  return (
    <Modal
      handleClose={() => setIsOpen(false)}
      isOpen={isOpen}
      className="lightbox"
    >
      <div
        ref={lightboxHeaderRef}
        className={`lightbox__header${
          headerPosition === 'bottom' ? ' lightbox__header--bottom' : ''
        }`}
      >
        {currentItem.title && (
          <h1 className="lightbox__title">{currentItem.title}</h1>
        )}
        {currentItem.description && (
          <HTMLContent
            className="lightbox__description"
            content={currentItem.description}
          />
        )}
      </div>
      <div className="lightbox__body">
        <div className="lightbox__content">
          {isLoading && (
            <div className="lightbox__loading">
              <FontAwesomeIcon icon={faCircleNotch} spin />
              <span className="sr-only"> Loading</span>
            </div>
          )}

          {currentItem.type === 'image' && (
            <img
              ref={contentRef}
              src={currentItem.src}
              alt={currentItem.title}
              onLoad={handleLoad}
            />
          )}

          {currentItem.type === 'iframe' && (
            <iframe
              ref={contentRef}
              title={currentItem.title}
              src={currentItem.src}
              onLoad={handleLoad}
              allow="accelerometer; fullscreen; gyroscope"
            />
          )}

          {currentItem.type === 'facebook' && (
            <iframe
              ref={contentRef}
              title={currentItem.title}
              src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                currentItem.src,
              )}&show_text=false&t=0&height=540&width=960`}
              scrolling="no"
              frameBorder="0"
              allowFullScreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              onLoad={handleLoad}
            />
          )}
        </div>
        <button
          className="lightbox__controls lightbox__controls--previous"
          type="button"
          onClick={handleModalPrevious}
          aria-label="Previous"
        >
          <FontAwesomeIcon icon={faChevronLeft} size="2x" fixedWidth />
        </button>
        <button
          className="lightbox__controls lightbox__controls--next"
          type="button"
          onClick={handleModalNext}
          aria-label="Next"
        >
          <FontAwesomeIcon icon={faChevronRight} size="2x" fixedWidth />
        </button>
      </div>
    </Modal>
  );
};

Lightbox.propTypes = {
  gallery: PropTypes.array,
  current: PropTypes.object,
  headerPosition: PropTypes.oneOf(['bottom', 'top']),
  loading: PropTypes.bool,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default Lightbox;
