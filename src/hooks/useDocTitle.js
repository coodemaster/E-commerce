import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - The Ocean `;
        } else {
            document.title = 'The Ocean  | The Perfect Audio Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
