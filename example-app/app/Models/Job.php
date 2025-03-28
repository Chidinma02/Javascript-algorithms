<?php

namespace App\Models;

use Illuminate\Support\Arr;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Job extends Model{

    use HasFactory;

    protected $table = 'job_listing';
    protected $fillable =['title','salary','employer_id'];

    public function employer(){
        return $this->belongsTo(Employer::class);
    } 

    public function tags(){
        return $this->belongsToMany(Tag::class,foreignPivotKey:"job_listing_id");
    }




    
    // public static function all() : array{
    //     return [
    //         [
    //             'id' => 1,
    //             'title' => 'Director',
    //             'salary' => '2000'
    //         ],
    //         [
    //             'id' => 2,
    //             'title' => 'Programmer',
    //             'salary' => '2000'
    //         ], 
    //     ];
    // }


    // public static function find(int $id): array {
    //     $job = Arr::first(static::all(), fn($job) => $job['id'] == $id);
    
    //     if (!$job) {
    //         abort(404);
    //     }
    
    //     return $job;
    // }
    
}