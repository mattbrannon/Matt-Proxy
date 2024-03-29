module.exports = {
    apps: [{
        name: 'related-items-proxy',
        script: 'server.js'
    }],
    deploy: {
        production: {
            user: 'ubuntu',
            host: 'ec2-18-191-0-101.us-east-2.compute.amazonaws.com',
            key: '~/.ssh/related.pem',
            ref: 'origin/master',
            repo: 'git@github.com:ghostrib/Matt-Proxy.git',
            path: '/home/ubuntu/related-items-proxy',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}