<?php

namespace StevenPaw\SilverStripeElementalClipboard\Extensions;

use SilverStripe\Core\Extension;

class ElementalExtension extends Extension
{
    public function updateBlockSchema(&$blockSchema)
    {
        //Get all fields of the owner element and make them available as string in the block schema
        $allfields = $this->owner->toMap();
        foreach ($allfields as $field => $value) {
            if (is_object($value) && method_exists($value, 'Plain')) {
                $allfields[$field] = $value->Plain();
            } elseif (is_array($value)) {
                $allfields[$field] = json_encode($value);
            } elseif (is_bool($value)) {
                $allfields[$field] = $value ? 'true' : 'false';
            } elseif (is_null($value)) {
                $allfields[$field] = 'null';
            } else {
                $allfields[$field] = (string) $value;
            }
        }
        $blockSchema['allfields'] = $allfields;
    }
}

// Apply this extension to BaseElement in your _config/extensions.yml or via PHP config:
// BaseElement::add_extension(StevenPaw\SilverStripeElementalClipboard\Extensions\ElementalExtension::class);
