import { useEffect } from 'react';

const usetitle = title => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        document.title = `Toy Forest | ${title}`;
    }, [title])
};

export default usetitle;