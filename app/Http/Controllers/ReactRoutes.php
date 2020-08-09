<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class ReactRoutes extends Controller
{
    //

    public function logout()
    {
        \Log::info("-- authentication logout --");

        Auth::logout();

        return redirect("/");
    }

    public function reactAppRoute()
    {
        // other actions

        return view('app')->with([
            'webName' => "ShitfTech"
        ]);
    }
}
