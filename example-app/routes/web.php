<?php

use App\Jobs\SendWelcomeEmail;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Route;
use App\Models\Job;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


// class Job{
//     public static function all() : array{
//         return [
//             [
//                 'id' => 1,
//                 'title' => 'Director',
//                 'salary' => '2000'
//             ],
//             [
//                 'id' => 2,
//                 'title' => 'Programmer',
//                 'salary' => '2000'
//             ],
//         ];
//     }
//


// Route::get('/', function () {
//     // (new SendWelcomeEmail()) ->handle();
//     // $jobs = Job::all();
//     // dd( $jobs[1]->salary);
//     SendWelcomeEmail::dispatch();
//      return view('home');
// });

Route::get('/', function () {
//    (new SendWelcomeEmail()) ->handle();
    //  $jobs = Job::all();
    // dd( $jobs[1]->salary);
    // SendWelcomeEmail::dispatch();
     return view('home');
});

// Route::get('/', function () {
    
//     $jobs = Job::all();
//     // dd( $jobs[1]->salary);
//      return view('home');
// });

Route::get('/jobs', function () {

    $jobs = Job::with('employer')->latest()->paginate(3);
    return view('jobs.show',[
        'jobs'=> $jobs
    ]);
});



Route::get('/jobs/create',function(){
    return view('jobs.create');
});

// });
Route::get('/jobs/{id}', function ($id)  {
   $job = Job::find($id);
    //  dd($job);
    return view('job.show',['job'=>$job]);
});


Route::post('/jobs',function(){
    // validate

    request()->validate([
        'title'=>['required','min:3'],
        'salary'=>['required'],
    ]);

    Job::create([
        'title'=> request('title'),
        'salary'=> request('salary'),
        'employer_id'=> 1,
    ]);

    return redirect('/jobs');
})
;

// Route::post('/jobs', function () {

//     dd('hello from the post request');
// });


Route::get('/contact', function () {
    return view('contact');
});