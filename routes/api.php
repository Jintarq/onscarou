<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BusController;
use App\Http\Controllers\CarpoolsController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;




Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post("carpools", [CarpoolsController::class, 'postCarpools']);
});

Route::get("users", [AuthController::class, 'index']);
Route::post("register", [AuthController::class, 'register']);
Route::post("login", [AuthController::class, "login"]);



Route::get("carpools", [CarpoolsController::class, 'index']);
Route::get("carpools/{id}", [CarpoolsController::class, 'getCarpoolsById']);
Route::get("carpools/{dest_dep}/{dest_arr}", [CarpoolsController::class, 'getCarCarpoolsByDests']);
Route::get("carpools/{dest_dep}/{dest_arr}/{time_dep}", [CarpoolsController::class, 'getCarCarpoolsByH']);
Route::delete("carpools/{id}", [CarpoolsController::class, 'delCarpoolsById']);


// User
Route::get("user/{id}", [UserController::class, "getUserInfosById"]);
