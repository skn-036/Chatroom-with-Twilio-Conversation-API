<?php

namespace App\Models;

use Database\Factories\TwilioUserFactory;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $factory = TwilioUserFactory::class;

    protected $fillable = [
        'name',
        'user_name',
        'email',
        'mobile',
        'password',
        'sid',
        'url',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $dates = ['created_at', 'updated_at'];

    public function conversations() {
        return $this->belongsToMany(Conversation::class, 'conversation_user');
    }
}
