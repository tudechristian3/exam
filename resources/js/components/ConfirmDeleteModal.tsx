import { MouseEventHandler } from 'react';
// import Button from './Button'; // Import your reusable Button component
import Modal from './Modal';
import { Button } from './ui/button';

interface ConfirmDeleteModalProps {
    isOpen: boolean;
    onClose: MouseEventHandler<HTMLButtonElement>;
    onConfirm: MouseEventHandler<HTMLButtonElement>;
    title?: string;
    message?: string;
    cancelButtonText?: string;
    confirmButtonText?: string;
}

export default function ConfirmDeleteModal({
    isOpen,
    onClose,
    onConfirm,
    title = 'Confirm Deletion',
    message = 'Are you sure you want to delete this item?',
    cancelButtonText = 'CANCEL',
    confirmButtonText = 'DELETE',
}: ConfirmDeleteModalProps) {
    return (
        <Modal show={isOpen} onClose={onClose}>
            <div className="bg-navy-blue flex flex-col items-center justify-center p-6">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <p className="text-sm text-white">{message}</p>
                <div className="mt-10 flex justify-center gap-5 text-center">
                    <Button type="button" onClick={onClose}>
                        {cancelButtonText}
                    </Button>
                    <Button onClick={onConfirm}>{confirmButtonText}</Button>
                </div>
            </div>
        </Modal>
    );
}
