const del = require('del');

(async () => {
    const deletedPaths = await del(['allure-results', './error_shots/*', './logs/*']);
    console.log('Deleted files and directories:\n', deletedPaths.join('\n'));
})();
