import React from 'react';
import PropTypes from 'prop-types';

import UI from './Actor.styled';
import { Flex } from '../../shared-ui'
import getFormattedDate from '../../utils/getFormattedDate';

const Actor = ({ actor: {
  name,
  birthday,
  country,
  directors,
} }) => (
    <UI.Actor>
      <Flex.SpaceBetween>
        <UI.ActorName>{name}</UI.ActorName>
        <div>{country}</div>
      </Flex.SpaceBetween>
      <UI.ActorBirthday>Birthday: {getFormattedDate(birthday)}</UI.ActorBirthday>
      <UI.ActorDirector>Director: {directors[0].name}</UI.ActorDirector>
    </UI.Actor>
  );

Actor.propTypes = {
  actor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    directors: PropTypes.array.isRequired,
  }).isRequired,
};

export default Actor;
