<?php

namespace App\Http\Controllers\Twilio;

use Twilio\Rest\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;

class UserController extends Controller
{
    protected $client;

    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    public function newUser(Request $request) {
        $user = $this->client->conversations->v1->users->create($request->user_name, [            
            'friendlyName' => $request->mobile, 
            'attributes' => json_encode([
                'name' => $request->name,
                'mobile' => $request->mobile,
                'email' => $request->email
            ]),
        ]);
        return response()->json($user->url);
    }

    public function thatUser($sid) {
        $user = $this->client->conversations->v1->users($sid)->fetch();
        return response()->json($user);
    }

    public function allUsers() {
        $users = User::orderBy('name')->get();
        return response()->json($users);
    }

    public function updateUser($sid) {

    }

    public function deleteUser($sid) {
        
        // $users = $this->client->conversations->v1->users->read();
        // foreach($users as $user) {
        //     $this->client->conversations->v1->users($user->sid)->delete();
        // }
    
        $user = $this->client->conversations->v1->users($sid)->delete();
        return response()->json(['message' => 'User deleted successfully']);
    }
}
