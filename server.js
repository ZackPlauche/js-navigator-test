const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Get local IP addresses
function getLocalIpAddresses() {
    const interfaces = os.networkInterfaces();
    const addresses = [];
    
    for (const interfaceName in interfaces) {
        const interface = interfaces[interfaceName];
        
        for (const addr of interface) {
            // Skip internal and non-IPv4 addresses
            if (addr.family === 'IPv4' && !addr.internal) {
                addresses.push(addr.address);
            }
        }
    }
    
    return addresses;
}

const server = http.createServer((req, res) => {
    // Serve index.html for all requests
    fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end(`Error loading index.html: ${err.code}`);
            return;
        }
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content, 'utf-8');
    });
});

const PORT = 3000;

server.listen(PORT, () => {
    const localIPs = getLocalIpAddresses();
    
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log('You can access this page from your mobile device using one of these URLs:');
    
    localIPs.forEach(ip => {
        console.log(`http://${ip}:${PORT}/`);
    });
}); 