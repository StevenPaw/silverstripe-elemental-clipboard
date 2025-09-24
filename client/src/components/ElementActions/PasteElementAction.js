import React from 'react';
import PropTypes from 'prop-types';

//TODO: Implement in ElementalArea instead of in an Element

const PasteElementAction = ({ element }) => {
  const handlePaste = async () => {
    console.log('Element data:', element);
    //Get the saved json from the clipboard and check if it has "Action": "silverstripe-clipboard-copy", inside
    $copiedData = await navigator.clipboard.readText();
    try {
        $jsonData = JSON.parse($copiedData);
    } catch (e) {
        alert('No valid JSON data found in clipboard!');
        return;
    }
    if (!$jsonData || !$jsonData.Action || $jsonData.Action !== 'silverstripe-clipboard-copy') {
        alert('No valid block JSON data found in clipboard!');
        return;
    }

    //TODO: Run addElementFromJson on the current ElementalArea 
  };

  return (
    <button type="button" className="element-editor-action__action" onClick={handlePaste} title="Paste block JSON from clipboard">
      <span role="img" aria-label="Paste">🫘</span>
    </button>
  );
};

PasteElementAction.propTypes = {
  element: PropTypes.object.isRequired,
};

export default PasteElementAction;
