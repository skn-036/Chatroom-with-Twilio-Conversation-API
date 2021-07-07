<?php

namespace App\Http\Controllers\Twilio;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request) 
    {
        if(Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'success' => true,
                'message' => 'Login Attemp Successfull',
                'authUser' => Auth::user(),
            ]);
        }
        
        return response()->json([
            'success' => false,
            'message' => 'Credentials Does Not Match',
        ]);
    }

    public function logout() 
    {   
        Auth::guard('web')->logout();
        return response()->json(true);
    }
}
