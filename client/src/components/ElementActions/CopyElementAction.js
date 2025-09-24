import React from 'react';
import PropTypes from 'prop-types';

const CopyElementAction = ({ element }) => {
  const handleCopy = async () => {
    console.log('Element data:', element);
    const elementData = {
        Action: 'silverstripe-clipboard-copy',
        ClassName: element.blockSchema.typeName,
        Title: element.title,
        AllFields: element.blockSchema.allfields,
    };
    const elementJSON = JSON.stringify(elementData, null, 2);

    try {
      await navigator.clipboard.writeText(elementJSON);
      alert('Block JSON copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <button type="button" className="element-editor-action__action" onClick={handleCopy} title="Copy block JSON to clipboard">
      <span role="img" aria-label="Copy">📋</span>
    </button>
  );
};

CopyElementAction.propTypes = {
  element: PropTypes.object.isRequired,
};

export default CopyElementAction;
