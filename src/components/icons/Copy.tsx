interface CopyProps {
    onClick?: () => void;
}

export default function Copy({ onClick }: CopyProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            onClick={onClick}
            style={{ cursor: 'pointer' }}
        >
            <path
                d="M26.6665 10.6665H13.3332C11.8604 10.6665 10.6665 11.8604 10.6665 13.3332V26.6665C10.6665 28.1393 11.8604 29.3332 13.3332 29.3332H26.6665C28.1393 29.3332 29.3332 28.1393 29.3332 26.6665V13.3332C29.3332 11.8604 28.1393 10.6665 26.6665 10.6665Z"
                stroke="#D1D5DB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5.33317 21.3332C3.8665 21.3332 2.6665 20.1332 2.6665 18.6665V5.33317C2.6665 3.8665 3.8665 2.6665 5.33317 2.6665H18.6665C20.1332 2.6665 21.3332 3.8665 21.3332 5.33317"
                stroke="#D1D5DB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
