"use client";

import { createContext, useState } from "react";
import { X } from "lucide-react";

// Create context for modal
const ModalContext = createContext({
	isOpen: false,
	openModal: () => {},
	closeModal: () => {},
});

// Custom hook to use modal
const useModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	return {
		isOpen,
		openModal,
		closeModal,
	};
};

// Modal component
const Modal = ({ isOpen, onClose, title, children, size = "md" }) => {
	if (!isOpen) return null;

	// Size classes
	const sizeClasses = {
		sm: "max-w-md",
		md: "max-w-2xl",
		lg: "max-w-4xl",
		xl: "max-w-6xl",
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
			<div
				className={`w-full rounded-lg bg-white shadow-xl ${
					sizeClasses[size] || sizeClasses.md
				} flex max-h-[90vh] flex-col`}
			>
				<div className="flex items-center justify-between border-b p-4">
					<h3 className="text-xl font-bold">{title}</h3>
					<button
						onClick={onClose}
						className="rounded-full p-1 transition-colors hover:bg-gray-100"
						aria-label="Close"
					>
						<X className="h-6 w-6" />
					</button>
				</div>
				<div className="overflow-y-auto p-6">{children}</div>
			</div>
		</div>
	);
};

// Modal provider component
const ModalProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	return <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>{children}</ModalContext.Provider>;
};

export { ModalProvider, Modal, useModal };
