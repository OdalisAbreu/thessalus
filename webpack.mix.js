const mix = require('laravel-mix');

// Añadir Tailwind al proceso de compilación de CSS
mix.js('resources/js/app.js', 'public/js')
   .react() // Soporte para React
   .postCss('resources/css/app.css', 'public/css', [
      require('tailwindcss'),
   ]);

if (mix.inProduction()) {
   mix.version();
}