import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Clear existing data
  await prisma.analytics.deleteMany()
  await prisma.contactMessage.deleteMany()
  await prisma.project.deleteMany()
  await prisma.workExperience.deleteMany()
  await prisma.skill.deleteMany()

  // Seed skills (proficiency now represents years of experience)
  const skills = await prisma.skill.createMany({
    data: [
      // Frontend
  { name: 'React', category: 'Frontend', proficiency: 3 },
  { name: 'Next.js', category: 'Frontend', proficiency: 2 },
  { name: 'TypeScript', category: 'Frontend', proficiency: 2 },
  { name: 'JavaScript', category: 'Frontend', proficiency: 4 },
  { name: 'HTML/CSS', category: 'Frontend', proficiency: 5 },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 2 },
  { name: 'Flutter', category: 'Frontend', proficiency: 1 },
  { name: 'Java', category: 'Backend', proficiency: 4 },
  // Backend
  { name: 'Node.js', category: 'Backend', proficiency: 3 },
  { name: 'Express.js', category: 'Backend', proficiency: 2 },
  { name: 'Python', category: 'Backend', proficiency: 4 },
  { name: 'RESTful APIs', category: 'Backend', proficiency: 3 },
  { name: 'API Integration', category: 'Backend', proficiency: 2 },
  // Database
  { name: 'PostgreSQL', category: 'Database', proficiency: 2 },
  { name: 'MongoDB', category: 'Database', proficiency: 1 },
  { name: 'Prisma', category: 'Database', proficiency: 2 },
  { name: 'SQLite', category: 'Database', proficiency: 2 },
  // Other coding languages from projects/work experience
  { name: 'SQL', category: 'Backend', proficiency: 2 },
  { name: 'HTML', category: 'Frontend', proficiency: 5 },
  { name: 'CSS', category: 'Frontend', proficiency: 5 },
  // Tools & Technologies
      { name: 'Excel', category: 'Tools', proficiency: 6 },
      { name: 'Git', category: 'Tools', proficiency: 3 },
      { name: 'AWS', category: 'Tools', proficiency: 1 },
      { name: 'IBM Cloud', category: 'Tools', proficiency: 1 },
      { name: 'NOPCommerce', category: 'Tools', proficiency: 1 },
      { name: 'Data Analysis', category: 'Tools', proficiency: 3 },
      { name: 'E-commerce', category: 'Tools', proficiency: 1 },
    ]
  })

  // Seed work experience
  const workExperience = await prisma.workExperience.createMany({
    data: [
      {
        role: 'Associate Full Stack Developer (Internship)',
        company: 'Amptier Inc.',
        start_date: new Date('2025-06-01'),
        end_date: null,
        description: 'Developing web and mobile applications using React.js, Node.js, and Flutter for multi-industry client projects. Designing backend services and collaborating with senior developers on scalable application architecture.',
        tech_stack: JSON.stringify(['React.js', 'Node.js', 'Flutter', 'AWS', 'IBM Cloud', 'API Integration'])
      },
      {
        role: 'Data Entry Specialist (Volunteer)',
        company: 'Wellingtons Electrical',
        start_date: new Date('2025-05-01'),
        end_date: null,
        description: 'Managing product data for 500+ items in NOPCommerce platform. Reviewing and updating product descriptions, pricing, and metadata to improve search relevance and site navigation.',
        tech_stack: JSON.stringify(['NOPCommerce', 'Data Management', 'E-commerce', 'Product Categorization'])
      },
      {
        role: 'Plant Operations Assistant',
        company: 'Muhlenberg College',
        start_date: new Date('2024-08-01'),
        end_date: new Date('2025-05-31'),
        description: 'Analyzed monthly utility usage using Excel for cost forecasting. Processed 300+ work orders per semester and compiled billing records to support campus operations.',
        tech_stack: JSON.stringify(['Excel', 'Data Analysis', 'Operations Management', 'Utility Tracking'])
      },
      {
        role: 'Financial Aid Assistant',
        company: 'Muhlenberg College',
        start_date: new Date('2023-05-01'),
        end_date: new Date('2024-05-31'),
        description: 'Processed and evaluated financial aid applications using specialized software systems. Assisted students in understanding the financial aid process and tracked awards accurately.',
        tech_stack: JSON.stringify(['Financial Aid Software', 'Data Processing', 'Student Services'])
      },
      {
        role: 'Conference Assistant',
        company: 'Muhlenberg College',
        start_date: new Date('2022-05-01'),
        end_date: new Date('2022-08-31'),
        description: 'Assisted with organization of large summer camps and conferences. Managed incoming phone calls and processed data using Excel for event coordination.',
        tech_stack: JSON.stringify(['Excel', 'Event Management', 'Customer Service', 'Data Organization'])
      }
    ]
  })

  // Seed projects
  const projects = await prisma.project.createMany({
    data: [
      {
        title: 'CPFC',
        description: 'A comprehensive project showcasing full-stack development capabilities and modern web technologies.',
        tech_stack: JSON.stringify(['Web Development', 'Full Stack', 'Modern Technologies']),
        live_url: 'https://cpfc.netlify.app',
        github_url: 'https://github.com/lukegordos/cpfc'
      },
      {
        title: 'Shopping Mall Database System',
        description: 'Member management system for "Jangs Shopping Mall" with full CRUD operations and admin dashboard.',
        tech_stack: JSON.stringify(['React', 'Node.js', 'Express', 'SQLite', 'CRUD Operations']),
        live_url: 'https://shoppingmalldatabase.netlify.app',
        github_url: 'https://github.com/lukegordos/ShoppingMallDatabase'
      },
      {
        title: 'HelpSideShoes',
        description: 'Basketball shoe recommendation website with interactive quiz system and comprehensive database of 20+ shoes.',
        tech_stack: JSON.stringify(['HTML', 'CSS', 'JavaScript', 'Database Integration', 'Interactive Forms']),
        live_url: 'https://helpsideshoes.netlify.app',
        github_url: 'https://github.com/lukegordos/HelpSideShoes'
      },
      {
        title: 'RunHer',
        description: 'Running and fitness tracking application designed for women runners with community features.',
        tech_stack: JSON.stringify(['Mobile Development', 'Fitness Tracking', 'Community Features']),
        live_url: 'https://runher.netlify.app',
        github_url: 'https://github.com/lukegordos/RunHer'
      },
      {
        title: 'Emergency Management System (EMS)',
        description: 'Municipal emergency platform with real-time incident reporting, interactive dashboards, and geolocation services. Demo login: username "abc", password "abc@123".',
        tech_stack: JSON.stringify(['Flask', 'Python', 'SQLite', 'Chart.js', 'Leaflet.js', 'TailwindCSS', 'WebSockets']),
        live_url: 'http://13.53.131.254',
        github_url: 'https://github.com/lukegordos/EMS'
      },
      {
        title: 'SUN Bucks Program Management',
        description: 'California SNAP benefits management system with dual admin/customer interfaces and comprehensive analytics dashboard.',
        tech_stack: JSON.stringify(['React', 'TypeScript', 'Flask', 'SQLite', 'Tailwind CSS', 'Chart Components']),
        live_url: 'https://sunbucksproject.netlify.app',
        github_url: 'https://github.com/lukegordos/SBs'
      },
      {
        title: 'Virginia Campaign Finance Filing System (VCFFS)',
        description: 'Comprehensive campaign finance management system with React/TypeScript featuring collections, reporting, and compliance tools.',
        tech_stack: JSON.stringify(['React', 'TypeScript', 'Component Libraries', 'UI/UX Design', 'Financial Reporting']),
        live_url: 'https://campainfilingsystem.netlify.app',
        github_url: 'https://github.com/lukegordos/VCFFS'
      },
      {
        title: 'CivInsight-AI',
        description: 'Real-time civic issue detection platform using NYC 311 data with machine learning pipeline and geospatial mapping.',
        tech_stack: JSON.stringify(['FastAPI', 'React', 'Hugging Face', 'Machine Learning', 'Geospatial Analysis', 'NYC 311 API']),
  live_url: 'https://civinsightai.netlify.app',
        github_url: 'https://github.com/lukegordos/CivInsight-AI'
      }
    ]
  })

  console.log('✅ Database seeded successfully!')
  console.log(`Created ${skills.count} skills`)
  console.log(`Created ${workExperience.count} work experiences`)
  console.log(`Created ${projects.count} projects`)
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
