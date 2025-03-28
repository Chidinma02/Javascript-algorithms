{{-- 
<a {{ $attributes }} >
    {{ $slot }}
</a> --}}
{{-- @props(['active' => false,'type'=>'a'])


@if($type === 'a')
<a href="{{ $attributes['href'] }}" 
   class="{{ $active ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white' }} rounded-md px-3 py-2 text-sm font-medium" 
   aria-current="{{ $active ? 'page' : 'false' }}">
   {{ $slot }}
</a>


@else
<button href="{{ $attributes['href'] }}" 
   class="{{ $active ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white' }} rounded-md px-3 py-2 text-sm font-medium" 
   aria-current="{{ $active ? 'page' : 'false' }}">
   {{ $slot }}
</button>

@endif --}}
@props(['active' => false])



<a href="{{ $attributes['href'] }}" 
   class="{{ $active ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white' }} rounded-md px-3 py-2 text-sm font-medium" 
   aria-current="{{ $active ? 'page' : 'false' }}">
   {{ $slot }}
</a>
