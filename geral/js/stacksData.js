const stacks = [

  /* =========================
     🌐 FRONT-END
  ========================== */
  { type: "html", name: "HTML5", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg" },
  { type: "css", name: "CSS3", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg" },
  { type: "javascript", name: "JavaScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg" },
  { type: "typescript", name: "TypeScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/typescript.svg" },
  { type: "react", name: "React", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg" },
  { type: "nextjs", name: "Next.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg" },
  { type: "vue", name: "Vue.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vuedotjs.svg" },
  { type: "angular", name: "Angular", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/angular.svg" },
  { type: "svelte", name: "Svelte", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/svelte.svg" },
  { type: "tailwind", name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg" },

  /* =========================
     🖥 BACK-END
  ========================== */
  { type: "node", name: "Node.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nodedotjs.svg" },
  { type: "express", name: "Express.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/express.svg" },
  { type: "nestjs", name: "NestJS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nestjs.svg" },
  { type: "fastify", name: "Fastify", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/fastify.svg" },
  { type: "python", name: "Python", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg" },
  { type: "django", name: "Django", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/django.svg" },
  { type: "flask", name: "Flask", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/flask.svg" },
  { type: "java", name: "Java", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openjdk.svg" },
  { type: "spring", name: "Spring Boot", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/spring.svg" },
  { type: "php", name: "PHP", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/php.svg" },
  { type: "laravel", name: "Laravel", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/laravel.svg" },
  { type: "ruby", name: "Ruby", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ruby.svg" },
  { type: "rails", name: "Ruby on Rails", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/rubyonrails.svg" },
  { type: "csharp", name: "C#", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/csharp.svg" },
  { type: "dotnet", name: ".NET", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dotnet.svg" },

  /* =========================
     🗄 DATABASE
  ========================== */
  { type: "mongodb", name: "MongoDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg" },
  { type: "mysql", name: "MySQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg" },
  { type: "postgresql", name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/postgresql.svg" },
  { type: "redis", name: "Redis", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/redis.svg" },

  /* =========================
     ☁️ CLOUD
  ========================== */
  { type: "aws", name: "AWS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonwebservices.svg" },
  { type: "azure", name: "Microsoft Azure", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftazure.svg" },
  { type: "gcp", name: "Google Cloud", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlecloud.svg" },
  { type: "firebase", name: "Firebase", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/firebase.svg" },

  /* =========================
     ⚙️ DEVOPS
  ========================== */
  { type: "docker", name: "Docker", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/docker.svg" },
  { type: "kubernetes", name: "Kubernetes", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/kubernetes.svg" },
  { type: "terraform", name: "Terraform", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/terraform.svg" },
  { type: "ansible", name: "Ansible", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ansible.svg" },
  { type: "linux", name: "Linux", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linux.svg" },

  /* =========================
     🔗 API & DATA
  ========================== */
  { type: "graphql", name: "GraphQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/graphql.svg" },

  /* =========================
     📱 MOBILE
  ========================== */
  { type: "react-native", name: "React Native", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg" },
  { type: "flutter", name: "Flutter", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/flutter.svg" },
  { type: "electron", name: "Electron", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/electron.svg" },

  /* =========================
     🎨 DESIGN & COLLAB
  ========================== */
  { type: "figma", name: "Figma", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg" },
  { type: "git", name: "Git", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/git.svg" },
  { type: "github", name: "GitHub", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" },

  /* =========================
     🤖 IA
  ========================== */
  { type: "openai", name: "OpenAI API", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg" },
  { type: "huggingface", name: "Hugging Face", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/huggingface.svg" },
  { type: "tensorflow", name: "TensorFlow", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tensorflow.svg" },
  { type: "pytorch", name: "PyTorch", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/pytorch.svg" },
  { type: "langchain", name: "LangChain", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/langchain.svg" },

  /* =========================
     🧪 TESTES
  ========================== */
  { type: "jest", name: "Jest", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jest.svg" },
  { type: "cypress", name: "Cypress", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cypress.svg" },
  { type: "playwright", name: "Playwright", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/playwright.svg" },
  { type: "selenium", name: "Selenium", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/selenium.svg" },

  /* =========================
     💳 PAGAMENTOS
  ========================== */
  { type: "stripe", name: "Stripe", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stripe.svg" },
  { type: "paypal", name: "PayPal", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/paypal.svg" },
  { type: "mercadopago", name: "Mercado Pago", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mercadopago.svg" },

  /* =========================
     🚀 DEPLOY
  ========================== */
  { type: "vercel", name: "Vercel", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vercel.svg" },
  { type: "netlify", name: "Netlify", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/netlify.svg" },
  { type: "railway", name: "Railway", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/railway.svg" },
  { type: "render", name: "Render", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/render.svg" }

];