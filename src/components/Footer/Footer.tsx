import Link from 'next/link';

export default function Footer() {
    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center py-4 w-100 border-top"
            style={{ borderColor: '#374151 !important' }}
        >
            <p className="text-center">
                © 2025 | Create by
                <Link
                    href={'https://github.com/huynhnguyen1906'}
                    className="text-decoration-underline"
                    style={{ color: '#f9fafb' }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Huynhnguyen1906
                </Link>
            </p>
        </div>
    );
}
