<?php

namespace App\Http\Controllers\Twilio;

use App\Chat\Serialize;
use Twilio\Rest\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MessageController extends Controller
{
    protected $client;

    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    public function allMessages(Request $request) {
        $messages = $this->client->conversations->v1->conversations($request->convoSid)->messages->read();
        $response = [];
        foreach($messages as $msg) {
            $data = [];

            $data['conversationSid'] = $msg->conversationSid;
            $data['participantSid'] = $msg->participantSid;
            $data['sid'] = $msg->sid;
            $data['author'] = $msg->author;
            $data['body'] = $msg->body;
            $data['media'] = $msg->media;
            $data['dateCreated'] = $msg->dateCreated;
            $data['dateUpdated'] = $msg->dateUpdated;
            $data['url'] = $msg->url;

            $response[] = $data;
        }
        return response()->json($response);
    }

    public function newMessage(Request $request) {
        $authUser = $request->me;
        $msg = $this->client->conversations->v1->conversations($request->convoSid)->messages->create([
            'author' => $authUser['user_name'],
            'body' => $request->msg,
        ]);

        if($msg) {
            $messages = $this->client->conversations->v1->conversations($request->convoSid)->messages->read();
            $response = [];
            foreach($messages as $msg) {
                $data = [];
    
                $data['conversationSid'] = $msg->conversationSid;
                $data['participantSid'] = $msg->participantSid;
                $data['sid'] = $msg->sid;
                $data['author'] = $msg->author;
                $data['body'] = $msg->body;
                $data['media'] = $msg->media;
                $data['dateCreated'] = $msg->dateCreated;
                $data['dateUpdated'] = $msg->dateUpdated;
                $data['url'] = $msg->url;
    
                $response[] = $data;
            }
            return response()->json($response);
        }
    }

    public function updateMsg(Request $request) {
        $messages = $this->client->conversations->v1->conversations($request->conversation_sid)->messages->read();
        $response = [];
        foreach($messages as $msg) {
            $data = [];

            $data['conversationSid'] = $msg->conversationSid;
            $data['participantSid'] = $msg->participantSid;
            $data['sid'] = $msg->sid;
            $data['author'] = $msg->author;
            $data['body'] = $msg->body;
            $data['media'] = $msg->media;
            $data['dateCreated'] = $msg->dateCreated;
            $data['dateUpdated'] = $msg->dateUpdated;
            $data['url'] = $msg->url;

            $response[] = $data;
        }
        return response()->json('hello world');
    }
}
