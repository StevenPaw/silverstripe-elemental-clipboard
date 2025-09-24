<?php

namespace StevenPaw\SilverStripeElementalClipboard\Extensions;

use SilverStripe\Core\Extension;
use SilverStripe\Versioned\Versioned;

class ElementalAreaExtension extends Extension
{
    public function addElementFromJson($json)
    {
        $data = json_decode($json, true);
        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new \InvalidArgumentException('Invalid JSON');
        }
        //Check if the provided json includes a "Action": "silverstripe-clipboard-copy",
        //if not, we don't process it
        if (!isset($data['Action']) || $data['Action'] !== 'silverstripe-clipboard-copy') {
            throw new \InvalidArgumentException('JSON does not contain a valid Action');
        }

        $allfields = $data['allfields'] ?? [];
        //Get the element type from ClassName field
        if (!isset($allfields['ClassName'])) {
            throw new \InvalidArgumentException('JSON does not contain a ClassName field');
        }
        $className = $allfields['ClassName'];
        if (!is_subclass_of($className, BaseElement::class)) {
            throw new \InvalidArgumentException('ClassName is not a valid BaseElement subclass');
        }
        //Create a new element of the given type
        /** @var BaseElement $element */
        $element = new $className();
        //Set all fields from the json data regardless of whether they are in db, has_one, etc.
        foreach ($allfields as $field => $value) {
            $element->$field = $value;
        }

        //Set the ElementalAreaID to the current area
        $element->ElementalAreaID = $this->owner->ID;
        //Write the element to the database
        //Use Versioned::withVersionedMode to avoid versioning issues
        Versioned::withVersionedMode(function () use ($element) {
            $element->write();
        }, function () {
            return Versioned::DRAFT;
        });
        return $element;
    }
}
