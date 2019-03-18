const path = require('path')

module.exports = {
    S3_REGION: 'us-east-1',
    PGDUMP_PATH: path.join(__dirname, '../bin/postgres-10.4')
}
