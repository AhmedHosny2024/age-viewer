import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import React from 'react';
import uuid from 'react-uuid';
import KeyWordFinder from '../../features/query_builder/KeyWordFinder';
import './BuilderContainer.scss';

const BuilderSelection = ({ finder, setQuery, currentWord }) => {
  const handleClick = (e) => {
    const selectedVal = e.target.getAttribute('data-val');
    setQuery(selectedVal);
  };
  return (
    finder?.getConnectedNames(currentWord).map(
      (element) => (
        <Button
          key={uuid()}
          size="small"
          onClick={handleClick}
          data-val={element}
          className="item"
        >
          {element}
        </Button>
      ),
    )
  );
};

BuilderSelection.propTypes = {
  finder: PropTypes.shape(KeyWordFinder).isRequired,
  setQuery: PropTypes.func.isRequired,
  currentWord: PropTypes.string.isRequired,
};
export default BuilderSelection;
