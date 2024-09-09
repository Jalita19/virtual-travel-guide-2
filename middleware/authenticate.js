function authenticate(req, res, next) {
    // Simple authentication example (not secure for production)
    if (req.query.token === 'your_secret_token') {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

module.exports = authenticate;