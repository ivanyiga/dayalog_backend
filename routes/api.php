<?php

use App\Http\Controllers\DeviceController;
use App\Http\Controllers\DriverController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\VehiclesController;
use Illuminate\Http\Request;
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


/**
 * @group Users
 */
Route::middleware(['auth:sanctum'])->get(
    '/user', function (Request $request) {
        return $request->user();
    }
);

Route::apiResource('devices', DeviceController::class);

Route::apiResource('drivers', DriverController::class);
Route::post('/drivers/{driver}/vehicles/{vehicle}', [DriverController::class, 'assignVehicle']);
Route::delete('/drivers/{driver}/vehicles/{vehicle}', [DriverController::class, 'removeVehicle']);

Route::apiResource('vehicles', VehiclesController::class);
Route::put('vehicles/{vehicle}/attach-device', [VehiclesController::class, 'attachDevice']);
Route::put('vehicles/{vehicle}/detach-devices', [VehiclesController::class, 'detachDevices']);

Route::apiResource('orders', OrderController::class);
Route::post('/orders/{order}/vehicle/{vehicle}', [OrderController::class, 'attachVehicle']);
Route::delete('/orders/{order}/vehicle/{vehicle}', [OrderController::class, 'detachVehicle']);

require __DIR__.'/api_auth.php';
