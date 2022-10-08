<?php

namespace App\Http\Controllers;

use App\Models\Carpools;
use Illuminate\Http\Request;

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
            'heure_dep' => 'required',
            'heure_arr' => 'required',
            'price' => 'required'
        ]);

        return Carpools::create($request->all());
    }
}
