<?php

namespace App\Http\Controllers;

use App\Models\Carpools;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CarpoolsController extends Controller
{

    public function index()
    {
        return Carpools::all();
    }
    public function getCarpoolsById($id)
    {
        return Carpools::find($id)->get();
    }
    public function delCarpoolsById($id)
    {
        $carpool = Carpools::find($id)->delete();

        return $carpool;
    }
    public function postCarpools(Request $request)
    {
        $request->validate([
            'user_id' => 'required',
            'dest_dep' => 'required',
            'dest_arr' => 'required',
            'time_dep' => 'required',
            'time_arr' => 'required',
            'price' => 'required',
            'passengers' => 'required'
        ]);

        return Carpools::create($request->all());
    }

    public function getCarCarpoolsByDests($dest_dep, $dest_arr)
    {
        $carpools = Carpools::where('dest_dep', '=', $dest_dep)->where('dest_arr', '=', $dest_arr)->get();
        return $carpools;
    }
    public function getCarCarpoolsByH($dest_dep, $dest_arr, $time_dep)
    {
        $time_dep = str_replace('_', ' ', $time_dep);
        $carpools = Carpools::where('dest_dep', '=', $dest_dep)
            ->where('dest_dep', '=', $dest_dep)
            ->where('dest_arr', '=', $dest_arr)
            ->where('time_dep', '>=', $time_dep)
            ->where('type', '=', 'car')
            ->get();
        return $carpools;
    }
}
