<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{   
        protected $fillable = [
            'name', 'avatar', 'created_at', 'updated_at',
        ];
    
        protected $guarded = [
            'id',
        ];
    
        protected $hidden = [
            'created_at', 'updated_at',
        ];
    
        public function matchmackings() {
            return $this->hasMany('App\Matchmacking');
        }
}
