"use client";

import { useEffect } from "react";

type CustomModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title?: string;
  submitText?: string;
  submit?: () => void;
  isSubmitting?: boolean;
  onClose?: () => void;
};

export default function CustomModal({
  children,
  isOpen,
  setIsOpen,
  title,
  submitText = "Submit",
  submit,
  isSubmitting = false,
  onClose,
}: CustomModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    onClose?.();
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-10 !m-0 flex items-center justify-center bg-black/50 px-8 py-4"
      onClick={handleClose}
    >
      <div
        className="bg-base-100 relative flex max-h-[560px] w-full max-w-lg flex-col gap-4 rounded-xl py-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-4 px-8">
          {title && (
            <p className="flex-1 self-center text-xl font-bold">{title}</p>
          )}
          <div className={`flex ${title ? "" : "flex-1 justify-end"}`}>
            <button className="btn btn-ghost btn-square" onClick={handleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto rounded-xl px-8 py-4">
          {children}
        </div>
        {submit && (
          <div className="px-8">
            <button
              className="btn btn-primary btn-block"
              onClick={() => submit()}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                submitText
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
