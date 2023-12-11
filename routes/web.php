<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Web\DeviceController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Web\DriverController;
use App\Http\Controllers\Web\OrdersController;
use App\Http\Controllers\Web\VehicleController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/test_page', function () {
    return Inertia::render('Test', [
    ]);
})->name('test');

Route::get('/', function (){
    return Inertia::render("Landing");
})->name('Dayalog');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [HomeController::class, 'index'])->name('dashboard');
    Route::get('/home/drivers', [HomeController::class, 'drivers'])->name('dashboard.drivers');

    Route::get('/create-driver',  [DriverController::class,'create'] )->name('driver.create');
    Route::post('/create-driver', [DriverController::class,'store'] )->name('driver.store');
    Route::get('/drivers/search', [DriverController::class,'search'] )->name('driver.search-json');

    Route::get('/view-orders', [OrdersController::class, 'index'])->name('orders');
    Route::get('/create-order', [OrdersController::class, 'create'])->name('create-order');
    Route::post('/order/store', [OrdersController::class, 'store'])->name('order.store');
    Route::post('/order/{order}/add/trip', [OrdersController::class, 'addTrip'])->name('order.add-trip');

    Route::get('/view-devices', [DeviceController::class, 'index'] )->name('devices.index');
    Route::get('/add-device', [DeviceController::class, 'create'] )->name('device.create');
    Route::post('/device/store', [DeviceController::class, 'store'] )->name('device.store');


    Route::get('/vehicles',  [VehicleController::class, 'index'] )->name('vehicle.view');
    Route::get('/add-vehicle', [VehicleController::class, 'create'] )->name('vehicle.create');
    Route::post('/vehicle/store', [VehicleController::class, 'store'] )->name('vehicle.store');
    Route::post('/vehicle/{vehicle}/attach/driver', [VehicleController::class, 'attachDriver'])->name('vehicle.attach-driver');
    Route::delete('/vehicle/detach/driver', [VehicleController::class, 'detachDriver'])->name('vehicle.detach-driver');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'] )->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'] )->name('profile.destroy');

    //Web app apis
    Route::group(['prefix'=> 'web_api', 'as'=> 'web_api.'], function () {
        Route::get('/users/search', [RegisteredUserController::class, 'getOptionUsers'])->name('searchUsers');
        Route::get('/user/find', [RegisteredUserController::class, 'getOptionUser'])->name('findUser');
        Route::post('user/create', [RegisteredUserController::class, 'createUser'])->name('createUser');

        Route::get('/vehicles/search', [VehicleController::class, 'getOptionVehicles'] )->name('searchVehicles');
        Route::get('/vehicle/find', [VehicleController::class, 'getOptionVehicle'] )->name('findVehicle');
        Route::post('/vehicle/create', [VehicleController::class, 'createVehicle'] )->name('createVehicle');
        
    });

});

require __DIR__.'/auth.php';
