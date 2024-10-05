import { ReactNode } from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            StickyView: {
                style?: object;
                children: ReactNode;  // Correct type for children
            };
        }
    }
}
