import React from 'react';
import { Instagram, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return ( <
        footer className = "bg-gray-800 text-white py-8 mt-16" >
        <
        div className = "container mx-auto px-4 text-center" >
        <
        p className = "mb-4" > ©2024 Beleza Profissional.Todos os direitos reservados. < /p> <
        div className = "flex justify-center gap-6" >
        <
        Instagram className = "cursor-pointer hover:text-pink-400 transition-colors" / >
        <
        Phone className = "cursor-pointer hover:text-pink-400 transition-colors" / >
        <
        Mail className = "cursor-pointer hover:text-pink-400 transition-colors" / >
        <
        /div> < /
        div > <
        /footer>
    );
}
``
`

## 📋 **Checklist Final:**

Agora você tem todos os componentes separados! Aqui está o que fazer:

1. ✅ Criar a pasta do projeto: `
npx create - react - app makeup - booking - site `
2. ✅ Instalar dependências: `
npm install lucide - react `
3. ✅ Configurar Tailwind CSS
4. ✅ Criar a pasta `
src / components / `
5. ✅ Criar a pasta `
src / data / `
6. ✅ Copiar cada arquivo acima para sua respectiva pasta
7. ✅ Substituir o conteúdo do `
src / App.jsx `
8. ✅ Atualizar o `
src / index.css ` com o Tailwind
9. ✅ Rodar: `
npm start `

**Estrutura final completa:**
`
``
src / ├──components / │├──Header.jsx✅│├── Footer.jsx✅│├── Home.jsx✅│├── Services.jsx✅│├── Portfolio.jsx✅│├── Booking.jsx✅│└── Contact.jsx✅├── data / │└──services.js✅├── App.jsx✅├── index.js(padrão do React)└── index.css✅