<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Http\Controllers\API\GetJsonPage;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/api', 'API\GetJsonPage@makeJSONFromSite', ['manon-thivant.xyz', $params]);
Route::get('/api2', 'API\GetJsonPage@advancedMakeJSONFromSite');

