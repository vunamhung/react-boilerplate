import React from 'react';
import classNames from 'classnames';

export default function Logo({ url, src, name, className, imgClass }) {
  if (url) {
    if (src) {
      return (
        <a href={url}>
          <div className={classNames('logo inline-flex items-center cursor-pointer', className)}>
            <img className={imgClass} src={src} alt={name} />
          </div>
        </a>
      );
    }

    return (
      <div className={classNames('logo cursor-pointer', className)}>
        <a href={url}>{name}</a>
      </div>
    );
  } else {
    if (src) {
      return (
        <div className={classNames('logo', className)}>
          <img className={imgClass} src={src} alt={name} />
        </div>
      );
    }

    return <div className={classNames('logo', className)}>{name}</div>;
  }
}
