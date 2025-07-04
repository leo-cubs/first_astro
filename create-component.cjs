// create-component.js
const fs = require('fs');
const path = require('path');

const name = process.argv[2];

if (!name) {
  console.error('❌ Debes indicar el nombre del componente. Ejemplo: node create-component.js Navbar');
  process.exit(1);
}

const componentDir = path.join(__dirname, 'src', 'pages');
const filePath = path.join(componentDir, `${name}.astro`);

if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
}

if (fs.existsSync(filePath)) {
  console.error(`⚠️  Ya existe el componente: ${filePath}`);
  process.exit(1);
}

const content = `---
---

<!-- Componente ${name} --> 

<div class="${name.toLowerCase()}">
  <!-- contenido -->
  <h1>${name}</h1>
</div>
`;

fs.writeFileSync(filePath, content);
console.log(`✅ Componente creado: ${filePath}`);

// comando para crear componente
// npm run new:component Footer
