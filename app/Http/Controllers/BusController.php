<?php

namespace App\Http\Controllers;

use App\Models\Bus;
use Illuminate\Http\Request;

class BusController extends Controller
{
    public function index()
    {
        return Bus::all();
    }
    public function getCarpoolsById($id)
    {
        return Bus::find($id)->get();
    }
    public function delCarpoolsById($id)
    {
        $bus = Bus::find($id)->delete();

        return $bus;
    }
    public function postCarpools(Request $request)
    {
        $request->validate([
            'user_id' => 'required',
            'dest_dep' => 'required|string',
            'dest_arr' => 'required|string',
            'time_dep' => 'required',
            'time_arr' => 'required',
            'price' => 'required'
        ]);

        return Bus::create($request->all());
    }
    public function getBusByH($dest_dep, $dest_arr, $time_dep)
    {
        $time_dep = str_replace('_', ' ', $time_dep);
        $bus = Bus::where('dest_dep', '=', $dest_dep)
            ->where('dest_arr', '=', $dest_arr)
            ->where('heure_dep', '>=', $time_dep)
            ->get();
        return $bus;
    }
}
