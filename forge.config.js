module.exports = {
    publishers: [
        {
            name: '@electron-forge/publisher-github',
            config: {
            repository: {
                owner: 'BilibiliSheepCode',
                name: 'Universe',
            },
            prerelease: false,
            draft: true,
            },
        },
    ],
}

module.exports = config;