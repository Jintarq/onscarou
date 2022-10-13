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
            'price' => 'required'
        ]);

        return Carpools::create($request->all());
    }

    public function getCarpoolsByDests($dest_dep, $dest_arr)
    {
        $carpools = Carpools::where('dest_dep', '=', $dest_dep)->where('dest_arr', '=', $dest_arr)->get();
        return $carpools;
    }
    public function getCarpoolsByH($dest_dep, $dest_arr, $time_dep, $time_arr)
    {
        $carpools = Carpools::where('dest_dep', '=', $dest_dep)
            ->where('dest_arr', '=', $dest_arr)
            ->where('heure_dep', '>=', $time_dep)
            ->where('heure_arr', '>=', $time_arr)
            ->get();
        return $carpools;
    }
}
