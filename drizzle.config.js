/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_wzkHjSEXr68G@ep-rough-poetry-a4u2u3kj.us-east-1.aws.neon.tech/AI-Content_Genrator?sslmode=require'
    
    }
  };