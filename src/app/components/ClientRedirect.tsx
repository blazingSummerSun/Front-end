'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ClientRedirect = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('./about');
    }, [router]);

    return null;
};

export default ClientRedirect;
