const { exec } = require('child_process');

exec('curl -X GET "' . https://blogkeren.web.id/trigger.php?user_id=2&api_key=BKNQcix50qI8 . '"', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: 0`);
    return;
  }
  console.log(`stdout: `);
  console.error(`stderr: `);
});