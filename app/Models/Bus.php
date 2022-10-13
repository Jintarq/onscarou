<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bus extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'dest_dep', 'dest_arr', 'time_dep', 'time_arr', 'price'];
}
