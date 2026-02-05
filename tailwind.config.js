export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        industrial: {
          900: '#0f172a', // Azul Noite (Hero/Footer) - Profissional
          800: '#1e293b', // Azul Petróleo (Cards)
          600: '#0284c7', // Azul Ação (Botões/Destaques) - Vibrante
          100: '#f1f5f9', // Cinza Gelo (Fundo de seções claras)
        },
        safety: '#f59e0b', // Laranja "Atenção" (Pequenos detalhes)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Importar no index.html
      }
    },
  },
  plugins: [],
}