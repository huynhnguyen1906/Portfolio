'use client';

import { useEffect } from 'react';
import clarity from '@microsoft/clarity';

export default function ClarityAnalytics() {
    useEffect(() => {
        // Initialize Clarity
        clarity.init('r8wl5lq9xo');
    }, []);

    return null; // No need to render anything
}
