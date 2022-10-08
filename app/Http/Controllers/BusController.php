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
            'heure_dep' => 'required',
            'heure_arr' => 'required',
            'price' => 'required'
        ]);

        return Bus::create($request->all());
    }
}
