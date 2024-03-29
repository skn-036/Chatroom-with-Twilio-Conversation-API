<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet"> 
    <link href="{{ asset('css/style.css') }}" rel="stylesheet"> 
</head>
<body>
    <div class="w-screen bg-black d-flex h-screen z-999">
        <div class="bg-white mx-auto w-40 round-10" id="app">
            <app />        
        </div>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
