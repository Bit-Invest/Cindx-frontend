import * as React from 'react';

const ROOT_CLASS = 'menu-item';

export const MenuItem = (props) => {
  const buildIconClass = () => {
    const iconClass = `${ROOT_CLASS}__icon`;
    return `${iconClass} ${iconClass}_${props.type}`;
  };

  const buildRootClass = () => {
    return `${ROOT_CLASS} ${ROOT_CLASS}_${props.page} ${props.isActive ? ROOT_CLASS + '_active': ''}`;
  }

  const onClickItem = () => {
    if (!props.popUp) {
      props.push(`/${props.type}`);
    } else if (props.popUp === 'onlyRegistrated') {
      props.user.status === 'logged-in' ?
        props.push(`/${props.type}`) :
        props.showPopUp('registration');
    } else if (props.popUp === 'inDev') {
      props.showPopUp('comingSoon');
    }
  }

  return (
    <div className={buildRootClass()} onClick={onClickItem}>
      <div className={buildIconClass()}></div>
      <div className={`${ROOT_CLASS}__title`}>
        {props.type.toUpperCase()}
      </div>
    </div>
  );
}
