function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function log(message, type = 'info') {
  const prefix = {
    info: '[INFO]',
    warn: '[WARN]',
    error: '[ERROR]',
    success: '[SUCCESS]'
  }[type] || '[INFO]';
  console.log(`${prefix} ${message}`);
}

module.exports = {
  delay,
  formatDate,
  log
};
