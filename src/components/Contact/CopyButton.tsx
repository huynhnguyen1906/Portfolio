'use client';
import Copy from '../icons/Copy';
import toast, { Toaster } from 'react-hot-toast';

interface CopyButtonProps {
    text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success('コピーしました！');
        } catch (err) {
            toast.error('コピーに失敗しました');
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <>
            <Copy onClick={() => handleCopy(text)} />
            <Toaster />
        </>
    );
}
