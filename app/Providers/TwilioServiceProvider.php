<?php

namespace App\Providers;

use App\Chat\TwilioNumber;
use Twilio\Rest\Client;
use Illuminate\Support\ServiceProvider;

class TwilioServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->singleton(Client::class, function($app){
            return new Client(config('twilio.sid'), config('twilio.token'));
        });

        $this->app->singleton(TwilioNumber::class, function($app){
            return new TwilioNumber(config('twilio.number'));
        });
    }
}
