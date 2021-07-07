<?php

use App\Http\Controllers\Twilio\AuthController;
use App\Http\Controllers\Twilio\ConversationController;
use App\Http\Controllers\Twilio\MessageController;
use App\Http\Controllers\Twilio\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Auth
Route::post('/login/submit', [AuthController::class, 'login']);

Route::Get('/', function(){

})->name('login');

//Auth
//Route::group(['middleware' => 'auth:sanctum'], function(){
    Route::post('/logout', [AuthController::class, 'logout']);

    //User Resource
    Route::post('/users/create', [UserController::class, 'newUser']);
    Route::get('/users', [UserController::class, 'allUsers']);
    Route::get('/users/{sid}', [UserController::class, 'thatUser']);
    Route::post('/users/{sid}/update', [UserController::class, 'updateUser']);
    Route::post('/users/{sid}/delete', [UserController::class, 'deleteUser']);
    
    //Conversation Resource
    Route::post('conversations', [ConversationController::class, 'allConversations']);
    Route::post('conversations/create', [ConversationController::class, 'newConversation']);
    Route::post('conversations/delete', [ConversationController::class, 'deleteConversation']);
    Route::post('conversations/users', [ConversationController::class, 'conversationUsers']);

    //message Resource
    Route::post('messages/create', [MessageController::class, 'newMessage']);
    Route::post('messages', [MessageController::class, 'allMessages']);

    Route::post('webhook', [MessageController::class, 'updateMsg']);
//});


