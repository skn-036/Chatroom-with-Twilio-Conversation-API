<?php
namespace App\Chat;

use JsonSerializable;

class Serialize implements JsonSerializable {
    public $array;

    public function __construct($array) {
        $this->array = $array;
    }

    public function jsonSerialize() {
        return $this->array;
        return get_object_vars($this->array);
    }
}
?>