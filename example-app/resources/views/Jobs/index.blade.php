<x-layout>
    <x-slot name="heading">secific job</x-slot>

    <h1>{{ $job['title'] }}</h1>
    <p>Salary: {{ $job['salary'] }}</p>

    This is an jobs page
</x-layout>