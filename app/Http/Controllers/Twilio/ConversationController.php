<?php

namespace App\Http\Controllers\Twilio;

use App\Models\User;
use Twilio\Rest\Client;
use App\Models\Conversation;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ConversationController extends Controller
{
    protected $client;

    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    public function allConversations(Request $request)
    {
        $authUser = User::findOrFail($request['id']);

        $conversations = $authUser->conversations()->with([
            'participants' => function($query) use($authUser) {
                $query->where('user_id', '!=', $authUser->id);
            }
        ])->get();

        return response()->json($conversations);
    }

    public function newConversation(Request $request)
    {
        $initiator = User::findOrFail($request->authUser['id']);
        $target = User::findOrFail($request->user['id']);

        $existingConvo = $initiator->conversations()->where(function($query) use($target){
            $query->where('initiator_identity', $target->user_name)->orWhere('target_identity', $target->user_name);
        })->where('type', 'single')->get();
        if(count($existingConvo) >= 1) {
            return response()->json([
                'status' => 'existing',
                'conversation' => $existingConvo,
            ]);
        }

        $convo = $this->client->conversations->v1->conversations->create();
        $conversation = Conversation::create(['sid' => $convo->sid]);
        
        $participant1 = $this->client->conversations->v1->conversations($convo->sid)
        ->participants->create(['identity' => $initiator->user_name]);
        $participant2 = $this->client->conversations->v1->conversations($convo->sid)
        ->participants->create(['identity' => $target->user_name]);

        $conversation->update([
            'initiator_sid' => $participant1->sid,
            'initiator_identity' => $initiator->user_name,
            'target_sid' => $participant2->sid,
            'target_identity' => $target->user_name,
        ]);

        $conversation->participants()->attach([$initiator->id, $target->id]);

        return response()->json([
            'status' => 'new',
            'conversation' => $conversation
        ]);
    }

    public function conversationUsers(Request $request) {
        $conversation = Conversation::where('sid', $request->sid)->first();
        return response()->json($conversation->participants()->get()->toArray());
    }

    public function deleteConversation() {
        $this->client->conversations->v1->conversations('CHdd8058439f7f44489cfa5094b380e6a5')->delete();
    }
}
