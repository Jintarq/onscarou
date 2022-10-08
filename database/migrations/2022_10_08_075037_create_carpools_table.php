<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarpoolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carpools', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer("user_id");
            $table->string("dest_dep");
            $table->string("dest_arr");
            $table->date("heure_dep");
            $table->date("heure_arr");
            $table->integer("price");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('carpools');
    }
}
