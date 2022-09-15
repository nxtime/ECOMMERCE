/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withTranspileModules = require("next-transpile-modules");
const withTypescript = require("@zeit/next-typescript");

const pluginsConfig = [[withTranspileModules, { transpileModules: ["@iconify/react"] }], [withTypescript]];

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true
};

module.exports = withPlugins([nextConfig, pluginsConfig]);
