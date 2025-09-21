type EnvConfig = {
  BASE_URL: string | null
}

const ENV: EnvConfig = {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
};

export default ENV;
