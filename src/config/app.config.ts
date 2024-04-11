
export const EnvConfiguration = () => ({
    environmet: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    PORT: process.env.Port || 3002,
    defaultLimit: process.env.DEFAULT_LIMIT || 7,
})