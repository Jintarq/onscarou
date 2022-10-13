<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BusController;
use App\Http\Controllers\CarpoolsController;
use Illuminate\Support\Facades\Route;




Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('logout', [AuthController::class, 'logout']);
});

Route::get("users", [AuthController::class, 'index']);
Route::post("register", [AuthController::class, 'register']);
Route::post("login", [AuthController::class, "login"]);

Route::get("carpools", [CarpoolsController::class, 'index']);
Route::get("bus", [BusController::class, "index"]);

Route::post("carpools", [CarpoolsController::class, 'postCarpools']);
Route::post("bus", [BusController::class, 'postBus']);

Route::get("carpools/{id}", [CarpoolsController::class, 'getCarpoolsById']);
Route::get("bus/{id}", [BusController::class, 'getBusById']);
Route::get("carpools/{dest_dep}/{dest_arr}", [CarpoolsController::class, 'getCarpoolsByDests']);
Route::get("carpools/{dest_dep}/{dest_arr}/{time_dep}/{time_arr}", [CarpoolsController::class, 'getCarpoolsByH']);

Route::delete("carpools/{id}", [CarpoolsController::class, 'delCarpoolsById']);
Route::delete("bus/{id}", [BusController::class, 'delBusById']);
