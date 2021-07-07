<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
    use HasFactory;

    protected $fillable = [
        'sid',
        'initiator_sid',
        'initiator_identity',
        'target_sid',
        'target_identity',
        'type',
    ];

    protected $dates = [
        'created_at', 'updated_at'
    ];

    public function participants() {
        return $this->belongsToMany(User::class, 'conversation_user');
    }


}
