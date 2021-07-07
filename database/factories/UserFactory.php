<?php

namespace Database\Factories;

use App\Models\User;
use Twilio\Rest\Client;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Hash;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    public function definition()
    {
        $client = new Client(config('twilio.sid'), config('twilio.token'));

        $userName = $this->faker->unique()->userName();
        $name = $this->faker->name();
        $mobile = $this->faker->unique()->numerify('###########');
        $email = $this->faker->unique()->safeEmail();

        $user = $client->conversations->v1->users->create($userName, [
            'friendlyName' => $name, 
            'attributes' => json_encode([
                'name' => $name,
                'mobile' => $mobile,
                'email' => $email,
            ]),
        ]);

        return [
            'name' => $name,
            'user_name' => $userName,
            'email' => $email,
            'mobile' => $mobile,
            'password' => Hash::make('11111111'),
            'sid' => $user->sid,
            'url' => $user->url,
            'created_at' => $user->dateCreated,
            'updated_at' => $user->dateUpdated,
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
