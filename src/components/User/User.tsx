import {ReactElement} from 'react';
import {UserType} from '../../types/UserType';

const SIZE_PRO_AVATAR = 74;
const SIZE_USER_AVATAR = 54;

type UserProps = {
  user?: UserType;
  isHost?: boolean;
}

export function User({user, isHost = false}: UserProps): ReactElement {
  const prefix = isHost ? 'property' : 'reviews';
  const avatarSize = isHost ? SIZE_PRO_AVATAR : SIZE_USER_AVATAR;
  let altText = 'avatar';
  if (user?.name) {
    altText = `${user.name} avatar`;
  } else if (isHost) {
    altText = 'Host avatar';
  } else {
    altText = 'Reviews avatar';
  }

  return (
    <div className={`${prefix}__${isHost ? 'host-' : ''}user user`}>
      <div className={`${prefix}__avatar-wrapper ${isHost ? 'property__avatar-wrapper--pro ' : ''}user__avatar-wrapper`}>
        <img
          className={`${prefix}__avatar user__avatar`}
          src={user?.avatar ? `img/${user.avatar}` : ''}
          width={avatarSize}
          height={avatarSize}
          alt={altText}
        />
      </div>
      <span className={`${prefix}__user-name`}>{user?.name}</span>
      {isHost && user?.isPro && (
        <span className="property__user-status">Pro</span>
      )}
    </div>
  );
}
