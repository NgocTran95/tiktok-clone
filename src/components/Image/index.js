import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ className, src, alt, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            ref={ref}
            src={fallback || src}
            alt={alt}
            className={classNames(styles.wrapper, className)}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;