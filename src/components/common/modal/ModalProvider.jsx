"use client";

import { createContext, useContext, useState } from "react";
import { Modal } from "./modal";

// Create context for modal
const ModalContext = createContext({
	openModal: () => {},
	closeModal: () => {},
});

// Custom hook to use modal context
const useModalContext = () => {
	const context = useContext(ModalContext);

	if (!context) {
		throw new Error("useModalContext must be used within a ModalProvider");
	}

	return context;
};

// Modal provider component
const ModalProvider = ({ children }) => {
	const [modalState, setModalState] = useState({
		isOpen: false,
		title: "",
		content: null,
		size: "md",
	});

	const openModal = ({ title, content, size = "md" }) => {
		setModalState({
			isOpen: true,
			title,
			content,
			size,
		});
	};

	const closeModal = () => {
		setModalState(prev => ({
			...prev,
			isOpen: false,
		}));
	};

	return (
		<ModalContext.Provider value={{ openModal, closeModal }}>
			{children}
			<Modal isOpen={modalState.isOpen} onClose={closeModal} title={modalState.title} size={modalState.size}>
				{modalState.content}
			</Modal>
		</ModalContext.Provider>
	);
};

export { ModalProvider, useModalContext };
