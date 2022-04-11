import React, { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import ReactPortal from "../ReactPortal";
import "./modalStyles.scss";

function Modal({ children, isOpen, handleClose, className }) {
	const nodeRef = useRef(null);
	useEffect(() => {
		const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
		document.body.addEventListener("keydown", closeOnEscapeKey);
		return () => {
			document.body.removeEventListener("keydown", closeOnEscapeKey);
		};
	}, [handleClose]);

	useEffect(() => {
		document.body.classList.toggle("modal-open", isOpen);
	}, [isOpen])

	return (
		<ReactPortal wrapperId="react-portal-modal-container">
			<CSSTransition
				in={isOpen}
				timeout={{ entry: 0, exit: 300 }}
				unmountOnExit
				classNames="modal"
				nodeRef={nodeRef}
			>
				<div className="modal" ref={nodeRef}>
					<div className="modal__outer">
						<div className="modal__close">
							<button onClick={handleClose} className="modal__close" aria-label="Close">
								<FontAwesomeIcon icon={faXmark} size='2x' fixedWidth />
							</button>
						</div>
						<div className={`modal-inner${ className ? ' '+className : ''}`}>{children}</div>
					</div>
				</div>
			</CSSTransition>
		</ReactPortal>
	);
}
export default Modal;