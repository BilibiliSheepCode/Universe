module.exports = {
    publishers: [
        {
            name: '@electron-forge/publisher-github',
            config: {
            repository: {
                owner: 'BilibiliSheepCode',
                name: 'github-repo-name',
            },
            prerelease: false,
            draft: true,
            },
        },
    ],
}