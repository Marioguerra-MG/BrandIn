/* ======================
   LISTA DE STACKS
   ÍCONES OFICIAIS - SIMPLE ICONS CDN
====================== */

const stacks = [

  /* =========================
     🌐 FRONT-END
  ========================== */
  { type: "html", name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { type: "css", name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6" },
  { type: "javascript", name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { type: "typescript", name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { type: "react", name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { type: "nextjs", name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { type: "vue", name: "Vue.js", icon: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
  { type: "angular", name: "Angular", icon: "https://cdn.simpleicons.org/angular/DD0031" },
  { type: "svelte", name: "Svelte", icon: "https://cdn.simpleicons.org/svelte/FF3E00" },
  { type: "tailwind", name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },

  /* =========================
     🖥 BACK-END
  ========================== */
  { type: "node", name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { type: "express", name: "Express.js", icon: "https://cdn.simpleicons.org/express/000000" },
  { type: "nestjs", name: "NestJS", icon: "https://cdn.simpleicons.org/nestjs/E0234E" },
  { type: "fastify", name: "Fastify", icon: "https://cdn.simpleicons.org/fastify/000000" },
  { type: "python", name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { type: "django", name: "Django", icon: "https://cdn.simpleicons.org/django/092E20" },
  { type: "flask", name: "Flask", icon: "https://cdn.simpleicons.org/flask/000000" },
  { type: "java", name: "Java", icon: "https://cdn.simpleicons.org/openjdk/ED8B00" },
  { type: "spring", name: "Spring Boot", icon: "https://cdn.simpleicons.org/spring/6DB33F" },
  { type: "php", name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
  { type: "laravel", name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { type: "ruby", name: "Ruby", icon: "https://cdn.simpleicons.org/ruby/CC342D" },
  { type: "rails", name: "Ruby on Rails", icon: "https://cdn.simpleicons.org/rubyonrails/D30001" },
  { type: "csharp", name: "C#", icon: "https://cdn.simpleicons.org/dotnet/512BD4" },
  { type: "dotnet", name: ".NET", icon: "https://cdn.simpleicons.org/dotnet/512BD4" },

  /* =========================
     🗄 DATABASE
  ========================== */
  { type: "mongodb", name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { type: "mysql", name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  { type: "postgresql", name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { type: "redis", name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },

  /* =========================
     ☁️ CLOUD
  ========================== */
  { type: "aws", name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/232F3E" },
  { type: "azure", name: "Microsoft Azure", icon: "https://cdn.simpleicons.org/microsoftazure/0078D4" },
  { type: "gcp", name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud/4285F4" },
  { type: "firebase", name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },

  /* =========================
     ⚙️ DEVOPS & INFRA
  ========================== */
  { type: "docker", name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { type: "kubernetes", name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
  { type: "terraform", name: "Terraform", icon: "https://cdn.simpleicons.org/terraform/7B42BC" },
  { type: "ansible", name: "Ansible", icon: "https://cdn.simpleicons.org/ansible/EE0000" },
  { type: "linux", name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624" },

  /* =========================
     🔗 API & DATA
  ========================== */
  { type: "graphql", name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098" },

  /* =========================
     📱 MOBILE & DESKTOP
  ========================== */
  { type: "react-native", name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { type: "flutter", name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" },
  { type: "electron", name: "Electron", icon: "https://cdn.simpleicons.org/electron/47848F" },

  /* =========================
     🎨 DESIGN & COLLAB
  ========================== */
  { type: "figma", name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
  { type: "git", name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { type: "github", name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },

  /* =========================
     🤖 IA
  ========================== */
  { type: "openai", name: "OpenAI", icon: "https://cdn.simpleicons.org/openai/412991" },
  { type: "huggingface", name: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface/FFD21E" },
  { type: "tensorflow", name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
  { type: "pytorch", name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
  { type: "langchain", name: "LangChain", icon: "https://cdn.simpleicons.org/langchain/000000" },

  /* =========================
     💳 PAGAMENTOS
  ========================== */
  { type: "stripe", name: "Stripe", icon: "https://cdn.simpleicons.org/stripe/635BFF" },
  { type: "paypal", name: "PayPal", icon: "https://cdn.simpleicons.org/paypal/00457C" },
  { type: "mercadopago", name: "Mercado Pago", icon: "https://cdn.simpleicons.org/mercadopago/00B1EA" },

  /* =========================
     🚀 DEPLOY
  ========================== */
  { type: "vercel", name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000" },
  { type: "netlify", name: "Netlify", icon: "https://cdn.simpleicons.org/netlify/00C7B7" },
  { type: "railway", name: "Railway", icon: "https://cdn.simpleicons.org/railway/000000" },
  { type: "render", name: "Render", icon: "https://cdn.simpleicons.org/render/46E3B7" }

];