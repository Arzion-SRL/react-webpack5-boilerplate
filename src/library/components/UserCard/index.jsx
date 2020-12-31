import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const UserCard = ({ lastName, firstName, avatar }) => (
    <div className="userCard">
        <img src={avatar} alt={lastName} />
        <div>
            <strong>{lastName}</strong>, {firstName}
        </div>
    </div>
);

UserCard.defaultProps = { lastName: '', firstName: '', avatar: '' };

UserCard.propTypes = {
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    avatar: PropTypes.string,
};

export default UserCard;
