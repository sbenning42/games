<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMatchsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('matchs', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('matchmacking_id')->unsigned();
            $table->integer('current_player')->unsigned();
            $table->integer('winner')->unsigned()->nullable();
            $table->json('last_move')->nullable();
            $table->timestamps();
            $table->foreign('matchmacking_id')
                ->references('id')->on('matchmackings')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('current_player')
                ->references('id')->on('users')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('winner')
                ->references('id')->on('users')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('matchs');
    }
}
