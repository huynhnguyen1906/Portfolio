'use client';

import { useEffect } from 'react';
import clarity from '@microsoft/clarity';

export default function ClarityAnalytics() {
    useEffect(() => {
        // Khởi tạo Microsoft Clarity với project ID của bạn
        clarity.init('r8wl5lq9xo');
    }, []);

    return null; // Component này không hiển thị gì cả
}