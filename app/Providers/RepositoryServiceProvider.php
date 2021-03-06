<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(\App\Repositories\UserRepository::class, \App\Repositories\UserRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\PersonRepository::class, \App\Repositories\PersonRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\WorkshopRepository::class, \App\Repositories\WorkshopRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\RolesRepository::class, \App\Repositories\RolesRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\VehicleRepository::class, \App\Repositories\VehicleRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\CarRepository::class, \App\Repositories\CarRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\ProductRepository::class, \App\Repositories\ProductRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\CategoryRepository::class, \App\Repositories\CategoryRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\ServiceRepository::class, \App\Repositories\ServiceRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\DiagnosisRepository::class, \App\Repositories\DiagnosisRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\ChecklistRepository::class, \App\Repositories\ChecklistRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\StatesRepository::class, \App\Repositories\StatesRepositoryEloquent::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
